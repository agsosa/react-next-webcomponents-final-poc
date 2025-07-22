"use client";

import getConfig from "next/config";
import dynamic from "next/dynamic";
import Script from "next/script";
import { useEffect, useLayoutEffect } from "react";

function Server_RemoteHeader() {
  const {
    publicRuntimeConfig: { fulfilmentUrl },
  } = getConfig();

  // useLayoutEffect(() => {
  //   document.body.classList.add("ready");
  // }, []);

  useEffect(() => {
      const element = document.querySelector("backoffice-header")
      if (!element) return;

      element.addEventListener("load", (event) => {
        console.log("onLoad listener");
        // "event.target" is the instance of the WebComponent / HTMLElement
        const thisIsEl = event.target === element
        console.log(thisIsEl, event.detail)
      })

      return () => {
        element.removeEventListener("onLoad", (event) => {
          // Cleanup if needed
        });
      }
  },  []);

  useEffect(() => {
  window.pepe = function () {
    console.log("pepe function called");
  }
  })


  return (
    <>
      <Script
        src={fulfilmentUrl + "/web-components-vite/web-components.umd.js"}
      />
      <backoffice-header onPepe="pepe" onClick={() => console.log("pepe")} onLoad={() => {
        console.log("onLoad")
            document.body.classList.add("ready");

      }} ></backoffice-header>
    </>
  );
}

export default Server_RemoteHeader;

// export default dynamic(() => Promise.resolve(Server_RemoteHeader), {
//   ssr: false,
// });
