// let a = prompt("Hey whats you age?");
const expr = 'Papayas';
switch (expr) {
    case 'Oranges':
        console.log('Oranges are $0.59 a pound.');
        break;
    case 'Mangoes':
    case 'Papayas':
        console.log('Mangoes and papayas are $2.79 a pound.');
        // Expected output: "Mangoes and papayas are $2.79 a pound."
        break;
    default:
        console.log(`Sorry, we are out of ${expr}.`);
}

// const a = 'h';
// switch (a){
//     case 'hi':
//         console.log("hii was inside a");
//         break;
//     default :
//         console.log("Default");
// }

