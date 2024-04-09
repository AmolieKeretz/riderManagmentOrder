import Single from "../orders/single/index";
import { singleProduct } from "../data";
import "./index.css";

const Items = (props) => {

  //Fetch data and send to Single Component
  return (
    <div className="product">
       <Single slug="orders" {...singleProduct}/>
    </div>
  )
}

export default Items;