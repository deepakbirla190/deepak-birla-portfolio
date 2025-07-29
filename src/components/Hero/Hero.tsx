'use client'
import { useState, useEffect, useRef } from 'react'
import useRotatingAnimation from '@/hooks/useRotatingAnimation'
import Image from 'next/image'
import Ellipse from './Ellipse'
import TypingEffect from './TypingEffect'

const Hero = () => {
  const ellipseRef = useRotatingAnimation()
  const [isFlipped, setIsFlipped] = useState(false)
  const [autoFlip, setAutoFlip] = useState(true)
  const flipIntervalRef = useRef<NodeJS.Timeout | null>(null)

  const specifyRole = [
    'ReactJs',
    'Nextjs',
    'TypeScript',
    'Tailwind CSS',
    'Frontend Developer',
    'Responsive Design',
    'Redux',
    'Clean Code',
    'Mobile First Approach',
    'Performance Optimization',
    'nodejs',
  ]

  const aboutme = ['I', 'am', 'Software', 'Developer']

  useEffect(() => {
    if (autoFlip) {
      flipIntervalRef.current = setInterval(() => {
        setIsFlipped((prev) => !prev)
      }, 30000)
    }

    return () => {
      if (flipIntervalRef.current) {
        clearInterval(flipIntervalRef.current)
      }
    }
  }, [autoFlip])

  const handleManualFlip = () => {
    setAutoFlip(false)
    setIsFlipped((prev) => !prev)

    // Restart auto flip after manual interaction
    setTimeout(() => {
      setAutoFlip(true)
    }, 5000)
  }

  return (
    <section className="bg-primary bg-small-glow bg-small-glow-position md:bg-large-glow-position lg:bg-large-glow min-h-[calc(dvh-4rem)] bg-no-repeat">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-4 px-4 pt-12 pb-10 md:grid-cols-2 lg:p-4">
        <div className="flex min-h-48 flex-col justify-between lg:min-h-56 lg:max-w-[33.75rem]">
          <div className={`flip-container ${isFlipped ? 'flipped' : ''}`}>
            <div className="flip-front">
              <h1>
                <span className="text-neutral mb-2 block text-lg font-bold">Deepak Birla</span>
                <TypingEffect words={aboutme} />
                <TypingEffect words={specifyRole} />
              </h1>
              <h2 className="text-neutral mt-3">
                Crafting innovative solutions to solve real-world problems
              </h2>
            </div>
            <div className="flip-back">
              <h1 className="text-neutral mb-2 text-lg font-bold">More about</h1>
              <p className="text-neutral">
                Passionate developer with expertise in modern web technologies. Focused on creating
                efficient, scalable, and user-friendly applications. Experienced React.js Frontend
                Developer with 2.5+ years of hands-on experience building scalable web applications.
                Expert in JavaScript, React.js, Redux, and modern frontend technologies. Proven
                track record of delivering production-ready applications with clean code, responsive
                design, and optimal performance. Strong experience in API integration, state
                management, and cross-browser compatibility.
              </p>
              <ul className="text-neutral mt-3 list-disc pl-5">
                <li>2.5+ years of experience</li>
                <li>Strong problem-solving skills</li>
                <li>Clean code advocate</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex min-h-[18.75rem] items-center justify-center lg:min-h-[35rem]">
          <div className="text-accent relative size-56 sm:size-60 md:size-[20rem] lg:size-[25.75rem]">
            <Image
              src={'/profile1.png'}
              fill={true}
              priority={true}
              sizes="(min-width: 1024px) 25.75rem, (min-width: 768px) 20rem, (min-width: 640px) 15rem, 14rem"
              alt="Deepak Birla - Full Stack Developer"
              className="object-contain p-7"
            />
            <Ellipse
              ref={ellipseRef}
              className="absolute top-0 left-0 size-56 transition-transform duration-500 ease-out sm:size-60 md:size-[20rem] lg:size-[25.75rem]"
            />
          </div>
        </div>
        <div className="mt-2 flex flex-wrap gap-6">
          <button
            aria-label="Connect with me"
            className="cursor-pointer bg-accent min-w-32 rounded-lg px-[14px] py-[10px] text-center text-sm font-medium text-[#00071E]">
            Hire Me
          </button>
          <a
            href="https://www.linkedin.com/in/deepak-birla-8570a110b/"
            target="_blank"
            aria-label="View LinkedIn Profile"
            className="text-neutral bg-secondary cursor-pointer rounded-lg px-[14px] py-[10px] text-sm">
            LinkedIn Profile
          </a>
          <button
            onClick={handleManualFlip}
            className="text-neutral bg-secondary cursor-pointer rounded-lg px-[14px] py-[10px] text-sm">
            {isFlipped ? 'Back' : 'More'}
          </button>
        </div>
      </div>

      <style jsx>{`
        .flip-container {
          perspective: 1000px;
          position: relative;
          min-height: 200px;
        }

        .flip-front,
        .flip-back {
          backface-visibility: hidden;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transition: transform 0.6s ease;
          transform-style: preserve-3d;
        }

        .flip-back {
          transform: rotateY(180deg);
        }

        .flip-container.flipped .flip-front {
          transform: rotateY(180deg);
        }

        .flip-container.flipped .flip-back {
          transform: rotateY(0deg);
        }
      `}</style>
    </section>
  )
}

export default Hero
