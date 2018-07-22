var arr = ['heLlO woRlD', 'i like JavaScript', 'my name Is kHaN'];
var capArr = [];
for (var j = 0; j < arr.length; j++) {
    var str = arr[j];
    var cap = '';

    for (var i = 0; i < str.length; i++) {
        if (i === 0 || str[i - 1] === ' ') {
            cap += str[i].toUpperCase();
        }
        else {
            cap += str[i].toLowerCase();
        }
    }

    capArr.push(cap);
}