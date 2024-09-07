import GnbTop from "../../components/Gnb/GnbTop";
import Category from "./components/Category";
import MentorLists from "./components/MentorLists";
import Search from "./components/Search";

const Mentoring = () => {
  return (
    <>
      <GnbTop />
      <div className="ContentsContainer gap-[24px] my-[90px]">
        <Search />
        <Category />
        <MentorLists />
      </div>
    </>
  );
};

export default Mentoring;
