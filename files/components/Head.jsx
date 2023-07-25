import { Helmet } from "react-helmet";
import React from "react";
import { compose } from "recompose";
import withSiteName from "../hocs/withSiteName";

const Head = ({ siteName, basename }) => {
  return (
    <Helmet>
      <meta charset="utf8" />
      <title>{siteName}</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={basename + "/apple-touch-icon.png?v=1"}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={basename + "/favicon-32x32.png?v=1"}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={basename + "/favicon-16x16.png?v=1"}
      />
      <link rel="manifest" href={basename + "/site.webmanifest?v=1"} />
      <link
        rel="mask-icon"
        href={basename + "/safari-pinned-tab.svg?v=1"}
        color="#5bbad5"
      />
      <link rel="shortcut icon" href={basename + "/favicon.ico?v=1"} />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
  );
};

export default compose(withSiteName)(Head);
