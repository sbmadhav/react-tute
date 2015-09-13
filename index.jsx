//below is just some comment -> it is not mandatory, it's just for our understanding.
/**@jsx React.DOM */

var GitHubProfile = React.createClass( {
  getInitialState: function  () {
    return {};
  },

  componentDidMount: function  () {
    var self = this;
    $.get( 'https://api.github.com/users/' + this.props.login , function  ( data ) {

      self.setState( data );

    } );
  },

  render: function() {
    return (
      <div>
        <img src = { this.state.avatar_url } width = '80' />
        <h3>{ this.state.name }</h3>   
      </div>
    );
  }

});

var Form = React.createClass( {

  onSubmit : function  ( e ) {
    e.preventDefault();
    var loginInput = React.findDOMNode( this.refs.login );
    this.props.addGitHubProfile( loginInput.value );
    loginInput.value = '';
  },

  render: function() {
    return (
       <form onSubmit = { this.onSubmit }>
        <input ref='login' placeholder= 'Please enter your Github login' />
        <button>Submit</button>
      </form>
    );
  }

} );

var Main = React.createClass( {

  getInitialState: function  () {
    return { logins: [] };
  },

  addGitHubProfile : function  ( login ) {
    this.setState( { logins: this.state.logins.concat( login ) } );
  },

  render: function() {
    var githubprofiles = this.state.logins.map( function  ( login ) {
      return ( <GitHubProfile login = { login } /> );
    });
    return (
      <div>
        <Form addGitHubProfile = { this.addGitHubProfile } />
        <hr />
        { githubprofiles }
      </div>
    );
  }

} );

React.render( <Main /> , document.getElementById( 'target' ) );