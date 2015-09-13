//below is just some comment -> it is not mandatory, it's just for our understanding.
/**@jsx React.DOM */

var ContainerComponent = React.createClass( {displayName: "ContainerComponent",
  mixins: [ React.addons.LinkedStateMixin ],
  getInitialState: function  () {
    return {
      name : ''
    }
  },
  render: function() {
    return (
      React.createElement("div", {className: ""}, 
      React.createElement(InputBox, {setValue:  this.linkState( 'name') }), 
      React.createElement("h4", null,  this.state.name)
      )
    );
  }
} );


var InputBox = React.createClass( {displayName: "InputBox",
  render: function() {
    return (
      React.createElement("input", {type: "text", valueLink:  this.props.setValue, placeholder: "Type some text"})
    );
  }

});

React.render( React.createElement(ContainerComponent, null) , document.getElementById( 'target' ) );