import assert from 'node:assert'
import { isVocal } from './index.js'

const test = (nombre, valor, funcion) => {
    try {
        const r = assert.ok(funcion(valor))
        console.log(`TEST: ${nombre} => pasa el TEST ✅`)
    } catch (error) {
        console.log(`TEST: ${nombre} => RESULTADO ESPERADO: ${error.expected}, RESULTADO OBTENIDO: ${error.actual} ❌`)
    }


}

test("¿ES VOCAL O NO?", "k" ,isVocal)
