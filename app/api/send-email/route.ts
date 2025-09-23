import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, phone, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // 1️⃣ Send notification email to Admin (you)
    await transporter.sendMail({
      from: `"${firstName} ${lastName}" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: "New Contact Form Submission",
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    // 2️⃣ Send Thank You email to User
    await transporter.sendMail({
      from: `"Meher Sra Designs" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting us!",
      text: `Hi ${firstName},\n\nThank you for reaching out! We have received your message and will get back to you shortly.\n\nBest regards,\nYour Company`,
      html: `
        <h2>Thank You, ${firstName}!</h2>
        <p>We have received your message and our team will get back to you soon.</p>
        <p><em>Meher Sra Designs</em></p>
      `,
    });

    return Response.json({ success: true, message: "Emails sent successfully" });
} catch (error: unknown) {
	console.error("Email error:", error);
   const message = error instanceof Error ? error.message : "Unknown error";
   return Response.json({ success: false, error: message }, { status: 500 });
  }
}
