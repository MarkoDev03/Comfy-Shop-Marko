var dataPage = [{ "identification": { "id": "1" }, "primarydata": { "name": "Desk", "price": "99.99" }, "userinterface": { "image": "./images/desk.jpeg" }, "typeofitem": { "type": "tables" } }, { "identification": { "id": "2" }, "primarydata": { "name": "Table", "price": "184" }, "userinterface": { "image": "./images/table.jpeg" }, "typeofitem": { "type": "tables" } }, { "identification": { "id": "3" }, "primarydata": { "name": "Chair", "price": "219.99" }, "userinterface": { "image": "./images/chair.jpg" }, "typeofitem": { "type": "chairs" } }, { "identification": { "id": "4" }, "primarydata": { "name": "Stool", "price": "84.99" }, "userinterface": { "image": "./images/stool.jpg" }, "typeofitem": { "type": "chairs" } }, { "identification": { "id": "5" }, "primarydata": { "name": "Sofa", "price": "3225.99" }, "userinterface": { "image": "./images/sofa.jpg" }, "typeofitem": { "type": "bed" } }, { "identification": { "id": "6" }, "primarydata": { "name": "Woredrober", "price": "500" }, "userinterface": { "image": "./images/woredrober.jpg" }, "typeofitem": { "type": "woredrobers" } }, { "identification": { "id": "7" }, "primarydata": { "name": "Shelf", "price": "450.99" }, "userinterface": { "image": "./images/shelf.jpeg" }, "typeofitem": { "type": "woredrobers" } }, { "identification": { "id": "9" }, "primarydata": { "name": "Armchair", "price": "200" }, "userinterface": { "image": "./images/armchair.jpg" }, "typeofitem": { "type": "chairs" } }, { "identification": { "id": "10" }, "primarydata": { "name": "Chandelier", "price": "85.99" }, "userinterface": { "image": "./images/chandelier.jpg" }, "typeofitem": { "type": "lights" } }, { "identification": { "id": "11" }, "primarydata": { "name": "Bath", "price": "299.99" }, "userinterface": { "image": "./images/bath.png" }, "typeofitem": { "type": "bathroom" } }, { "identification": { "id": "12" }, "primarydata": { "name": "Basen", "price": "120" }, "userinterface": { "image": "./images/basen.png" }, "typeofitem": { "type": "bathroom" } }, { "identification": { "id": "13" }, "primarydata": { "name": "Sink", "price": "100" }, "userinterface": { "image": "./images/sink.jpg" }, "typeofitem": { "type": "bathroom" } }, { "identification": { "id": "14" }, "primarydata": { "name": "TV", "price": "950.99" }, "userinterface": { "image": "./images/tv.jpg" }, "typeofitem": { "type": "devices" } }, { "identification": { "id": "15" }, "primarydata": { "name": "Fridge", "price": "1200.99" }, "userinterface": { "image": "./images/fridge.png" }, "typeofitem": { "type": "devices" } }, { "identification": { "id": "16" }, "primarydata": { "name": "Coocker", "price": "750" }, "userinterface": { "image": "./images/coocker.jpg" }, "typeofitem": { "type": "devices" } }, { "identification": { "id": "17" }, "primarydata": { "name": "Microwave", "price": "350.99" }, "userinterface": { "image": "./images/microwave.jpg" }, "typeofitem": { "type": "devices" } }, { "identification": { "id": "18" }, "primarydata": { "name": "Washmachine", "price": "650.99" }, "userinterface": { "image": "./images/machine.png" }, "typeofitem": { "type": "devices" } }, { "identification": { "id": "19" }, "primarydata": { "name": "Speakers", "price": "1750" }, "userinterface": { "image": "./images/speakers.png" }, "typeofitem": { "type": "devices" } }, { "identification": { "id": "20" }, "primarydata": { "name": "Picture", "price": "800" }, "userinterface": { "image": "./images/picture.png" }, "typeofitem": { "type": "picture" } }, { "identification": { "id": "21" }, "primarydata": { "name": "Lamp", "price": "25.99" }, "userinterface": { "image": "./images/lamp.jpg" }, "typeofitem": { "type": "lights" } }, { "identification": { "id": "22" }, "primarydata": { "name": "Plant", "price": "30.99" }, "userinterface": { "image": "./images/lamp.png" }, "typeofitem": { "type": "decorative" } }, { "identification": { "id": "23" }, "primarydata": { "name": "Tap", "price": "45.99" }, "userinterface": { "image": "./images/tap.png" }, "typeofitem": { "type": "bathroom" } }, { "identification": { "id": "24" }, "primarydata": { "name": "Pillow", "price": "15.45" }, "userinterface": { "image": "./images/pillow.png" }, "typeofitem": { "type": "bed" } }, { "identification": { "id": "25" }, "primarydata": { "name": "Cushion", "price": "25.50" }, "userinterface": { "image": "./images/chshion.jpg" }, "typeofitem": { "type": "bed" } }, { "identification": { "id": "26" }, "primarydata": { "name": "Aircondition", "price": "375" }, "userinterface": { "image": "./images/aircondition.jpg" }, "typeofitem": { "type": "devices" } }, { "identification": { "id": "27" }, "primarydata": { "name": "Headphones", "price": "90" }, "userinterface": { "image": "./images/headphones.jpg" }, "typeofitem": { "type": "devices" } }, { "identification": { "id": "28" }, "primarydata": { "name": "Carpet", "price": "40" }, "userinterface": { "image": "./images/carpet.jpg" }, "typeofitem": { "type": "carpet" } }, { "identification": { "id": "29" }, "primarydata": { "name": "Windows", "price": "150.99" }, "userinterface": { "image": "./images/windows.jpg" }, "typeofitem": { "type": "elements" } }, { "identification": { "id": "30" }, "primarydata": { "name": "Door", "price": "100.99" }, "userinterface": { "image": "./images/door.jpg" }, "typeofitem": { "type": "elements" } }, { "identification": { "id": "31" }, "primarydata": { "name": "Bed", "price": "130.99" }, "userinterface": { "image": "./images/bed.jpg" }, "typeofitem": { "type": "bed" } }];
var logo = document.getElementById("headline-logo"); var get = sessionStorage.getItem("product");
var searchArray = [];


