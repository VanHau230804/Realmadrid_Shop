/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  EmailIcon,
  PersonIcon,
  CallIcon,
  LocationOnIcon,
  AddIcon,
  RemoveIcon,
  DeleteIcon
} from '../../../../src/components/icons/index';
import { getCartByUserId, updateCart } from '../../../services/cart.Service';
import { useState, useEffect } from 'react';
import { RootState } from '../../../redux/store';
import { useSelector } from 'react-redux';
import { ICartItem } from '@/types/cart.type';
const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);
  console.log('cartItems', cartItems);

  const [totalPrice, setTotalPrice] = useState<number>(0);
  const auth = useSelector((state: RootState) => state.auth.data);

  useEffect(() => {
    if (auth?._id) {
      const fetchCart = async () => {
        try {
          const response = await getCartByUserId(auth._id);
          console.log('Fetched cart items:', response);
          setCartItems(response);
          calculateTotal(response); // Tính tổng giá trị khi nhận dữ liệu
        } catch (error) {
          console.error('Error fetching cart:', error);
        }
      };
      fetchCart();
    }
  }, [auth?._id]);

  // Tính tổng giá trị giỏ hàng
  const calculateTotal = (kit: ICartItem[]) => {
    const items = kit.flatMap(group => group.items || []);
    const subtotal = items.reduce((sum: number, item) => {
      return sum + item.price * (item.quantity || 1);
    }, 0);
    const shipping = 2.0;
    const tax = 4.0;
    const total = subtotal + shipping + tax;
    setTotalPrice(total);
    return { subtotal, shipping, tax, total };
  };
  // Cập nhật số lượng
  const updateQuantity = async (
    cartId: string,
    itemId: string,
    newQuantity: number
  ) => {
    if (newQuantity < 1) return;
    try {
      // 1. Gọi API cập nhật database
      await updateCart(cartId, itemId, newQuantity);
      // 2. Cập nhật UI state
      const updatedGroups = cartItems.map(group =>
        group._id === cartId
          ? {
              ...group,
              items: group.items.map(item =>
                item._id === itemId ? { ...item, quantity: newQuantity } : item
              )
            }
          : group
      );

      setCartItems(updatedGroups);
      calculateTotal(updatedGroups);
    } catch (error) {
      console.error('Update failed:', error);
    }
  };
  const removeItem = (itemId: string | undefined) => {
    const updatedItems = cartItems.filter(item => item._id !== itemId);
    setCartItems(updatedItems);
    calculateTotal(updatedItems);
  };
  return (
    <div className="font-sans max-w-5xl max-md:max-w-xl mx-auto bg-white py-4">
      <h1 className="text-3xl font-bold text-gray-800 text-center">
        Shopping Cart
      </h1>
      <div className="grid md:grid-cols-3 gap-8 mt-16">
        <div className="md:col-span-2 space-y-4">
          <div className="grid grid-cols-3 items-start gap-4">
            {cartItems?.map((group: ICartItem) =>
              group.items?.map((item: any) => (
                <div
                  key={item._id}
                  className="col-span-2 flex items-start gap-4"
                >
                  <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0 bg-gray-100 p-[0.2rem] rounded-md">
                    <img
                      src={item.images?.[0]?.url}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-base font-bold text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-xs font-semibold text-gray-500 mt-0.5">
                      Size:
                      {item.size?.map(
                        (s: { _id: string; label: string }, i: number) => (
                          <span key={s._id}>
                            {s.label}
                            {item.size && i !== item.size.length - 1
                              ? ', '
                              : ''}
                          </span>
                        )
                      )}
                    </p>
                    <button
                      type="button"
                      className="mt-6 font-semibold bg-white text-red-500 text-xs flex items-center gap-1 shrink-0"
                    >
                      <DeleteIcon className="w-4 fill-current" />
                      REMOVE
                    </button>
                  </div>

                  <div className="ml-auto">
                    <h4 className="text-lg max-sm:text-base font-bold text-gray-800">
                      ${item.price * (item.quantity || 1)}
                    </h4>

                    <button
                      onClick={() =>
                        updateQuantity(group._id, item._id, item.quantity - 1)
                      }
                    >
                      <RemoveIcon />
                    </button>
                    <span className="mx-3 font-bold">{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(group._id, item._id, item.quantity + 1)
                      }
                    >
                      <AddIcon className="w-3 fill-current" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          <hr className="border-gray-300" />
        </div>
        <div className="bg-gray-100 rounded-md p-4 h-max">
          <h3 className="text-lg max-sm:text-base font-bold text-gray-800 border-b border-gray-300 pb-2">
            Order Summary
          </h3>

          <form className="mt-6">
            <div>
              <h3 className="text-base text-gray-800  font-semibold mb-4">
                Enter Details
              </h3>
              <div className="space-y-3">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="px-4 py-2.5 bg-white text-gray-800 rounded-md w-full text-sm border-b focus:border-gray-800 outline-none"
                  />
                  <PersonIcon className="w-4 h-4 absolute right-4 text-gray-400" />
                </div>

                <div className="relative flex items-center">
                  <input
                    type="email"
                    placeholder="Email"
                    className="px-4 py-2.5 bg-white text-gray-800 rounded-md w-full text-sm border-b focus:border-gray-800 outline-none"
                  />
                  <EmailIcon className="w-4 h-4 absolute right-4 text-gray-400" />
                </div>

                <div className="relative flex items-center">
                  <input
                    type="number"
                    placeholder="Phone No."
                    className="px-4 py-2.5 bg-white text-gray-800 rounded-md w-full text-sm border-b focus:border-gray-800 outline-none"
                  />
                  <CallIcon className="w-4 h-4 absolute right-4 text-gray-400" />
                </div>
                <div className="relative flex items-center">
                  <input
                    type="address"
                    placeholder="Address"
                    className="px-4 py-2.5 bg-white text-gray-800 rounded-md w-full text-sm border-b focus:border-gray-800 outline-none"
                  />
                  <LocationOnIcon className="w-4 h-4 absolute right-4 text-gray-400" />
                </div>
              </div>
            </div>
          </form>

          <ul className="text-gray-800 mt-6 space-y-3">
            <li className="flex flex-wrap gap-4 text-sm">
              Subtotal{' '}
              <span className="ml-auto font-bold">
                ${(totalPrice - 6).toFixed(2)}
              </span>
            </li>
            <li className="flex flex-wrap gap-4 text-sm">
              Shipping <span className="ml-auto font-bold">$2.00</span>
            </li>
            <li className="flex flex-wrap gap-4 text-sm">
              Tax <span className="ml-auto font-bold">$4.00</span>
            </li>
            <hr className="border-gray-300" />
            <li className="flex flex-wrap gap-4 text-sm font-bold">
              Total <span className="ml-auto">${totalPrice}</span>
            </li>
          </ul>

          <div className="mt-6 space-y-3">
            <button
              type="button"
              className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-md"
            >
              Checkout
            </button>
            <button
              type="button"
              className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent text-gray-800 border border-gray-300 rounded-md"
            >
              Continue Shopping{' '}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShoppingCart;
