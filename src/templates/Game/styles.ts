import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { Container } from '../../components/Container'

export const Wrapper = styled.div``

type CoverProps = {
  src: string
}

export const Cover = styled.div<CoverProps>`
  ${({ src }) => css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 39.5rem;
    background-image: url(${src});
    background-size: cover;
    background-position: top center;
    opacity: 0.4;

    ${media.greaterThan('medium')`
      /* height: 70rem; */
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
    `}
  `}
`

export const Main = styled.main`
  margin-top: 20rem;
  ${media.greaterThan('medium')`
    margin-top: 27rem;
  `}
`

const Section = styled(Container).attrs({ as: 'section' })`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xlarge};
    ${media.greaterThan('medium')`
      margin-bottom: calc(${theme.spacings.xlarge} * 1.5);
    `}
  `}
`

export const SectionGameInfo = styled(Section)``

export const SectionGallery = styled(Section)`
  display: none;
  ${media.greaterThan('medium')`
    display: block;
  `}
`

export const SectionDescription = styled(Section)`
  ${({ theme }) => css`
    .description__copyrights {
      color: ${theme.colors.gray};
      font-size: ${theme.font.sizes.xsmall};
      margin-top: ${theme.spacings.medium};
    }
  `}
`

export const SectionDetails = styled(Section)`
  ${({ theme }) => css`
    > div {
      padding-bottom: ${theme.spacings.xlarge};
      border-bottom: 0.1rem solid rgba(181, 181, 181, 0.3);
      ${media.greaterThan('medium')`
    padding-bottom: calc(${theme.spacings.xxlarge} * 2);
  `}
    }
  `}
`
