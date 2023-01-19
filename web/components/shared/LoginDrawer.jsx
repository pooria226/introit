import React from "react";
import { Button, Col, Drawer, Row } from "antd";
import CloseIcon from "/public/assets/images/svgs/close.svg";
import CloseIconDark from "/public/assets/images/svgs/dark/close.svg";
import Styles from "/styles/scss/web/MenuDrawer.module.scss";
import Moon from "/public/assets/images/svgs/moon.svg";
import MoonDark from "/public/assets/images/svgs/dark/moon.svg";
import LogoMobile from "/public/assets/images/svgs/logo-mobile.svg";
import LogoMobileDark from "/public/assets/images/svgs/dark/logo-mobile.svg";
import Link from "next/link";
export default function LoginDrawer({
  open,
  onClose,
  theme = true,
  handleChangeTheme,
}) {
  return (
    <Drawer
      placement={"right"}
      closable={false}
      onClose={onClose}
      visible={open}
      key={"left"}
      className="menu-drawer"
    >
      <Row className="flex  justify-between   h-full">
        <Col span={24} className="h-1/3">
          <div className="flex justify-between px-4 pt-4">
            <Button className={Styles.closeButton} onClick={onClose}>
              {theme ? <CloseIcon /> : <CloseIconDark />}
            </Button>
            <Button
              onClick={handleChangeTheme}
              className={theme ? Styles.lightMoon : Styles.darkMoon}
            >
              {theme ? <Moon /> : <MoonDark />}
            </Button>
          </div>
        </Col>
        <Col span={24} className="h-1/3">
          <div className="flex flex-col justify-center items-center">
            <div className="pb-10 mb-4 w-full text-center">
              <Link href={"/"}>
                <a className={theme ? Styles.lightLink : Styles.darkLink}>
                  Login
                </a>
              </Link>
            </div>
            <div className="pb-8 w-full text-center">
              <Link href={"/"}>
                <a className={theme ? Styles.lightLink : Styles.darkLink}>
                  SIGNUP
                </a>
              </Link>
            </div>
          </div>
        </Col>
        <Col span={24} className="h-1/3">
          <div className="flex justify-center items-end h-full pb-4">
            {theme ? <LogoMobile /> : <LogoMobileDark />}
          </div>
        </Col>
      </Row>
    </Drawer>
  );
}
