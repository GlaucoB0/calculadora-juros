programa {
  funcao inicio() {
    real montante, capital, taxa, potencia, tempo, jurossimples, juroscompostos 

    escreva ("Digite o valor do capita (em reais)" + "\n")
    leia (capital)

    escreva ("Digite a taxa de juros (exemplo: 12, representando 12%) " + "\n")
    leia (taxa)
    potencia = taxa/100 

    escreva ("Digite o tempo da aplicação em anos (exemplo: 12 meses será escrito 1)" + "\n")
    leia (tempo)

    jurossimples = capital * potencia * tempo 
    escreva ("O juros simples foi de: " + jurossimples + "\n")
   
    montante = capital + jurossimples 
    escreva ("O montante (valor futuro) é de: " + montante + "\n" )

    escreva ("Agora falando sobre juros compostos \n")

    montante = capital * (1+potencia)*(1+potencia)
    escreva ("O valor dos juros compostos foi de: " + montante + "\n" )
  }
}