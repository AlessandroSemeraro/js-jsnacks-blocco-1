//chiedere all'utente con due prompt gli anni di due persone e comunicare quale delle due è più grande//

const userMomAge = prompt('how old is your mother?');



const userDadAge = prompt('how old is your father?');


if ( userMomAge > userDadAge ) {

   console.log ('my mom is ' + userMomAge + ' years old') ;
 }

else if ( userMomAge < userDadAge ) {
    
    console.log('my dad is ' + userDadAge + ' years old');

} 