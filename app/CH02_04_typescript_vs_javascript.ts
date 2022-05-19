let age1 = 10; // 데이터를 설명 나이라는 것을 알 수 있다.
let x = 10; // 반면 x는 어디에 쓰이는지 알 수가 없다.

let age2 = 10; // 데이터 유형을 우리가 보고 알 수 있다.
let weight: number = 80; // 데이터 유형을 컴퓨터가 인식 할 수 있다.

type Centimeter = number; //숫자 유형에 우리가 의미를 부여한것이다.
let height: Centimeter = 176; //숫자 유형에 우리가 의미를 부여한것이다.

type RaninbowColor =
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "violet"; //코드가 자신을 표현하는 표현력이 풍성해질 수 있다.
let color: RaninbowColor = "orange"; // 무지개 컬러만 지정 할 수 있구나 라는것을 볼 수 있다.

//color = "black"; // [error 발생] 지정한 색만 넣울 수 있다.
//이렇게 미리 타입을 지정해주면 버그를 훨씬 많이 줄일 수 있다.
