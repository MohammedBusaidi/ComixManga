import './search-bar.styles.scss';

const SearchBar = () => {
    return(
      <div class="search-container">
      <input type="search" placeholder="Search Item" onChange={(event) => {
              console.log(event.target.value);
              const searchString = event.target.value.toLocaleLowerCase();
              const filteredItems = this.state.SHOP_DATA.filter((item) => {
                return item.name.toLocaleLowerCase().includes(searchString);

              });

              this.setstate(() => {
                return { SHOP_DATA: filteredItems};
              })

      }}/>
  </div>
    )
}

export default SearchBar;
