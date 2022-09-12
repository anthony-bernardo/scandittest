import 'scandit-capacitor-datacapture-core';
import 'scandit-capacitor-datacapture-id';
import { Plugins } from '@capacitor/core';


export type IDScanResult = { firstname: string; lastname: string; birthdate: Date }

export const ScanditPlugin = async (onSuccess: (result: IDScanResult) => void, onFail: () => void) => {
    console.log("test !")
    const licence = "ADD_LICENCE_HERE"
    const { ScanditCaptureCorePlugin } = Plugins;
    console.log("foo")
    const Scandit = await ScanditCaptureCorePlugin.initializePlugins()
    console.log("bar")
    const context = Scandit.DataCaptureContext.forLicenseKey(licence);
    const camera = Scandit.Camera.default;
    context.setFrameSource(camera);
    console.log("bar2")

    camera.applySettings(Scandit.IdCapture.recommendedCameraSettings);
    console.log("bar3")

    const settings = new Scandit.IdCaptureSettings();
    settings.supportedDocuments = [
        Scandit.IdDocumentType.IdCardMRZ,
        Scandit.IdDocumentType.SwissDLMRZ
    ]

    const view = Scandit.DataCaptureView.forContext(context);
    console.log("view", document.getElementById('data-capture-view'))
    view.connectToElement(document.getElementById('data-capture-view'));
    camera.switchToDesiredState(Scandit.FrameSourceState.On);

    const idCapture = Scandit.IdCapture.forContext(context, settings);
    idCapture.addListener({
        didCaptureId: (_: any, session: any) => {

            if (session.newlyCapturedId == null) {
                return
            }

            const { firstName, lastName, dateOfBirth: { day, month, year } } = session.newlyCapturedId.json.mrzResult;

            idCapture.isEnabled = false;

            onSuccess({
                firstname: firstName,
                lastname: lastName,
                birthdate: new Date(year, month, day)
            })

            view.disconnectFromElement();
            idCapture.removeListener();
        },

        didFailWithError: (_: any, error: any, session: any) => {
            console.error(error)
            onFail()
        }
    });

    const idCaptureOverlay = Scandit.IdCaptureOverlay.withIdCaptureForView(idCapture, view);
    idCaptureOverlay.idLayoutStyle = Scandit.IdLayoutStyle.Square;

    idCapture.isEnabled = true;

    console.log("bar4")

    return idCaptureOverlay

}
