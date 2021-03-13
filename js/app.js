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
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
    //1-get all sections
    function getAllSections(){
        return allNavSections=document.querySelectorAll('section');//returns NodeList
    }
    function isSectionInView(sec){
        let secPosition=sec.getBoundingClientRect();
       return (
        secPosition.top >= 0 &&
        secPosition.left >= 0 &&
        secPosition.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        secPosition.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// 1. build the nav
function createNavItems(){
    let sections = getAllSections();
    let unorderedList = document.getElementById('navbar__list');
    for(section of sections){
        let itemText=section.getAttribute('data-nav');//comes from data-nav attribute
        let itemTarget=section.getAttribute('id');//comes from the section Id attribute
        
        let listItem= document.createElement('li');
        let listItemA= document.createElement('a');
        listItemA.innerText=itemText;
        listItemA.setAttribute('href',`#${itemTarget}`);
        listItemA.style.textDecoration='none';
        listItemA.style.color='white';
        listItem.appendChild(listItemA);
        unorderedList.appendChild(listItem);
        console.log("item text: "+ itemText+" item id: " + itemTarget);
    }
}

//2.Toggle style of active section (in menu and in the section view)
// Add class 'active' to section when near top of viewport
function toggleActiveSection(){}

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
document.addEventListener('DOMContentLoaded', function () {
    console.log('the DOM is ready to be interacted with!');
    createNavItems();
});

// Scroll to section on link click

// Set sections as active


