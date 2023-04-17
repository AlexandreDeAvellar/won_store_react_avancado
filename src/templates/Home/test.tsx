import { screen } from '@testing-library/react'
import '../../../.jest/match-media-mock'
import Home from '.'
import { renderWithTheme } from '../../utils/tests/helpers'
import theme from '../../styles/theme'

import { homeTemplateProps } from './home-mocks'

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...homeTemplateProps} />)
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByText(/All Rights reserved/i)).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /News/i })).toHaveStyle({ 'border-left': `0.7rem solid ${theme.colors.secondary}` })
    expect(screen.getByRole('heading', { name: /Most Popular/i })).toHaveStyle({ 'border-left': `0.7rem solid ${theme.colors.secondary}` })
    expect(screen.getByRole('heading', { name: /Upcomming/i })).toHaveStyle({ 'border-left': `0.7rem solid ${theme.colors.secondary}` })
    expect(screen.getByRole('heading', { name: /Free Games/i })).toHaveStyle({ 'border-left': `0.7rem solid ${theme.colors.secondary}` })
  })
})
