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
var matrix = generate_matrix(30);
var encoded_matrix = run_length_encoder(matrix);
window.addEventListener("resize",function(){
    canvas.width = window.innerWidth ;
    canvas.height = window.innerHeight ;
    gh_font_size = 20*canvas.width/1600;
    gh_font_size_2 = 16*canvas.width/1600;
    min_font_size = 16*canvas.width/1600;
    max_font_size = 20*canvas.width/1600;
    title_font_size = 40*canvas.width/1600;
    subtitle_font_size = 27*canvas.width/1600; 
    text_font_size = 20*canvas.width/1600; 
    animate();});
//

function generate_matrix(weight){
    matrix = [];


    for(let i = 0; i <= 10; i++){
        matrix[i] = [];
        for(let j = 0; j <= 12; j++){
            matrix[i][j] = Math.round(Math.random()+weight/100);
        }
    }
    return matrix;

}

canvas.addEventListener("mousemove", function(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    if( mouse.x >  184*canvas.width/200 & mouse.y >  97*canvas.height/100 ){
        gh_growth = 0.5;
        document.body.style.cursor = 'pointer';


    }
    else if (mouse.x > 4*canvas.width/10 & mouse.x < 6*canvas.width/10 & mouse.y >  11.75*canvas.height/20 & mouse.y <  13.75*canvas.height/20 & count_title > 1400 & but_press){
        document.body.style.cursor = 'pointer'        
    }
    else {
        gh_growth = 0;
        document.body.style.cursor = 'default';}
}
);
canvas.addEventListener("click", function(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    if( mouse.x >  184*canvas.width/200 & mouse.y >  97*canvas.height/100 ){
        window.open(
            'https://github.com/guilherme-melo',
            '_blank' // <- This is what makes it open in a new window.
          );}

    if( mouse.x > 4*canvas.width/10 & mouse.x < 6*canvas.width/10 & mouse.y >  11.75*canvas.height/20 & mouse.y <  13.75*canvas.height/20 & count_title > 1400 & but_press){
        but_press = false;
        break_anim = true;
    }

});

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        count_title += 200;
    };};
    
