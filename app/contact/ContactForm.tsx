"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <div className="space-y-6 text-body-sm">
          <div className="flex gap-3">
            <MapPin className="w-5 h-5 shrink-0 text-black" />
            <div>
              <p className="font-semibold text-black mb-1">Company Address</p>
              <p>
                No 6 & 7, Association Road,
                <br />
                Madhavaram,
                <br />
                Chennai – 600 060
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <Mail className="w-5 h-5 shrink-0 text-black" />
            <div>
              <p className="font-semibold text-black mb-1">Email</p>
              <a
                href="mailto:info@reliancediamondtools.com"
                className="link-primary text-sm"
              >
                info@reliancediamondtools.com
              </a>
            </div>
          </div>
          <div className="flex gap-3">
            <Phone className="w-5 h-5 shrink-0 text-black" />
            <div>
              <p className="font-semibold text-black mb-1">Phone</p>
              <p>+91-XXXXXXXXXX</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-gainsboro bg-white p-6 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-4">
          {(["name", "company", "email", "phone"] as const).map((field) => (
            <div key={field}>
              <label
                htmlFor={field}
                className="block text-sm font-semibold text-black mb-1 capitalize"
              >
                {field}
              </label>
              <input
                id={field}
                name={field}
                type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                required={field === "name" || field === "email"}
                value={formState[field]}
                onChange={handleChange}
                className="form-field w-full border border-gainsboro px-3 py-2.5 text-sm text-black transition-colors"
              />
            </div>
          ))}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-black mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formState.message}
              onChange={handleChange}
              className="form-field w-full border border-gainsboro px-3 py-2.5 text-sm text-black transition-colors"
            />
          </div>
          <button type="submit" className="w-full btn-primary py-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
