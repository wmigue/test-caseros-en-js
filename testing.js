import assert from 'node:assert'
import { isVocal } from './funciones.js'

const test = (nombre, valor, funcion) => {
    try {
        assert.ok(funcion(valor))
        console.log(`TEST: ${nombre} => pasa el TEST ✅`)
    } catch (error) {
        console.log(`TEST: ${nombre} => RESULTADO ESPERADO: ${error.expected}, RESULTADO OBTENIDO: ${error.actual} ❌`)
        console.log(error)
    }
}

test("¿ES VOCAL O NO?", "aa", isVocal)
