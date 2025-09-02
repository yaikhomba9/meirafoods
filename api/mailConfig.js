import brevo from "@getbrevo/brevo";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  try {
    const client = new brevo.TransactionalEmailsApi();
    client.setApiKey(
      brevo.TransactionalEmailsApiApiKeys.apiKey,
      process.env.BREVO_API_KEY
    );

    await client.sendTransacEmail({
      sender: { email: "your_verified_sender@email.com" },
      to: [{ email: "your_destination@email.com" }],
      subject: "New Contact Form Submission",
      htmlContent: `
        <h3>New Inquiry</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
}