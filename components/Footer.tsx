import ContentWrapper from "./ContentWrapper";

const Footer = () => (
  <div className="footer">
    <ContentWrapper>
      <div className="inner">
        <div className="socials">
          <a href="https://github.com/robbiemccorkell" target="_blank">
            <img src={require("./icons/github.svg")} />
          </a>
          <a href="https://twitter.com/robbiemccorkell" target="_blank">
            <img src={require("./icons/twitter.svg")} />
          </a>
          <a href="https://www.instagram.com/robbiemccorkell/" target="_blank">
            <img src={require("./icons/instagram.svg")} />
          </a>
        </div>
      </div>
    </ContentWrapper>
    <style jsx>{`
      .footer {
        background-color: #eee;
      }
      .inner {
        height: 80px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }
      .socials a {
        margin-left: 14px;
      }
    `}</style>
  </div>
);

export default Footer;
