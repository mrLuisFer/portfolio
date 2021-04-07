export const afterBtn = (text: string, top: number = 0, left: number = 0) => {
  return `
  &::after {
    content: ${text};
    position: absolute;
    background: var(--dark-gray);
    width: auto;
    height: auto;
    top: ${top}rem;
    left: ${left}rem;
    padding: 0.5rem;
    font-family: var(--open-sans-font);
    color: var(--gainsboro);
    font-size: 0.7rem;
    border-radius: var(--radius);
    visibility: hidden;
    animation: 0.6s fadeIn;
    animation-fill-mode: forwards;
    transition: all var(--transition);
    -webkit-transition: all var(--transition);
  }
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
