import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer__container">
      <div className="footer__links-container">
        <Link href="/">Pentaro</Link>
        <Link href="/recruitment">Recruitment</Link>
        <Link href="/telemarketing">Telemarketing</Link>
        <Link href="/pentaro-way">The Pentaro Way</Link>
        <Link href="/get-in-touch">Contact Us</Link>
      </div>

      <p className="paragraph--footer">&copy; Pentaro Ltd. 2022</p>
      <p className="paragraph--footer">
        Website provided by{' '}
        <a href="https://www.jonnyvickers.co.uk" target="_blank">
          Jonny Vickers
        </a>
      </p>
    </footer>
  );
};

export default Footer;
