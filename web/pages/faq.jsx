import FaqContent from "components/shared/FaqContent";
import MarginTop from "components/shared/MarginTop";
import TellUs from "components/shared/TellUs";
import PublicLayout from "layouts/PublicLayout";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
export default function Faq() {
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
    <PublicLayout title="Envire | Faq">
      <FaqContent theme={themeState == "light" ? true : false} />
      <TellUs theme={themeState == "light" ? true : false} />
      <MarginTop marginTop={96} />
    </PublicLayout>
  );
}
