import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Email transporter configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// API endpoint to receive lead data
app.post('/api/send-lead', async (req, res) => {
  try {
    const leadData = req.body;
    
    // Log the lead data (for debugging)
    console.log('Received lead data:', leadData);

    // Format the email content
    const emailContent = `
Neue Lead-Anfrage von PISTA Consulting Website
================================================

Kontaktdaten:
-------------
Name: ${leadData.name}
E-Mail: ${leadData.email}
Telefon: ${leadData.phone}
Firma: ${leadData.company}

Fragebogen-Antworten:
---------------------
IT-Budget: ${getAnswerLabel(1, leadData[1])}
Mitarbeiteranzahl: ${getAnswerLabel(2, leadData[2])}
Relevantes Thema: ${getAnswerLabel(3, leadData[3])}
Projektstart: ${getAnswerLabel(4, leadData[4])}

Zeitstempel: ${leadData.timestamp}

================================================
Diese Anfrage wurde automatisch über das Lead-Konfigurator-Formular auf der PISTA Consulting Website generiert.
    `;

    // Send email
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.RECIPIENT_EMAIL || 'info@pista.consulting',
      subject: `Neue Lead-Anfrage: ${leadData.name} - ${leadData.company}`,
      text: emailContent,
    };

    await transporter.sendMail(mailOptions);

    console.log('Email sent successfully');
    
    res.status(200).json({ 
      success: true, 
      message: 'Lead erfolgreich versendet' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Fehler beim Versenden der Anfrage',
      error: error.message 
    });
  }
});

// Helper function to get readable labels for answers
function getAnswerLabel(questionId, value) {
  const labels = {
    1: {
      '<50k': '< 50.000€',
      '50-100k': '50.000€ - 100.000€',
      '100-250k': '100.000€ - 250.000€',
      '>250k': '> 250.000€',
    },
    2: {
      '<10': '< 10 Mitarbeiter',
      '10-50': '10 - 50 Mitarbeiter',
      '50-200': '50 - 200 Mitarbeiter',
      '>200': '> 200 Mitarbeiter',
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

  return labels[questionId]?.[value] || value || 'Nicht angegeben';
}

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
});

