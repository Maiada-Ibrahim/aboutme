'use strict';
/*let username = prompt('To begin play with me ...what is your name ??')

alert('welcome to our website   ' + username + ' I think we will play afun game ')

let correct = 0
let answer = (prompt('Do you think I studied at the University of Jordan?').toLowerCase())

let resultfun = function () {
  let out = '';
  switch (answer) {
    case 'y':
    case 'yes':





      out = 'yes';
      return out;



      break;
    case 'no':
    case 'n':


      out = 'no';
      return out;

      break;
    default:

      out = 'none define';
      return out;
      break;

  }
}
resultfun();
let result = resultfun();
// console.log('you answer is  ' + result)
alert('you answer is  ' + result);

if (result == 'yes') {
  alert("That is not the correct answer you can look at my page and know more about me ")

} else if (result == 'no') {
  alert('Great that is the correct answer you can look at my page and know more about me')
  correct = correct + 1;
} else if (result == 'none define') {
  alert('just answer yes or no  now you miss this qustion')
}

// Q2
answer = prompt('DO  think I can drive a car??').toLowerCase();
resultfun();
result = resultfun();
// console.log('you answer is  ' + result)
alert('you answer is  ' + result);
if (result == 'yes') {

  alert('Great that is the correct answer you can look at my page and know more about me')
  correct = correct + 1;

} else if (result == 'no') {
  alert("That is not the correct answer you can look at my page and know more about me ")
} else if (result == 'none define') {
  alert('just answer yes or no  now you miss this qustion')
}





// Q3
answer = prompt('Is the pizza my favoutit meal?').toLowerCase();
resultfun();
result = resultfun();
alert('you answer is  ' + result);

if (result == 'yes') {
  alert("That is not the correct answer you can look at my page and know more about me ")

} else if (result == 'no') {
  alert('Great that is the correct answer you can look at my page and know more about me')
  correct = correct + 1;
} else if (result == 'none define') {
  alert('just answer yes or no  now you miss this qustion')
}


//Q4
answer = prompt('Do you think I cane write Poetry?').toLowerCase();
resultfun();
result = resultfun();
alert('you answer is  ' + result);
if (result == 'yes') {

  alert('Great that is the correct answer you can look at my page and know more about me')
  correct = correct + 1;

} else if (result == 'no') {
  alert("That is not the correct answer you can look at my page and know more about me ")
} else if (result == 'none define') {
  alert('just answer yes or no  now you miss this qustion')
}

//Q5
answer = prompt('Do you think I am good at cooking?').toLowerCase();
resultfun();
result = resultfun();
alert('you answer is  ' + result);
if (result == 'yes') {

  alert('Great that is the correct answer you can look at my page and know more about me')
  correct = correct + 1;

} else if (result == 'no') {
  alert("That is not the correct answer you can look at my page and know more about me ")
} else if (result == 'none define') {
  alert('just answer yes or no  now you miss this qustion')
}

document.write('Oh dear I think it nice game you answer  ' + correct + ' qustions     ,       ' + username + '  I think we will play again with another quastion');



*/








//LABO2 FIRST
/*let answer1 = prompt('how much do you think I believe in love') 3
let answer1 = prompt('How much do you think I can swim')2
let answer1 = prompt('How do you think I am a social person?')4
let answer1 = prompt('How do you think I am a calm person?')8
let answer1 = prompt('How satisfied do you think I am that I studied computer engineering?')7
let answer1 = prompt('How often do you think I use lies in my life?')1*/



// Q1



let correct1 = 0 ;

