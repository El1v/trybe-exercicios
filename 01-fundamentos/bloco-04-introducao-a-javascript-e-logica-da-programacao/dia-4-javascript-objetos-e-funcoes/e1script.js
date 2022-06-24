let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente : 'Sim',
}

// console.log("Bem vindo, ", info.personagem);

info.recorrente = "Sim";

// console.log(info);

// for(let index in info){ 
//     console.log(index); 
// }

for(let index in info){

    if(index === "recorrente" & info[index] === info2[index]){
        console.log("Ambos são recorrentes");
    }else{
        console.log(info[index] , " " , info2[index]);
    }
}

