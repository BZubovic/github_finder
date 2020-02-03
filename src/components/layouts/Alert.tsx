import React from 'react';

const Alert = ({ alert }: { alert: any }) => {
  if (alert !== null) {
    return (
      <div className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle' />
        <span> </span>
        {alert.msg}
      </div>
    );
  } else {
    return null;
  }
};
export default Alert;
