import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleEmailDetails } from '../../redux/actions/emailActions';

const EmailItem = ({ email }) => {
  const dispatch = useDispatch();
  const expandedEmailId = useSelector(state => state.emails.expandedEmailId);
  const isExpanded = email.id === expandedEmailId;

  const handleToggle = () => {
    dispatch(toggleEmailDetails(email.id));
  };

  return (
    <div className="card mb-2">
      <div 
        className="card-header d-flex justify-content-between align-items-center" 
        onClick={handleToggle}
        style={{ cursor: 'pointer' }}
      >
        <div>
          <h5 className="mb-0">{email.subject}</h5>
          <small>Sent on {email.sent_on}</small>
        </div>
        <span className={`chevron-icon ${isExpanded ? 'expanded' : ''}`}>
          {isExpanded ? '▼' : '▶'}
        </span>
      </div>
      
      {isExpanded && (
        <div className="card-body">
          <p>{email.crm_status}</p>
          <div className="row">
            <div className="col-md-3">
              <strong>Sent:</strong> {email.sent}
            </div>
            <div className="col-md-3">
              <strong>Opened:</strong> {email.opened}
            </div>
            <div className="col-md-3">
              <strong>Clicked:</strong> {email.clicked}
            </div>
            <div className="col-md-3">
              <strong>Replied:</strong> {email.replied}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(EmailItem);