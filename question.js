const questions = [
    {id:"q1", buyPrice: 12, sellPrice: 16},
    {id:"q2", buyPrice: 34, sellPrice: 39},
    {id:"q3", buyPrice: 56, sellPrice: 62},
    {id:"q4", buyPrice: 78, sellPrice: 85},
    {id:"q5", buyPrice: 91, sellPrice: 99},
    {id:"q6", buyPrice: 11, sellPrice: 20},
    {id:"q7", buyPrice: 22, sellPrice: 32},
    {id:"q8", buyPrice: 33, sellPrice: 44},
    {id:"q9", buyPrice: 44, sellPrice: 56},
    {id:"q10", buyPrice: 55, sellPrice: 69},
    {id:"q11", buyPrice: 66, sellPrice: 80},
    {id:"q12", buyPrice: 77, sellPrice: 92},
    {id:"q13", buyPrice: 88, sellPrice: 104},
    {id:"q14", buyPrice: 99, sellPrice: 116},
    {id:"q15", buyPrice: 110, sellPrice: 128},
    {id:"q16", buyPrice: 220, sellPrice: 239},
    {id:"q17", buyPrice: 330, sellPrice: 350},
    {id:"q18", buyPrice: 13, sellPrice: 14},
    {id:"q19", buyPrice: 24, sellPrice: 26},
    {id:"q20", buyPrice: 46, sellPrice: 49},
    {id:"q21", buyPrice: 68, sellPrice: 72},
    {id:"q22", buyPrice: 81, sellPrice: 86},
    {id:"q23", buyPrice: 35, sellPrice: 41},
    {id:"q24", buyPrice: 57, sellPrice: 64},
    {id:"q25", buyPrice: 79, sellPrice: 87},
    {id:"q26", buyPrice: 30, sellPrice: 39},
    {id:"q27", buyPrice: 70, sellPrice: 80},
    {id:"q28", buyPrice: 80, sellPrice: 91},
    {id:"q29", buyPrice: 90, sellPrice: 102},
    {id:"q30", buyPrice: 10, sellPrice: 23},
    {id:"q31", buyPrice: 15, sellPrice: 29},
    {id:"q32", buyPrice: 20, sellPrice: 35},
    {id:"q33", buyPrice: 35, sellPrice: 51},
    {id:"q34", buyPrice: 101, sellPrice: 118},
    {id:"q35", buyPrice: 112, sellPrice: 130},
    {id:"q36", buyPrice: 123, sellPrice: 142},
    {id:"q37", buyPrice: 134, sellPrice: 154},
    {id:"q38", buyPrice: 145, sellPrice: 146},
    {id:"q39", buyPrice: 156, sellPrice: 158},
    {id:"q40", buyPrice: 167, sellPrice: 170},
    {id:"q41", buyPrice: 178, sellPrice: 182},
    {id:"q42", buyPrice: 189, sellPrice: 193},
    {id:"q43", buyPrice: 190, sellPrice: 195},
    {id:"q44", buyPrice: 102, sellPrice: 108},
    {id:"q45", buyPrice: 124, sellPrice: 131},
    {id:"q46", buyPrice: 146, sellPrice: 154},
    {id:"q47", buyPrice: 168, sellPrice: 177},
    {id:"q48", buyPrice: 135, sellPrice: 145},
    {id:"q49", buyPrice: 157, sellPrice: 168},
    {id:"q50", buyPrice: 179, sellPrice: 191},
    {id:"q51", buyPrice: 16, sellPrice: 11},
    {id:"q52", buyPrice: 39, sellPrice: 33},
    {id:"q53", buyPrice: 62, sellPrice: 55},
    {id:"q54", buyPrice: 85, sellPrice: 77},
    {id:"q55", buyPrice: 99, sellPrice: 90},
    {id:"q56", buyPrice: 20, sellPrice: 10},
    {id:"q57", buyPrice: 32, sellPrice: 21},
    {id:"q58", buyPrice: 44, sellPrice: 32},
    {id:"q59", buyPrice: 56, sellPrice: 43},
    {id:"q60", buyPrice: 69, sellPrice: 54},
    {id:"q61", buyPrice: 80, sellPrice: 65},
    {id:"q62", buyPrice: 92, sellPrice: 76},
    {id:"q63", buyPrice: 104, sellPrice: 87},
    {id:"q64", buyPrice: 116, sellPrice: 98},
    {id:"q65", buyPrice: 128, sellPrice: 109},
    {id:"q66", buyPrice: 239, sellPrice: 219},
    {id:"q67", buyPrice: 350, sellPrice: 329},
    {id:"q68", buyPrice: 14, sellPrice: 12},
    {id:"q69", buyPrice: 26, sellPrice: 23},
    {id:"q70", buyPrice: 49, sellPrice: 45},
    {id:"q71", buyPrice: 72, sellPrice: 67},
    {id:"q72", buyPrice: 86, sellPrice: 80},
    {id:"q73", buyPrice: 41, sellPrice: 34},
    {id:"q74", buyPrice: 64, sellPrice: 56},
    {id:"q75", buyPrice: 87, sellPrice: 78},
    {id:"q76", buyPrice: 39, sellPrice: 29},
    {id:"q77", buyPrice: 80, sellPrice: 69},
    {id:"q78", buyPrice: 91, sellPrice: 79},
    {id:"q79", buyPrice:102, sellPrice: 89},
    {id:"q80", buyPrice: 23, sellPrice: 9},
    {id:"q81", buyPrice: 29, sellPrice: 14},
    {id:"q82", buyPrice: 35, sellPrice: 19},
    {id:"q83", buyPrice: 51, sellPrice: 34},
    {id:"q84", buyPrice: 118, sellPrice: 100},
    {id:"q85", buyPrice: 130, sellPrice: 111},
    {id:"q86", buyPrice: 142, sellPrice: 122},
    {id:"q87", buyPrice: 154, sellPrice: 133},
    {id:"q88", buyPrice: 146, sellPrice: 144},
    {id:"q89", buyPrice: 158, sellPrice: 155},
    {id:"q90", buyPrice: 170, sellPrice: 160},
    {id:"q91", buyPrice: 182, sellPrice: 172},
    {id:"q92", buyPrice: 193, sellPrice: 183},
    {id:"q93", buyPrice: 195, sellPrice: 185},
    {id:"q94", buyPrice: 108, sellPrice: 98},
    {id:"q95", buyPrice: 131, sellPrice: 123},
    {id:"q96", buyPrice: 154, sellPrice: 133},
    {id:"q97", buyPrice: 146, sellPrice: 144},
    {id:"q98", buyPrice: 158, sellPrice: 155},
    {id:"q99", buyPrice: 170, sellPrice: 166},
    {id:"q100", buyPrice: 182, sellPrice: 177}
];

