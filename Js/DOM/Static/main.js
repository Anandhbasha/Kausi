const cat = [
  "Trending",
  "customerML",
  "coupens",
  "lightningDeals",
  "Mobile",
  "Electronics",
  "LargeApplications",
  "SmartTv",
  "Furniture",
  "Home Applaince",
];

let fillCategory = document.getElementById("fillCategory");

cat.map((item) => {
  let btn = document.createElement("button");
  btn.innerHTML = item;
  fillCategory.appendChild(btn);
  console.log("Hello");
});

const mainBar = document.getElementById("mainBar");

const fetchdata = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");

    data = await res.json();
    data.map((item) => {
      const card = document.createElement("card");
      card.setAttribute("class","card")
      const cardImage = document.createElement("div");
      cardImage.setAttribute("class","cardImage")
      const cartBtn = document.createElement("div")
      let btn = document.createElement("button")
      btn.innerHTML = "Add to cart"
      cartBtn.setAttribute("class","cartBtn")
      let image = document.createElement("img");
      let cardBtm = document.createElement("div");
      const title = document.createElement("h1");
      const price = document.createElement("h2");
      const desc = document.createElement("p");
      mainBar.appendChild(card);
      card.appendChild(cardImage);
      image.innerHTML = item.image;
      title.innerHTML = item.title
      price.innerHTML = item.price
      desc.innerHTML = item.description
      cardImage.appendChild(image);
      card.appendChild(cardBtm)
      cardBtm.appendChild(title)
      cardBtm.appendChild(price)
      cardBtm.appendChild(desc)
      card.appendChild(cartBtn)
      cartBtn.appendChild(btn)
    });
  } catch (err) {
    alert("Unable to get API");
  }
};

window.onload = fetchdata;
