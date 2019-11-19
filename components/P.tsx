const P: React.FunctionComponent = props => (
  <>
    <p {...props} />
    <style jsx>{`
      p {
        font-size: 18px;
        line-height: 1.6;
      }
    `}</style>
  </>
);

export default P;
