function calculatePentagonArea(){
const perimeter = getInputValue('pentagon-perimeter');
  const apothem = getInputValue('pentagon-apothem');
  const pentagonArea = 0.5 * perimeter * apothem;
  returnResult('pentagon-area',pentagonArea)

  const result = document.getElementById('result-container');
    let p = document.createElement('p');
    p.innerText = `${count++}.   pentagon   ${pentagonArea}cm²`
    result.appendChild(p);

    document.getElementById('pentagon-body').style.backgroundColor = 'PaleGreen'
  
  }
  document.getElementById('pentagon-body').addEventListener('mouseover',function(){
    this.style.backgroundColor = 'PaleGreen';
  })

  document.getElementById('pentagon-body').addEventListener('mouseout',function(){
    this.style.backgroundColor = '';
  })