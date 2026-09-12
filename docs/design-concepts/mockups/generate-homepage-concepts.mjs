import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const currentDir = dirname(fileURLToPath(import.meta.url));
const outputDir = dirname(currentDir) + "/renders";
mkdirSync(currentDir, { recursive: true });
mkdirSync(outputDir, { recursive: true });

const copy = {
  nav: ["Full-Arch Marketing", "P90 Protocol", "Results", "Production Estimator", "About"],
  phone: "(929) 222-6167",
  heroTitle: "Scaling Implant Practices Through Predictable, Performance-Based Results",
  heroKicker: "Your Dental Implant Growth Partner — EVOLVED",
  heroPrimary: "Book a Strategy Call",
  heroSecondary: "Explore the P90 Protocol",
  heroTags: ["Tailor-Fit Strategies", "Limited Client List", "Full Transparency", "Driven By Results"],
  identityTitle: "Our Identity and Focus",
  identityText: [
    "Propel Dental exists for one reason: to help implant-focused practices explode their production without burning out their team or budget.",
    "Most agencies treat implant marketing like general dentistry. We don’t. We live and breathe full-arch, All-on-X, and complex implant cases. By adopting a 360° marketing approach, including branding, SEM, SEO, reputation building, and more, we ensure long-term, sustainable growth, not short-term gimmicks. With over 100 years of combined marketing experience, our strategies use real-world data and a deep understanding of today’s marketing trends to convert high-value implant patients, focusing on current effectiveness rather than outdated methods of what used to work."
  ],
  painTitle: "Tired of Marketing Companies That Don't Get It?",
  painIntro: "We've heard the same frustrations from doctors across the country. Cookie-cutter ads that look like every other practice. Agencies that churn through clients. Black-box reporting that hides where your money goes. We built Propel Dental to be the opposite of everything you hate about dental marketing.",
  painCards: [
    ["No More Generic Ads", "Every asset we create is built around your practice voice, your team, and your competitive advantages. Not a template with your logo slapped on it."],
    ["No More Churn", "We maintain a limited client list because we prioritize depth over volume. When we take you on, we're committed for the long haul."],
    ["No More Black Box", "Full visibility into every dollar spent, every lead generated, and every strategy decision. You'll always know exactly what's happening and why."],
    ["No More Fly-By-Night Agencies", "Our team brings years of experience in implant dentistry marketing specifically. This isn't a side hustle - it's all we do."],
    ["No More Wasted First 90 Days", "Our P90 Success Protocol ensures your launch is optimized from day one with in-office training, workflow analysis, and custom strategy."],
    ["No More One-Size-Fits-All", "We learn your market, your strengths, your team. Then we build a strategy that's uniquely yours - because your practice is unique."]
  ],
  p90Label: "Industry Exclusive",
  p90Title: "The P90 Success Protocol",
  p90Text: "Our industry-exclusive 90-day onboarding program is designed to eliminate the common pain points of launching or scaling implant marketing. We come to your office, train your team, learn your voice, and build a strategy that's authentically yours.",
  p90Bullets: [
    "Personalized in-office training for your entire team",
    "Full-arch workflow analysis and operational optimization",
    "Practice voice discovery and brand positioning",
    "Custom videography and marketing asset creation",
    "Lead management and case acceptance coaching"
  ],
  p90Cta: "Learn About the P90 Protocol",
  stages: [
    ["Days 1-30", "Discovery & Foundation", "In-office immersion, team training, practice voice discovery, competitive analysis, and workflow audit."],
    ["Days 31-60", "Build & Launch", "Custom creative production, campaign architecture, lead management systems, and initial launch."],
    ["Days 61-90", "Optimize & Scale", "Performance analysis, campaign refinement, case acceptance coaching, and scaling strategy."]
  ],
  pillarsTitle: "Why Implant Practices Choose Propel",
  pillarsIntro: "We're not trying to be the biggest agency. We're building the most trusted partnership in implant dentistry marketing.",
  pillars: [
    ["P90 Protocol", "90-day in-office onboarding that sets the foundation for long-term success."],
    ["Limited Clients", "We cap our client list so every partner gets our full attention and resources."],
    ["Custom Everything", "No templates. Every ad, video, and strategy is built from your practice's DNA."],
    ["Full Transparency", "See every dollar, every metric, every decision. No hidden fees or black-box reporting."],
    ["Deep Expertise", "Industry veterans in implant marketing - not generalists learning on your dime."]
  ],
  statsTitle: "Built for Results. Measured by Transparency.",
  statsIntro: "We don't just promise growth - we prove it with numbers you can see and verify.",
  stats: [["90 Days", "To a fully optimized launch"], ["100%", "Transparency on spend & results"], ["0", "Generic template ads created"], ["50+", "States served nationwide"]],
  servicesTitle: "Full-Service Implant Practice Growth",
  servicesIntro: "From custom ad creation to in-office training, we handle every aspect of your implant marketing so you can focus on what you do best - changing lives.",
  services: [
    ["Custom Ad Creation & Video Production", "Professional, emotionally charged content, patient testimonials, practice branding, and ad creative built around your unique story."],
    ["Targeted Digital Advertising", "Facebook, Instagram, TikTok, YouTube, Google Ads, and streaming TV - all targeted to your ideal full-arch patients."],
    ["Lead Management & Qualification", "Systems and training to ensure every lead is properly handled, qualified, and converted into a consultation."],
    ["Case Acceptance Training", "In-office coaching for your team on presenting treatment plans, handling objections, and closing full-arch cases."],
    ["Practice Brand Development", "Discover and amplify what makes your practice unique. Build a brand that stands out in your community."],
    ["SEO & Online Presence", "Dominate local search results for implant and full-arch keywords. Reputation management and review strategy."]
  ],
  servicesCta: "View All Services",
  finalTitle: "Ready to Build Something Real?",
  finalText: "This isn't a sales pitch. It's a real strategy conversation about your practice, your market, and whether we're the right fit. We're selective about who we work with - and we think you should be too.",
  finalPrimary: "Book a Strategy Call",
  finalSecondary: "Call (929) 222-6167",
  footerDescription: "The full-arch growth partner built for implant practices that refuse to settle for generic marketing.",
  footer: {
    Services: ["Full-Arch Marketing", "P90 Success Protocol", "Dental SEO", "Paid Search & PPC", "Social Media Marketing", "Video Production & TV"],
    Company: ["About Us", "Results & Case Studies", "Production Estimator", "Contact"],
    Resources: ["AEO Best Practices", "GEO Best Practices", "Production Estimator"]
  }
};

