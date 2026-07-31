import React, { useState, useRef, useCallback } from 'react';
import { Heart } from 'lucide-react';

interface Reaction {
  id: string;
  emoji: string;
  x: number;
  y: number;
}

const LiveReactions: React.FC = () => {
  const [reactions, setReactions] = useState<Reaction[]>([]);
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const reactionIdRef = useRef(0);

  const emojis = ['❤️', '😍', '🔥', '🎉', '👏', '💯', '🙌', '⭐'];

  const getRandomEmoji = () =>
    emojis[Math.floor(Math.random() * emojis.length)];

  const handleReaction = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newReaction: Reaction = {
      id: `reaction-${reactionIdRef.current++}`,
      emoji: getRandomEmoji(),
      x,
      y,
    };

    setReactions((prev) => [...prev, newReaction]);

    // Remove reaction after animation completes
    setTimeout(() => {
      setReactions((prev) =>
        prev.filter((reaction) => reaction.id !== newReaction.id)
      );
    }, 2000);
  }, []);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className='mt-8 flex flex-col items-center gap-6'>
      {/* Reaction Display Area */}
      <div
        ref={containerRef}
        onClick={handleReaction}
        className={`relative w-full h-48 rounded-2xl border-2 border-dashed transition-all duration-300 cursor-pointer overflow-hidden ${
          isActive
            ? 'border-[#2295e2] bg-gradient-to-br from-[#2295e2]/10 to-[#2295e2]/5'
            : 'border-gray-300 bg-gray-50 hover:border-gray-400'
        }`}
      >
        {/* Animated floating reactions */}
        {reactions.map((reaction) => (
          <div
            key={reaction.id}
            className='absolute pointer-events-none text-4xl md:text-5xl font-bold'
            style={{
              left: `${reaction.x}px`,
              top: `${reaction.y}px`,
              animation: `floatUp 2s ease-out forwards`,
              opacity: 0,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {reaction.emoji}
          </div>
        ))}

        {/* Center content */}
        <div className='absolute inset-0 flex flex-col items-center justify-center'>
          <div className='text-center'>
            <p className='text-gray-600 font-medium mb-2'>
              {isActive ? 'Click anywhere to react!' : 'Enable Live Likes'}
            </p>
            {!isActive && (
              <p className='text-sm text-gray-500'>
                Show your support in real-time
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Like Button */}
      <button
        onClick={toggleActive}
        className={`group flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg ${
          isActive
            ? 'bg-[#2295e2] text-white shadow-[#2295e2]/50 hover:bg-[#2295e2]/90 scale-105'
            : 'bg-white text-[#2295e2] border-2 border-[#2295e2] hover:bg-[#2295e2] hover:text-white'
        }`}
      >
        <Heart
          className={`h-6 w-6 transition-transform duration-300 ${
            isActive ? 'fill-current animate-pulse' : 'group-hover:scale-110'
          }`}
        />
        <span>{isActive ? 'Live Likes Active' : 'Send Live Likes'}</span>
      </button>

      {/* Emoji palette quick access */}
      {isActive && (
        <div className='flex flex-wrap gap-2 justify-center max-w-md'>
          <p className='w-full text-sm text-gray-600 text-center mb-2'>
            Or tap the emojis below:
          </p>
          {emojis.map((emoji) => (
            <button
              key={emoji}
              onClick={(e) => {
                const rect = containerRef.current?.getBoundingClientRect();
                if (rect) {
                  const fakeEvent = new MouseEvent('click') as any;
                  fakeEvent.clientX = rect.left + rect.width / 2;
                  fakeEvent.clientY = rect.top + rect.height / 2;
                  handleReaction({
                    ...fakeEvent,
                    currentTarget: containerRef.current,
                  } as any);
                }
              }}
              className='text-3xl md:text-4xl hover:scale-125 transition-transform duration-200 cursor-pointer active:scale-90'
            >
              {emoji}
            </button>
          ))}
        </div>
      )}

      {/* Info text */}
      <p className='text-center text-sm text-gray-600 max-w-md'>
        {isActive
          ? 'Reactions are displayed in real-time but not counted. Show your live support!'
          : 'Activate live reactions to show your support during the broadcast.'}
      </p>

      {/* CSS Animation */}
      <style>{`
        @keyframes floatUp {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) translateY(-120px) scale(0.5);
          }
        }
      `}</style>
    </div>
  );
};

export default LiveReactions;
