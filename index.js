1. Обрезать пробелы
let str1 = " hi ";
console.log(str1.trim()); // "hi"

2. Проверка чётности
let n2 = 4;
if (n2 % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}

3. Вывести каждый символ отдельно
let str3 = "text";
for (let i = 0; i < str3.length; i++) {
    console.log(str3[i]);
}

4. Количество букв 'a'
let str4 = "banana";
let count4 = 0;
for (let char of str4) {
    if (char === 'a') count4++;
}
console.log(count4);

5. Сумма чисел от 1 до n
let n5 = 5;
let sum5 = 0;
for (let i = 1; i <= n5; i++) {
    sum5 += i;
}
console.log(sum5);

6. Все заглавные, кроме первой
let str6 = "hello";
// Берём первый символ + остаток строки в верхнем регистре
let res6 = str6[0] + str6.slice(1).toUpperCase();
console.log(res6); // "hELLO"

7. Количество цифр в числе
let n7 = 12345;
console.log(String(n7).length);

8. Содержит ли строка подстроку
let str8 = "hello world";
let sub8 = "world";
console.log(str8.includes(sub8) ? "yes" : "no");

9. Реверс строки (вручную)
let str9 = "hello";
let res9 = "";
for (let i = str9.length - 1; i >= 0; i--) {
    res9 += str9[i];
}
console.log(res9); // "olleh"

10. Проверка на палиндром
let str10 = "level";
let isPalindrome = true;
for (let i = 0; i < str10.length / 2; i++) {
    // Сравниваем символ с начала и с конца
    if (str10[i] !== str10[str10.length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}
console.log(isPalindrome); // true

11-20: Циклы и манипуляции строками
11. Заменить 'a' на '*' (вручную)
let str11 = "banana";
let res11 = "";
for (let char of str11) {
    if (char === 'a') res11 += '*';
    else res11 += char;
}
console.log(res11); // "b*n*n*"

12. Сумма цифр числа
let n12 = 123;
let s12 = String(n12);
let sum12 = 0;
for (let char of s12) {
    sum12 += parseInt(char); // Или +char
}
console.log(sum12); // 6

13. Максимальная цифра числа
let n13 = 5834;
let s13 = String(n13);
let maxDigit = 0;
for (let char of s13) {
    if (+char > maxDigit) maxDigit = +char;
}
console.log(maxDigit); // 8

14. Количество пробелов
let str14 = "hello my world";
let spaces = 0;
for (let char of str14) {
    if (char === ' ') spaces++;
}
console.log(spaces);

15. Строка из 10 звёздочек
let stars = "";
for (let i = 0; i < 10; i++) {
    stars += "*";
}
console.log(stars); // "**"

16. Удалить все цифры
let str16 = "a1b2c3";
let res16 = "";
for (let char of str16) {
    // Если символ НЕ цифра (от 0 до 9)
    if (!(char >= '0' && char <= '9')) {
        res16 += char;
    }
}
console.log(res16); // "abc"

17. Удалить гласные
let str17 = "hello";
let vowels = "aeiouAEIOU";
let res17 = "";
for (let char of str17) {
    if (!vowels.includes(char)) {
        res17 += char;
    }
}
console.log(res17); // "hll"

18. Обратный регистр
let str18 = "AbCdE";
let res18 = "";
for (let char of str18) {
    if (char === char.toUpperCase()) {
        res18 += char.toLowerCase();
    } else {
        res18 += char.toUpperCase();
    }
}
console.log(res18); // "aBcDe"

19. "Hello World" (Каждое слово с большой буквы, без массивов)
let str19 = "hello world test";
let res19 = "";
for (let i = 0; i < str19.length; i++) {
    // Если это первый символ ИЛИ перед ним был пробел
    if (i === 0 || str19[i - 1] === ' ') {
        res19 += str19[i].toUpperCase();
    } else {
        res19 += str19[i];
    }
}
console.log(res19); // "Hello World Test"

20. Количество слов (через пробелы)
let str20 = "one two three";
let wordsCount = 0;
// Если строка не пустая, то слов минимум 1
if (str20.length > 0) wordsCount = 1;

for (let char of str20) {
    if (char === ' ') wordsCount++;
}
console.log(wordsCount); // 3

21. Простое число
let n21 = 7;
let isPrime = true;
if (n21 < 2) isPrime = false;
for (let i = 2; i < n21; i++) {
    if (n21 % i === 0) {
        isPrime = false;
        break;
    }
}
console.log(isPrime ? "простое" : "нет");

22. Каждый второй символ заглавный
let str22 = "abcdef";
let res22 = "";
for (let i = 0; i < str22.length; i++) {
    if (i % 2 !== 0) { // Индексы 1, 3, 5...
        res22 += str22[i].toUpperCase();
    } else {
        res22 += str22[i];
    }
}
console.log(res22); // "aBcDeF"

23. Двойные пробелы на одиночные
let str23 = "hello  world  here";
// Простой способ циклом:
while (str23.includes("  ")) {
    str23 = str23.replace("  ", " ");
}
console.log(str23);

24. Первая цифра слева
let n24 = 5834;
console.log(String(n24)[0]); // "5"

25. Первая цифра справа (последняя)
let n25 = 5834;
console.log(n25 % 10); // 4

26. Удалить повторы (уникальные символы)
let str26 = "hello";
let res26 = "";
for (let char of str26) {
    if (!res26.includes(char)) {
        res26 += char;
    }
}
console.log(res26); // "helo"

27. Зеркальное число
let n27 = 1234;
let s27 = String(n27);
let resStr = "";
for (let i = s27.length - 1; i >= 0; i--) {
    resStr += s27[i];
}
console.log(Number(resStr)); // 4321

28. Оставить только буквы
let str28 = "a!b?c#1";
let res28 = "";
for (let char of str28) {
    // Проверка: латиница a-z или A-Z
    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
        res28 += char;
    }
}
console.log(res28); // "abc"

29. Валидация пароля
let pass = "Pass123";
let hasDigit = false;
let hasLetter = false;

for (let char of pass) {
    if (char >= '0' && char <= '9') hasDigit = true;
    if (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') hasLetter = true;
}

if (pass.length >= 6 && hasDigit && hasLetter) {
    console.log("OK");
} else {
    console.log("BAD");
}

30. Функция "Лесенка"
function stair(s) {
    let current = "";
    for (let char of s) {
        current += char;
        console.log(current);
    }
}
stair("Hi");
/*
Вывод:
H
Hi
*/

31-39: Функции и алгоритмы
31. Количество заглавных букв
function countUpperCase(str) {
    let count = 0;
    for (let char of str) {
        if (char >= 'A' && char <= 'Z') count++;
    }
    return count;
}

32. Нет двух одинаковых подряд
function checkDoubles(str) {
    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] === str[i + 1]) return false;
    }
    return true;
}
console.log(checkDoubles("hello")); // false
console.log(checkDoubles("abc"));   // true

