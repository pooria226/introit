import ContactContent from "components/shared/ContactContent";
import MarginTop from "components/shared/MarginTop";
import TellUs from "components/shared/TellUs";
import PublicLayout from "layouts/PublicLayout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
export default function ContactUs() {
  //***************************
  // Import Hook
  //***************************
  const router = useRouter();
  const dispatch = useDispatch();
  // *********************
  // define Store State
  // *********************
  const themeState = useSelector((state) => state?.theme?.payload);
  // *********************
  // define State
  // *********************
  const [inputs, setInputs] = useState({
    firstName: null,
    lastName: null,
    email: null,
    message: null,
    phone: null,
  });
  return (
    <PublicLayout title="Envire | Contact Us">
      <ContactContent
        inputs={inputs}
        setInputs={setInputs}
        theme={themeState == "light" ? true : false}
      />
      <TellUs theme={themeState == "light" ? true : false} />
      <MarginTop marginTop={96} />
    </PublicLayout>
  );
}
