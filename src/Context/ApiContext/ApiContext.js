import { createContext, useEffect, useState } from "react";

export const ApiDataContext = createContext()
const ApiContext = ({children}) => {

const [ heroData, setHeroData] = useState([]);
const [products, setProducts] = useState([]);

useEffect(() => {
  fetch('carousel.json')
  .then(res => res.json())
  .then(data => setHeroData(data))
}, [])

useEffect(() => {
  fetch("dummy.json")
  .then(res => res.json())
  .then(data => setProducts(data));
}, [])




const value = {
  heroData, products,
}

  return(
<ApiDataContext.Provider value={value}>
  {children}
</ApiDataContext.Provider>
  )
}

export default ApiContext;