function sorteio() {
    const concorrentes = [
        '@leticiapyres', '@garotaxd','@leledeveloper','@_sergiomoura', '@andreyaraujo.dev', '@weslleyoliveiradev', '@jornadadeumdev',
        '@jornadadeumdev', '@jornadadeumdev', '@venadesigner', '@venadesigner', '@wil_limaofc'
        ];
    const randomConcorrente = concorrentes[Math.floor(Math.random() * concorrentes.length)];
    document.getElementById('resultado').innerHTML= `Parabéns, ${randomConcorrente}! Você ganhou um convite para o ClubHouse!`;
    };
    