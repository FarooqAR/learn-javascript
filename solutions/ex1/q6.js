var names = ['Muhammad Ali', 'ahsan Bashir', 'Azarafrooz Hameed'];
var emails = [];
for (var i = 0; i < names.length; i++) {
  var first = '';
  var last = '';
  var email = '';
  var name = names[i];

  for (var j = 0; j < name.length; j++) {
    if (name[j] === ' ') {
      break;
    }
    first += name[j];
  }
  // get the rest of the string after space
  last = name.slice(j + 1).toLowerCase();

  if (first.length > 8) {
    first = first[i];
  }
  else {
    first = first.toLowerCase();
  }
  email = first + '.' + last + '@saylani.org';
  emails.push(email);
}