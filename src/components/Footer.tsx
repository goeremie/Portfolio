import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer container-wide">
      <Link className="brand" to="/">GE<span className="brand-period">.</span></Link>
      <p>Building useful, thoughtful and digital experiences.</p>
      <div className="footer-links">
        
<a
  href="https://www.linkedin.com/in/gabriel-eremie-0ab159250/"
  target="_blank"
  rel="noreferrer"
>
  LinkedIn 
</a>

<a
  href="https://github.com/goeremie"
  target="_blank"
  rel="noreferrer"
>
  GitHub 
</a>

        <a href="mailto:gabriel.eremie@yahoo.com">Email </a>
      </div>
      <small>© {new Date().getFullYear()} Gabriel Eremie. Built with care.</small>
    </footer>
  );
}
