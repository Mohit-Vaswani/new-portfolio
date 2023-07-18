"use client"
import { useState } from 'react';

const ProgressBar = () => {
  const [progress, setProgress] = useState(null);

  const handleHover = () => {
    if (progress >= 100) return; // Skip if progress is already at or above 100

    let currentProgress = progress;
    const interval = setInterval(() => {
      currentProgress += 1;
      if (currentProgress > 100) currentProgress = 100;
      setProgress(currentProgress);
      if (currentProgress >= 100) clearInterval(interval);
    }, 50);
  };

  return (
    <div className="progress" style={{ margin: '10px', width: '700px' }}>
      <div
        id="dynamic"
        className="progress-bar progress-bar-success progress-bar-striped active mx-auto"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
        style={{ width: `${progress}%` }}
        onMouseEnter={handleHover}
      >
        <span id="current-progress">{progress !== null ? `${progress}%` : 'Hover'}</span>
      </div>
    </div>
  );
};

export default ProgressBar;

