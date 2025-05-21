import { useContext, useEffect, useState } from "react";
import { OrderContext, type OrderContextType } from "../App";

interface DessertProps {
  name: string;
  category: string;
  price: number;
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

function Dessert({ name, price, category, image }: DessertProps) {
  const [order, setOrder] = useContext(OrderContext) as OrderContextType;

  const [amount, setAmount] = useState<number>(0);

  // logic for removing item from order list
  useEffect(() => {
    if (order) {
      const dessert = order.find((item) => item.name == name);
      !dessert && setAmount(0);
    }
  }, [order?.length]);

  // component handlers
  function addToCartHandler() {
    setOrder((prev) =>
      prev != null
        ? [...prev, { name, price, amount: 1, image: image.thumbnail }]
        : [{ name, price, amount: 1, image: image.thumbnail }]
    );
    setAmount(1);
  }

  function increaseHandler() {
    setAmount((prev) => prev + 1);
    setOrder((prev) =>
      prev != null
        ? prev.map((item) =>
            item.name == name ? { ...item, amount: amount + 1 } : item
          )
        : null
    );
  }

  function decreaseHandler() {
    setAmount((prev) => (prev < 2 ? 0 : prev - 1));
    setOrder((prev) =>
      prev != null
        ? amount > 1
          ? prev.map((item) =>
              item.name == name ? { ...item, amount: item.amount - 1 } : item
            )
          : prev.filter((item) => item.name !== name)
        : null
    );
  }

  return (
    <div className="p-3">
      <div className="relative mb-8">
        <picture>
          <source media="(max-width: 425px)" srcSet={image.mobile} />
          <source media="(max-width: 1024px)" srcSet={image.tablet} />
          <img
            className={`rounded-2xl border-2 ${
              amount > 0 ? "border-red" : "border-transparent"
            }`}
            src={image.desktop}
            alt={name}
          />
        </picture>
        <div
          className={`absolute w-[160px] h-[50px] right-[calc(50%-80px)] -bottom-[25px] rounded-full bg-white flex justify-center items-center ${
            amount < 1 && "border hover:border-rose-500"
          } hover:text-red overflow-clip`}
        >
          {amount > 0 ? (
            <div className="border border-red bg-red text-white w-full h-full flex justify-between items-center px-5">
              {/* decrease button */}
              <button className="cursor-pointer" onClick={decreaseHandler}>
                <img
                  className="border border-white rounded-full size-5 p-1"
                  src="/assets/images/icon-decrement-quantity.svg"
                  alt="desrease amount"
                />
              </button>
              <span>{amount}</span>
              {/* increase button */}
              <button className="cursor-pointer" onClick={increaseHandler}>
                <img
                  className="border border-white rounded-full size-5 p-1"
                  src="/assets/images/icon-increment-quantity.svg"
                  alt="increase amount"
                />
              </button>
            </div>
          ) : (
            // Add To Cart button
            <button
              className="flex items-center justify-center gap-2 font-bold cursor-pointer size-full"
              onClick={addToCartHandler}
            >
              <img src="/assets/images/icon-add-to-cart.svg" alt="cart" /> Add
              to Cart
            </button>
          )}
        </div>
      </div>
      <div>
        <span className="text-gray-400">{category}</span>
        <h1 className="font-semibold">{name}</h1>
        <span className="text-red">
          <b>${price}</b>
        </span>
      </div>
    </div>
  );
}

export default Dessert;