function getItemPage() {
    var get = sessionStorage.getItem("product");
    var content = document.getElementById("locationOfProducts");
    for (var i = 0; i < dataPage.length; i++) {
        if ((dataPage[i].primarydata.name.toUpperCase().indexOf(get.toUpperCase()) > -1) || (dataPage[i].typeofitem.type.toUpperCase().indexOf(get.toUpperCase()) > -1) || (dataPage[i].primarydata.price.toUpperCase().indexOf(get.toUpperCase()) > -1)) {

            searchArray.push(parseFloat(dataPage[i].primarydata.price));
            content.innerHTML += `<article class="product product-src" id="${dataPage[i].identification.id}">
            <primary class="primary-info">
               <category class="category-div"><i class="fas fa-window-restore"></i>
                  <p class="category">${dataPage[i].typeofitem.type}</p>
               </category>                   
            </primary>
            <img src=${dataPage[i].userinterface.image} alt="" class="product-image">
            <rate class="rate">
               <star>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
               </star>
               <number class="number">(5)</number>
            </rate>
            <info class="product-info">
               <name class="name">${dataPage[i].primarydata.name}</name> <br>
               <div style="display:flex;flex-direction:column;">
               <price class="prices">€${dataPage[i].primarydata.price}</price>
               </div>
            </info>
            <lista>
               &#9705; For cash payment and online shopping
            </lista>
            <state class="availability">Available</state>
         </article>`;
        }
    }
}


console.log(searchArray);


getItemPage();


function logoShower() {
    logo.innerHTML = `<i class="fas fa-shopping-cart"></i><div class="headline"><div class="top-headline"><span class="black">Online</span><span class="orange">Shop</span></div><div class="bottom-headline"><span class="orange">Marko</span><span class="black">Perović</span></div></div>`;
}


logoShower();



var openSearch = document.querySelector('.fa-search');
var closeSearch = document.getElementById('closeResponsiveSearch');
var searchContent = document.getElementById('searchDiv');



openSearch.addEventListener('click', () => {
    searchContent.classList.add('showSearchDiv');
    searchContent.classList.remove('hideSearchDiv');
    document.body.style.overflow = 'hidden';
});


closeSearch.addEventListener('click', () => {
    searchContent.classList.add('hideSearchDiv');
    document.body.style.overflow = 'auto';
});


var pageInput = document.getElementById('searchPages');
function searchPages() {
    var input = pageInput.value;
    if (input === "") {
        alert("Enter key");
    } else {
        sessionStorage.setItem("product", input);
        window.location.href = 'product.html';
    }
}


