import Head from "next/head";
import Header from "./Header";

interface Props {
  pageTitle: string;
}

const Layout: React.FunctionComponent<Props> = props => (
  <>
    <Head>
      <title>{props.pageTitle}</title>
    </Head>
    <div className="outer">
      <Header />
      <div className="inner">{props.children}</div>
      <style jsx>{`
        .outer {
          min-width: 320px;
        }
        .inner {
          max-width: 675px;
          margin: 0px auto;
          padding: 32px 15px;
        }
      `}</style>
      <style jsx global>{`
        * {
          box-sizing: border-box;
          font-family: -apple-system, Helvetica, Arial, sans-serif;
        }
      `}</style>
    </div>
  </>
);

export default Layout;
