import React from "react";
import { Col, Row } from "antd";
import DividerItem from "./DividerItem";
import Styles from "/styles/scss/web/FaqContent.module.scss";
import MarginTop from "./MarginTop";
import FaqItem from "./FaqItem";
import Link from "next/link";
export default function FaqContent({ theme }) {
  return (
    <Row className={theme ? Styles.lightWrapper : Styles.darkWrapper}>
      <Col span={24} className="text-center pt-6">
        <DividerItem theme={theme} text="Frequently asked questions" />
      </Col>
      <Col span={24}>
        <MarginTop marginTop={74} />
      </Col>
      <Col md={{ span: 18 }} span={24} className="mx-auto">
        <FaqItem
          theme={theme}
          title={
            "How can I find out who is the hiring manager or lead recruiter on this posting?"
          }
          text={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          }
        />
      </Col>
      <Col md={{ span: 18 }} span={24} className="mx-auto mt-5">
        <FaqItem
          theme={theme}
          title={
            "How can I find out who is the hiring manager or lead recruiter on this posting?"
          }
          text={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          }
        />
      </Col>
      <Col md={{ span: 18 }} span={24} className="mx-auto mt-5">
        <FaqItem
          theme={theme}
          title={
            "How can I find out who is the hiring manager or lead recruiter on this posting?"
          }
          text={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          }
        />
      </Col>
      <Col md={{ span: 18 }} span={24} className="mx-auto mt-5">
        <FaqItem
          theme={theme}
          title={
            "How can I find out who is the hiring manager or lead recruiter on this posting?"
          }
          text={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          }
        />
      </Col>
      <Col span={24}>
        <MarginTop marginTop={74} />
      </Col>
      <Col span={24} className="text-center">
        <div>
          <p className={theme ? Styles.lightTitle : Styles.darkTitle}>
            Still have a question?
          </p>
          <p className={theme ? Styles.lightText : Styles.darkText}>
            If you still have a question related to any issue, please
            <Link href="/contact-us">
              <a> contact us</a>
            </Link>{" "}
            or <br /> email us you quirries at <a>support@enviretech.com</a>
          </p>
        </div>
      </Col>
      <Col span={24}>
        <MarginTop marginTop={112} />
      </Col>
    </Row>
  );
}
