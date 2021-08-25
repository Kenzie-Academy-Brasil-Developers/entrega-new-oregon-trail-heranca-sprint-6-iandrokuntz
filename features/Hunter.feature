# language: pt

    Funcionalidade: Hunter
    
        Como um Hunter
        Eu devo caçar
        Para me manter saudável na viagem

    Contexto:

        Dado um Hunter de nome "kenzinho"
        E ele sempre começa a viagem com 2 de refeição
        E ele sempre começa a viagem saudável

    Cenário: Comeu e continua saudável
        
        Quando o Hunter comer 1 vezes
        Então a quantidade de refeiçôes deve ser igual a 0
        E o Hunter não ficará doente

    Cenário: Comeu e ficou doente

        Quando o Hunter comer 2 vezes
        Então a quantidade de refeiçôes deve ser igual a 0
        E o Hunter ficará doente

    Cenário: Caçou e teve mais refeiçôes

        Quando o Hunter sair para caçar 1 vezes
        Então a quantidade de refeiçôes deve ser igual a 7

    Cenário: Doou comida para algum traveler
       
        Quando o Hunter doa 1 comida para um viajante.
        Então a quantidade de comida do Hunter deve ser igual a 1.
        E o Traveler ficará com 2 refeições.



