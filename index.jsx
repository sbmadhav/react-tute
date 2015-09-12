//below is just some comment -> it is not mandatory, it's just for our understanding.
/**@jsx React.DOM */

var Text = React.createClass ( {

  getDefaultProps : function  () {
    return {
      foregroundColor : 'red',
      backgroundColor : 'green',
    };
  },

  render: function() {
    var styles = {
      color : this.props.foregroundColor,
      backgroundColor : this.props.backgroundColor 
    };
    return (
        <p style = {styles}> { this.props.content } </p>
    );
  }
} );

React.render( <Text content ="React js" /> , document.getElementById("target") );