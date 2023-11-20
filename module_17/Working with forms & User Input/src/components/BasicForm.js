

import useInput from '../hooks/use-input'


const BasicForm = (props) => {


  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastnameHasError,
    valueChangeHandler: lastnameChangeHandler,
    inputBlurHandler: lastnameBlurHandler,
    reset: resetLastNameInput
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstnameHasError,
    valueChangeHandler: firstnameChangeHandler,
    inputBlurHandler: firstnameBlurHandler,
    reset: resetFirstNameInput
  } = useInput(value => value.trim() !== '');


  let formIsValid = false;

  if (enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();


    if (!enteredFirstNameIsValid && !enteredLastNameIsValid && !enteredEmailIsValid) {
      return;
    }


    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    resetFirstNameInput()
    resetLastNameInput()
    resetEmailInput()

  };

  const firstnameInputClasses = firstnameHasError
    ? 'form-control invalid'
    : 'form-control';


  const lastnameInputClasses = lastnameHasError
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';






  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={firstnameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            value={enteredFirstName}
            onBlur={firstnameBlurHandler}
            onChange={firstnameChangeHandler}
          />
          {firstnameHasError && (
            <p className='error-text'>Please enter a valid Firstname.</p>
          )}
        </div>
        <div className={lastnameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text'
            id='name'
            value={enteredLastName}
            onBlur={lastnameBlurHandler}
            onChange={lastnameChangeHandler} />
          {lastnameHasError && (
            <p className='error-text'>Please enter a valid Lastname.</p>
          )}
        </div>

      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail} />
        {emailInputHasError && (
          <p className='error-text'>Please enter a valid emailAddress.</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
