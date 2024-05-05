import { IconProps } from "../../../types";

const Rightarrow = ({width,height}:IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 0.916669L5.08333 5L1 9.08334"
        stroke="#999999"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Rightarrow;
