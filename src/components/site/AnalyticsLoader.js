"use client";

import { useState, useEffect } from "react";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { CookieBanner, useCookieConsent } from "./CookieConsent";

export function AnalyticsLoader({ gaId, gtmId }) {
  const { consent, accept, decline } = useCookieConsent();

  if (consent === null || consent === "pending") {
    return consent === "pending" ? (
      <CookieBanner onAccept={accept} onDecline={decline} />
    ) : null;
  }

  return (
    <>
      {consent === "accepted" && gaId && <GoogleAnalytics gaId={gaId} />}
      {consent === "accepted" && gtmId && (
        <>
          <GoogleTagManager gtmId={gtmId} />
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        </>
      )}
    </>
  );
}
