import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    // Form Data
    const { name, email, mobile, subject, message } = await req.json()

    // console.log('========== FORM DATA ==========')
    console.log({
      name,
      email,
      mobile,
      subject,
      message,
    })

    // WhatsApp Message
    const whatsappMessage = `📩 User Request Data

👤 Name: ${name}
📧 Email: ${email}
📱 Mobile: ${mobile}
📝 Subject: ${subject}

💬 Message:
${message}`

    const payload = {
      messaging_product: 'whatsapp',
      to: process.env.ADMIN_WHATSAPP,
      type: 'text',
      text: {
        body: whatsappMessage,
      },
    }

    // console.log('========== PAYLOAD ==========')
    console.log(JSON.stringify(payload, null, 2))

    const response = await fetch(
      `https://graph.facebook.com/v25.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    )

    const data = await response.json()

    // console.log('========== META RESPONSE ==========')
    console.log(JSON.stringify(data, null, 2))

    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          error: data,
        },
        {
          status: response.status,
        }
      )
    }

    return NextResponse.json({
      success: true,
      data,
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      {
        status: 500,
      }
    )
  }
}