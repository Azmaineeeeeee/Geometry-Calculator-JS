function calculateRectangleArea(){
    const rectangleWidth = document.getElementById('rectangle-width');
    const inputValue = rectangleWidth.value;
    const width = parseFloat(inputValue);

    const rectangleLength = document.getElementById('rectangle-length');
    const input = rectangleLength.value;
    const length = parseFloat(input);

    const rectangleArea = width * length;
    let resultValue = document.createElement('span');
    resultValue.innerText = rectangleArea;
    let area = document.getElementById('rectangle-area');
    area.appendChild(resultValue);
    area.insertBefore(resultValue,area.firstChild);

    const result = document.getElementById('result-container');
    let p = document.createElement('p');
    p.innerText = `${count++}.    Rectangle  ${rectangleArea}cm²`
    result.appendChild(p);
    document.getElementById('rectangle-body').style.backgroundColor = 'DarkSalmon'
}