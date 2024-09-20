"use client";

import textClip from "@/utils/TextClip";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Product {
  image: string;
  name: string;
  price: number;
  brand: string;
  id: string;
}

const ProductCard = ({ product }: { product: Product }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`product/${product.id}`)}
      className="w-[240px] cursor-pointer flex flex-col flex-1 shadow-lg p-2 rounded-md "
    >
      <div className="relative h-[150px]">
        <Image
          src={product.image}
          fill
          sizes="(max-width: 600px) 480px,
         800px"
          alt=""
          className="object-contain"
        />
      </div>
      <div className="flex flex-col items-center gap-3">
        <div className="text-lg md:text-2xl">{textClip(product.name)}</div>
        <Rating name="read-only" value={4} readOnly />
        <div className="text-lg text-red-600 font-bold">${product.price}</div>
        <div className="text-lg md:text-xl font-semibold">{product.brand}</div>
      </div>
    </div>
  );
};

export default ProductCard;
