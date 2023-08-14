export default function sorting (heroes) {
  let result = heroes.sort(function (a, b) {
    if (a.health > b.health) {
      return -1;
    }
    if (a.health < b.health) {
      return 1;
    }
  });
  return result
}
