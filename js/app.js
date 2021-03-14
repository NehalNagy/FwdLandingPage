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
     unorderedList = document.getElementById('navbar__list');
     const fragment = document.createDocumentFragment(); 

    for(section of sections){
        let itemText=section.getAttribute('data-nav');//comes from data-nav attribute
        let itemTarget=section.getAttribute('id');//comes from the section Id attribute
        
        let listItem= document.createElement('li');
        let listItemA= document.createElement('a');
        listItemA.innerText=itemText;
        listItemA.setAttribute('href',`#${itemTarget}`);
        listItemA.style.textDecoration='none';
        listItem.appendChild(listItemA);
        fragment.appendChild(listItem);
        console.log("item text: "+ itemText+" item id: " + itemTarget);
    }
    unorderedList.appendChild(fragment);
}

//2.Toggle style of active section (in menu and in the section view)
// Add class 'active' to section when near top of viewport
function toggleActiveSection(){

}

function toggleActiveMenuItem(activeItem){
     //remove old active class
     let oldActive=document.querySelector('.active-menu-item');
     if(oldActive)
      oldActive.classList.remove('active-menu-item');
      console.log(oldActive);
      activeItem.classList.add('active-menu-item');
}


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


// Set sections as active
document.querySelector('#navbar__list').addEventListener('click', function (evt) {
    toggleActiveMenuItem(evt.target);
});
//scroll event
    //hide menu when scroll
    //add circles to active section -- by using your-active-class based on which section in viewport
    document.addEventListener('scroll',function(){
        //1.change menu when scrolling ...
        //check that you are not in the top of the page:
        let headerSection = document.querySelector('.page__header');
        headerSection.style.backgroundColor='black';
        if(window.scrollY==0 && window.scrollX==0){
            headerSection.style.backgroundColor='';
          }
    });
//onclick listener for go to top button
