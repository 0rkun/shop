"use client";

import Image from "next/image";
import PageContainer from "../containers/PageContainer";
import Counter from "../general/Counter";
import { useEffect, useState } from "react";
import { Rating } from "@mui/material";
import Button from "../general/Button";
import Comment from "./Comment";
import Heading from "../general/Heading";
import useCart from "@/hooks/useCart";

export type CardProductProps = {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  inStock: boolean;
};

const DetailClient = ({ product }: { product: any }) => {
  const { productCartQty, addToBasket, cardPrdcts } = useCart();
  const [displayButton, setDisplayButton] = useState(false);

  const [cardProduct, setCardProduct] = useState<CardProductProps>({
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    quantity: 1,
    image: product.image,
    inStock: product.inStock,
  });

  useEffect(() => {
    setDisplayButton(false);
    let controlDisplay: any = cardPrdcts?.findIndex(
      (cart) => cart.id == product.id
    );
    if (controlDisplay > -1) {
      setDisplayButton(true);
    }
  }, [cardPrdcts]);

  const increaseFunc = () => {
    if (cardProduct.quantity == 10) return;
    setCardProduct((prev) => ({ ...prev, quantity: prev.quantity + 1 }));
  };

  const decreaseFunc = () => {
    if (cardProduct.quantity == 1) return;
    setCardProduct((prev) => ({ ...prev, quantity: prev.quantity - 1 }));
  };

  return (
    <div className="my-10">
      <PageContainer>
        <div className="block md:flex gap-10 justify-center">
          <div className="relative h-[500px] w-[300px] ">
            <Image src={product?.image} fill sizes="2" alt="" />
          </div>
          <div className="w-full  md:w-1/2 space-y-3 mt-14">
            <div className="text-xl md:text-2xl font-extrabold">
              {product?.name}
              <Rating name="read-only" value={4} readOnly />
            </div>

            <div className="text-slate-500">{product?.description}</div>
            <div className="flex gap-1 font-semibold">
              <div>Stok Durumu:</div>
              {product.inStock ? (
                <div className="text-green-500">Ürün Stokta Vardır.</div>
              ) : (
                <div className="text-red-600 ">Ürün Stoğu Tükenmiştir.</div>
              )}
            </div>

            <div className="text-lg md:text-2xl text-orange-600 font-semibold">
              ${product.price}
            </div>

            {displayButton ? (
              <>
                <Button
                  text="Ürün Sepete Ekli"
                  small
                  outline
                  onClick={() => {}}
                />
              </>
            ) : (
              <>
                <Counter
                  increaseFunc={increaseFunc}
                  decreaseFunc={decreaseFunc}
                  cardProduct={cardProduct}
                />

                <Button
                  text="Sepete Ekle"
                  small
                  onClick={() => addToBasket(cardProduct)}
                />
              </>
            )}
          </div>
        </div>

        <Heading text="Yorumlar" />

        <div>
          {product?.reviews?.map((prd: any) => (
            <Comment key={prd.id} prd={prd} />
          ))}
        </div>
      </PageContainer>
    </div>
  );
};

export default DetailClient;
