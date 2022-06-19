import { checkAuth, withNavbar, withSidebar ,Order} from "../../components";
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

        <div className="flex flex-row  gap-16 ml-20 pt-5">
          <p className="text-[#2838C1] font-semi-bold text-xl">Orders</p>
          <p className="text-[#2838C1] font-semi-bold text-xl">Buy Again</p>
        </div>

        <div className="flex flex-row  gap-2 ml-20 mt-6 w-1/3">
          <p>21 orders placed in:  </p>
          <select name="category" value={category} onChange={event => handleCategoryChange(event.target.value)}>
            <option id="0" >3months</option>
            <option id="1" >6months</option>
            <option id="1" >1yr</option>
        </select>
        </div>

       



         <Order/>
         <Order/>
         <Order/>
         <Order/>













         














        

     </div>
  </div>
  </>;
};

export default checkAuth(withSidebar(withNavbar(Orders)), "CUSTOMER");
