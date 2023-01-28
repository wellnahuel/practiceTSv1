const multiplicator = (a: number, b: number, printText: string) => {
    console.log(printText, a * b); //los tipos los defino con dos puntos, tengo muchisimos más que los primitivos de JS (ver)
}

multiplicator(2, 4, 'Multiplied numbers 2 and 4, the result is: ')
//si en el primer parametro meto algo distinto a un numero, por ejemplo un string , ya el VSC sin correr el programa empieza a decirme que hay algo mal. 

// Parsear argumentos
const parseArguments = (args): number[] => { //en lugar de Array<number>, puede ir number[]...
    if (args.length !== 4) throw new Error('Wrong number of arguments');

    const firstNumber = Number(args[2]);
    const secondNumber = Number(args[3]);

    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        return [
            firstNumber,
            secondNumber
        ]
    }
    throw new Error('Provided values were not numbers!!!')
};

console.log('1', process.argv) //la primer posicion es el ts-node , el ejecutor
//la segunda posicion es el nombre del archivo, todo esto es lo del package.json

/* [
    'D:\\typescript-bootcamp\\node_modules\\ts-node\\dist\\bin.js',
    'D:\\typescript-bootcamp\\multiplier.ts',
    '3',
    '4'
] */

const cleanArguments = parseArguments(process.argv);

console.log('cleanArguments', cleanArguments)

const a: number = Number(cleanArguments[0]); // Se está obligando a volverse un tipo número
const b: number = Number(cleanArguments[1]); // Se está obligando a volverse un tipo número
console.log('2', process.argv)
console.log('3', a)
console.log('4', b)

multiplicator(a, b, `Multiplied ${a} and ${b}, and the result is: `)