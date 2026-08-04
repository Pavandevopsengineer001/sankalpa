import { Resend } from 'resend';

const apiKey = process.env.RESEND_API_KEY;

if (!apiKey) {
  throw new Error('Missing RESEND_API_KEY environment variable. Add it to .env.local or the deployment environment.');
}

const resend = new Resend(apiKey);

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message?: string;
}

export async function sendContactEmail(formData: ContactFormData) {
  const { name, email, phone, message } = formData;

  try {
    const adminEmail = await resend.emails.send({
      from: 'Sankalpa Farms & Resorts <onboarding@resend.dev>',
      to: ['mr.pavan.kalyan.51@gmail.com'],
      subject: `New Lead: ${name} - Sankalpa Farms & Resorts`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #1a1a1a; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; background: #f5f5f5; }
              .card { background: white; padding: 30px; border-radius: 12px; box-shadow: 0 2px 16px rgba(0,0,0,0.08); }
              .header { background: linear-gradient(135deg, #2E6B48 0%, #6B8E23 100%); color: white; padding: 30px; text-align: center; border-radius: 12px 12px 0 0; }
              .header h1 { margin: 0; font-size: 26px; }
              .field { margin-bottom: 20px; }
              .label { font-size: 12px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px; }
              .value { font-size: 16px; color: #1f2937; margin: 0; }
              .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 12px; border-top: 1px solid #e5e7eb; }
              .cta { margin-top: 20px; }
              .cta a { display: inline-block; padding: 12px 24px; background: #2E6B48; color: white; text-decoration: none; border-radius: 8px; margin-right: 10px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="card">
                <div class="header">
                  <h1>New Lead Received</h1>
                </div>
                <div class="field">
                  <div class="label">Full Name</div>
                  <p class="value">${name}</p>
                </div>
                <div class="field">
                  <div class="label">Phone Number</div>
                  <p class="value"><a href="tel:${phone}" style="color: #1a4d2e; text-decoration: none;">${phone}</a></p>
                </div>
                <div class="field">
                  <div class="label">Email Address</div>
                  <p class="value"><a href="mailto:${email}" style="color: #1a4d2e; text-decoration: none;">${email}</a></p>
                </div>
                ${message ? `
                <div class="field">
                  <div class="label">Message / Inquiry</div>
                  <p class="value">${message}</p>
                </div>
                ` : ''}
                <div class="cta">
                  <a href="tel:${phone}">Call Now</a>
                  <a href="https://wa.me/91${phone}" style="background: #25D366;">WhatsApp</a>
                </div>
                <div class="footer">
                  <p>Sankalpa Farms & Resorts website inquiry.</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    const customerEmail = await resend.emails.send({
      from: 'Sankalpa Farms & Resorts <onboarding@resend.dev>',
      to: [email],
      subject: 'Thank you for your interest in Sankalpa Farms & Resorts!',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #1a1a1a; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; background: #f5f5f5; }
              .card { background: white; padding: 30px; border-radius: 12px; box-shadow: 0 2px 16px rgba(0,0,0,0.08); text-align: center; }
              .header { background: linear-gradient(135deg, #2E6B48 0%, #6B8E23 100%); color: white; padding: 40px 30px; border-radius: 12px 12px 0 0; }
              .header h1 { margin: 0; font-size: 28px; }
              .content { margin-top: 20px; text-align: left; }
              .cta-button { display: inline-block; padding: 14px 28px; background: #2E6B48; color: white; border-radius: 8px; text-decoration: none; font-weight: 600; }
              .contact-info { background: #f9fafb; padding: 20px; border-radius: 8px; margin: 25px 0; }
              .footer { text-align: center; padding-top: 20px; color: #6b7280; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="card">
                <div class="header">
                  <h1>Sankalpa Farms & Resorts</h1>
                </div>
                <div class="content">
                  <p>Hi ${name},</p>
                  <p>Thank you for your interest in Sankalpa Farms & Resorts. Our team will review your message and contact you shortly.</p>
                  <div class="contact-info">
                    <p><strong>Phone:</strong> <a href="tel:6309123731" style="color: #1a4d2e; text-decoration: none;">+91 6309123731</a></p>
                    <p><strong>WhatsApp:</strong> <a href="https://wa.me/916309123731" style="color: #1a4d2e; text-decoration: none;">Chat with us</a></p>
                  </div>
                  <div style="text-align:center; margin-top: 30px;">
                    <a href="https://wa.me/916309123731?text=Hi!%20I'm%20${encodeURIComponent(name)}%20and%20I'm%20interested%20in%20Sankalpa%20Farms%20%26%20Resorts.%20Please%20share%20more%20details." class="cta-button">WhatsApp Us Now</a>
                  </div>
                </div>
                <div class="footer">
                  <p>This email confirms we received your inquiry.</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return {
      success: true,
      adminEmailId: adminEmail.data?.id,
      userEmailId: customerEmail.data?.id,
    };
  } catch (error) {
    console.error('Email sending error:', error);
    throw new Error('Failed to send email');
  }
}
