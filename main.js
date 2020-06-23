// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Straight solution, woorks okay also:
// const validateCred = (cardArr) =>{
  
//   for(let cards = 0; cards < cardArr.length; cards++){
//       let sum = 0;
//       for (let cardNum = cardArr[cards].length -1; cardNum >= 0; cardNum--){
//             if (cardNum % 2 === 0){
//                 if (cardArr[cards][cardNum] * 2 > 9){
//                     sum += (cardArr[cards][cardNum] * 2) - 9;
//                 }
//                 if (cardArr[cards][cardNum] * 2 <= 9){
//                     sum += (cardArr[cards][cardNum] * 2);
//                 }
//             }else{
//                 sum += cardArr[cards][cardNum];
//             }
//         }

//         const company = com =>{
//             for (let i = 0; i < com.length; i++){
//                 if (com[0] === 3){
//                     return 'Amex (American Express)'
//                 }else if(com[0] === 4){
//                     return 'Visa'
//                 }else if(com[0] === 5){
//                     return 'MasterCard'
//                 }else if(com[0] === 6){
//                     return 'Discovery'
//                 }else{
//                     return 'Company not found'
//                 }
//             }
//         }

//         if(sum % 10 === 0){
//             console.log(cardArr[cards] + " is a valid card produced by: " + company(cardArr[cards]))
//         }else{
//             console.log(cardArr[cards] + " is an invalid card produced by: " + company(cardArr[cards]))
//         }
//     }
  
// }

// Return true if card is valid or false if not
const validateCred = cardCheck =>{
    let sum = 0;// add the sum of numbers with Luhn algorithm
    //interate through numbers on card
    for(let i = cardCheck.length -1; i >= 0; i--){
        if(i % 2 === 0){
            if((cardCheck[i] * 2) > 9){
                sum +=  (cardCheck[i] * 2) - 9;
            }else{
                sum += cardCheck[i] * 2;
            }
        }else{
            sum += cardCheck[i];
        }
    }
    // check if the sum is a valid card or not
    if(sum % 10 === 0){
        return true;
    }else{
        return false;
    }
}

// return invalid cards 
const findInvalidCards = invalidcards =>{
    let cards = [];
    
    for(let i = 0; i < invalidcards.length; i++ ){
        let sum = 0;
        for(let j = invalidcards[i].length-1; j >= 0; j--){
            if(j % 2 === 0){
                if((invalidcards[i][j] * 2) > 9){
                    sum += (invalidcards[i][j] * 2) - 9;
                }else{
                    sum += invalidcards[i][j] * 2;
                }
            }else{
                sum += invalidcards[i][j];
            }
        }
        if(sum % 10 !== 0){
            cards.push(invalidcards[i]);
        }
    }
    return cards;
}

// return invalid company distinctively 
const idInvalidCardCompanies = cardNum =>{
    let invalidcom = [];
    for(let i = 0; i < cardNum.length; i++){
        //invalidcom.push(cardNum[i][0]);

        if(cardNum[i][0] === 3){
          invalidcom.push("Amex (American Express")
        }else if(cardNum[i][0] === 4){
          invalidcom.push("Visa")
        }else if(cardNum[i][0] === 5){
          invalidcom.push("Mastercard")
        }else if(cardNum[i][0] === 6){
          invalidcom.push("Discovery")
        }else{
          invalidcom.push("Company not found")
        }
    }
    const distintCompany = [...new Set(invalidcom)];
    return distintCompany;
    
}
console.log(idInvalidCardCompanies(batch))
//idInvalidCardCompanies(batch)
//idInvalidCardCompanies(findInvalidCards(batch))
//console.log(findInvalidCards(batch))
//console.log(validateCred(valid1))