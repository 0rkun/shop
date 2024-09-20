const Search = () => {
  return (
    <div className="hidden md:flex flex-1">
      <input
        className="py-2 px-3 rounded-md border-none outline-none flex flex-1"
        type="text"
        placeholder="Arama Yap..."
      />
      <button className="mx-2">Ara</button>
    </div>
  );
};

export default Search;
