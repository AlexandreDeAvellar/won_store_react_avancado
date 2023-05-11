import styled, { css } from 'styled-components'

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    margin: ${theme.spacings.medium} 0;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    gap: ${theme.spacings.medium};
  `}
`
