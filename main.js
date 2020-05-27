/* ---------------------------------------
    author           : Ahmed Hamdy 
    date of creation : 27-5-2020 12:40 AM 
   ---------------------------------------*/

/* ====================
   ===== variables ==== 
   ==================== */

let currentResult = document.getElementsByClassName('current')[0];  
let lastCalculated = document.getElementsByClassName('last-calculated')[0] ; 
const numbers = document.getElementsByClassName('number') ;  
const operators = document.getElementsByClassName('op') ;  
const equalBtn = document.getElementsByClassName('equal')[0] ;  
const clearBtn = document.getElementsByClassName('c')[0] ;  
const backSpace = document.getElementsByClassName('back-space')[0] ; 
let i = 0 ; 
let calculated = false ; 
const operatorsSet = ['+' , '-' , '*' , '/'] ; 
/* ====================
   ===== functions ==== 
   ==================== */
function clearCurrent(){
    currentResult.innerText = '' ; 
}  

function clearLast(){
    lastCalculated.innerText = '' ; 
}

function getCurrent(){
    return currentResult.toString() ; 
}

function deleteLastChar(){
    currentResult.innerText = currentResult.innerText.slice(0 , -1 ) ;  
}

function calculateResult(){
    let equation = currentResult.innerText ;
    if(operatorsSet.includes( equation[equation.length -1]) ){
        deleteLastChar() ; 
        equation = currentResult.innerText ;
    } 
    let result = eval(equation) ;
    if(result == 'Infinity'){
        currentResult.innerText = "Can't Devide by Zero !" ; 
        lastCalculated.innerText = '' ; 
    } else{
        if((result%1) > 0 ){
            console.log(result) ; 
            result = result.toFixed(3) ; 
            console.log( result) ; 
        }
        lastCalculated.innerText = currentResult.innerText + '=' + result ;  
        currentResult.innerText = result ;
    }
    calculated = true ; 
}

/* click event handler for numbers  */
for(i = 0 ; i < numbers.length ; i++ )
{
    numbers[i].addEventListener('click' , function(){
        if(calculated == true){
            currentResult.innerText = '' ; 
            calculated = false ; 
        }
        currentResult.innerText += this.id ; 
    }); 
}

/* click enent handler for operators */
for(i = 0 ; i < operators.length ; i++)
{
    operators[i].addEventListener('click' , function(){
        // can't take * and / at the beginning 
        if( (this.id == '*' || this.id == '/') && currentResult.innerText =='' ){

        }else{
            if( operatorsSet.includes(currentResult.innerText[ currentResult.innerText.length -1 ])){
                 
            }else{
                if(calculated = true){
                    calculated = false ; 
                }
                currentResult.innerText += this.id ;
            }
             
        }
    }); 
}

/* click event handler for clear button */
clearBtn.addEventListener('click' , clearCurrent ) ; 

/* click event handler for backspace button */
backSpace.addEventListener('click' , deleteLastChar) ; 

/* click event handler for equal button */
equalBtn.addEventListener('click' , calculateResult) ; 
