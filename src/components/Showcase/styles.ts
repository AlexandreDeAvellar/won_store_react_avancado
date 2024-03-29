import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as HeadingStyles from '../Heading/styles'
import { Container } from '../Container'
import * as GameCardSliderStyles from '../../components/GameCardSlider/styles'
import * as HighlightStyles from '../../components/Highlight/styles'

// export const Wrapper = styled.div`
export const Wrapper = styled(Container).attrs({ as: 'section' })`
  ${({ theme }) => css`
    margin: 0 auto;
    ${HeadingStyles.Wrapper},
    ${HighlightStyles.Wrapper},
    ${GameCardSliderStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }
    ${HighlightStyles.Wrapper} {
      ${media.lessThan('medium')`
        margin-right: calc(-${theme.grid.gutter} / 2);
        margin-left: calc(-${theme.grid.gutter} / 2);
      `}
    }
    ${GameCardSliderStyles.Wrapper} {
      ${media.lessThan('huge')`
        margin-right: calc(-${theme.grid.gutter} / 2);
      `}
    }
    margin-bottom: calc(${theme.spacings.large} * 2);
  `}
`
