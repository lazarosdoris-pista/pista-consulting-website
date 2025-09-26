# PISTA Consulting - React Website

Professionelle Digitalisierung für deutsche KMUs - React-basierte Website mit automatischem Deployment über Ionos Deploy Now.

## 🚀 Features

- **React 18** mit Vite Build-System
- **Tailwind CSS** für modernes Styling
- **ROI-Rechner** mit Live-Berechnungen
- **Responsive Design** für alle Geräte
- **SEO-optimiert** mit Meta-Tags und Sitemap
- **Performance-optimiert** mit Code-Splitting

## 🛠 Technologie-Stack

- **Frontend:** React 18 + Vite
- **Styling:** Tailwind CSS v4
- **Deployment:** Ionos Deploy Now
- **CI/CD:** Automatisch bei Git-Push

## 📦 Deployment

### Automatisches Deployment
Jeder Push zum `main`-Branch löst automatisch ein Deployment aus:

1. **Build-Prozess:** `npm ci && npm run build`
2. **Deployment:** Zu Ionos Global CDN
3. **Live:** https://pista.consulting

### Lokale Entwicklung

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev

# Production Build erstellen
npm run build

# Build lokal testen
npm run preview
```

## 🌐 Domain-Konfiguration

Die Website ist konfiguriert für:
- **Primary:** https://pista.consulting
- **Redirect:** www.pista.consulting → pista.consulting

## 📊 Performance

- **Build-Zeit:** ~30 Sekunden
- **Bundle-Größe:** ~240 KB (gzipped)
- **Ladezeit:** < 2 Sekunden
- **PageSpeed:** 95-100 Punkte

## 🔧 Konfiguration

### Deploy Now (.ionos.yaml)
- **Build-Commands:** npm ci && npm run build
- **Output-Directory:** dist/
- **Node.js Version:** 18
- **Cache-Headers:** Optimiert für Performance

### Vite (vite.config.js)
- **Build-Optimierung:** Code-Splitting, Minification
- **Asset-Handling:** Automatische Optimierung
- **Development:** Hot Module Replacement

## 📈 Monitoring

- **Deploy Now Dashboard:** Build-Status und Performance
- **Google Analytics:** Conversion-Tracking
- **Search Console:** SEO-Monitoring

## 🔄 Updates

1. **Lokale Änderungen** vornehmen
2. **Git commit & push** zu Repository
3. **Automatisches Build & Deployment**
4. **Live-Test** auf pista.consulting

## 📞 Support

- **Deploy Now:** https://docs.ionos.space
- **React:** https://react.dev
- **Vite:** https://vitejs.dev

## 📄 Lizenz

© 2025 PISTA Consulting. Alle Rechte vorbehalten.
