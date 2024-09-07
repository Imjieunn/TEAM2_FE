import { useNavigate } from "react-router-dom";

const MentorCard = () => {
  const navigate = useNavigate();
  let cardId = 1;

  const handleBtn = () => {
    navigate(`/mentoring/detail/${cardId}`);
  };

  return (
    <div className="w-full bg-white min-h-[150px] rounded-md p-[12px] flex flex-col gap-2 text-[12px]">
      <div className="flex justify-between text-Gray-300">
        <div className="flex gap-2">
          <img
            src="/img/profileDemo.svg"
            className="w-[24px] h-[24px] rounded-full"
          />
          <p>프로필 닉네임</p>
        </div>
        <p>요리, 그림</p>
        <p>매너지수: 100%</p>
        <p className="flex justify-center items-center">
          <img src="/img/star.svg" /> 4.7(10)
        </p>
      </div>
      <div className="h-full flex justify-between items-end">
        <div className="h-full flex flex-col justify-between gap-2">
          <p className="font-pretendardSemibold text-[18px]">
            간단한 자취필수 요리 3종류 배우기
          </p>
          <p>대상자 : 자취 1년차 대학생</p>
          <p>소요시간 : 2시간</p>
        </div>
        <button
          className="h-[35px] px-2 bg-Gray-100 rounded-lg text-Gray-300"
          onClick={handleBtn}
        >
          신청하기
        </button>
      </div>
    </div>
  );
};

export default MentorCard;
