import React, { useState } from "react";
import { Form, Input } from "antd";
import Styles from "/styles/scss/dashboard/PasswordItem.module.scss";
import Eye from "/public/assets/images/svgs/eye-icon.svg";
import EyeSlash from "/public/assets/images/svgs/eye-slash-icon.svg";
import EyeDark from "/public/assets/images/svgs/dark/eye-icon.svg";
import EyeSlashDark from "/public/assets/images/svgs/dark/eye-slash-icon.svg";
import Error from "../Error";
export default function PasswordItem({
  theme,
  placeholder,
  onChange = () => {},
  name,
  value,
  isWrong = false,
  help,
  label,
}) {
  //***************************
  // Define State
  //***************************
  const [active, setActive] = useState(false);
  //***************************
  // Define Custome Styles
  //***************************
  const labelStyle = {
    zIndex: 1,
    pointerEvents: "none",
    transition: "0.2s ease all",
    transform: "translate(0, 2.1rem) scale(1)",
    marginLeft: 10,
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
      validateStatus={isWrong ? "error" : ""}
      help={isWrong ? <Error text={help} /> : null}
      colon={false}
      labelAlign="left"
    >
      <div style={{ display: "flex", flexFlow: "column-reverse" }}>
        <Input.Password
          onBlur={onBlur}
          onFocus={onFocus}
          className={theme ? Styles.lightInput : Styles.darkInput}
          name={name}
          value={value}
          onChange={(e) => {
            onChange((prev) => {
              return {
                ...prev,
                [e.target.name]: e.target.value,
              };
            });
          }}
          iconRender={(visible) =>
            theme ? (
              visible ? (
                <Eye />
              ) : (
                <EyeSlash />
              )
            ) : visible ? (
              <EyeDark />
            ) : (
              <EyeSlashDark />
            )
          }
        />
        <span
          className={theme ? Styles.lightLabel : Styles.darkLabel}
          style={active || value ? floatingLabel : labelStyle}
        >
          {label}
        </span>
      </div>
    </Form.Item>
  );
}
