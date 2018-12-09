import Link from 'next/link';

export default () => (
  <nav>
    <ul>
      <Link href="#">
        <a>Find us</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/terms">
        <a>Terms</a>
      </Link>
      <Link href="/faq">
        <a>FAQ</a>
      </Link>
      <Link href="#">
        <a>Contact</a>
      </Link>
    </ul>
  </nav>
);
