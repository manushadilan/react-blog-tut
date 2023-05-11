import './settings.css';
import Sidebar from '../../components/sidebar/SideBar';

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            ></img>
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-regular fa-circle-user"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: 'none' }}
            ></input>
          </div>
          <label>UserName</label>
          <input type="text" placeholder="Manusha"></input>
          <label>Email</label>
          <input type="email" placeholder="test@gmail.com"></input>
          <label>Password</label>
          <input type="password"></input>
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
