const tailles = [42, 36, 38, 48, 43, 46, 43, 42, 44];

const grandsPieds = [];
const petitsPieds = [];
const piedsStyles = [];

for (const taille of tailles) {
  if (taille > 44) {
    grandsPieds.push(taille);
  } else if (taille < 43) {
    petitsPieds.push(taille);
  } else {
    piedsStyles.push(taille);
  }
}

console.log("Grands Pieds:", grandsPieds);
console.log("Petits Pieds:", petitsPieds);
console.log("Pieds Styles:", piedsStyles);
