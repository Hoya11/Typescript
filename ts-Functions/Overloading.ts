// 오버로딩은 함수가 여러개의 콜시그니쳐를 가졌을때 생김

// type Push = {
//   (path: string): void;
//   (config: object): void;
// };

// const push: Push = (config) => {
//   if (typeof config === "string") {
//     console.log(config);
//   } else {
//     console.log(config.path, config.state);
//   }
// };

type Add = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const add: Add = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

add(1, 2);
add(1, 2, 3);
