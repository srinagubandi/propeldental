# Propel Dental — propel.dental

**Performance-Based Growth for Dental Practices Across the USA**

Propel Dental is a full-stack web application for the propel.dental website — a performance-based growth platform built exclusively for dentists, orthodontists, oral surgeons, periodontists, endodontists, pediatric dentists, and all dental specialists across the United States.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19 + TypeScript + Vite |
| Styling | TailwindCSS v4 + shadcn/ui |
| Routing | Wouter |
| State / API | tRPC + React Query |
| Backend | Express.js + Node.js |
| Database | MySQL / TiDB (via Drizzle ORM) |
| AI Chat | OpenAI API |
| Deployment | Railway |

---

## Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero, specialties grid, AI features, ROI calculator, testimonials |
| `/specialties` | Specialties | Detailed info on all 10 dental specialties |
| `/services` | Services | All growth services offered |
| `/how-it-works` | How It Works | 3-step process, comparison table, FAQ |
| `/calculator` | ROI Calculator | Interactive dental practice revenue estimator |
| `/about` | About | Mission, values, stats |
| `/contact` | Contact | Contact form and info |

---

## Dental Specialties Covered

1. General Dentistry
2. Orthodontics
3. Cosmetic Dentistry
4. Dental Implants
5. Oral Surgery
6. Periodontics
7. Endodontics
8. Pediatric Dentistry
9. Prosthodontics
10. Sedation Dentistry

---

## Local Development

```bash
# Clone the repository
git clone https://github.com/srinagubandi/propeldental.git
cd propeldental

# Install dependencies
npm install --legacy-peer-deps

# Copy environment variables
cp .env.example .env
# Edit .env with your actual values

# Run database migrations
npm run db:push

# Start development server
npm run dev
```

The app will be available at `http://localhost:3000`.

---

## Railway Deployment

This project is configured for [Railway](https://railway.app) deployment.

### Steps to Deploy

1. Create a new project in [Railway](https://railway.app)
2. Connect this GitHub repository (`srinagubandi/propeldental`)
3. Add a **MySQL** database service to the project
4. Set the following environment variables in Railway:

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | MySQL connection string (auto-set by Railway MySQL service) | Yes |
| `OPENAI_API_KEY` | OpenAI API key for AI chat | Yes |
| `ADMIN_USERNAME` | Admin panel username | Yes |
| `ADMIN_PASSWORD` | Admin panel password | Yes |
| `JWT_SECRET` | Random secret for JWT tokens | Yes |
| `NOTIFICATION_EMAIL` | Email for lead notifications | Recommended |
| `TWILIO_ACCOUNT_SID` | Twilio for SMS notifications | Optional |
| `TWILIO_AUTH_TOKEN` | Twilio auth token | Optional |
| `TWILIO_PHONE_NUMBER` | Twilio phone number | Optional |
| `NOTIFY_PHONE_NUMBER` | Phone to receive SMS | Optional |

5. Railway will automatically build and deploy on every push to `main`

### Build Command
```
npm install --legacy-peer-deps && npm run build
```

### Start Command
```
npm run start
```

---

## Key Files to Edit

| File | Purpose |
|------|---------|
| `client/src/pages/Home.tsx` | Homepage content — hero, specialties, testimonials |
| `client/src/pages/Specialties.tsx` | Dental specialty detail pages |
| `client/src/pages/Services.tsx` | Services offered |
| `client/src/pages/About.tsx` | About us content |
| `client/src/pages/Contact.tsx` | Contact information |
| `client/src/components/Layout.tsx` | Header, navigation, footer |
| `client/src/components/ROICalculator.tsx` | ROI calculator logic and specialty values |
| `client/src/components/IntakeForm.tsx` | Lead capture form |
| `client/src/index.css` | Color scheme and design tokens |
| `client/public/images/logo.svg` | Logo (replace with new propel.dental logo when ready) |

---

## Logo

A new propel.dental logo is currently being designed. To replace the placeholder logo:

1. Add your new logo file to `client/public/images/`
2. Update the `src` attribute in `client/src/components/Layout.tsx` (search for `logo.svg`)

---

## Admin Panel

The admin panel is available at `/admin` (login at `/admin/login`).

Set `ADMIN_USERNAME` and `ADMIN_PASSWORD` environment variables to configure access.

The admin panel provides:
- Lead submission management
- Site content management
- Testimonial management

---

## License

MIT
