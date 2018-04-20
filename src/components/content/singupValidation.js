import Validator from 'validator';
import isEmpty  from 'lodash/isEmpty';

export default  function validateInput(data) {
  let errors = {};

   if (Validator.isEmpty(data.firstname)) {
     errors.firstname = 'Firstname is required';
   }
   if (Validator.isEmpty(data.lastname)) {
     errors.lastname = 'Lastname is required';
   }
   if (Validator.isEmpty(data.middlename)) {
     errors.middlename = 'Middlename is required';
   }
   if (Validator.isEmpty(data.email)) {
     errors.email = 'Email is required';
   }
   if (!Validator.isEmail(data.email)) {
     errors.email = 'Email is invalid';
   }
   if (Validator.isEmpty(data.password)) {
     errors.password = 'Password is required';
   }
   if (Validator.isEmpty(data.passwordConfirmation)) {
     errors.passwordConfirmation = 'Password is required';
   }
   if (data.checkbox===false) {
    errors.checkbox ='Please agree with term and condition';
   }
    if (!Validator.equals(data.password, data.passwordConfirmation)) {
      errors.password = 'password did not match';
    }
  return {
    errors,
    isValid:isEmpty(errors)
  }
}
