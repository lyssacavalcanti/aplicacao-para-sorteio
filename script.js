function sorteio() {
    const concorrentes = [
        'pessoa1', 'pessoa2', 'pessoa3','pessoa4','pessoa5','pessoa6','pessoa7','pessoa8', 'pessoa9','pessoa10',
        ];
    const randomConcorrente = concorrentes[Math.floor(Math.random() * concorrentes.length)];
    document.getElementById('resultado').innerHTML= `Parabéns, ${randomConcorrente}! Você ganhou um convite para o ClubHouse!`;
    };
    