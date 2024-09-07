import React from "react";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  name: string;
  url: string;
}

export const Button: React.FC<ButtonProps> = ({ name, url }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(url); // 지정된 URL로 이동
  };

  return (
    <button
      className="absolute bottom-[120px] w-[80%] bg-Blue-100 py-3 rounded-xl text-white"
      onClick={handleClick}
    >
      {name}
    </button>
  );
};
