import Link from 'next/link';

const Header: React.FunctionComponent = () => (
  <div>
    <Link href="/">
      <a>Home</a>
    </Link>
    <style jsx>{`
      a {
        marginRight: 15;
      }
    `}</style>
  </div>
);

export default Header;
