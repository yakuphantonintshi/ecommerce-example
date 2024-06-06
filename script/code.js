// create products and store it on the local storage
let wrapper = document.querySelector('[recentProducts]')
let products = JSON.parse(localStorage.getItem('products'))
? JSON.parse(localStorage.getItem('products'))
: localStorage.setItem('products' ,
    JSON.stringify(
        [
            {
                id: 1,
                    productName:"Lenovo",
                    category: "Laptop",
                    description: "Fast laptop with a good RAM",
                    ammount: 4500.50,
                    image:"https://yakuphantonintshi.github.io/myimages/Images/lenovo.jpg"
                },
                {
                    id: 2,
                    productName:"Headphones",
                    category: "Headphones",
                    description: "good volume",
                    ammount: 450.50,
                    image:"https://yakuphantonintshi.github.io/myimages/Images/headphones.jpg"
                },
                {
                    id: 3,
                    productName:"IPhone charger",
                    category: "Charger",
                    description: "Fast charger",
                    ammount: 600.00,
                    image:"https://yakuphantonintshi.github.io/myimages/Images/iphone charger.jpg"
                },
                {
                    id: 4,
                    productName:"Keyboard",
                    category: "Computer Keyboard",
                    description: "Get yourself this amazing keyboard for your computer",
                    ammount: 550.50,
                    image:"https://yakuphantonintshi.github.io/myimages/Images/keyboard.jpg"
                },
                {
                    id: 5,
                    productName:"Mouse",
                    category: "Mouse",
                    description: "Get this amazing mouse",
                    ammount: 300.50,
                    image:"https://yakuphantonintshi.github.io/myimages/Images/mouse.jpg"
                }
        ]
    )
)
// extracting the last products
function recentProducts(){
    let arrSize = products.length
    let latestProducts = products.reverse().slice(0, arrSize >> 1);
    latestProducts.forEach(products => {
        console.log(products);
        wrapper.innerHTML += `<div class="card" style="width: 18rem;">
        <img src="${products.image}" class="card-img-top" alt="${products.productName}">
        <div class="card-body">
          <h5 class="card-title">${products.productName}</h5>
          <p class="card-text">${products.description}</p>
        </div>
      </div>`
    })
}

recentProducts()