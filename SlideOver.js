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

      figure.appendChild(divisor);
      comparison.appendChild(figure);
      comparison.appendChild(dragger);

      this.el.appendChild(comparison);

      //Set events
      this.init = function(settings = {
        imageOne: null,
        imageTwo: null
      }) {

        //Go nuts if images are missing
        if(!settings.imageOne || !settings.imageTwo) {
          throw new Error('Gooby Pls, images are missing');
        }

        this.pos = 50;
        let th = this,
        tsx,
        tsy;

        //Promise some images
        let p1 = new Promise((resolve, reject) => {
          let img1 = new Image();
          img1.onload = function () {
            resolve(img1);
          }
          img1.src=settings.imageOne;
        }),
        p2 = new Promise((resolve, reject) => {
          let img2 = new Image();
          img2.onload = function () {
            resolve(img2);
          }
          img2.src=settings.imageTwo;
        })

        Promise.all([p1,p2]).then(img => {
          divisor.appendChild(img[0]);
          figure.appendChild(img[1]);
          maxwidth = this.el.offsetWidth;
          img[0].style.width = maxwidth+'px';
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
            tsx = e.touches[0].clientX;
            tsy = e.touches[0].clientY;
            document.body.addEventListener('touchmove', moveDivisor);
          });
          document.body.addEventListener('touchend', function (e) {
            document.body.removeEventListener('touchmove', moveDivisor);
          });

          //window resize
          document.body.addEventListener('resize', function () {
            //reset
            divisor.style.width = this.pos + "%";
            dragger.style.left = this.pos + "%";
          });

          divisor.style.width = this.pos + "%";
          dragger.style.left = this.pos + "%";
          comparison.style.opacity = "1";
        })
      };

    var moveDivisor = function (e) {
        let divisor = document.getElementById('divisor');
        if(e.touches) {
          if ((Math.abs(e.changedTouches[0].clientX - tsx)) / Math.abs(e.changedTouches[0].clientY - tsy) > 1) {
            e.preventDefault();
          }
          this.pos = (e.touches[0].clientX-4)/maxwidth*100;
        } else {
          this.pos = (e.clientX-4)/maxwidth*100;
        }
        if(this.pos > 100) { this.pos = 100 }
        if(this.pos < 0) { this.pos = 0 }

        divisor.style.width = this.pos + "%";
        dragger.style.left = this.pos + "%";
    }
}

//export default SlideOver;

/*
var Slideover = require('slideover');
var s = new Slideover(el);
*/
