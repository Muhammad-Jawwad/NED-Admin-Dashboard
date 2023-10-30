import "./sidebar.scss";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import { Link } from "react-router-dom";

const Sidebar = () => {

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <span className="logo">NED Admin Dashboard</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <>
            <p className="title">LISTS</p>
              <Link to= "/categories" style={{ textDecoration: "none" }}>
              <li>
                <CategoryOutlinedIcon className="icon" />
                <span>Categories</span>
              </li> 
            </Link>
          </>
          <p className="title">USER</p>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Profile</span>
            </li>
          </Link>
          <li onClick={() => { localStorage.clear() }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <ExitToAppIcon className="icon" />
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
      {/* <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div> */}
    </div>
  );
};

export default Sidebar;
