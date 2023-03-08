export function currency(num) {
  if (!num) {
    return;
  } else {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
export function date(time) {
  const localDate = new Date(time * 1000);
  return localDate.toLocaleDateString();
}
