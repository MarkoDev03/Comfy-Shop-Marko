var langs = [{ name: "Serbian", img: "./images/serb.png", id: 1 }, { name: "English", img: "./images/eng.png", id: 2 }];
var langsDOM = document.getElementById('langs-images');
var langsDropDown = document.getElementById('list-langs');
var linksDOM = document.getElementById('links');
var logo = document.getElementById('headline-logo');
var openSearch = document.getElementById('searchShower');
var closeSearch = document.getElementById('closeResponsiveSearch');
var searchContent = document.getElementById('searchDiv');
var burger = document.getElementById('burgerM');
var closeBurger = document.querySelector('#close');
var bodY = document.getElementById('body');
const productsContent = document.querySelector('.products-content');
const addToBag = document.querySelector('.add-to-cart');//1
const clearCartBtn = document.querySelector('.clear-cart');
const DISCOUNTS = document.querySelector('.wrp-disc-cnt');
const totalItemPrice = document.querySelector('.price-crt');
const totalItemsAmount = document.querySelector('.counter');
const productsInCratContent = document.querySelector('.cart-content-div');
const cartDisplay = document.querySelector('.cart');
const showCartButton = document.querySelector('.cart-logo-hed');
const hideCartFuncs = document.getElementById('closeButton');
const clearCartButton = document.querySelector('.clear-cart');
var jQuerySetUpTwo = document.createElement('script');
var stratBurger = document.querySelector('.fa-bars');
var bootStrapLinkOne = document.createElement('script');
var mapBoxCssDierections = document.createElement('link');
var linkMapBoxCss = document.createElement('link');
var searchSelector = document.querySelector('.shop-code');
var methodOfSort = document.getElementById('sort-method');
methodOfSort.innerHTML = ` <button class="sort-button" id="all">all</button><button class="sort-button" id="devices">devices</button><button class="sort-button" id="chairs">chairs</button><button class="sort-button" id="tables">tables</button><button class="sort-button" id="lights">lights</button><button class="sort-button" id="bed">bed</button><button class="sort-button" id="picture">picture</button><button class="sort-button" id="bathroom">bathroom</button><button class="sort-button" id="woredrobers">woredrobers</button><button class="sort-button" id="elements">elements</button><button class="sort-button" id="decorative">decorative</button><button class="sort-button" id="carpet">carpet</button>`;

