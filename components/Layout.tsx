import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import ContentWrapper from "./ContentWrapper";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface Props {
  pageTitle: string;
}

const Layout: React.FunctionComponent<Props> = props => {
  const { route } = useRouter();

  useEffect(() => {
    window.analytics.page(route);
  }, [route]);

  return (
    <>
      <Head>
        <title>{props.pageTitle}</title>
      </Head>
      <div className="outer">
        <Header />
        <ContentWrapper>
          <div className="inner">{props.children}</div>
        </ContentWrapper>
        <Footer />
        <style jsx>{`
          .inner {
            padding: 32px 0;
          }
        `}</style>
        <style jsx global>{`
          * {
            box-sizing: border-box;
            font-family: -apple-system, Helvetica, Arial, sans-serif;
          }

          body {
            margin: 0;
          }
        `}</style>
      </div>
    </>
  );
};

export default Layout;
