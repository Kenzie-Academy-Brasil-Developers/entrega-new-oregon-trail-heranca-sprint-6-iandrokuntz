# language: pt

    Funcionalidade:

        Como um Doctor
        Eu devo curar outros travelers
        Para que possam seguir viagem saudáveis

    Contexto:

        Dado um Doctor de nome "Ricardo"
        E ele sempre começa a viagem com 1 de refeição
        E ele sempre começa a viagem saudável

    Cenário: Comeu

        Quando o Doctor come 1 vezes
        Então a quantidade de comida deve ser igual a 0
        E o Doctor não ficará doente

    Cenário: Curou algum traveler

        Quando o Doctor cura um traveler
        Então o traveler ficará saudável