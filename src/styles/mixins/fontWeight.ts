import { css, FlattenSimpleInterpolation } from 'styled-components'

export const fontWeight = (
  fontColor: string,
  endSecondsAnimation: string | number = '0.3s'
): FlattenSimpleInterpolation => {
  return css`
    -webkit-transition: all ${endSecondsAnimation};
    -moz-transition: all ${endSecondsAnimation};
    -o-transition: all ${endSecondsAnimation};
    transition: all ${endSecondsAnimation};

    &:hover {
      color: ${fontColor};
      text-shadow:
        -0.2px -0.2px 0 ${fontColor},
        0.2px -0.2px 0 ${fontColor},
        -0.2px 0.2px 0 ${fontColor},
        0.2px 0.2px 0 ${fontColor};

      -webkit-transition: all 0.4s;
      -moz-transition: all 0.4s;
      -o-transition: all 0.4s;
      transition: all 0.4s;
    }
  `
}
