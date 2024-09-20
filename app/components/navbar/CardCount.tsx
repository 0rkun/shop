"use client";

import useCart from "@/hooks/useCart";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaBasketShopping } from "react-icons/fa6";

const CardCount = () => {
  const { cardPrdcts } = useCart();
  const router = useRouter();

  const [show, setShow] = useState(false);

  return (
    <div className="hidden md:flex relative">
      <div className="cursor-pointer" onClick={() => router.push("/cart")}>
        <FaBasketShopping size={35} />
      </div>
      <div className="absolute top-0 -right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center">
        {cardPrdcts?.length}
      </div>
    </div>
  );
};

export default CardCount;
