import React from "react";
import TermsContent from "components/shared/TermsContent";
import PublicLayout from "layouts/PublicLayout";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import TellUs from "components/shared/TellUs";
import MarginTop from "components/shared/MarginTop";
export default function Terms() {
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
    <PublicLayout title="Envire | Terms">
      <TermsContent theme={themeState == "light" ? true : false} />
      <TellUs theme={themeState == "light" ? true : false} />
      <MarginTop marginTop={96} />
    </PublicLayout>
  );
}
