import { useState } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import CategoryTag from "../../../components/Tags/CategoryTag";

const Category = () => {
  const categoryInfo = [
    {
      name: "요리",
      isActive: true,
    },
    {
      name: "스포츠",
      isActive: false,
    },
    {
      name: "프로그래밍",
      isActive: false,
    },
    {
      name: "피아노",
      isActive: false,
    },
  ];

  const [category, setCategory] = useState(categoryInfo);
  const [sorting, setSorting] = useState("latest");

  const handleChange = (event: SelectChangeEvent) => {
    setSorting(event.target.value as string);
  };

  const handleTag = (tag: { name: string; isActive: boolean }) => {
    setCategory((prevCategory) =>
      prevCategory.map((item) =>
        item.name === tag.name || item.isActive
          ? { ...item, isActive: !item.isActive }
          : item
      )
    );
  };
  return (
    <div className="flex gap-2 h-10">
      <Select
        value={sorting}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        className="bg-white outline-none"
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none", // 테두리를 항상 숨김
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent", // 포커스 시 테두리 색을 투명하게 설정
          },
        }}
      >
        <MenuItem value={"latest"}>최신순</MenuItem>
        <MenuItem value={"ranking"}>랭킹순</MenuItem>
      </Select>

      {category.map((tag, idx) => (
        <button
          className={` px-2 py-1 rounded-md  ${
            tag.isActive ? "bg-Blue-100 text-white" : "bg-white text-Gray-300"
          } `}
          onClick={() => handleTag(tag)}
        >
          {tag.name}
        </button>
      ))}
    </div>
  );
};

export default Category;
