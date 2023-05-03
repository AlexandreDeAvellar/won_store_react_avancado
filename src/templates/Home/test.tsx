import { screen } from '@testing-library/react'
import '../../../.jest/match-media-mock'
import Home from '.'
import { renderWithTheme } from '../../utils/tests/helpers'

import { homeTemplateProps } from './home-mocks'

jest.mock('../../components/Menu', () => ({ __esModule: true, default: jest.fn(() => <div data-testId={'Mock Menu'}></div>) }))
jest.mock('../../components/Showcase', () => ({ __esModule: true, default: jest.fn(() => <div data-testId={'Mock Showcase'}></div>) }))
jest.mock('../../components/BannerSlider', () => ({ __esModule: true, default: jest.fn(() => <div data-testId={'Mock BannerSlider'}></div>) }))
jest.mock('../../components/Footer', () => ({ __esModule: true, default: jest.fn(() => <div data-testId={'Mock Footer'}></div>) }))

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...homeTemplateProps} />)
    expect(screen.getByTestId('Mock Menu')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(5)
    expect(screen.getByTestId('Mock BannerSlider')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Footer')).toBeInTheDocument()
  })
})
