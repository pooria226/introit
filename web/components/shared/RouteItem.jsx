import React from "react";
import Link from "next/link";
import Styles from "/styles/scss/web/RouteItem.module.scss";
export default function RouteItem({ text, href, active, theme }) {
  return (
    <div className="pr-8">
      <div className="relative">
        <Link href={href}>
          <div className="text-center">
            <a className={theme ? Styles.lightLink : Styles.darkLink}>{text}</a>
            {active ? (
              <div
                className={
                  theme ? Styles.lightUunderline : Styles.darkUunderline
                }
              >
                <div className={Styles.blue}></div>
              </div>
            ) : null}
          </div>
        </Link>
      </div>
    </div>
  );
}
