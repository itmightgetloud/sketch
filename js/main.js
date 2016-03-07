$(document).ready(function(){
  createBoard(16);
  showGrid();
  hoverBlue();
  $('#inlineRadio2').click(function(){
    clearBoard();
    hoverBlue();
  });
  $('#inlineRadio1').click(function(){
    clearBoard();
    hoverRandom();
  });
  $('.btn, #pixel-width').click(function(){
    clearBoard();
  });
});

function createBoard (size){
  for(var i = 0; i < size * size; i++){
    $(".board").append("<div class='square'></div>");
  }
}
function hoverRandom (){
  $('.square').mouseenter(function(){
      $(this).css('background', 'rgb(' + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')');
    });
  $('.square').mouseleave(function(){
      $(this).css('background', 'rgba(255,255,255,.7)');
    });
}
function hoverBlue (){
  $('.square').mouseenter(function(){
    $(this).addClass('hoverBlue');
    });
  $('.square').mouseleave(function(){
    $(this).removeClass('hoverBlue');
    });
}

function clearBoard(){
    do{
      var getSize = prompt("Please, enter the size of squares:");
      if(getSize > 100)
        alert('Please enter size of square < 100:');
      else{
        if (!isNaN(getSize)){
          $(".board").empty();
          createBoard(Math.round(getSize));
        };

        var squareSize = 600/getSize;
        var squareStyle = {
        width: squareSize + 'px',
        height: squareSize + 'px'
        };

        $('.square').css(squareStyle);
      }
    }while(getSize > 100);
}

function showGrid(){
  $('#show-grid').click(function(){
    $('.square').toggleClass('dupa');
  });

}

/*
do zrobienia:
-zostawianie koloru (i dodanie przyciksu)
-zapamietanie ustawien po kliknieciu "reset"
