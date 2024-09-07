import { Link } from "react-router-dom";

const GnbBottom = () => {
  const menus = [
    {
      name: "멘토링",
      link: "/mentoring",
    },
    {
      name: "Q&A",
      link: "/qna",
    },
    {
      name: "멘토링 관리",
      link: "/manage",
    },
    {
      name: "내프로필",
      link: "/profile",
    },
  ];

  return (
    <div className="absolute bottom-0 h-[83px] border border-black w-[100%] flex">
      {menus.map((menu) => (
        <Link
          to={menu.link}
          className="flex flex-1 justify-center items-center"
        >
          {menu.name}
        </Link>
      ))}
    </div>
  );
};

export default GnbBottom;
