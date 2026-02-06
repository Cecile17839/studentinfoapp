import { NavLink } from "react-router-dom";

function HeaderComponent() {
  return (
    <header style={styles.header}>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          ...styles.link,
          color: isActive ? "#00ff7f" : "white",
        })}
      >
        Home
      </NavLink>

      <NavLink
        to="/students"
        style={({ isActive }) => ({
          ...styles.link,
          color: isActive ? "#00ff7f" : "white",
        })}
      >
        Students
      </NavLink>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: "#0b3d0b",
    padding: "15px",
    textAlign: "center",
  },
  link: {
    margin: "0 15px",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "500",
  },
};

export default HeaderComponent;
