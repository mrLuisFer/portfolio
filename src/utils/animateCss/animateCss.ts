// esto debe ser agregado siempre para tener animado el elemento
const animated: string = "animate__animated"

// velocidades de la animacion
const fast: string = "animate__fast"
const faster: string = "animate__faster"

// estas son las animaciones que debes usar importandolas y usando el nombre de la variable
const fadeIn: string = `${animated} animate__fadeIn`
const bounceIn: string = `${animated} animate__bounceIn ${fast}`
const zoomIn: string = `${animated} animate__zoomIn ${faster}`
const fadeInRightBig: string = `${animated} animate__fadeInRightBig ${faster}`
const slideInLeft: string = `${animated} animate__slideInLeft ${faster}`
const slideUp: string = `${animated} animate__slideInUp ${faster}`

/* Aqui solo añade el nombre de la animacion para exportarla 
y poder usarla en diferentes archivos */
export { fadeIn, bounceIn, zoomIn, fadeInRightBig, slideInLeft, slideUp }