bootStrapLinkOne.setAttribute('src', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js');
jQuerySetUpTwo.setAttribute('src', 'https://code.jquery.com/jquery-3.5.0.js');
linkMapBoxCss.rel = 'stylesheet';
linkMapBoxCss.href = 'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-directions/v4.1.0/mapbox-gl-directions.css';
document.head.appendChild(linkMapBoxCss);
document.head.appendChild(jQuerySetUpTwo);
document.head.appendChild(bootStrapLinkOne);


function showLangFlag() {
    for (var i = 0; i < langs.length; i++) {
        langsDOM.innerHTML = ` <img src="${langs[1].img}" alt="${langs[1].name}" class="lang-img" onclick="dropDownLangs(${langs[1].id})" id="${langs[1].id}">`;
        langsDropDown.innerHTML = ` <img src="${langs[0].img}" alt="${langs[0].name}" class="lang-img" onclick="changeSource(${langs[0].id})" id="${langs[0].id}">`;
    }
}


function dropDownLangs(id) {
    langsDropDown.classList.toggle('show');
}


function changeSource(ID) {
    sessionStorage.setItem("id", ID);
    var getId = sessionStorage.getItem("id");
    console.log(getId);
    langsDropDown.classList.remove('show');
    if (ID === 1) {
        langsDOM.innerHTML = '';
        for (i = 0; i < langs.length; i++) {
            langsDropDown.innerHTML = '';
            langsDOM.innerHTML = `<img src="${langs[0].img}" alt="${langs[0].name}" id="${langs[0].id}"  class="lang-img" onclick="dropDownLangs(${langs[0].id})">`;
            langsDropDown.innerHTML += ` <img src="${langs[1].img}" alt="${langs[1].name}" class="lang-img" onclick="changeSource(${langs[1].id})" id="${langs[1].id}">`;
        }
    } else {
        for (i = 0; i < langs.length; i++) {
            langsDropDown.innerHTML = '';
            langsDOM.innerHTML = `<img src="${langs[1].img}" alt="${langs[1].name}" id="${langs[1].id}"  class="lang-img" onclick="dropDownLangs(${langs[1].id})">`;
            langsDropDown.innerHTML += ` <img src="${langs[0].img}" alt="${langs[0].name}" class="lang-img" onclick="changeSource(${langs[0].id})" id="${langs[0].id}">`;
        }
    }
}

/*SCROLLUJ */
var htmlPages = [{ name: "PRODUCTS", url: "javascript: scrollToForm();" }, { name: "HISTORY", url: "javascript: scrollToHistory();" }, { name: "COLLECTIONS", url: "javascript: scrollToCollections();" }, { name: "DISCOUNTS", url: "javascript: scrollToDiscounts()" }, { name: "AMBIENT", url: "javascript: scrollToAmbient();" }, { name: "BLOG", url: "javascript: scrollToBlog();" }, { name: "LOCATION", url: "javascript: scrollToLocation();" }];


function showLinks() {
    for (var i = 0; i < htmlPages.length; i++) {
        linksDOM.innerHTML += `    <a href="${htmlPages[i].url}" rel="noopener">${htmlPages[i].name}</a>`;
    }
}


showLinks();

logoShower();

showLangFlag();

function logoShower() {
    logo.innerHTML = `<i class="fas fa-shopping-cart"></i><div class="headline"><div class="top-headline"><span class="black">Online</span><span class="orange">Shop</span></div>
<div class="bottom-headline"><span class="orange">Marko</span><span class="black">Perović</span></div></div>`;
}


$(document).ready(function () {
    $.ajaxSetup({ cache: false });
    $('#searchJson').keyup(function () {
        $('#result').html('');
        var searchField = $('#searchJson').val();
        var expression = new RegExp(searchField, "i");
        $.getJSON('database.json', function (data) {
            $.each(data, function (key, value) {
                if (value.primarydata.name.search(expression) != -1 || value.primarydata.price.search(expression) != -1 || value.typeofitem.type.search(expression) != -1) {
                    $('#result').append('<li class="list-group-item link-class block-item"><img src="' + value.userinterface.image + '" height="40" width="40" class="img-thumbnail" /> ' + value.primarydata.name + ' | <span class="text-muted">' + value.primarydata.price + '</span></li>');
                }
            });
        });
    });

    $('#result').on('click', 'li', function () {
        var click_text = $(this).text().split('|');
        $('#searchJson').val($.trim(click_text[0]));
        $("#result").html('');
    });
});


openSearch.addEventListener('click', () => {
    searchContent.classList.add('showSearchDiv');
    searchContent.classList.remove('hideSearchDiv');
    document.body.style.overflow = 'hidden';
});
closeSearch.addEventListener('click', () => {
    searchContent.classList.add('hideSearchDiv');
    document.body.style.overflow = 'auto';
});


var wrpOneS = document.getElementById('contentOfSlideShow');
var swiperOneArray = [{ url: "./images/wallpaper21.jpg" }, { url: "./images/wallpaper2.jpg" }, { url: "./images/wallpaper5.jpg" }, { url: "./images/wallpaper7.jpg" }, { url: "./images/wallpaper8.jpg" }];


function showSwiperOneArr() {
    for (let i = 0; i < swiperOneArray.length; i++) {
        wrpOneS.innerHTML += `<div class="swiper-slide" style="background-image: url(${swiperOneArray[i].url});  background-size: cover;"><div class="shop-now"><p class="text-shop">VISIT SHOP</p><button class="now">NOW</button></div></div>`;
    }
}

showSwiperOneArr();


var swiper1 = new Swiper('.swiper1', {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    keyboard: true,
});


var textHistory = " ";
document.getElementById('historycal-text').innerHTML = `<p><p id="spanTxt" style="text-align: justify;">Furniture</p><p class="p9">is defined as movable equipment that is created to make a person office or home more suitable and comfortable for living or working. Furniture can be used for storage, seating or sleeping. The concept of furniture first developed as early as 3100-2500 B.C.</p></p>
`;
var imageArray = [{ url: "./images/img1.jpg" }, { url: "./images/img2.jpg" }, { url: "./images/img4.jpg" }, { url: "./images/img5.jpg" }, { url: "./images/img9.jpg" }, { url: "./images/img10.jpg" }];
var wrapperContent = document.getElementById('wrp');


function wrapImages() {
    for (let i = 0; i < imageArray.length; i++) {
        wrapperContent.innerHTML += `<div class="swiper-slide swiperslide2"  style="background-image: url(${imageArray[i].url});background-size: cover;"></div>`;
    }
}

wrapImages();


var swiper2 = new Swiper('.swiper2', {
    effect: 'cube',
    grabCursor: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    pagination: {
        el: '.swiper-pagination2',
        clickable: true,
    }, autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});


function scrollAnimation() {
    if (document.body.scrollTop == 1500) {
        alert('1200');
    }
}

scrollAnimation();



var all = document.getElementById('all');
var devices = document.getElementById('devices');
var chairs = document.getElementById('chairs');
var tables = document.getElementById('tables');
var bed = document.getElementById('bed');
var lights = document.getElementById('lights');
var carpet = document.getElementById('carpet');
var elements = document.getElementById('elements');
var woredrobers = document.getElementById('woredrobers');
var bathroom = document.getElementById('bathroom');
var decorative = document.getElementById('decorative');
var picture = document.getElementById('picture');




var swiperFourContent = document.getElementById('sw4con');
var swiper4Images = [
    { url: "./images/collections/cossy.jpg", id: 2, name: "Cossy" },
    { url: "./images/collections/luxury.jpg", id: 3, name: "Luxury" },
    { url: "./images/collections/modern.jpg", id: 4, name: "Modern" },
    { url: "./images/collections/designer.jpg", id: 5, name: "Designer" },
    { url: "./images/collections/achient.jpg", id: 7, name: "Achient" },
    { url: "./images/collections/black&white.jpg", id: 9, name: "Black&White" },
    { url: "./images/collections/colorful.jpg", id: 10, name: "Colorful" },
];


function showCollections() {
    for (let i = 0; i < swiper4Images.length; i++) {
        swiperFourContent.innerHTML += `<div class="swiper-slide slide4" id="${swiper4Images[i].id}"><img src="${swiper4Images[i].url}" alt="" class="imgCntn"><div class="nameCntn"><p class="txtcnt">${swiper4Images[i].name}</p></div></div>`;
    }
}


showCollections();


var swiper = new Swiper('.swiper4', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination4',
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
        '900': {
            slidesPerView: 5,
            spaceBetween: 40,
        },
        '@3040': {
            slidesPerView: 5,
            spaceBetween: 50,
        },
        '480': {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        '@640': {
            slidesPerView: 3,
            spaceBetween: 50,
        },
        '480': {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        '@640': {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        '300': {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        '@480': {
            slidesPerView: 2,
            spaceBetween: 50,
        },
    },
});


var arrayFive = [{ url: "./images/ambient/ambient5.jpg" }, { url: "./images/ambient/ambient2.jpg" }, { url: "./images/ambient/ambient3.jpg" }];
var swipFv = document.getElementById('cntn5');


function showSwiperFive() {
    for (let i = 0; i < arrayFive.length; i++) {
        swipFv.innerHTML += `<div class="swiper-slide slide5 r" style="background-image: url(${arrayFive[i].url});background-size:cover;"></div>`;
    }
}


showSwiperFive();


const sortButton = document.querySelector('.sort-products-index');
const closeSortButton = document.querySelector('.x');
const sortOverlay = document.querySelector('.ovelrayer');
const sortOverlayContent = document.querySelector('.pop-up-overlay');
const sortPopUp = document.querySelector('.sort-functions');
const ascendingPrice = document.getElementById('ascPrice');
const descendingPrice = document.getElementById('descPrice');
const ascendingName = document.getElementById('ascName');
const descendingName = document.getElementById('descName');
const content = document.getElementById("locationOfProducts");


var textCxt = document.getElementById('cntn6');
var text6 = [{ text1: "STYLES", class2: "oranges", text: "In 3D computer graphics, modeling, and animation, ambient occlusion is a shading and rendering technique used to calculate how exposed each point in a scene is to ambient lighting. For example, the interior of a tube is typically more occluded (and hence darker) than the exposed outer surfaces, and becomes darker the deeper inside the tube one goes.", class: "e2" }];


function showText6() {
    for (let i = 0; i < text6.length; i++) {
        textCxt.innerHTML += `<div class="swiper-slide slide3 s2"><p class="${text6[i].class2}">${text6[i].text1}</p><p class="${text6[i].class}">${text6[i].text}</p></div>`;
    }
}


showText6();



var slideIndex = 0;


showSlides();


function showSlides() {
    var slides = document.getElementsByClassName("r");
    for (var i = 0; i < arrayFive.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "flex";
    setTimeout(showSlides, 2000);
}


let cart = [];
let DOMbuttons = [];




class Products {


    async getProducts() {
        try {
            let result = await fetch('data.json');
            let data = await result.json();
            let products = data.items;
            products = products.map(item => {
                let { id } = item.identification;
                let { name, price } = item.primarydata;
                let image = item.userinterface.image;
                let category = item.typeofitem.type;
                return { id, name, price, image, category };
            })
            return products;
        } catch (error) {
            console.log(error);
            alert(error);
            document.write(error);
        }
    }
}


class UI {


    displayProducts(products) {
        let result = '';
        products.forEach(itemInfo => {
            result += `<article  data-open="${itemInfo.id}" class="product opes" data-aos="zoom-in-up" data-aos-offset="300" data-aos-easing="ease-in-sine">
      <primary class="primary-info">
         <category class="category-div"><i class="fas fa-window-restore"></i>
            <p class="category">${itemInfo.category}</p>
         </category>
         <button class="add-to-cart" data-id="${itemInfo.id}">
            <span class="add-text">add to cart</span><i class="fas fa-cart-plus" ></i>
         </button>
      </primary>
      <img src=${itemInfo.image} alt="" class="product-image">
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
         <name class="name">${itemInfo.name}</name> <br>
         <price class="prices">€${itemInfo.price}</price>
      </info>
      <lista>
         &#9705; For cash payment and online shopping
      </lista>
      <state class="availability">Available</state>
   </article>`;
   
        });
        productsContent.innerHTML = result;

    }


   visitPro(id){
    window.location.href = 'single-product-index.html'; var geter = Storage.getProduct(id);
    sessionStorage.setItem("productId",geter);
   }

    convertArray(products) {

        /*DEVICES*/

        document.getElementById("devices").addEventListener('click', () => {



            all.classList.remove('CHOSEN');
            devices.classList.add('CHOSEN');
            chairs.classList.remove('CHOSEN');
            tables.classList.remove('CHOSEN');
            bed.classList.remove('CHOSEN');
            lights.classList.remove('CHOSEN');
            carpet.classList.remove('CHOSEN');
            elements.classList.remove('CHOSEN');
            woredrobers.classList.remove('CHOSEN');
            bathroom.classList.remove('CHOSEN');
            decorative.classList.remove('CHOSEN');
            picture.classList.remove('CHOSEN');



            this.closeSort();
            let result = '';
            productsContent.innerHTML = ``;
            result = '';
            products.forEach(itemInfo => {
                if (itemInfo.category === "devices")
                    result += `<article class="product" data-aos="zoom-in-up" data-aos-offset="300" data-aos-easing="ease-in-sine"><primary class="primary-info"><category class="category-div"><i class="fas fa-window-restore"></i><p class="category">${itemInfo.category}</p></category><button class="add-to-cart" data-id="${itemInfo.id}"></button></primary><img src=${itemInfo.image} alt="" class="product-image"><rate class="rate"><star><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></star><number class="number">(5)</number></rate><info class="product-info"><name class="name">${itemInfo.name}</name> <br><price class="prices">€${itemInfo.price}</price></info><lista>&#9705; For cash payment and online shopping</lista><state class="availability">Available</state></article>`;
            });
            productsContent.innerHTML = result;
        })


        /*BED*/


        document.getElementById("bed").addEventListener('click', () => {

            all.classList.remove('CHOSEN');
            devices.classList.remove('CHOSEN');
            chairs.classList.remove('CHOSEN');
            tables.classList.remove('CHOSEN');
            bed.classList.add('CHOSEN');
            lights.classList.remove('CHOSEN');
            carpet.classList.remove('CHOSEN');
            elements.classList.remove('CHOSEN');
            woredrobers.classList.remove('CHOSEN');
            bathroom.classList.remove('CHOSEN');
            decorative.classList.remove('CHOSEN');
            picture.classList.remove('CHOSEN');


            this.closeSort();
            let result = '';
            productsContent.innerHTML = ``;
            result = '';
            products.forEach(itemInfo => {
                if (itemInfo.category === "bed")
                result += `<article class="product" data-aos="zoom-in-up" data-aos-offset="300" data-aos-easing="ease-in-sine"><primary class="primary-info"><category class="category-div"><i class="fas fa-window-restore"></i><p class="category">${itemInfo.category}</p></category><button class="add-to-cart" data-id="${itemInfo.id}"></button></primary><img src=${itemInfo.image} alt="" class="product-image"><rate class="rate"><star><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></star><number class="number">(5)</number></rate><info class="product-info"><name class="name">${itemInfo.name}</name> <br><price class="prices">€${itemInfo.price}</price></info><lista>&#9705; For cash payment and online shopping</lista><state class="availability">Available</state></article>`;
            });
            productsContent.innerHTML = result;
        })


        /*CHAIRS */


        document.getElementById("chairs").addEventListener('click', () => {



            all.classList.remove('CHOSEN');
            devices.classList.remove('CHOSEN');
            chairs.classList.add('CHOSEN');
            tables.classList.remove('CHOSEN');
            bed.classList.remove('CHOSEN');
            lights.classList.remove('CHOSEN');
            carpet.classList.remove('CHOSEN');
            elements.classList.remove('CHOSEN');
            woredrobers.classList.remove('CHOSEN');
            bathroom.classList.remove('CHOSEN');
            decorative.classList.remove('CHOSEN');
            picture.classList.remove('CHOSEN');


            this.closeSort();
            let result = '';
            productsContent.innerHTML = ``;
            result = '';
            products.forEach(itemInfo => {
                if (itemInfo.category === "chairs")
                result += `<article class="product" data-aos="zoom-in-up" data-aos-offset="300" data-aos-easing="ease-in-sine"><primary class="primary-info"><category class="category-div"><i class="fas fa-window-restore"></i><p class="category">${itemInfo.category}</p></category><button class="add-to-cart" data-id="${itemInfo.id}"></button></primary><img src=${itemInfo.image} alt="" class="product-image"><rate class="rate"><star><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></star><number class="number">(5)</number></rate><info class="product-info"><name class="name">${itemInfo.name}</name> <br><price class="prices">€${itemInfo.price}</price></info><lista>&#9705; For cash payment and online shopping</lista><state class="availability">Available</state></article>`;
            });
            productsContent.innerHTML = result;
        })


        /*LIGHTS */

        document.getElementById("lights").addEventListener('click', () => {

            all.classList.remove('CHOSEN');
            devices.classList.remove('CHOSEN');
            chairs.classList.remove('CHOSEN');
            tables.classList.remove('CHOSEN');
            bed.classList.remove('CHOSEN');
            lights.classList.add('CHOSEN');
            carpet.classList.remove('CHOSEN');
            elements.classList.remove('CHOSEN');
            woredrobers.classList.remove('CHOSEN');
            bathroom.classList.remove('CHOSEN');
            decorative.classList.remove('CHOSEN');
            picture.classList.remove('CHOSEN');


            this.closeSort();
            let result = '';
            productsContent.innerHTML = ``;
            result = '';
            products.forEach(itemInfo => {
                if (itemInfo.category === "lights")
                result += `<article class="product" data-aos="zoom-in-up" data-aos-offset="300" data-aos-easing="ease-in-sine"><primary class="primary-info"><category class="category-div"><i class="fas fa-window-restore"></i><p class="category">${itemInfo.category}</p></category><button class="add-to-cart" data-id="${itemInfo.id}"></button></primary><img src=${itemInfo.image} alt="" class="product-image"><rate class="rate"><star><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></star><number class="number">(5)</number></rate><info class="product-info"><name class="name">${itemInfo.name}</name> <br><price class="prices">€${itemInfo.price}</price></info><lista>&#9705; For cash payment and online shopping</lista><state class="availability">Available</state></article>`;
            });
            productsContent.innerHTML = result;
        })


        /*PICTURE */

        document.getElementById("picture").addEventListener('click', () => {


            all.classList.remove('CHOSEN');
            devices.classList.remove('CHOSEN');
            chairs.classList.remove('CHOSEN');
            tables.classList.remove('CHOSEN');
            bed.classList.remove('CHOSEN');
            lights.classList.remove('CHOSEN');
            carpet.classList.remove('CHOSEN');
            elements.classList.remove('CHOSEN');
            woredrobers.classList.remove('CHOSEN');
            bathroom.classList.remove('CHOSEN');
            decorative.classList.remove('CHOSEN');
            picture.classList.add('CHOSEN');


            this.closeSort();
            let result = '';
            productsContent.innerHTML = ``;
            result = '';
            products.forEach(itemInfo => {
                if (itemInfo.category === "picture")
                result += `<article class="product" data-aos="zoom-in-up" data-aos-offset="300" data-aos-easing="ease-in-sine"><primary class="primary-info"><category class="category-div"><i class="fas fa-window-restore"></i><p class="category">${itemInfo.category}</p></category><button class="add-to-cart" data-id="${itemInfo.id}"></button></primary><img src=${itemInfo.image} alt="" class="product-image"><rate class="rate"><star><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></star><number class="number">(5)</number></rate><info class="product-info"><name class="name">${itemInfo.name}</name> <br><price class="prices">€${itemInfo.price}</price></info><lista>&#9705; For cash payment and online shopping</lista><state class="availability">Available</state></article>`;
            });
            productsContent.innerHTML = result;
        })

        /*TABLES */


        document.getElementById("tables").addEventListener('click', () => {

            all.classList.remove('CHOSEN');
            devices.classList.remove('CHOSEN');
            chairs.classList.remove('CHOSEN');
            tables.classList.add('CHOSEN');
            bed.classList.remove('CHOSEN');
            lights.classList.remove('CHOSEN');
            carpet.classList.remove('CHOSEN');
            elements.classList.remove('CHOSEN');
            woredrobers.classList.remove('CHOSEN');
            bathroom.classList.remove('CHOSEN');
            decorative.classList.remove('CHOSEN');
            picture.classList.remove('CHOSEN');



            this.closeSort();
            let result = '';
            productsContent.innerHTML = ``;
            result = '';
            products.forEach(itemInfo => {
                if (itemInfo.category === "tables")
                result += `<article class="product" data-aos="zoom-in-up" data-aos-offset="300" data-aos-easing="ease-in-sine"><primary class="primary-info"><category class="category-div"><i class="fas fa-window-restore"></i><p class="category">${itemInfo.category}</p></category><button class="add-to-cart" data-id="${itemInfo.id}"></button></primary><img src=${itemInfo.image} alt="" class="product-image"><rate class="rate"><star><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></star><number class="number">(5)</number></rate><info class="product-info"><name class="name">${itemInfo.name}</name> <br><price class="prices">€${itemInfo.price}</price></info><lista>&#9705; For cash payment and online shopping</lista><state class="availability">Available</state></article>`;
            });
            productsContent.innerHTML = result;
        })
        /*WOREDROBERS */


        document.getElementById("woredrobers").addEventListener('click', () => {

            all.classList.remove('CHOSEN');
            devices.classList.remove('CHOSEN');
            chairs.classList.remove('CHOSEN');
            tables.classList.remove('CHOSEN');
            bed.classList.remove('CHOSEN');
            lights.classList.remove('CHOSEN');
            carpet.classList.remove('CHOSEN');
            elements.classList.remove('CHOSEN');
            woredrobers.classList.add('CHOSEN');
            bathroom.classList.remove('CHOSEN');
            decorative.classList.remove('CHOSEN');
            picture.classList.remove('CHOSEN');


            this.closeSort();
            let result = '';
            productsContent.innerHTML = ``;
            result = '';
            products.forEach(itemInfo => {
                if (itemInfo.category === "woredrobers")
                result += `<article class="product" data-aos="zoom-in-up" data-aos-offset="300" data-aos-easing="ease-in-sine"><primary class="primary-info"><category class="category-div"><i class="fas fa-window-restore"></i><p class="category">${itemInfo.category}</p></category><button class="add-to-cart" data-id="${itemInfo.id}"></button></primary><img src=${itemInfo.image} alt="" class="product-image"><rate class="rate"><star><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></star><number class="number">(5)</number></rate><info class="product-info"><name class="name">${itemInfo.name}</name> <br><price class="prices">€${itemInfo.price}</price></info><lista>&#9705; For cash payment and online shopping</lista><state class="availability">Available</state></article>`;
            });
            productsContent.innerHTML = result;
        })


        /*BATHROOM*/

        document.getElementById("bathroom").addEventListener('click', () => {

            all.classList.remove('CHOSEN');
            devices.classList.remove('CHOSEN');
            chairs.classList.remove('CHOSEN');
            tables.classList.remove('CHOSEN');
            bed.classList.remove('CHOSEN');
            lights.classList.remove('CHOSEN');
            carpet.classList.remove('CHOSEN');
            elements.classList.remove('CHOSEN');
            woredrobers.classList.remove('CHOSEN');
            bathroom.classList.add('CHOSEN');
            decorative.classList.remove('CHOSEN');
            picture.classList.remove('CHOSEN');


            this.closeSort();
            let result = '';
            productsContent.innerHTML = ``;
            result = '';
            products.forEach(itemInfo => {
                if (itemInfo.category === "bathroom")
                result += `<article class="product" data-aos="zoom-in-up" data-aos-offset="300" data-aos-easing="ease-in-sine"><primary class="primary-info"><category class="category-div"><i class="fas fa-window-restore"></i><p class="category">${itemInfo.category}</p></category><button class="add-to-cart" data-id="${itemInfo.id}"></button></primary><img src=${itemInfo.image} alt="" class="product-image"><rate class="rate"><star><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></star><number class="number">(5)</number></rate><info class="product-info"><name class="name">${itemInfo.name}</name> <br><price class="prices">€${itemInfo.price}</price></info><lista>&#9705; For cash payment and online shopping</lista><state class="availability">Available</state></article>`;
            });
            productsContent.innerHTML = result;
        })


        /*ELEMENTS*/

        document.getElementById("elements").addEventListener('click', () => {

            all.classList.remove('CHOSEN');
            devices.classList.remove('CHOSEN');
            chairs.classList.remove('CHOSEN');
            tables.classList.remove('CHOSEN');
            bed.classList.remove('CHOSEN');
            lights.classList.remove('CHOSEN');
            carpet.classList.remove('CHOSEN');
            elements.classList.add('CHOSEN');
            woredrobers.classList.remove('CHOSEN');
            bathroom.classList.remove('CHOSEN');
            decorative.classList.remove('CHOSEN');
            picture.classList.remove('CHOSEN');


            this.closeSort();
            let result = '';
            productsContent.innerHTML = ``;
            result = '';
            products.forEach(itemInfo => {
                if (itemInfo.category === "elements")
                result += `<article class="product" data-aos="zoom-in-up" data-aos-offset="300" data-aos-easing="ease-in-sine"><primary class="primary-info"><category class="category-div"><i class="fas fa-window-restore"></i><p class="category">${itemInfo.category}</p></category><button class="add-to-cart" data-id="${itemInfo.id}"></button></primary><img src=${itemInfo.image} alt="" class="product-image"><rate class="rate"><star><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></star><number class="number">(5)</number></rate><info class="product-info"><name class="name">${itemInfo.name}</name> <br><price class="prices">€${itemInfo.price}</price></info><lista>&#9705; For cash payment and online shopping</lista><state class="availability">Available</state></article>`;
            });
            productsContent.innerHTML = result;
        })


        /*DECORATIVE*/

        document.getElementById("decorative").addEventListener('click', () => {


            all.classList.remove('CHOSEN');
            devices.classList.remove('CHOSEN');
            chairs.classList.remove('CHOSEN');
            tables.classList.remove('CHOSEN');
            bed.classList.remove('CHOSEN');
            lights.classList.remove('CHOSEN');
            carpet.classList.remove('CHOSEN');
            elements.classList.remove('CHOSEN');
            woredrobers.classList.remove('CHOSEN');
            bathroom.classList.remove('CHOSEN');
            decorative.classList.add('CHOSEN');
            picture.classList.remove('CHOSEN');


            this.closeSort();
            let result = '';
            productsContent.innerHTML = ``;
            result = '';
            products.forEach(itemInfo => {
                if (itemInfo.category === "decorative")
                result += `<article class="product" data-aos="zoom-in-up" data-aos-offset="300" data-aos-easing="ease-in-sine"><primary class="primary-info"><category class="category-div"><i class="fas fa-window-restore"></i><p class="category">${itemInfo.category}</p></category><button class="add-to-cart" data-id="${itemInfo.id}"></button></primary><img src=${itemInfo.image} alt="" class="product-image"><rate class="rate"><star><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></star><number class="number">(5)</number></rate><info class="product-info"><name class="name">${itemInfo.name}</name> <br><price class="prices">€${itemInfo.price}</price></info><lista>&#9705; For cash payment and online shopping</lista><state class="availability">Available</state></article>`;
            });
            productsContent.innerHTML = result;
        })


        /*CARPET*/

        document.getElementById("carpet").addEventListener('click', () => {


            all.classList.remove('CHOSEN');
            devices.classList.remove('CHOSEN');
            chairs.classList.remove('CHOSEN');
            tables.classList.remove('CHOSEN');
            bed.classList.remove('CHOSEN');
            lights.classList.remove('CHOSEN');
            carpet.classList.add('CHOSEN');
            elements.classList.remove('CHOSEN');
            woredrobers.classList.remove('CHOSEN');
            bathroom.classList.remove('CHOSEN');
            decorative.classList.remove('CHOSEN');
            picture.classList.remove('CHOSEN');


            this.closeSort();
            let result = '';
            productsContent.innerHTML = ``;
            result = '';
            products.forEach(itemInfo => {
                if (itemInfo.category === "carpet")
                result += `<article class="product" data-aos="zoom-in-up" data-aos-offset="300" data-aos-easing="ease-in-sine"><primary class="primary-info"><category class="category-div"><i class="fas fa-window-restore"></i><p class="category">${itemInfo.category}</p></category><button class="add-to-cart" data-id="${itemInfo.id}"></button></primary><img src=${itemInfo.image} alt="" class="product-image"><rate class="rate"><star><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></star><number class="number">(5)</number></rate><info class="product-info"><name class="name">${itemInfo.name}</name> <br><price class="prices">€${itemInfo.price}</price></info><lista>&#9705; For cash payment and online shopping</lista><state class="availability">Available</state></article>`;
            });
            productsContent.innerHTML = result;
        })


        /*ALL*/

        document.getElementById("all").addEventListener('click', () => {

            all.classList.add('CHOSEN');
            devices.classList.remove('CHOSEN');
            chairs.classList.remove('CHOSEN');
            tables.classList.remove('CHOSEN');
            bed.classList.remove('CHOSEN');
            lights.classList.remove('CHOSEN');
            carpet.classList.remove('CHOSEN');
            elements.classList.remove('CHOSEN');
            woredrobers.classList.remove('CHOSEN');
            bathroom.classList.remove('CHOSEN');
            decorative.classList.remove('CHOSEN');
            picture.classList.remove('CHOSEN');



            this.closeSort();
            let result = '';
            productsContent.innerHTML = ``;
            result = '';
            products.forEach(itemInfo => {
                result += `<article class="product" data-aos="zoom-in-up" data-aos-offset="300" data-aos-easing="ease-in-sine"><primary class="primary-info"><category class="category-div"><i class="fas fa-window-restore"></i><p class="category">${itemInfo.category}</p></category><button class="add-to-cart" data-id="${itemInfo.id}"></button></primary><img src=${itemInfo.image} alt="" class="product-image"><rate class="rate"><star><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></star><number class="number">(5)</number></rate><info class="product-info"><name class="name">${itemInfo.name}</name> <br><price class="prices">€${itemInfo.price}</price></info><lista>&#9705; For cash payment and online shopping</lista><state class="availability">Available</state></article>`;
            });
            productsContent.innerHTML = result;
        })




    }



    getAddToCartButton() {
        const buttons = [...document.querySelectorAll('.add-to-cart')];
        DOMbuttons = buttons;
        buttons.forEach(button => {
            let id = button.dataset.id;
            let inCartItemButton = cart.find(item => item.id === id);
            if (inCartItemButton) {
                button.disabled = true;
                button.innerText = "IN CART";
            } else {
                button.addEventListener('click', event => {
                    button.disabled = true;
                    button.innerText = "IN CART";
                    let inCartItems = { ...Storage.getProduct(id), amount: 1 };
                    cart = [...cart, inCartItems];
                    Storage.saveCart(cart);
                    this.setCartValues(cart);
                    this.addItemToCart(inCartItems);
                    this.showCart();
                })
            }
        })
    }


    setCartValues(item) {
        let totalAmount = 0;
        let totalPrice = 0;
        item.forEach(element => {
            totalAmount += element.amount;
            totalPrice += element.amount * element.price;
        });
        totalItemPrice.innerText = "€" + totalPrice.toFixed(2);
        totalItemsAmount.innerText = totalAmount;
    }


    addItemToCart(itemInCart) {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.classList.add('cart-item-showr')
        cartItem.innerHTML = `
    <img src=${itemInCart.image} alt="" class="cart-image">
<div class="info">
        <p class="name-products">${itemInCart.name}</p>
        <button class="remove-button"  data-id=${itemInCart.id}>remove</button>
     </div>
     <div class="price">
        <p class="price-tag"> €${itemInCart.price}</p>
     </div>
     <div class="amount">
        <i class="fas fa-chevron-up" data-id=${itemInCart.id}></i>
        <p class="item-amount">${itemInCart.amount}</p>
        <i class="fas fa-chevron-down" data-id=${itemInCart.id}></i>
     </div>`;
        productsInCratContent.appendChild(cartItem);
    }


    showCart() {
        cartDisplay.classList.add('showcart');
        document.body.style.overflow = "auto";
    }


    hideCart() {
        cartDisplay.classList.remove('showcart');
        document.body.style.overflow = "auto";
    }



    sortProducts() {
        sortOverlay.classList.add('append-transform');
        sortOverlayContent.classList.add('append-transform');
        sortPopUp.classList.add('append-animation');
        sortOverlay.classList.remove('remove-append');
        sortOverlayContent.classList.remove('remove-append');
        document.body.style.overflow = "hidden";
    }



    closeSort() {
        sortOverlay.classList.add('remove-append');
        sortOverlayContent.classList.add('remove-append');
        sortOverlay.classList.remove('append-transform');
        sortOverlayContent.classList.remove('append-transform');
        sortPopUp.classList.remove('append-animation');
        document.body.style.overflow = "auto";
    }







    setupApplication() {
        cart = Storage.getCart();
        this.setCartValues(cart);
        this.populateCartTotal(cart);
        sortButton.addEventListener('click', this.sortProducts);
        closeSortButton.addEventListener('click', this.closeSort);
        showCartButton.addEventListener('click', this.showCart);
        hideCartFuncs.addEventListener('click', this.hideCart);
        this.convertArray();
    }


    populateCartTotal(products) {
        products.forEach(item => {
            this.addItemToCart(item);
        });
    }


    cartFunctionsLogic() {
        clearCartButton.addEventListener('click', () => {
            this.clearCartFunction();
        })
        productsInCratContent.addEventListener('click', event => {
            if (event.target.classList.contains('remove-button')) {
                let removeItem = event.target;
                let id = removeItem.dataset.id;
                productsInCratContent.removeChild(removeItem.parentElement.parentElement);
                this.removeItemFromCart(id);
            } else if (event.target.classList.contains('fa-chevron-up')) {
                let addAmount = event.target;
                let id = addAmount.dataset.id;
                let tempItem = cart.find(item => item.id === id);
                tempItem.amount = tempItem.amount + 1;
                Storage.saveCart(cart);
                this.setCartValues(cart);
                addAmount.nextElementSibling.innerText = tempItem.amount;
            } else if (event.target.classList.contains('fa-chevron-down')) {
                let lowerAmount = event.target;
                let id = lowerAmount.dataset.id;
                let tempItem = cart.find(item => item.id === id);
                tempItem.amount = tempItem.amount - 1;
                if (tempItem.amount > 0) {
                    Storage.saveCart(cart);
                    this.setCartValues(cart);
                    lowerAmount.previousElementSibling.innerText = tempItem.amount;
                } else {
                    productsInCratContent.removeChild(lowerAmount.parentElement.parentElement);
                    this.removeItemFromCart(id);
                }
            }
        })
    }


    clearCartFunction() {
        let itemsInCart = cart.map(item => item.id);
        itemsInCart.forEach(item => {
            this.removeItemFromCart(item);
        });
        console.log(productsInCratContent.children);
        while (productsInCratContent.children.length > 0) {
            productsInCratContent.removeChild(productsInCratContent.children[0]);

        }
        this.hideCart();
    }


    removeItemFromCart(id) {
        cart = cart.filter(item => item.id !== id);
        this.setCartValues(cart);
        Storage.saveCart(cart);
        let buttnos = this.getSingleButtonPress(id);
        buttnos.disabled = false;
        buttnos.innerHTML = `<span class="add-text">add to cart</span><i class="fas fa-cart-plus" ></i>`;
    }


    getSingleButtonPress(id) {
        return DOMbuttons.find(item => item.dataset.id === id);
    }


    displayProductsOnDiscount(productsDiscount) {
        let data = '';
        let timeGenerator = new Date;
        let nowTime = timeGenerator.getHours();
        // productsDiscount.length = 4;
        var wrapperSeven = document.querySelector('#wrapper7');
        console.log(nowTime);
        var priceA, priceB;
        switch (nowTime) {
            case 1:
                priceA = 0;
                priceB = 300;
                break;
            case 6:
                priceA = 200;
                priceB = 500;
                break;
            case 11:
                priceA = 600;
                priceB = 3500;
                break;
            case 16:
                priceA = 500;
                priceB = 2500;
                break;
            case 21:
                priceA = 100;
                priceB = 500;
                break;
            default:
                priceA = 0;
                priceB = 350;
                break;
        }
        productsDiscount.forEach(item => {
            if (item.price >= priceA && item.price <= priceB) {
                item.newprice = (item.price / Math.floor(Math.random() * 5)).toFixed(2);
                data += `<article class="product swiper-slide sl7" style="cursor:grab;">
                <primary class="primary-info">
                   <category class="category-div"><i class="fas fa-window-restore"></i>
                      <p class="category">${item.category}</p>
                   </category>                   
                </primary>
                <img src=${item.image} alt="" class="product-image">
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
                   <name class="name">${item.name}</name> <br>
                   <div style="display:flex;flex-direction:column;">
                   <price class="prices" style="color:red;font-size:18px;"><s>€${item.price}</s></price>
                    <price class="prices"  style="color:grey;font-size:25px;">€${item.newprice}</price>
                   </div>
                </info>
                <lista>
                   &#9705; For cash payment and online shopping
                </lista>
                <state class="availability">Available</state>
             </article>`;
            }
        });
        wrapperSeven.innerHTML = data;
    }


    swiperSevenFunction() {
        var swiper = new Swiper('.swiper7', {
            slidesPerView: 4,
            spaceBetween: 10,
            pagination: {
                el: '.swiper-pagination7',
                clickable: true,

            },
            navigation: {
                nextEl: '.swiper-button-next7',
                prevEl: '.swiper-button-prev7',
            }, breakpoints: {
                '1900': {
                    slidesPerView: 5,
                    spaceBetween: 40,
                },
                '1150': {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
                '900': {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                '@3040': {
                    slidesPerView: 5,
                    spaceBetween: 50,
                },
                '480': {
                    slidesPerView: 1,
                    spaceBetween: 40,
                },
                '@640': {
                    slidesPerView: 1,
                    spaceBetween: 50,
                },
                '480': {
                    slidesPerView: 1,
                    spaceBetween: 40,
                },
                '@640': {
                    slidesPerView: 1,
                    spaceBetween: 50,
                },
                '300': {
                    slidesPerView: 1,
                    spaceBetween: 40,
                },
                '@480': {
                    slidesPerView: 1,
                    spaceBetween: 50,
                },
            },
        });
    }


    insertDiscountCode(products) {

    }


}


class Storage {


    static saveProduct(product) {
        localStorage.setItem("products", JSON.stringify(product));
    }


    static getProduct(id) {
        let result = JSON.parse(localStorage.getItem("products"));
        return result.find(product => product.id === id);
    }


    static saveCart(cart) {
        localStorage.setItem("cart", JSON.stringify(cart));
    }


    static getCart() {
        return localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const ui = new UI();
    const product = new Products();
    ui.setupApplication();
    product.getProducts().then(product => {
        ui.displayProducts(product);
        Storage.saveProduct(product);
        ui.displayProductsOnDiscount(product);
        ui.swiperSevenFunction();
        ui.convertArray(product);
    }).then(() => {
        ui.getAddToCartButton();
        ui.cartFunctionsLogic();

    })
})


mapboxgl.accessToken = 'pk.eyJ1IjoicGVyb3ZpY21hcmtvIiwiYSI6ImNraTlpM3luNTBmejIzMWxjZ3Z4c2UyemsifQ._gNpLUkuTq37QN5unnT5dQ';
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
});


function successLocation(position) {
    console.log(position);
    setUpMap([position.coords.longitude, position.coords.latitude]);
}


function errorLocation(position) {
    console.log(position);
    setUpMap(position)
}


function setUpMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15,
        bearing: 0,
        antialias: true
    }); map.addControl(
        new MapboxDirections({
            accessToken: mapboxgl.accessToken
        }),
        'top-left'
    );
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'top-right');
}


