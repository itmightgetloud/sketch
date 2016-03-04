$(document).ready(function(){
  createBoard(16);
});

function createBoard (size){
  var tab = [];
  for(var i = 1; i < size * size; i++){
    tab[i] = "<div class='square'></div>";
  }
  $(".board").append(tab.join(''));
}
