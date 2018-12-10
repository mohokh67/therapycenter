import Link from 'next/link';

export default () => (
  <nav>
    <ul className="columns is-1">
      <Link href="#">
        <a className="column has-text-white-ter">Location</a>
      </Link>
      <Link href="/about">
        <a className="column has-text-white-ter">About</a>
      </Link>
      <Link href="/terms">
        <a className="column has-text-white-ter">Terms</a>
      </Link>
      <Link href="/faq">
        <a className="column has-text-white-ter">FAQ</a>
      </Link>
      <Link href="#">
        <a className="column has-text-white-ter">Contact</a>
      </Link>
    </ul>
  </nav>
);
