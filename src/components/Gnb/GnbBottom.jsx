import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const GnbBottom = () => {
  const menus = [
    {
      name: "멘토링",
      link: "/mentoring",
    },
    {
      name: "수업 개설하기",
      link: "/making",
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

  const location = useLocation();
  const isActive = (path) => {
    // location.pathname.startsWith(path);
    return location.pathname === path;
  };

  const [currentPath, setCurrentPath] = useState(location.pathname);
  // const [active, setActive] = useState(false);

  useEffect(() => {
    setCurrentPath(location.pathname);
    console.log(currentPath);
  }, [location]);

  return (
    <div className="absolute bottom-0 h-[83px] w-[100%] flex bg-white">
      {menus.map((menu, idx) => (
        <Link
          to={menu.link}
          className="flex flex-1 justify-center items-center flex-col gap-1 text-Gray-200"
          key={idx}
        >
          <img
            src={
              isActive(menu.link)
                ? `/img${menu.link}Select.svg`
                : `/img${menu.link}.svg`
            }
            alt="bng 메뉴"
          />
          <p
            className={isActive(menu.link) ? "text-Blue-100" : "text-Gray-200"}
          >
            {menu.name}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default GnbBottom;
