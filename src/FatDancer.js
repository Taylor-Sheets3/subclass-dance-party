var makeFatDancer = function(top, left, timeBetweenSteps){
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps)
  this.$node = $('<span class="fat-dancer"></span>')
  arguments[2] = arguments[2] * 2
  console.log('this is top and left',top,left)
  console.log(this.setPosition)
  this.setPosition(top,left)
}

makeFatDancer.prototype = Object.create(makeBlinkyDancer.prototype)
makeFatDancer.prototype.constructor = makeFatDancer
