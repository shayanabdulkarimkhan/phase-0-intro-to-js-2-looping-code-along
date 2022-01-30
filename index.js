// Code your solutions in this file
/*
for (let age = 30; age<40; age++){
    console.log(`I'm ${age} years old. Happy Birthday to me!`);
   // debugger;
   
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);
*/


function writeCards(name,event) {    
    
    let msgArray = [];
    let initString = `Thank you,`;
    let giftString = `for the wonderful ${event} gift!`;
    
    for (let i=0; i<name.length ; i++){     
        
        debugger;

        msgArray [i] = `${initString} ${name[i]}, ${giftString}`;

        //return msgArray[i];

        

    }

    return msgArray;       
    
}

function countDown(i) {

    let count = i;

    while (count > -1){
        console.log(count);
        count--;
    }
    
}




