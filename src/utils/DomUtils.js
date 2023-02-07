export function getElementOffset(e) {
    let result = 0;
    let curE = e;

    while (curE.offsetParent) {
        result += e.offsetParent.offsetTop;
        curE = e.offsetParent;
    }

    return result;
}
