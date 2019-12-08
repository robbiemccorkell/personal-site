import Link from "next/link";
import ContentWrapper from "./ContentWrapper";

const Header: React.FunctionComponent = () => (
  <nav>
    <ContentWrapper>
      <div className="nav-wrapper">
        <Link href="/">
          <a>
            <h1>Robbie McCorkell</h1>
          </a>
        </Link>
        <div className="links">
          <Link href="/blog">
            <a>Blog</a>
          </Link>
          <Link href="/talks">
            <a>Talks</a>
          </Link>
        </div>
      </div>
    </ContentWrapper>
    <style jsx>{`
      .nav-wrapper {
        padding: 4px 0;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      h1 {
        color: #000;
      }
      a {
        text-decoration: none;
        color: #666;
      }
      a:hover {
        text-decoration: underline;
      }
      .links a {
        margin-left: 14px;
      }
    `}</style>
  </nav>
);

export default Header;