var shops = [{ id: 1, name: "comfyshop", source: "./images/shops/shop1.jpeg", time: "8-20", location: "Nis, Serbia" }, { id: 2, name: "luxyshop", source: "./images/shops/shop2.jpg", time: "10-00", location: "New York, USA" }, { id: 3, name: "opulentshop", source: "./images/shops/shop3.jpg", time: "00-00", location: "Paris, France" }];
var listaShop = document.getElementById('listaShop');
var overlay = document.querySelector('.shop-big-img');
var overlayContent = document.querySelector('.width-div-img');
var closer = document.querySelector('.fa-times');


function setList(group) {


    clearList();


    for (const shop of group) {


        const div = document.createElement('shop');
        const shopImage = document.createElement('img');
        const shopName = document.createElement('shop-name');
        const workTime = document.createElement('shop-time')
        const shopLocation = document.createElement('shop-location');
        const visit = document.createElement('div');
        shopImage.src = shop.source;
        shopName.innerText = shop.name;
        workTime.innerText = "OPEN: " + shop.time;
        shopLocation.innerText = shop.location;
        div.classList.add('shop-list');
        shopImage.classList.add('shop-list-image');
        shopName.classList.add('shop-list-text-style');
        workTime.classList.add('shop-list-text-style');
        shopLocation.classList.add('shop-list-text-style');
        shopLocation.setAttribute('class', 'location');
        visit.innerHTML = `<i class="fas fa-eye"></i>`;
        div.appendChild(shopImage)
        div.appendChild(shopName);
        div.appendChild(workTime);
        div.appendChild(shopLocation);
        div.appendChild(visit);
        listaShop.appendChild(div);

        visit.addEventListener('click', () => {
            sessionStorage.setItem("shopId", shop.id);
            console.log(shop.id);
            //window.location.href = 'shop.html';
        });


        shopImage.addEventListener('click', () => {
            const iamgeInlarge = document.createElement('img');
            const close = document.createElement('div');
            close.innerHTML = `<i class="fas fa-times"></i>`;
            iamgeInlarge.src = shop.source
            iamgeInlarge.classList.add('big-shop');
            overlay.classList.add('translate-image');
            overlayContent.appendChild(iamgeInlarge);
            overlayContent.classList.add('translate-image');
            console.log('clicked');
            document.body.style.overflow = 'hidden';
            iamgeInlarge.classList.remove('image-dissapearing');
            overlay.classList.remove('closing');
            overlayContent.classList.remove('closing');
            overlayContent.appendChild(close);

        });


        overlayContent.addEventListener('click', () => {
            const iamgeInlarge = document.createElement('img');
            iamgeInlarge.src = shop.source
            iamgeInlarge.classList.add('image-dissapearing');
            overlay.classList.add('closing');
            overlayContent.removeChild(overlayContent.firstChild);
            overlayContent.classList.add('closing');
            console.log('closed');
            document.body.style.overflow = 'auto';
        });


        closer.addEventListener('mouseover', () => {
            closer.classList.add('border');
        })
    }


    if (group.length === 0) {
        setNoResults();
    }

}


