// Creates and returns a new this object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;


  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  //keeping track of timebetweensteps parameter
  this.timeBetweenSteps = timeBetweenSteps;

  // now that we have defined the instance, we can start setting up important parts of it by calling the methods we wrote
  this.step();

  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
};

makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
  //loop through windows.dancer
  for (let i = 0; i < window.dancers.length; i++){
    let styleSettings = {
      'background': "white"
    }
    // if node is fat dancer and within 50 px of top and left
    let top1 = window.dancers[i].top;
    let left1 = window.dancers[i].left;
    underTheRoot = Math.abs((top1 - top)**2 + (left1 - left) ** 2)
    distance = Math.sqrt(underTheRoot);
    if (distance < 50 && distance > 0){
      this.$node.css(styleSettings)
    }
  }

  //
};
