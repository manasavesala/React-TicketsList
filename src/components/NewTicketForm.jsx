import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function NewTicketForm(props){
  let _names = null;
  let _location = null;
  let _issue = null;
  

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({
      names: _names.value,
      location: _location.value,
      issue: _issue.value,
      timeOpen: new Moment()
    });
    _names.value = '';
    _location.value = '';
    _issue.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type='text'
          id='names'
          ref={(input) => {_names = input;}}
          placeholder='Pair Names'/>
        <input
          type='text'
          id='location'
          ref={(input) => {_location = input;}}
          placeholder='Location'/>
        <textarea
          id='issue'
          ref={(bullshit) => {_issue = bullshit;}}
          placeholder='Describe your issue.'/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;