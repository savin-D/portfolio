import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.get("/health", (req, res) => res.json({ ok: true }));

app.post("/send", async (req, res) => {
  try {
    const { email, message } = req.body;
    if (!email || !message) return res.status(400).json({ error: "Missing fields" });

    const to = process.env.TO_EMAIL || process.env.SMTP_USER;

    const info = await transporter.sendMail({
      from: `Portfolio Contact <${process.env.SMTP_USER}>`,
      to,
      subject: `New portfolio message from ${email}`,
      text: `From: ${email}\n\n${message}`,
    });

    console.log("Email sent", info.messageId);
    res.json({ ok: true });
  } catch (err) {
    console.error("Mail send error:", err);
    res.status(500).json({ error: "Failed to send message" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Mail server listening on ${PORT}`));
