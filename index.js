/**@jsx React.DOM */

var Text = React.createClass ( {

  render: function() {
    return React.DOM.p(null, this.props.content)
  }

} );

React.render( React.createElement ( Text,  { content : "React js" } ) , document.getElementById( "target" ) );