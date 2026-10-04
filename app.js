const form=document.querySelector("form");
const article=document.querySelector("article");
const images=document.querySelector(".images");
const inputBox=document.querySelector("#inputBox");
const api_key=`Your Api Key`;

const emptyFunction=()=>{
    article.innerHTML=`<h1>Please Enter to Search !</h1>`;
    images.innerHTML=``;
}

const generate_images=async (msg)=>{
    images.innerHTML=``;
    article.innerHTML=``;
    const url=`https://api.unsplash.com/search/photos?query=${msg}&per_page=28&client_id=${api_key}`;
    try{
    const data=await fetch(url);
    const response=await data.json();
    response.results.forEach(element => {    
        const imgs=document.createElement("div");
        imgs.innerHTML=`<img src="${element.urls.regular}"></img>`
        images.appendChild(imgs);
    });}
    catch{
        article.innerHTML=`<h2>False Input</h2>`;
        inputBox.value=``;
    }
    
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(inputBox.value===""){
        emptyFunction();
        return;
    }
    else{
        generate_images(inputBox.value);
    }
})