function enterClick(event) {
    var enter = event.keyCode;
    if (enter == 13) {
        searchPages();
    }
}


pageInput.addEventListener('keyup', enterClick);


logo.addEventListener('click', () => {
    window.location = 'index.html';
});
var home = document.querySelector('.fa-home');


home.addEventListener('click', () => {
    window.location.href = 'index.html';
});


var sortButton = document.querySelector('.fa-sort-amount-up');
var closeSortButton = document.querySelector('.x');
var sortOverlay = document.querySelector('.ovelrayer');
var overlayContent = document.querySelector('.pop-up-overlay');
var sortPopUp = document.querySelector('.sort-functions');
var ascendingPrice = document.getElementById('ascPrice');
var descendingPrice = document.getElementById('descPrice');
var ascendingName = document.getElementById('ascName');
var descendingName = document.getElementById('descName');
var content = document.getElementById("locationOfProducts");





sortButton.addEventListener('click', () => {
    sortOverlay.classList.add('append-transform');
    overlayContent.classList.add('append-transform');
    sortPopUp.classList.add('append-animation');
    sortOverlay.classList.remove('remove-append');
    overlayContent.classList.remove('remove-append');
    document.body.style.overflow = "hidden";
});


closeSortButton.addEventListener('click', closeSort);


function closeSort() {
    sortOverlay.classList.add('remove-append');
    overlayContent.classList.add('remove-append');
    sortOverlay.classList.remove('append-transform');
    overlayContent.classList.remove('append-transform');
    sortPopUp.classList.remove('append-animation');
    document.body.style.overflow = "auto";
}

/*ASCENDING PRICE */

ascendingPrice.addEventListener('click', () => {
    closeSort();
    content.innerHTML = ``;
    var get = sessionStorage.getItem("product");
    
    ascendingPrice.classList.add('CHOSEN');
    descendingPrice.classList.remove('CHOSEN');
    ascendingName.classList.remove('CHOSEN');
    descendingName.classList.remove('CHOSEN');

    dataPage.sort((a, b) => a.primarydata.price - b.primarydata.price);



    for (var i = 0; i < dataPage.length; i++) {

        if ((dataPage[i].primarydata.name.toUpperCase().indexOf(get.toUpperCase()) > -1) || (dataPage[i].typeofitem.type.toUpperCase().indexOf(get.toUpperCase()) > -1) || (dataPage[i].primarydata.price.toUpperCase().indexOf(get.toUpperCase()) > -1)) {

            content.innerHTML += `<article class="product product-src" id="${dataPage[i].identification.id}">
            <primary class="primary-info">
               <category class="category-div"><i class="fas fa-window-restore"></i>
                  <p class="category">${dataPage[i].typeofitem.type}</p>
               </category>                   
            </primary>
            <img src=${dataPage[i].userinterface.image} alt="" class="product-image">
            <rate class="rate">
               <star>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
               </star>
               <number class="number">(5)</number>
            </rate>
            <info class="product-info">
               <name class="name">${dataPage[i].primarydata.name}</name> <br>
               <div style="display:flex;flex-direction:column;">
               <price class="prices">€${dataPage[i].primarydata.price}</price>
               </div>
            </info>
            <lista>
               &#9705; For cash payment and online shopping
            </lista>
            <state class="availability">Available</state>
         </article>`;
        }
    }
});

/*DESCENDING PRICE */

descendingPrice.addEventListener('click', () => {
    closeSort();
    content.innerHTML = ``;
    var get = sessionStorage.getItem("product");
    
    ascendingPrice.classList.remove('CHOSEN');
    descendingPrice.classList.add('CHOSEN');
    ascendingName.classList.remove('CHOSEN');
    descendingName.classList.remove('CHOSEN');

    dataPage.sort((a, b) => b.primarydata.price - a.primarydata.price);



    for (var i = 0; i < dataPage.length; i++) {

        if ((dataPage[i].primarydata.name.toUpperCase().indexOf(get.toUpperCase()) > -1) || (dataPage[i].typeofitem.type.toUpperCase().indexOf(get.toUpperCase()) > -1) || (dataPage[i].primarydata.price.toUpperCase().indexOf(get.toUpperCase()) > -1)) {

            content.innerHTML += `<article class="product product-src" id="${dataPage[i].identification.id}">
            <primary class="primary-info">
               <category class="category-div"><i class="fas fa-window-restore"></i>
                  <p class="category">${dataPage[i].typeofitem.type}</p>
               </category>                   
            </primary>
            <img src=${dataPage[i].userinterface.image} alt="" class="product-image">
            <rate class="rate">
               <star>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
               </star>
               <number class="number">(5)</number>
            </rate>
            <info class="product-info">
               <name class="name">${dataPage[i].primarydata.name}</name> <br>
               <div style="display:flex;flex-direction:column;">
               <price class="prices">€${dataPage[i].primarydata.price}</price>
               </div>
            </info>
            <lista>
               &#9705; For cash payment and online shopping
            </lista>
            <state class="availability">Available</state>
         </article>`;
        }
    }
});

