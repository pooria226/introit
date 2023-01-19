import React from "react";
import { Col, Row } from "antd";
import Styles from "/styles/scss/web/TermsContent.module.scss";
import MarginTop from "./MarginTop";
export default function TermsContent({ theme = true }) {
  return (
    <Row className={theme ? Styles.lightWrapper : Styles.darkWrapper}>
      <Col span={18} className="mx-auto">
        <Row>
          <Col className="pr-2.5" span={6}>
            <div className={theme ? Styles.lightLeft : Styles.darkLeft}>
              <p className={theme ? Styles.lightTitle : Styles.darkTitle}>
                Table of Content
              </p>
              <div className="pt-6">
                <p className={theme ? Styles.lightText : Styles.darkText}>
                  1. What are Terms and Conditions
                </p>
                <div className="pl-6">
                  <p
                    className={
                      theme
                        ? Styles.lightBoldCondition
                        : Styles.darkBoldCondition
                    }
                  >
                    A. Personnel data that we collect about you
                  </p>
                  <p
                    className={
                      theme ? Styles.lightCondition : Styles.darkCondition
                    }
                  >
                    B. Information that we collect automatically on our site.
                  </p>
                </div>
                <div className="pt-6">
                  <p className={theme ? Styles.lightText : Styles.darkText}>
                    2. Privacy and Policy
                  </p>
                </div>
                <div className="pt-6">
                  <p className={theme ? Styles.lightText : Styles.darkText}>
                    3. Your content in our services
                  </p>
                </div>
                <div className="pt-6">
                  <p className={theme ? Styles.lightText : Styles.darkText}>
                    4. Contact details
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col className="pl-2.5" span={18}>
            <div className={theme ? Styles.lightRight : Styles.darkRight}>
              <div>
                <p className={theme ? Styles.lightTitle : Styles.darkTitle}>
                  Terms & Conditions
                </p>
              </div>
              <div className="pt-6">
                <p
                  className={theme ? Styles.lightBoldText : Styles.darkBoldText}
                >
                  Last updated: 19 Jan, 2022
                </p>
              </div>
              <div
                className={theme ? Styles.lightSeprator : Styles.darkSeprator}
              ></div>
              <div>
                <div>
                  <p
                    className={
                      theme ? Styles.lightBoldText : Styles.darkBoldText
                    }
                  >
                    Terms and Conditions ("Terms")
                  </p>
                </div>
                <div className="pt-6 px-6">
                  <p className={theme ? Styles.lightText : Styles.darkText}>
                    Please read these Terms and Conditions ("Terms", "Terms and
                    Conditions") carefully before using the
                    http://www.mywebsite.com (change this) website and the My
                    Mobile App (change this) mobile application (the "Service")
                    operated by My Company (change this) ("us", "we", or "our").
                    <br />
                    <br />
                    Your access to and use of the Service is conditioned on your
                    acceptance of and compliance with these Terms. These Terms
                    apply to all visitors, users and others who access or use
                    the Service. By accessing or using the Service you agree to
                    be bound by these Terms. If you disagree with any part of
                    the terms then you may not access the Service.
                  </p>
                </div>
                <div className="pt-6">
                  <p
                    className={
                      theme ? Styles.lightBoldText : Styles.darkBoldText
                    }
                  >
                    Purchases
                  </p>
                </div>
                <div className="pt-6 px-6">
                  <p className={theme ? Styles.lightText : Styles.darkText}>
                    If you wish to purchase any product or service made
                    available through the Service ("Purchase"), you may be asked
                    to supply certain information relevant to your Purchase
                    including, without limitation, your …
                    <br />
                    <br />
                    The Purchases section is for businesses that sell online
                    (physical or digital). For the full disclosure section,
                    create your own Terms and Conditions. Subscriptions Some
                    parts of the Service are billed on a subscription basis
                    ("Subscription(s)"). You will be billed in advance on a
                    recurring ... The Subscriptions section is for SaaS
                    businesses. For the full disclosure section, create your own
                    Terms and Conditions.
                  </p>
                </div>
                <div className="pt-6">
                  <p
                    className={
                      theme ? Styles.lightBoldText : Styles.darkBoldText
                    }
                  >
                    Subscriptions
                  </p>
                </div>
                <div className="pt-6 px-6">
                  <p className={theme ? Styles.lightText : Styles.darkText}>
                    Some parts of the Service are billed on a subscription basis
                    ("Subscription(s)"). You will be billed in advance on a
                    recurring ...
                    <br />
                    <br />
                    The Subscriptions section is for SaaS businesses. For the
                    full disclosure section, create your own Terms and
                    Conditions.
                  </p>
                </div>
                <div className="pt-6">
                  <p
                    className={
                      theme ? Styles.lightBoldText : Styles.darkBoldText
                    }
                  >
                    Content
                  </p>
                </div>
                <div className="pt-6 px-6">
                  <p className={theme ? Styles.lightText : Styles.darkText}>
                    Our Service allows you to post, link, store, share and
                    otherwise make available certain information, text,
                    graphics, videos, or other material ("Content"). You are
                    responsible for the …
                    <br />
                    <br />
                    The Content section is for businesses that allow users to
                    create, edit, share, make content on their websites or apps.
                    For the full disclosure section, create your own Terms and
                    Conditions.
                  </p>
                </div>
                <div className="pt-6">
                  <p
                    className={
                      theme ? Styles.lightBoldText : Styles.darkBoldText
                    }
                  >
                    Links To Other Web Sites
                  </p>
                </div>
                <div className="pt-6 px-6">
                  <p className={theme ? Styles.lightText : Styles.darkText}>
                    Our Service may contain links to third-party web sites or
                    services that are not owned or controlled by My Company
                    (change this).
                    <br />
                    <br />
                    My Company (change this) has no control over, and assumes no
                    responsibility for, the content, privacy policies, or
                    practices of any third party web sites or services. You
                    further acknowledge and agree that My Company (change this)
                    shall not be responsible or liable, directly or indirectly,
                    for any damage or loss caused or alleged to be caused by or
                    in connection with use of or reliance on any such content,
                    goods or services available on or through any such web sites
                    or services.
                  </p>
                </div>
                <div className="pt-6">
                  <p
                    className={
                      theme ? Styles.lightBoldText : Styles.darkBoldText
                    }
                  >
                    Changes
                  </p>
                </div>{" "}
                <div className="pt-6 px-6">
                  <p className={theme ? Styles.lightText : Styles.darkText}>
                    We reserve the right, at our sole discretion, to modify or
                    replace these Terms at any time. If a revision is material
                    we will try to provide at least 30 (change this) days'
                    notice prior to any new terms taking effect. What
                    constitutes a material change will be determined at our sole
                    discretion.
                  </p>
                </div>
                <div className="pt-6">
                  <p
                    className={
                      theme ? Styles.lightBoldText : Styles.darkBoldText
                    }
                  >
                    Contact Us
                  </p>
                </div>{" "}
                <div className="pt-6 px-6 pb-10">
                  <p className={theme ? Styles.lightText : Styles.darkText}>
                    If you have any questions about these Terms, please contact
                    us.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col span={24}>
            <MarginTop marginTop={112} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
