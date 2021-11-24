import ServicesHtml from './ServicesHtml/ServicesHtml'

import { ServicesContainer, ServicesStyled } from './Services.styles'
import CardTitle from '../CardsTitle/CardTitle'

export default function Services(): JSX.Element {
  const windowSize = window.innerWidth

  return (
    <ServicesStyled>
      <CardTitle titleSpan='Services:' marginBottom='2rem' withMarginBottom />
      <ServicesContainer>
        <ServicesHtml
          title={windowSize > 380 ? 'Web Development' : 'Web Dev'}
          iconClass='fas fa-laptop-code'
          description='I create quality websites, good design and solve problems that are necessary for users'
          linkReference='https://en.wikipedia.org/wiki/Web_development'
        />
        <ServicesHtml
          title='HTML & CSS'
          iconClass='fas fa-code'
          description='I develop projects and design applications with these two markup and style languages'
          linkReference='https://en.wikipedia.org/wiki/HTML'
        />
        <ServicesHtml
          title='Javascript'
          iconClass='fab fa-js-square'
          description='I love develop applications and personal projects using this language, it is my first language and I appreciate it too much.'
          linkReference='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
        />
        <ServicesHtml
          title='Ui Design'
          iconClass='far fa-object-group'
          description='I develop my designs using tools to deliver a better quality product'
          linkReference='https://uxplanet.org/what-is-ui-vs-ux-design-and-the-difference-d9113f6612de'
        />
        <ServicesHtml
          title={windowSize > 380 ? 'Mobile Development' : 'Mobile Dev'}
          iconClass='fas fa-mobile-alt'
          description='I develop applications on mobile devices using React Native'
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
