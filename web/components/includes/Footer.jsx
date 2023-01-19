import React from "react";
import { Col, Row } from "antd";
import Styles from "/styles/scss/web/Footer.module.scss";
import Link from "next/link";
import LogoMobile from "/public/assets/images/svgs/logo-mobile.svg";
import LogoMobileDark from "/public/assets/images/svgs/dark/logo-mobile.svg";
import Facebook from "/public/assets/images/svgs/facebook.svg";
import Insta from "/public/assets/images/svgs/insta.svg";
import Linkedin from "/public/assets/images/svgs/linkedin.svg";
import Twitter from "/public/assets/images/svgs/twitter.svg";
import MarginTop from "components/shared/MarginTop";
export default function Footer({ theme }) {
  return (
    <Row>
      <Col span={24} className="md:block hidden">
        <div className={theme ? Styles.lightWrapper : Styles.darkWrapper}>
          <div className="flex justify-between w-full">
            <div>
              <div>
                <div>{theme ? <LogoMobile /> : <LogoMobileDark />}</div>
              </div>
              <div className="pt-8 flex">
                <div className="pr-6">
                  <Facebook />
                </div>
                <div className="pr-6">
                  <Insta />
                </div>
                <div className="pr-6">
                  <Linkedin />
                </div>
                <div className="pr-6">
                  <Twitter />
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="pr-8">
                <Link href={"/"}>
                  <a className={theme ? Styles.lightLink : Styles.darkLink}>
                    Home
                  </a>
                </Link>
              </div>
              <div className="pr-8">
                <Link href={"/"}>
                  <a className={theme ? Styles.lightLink : Styles.darkLink}>
                    Create resume
                  </a>
                </Link>
              </div>
              <div className="pr-8">
                <Link href={"/"}>
                  <a className={theme ? Styles.lightLink : Styles.darkLink}>
                    Dashboard
                  </a>
                </Link>
              </div>
              <div className="pr-8">
                <Link href={"/"}>
                  <a className={theme ? Styles.lightLink : Styles.darkLink}>
                    Blog
                  </a>
                </Link>
              </div>
              <div className="pr-8">
                <Link href={"/"}>
                  <a className={theme ? Styles.lightLink : Styles.darkLink}>
                    Contact us
                  </a>
                </Link>
              </div>
              <div className="pr-8">
                <Link href={"/"}>
                  <a className={theme ? Styles.lightLink : Styles.darkLink}>
                    FAQ’S
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <MarginTop marginTop={72} />
          </div>
          <div className={Styles.seprator}></div>
          <div className="flex justify-between pt-4">
            <div>
              <p className={theme ? Styles.lightLink : Styles.darkLink}>
                <span>InResum</span> © All rights reserved 2022
              </p>
            </div>
            <div className="flex">
              <div className="pr-6">
                <Link href={"/"}>
                  <a className={theme ? Styles.lightLink : Styles.darkLink}>
                    Privacy policy
                  </a>
                </Link>
              </div>
              <div className="pr-6">
                <Link href={"/"}>
                  <a className={theme ? Styles.lightLink : Styles.darkLink}>
                    GDPR Policy
                  </a>
                </Link>
              </div>
              <div className="pr-6">
                <Link href={"/"}>
                  <a className={theme ? Styles.lightLink : Styles.darkLink}>
                    Terms & Conditions
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Col>
      <Col span={24} className="md:hidden block">
        <div className={theme ? Styles.lightWrapper : Styles.darkWrapper}>
          <div className="flex justify-between flex-col w-full">
            <div>
              <div>{theme ? <LogoMobile /> : <LogoMobileDark />}</div>
              <div>
                <div className="pt-6 flex">
                  <div className="pr-6">
                    <Facebook />
                  </div>
                  <div className="pr-6">
                    <Insta />
                  </div>
                  <div className="pr-6">
                    <Linkedin />
                  </div>
                  <div className="pr-6">
                    <Twitter />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between pt-6">
              <div className="flex flex-col">
                <div className="pr-8 mb-4">
                  <Link href={"/"}>
                    <a className={theme ? Styles.lightLink : Styles.darkLink}>
                      Home
                    </a>
                  </Link>
                </div>
                <div className="pr-8 mb-4">
                  <Link href={"/"}>
                    <a className={theme ? Styles.lightLink : Styles.darkLink}>
                      Create resume
                    </a>
                  </Link>
                </div>
                <div className="pr-8 mb-4">
                  <Link href={"/"}>
                    <a className={theme ? Styles.lightLink : Styles.darkLink}>
                      Dashboard
                    </a>
                  </Link>
                </div>
                <div className="pr-8 mb-4">
                  <Link href={"/"}>
                    <a className={theme ? Styles.lightLink : Styles.darkLink}>
                      Blog
                    </a>
                  </Link>
                </div>
                <div className="pr-8 mb-4">
                  <Link href={"/"}>
                    <a className={theme ? Styles.lightLink : Styles.darkLink}>
                      Contact us
                    </a>
                  </Link>
                </div>
                <div className="pr-8 mb-4">
                  <Link href={"/"}>
                    <a className={theme ? Styles.lightLink : Styles.darkLink}>
                      FAQ’S
                    </a>
                  </Link>
                </div>
              </div>
              <div className="flex items-start flex-col justify-center ">
                <div className="pr-6 mb-4">
                  <Link href={"/"}>
                    <a className={theme ? Styles.lightLink : Styles.darkLink}>
                      Privacy policy
                    </a>
                  </Link>
                </div>
                <div className="pr-6 mb-4">
                  <Link href={"/"}>
                    <a className={theme ? Styles.lightLink : Styles.darkLink}>
                      GDPR Policy
                    </a>
                  </Link>
                </div>
                <div className="pr-6 mb-4">
                  <Link href={"/"}>
                    <a className={theme ? Styles.lightLink : Styles.darkLink}>
                      Terms & Conditions
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <MarginTop marginTop={72} />
          </div>
          <div className={Styles.seprator}></div>
          <div className="flex justify-center pt-4">
            <div>
              <p className={theme ? Styles.lightLink : Styles.darkLink}>
                <span>InResum</span> © All rights reserved 2022
              </p>
            </div>
            <div className="flex"></div>
          </div>
        </div>
      </Col>
    </Row>
  );
}
