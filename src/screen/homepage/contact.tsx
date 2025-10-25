"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    agree: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.agree) {
      alert("Please agree to the privacy policy.");
      return;
    }

    setLoading(true);
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      alert("✅ Email sent successfully!");
      setForm({ firstName: "", lastName: "", email: "", phone: "", company: "", message: "", agree: false });
    } else {
      alert("❌ Error: " + data.error);
    }
  };

  return (
    <section id="contact" className="w-full py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Get in touch with our experts to discuss how we can help you build, optimize, and secure your technology solutions.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="bg-gray-50 py-4 text-lg rounded-lg border-2 border-gray-200 focus:border-[#6bebb3] transition-colors"
              required
            />
            <Input
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="bg-gray-50 py-4 text-lg rounded-lg border-2 border-gray-200 focus:border-[#6bebb3] transition-colors"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="bg-gray-50 py-4 text-lg rounded-lg border-2 border-gray-200 focus:border-[#6bebb3] transition-colors"
              required
            />
            <Input
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="bg-gray-50 py-4 text-lg rounded-lg border-2 border-gray-200 focus:border-[#6bebb3] transition-colors"
            />
          </div>

          <Input
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Company Name"
            className="bg-gray-50 py-4 text-lg rounded-lg border-2 border-gray-200 focus:border-[#6bebb3] transition-colors"
          />

          <Textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your project and how we can help..."
            rows={6}
            className="bg-gray-50 rounded-lg text-lg resize-none border-2 border-gray-200 focus:border-[#6bebb3] transition-colors"
            required
          />

          <div className="flex items-center justify-center space-x-2">
            <Checkbox
              id="privacy"
              name="agree"
              checked={form.agree}
              onCheckedChange={(checked) => setForm({ ...form, agree: !!checked })}
            />
            <label htmlFor="privacy" className="text-lg text-black">
              I have read and agree to the terms in the{" "}
              <Link href="/privacy-policy" className="text-[#6bebb3] hover:underline">
                privacy policy
              </Link>.
            </label>
          </div>

          <div className="text-center">
            <Button
              type="submit"
              disabled={loading}
              className="bg-[#6bebb3] text-black hover:bg-[#5dd1a0] px-12 py-4 text-lg font-semibold rounded-lg transition-colors"
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