/*ASCENDING NAME */

ascendingName.addEventListener('click', () => {
    closeSort();
    content.innerHTML = ``;
    var get = sessionStorage.getItem("product");
   
    dataPage.sort((a, b) => a.primarydata.name !== b.primarydata.name ? a.primarydata.name < b.primarydata.name ? -1 : 1 : 0);
    
    ascendingPrice.classList.remove('CHOSEN');
    descendingPrice.classList.remove('CHOSEN');
    ascendingName.classList.add('CHOSEN');
    descendingName.classList.remove('CHOSEN');

    for (var i = 0; i < dataPage.length; i++) {

        if ((dataPage[i].primarydata.name.toUpperCase().indexOf(get.toUpperCase()) > -1) || (dataPage[i].typeofitem.type.toUpperCase().indexOf(get.toUpperCase()) > -1) || (dataPage[i].primarydata.price.toUpperCase().indexOf(get.toUpperCase()) > -1)) {

            content.innerHTML += `<article class="product product-src" id="${dataPage[i].identification.id}">
            <primary class="primary-info">
               <category class="category-div"><i class="fas fa-window-restore"></i>
                  <p class="category">${dataPage[i].typeofitem.type}</p>
               </category>                   
            </primary>
            <img src=${dataPage[i].userinterface.image} alt="" class="product-image">
            <rate class="rate">
               <star>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
               </star>
               <number class="number">(5)</number>
            </rate>
            <info class="product-info">
               <name class="name">${dataPage[i].primarydata.name}</name> <br>
               <div style="display:flex;flex-direction:column;">
               <price class="prices">€${dataPage[i].primarydata.price}</price>
               </div>
            </info>
            <lista>
               &#9705; For cash payment and online shopping
            </lista>
            <state class="availability">Available</state>
         </article>`;
        }
    }
});
 
/*DESCENDING NAME */


descendingName.addEventListener('click', () => {
   closeSort();
   content.innerHTML = ``;
   var get = sessionStorage.getItem("product");
  
   dataPage.sort((a, b) => b.primarydata.name !== a.primarydata.name ? b.primarydata.name < a.primarydata.name ? -1 : 1 : 0);

   ascendingPrice.classList.remove('CHOSEN');
   descendingPrice.classList.remove('CHOSEN');
   ascendingName.classList.remove('CHOSEN');
   descendingName.classList.add('CHOSEN');
   
   for (var i = 0; i < dataPage.length; i++) {

       if ((dataPage[i].primarydata.name.toUpperCase().indexOf(get.toUpperCase()) > -1) || (dataPage[i].typeofitem.type.toUpperCase().indexOf(get.toUpperCase()) > -1) || (dataPage[i].primarydata.price.toUpperCase().indexOf(get.toUpperCase()) > -1)) {

           content.innerHTML += `<article class="product product-src" id="${dataPage[i].identification.id}">
           <primary class="primary-info">
              <category class="category-div"><i class="fas fa-window-restore"></i>
                 <p class="category">${dataPage[i].typeofitem.type}</p>
              </category>                   
           </primary>
           <img src=${dataPage[i].userinterface.image} alt="" class="product-image">
           <rate class="rate">
              <star>
                 <i class="fas fa-star"></i>
                 <i class="fas fa-star"></i>
                 <i class="fas fa-star"></i>
                 <i class="fas fa-star"></i>
                 <i class="fas fa-star"></i>
              </star>
              <number class="number">(5)</number>
           </rate>
           <info class="product-info">
              <name class="name">${dataPage[i].primarydata.name}</name> <br>
              <div style="display:flex;flex-direction:column;">
              <price class="prices">€${dataPage[i].primarydata.price}</price>
              </div>
           </info>
           <lista>
              &#9705; For cash payment and online shopping
           </lista>
           <state class="availability">Available</state>
        </article>`;
       }
   }
});


console.log(searchArray);
