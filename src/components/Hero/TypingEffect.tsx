import React from 'react'

const TypingEffect = ({ words }: { words: string[] }) => {
  // const [wordIndex, setWordIndex] = useState(0)
  // const [charIndex, setCharIndex] = useState(0)
  // const [displayText, setDisplayText] = useState('')

  // useEffect(() => {
  //   const timer = setTimeout(
  //     () => {
  //       const currentWord = words[wordIndex]

  //       if (charIndex < currentWord.length) {
  //         // Type current character
  //         setDisplayText((prev) => prev + currentWord[charIndex])
  //         setCharIndex(charIndex + 1)
  //       } else {
  //         // Move to next word
  //         if (wordIndex < words.length - 1) {
  //           setDisplayText((prev) => prev + ' ')
  //           setWordIndex(wordIndex + 1)
  //           setCharIndex(0)
  //         } else {
  //           // Reset after completion
  //           setTimeout(() => {
  //             setDisplayText('')
  //             setWordIndex(0)
  //             setCharIndex(0)
  //           }, 1000)
  //         }
  //       }
  //     },
  //     charIndex === 0 && wordIndex > 0 ? 500 : 150,
  //   )

  //   return () => clearTimeout(timer)
  // }, [wordIndex, charIndex, words])

  return (
    <div className="text-accent block text-sm font-bold lg:text-[16px]">
      {words.map((item, index) => (
        <span key={index} className="ml-1 animate-pulse font-bold">
          {item}
          {index !== words.length - 1 && ', '}
        </span>
      ))}
    </div>
  )
}

export default TypingEffect
