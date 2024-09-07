import { Button } from "../../components/Button";
import Header from "../../components/Header/Header";

const MentoringDetail = () => {
  let cardId = 1;
  return (
    <>
      <Header name="신청하기" />
      <div className="ContentsContainer gap-[24px] my-[56px] h-full justify-center items-center bg-white">
        <img src="/img/detail.svg" className="w-full" />
      </div>
      <Button name="신청하기" url={`/mentoring/${cardId}/apply`} />
    </>
  );
};

export default MentoringDetail;
