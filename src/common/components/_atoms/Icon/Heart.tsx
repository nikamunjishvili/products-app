import { IconProps } from "../../../types";

const Heart = ({ width, height }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.9996 17.5451C-6.66672 8.33333 4.99993 -1.66667 9.9996 4.65671C14.9999 -1.66667 26.6666 8.33333 9.9996 17.5451Z"
        stroke="#1A1A1A"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default Heart;
