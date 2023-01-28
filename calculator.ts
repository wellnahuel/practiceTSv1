type Operation = 'multiply' | 'add' | 'divide'
type Result = number | string   //el export es como en js con los modulos, puedo reutilizarlo donde quiera
const calculator = (a: number, b: number, op: Operation): Result => { //puedo elegir que es lo que quiero que devuelva, antes de la flecha van dos puntos 
    if (op === 'multiply') return a * b
    if (op === 'add') return a + b
    if (op === 'divide') {
        if (b === 0) throw new Error('cant divide by 0!')
        return a / b
    }
    throw new Error('Operation is not valid')
}
const result = calculator(1, 4, 'add')
console.log(result)
