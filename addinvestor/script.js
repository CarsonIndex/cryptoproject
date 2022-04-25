document.getElementById("homebox").addEventListener("click", openHomePage);
document.getElementById("IDbox").addEventListener("click", getAPI);

function openHomePage() {
    window.location.href = 'https://CarsonIndex.github.io/cryptoproject';
}

function getAPI() {
    var txt1 = document.getElementById("investorID").value
    var txt2 = document.getElementById("investorName").value
    var txt3 = document.getElementById("investorEmail").value
    document.getElementById("resulttext").innerHTML = ""
    fetch('https://dbms-uark-project.herokuapp.com/AddInvestor/' + txt1 + "/" + txt2 + "/" + txt3)
        .then(response => response.text())
        .then(data => myFunc(data));
}

function myFunc(Result) {
    Result = Result.replaceAll("[", "")
    Result = Result.replaceAll("]", "")
    Result = Result.replaceAll("\"","")

    document.getElementById("resulttext").innerHTML += Result
}