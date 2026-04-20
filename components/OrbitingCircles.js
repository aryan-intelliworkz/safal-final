import React from 'react';

export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  delay = 10,
  radius = 50,
  path = true,
  iconSize = 30,
}) {
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-[#CCC] stroke-1"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}

      {React.Children.map(children, (child, index) => {
        const count = React.Children.count(children);
        const delayValue = -(index * (duration / count));
        
        return (
          <div
            style={
              {
                "--duration": duration,
                "--radius": radius,
                "--icon-size": `${iconSize}px`,
                animationDelay: `${delayValue}s`,
              } 
            }
            className={cn(
              `absolute flex size-[var(--icon-size)] transform-gpu animate-orbit items-center justify-center rounded-full`,
              reverse ? "[animation-direction:reverse]" : "",
              className
            )}
          >
            {child}
          </div>
        );
      })}
    </>
  );
}
