import { HighlightProps } from '../../components/Highlight'
import { getImageUrl } from '../../graphql/graphql-config'

export type HighlightGraphqlProps = {
  title: string
  subtitle: string
  background: {
    data: {
      attributes: {
        url: string
      }
    }
  }
  floatImage?: {
    data: {
      attributes: {
        url: string
      }
    }
  }
  buttonLink?: string
  buttonLabel?: string
  alignment?: 'right' | 'left'
}

export const highlightTransform = ({
  title,
  subtitle,
  background,
  floatImage,
  alignment = 'right',
  buttonLabel = '',
  buttonLink = ''
}: HighlightGraphqlProps): HighlightProps => {
  return {
    title,
    subtitle,
    backgroundImage: `${getImageUrl(background.data.attributes.url)}`,
    floatImage: `${getImageUrl(floatImage?.data.attributes.url || '')}`,
    buttonLabel,
    buttonLink,
    alignment
  }
}
