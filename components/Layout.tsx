import Header from './Header';

const Layout: React.FunctionComponent = props => (
  <div className="outer">
    <Header />
    <div className="inner">
      {props.children}
    </div>
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
);

export default Layout;
