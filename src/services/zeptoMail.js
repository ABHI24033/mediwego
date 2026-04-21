const ZEPO_URL = import.meta.env.VITE_ZEPTO_URL || 'https://api.zeptomail.in/v1.1/email';
const ZEPO_TOKEN = import.meta.env.VITE_ZEPTO_TOKEN || 'Zoho-enczapikey****';
const DEFAULT_FROM = import.meta.env.VITE_ZEPTO_FROM_EMAIL || 'support@eduwego.in';
const DEFAULT_FROM_NAME = import.meta.env.VITE_ZEPTO_FROM_NAME || 'noreply';
const DEFAULT_CONTACT_TO = import.meta.env.VITE_ZEPTO_CONTACT_TO || 'info.srapolymer@gmail.com';
const DEFAULT_CONTACT_NAME = import.meta.env.VITE_ZEPTO_CONTACT_NAME || 'Manjeet';

const ensureConfig = () => {
  if (!ZEPO_TOKEN) {
    throw new Error('ZeptoMail token is missing. Set VITE_ZEPTO_TOKEN in your environment.');
  }
  if (!DEFAULT_FROM) {
    throw new Error('ZeptoMail from address is missing. Set VITE_ZEPTO_FROM_EMAIL in your environment.');
  }
};

export const getZeptoContactRecipient = () => ({
  address: DEFAULT_CONTACT_TO,
  name: DEFAULT_CONTACT_NAME,
});

export const sendZeptoMail = async ({ subject, htmlbody, to, replyTo }) => {
  ensureConfig();
  const payload = {
    from: { address: DEFAULT_FROM, name: DEFAULT_FROM_NAME },
    to: to.map(({ address, name }) => ({ email_address: { address, name } })),
    subject,
    htmlbody,
    reply_to: replyTo?.address ? [{ address: replyTo.address, name: replyTo.name }] : undefined,
  };

  const response = await fetch(ZEPO_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: ZEPO_TOKEN,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || 'ZeptoMail request failed');
  }

  return response.json();
};

export const sendContactFormEmail = async (formData) => {
  const recipient = getZeptoContactRecipient();
  
  const htmlbody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
      <h2 style="color: #0891b2; margin-bottom: 20px;">New Contact Form Submission - MediWeGo</h2>
      
      <div style="background: #f9fafb; padding: 16px; border-radius: 6px; margin-bottom: 16px;">
        <p style="margin: 8px 0;"><strong style="color: #374151;">Name:</strong> ${formData.name}</p>
        <p style="margin: 8px 0;"><strong style="color: #374151;">Clinic/Hospital:</strong> ${formData.clinicName}</p>
        <p style="margin: 8px 0;"><strong style="color: #374151;">Phone:</strong> ${formData.phone}</p>
        <p style="margin: 8px 0;"><strong style="color: #374151;">Email:</strong> ${formData.email}</p>
      </div>
      
      <div style="margin-top: 16px;">
        <p style="color: #374151; font-weight: 600; margin-bottom: 8px;">Message:</p>
        <p style="color: #4b5563; line-height: 1.6; white-space: pre-wrap;">${formData.message || 'No message provided'}</p>
      </div>
      
      <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280;">
        <p>Submitted via MediWeGo Contact Form</p>
        <p>Timestamp: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
      </div>
    </div>
  `;

  return sendZeptoMail({
    subject: `New Contact Form Submission - ${formData.name} (${formData.clinicName})`,
    htmlbody,
    to: [recipient],
    replyTo: { address: formData.email, name: formData.name },
  });
};
