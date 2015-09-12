//below is just some comment -> it is not mandatory, it's just for our understanding.
/**@jsx React.DOM */
var ComponentA = {
  componentDidUpdate : function  () {
    console.log ( 'A' );
  }
};

var ComponentC = {
  componentDidUpdate : function  () {
    console.log ( 'C' );
  }
};

var ComponentB = React.createClass ( {
  componentDidUpdate : function  () {
    console.log ( 'B' );
  },
  getInitialState : function  () {
    var state = { counter : 1 };

    setInterval( function(){
      this.setState( { counter: ++this.state.counter } );
    }.bind( this ) , 3000 )

    return state;
  },

  render: function() {
    return (
      <div>
        <h1>Counter</h1>
        <p> { this.state.counter } </p>
      </div>
    );
  },
  mixins : [ ComponentA , ComponentC ]
} ); 
React.render( <ComponentB /> , document.getElementById("target") );