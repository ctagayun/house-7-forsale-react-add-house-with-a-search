/*
   React State:
    React state introduces a mutable data structure (called: stateful values). 
  These stateful values get instantiated in a React component as so 
  called "state", can be passed with props as vehicle down to child components, 
  but can also get mutated by using a function to modify the state.

      "When a state gets mutated, the component 
       with the state and all child components will
       re-render.""

    Whenever the user clicks Add button in the HouseList you will 
  note that the added detail house record doesn't get added to the
  list of houses.
   
    To address this issue we will use useState. By using useState 
  we are telling react we want to have a stateful value which changes
  when we click the "Add" button. 
    The logic of handler function for the "Add" button adds a new record
  and the state update function set the updated state. (see HouseList)
     
 Note:
  Everything that we pass from a parent component to a child component 
  via the component element's HTML attribute (in this case "list" see instantiation  
  in line 69 of App component) can be accessed in the child component
*/

import * as React from 'react';
import HouseRow from './houserow';

//The child component receives a parameer ('props') as object
const HouseList = (props) => {
 
 console.log("HouseList fires"); //will fire if you click "Add Button"

 //set stateful houseState by using the props.list as initial value.
 //Note before firing this useState, React first inspects the houseState.
 //If it has a value already it will not initialize it again with props.list
 //If the thats the case and you did an "Add Record" React will simply
 //add that record to "houseState"
 const [houseState, setAddHouse] = React.useState(props.list); 
 
 const myHouseState = JSON.stringify(houseState);
 console.log("House State is = " + myHouseState);


 //const myHouseState = JSON.stringify(houseState);
 //console.log("State of houseState before ADD = " + myHouseState);

 /* Callback handler 
   for the onclick event of the "Add" button. Whenever the user clicks 
   the "Add" button, the updater "setAddHouse" fires and updates the 
   stateful value "houseState" with a new record
*/
 const addHouse = () => {
   //SetAddHouse is the state updater function 
   setAddHouse([
      ...houseState, //this is the state. It gets updated
                     //by the updater function - "setAddHouse"
                     //on line 47 when "Add" button is clicked
      {
        id: 4,
        address: "32 Valley Way, New York",
        country: "USA",
        price: 1000000,
      },
    ]);
   
    //After adding a record the houseState still has the same 
    //number of records
    //const myHouseStateAfterAdd = JSON.stringify(houseState);
    //console.log("Initial state of houseState after ADD = " + myHouseStateAfterAdd);
  };

  return (
    <>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Houses currently on the market
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Address</th>
            <th>Country</th>
            <th>Asking Price</th>
          </tr>
        </thead>
        <tbody>
          {houseState.map((record) => ( //first time in list has already been populated by useState
            //Instantiate the HouseRow component and pass each record
            //to HouseRow component as props.
            //house={record} means access of the "record"  and 
            //assign it to variable "house"
            <HouseRow key={record.id} house={record} />
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={addHouse} >
        Add House
      </button>
    </>
  );
};

export default HouseList;
