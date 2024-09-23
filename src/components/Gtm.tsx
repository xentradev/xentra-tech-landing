"use client";
import Script from "next/script";
import { useEffect } from "react";

export default function Gtm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `
      (function(w, d, s, l, i) {
        w[l]=w[l]||[];
        w[l].push({
          'gtm.start': new Date().getTime(),
          event: 'gtm.js'
        });

        const f = d.getElementsByTagName(s)[0];
        const j = d.createElement(s);
        const dl = l != 'dataLayer' ? '&l='+l : '';

        j.async = true;
        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, 'script', 'dataLayer', 'GTM-MH38558Q');
    `;

    document.head.appendChild(script);
  }, []);

  return (
    <>
      <Script
        src="/bootstrap/dist/js/bootstrap.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://accounts.google.com/gsi/client"
        strategy="afterInteractive"
      />
    </>
  );
}
