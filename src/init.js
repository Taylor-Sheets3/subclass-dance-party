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


<<<<<<< HEAD
  $('.FatDancer').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
    * buttons on dancefloor.html. You should only need to make one small change to it.
    * As long as the "data-dancer-maker-function-name" attribute of a
    * class="addDancerButton" DOM node matches one of the names of the
    * maker functions available in the global scope, clicking that node
    * will call the function to make the dancer.
    */

    /* dancerMakerFunctionName is a string which must match
    * one of the dancer maker functions available in global scope.
    * A new object of the given type will be created and added
    * to the stage.
    */

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
=======
$('.FatDancer').on('click', function(event) {
  var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
>>>>>>> 963793294b0c0661a86422e97c2409e6e40d24e3

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

  $('.starDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
    * buttons on dancefloor.html. You should only need to make one small change to it.
    * As long as the "data-dancer-maker-function-name" attribute of a
    * class="addDancerButton" DOM node matches one of the names of the
    * maker functions available in the global scope, clicking that node
    * will call the function to make the dancer.
    */

    /* dancerMakerFunctionName is a string which must match
    * one of the dancer maker functions available in global scope.
    * A new object of the given type will be created and added
    * to the stage.
    */

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

<<<<<<< HEAD

=======
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
>>>>>>> 963793294b0c0661a86422e97c2409e6e40d24e3
