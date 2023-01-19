import React from "react";
import { Row } from "antd";
import PublicLayout from "layouts/PublicLayout";
import Header from "components/includes/Header";
import StartContent from "components/shared/StartContent";
import Acheivements from "components/shared/Acheivements";
import TellUs from "components/shared/TellUs";
import Trait from "components/shared/Trait";
import Testimonials from "components/shared/Testimonials";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
  //***************************
  // Import Hook
  //***************************
  const router = useRouter();
  const dispatch = useDispatch();
  // *********************
  // define Store State
  // *********************
  const themeState = useSelector((state) => state?.theme?.payload);

  return (
    <PublicLayout title="Envire | Hooome">
      <StartContent theme={themeState == "light" ? true : false} />
      <Acheivements theme={themeState == "light" ? true : false} />
      <TellUs theme={themeState == "light" ? true : false} />
      <Trait theme={themeState == "light" ? true : false} />
      <Testimonials theme={themeState == "light" ? true : false} />
    </PublicLayout>
  );
};

export default Dashboard;
