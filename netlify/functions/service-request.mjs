const OWNER_EMAIL = 'cadetzachary16339@gmail.com';

const clean = (value, max = 4000) => String(value ?? '').trim().slice(0, max);
const escapeHtml = (value) => clean(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' })[char]);

const sendEmail = async (apiKey, payload) => {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const result = await response.json();
  if (!response.ok) throw new Error(result.message || 'Email could not be sent.');
  return result;
};

export default async (request) => {
  if (request.method !== 'POST') return new Response('Method not allowed', { status: 405 });

  try {
    const { name, email, phone, service, message, website } = await request.json();
    if (website) return Response.json({ ok: true });

    const fields = {
      name: clean(name, 100),
      email: clean(email, 254),
      phone: clean(phone, 40),
      service: clean(service, 120),
      message: clean(message),
    };

    if (!fields.name || !fields.email || !fields.service || fields.message.length < 10 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      return Response.json({ error: 'Please complete all required fields.' }, { status: 400 });
    }

    const apiKey = Netlify.env.get('RESEND_API_KEY');
    const fromEmail = Netlify.env.get('RESEND_FROM_EMAIL');
    if (!apiKey) return Response.json({ error: 'Email service is not configured yet.' }, { status: 503 });

    const sender = `Franc Cadet Portfolio <${fromEmail || 'onboarding@resend.dev'}>`;

    await sendEmail(apiKey, {
      from: sender,
      to: [OWNER_EMAIL],
      reply_to: fields.email,
      subject: `New service request: ${fields.service}`,
      html: `<h2>New portfolio service request</h2><p><strong>Name:</strong> ${escapeHtml(fields.name)}</p><p><strong>Email:</strong> ${escapeHtml(fields.email)}</p><p><strong>Phone:</strong> ${escapeHtml(fields.phone || 'Not provided')}</p><p><strong>Service:</strong> ${escapeHtml(fields.service)}</p><p><strong>Request:</strong><br>${escapeHtml(fields.message).replace(/\n/g, '<br>')}</p>`,
    });

    if (fromEmail) await sendEmail(apiKey, {
      from: sender,
      to: [fields.email],
      reply_to: OWNER_EMAIL,
      subject: 'We received your service request',
      html: `<h2>Thank you, ${escapeHtml(fields.name)}.</h2><p>Your request for <strong>${escapeHtml(fields.service)}</strong> has been received.</p><p>Franc will review your message and contact you by email to discuss availability, scope, and any cost before work begins.</p><p><strong>Your message:</strong><br>${escapeHtml(fields.message).replace(/\n/g, '<br>')}</p><p>— Franc Cadet</p>`,
    });

    return Response.json({ ok: true });
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : 'Unable to process this request.' }, { status: 500 });
  }
};

export const config = { path: '/api/service-request' };
