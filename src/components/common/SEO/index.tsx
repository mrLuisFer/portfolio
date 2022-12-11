import { NextSeo } from 'next-seo'
import PropTypes from 'prop-types'

interface SEOProps {
  title: string
  description: string
  [props: string]: any
}

export default function SEO({ title, description, ...props }: SEOProps) {
  return (
    <NextSeo
      title={title}
      description={description}
      defaultTitle='Portfolio | mrLuisFer'
      canonical='https://portfolio-mrluisfer.vercel.app/'
      openGraph={{
        type: 'website',
        url: 'https://portfolio-mrluisfer.vercel.app/',
        siteName: 'mrLuisFer',
        title,
        description,
      }}
      twitter={{
        cardType: 'summary_large_image',
        handle: '@_mrluisfer',
        site: '@_mrluisfer',
      }}
      {...props}
    />
  )
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
