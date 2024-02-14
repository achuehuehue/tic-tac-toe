let matrix = [['','',''],['','',''],['','','']];
let player1;
let player2;
let currentPlayer=true;

function resetGame(){
    matrix = [['','',''],['','',''],['','','']];
    renderGame();
}

function renderGame(){
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(matrix[i][j]==='X'){
                const cell = document.querySelector(`.cell-${i}${j}`);
                cell.innerHTML='<img src="cross-removebg-preview.png" class="size">';
            }
            else if(matrix[i][j]==='O'){
                const cell= document.querySelector(`.cell-${i}${j}`);
                cell.innerHTML='<img src="null-removebg-preview.png" class="size">';
            }
            else{
                const cell= document.querySelector(`.cell-${i}${j}`);
                cell.innerHTML='';

            }
        }
    }
}



function updateMatrix(i,j){
    if(matrix[i][j]===''){
    if(currentPlayer){
        matrix[i][j]=player1;
    }
    else{
        matrix[i][j]=player2;
    }
    renderGame();
    
    check();
    currentPlayer=(!currentPlayer);
    }
}

function checkRows(){
    for(let i=0;i<3;i++){
        let temp=matrix[i][0];
        if(temp===''){
            continue;
        }
        let num=1;
        for(let j=1;j<3;j++){
            if(matrix[i][j]===temp){
                num+=1;
            }

        }
        if(num===3){
            if(currentPlayer){
                alert("Player 1 WINS!!!!!");
            }
            else{
                alert("Player 2 WINS!!!!!");
            }
            return true;
        }
    }
    return false;

}

function checkColumns(){
    for(let i=0;i<3;i++){
        let temp=matrix[0][i];
        if(temp===''){
            continue;
        }
        let num=1;
        for(let j=1;j<3;j++){
            if(matrix[j][i]===temp){
                num+=1;
            }

        }
        if(num===3){
            if(currentPlayer){
                alert("Player 1 WINS!!!!!");
            }
            else{
                alert("Player 2 WINS!!!!!");
            }
            return true;
        }
    }
    return false;
}

function checkDiagonal(){
    if(matrix[0][0]!='' && matrix[0][0]===matrix[1][1] && matrix[0][0]===matrix[2][2] ){
        if(currentPlayer){
            alert("Player 1 WINS!!!!!");
        }
        else{
            alert("Player 2 WINS!!!!!");
        }
        return;
    }
    else if(matrix[0][2]!='' && matrix[0][2]===matrix[1][1] && matrix[0][2]===matrix[2][0] ){
        if(currentPlayer){
            alert("Player 1 WINS!!!!!");
        }
        else{
            alert("Player 2 WINS!!!!!");
        }
        return;
    }
    
}

function check(){
    if(!checkRows()){
        if(!checkColumns()){
            checkDiagonal();
        }
    }
}




