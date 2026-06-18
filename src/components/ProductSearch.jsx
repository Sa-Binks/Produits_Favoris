import { useState } from 'react'

function ProductSearch({ searchProducts }) {

    const [search, setSearch] = useState('')
    const handleSubmit = (e) => {

    e.preventDefault()
    searchProducts(search)

    }

 return (

 <div className="card mb-4">
 
 <div className="card-body">
 
 <h5 className="card-title">
 Recherche
 </h5>

 <form onSubmit={handleSubmit}>

 <div className="mb-3">

 <label className="form-label">
 Rechercher de produit
 </label>

 <input
    type="text"
    className="form-control"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    placeholder="Recherche"
 />

 </div>

 <div className="mb-3">

 <select className="form-select">

 <option>Toutes</option>

 <option>smartphones</option>

 <option>mobile-accessories</option>

 </select>

 </div>

 <button type="submit" className="btn btn-primary">
 Rechercher
 </button>

 </form>

 </div>

 </div>
 
 )
}
export default ProductSearch
