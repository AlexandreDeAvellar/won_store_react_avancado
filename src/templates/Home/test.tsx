import { screen } from '@testing-library/react'
import '../../../.jest/match-media-mock'
import Home from '.'
import { renderWithTheme } from '../../utils/tests/helpers'

import { homeTemplateProps } from './home-mocks'

jest.mock('../../components/Showcase', () => ({ __esModule: true, default: jest.fn(() => <div data-testId={'Mock Showcase'}></div>) }))
jest.mock('../../components/BannerSlider', () => ({ __esModule: true, default: jest.fn(() => <div data-testId={'Mock BannerSlider'}></div>) }))

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...homeTemplateProps} />)
    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(5)
    // expect(1).toBe(1)
    expect(screen.getByTestId('Mock BannerSlider')).toBeInTheDocument()
  })
})
