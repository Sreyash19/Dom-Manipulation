

const accordion = document.getElementsByClassName('content-container');

for(i=0; i<accordion.length; i++){

    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active'); 
        // this function reference the object that is calling the function
        //Toggle
        /* If the element has a class, the classList.toggle method behaves like classList.remove
         and the class is removed from the element. And if the element does not have 
        the specified class, then classList.toggle, just like classList.add, adds this class to the element.*/
    } 
)};