const multiplicator = (a: number ,b: number, printText: string) => {
    console.log(printText, a * b) //los tipos los defino con dos puntos, tengo muchisimos más que los primitivos de JS (ver)
}

multiplicator(2 ,4 , 'Multiplied numbers 2 and 4, the result is: ')
//si en el primer parametro meto algo distinto a un numero, por ejemplo un string , ya el VSC sin correr el programa empieza a decirme que hay algo mal. 