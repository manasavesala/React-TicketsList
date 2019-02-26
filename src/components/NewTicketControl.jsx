import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewTicketForm from './NewTicketForm';
import PropTypes from 'prop-types';


class NewTicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleQuestionsCompleted = this.handleQuestionsCompleted.bind(this);
  }

  handleQuestionsCompleted(){
    this.setState({
      formVisibleOnPage: true
    });
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewTicketForm />;
    } else {
      currentlyVisibleContent = <ConfirmationQuestions setQuestionsCompleted = {this.handleQuestionsCompleted} />;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}


export default NewTicketControl;