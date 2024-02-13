let count = 1;
function calculateTriangleArea() {
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText)

    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);

    //   let convertButton = document.getElementById('convert-button');
    //   convertButton.classList.toggle('hidden')

    const triangleArea = (0.5 * height * base);
    const result = document.getElementById('result-container');
    let p = document.createElement('p');
    p.innerText = `${count++}.    Triangle  ${triangleArea}cm²`
    result.appendChild(p);

    const divResult = document.getElementById('area-triangle');
    let span = document.createElement('span');
    span.innerText = triangleArea;
    divResult.appendChild(span);
    divResult.insertBefore(span, divResult.firstChild);
    

}

document.getElementById('triangle-body').addEventListener('mouseover',function(){
    this.style.backgroundColor = 'pink';
  })

  document.getElementById('triangle-body').addEventListener('mouseout',function(){
    this.style.backgroundColor = '';
  })

function triangleInputEmpty(){
  inputEmpty('triangle-base','triangle-height','area-triangle');
 }

  function inputEmpty(a,b,c){
    document.getElementById(a).value = '';
    document.getElementById(b).value = '';
    document.getElementById(c).textContent = '';
    return;
  }
