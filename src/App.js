import React, {useEffect , useState} from "react";
import Card from "./components/imageCard";
import SearchBar from "./components/SearchBar";

function App() {

  const [items, setItems] = useState([]);
  const [term, setTerm] = useState('all');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
        .then(data => setItems(data.hits))
          .catch(err => console.log(err))
  }, [term]);
  return (
    <div>
        <div className="flex items-center justify-center">
          <SearchBar setTerm={setTerm} key="search"/>
        </div>
        <div className=" flex flex-wrap">
          {items.map((item) => <Card item={item} key={item.id}/>)}
        </div>
      </div>
  );
}

export default App;
