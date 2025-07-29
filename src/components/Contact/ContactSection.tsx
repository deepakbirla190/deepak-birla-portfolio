import { MsgIcon, PhoneIcon,  LinkedIn, LocationIcon, GithubIcon } from '@/utils/icons'
import ContactForm from './ContactForm'

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-secondary my-8 grid grid-cols-1 gap-16 rounded-4xl p-8 md:my-16 md:grid-cols-2 md:gap-8 lg:gap-12">
      <div className="flex flex-col justify-between gap-8">
        <div>
          <h3 className="text-neutral text-lg font-bold">Let's Connect</h3>
          <h4 className="text-accent text-2xl font-bold md:text-lg">Deepak Birla</h4>
          <p className="text-neutral mt-4 font-medium">React.js Frontend Developer</p>
          <p className="text-neutral mt-8">
            Experienced React.js developer specializing in building scalable web applications with clean code, responsive design, and optimal performance.
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-neutral text-lg font-bold">Contact Information</p>
          
          <div className="space-y-2">
            <a
              href="mailto:deepak.birla190@gmail.com"
              className="text-neutral hover:text-accent flex items-center gap-2 font-light transition-colors duration-300">
              <MsgIcon /> deepak.birla190@gmail.com
            </a>
            <a
              href="tel:+919977906511"
              className="text-neutral hover:text-accent flex items-center gap-2 font-light transition-colors duration-300">
              <PhoneIcon /> +91 9977906511
            </a>
            <div className="text-neutral flex items-center gap-2 font-light">
              <LocationIcon /> Indore, India
            </div>
            <a
              href="https://linkedin.com/in/deepak-birla-8570a110b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral hover:text-accent flex items-center gap-2 font-light transition-colors duration-300">
              <LinkedIn /> linkedin.com/in/deepak-birla
            </a>
             <a
              href="https://github.com/deepakbirla190"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral hover:text-accent flex items-center gap-2 font-light transition-colors duration-300">
              <GithubIcon /> github.com/deepakbirla190
            </a>
          </div>
        </div>
      </div>

      <ContactForm />
    </section>
  )
}

export default ContactSection