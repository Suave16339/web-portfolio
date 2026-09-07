'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';
import { Button } from '@/components/ui/button';

export default function ServiceRequestForm() {
  const [submitting, setSubmitting] = useState(false);
  useEffect(() => {
    const reset = () => setSubmitting(false);
    window.addEventListener('pageshow', reset);
    return () => window.removeEventListener('pageshow', reset);
  }, []);

  return (
    <section className="serviceSection shell" id="request-service" aria-labelledby="service-title">
      <div className="serviceIntro">
        <p className="eyebrow dark"><span /> LET’S WORK TOGETHER</p>
        <h2 id="service-title">A little help.<br /><em>A stronger setup.</em></h2>
        <p>Need help with your computer, network, or security basics? Register your contact details and tell me what you need.</p>
        <ul><li>Computer setup & troubleshooting</li><li>Network & Wi-Fi support</li><li>Security guidance & system updates</li></ul>
        <div className="serviceNext"><strong>What happens next?</strong><p>I’ll review your request and contact you by email to discuss availability, scope, and any cost before work begins.</p></div>
      </div>
      <form className="serviceForm" action="https://formsubmit.co/cadetzachary16339@gmail.com" method="POST" onSubmit={() => setSubmitting(true)}>
        <h3>Register & request a service</h3>
        <p className="formHint">Fields marked * are required. No password needed.</p>
        <input type="hidden" name="_subject" value="New portfolio registration & service request" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_next" value="https://francwebportfolio.netlify.app/request-received" />
        <div className="serviceFields">
          <label htmlFor="request-name">Full name *<Input id="request-name" name="name" autoComplete="name" required maxLength={100} placeholder="Your full name" /></label>
          <label htmlFor="request-email">Email address *<Input id="request-email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@example.com" /></label>
          <label htmlFor="request-phone">Phone <span>(optional)</span><Input id="request-phone" name="phone" type="tel" autoComplete="tel" maxLength={40} placeholder="Include country code" /></label>
          <label htmlFor="request-service-type">Service *<NativeSelect id="request-service-type" name="service" required defaultValue=""><NativeSelectOption value="" disabled>Choose a service</NativeSelectOption><NativeSelectOption>IT support & troubleshooting</NativeSelectOption><NativeSelectOption>Computer & software setup</NativeSelectOption><NativeSelectOption>Networking & Wi-Fi support</NativeSelectOption><NativeSelectOption>Security guidance & updates</NativeSelectOption><NativeSelectOption>Other — describe below</NativeSelectOption></NativeSelect></label>
          <label className="fullField" htmlFor="request-message">How can I help? *<Textarea id="request-message" name="message" required minLength={10} maxLength={4000} rows={5} placeholder="Describe the issue or project, the device or setup, and when you need help." aria-describedby="request-privacy" /></label>
        </div>
        <p className="formHint" id="request-privacy">Please leave out passwords and sensitive account details. FormSubmit processes this form and emails your details to Franc.</p>
        <label className="serviceConsent"><input type="checkbox" name="contact_consent" value="I agree to be contacted about this request" required /> <span>I agree to share these details with Franc Cadet and be contacted about my request. *</span></label>
        <Button type="submit" className="serviceSubmit" disabled={submitting}>{submitting ? 'Opening secure submission…' : 'Send my request'}<ArrowUpRight size={18} /></Button>
        <p className="formHint" role="status">{submitting ? 'Complete the verification on the next page. If it does not load, go back and try again.' : 'You’ll complete a spam check before your request is sent.'}</p>
        <p className="formHint">Trouble submitting? <a href="mailto:cadetzachary16339@gmail.com">Email me directly.</a></p>
      </form>
    </section>
  );
}
