
function generateQuotes () {
    fetch('https://api.kanye.rest/')
    .then(response => response.json())
    .then(data => showQuotes(data))
}

function showQuotes(data){
    
    const quoteSection = document.getElementById('quotes');
    const div = document.createElement('div');
    div.textContent = data.quote;
    quoteSection.appendChild(div);

    div.style.backgroundColor = '#000';
    div.style.color = '#fff';
    div.style.padding = '10px';
    div.style.borderRadius = '5px';
    div.style.margin = '10px';
}

