import { createContext, useEffect, useState } from "react";

export const ApiDataContext = createContext()
const ApiContext = ({ children }) => {

  const [heroData, setHeroData] = useState([]);
  const [products, setProducts] = useState([]);
  const [faq, setFaq] = useState([]);
  const [blogs, setBlog] = useState([]);

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

  useEffect(() => {
    fetch("faq.json")
    .then(res => res.json())
    .then(data => setFaq(data))
  }, [])

  useEffect(() => {
    fetch("newblog.json")
    .then(res => res.json())
    .then(data => setBlog(data))
  }, [])

  const value = {
    heroData, products, faq, blogs
  }

  return (
    <ApiDataContext.Provider value={value}>
      {children}
    </ApiDataContext.Provider>
  )
}

export default ApiContext;