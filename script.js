function calc() {
    var x = parseInt(document.getElementById("input1").value);
    var y = parseInt(document.getElementById("input2").value);
    var z = parseInt(document.getElementById("input3").value);

    var results = x + z + y;
    document.getElementById("results").innerHTML = results;
}