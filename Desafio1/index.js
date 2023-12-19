let heroName = "Pantera Negra";
let amountXP = 9001;
let nivel = ""

if (amountXP < 1000) {
    nivel = "Ferro";
} else if (amountXP >= 1001 && amountXP <= 2000) {
    nivel = "Bronze";
} else if (amountXP >= 2001 && amountXP <= 5000) {
    nivel = "Prata";
} else if (amountXP >= 6001 && amountXP <= 7000) {
    nivel = "Ouro";
} else if (amountXP >= 7001 && amountXP <= 8000) {
    nivel = "Platina";
} else if (amountXP >= 8001 && amountXP <= 9000) {
    nivel = "Ascendente";
} else if (amountXP >= 9001 && amountXP <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

console.log("O Herói de nome " + heroName + " está no nível de " + nivel);
