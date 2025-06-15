function getElementWidth(content, padding, border) {
    const numericalContent = parseFloat(content);
    const numericalPadding = parseFloat(padding);
    const numericalBorder =  parseFloat(border);
    const boxSizing =  numericalContent+2 * (numericalBorder + numericalPadding);
    return boxSizing;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
