import ServicesHtml from './ServicesHtml/ServicesHtml'

import { ServicesContainer, ServicesStyled } from './Services.styles'
import CardTitle from '../CardsTitle/CardTitle'

export default function Services(): JSX.Element {
  return (
    <ServicesStyled>
      <CardTitle titleSpan='Services:' marginBottom='2rem' withMarginBottom />
      <ServicesContainer>
        <ServicesHtml
          title='Web Development'
          iconClass='fas fa-laptop-code'
          description='I like to create quality websites, good design and solve problems that are necessary for users'
          linkReference='https://en.wikipedia.org/wiki/Web_development'
        />
        <ServicesHtml
          title='HTML & CSS'
          iconClass='fas fa-code'
          description='I like to develop small projects and design applications with these two markup and style languages'
          linkReference='https://en.wikipedia.org/wiki/HTML'
        />
        <ServicesHtml
          title='Javascript'
          iconClass='fab fa-js-square'
          description='I like to develop small projects and design applications with these two markup and style languages'
          linkReference='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
        />
        <ServicesHtml
          title='Ui Design'
          iconClass='far fa-object-group'
          description='I like to develop my designs using tools to deliver a better quality product'
          linkReference='https://uxplanet.org/what-is-ui-vs-ux-design-and-the-difference-d9113f6612de'
        />
        <ServicesHtml
          title='Mobile Development'
          iconClass='fas fa-mobile-alt'
          description='I like to develop small applications on mobile devices using React Native'
          linkReference='https://en.wikipedia.org/wiki/React_Native'
        />
        <ServicesHtml
          title='In progress...'
          iconClass='fas fa-spinner rotate'
          description='Learning new things🌟'
        />
      </ServicesContainer>
    </ServicesStyled>
  )
}
