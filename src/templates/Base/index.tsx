import * as S from './styles'
import Menu from '../../components/Menu'
import { Container } from '../../components/Container'
import Footer from '../../components/Footer'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => (
  <section>
    <Menu />

    {children}

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
)
export default Base
