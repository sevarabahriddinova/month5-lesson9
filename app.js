// const $result= document.querySelector("#result")

// fetch("https://fakestoreapi.com/products")
// .then(Response=>Response.json())
// .then(data => renderProducts(data)) 


// const renderProducts=(data)=>{
//     data.forEach(product=>{
//         console.log(product)
//         const $div=document.createElement("div");
//         $div.innerHTML=`
//          <img src="${product.image}"/>
//             `
//         $result.appendChild($div)
//     })
// }

const $result= document.querySelector("#result")

fetch("https://dummyjson.com/users")
.then(response=>response.json())
.then(data => renderProducts(data))

const renderProducts=(data)=>{
    data.users.forEach(element =>{
        console.log(element)
        const $div=document.createElement("div");
        $div.className="card";
    $div.innerHTML=`
        <div class="card__wrapper">
            <div class="images">
            <img class="img" src="${element.image}"/>
            </div>
            <div class="name">
                <p>${element.firstName}</p>
                <p>${element.lastName}</p>
            </div>
                <strong>${element.university.slice(0,30)}</strong>
                <a href="tel:"#">${element.phone}</a>   
                <a href="tel:"#">${element.email}</a>   
                <button data-element-id="${element.id}" class="delete">delete</button>
        </div>

    `
    $result.appendChild($div)
    });
}
const handleInformationAction =(e)=>{
    if(e.target.classList.contains("delete")){
        console.log("salom delete"); 
        const id=e.target.dataset.elementId
        const userAgree=confirm("Are you sure to delete this information?")

            if(userAgree){
                fetch(`https://dummyjson.com/users/${id}`,{method:"delete"})
                .then(response=>response.json())
                .then(json => console.log(json))                
                
            }
    }
}
$result.addEventListener("click",handleInformationAction)