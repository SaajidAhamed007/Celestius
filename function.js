document.addEventListener("DOMContentLoaded", () => {
    const projectCards = document.querySelectorAll(".project-card");
    const animate=document.querySelectorAll(".animate");
    const feature=document.querySelectorAll(".feature-card");
    const spinning=document.querySelectorAll(".event-card");
    
  
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      projectCards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        
  
        if (cardTop < windowHeight ) {
          card.classList.add("visible");
        }else {
          card.classList.remove('visible');
        } 
      });
  
      animate.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
  
        if (elementTop < windowHeight) {
            element.classList.add('active');
        }else {
            element.classList.remove('active');
        } 
    });
  
    feature.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
  
        if (elementTop < windowHeight) {
            element.classList.add('active');
        }else {
            element.classList.remove('active');
        } 
    });
  
    spinning.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
  
        if (elementTop < windowHeight) {
            element.classList.add('active');
        }else {
            element.classList.remove('active');
        } 
    });
  
  
    };
  
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on page load to handle already visible cards
  });
  
  var sidenav=document.querySelector(".sidenavbar")
  function shownav(){
    sidenav.style.right="0"
  }
  function hidenav(){
      sidenav.style.right="-60%"
  }
  