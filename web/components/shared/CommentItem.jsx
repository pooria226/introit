import React from "react";
import { Col, Row } from "antd";
import Styles from "/styles/scss/web/Testimonials.module.scss";
import ImageProvider from "providers/ImageProvider";
export default function CommentItem({ theme }) {
  return (
    <Row className="mb-4">
      <Col span={24}>
        <div className={theme ? Styles.lightComment : Styles.darkComment}>
          <div>
            <p className={theme ? Styles.lightText : Styles.darkText}>
              “Not only does my resume look impressive—filled with the names and
              logos of world-class institutions—but these certificates also
              bring me closer to my career goals by validating the skills I’ve
              learned.”
            </p>
          </div>
          <div className={Styles.wrapperUser}>
            <div className={Styles.wrapperAvatar}>
              <ImageProvider
                width={45}
                height={45}
                src={"/assets/images/jpg/pooria.jpg"}
              />
            </div>
            <div>
              <p className={theme ? Styles.lightName : Styles.darkName}>
                Barena Willson
              </p>
              <p className={theme ? Styles.lightJobTitle : Styles.darkJobTitle}>
                HR Manager
              </p>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}