// ... (Rest of your code)

function createEquations() {
    // Select questions randomly based on the questionAmount
    const selectedQuestions = shuffle(questions).slice(0, questionAmount);

    // Create equations based on the selected questions
    selectedQuestions.forEach(question => {
        const buyPrice = question.buyPrice;
        const sellPrice = question.sellPrice;
        const equation = `Buy Price: $${buyPrice}, Sell Price: $${sellPrice}`;
        const evaluated = sellPrice > buyPrice ? 'true' : 'false';
        const equationObject = { value: equation, evaluated: evaluated };
        equationsArray.push(equationObject);
    });
}

// Shuffle function to randomize the equations array
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

// Add Equations to DOM
function equationsToDOM() {
    equationsArray.forEach((equation) => {
        const item = document.createElement('div');
        item.classList.add('item');
        const equationText = document.createElement('h1');
        equationText.textContent = equation.value;
        item.appendChild(equationText);
        itemContainer.appendChild(item);
    });
}

// Dynamically adding correct/incorrect equations
function populateGamePage() {
    itemContainer.textContent = '';
    const topSpacer = document.createElement('div');
    topSpacer.classList.add('height-240');
    const selectedItem = document.createElement('div');
    selectedItem.classList.add('selected-item');
    itemContainer.append(topSpacer, selectedItem);
    createEquations();
    equationsToDOM();
    const bottomSpacer = document.createElement('div');
    bottomSpacer.classList.add('height-500');
    itemContainer.appendChild(bottomSpacer);
}
