import React from "react";
import { Button, Col, Row } from "antd";
import Styles from "/styles/scss/web/ContactContent.module.scss";
import Phone from "/public/assets/images/svgs/phone.svg";
import Email from "/public/assets/images/svgs/email.svg";
import Location from "/public/assets/images/svgs/location.svg";
import Facebook from "/public/assets/images/svgs/borderd-facebok.svg";
import Twitter from "/public/assets/images/svgs/borderd-twitter.svg";
import Linkedin from "/public/assets/images/svgs/borderd-linkedin.svg";
import Insta from "/public/assets/images/svgs/borderd-insta.svg";
import DividerItem from "./DividerItem";
import MarginTop from "./MarginTop";
import TextItem from "./TextItem";
import EmailItem from "./EmailItem";
import PhoneItem from "./PhoneItem";
import AreaItem from "./AreaItem";
export default function ContactContent({ theme, inputs, setInputs }) {
  return (
    <Row className={theme ? Styles.lightWrapper : Styles.darkWrapper}>
      <Col span={24}>
        <MarginTop marginTop={56} />
      </Col>
      <Col span={24} className="text-center">
        <DividerItem text="Contact us" theme={theme} />
      </Col>
      <Col span={24} className="text-center">
        <div>
          <p className={theme ? Styles.lightText : Styles.darkText}>
            Any question or remarks? <span>Just drop us a line!</span>
          </p>
        </div>
      </Col>
      <Col span={24}>
        <MarginTop marginTop={56} />
      </Col>
      <Col md={{ span: 18 }} span={24} className="mx-auto">
        <div
          className={theme ? Styles.lightWrapperForm : Styles.darkWrapperForm}
        >
          <Row>
            <Col md={{ span: 10 }} span={24}>
              <div className={Styles.wrapperInfo}>
                <p className={theme ? Styles.lightTitle : Styles.darkTitle}>
                  Contact Information
                </p>
                <p className={theme ? Styles.lightText : Styles.darkText}>
                  Fill up the form and our Team will get back to <br /> you
                  within 24 hours.
                </p>
                <div className={Styles.info}>
                  <span>
                    <Phone />
                  </span>
                  <p className={theme ? Styles.lightPhone : Styles.darkPhone}>
                    +0123 34567 8910
                  </p>
                </div>
                <div className={Styles.info}>
                  <span>
                    <Email />
                  </span>
                  <p className={theme ? Styles.lightPhone : Styles.darkPhone}>
                    support@enviretech.com
                  </p>
                </div>
                <div className={Styles.info}>
                  <span>
                    <Location />
                  </span>
                  <p className={theme ? Styles.lightPhone : Styles.darkPhone}>
                    102 Street 2714 Derbin
                  </p>
                </div>
                <div className="flex">
                  <div className="pr-8">
                    <Facebook />
                  </div>
                  <div className="pr-8">
                    <Twitter />
                  </div>
                  <div className="pr-8">
                    <Insta />
                  </div>
                  <div className="pr-8">
                    <Linkedin />
                  </div>
                </div>
                <div className={Styles.orangeCircle}>
                  <div className={Styles.innerCircle}></div>
                </div>
              </div>
            </Col>
            <Col md={{ span: 14 }} span={24} className="md:mt-0 mt-6">
              <Row className="md:px-4 px-0">
                <Col className="md:pr-2.5 pr-0" md={{ span: 12 }} span={24}>
                  <TextItem
                    value={inputs.firstName}
                    onChange={setInputs}
                    name="firstName"
                    theme={theme}
                    label="First Name"
                  />
                </Col>
                <Col className="md:pl-2.5 pl-0" md={{ span: 12 }} span={24}>
                  <TextItem
                    value={inputs.lastName}
                    onChange={setInputs}
                    name="lastName"
                    theme={theme}
                    label="Last Name "
                  />
                </Col>
                <Col className="md:pr-2.5 pr-0" md={{ span: 12 }} span={24}>
                  <EmailItem
                    value={inputs.email}
                    onChange={setInputs}
                    name="email"
                    theme={theme}
                    label="Email address"
                  />
                </Col>
                <Col className="md:pl-2.5 pl-0" md={{ span: 12 }} span={24}>
                  <PhoneItem
                    value={inputs.phone}
                    onChange={(value) =>
                      setInputs((prev) => {
                        return { ...prev, phone: value };
                      })
                    }
                    name="phone"
                    theme={theme}
                    label="Phone"
                  />
                </Col>
                <Col span={24}>
                  <AreaItem
                    value={inputs.message}
                    onChange={setInputs}
                    name="message"
                    theme={theme}
                    label="Message"
                  />
                </Col>
                <Col span={24}>
                  <MarginTop marginTop={42} />
                </Col>
                <Col span={24} className="flex md:justify-end justify-start">
                  <Button className={Styles.button}>Send Message</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Col>
      <Col span={24} className="md:block hidden">
        <MarginTop marginTop={112} />
      </Col>
    </Row>
  );
}
