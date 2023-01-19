import React from "react";
import { Button, Col, Row } from "antd";
import Styles from "/styles/scss/web/Tellus.module.scss";
import TellIcon from "/public/assets/images/svgs/tell.svg";
import MarginTop from "./MarginTop";
export default function TellUs({ theme = true }) {
  return (
    <Row>
      <Col span={24} className="md:block hidden">
        <MarginTop marginTop={128} />
      </Col>
      <Col span={24} className="md:hidden block">
        <MarginTop marginTop={96} />
      </Col>
      <Col span={24}>
        <div className={Styles.wrapper}>
          <div>
            <p className={Styles.text}>
              Don't see the Job you were looking for? <br />{" "}
              <span>tell us more about yourself</span>
            </p>
            <div className={Styles.wrapperIcon}>
              <TellIcon />
            </div>
          </div>
          <div className="md:block hidden">
            <Button className={Styles.button}>Create you CV</Button>
          </div>
          <div className="w-full text-center md:hidden block">
            <Button className={Styles.button}>Create you CV</Button>
          </div>
        </div>
      </Col>
    </Row>
  );
}
