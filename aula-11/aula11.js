let alunos = [
    {
        ra:1010,
        nome: "Fulano",
        idade: 20
    },
    {
        nome: "Fulano",
        idade: 20,
        ra: 1011

    }
]
    alunos.map(aluno => {
        console.log(aluno.ra);
        console.log(aluno.nome);
        console.log(aluno.idade);
    })
   

let aluno1 = [1010, "Fulano", 20,
             "Fulano", 21, 1011];

aluno1.map(aluno => {
    console.log(aluno1);
})             