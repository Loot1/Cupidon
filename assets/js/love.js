const rules = {
    "à": "a",
    "â": "a",
    "ä": "a",
    "ã": "a",
    "æ": "ae",
    "ç": "c",
    "é": "e",
    "è": "e",
    "ê": "e",
    "ë": "e",
    "î": "i",
    "ï": "i",
    "ñ": "n",
    "ô": "o",
    "ö": "o",
    "õ": "o",
    "œ": "oe",
    "ù": "u",
    "û": "u",
    "ü": "u",
    "ÿ": "y",
}

function correctFirstname(firstname) {
    firstname = firstname.toLowerCase()
    firstname.split("").forEach((x) => {
        if(rules.hasOwnProperty(x)) firstname = firstname.replace(x, rules[x])
    })
    return firstname
}

function checkOccurence(string,letter) {
    let count = 0
    for(let i = 0; i < string.length; i++) {
        if(string.charAt(i) == letter) count++
    }
    return count
}

function reduceScore(list) {
    if(list.length > 3) {
        let iterations = Math.round(list.length/2)
        let newList = []
        for(let i = 0; i < iterations; i++) {
            if(list.length === 1) {
                newList.push(list[0])
            } else {
                newList.push(list[0]+list[list.length-1])
                list.splice(0,1)
                list.splice(list.length-1,1)
            }
        }
        return newList
    } else {
        return [list[0]+list[2],list[1]]
    }
}

function getScore(list) {
    while(parseInt(list.join("")) > 100) {
        list = reduceScore(list)
        for(let i = 0; i < list.length; i++) {
            if(list[i] > 9) {
                let figures = list[i].toString().split("")
                list.splice(i,1,parseInt(figures[0]),parseInt(figures[1]))
            }
        }
    }
    return list
}

function loveCalculator(a,b) {

    const aName = correctFirstname(a)
    const bName = correctFirstname(b)

    let occurenceList = []
    let lettersChecked = []

    for(let i = 0; i < aName.length; i++) {
        let testedLetter = aName.charAt(i)
        if(!lettersChecked.includes(testedLetter)) {
            lettersChecked.push(testedLetter)
            occurenceList.push(checkOccurence(aName,testedLetter)+checkOccurence(bName,testedLetter))
        }
    }

    for(let i = 0; i < bName.length; i++) {
        let testedLetter = bName.charAt(i)
        if(!lettersChecked.includes(testedLetter)) {
            lettersChecked.push(testedLetter)
            occurenceList.push(checkOccurence(aName,testedLetter)+checkOccurence(bName,testedLetter))
        }
    }

    return getScore(occurenceList)
}