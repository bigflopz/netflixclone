import React from "react";
import NetflixLogo from "../NetflixLogo.svg";
import "./Header.css"
import Button from "./Button";
import ButtonIcon from "./ButtonIcon";
import Search from "../search.svg"
import Bell from "../bell.svg"
import Icon from "../girlicon.jpg"

function Header() {
  return (
    <header>
      <div className="header">
        <img src={NetflixLogo} className="logo" />
        <div className="container">
        <Button name="Home"/>
        <Button name="Tv Shows"/>
        <Button name="Movies"/>
        <Button name="Recently Added"/>
        <Button name="My List"/>
        </div>
        <div className="container">
        <ButtonIcon icon={Search}/>
        <ButtonIcon icon={Bell}/>
        <ButtonIcon className="iconpic"icon={Icon}/>
        </div>
      </div>
    </header>
  );
}
export default Header;
