import { NextResponse } from 'next/server'
import { Resend } from 'resend';



const resend = new Resend("re_dMQPPBm6_JDUgJqte3RspwnGFxLrRJH65");

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, message } = await request.json()
    const referer = request.headers.get('referer') || '';
    const planFromUrl = new URL(referer).searchParams.get('plan');
    console.log('Contact request from plan:', planFromUrl);
    // Basic validation
    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      )
    }
    const contactData = {
      name: `${firstName} ${lastName}`,
      email,
      message,
      sourcePlan: planFromUrl,
      timestamp: new Date().toISOString()
    };

    console.log('Form submission:', contactData)
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'aidana@bookabl.dev',
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: JSON.stringify(contactData),
    });
    if (error) {
      console.log('Form submission failed:', {error})
    }
    
    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Form submission error:', error)
    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    )
  }
} 