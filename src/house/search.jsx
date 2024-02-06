import * as React from 'react';
import HouseRow from './houserow';
  /*
     This component will use the stateful searchStateFulVar from the 
   search component to filter the houseArray by their "country"
   property in the App component before they are passed as 
   props to the HouseList component

     This component will store the value of "search text box"
   in a local storage by using side effect.
    
     We'll use React's useEffect Hook to trigger the desired 
   side-effect each time the searchTerm changes

  */

  //There is a callback function in the App component called "searchHandler". 
  //This handler is passed as prop to SearchComponent when it is instantiated
  //in App component. The useState for this component is defined in App as well.
  //It looks like this:
  // const [searchTerm, setSearchTerm] = React.useState('');
  const Search = (props) => {   
        
    console.log('Search box is rendered. When you start typing on the search box' +
      ' only this component will render. App component will no longer render.')
      
    //Note: 
    //   1. onChange={props.onSearch} now has the value "searchHandler"
    //because it was passed as props and assigned to an HTML attribute 
    //called "onSearch" when Search component was instantiated in App
    //  
    //   2. Here we added a "value" attribute instead of giving the 
    //html element the freedom of keeping track of its internal state.
    //Instead React uses state by leveraging the "value" attribute.
    //Whenever the HTML element emits change event the new value 
    //is written to React states and re-renders the component. Then
    //the HTML element uses the recent state as value again.
    return(
    <div className="float-start ">
        <label htmlFor="search">Search:</label>
        <input id="search" 
          value={props.search}
          type="text"
          onChange={props.onSearch}/> 
        <p> 
          Searching for <strong>{props.search}</strong>
         </p>
     </div>
    )
  };
  

export default Search;