var SlideOver = function (el) {
  this.el = el;

  //Generate html
  let comparison = document.createElement('div'),
      figure     = document.createElement('figure'),
      divisor     = document.createElement('div'),
      dragger     = document.createElement('div');

      comparison.id = "comparison";
      divisor.id = "divisor";
      dragger.className = "dragger";

      divisor.appendChild(dragger);
      figure.appendChild(divisor);
      comparison.appendChild(figure)

      this.el.appendChild(comparison);

    //Set events
    window.onload = function() {
      maxwidth = comparison.offsetWidth;

      //Mousedrag
      dragger.addEventListener('mousedown', function (e) {
        //moveDivisor(e);
        document.body.addEventListener('mousemove', moveDivisor);
      });
      document.body.addEventListener('mouseup', function (e) {
        document.body.removeEventListener('mousemove', moveDivisor);
      });

      //Touch
      dragger.addEventListener('touchstart', function (e) {
        //moveDivisor(e);
        document.body.addEventListener('touchmove', moveDivisor);
      });
      document.body.addEventListener('touchend', function (e) {
        document.body.removeEventListener('touchmove', moveDivisor);
      });

      //window resize
      document.body.addEventListener('resize', function () {
        //reset
      });

      divisor.style.width = pos + "%";
      comparison.style.opacity = "1";
    };
}

Slideover.prototype.moveDivisor = function (e) {
  if(e.touches) {
    pos = (e.touches[0].clientX-4)/maxwidth*100;
  } else {
    pos = (e.clientX-4)/maxwidth*100;
  }
  if(pos > 100) { pos = 100 }
  if(pos < 0) { pos = 0 }
  divisor.style.width = pos + "%";
}


module.exports = SlideOver;

/*
var Slideover = require('slideover');
var s = new Slideover(el);
*/
