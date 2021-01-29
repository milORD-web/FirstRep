"use strick";
const age = +prompt('Сколко тебя лет?', "");

const profile = {
    Ages: age,
    intr: [],
    FnameLname:{}

};

const int1 = prompt('Скажи свое хоби?', ""),
      int2 = prompt('Скажи что ты делаешь на выходных?', ""),
      Fname = prompt('Какая у тебя фамилиия?', ''),
      Lname = prompt('Как тебя зовут?', '');

profile.intr[0] = [int1],
profile.intr[1] = [int2],


profile.FnameLname['FirstName'] = Fname,
profile.FnameLname['LastName'] = Lname;
console.log(profile);

