function guessANumber() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let computerGuess = Math.floor(Math.random() * 100);
    let guessing =0;

    let recursiveAsyncReadLine = function () {
        readline.question('Guess the number (0-100): ', number => {
            guessing = Number(number);

    if (0 <= guessing && guessing <= 100){
        if (guessing == computerGuess){
            console.log('Yuppey! You guessed it!');
            return readline.close();
        } else if (guessing < computerGuess){
            console.log('Try higher!');
            recursiveAsyncReadLine();
        } else if (guessing > computerGuess){
            console.log('Try lower!');
            recursiveAsyncReadLine();
        }
    } else {
            console.log('You need to choose a number.');
            recursiveAsyncReadLine();
        }
    });
    }
    
recursiveAsyncReadLine();
}

guessANumber()