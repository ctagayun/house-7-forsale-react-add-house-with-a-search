
import currencyFormatter from "../helpers/currencyFormatter";

//Create another component that will display list of houses.
//This component called "House" encapsulates the task of displaying 
//each 'house' record
const HouseRow = (props) => (
    <tr>
     <td>{props.house.id}</td>
     <td>{props.house.address}</td>
     <td>{props.house.country}</td>
     <td>{currencyFormatter.format(props.house.price)}</td>
  </tr>
);
  
export default HouseRow;
