import { Button } from "../../components/Button";
import Header from "../../components/Header/Header";

const Making2 = () => {
  return (
    <>
      <Header name="수업 개설하기" />
      <img src="/img/make2.svg" />
      {/* <div className="flex flex-col">
        <img src="/img/makingTitle2.svg" className="flex-1" />
        <div className="flex-3" />
      </div> */}
      <Button name="다음으로" url="/making3" />
    </>
  );
};

export default Making2;
