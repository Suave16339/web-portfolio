'use client';

import { ArrowDown, ArrowUpRight, Award, Menu, MonitorCog, Network, ShieldCheck, X } from 'lucide-react';
import { useState } from 'react';
import ServiceRequestForm from '@/components/service-request-form';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <section className="hero" id="home">
        <nav className="nav shell" aria-label="Primary navigation">
          <a className="brand" href="/" onClick={(event) => { event.preventDefault(); window.location.assign('/'); }} aria-label="Franc Cadet home"><span>FC</span><strong>Franc Cadet</strong></a>
          <div className="navLinks">
            <a className="active" href="/" onClick={(event) => { event.preventDefault(); window.location.assign('/'); }}>Home</a><a href="/about" onClick={(event) => { event.preventDefault(); window.location.assign('/about'); }}>About</a><a href="/skills" onClick={(event) => { event.preventDefault(); window.location.assign('/skills'); }}>Skills</a><a href="#request-service">Request a service</a><a href="#contact">Contact</a>
            <a className="navCta" href="https://www.linkedin.com/in/franc-cadet-7957441bb/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15} /></a>
          </div>
          <button className="menuButton" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={23} /> : <Menu size={24} />}
          </button>
        </nav>
        <div className={`mobileMenu ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
          <a className="active" href="/" onClick={(event) => { event.preventDefault(); setMenuOpen(false); window.location.assign('/'); }}>Home <span>01</span></a>
          <a href="/about" onClick={(event) => { event.preventDefault(); setMenuOpen(false); window.location.assign('/about'); }}>About <span>02</span></a>
          <a href="/skills" onClick={(event) => { event.preventDefault(); setMenuOpen(false); window.location.assign('/skills'); }}>Skills <span>03</span></a>
          <a href="#request-service" onClick={() => setMenuOpen(false)}>Request a service <span>04</span></a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact <span>05</span></a>
          <a className="mobileLinkedin" href="https://www.linkedin.com/in/franc-cadet-7957441bb/" target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={18} /></a>
        </div>
        <div className="heroGrid shell">
          <div className="heroCopy">
            <p className="eyebrow"><span /> IT STUDENT · UCF</p>
            <h1>Building secure<br />connections for a<br /><em>connected world.</em></h1>
            <p className="intro">I’m Franc Cadet, an Information Technology student at the University of Central Florida focused on networking and cybersecurity.</p>
            <div className="heroActions"><a className="primaryButton" href="#about">Discover my path <ArrowDown size={17} /></a><span className="availability"><i /> Open to opportunities</span></div>
          </div>
          <div className="portraitWrap">
            <div className="goldOrb" /><div className="portraitFrame"><img src="/franc-cadet.jpeg" alt="Franc Cadet, Information Technology student at UCF" /></div>
            <div className="nameCard"><span>01 / PROFILE</span><strong>FRANC<br />CADET</strong></div><div className="ucfTag">UNIVERSITY OF<br />CENTRAL FLORIDA</div>
          </div>
        </div>
        <div className="heroFooter shell"><span>ORLANDO, FLORIDA</span><span className="line" /><span>NETWORKING · CYBERSECURITY</span></div>
      </section>
      <section className="about shell" id="about">
        <div className="sectionNumber">02</div><div className="sectionContent"><p className="eyebrow dark"><span /> ABOUT ME</p><h2>Curious by nature.<br />Secure by design.</h2><p>I’m a UCF Information Technology student and current SOC Analyst Intern at Leidos. My work blends cyber analysis, system hardening, and vulnerability, risk, and threat assessment—turning classroom knowledge into practical security thinking.</p><div className="aboutDetails"><div><b>NOW</b><span>SOC Analyst Intern<br />Leidos · Orlando, FL</span></div><div><b>EDUCATION</b><span>B.S. Information Technology<br />UCF · Expected May 2026</span></div><div><b>FOUNDATION</b><span>Help Desk Analyst experience<br />Hardware, software & support</span></div></div></div>
      </section>
      <section className="skills" id="skills"><div className="shell">
        <div className="skillsHeader"><div><p className="eyebrow"><span /> EXPERIENCE & SKILLS</p><h2>What I’m<br />learning & building.</h2></div><p>Developing the technical instincts to protect systems, troubleshoot with confidence, and support people who rely on technology every day.</p></div>
        <div className="skillGrid">
          <article><div className="iconBox"><ShieldCheck /></div><span>01</span><h3>Cyber Defense</h3><p>Hands-on SOC experience reviewing DoD intelligence, supporting system hardening, and completing vulnerability, risk, and threat analysis.</p><div className="tags"><b>SOC ANALYSIS</b><b>MICROSOFT DEFENDER</b><b>FIREWALLS</b></div></article>
          <article><div className="iconBox"><Network /></div><span>02</span><h3>Networking</h3><p>Building practical knowledge of Local Area Networks and using Wireshark to examine traffic, investigate issues, and understand connectivity.</p><div className="tags"><b>WIRESHARK</b><b>LAN</b><b>ACTIVE DIRECTORY</b></div></article>
          <article><div className="iconBox"><MonitorCog /></div><span>03</span><h3>IT Support</h3><p>Experienced in configuring hardware and software, onboarding users, performing maintenance, and applying updates and security patches.</p><div className="tags"><b>WINDOWS</b><b>LINUX</b><b>MACOS</b><b>HARDWARE</b></div></article>
          <article><div className="iconBox"><Award /></div><span>04</span><h3>Credentials</h3><p>UCF B.S. IT candidate with CompTIA Security+ and IT Fundamentals credentials, active Secret clearance, and LSAMP STEM leadership involvement.</p><div className="tags"><b>COMPTIA SEC+</b><b>ITF+</b><b>LSAMP</b></div></article>
        </div>
      </div></section>
      <ServiceRequestForm />
      <footer className="footer" id="contact"><div className="shell footerInner"><div><p>OPEN TO OPPORTUNITIES.</p><h2>Let’s connect.</h2><div className="contactDetails"><a href="#request-service">Register & request a service</a><a href="https://mail.google.com/mail/?view=cm&fs=1&to=cadetzachary16339@gmail.com" target="_blank" rel="noreferrer">cadetzachary16339@gmail.com</a><a href="tel:+14072697565">(407) 269-7565</a></div></div><a href="https://www.linkedin.com/in/franc-cadet-7957441bb/" target="_blank" rel="noreferrer" aria-label="View Franc Cadet on LinkedIn"><ArrowUpRight /></a></div><div className="shell copyright"><span>© 2026 FRANC CADET</span><span>IT · UCF · ORLANDO</span></div></footer>
      <style>{`.hero:before{pointer-events:none}.navLinks>a.active{color:var(--gold);position:relative}.navLinks>a.active:after{content:'';position:absolute;left:0;right:0;bottom:-11px;height:3px;background:var(--gold)}.aboutDetails{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:42px}.aboutDetails div{border-top:2px solid var(--gold);padding-top:13px}.aboutDetails b{display:block;font-size:9px;letter-spacing:.18em;color:#a68a49;margin-bottom:8px}.aboutDetails span{font-size:14px;line-height:1.5;color:#33485f}.contactDetails{display:flex;gap:22px;flex-wrap:wrap;margin-top:26px;font-size:13px;font-weight:800;letter-spacing:.04em}.contactDetails a{border-bottom:1px solid rgba(6,28,53,.5);padding-bottom:4px}.menuButton{display:none;color:#fff;background:transparent;border:1px solid rgba(255,255,255,.35);width:43px;height:43px;place-items:center}.mobileMenu{display:none}@media(max-width:850px){.navLinks{display:none}.menuButton{display:grid}.mobileMenu{position:absolute;top:88px;left:0;right:0;z-index:20;background:#082443;border-bottom:1px solid rgba(255,255,255,.18);padding:0 24px;max-height:0;overflow:hidden;opacity:0;transition:max-height .35s ease,opacity .25s ease,padding .35s ease}.mobileMenu.open{display:block;max-height:440px;opacity:1;padding:20px 24px 25px}.mobileMenu a{display:flex;align-items:center;justify-content:space-between;padding:15px 0;border-bottom:1px solid rgba(255,255,255,.12);font:650 22px var(--font-display);letter-spacing:-.02em}.mobileMenu a.active{color:var(--gold)}.mobileMenu a span{font:700 10px var(--font-body);letter-spacing:.16em;color:var(--gold)}.mobileMenu .mobileLinkedin{margin-top:18px;padding:14px 16px;background:var(--gold);color:var(--navy);border:0;font:800 11px var(--font-body);letter-spacing:.12em;text-transform:uppercase}.aboutDetails{grid-template-columns:1fr;gap:18px}}@media(max-width:540px){.mobileMenu{top:74px}.contactDetails{gap:13px;flex-direction:column;font-size:12px}}`}</style>
    </main>
  );
}
