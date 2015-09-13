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

 
After Virtual DOM -> DOM update during the render method execution ?

Command to generate the output js from a jsx :

 jsx --follows-requires -x jsx ./ compiled

 Learn more attirbs

 Controlled component vs Uncontrolled component ?  If the state is propagated via react comps then it is controlled else it is not .?