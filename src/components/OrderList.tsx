import { useContext } from "react";
import { OrderContext, type OrderContextType } from "../App";

function OrderList() {
  const [order, setOrder] = useContext(OrderContext) as OrderContextType;

  let totalNumber = 0;
  let totalPrice = 0;
  order?.forEach((item) => {
    totalNumber += item.amount;
    totalPrice += item.amount * item.price;
  });

  function deleteHandler(name: string) {
    setOrder((prev) =>
      prev != null ? prev.filter((item) => item.name !== name) : null
    );
  }

  return (
    <div className="p-4 m-3 bg-white rounded-xl grow md:sticky md:top-15">
      <span className="text-red text-2xl">
        <strong>Your cart ({totalNumber})</strong>
      </span>
      {order && order.length > 0 ? (
        <div className="p-5">
          {order.map((item) => (
            <div key={item.name} className="flex border-b-2 border-rose-100 items-center pb-3">
              <div className="grow">
                <span className="text-rose-900">
                  <b>{item.name}</b>
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-red">
                    <b>{item.amount}X</b>
                  </span>
                  <span className="text-rose-400">@${item.price}</span>
                  <span className="font-semibold text-rose-500">${item.amount * item.price}</span>
                </div>
              </div>
              <button
                className="cursor-pointer"
                onClick={() => deleteHandler(item.name)}
                aria-label={`delete ${item.amount} ${item.name} which costs ${
                  item.amount * item.price
                }dollars`}
              >
                <img
                  className="p-1 rounded-full border border-rose-500"
                  src="/assets/images/icon-remove-item.svg"
                  alt="delete item"
                />
              </button>
            </div>
          ))}
          <div className="flex justify-between my-4">
            <span className="text-rose-900">Order total</span>
            <span className="text-rose-900 text-2xl"><b>${totalPrice}</b></span>
          </div>
          <div className="flex justify-center items-center gap-2 bg-rose-50 p-3 rounded-lg">
            <img src="public/assets/images/icon-carbon-neutral.svg" alt="environment friendly" />
            <p className="text-rose-900">This is a <strong>carbon-neutral</strong> delivery</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center p-5">
          <img
            src="/assets/images/illustration-empty-cart.svg"
            alt="empty cart"
          />
          <p className="text-rose-900 text-sm">Your added items will appear here</p>
        </div>
      )}
    </div>
  );
}

export default OrderList;
