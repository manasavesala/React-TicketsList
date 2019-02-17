import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props){
  return (
    <div>
      <style jsx>{`
          div {
            background-color: aqua;
          }
        `}</style>
      <h3>{props.location} - {props.names} - {props.ticketId}</h3>
      <p><em>{props.issue}</em></p>
      <hr/>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  ticketId: PropTypes.string
};

export default Ticket;