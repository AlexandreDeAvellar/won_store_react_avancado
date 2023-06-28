import { BannerProps } from '../../../components/Banner'
import { graphql_host } from '../graphql_host'

export type BannerGraphqlProps = {
  data: [
    {
      attributes: {
        image: {
          data: {
            attributes: {
              url: string
            }
          }
        }
        title: string
        subtitle: string
        button: {
          label: string
          link: string
        }
        ribbon?: {
          text: string
          color: 'primary' | 'secondary'
          size: 'normal' | 'small'
        }
      }
    }
  ]
}

export const bannerTransform = ({ data }: BannerGraphqlProps): BannerProps[] => {
  const banners: BannerProps[] = data.map((b) => ({
    title: b.attributes.title,
    subtitle: b.attributes.subtitle,
    img: graphql_host + b.attributes.image.data.attributes.url,
    buttonLabel: b.attributes.button.label,
    buttonLink: b.attributes.button.link,
    ribbon: b.attributes?.ribbon?.text,
    ribbonColor: b.attributes?.ribbon?.color,
    ribbonSize: b.attributes?.ribbon?.size
  }))

  return banners
}
