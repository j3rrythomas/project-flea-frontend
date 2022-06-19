import {
  checkAuth,
  withNavbar,
  withSidebar,
  CheckoutItem,
  PlaceOrderItem,
} from "../../components";

const Checkout = () => {
  return (
    <div className="hidden lg:block container p-8 mx-auto mt-12">
      <div className="my-2">
        <h1 className="text-xl ml-1 text-black font-bold tracking-wider">
          My Cart
        </h1>
      </div>
      <div className="w-full flex">
        <div className="w-2/3">
          <CheckoutItem />
          <CheckoutItem />
          <CheckoutItem />
          <CheckoutItem />
          <CheckoutItem />
          <CheckoutItem />
          <CheckoutItem />
          <CheckoutItem />
          <CheckoutItem />
        </div>
        <div className="w-1/3">
          <div className="mt-4 ml-10 bg-[#fff]">
            <div className="shadow px-4 pt-8 pb-4 rounded-lg">
              <h3 className="text-xl font-bold text-[#945959]">
                PRICE DETAILS
              </h3>
              <div className="flex justify-between px-4">
                <span className="font-bold text-black">Price(1 item)</span>
                <span className="font-bold text-black">$239</span>
              </div>
              <div className="flex justify-between px-4">
                <span className="font-bold text-black">Discount</span>
                <span className="font-bold text-[#58C317]">- $40.00</span>
              </div>
              <div className="flex justify-between px-4">
                <span className="font-bold text-black">Delivery charges</span>
                <span className="font-bold text-[#58C317]">Free</span>
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
            border-dashed

          "
              >
                <span className="text-xl text-black font-bold">
                  Total amount
                </span>
                <span className="text-2xl text-black font-bold">$199</span>
              </div>
              <span className="text-xl ml-5 width-1/2 font-bold justify-end text-[#045E1D]">
                You will save $40 on this order
              </span>
              <PlaceOrderItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default checkAuth(withSidebar(withNavbar(Checkout)), "CUSTOMER");
