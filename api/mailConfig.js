import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const publicKey= "d9A_xI33x3EGiIoQB";
    const serviceID= "service_fo8ev59";
    const templateId = "template_3u29u8e";

    emailjs
      .sendForm(serviceID, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};






















/* import SibApiV3Sdk from "@sendinblue/client";

export default async function handler(req, res) {
  // --- 1. CORS headers ---
  res.setHeader("Access-Control-Allow-Origin", "*"); // allow requests from any origin
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // --- 2. Handle preflight OPTIONS request ---
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // --- 3. Only allow POST ---
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // --- 4. Check API key ---
  if (!process.env.BREVO_API_KEY) {
    console.error("BREVO_API_KEY not set in Vercel!");
    return res.status(500).json({ error: "Server misconfigured" });
  }

  const { name, email, message } = req.body;

  try {
    // --- 5. Initialize Brevo client ---
    const client = SibApiV3Sdk.ApiClient.instance;
    client.authentications["api-key"].apiKey = process.env.BREVO_API_KEY;

    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail({
      sender: { email: "support@meirafoods.in", name: "Meira Foods" },
      to: [{ email: "meirafoods.care@meirafoods.in" }],
      subject: `New message from ${name}`,
      htmlContent: `
        <h2>New Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    await apiInstance.sendTransacEmail(sendSmtpEmail);

    // --- 6. Success response ---
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Brevo error:", err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
 */