let f1 = function ( )
{



  for (let i = 1; i <= 4; i++) {
    let answer1 = parseInt(prompt('please enter a number from 1-10(How much do you think I believe in love?)'));
    if (answer1 === 3) {
      alert('Great that is the correct answer');
      correct1 = correct1 + 1;
      break;
    } else if (answer1 <= 5) {
      alert('too high');
    } else if (answer1 > 5) {
      alert('too low ');
    }// else while (!answer1 === 1 || !answer1 === 2 || !answer1 === 3 || !answer1 === 4 || !answer1 === 5 || !answer1 === 6 || !answer1 === 8 || !answer1 === 9 || !answer1 === 10) { answer1 = parseInt(prompt('please enter a number from 1-10(How much do you think I believe in love?)')); }

  }


};

f1();


//Q2


let f2 = function ()
{


  for (let i = 1; i <= 4; i++) {
    let answer1 = parseInt(prompt('How much do you think I can swim'));
    if (answer1 === 2) {
      alert('Great that is the correct answer');
      correct1 = correct1 + 1;
      break;
    } else if (answer1 <= 4) {
      alert('too high');
    } else if (answer1 > 4) {
      alert('too low ');
    }// else while (!answer1 === 1 || !answer1 === 2 || !answer1 === 3 || !answer1 === 4 || !answer1 === 5 || !answer1 === 6 || !answer1 === 8 || !answer1 === 9 || !answer1 === 10) { answer1 = parseInt(prompt('please enter a number from 1-10(How much do you think I can swim)')); }

  }

};

f2();



//Q3


let f3 = function ()
{



  for (let i = 1; i <= 4; i++) {
    let answer1 = parseInt(prompt('How do you think I am a social person?'));
    if (answer1 === 4) {
      alert('Great that is the correct answer');
      correct1 = correct1 + 1;
      break;
    } else if (answer1 >= 2 && answer1 <= 6) {
      alert('too high');
    } else if (answer1 === 1 || answer1 > 6) {
      alert('too low ');
    }// else while (!answer1 === 1 || !answer1 === 2 || !answer1 === 3 || !answer1 === 4 || !answer1 === 5 || !answer1 === 6 || !answer1 === 8 || !answer1 === 9 || !answer1 === 10) { answer1 = parseInt(prompt('please enter a number from 1-10(How much do you think I can swim)')); }

  }

};

f3 ();










//Q4

let f4 = function()
{



  for (let i = 1; i <= 4; i++) {
    let answer1 = parseInt(prompt('How do you think I am a calm person?'));
    if (answer1 === 8) {
      alert('Great that is the correct answer');
      correct1 = correct1 + 1;
      break;
    } else if (answer1 >= 6) {
      alert('too high');
    } else if (answer1 <= 6) {
      alert('too low ');
    } //else while (!answer1 === 1 || !answer1 === 2 || !answer1 === 3 || !answer1 === 4 || !answer1 === 5 || !answer1 === 6 || !answer1 === 8 || !answer1 === 9 || !answer1 === 10) { answer1 = parseInt(prompt('please enter a number from 1-10(How much do you think I can swim)')); }

  }

};

f4 ();

//Q5

let f5 = function()

{




  for (let i = 1; i <= 4; i++) {
    let answer = parseInt(prompt('How satisfied do you think I am that I studied computer engineering?'));
    if (answer === 7) {
      alert('Great that is the correct answer');
      correct1 = correct1 + 1;
      break;
    } else if (answer >= 5 && answer <= 9) {
      alert('too high');
    } else if (answer < 5 || answer === 10) {
      alert('too low ');
    }// else while (!answer === 1 || !answer === 2 || !answer === 3 || !answer === 4 || !answer === 5 || !answer === 6 || !answer === 8 || !answer === 9 || !answer === 10) { answer = parseInt(prompt('please enter a number from 1-10(How much do you think I can swim)')); }

  }



};

f5();




//Q6

