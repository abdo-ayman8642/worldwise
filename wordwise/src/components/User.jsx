import { useNavigate } from "react-router-dom";
import styles from "./User.module.css";

function User() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <div className={styles.user}>
      {/* <img src={user.avatar} alt={user.name} /> */}
      <span>Welcome, {"Abdelrahman"}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default User;
