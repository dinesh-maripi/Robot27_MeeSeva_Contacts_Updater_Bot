function(ele) {
    let cards = []
    let tables = document.querySelectorAll('div.card table');
    for (let table of tables) {
        let trs = table.querySelectorAll('tr');
        let card = {}
        for (tr of trs) {
            let [td1, td2] = tr.querySelectorAll('td');
            card[td1.textContent] = td2.textContent ? td2.textContent : td2.querySelector('input')?.value;
        }
        cards.push(card);
    }
    return JSON.stringify(cards);
}