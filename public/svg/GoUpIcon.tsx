import React from "react";

interface GoUpIconProps {
  className?: string;
}

const GoUpIcon: React.FC<GoUpIconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="43"
      height="43"
      viewBox="0 0 43 43"
      fill="none"
    >
      <circle cx="21.5" cy="21.5" r="21" stroke="#d21624" />
      <path
        d="M31.9479 21.6224L22.7481 11.9873V34H21.2519V11.9873L12.0521 21.6224L11 20.5206L22 9L33 20.5206L31.9479 21.6224Z"
        fill="#d21624"
      />
    </svg>
  );
};

export default GoUpIcon;
export { GoUpIcon as ReactComponent };
