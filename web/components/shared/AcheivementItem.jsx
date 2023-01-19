import React from "react";
import { Col, Row } from "antd";
import Styles from "/styles/scss/web/Acheivements.module.scss";
export default function AcheivementItem({ theme = true, text, number }) {
  return (
    <Row>
      <Col span={24}>
        <div
          className={theme ? Styles.lightAcheivement : Styles.darkAcheivement}
        >
          <p className={theme ? Styles.lightNubmer : Styles.darkNumber}>
            {number}
          </p>
          <p className={theme ? Styles.lightText : Styles.darkText}>{text}</p>
        </div>
      </Col>
    </Row>
  );
}
