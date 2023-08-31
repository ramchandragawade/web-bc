String.prototype.yell = function(){
    return `GO AWAYYYYY!!! ${this.toUpperCase()}!!!`
}
console.log('Raaj'.yell())
Array.prototype.pop = function(){
    return 'Cannot do this';
}
console.log([1,2,34,55].pop());