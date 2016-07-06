# Slideover
Before/after image slider

### Install

```
npm install --save slideover
```

### Use

```
  var s = require('slideover');

  <div id="randomelement"> </div>

  var s = new SlideOver(document.getElementById('randomelement'));
  s.init({
    imageTwo: 'https://c2.staticflickr.com/4/3944/15526602308_b4751579ff_c.jpg',
    imageOne: 'https://c1.staticflickr.com/1/447/18776343002_357f8952ba_c.jpg'
  });
```
