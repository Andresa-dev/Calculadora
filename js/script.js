let result = "";
let history = [];

function appendToResult(value) {
    result += value;
    document.getElementById("result").value = result;
}

function calculate() {
    if (result !== "") {
        try {
            const calculation = eval(result);
            const timestamp = new Date();
            const historyEntry = {
                expression: result,
                result: calculation,
                timestamp: timestamp.toLocaleString()
            };
            history.unshift(historyEntry);
            if (history.length > 4) {
                history.pop();
            }
            updateHistoryList();
            document.getElementById("result").value = calculation;
            result = "";
        } catch (error) {
            document.getElementById("result").value = "Erro";
            result = "";
        }
    }
}

function clearResult() {
    result = "";
    document.getElementById("result").value = "";
}

function updateHistoryList() {
    const historyList = document.getElementById("historyList");
    historyList.innerHTML = "";
    for (let i = 0; i < history.length; i++) {
        const li = document.createElement("li");
        li.textContent = `${history[i].expression} = ${history[i].result} (${history[i].timestamp})`;
        historyList.appendChild(li);
    }
}

