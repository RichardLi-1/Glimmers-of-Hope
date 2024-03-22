console.log("from script file");

document.addEventListener('scroll', function() {
    var scrolled = window.pageYOffset;
    var rate = scrolled * -0.2; // Adjust the 0.5 to control the speed of the parallax effect
  
    document.querySelector('.sunset').style.backgroundPosition = 'center ' + rate + 'px';
  });
  
  