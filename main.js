let str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`

console.log('--- 정규식 생성 ---');
// 생성자
// const regexp = new RegExp('the', 'gi');

// 리터럴
// 문자열.match(정규식): 일치하는 문자의 배열(Array) 반환
const regexpMatch = /the/gi
console.log(str.match(regexpMatch));

// 정규식.test(문자열): 일치 여부(Boolean) 반환
const regexpTest = /fox/gi
console.log(regexpTest.test(str));

const regexpReplace = /fox/gi
console.log(str.replace(regexpReplace, 'AAA'));

// 원본에 저장(재할당)
// str = str.replace(regexpReplace, 'AAA');
console.log(str);


console.log('--- 플래그(옵션) ---');
const regexp1 = /the/
console.log(str.match(regexp1));

const regexp2 = /the/g
console.log(str.match(regexp2));

const regexp3 = /the/gi
console.log(str.match(regexp3));
console.log(str.match(/the/gi));

// 이스케이프 문자(Escape Character)란 \(백슬래시) 기호를 통해 본래의 기능에서 벗어나 상태가 바뀌는 문자를 말한다.
console.log(str.match(/\./gi));
// $: $ 앞에 있는 하나의 단어로 그 해당하는 줄이 끝나는 부분을 찾아서 끝나는 부분을 일치시킨다는 뜻
console.log(str.match(/\.$/gim));


console.log('--- 패턴(표현) ---');
console.log(str.match(/d$/gm));
console.log(str.match(/^t/gim));

console.log(str.match(/./g));
console.log(str.match(/h..p/g));

console.log(str.match(/fox|dog|over/g));

console.log(str.match(/https?/g));

console.log(str.match(/d{2}/));
console.log(str.match(/d{2}/g));
console.log(str.match(/d{2,}/g));
console.log(str.match(/d{2,3}/g));
// \w: 63개 문자(Word, 대소영문 32개 + 숫자 10개 + _)에 일치
console.log(str.match(/\w{2,3}/g));
// \b...\b: 63개 문자에 일치하지 않는 문자 경계(Boundary)
console.log(str.match(/\b\w{2,3}\b/g));

console.log(str.match(/[fox]/g));

console.log(str.match(/[0-9]/g));
console.log(str.match(/[0-9]{1,}/g));

console.log(str.match(/[가-힣]{1,}/g));

console.log(str.match(/\w/g));

console.log(str.match(/\bf\w{1,}\b/g));

console.log(str.match(/\d/g));
console.log(str.match(/\d{1,}/g));

const h = `  the hello  world  !

`
console.log(str.match(/\s/g));
console.log(h.match(/\s/g));
// 활용
console.log(h.replace(/\s/g, ''));

console.log(str.match(/.{1,}(?=@)/g));

console.log(str.match(/(?<=@).{1,}/g));