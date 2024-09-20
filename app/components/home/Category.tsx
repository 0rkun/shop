"use client";

const Category = () => {
  const catergoryList = [
    {
      name: "Ayakkabı",
    },
    {
      name: "Telefon",
    },
    {
      name: "Bilgisayar",
    },
    {
      name: "Tablet",
    },
    {
      name: "T-Shirt",
    },
    {
      name: "Saat",
    },
  ];

  return (
    <div className="flex items-center justify-center px-3 md:px-10 gap-3 md:gap-10 py-5 md:py-8 overflow-x-auto">
      {catergoryList.map((category, i) => (
        <div
          className="border text-black border-slate-700 rounded-full min-w-[120px] flex  items-center justify-center cursor-pointer  flex-1 px-4 py-2"
          key={i}
        >
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default Category;
