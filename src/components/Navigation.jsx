import styles from "../styles/Navigation.module.css";
import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <Link className={styles.navbar} to="/" style={{ textDecoration: 'none' }}>
        모든 영화
      </Link>
    </nav>
  );
};

export default Navigation;
