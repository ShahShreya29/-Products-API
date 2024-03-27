fetch("https://fakestoreapi.com/products").then((data) => {
    //console.log(data)
    return data.json();

}).then((objData) => {
    // console.log(objData[0].image);
    let cdata = "";
    objData.map((values) => {
        cdata += `  
        <div class="card" style="width: 18rem;">  
        <img class="card-img-top" src="${values.image}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${values.title}</h5>
          <p class="card-text">$${values.price}</p>
          <a href="productdetail.html?id=${values.id}" class="btn btn-primary">View Details</a>
        </div>
        </div>`;
        document.getElementById("product").innerHTML = cdata;



    })

})

//single product

const productDetails = document.querySelector('#productDetails');
console.log(productDetails);


async function fetchdata() {
    const pid = new URLSearchParams(window.location.search).get('id')
    const res = await fetch(`https://fakestoreapi.com/products/${pid}`)
    const detaildata = await res.json();
    //console.log(detaildata, pid);
    singleproduct(detaildata);
}


function singleproduct(res) {
    productDetails.innerHTML = `
    <div class="card" style="width: 18rem;">  
    <img class="card-img-top p-5" src="${res.image}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title text-center">${res.title}</h5>
      <p class="card-text text-center">$${res.price}</p>
      <p class="card-text text-center">${res.category}</p>
      <p class="card-text text-center">${res.description}</p>
    </div>
    </div>
    `
}

fetchdata();




