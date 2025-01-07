"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./HintTooltip.module.css";

export const HintTooltip = ({ children, content }) => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const tooltipRef = useRef(null);
  const targetRef = useRef(null);

  const handleMouseEnter = () => {
    setVisible(true);
    calculatePosition();
  };

  const hideTooltip = () => {
    setVisible(false);
  };

  const calculatePosition = () => {
    const tooltip = tooltipRef.current;
    const target = targetRef.current;
    const offset = 8;

    if (tooltip && target) {
      const tooltipRect = tooltip.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();

      let top = targetRect.top - tooltipRect.height - offset;
      let left = targetRect.left + targetRect.width / 2 - tooltipRect.width / 2;

      if (top < 0) top = targetRect.bottom + offset;
      if (left < 0) left = offset;

      if (left + tooltipRect.width > window.innerWidth) {
        left = window.innerWidth - tooltipRect.width - offset;
      }

      setPosition({ top: top + window.scrollY, left: left + window.scrollX });
    }
  };

  useEffect(() => {
    if (visible) {
      calculatePosition();
      window.addEventListener("scroll", hideTooltip);
      window.addEventListener("resize", hideTooltip);
    } else {
      window.removeEventListener("scroll", hideTooltip);
      window.removeEventListener("resize", hideTooltip);
    }

    return () => {
      window.removeEventListener("scroll", hideTooltip);
      window.removeEventListener("resize", hideTooltip);
    };
  }, [visible]);

  const handleKeyUp = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      handleMouseEnter();
    }
  };

  return (
    <>
      <span
        ref={targetRef}
        className={styles.target}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={hideTooltip}
        onClick={handleMouseEnter}
        onKeyUp={handleKeyUp}
      >
        {children}
        <sup>!</sup>
      </span>
      {visible && (
        <div
          ref={tooltipRef}
          className={styles.tooltip}
          style={{
            top: position.top,
            left: position.left,
          }}
        >
          {content}
        </div>
      )}
    </>
  );
};