function clearList() {
    while (listaShop.firstChild) {
        listaShop.removeChild(listaShop.firstChild);
    }
}


function setNoResults() {
    const div = document.createElement('shop');
    const text = document.createTextNode('No results found for "' + document.getElementById('searchShops').value + '"');
    div.classList.add('shop-list');
    div.appendChild(text);
    listaShop.appendChild(div);
}


function getRelevancy(value, searchTerm) {
    if (value === searchTerm) {
        return 2;
    } else if (value.startsWith(searchTerm)) {
        return 1;
    } else if (value.includes(searchTerm)) {
        return 0;
    } else return -1;
}


document.getElementById('searchShops').addEventListener('input', (event) => {
    let value = event.target.value;
    if (value && value.trim().length > 0) {
        value = value.trim().toLowerCase();
        setList(shops.filter(singleShop => {
            return singleShop.name.includes(value);
        }).sort((shopA, shopB) => {
            return getRelevancy(shopB.name, value) - getRelevancy(shopA.name, value);
        }))

    } else if (value === "all" && value === "ALL") {
        setList(shops);
    }

    else {
        clearList();
    }
})


var kod = [{ id: "4321" }, { id: "2525" }, { id: "3784" }, { id: "4987" }, { id: "" },];
var ids = [{ id: "1234" }, { id: "2525" }, { id: "3784" }, { id: "4987" }, { id: "" }];
var item = [
    { "identification": { "id": "1" }, "primarydata": { "name": "Desk", "price": "99.99" }, "userinterface": { "image": "./images/desk.jpeg" }, "typeofitem": { "type": "tables" }, "accessKey": { key: "2525" }, "discount": { "newprice": "45.85" } },
    { "identification": { "id": "2" }, "primarydata": { "name": "Table", "price": "184" }, "userinterface": { "image": "./images/table.jpeg" }, "typeofitem": { "type": "tables" }, "accessKey": { key: "2525" }, "discount": { "newprice": "95.85" } },
    { "identification": { "id": "3" }, "primarydata": { "name": "Chair", "price": "219.99" }, "userinterface": { "image": "./images/chair.jpg" }, "typeofitem": { "type": "chairs" }, "accessKey": { key: "4321" }, "discount": { "newprice": "155.85" } },
    { "identification": { "id": "4" }, "primarydata": { "name": "Stool", "price": "84.99" }, "userinterface": { "image": "./images/stool.jpg" }, "typeofitem": { "type": "chairs" }, "accessKey": { key: "4321" }, "discount": { "newprice": "35.85" } },
    { "identification": { "id": "5" }, "primarydata": { "name": "Sofa", "price": "3225.99" }, "userinterface": { "image": "./images/sofa.jpg" }, "typeofitem": { "type": "bed" }, "accessKey": { key: "2525" }, "discount": { "newprice": "2545.85" } },
    { "identification": { "id": "6" }, "primarydata": { "name": "Woredrober", "price": "500" }, "userinterface": { "image": "./images/woredrober.jpg" }, "typeofitem": { "type": "woredrobers" }, "accessKey": { key: "4321" }, "discount": { "newprice": "355.85" } }];


