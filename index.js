//es una vocal?
const isVocal = (letra) => {
    const vocales = 'AEIOU'
    let tmp = letra.split("")
    const r = tmp.length == 1 ?
        (
            tmp = tmp.join(),
            vocales.includes(tmp.toUpperCase())
        ) :
        (
            false
        )
    return r
}



export { isVocal }

