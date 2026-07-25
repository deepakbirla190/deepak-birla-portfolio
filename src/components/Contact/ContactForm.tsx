// 'use client'
// import Button from '../UI/Button'
// import Input from '../UI/Input'
// import Textarea from '../UI/Textarea'
// import { useForm, ValidationError } from '@formspree/react'

// const ContactForm = () => {
//   const [state, handleSubmit] = useForm('xqalbgoy')
//   if (state?.succeeded) {
//     return (
//       <p className="text-accent self-center text-center text-2xl font-medium">
//         Thank for contacting Deepak Birla{' '}
//       </p>
//     )
//   }
//   console.log(state,'statestate')

//   return (
//     <form onSubmit={handleSubmit}>
//       <Input label="Full name" id="name" name="name" placeholder="Your name here"  />
//       <ValidationError className="text-red-500 text-sm mt-1"  prefix="Name" field="name" errors={state.errors} />

//       <Input
//         label="Email address"
//         id="email"
//         type="email"
//         name="email"
//         placeholder="Your email address here"
        
//       />
//       <ValidationError className="text-red-500 text-sm mt-1"  prefix="Email" field="email" errors={state.errors} />

//       <Input label="Subject" id="subject" name="subject" placeholder="Your subject here" />
//       <ValidationError className="text-red-500 text-sm mt-1"  prefix="Subject" field="subject" errors={state.errors} />

//       <Textarea
//         label="Message"
//         id="message"
//         name="message"
//         placeholder="Your message here"
//         rows={7}
        
//       />
//       <ValidationError className="text-red-500 text-sm mt-1"   prefix="Message" field="message" errors={state.errors} />

//       <Input
//         type="number"
//         label="Mobile"
//         id="mobile"
//         name="mobile"
//         placeholder="Please enter mobile number"
        
//       />
//       <ValidationError className="text-red-500 text-sm mt-1"  prefix="Mobile" field="mobile" errors={state.errors} />

//       <Button
//         type="submit"
//         text={state.submitting ? 'Submitting...' : 'Submit'}
//         disabled={state.submitting}
//       />
//     </form>
//   )
// }

// export default ContactForm

'use client'

import { useState } from 'react'
import Button from '../UI/Button'
import Input from '../UI/Input'
import Textarea from '../UI/Textarea'

const ContactForm = () => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true)
    setSuccess(false)

    const form = e.currentTarget

    const formData = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      subject: (form.elements.namedItem('subject') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
      mobile: (form.elements.namedItem('mobile') as HTMLInputElement).value,
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data?.error || 'Failed to send message')
      }

      setSuccess(true)
      form.reset()
    } catch (error) {
      console.error(error)
      alert('Failed to send message.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <p className="text-center text-2xl font-medium text-green-600">
        ✅ Thank you! Your message has been sent successfully.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Full name"
        id="name"
        name="name"
        placeholder="Your name here"
        required
      />

      <Input
        label="Email address"
        id="email"
        name="email"
        type="email"
        placeholder="Your email address here"
        required
      />

      <Input
        label="Subject"
        id="subject"
        name="subject"
        placeholder="Your subject here"
        required
      />

      <Textarea
        label="Message"
        id="message"
        name="message"
        placeholder="Your message here"
        rows={7}
        required
      />

      <Input
        label="Mobile"
        id="mobile"
        name="mobile"
        type="tel"
        placeholder="Please enter mobile number"
        required
      />

      <Button
        type="submit"
        text={loading ? 'Sending...' : 'Submit'}
        disabled={loading}
      />
    </form>
  )
}

export default ContactForm