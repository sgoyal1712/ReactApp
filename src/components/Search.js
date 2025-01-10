import { useState  } from "react";

const Search = () => {
  const [searchText, setSearchText] = useState('');

  const updateProduct = () => {
    console.log('search Text is = ', searchText);
  }

  return (
    <div>
      <input 
        className="border border-solid rounded-lg"
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      >
      </input>
      <button className="px-4 py-1 bg-green-100 m-4 rounded-lg" onClick={updateProduct}>Search</button>
    </div>
  );
}

export default Search;