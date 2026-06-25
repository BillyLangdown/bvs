"use client";

import { useState, useEffect } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { CookieBanner, useCookieConsent } from "./CookieConsent";

export function AnalyticsLoader({ gaId }) {
  const { consent, accept, decline } = useCookieConsent();

  if (consent === null || consent === "pending") {
    return consent === "pending" ? (
      <CookieBanner onAccept={accept} onDecline={decline} />
    ) : null;
  }

  return (
    <>
      {consent === "accepted" && gaId && <GoogleAnalytics gaId={gaId} />}
    </>
  );
}
