import { isPlatform } from '@ionic/react';
import { Plugins } from '@capacitor/core';
import 'scandit-capacitor-datacapture-core';
import 'scandit-capacitor-datacapture-id';

export type IDScanResult = { firstname: string; lastname: string; birthdate: Date }

export const ScanditPlugin = async (onSuccess: (result: IDScanResult) => void, onFail: () => void) => {
    console.log("test !")
    const licence = "AVvB/D58HHcQAdCRLyFd3gwoDDvyJ7LjA1akl+xS9X/yZwYcHUDChNhbjUGRD7g7GE4t4al81YpEHw4x7Ek8u2Uk9yo+Vt6Pm2jwikBJh5IaarequR+AFBs86+asBRxxbD4sM0NokHXhULjbs0DpG6ZgaxUWRqq1QC+JEA9YLpszZ5CbJ0EXp+1JbSVWVVZ+MH6I/4NyNCtAHBamSEZ6Wa930IPZUBCUVFEATE18rRS7ZCiVlCZxJpRmP8HFJ94E+VHGPwpqHEeQSDwrBmrPssJS3kjrUUS0DW/K2j9uo7vjEZtD833WPwIyvNo6YJyqq3xlRJMDd3zwJnmM8lsC1ugrM8tzQn9BQBzn/xZl7Gc7dJqbdWHKCUNwrflIJHEMRF+oDn0jvfVkSPHk/Htuc49U/NEtb6mzilfnsHAGPppbb5AzWA/9ko50Z5q2B4WDLw2/mgJ+M0YQSWjz3m5arytoBtC+D6fGTFYMqzFkjheue2KN62TUZa8xv06EMxiSfjIA6eFGdtSSR1J90VzZelBiAu65frlIQyNTtoOsb4uvxrgNB1tX0hsx7j78snL+GIusdj+7EQQibFX1QKLFq0cIFAlzHblP9qNLbSFDSS1m89f8Ey6k5Z6Nar8AGSIlbEVC9h8IWRt0/ObQ0ZBfNWwZw8m6ejlPtWDVFZ9lf5ePxuIWDS5NxanEvdpRYNAf4FodGvlHEf8G48vlAD4jy4p2CkeDMf5YYjtz68Qk2p9Os0ERHx1SY1q2UTDM8QTYfGA1ZxIFo/RgTvds7I3njEkyOLyk/+InvIEdPGG6hWkZecN8nFMGUeokOkOXGhoM2xJv4DhzadTw4rSthcvwHICbgXP2hvHVW1/Z+dR6vHkGIpVaSh1wdHLCJHyGwGId+C2VS9u0pjTUxWR/skimlun/rdirNA498ck91BHRisekpKKhrPoAvIhbvg8fhRZecTTn2ac6dloI/4GctZTFu3yaBbeSGrZHdk2fCWLrD+dOGxeqHN2dNXSkGip5JDJm4e8NbYyakJZl5I7uQnKgPjAXj6DxSJ5jRYzaa5ATBHAsToc2Src7y6BF3Hz8ZaFP+vD11r0X7onl7KnCftKFNOToGWEKuPKE42UMwel1wZfjE2/kf3cGlPqQYtsz2Nk+SvkdT59G/f7bH9c4UwgkGoJ8rXroQw81zdzrzetzuXUwp7x+e99VkV+Jg+I/FzQxIKbUUCmmGFA6ecU="
    const licence = "AVvB/D58HHcQAdCRLyFd3gwoDDvyJ7LjA1akl+xS9X/yZwYcHUDChNhbjUGRD7g7GE4t4al81YpEHw4x7Ek8u2Uk9yo+Vt6Pm2jwikBJh5IaarequR+AFBs86+asBRxxbD4sM0NokHXhULjbs0DpG6ZgaxUWRqq1QC+JEA9YLpszZ5CbJ0EXp+1JbSVWVVZ+MH6I/4NyNCtAHBamSEZ6Wa930IPZUBCUVFEATE18rRS7ZCiVlCZxJpRmP8HFJ94E+VHGPwpqHEeQSDwrBmrPssJS3kjrUUS0DW/K2j9uo7vjEZtD833WPwIyvNo6YJyqq3xlRJMDd3zwJnmM8lsC1ugrM8tzQn9BQBzn/xZl7Gc7dJqbdWHKCUNwrflIJHEMRF+oDn0jvfVkSPHk/Htuc49U/NEtb6mzilfnsHAGPppbb5AzWA/9ko50Z5q2B4WDLw2/mgJ+M0YQSWjz3m5arytoBtC+D6fGTFYMqzFkjheue2KN62TUZa8xv06EMxiSfjIA6eFGdtSSR1J90VzZelBiAu65frlIQyNTtoOsb4uvxrgNB1tX0hsx7j78snL+GIusdj+7EQQibFX1QKLFq0cIFAlzHblP9qNLbSFDSS1m89f8Ey6k5Z6Nar8AGSIlbEVC9h8IWRt0/ObQ0ZBfNWwZw8m6ejlPtWDVFZ9lf5ePxuIWDS5NxanEvdpRYNAf4FodGvlHEf8G48vlAD4jy4p2CkeDMf5YYjtz68Qk2p9Os0ERHx1SY1q2UTDM8QTYfGA1ZxIFo/RgTvds7I3njEkyOLyk/+InvIEdPGG6hWkZecN8nFMGUeokOkOXGhoM2xJv4DhzadTw4rSthcvwHICbgXP2hvHVW1/Z+dR6vHkGIpVaSh1wdHLCJHyGwGId+C2VS9u0pjTUxWR/skimlun/rdirNA498ck91BHRisekpKKhrPoAvIhbvg8fhRZecTTn2ac6dloI/4GctZTFu3yaBbeSGrZHdk2fCWLrD+dOGxeqHN2dNXSkGip5JDJm4e8NbYyakJZl5I7uQnKgPjAXj6DxSJ5jRYzaa5ATBHAsToc2Src7y6BF3Hz8ZaFP+vD11r0X7onl7KnCftKFNOToGWEKuPKE42UMwel1wZfjE2/kf3cGlPqQYtsz2Nk+SvkdT59G/f7bH9c4UwgkGoJ8rXroQw81zdzrzetzuXUwp7x+e99VkV+Jg+I/FzQxIKbUUCmmGFA6ecU="
    const { ScanditCaptureCorePlugin } = Plugins;
    console.log("foo")
    const Scandit = await ScanditCaptureCorePlugin.initializePlugins()
    console.log("bar")
    const context = Scandit.DataCaptureContext.forLicenseKey(licence);
    const camera = Scandit.Camera.default;
    context.setFrameSource(camera);
    console.log("foo3")

    camera.applySettings(Scandit.IdCapture.recommendedCameraSettings);
    console.log("foo2")

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

    console.log("foo4")

    return idCaptureOverlay

}
