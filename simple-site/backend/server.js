const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, subject, service, message } = req.body;

  const html = `
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>
    <p>Service: ${service}</p>
    <p>Message: ${message}</p>
  `;

  try {
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL_ADDRESS,
      to: process.env.TO_EMAIL_ADDRESS,
      subject: subject,
      html: html,
    });

    if (error) {
      console.error({ error });
      return res.status(400).json({ error });
    }

    res.status(200).json({ data });
  } catch (error) {
    console.error({ error });
    res.status(500).json({ error });
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
