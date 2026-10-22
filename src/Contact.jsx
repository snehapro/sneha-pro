
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

const services = [
  "Audio & PA System",
  "Lighting & Effects",
  "LED Walls & Visual Displays",
  "Stage Decor & press",
  "Audio Equipment Rental",
  "Band & instrumental program",
  "Other Requirements",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    eventType: "",
    eventDate: "",
    guests: "",
    address: "",
    budget: "",
    services: [],
    details: "",
  });

  const update = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const toggleService = (service) => {
    setForm((current) => ({
      ...current,
      services: current.services.includes(service)
        ? current.services.filter((s) => s !== service)
        : [...current.services, service],
    }));
  };

  const submit = (e) => {
    e.preventDefault();

    const message = [
      "SNEHA PRO - New Event Enquiry",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Company: ${form.company || "Not provided"}`,
      "",
      `Event type: ${form.eventType}`,
      `Event date: ${form.eventDate}`,
      `Expected guests: ${form.guests || "Not specified"}`,
      `Venue/address: ${form.address}`,
      `Budget: ${form.budget}`,
      `Services: ${form.services.join(", ") || "Not selected"}`,
      "",
      `Additional details: ${form.details || "None"}`,
    ].join("\n");

    const url = `https://wa.me/919995166463?text=${encodeURIComponent(message)}`;
    window.location.href = url;
  };

  return (
    <main className="enquiry-page">
      <header className="enquiry-header">
        <Link to="/" className="enquiry-back">← Back to SNEHA PRO</Link>
        <span className="enquiry-label">EVENT ENQUIRY</span>
      </header>

      <section className="enquiry-content">
        <p className="enquiry-eyebrow">LET'S CREATE SOMETHING EXCEPTIONAL</p>
        <h1>Tell us about your <span>Vision.</span></h1>
        <p className="enquiry-intro">
          Share your requirements and our team will help you plan
          the right audio and event production setup.
        </p>

        <form className="enquiry-form" onSubmit={submit}>
          <h2>Your contact details</h2>

          <div className="enquiry-grid">
            <label>
              Full name *
              <input name="name" value={form.name} onChange={update}
                autoComplete="name" required placeholder="Your full name" />
            </label>

            <label>
              Phone number *
              <input name="phone" type="tel" value={form.phone}
                onChange={update} autoComplete="tel" required
                pattern="[+0-9() -]{7,20}" placeholder="+91 ***** *****" />
            </label>

            <label>
              Email address *
              <input name="email" type="email" value={form.email}
                onChange={update} autoComplete="email" required
                placeholder="you@example.com" />
            </label>

            <label>
              Company / organization
              <input name="company" value={form.company} onChange={update}
                autoComplete="organization" placeholder="Optional" />
            </label>
          </div>

          <h2>Event information</h2>

          <div className="enquiry-grid">
            <label>
              Event type *
              <select name="eventType" value={form.eventType}
                onChange={update} required>
                <option value="">Choose event type</option>
                <option>Concert / Festival</option>
                <option>Corporate Event / Conference</option>
                <option>Wedding / Private Event</option>
                <option>College / Cultural Event</option>
                <option>Religious Event</option>
                <option>Other</option>
              </select>
            </label>

            <label>
              Event date *
              <input name="eventDate" type="date" value={form.eventDate}
                onChange={update} min={new Date().toLocaleDateString("en-CA")}
                required />
            </label>

            <label>
              Expected guests
              <input name="guests" type="number" min="1"
                value={form.guests} onChange={update}
                placeholder="Approximate number" />
            </label>

            <label>
              Estimated budget *
              <select name="budget" value={form.budget}
                onChange={update} required>
                <option value="">Choose budget range</option>
                <option>Below ₹25,000</option>
                <option>₹25,000 – ₹50,000</option>
                <option>₹50,000 – ₹1,00,000</option>
                <option>₹1,00,000 – ₹3,00,000</option>
                <option>Above ₹3,00,000</option>
                <option>Need a recommendation</option>
              </select>
            </label>

            <label className="enquiry-full">
              Venue / event address *
              <input name="address" value={form.address} onChange={update}
                autoComplete="street-address" required
                placeholder="Venue name, city, and location" />
            </label>
          </div>

          <h2>Services you need</h2>
          <p className="enquiry-help">Select all that apply.</p>

          <div className="enquiry-services">
            {services.map((service) => (
              <label className="enquiry-check" key={service}>
                <input type="checkbox"
                  checked={form.services.includes(service)}
                  onChange={() => toggleService(service)} />
                <span>{service}</span>
              </label>
            ))}
          </div>

          <label className="enquiry-notes">
            Additional requirements
            <textarea name="details" value={form.details} onChange={update}
              rows="5"
              placeholder="Tell us about your event, schedule, equipment needs, or anything else we should know." />
          </label>

          <button className="enquiry-submit" type="submit">
            Submit Your Enquiry→
          </button>
          <p className="enquiry-privacy">
            Your enquiry will open WhatsApp with your details filled in.
            Review the message and press Send to submit it.
          </p>
        </form>
      </section>
    </main>
  );
}
