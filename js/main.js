var randomOn;
var blueOn;
var pickedOn;
var trails;
var size;
//Kontrola!
//console.log("trails: " + trails + " blueOn " + blueOn + " randomOn: " + randomOn);
$(document).ready(function(){
  trails = false;
  createBoard(16);//
  showGrid();//
  blue();
  $('#inlineRadio2').trigger('click');
  $('#inlineRadio1').click(function(){
    random();
  });
  $('#inlineRadio2').click(function(){
    blue();
  });
  $('.jscolor').click(function(){
    $('#inlineRadio3').trigger('click');
    picked();
  });
  $('.btn').click(function(){
    resetCss();
    if (blueOn){
      blue();
    }
    else if (randomOn){
      random();
    }
    else if (pickedOn){
    picked();
  }
  });
  $('#pixel-width').click(function(){
    changeWidth();
  });
  $('#trails').click(function(){
    trailing();
    changeWidth()
  });
});


/* FUNCTIONS */
function createBoard (size){
  for(var i = 0; i < size * size; i++){
    $(".board").append("<div class='square'></div>");
  }
}
function changeWidth(){
  do{
    var getSize = prompt("Please, enter the size of squares 1 - 100:");
    if(getSize > 100)
      alert('Please enter size of square < 100:');
    else if (!isNaN(getSize)){
      $(".board").empty();
      createBoard(Math.round(getSize));
      var squareSize = 600/getSize;
      var squareStyle = {
          width: squareSize + 'px',
          height: squareSize + 'px'
      };
      $('.square').css(squareStyle);
    }
    else if (isNaN(getSize))
     alert('Please enter numbers!');
  }while(getSize > 100 || isNaN(getSize));

  if (blueOn){
    blue();
  }
  else if (randomOn){
    random();
  }
  else if (pickedOn){
    picked();
  }
}
function showGrid(){
  $('#show-grid').click(function(){
    $('.square').toggleClass('showBorder');
  });
}
function trailing(){
  if(!trails)
    trails = true;
  else
    trails = false;
}
function resetCss(){
  $('.square').css("background", "rgba(255,255,255,.2")
  $('.square').removeClass('hoverBlue');
  $('.square').mouseenter(function(){
      $(this).css("background", "rgba(255,255,255,.2");
  });
}

function random (){
  $('.square').mouseenter(function(){
      $(this).css('background', 'rgb(' + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')');
    });
  if(trails){
    $('.square').mouseleave(function(){
      $(this).css('background', 'rgba(255,255,255,.2)');
    });
  }
  else{
    $('.square').css('transition-duration', '0s');
    }
  return randomOn = true,
         blueOn = false,
         pickedOn = false;
}

function blue (){
  $('.square').mouseenter(function(){
    $(this).css('background', '#1A247D');
    });
  if(trails){
    $('.square').mouseleave(function(){
      $(this).css('background', 'rgba(255,255,255,.2)');
    });
  }
  else{
    $('.square').css('transition-duration', '0s');
    }
  return blueOn = true,
         randomOn = false,
         pickedOn = false;
}

function picked(jscolor){
  $('.square').mouseenter(function(){
    $(this).css('background', "#" + $('.jscolor').val());
    });

  if(trails){
    $('.square').mouseleave(function(){
      $(this).css('background', 'rgba(255,255,255,.2)');
    });
  }
  else{
    $('.square').css('transition-duration', '0s');
    }

  return pickedOn = true,
         blueOn = false,
         randomOn = false;
}
