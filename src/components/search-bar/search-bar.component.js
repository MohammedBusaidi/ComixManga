import './search-bar.styles.scss';
import React, { useState, useEffect, Fragment }from 'react';
import categoriesMap from '../category-preview/category-preview.component';


const SearchBar = () => {

  const [value, setValue] = useState('');
  const [result, setResult] = useState([]);

  useEffect(() => {
    if(value.length > 0) {
      fetch ().then(
        response => response.json()
      ).then(responseData => {
        setResult([])
        let searchQuery = value.toLocaleLowerCase();
        for( const key in responseData){
          let item = responseData[key].name.toLocaleLowerCase();
          if(item.slice(0, searchQuery.length).indexOf(searchQuery) !== -1) {
            setResult(prevResult => {
              return [ ...prevResult, responseData[key].name]
            });
          }
        }
      }).catch(error => {
        console.log(error); 
      })
    } else {
      setResult([]);
    }
  }, [value])

    return(
      <Fragment>
      <div class="search-container">
      <input type="search" placeholder="Search Item" onChange={(event) => setValue(event.target.value)}
              value={value} />
  </div>
  <div className='searchback'>
    {result.map((result, index) => (
      <a href='#' key= {index}>
        <div className='searchentry'>
          {result}
        </div>
      </a>
    ))}
  </div>
  </Fragment>
    )
} 

export default SearchBar;
