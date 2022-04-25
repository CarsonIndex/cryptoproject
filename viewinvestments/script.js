document.getElementById("homebox").addEventListener("click", openHomePage);
document.getElementById("IDbox").addEventListener("click", getAPI);

function openHomePage() {
    window.location.href = 'https://CarsonIndex.github.io/cryptoproject';
}

function getAPI() {
    var txt = document.getElementById("investorID").value
    document.getElementById("investlist").innerHTML = ""
    let resultString = null;
    fetch('https://dbms-uark-project.herokuapp.com/ViewInvestments/' + txt)
        .then(response => response.text())
        .then(data => myFunc(data));
}

function myFunc(Result) {
    Result = Result.replaceAll("[", "")
    Result = Result.replaceAll("]", "")
    Result = Result.replaceAll("\"","")
    Result = Result.split(",")
    nlCount = 0

    document.getElementById("investlist").innerHTML += ("Total Value: " + Result[Result.length-1] + "<br><br>")

    document.getElementById("investlist").innerHTML += ("Name" + "&emsp;&emsp;&emsp;&emsp;&emsp;" +
        "Crypto" + "&emsp;&emsp;" + "Shares" + "&emsp;&emsp;&emsp;" + "Purchase Price" + "&emsp;&emsp;" + "Current Value" + "&emsp;&emsp;" + "<br><br>")

    for (let i = 0; i < Result.length - 1; i++) {
            if (nlCount == 5) {
                document.getElementById("investlist").innerHTML += ("<br>" + Result[i] + "&emsp;&emsp;&emsp;&emsp;")
                nlCount = 0
            }
            else {
                document.getElementById("investlist").innerHTML += Result[i] + "&emsp;&emsp;&emsp;&emsp;"
            }
            nlCount++
        }
}