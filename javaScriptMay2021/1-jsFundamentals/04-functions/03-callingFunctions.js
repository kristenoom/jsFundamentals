function checkOddEven(result){
    var isEven = result % 2 == 0
    if(isEven){
        console.log('checkOddEven Function:',result,' is Even');
    }
    else
    {
        console.log('checkOddEven Function:',result,' is Odd');
    }
}
 
console.log(checkOddEven(7));