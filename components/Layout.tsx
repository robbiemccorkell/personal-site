import Header from './Header';

const Layout: React.FunctionComponent = props => (
  <div>
    <Header />
    <div className="layout-wrapper">
      {props.children}
    </div>
    <style jsx>{`
      .layout-wrapper {
        max-width: 675px;
        margin: 0px auto;
        padding-left: 15px;
        padding-right: 15px;
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
