import styled, { css } from 'styled-components'
import { HighlightProps } from '.'
import media from 'styled-media-query'

type WrapperProps = Pick<HighlightProps, 'backgroundImage' | 'alignment'>

const wrapperContent = {
  right: () => css`
    grid-template-areas: 'floatimage content';
    ${Content} {
      text-align: right;
    }
  `,
  left: () => css`
    grid-template-areas: 'content floatimage';
    ${Content} {
      text-align: left;
    }
    ${FloatImage} {
      justify-self: end;
    }
  `
}

export const Wrapper = styled.section<WrapperProps>`
  ${({ backgroundImage, alignment }) => css`
    position: relative;
    height: 15rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-image: url(${backgroundImage});
    background-position: center center;
    background-size: cover;

    ${wrapperContent[alignment!]()}

    ${media.greaterThan('medium')`
      height: 32rem;
    `}

    &::after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: rgba(0, 0, 0, 0.6);
    }
  `}
`

export const FloatImage = styled.img`
  ${({ theme }) => css`
    grid-area: floatimage;
    z-index: ${theme.layers.base};
    max-height: 10rem;
    max-width: 100%;
    align-self: end;

    ${media.greaterThan('medium')`
      max-height: 32rem;
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    z-index: ${theme.layers.base};
    padding: ${theme.spacings.xsmall};
    grid-area: content;

    ${media.greaterThan('medium')`
    align-self: end;
    padding: ${theme.spacings.large};
    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};

    ${media.greaterThan('medium')`
    font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`
export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.light};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xlarge};
    `}
  `}
`
