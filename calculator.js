function squareNumber(num)
{
    var squareNumber = num * num;
    console.log('The result of squaring the number ' + num + ' is ' + squareNumber);
    return squareNumber;
}

squareNumber (5);

/////////////////////////////////////////////////////

function halfNumber(num)
{
    var halfNumber = (num) / 2;
    console.log('Half of ' + num + ' is ' + halfNumber);
    return halfNumber;
}

halfNumber(8);

/////////////////////////////////////////////////////

function percentOf(num1, num2)
{
    var percentOf = (num1) % (num2);
    console.log(num1 + ' is ' + '50% of ' + num2)
    return percentOf;
}

percentOf(5, 10);