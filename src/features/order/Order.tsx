// IIDSAT
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FakeCart, OrderData } from "../../modals/modal";
import { getOrder } from "../../services/apiRestaurant";
import Loader from "../../ui/Loader";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utilities/helpers";
import OrderItem from "./OrderItem";

export default function Order() {
  const [order, setOrder] = useState<OrderData>();
  const [loading, setLoading] = useState(true);
  const { orderId } = useParams();

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const orderData = await getOrder(orderId);
        setOrder(orderData.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching menu:", error);
        setLoading(false);
      }
    };

    fetchOrderData();
  }, [orderId]);

  if (loading) {
    return <Loader />;
  }

  if (!order) {
    return <div>Error: Order not found</div>;
  }

  //-----------fetching data with react router "loaders"----------
  // const order = useLoaderData() as Order;

  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  }: OrderData = order;
  // Convert estimatedDelivery from string to Date object
  const estimatedDeliveryDate = new Date(order.estimatedDelivery);
  // Calculate minutes left
  const deliveryIn = calcMinutesLeft(estimatedDeliveryDate);

  return (
    <div className="px-4 py-6 space-y-8">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h2 className="text-xl font-semibold">Order #{id} status</h2>

        <div className="space-x-2">
          {priority && (
            <span className="bg-red-500 rounded-full py-1 px-3 text-sm uppercase font-semibold text-red-50 tracking-wide">
              Priority
            </span>
          )}
          <span className="bg-green-500 rounded-full py-1 px-3 text-sm uppercase font-semibold text-green-50 tracking-wide">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between flex-wrap gap-2 bg-stone-200 py-5 px-6">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDeliveryDate)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-stone-500 text-xs">
          (Estimated delivery: {formatDate(estimatedDeliveryDate)})
        </p>
      </div>

      <ul className="divide-y divide-stone-200 border-t border-b">
        {cart.map((item: FakeCart) => (
          <OrderItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="space-y-2 bg-stone-200 px-6 py-5">
        <p className="text-sm font-medium text-stone-600">
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm font-medium text-stone-600">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-bold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
    </div>
  );
}

//-----------fetching data with react router "loaders"----------
// export async function loader({ params }: any) {
//   const order = await getOrder(params.orderId);
//   return order.data;
// }
