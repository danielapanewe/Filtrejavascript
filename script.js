const products = [

    {
  
      "id": 1,
  
      "nom": "Ordinateur Portable",
  
      "categorie": "Électronique",
  
      "prix": 1200,
  
      "stock": 15
  
    },
  
    {
  
      "id": 2,
  
      "nom": "Livre JavaScript Avancé",
  
      "categorie": "Livres",
  
      "prix": 35,
  
      "stock": 50
  
    },
  
    {
  
      "id": 3,
  
      "nom": "Smartphone",
  
      "categorie": "Électronique",
  
      "prix": 800,
  
      "stock": 10
  
    },
  
    {
  
      "id": 4,
  
      "nom": "Chaise de Bureau",
  
      "categorie": "Mobilier",
  
      "prix": 150,
  
      "stock": 20
  
    }
  
  ]

//
const productList= document.getElementById('productlist')

//fonction pour afficher les produits
function showProducts(product){
    productList.innerHTML = ''; 
    product.forEach(productitem => {
        const div = document.createElement('div');
        div.className = 'productlist__item';
        div.innerHTML= `
        <p class="productname">${productitem.nom}</p>
        <p>Catégorie: ${productitem.categorie}</p>
        <p>Prix: ${productitem.prix} €</p>
        <p>Stock: ${productitem.stock} unités </p>
        
      `;
         productList.appendChild(div);
    });
} 

//fonction pour filtrer les produits

function filterProducts(){
const filtervalue = document.getElementById('filter').value;
 
if (filtervalue === 'all') {
    showProducts(products);
}

else if (filtervalue === 'perprice') {
    const filteredPriceProducts = products.filter(product => product.prix < 100);
    showProducts(filteredPriceProducts);
  } 
  
  else if (filtervalue === 'perstock') {
    const filteredStockProducts = products.filter(product => product.stock > 20);
    showProducts(filteredStockProducts);
  }

}


 
showProducts(products);