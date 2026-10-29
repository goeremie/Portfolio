import ArrowIcon from '../components/ArrowIcon';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="not-found container-wide">
      <p className="eyebrow">
        404 / Page not found
      </p>

      <h1>
        This page went
        <br />
        <span>off-script.</span>
      </h1>

      <p>
        The page may have moved or the link may be incorrect.
      </p>

      <Link
        className="button button-primary"
        to="/"
      >
        Back to home <ArrowIcon />
      </Link>
    </section>
  );
}
