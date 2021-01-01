
var win = $(".boxhid").text();

var random = Math.floor((Math.random() + 0.1 ) * 3000 + 6000);
console.log(random);
var correctNum = false;
var num = 0;
var timer = 100;
console.log(correctNum);
var letter = ["a","b","c","d","e","f","g","h","i","j",'k','l','m','n','o','p','q','r','s','t',"u","v","w","x"];

// I replaced .box for .overlay
var staringLight = setInterval(blinding, 100);
function blinding(){
   $(`.overlay:contains(${letter[num]})`).toggleClass("selected");
  if( num < 24){
    num++;
  } else {
    $(".overlay").removeClass("selected");
    num = 0;
  };
};

var start = setInterval(begin, random);
function begin(){
  clearTimeout(staringLight);
  var setTime = setInterval(variable , timer);
  var interval = setInterval(increment, timer);

  function increment(){
    $(`.overlay:contains(${letter[num]})`).toggleClass("selected");
    if( num < 24){
      num++;
    } else {
      $(".overlay").removeClass("selected");
      num = 0;
    };
  };
  function variable(){
    if (num == win){
      correctNum = true;
      console.log("winner is " + num);

      // $(`.overlay:contains(${letter[win]})`).css('background-color', 'red');
      $(`.overlay:contains(${letter[num]})`).css('background-color', 'rgba(255,0,0,0.6)');
    };
    $(".overlay").removeClass("selected");
    if (correctNum == true){
      clearInterval(setTime);
      clearInterval(interval);
      clearTimeout(start);
    };
  };
}
