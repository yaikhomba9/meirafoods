// backend/server.js
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/send-email", async (req, res) => {
  const { name, email, phone, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: "name, email, and message are required" });
  }

  try {
    const apiKey = process.env.BREVO_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const senderEmail = process.env.SENDER_EMAIL;

    if (!apiKey || !toEmail || !senderEmail) {
      return res.status(500).json({ error: "Server env not configured" });
    }

    const payload = {
      sender: { email: senderEmail, name: "Website Contact" },
      to: [{ email: toEmail }],
      subject: `New inquiry from ${name}`,
      htmlContent: `
        <h2>New Inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      `,
      replyTo: { email, name },
    };

    const resp = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "accept": "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await resp.json();
    if (!resp.ok) {
      return res.status(resp.status).json({ error: data.message || "Brevo API error", data });
    }

    res.json({ ok: true, data });
  } catch (err) {
    res.status(500).json({ error: "Failed to send", details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

// helper
function escapeHtml(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
