//import "!style!css!sass!./style.scss";

let SlideOver = function (el) {
  this.el = el;

  let maxwidth = 0;

  //Generate html
  let comparison = document.createElement('div'),
      figure     = document.createElement('figure'),
      divisor    = document.createElement('div'),
      dragger    = document.createElement('div');

      comparison.id = "comparison";
      divisor.id = "divisor";
      dragger.className = "dragger";

      divisor.appendChild(dragger);
      figure.appendChild(divisor);
      comparison.appendChild(figure);

      this.el.appendChild(comparison);

      //Set events
      this.init = function() {
        this.pos = 50;
        let th = this;
        maxwidth = comparison.offsetWidth;

        //Mousedrag
        dragger.addEventListener('mousedown', function (e) {
          //moveDivisor(e);
          document.body.addEventListener('mousemove', th.moveDivisor);
        });
        document.body.addEventListener('mouseup', function (e) {
          document.body.removeEventListener('mousemove', th.moveDivisor);
        });

        //Touch
        dragger.addEventListener('touchstart', function (e) {
          //moveDivisor(e);
          document.body.addEventListener('touchmove', th.moveDivisor);
        });
        document.body.addEventListener('touchend', function (e) {
          document.body.removeEventListener('touchmove', th.moveDivisor);
        });

        //window resize
        document.body.addEventListener('resize', function () {
          //reset
        });

        divisor.style.width = this.pos + "%";
        comparison.style.opacity = "1";
      };

    this.moveDivisor = function (e) {
        let divisor = document.getElementById('divisor');
        if(e.touches) {
          this.pos = (e.touches[0].clientX-4)/maxwidth*100;
        } else {
          this.pos = (e.clientX-4)/maxwidth*100;
        }
        if(this.pos > 100) { this.pos = 100 }
        if(this.pos < 0) { this.pos = 0 }

        divisor.style.width = this.pos + "%";
    }
}

//export default SlideOver;

/*
var Slideover = require('slideover');
var s = new Slideover(el);
*/
