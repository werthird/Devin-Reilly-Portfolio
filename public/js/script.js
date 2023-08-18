console.log( 'Connected');
// Connection was successfull!


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      entry.target.classList.add('show');
      // entry.target.classList.remove('hide');
    } 
    else {
      entry.target.classList.remove('show');
      // entry.target.classList.add('hide');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hide');
hiddenElements.forEach((el) => observer.observe(el));