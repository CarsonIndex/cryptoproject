document.getElementById("homebox").addEventListener("click", openHomePage);
document.getElementById("IDbox").addEventListener("click", getAPI);

function openHomePage() {
    window.location.href = 'https://CarsonIndex.github.io/cryptoproject';
}

function getAPI() {
    var txt = document.getElementById("investorID").value
    document.getElementById("investlist").innerHTML = ""
    let resultString = null;
    fetch('https://dbms-uark-project.herokuapp.com/ViewInvestors/' + txt)
        .then(response => response.text())
        .then(data => myFunc(data));
}

function myFunc(Result) {
    Result = Result.replaceAll("[", "")
    Result = Result.replaceAll("]", "")
    Result = Result.replaceAll("\"","")
    Result = Result.split(",")
    nlCount = 0

    document.getElementById("investlist").innerHTML += ("Name" + "&emsp;&emsp;&emsp;&emsp;&emsp;" +
        "Shares" + "&emsp;&emsp;" + "Crypto" + "<br><br>")

    for (let i = 0; i < Result.length; i++) {
            if (nlCount == 3) {
                document.getElementById("investlist").innerHTML += ("<br>" + Result[i] + "&emsp;&emsp;&emsp;&emsp;")
                nlCount = 0
            }
            else {
                document.getElementById("investlist").innerHTML += Result[i] + "&emsp;&emsp;&emsp;&emsp;"
            }
            nlCount++
        }
}