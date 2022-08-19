import {mult, splitToWords, sum} from "./01";

let a:number;
let b:number;
let c:number;

beforeEach(() => {
    a = 5;
    b = 3;
    c = 10
})

test('sum should be correct', () => {
    // action
    const result1 = sum(a, b);
    const result2 = sum(b, c);

    // expect result
    expect(result1).toBe(8);
    expect(result2).toBe(13);
})

test('mult should be correct', () => {
    // action
    const result1 = mult(a, b);
    const result2 = mult(b, c);

    // expect result
    expect(result1).toBe(15);
    expect(result2).toBe(30);
})

test('split words should be correct', () => {
    const sentence1 = 'Hello  my friend!';
    const sentence2 = 'Js - good programming language.';

    const result1 = splitToWords(sentence1);
    const result2 = splitToWords(sentence2);

    expect(Array.isArray(result1)).toBe(true);
    expect(result1.length).toBe(3);
    expect(result1[0]).toBe('hello');
    expect(result1[1]).toBe('my');
    expect(result1[2]).toBe('friend');

    expect(Array.isArray(result2)).toBe(true);
    expect(result2.length).toBe(4);
    expect(result2[0]).toBe('js');
    expect(result2[1]).toBe('good');
    expect(result2[2]).toBe('programming');
    expect(result2[3]).toBe('language');

})