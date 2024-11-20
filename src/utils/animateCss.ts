// this must always be added to have the element animated
const animated: string = 'animate__animated'

// animation speeds
const fast: string = 'animate__fast'
const faster: string = 'animate__faster'

// these are the animations that you should use importing them and using the variable name
const fadeIn: string = `${animated} animate__fadeIn`
const bounceIn: string = `${animated} animate__bounceIn ${fast}`
const zoomIn: string = `${animated} animate__zoomIn ${faster}`
const fadeInRightBig: string = `${animated} animate__fadeInRightBig ${faster}`
const slideInLeft: string = `${animated} animate__slideInLeft ${faster}`
const slideUp: string = `${animated} animate__slideInUp ${faster}`

// Here just add the name of the animation to export and be able to use it in different files
export { fadeIn, bounceIn, zoomIn, fadeInRightBig, slideInLeft, slideUp }
