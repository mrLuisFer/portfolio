export const afterBtn = (text: string, top: string = '', left: string = '') => {
  return `
  &::after {
    content: ${text};
    position: absolute;
    background: var(--dark-gray);
    width: auto;
    height: auto;
    top: ${top};
    left: ${left};
    padding: 0.5rem;
    font-family: var(--open-sans-font);
    color: var(--gainsboro);
    font-size: 0.7rem;
    border-radius: var(--radius);
    visibility: hidden;
    animation: 0.4s fadeIn;
    animation-fill-mode: forwards;
    transition: all var(--transition);
    -webkit-transition: all var(--transition);
}

@keyframes fadeIn {
  99% {
    visibility: hidden;
  }
  100% {
    visibility: visible;
  }
  `
}

// const Box = styled(
//   styled.div({
//     background: 'yellow',
//     height: '50px',
//     width: '50px',
//   })
// )`
//   &::after {
//     content: 'after';
//   }
// `
