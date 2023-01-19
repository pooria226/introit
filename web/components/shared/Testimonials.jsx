import React from "react";
import dynamic from "next/dynamic";
import { Col, Row } from "antd";
import DividerItem from "./DividerItem";
import MarginTop from "./MarginTop";
import Styles from "/styles/scss/web/Testimonials.module.scss";
const TestimonialsCarousel = dynamic(() => import("./TestimonialsCarousel"), {
  ssr: false,
});
export default function Testimonials({ theme }) {
  return (
    <Row>
      <Col span={24} className="md:block hidden">
        <MarginTop marginTop={128} />
      </Col>
      <Col span={24} className="text-center">
        <DividerItem theme={theme} text={"Testimonials"} />
      </Col>
      <Col span={24} className="text-center">
        <div className="md:px-0 px-2">
          <p className={theme ? Styles.lightText : Styles.darkText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. <br /> Lorem Ipsum has been the industry's standard
          </p>
        </div>
      </Col>
      <Col span={24}>
        <MarginTop marginTop={40} />
      </Col>
      <Col md={{ span: 18 }} span={24} className="text-center mx-auto">
        <TestimonialsCarousel theme={theme} />
      </Col>
      <Col span={24} className="text-center">
        <MarginTop marginTop={100} />
      </Col>
    </Row>
  );
}
