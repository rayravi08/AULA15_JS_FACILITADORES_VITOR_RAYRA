//3 métodos facilitadores: includes, startWith e endsWith

//includes
let nomes = ["Amir", "Bemir", "Cemir"];
console.log(nomes);
console.log(nomes.includes("Bemir"));

if (nomes.includes("Amir")) {
  console.log("O meliante Amir está incluido em nosso array");
} else {
  console.log("O meliante Amir não está incluido em nosso array");
}

if (nomes.includes("Bemir")) {
  console.log("O meliante Bemir está incluido em nosso array");
} else {
  console.log("O meliante Bemir não está incluido em nosso array");
}

if (nomes.includes("Cemir")) {
  console.log("O meliante Cemir está incluido em nosso array");
} else {
  console.log("O meliante Cemir não está incluido em nosso array");
}

//startWith
let aluno = "Albano";
console.log(aluno.startsWith("Alb"));
console.log(aluno.startsWith("alb"));

//Endswith
console.log(aluno.endsWith("ano"));
