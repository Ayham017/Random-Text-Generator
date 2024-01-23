
function randomNumber(num){
    return Math.floor(Math.random() * num)
};

let adviceObj = {
    whatToDo: ['Just go for it', 'Dont go for it', 'You should calm down bro', 'There is probably a better path', '... My bad bro you need to ask someonelese'],
    PercentageOfLuck: ['0%', '25%', '50%', '75%', '100%']
};

let aiAdvice = [];

for (let msg in adviceObj) {
    let objIndex = randomNumber(adviceObj[msg].length)

    switch(msg) {
        case 'whatToDo':
            aiAdvice.push(`I think, "${adviceObj[msg][objIndex]}"`)
            break
        case 'percentageOfLuck':
            aiAdvice.push(`Bro the chances are about ${adviceObj[PercentageOfLuck][objIndex]} ishh.`)
            break
        default:
            aiAdvice.push(`There is no more advice left for you bro, "Skull face emojie"`)
    }
};

function formatAdvice(advice){
    const format = aiAdvice.join('\n')
    console.log(format)
}

formatAdvice(aiAdvice);