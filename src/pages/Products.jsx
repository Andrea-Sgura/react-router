import React from 'react'
import axios from 'axios'
import MainNavbar from '../components/MainNavbar'
import { useState, useEffect } from 'react'


const Products = () => {

  const [products, SetProducts] = useState([])
  const getProducts = () => {
    axios.get("https://fakestoreapi.com/products").then((resp) => {
      SetProducts(resp.data);
    })
  };

  useEffect(() => {
    getProducts()
  }, []);

  return (
    <div>
      <MainNavbar />
      <h1>Elenco prodotti</h1>
      <div className="container">
        <div className="row g-4">
          {products.map((product) => (
            <div key={product.id} className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <div className="card-image-top">
                  <img src={product.image} alt={product.title} className="img-fluid" />
                </div>
                <div className="card-body">
                  <h3>{product.title}</h3>
                  <p>{product.price}€</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products