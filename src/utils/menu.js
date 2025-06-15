import sprite from "../img/icon/icon-sprite.svg";

export function star(number) {
  const arr = [];
  for (let i = 1; i <= number; i++) {
    arr.push(i);
  }

  // const stars = arr.map((ar, index) => {
  //   return (
  //     <svg key={index} className={s.icon} width={16} height={16}>
  //       <use href={`${sprite}#icon-star`} />
  //     </svg>
  //   );
  // });
  return arr;
}
