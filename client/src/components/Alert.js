import { useAppContex } from "../context/appContext";

function Alert() {
  const { alertType, alertText } = useAppContex()
  return <div className={`alert alert-${alertType}`}>{alertText}</div>;
}

export default Alert;
