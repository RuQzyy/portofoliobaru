import React, { useRef, useState } from 'react';

interface Position {
  x: number;
  y: number;
}

interface SpotlightCardProps extends React.PropsWithChildren {
  className?: string;
  spotlightColor?: string;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  spotlightColor = 'rgba(255,255,255,0.25)',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<Position>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const onMouseMove: React.MouseEventHandler<HTMLDivElement> = e => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative rounded-3xl p-[1.5px] ${className}`}
    >
      {/* 🌈 REAL BORDER (MASKED) */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl"
        style={{
          opacity,
          background: `radial-gradient(
            300px circle at ${pos.x}px ${pos.y}px,
            #a855f7,
            #ec4899,
            #22d3ee,
            transparent 70%
          )`,
          WebkitMask:
            'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          padding: '1.5px',
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* 🧱 CARD BODY */}
      <div className="relative rounded-[22px] bg-neutral-900 overflow-hidden">
        {/* ✨ SPOTLIGHT */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            opacity,
            background: `radial-gradient(
              circle at ${pos.x}px ${pos.y}px,
              ${spotlightColor},
              transparent 80%
            )`,
            transition: 'opacity 0.3s ease',
          }}
        />
        <div className="relative p-8 text-white">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SpotlightCard;
