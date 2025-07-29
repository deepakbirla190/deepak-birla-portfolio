// components/FlipWrapper.tsx
"use client";

import { ReactNode, useState } from 'react';

type FlipWrapperProps = {
  frontComponent: ReactNode;
  backComponent: ReactNode;
  flipButtonText?: string;
  backButtonText?: string;
  className?: string;
};

const FlipWrapper = ({
  frontComponent,
  backComponent,
  flipButtonText = "More About Me",
  backButtonText = "Back",
  className = ""
}: FlipWrapperProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`relative w-full h-full perspective-1000 ${className}`}>
      <div 
        className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front Side - Normal Orientation */}
        <div className="absolute w-full h-full backface-hidden">
          {frontComponent}
          <button 
            onClick={handleFlip}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            aria-label="Flip to back side"
          >
            {flipButtonText}
          </button>
        </div>
        
        {/* Back Side - Normal Orientation (no mirror effect) */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="[transform:rotateY(180deg)]">
            {backComponent}
            <button 
              onClick={handleFlip}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              aria-label="Flip to front side"
            >
              {backButtonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipWrapper;