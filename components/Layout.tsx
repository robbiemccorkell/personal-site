import Header from './Header';

const Layout: React.FunctionComponent = props => (
  <div>
    <Header />
    {props.children}
    <style jsx>{`
      div {
        margin: 20,
        padding: 20,
        border: 1px solid #DDD
      }
    `}</style>
  </div>
);

export default Layout;
