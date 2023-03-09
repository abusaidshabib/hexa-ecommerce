import { createContext, useEffect, useState } from "react";

export const ApiDataContext = createContext()
const ApiContext = ({ children }) => {

  const [heroData, setHeroData] = useState([]);
  const [products, setProducts] = useState([]);
  const [faq, setFaq] = useState([]);
  const [blogs, setBlog] = useState([]);
  const [collections, setCollection] = useState([]);
  const [edit, setEdit] = useState([]);
  const [reviews, setReview] = useState([]);
  const [cart, setCart] = useState();

  useEffect(() => {
    fetch('http://localhost:5000/carousel')
      .then(res => res.json())
      .then(data => {
        setHeroData(data)
        const storeData = [];
        localStorage.setItem("cart", JSON.stringify(storeData))
      })
  }, [])

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data)
      });
  }, [])

  useEffect(() => {
    fetch("http://localhost:5000/faq")
      .then(res => res.json())
      .then(data => setFaq(data))
  }, [])

  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then(res => res.json())
      .then(data => setBlog(data))
  }, [])

  useEffect(() => {
    fetch("http://localhost:5000/collections")
      .then(res => res.json())
      .then(data => setCollection(data));
  }, [])

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then(res => res.json())
      .then(data => setReview(data))
  })


  const value = {
    heroData, products, faq, blogs, collections, setEdit, edit, reviews, cart, setCart
  }


  return (
    <ApiDataContext.Provider value={value}>
      {children}
    </ApiDataContext.Provider>
  )
}

export default ApiContext;