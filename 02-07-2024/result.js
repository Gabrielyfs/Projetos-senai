//console.log(!true);

const animais = ['macaco', 'tucano', 'elefante', 'pavão', 'hipopótamo', 'leão'];

if (animais.includes(!"leão")) {
    console.log("Não existe um leão no array animais.");
} else {
    console.log("Existe um leão no array animais.")
}
console.log("");

let phrase = "";
const functions = [
    function () { return 'Plymouth' },
    function () { return 'é' },
    function () { return 'uma' },
    function () { return 'cidade' },
    function () { return 'fantasma' },
    function () { return 'localizada' },
    function () { return 'na' },
    function () { return 'ilha' },
    function () { return 'de' },
    function () { return 'Montserrat,' },
    function () { return 'um' },
    function () { return 'território' },
    function () { return 'ultramarino' },
    function () { return 'do' },
    function () { return 'Reino' },
    function () { return 'Unido' },
    function () { return 'localizado' },
    function () { return 'na' },
    function () { return 'cadeia' },
    function () { return 'de' },
    function () { return 'Ilhas' },
    function () { return 'de' },
    function () { return 'Sotavento' },
    function () { return 'nas' },
    function () { return 'Pequenas' },
    function () { return 'Antilhas,' },
    function () { return 'Índias' },
    function () { return 'Ocidentais.' }
  ];

for (let i = 0; i < functions.length; i++) {
    phrase += functions[i]() + ' ';
    //phrase += `${functions[i]()} `
}

console.log(phrase);

//for (let g = 0; g < names.length; g++) {
//    templatesNames += `<li>${names[g]}</li>`;
