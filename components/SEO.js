// components/SEO.js
import Head from "next/head";

const SEO = ({
  title = "Parker Case - AI Software Engineer",
  description = "AI Software Engineer specializing in patent-pending machine learning solutions",
  url = "https://parkercase.co",
  image = "https://parkercase.co/parker-og-image.jpg",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
};

export default SEO;
