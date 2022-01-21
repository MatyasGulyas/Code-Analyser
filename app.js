function createParagraph(){
    const element = document.getElementById("div1");

    if(element.childElementCount != 0){
        element.removeChild(element.firstChild);
    } else {
        const para = document.createElement("p");
        const node = document.createTextNode(document.querySelector('.src').value);
        para.appendChild(node);
        element.appendChild(para);
    }
}

getBoundaryPoints = (range) => ({ start: range.startOffset, end: range.endOffset })

function expandTextRange(range) {
    // expand to include a whole word

    matchesStart = (r) => r.toString().match(/^\s/) // Alternative: /^\W/
    matchesEnd = (r) => r.toString().match(/\s$/)   // Alternative: /\W$/

    // Find start of word 
    while (!matchesStart(range) && range.startOffset > 0) {
        range.setStart(range.startContainer, range.startOffset - 1)
    }
    if (matchesStart(range)) range.setStart(range.startContainer, range.startOffset + 1)

    // Find end of word
    var length = range.endContainer.length || range.endContainer.childNodes.length
    while (!matchesEnd(range) && range.endOffset < length) {
        range.setEnd(range.endContainer, range.endOffset + 1)
    }
    if (matchesEnd(range) && range.endOffset > 0) range.setEnd(range.endContainer, range.endOffset - 1)

    var str = range.toString()
}

function getTextSelectedOrUnderCursor() {
    let sel = window.getSelection()
    let range = sel.getRangeAt(0).cloneRange()

    if (range.startOffset == range.endOffset) expandTextRange(range)
    window.open(`https://developer.mozilla.org/en-US/search?q= ${range.toString()}`, '_blank');
    //return range.toString()
}

function onClick() {
 getTextSelectedOrUnderCursor()
} 

