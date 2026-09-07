const OWNER_EMAIL = 'cadetzachary16339@gmail.com';

const clean = (value, max = 4000) => String(value ?? '').trim().slice(0, max);
const escapeHtml = (value) => clean(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' })[char]);

export default async (request) => {
  if (request.method !== 'POST') return new Response('Method not allowed', { status: 405 });
  try {
    const { name, email, phone, service, message, website } = await request.json();
    if (website) return Response.json({ ok: true });
    const fields = { name: clean(name, 100), email: clean(email, 254), phone: clean(phone, 40), service: clean(service, 120), message: clean(message) };
    if (!fields.name || !fields.email || !fields.service || fields.message.length < 10 || !/^[^\s@]+@[^\s@]+\\.[^\s@]+$/.test(fields.email)) {
      return Response.json({ error: 'Please complete all required fields.' }, { status: 400 });
    }
    const apiKey = Netlify.env.get('RESEND_API_KEY');
    if (!apiKey) return Response.json({ error: 'Email service is not configured yet.' }, { status: 503 });
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'Franc Cadet Portfolio <onboarding@resend.dev>',
        to: [OWNER_EMAIL],
        reply_to: fields.email,
        subject: `New service request: ${fields.service}`,
        html: `<h2>New portfolio service request</h2><p><strong>Name:</strong> ${escapeHtml(fields.name)}</p><p><strong>Email:</strong> ${escapeHtml(fields.email)}</p><p><strong>Phone:</strong> ${escapeHtml(fields.phone || 'Not provided')}</p><p><strong>Service:</strong> ${escapeHtml(fields.service)}</p><p><strong>Request:</strong><br>${escapeHtml(fields.message).replace(/\n/g, '<br>')}</p>`,
      }),
    });
    const result = await response.json();
    if (!response.ok) return Response.json({ error: result.message || 'Email could not be sent.' }, { status: response.status });
    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: 'Unable to process this request.' }, { status: 500 });
  }
};

export const config = { path: '/api/service-request' };