33. Строка из цифр 1..n
function generateNumStr(n) {
    let res = "";
    for (let i = 1; i <= n; i++) {
        res += i;
    }
    return res;
}

34. Количество предложений
function countSentences(text) {
    let count = 0;
    let marks = ".!?";
    for (let char of text) {
        if (marks.includes(char)) count++;
    }
    return count;
}

35. Зеркально перевернуть ТОЛЬКО цифры
function reverseDigitsOnly(str) {
    // 1. Собираем все цифры
    let digits = "";
    for (let char of str) {
        if (char >= '0' && char <= '9') digits += char;
    }
    
    let result = "";
    let digitIndex = digits.length - 1; // Указатель на конец строки цифр
    
    for (let char of str) {
        if (char >= '0' && char <= '9') {
            result += digits[digitIndex];
            digitIndex--;
        } else {
            result += char;
        }
    }
    return result;
}
console.log(reverseDigitsOnly("a1b23c")); // "a3b21c"

36. Строка содержит ровно n цифр
function checkDigitCount(str, n) {
    let count = 0;
    for (let char of str) {
        if (char >= '0' && char <= '9') count++;
    }
    return count === n;
}

37. Числовая лесенка
function numStair(n) {
    let numStr = String(n);
    let current = "";
    for (let char of numStr) {
        current += char;
        console.log(current);
    }
}
numStair(123);

Pekusik, [20.11.2025 21:48]
38. Каждая буква заменяется на следующую
function shiftChars(str) {
    let res = "";
    for (let char of str) {
        let code = char.charCodeAt(0);
        
        // Если 'z', то 'a'
        if (char === 'z') res += 'a';
        else if (char === 'Z') res += 'A';
        // Проверка, является ли буквой вообще
        else if ((char >= 'a' && char < 'z') || (char >= 'A' && char < 'Z')) {
            res += String.fromCharCode(code + 1);
        } else {
            res += char; // Если не буква, оставляем как есть
        }
    }
    return res;
}
console.log(shiftChars("abc z")); // "bcd a"

39. Счастливое число
function isLucky(num) {
    let s = String(num);
    
    // Если длина нечетная — сразу нет
    if (s.length % 2 !== 0) return false;
    
    let mid = s.length / 2;
    let sum1 = 0;
    let sum2 = 0;
    
    // Считаем первую половину
    for (let i = 0; i < mid; i++) {
        sum1 += Number(s[i]);
    }
    
    // Считаем вторую половину
    for (let i = mid; i < s.length; i++) {
        sum2 += Number(s[i]);
    }
    
    return sum1 === sum2;
}
console.log(isLucky(123321)); // true (6 === 6)
