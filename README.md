# Maestro Solutions Ltd. — Company Website

Static marketing website for **Maestro Solutions Ltd.**, Bangladesh's leading ISP software company, founded in 2000. BTRC-approved and Cyber Police Bureau certified.

**Update Demo site for** [maestro.com.bd](https://maestro.com.bd/)
**Built by** [SKMMT](http://skmmt.rootexception.com/)

---

## Pages

| File | Route |
|---|---|
| [index.html](index.html) | Home — hero, product overview, clients ticker, about teaser |
| [about.html](about.html) | Company story, team, expertise |
| [products.html](products.html) | Full product details and pricing |
| [clients.html](clients.html) | Client list |
| [contact.html](contact.html) | Contact form and office info |
| [delivery.html](delivery.html) | Delivery policy |
| [privacy.html](privacy.html) | Privacy policy |
| [refund.html](refund.html) | Refund policy |
| [terms.html](terms.html) | Terms and conditions |

## Products

- **IP Log Server** — Collects, stores, and searches user logs from MikroTik and remote routers. BTRC-compliant with automatic backup and search dashboard.
- **MaXim ISP Billing** — Full ISP management ERP: Radius/API billing, reseller management, CRM, payment gateway integration, accounting, and customer self-service portal.
- **SMS Gateway** — Bulk and transactional SMS for ISPs and enterprises.
- **SafeNetFilter** — Content filtering and network protection for ISPs.

## Tech Stack

- Vanilla HTML, CSS, JavaScript — no build step, no framework
- Google Fonts: Cormorant Garamond (display), DM Sans (body), Outfit (accent)
- CSS custom properties for the navy/gold theme
- [shared.js](shared.js) injects the navbar, announce bar, and footer into every page

## Project Structure

```
├── index.html          # Home page
├── about.html
├── products.html
├── clients.html
├── contact.html
├── delivery.html
├── privacy.html
├── refund.html
├── terms.html
├── style.css           # Global styles and design tokens
├── shared.js           # Shared nav + footer injection
├── maestro-logo.png    # Full logo (hexagon + wordmark)
├── favicon.ico         # Hexagon icon — 16/32/48/64 px sizes
├── favicon.png         # Hexagon icon — 32 px PNG
└── team-palash.png     # Team member photo
```

## Development

Open any `.html` file directly in a browser — no build or server required. Use a local server (e.g. VS Code Live Server) to avoid CORS issues with external image assets.

## Contact

- Email: info@maestro.com.bd
- Phone: +880 1713 336 401 / +880 1713 336 406
- Trade License: TRAD/DNCC/138637/2022
