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
    document.getElementById('triangle-body').style.backgroundColor = 'pink';

}

// function calculateRectangleArea(){
//     const rectangleWidth = document.getElementById('rectangle-width');
//     const inputValue = rectangleWidth.value;
//     const width = parseFloat(inputValue);

//     const rectangleLength = document.getElementById('rectangle-length');
//     const input = rectangleLength.value;
//     const length = parseFloat(input);

//     const rectangleArea = width * length;
//     let resultValue = document.createElement('span');
//     resultValue.innerText = rectangleArea;
//     let area = document.getElementById('rectangle-area');
//     area.appendChild(resultValue);
//     area.insertBefore(resultValue,area.firstChild);

//     const result = document.getElementById('result-container');
//     let p = document.createElement('p');
//     p.innerText = `${count++}.    Rectangle  ${rectangleArea}cm²`
//     result.appendChild(p);
//     document.getElementById('rectangle-body').style.backgroundColor = 'DarkSalmon'
// }