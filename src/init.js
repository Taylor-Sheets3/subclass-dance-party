$(document).ready(function() {
  window.dancers = [];

  // add new button
  $('.floatLeftButton').on('click', function(event) {
    //iterate through array
    for (var i = 0; i < window.dancers.length; i ++) {
      let top = $("body").height() * Math.random();
      let left = 0;
      window.dancers[i].setPosition(top, left);
    }
  })

  // add new button
  $('.floatRightButton').on('click', function(event) {
    //iterate through array
    for (var i = 0; i < window.dancers.length; i ++) {
      let top = $("body").height() * Math.random();
      let left = $("body").width();
      window.dancers[i].setPosition(top, left);
    }
  })



  $('.addDancerButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });


$('.FatDancer').on('click', function(event) {
  var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

  // get the maker function for the kind of dancer we're supposed to make
  var dancerMakerFunction = window[dancerMakerFunctionName];

  // make a dancer with a random position

  var dancer = new dancerMakerFunction(
    $("body").height() * Math.random(),
    $("body").width() * Math.random(),
    Math.random() * 1000
  );
  $('body').append(dancer.$node);
  window.dancers.push(dancer);
  });

});

$('.starDancerButton').on('click', function(event) {
  var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

  // get the maker function for the kind of dancer we're supposed to make
  var dancerMakerFunction = window[dancerMakerFunctionName];

  // make a dancer with a random position

  var dancer = new dancerMakerFunction(
    $("body").height() * Math.random(),
    $("body").width() * Math.random(),
    Math.random() * 1000
  );
  $('body').append(dancer.$node);
  window.dancers.push(dancer);
  });
