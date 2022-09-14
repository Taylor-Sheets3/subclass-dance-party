var makeFatDancer = function(top, left, timeBetweenSteps){

  // subclass of Blinky dancer
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps)

  // set node class to fat - dancer
  this.$node = $('<span class="fat-dancer"></span>')

  // blinks at half the speed
  arguments[2] = arguments[2] * 2

  // set position
  this.setPosition(top,left)
}

// pseudoclassical prototype set up
makeFatDancer.prototype = Object.create(makeBlinkyDancer.prototype)
makeFatDancer.prototype.constructor = makeFatDancer
