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
function isSectionInView(sec) {
    console.log(sec.querySelector('h2'));
    let secPosition = sec.getBoundingClientRect();
    console.log('sec pos');
    console.log(secPosition.top);
    return (secPosition.top >= 0);
}


/**
 * End Helper Functions
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
        let listItemA = document.createElement('a');
        listItemA.innerText = itemText;
        listItemA.setAttribute('href', `#${itemTarget}`);
        listItemA.style.textDecoration = 'none';
        listItem.appendChild(listItemA);
        fragment.appendChild(listItem);
        // console.log("item text: "+ itemText+" item id: " + itemTarget);
    }
    unorderedList.appendChild(fragment);
}

//2.Toggle style of active section (in menu and in the section view)
// Add class 'active' to section when near top of viewport
function toggleActiveSection() {
    console.log('in toggle active section');
    for (section of sections) {
        // console.log("sec in viewport= "+isSectionInView(section));
        if (isSectionInView(section)) {
            // console.log(section.innerText);
            if (!section.classList.contains('your-active-class'))
                section.classList.add('your-active-class');
        }
        else
            section.classList.remove('your-active-class');
    }

}

function toggleActiveMenuItem(activeItem) {
    //remove old active class
    let oldActive = document.querySelector('.active-menu-item');
    if (oldActive)
        oldActive.classList.remove('active-menu-item');
    //   console.log(oldActive);
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
    toggleActiveMenuItem(evt.target);
});
//scroll event
//hide menu when scroll
//add circles to active section -- by using your-active-class based on which section in viewport
document.addEventListener('scroll', function () {
    //1.change menu when scrolling ...
    //check that you are not in the top of the page:
    let headerSection = document.querySelector('.page__header');
    headerSection.style.backgroundColor = 'black';
    if (window.scrollY == 0 && window.scrollX == 0) {
        headerSection.style.backgroundColor = '';
    }

    // toggleActiveSection();
});
//onclick listener for go to top button


document.addEventListener("DOMContentLoaded", () => {
    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.9
    };

    let observer = new IntersectionObserver(callback, options);
    sections.forEach(sec => {
        observer.observe(sec);
        console.log('watching');
        console.log(sec.querySelector('h2'));
    });
});
function callback(entries) {
    entries.forEach(entry => {
        entry.target.classList.remove('your-active-class');
        if (entry.isIntersecting) {
            console.log('intersecting!');
            console.log(entry.target.querySelector('h2'));
            entry.target.classList.add('your-active-class');
        }
    });
}