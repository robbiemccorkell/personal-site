import { NextPage } from "next";
import Router from "next/router";

const redirectUrl = "/blog";

const Home: NextPage = () => <div />;

Home.getInitialProps = async ({ res }) => {
  if (res) {
    res.writeHead(302, { Location: redirectUrl });
    res.end();
  } else {
    Router.push(redirectUrl);
  }

  return {};
};

export default Home;
