import React, { useState } from "react";
import { Button, Form } from "antd";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Styles from "/styles/scss/web/PhoneItem.module.scss";
import Label from "/styles/scss/web/TextItem.module.scss";

import Error from "./Error";
export default function PhoneItem({
  theme,
  placeholder = "",
  onChange = () => {},
  value,
  label = "phone",
  isWrong = false,
  help,
}) {
  //***************************
  // Define State
  //***************************
  const [active, setActive] = useState(false);
  //***************************
  // Define Custome Styles
  //***************************
  const labelStyle = {
    zIndex: 99,
    pointerEvents: "none",
    transition: "0.2s ease all",
    transform: "translate(0, 2rem) scale(1)",
    marginLeft: 54,
  };
  const floatingLabel = {
    transform: "translate(0, -0.3rem) scale(1)",
    marginLeft: 0,
  };
  //***************************
  // Define function
  //***************************
  const onBlur = () => {
    setActive(false);
  };
  const onFocus = () => {
    setActive(true);
  };
  return (
    <Form.Item
      validateStatus={isWrong ? "error" : null}
      help={isWrong ? <Error text={help} /> : null}
      colon={false}
      labelAlign="left"
      style={{ width: "100%", marginTop: 8 }}
      className="position-relative"
    >
      <div style={{ display: "flex", flexFlow: "column-reverse" }}>
        <PhoneInput
          onBlur={onBlur}
          onFocus={onFocus}
          inputClass={isWrong ? "ant-input-status-error" : ""}
          style={{ width: "100%" }}
          type="tel"
          name="phone"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          enableSearch={true}
          disableSearchIcon={true}
          searchClass={theme ? Styles.lightInput : Styles.darkInput}
        />
        <span
          className={theme ? Label.lightLabel : Label.darkLabel}
          style={active || value ? floatingLabel : labelStyle}
        >
          {label}
        </span>
      </div>
    </Form.Item>
  );
}
