import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import { bindActionCreators } from 'redux';
import LoginForm from './LoginForm';

class LoginPage extends React.Component {
  constructor(props, context){
    super(props, context);

    this.state = {
        user: Object.assign({}, this.props.user),
        errors: {},
        loging: false
    };

    this.updateUserState = this.updateUserState.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }

  updateUserState(event) {
    const field = event.target.name;
    let user = this.state.user;
    user[field] = event.target.value;
    return this.setState({ user: user});
  }

  userFormIsValid(){
    let formIsValid = true;
    let errors = {};

    if(!this.state.user.email || this.state.user.email.indexOf('@') < 0) {
        errors.email = 'A valid email is required.';
        formIsValid = false;
    }

    if(!this.state.user.password || this.state.user.password.length < 5) {
      errors.password = 'Password must be at least 5 character.';
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  onLogin(event){
    event.preventDefault();

    if(!this.userFormIsValid()){
        return;
    }

    // this.setState({loging: true});
    // this.props.actions.saveCourse(this.state.course)
    // .then(() => this.redirect())
    // .catch(error => {
    //     toastr.error(error);
    //     this.setState({loging: false});
    // });
  }

  render() {
      return (
        <LoginForm
          user={this.state.user}
          onChange={this.updateUserState}
          onLogin={this.onLogin}
          errors={this.state.errors}
          loading={this.state.saving}/>
      );
  }
}

LoginPage.propTypes = {
  user: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps)
{
  let user = {id:'', email:'', password:'', firstName:'', lastName:'', userName:''};
  if(state.user)
  {
    user = state.user;
  }

  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch)
{
  return {
      actions: {}//bindActionCreators(centresActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
