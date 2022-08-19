export const sum = (a: number, b: number) => {
    return a + b;
}

export const mult = (a: number, b: number) => {
    return a * b;
}

export const splitToWords = (sentence: string) => {
    const splitedWords: Array<string> = sentence
        .toLowerCase()
        .split(' ')
        .map(word => {
            return word
                .replace('!', '')
                .replace('.', '')
                .replace(',', '')
                .replace('?', '')
                .replace('-', '')

        })
        .filter(word => word !== '' && word !== ' ');

    return splitedWords;
}