// 9-1.
// Для заданої сторінки знайдіть всі < h2 > з класом head, зробіть для них зелений колір фону, потім
// серед знайдених елементів знайдіть елементи з класом inner і поставте їм розмір шрифту 35px.

let $head = $(".head");
$head.addClass("BGCgreen");
$head.find(".inner").addClass("font-size");

// 9-2.
// На HTML - сторінці є посилання < a >.У випадку коли, href починається на https://,
// потрібно додати посиланню атрибут target = "_blank".
let links = $("a[href *= 'https://']").prop("target", "_blank");
console.log(links);
console.log($("a"));
// 9-3.
// Знайдіть теги < div >, які стоять безпосередньо після < h3 > і перемістіть кожен < div > -
// елемент так, щоб він став безпосередньо над < h3 >.
$("h3 + div").each(function () {
  $(this).insertBefore($(this).prev("h3"));
});
// 9-4.
// На HTML - сторінці є 6 чекбоксів.Напишіть скріпт, який після того, як користувач позначив
// будь - які 3 чекбокси, всі чекбокси робить неактивними.

// let input = document.querySelector("input");
// input.value = "off";
// console.log(input.value);

$(document).ready(function () {
  $(".checkbox").change(function () {
    let chekCounter = $(".checkbox:checked").length;
    if (chekCounter >= 3) {
      $(".checkbox").prop("disabled", true);
    }
  });
});
