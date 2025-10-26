# PISTA Consulting Backend Server

Backend-Server für das Lead-Konfigurator-Formular der PISTA Consulting Website.

## Features

- Express.js REST API
- E-Mail-Versand über SMTP (Nodemailer)
- CORS-Unterstützung für Frontend-Integration
- Umgebungsvariablen-Konfiguration

## Installation

```bash
cd server
npm install
```

## Konfiguration

1. Kopieren Sie `.env.example` zu `.env`:
```bash
cp .env.example .env
```

2. Bearbeiten Sie `.env` und tragen Sie Ihre SMTP-Zugangsdaten ein:

```env
PORT=3001
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=ihre-email@gmail.com
SMTP_PASS=ihr-app-passwort
RECIPIENT_EMAIL=info@pista.consulting
```

### Gmail-Konfiguration

Für Gmail benötigen Sie ein **App-Passwort**:

1. Aktivieren Sie die 2-Faktor-Authentifizierung in Ihrem Google-Konto
2. Gehen Sie zu https://myaccount.google.com/apppasswords
3. Erstellen Sie ein neues App-Passwort für "Mail"
4. Verwenden Sie dieses Passwort als `SMTP_PASS` (nicht Ihr normales Passwort!)

### Alternative SMTP-Anbieter

**Outlook/Hotmail:**
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
```

**Custom SMTP:**
```env
SMTP_HOST=mail.ihre-domain.de
SMTP_PORT=587
```

## Entwicklung

Starten Sie den Server im Entwicklungsmodus (mit Auto-Reload):

```bash
npm run dev
```

## Produktion

Starten Sie den Server:

```bash
npm start
```

Der Server läuft standardmäßig auf Port 3001.

## API-Endpunkte

### POST /api/send-lead

Empfängt Lead-Daten vom Konfigurator-Formular und versendet sie per E-Mail.

**Request Body:**
```json
{
  "1": "<50k",
  "2": "10-50",
  "3": "odoo_erp",
  "4": "1_month",
  "email": "kunde@example.com",
  "name": "Max Mustermann",
  "company": "Beispiel GmbH",
  "phone": "0123456789",
  "timestamp": "2025-10-26T12:00:00.000Z"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Lead erfolgreich versendet"
}
```

**Response (Error):**
```json
{
  "success": false,
  "message": "Fehler beim Versenden der Anfrage",
  "error": "Error message"
}
```

### GET /health

Health-Check-Endpunkt zum Überprüfen, ob der Server läuft.

**Response:**
```json
{
  "status": "OK",
  "message": "Server is running"
}
```

## Frontend-Integration

Das Frontend sendet Anfragen an `http://localhost:3001/api/send-lead`.

Für die Produktion müssen Sie:
1. Den Backend-Server auf einem Server hosten
2. Die Frontend-URL in `LeadConfigurator.jsx` anpassen
3. CORS-Einstellungen entsprechend konfigurieren

## Deployment

### Option 1: Auf demselben Server wie Frontend

Verwenden Sie einen Reverse-Proxy (z.B. Nginx), um `/api/*` an den Backend-Server weiterzuleiten.

### Option 2: Separater Backend-Server

Hosten Sie den Backend-Server separat und aktualisieren Sie die API-URL im Frontend.

### Option 3: Serverless (z.B. Vercel, Netlify Functions)

Konvertieren Sie den Express-Server in Serverless Functions.

## Troubleshooting

### E-Mails werden nicht versendet

1. Überprüfen Sie die SMTP-Zugangsdaten in `.env`
2. Stellen Sie sicher, dass Sie ein App-Passwort verwenden (bei Gmail)
3. Prüfen Sie die Firewall-Einstellungen (Port 587 muss offen sein)
4. Überprüfen Sie die Server-Logs auf Fehlermeldungen

### CORS-Fehler

Wenn das Frontend auf einer anderen Domain läuft, passen Sie die CORS-Konfiguration in `index.js` an:

```javascript
app.use(cors({
  origin: 'https://ihre-domain.de'
}));
```

## Sicherheit

- Speichern Sie `.env` niemals in Git (bereits in `.gitignore`)
- Verwenden Sie starke Passwörter
- Aktivieren Sie SSL/TLS in der Produktion
- Implementieren Sie Rate-Limiting für die API
- Validieren Sie alle Eingaben

## Lizenz

MIT

