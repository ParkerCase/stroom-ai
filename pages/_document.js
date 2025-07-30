// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Additional head elements that apply to all pages */}
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Security headers */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />

        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/Resume.pdf"
          as="document"
          type="application/pdf"
        />

        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//calendly.com" />
        <link rel="dns-prefetch" href="//linkedin.com" />
        <link rel="dns-prefetch" href="//github.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//js-na2.hs-scripts.com" />

        {/* HubSpot Tracking Code */}
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js-na2.hs-scripts.com/243220998.js"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />

        {/* Fallback for users with JavaScript disabled */}
        <noscript>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              backgroundColor: "#FF6900",
              color: "white",
              padding: "10px",
              textAlign: "center",
              zIndex: 9999,
            }}
          >
            This website requires JavaScript to function properly. Please enable
            JavaScript in your browser.
          </div>
        </noscript>
      </body>
    </Html>
  );
}
