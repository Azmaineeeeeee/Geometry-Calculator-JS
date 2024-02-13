function calculateEllipseArea(){
    const a = getInputValue('minor-height');
      const b = getInputValue('major-height');
      const ellipseArea = (Math.PI) * a * b;
      returnResult('ellipse-area',ellipseArea.toFixed(3))
    
      const result = document.getElementById('result-container');
        let p = document.createElement('p');
        p.innerText = `${count++}.   Ellipse   ${ellipseArea.toFixed(3)}cm²`
        result.appendChild(p);
    }

      document.getElementById('ellipse-body').addEventListener('mouseover',function(){
        this.style.backgroundColor = 'DarkSlateGray';
      })

      document.getElementById('ellipse-body').addEventListener('mouseout',function(){
        this.style.backgroundColor = '';
      })

      function ellipseInputEmpty(){
        inputEmpty('minor-height','major-height','ellipse-area');
      }

  