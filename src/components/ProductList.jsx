function ProductList({ products,addToFavorite,deleteFromFavorite }) {
 return (

 <div className="row">

 {products.map((product, index) => (
 
    <div key={index} className="col-md-4 mb-3">
    
    <div className="card h-100">
    
    <div className="card-body">
    
    <h5 className="card-title">
    {product.title}
    </h5>

    <p className="card-text">
    Categorie : {product.category}
    </p>

    <p className="card-text">
    Prix : {product.price}
    </p>

    </div>
      <button
      className="btn btn-success btn-sm"
      onClick={() => addToFavorite(product)}
      >
      Ajouter au favoris
      </button>
            
    </div>

    </div>

    ))}

    </div>
    
 )
}
export default ProductList