async function loadFonts() {
    const font = new FontFace('JetBrains', 'url(fonts/JetBrainsMono-VariableFont_wght.ttf)');
    await font.load();

    const font2 = new FontFace('HemiHead', 'url(fonts/hemi head bd it.ttf)');
    await font2.load();
    document.fonts.add(font2);
    document.body.classList.add('fonts-loaded');
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
                ;}
            console.log(ct);
            cur_element = matrix[i][j];
            console.log(cur_element);
                

    
};};
return encoded_matrix;}
function set_variables() {
    gh_font_size = canvas.width/80;
    gh_font_size_2 = canvas.width/100;
    min_font_size = canvas.width/100;
    max_font_size = canvas.width/80;
    gh_growth = 0;
    pi = Math.PI;
    title_font_size = 35*canvas.width/1600;
    subtitle_font_size = 24*canvas.width/1600;
    text_font_size = 20*canvas.width/1600; 
    count = 0;
    alpha_t=0;
    title_full = "Run Legth Encoding Algorithm."
    title = "";
    subtitle_full = "Canvas-Animation:";
    subtitle = "";
    bar_x = canvas.width/2;
    bar_y = 14*canvas.height/200;
    bar_size = 35*canvas.width/1600;
    count_title = 0;
    timer_values = numberRange(210,299).concat(numberRange(400,600));
    text_0_l1 = "You may tap the space bar to skip animations:"
    text_0_l2 = "The animation that follows will read each entry in a matrix,"
    text_0_l3 = "and by comparing to its direct antecessor, "
    text_0_l4 = "encode it based on how many times it repeats,"
    text_0_l5 = "and hopefully deliver a more concise vector at the end."
    text_0_l6= "Click the button bellow to begin"
    text_1_l1 = "The presentation  following will be guided by the user.";
    text_1_l2 = "Click the button bellow at any point to progress to the next slide.";
    but_blur = 1;
    but_shine = true;
    start_glowing = false;
    text_0_l1_f = "";
    text_0_l2_f = "";
    text_0_l3_f = "";
    text_0_l4_f = "";
    text_0_l5_f = "";
    text_0_l6_f = "";
    but_x1 = 59.75*canvas.width/100;
    but_x2_pt1 = 40.25*canvas.width/100;
    but_x2_pt2 = canvas.width/2 -0.375*canvas.width/100;
    but_x2_delayed = 40.25*canvas.width/100;
    but_y1 = 13.6*canvas.height/20;
    but_y1_ref = 13.5*canvas.height/20;
    but_y2 = 12*canvas.height/20;
    but_y2_ref = 12*canvas.height/20;
    gs_alpha = 0;
    break_anim = false;
    but_press = true;
    break_count = 0;
    alpha_fade = 0;
    animate_2slide_on = false;
    matrix = generate_matrix(-35);
    decoded = run_length_encoder(matrix);
    count_2 = 0;
}
function animate() {
    if (!(break_anim))
        c.clearRect(0, 0, canvas.width, canvas.height);
    count+=1;
    count_title += 1;

    if (timer_values.includes(count_title)) {
        c.font = `${bar_size}px JetBrains`;  
        c.fillStyle = `rgba(255, 255, 255, ${alpha_t})`;  
        c.fillText("|", bar_x, bar_y);};

    if(count_title < 300){
        bar_x = 270*canvas.width/400;
        bar_y = 14*canvas.height/200;    
        if (!(title_full === title_full.substring(0,count_title/7))){
            title = title_full.substring(0, count_title/7) + "|";}
        else {
            title = title_full.substring(0, count_title/7)};};
    if(count_title > 300 & count_title < 500){
        bar_x = 221*canvas.width/400;
        bar_y = 45*canvas.height/400;
        bar_size = 24*canvas.width/1600;
        if (!(subtitle_full === subtitle_full.substring(0,(count_title-300)/5))){
            subtitle = subtitle_full.substring(0, (count_title-300)/5) + "|";
        }
        else {
            subtitle = subtitle_full.substring(0, (count_title-300)/5)  
        };
    }
    if(count_title > 480){
        if (!(text_0_l1 === text_0_l1.substring(0,(count_title-480)/3) & count_title >480 )){text_0_l1_f = text_0_l1.substring(0, (count_title-480)/3)   + "|";}
        else {text_0_l1_f = text_0_l1.substring(0, (count_title-480)/3)  };

        if (!(text_0_l2 === text_0_l2.substring(0,(count_title-620)/3))  & (480  < count_title & count_title > 620 )){text_0_l2_f = text_0_l2.substring(0, (count_title-620)/3)  + "|";}
        else {text_0_l2_f = text_0_l2.substring(0, (count_title-620)/3)  };

        if (!(text_0_l3 === text_0_l3.substring(0,(count_title-800)/3)) & (700  < count_title & count_title > 800 )){text_0_l3_f = text_0_l3.substring(0, (count_title-800)/3)   + "|";}
        else {text_0_l3_f = text_0_l3.substring(0, (count_title-800)/3)  };

        if (!(text_0_l4 === text_0_l4.substring(0,(count_title-940)/3)) & (800  < count_title & count_title > 940 )){text_0_l4_f = text_0_l4.substring(0, (count_title-940)/3)   + "|";}
        else {text_0_l4_f = text_0_l4.substring(0, (count_title-940)/3)  };

        if (!(text_0_l5 === text_0_l5.substring(0,(count_title-1120)/3)) & (940 < count_title & count_title > 1120 )){text_0_l5_f = text_0_l5.substring(0, (count_title-1120)/3)   + "|";}
        else {text_0_l5_f = text_0_l5.substring(0, (count_title-1120)/3)  };

        if (!(text_0_l6 === text_0_l6.substring(0,(count_title-1300)/3)) & (1120 < count_title & count_title > 1300 )){
            text_0_l6_f = text_0_l6.substring(0, (count_title-1300)/3)  + "|";
        }
        else {
            text_0_l6_f = text_0_l6.substring(0, (count_title-1300)/3)  
        };
    }




    if (gh_font_size_2 < max_font_size & gh_growth == 0.5) {
        gh_font_size_2 += gh_growth;
        gh_font_size -= gh_growth;}
    else if (gh_font_size_2 > min_font_size & gh_growth == 0) {
        gh_font_size_2 += (gh_growth - 0.5);
        gh_font_size -= (gh_growth - 0.5);};

    if (0 < count < 30){
        alpha_t = 0;
    };
    if (30 < count & count < 60) {
        alpha_t = 1;
    };
    if (count > 61) {
        count = 0;
    };

    c.font = `${title_font_size}px JetBrains`;
    c.textAlign = "center";
    c.fillStyle = `rgba(255, 255, 255, 1)`;
    c.fillText(title, canvas.width/2, 14*canvas.height/200);
    c.font = `${subtitle_font_size}px JetBrains`;
    c.fillText(subtitle, canvas.width/2, 22*canvas.height/200);
    c.shadowColor="white";
    c.shadowBlur=10;  
    c.shadowBlur=0;
    c.font = `${text_font_size}px JetBrains`;
    c.fillStyle = `rgba(255, 255, 255, 1)`;
    c.fillText(text_0_l1_f,canvas.width/2, 40*canvas.height/200);
    c.fillText(text_0_l2_f, canvas.width/2, 54*canvas.height/200);
    c.fillText(text_0_l3_f, canvas.width/2, 61*canvas.height/200);
    c.fillText(text_0_l4_f, canvas.width/2, 68*canvas.height/200);
    c.fillText(text_0_l5_f, canvas.width/2, 75*canvas.height/200);    
    c.fillText(text_0_l6_f, canvas.width/2, 82*canvas.height/200);    


    if (start_glowing == true){
        if (but_blur < 10 & count_title % 4 ==0 & but_shine == true) {
            but_blur += 0.5;


        };
        if (but_blur == 10 & count_title % 25 ==0) {
            but_shine = false;
        };
        if (but_blur > 3 & count_title % 4 ==0 & but_shine == false) {
            but_blur -= 0.5;
            if (but_blur == 5){
                but_shine = true;
            }
        };
    }

    if (count_title > 1400){
        if (but_x2_pt1 <= canvas.width/2){
            but_x2_pt1 += 0.78*canvas.width/100;}
        else if (but_x2_pt2 < but_x1){
            but_x2_pt2 += 0.78*canvas.width/100;}
        else if (but_x2_delayed <= but_x1){
            but_x2_delayed += 0.78*canvas.width/100;};
        if (but_y2 <= but_y1_ref ){
            but_y2 += 0.3*canvas.height/100;}
        else if (but_y1 >= but_y2_ref){
            but_y1 -= 0.3*canvas.height/100;
        if (gs_alpha<=1){   
        gs_alpha += 0.1};
        ;};}

      
    c.strokeStyle = `rgba(255, 255, 255, 0.8`;
    c.lineWidth = canvas.width/200;
    c.beginPath();
    c.moveTo(40.25*canvas.width/100, 12*canvas.height/20);
    c.lineTo(but_x2_pt1 , 12*canvas.height/20);
    c.moveTo(canvas.width/2-0.375*canvas.width/100, 12*canvas.height/20);
    c.lineTo(but_x2_pt2 , 12*canvas.height/20);
    c.moveTo(40.5*canvas.width/100, 12*canvas.height/20);
    c.lineTo(40.5*canvas.width/100, but_y2);
    c.moveTo(40.25*canvas.width/100, 13.625*canvas.height/20);
    c.lineTo(but_x2_delayed, 13.625*canvas.height/20);
    c.moveTo(59.5*canvas.width/100, 13.6*canvas.height/20);
    c.lineTo(59.5*canvas.width/100, but_y1);
    c.stroke();
    c.shadowColor="white";
    c.shadowBlur=but_blur;
    c.fillStyle = `rgba(255,255,255,${gs_alpha})`
    c.font = `${subtitle_font_size + canvas.width/150}px JetBrains`;
    c.fillText("Get Started", canvas.width/2, 131*canvas.height/200);
    c.shadowBlur=0;
    c.setTransform(1, 0, 0, 1, 0, 0);

    
    c.font = `${gh_font_size}px BioRhyme`;
    c.textAlign = "end";
    c.fillStyle = "white";
    c.fillText("Project by:", 177*canvas.width/200 , 99*canvas.height/100);
    c.font = `${gh_font_size_2}px BioRhyme`;
    c.textAlign = "start";
    c.fillText("Guilherme Melo", 355*canvas.width/400, 99*canvas.height/100);    
    

    if (break_anim){
        break_count += 1;
        alpha_fade += 0.035
        c.fillStyle = `rgba(0, 0, 0, ${alpha_fade})`;
        c.fillRect(0, 0, canvas.width, 95*canvas.height/100);
        if (break_count === 60){
            c.clearRect(0, 0, canvas.width, canvas.height);
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
    }};
    requestAnimationFrame(animate);

}
loadFonts();
set_variables();
animate();

