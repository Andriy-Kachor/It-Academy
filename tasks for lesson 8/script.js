// 8-1.
// Напишіть функцію, яка перевірятиме чи перший символ в рядку написаний в верхньому регістрі,
// чи ні.
// Приклад роботи:
// upperCase('regexp');
// "String's not starts with uppercase character"
// upperCase('RegExp');
// "String's starts with uppercase character"

function upperCase(text) {
  let regExp = /^[A-Z]{1}/;
  let result = regExp.test(text);
  if (result) {
    return `String: "${text}" is starts with uppercase character`;
  } else {
    return `String: "${text}" is not starts with uppercase character`;
  }
}

console.log(upperCase("regexp"));
console.log(upperCase("RegExp"));

// 8-2.
// Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу.
// Валідними вважаються всі символи на різних позиціях.
// Приклад роботи:
// checkEmail("Qmail2@gmail.com");
// true

function checkEmail(email) {
  let regExp = /^((\w.)+@{1}([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/;
  let result = regExp.test(email);
  return result;
}

console.log(checkEmail("Qmail2@gmail.com"));

// 8-3.
// Напишіть регулярний вираз, який в рядковому тексті 2 підстрічки буде міняти місцями.
// Приклад роботи:
// Вхідний рядок    "Java Script"
// Вихід    “Script, Java”

let str = `Java Script`;
let newStr = str.replace(/(\w+)\s+(\w+)/, "$2,$1");
console.log(newStr);

// 8-4.
// Напишіть функцію, яка виконуватиме валідацію номера банківської карти (9999-9999-9999-9999).

function checkBankCard(bankCard) {
  let regExp = /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/;
  let result = regExp.test(bankCard);
  return result;
}

console.log(checkBankCard("9999-9999-9999-9999"));

// 8-5.
// Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу.
// Вимоги:
// •  Цифри (0-9).
// •  Тільки латинські літери в великому (A-Z) і малому (a-z) регістрах.
// •  В тілі емейла допустимі лишеі символи “_” і “-”. Але вони не можуть бути 1-им символом емейлу.
// •  Символ “-” не може повторюватися.

// checkEmail('my_mail@gmail.com');
// "Email is correct!"
// checkEmail('#my_mail@gmail.com');
// "Email is not correct!"
// checkEmail('my_ma--il@gmail.com');
// "Email is not correct!"

function checkEmail2(email) {
  let regExp =
    /^(([0-9A-Za-z]{1}[0-9A-z-_]?[0-9A-z_]+)@{1}([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/;
  let result = regExp.test(email);
  return result;
}
console.log(checkEmail2("my_mail@gmail.com"));
console.log(checkEmail2("#my_mail@gmail.com"));
console.log(checkEmail2("my_ma--il@gmail.com"));

// 8-6.
// Напишіть функцію, яка перевіряє правильність логіна. Правильний логін - рядок від 2 до
// 10 символів, що містить лише букви та числа, номер не може бути першим. Функція має приймати
// рядок і знаходити усі числа в цьому рядку, включаючи числа з плаваючою комою(наприклад, 3.4).
// Приклад роботи:
// checkLogin('ee1.1ret3');
// true
// //1.1, 3

// checkLogin('ee1*1ret3');
// false
// //1, 1, 3

function checkLogin(str) {
  const reqexLogin = /^[a-zA-z]{1}([a-zA-Z]|\d+(?:\.\d+)?){1,9}$/;
  const reqexNums = /[-+]?\d*\.?\d+/g;
  console.log(str.match(reqexNums));
  return reqexLogin.test(str);
}

console.log(checkLogin("ee1.1ret3"));
console.log(checkLogin("ee1*1ret3"));
