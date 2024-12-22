import React, { useState, useRef, useEffect } from "react";
import styles from "./HintTooltip.module.css";

export const HintTooltip = ({ children, content }) => {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible]);

  const handleTouch = () => {
    setIsVisible(!isVisible);
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      handleTouch();
    }
  };

  return (
    <span className={styles.container} ref={tooltipRef}>
      <p
        className={styles.title}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onClick={handleTouch}
        onKeyUp={handleKeyUp}
      >
        {children}
        <sup>ℹ</sup>
      </p>
      {isVisible && <div className={styles.tooltip}>{content}</div>}
    </span>
  );
};