let f6 = function()
{





  for (let i = 1; i <= 4; i++) {
    let answer1 = parseInt(prompt('How often do you think I use lies in my life?'));
    if (answer1 === 1) {
      alert('Great that is the correct answer');
      correct1 = correct1 + 1;
      break;
    } else if (answer1 >= 3) {
      alert('too high');
    } else if (answer1 > 3) {
      alert('too low ');
    } //else while (!answer1 === 1 || !answer1 === 2 || !answer1 === 3 || !answer1 === 4 || !answer1 === 5 || !answer1 === 6 || !answer1 === 8 || !answer1 === 9 || !answer1 === 10) { answer1 = parseInt(prompt('please enter a number from 1-10(How much do you think I can swim)')); }

  }


};


prompt('youer correct answer is  ' + correct1);








//q7


let correct2 = 0;
let youranswer = [];
let cars = ['kia', 'bmw', 'ford'];
let f7= function ()
{





  let an = prompt('What kind of cars did you drive before').toLowerCase();


  for (let i = 1; i <= 6; i++) {
    if (an === cars[0] || an === cars[1] || an === cars[2]) {
      alert('Great that is the correct answer');
      correct2 = correct2 + 1;
      youranswer.push(an);
      break;
    // console.log(an)
    } else if (an !== cars[0] && an !== cars[1] && an !== cars[2] && an !== cars[2] && an !== '') {
      alert('not correct ');
      youranswer.push(an);
      an = prompt('What kind of cars did you drive before').toLowerCase();
      // console.log(an)

    } else {
      i = i - 1;
      while (an == '') { an = prompt('Agine : What kind of cars did I drive before').toLowerCase(); }

    }

  }
};

f7();


alert('youer  answer is  ' + youranswer);
alert('the correct answer is  ' + cars);


