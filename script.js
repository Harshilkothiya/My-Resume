document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
  
    function highlightNav() {
      let index = sections.length;

      console.log("index",index);
  
      while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
        console.log("sec", sections[index])
        console.log("sec", sections[index].offsetTop)
      navLinks.forEach((link) => link.classList.remove('active'));
      navLinks[index].classList.add('active');
    }
  
    // highlightNav();
    window.addEventListener('scroll', highlightNav);
  });
  