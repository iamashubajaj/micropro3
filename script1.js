var count = 0;
var x=0;
var y=0;
let p = document.createElement("p");
let p2 = document.createElement("p");
let p3 = document.createElement("p");

p.setAttribute("id", "counter");
p2.setAttribute("id", "am");
p3.setAttribute("id", "t_am");

p.innerText = count;
p2.innerText = x;
p3.innerText = y;

let c1 = document.getElementById("ppl");
c1.appendChild(p);
let c2 = document.getElementById("text9");
c2.appendChild(p2);
let c3 = document.getElementById("text11");
c3.appendChild(p3);

let b1 = document.getElementById("inc");
let b2 = document.getElementById("dec");

b1.addEventListener('click',function(){
    count = count + 1;
    p.innerText = count;
    c1.appendChild(p);
})

b2.addEventListener("click", function () {
    count = count -1;
    if(count<0){
        count = 0;
    }
    p.innerText = count;
    c1.appendChild(p);
});

var bamt = document.getElementById("money").value

let b3 = document.getElementById("five");
let b4 = document.getElementById("ten");
let b5 = document.getElementById("onefive");
let b6 = document.getElementById("twofive");
let b7 = document.getElementById("five0");
let b8 = document.getElementById("sevenfive");

let tipper =0;

b3.addEventListener('click',function(){
    tipper = 5;
})
b4.addEventListener('click',function(){
    tipper = 10;
})
b5.addEventListener('click',function(){
    tipper = 15;
})
b6.addEventListener('click',function(){
    tipper = 25;
})
b7.addEventListener('click',function(){
    tipper = 50;
})
b8.addEventListener('click',function(){
    tipper = 75;
})

let b10 = document.getElementById("gen");

var tamt =0;

b10.addEventListener('click',function(){
    p2.innerText = parseFloat(bamt);
    c2.appendChild(p2);
    tamt = parseFloat(bamt + ((tipper*bamt)/100));
    p3.innerText = tamt;
    c3.appendChild(p3);
})

let b11 = document.getElementById("reset");

b11.addEventListener('click',function(){
    p2.innerText = 0;
    c2.appendChild(p2);
    p3.innerText = 0;
    c3.appendChild(p3);
})