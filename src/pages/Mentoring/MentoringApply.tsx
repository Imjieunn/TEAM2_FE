import { Button } from "../../components/Button";
import Header from "../../components/Header/Header";

const MentoringApply = () => {
  let cardId = 1;
  return (
    <>
      <Header name="신청하기" />
      <div className="w-full flex flex-col p-[20px] my-[56px] h-full items-center bg-white">
        <img src="/img/apply.svg" className="w-full" />
      </div>
      <Button name="다음으로" url={`/mentoring/${cardId}/apply/confirm`} />
    </>
  );
};

export default MentoringApply;
