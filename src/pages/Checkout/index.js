import {
  checkAuth,
  withNavbar,
  withSidebar,
  CheckoutItem,
} from "../../components";

const Checkout = () => {
  return (
    <div className="container p-8 mx-auto mt-12">
      <div className="w-full overflow-x-auto flex">
        <div className="w-3/4">
          <div className="my-2">
            <h3 className="text-xl font-bold tracking-wider">
              Shopping Cart 3 item
            </h3>
          </div>
          <table className="w-full shadow-inner">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 font-bold whitespace-nowrap">Image</th>
                <th className="px-6 py-3 font-bold whitespace-nowrap">
                  Product
                </th>
                <th className="px-6 py-3 font-bold whitespace-nowrap">Price</th>
                <th className="px-6 py-3 font-bold whitespace-nowrap">
                  Remove
                </th>
              </tr>
            </thead>
            <tbody>
              <CheckoutItem />
            </tbody>
          </table>
        </div>
        <div className="w-1/4">
          <div className="mt-4">
            <div className="py-4 rounded-md shadow">
              <h3 className="text-xl font-bold text-blue-600">Order Summary</h3>
              <div className="flex justify-between px-4">
                <span className="font-bold">Subtotal</span>
                <span className="font-bold">$35.25</span>
              </div>
              <div className="flex justify-between px-4">
                <span className="font-bold">Discount</span>
                <span className="font-bold text-red-600">- $5.00</span>
              </div>
              <div className="flex justify-between px-4">
                <span className="font-bold">Sales Tax</span>
                <span className="font-bold">$2.25</span>
              </div>
              <div
                className="
            flex
            items-center
            justify-between
            px-4
            py-2
            mt-3
            border-t-2
          "
              >
                <span className="text-xl font-bold">Total</span>
                <span className="text-2xl font-bold">$37.50</span>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <button
              className="
          w-full
          py-2
          text-center text-white
          bg-blue-500
          rounded-md
          shadow
          hover:bg-blue-600
        "
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default checkAuth(withSidebar(withNavbar(Checkout)), "CUSTOMER");
