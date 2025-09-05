import React, { useState } from "react";
import ShineButton from "./ShineButton";

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const ContactForm = () => {
  const [formValues, setFormValues] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const validate = () => {
    const newErrors = {};
    if (!formValues.name.trim()) newErrors.name = "Name is required";
    if (!formValues.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (formValues.phone && !/^[0-9+()\-\s]{7,}$/.test(formValues.phone)) {
      newErrors.phone = "Enter a valid phone number";
    }
    if (!formValues.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      setStatus({ type: "loading", message: "" });
      // Placeholder submission: replace with API/Email service as needed
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus({
        type: "success",
        message: "Thanks! Your message has been sent.",
      });
      setFormValues(initialFormState);
    } catch (err) {
      setStatus({
        type: "error",
        message: `Something went wrong: ${err} Please try again.`,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto text-left">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <div className="lg:col-start-1 lg:row-start-1">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-secondary-800 mb-2"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formValues.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.name ? "border-error-500" : "border-secondary-300"
            } focus:outline-none focus:ring-2 focus:ring-primary-400 bg-white text-secondary-900`}
            placeholder="Your full name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-error-600">
              {errors.name}
            </p>
          )}
        </div>

        <div className="lg:col-start-1 lg:row-start-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-secondary-800 mb-2"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formValues.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.email ? "border-error-500" : "border-secondary-300"
            } focus:outline-none focus:ring-2 focus:ring-primary-400 bg-white text-secondary-900`}
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            autoComplete="email"
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-error-600">
              {errors.email}
            </p>
          )}
        </div>

        <div className="lg:col-start-1 lg:row-start-3">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-secondary-800 mb-2"
          >
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={formValues.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.phone ? "border-error-500" : "border-secondary-300"
            } focus:outline-none focus:ring-2 focus:ring-primary-400 bg-white text-secondary-900`}
            placeholder="e.g. +1 (555) 123-4567"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-sm text-error-600">
              {errors.phone}
            </p>
          )}
        </div>

        <div className="flex flex-col h-full min-h-[10rem] lg:min-h-0 lg:col-start-2 lg:row-start-1 lg:row-span-2">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-secondary-800 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formValues.message}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.message ? "border-error-500" : "border-secondary-300"
            } focus:outline-none focus:ring-2 focus:ring-primary-400 bg-white text-secondary-900 resize-y flex-1 lg:h-full lg:resize-none`}
            placeholder="Tell us about your project..."
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-sm text-error-600">
              {errors.message}
            </p>
          )}
        </div>

        <div className="flex items-end gap-3 lg:col-start-2 lg:row-start-3 self-end">
          {/* {(status.type = "error")} */}
          {status.type === "success" && (
            <span className="text-success-600 text-sm">{status.message}</span>
          )}
          {status.type === "error" && (
            <span className="text-error-600 text-sm">{status.message}</span>
          )}
          <ShineButton
            text={status.type === "loading" ? "Sending..." : "Send Message"}
            variant="primary"
            type="submit"
            className="h-[50px] bg-secondary-400! text-secondary-900! py-[0px]! text-[0.9rem]!"
            disabled={status.type === "loading"}
          />
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
