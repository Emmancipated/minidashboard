import React from "react";
import { NotificationBell, SearchIconBigScreen, SearchIconMiniScreen } from "../assets/Svgs";
import logo from "../assets/mock-logo.jpg";
import dp from "../assets/dp.jpg";

interface HeaderProps {
  onClickHandler: () => void
}

const Header = (props: HeaderProps):React.JSX.Element => {
  const { onClickHandler } = props;
  
  return (
    <section className="Header">
      <div className="logo"><img src={logo} alt="logo" /> </div>
      <div className="nav-container">
        <h4 className="nav-item-name">Dashboard</h4>
        <div className="nav-item-controls">
          <div className="searchbar-container">
            <SearchIconBigScreen />
            <input type="search" name="searcher" id="searcher" placeholder="search..."/>
          </div>
          <div className="user-section">
            <div className="notifications-container">
              <NotificationBell />
            </div>
            <div className="user-container">
              <div className="user-image-wrapper">
                <img src={dp} alt="dp" />
              </div>
              <div className="user-details">
                <h3>Emmanuel Kalu</h3>
                <p>Admin</p>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-item-controls-small">
          <div className="search-icon-small">
            <SearchIconMiniScreen/>
          </div>
          <div className="hamburger" onClick={onClickHandler}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header;