var anchorElements = document.getElementsByTagName("a");

//convert to array
anchorElements = Array.from(anchorElements);

anchorElements.map(element => {
  element.addEventListener(
    "mouseenter",
    function(event) {
      // what happens when user hover overs anchor tag
      let classes = event.target.classList;
      //   washHands(classes);
    },
    false
  );
});

function washHands(classes) {
  // move hands by switch images
  var limiter = 2;

  for (var counter = 0; counter < limiter; ++counter) {
    setTimeout(function() {
      classes.add("washing_hand_out");
    }, 500);

    setTimeout(function() {
      classes.add("washing_hand_in");
    }, 500);

    classes.remove("washing_hand_in");
    classes.remove("washing_hand_out");
  }
}
