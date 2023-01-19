import React from "react";
import { Col, Row } from "antd";
import DividerItem from "./DividerItem";
import MarginTop from "./MarginTop";
import Styles from "/styles/scss/web/Trait.module.scss";
import TraitItem from "./TraitItem";
import UserIcon from "/public/assets/images/svgs/user.svg";
import NotifIcon from "/public/assets/images/svgs/notif.svg";
import TelIcon from "/public/assets/images/svgs/tel.svg";

export default function Trait({ theme }) {
  return (
    <Row>
      <Col span={24} className="md:block hidden">
        <MarginTop marginTop={128} />
      </Col>
      <Col span={24} className="md:hidden block">
        <MarginTop marginTop={96} />
      </Col>
      <Col span={24} className="text-center">
        <DividerItem theme={theme} text={"Here’s is why you’ll love Envire"} />
      </Col>
      <Col span={24}>
        <MarginTop marginTop={37} />
      </Col>
      <Col span={24} className="text-center">
        <div className="md:px-0 px-2">
          <p className={theme ? Styles.lightText : Styles.darkText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's <br /> standard dummy
            text ever since
          </p>
        </div>
      </Col>
      <Col span={24}>
        <MarginTop marginTop={37} />
      </Col>
      <Col span={24}>
        <Row>
          <Col md={{ span: 8 }} span={24}>
            <TraitItem
              theme={theme}
              icon={<UserIcon />}
              title="Forever"
              text={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been."
              }
              forever={true}
            />
          </Col>
          <Col md={{ span: 8 }} span={24}>
            <TraitItem
              theme={theme}
              icon={<NotifIcon />}
              title="Quick & easy"
              text={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been."
              }
            />
          </Col>
          <Col md={{ span: 8 }} span={24}>
            <TraitItem
              theme={theme}
              multy={true}
              icon={<TelIcon />}
              title="Multilingual"
              text={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been."
              }
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
