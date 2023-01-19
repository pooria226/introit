import React from "react";
import { Button, Modal, Spin } from "antd";
import Styles from "/styles/scss/dashboard/ThemeModal.module.scss";

import Close from "/public/assets/images/svgs/close-icon.svg";
import ImageProvider from "providers/ImageProvider";

export default function ThemeModal({
  visible,
  handleClose,
  theme,
  onClick,
  loader,
}) {
  //***************************
  // define useState
  //***************************

  return (
    <Modal
      footer={false}
      closable={false}
      visible={visible}
      centered={true}
      width={900}
      className="theme-modal"
    >
      <div className={Styles.wrapperClose}>
        <Button onClick={handleClose} className={Styles.close}>
          <Close />
        </Button>
      </div>
      <div>
        <Button className={Styles.lightButton}>LIGHT</Button>
        <Button className={Styles.darkButton}>DARK</Button>
        <Button className={Styles.gradientButton}>GRADIENT</Button>
        <Button className={Styles.coloredButton}>COLORED</Button>
      </div>
      <div className="pt-4 px-2">
        <div>
          <ImageProvider
            width={184}
            height={257}
            src={"/assets/images/cvs/amesterdam.jpg"}
          />
        </div>
      </div>
      <div className={Styles.footer}>
        <Button
          onClick={handleClose}
          className={theme ? Styles.lightEdit : Styles.darkEdit}
        >
          edit
        </Button>
        <Button disabled={loader} onClick={onClick} className={Styles.download}>
          {loader ? <Spin /> : "Download Resume"}
        </Button>
      </div>
    </Modal>
  );
}
