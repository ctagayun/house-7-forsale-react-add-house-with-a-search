/*
    This exercise will implement a feature that will enable Search component
 to remember the most recent searched. 

    Let's implement this feature by using a side-effect to store the recent search 
 from the browser's local storage and retrieve it upon the initial component 
 initialization. First, use the local storage to store the searchTerm accompanied
  by an identifier whenever a user types into the HTML input field:

   What is useEffect?
      - Use useEffect Hook to trigger the desired side-effect each time 
     the searchTerm changes:

 ==============================================================
 Previous Task: React Controlled Components Task:
    - we modified the Search component. We added the value attribute
      
    <div className="float-start ">
            <label htmlFor="search">Search:</label>
            <input id="search" 
              value={props.search} <-- We added the value attribute
              type="text"
              onChange={props.onSearch}/> 
            <p> 
              Searching for <strong>{props.search}</strong>
            </p>
        </div>
    
    Here we added a "value" attribute instead of giving the 
    html element the freedom of keeping track of its internal state.
    Instead React uses state by leveraging the "value" attribute.
    Whenever the HTML search ox element emits change event the NEW VALUE 
    is WRITTEN to React states and RE-RENDERS the component. Then
    the HTML element uses the recent state as value again.
    
    - As a result because of the "value" attribute the input textbox 
      became EXPLICITLY controlled element and Search component became 
      IMPLICITLY a controlled component.

    Interview Questions:
      Question 1: What is a controlled component in React?
        Answer: A controlled component is a component whose 
               FORM elements are controlled by React state. 
                 
      Question 2: How do you create a controlled input in React?
       Answer: Set the input VALUE attribute to a state variable 
       and provide an onChange handler to update the state.

      Question 3: What is the role of the value prop in a controlled input element?
       Answer: The value prop sets the current value of the input, 
       making it a controlled component.

      Question 4: How do you handle a controlled checkbox in React?
         Answer: Use the checked attribute and provide an 
         onChange handler to update the corresponding state.

      Question 5: How do you clear the value of a controlled component?
        Answer: Set the state variable to an empty or null value to 
        clear the value of a controlled component.

      Question 6 : What are the potential downsides of using controlled 
      components?
        Answer: Controlled components can lead to verbose code, 
        especially in forms with many input elements. 
  ===============================================================     
  Previous Tasks:
    - create a search component
    - add code to display only the houses based on the search
      result.
    - add instantiation of Search component in App.jsx

  ===============================================================     
  Previous Task:
     - Create HouseList component
     - see discussion about React state in HouseList component.
     
  ===============================================================     

  Previous Task:
  Setup: 
    npm install bootstrap
    Once the installation is complete, we can include it in our app’s 
    entry file in main.jsx :
    --  Bootstrap CSS
    import "bootstrap/dist/css/bootstrap.min.css";
    -- Bootstrap Bundle JS
    import "bootstrap/dist/js/bootstrap.bundle.min";

    Now since we created the project with Vite, we can rely 
    on Vite's plugins to integrate ESLint properly. Run the 
    following command
       npm install vite-plugin-eslint --save-dev
    */


import * as React from 'react';
import './App.css'
import Header from "./header";
import HouseList from './house/houseList';
import Search from './house/search';

const App = () => {

   const welcome = {
     subject: 'List of ',
     title: 'Houses for Sale',
   };

   //Will move the houseArray from global scope into App Component
   const housearray = [
    {
      id: 1,
      address: "12 Valley of Kings, Geneva",
      country: "Switzerland",
      price: 900000,
    },
    {
      id: 2,
      address: "89 Road of Forks, Bern",
      country: "Italy",
      price: 500000,
    },
    {
      id: 3,
      address: "1053 Lake Side Drive",
      country: "Netherlands",
      price: 600500,
    },
    {
      id: 4,
      address: "1916 Rustic Oak Road",
      country: "USA",
      price: 600900,
    },
  ];
  
 
  const [stateOfSearchComponent, setSearchTerm] = React.useState(
    localStorage.getItem('search') || 'Italy');

  //We'll use React's useEffect Hook to trigger the desired 
  //side-effect each time the stateOfSearchComponent changes.
  //The desired side-effect is to store the state it in the localstorage
  React.useEffect(() => {
      localStorage.setItem('search', stateOfSearchComponent);
    }, [stateOfSearchComponent]);
   
  const searchHandler = (event) => {
    setSearchTerm(event.target.value); //tell the state updater function  to update the stateOfSearchComponent.
       localStorage.setItem('search', event.target.value);
    
     console.log('B - Value of data passed to parent component named App via ' +
         'Callback Handler is = ' + event.target.value);
      };

   //Add this function to filter the housearray before it is passed to
   //HouseList component
  
   //select the record from the list based on the filter
   //Here, the JavaScript array's built-in filter method is used 
   //to create a new filtered array. The filter() method takes a function 
   //as an argument, which accesses each item in the array and returns /
   //true or false. If the function returns true, meaning the condition is 
   //met, the item stays in the newly created array; if the function 
   //returns false, it's removed from the filtered array.

   const searchedHouses = housearray.filter((house) =>
      //convert  to lowercase the filtered copy of HouseArray called "house" 
      house.country.toLowerCase().includes(stateOfSearchComponent.toLowerCase()) 
     );  

    const myHouseStateAfterSearch = JSON.stringify(searchedHouses);
    console.log(" C - Value of searchedHouses= " + myHouseStateAfterSearch);

    //pass searchHandler as props but first assign it to HTML attribute called onSearch
    //pass the searchedHouses to HouseList
    //Take note:
    // <Search search={stateOfSearchComponent} onSearch={searchHandler}/>
  return (
    <>
     <Header  headerText={welcome} />   

     <Search search={stateOfSearchComponent} onSearch={searchHandler}/>  
      
     <hr/>
     <HouseList list={searchedHouses} /> 
    </>
  )
}

export default App
