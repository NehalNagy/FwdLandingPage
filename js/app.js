/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let unorderedList;
const sections = document.querySelectorAll('section');//returns NodeList;
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
/**
 * End Helper Functions
 * 
 * Begin Main Functions
 * 
*/
// 1. build the nav
function createNavItems() {
    unorderedList = document.getElementById('navbar__list');
    const fragment = document.createDocumentFragment();

    for (section of sections) {
        let itemText = section.getAttribute('data-nav');//comes from data-nav attribute
        let itemTarget = section.getAttribute('id');//comes from the section Id attribute

        let listItem = document.createElement('li');
        listItem.setAttribute('id', section.getAttribute('data-link-id'));

        let listItemA = document.createElement('a');
        listItemA.innerText = itemText;
        listItemA.setAttribute('href', `#${itemTarget}`);
        listItemA.style.textDecoration = 'none';
        listItem.appendChild(listItemA);
        fragment.appendChild(listItem);
    }
    let burgerMenuItem = document.createElement('li');
    burgerMenuItem.setAttribute('id', 'burger-menu-item');
    burgerMenuItem.innerHTML = '<a id="burger-menu-anchor" href="javascript:void(0);" class="icon" onclick="toggleBurgerMenu()"><i class="fa fa-bars"></i></a>'
    fragment.appendChild(burgerMenuItem);

    fragment.firstElementChild.classList.add('active-menu-item');//the default active menu item
    unorderedList.appendChild(fragment);
}

//changes the style of the active menu item
function activateMenuItem(activeItem) {
    //remove old active class
    let oldActive = document.querySelector('.active-menu-item');
    if (oldActive)
        oldActive.classList.remove('active-menu-item');
    activeItem.classList.add('active-menu-item');
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
createNavItems();

// Set sections as active
document.querySelector('#navbar__list').addEventListener('click', function (evt) {
    let clickedItem = evt.target.parentElement; //retuns li element
    if (clickedItem.getAttribute('id') != 'burger-menu-anchor')// do not activate the burger menu item
        activateMenuItem(clickedItem);
});
//scroll event
//add circles to active section -- by using your-active-class based on which section in viewport
document.addEventListener('scroll', function () {
    //1.change menu when scrolling ...
    //check that you are not in the top of the page:
    let headerSection = document.querySelector('.page__header');
    headerSection.style.backgroundColor = 'black';
    if (window.scrollY == 0 && window.scrollX == 0) {
        headerSection.style.backgroundColor = '';
    }
    //2.check that the section in viewport using obsever interface
    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.8
    };
    let observer = new IntersectionObserver(callback, options);
    sections.forEach(sec => {
        observer.observe(sec);

    });
});

function callback(entries) {
    entries.forEach(entry => {
        entry.target.classList.remove('your-active-class');
        let activeSec;
        if (entry.isIntersecting) {
            activeSec = entry.target;
            activeSec.classList.add('your-active-class');

            let menuItem = getActiveLink(activeSec);
            activateMenuItem(menuItem);//changes the style of the active menu item
        }
    });
}

//searching for the active link to change its style
function getActiveLink(section) {
    let linkId = section.getAttribute('data-link-id');
    return document.getElementById(linkId);
}







function toggleBurgerMenu() {
    var x = document.getElementById("navbarId");
    if (x.className === "navbar__menu") {
        x.className += " responsive";
    } else {
        x.className = "navbar__menu";
    }
}