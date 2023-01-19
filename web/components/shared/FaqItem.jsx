import React from "react";
import { Col, Collapse, Row } from "antd";
import Mines from "/public/assets/images/svgs/mines.svg";
import Plus from "/public/assets/images/svgs/plus.svg";
import MinesDark from "/public/assets/images/svgs/dark/mines.svg";
import PlusDark from "/public/assets/images/svgs/dark/plus.svg";
export default function FaqItem({ title, text, theme }) {
  return (
    <Row>
      <Col span={24}>
        <Collapse
          className="collapse-faq"
          expandIcon={({ isActive }) => {
            return isActive ? (
              theme ? (
                <Mines />
              ) : (
                <MinesDark />
              )
            ) : theme ? (
              <Plus />
            ) : (
              <PlusDark />
            );
          }}
          defaultActiveKey={["1"]}
          expandIconPosition={"right"}
        >
          <Collapse.Panel header={title} key="1">
            <div>{text}</div>
          </Collapse.Panel>
        </Collapse>
      </Col>
    </Row>
  );
}
