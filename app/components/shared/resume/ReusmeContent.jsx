import React from "react";
import { Button, Col, Row } from "antd";
import ImageProvider from "providers/ImageProvider";
import Styles from "/styles/scss/dashboard/ResumeEditor.module.scss";

import Gradient from "./res/berlin/Gradient";
export default function ResumeContent({
  cv,
  cvTarget,
  theme,
  handleShowCvType,
  height,
  width,
  modalTheme,
  setModalTheme,
}) {
  return (
    <Row
      id="wrapper-resume"
      className={
        theme ? Styles.lightWrapperTemplate : Styles.darkWrapperTemplate
      }
    >
      <Col xl={{ span: 19 }} lg={{ span: 19 }} md={{ span: 24 }}>
        <div style={{ marginTop: 74 }}>
          <Gradient
            setModalTheme={setModalTheme}
            modalTheme={modalTheme}
            widthCustome={width}
            heightCustome={height}
            cv={cv}
            theme={theme}
          />
        </div>
      </Col>
      <Col
        className="lg:block hidden"
        lg={{ span: 5 }}
        md={{ span: 5 }}
        span={7}
      >
        <div className={Styles.wrapper}>
          <div className={theme ? Styles.lightHeader : Styles.lightHeader}>
            <div className="flex justify-end px-2">
              <div className="px-1">
                <Button
                  onClick={() => handleShowCvType(cvTarget.name, "light")}
                  className={Styles.lightButton}
                >
                  {" "}
                </Button>
              </div>
              <div className="px-1">
                <Button
                  onClick={() => handleShowCvType(cvTarget.name, "dark")}
                  className={Styles.darkButton}
                >
                  {" "}
                </Button>
              </div>
              <div className="px-1">
                <Button
                  onClick={() => handleShowCvType(cvTarget.name, "gradient")}
                  className={Styles.gradientButton}
                >
                  {" "}
                </Button>
              </div>
              <div className="px-1">
                <Button
                  onClick={() => handleShowCvType(cvTarget.name, "colored")}
                  className={Styles.coloredButton}
                >
                  {" "}
                </Button>
              </div>
            </div>
          </div>
          <div
            className={
              theme ? Styles.lightWrapperTemplate : Styles.darkWrapperTemplate
            }
          >
            <Row className="p-4">
              <Col span={24}>
                <div
                  onClick={() => handleShowCvType("amesterdam", cvTarget.style)}
                  className={`${
                    cvTarget.name == "amesterdam"
                      ? Styles.wrapperImgActive
                      : Styles.wrapperImg
                  } mx-auto mt-4`}
                >
                  <ImageProvider
                    width={90}
                    height={120}
                    src={"/assets/images/cvs/amesterdam.jpg"}
                  />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Col>
    </Row>
  );
}
