import { Col, Row } from "antd";
import React from "react";
import AcheivementItem from "./AcheivementItem";
import DividerItem from "./DividerItem";
import MarginTop from "./MarginTop";
import Styles from "/styles/scss/web/Acheivements.module.scss";
export default function Acheivements({ theme }) {
  return (
    <Row className="text-center">
      <Col span={24} className="md:hidden block">
        <MarginTop marginTop={96} />
      </Col>
      <Col span={24}>
        <DividerItem theme={theme} text={"Acheivements"} />
      </Col>
      <Col span={24}>
        <div className="md:px-0 px-2">
          <p className={theme ? Styles.lightText : Styles.darkText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. <br /> Lorem Ipsum has been the industry's standard
          </p>
        </div>
      </Col>
      <Col span={24}>
        <MarginTop marginTop={64} />
      </Col>
      <Col md={{ span: 14 }} span={24} className="mx-auto">
        <Row>
          <Col md={{ span: 8 }} span={24}>
            <AcheivementItem
              theme={theme}
              number={"225,753"}
              text="Resume Created"
            />
          </Col>
          <Col md={{ span: 8 }} span={24}>
            <AcheivementItem
              theme={theme}
              number={"124,798"}
              text="Successfully hired"
            />
          </Col>
          <Col md={{ span: 8 }} span={24}>
            <AcheivementItem
              theme={theme}
              number={"1,129,110"}
              text={"Applications"}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
