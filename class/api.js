// this is featch api

const PRODUCT_URL = 'https://fakestoreapi.com/products';

const productsContainer = document.querySelector(".products");

const productWrapper = document.getElementsByClassName("products")
 //promise(block)
// console.log(productWrapper);
// console.log(productsContainer);

// const getproducts=(url)=>{
//     fetch(url)
//     .then((response)=> response.json())
//     .then((data)=>{
//         //console.log(data) to see the error
//         displayProducts(data);
//     })
//     .catch((error)=>console.log(error));
    
// };


    const getproducts = async(url)=>{
        //asynk (try and catch)
        try {
            const response = await fetch(url);
            const data = await response.json();
            displayProducts(data);
        }catch(error){
            console.log(error);
            
        }
    }

getproducts(PRODUCT_URL)

function displayProducts(products){
    products.forEach((product)=> {
        //console.log(product) //to see the content

        const{title, price, description, image} = product;
        // console.log(title)
        // console.log(price)
        // console.log(description)
        const productHTML = document.createElement('div'); //created a div
        productHTML.classList.add("product");
        productHTML.innerHTML = `
            <img src="${image}" alt="">
            <div>
                <p>${title}</p>
                <p>price: &#8358 ${price}</p>
            </div>
            <p>${description}</p>
        `;
            productsContainer.appendChild(productHTML);

    });// remmeber for each dose not return anything

}

