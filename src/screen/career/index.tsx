"use client"

import { useState } from "react"
import Image from "next/image"
import Banner from "@/public/banner.png"

export function Career() {
  const [applicationForm, setApplicationForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    currentCompany: "",
    resume: null as File | null,
    aboutYourself: "",
    consent: false
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setApplicationForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setApplicationForm(prev => ({
      ...prev,
      resume: file
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Application submitted:", applicationForm)
  }

  const jobOpenings = [
    { title: "Presales Cyber Security", type: "Full Time", location: "Mumbai / Bangalore" },
    { title: "Presales Cyber Security", type: "Full Time", location: "Mumbai / Bangalore" },
    { title: "Presales Cyber Security", type: "Full Time", location: "Mumbai / Bangalore" },
    { title: "Presales Cyber Security", type: "Full Time", location: "Mumbai / Bangalore" },
    { title: "Presales Cyber Security", type: "Full Time", location: "Mumbai / Bangalore" },
    { title: "Presales Cyber Security", type: "Full Time", location: "Mumbai / Bangalore" },
    { title: "Presales Cyber Security", type: "Full Time", location: "Mumbai / Bangalore" },
    { title: "Presales Cyber Security", type: "Full Time", location: "Mumbai / Bangalore" }
  ]

  const benefits = [
    { title: "Growth Opportunities", icon: "📈" },
    { title: "Best Incentive Structure", icon: "💰" },
    { title: "Work-Life Balance", icon: "⚖️" },
    { title: "Collaborative Culture", icon: "🤝" },
    { title: "Fun, Dynamic Environment", icon: "🎉" }
  ]

  return (
    <div className="bg-white relative min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[700px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={Banner}
            alt="Career Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/46" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-[55px] font-bold text-white mb-6 leading-tight">
            Discover Your Future at Vcom Technologies
          </h1>
          <p className="text-[24px] text-white max-w-4xl leading-relaxed">
            Unleash Your Potential - Join vcom Technologies Driven and Innovative Workforce
          </p>
        </div>
      </div>

      {/* Current Openings Section */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[55px] font-bold text-black text-center mb-8">
            Current Openings
          </h2>
          <p className="text-[24px] text-black text-center mb-16 max-w-4xl mx-auto">
            Explore our current job openings and embark on a rewarding journey with Vcom Technologies.
            Together, let's make a difference in the world of technology.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <div key={`job-${job.title}-${index}`} className="bg-[#efeded] rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-6">
                <h3 className="text-[24px] font-bold text-black mb-2">
                  {job.title}
                </h3>
                <p className="text-[18px] text-black mb-2">
                  {job.type}
                </p>
                <p className="text-[20px] text-black mb-4">
                  {job.location}
                </p>
                <button className="bg-[#6bebb3] text-black text-[18px] font-semibold px-6 py-2 rounded-[50px] hover:bg-[#5dd4a3] transition-colors">
                  Apply
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[55px] font-bold text-black text-center mb-16">
            Benefits And Perks Of Working At Vcom Technologies
          </h2>

          <div className="grid md:grid-cols-5 gap-8">
            {benefits.map((benefit, index) => (
              <div key={`benefit-${benefit.title}-${index}`} className="text-center">
                <div className="w-[276px] h-[276px] bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-6xl">{benefit.icon}</span>
                </div>
                <h3 className="text-[24px] font-medium text-black">
                  {benefit.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Culture Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[55px] font-bold text-black text-center mb-8">
            Our Culture
          </h2>
          <p className="text-[24px] text-black text-center mb-16 max-w-4xl mx-auto">
            Moments that Inspire: Explore our vibrant company culture through captivating snapshots of company events and dynamic office spaces.
            Join Vcom Technologies and be part of a team that celebrates success, fosters collaboration, and embraces diversity.
            Apply now and experience the essence of our thriving work environment.
          </p>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {Array.from({ length: 12 }, (_, index) => (
                <div key={`culture-image-${index}-placeholder`} className="bg-[#d9d9d9] h-[196px] rounded-[15px] flex items-center justify-center">
                  <span className="text-4xl">📸</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Apply Now Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[55px] font-bold text-black mb-4">
            Apply Now
          </h2>
          <p className="text-[24px] text-black mb-16">
            Ignite Your Career in Technological Innovation at Vcom Technologies!
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Process Steps - Left Side */}
            <div>
              <h3 className="text-[36px] font-medium text-black mb-8">
                What we'll do next?
              </h3>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-[40px] h-[40px] bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-[24px] font-medium text-black">1</span>
                  </div>
                  <div>
                    <h4 className="text-[24px] font-medium text-black mb-2">
                      Contact you within 24 hours
                    </h4>
                    <p className="text-[24px] text-black">
                      Clarify your expectations, business objectives, and project requirements
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-[40px] h-[40px] bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-[24px] font-medium text-black">2</span>
                  </div>
                  <div>
                    <h4 className="text-[24px] font-medium text-black mb-2">
                      Review your application
                    </h4>
                    <p className="text-[24px] text-black">
                      Clarify your expectations, business objectives, and project requirements
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-[40px] h-[40px] bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-[24px] font-medium text-black">3</span>
                  </div>
                  <div>
                    <h4 className="text-[24px] font-medium text-black mb-2">
                      Schedule interview
                    </h4>
                    <p className="text-[24px] text-black">
                      Clarify your expectations, business objectives, and project requirements
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-[32px] font-semibold text-black mb-4">
                  Drop us a line
                </h4>
                <p className="text-[24px] text-black">
                  Marketing@vcomtechnologies.com
                </p>
              </div>
            </div>

            {/* Application Form - Right Side */}
            <div className="bg-white border border-black rounded-[20px] p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="block text-[20px] text-black mb-2">Full Name</label>
                    <input
                      id="fullName"
                      type="text"
                      name="fullName"
                      value={applicationForm.fullName}
                      onChange={handleInputChange}
                      className="w-full h-[41px] border-b border-black bg-transparent text-black"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[20px] text-black mb-2">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={applicationForm.email}
                      onChange={handleInputChange}
                      className="w-full h-[41px] border-b border-black bg-transparent text-black"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-[20px] text-black mb-2">Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={applicationForm.phone}
                    onChange={handleInputChange}
                    className="w-full h-[41px] border-b border-black bg-transparent text-black"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="position" className="block text-[20px] text-black mb-2">Position Applying For</label>
                  <input
                    id="position"
                    type="text"
                    name="position"
                    value={applicationForm.position}
                    onChange={handleInputChange}
                    className="w-full h-[41px] border-b border-black bg-transparent text-black"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="currentCompany" className="block text-[20px] text-black mb-2">Current Company</label>
                  <input
                    id="currentCompany"
                    type="text"
                    name="currentCompany"
                    value={applicationForm.currentCompany}
                    onChange={handleInputChange}
                    className="w-full h-[41px] border-b border-black bg-transparent text-black"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="resume-upload" className="block text-[20px] text-black mb-2">Upload Resume</label>
                  <div className="flex items-center gap-4">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                      id="resume-upload"
                    />
                    <label
                      htmlFor="resume-upload"
                      className="bg-[#efefef] text-black text-[16px] px-4 py-2 rounded-[50px] cursor-pointer hover:bg-gray-300 transition-colors"
                    >
                      Choose File
                    </label>
                    {applicationForm.resume && (
                      <span className="text-sm text-gray-600">{applicationForm.resume.name}</span>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="aboutYourself" className="block text-[20px] text-black mb-2">Tell Us About Yourself</label>
                  <textarea
                    id="aboutYourself"
                    name="aboutYourself"
                    value={applicationForm.aboutYourself}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full border-b border-black bg-transparent text-black resize-none"
                    required
                  />
                </div>

                <div className="flex items-center gap-3">
                  <input
                    id="consent"
                    type="checkbox"
                    name="consent"
                    checked={applicationForm.consent}
                    onChange={handleInputChange}
                    className="w-[20px] h-[20px] border border-black"
                    required
                  />
                  <label htmlFor="consent" className="text-[15px] text-black">
                    I consent to processing of my personal data entered above for Vcom Technologies to contact me.
                  </label>
                </div>

                <button
                  type="submit"
                  className="bg-[#6bebb3] text-black text-[18px] font-semibold px-6 py-3 rounded-[50px] hover:bg-[#5dd4a3] transition-colors"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
