function handleSearch(){
    const searchInputElement = document.getElementById("search-input-field");
    const searchInputValue = searchInputElement.value;
    loadPhone(searchInputValue);
}

const loadPhone = async (searchText) => {
    const res = await fetch(
        "https://openapi.programming-hero.com/api/phones?search=samsung"
    );

    console.log("Server Response: ", res);
    const data = await res.json();
    console.log(data);
}