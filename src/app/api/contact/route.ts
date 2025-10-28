import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.EMAIL_API_KEY);

  try {
    const { firstName, lastName, email, message } = await req.json();

    await resend.emails.send({
      from: `EctoEcology Contact Submission <${process.env.NO_REPLY_EMAIL}>`,
      to: [process.env.MY_EMAIL_ADDRESS],
      subject: "New Contact Form Submission",
      replyTo: email,
      html: `<p>Hello,</p>
      <p>You have received a new contact form submission from <strong>${firstName} ${lastName}</strong> (${email}).</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(`Failed to send contact form email: `, error);
    return NextResponse.json({ success: false, error: "Failed to send email" });
  }
}
