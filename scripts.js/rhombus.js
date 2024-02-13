function calculateRhombusArea(){
    const depth1 = getInputValue('rhombus-depth1');
  const depth2 = getInputValue('rhombus-depth2');
  const rhombusArea = 0.5 * depth1 * depth2;
  returnResult('rhombus-area',rhombusArea)

  const result = document.getElementById('result-container');
    let p = document.createElement('p');
    p.innerText = `${count++}.   Rhombus   ${rhombusArea}cm²`
    result.appendChild(p);

 }

 
  document.getElementById('rhombus-body').addEventListener('mouseover',function(){
    this.style.backgroundColor = 'Orchid';
  })

  document.getElementById('rhombus-body').addEventListener('mouseout',function(){
    this.style.backgroundColor = '';
  })

  function rhombusInputEmpty(){
    inputEmpty('rhombus-depth1','rhombus-depth2','rhombus-area');
  }