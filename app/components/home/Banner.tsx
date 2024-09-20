import Image from "next/image";

const Banner = () => {
  return (
    <div className="h-[237px] flex items-center bg-yellow-500  justify-center ">
      <div className="h-[137px] relative w-full ">
        <Image
          src="/indirim5.jpg"
          fill
          alt=""
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default Banner;
