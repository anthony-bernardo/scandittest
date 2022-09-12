import { IonButton } from '@ionic/react'
import { ScanditPlugin } from '../Scandit'
import './ExploreContainer.css'

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
	return (
		<div className="container">
			<h1>Hi Scandit !</h1>
			<div id="data-capture-view" className="h-72" />
			<IonButton
				onClick={async () => {
					await ScanditPlugin(
						() => console.log('success'),
						() => console.log('error')
					)
				}}
			>
				Launch Scandit
			</IonButton>
		</div>
	)
}

export default ExploreContainer
