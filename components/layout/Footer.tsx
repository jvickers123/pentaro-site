import Link from 'next/link';

const Footer = () => {
  return (
    <div className="real-footer-container">
      <div className="footer-links-container">
        <Link href="/">Pentaro</Link>
        <Link href="/recruitment">Recruitment</Link>
        <Link href="/telemarketing">Telemarketing</Link>
        <Link href="/pentaro-way">The Pentaro Way</Link>
        <Link href="/get-in-touch">Contact Us</Link>
      </div>

      <p>&copy; Pentaro Ltd. 2022</p>
      <p>
        Website provided by{' '}
        <a href="www.jonnyvickers.co.uk" target="_blank">
          Jonny Vickers
        </a>
      </p>
    </div>
  );
};

export default Footer;
