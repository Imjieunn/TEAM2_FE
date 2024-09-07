import { useNavigate } from "react-router-dom";

interface haderProps {
  name: string;
}

const Header: React.FC<haderProps> = ({ name }) => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="absolute top-0 flex justify-between px-10 py-4 w-[100%] font-pretendardSemibold text-Gray-300 bg-white">
      <img src="/img/goBack.svg" onClick={handleGoBack} />
      <p className="flex justify-center items-center">{name}</p>
      <div className="w-4" />
    </div>
  );
};

export default Header;
