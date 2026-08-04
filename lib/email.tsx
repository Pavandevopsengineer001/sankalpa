import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function sendContactEmail(formData: ContactFormData) {
  try {
    // Email to admin
    const adminEmail = await resend.emails.send({
      from: 'Sankalpa Farms & Resorts <onboarding@resend.dev>',
      to: 'mr.pavan.kalyan.51@gmail.com',
      subject: `New Contact Form Submission from ${formData.name}`,
      html: `
        <div style="font-family: 'Cormorant Garamond', serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f5f5f5;">
          <div style="background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <h1 style="color: #1a4d2e; margin-bottom: 20px; font-size: 28px; border-bottom: 3px solid #d4af37; padding-bottom: 10px;">
              New Contact Form Submission
            </h1>
            
            <div style="margin: 20px 0;">
              <h3 style="color: #d4af37; font-size: 14px; text-transform: uppercase; letter-spacing: 2px; margin: 15px 0 5px 0;">Full Name</h3>
              <p style="color: #333; font-size: 16px; margin: 0; padding: 10px 0;">${formData.name}</p>
            </div>
            
            <div style="margin: 20px 0;">
              <h3 style="color: #d4af37; font-size: 14px; text-transform: uppercase; letter-spacing: 2px; margin: 15px 0 5px 0;">Email Address</h3>
              <p style="color: #333; font-size: 16px; margin: 0; padding: 10px 0;">
                <a href="mailto:${formData.email}" style="color: #1a4d2e; text-decoration: none;">${formData.email}</a>
              </p>
            </div>
            
            <div style="margin: 20px 0;">
              <h3 style="color: #d4af37; font-size: 14px; text-transform: uppercase; letter-spacing: 2px; margin: 15px 0 5px 0;">Phone Number</h3>
              <p style="color: #333; font-size: 16px; margin: 0; padding: 10px 0;">
                <a href="tel:${formData.phone}" style="color: #1a4d2e; text-decoration: none;">${formData.phone}</a>
              </p>
            </div>
            
            <div style="margin: 20px 0;">
              <h3 style="color: #d4af37; font-size: 14px; text-transform: uppercase; letter-spacing: 2px; margin: 15px 0 5px 0;">Message</h3>
              <p style="color: #333; font-size: 16px; margin: 0; padding: 10px; background: #f9f9f9; border-left: 4px solid #d4af37; border-radius: 4px; white-space: pre-wrap; line-height: 1.6;">${formData.message || 'No message provided'}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; font-size: 12px; color: #999;">
              <p>This is an automated email from Sankalpa Farms & Resorts website.</p>
              <p>Submitted on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
            </div>
          </div>
        </div>
      `,
    });

    // Confirmation email to user
    const userEmail = await resend.emails.send({
      from: 'Sankalpa Farms & Resorts <onboarding@resend.dev>',
      to: formData.email,
      subject: 'Thank You for Contacting Sankalpa Farms & Resorts',
      html: `
        <div style="font-family: 'Cormorant Garamond', serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f5f5f5;">
          <div style="background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); text-align: center;">
            <h1 style="color: #1a4d2e; margin-bottom: 20px; font-size: 32px;">Sankalpa Farms & Resorts</h1>
            
            <h2 style="color: #333; font-size: 24px; margin: 20px 0;">Thank You for Your Interest!</h2>
            
            <p style="color: #666; font-size: 16px; line-height: 1.6; margin: 20px 0;">
              Hi ${formData.name},
            </p>
            
            <p style="color: #666; font-size: 16px; line-height: 1.6; margin: 20px 0;">
              We have received your inquiry and appreciate your interest in Sankalpa Farms & Resorts. Our team will review your message and get back to you shortly.
            </p>
            
            <div style="background: #f0f0f0; padding: 20px; border-radius: 8px; margin: 30px 0;">
              <h3 style="color: #1a4d2e; margin-top: 0;">Quick Contact Options</h3>
              <p style="margin: 10px 0;">
                <strong>Call:</strong> +91 9154658651
              </p>
              <p style="margin: 10px 0;">
                <strong>WhatsApp:</strong> +91 9154658651
              </p>
              <p style="margin: 10px 0;">
                <strong>Location:</strong> Kolanupaka & Aleru, Telangana
              </p>
            </div>
            
            <p style="color: #666; font-size: 14px; margin-top: 30px;">
              Best regards,<br/>
              <strong>Sankalpa Farms & Resorts Team</strong>
            </p>
            
            <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e0e0e0; font-size: 12px; color: #999;">
              <p style="margin: 5px 0;">This is an automated response. Please do not reply to this email.</p>
            </div>
          </div>
        </div>
      `,
    });

    return {
      success: true,
      adminEmailId: adminEmail.data?.id,
      userEmailId: userEmail.data?.id,
    };
  } catch (error) {
    console.error('Email sending error:', error);
    throw new Error('Failed to send email');
  }
}
