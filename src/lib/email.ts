import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type SendContactEmailParams = {
  name: string;
  email: string;
  message: string;
};

export async function sendContactEmail({
  name,
  email,
  message,
}: SendContactEmailParams) {
  return resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: "muhdid82@gmail.com",
    subject: `New message from ${name}`,
    replyTo: email,
    html: `
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>📩 New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr />
        <p>${message}</p>
      </div>
    `,
  });
}
