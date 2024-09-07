import { Button } from "../../components/Button";
import Header from "../../components/Header/Header";

const Making3 = () => {
  return (
    <>
      <Header name="수업 개설하기" />
      <img src="/img/make3.svg" />
      {/* <div className="flex flex-col">
        <img src="/img/makingTitle3.svg" className="flex-1" />
        <div className="flex-3" />
      </div> */}
      <Button name="다음으로" url="/" />
    </>
  );
};

export default Making3;
