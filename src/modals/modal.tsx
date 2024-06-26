export type FakeCart = {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
};

export type OrderData = {
  id: string;
  customer: string;
  phone: string;
  address: string;
  status: string;
  priority: boolean;
  priorityPrice: number;
  orderPrice: number;
  estimatedDelivery: string;
  cart: FakeCart[];
};

export type MenuItems = {
  id: number;
  name: string;
  unitPrice: number;
  ingredients: string[];
  soldOut: boolean;
  imageUrl: string;
};

export type OrderPizzaForm = {
  address: string;
  cart: FakeCart[];
  customer: string;
  phone: string;
  priority: boolean;
};
