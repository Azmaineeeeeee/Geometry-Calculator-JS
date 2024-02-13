function calculateParallelogramArea(){
  const base = getInputValue('parallelogram-base');
  const height = getInputValue('parallelogram-height');
  const parallelogramArea = base * height;
  returnResult('parallelogram-area',parallelogramArea)

  const result = document.getElementById('result-container');
    let p = document.createElement('p');
    p.innerText = `${count++}.   Parallelogram   ${parallelogramArea}cm²`
    result.appendChild(p);

    document.getElementById('parallelogram-body').style.backgroundColor = 'LemonChiffon'
}

document.getElementById('parallelogram-body').addEventListener('mouseover',function(){
  this.style.backgroundColor = 'LemonChiffon';
})

document.getElementById('parallelogram-body').addEventListener('mouseout',function(){
  this.style.backgroundColor = '';
})

function getInputValue(inputId){
   const input = document.getElementById(inputId);
   const inputText = input.value;
   const inputValue = parseFloat(inputText);
   return inputValue;

}

function returnResult(resultStoringId,calculatedArea){
   const result = document.getElementById(resultStoringId);
   result.innerText = calculatedArea;
   return result;
}


