let searchResult = [];
let cityList = [];
let stop = false;

function updateOptionList() {
    let elsOptions = document.querySelectorAll(".container_header_select-town_select_option");
    for (let i = 1; i< elsOptions.length; i++) {
        elsOptions[i].remove();
    }
}

function init() {
    searchResult = [];
    cityList = [];
}
function searchPhotos() {

    updateOptionList();

    let searchInput = document.querySelector(".container_header_input_search");
    let searchInputValue = searchInput.value
    let filter = searchInputValue.toUpperCase()
    let imagesItems = document.querySelectorAll(".container_photos_images")

    init();

    for(let i=0; i < imagesItems.length; i++) {
        let valuePhoto = imagesItems[i].name.toUpperCase() 
        if (valuePhoto.indexOf(filter) > -1) {

            imagesItems[i].style.display = ""
        } else {
            imagesItems[i].style.display = "none"
        }
        if (valuePhoto === filter) {
            searchResult.push(imagesItems[i]);
        }
    }
    selectCity();
}

let select = document.querySelector(".container_header_select-town_select");

let selectCity = () => {

    let searchInput = document.querySelector(".container_header_input_search");
    let searchInputValue = searchInput.value;
    //find result of the list
    searchResult.forEach(city => {
       if (cityList.length===0){
           cityList.push({
               city: city.alt,
               name: city.name,
           })
       }else{
           let isThere = false;

           cityList.forEach(item => isThere = isThere || item.city===city.alt)

           if(!isThere){
               cityList.push({
                   city: city.alt,
                   name: city.name,
               })
           }
       }
    });
    //update options
    updateOptionList();
    //create options with the list of cities
    cityList.forEach((cityList)=>{

        let elsOptions = document.querySelectorAll(".container_header_select-town_select_option");

        if(elsOptions.length == 1){
            let createOption = document.createElement("option");

            createOption.classList.add("container_header_select-town_select_option");
            createOption.textContent = cityList.city;
            select.appendChild(createOption);
        }else {
            for (let i = 1; i< elsOptions.length; i++){

                if(elsOptions[i].value !== cityList.city){
                    let createOption = document.createElement("option");
                    createOption.classList.add("container_header_select-town_select_option");
                    createOption.textContent = cityList.city;
                    select.appendChild(createOption);
                }


            }
        }
            
    });
}

let cloneSearchResult = searchResult.slice(0);
function updateImage(id) {
    let selectMe = document.getElementById(id);
    searchResult.slice(0).forEach(element => {
        if (selectMe.options[select.selectedIndex].value == element.alt) {
            element.style.display = "";
        } else {
            element.style.display = "none"
        }
    });
}