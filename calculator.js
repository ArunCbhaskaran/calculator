let  inp = document.querySelector('#input')
let  out = document.querySelector('#output')
  function AC(){
    inp.innerText7r="";
  }

  function Back(){
    inp.innerText = inp.innerText.slice(0,-1)
  }
function display(num){
    inp.innerHTML = inp.innerText + num
}
function calculate(){
    let calculated = inp.innerText
    console.log(typeof(calculated));
    let mul = calculated.replaceAll('x','*')
    out.innerText = eval(mul)    
}
function percentage(){
    let perc = inp.innerText
    let ggg = perc.split('x')
    console.log(ggg);
    let first = ggg[1]/100;
    out.innerText = ggg[0]*first
}