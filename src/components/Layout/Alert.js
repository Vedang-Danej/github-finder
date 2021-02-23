import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";
const Alert = () => {
  const alertContext = useContext(AlertContext);
  if (alertContext.alert !== null) {
    return (
      <div className={`alert alert-${alertContext.alert.type}`}>
        <i className="fas fa-info-circle" />
        {alertContext.alert.msg}
      </div>
    );
  } else return null;
};

export default Alert;
