import { useState } from 'react';
import { HiPaperAirplane, HiCheckCircle } from 'react-icons/hi';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitting(true);

    // Simulate submission — replace with actual backend integration
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <div className="glass-card p-4 sm:p-8 h-full">
      <h3 className="text-xl sm:text-3xl font-display font-bold text-white mb-1 sm:mb-2">
        Message me
      </h3>
      <p className="text-xs sm:text-sm text-neutral-400 mb-5 sm:mb-8">
        Have a project in mind? Let&apos;s talk about it.
      </p>

      {submitted ? (
        <div className="flex flex-col items-center justify-center py-12 gap-4">
          <HiCheckCircle className="text-5xl text-white animate-fade-in" />
          <p className="text-white font-medium text-center">
            Thank you! Your message has been received.
          </p>
          <p className="text-sm text-neutral-400 text-center">
            Note: Backend integration is not yet configured.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Name */}
          <div>
            <label htmlFor="contact-name" className="sr-only">
              Your Name
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className={`form-input ${errors.name ? 'error' : ''}`}
              required
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <p id="name-error" className="mt-1.5 text-xs text-red-400">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="contact-email" className="sr-only">
              Your Email
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className={`form-input ${errors.email ? 'error' : ''}`}
              required
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p id="email-error" className="mt-1.5 text-xs text-red-400">
                {errors.email}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="contact-message" className="sr-only">
              Your Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={`form-input resize-none ${errors.message ? 'error' : ''}`}
              required
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <p id="message-error" className="mt-1.5 text-xs text-red-400">
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-white text-black font-bold text-sm tracking-wide hover:bg-neutral-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.35)] disabled:opacity-60 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-95"
            id="contact-submit"
          >
            {submitting ? (
              <>
                <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Submit
                <HiPaperAirplane className="rotate-90" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
