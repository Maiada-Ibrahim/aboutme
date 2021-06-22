/*'use strict'
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
        case 'YeS':




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
            

            



let answer = prompt('how much do you think I believe in love') 3
let answer = prompt('How much do you think I can swim')2
let answer = prompt('How do you think I am a social person?')4
let answer = prompt('How do you think I am a calm person?')8
let answer = prompt('How satisfied do you think I am that I studied computer engineering?')7
let answer = prompt('How often do you think I use lies in my life?')7*/




/*let correct = 0


for(let i=1 ; i<=4 ; i++ ){
let answer = parseInt (prompt('please enter a number from 1-10(How much do you think I believe in love?)'));
if (answer === 3)  {          
  alert('Great that is the correct answer')
  correct=correct + 1 ;
  break;
 } else if(answer < 5) {
   alert("too high")
 } else if(answer>=6) {
  alert ('too low ') 
} else while ( !answer === 1 || !answer === 2 || !answer=== 3 || !answer=== 4 || !answer=== 5 || !answer=== 6 || !answer=== 8 || !answer=== 9 || !answer=== 10  )
{   answer = parseInt(prompt('please enter a number from 1-10(How much do you think I believe in love?)')); }

}

 




for(let i=1 ; i<=4 ; i++ ){
  let answer = parseInt (prompt('How much do you think I can swim'));
  if (answer === 2)  {          
    alert('Great that is the correct answer')
    correct=correct + 1 ;
    break;
   } else if(answer < 4) {
     alert("too high")
   } else if(answer>=5) {
    alert ('too low ') 
  } else while ( !answer === 1 || !answer === 2 || !answer=== 3 || !answer=== 4 || !answer=== 5 || !answer=== 6 || !answer=== 8 || !answer=== 9 || !answer=== 10  )
  {   answer = parseInt(prompt('please enter a number from 1-10(How much do you think I can swim)')); }
  
  }



  for(let i=1 ; i<=4 ; i++ ){
    let answer = parseInt (prompt('How much do you think I can swim'));
    if (answer === 2)  {          
      alert('Great that is the correct answer')
      correct=correct + 1 ;
      break;
     } else if(answer < 4) {
       alert("too high")
     } else if(answer>=5) {
      alert ('too low ') 
    } else while ( !answer === 1 || !answer === 2 || !answer=== 3 || !answer=== 4 || !answer=== 5 || !answer=== 6 || !answer=== 8 || !answer=== 9 || !answer=== 10  )
    {   answer = parseInt(prompt('please enter a number from 1-10(How much do you think I can swim)')); }
    
    }



    for(let i=1 ; i<=4 ; i++ ){
      let answer = parseInt (prompt('How much do you think I can swim'));
      if (answer === 2)  {          
        alert('Great that is the correct answer')
        correct=correct + 1 ;
        break;
       } else if(answer < 4) {
         alert("too high")
       } else if(answer>=5) {
        alert ('too low ') 
      } else while ( !answer === 1 || !answer === 2 || !answer=== 3 || !answer=== 4 || !answer=== 5 || !answer=== 6 || !answer=== 8 || !answer=== 9 || !answer=== 10  )
      {   answer = parseInt(prompt('please enter a number from 1-10(How much do you think I can swim)')); }
      
      }




      for(let i=1 ; i<=4; i++ ){
        let answer = parseInt (prompt('How much do you think I can swim'));
        if (answer === 2)  {          
          alert('Great that is the correct answer')
          correct=correct + 1 ;
          break;
         } else if(answer < 4) {
           alert("too high")
         } else if(answer>=5) {
          alert ('too low ') 
        } else while ( !answer === 1 || !answer === 2 || !answer=== 3 || !answer=== 4 || !answer=== 5 || !answer=== 6 || !answer=== 8 || !answer=== 9 || !answer=== 10  )
        {   answer = parseInt(prompt('please enter a number from 1-10(How much do you think I can swim)')); }
        
        }


        for(let i=1 ; i<=4 ; i++ ){
          let answer = parseInt (prompt('How much do you think I can swim'));
          if (answer === 2)  {          
            alert('Great that is the correct answer')
            correct=correct + 1 ;
            break;
           } else if(answer < 4) {
             alert("too high")
           } else if(answer>=5) {
            alert ('too low ') 
          } else while ( !answer === 1 || !answer === 2 || !answer=== 3 || !answer=== 4 || !answer=== 5 || !answer=== 6 || !answer=== 8 || !answer=== 9 || !answer=== 10  )
          {   answer = parseInt(prompt('please enter a number from 1-10(How much do you think I can swim)')); }
          
          }

          prompt('youer correct answer is  ' + correct )*/

/*let answer;
let correct2 =0
let youranswer = [] ;
let cars = ['kia', 'bmw', 'ford'];
for(let i=1 ; i<=6 ; i++ ){
 answer =  prompt('What kind of cars did you drive before').toLowerCase();
  if (answer === cars[0] || answer === cars[1] || answer === cars[3])  {          
    alert('Great that is the correct answer')
    correct2=correct2 + 1 ;
    youranswer.push(answer);
    break;
   
   } else {
    alert ('not correct ')
    youranswer.push(answer);
    
  } 
  
  }
  
   */


// else while (answer==='')
// {answer =  prompt('Agine : What kind of cars did I drive before').toLowerCase(); } 







let answer = prompt('What kind of cars did you drive before').toLowerCase();

let correct2 = 0
let youranswer = [];
let cars = ['kia', 'bmw', 'ford'];
for (let i = 1; i <= 6; i++) {
  if (answer === cars[0] || answer === cars[1] || answer === cars[3]) {
    alert('Great that is the correct answer')
    correct2 = correct2 + 1;
    youranswer.push(answer);
    break;

  } else if (answer !== cars[0] && answer !== cars[1] && answer !== cars[2] && answer !== cars[2] && answer !== '') {
    alert('not correct ')
    youranswer.push(answer);
    answer = prompt('What kind of cars did you drive before').toLowerCase();

  } else
   i=i+1;
   while (answer == '') {
    { answer = prompt('Agine : What kind of cars did I drive before').toLowerCase();
      
  }

  }

}

alert('youer  answer is  ' + youranswer  ) 
alert('the correct answer is  ' + cars  )





