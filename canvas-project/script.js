var canvas = document.getElementById("board");
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");
const mouse = {
    x: undefined,
    y: undefined
}
var a = 0;
var b = 0;
var cont = 1; 
var d = 0;
var e = 0;

function generate_matrix(weight){
    matrix = [];


    for(let i = 0; i < 10; i++){
        matrix[i] = [];
        for(let j = 0; j < 12; j++){
            matrix[i][j] = Math.round(Math.random()+weight/100);
        }
    }
    return matrix;

}


function numberRange (start, end) {
    return new Array(end - start).fill().map((d, i) => i + start);
}
function run_length_encoder(matrix){
    let ct = 0;
    let encoded_matrix = [];
    let cur_element = matrix[0][0];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] === cur_element){
                ct+=1;
                
            }
            
            else{
                list = [cur_element, ct];
                encoded_matrix.push(list);
                ct = 1;
                ;};
            cur_element = matrix[i][j];};};
return encoded_matrix;}

function animate(){
    c.clearRect(0,0,canvas.width,canvas.height);
    e++;
    c.beginPath();
    for (let i = 0; i < matrix.length+1; i++) {
        c.moveTo(i*canvas.width/20 + 3*canvas.width/10, canvas.height/10);
        c.lineTo(i*canvas.width/20 + 3*canvas.width/10, 7*canvas.height/10);

    }
    for (let j = 0; j < matrix[0].length+1; j++) {
        c.moveTo(3*canvas.width/10 , j*canvas.height/20+canvas.height/10);
        c.lineTo(16*canvas.width/20 , j*canvas.height/20+canvas.height/10);    
    }
    c.strokeStyle = "white";
    c.stroke();

    c.font = `10px Times`;
    c.textAlign = "center";
    c.fillStyle = "white";
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i] .length; j++) {
            c.fillText(matrix[i][j], (i-1)*canvas.width/20 + 3*canvas.width/8, j*canvas.height/20+canvas.height/8+10);}}
        
    
    if (a < matrix.length - 1 & e % 40 ==0){
        if (b < matrix[0].length -1){ 
            b+=1;           
            if(matrix[a][b] == d){
                cont+=1;
                ;}
            else if (matrix[a][b] != d){
                cont = 1;};
            
            ;}
        else{
            a+=1;
            b=0;
        };}
    d = matrix[a][b]
    c.fillText(`(${d} , ${cont})`, 1/8*canvas.width, 1/4*canvas.height);
        

        

    c.strokeStyle = "white";
    c.stroke();
    c.beginPath();
    
    c.moveTo(a*canvas.width/20 + 3*canvas.width/10, b*canvas.height/20+canvas.height/10);
    c.lineTo((a+1)*canvas.width/20 + 3*canvas.width/10, b*canvas.height/20+canvas.height/10);
    c.moveTo(a*canvas.width/20 + 3*canvas.width/10, (b+1)*canvas.height/20+canvas.height/10);
    c.lineTo((a+1)*canvas.width/20 + 3*canvas.width/10, (b+1)*canvas.height/20+canvas.height/10);
    c.moveTo(a*canvas.width/20 + 3*canvas.width/10, b*canvas.height/20+canvas.height/10);
    c.lineTo(a*canvas.width/20 + 3*canvas.width/10, (b+1)*canvas.height/20+canvas.height/10);
    c.moveTo((a+1)*canvas.width/20 + 3*canvas.width/10, b*canvas.height/20+canvas.height/10);
    c.lineTo((a+1)*canvas.width/20 + 3*canvas.width/10, (b+1)*canvas.height/20+canvas.height/10);
    c.strokeStyle = "red";
    c.stroke();
    requestAnimationFrame(animate);}

var matrix = generate_matrix(30);
var encoded_matrix = run_length_encoder(matrix);
animate();

