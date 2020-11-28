  //@ts-nocheck
import { css } from 'styled-components';
import theme from './theme';

export const media: any = Object.keys(theme.breakpoints).reduce(
  (acc: { [key: string]: Function }, key) => {
    acc[key] = (...rest: any) => css`
      @media (max-width: ${theme.breakpoints[key]}) {
        ${css(...rest)}
      }
    `;
    return acc;
  },
  {}
);
