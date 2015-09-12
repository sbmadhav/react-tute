React LifeCycles:

Initial Render 
	- getDefaultProps
	- getInitialState
	- componentWillMount
	- render
	- componentDidMount

Components Properties are chanegd
	- componentWillReceiveProps
	- shouldComponentUpdate
	- componentWillUpdate
	- render
	- componentDidUpdate

Components States are chanegd
	- shouldComponentUpdate
	- componentWillUpdate
	- render
	- componentDidUpdate

Component is removed
	- componentWillUnmount


After Virtual DOM -> DOM update happens the 'will' methods execute