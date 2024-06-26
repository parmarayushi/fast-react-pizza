import { useDispatch, useSelector } from "react-redux";
import { FakeCart } from "../../modals/modal";
import Button from "../../ui/Button";
import LinkButton from "../../ui/LinkButton";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { clearCart, getCart } from "./cartSlice";

export default function Cart() {
  const userName = useSelector((state: any) => state.user.userName);

  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3 ">
      <LinkButton path="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold"> Your cart, {userName}</h2>

      <ul className="divide-y divide-stone-200 border-b mt-3">
        {cart.map((item: FakeCart) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button path="/order/new" type="primary">
          Order Pizzas
        </Button>

        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}
