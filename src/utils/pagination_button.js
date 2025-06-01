export function PaginationButton(number) {
  const numbers = [];

  for (let i = 1; i <= number; i++) {
    numbers.push(i);
  }

  return numbers;
}
