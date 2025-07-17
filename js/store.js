function handleSearch(){
    loadingAnimationToggle(true);
    const searchInputElement = document.getElementById("search-input-field");
    const searchInputValue = searchInputElement.value;
    loadPhone(searchInputValue);
}

function loadingAnimationToggle(isLoading) {
    const loaderAnimation = document.getElementById("loader-animation");
    if (isLoading){
        loaderAnimation.classList.remove("hidden");
    } else {
        loaderAnimation.classList.add("hidden");
    }
}

const loadPhone = async (searchText) => {
    const res = await fetch(
        `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    );

    console.log("Server Response: ", res);
    const searverData = await res.json();

    displayPhone(searverData.data);
};

const displayPhone = (data) => {
    console.log(data);
    const cardContainer = document.getElementById("card-section");

    cardContainer.innerHTML = "";
    data.forEach((phone) => {
        const productCard = document.createElement("div");
        productCard.classList.add("card");

        productCard.innerHTML = `
         <div class="card-image">
                    <img src=${phone.image} alt="phone-image">
                </div>
                <h3 class="card-title">${phone.phone_name}</h3>
                <p class="card-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, nihil.</p>
                <div class="card-price">
                    <span>$</span>
                    <span id="card-item-price">999</span>
                </div>
                <div class="card-button">
                    <button class="btn">Show Details</button>
                </div>
        `; 
        
        cardContainer.appendChild(productCard);
    });

    loadingAnimationToggle(false);
};