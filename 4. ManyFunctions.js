
//정해진 숫자만큼 출력하는 함수 만들기 --> printNums (start,end) .... (from, to) ..... (begin,end) ....

function printNums(start, end) {
    for (let i = 0; i <= end; i++) {
        console.log(i)

    }

}

const result = printNums(1,10)
console.log(result)
// return 값이 지정되지 않았으므로 해당 위치에 undefined 나옴

//예제 1 출력 test
function printNames(str1, str2 = "111", str3 = "222") { // -> "111", "222" 같은걸 기본값이라 함
    console.log(str1)
    console.log(str2)
    console.log(str3)
}

printNames()
printNames("AAA")
printNames("AAA", "BBB")
printNames("AAA", "BBB", "CCC")

// 예제 2 계산기
function calc(a, b, fn) { //fn은 함수
    console.log("A: " +a)
    console.log("B: " +b)

    const result = fn(a + 1, b + 1)
    return result

}

console.log(calc(10,20 ,(x,y) => x + y))

console.log(calc(10,20 ,(x,y) => x - y))



// 로또 번호 생성 함수 만들기

// 배열을 주면 max값을 찾아내는 함수 만들기

// 배열을 주면 min값을 찾아내는 함수 만들기

// 매출/월