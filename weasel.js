var target = "methinks it is like a weasel";
var threshhold = 0.05;
var possibleChars = "abcdefghijklmnopqrstuvwxyz ";

function randomWeasel() {
    var output = [];
    for (i = 0; i < target.length; i++) {
        output[i] = possibleChars.charAt(Math.floor(Math.random() * possibleChars.length))	
    }
    return output.join('');
}

function generateWeasel(text) {
    output = [];
    for (i = 0; i < 28; i++) {
        if (Math.random() <= threshhold) {
            output[i] = possibleChars.charAt(Math.floor(Math.random() * possibleChars.length))
        } else {
            output[i] = text[i];
        }
        
    }
    return output.join('');
}

function rateScore(weasel) {
    var score = 0;
    for (i = 0; i < 28; i++) {
        if (weasel.text[i] == target[i]) {
            score += 1;
        }
    }
    return score
}


class weasel {
    constructor(text) {
        this.text = generateWeasel(text);
        this.score = rateScore(this);
    }
}

var generations = [];
var bestWeasels = [];
var bestScore = 0;

generation = Array.from({length:100}, ()=> (new weasel(randomWeasel())));
generations[0] = generation;

for (gen = 0; true; gen++){
    if (gen > 0) {
        generation = Array.from({length:100}, ()=> (new weasel(bestWeasels[gen - 1].text)));
        generations[gen] = generation;
    }
    
    bestScore = 0;
    generations[gen].forEach((w) => {
        if (w.score > bestScore) {
            bestScore = w.score;
            bestWeasels[gen] = w;
        }
    })
    
    if(bestWeasels[gen].text == target){
        p = document.createElement("p");
        console.log(gen.toString() + ": " + bestWeasels[gen].text);
        p.innerHTML = gen.toString() + ": " + bestWeasels[gen].text;
        document.body.appendChild(p);
        break;
    }

    /*
    if( gen > 1){
        break;
    }
    */
    try {
        if(bestWeasels[gen].text != bestWeasels[gen - 1].text){
            p = document.createElement("p");
            console.log(gen.toString() + ": " + bestWeasels[gen].text);
            p.innerHTML = gen.toString() + ": " + bestWeasels[gen].text;
            document.body.appendChild(p);
        }
    }catch(e){
        p = document.createElement("p");
        console.log(gen.toString() + ": " + bestWeasels[gen].text);
        p.innerHTML = gen.toString() + ": " + bestWeasels[gen].text;
        document.body.appendChild(p);
    }
    
}