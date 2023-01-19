import React from "react";
import { Button, Col, Row } from "antd";
import RouteItem from "../shared/RouteItem";
import Logo from "/public/assets/images/svgs/logo.svg";
import LogoDark from "/public/assets/images/svgs/dark/logo.svg";
import LogoMobile from "/public/assets/images/svgs/logo-mobile.svg";
import LogoMobileDark from "/public/assets/images/svgs/dark/logo-mobile.svg";
import Moon from "/public/assets/images/svgs/moon.svg";
import MoonDark from "/public/assets/images/svgs/dark/moon.svg";
import Menu from "/public/assets/images/svgs/menu.svg";
import MenuDark from "/public/assets/images/svgs/dark/menu.svg";
import Login from "/public/assets/images/svgs/login.svg";
import Styles from "/styles/scss/web/Header.module.scss";
export default function Header({
  theme,
  setDrawerInputs,
  handleChangeTheme = () => {},
  router,
}) {
  return (
    <Row className={theme ? Styles.lighWrapper : Styles.darkWrapper}>
      <Col span={24} className="md:block hidden">
        <div className="flex justify-between md:p-4 p-2">
          <div>{theme ? <Logo /> : <LogoDark />}</div>
          <div className="flex">
            <RouteItem
              theme={theme}
              active={router.route == "/" ? true : false}
              text={"Home"}
              href={"/"}
            />
            <RouteItem theme={theme} text={"Browse job"} href={"/"} />
            <RouteItem
              theme={theme}
              active={router.route == "/contact-us" ? true : false}
              text={"Contact us"}
              href={"/contact-us"}
            />
            <RouteItem theme={theme} text={"FAQ’S"} href={"/"} />
          </div>
          <div className="flex">
            <Button className={theme ? Styles.lightLogin : Styles.darkLogin}>
              Login
            </Button>
            <Button className={Styles.signup}>SIGNUP</Button>
            <Button
              onClick={handleChangeTheme}
              className={theme ? Styles.lightMoon : Styles.darkMoon}
            >
              {theme ? <Moon /> : <MoonDark />}
            </Button>
          </div>
        </div>
      </Col>
      <Col span={24} className="md:hidden block">
        <div className="flex justify-between items-center md:p-4 p-2">
          <div>
            <Button
              onClick={() =>
                setDrawerInputs((prev) => {
                  return { ...prev, menu: true };
                })
              }
              className={Styles.menuBar}
            >
              {theme ? <Menu /> : <MenuDark />}
            </Button>
          </div>
          <div>{theme ? <LogoMobile /> : <LogoMobileDark />}</div>
          <div>
            <Button
              onClick={() =>
                setDrawerInputs((prev) => {
                  return { ...prev, login: true };
                })
              }
              className={Styles.loginButton}
            >
              <Login />
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  );
}
