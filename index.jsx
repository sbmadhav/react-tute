//below is just some comment -> it is not mandatory, it's just for our understanding.
/**@jsx React.DOM */
var FormComponent = React.createClass( {
  getInitialState: function  () {
    return { init: '' };
  },
  handleChangeEvent: function( e ){
    this.setState( { init : e.target.value } );
    // console.log( e.target.value );
  },
  render: function() {
    return (
      <input type = 'text' onChange = { this.handleChangeEvent } value = { this.state.init } placeholder = 'Type some text'/>
    );
  }

});

React.render( <FormComponent /> , document.getElementById( 'target' ) );