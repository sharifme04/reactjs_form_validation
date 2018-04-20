import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import validateInput from './singupValidation';

export default class Home  extends React.Component{
  constructor(props) {
  super(props);
  this.state = {
    firstname: '',
    lastname: '',
    middlename: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    checkbox: false,
    errors: {}
    };

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;

  this.setState({
    [name]: value
  });
}

isValid(){
  const { errors, isValid } = validateInput(this.state);
  if (!isValid) {
    this.setState({ errors });
  }
  return isValid;
}

  handleSubmit(event) {
    event.preventDefault();
    if (this.isValid()) {
      this.props.history.push('/successignup');
    }
  }

  render() {
     const { errors } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="form-horizontal col-sm-6 col-md-offset-3 col-xs-offset-1">
        <div className="form-group">
           <button  className="btn button-facebook">Über Facebook registrieren</button>
          </div>
              <div className={classnames("form-group", {"has-error":errors.firstname})}>
               <label className="control-label">First Name:</label>
               <div className="input-group">
               <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                 <input
                 value={this.state.firstname}
                 onChange={this.handleChange}
                 type="text"
                 className="form-control"
                 name="firstname"
                 placeholder="Enter firstname"/>
               </div>
               {errors.firstname && <span className="help-block">{errors.firstname}</span>}
              </div>
              <div className={classnames("form-group", {"has-error":errors.lastname})}>
               <label className="control-label">Last Name:</label>
               <div className="input-group">
               <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                 <input
                 value={this.state.lastname}
                 onChange={this.handleChange}
                 type="text"
                 className="form-control"
                 name="lastname"
                 placeholder="Enter lastname"/>
               </div>
               {errors.lastname && <span className="help-block">{errors.lastname}</span>}
              </div>
              <div className={classnames("form-group", {"has-error":errors.middlename})}>
               <label className="control-label">Middle Name:</label>
               <div className="input-group">
               <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                 <input
                 value={this.state.middlename}
                 onChange={this.handleChange}
                 type="text"
                 className="form-control"
                 name="middlename"
                 placeholder="Enter username"/>
               </div>
               {errors.middlename && <span className="help-block">{errors.middlename}</span>}
              </div>
              <div className={classnames("form-group", {"has-error":errors.email})}>
               <label className="control-label">Email:</label>
               <div className="input-group">
               <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
                 <input
                 value={this.state.email}
                 onChange={this.handleChange}
                 type="email"
                 className="form-control"
                 name="email"
                 placeholder="Enter email"/>
               </div>
               {errors.email && <span className="help-block">{errors.email}</span>}
              </div>

              <div className={classnames("form-group", {"has-error":errors.password})}>
               <label className="control-label">Password:</label>
               <div className="input-group">
               <span className="input-group-addon"><i className="glyphicon glyphicon-eye-close"></i></span>
                 <input
                 value={this.state.password}
                 onChange={this.handleChange}
                 type="password"
                 className="form-control"
                 name="password"
                 placeholder="Enter password"/>
               </div>
               {errors.password && <span className="help-block">{errors.password}</span>}
              </div>

              <div className={classnames("form-group", {"has-error":errors.passwordConfirmation})}>
               <label className="control-label">Password Confirmation:</label>
               <div className="input-group">
               <span className="input-group-addon"><i className="glyphicon glyphicon-eye-close"></i></span>
                 <input
                 value={this.state.passwordConfirmation}
                 onChange={this.handleChange}
                 type="password"
                 className="form-control"
                 name="passwordConfirmation"
                 placeholder="Password confirmation"/>
                 <span className="input-group-addon"><input type="checkbox"/>Anzeigen</span>
               </div>
               {errors.passwordConfirmation && <span className="help-block">{errors.passwordConfirmation}</span>}
              </div>

              <div className={classnames("form-group", {"has-error":errors.checkbox})}>
               <div >
               <label className="control-label">
                 <input
                 checked={this.state.checkbox}
                 onChange={this.handleChange}
                 type="checkbox"
                 name="checkbox"
                />
                I am agree with term and conditon</label>
               </div>
               {errors.checkbox && <span className="help-block">{errors.checkbox}</span>}
              </div>

              <div className="form-group">
               <div>
                 <button type="submit" value="Submit" className="btn btn-primary button-submit-size">Jetzt registrieren</button>
               </div>
              </div>
          </form>
      </div>
    );
  }

}
