"use client";

import useCart from "@/hooks/useCart";
import PageContainer from "../containers/PageContainer";
import Image from "next/image";
import Button from "../general/Button";
import { CardProductProps } from "../detail/DetailClient";
import Counter from "../general/Counter";

const CartClient = () => {
  const { cardPrdcts, removeFromCard, removeCard } = useCart();

  // console.log(cardPrdcts, "cartPrdcts");

  if (!cardPrdcts || cardPrdcts.length === 0) {
    return <div>Sepetinizde Ürün Yoktur!</div>;
  }

  let cardPrdctsTotal = cardPrdcts.reduce(
    (acc: any, item: CardProductProps) => acc + item.quantity * item.price,
    0
  );

  return (
    <div className="my-3 md:my-10 gap-3 ">
      <PageContainer>
        <div className="flex items-center text-2xl border-b border-black my-3">
          <div className="w-1/5">Ürün Resmi</div>
          <div className="w-1/5">Ürün Adı</div>
          <div className="w-1/5">Ürün Miktarı</div>
          <div className="w-1/5">Ürün Fiyatı</div>
          <div className="w-1/5"></div>
        </div>
        <div>
          {cardPrdcts.map((card) => (
            <div
              className="flex items-center justify-between text-xl"
              key={card.id}
            >
              <div className="w-1/5 ">
                <Image src={card.image} alt="" width={50} height={50} />
              </div>
              <div className="w-1/5">{card.name}</div>
              <div className="w-1/5">{card.quantity}</div>
              <div className="w-1/5 text-red-600 text-2xl">${card.price}</div>
              <div className="w-1/5">
                <Button
                  text="Ürünü Sil"
                  small
                  onClick={() => removeFromCard(card)}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between my-5 py-5 border-t">
          <button onClick={() => removeCard()} className="underline text-sm">
            Sepeti Sil
          </button>
          <div className="text-lg md:text-2xl text-red-600 font-semibold">
            ${cardPrdctsTotal}
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

export default CartClient;
