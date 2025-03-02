
function setupAccordion(accordionClass){
    //all accordions within the specific class
    const accordions = document.querySelectorAll(`${accordionClass} .accordion`);
    const contents = document.querySelectorAll(`${accordionClass} .accordion-content`);

    //iterate through each accordion
    accordions.forEach(function(accordion) {

        //the content inside each accordion
        const content = accordion.querySelector(".accordion-content");

        // each accordion will respond to mouse click (even after forEach() runs)
        accordion.addEventListener("click", function() {
            //const button = accordion.querySelector("button");
        
            //when clicked, hide/display
            if (accordion.getAttribute("aria-expanded") === "false") {
            
                //close all sections before opening one
                contents.forEach(function(content){
                    content.style.display = "none";
                });
                accordions.forEach(function(accordion) {
                    accordion.setAttribute("aria-expanded", "false");  
                });

                //set visibility value to true/false then toggle actual visibility with display
                accordion.setAttribute("aria-expanded", "true");  
                content.style.display = "block";
            } else {
                accordion.setAttribute("aria-expanded", "false");  
                content.style.display = "none";  
            }
        });
});
}

//expand function
function expandAll(accordionClass){
    const expandButton = document.querySelector(`${accordionClass} .accordion-controller .expand`);
    const accordions = document.querySelectorAll(`${accordionClass} .accordion`);
    const contents = document.querySelectorAll(`${accordionClass} .accordion-content`);
    expandButton.addEventListener("click", function() {
        contents.forEach(function(content){
            content.style.display = "block";
        });
        accordions.forEach(function(accordion) {
            accordion.setAttribute("aria-expanded", "true");  
        });
    });
}

//collapse function
function collapseAll(accordionClass){
    const collapseButton = document.querySelector(`${accordionClass} .accordion-controller .collapse`);
    const accordions = document.querySelectorAll(`${accordionClass} .accordion`);
    const contents = document.querySelectorAll(`${accordionClass} .accordion-content`);
    collapseButton.addEventListener("click", function() {
        contents.forEach(function(content){
            content.style.display = "none";
        });
        accordions.forEach(function(accordion) {
            accordion.setAttribute("aria-expanded", "false");  
        });
    });
}

//main program
setupAccordion(".joke");
setupAccordion(".slang");
expandAll(".joke");
expandAll(".slang");
collapseAll(".joke");
collapseAll(".slang");




