import { Button } from "../../components/Button";
import Header from "../../components/Header/Header";

const Making = () => {
  return (
    <>
      <Header name="수업 개설하기" />
      <img src="/img/make1.svg" />
      {/* <div className="flex flex-col items-start">
        <img src="/img/makingTitle1.svg" />
        <input className="w-full bg-Gray-200 p-3 rounded-md" />
      </div> */}
      <Button name="다음으로" url="/making2" />
    </>
  );
};

export default Making;
