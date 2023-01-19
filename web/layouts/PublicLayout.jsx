import React, { useState } from "react";
import Head from "next/head";
import SiteBody from "./Body";
import LoadingProvider from "providers/LoadingProvider";
import Header from "components/includes/Header";
import { BackTop } from "antd";
import TopIcon from "/public/assets/images/svgs/totop.svg";
import TopIconDark from "/public/assets/images/svgs/dark/totop.svg";
import Footer from "components/includes/Footer";
import MenuDrawer from "components/shared/MenuDrawer";
import { useRouter } from "next/router";
import LoginDrawer from "components/shared/LoginDrawer";
import { useDispatch, useSelector } from "react-redux";
import { activeDarkTheme, activeLightTheme } from "store/actions/theme";
export default function PublicLayout({ children, title, theme }) {
  //***************************
  // Import Hook
  //***************************
  const router = useRouter();
  const dispatch = useDispatch();
  // *********************
  // define Store State
  // *********************
  const themeState = useSelector((state) => state?.theme?.payload);
  //***************************
  // Define State
  //***************************
  const [drawerInputs, setDrawerInputs] = useState({
    menu: false,
    login: false,
  });

  //***************************
  // Define Function
  //***************************
  const handleChangeTheme = () => {
    if (themeState == "dark") dispatch(activeLightTheme());
    else dispatch(activeDarkTheme());
  };

  return (
    <SiteBody theme={themeState == "light" ? true : false}>
      <Head>
        <title>{title}</title>
      </Head>
      <LoadingProvider>
        <div>
          <div>
            <Header
              router={router}
              theme={themeState == "light" ? true : false}
              handleChangeTheme={handleChangeTheme}
              setDrawerInputs={setDrawerInputs}
            />
            <MenuDrawer
              theme={themeState == "light" ? true : false}
              router={router}
              onClose={() =>
                setDrawerInputs((prev) => {
                  return { ...prev, menu: false };
                })
              }
              open={drawerInputs.menu}
            />
            <LoginDrawer
              theme={themeState == "light" ? true : false}
              handleChangeTheme={handleChangeTheme}
              onClose={() =>
                setDrawerInputs((prev) => {
                  return { ...prev, login: false };
                })
              }
              open={drawerInputs.login}
            />
          </div>
          <div>{children}</div>
          <div>
            <Footer theme={themeState == "light" ? true : false} />
          </div>
        </div>
        <BackTop>
          {themeState == "light" ? <TopIcon /> : <TopIconDark />}
        </BackTop>
      </LoadingProvider>
    </SiteBody>
  );
}
