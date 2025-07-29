'use client'
import Button from '../UI/Button'
import Input from '../UI/Input'
import Textarea from '../UI/Textarea'
import { useForm, ValidationError } from '@formspree/react'

const ContactForm = () => {
  const [state, handleSubmit] = useForm('xqalbgoy')
  if (state?.succeeded) {
    return (
      <p className="text-accent self-center text-center text-2xl font-medium">
        Thank for contacting Deepak Birla{' '}
      </p>
    )
  }
  console.log(state,'statestate')

  return (
    <form onSubmit={handleSubmit}>
      <Input label="Full name" id="name" name="name" placeholder="Your name here"  />
      <ValidationError className="text-red-500 text-sm mt-1"  prefix="Name" field="name" errors={state.errors} />

      <Input
        label="Email address"
        id="email"
        type="email"
        name="email"
        placeholder="Your email address here"
        
      />
      <ValidationError className="text-red-500 text-sm mt-1"  prefix="Email" field="email" errors={state.errors} />

      <Input label="Subject" id="subject" name="subject" placeholder="Your subject here" />
      <ValidationError className="text-red-500 text-sm mt-1"  prefix="Subject" field="subject" errors={state.errors} />

      <Textarea
        label="Message"
        id="message"
        name="message"
        placeholder="Your message here"
        rows={7}
        
      />
      <ValidationError className="text-red-500 text-sm mt-1"   prefix="Message" field="message" errors={state.errors} />

      <Input
        type="number"
        label="Mobile"
        id="mobile"
        name="mobile"
        placeholder="Please enter mobile number"
        
      />
      <ValidationError className="text-red-500 text-sm mt-1"  prefix="Mobile" field="mobile" errors={state.errors} />

      <Button
        type="submit"
        text={state.submitting ? 'Submitting...' : 'Submit'}
        disabled={state.submitting}
      />
    </form>
  )
}

export default ContactForm
