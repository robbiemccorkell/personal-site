import Link from "next/link";

const Header: React.FunctionComponent = () => (
  <nav>
    <div className="nav-wrapper">
      <Link href="/">
        <a>
          <h1>Robbie McCorkell</h1>
        </a>
      </Link>
      <div>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </div>
    </div>
    <style jsx>{`
      .nav-wrapper {
        max-width: 675px;
        padding: 4px 15px;
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
    `}</style>
  </nav>
);

export default Header;
