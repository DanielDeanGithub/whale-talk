const input = "Hey, I just met you and this is crazy. But here's my number, so call me, maybe?";

const vowels = ['a','e','i','o','u'];

const resultsArray = [];

for (let i = 0; i < input.length; i++) {
    //console.log(i);
    if (input[i] === 'e' || input[i] === 'u') {
        resultsArray.push(input[i]);
    };

    for (let j = 0; j < vowels.length; j++) {
        //console.log(j);
        if (vowels[j] === input[i]) {
            //console.log(input[i]);
            resultsArray.push(input[i]);
        };
    };
};

//console.log(resultsArray);

const resultString = resultsArray.join('').toUpperCase();

console.log('Input:  ' + input);
console.log('Output: ' + resultString);