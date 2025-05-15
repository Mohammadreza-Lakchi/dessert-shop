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
    <div className="grow p-4">
      <span className="text-red-600">
        <strong>Your cart({totalNumber})</strong>
      </span>
      {order && order.length > 0 ? (
        <div>
          {order.map((item) => (
            <div key={item.name} className="flex border-b-2 items-center">
              <div className="grow">
                <span>
                  <b>{item.name}</b>
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-red-600">
                    <b>{item.amount}X</b>
                  </span>
                  <span>@${item.price}</span>
                  <span>${item.amount * item.price}</span>
                </div>
              </div>
              <button
                onClick={() => deleteHandler(item.name)}
                aria-label={`delete ${item.amount} ${item.name} which costs ${
                  item.amount * item.price
                }dollars`}
              >
                <img
                  className="size-6 p-1 rounded-full border"
                  src="/assets/images/icon-remove-item.svg"
                  alt="delete item"
                />
              </button>
            </div>
          ))}
          <div className="flex justify-between">
            <span>Order total</span>
            <span><b>${totalPrice}</b></span>
          </div>
          <div className="flex justify-center items-center gap-2">
            <img src="public/assets/images/icon-carbon-neutral.svg" alt="environment friendly" />
            <p>This is a <strong>carbon-neutral</strong> delivery</p>
          </div>
        </div>
      ) : (
        <div>
          <img
            src="/assets/images/illustration-empty-cart.svg"
            alt="empty cart"
          />
          <p>Your added items will appear here</p>
        </div>
      )}
    </div>
  );
}

export default OrderList;
