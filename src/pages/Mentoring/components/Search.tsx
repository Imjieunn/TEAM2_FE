const Search = () => {
  return (
    <div className="h-10 w-[100%] flex bg-white rounded-3xl gap-2 px-3 justify-center items-center">
      <img src="/img/search.svg" alt="search" className="w-[15px]" />
      <input className="w-full h-8 focus:ring-0 flex items-center justify-center outline-none" />
    </div>
  );
};

export default Search;
