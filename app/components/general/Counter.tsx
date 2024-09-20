import { CardProductProps } from "../detail/DetailClient";

interface CounterProps {
  cardProduct: CardProductProps;
  increaseFunc: () => void;
  decreaseFunc: () => void;
}

const Counter: React.FC<CounterProps> = ({
  cardProduct,
  increaseFunc,
  decreaseFunc,
}) => {
  return (
    <div className="flex gap-8 items-center">
      <div
        onClick={decreaseFunc}
        className="border px-6 py-3 rounded-xl bg-red-600 text-white cursor-pointer text-lg"
      >
        -
      </div>
      <div className="text-4xl">{cardProduct?.quantity} </div>
      <div
        onClick={increaseFunc}
        className="border px-6 py-3 rounded-xl bg-green-600 text-white cursor-pointer text-lg"
      >
        +
      </div>
    </div>
  );
};

export default Counter;
