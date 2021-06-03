//document.addEventListener('contextmenu', event => event.preventDefault());
$(document).ready(function(){
board=initializeBoard();
gplayer=1;
function Circle(y,x){
  this.player=0;
  this.stage=0;
  this.id='circle_'+y+'_'+x;
  this.increaseStage= function(){ //aca deberia mandar un AJAX xd
    if ((this.stage+1)<=3){
      this.stage+=1;
      return true;
    }
    return false;
  }
  this.setStage= function(stage){
    this.stage=stage;
  }
  this.setPlayer= function(player){
    this.player=player;
  }
  this.getStage= function(){
    return this.stage
  }
}
function initializeBoard(){
  console.log('initialize');
  let board=[];
  for(y=0;y<3;y++){
    board.push([]);
    for(x=0;x<3;x++){
      board[y].push(new Circle(y,x));
    }
  }
  return board;
}

function renderBoard(board){
  console.log('render');
  board.forEach(element => {
    element.forEach(circle => {
      $('#'+circle.id).attr('class','circle stage_'+circle.stage+' player_'+circle.player);
    });
  });
}
board=initializeBoard();
renderBoard(board)

$("[id^='box_").mousedown(function(e){
  box=$(this).attr('id').split('_');
  if(e.which === 3){
    click(box[1],box[2],gplayer);
  }
  if (e.which === 1){
    click(box[1],box[2],gplayer);
  }
})
function click(y,x,player){
  if(board[y][x].increaseStage()){
    board[y][x].setPlayer(player);
    if(player==1){
      gplayer=2;
    }else{
      gplayer=1;
    }
  }
  renderBoard(board);
  whoWon=evaluateWin( y, x, player );
  if(whoWon!=0){
    $('#win_text').addClass('player_'+whoWon+'_text');
    $('#win_text').removeClass('nodisplay');
    $('#outerbody').addClass('noclick');
  }
}
$('#win_text').on('click',function(){
  board=initializeBoard();
  renderBoard(board);
  $('#win_text').attr('class','nodisplay text');
  $('#outerbody').removeClass('noclick');
})
function evaluateWin( y, x, player ){
  n=3;
        //check row
        for(i = 0; i < n; i++){
            if(board[y][i].player != player)
                break;
            if(i == n-1){
                return player;
            }
        }
        //check row
        for(i = 0; i < n; i++){
            if(board[i][x].player != player)
                break;
            if(i == n-1){
              return player;
            }
        }
        //check diag
        if(x == y){
            for(i = 0; i < n; i++){
                if(board[i][i].player != player)
                    break;
                if(i == n-1){
                  return player;
                }
            }
        }
        //check anti diag 
        if(x + y == n - 1){
            for(i = 0; i < n; i++){
                if(board[i][(n-1)-i].player != player)
                    break;
                if(i == n-1){
                  return player;
                }
            }
        }
        return 0;
}
})