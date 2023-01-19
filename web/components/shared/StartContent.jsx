import React from "react";
import { Button, Col, Row } from "antd";
import Styles from "/styles/scss/web/StartContent.module.scss";
export default function StartContent({ theme = true }) {
  return (
    <Row>
      <Col
        span={24}
        className={theme ? Styles.lightWrapper : Styles.darkWrapper}
      >
        <div className={Styles.warpperContent}>
          <div>
            <p className={theme ? Styles.lightTitle : Styles.darkTitle}>
              Create your <span>forever free</span> Resume
            </p>
          </div>
          <div className="md:px-0 px-2">
            <p className={theme ? Styles.lightSubTitle : Styles.darkSubTitle}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. <br /> Lorem Ipsum has been the industry's standard
            </p>
          </div>
          <div>
            <Button className={Styles.button}>Start now</Button>
          </div>
        </div>
      </Col>
      <Col span={24}>
        <div
          className={theme ? Styles.lightBackGray : Styles.darkBackGray}
        ></div>
        <div className={Styles.wrapperImg}>
          <img width="100%" src="/assets/images/svgs/cvs.svg" alt="" />
        </div>
      </Col>
    </Row>
  );
}
