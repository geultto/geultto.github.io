'use client';

import React, { useState, useEffect } from 'react';
import './css/StoryCarousel.css';

interface StoryCarouselProps {
  stories: string[];
  interval?: number; // 밀리초 단위, 기본값은 5000ms
}

export function StoryCarousel({ stories, interval = 5000 }: StoryCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex((current) => (current + 1) % stories.length);
        setIsTransitioning(false);
      }, 500); // 페이드 아웃 후 인덱스 변경
    }, interval);

    return () => clearInterval(timer);
  }, [stories.length, interval]);

  return (
    <div className="story-carousel">
      <div className={`story-carousel-item ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
        <div className="mt-10 flex w-full rounded-[20px] border border-secondary-dark px-6 py-5 mb-4">
          {stories[activeIndex]}
        </div>
      </div>
      <div className="story-carousel-indicators">
        {stories.map((story, index) => (
          <button
            type="button"
            key={`story-${index}-${story}`}
            className={`story-indicator ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}