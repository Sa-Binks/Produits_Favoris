import { useEffect, useState } from 'react'
import ProductSearch from './components/ProductSearch'
import ProductList from './components/ProductList'
function App() {
    const [products, setProducts] = useState([])
    const [favorites, setFavorites] = useState([])
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
    searchProducts('phone')
    }, [])

 function searchProducts(keyword) {
        setLoading(true)
        setError('')

        fetch(`https://dummyjson.com/products/search?q=${keyword}`)
        .then(response => response.json())
        .then(data => {
          
          console.log('DATA API:', data)

        setProducts(data.products)
        setLoading(false)
        })

        .catch(() => {
        setError('Erreur lors du chargement')
        setLoading(false)
        })
    }

    function addToFavorite(product) {
    setFavorites([...favorites, product])
    }

    function deleteFromFavorite(index) {
    setFavorites(
    favorites.filter((item, i) => i !== index)
    )
  }
    function showDetails(product) {
  setSelectedProduct(product)
  }
    
 return (

 <div className="container mt-5">

 <h1 className="text-center mb-4">
 Mon App
 </h1>

 <ProductSearch searchProducts={searchProducts} />

    {loading && (
    <div className="spinner-border"></div>
    )}
    
    {error && (
     <div className="alert alert-danger">
    {error}
    </div>
    )}

    {!loading && products.length === 0 && (
    <div className="alert alert-warning">
    Aucun produit trouvé
    </div>
    )}
  <ProductList products={products} showDetails={showDetails} addToFavorite={addToFavorite} deleteFromFavorite={deleteFromFavorite}/>

    {selectedProduct && (

  <div className="card mt-4">

    <div className="card-body">

      <h4>{selectedProduct.title}</h4>

      <p>Prix : {selectedProduct.price} €</p>

      <p>Catégorie : {selectedProduct.category}</p>

      <p>Description : {selectedProduct.description}</p>

    </div>

  </div>

)}
    <h3 className="mt-4">
      Favoris
    </h3>

    <ul className="list-group">

      {favorites.map((favorite, index) => (

        <li
          key={index}
          className="list-group-item d-flex justify-content-between"
        >

          {favorite.title}

          <button
            className="btn btn-danger btn-sm"
            onClick={() => deleteFromFavorite(index)}
          >
            Supprimer
          </button>

        </li>

      ))}

    </ul>

    </div>
    
 )
}
export default App
