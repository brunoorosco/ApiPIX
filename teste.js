const words = ['cat', 'odg', 'ogd', 'atc', 'tac', 'god']

const anagrama = (words) => {
    const anagramas = {}

    words.forEach((word, position) => {
        const ordenaPalavra = word.split('').sort().join(''); //coloca a palavra da iteração em ordem alfabetica 

        if (anagramas[ordenaPalavra]) { //se existe a palavras analisada

            return anagramas[ordenaPalavra].push(position); //inseri a posição da palavra original no grupo da palvra analisada e retona para o inicio
        }
        anagramas[ordenaPalavra] = [position]; //inseri a posição da analisada quando ela ainda não existe 
    });
    return anagramas;
}

const final = (groupedAnagrams) => {
    let arrayFinal = []

    for (const sortedWord in groupedAnagrams) { //iterage no grupos de anagrama
        arrayFinal.push(groupedAnagrams[sortedWord]) //faz um push na variavel final
    }
    return arrayFinal
}

console.log(final(anagrama(words)))