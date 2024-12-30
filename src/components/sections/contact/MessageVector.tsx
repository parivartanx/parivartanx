export function MessageVector() {
  return (
    <svg
      width="300"
      height="300"
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <circle cx="300" cy="300" r="200" fill="currentColor" className="text-violet-500/10" />
      <rect
        x="200"
        y="200"
        width="200"
        height="150"
        rx="20"
        fill="currentColor"
        className="text-indigo-500 animate-float"
      />
      <path
        d="M200 250L300 320L400 250"
        stroke="white"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <circle cx="250" cy="400" r="8" fill="currentColor" className="text-indigo-400 animate-bounce" />
      <circle cx="300" cy="400" r="8" fill="currentColor" className="text-indigo-400 animate-bounce [animation-delay:150ms]" />
      <circle cx="350" cy="400" r="8" fill="currentColor" className="text-indigo-400 animate-bounce [animation-delay:300ms]" />
    </svg>
  );
}