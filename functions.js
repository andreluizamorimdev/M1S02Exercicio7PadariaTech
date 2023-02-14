let breadPrice;
let resultBreadPrice = document.getElementById('resultBreadPrice');
let titleTable = document.getElementById('titleTable');
let breadPriceTable = '';

function priceTable() {
    breadPrice = parseFloat(document.getElementById('breadPrice').value);
    for(let i = 1; i <= 50; i++) {
        
        let calculatedPrice = i * breadPrice;

        breadPriceTable += `${i} - R$ ${calculatedPrice.toFixed(2)} <br/>`

        titleTable.hidden = false;
        resultBreadPrice.innerHTML = breadPriceTable
    }
}

function clean() {
    breadPriceTable = '';
    titleTable.hidden = true;
    resultBreadPrice.innerHTML = breadPriceTable
}