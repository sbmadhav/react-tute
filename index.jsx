//below is just some comment -> it is not mandatory, it's just for our understanding.
/**@jsx React.DOM */

var ContainerComponent = React.createClass( {
  mixins: [ React.addons.LinkedStateMixin ],
  getInitialState: function  () {
    return {
      name : ''
    }
  },
  render: function() {
    return (
      <div className = '' >
      <InputBox setValue = { this.linkState( 'name' ) } />
      <h4>{ this.state.name }</h4>
      </div>
    );
  }
} );


var InputBox = React.createClass( {
  render: function() {
    return (
      <input type = 'text' valueLink = { this.props.setValue } placeholder = 'Type some text'/>
    );
  }

});

React.render( <ContainerComponent /> , document.getElementById( 'target' ) );