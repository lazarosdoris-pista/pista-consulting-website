import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Map answer IDs to readable labels
const getAnswerLabel = (questionId, value) => {
  const labels = {
    1: {
      '<50k': '< 50.000€',
      '50-100k': '50.000€ - 100.000€',
      '100-250k': '100.000€ - 250.000€',
      '>250k': '> 250.000€',
    },
    2: {
      '<10': '< 10',
      '10-50': '10 - 50',
      '50-200': '50 - 200',
      '>200': '> 200',
    },
    3: {
      'odoo_erp': 'Odoo ERP Implementierung',
      'digital_strategy': 'Digitalisierungsstrategie',
      'process_optimization': 'Prozessoptimierung',
      'ai_automation': 'KI & Automatisierung',
    },
    4: {
      '1_month': 'Innerhalb 1 Monats',
      '1-3_months': '1-3 Monate',
      '3-6_months': '3-6 Monate',
      'later': 'Später',
    },
  };
  return labels[questionId]?.[value] || value;
};

// API endpoint to send lead
app.post('/api/send-lead', async (req, res) => {
  try {
    const { 1: q1, 2: q2, 3: q3, 4: q4, email, name, company, phone, timestamp } = req.body;

    // Prepare email content
    const emailContent = `
      <h2>Neue Lead-Anfrage</h2>
      <p><strong>Zeitstempel:</strong> ${new Date(timestamp).toLocaleString('de-DE')}</p>
      
      <h3>Kontaktdaten:</h3>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>E-Mail:</strong> ${email}</li>
        <li><strong>Telefon:</strong> ${phone}</li>
        <li><strong>Firma:</strong> ${company || 'Nicht angegeben'}</li>
      </ul>
      
      <h3>Antworten zum Konfigurator:</h3>
      <ul>
        <li><strong>IT-Budget:</strong> ${getAnswerLabel(1, q1)}</li>
        <li><strong>Mitarbeiterzahl:</strong> ${getAnswerLabel(2, q2)}</li>
        <li><strong>Relevantes Thema:</strong> ${getAnswerLabel(3, q3)}</li>
        <li><strong>Projektstart:</strong> ${getAnswerLabel(4, q4)}</li>
      </ul>
    `;

    // Send email to PISTA
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'fl@leibinger-am.de',
      subject: `Neue Lead-Anfrage von ${name}`,
      html: emailContent,
    });

    res.status(200).json({ success: true, message: 'Lead erfolgreich versendet' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Fehler beim Versenden der Anfrage' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});

