type TagsProps = {
  name: string;
  isActive: boolean;
};

const CategoryTag = ({ name, isActive }: TagsProps) => {
  return (
    <button
      className={` px-2 py-1 rounded-md  ${
        isActive ? "bg-Blue-100 text-white" : "bg-white text-Gray-300"
      } `}
    >
      {name}
    </button>
  );
};

export default CategoryTag;
