import React, { useEffect } from "react";

import { useRouter } from "next/router";

export default function LoadingProvider({ children }) {
  //***************************
  // define hooks
  //***************************
  const router = useRouter();
  //***************************
  // define hooks
  //***************************

  //***************************
  // define useEffect
  //***************************
  // useEffect(() => {
  //   if (router.isReady) {
  //     router.events.on("routeChangeStart", () => setLoading(true));
  //     router.events.on("routeChangeStart", () => setLoading(true));
  //     router.events.on("routeChangeComplete", () => setLoading(false));
  //   }
  // }, [router.isReady]);

  return children;
}
