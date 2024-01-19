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
  const [payFor, setPayFor] = useState();
  const [amount, setAmount] = useState(1);



  useEffect(() => {
    fetch('https://hexabazaar-abusaidshabib.vercel.app/carousel')
      .then(res => res.json())
      .then(data => {
        setHeroData(data)
      })
  }, [])

  useEffect(() => {
    fetch("https://hexabazaar-abusaidshabib.vercel.app/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data)
      });
  }, [])

  useEffect(() => {
    fetch("https://hexabazaar-abusaidshabib.vercel.app/faq")
      .then(res => res.json())
      .then(data => setFaq(data))
  }, [])

  useEffect(() => {
    fetch("https://hexabazaar-abusaidshabib.vercel.app/blogs")
      .then(res => res.json())
      .then(data => setBlog(data))
  }, [])

  useEffect(() => {
    fetch("https://hexabazaar-abusaidshabib.vercel.app/collections")
      .then(res => res.json())
      .then(data => setCollection(data));
  }, [])

  useEffect(() => {
    fetch("https://hexabazaar-abusaidshabib.vercel.app/reviews")
      .then(res => res.json())
      .then(data => setReview(data))
  })

  const handleAddToCart = (selectedProduct) => {
    let storedData = JSON.parse(localStorage.getItem('newCart')) || [];
    selectedProduct = { ...selectedProduct, amount }

    const exists = storedData.find(product => product._id === selectedProduct._id);

    if (exists) {


      function removeProductById(productsArray, productId) {
        const index = productsArray.findIndex(product => product._id === productId);

        if (index !== -1) {
          productsArray.splice(index, 1);
        }

      }

      removeProductById(storedData, selectedProduct._id);
      storedData = [...storedData, selectedProduct]
      localStorage.setItem('newCart', JSON.stringify(storedData));

    }

    else if (storedData.length === 0) {
      const data = [selectedProduct]
      localStorage.setItem('newCart', JSON.stringify(data));
    }

    else {
      storedData = [...storedData, selectedProduct]
      localStorage.setItem('newCart', JSON.stringify(storedData));
    }
  }

  const value = {
    heroData, products, faq, blogs, collections, setEdit, edit, reviews,
    handleAddToCart,
    setPayFor, payFor,
    amount, setAmount
  }


  return (
    <ApiDataContext.Provider value={value}>
      {children}
    </ApiDataContext.Provider>
  )
}

export default ApiContext;