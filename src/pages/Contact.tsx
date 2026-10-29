import ArrowIcon from '../components/ArrowIcon';
import { useState, type ChangeEvent, type FormEvent } from 'react';

type ContactForm = {
  name: string;
  email: string;
  type: string;
  message: string;
};

export default function Contact() {
  const [sent, setSent] = useState(false);

  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    type: 'Business website',
    message: '',
  });

  const update = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;

    setForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));

    setSent(false);
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio inquiry: ${form.type}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\n` +
        `Email: ${form.email}\n` +
        `Project type: ${form.type}\n\n` +
        form.message
    );

    window.location.href =
      `mailto:gabriel.eremie@yahoo.com?subject=${subject}&body=${body}`;

    setSent(true);
  };

  return (
    <section className="page-section container-wide contact-page">
      <div className="contact-intro">
        <p className="eyebrow">Contact / 04</p>

        <h1>
          Have an idea?
          <br />
          <span>Let's talk.</span>
        </h1>

        <p>
          Tell me a little about what you're working on. Whether
          it's a business website, a design challenge or a software
          idea, I'd love to hear about it.
        </p>

        <a
          className="contact-email"
          href="mailto:gabriel.eremie@yahoo.com"
        >
          gabriel.eremie@yahoo.com <ArrowIcon />
        </a>
      </div>

      <form className="contact-form" onSubmit={submit}>
        <label>
          Your name
          <input
            required
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={update}
            placeholder="How should I address you?"
          />
        </label>

        <label>
          Email address
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            value={form.email}
            onChange={update}
            placeholder="you@example.com"
          />
        </label>

        <label>
          What do you need?
          <select
            name="type"
            value={form.type}
            onChange={update}
          >
            <option>Business website</option>
            <option>UI/UX design</option>
            <option>Web application</option>
            <option>Website updates & support</option>
            <option>Other / not sure yet</option>
          </select>
        </label>

        <label>
          Tell me about your project
          <textarea
            required
            name="message"
            rows={5}
            value={form.message}
            onChange={update}
            placeholder="Goals, ideas, timing, or anything useful..."
          />
        </label>

        <button
          className="button button-primary"
          type="submit"
        >
          Open email draft <span><ArrowIcon /></span>
        </button>

        {sent && (
          <p className="form-note" role="status">
            Your email draft is ready. Please review it and send the message to complete your inquiry.
          </p>
        )}
      </form>
    </section>
  );
}
