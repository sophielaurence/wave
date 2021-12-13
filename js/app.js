let heading = document.querySelectorAll('h2');
let accordionContent = document.querySelector('.accordion-content');


heading.forEach(function(h){
  h.addEventListener('click',function(){
    if( h.classList.contains('curr') ){
      // if current selection is open, close accordion
      h.nextElementSibling.classList.remove('more');
      // and then remove current status
      h.classList.remove('curr');
    } else {
      // if current selection is not open
      // remove current class from all headings
      h.classList.remove('curr');
      // add class to the current selection
      h.classList.add('curr');
      // remove class from all accordion content
      accordionContent.classList.remove('more');
      // add class to the current accordion content
      h.nextElementSibling.classList.add('more');
    }
  })
})