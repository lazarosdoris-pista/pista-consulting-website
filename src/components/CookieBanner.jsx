import { useEffect } from 'react';
import * as CookieConsent from 'vanilla-cookieconsent';
import 'vanilla-cookieconsent/dist/cookieconsent.css';

const CookieBanner = () => {
  useEffect(() => {
    CookieConsent.run({
      guiOptions: {
        consentModal: {
          layout: 'box',
          position: 'bottom right',
          equalWeightButtons: true,
          flipButtons: false
        },
        preferencesModal: {
          layout: 'box',
          position: 'right',
          equalWeightButtons: true,
          flipButtons: false
        }
      },
      categories: {
        necessary: {
          readOnly: true
        },
        analytics: {},
        marketing: {}
      },
      language: {
        default: 'de',
        translations: {
          de: {
            consentModal: {
              title: 'Wir verwenden Cookies!',
              description: 'Hallo! Diese Website verwendet essenzielle Cookies, um ihren ordnungsgemäßen Betrieb zu gewährleisten, und Tracking-Cookies, um zu verstehen, wie Sie mit ihr interagieren. Letztere werden nur nach Zustimmung gesetzt.',
              acceptAllBtn: 'Alle akzeptieren',
              acceptNecessaryBtn: 'Nur notwendige',
              showPreferencesBtn: 'Einstellungen verwalten',
              footer: '<a href="#datenschutz">Datenschutzerklärung</a>\n<a href="#impressum">Impressum</a>'
            },
            preferencesModal: {
              title: 'Cookie-Einstellungen',
              acceptAllBtn: 'Alle akzeptieren',
              acceptNecessaryBtn: 'Nur notwendige',
              savePreferencesBtn: 'Einstellungen speichern',
              closeIconLabel: 'Modal schließen',
              serviceCounterLabel: 'Service|Services',
              sections: [
                {
                  title: 'Cookie-Nutzung',
                  description: 'Wir verwenden Cookies, um die grundlegenden Website-Funktionen zu gewährleisten und Ihr Online-Erlebnis zu verbessern. Sie können für jede Kategorie wählen, ob Sie sich anmelden/abmelden möchten. Für weitere Details zu Cookies und anderen sensiblen Daten lesen Sie bitte die vollständige <a href="#datenschutz" class="cc-link">Datenschutzerklärung</a>.'
                },
                {
                  title: 'Unbedingt erforderliche Cookies',
                  description: 'Diese Cookies sind für das ordnungsgemäße Funktionieren meiner Website unerlässlich. Ohne diese Cookies würde die Website nicht richtig funktionieren.',
                  linkedCategory: 'necessary'
                },
                {
                  title: 'Analyse-Cookies',
                  description: 'Diese Cookies ermöglichen es der Website, sich an Ihre Auswahl zu erinnern (wie Ihren Benutzernamen, Ihre Sprache oder die Region, in der Sie sich befinden) und erweiterte, personalisiertere Funktionen bereitzustellen.',
                  linkedCategory: 'analytics'
                },
                {
                  title: 'Marketing-Cookies',
                  description: 'Diese Cookies sammeln Informationen darüber, wie Sie die Website nutzen, welche Seiten Sie besucht haben und auf welche Links Sie geklickt haben. Alle Daten sind anonymisiert und können nicht verwendet werden, um Sie zu identifizieren.',
                  linkedCategory: 'marketing'
                },
                {
                  title: 'Weitere Informationen',
                  description: 'Bei Fragen zu unserer Cookie-Richtlinie und Ihren Wahlmöglichkeiten wenden Sie sich bitte an uns unter <a class="cc-link" href="mailto:info@pista.consulting">info@pista.consulting</a>.'
                }
              ]
            }
          }
        }
      },
      onFirstConsent: ({ cookie }) => {
        console.log('onFirstConsent fired', cookie);
      },
      onConsent: ({ cookie }) => {
        console.log('onConsent fired!', cookie);
      },
      onChange: ({ cookie, changedCategories }) => {
        console.log('onChange fired!', cookie, changedCategories);
      },
      onModalReady: ({ modalName }) => {
        console.log('ready:', modalName);
      },
      onModalShow: ({ modalName }) => {
        console.log('show:', modalName);
      },
      onModalHide: ({ modalName }) => {
        console.log('hide:', modalName);
      }
    });

    // Custom CSS for PISTA branding
    const style = document.createElement('style');
    style.textContent = `
      /* PISTA Consulting Cookie Banner Styling */
      :root {
        --cc-bg: #ffffff;
        --cc-text: #1f1f1e;
        --cc-btn-primary-bg: #E4002B;
        --cc-btn-primary-text: #ffffff;
        --cc-btn-primary-hover-bg: #c8001f;
        --cc-btn-secondary-bg: #1f1f1e;
        --cc-btn-secondary-text: #ffffff;
        --cc-btn-secondary-hover-bg: #333333;
        --cc-overlay-bg: rgba(31, 31, 30, 0.8);
        --cc-webkit-scrollbar-bg: #f1f1f1;
        --cc-webkit-scrollbar-bg-hover: #c1c1c1;
      }

      /* Modal styling */
      #cc-main .cm {
        font-family: 'Gomme Sans Regular', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
        border-radius: 8px !important;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1) !important;
      }

      /* Title styling */
      #cc-main .cm__title {
        font-family: 'Gomme Sans Bold', sans-serif !important;
        color: #1f1f1e !important;
        font-size: 1.25rem !important;
        margin-bottom: 1rem !important;
      }

      /* Description styling */
      #cc-main .cm__desc {
        font-family: 'Gomme Sans Regular', sans-serif !important;
        color: #1f1f1e !important;
        line-height: 1.5 !important;
        margin-bottom: 1.5rem !important;
      }

      /* Button styling */
      #cc-main .cm__btn {
        font-family: 'Gomme Sans Bold', sans-serif !important;
        border-radius: 6px !important;
        padding: 0.75rem 1.5rem !important;
        font-weight: 600 !important;
        transition: all 0.2s ease !important;
        border: none !important;
      }

      /* Primary button (Accept All) */
      #cc-main .cm__btn--primary {
        background-color: #E4002B !important;
        color: #ffffff !important;
      }

      #cc-main .cm__btn--primary:hover {
        background-color: #c8001f !important;
        opacity: 0.9 !important;
      }

      /* Secondary button (Necessary Only) */
      #cc-main .cm__btn--secondary {
        background-color: #1f1f1e !important;
        color: #ffffff !important;
      }

      #cc-main .cm__btn--secondary:hover {
        background-color: #333333 !important;
      }

      /* Preferences modal */
      #cc-main .pm {
        font-family: 'Gomme Sans Regular', sans-serif !important;
        border-radius: 8px !important;
      }

      #cc-main .pm__title {
        font-family: 'Gomme Sans Bold', sans-serif !important;
        color: #1f1f1e !important;
      }

      #cc-main .pm__section-title {
        font-family: 'Gomme Sans Bold', sans-serif !important;
        color: #1f1f1e !important;
      }

      /* Toggle switches */
      #cc-main .section__toggle .toggle__input:checked + .toggle__slider {
        background-color: #E4002B !important;
      }

      /* Links */
      #cc-main .cc-link {
        color: #E4002B !important;
        text-decoration: underline !important;
      }

      #cc-main .cc-link:hover {
        color: #c8001f !important;
      }

      /* Footer links */
      #cc-main .cm__footer a {
        color: #E4002B !important;
        text-decoration: underline !important;
        margin-right: 1rem !important;
      }

      #cc-main .cm__footer a:hover {
        color: #c8001f !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null; // This component doesn't render anything visible itself
};

export default CookieBanner;
