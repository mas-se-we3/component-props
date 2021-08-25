const Welcome = props => {
	const disabledMessage = props.disabled
		? 'Your account has been disabled'
		: null

	return (
		<div>
			Hello {props.name}! {disabledMessage}
		</div>
	)
}

export default Welcome
