// pages/_app.js
import { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";
import { ThemeProvider } from "../components/ThemeContext";
import ProjectBriefWidget from "../components/Projectbriefwidget";

// Google Analytics Measurement ID
const GA_MEASUREMENT_ID = process.env.GA_MEASUREMENT_ID || "G-BS9W00BBL2";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Initialize Google Analytics
    if (typeof window !== "undefined" && GA_MEASUREMENT_ID !== "G-BS9W00BBL2") {
      const script = document.createElement("script");
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      script.async = true;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      window.gtag = gtag;
      gtag("js", new Date());
      gtag("config", GA_MEASUREMENT_ID, {
        page_title: "StroomAI",
        page_location: window.location.href,
      });

      // Track page views
      const handleRouteChange = (url) => {
        gtag("config", GA_MEASUREMENT_ID, {
          page_path: url,
        });
      };

      // Listen for route changes
      if (typeof window !== "undefined") {
        window.addEventListener("popstate", () => {
          handleRouteChange(window.location.pathname);
        });
      }
    }
  }, []);

  return (
    <ThemeProvider>
      <Head>
        <title>StroomAI</title>
        <meta
          name="description"
          content="AI Software Engineer specializing in patent-pending machine learning solutions, computer vision, and full-stack AI development. Based in NYC, building the future with artificial intelligence."
        />
        <meta
          name="keywords"
          content="AI, Machine Learning, Software Engineer, Python, TensorFlow, Computer Vision, NLP, New York, Patent Pending, Innovation"
        />
        <meta name="author" content="StroomAI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://parkercase.co/" />
        <meta property="og:title" content="StroomAI" />
        <meta
          property="og:description"
          content="AI Software Engineer specializing in patent-pending machine learning solutions and full-stack AI development."
        />
        <meta
          property="og:image"
          content="https://parkercase.co/parker-og-image.jpg"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://parkercase.co/" />
        <meta property="twitter:title" content="StroomAI" />
        <meta
          property="twitter:description"
          content="AI Software Engineer specializing in patent-pending machine learning solutions and full-stack AI development."
        />
        <meta
          property="twitter:image"
          content="https://parkercase.co/parker-og-image.jpg"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/new-logo-logo-only.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/new-logo-logo-only.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Theme */}
        <meta name="theme-color" content="#006BB6" />
        <meta name="msapplication-TileColor" content="#006BB6" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "StroomAI",
              jobTitle: "Patent-Pending AI Innovations",
              description:
                "AI Software Engineer specializing in patent-pending machine learning solutions",
              url: "https://parkercase.co",
              email: "sales@stroomai.com",
              telephone: "+1-929-707-9902",
              address: {
                "@type": "PostalAddress",
                addressLocality: "New York",
                addressRegion: "NY",
                addressCountry: "US",
              },
              sameAs: [
                "https://www.linkedin.com/in/parker-c-582854106/",
                "https://github.com/parkercase",
              ],
              knowsAbout: [
                "Machine Learning",
                "Artificial Intelligence",
                "Computer Vision",
                "Natural Language Processing",
                "Python",
                "TensorFlow",
                "React",
              ],
            }),
          }}
        />
      </Head>

      {/* HubSpot Tracking Code */}
      <Script
        id="hubspot-script"
        strategy="afterInteractive"
        src="//js-na2.hs-scripts.com/243220998.js"
      />

      <Component {...pageProps} />
      <ProjectBriefWidget />
    </ThemeProvider>
  );
}

export default MyApp;
