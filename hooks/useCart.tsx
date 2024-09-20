"use client";

import { CardProductProps } from "@/app/components/detail/DetailClient";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";

interface CartContextProps {
  productCartQty: number; //sepete eklenen tüm ürünler
  cardPrdcts: CardProductProps[] | null;
  addToBasket: (product: CardProductProps) => void;
  removeFromCard: (product: CardProductProps) => void;
  removeCard: () => void;
}

const CartContext = createContext<CartContextProps | null>(null);

interface Props {
  [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
  const [productCartQty, setProductCartQty] = useState(0);
  const [cardPrdcts, setCardPrdcts] = useState<CardProductProps[] | null>(null);

  useEffect(() => {
    let getItem: any = localStorage.getItem("cart");
    let getItemParse: CardProductProps[] | null = JSON.parse(getItem);
    setCardPrdcts(getItemParse);
  }, []);

  const removeCard = useCallback(() => {
    setCardPrdcts(null);
    toast.success("Sepete Temizlendi!");
    localStorage.setItem("cart", JSON.stringify(null));
  }, []);

  const addToBasket = useCallback(
    (product: CardProductProps) => {
      setCardPrdcts((prev) => {
        let updatedCart;
        if (prev) {
          updatedCart = [...prev, product];
        } else {
          updatedCart = [product];
        }
        toast.success("Ürün Sepete Eklendi!");
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      });
    },
    [cardPrdcts]
  );

  const removeFromCard = useCallback(
    (product: CardProductProps) => {
      if (cardPrdcts) {
        const filteredProducts = cardPrdcts.filter(
          (cart) => cart.id !== product.id
        );

        setCardPrdcts(filteredProducts);
        toast.success("Ürün Sepete Silindi!");
        localStorage.setItem("cart", JSON.stringify(filteredProducts));
      }
    },
    [cardPrdcts]
  );

  let value = {
    productCartQty,
    addToBasket,
    cardPrdcts,
    removeFromCard,
    removeCard,
  };

  return <CartContext.Provider value={value} {...props} />;
};

const useCart = () => {
  const context = useContext(CartContext);
  if (context == null) {
    throw new Error("HATA VAR!!");
  }
  return context;
};

export default useCart;
