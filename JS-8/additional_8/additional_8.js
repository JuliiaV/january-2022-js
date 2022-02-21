// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

let rules = [];
function collectNamesOfClass(childElement) {
    let children = childElement.children;
    for (const child of children) {
        if (child.classList.length) {
            for (const childE of child.classList) {
                if (rules.indexOf(childE) === -1){
                    rules.push(childE);
                }
            }
        }
        collectNamesOfClass(child);
    }
}
collectNamesOfClass(document.body);
console.log(rules);