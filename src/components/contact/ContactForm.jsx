"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { officeEmail } from "@/data/contact";

const contactFormFields = [
  {
    fieldName: "fullName",
    fieldLabel: "Full Name",
    fieldType: "text",
    fieldPlaceholder: "Enter Full Name",
    autoComplete: "name",
  },
  {
    fieldName: "email",
    fieldLabel: "Email",
    fieldType: "email",
    fieldPlaceholder: "Enter Your Email",
    autoComplete: "email",
  },
  {
    fieldName: "contactNumber",
    fieldLabel: "Contact",
    fieldType: "tel",
    fieldPlaceholder: "Enter Contact Number",
    autoComplete: "tel",
  },
];

const inputClasses =
  "mt-2 w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20";

const emptyFormValues = {
  fullName: "",
  email: "",
  contactNumber: "",
  message: "",
};

export default function ContactForm() {
  const [formValues, setFormValues] = useState(emptyFormValues);
  const [isEmailAppOpened, setIsEmailAppOpened] = useState(false);

  const updateFormValue = (changeEvent) => {
    const { name, value } = changeEvent.target;
    setFormValues((previousFormValues) => ({ ...previousFormValues, [name]: value }));
  };

  // No backend yet: open the visitor's email app with the message filled in
  const sendMessage = (submitEvent) => {
    submitEvent.preventDefault();

    const emailSubject = `New project enquiry from ${formValues.fullName}`;
    const emailBody = [
      `Name: ${formValues.fullName}`,
      `Email: ${formValues.email}`,
      `Contact: ${formValues.contactNumber}`,
      "",
      formValues.message,
    ].join("\n");

    window.location.href = `mailto:${officeEmail}?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;
    setIsEmailAppOpened(true);
  };

  return (
    <div>
      <RevealOnScroll direction="right">
        <h2 className="font-heading text-4xl text-gold md:text-5xl">
          Send Us a Message
        </h2>
        <p className="mt-4 text-sm text-ink/80">
          Fill out the form and we&apos;ll get back to you as soon as possible.
        </p>
      </RevealOnScroll>

      <RevealOnScroll direction="right" delay={150}>
        <form onSubmit={sendMessage} className="mt-10 space-y-5">
          {contactFormFields.map((contactFormField) => (
            <div key={contactFormField.fieldName}>
              <label
                htmlFor={contactFormField.fieldName}
                className="text-sm font-semibold text-ink"
              >
                {contactFormField.fieldLabel}
              </label>
              <input
                id={contactFormField.fieldName}
                name={contactFormField.fieldName}
                type={contactFormField.fieldType}
                placeholder={contactFormField.fieldPlaceholder}
                autoComplete={contactFormField.autoComplete}
                value={formValues[contactFormField.fieldName]}
                onChange={updateFormValue}
                required
                className={inputClasses}
              />
            </div>
          ))}

          <div>
            <label htmlFor="message" className="text-sm font-semibold text-ink">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Tell us about your project..."
              value={formValues.message}
              onChange={updateFormValue}
              required
              className={`${inputClasses} resize-y`}
            />
          </div>

          <Button type="submit" fullWidth>
            Send Message
          </Button>

          {isEmailAppOpened && (
            <p role="status" className="text-sm text-ink/70">
              Your email app should open with your message ready to send. If it
              doesn&apos;t, email us at{" "}
              <a href={`mailto:${officeEmail}`} className="text-gold underline">
                {officeEmail}
              </a>
              .
            </p>
          )}
        </form>
      </RevealOnScroll>
    </div>
  );
}
