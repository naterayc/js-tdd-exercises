const fizzbuzz = (number) => {
    const res = [];
    for(let i=1; i<=number; i++){
        if(i % 3 === 0 && i % 5 === 0 || i.toString().indexOf(5) !== -1 && i.toString().indexOf(3) !== -1){
            res.push('FizzBuzz');
        }
        else if(i % 5 === 0 || i.toString().indexOf(5) !== -1){
            res.push('Buzz');
        } 
        else if(i % 3 === 0 || i.toString().indexOf(3) !== -1){
            res.push('Fizz');
        }
        else {
            res.push(i)
        }
    }
    return res.join(', ').trim();
}

module.exports = {
    fizzbuzz
}