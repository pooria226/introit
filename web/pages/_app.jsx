import React, { useEffect } from "react";
import AOS from "aos";
import Head from "next/head";
import { ConfigProvider } from "antd";
import GTM from "react-gtm-module";
import { Provider } from "react-redux";
import Script from "next/script";
import { wrapper, store } from "../store/store";
import "tailwindcss/tailwind.css";
import "antd/dist/antd.css";
import "/styles/Main.scss";
import "swiper/css";
import "swiper/css/pagination";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    GTM.initialize({
      gtmId: "GTM-PCZX5V3",
    });
  }, []);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Provider store={store}>
      <ConfigProvider>
        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-H9PGBHJYH8"
        />
        <Script strategy="lazyOnload">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-H9PGBHJYH8');
      `}
        </Script>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
        </Head>
        <Component {...pageProps} />
      </ConfigProvider>{" "}
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
