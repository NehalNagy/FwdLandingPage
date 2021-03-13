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
let navItemObj={
    itemId:'',
    itemText:'',
    itemTarget:'',
    isActive:false
}
let navItemsList=[];
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
    //1-get all sections
    function getAllSections(){
        return allNavSections=document.querySelectorAll('section');
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
function createNavItems(){}

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

// Scroll to section on link click

// Set sections as active


