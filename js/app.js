'use strict'
let username =prompt('To begin play with me ...what is your name ??')  

alert('welcome to our website   '+ username + ' I think we will play afun game ')

let correct = 0
let answer = prompt('Do you think I studied at the University of Jordan?')

 let resultfun = function () {
    let out ='' ;
    switch (answer) {
        case 'y':
        case 'Yes':
        case 'YEs':
        case 'yEs':
        case 'yES':
        case 'yeE':
        case 'yes':
        case 'YES':
        case 'Y':



            out ='yes';
            return out;
            
            

            break;
        case 'No':
        case 'nO':
        case 'no':
        case 'n':
        case 'N':
        case 'NO':

         out='no';
         return out;
    
            break;
        default:
            
            out= 'none define';
            return out;
            break;
           
    }
}
resultfun();
let result = resultfun();
// console.log('you answer is  ' + result)
 alert('you answer is  ' + result);
 
 if (result == 'yes')  {
    alert("That is not the correct answer you can look at my page and know more about me ")
    
   } else if(result == 'no') {
     alert('Great that is the correct answer you can look at my page and know more about me')
    correct=correct + 1 ;
   } else if(result == 'none define') {
    alert ('just answer yes or no  now you miss this qustion')
    }


    answer =prompt( 'DO  think I can drive a car??')  
    resultfun();
    result = resultfun();
    // console.log('you answer is  ' + result)
    alert('you answer is  ' + result);
    if (result == 'yes')  {
        
        alert('Great that is the correct answer you can look at my page and know more about me')
        correct=correct + 1 ;

       } else if(result == 'no') {
         alert("That is not the correct answer you can look at my page and know more about me ")
       } else if(result == 'none define') {
        alert ('just answer yes or no  now you miss this qustion') 
        }






        answer=prompt('Is the pizza my favoutit meal?')  
        resultfun();
         result = resultfun();
         alert('you answer is  ' + result);
         
         if (result == 'yes')  {
            alert("That is not the correct answer you can look at my page and know more about me ")
            
           } else if(result == 'no') {
             alert('Great that is the correct answer you can look at my page and know more about me')
            correct=correct + 1 ;
           } else if(result == 'none define') {
            alert ('just answer yes or no  now you miss this qustion')
            }
          
            

            answer=prompt('Do you think I cane write Poetry?')
            resultfun();
    result = resultfun();
    alert('you answer is  ' + result);
    if (result == 'yes')  {
        
        alert('Great that is the correct answer you can look at my page and know more about me')
        correct=correct + 1 ;

       } else if(result == 'no') {
         alert("That is not the correct answer you can look at my page and know more about me ")
       } else if(result == 'none define') {
        alert ('just answer yes or no  now you miss this qustion') 
        }


        answer=prompt('Do you think I am good at cooking?')  
        resultfun();
        result = resultfun();
        alert('you answer is  ' + result);
        if (result == 'yes')  {
            
            alert('Great that is the correct answer you can look at my page and know more about me')
            correct=correct + 1 ;
    
           } else if(result == 'no') {
             alert("That is not the correct answer you can look at my page and know more about me ")
           } else if(result == 'none define') {
            alert ('just answer yes or no  now you miss this qustion') 
            }

            document.write('Oh dear I think it nice game you answer  ' + correct + ' qustions     ,       '    +  username + '  I think we will play again with another quastion' );
            

            




 

























