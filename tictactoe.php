<!DOCTYPE html>
<html lang="en">
<meta charset="UTF-8">
<title>Tic Tac Toe</title>
<meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="stylesheet" href="tictactoe.css">
<style>
</style>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<script src="tictactoe.js"></script>

<body>
<label id='win_text' class='nodisplay text'>WIN</label>
  <div id='outerbody'>
    <div class='row'>
      <div id='box_0_0' class='box'>
        <div id='circle_0_0' class='circle stage_1 player1'></div>
      </div>
      <div id='box_0_1' class='box'>
        <div id='circle_0_1' class='circle stage_2 player2'></div>
      </div>
      <div id='box_0_2' class='box'>
        <div id='circle_0_2' class='circle stage_3'></div>
      </div>
    </div>

    <div class='row'>
      <div id='box_1_0' class='box'>
        <div id='circle_1_0' class='circle stage_1 player1'></div>
      </div>
      <div id='box_1_1' class='box'>
        <div id='circle_1_1' class='circle stage_2 player2'></div>
      </div>
      <div id='box_1_2' class='box'>
        <div id='circle_1_2' class='circle stage_3'></div>
      </div>
    </div>
    
    <div class='row'>
      <div id='box_2_0' class='box'>
        <div id='circle_2_0' class='circle stage_1 player1'></div>
      </div>
      <div id='box_2_1' class='box'>
        <div id='circle_2_1' class='circle stage_2 player2'></div>
      </div>
      <div id='box_2_2' class='box'>
        <div id='circle_2_2' class='circle stage_3'></div>
      </div>
    </div>

  </div>
</body>

</html>