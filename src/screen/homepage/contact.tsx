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
      setForm({ firstName: "", lastName: "", email: "", phone: "", message: "", agree: false });
    } else {
      alert("❌ Error: " + data.error);
    }
  };

  return (
    <section id="contactUs" className="w-full px-6 md:py-16 py-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-12">
          <div>
            <h2 className="font-serif text-2xl lg:text-4xl font-medium text-black tracking-widest mb-8 text-center">
              GET IN TOUCH
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6 text-black md:mx-16">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="bg-background/70 py-8 text-base rounded"
                  required
                />
                <Input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="bg-background/70 py-8 text-base rounded"
                  required
                />
              </div>

              <Input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="bg-background/70 py-8 text-base rounded"
                required
              />

              <Input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="bg-background/70 py-8 text-base rounded"
              />

              <Textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                rows={12}
                className="bg-background/70 rounded text-base resize-none h-[6rem]"
                required
              />

              <div className="flex items-center justify-center space-x-2">
                <Checkbox
                  id="privacy"
                  name="agree"
                  checked={form.agree}
                  onCheckedChange={(checked) => setForm({ ...form, agree: !!checked })}
                />
                <label htmlFor="privacy" className="text-base text-black">
                  I have read and agree to the terms in the{" "}
                  <Link href="/privacy" className="underline">
                    privacy policy
                  </Link>.
                </label>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="btn-sophie text-lg mx-auto text-center flex rounded-none px-12 tracking-wider py-6 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {loading ? "Sending..." : "SEND"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
