function countWords() {
    let sentence = document.getElementById("sentence").value;
    let words = sentence.trim().split(/\s+/); 
    let wordCount = sentence.trim() === "" ? 0 : words.length;
    document.getElementById("result").innerText = "Word count: " + wordCount;
}