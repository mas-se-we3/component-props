import Welcome from './Welcome'

const App = () => {
	return (
		<div>
			<Welcome name="Alex" disabled={false} />
			<Welcome name="Mark" />
			<Welcome name="Finn" disabled />
		</div>
	)
}

export default App