/*

// q2
let q2 = prompt('What are the social media applications on Mobily? ').toLowerCase();
let myanswerq2 = ['facebook', 'instgram', 'whatsapp', ];
let youranswerq2 = [];
for (let i = 1; i <= 6; i++) {
  if (q2 === myanswerq2[0] || q2 === myanswerq2[1] || q2=== myanswerq2[2]) {
    alert('Great that is the correct answer')
    correct2 = correct2 + 1;
    youranswerq2.push(q2);
    break;
    // console.log(an)
  } else if (q2 !== myanswerq2[0] && q2 !== myanswerq2[1] && q2 !== myanswerq2[2] && q2 !== myanswerq2[2] && q2!== '') {
    alert('not correct ')
    youranswerq2.push(q2);
     q2 = prompt('What are the social media applications on Mobily? ').toLowerCase();
    // console.log(aq)

  } else {
    i = i - 1;
    while (q2 == '') { q2 = prompt('What are the social media applications on Mobily').toLowerCase(); }

  }

}

alert('youer  answer is  ' + youranswerq2)
alert('the correct answer is  ' + myanswerq2)


//q3
 q2 = prompt('In which of the governorates of Jordan have I lived during my life? ').toLowerCase();

 myanswerq2 =  ['amman', 'tafila'];
 youranswerq2 = [];
for (let i = 1; i <= 6; i++) {
  if (q2 === myanswerq2[0] || q2 === myanswerq2[1] || q2=== myanswerq2[2]) {
    alert('Great that is the correct answer')
    correct2 = correct2 + 1;
    youranswerq2.push(q2);
    break;
    // console.log(an)
  } else if (q2 !== myanswerq2[0] && q2 !== myanswerq2[1] && q2 !== myanswerq2[2] && q2 !== myanswerq2[2] && q2!== '') {
    alert('not correct ')
    youranswerq2.push(q2);
     q2 = prompt('What are the social media applications on Mobily? ').toLowerCase();
    // console.log(aq)

  } else {
    i = i - 1;
    while (q2 == '') { q2 = prompt('Agine : In which of the governorates of Jordan have I lived during my life? ').toLowerCase(); }

  }
}

//q4
q2 = prompt('Where have I traveled').toLowerCase();
 myanswerq2 =  ['turkey', 'syria', 'Egypt' ];
 youranswerq2 = [];
for (let i = 1; i <= 6; i++) {
  if (q2 === myanswerq2[0] || q2 === myanswerq2[1] || q2=== myanswerq2[2]) {
    alert('Great that is the correct answer')
    correct2 = correct2 + 1;
    youranswerq2.push(q2);
    break;
    // console.log(an)
  } else if (q2 !== myanswerq2[0] && q2 !== myanswerq2[1] && q2 !== myanswerq2[2] && q2 !== myanswerq2[2] && q2!== '') {
    alert('not correct ')
    youranswerq2.push(q2);
     q2 = prompt('Where have I traveled ').toLowerCase();
    // console.log(aq)

  } else {
    i = i - 1;
    while (q2 == '') { q2 = prompt('Agine : In which of the governorates of Jordan have I lived during my life? ').toLowerCase(); }

  }
}
// q5
q2 = prompt(' In which rooms of the house do I spend most of my time when I am programming?').toLowerCase();
 myanswerq2 =  [ 'living room ', 'bed room'];
 youranswerq2 = [];
for (let i = 1; i <= 6; i++) {
  if (q2 === myanswerq2[0] || q2 === myanswerq2[1] || q2=== myanswerq2[2]) {
    alert('Great that is the correct answer')
    correct2 = correct2 + 1;
    youranswerq2.push(q2);
    break;
    // console.log(an)
  } else if (q2 !== myanswerq2[0] && q2 !== myanswerq2[1] && q2 !== myanswerq2[2] && q2 !== myanswerq2[2] && q2!== '') {
    alert('not correct ')
    youranswerq2.push(q2);
     q2 = prompt('Where have I traveled ').toLowerCase();
    // console.log(aq)

  } else {
    i = i - 1;
    while (q2 == '') { q2 = prompt('Agine :  In which rooms of the house do I spend most of my time when I am programming? ').toLowerCase(); }

  }
}



//q6
q2 = prompt(' What do I eat or drink when I am sad? ').toLowerCase();
 myanswerq2 =  [ 'nescafe', 'popcorn'];
 youranswerq2 = [];
for (let i = 1; i <= 6; i++) {
  if (q2 === myanswerq2[0] || q2 === myanswerq2[1] || q2=== myanswerq2[2]) {
    alert('Great that is the correct answer')
    correct2 = correct2 + 1;
    youranswerq2.push(q2);
    break;
    // console.log(an)
  } else if (q2 !== myanswerq2[0] && q2 !== myanswerq2[1] && q2 !== myanswerq2[2] && q2 !== myanswerq2[2] && q2!== '') {
    alert('not correct ')
    youranswerq2.push(q2);
     q2 = prompt('Where have I traveled ').toLowerCase();
    // console.log(aq)

  } else {
    i = i - 1;
    while (q2 == '') { q2 = prompt('Agine : What do I eat or drink when I am sad? ').toLowerCase(); }

  }
}


//q7
q2 = prompt('What applications did we use to coding in 102 Course Code?').toLowerCase();
 myanswerq2 =  [ 'nescafe', 'popcorn'];
 youranswerq2 = [];
for (let i = 1; i <= 6; i++) {
  if (q2 === myanswerq2[0] || q2 === myanswerq2[1] || q2=== myanswerq2[2]) {
    alert('Great that is the correct answer')
    correct2 = correct2 + 1;
    youranswerq2.push(q2);
    break;
    // console.log(an)
  } else if (q2 !== myanswerq2[0] && q2 !== myanswerq2[1] && q2 !== myanswerq2[2] && q2 !== myanswerq2[2] && q2!== '') {
    alert('not correct ')
    youranswerq2.push(q2);
     q2 = prompt('Where have I traveled ').toLowerCase();
    // console.log(aq)

  } else {
    i = i - 1;
    while (q2 == '') { q2 = prompt('Agine : What applications did we use to coding in 102 Course Code?').toLowerCase(); }

  }
}*/