const themes = {
  a: { className: "concept-a", title: "Evidence Ledger" },
  b: { className: "concept-b", title: "Practice Story" },
  c: { className: "concept-c", title: "Growth Atlas" }
};

const cards = (items, className) => items.map(([title, text], index) => `
  <article class="${className}">
    <span class="card-index">${String(index + 1).padStart(2, "0")}</span>
    <h3>${title}</h3>
    <p>${text}</p>
  </article>`).join("");

function footer() {
  return `
  <footer class="site-footer">
    <div class="footer-brand">
      <img src="../../../client/public/images/logo.svg" alt="Propel Dental" />
      <p>${copy.footerDescription}</p>
      <a href="#">${copy.phone}</a>
    </div>
${Object.entries(copy.footer).map(([heading, items]) => `
      <div class="footer-col"><h4>${heading}</h4><ul>${items.map(item => `<li>${item}</li>`).join("")}</ul></div>`).join("")}
    <div class="footer-bottom"><span>© 2026 Propel Dental. All rights reserved. HIPAA Compliant.</span><span>Privacy Policy &nbsp; Terms of Service</span></div>
  </footer>`;
}

function documentFor(key) {
  const theme = themes[key];
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Propel Dental Homepage — ${theme.title}</title>
<style>
:root { --ink:#0d1115; --paper:#f5f1e9; --accent:#ff8918; --line:rgba(255,255,255,.18); --muted:#b9c0c6; --blue:#1e73be; --sand:#ded9cf; }
*{box-sizing:border-box} html{background:var(--ink)} body{margin:0;font-family:Arial,Helvetica,sans-serif;background:var(--ink);color:#fff;line-height:1.45} img{display:block;max-width:100%}.page{overflow:hidden}.wrap{width:min(1400px,calc(100% - 96px));margin:auto}.site-header{height:90px;display:flex;align-items:center;justify-content:space-between;padding:0 48px;border-bottom:1px solid var(--line);position:relative;z-index:2}.site-header img{width:184px;height:auto;background:var(--paper);padding:6px 10px;border-radius:3px}.site-header nav{display:flex;gap:28px;font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase}.site-header nav span{white-space:nowrap}.head-actions{display:flex;align-items:center;gap:18px;font-size:13px}.button{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 22px;background:var(--accent);color:#101214;text-decoration:none;font-weight:800;letter-spacing:.02em;border:0}.button.outline{background:transparent;color:inherit;border:1px solid currentColor}.menu-icon{display:none;font-size:25px}.hero{min-height:650px;padding:100px 0 72px;position:relative}.hero::after{content:"";position:absolute;inset:0;pointer-events:none;opacity:.9}.hero-content{position:relative;z-index:1}.eyebrow{font-size:12px;line-height:1.4;letter-spacing:.16em;text-transform:uppercase;color:var(--accent);font-weight:800}.hero h1{font-size:clamp(56px,6vw,104px);line-height:.94;letter-spacing:-.065em;max-width:1050px;margin:20px 0 24px}.hero h1 em{font-style:normal;color:var(--accent)}.hero-kicker{font-size:15px;letter-spacing:.15em;text-transform:uppercase;color:var(--accent);font-weight:700;max-width:650px}.hero-actions{display:flex;gap:16px;margin:38px 0}.tag-row{display:flex;gap:12px;flex-wrap:wrap}.tag-row span{font-size:13px;border:1px solid var(--line);padding:9px 13px}.section{padding:110px 0;border-top:1px solid var(--line);position:relative}.section-heading{max-width:900px;margin-bottom:48px}.section-heading h2{font-size:clamp(36px,4vw,64px);line-height:1.02;letter-spacing:-.055em;margin:0 0 18px}.section-heading p{font-size:19px;line-height:1.55;color:var(--muted);margin:0;max-width:820px}.identity .section-heading{margin-inline:auto;text-align:center}.identity .section-heading h2{color:var(--accent);font-size:25px;letter-spacing:.04em;text-transform:uppercase}.identity-copy{max-width:1020px;margin:0 auto;color:var(--muted);font-size:20px;text-align:center}.identity-copy p{margin:0 0 24px}.grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.grid-5{display:grid;grid-template-columns:repeat(5,1fr);gap:12px}.card{border:1px solid var(--line);padding:30px;min-height:230px;position:relative}.card h3,.stage h3,.service-card h3{font-size:22px;line-height:1.1;margin:24px 0 12px;letter-spacing:-.03em}.card p,.stage p,.service-card p{margin:0;color:var(--muted);font-size:15px}.card-index{font-size:12px;color:var(--accent);font-weight:800;letter-spacing:.1em}.p90-layout{display:grid;grid-template-columns:1.08fr .92fr;gap:80px;align-items:start}.protocol-label{display:inline-block;font-size:12px;color:var(--accent);font-weight:800;letter-spacing:.12em;text-transform:uppercase;margin-bottom:16px}.protocol-copy h2{font-size:clamp(42px,4vw,68px);margin:0 0 18px;line-height:1.02;letter-spacing:-.06em}.protocol-copy p{color:var(--muted);font-size:18px;margin:0 0 26px}.protocol-copy ul{padding:0;margin:0 0 28px;list-style:none}.protocol-copy li{padding:10px 0 10px 24px;position:relative;color:var(--muted)}.protocol-copy li::before{content:"+";position:absolute;left:0;color:var(--accent);font-weight:800}.stages{display:grid;gap:1px;background:var(--line);border:1px solid var(--line)}.stage{padding:30px;background:var(--ink)}.stage span{font-size:12px;color:var(--accent);font-weight:800;letter-spacing:.1em;text-transform:uppercase}.stage h3{margin-top:8px}.pillars .card{min-height:250px}.stat-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--line);border:1px solid var(--line)}.stat{background:var(--ink);padding:42px 24px;min-height:190px}.stat strong{display:block;color:var(--accent);font-size:56px;line-height:1;letter-spacing:-.07em;margin-bottom:14px}.stat span{font-size:14px;color:var(--muted)}.service-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.service-card{border:1px solid var(--line);padding:28px;min-height:215px}.service-card h3{margin-top:0}.center-action{text-align:center;margin-top:34px}.final-cta{text-align:center}.final-cta .section-heading{margin-inline:auto}.final-cta .hero-actions{justify-content:center}.site-footer{padding:72px 48px 28px;display:grid;grid-template-columns:1.35fr repeat(3,1fr);gap:38px;border-top:1px solid var(--line)}.footer-brand img{width:180px;background:var(--paper);padding:6px 10px;border-radius:3px}.footer-brand p{font-size:14px;color:var(--muted);max-width:290px;margin:16px 0}.footer-brand a{color:var(--accent);font-weight:700;text-decoration:none}.footer-col h4{font-size:12px;text-transform:uppercase;letter-spacing:.12em;margin:0 0 16px;color:var(--accent)}.footer-col ul{list-style:none;padding:0;margin:0}.footer-col li{font-size:14px;color:var(--muted);margin:9px 0}.footer-bottom{grid-column:1/-1;border-top:1px solid var(--line);margin-top:18px;padding-top:22px;display:flex;justify-content:space-between;gap:20px;color:var(--muted);font-size:12px}
/* Concept A: evidence-ledger */
.concept-a{--ink:#101315;--paper:#edeae2;--muted:#b6babd}.concept-a .hero{background:linear-gradient(125deg,#101315 0%,#141719 58%,#28231e 100%)}.concept-a .hero::after{background-image:linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px);background-size:42px 42px;mask-image:linear-gradient(90deg,#000,transparent 82%)}.concept-a .hero-content{display:grid;grid-template-columns:1.05fr .95fr;gap:70px;align-items:center}.concept-a .hero-copy{border-left:2px solid var(--accent);padding-left:26px}.concept-a .hero h1{font-family:Georgia,serif;font-size:clamp(52px,5.2vw,90px)}.concept-a .ledger{border:1px solid var(--line);background:#eae7de;color:#141719;padding:22px}.concept-a .ledger div{padding:15px 0;border-bottom:1px solid #c6c1b7;display:grid;grid-template-columns:40px 1fr;gap:12px}.concept-a .ledger div:last-child{border:0}.concept-a .ledger b{font-size:15px;color:#c85f06}.concept-a .ledger span{font-size:12px;line-height:1.4;color:#4b4d4c}.concept-a .identity{background:#171b1e}.concept-a .pain .card:nth-child(1),.concept-a .pain .card:nth-child(6){background:#eae7de;color:#16181a}.concept-a .pain .card:nth-child(1) p,.concept-a .pain .card:nth-child(6) p{color:#474b4d}.concept-a .stat{background:#171b1e}.concept-a .p90{background:#15191c}.concept-a .site-footer{background:#171b1e}
.concept-a .ledger span{font-size:0;display:block;height:12px;border-bottom:1px solid #7d7a73;width:72%}
/* Concept B: practice-story */
.concept-b{--ink:#f2ede3;--paper:#fbf8f2;--muted:#4e5c69;--line:rgba(19,42,64,.18);color:#132a40;background:var(--paper)}.concept-b body,.concept-b .page{background:var(--paper);color:#132a40}.concept-b .site-header{background:var(--paper)}.concept-b .hero{background:linear-gradient(110deg,#f2ede3 0%,#f2ede3 45%,#d8e0e0 45%,#d8e0e0 100%);min-height:670px}.concept-b .hero::after{background:radial-gradient(circle at 80% 30%,rgba(255,137,24,.34),transparent 24%),linear-gradient(122deg,transparent 50%,rgba(19,42,64,.2) 50%,rgba(19,42,64,.2) 51%,transparent 51%)}.concept-b .hero h1,.concept-b .section-heading h2,.concept-b .protocol-copy h2{font-family:Georgia,serif;font-weight:400}.concept-b .hero h1{max-width:720px}.concept-b .hero-kicker{color:#bf5b14}.concept-b .tag-row span{border-color:#bd7a48;background:#fbf8f2}.concept-b .identity{background:#132a40;color:#fbf8f2}.concept-b .identity .section-heading h2{color:#ff9a42}.concept-b .identity-copy{color:#d3d9de}.concept-b .card{background:#fffdf9;border-color:#d6cec1}.concept-b .pain .card:nth-child(2n){transform:translateY(30px);background:#e3e8e5}.concept-b .p90{background:#e9e3d8}.concept-b .stages{background:#bfc9c7;border-color:#bfc9c7}.concept-b .stage{background:#fdf9f2}.concept-b .pillars{background:#fbf8f2}.concept-b .pillars .card:nth-child(1),.concept-b .pillars .card:nth-child(4){background:#132a40;color:#fff}.concept-b .pillars .card:nth-child(1) p,.concept-b .pillars .card:nth-child(4) p{color:#d3d9de}.concept-b .stat-grid{background:#132a40;border-color:#132a40}.concept-b .stat{background:#fbf8f2}.concept-b .stat strong{color:#bc5614}.concept-b .service-card{border-color:#d6cec1;background:#fffdf9}.concept-b .final-cta{background:#dce3df}.concept-b .site-footer{background:#132a40;color:#fff}.concept-b .footer-col li,.concept-b .footer-brand p,.concept-b .footer-bottom{color:#ced6dc}.concept-b .footer-bottom{border-color:rgba(255,255,255,.18)}
/* Concept C: growth-atlas */
.concept-c{--ink:#092335;--paper:#f0f4ef;--muted:#bdcdd1;--line:rgba(220,238,230,.18)}.concept-c .hero{background:#092335;min-height:700px}.concept-c .hero::after{background:radial-gradient(ellipse at 20% 45%,rgba(77,129,132,.7),transparent 26%),radial-gradient(ellipse at 78% 36%,rgba(57,100,111,.8),transparent 30%),linear-gradient(135deg,transparent 49.8%,rgba(255,137,24,.38) 50%,transparent 50.2%);background-size:auto,auto,210px 210px}.concept-c .hero-content{display:grid;grid-template-columns:1fr .76fr;gap:55px;align-items:center}.concept-c .hero h1{font-family:Arial,sans-serif;font-weight:600}.concept-c .atlas{display:grid;grid-template-columns:1fr 1fr;gap:12px;position:relative}.concept-c .atlas::before{content:"";position:absolute;inset:25% 15%;border:1px solid rgba(255,137,24,.65);border-radius:45%;pointer-events:none}.concept-c .atlas div{position:relative;z-index:1;background:#d9e7e3;color:#092335;padding:24px;min-height:150px;border-radius:30px 4px 30px 4px}.concept-c .atlas b{display:block;color:#c85f06;font-size:12px;letter-spacing:.12em;margin-bottom:10px}.concept-c .atlas span{font-weight:700;font-size:18px}.concept-c .identity{background:#10364a}.concept-c .identity .section-heading h2{color:#ff9a42}.concept-c .pain{background:#f0f4ef;color:#092335}.concept-c .pain .section-heading p,.concept-c .pain .card p{color:#49616a}.concept-c .pain .card{border-color:#b1c5c2;background:#f9fbf8}.concept-c .pain .card:nth-child(3n){background:#d8e7e4}.concept-c .p90{background:#0d2e41}.concept-c .stages{background:#52797c;border-color:#52797c}.concept-c .stage{background:#123e52}.concept-c .pillars{background:#f0f4ef;color:#092335}.concept-c .pillars .section-heading p,.concept-c .pillars .card p{color:#49616a}.concept-c .pillars .card{border-color:#b1c5c2}.concept-c .pillars .card:nth-child(2n){background:#d8e7e4}.concept-c .stats{background:#10364a}.concept-c .stat{background:#0d2e41}.concept-c .services{background:#f0f4ef;color:#092335}.concept-c .services .section-heading p,.concept-c .service-card p{color:#49616a}.concept-c .service-card{border-color:#b1c5c2;background:#f9fbf8}.concept-c .service-card:nth-child(4),.concept-c .service-card:nth-child(5){background:#d8e7e4}.concept-c .final-cta{background:#d8e7e4;color:#092335}.concept-c .final-cta .section-heading p{color:#49616a}.concept-c .site-footer{background:#092335}
.concept-c .tag-row{display:none}
@media(max-width:720px){.wrap{width:min(100% - 38px,540px)}.site-header{height:70px;padding:0 19px}.site-header img{width:150px;padding:4px 7px}.site-header nav,.head-actions{display:none}.menu-icon{display:block}.hero{padding:58px 0 46px;min-height:0}.hero-content,.concept-a .hero-content,.concept-c .hero-content{display:block}.hero-copy{padding:0!important;border:0!important}.hero h1{font-size:49px!important;line-height:.96;margin:18px 0}.hero-kicker{font-size:11px;letter-spacing:.1em}.hero-actions{flex-direction:column;margin:25px 0;gap:11px}.button{width:100%;min-height:52px}.tag-row{display:grid;grid-template-columns:1fr 1fr;gap:8px}.tag-row span{font-size:11px;padding:8px}.concept-a .ledger{margin-top:32px}.concept-a .ledger div{padding:12px 0}.concept-b .hero{background:linear-gradient(180deg,#d8e0e0 0%,#d8e0e0 28%,#f2ede3 28%,#f2ede3 100%);padding-top:300px}.concept-b .hero::after{background:radial-gradient(circle at 77% 12%,rgba(255,137,24,.38),transparent 14%)}.concept-c .atlas{margin-top:32px}.concept-c .atlas div{min-height:110px;padding:16px;border-radius:20px 3px 20px 3px}.section{padding:62px 0}.section-heading{margin-bottom:30px}.section-heading h2,.protocol-copy h2{font-size:39px!important}.section-heading p,.identity-copy,.protocol-copy p{font-size:16px!important}.identity .section-heading h2{font-size:18px!important}.identity-copy{text-align:left}.grid-3,.grid-5,.service-grid,.p90-layout{grid-template-columns:1fr;gap:12px}.card,.service-card{padding:21px;min-height:0}.card h3,.service-card h3{font-size:21px;margin-top:18px}.concept-b .pain .card:nth-child(2n){transform:none}.protocol-copy ul{margin-bottom:22px}.protocol-copy li{font-size:15px}.stages{gap:1px}.stage{padding:22px}.stat-grid{grid-template-columns:1fr 1fr}.stat{padding:25px 16px;min-height:145px}.stat strong{font-size:42px}.pillars .card{min-height:0}.site-footer{padding:55px 20px 22px;grid-template-columns:1fr 1fr;gap:30px 18px}.footer-brand{grid-column:1/-1}.footer-brand img{width:160px}.footer-col h4{font-size:11px}.footer-col li{font-size:12px}.footer-bottom{grid-column:1/-1;display:block;line-height:1.7}.concept-c .hero{padding-bottom:52px}.concept-c .atlas{grid-template-columns:1fr 1fr}.concept-c .atlas span{font-size:15px}.concept-c .atlas b{font-size:10px}.final-cta .hero-actions{margin-bottom:0}}
</style>
</head>
<body class="${theme.className}">
<div class="page">
<header class="site-header"><img src="../../../client/public/images/logo.svg" alt="Propel Dental" /><nav>${copy.nav.map(item => `<span>${item}</span>`).join("")}</nav><div class="head-actions"><span>${copy.phone}</span><a class="button" href="#">${copy.heroPrimary}</a></div><span class="menu-icon">☰</span></header>
<main>
<section class="hero"><div class="wrap hero-content"><div class="hero-copy"><div class="eyebrow">${copy.heroKicker}</div><h1>Scaling Implant Practices Through <em>Predictable, Performance-Based Results</em></h1><div class="hero-actions"><a class="button" href="#">${copy.heroPrimary}</a><a class="button outline" href="#">${copy.heroSecondary}</a></div><div class="tag-row">${copy.heroTags.map(tag => `<span>${tag}</span>`).join("")}</div></div>${key === "a" ? `<aside class="ledger"><div><b>01</b><span>Our Identity and Focus</span></div><div><b>02</b><span>The P90 Success Protocol</span></div><div><b>03</b><span>Built for Results. Measured by Transparency.</span></div><div><b>04</b><span>Ready to Build Something Real?</span></div></aside>` : key === "b" ? `` : `<aside class="atlas"><div><b>01</b><span>Tailor-Fit Strategies</span></div><div><b>02</b><span>Limited Client List</span></div><div><b>03</b><span>Full Transparency</span></div><div><b>04</b><span>Driven By Results</span></div></aside>`}</div></section>
<section class="section identity"><div class="wrap"><div class="section-heading"><h2>${copy.identityTitle}</h2></div><div class="identity-copy">${copy.identityText.map(text => `<p>${text}</p>`).join("")}</div></div></section>
<section class="section pain"><div class="wrap"><div class="section-heading"><h2>${copy.painTitle}</h2><p>${copy.painIntro}</p></div><div class="grid-3">${cards(copy.painCards, "card")}</div></div></section>
<section class="section p90"><div class="wrap p90-layout"><div class="protocol-copy"><span class="protocol-label">${copy.p90Label}</span><h2>${copy.p90Title}</h2><p>${copy.p90Text}</p><ul>${copy.p90Bullets.map(item => `<li>${item}</li>`).join("")}</ul><a class="button" href="#">${copy.p90Cta}</a></div><div class="stages">${copy.stages.map(([range,title,description]) => `<article class="stage"><span>${range}</span><h3>${title}</h3><p>${description}</p></article>`).join("")}</div></div></section>
<section class="section pillars"><div class="wrap"><div class="section-heading"><h2>${copy.pillarsTitle}</h2><p>${copy.pillarsIntro}</p></div><div class="grid-5">${cards(copy.pillars, "card")}</div></div></section>
<section class="section stats"><div class="wrap"><div class="section-heading"><h2>${copy.statsTitle}</h2><p>${copy.statsIntro}</p></div><div class="stat-grid">${copy.stats.map(([value,label]) => `<article class="stat"><strong>${value}</strong><span>${label}</span></article>`).join("")}</div></div></section>
<section class="section services"><div class="wrap"><div class="section-heading"><h2>${copy.servicesTitle}</h2><p>${copy.servicesIntro}</p></div><div class="service-grid">${copy.services.map(([title,text]) => `<article class="service-card"><h3>${title}</h3><p>${text}</p></article>`).join("")}</div><div class="center-action"><a class="button outline" href="#">${copy.servicesCta}</a></div></div></section>
<section class="section final-cta"><div class="wrap"><div class="section-heading"><h2>${copy.finalTitle}</h2><p>${copy.finalText}</p></div><div class="hero-actions"><a class="button" href="#">${copy.finalPrimary}</a><a class="button outline" href="#">${copy.finalSecondary}</a></div></div></section>
</main>
${footer()}
</div>
</body>
</html>`;
}

for (const key of Object.keys(themes)) {
  writeFileSync(`${currentDir}/homepage-concept-${key}.html`, documentFor(key));
}

console.log(`Generated ${Object.keys(themes).length} static homepage concept sources in ${currentDir}`);