var displayer = document.getElementById("searchDiscountsResults");


function generateSearch() {
    var result = '';
    var searched = sessionStorage.getItem("searchTerm");
    document.getElementById("numpad").value = searched;
    for (let i = 0; i < item.length; i++) {
        if (searched === item[i].accessKey.key) {

            result += `<article class="product swiper-slide sl7" id="${item[i].accessKey.key}">
            <primary class="primary-info">
               <category class="category-div"><i class="fas fa-window-restore"></i>
                  <p class="category">${item[i].typeofitem.type}</p>
               </category>                   
            </primary>
            <img src=${item[i].userinterface.image} alt="" class="product-image">
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
               <name class="name">${item[i].primarydata.name}</name> <br>
               <div style="display:flex;flex-direction:column;">
               <price class="prices" style="color:red;font-size:18px;"><s>€${item[i].primarydata.price}</s></price>
               <price class="prices"  style="color:grey;font-size:25px;">€${item[i].discount.newprice}</price>
               </div>
            </info>
            <lista>
               &#9705; For cash payment and online shopping
            </lista>
            <state class="availability">Available</state>
         </article>`;

        }
    }


    displayer.innerHTML = result;


    var swiper = new Swiper('.swiper8', {
        navigation: {
            nextEl: '.swiper-button-next8',
            prevEl: '.swiper-button-prev8',
        },
        breakpoints: {
            '1900': {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            '1150': {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            '900': {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            '@3040': {
                slidesPerView: 3,
                spaceBetween: 50,
            },
            '480': {
                slidesPerView: 1,
                spaceBetween: 40,
            },
            '@640': {
                slidesPerView: 1,
                spaceBetween: 50,
            },
            '480': {
                slidesPerView: 1,
                spaceBetween: 40,
            },
            '@640': {
                slidesPerView: 1,
                spaceBetween: 50,
            },
            '300': {
                slidesPerView: 1,
                spaceBetween: 40,
            },
            '@480': {
                slidesPerView: 1,
                spaceBetween: 50,
            },
        },
    });
}


generateSearch();


function search() {
    var textValue = document.getElementById("numpad").value;
    if (textValue == "") {
        alert("Enter code please...");
    } else {
        window.location.href = 'index.html';
        sessionStorage.setItem("searchTerm", textValue);
    }
}


function key(event) {
    var key = event.keyCode;
    if (key == 13) {
        search();
    }
}


var dataPage = [{ "identification": { "id": "1" }, "primarydata": { "name": "Desk", "price": "99.99" }, "userinterface": { "image": "./images/desk.jpeg" }, "typeofitem": { "type": "tables" } }, { "identification": { "id": "2" }, "primarydata": { "name": "Table", "price": "184" }, "userinterface": { "image": "./images/table.jpeg" }, "typeofitem": { "type": "tables" } }, { "identification": { "id": "3" }, "primarydata": { "name": "Chair", "price": "219.99" }, "userinterface": { "image": "./images/chair.jpg" }, "typeofitem": { "type": "chairs" } }, { "identification": { "id": "4" }, "primarydata": { "name": "Stool", "price": "84.99" }, "userinterface": { "image": "./images/stool.jpg" }, "typeofitem": { "type": "chairs" } }, { "identification": { "id": "5" }, "primarydata": { "name": "Sofa", "price": "3225.99" }, "userinterface": { "image": "./images/sofa.jpg" }, "typeofitem": { "type": "bed" } }, { "identification": { "id": "6" }, "primarydata": { "name": "Woredrober", "price": "500" }, "userinterface": { "image": "./images/woredrober.jpg" }, "typeofitem": { "type": "woredrobers" } }, { "identification": { "id": "7" }, "primarydata": { "name": "Shelf", "price": "450.99" }, "userinterface": { "image": "./images/shelf.jpeg" }, "typeofitem": { "type": "woredrobers" } }, { "identification": { "id": "9" }, "primarydata": { "name": "Armchair", "price": "200" }, "userinterface": { "image": "./images/armchair.jpg" }, "typeofitem": { "type": "chairs" } }, { "identification": { "id": "10" }, "primarydata": { "name": "Chandelier", "price": "85.99" }, "userinterface": { "image": "./images/chandelier.jpg" }, "typeofitem": { "type": "lights" } }, { "identification": { "id": "11" }, "primarydata": { "name": "Bath", "price": "299.99" }, "userinterface": { "image": "./images/bath.png" }, "typeofitem": { "type": "bathroom" } }, { "identification": { "id": "12" }, "primarydata": { "name": "Basen", "price": "120" }, "userinterface": { "image": "./images/basen.png" }, "typeofitem": { "type": "bathroom" } }, { "identification": { "id": "13" }, "primarydata": { "name": "Sink", "price": "100" }, "userinterface": { "image": "./images/sink.jpg" }, "typeofitem": { "type": "bathroom" } }, { "identification": { "id": "14" }, "primarydata": { "name": "TV", "price": "950.99" }, "userinterface": { "image": "./images/tv.jpg" }, "typeofitem": { "type": "devices" } }, { "identification": { "id": "15" }, "primarydata": { "name": "Fridge", "price": "1200.99" }, "userinterface": { "image": "./images/fridge.png" }, "typeofitem": { "type": "devices" } }, { "identification": { "id": "16" }, "primarydata": { "name": "Coocker", "price": "750" }, "userinterface": { "image": "./images/coocker.jpg" }, "typeofitem": { "type": "devices" } }, { "identification": { "id": "17" }, "primarydata": { "name": "Microwave", "price": "350.99" }, "userinterface": { "image": "./images/microwave.jpg" }, "typeofitem": { "type": "devices" } }, { "identification": { "id": "18" }, "primarydata": { "name": "Washmachine", "price": "650.99" }, "userinterface": { "image": "./images/machine.png" }, "typeofitem": { "type": "devices" } }, { "identification": { "id": "19" }, "primarydata": { "name": "Speakers", "price": "1750" }, "userinterface": { "image": "./images/speakers.png" }, "typeofitem": { "type": "devices" } }, { "identification": { "id": "20" }, "primarydata": { "name": "Picture", "price": "800" }, "userinterface": { "image": "./images/picture.png" }, "typeofitem": { "type": "picture" } }, { "identification": { "id": "21" }, "primarydata": { "name": "Lamp", "price": "25.99" }, "userinterface": { "image": "./images/lamp.jpg" }, "typeofitem": { "type": "lights" } }, { "identification": { "id": "22" }, "primarydata": { "name": "Plant", "price": "30.99" }, "userinterface": { "image": "./images/lamp.png" }, "typeofitem": { "type": "decorative" } }, { "identification": { "id": "23" }, "primarydata": { "name": "Tap", "price": "45.99" }, "userinterface": { "image": "./images/tap.png" }, "typeofitem": { "type": "bathroom" } }, { "identification": { "id": "24" }, "primarydata": { "name": "Pillow", "price": "15.45" }, "userinterface": { "image": "./images/pillow.png" }, "typeofitem": { "type": "bed" } }, { "identification": { "id": "25" }, "primarydata": { "name": "Cushion", "price": "25.50" }, "userinterface": { "image": "./images/chshion.jpg" }, "typeofitem": { "type": "bed" } }, { "identification": { "id": "26" }, "primarydata": { "name": "Aircondition", "price": "375" }, "userinterface": { "image": "./images/aircondition.jpg" }, "typeofitem": { "type": "devices" } }, { "identification": { "id": "27" }, "primarydata": { "name": "Headphones", "price": "90" }, "userinterface": { "image": "./images/headphones.jpg" }, "typeofitem": { "type": "devices" } }, { "identification": { "id": "28" }, "primarydata": { "name": "Carpet", "price": "40" }, "userinterface": { "image": "./images/carpet.jpg" }, "typeofitem": { "type": "carpet" } }, { "identification": { "id": "29" }, "primarydata": { "name": "Windows", "price": "150.99" }, "userinterface": { "image": "./images/windows.jpg" }, "typeofitem": { "type": "elements" } }, { "identification": { "id": "30" }, "primarydata": { "name": "Door", "price": "100.99" }, "userinterface": { "image": "./images/door.jpg" }, "typeofitem": { "type": "elements" } }, { "identification": { "id": "31" }, "primarydata": { "name": "Bed", "price": "130.99" }, "userinterface": { "image": "./images/bed.jpg" }, "typeofitem": { "type": "bed" } }];


document.getElementById("numpad").addEventListener('keyup', key);


window.onload = () => {
    window.scrollTo(0, 0);
}


$('img').mousedown(function (e) {
    if (e.button == 2) {
        return false;
    }
});


var overlayTwo = document.querySelector('.overlay2');


stratBurger.addEventListener('click', () => {
    burger.classList.add('transformClass');
    burger.classList.remove('hideBurger');
    overlayTwo.classList.add('translate-image');
    overlayTwo.classList.remove('closing');
})


closeBurger.addEventListener('click', () => {
    burger.classList.add('hideBurger');
    burger.classList.remove('transformClass');
    overlayTwo.classList.remove('translate-image');
    overlayTwo.classList.add('closing');
})


$(document).ready(function () {
    $(this).scrollTop(0);
});


var pageInput = document.getElementById('searchPages');
function generatePageSearch() {

}


generatePageSearch();
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


console.log(document.body.children.length);
var linkBlockOne = document.querySelector('#location-1');
var linkBlockTwo = document.querySelector('#location-2');
var linkBlockThree = document.querySelector('#location-3');
var linkBlockFour = document.querySelector('#location-4');
var imagesForPayCards = document.querySelector('.play-values');
var linkOne = [{link:"News"},{link:"Privacy"},{link:"Security"},{link:"Location"}];
var linkTwo = [{link:"Products",url:"javascript: scrollToForm();"},{link:"Ambients",url:"javascript: scrollToAmbient();"},{link:"Discounts",url:"javascript: scrollToDiscounts();"},{link:"Collections",url:"javascript: scrollToDiscounts()"}];
var linkThree = [{link:"Supplier"},{link:"Employment"},{link:"Sitemap"},{link:"Contact"}];
var linkFour = [{link:"Log in"},{link:"Sign up"},{link:"Cookies"},{link:"Account"}];
var imagesOfBankCards = [{image:"./images/cards/mastercard.png"},{image:"./images/cards/westernunion.png"},{image:"./images/cards/visa.png"},{image:"./images/cards/maestro.jpg"}];



function scrollToForm() {
    document.querySelector('#form').scrollIntoView({ behavior: 'smooth' });
}

function scrollToHistory() {
    document.querySelector('#historyCon').scrollIntoView({ behavior: 'smooth' });
}

function scrollToCollections() {
   document.querySelector('#collection').scrollIntoView({behavior:'smooth'});
}

function scrollToAmbient() {
    document.querySelector('#ambient').scrollIntoView({behavior:'smooth'});
}

function scrollToDiscounts() {
    document.querySelector('#discounts').scrollIntoView({behavior:'smooth'});
}

function scrollToLocation() {
    document.querySelector('#location').scrollIntoView({behavior:'smooth'});
}

function scrollToBlog() {
    document.querySelector('#blog').scrollIntoView({behavior:'smooth'});
}

function blockOne() {
    for(var i=0;i<linkOne.length;i++) {
        linkBlockOne.innerHTML += ` <a href="" class="inlblock-link">${linkOne[i].link}</a>`;
    }
}

function blockTwo() {
    for(var i=0;i<linkTwo.length;i++) {
        linkBlockTwo.innerHTML += ` <a href="${linkTwo[i].url}" class="inlblock-link">${linkTwo[i].link}</a>`;
    }
}

function blockThree() {
    for(var i=0;i<linkThree.length;i++) {
        linkBlockThree.innerHTML += ` <a href="" class="inlblock-link">${linkThree[i].link}</a>`;
    }
}

function blockFour() {
    for(var i=0;i<linkFour.length;i++) {
        linkBlockFour.innerHTML += ` <a href="" class="inlblock-link">${linkFour[i].link}</a>`;
    }
}

function showImages() {
    for(var i=0;i<imagesOfBankCards.length;i++) {
        imagesForPayCards.innerHTML += `  <img src="${imagesOfBankCards[i].image}" alt="" class="image-of-bank-card" >`;
    }
}

blockOne();
blockTwo();
blockThree();
blockFour();
showImages();

var footerRights = document.querySelector('.footer');
var copyRightText = document.createElement('copyright');
copyRightText.classList.add('copyright');
copyRightText.innerText = "Copyright © Marko Perović 2021 All rights reserved.";
footerRights.appendChild(copyRightText);

/*SEARCH IN BURGER MENU FOR DISSAPEARED PAGES ON MAIN INEX FILE */

var searchBurger = document.getElementById('search');
var listOfItems = document.querySelector('.list-of-items');
var burgerArray = [
    {name:"products",scrollId:"#form"},
    {name:"history",scrollId:"#historyCon"},
    {name:"collections",scrollId:"#collection"},
    {name:"discounts",scrollId:"#discounts"},
    {name:"ambient",scrollId:"#ambient"},
    {name:"blog",scrollId:"#blog"},
    {name:"location",scrollId:"#location"}
];

function setListForBurger(items) {
    clearBurgerList();
    for(const item of items) {
        var lista = document.createElement('list');
        var text = document.createTextNode(item.name);
        lista.classList.add('lista-burger');
        lista.appendChild(text);       
        listOfItems.appendChild(lista);
        lista.addEventListener('click',() => {
            document.querySelector(item.scrollId).scrollIntoView({behavior:'smooth'});
            closeBurgerMenu();
            clearBurgerList();
        })
    }
    if(items.length === 0) {
        setNoResultsForBurger();
    }
}

function  clearBurgerList() {
    while(listOfItems.firstChild){
        listOfItems.removeChild(listOfItems.firstChild);
    }
}

function setNoResultsForBurger() {
    var lista = document.createElement('list');
    var text = document.createTextNode('No results found for `' + searchBurger.value + '`');
    lista.classList.add('lista-burger');
    lista.appendChild(text);
    listOfItems.appendChild(lista);
}

function getRelevancyForBurger(valueBurger, searchTermBurger) {
        if(valueBurger === searchTermBurger) {
            return 2;
        }else if(valueBurger.startsWith(searchTermBurger)) {
            return 1;
        }else if (valueBurger.includes(searchTermBurger)) {
            return 0;
        }else {
            return -1;
        }
}

searchBurger.addEventListener('input', (event) => {
    let valueForBurger = event.target.value;
    if(valueForBurger && valueForBurger.trim().length > 0) {
        valueForBurger = valueForBurger.trim().toLowerCase();
  setListForBurger(burgerArray.filter(item => {
    return item.name.includes(valueForBurger);
}).sort((itemA, itemB) => {
    return getRelevancyForBurger(itemB.name, valueForBurger) -  getRelevancyForBurger(itemA.name, valueForBurger);
}));
    } else {
        clearBurgerList();
    }
});

function closeBurgerMenu() {
    burger.classList.add('hideBurger');
    burger.classList.remove('transformClass');
    overlayTwo.classList.remove('translate-image');
    overlayTwo.classList.add('closing');
}

/*ADD SCROLL TO TOP ARROW FUNCTION */

function scrollToHeaderButton() {
    var windowHeight =  document.body.scrollBy.name;
    console.log(windowHeight);
}
scrollToHeaderButton();