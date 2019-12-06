const ContentWrapper: React.FunctionComponent = ({ children }) => (
  <div className="wrapper">
    {children}
    <style jsx>{`
      .wrapper {
        min-width: 320px;
        max-width: 675px;
        margin: 0px auto;
        padding: 0 15px;
      }
    `}</style>
  </div>
);

export default ContentWrapper;
