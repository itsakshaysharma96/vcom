"use client"

import { useState } from "react"
import Image from "next/image"
import Banner from "@/public/banner.png"

export function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    agreeToPrivacy: false
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  return (
    <div className="bg-white relative min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[700px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={Banner}
            alt="Contact Us Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/46" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-[55px] font-bold text-white mb-6 leading-tight">
            Feel free to get in touch
          </h1>
          <p className="text-[24px] text-white max-w-4xl leading-relaxed">
            We're here to answer your questions, discuss your project, or help you explore
            the perfect Vcom solution—just drop us a message and we'll get back to you shortly.
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-[39px] shadow-[7px_10px_42.4px_0px_rgba(0,0,0,0.25)] p-8">
            <h2 className="text-[32px] font-bold text-black mb-8">
              Leave your message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-[20px] font-semibold text-black mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="w-full h-[51px] bg-[#f2f2f2] border border-[#e8e8e8] rounded-[5px] px-4 text-[16px] text-black placeholder-[rgba(0,0,0,0.16)]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[20px] font-semibold text-black mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your email"
                    className="w-full h-[51px] bg-[#f2f2f2] border border-[#e8e8e8] rounded-[5px] px-4 text-[16px] text-black placeholder-[rgba(0,0,0,0.16)]"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-[20px] font-semibold text-black mb-2">
                  Phone no
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="phone No"
                  className="w-full h-[51px] bg-[#f2f2f2] border border-[#e8e8e8] rounded-[5px] px-4 text-[16px] text-black placeholder-[rgba(0,0,0,0.16)]"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[20px] font-medium text-black mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="message"
                  rows={4}
                  className="w-full bg-[#f2f2f2] border border-[#e8e8e8] rounded-[5px] px-4 py-3 text-[16px] text-black placeholder-[rgba(0,0,0,0.16)] resize-none"
                  required
                />
              </div>

              <div className="flex items-center gap-3">
                <input
                  id="agreeToPrivacy"
                  type="checkbox"
                  name="agreeToPrivacy"
                  checked={formData.agreeToPrivacy}
                  onChange={handleInputChange}
                  className="w-[21px] h-[21px]"
                  required
                />
                <label htmlFor="agreeToPrivacy" className="text-[14px] text-black">
                  I agree to the privacy policy
                </label>
              </div>

              <button
                type="submit"
                className="bg-[#6bebb3] text-black text-[15px] font-semibold px-8 py-3 rounded-[50px] hover:bg-[#5dd4a3] transition-colors"
              >
                Send message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-[55px] font-bold text-black mb-6">
                Don't hesitate to contact us
              </h3>
              <p className="text-[24px] text-black leading-relaxed">
                Let's work together to turn your space into something extraordinary.
                Contact our team today.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white border border-[#e8e8e8] rounded-[12px] p-6 h-[105px] flex items-center">
                <div className="w-[52px] h-[52px] bg-gray-200 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-2xl">🏢</span>
                </div>
                <div>
                  <h4 className="text-[24px] font-medium text-black mb-1">OFFICE</h4>
                  <p className="text-[15px] text-black">Mumbai</p>
                </div>
              </div>

              <div className="bg-white border border-[#e8e8e8] rounded-[12px] p-6 h-[105px] flex items-center">
                <div className="w-[52px] h-[52px] bg-gray-200 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-2xl">📞</span>
                </div>
                <div>
                  <h4 className="text-[24px] font-medium text-black mb-1">PHONE</h4>
                  <p className="text-[15px] text-black">+91 9325445400</p>
                </div>
              </div>

              <div className="bg-white border border-[#e8e8e8] rounded-[12px] p-6 h-[105px] flex items-center">
                <div className="w-[52px] h-[52px] bg-gray-200 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-2xl">⏰</span>
                </div>
                <div>
                  <h4 className="text-[24px] font-medium text-black mb-1">WORK HOURS</h4>
                  <p className="text-[15px] text-black">11 am to 7 pm</p>
                </div>
              </div>

              <div className="bg-white border border-[#e8e8e8] rounded-[12px] p-6 h-[105px] flex items-center">
                <div className="w-[52px] h-[52px] bg-gray-200 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-2xl">✉️</span>
                </div>
                <div>
                  <h4 className="text-[24px] font-medium text-black mb-1">EMAIL</h4>
                  <p className="text-[15px] text-black">Marketing@vcomtechnologies.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Offices Section */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[55px] font-bold text-black text-center mb-16">
            Our offices
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mumbai Corporate Office */}
            <div className="bg-[#efeded] rounded-lg shadow-[3px_4px_8.3px_0px_rgba(0,0,0,0.13)] p-6">
              <div className="flex items-start gap-4">
                <div className="w-[96px] h-[96px] bg-gray-300 rounded-lg flex items-center justify-center">
                  <span className="text-3xl">🏢</span>
                </div>
                <div>
                  <h3 className="text-[32px] font-medium text-black mb-2">
                    Mumbai : Corporate Office
                  </h3>
                  <p className="text-[16px] text-black leading-relaxed">
                    215 Atrium, C Wing 222,<br />
                    2nd floor, andheri Kurla Road,<br />
                    Next To Courtyard Marriott,<br />
                    Chakala, Andheri-East, mumbai-400093
                  </p>
                </div>
              </div>
            </div>

            {/* Mumbai Head Office */}
            <div className="bg-[#efeded] rounded-lg shadow-[3px_4px_8.3px_0px_rgba(0,0,0,0.13)] p-6">
              <div className="flex items-start gap-4">
                <div className="w-[96px] h-[96px] bg-gray-300 rounded-lg flex items-center justify-center">
                  <span className="text-3xl">🏢</span>
                </div>
                <div>
                  <h3 className="text-[32px] font-medium text-black mb-2">
                    Mumbai Head Office
                  </h3>
                  <p className="text-[16px] text-black leading-relaxed">
                    13/14, c wing, krishna complex, off. Subhash road, Vile parle<br />
                    east, mumbai-400057
                  </p>
                </div>
              </div>
            </div>

            {/* Kolkata */}
            <div className="bg-[#efeded] rounded-lg shadow-[3px_4px_8.3px_0px_rgba(0,0,0,0.13)] p-6">
              <div className="flex items-start gap-4">
                <div className="w-[96px] h-[96px] bg-gray-300 rounded-lg flex items-center justify-center">
                  <span className="text-3xl">🏢</span>
                </div>
                <div>
                  <h3 className="text-[32px] font-medium text-black mb-2">
                    Kolkata
                  </h3>
                  <p className="text-[16px] text-black leading-relaxed">
                    503, RDB, Boulevard,<br />
                    5th floor, Plot k-1 sector v,<br />
                    block eP & gP, Salt Lake City,<br />
                    kolkata-700091
                  </p>
                </div>
              </div>
            </div>

            {/* Delhi */}
            <div className="bg-[#efeded] rounded-lg shadow-[3px_4px_8.3px_0px_rgba(0,0,0,0.13)] p-6">
              <div className="flex items-start gap-4">
                <div className="w-[96px] h-[96px] bg-gray-300 rounded-lg flex items-center justify-center">
                  <span className="text-3xl">🏢</span>
                </div>
                <div>
                  <h3 className="text-[32px] font-medium text-black mb-2">
                    Delhi
                  </h3>
                  <p className="text-[16px] text-black leading-relaxed">
                    Green Boulevard, Regus Building, 5th Floor 524, Sector 62, Noida
                  </p>
                </div>
              </div>
            </div>

            {/* Pune */}
            <div className="bg-[#efeded] rounded-lg shadow-[3px_4px_8.3px_0px_rgba(0,0,0,0.13)] p-6">
              <div className="flex items-start gap-4">
                <div className="w-[96px] h-[96px] bg-gray-300 rounded-lg flex items-center justify-center">
                  <span className="text-3xl">🏢</span>
                </div>
                <div>
                  <h3 className="text-[32px] font-medium text-black mb-2">
                    Pune
                  </h3>
                  <p className="text-[16px] text-black leading-relaxed">
                    6th Floor, The Kode, Baner- Pashan<br />
                    Link Road baner, 411021
                  </p>
                </div>
              </div>
            </div>

            {/* Bengaluru */}
            <div className="bg-[#efeded] rounded-lg shadow-[3px_4px_8.3px_0px_rgba(0,0,0,0.13)] p-6">
              <div className="flex items-start gap-4">
                <div className="w-[96px] h-[96px] bg-gray-300 rounded-lg flex items-center justify-center">
                  <span className="text-3xl">🏢</span>
                </div>
                <div>
                  <h3 className="text-[32px] font-medium text-black mb-2">
                    Bengaluru
                  </h3>
                  <p className="text-[16px] text-black leading-relaxed">
                    16th Floor, Dr. puneeth Raj kumar Road, MS Ramaiah North city,<br />
                    Manayata MSR north Tower 560045 Bengaluru<br />
                    Karnataka, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 bg-gradient-to-r from-[rgba(4,23,75,0.89)] to-[rgba(65,69,179,0.89)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[55px] font-bold text-white mb-6">
            Lorem Ipsum
          </h2>
          <p className="text-[24px] text-white mb-8 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </p>
          <button className="bg-[#6bebb3] text-black text-[24px] font-semibold px-8 py-4 rounded-[50px] hover:bg-[#5dd4a3] transition-colors">
            Enquire now
          </button>
        </div>
      </div>
    </div>
  )
}
