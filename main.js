import inquirer from "inquirer";
//PKR currency converter using inquirer
let currencyConverter = async () => {
    const pkr = await inquirer.prompt([{
            type: 'number',
            name: 'pkrValue',
            message: 'Enter Value in PKR = '
        }]);
    const currencyChoice = await inquirer.prompt([{
            type: 'list',
            name: 'currChoice',
            message: 'Choose a currency',
            choices: ['USD', 'EURO', 'JPY', 'CAD']
        }]);
    let displayValue;
    switch (currencyChoice.currChoice) {
        case 'USD':
            displayValue = pkr.pkrValue * 0.0036;
            console.log('As of today the value of PKR into USD is = ' + displayValue + '$');
            break;
        case 'EURO':
            displayValue = pkr.pkrValue * 0.0033;
            console.log('As of today the value of PKR into EURO is = ' + displayValue + '€');
            break;
        case 'JPY':
            displayValue = pkr.pkrValue * 0.52;
            console.log('As of today the value of PKR into JPY is = ' + displayValue + '¥');
            break;
        case 'CAD':
            displayValue = pkr.pkrValue * 0.0048;
            console.log('As of today the value of PKR into CAD is = ' + displayValue + 'CA$');
            break;
    }
};
currencyConverter();
