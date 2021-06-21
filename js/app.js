'use strict'


let answer = prompt('Do you think I studied at the University of Jordan?')

function resultfun() {
    switch (answer) {
        case 'y':
        case 'Yes':
        case 'YEs':
        case 'yEs':
        case 'yES':
        case 'yeE':
        case 'yes':
        case 'YES':


            console.log('Great that is correct answer');
            answer.toLowerCase()
            

            break;
        case 'No':
        case 'nO':
        case 'no':

         answer.toLowerCase()
    
            break;
        default:
            console.log('just answer yes or no');
            break;
    }
}



resultfun();
console.log(answer);






























