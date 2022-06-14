import { checkAuth, withNavbar, withSidebar } from "../../components";
import {useState} from 'react'

const Orders = () => {
   const [category, setCategory] = useState('');

  const handleCategoryChange = (category) => {
     setCategory(category);
     console.log(category);
 }
  return <>
    <div className=" mt-14  h-auto mx-2"> 
  {/* /
  /bg-[#D2B82C] */}
     <div className="bg-[#D2B82C] h-20 grid place-items-center h-screen">
           <input type="text" placeholder="Search by products,brands and more" className="input input-bordered w-full max-w-xs rounded-3xl w-[695px]" />
     </div>



     <div className=" h-screen">

        <div className="flex flex-row  gap-16 ml-12 pt-5">
          <p className="text-[#2838C1] font-semi-bold text-xl">Orders</p>
          <p className="text-[#2838C1] font-semi-bold text-xl">Buy Again</p>
        </div>

        <div className="flex flex-row  gap-2 ml-12 mt-6 w-1/3">
          <p>21 orders placed in:  </p>
          <select name="category" value={category} onChange={event => handleCategoryChange(event.target.value)}>
            <option id="0" >3months</option>
            <option id="1" >6months</option>
            <option id="1" >1yr</option>
        </select>
        </div>

        <div className="bg-green mt-12 w-[1150px] h-80 ml-12">
          <div className="bg-[#DACACA] h-1/5 flex flex-row gap-32 pt-1 pl-2">
             <div className="text-center">
                <p>ORDER PLACED</p>
                <p>8June 2022</p>
             </div>
             <div className="text-center">
                <p>TOTAL</p>
                <p>299.0</p>
             </div>
             <div className="text-center">
                <p>SHIP TO</p>
                <p>ALBERT JOHN</p>
             </div>
              <div className="text-left ml-60">
                <div className="flex flex-row gap-2 ">
                 <p>ORDER</p>
                 <p>#406-8182131-5245131</p>
                </div>
                
                <p className="text-[#2838C1]">View order details</p>
             </div>
          </div>

           <div className="bg-[#FFFFFF] h-4/5 flex flex-row">
             <div className="h-full  w-3/12 items-center pl-2 ">
                <div className="bg-gray h-[180px] w-[226px]  my-4   mt-6">
                  <img src="https://res.cloudinary.com/nithionite/image/upload/v1652549936/tt1vkbj7e88prgztmdmk.jpg" className="h-full w-full items-center"/>
                </div>

                <div className="">
                 <p className="pt-2 text-left text-xl font-bold">Archive Order</p>
                </div>
             </div>
             <div className="h-full pt-5 w-6/12 ">
               <p>Fadman Hot Melt Electric Heating Glue Stick Flexible for DIY, Sealing and Quick Repairs (Transparent, 11X177mm, 20 Sticks)</p>
             </div>
             <div className="h-full  w-3/12 justify-center">
               <div className="pl-12 pt-6 space-y-6">
                    <div className="justify-center ">
                      <button className="h-[30px] w-11/12  bg-transparent  hover:bg-[#EF8D33] text-blue-700 rounded-3xl font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded">
                        Track Package
                      </button>
                    </div>

                    <div>
                      <button className="h-[30px] w-11/12  bg-transparent  hover:bg-[#EF8D33] text-blue-700 rounded-3xl font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded">
                        Request Cancellation
                      </button>
                    </div>

                     <div className="justify-center ">
                      <button className="h-[30px] w-11/12  bg-transparent  hover:bg-[#EF8D33] text-blue-700 rounded-3xl font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded">
                        Leave seller feedback
                      </button>
                    </div>

                    <div>
                      <button className="h-[30px] w-11/12  bg-transparent  hover:bg-[#EF8D33] text-blue-700 rounded-3xl font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded">
                        Write a product review
                      </button>
                    </div>
                   

               </div>
             </div>
          </div>
          
        </div>









         <div className="bg-green mt-12 w-[1150px] h-80 ml-12">
          <div className="bg-[#DACACA] h-1/5 flex flex-row gap-32 pt-1 pl-2">
             <div className="text-center">
                <p>ORDER PLACED</p>
                <p>8June 2022</p>
             </div>
             <div className="text-center">
                <p>TOTAL</p>
                <p>299.0</p>
             </div>
             <div className="text-center">
                <p>SHIP TO</p>
                <p>ALBERT JOHN</p>
             </div>
              <div className="text-left ml-60">
                <div className="flex flex-row gap-2 ">
                 <p>ORDER</p>
                 <p>#406-8182131-5245131</p>
                </div>
                
                <p className="text-[#2838C1]">View order details</p>
             </div>
          </div>

           <div className="bg-[#FFFFFF] h-4/5 flex flex-row">
             <div className="h-full  w-3/12 items-center pl-2 ">
                <div className="bg-gray h-[180px] w-[226px]  my-4   mt-6">
                  <img src="https://res.cloudinary.com/nithionite/image/upload/v1652549936/tt1vkbj7e88prgztmdmk.jpg" className="h-full w-full items-center"/>
                </div>

                <div className="">
                 <p className="pt-2 text-left text-xl font-bold">Archive Order</p>
                </div>
             </div>
             <div className="h-full pt-5 w-6/12 ">
               <p>Fadman Hot Melt Electric Heating Glue Stick Flexible for DIY, Sealing and Quick Repairs (Transparent, 11X177mm, 20 Sticks)</p>
             </div>
             <div className="h-full  w-3/12 justify-center">
               <div className="pl-12 pt-6 space-y-6">
                    <div className="justify-center ">
                      <button className="h-[30px] w-11/12  bg-transparent  hover:bg-[#EF8D33] text-blue-700 rounded-3xl font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded">
                        Track Package
                      </button>
                    </div>

                    <div>
                      <button className="h-[30px] w-11/12  bg-transparent  hover:bg-[#EF8D33] text-blue-700 rounded-3xl font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded">
                        Request Cancellation
                      </button>
                    </div>

                     <div className="justify-center ">
                      <button className="h-[30px] w-11/12  bg-transparent  hover:bg-[#EF8D33] text-blue-700 rounded-3xl font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded">
                        Leave seller feedback
                      </button>
                    </div>

                    <div>
                      <button className="h-[30px] w-11/12  bg-transparent  hover:bg-[#EF8D33] text-blue-700 rounded-3xl font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded">
                        Write a product review
                      </button>
                    </div>
                   

               </div>
             </div>
          </div>
          
        </div>









         <div className="bg-green mt-12 w-[1150px] h-80 ml-12">
          <div className="bg-[#DACACA] h-1/5 flex flex-row gap-32 pt-1 pl-2">
             <div className="text-center">
                <p>ORDER PLACED</p>
                <p>8June 2022</p>
             </div>
             <div className="text-center">
                <p>TOTAL</p>
                <p>299.0</p>
             </div>
             <div className="text-center">
                <p>SHIP TO</p>
                <p>ALBERT JOHN</p>
             </div>
              <div className="text-left ml-60">
                <div className="flex flex-row gap-2 ">
                 <p>ORDER</p>
                 <p>#406-8182131-5245131</p>
                </div>
                
                <p className="text-[#2838C1]">View order details</p>
             </div>
          </div>

           <div className="bg-[#FFFFFF] h-4/5 flex flex-row">
             <div className="h-full  w-3/12 items-center pl-2 ">
                <div className="bg-gray h-[180px] w-[226px]  my-4   mt-6">
                  <img src="https://res.cloudinary.com/nithionite/image/upload/v1652549936/tt1vkbj7e88prgztmdmk.jpg" className="h-full w-full items-center"/>
                </div>

                <div className="">
                 <p className="pt-2 text-left text-xl font-bold">Archive Order</p>
                </div>
             </div>
             <div className="h-full pt-5 w-6/12 ">
               <p>Fadman Hot Melt Electric Heating Glue Stick Flexible for DIY, Sealing and Quick Repairs (Transparent, 11X177mm, 20 Sticks)</p>
             </div>
             <div className="h-full  w-3/12 justify-center">
               <div className="pl-12 pt-6 space-y-6">
                    <div className="justify-center ">
                      <button className="h-[30px] w-11/12  bg-transparent  hover:bg-[#EF8D33] text-blue-700 rounded-3xl font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded">
                        Track Package
                      </button>
                    </div>

                    <div>
                      <button className="h-[30px] w-11/12  bg-transparent  hover:bg-[#EF8D33] text-blue-700 rounded-3xl font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded">
                        Request Cancellation
                      </button>
                    </div>

                     <div className="justify-center ">
                      <button className="h-[30px] w-11/12  bg-transparent  hover:bg-[#EF8D33] text-blue-700 rounded-3xl font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded">
                        Leave seller feedback
                      </button>
                    </div>

                    <div>
                      <button className="h-[30px] w-11/12  bg-transparent  hover:bg-[#EF8D33] text-blue-700 rounded-3xl font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded">
                        Write a product review
                      </button>
                    </div>
                   

               </div>
             </div>
          </div>
          
        </div>














        

     </div>
  </div>
  </>;
};

export default checkAuth(withSidebar(withNavbar(Orders)), "CUSTOMER");
