import { screen, waitFor } from '@testing-library/react'
import Radio, { RadioProps } from '.'
import { renderWithTheme } from '../../utils/tests/helpers'
import theme from '../../styles/theme'
import { userEvent } from '@storybook/testing-library'

const props: RadioProps = {
  label: 'Radio',
  labelFor: 'radio'
}

describe('<Radio />', () => {
  it('should render with label', () => {
    renderWithTheme(<Radio {...props} />)
    expect(screen.getByRole('radio')).toBeInTheDocument()
    expect(screen.getByLabelText(/Radio/i)).toBeInTheDocument()
    expect(screen.getByText(/Radio/i)).toHaveAttribute('for', 'radio')
  })

  it('should render without label', () => {
    renderWithTheme(<Radio />)
    expect(screen.queryByLabelText('Radio')).not.toBeInTheDocument()
  })

  it('should render with black label', () => {
    renderWithTheme(<Radio {...props} labelColor="black" />)
    expect(screen.getByText(props.label!)).toHaveStyle({ color: theme.colors.black })
  })

  it('should dispatch onCheck when label status changes', async () => {
    const onCheck = jest.fn()
    renderWithTheme(<Radio {...props} onCheck={onCheck} value="anyValue" />)
    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByLabelText('Radio'))
    await waitFor(() => expect(onCheck).toHaveBeenCalledTimes(1))
    expect(onCheck).toHaveBeenCalledWith('anyValue')
  })

  it('should be accessible with tab', async () => {
    renderWithTheme(<Radio {...props} />)
    expect(document.body).toHaveFocus()
    userEvent.tab()
    expect(screen.getByRole('radio')).toHaveFocus()
  })
})
