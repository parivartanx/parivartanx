export function BackgroundCurves() {
  return (
    <>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute w-[800px] h-[800px] -top-[400px] -right-[400px] text-blue-100/40"
          viewBox="0 0 800 800"
        >
          <circle
            cx="400"
            cy="400"
            r="390"
            fill="none"
            stroke="currentColor"
            strokeWidth="10"
            className="text-indigo-400 blur-[10px]"
          />
        </svg>
        <svg
          className="absolute w-[1000px] h-[1000px] -bottom-[500px] -left-[500px] text-indigo-100/30"
          viewBox="0 0 1000 1000"
        >
          <circle
            cx="500"
            cy="500"
            r="490"
            fill="none"
            stroke="currentColor"
            strokeWidth="10"
            className="text-indigo-400 blur-[10px]"
          />
        </svg>
      </div>
      {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-black/90 to-indigo-50/80 pointer-events-none" /> */}
    </>
  );
}
