export const lineUnderText: Function = (
  firstColor: string,
  hoverColor: string,
  width: string | number = '100%',
  height: string | number = '7px',
  positionLeft: string | number = '0px',
  positionBottom: string | number = 0,
  opacity: string | number = 0.4
): string => {
  return `
  &::after {
    content: " ";
    position: absolute;
    border-radius: 1.5px;
    background: ${firstColor};
    width: ${width};
    height: ${height};
    left: ${positionLeft};
    bottom: ${positionBottom};
    z-index: -10;
    opacity: ${opacity};
    transition: background var(--transition);
  }

  :hover {
    &::after {
      background: ${hoverColor};
    }
  }
  `
}
