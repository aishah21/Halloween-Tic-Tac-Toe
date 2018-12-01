$(document).ready(function() {
    var pumpkinWin =0 ; 
   var hatWin =0 ; 
    var $n = $('td');    
    console.log($n);
    var arrpumpkin =[];
    var arrHat = [];
    
    var $checkPumpkin = function(){
        console.log(arrpumpkin);
        if(  arrpumpkin.indexOf('q') != -1  && arrpumpkin.indexOf('w') != -1 &&  arrpumpkin.indexOf('e') != -1  ){
            swal( 'pumpkin win !');
            pumpkinWin++ ;
            $winer();
           $replay();
        } else if( arrpumpkin.indexOf('a') != -1  && arrpumpkin.indexOf('s') != -1 &&  arrpumpkin.indexOf('d') != -1 ){
            swal( 'pumpkin win !');
            pumpkinWin++ ;
            $winer();
           $replay();
        } else if( arrpumpkin.indexOf('z') != -1 &&  arrpumpkin.indexOf('x') != -1 &&  arrpumpkin.indexOf('c') != -1 ){
            swal( 'pumpkin win !');
            pumpkinWin++ ;
            $winer();
            $replay();
        } else if( arrpumpkin.indexOf('q') != -1 && arrpumpkin.indexOf('a') != -1 &&  arrpumpkin.indexOf('z') != -1 ){
            swal( 'pumpkin win !');
            pumpkinWin++ ;
            $winer();
            $replay();
        } else if( arrpumpkin.indexOf('w') != -1 && arrpumpkin.indexOf('s') != -1 &&  arrpumpkin.indexOf('x') != -1 ){
            swal( 'pumpkin win !');
            pumpkinWin++ ;
            $winer();
            $replay();
        } else if( arrpumpkin.indexOf('e') != -1 && arrpumpkin.indexOf('d') != -1 &&  arrpumpkin.indexOf('c') != -1 ){
            swal( 'pumpkin win !');
            pumpkinWin++ ;
            $winer();
            $replay();
        } else if( arrpumpkin.indexOf('q') != -1 && arrpumpkin.indexOf('s') != -1 &&  arrpumpkin.indexOf('c') != -1 ){
            swal( 'pumpkin win !');
            pumpkinWin++ ;
            $winer();
            $replay();
        } else if( arrpumpkin.indexOf('e') != -1 && arrpumpkin.indexOf('s') != -1 &&  arrpumpkin.indexOf('z') != -1 ){
            swal( 'pumpkin win !');
            pumpkinWin++ ;
            $winer();
            $replay();
        } 
        
}
       

    var $checkHat = function(){
        
        console.log(arrHat);
        console.log(arrHat.indexOf('q'));
        if(  (arrHat.indexOf('q') != -1)  && (arrHat.indexOf('w') != -1) &&  (arrHat.indexOf('e') != -1) ){
           alert( 'Hat win !');
           hatWin++ ;
           $winer();
           $replay();
        } else if( arrHat.indexOf('a') != -1  && arrHat.indexOf('s') != -1 &&  arrHat.indexOf('d') != -1 ){
            swal( 'Hat win !');
            hatWin++ ;
            $winer();
            $replay();
        } else if( arrHat.indexOf('z') != -1 &&  arrHat.indexOf('x') != -1 &&  arrHat.indexOf('c') != -1 ){
            swal( 'Hat win !');
            hatWin++ ;
             $winer();
             $replay();
        } else if( arrHat.indexOf('q') != -1 && arrHat.indexOf('a') != -1 &&  arrHat.indexOf('z') != -1 ){
            swal( 'Hat win !');
            hatWin++ ;
            $winer();
            $replay();
        } else if( arrHat.indexOf('w') != -1 && arrHat.indexOf('s') != -1 &&  arrHat.indexOf('x') != -1 ){
            swal( 'Hat win !');
            hatWin++ ;
            $winer();
            $replay();
        } else if( arrHat.indexOf('e') != -1 && arrHat.indexOf('d') != -1 &&  arrHat.indexOf('c') != -1 ){
            swal( 'Hat win !');
            hatWin++ ;
            $winer();
            $replay();
        } else if( arrHat.indexOf('q') != -1 && arrHat.indexOf('s') != -1 &&  arrHat.indexOf('c') != -1 ){
            swal( 'Hat win !');
            hatWin++ ;
            $winer();
            $replay();
        } else if( arrHat.indexOf('e') != -1 && arrHat.indexOf('s') != -1 &&  arrHat.indexOf('z') != -1 ){
            swal( 'Hat win !');
            hatWin++ ;
            $winer();
            $replay();
           
        } 
    
       
    }

    
    
        

    var count = 0;
    var $pumpkin = function(){
        var $pumpkinDiv  = $('<div/>').addClass("box").css({ 
            'content':'url("imags/pumpkin.png")',
            'width':'60px',
            'height':'100px',
            'right': '300px'
        });
      
        
        var randomeIndex = Math.floor((Math.random() * 8) + 1);
       var x = $('#board td').eq(randomeIndex);
       if($(x).find('div').length == 0){
        count++;
        console.log(count);
        x.append($pumpkinDiv);
        console.log("pumpkin",$(x).attr('id'));
        arrpumpkin.push($(x).attr('id'));
       }
        else if (count<4) {
            $pumpkin();
        }
   
       $checkPumpkin();
    }
       
     $( "td" ).click(function() {
         console.log($(this));
        var $hatDiv = $('<div/>').addClass("box");
        $hatDiv.css({ 
            'content':'url("imags/hat.png")',
            'width':'60px',
            'height':'100px',
            'right': '300px'
        
        });
        if($(this).find('div').length == 0){
            
           var y = $(this).append($hatDiv);
           arrHat.push($(y).attr('id'));
           console.log('Hat',$(y).attr('id'));
           
        }
        $pumpkin();
        $checkHat();
        console.log(arrpumpkin.length);
        console.log(arrHat.length);
        if((arrpumpkin.length == 4) && (arrHat.length == 5) ){
            
            $replay();
            swal( 'Tie !');
        }
       
    });  
   
    
  var $winer = function(){
//$('.rPumpkin').append(document.createTextNode(pumpkinWin));
//$('.rHant').append(document.createTextNode(hatWin));
$('.rPumpkin').text(pumpkinWin);
$('.rHant').text(hatWin);
  }

//$winer();

var $replay = function(){
    arrpumpkin.length = 0;
    console.log(arrpumpkin);
    arrHat.length = 0;
    console.log(arrHat);
    var r = $('#board td');
    console.log("The lenght after rep "+ arrpumpkin.length);
    $( ".box" ).remove();
    

}
    

})