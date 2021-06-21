'use strict'


let answer = prompt('Do you think I studied at the University of Jordan?')
function resultfun() {
    switch (answer.toUpperCase()) {
        case 'y':
        case 'Yes':
        case 'YEs':
        case 'yEs':
        case 'yES':
        case 'yeE':
        case 'yes':


            /*console.log('Great that is correct answer');*/
            alert('Great that is  a correct answer');
            let good = 0;
            good = good + 1;

            break;
        case 'No':
        case 'nO':
        case 'no':

            console.log('not correct Try to answer the next question ');
            break;
        default:
            console.log('just answer yes or no');
            break;
    }
}



resultfun();






























answer = prompt('doyou')
resultfun();