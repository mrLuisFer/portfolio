import styled from 'styled-components'
import { large, ipad, veryLarge } from '../../styles/screens'
import { titleStyle } from '../../styles/titleStyle'

const SkillsStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

const SkillsSections = styled.div`
  margin-bottom: 0rem;

  @media (min-width: ${large}) {
    margin-bottom: 5rem;
  }
`

const SkillsSectionsTwo = styled(SkillsSections)`
  text-align: right;
`

const SkillsTitle = styled.p`
  ${titleStyle}
`

const SkillsCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;

  @media (min-width: ${ipad}) {
    align-items: center;
  }

  div {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23f0f7ff' fill-opacity='0.05'%3E%3Cpath fill-rule='evenodd' d='M11 0l5 20H6l5-20zm42 31a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM0 72h40v4H0v-4zm0-8h31v4H0v-4zm20-16h20v4H20v-4zM0 56h40v4H0v-4zm63-25a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM53 41a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-30 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-28-8a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zM56 5a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zm-3 46a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM21 0l5 20H16l5-20zm43 64v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zM36 13h4v4h-4v-4zm4 4h4v4h-4v-4zm-4 4h4v4h-4v-4zm8-8h4v4h-4v-4z'/%3E%3C/g%3E%3C/svg%3E");
    background: var(--oxford-dark-blue);
    color: var(--gainsboro);
    text-align: center;
    border-radius: var(--radius);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.7rem;
    font-size: 1rem;
    transition: var(--transition);

    @media (min-width: ${ipad}) {
      padding-left: 0.6rem;
    }

    span,
    i {
      font-size: 1.5rem;
      @media (min-width: ${ipad}) {
        font-size: 2rem;
      }
    }

    p {
      font-family: var(--open-sans-font);
      margin-left: 0.6rem;
      font-weight: 600;
    }

    &:hover {
      color: var(--oxford-dark-blue);
      background: var(--light-gray);
      box-shadow: 2px 2px 8px var(--shadow-color);
      transform: scale(1.05);
    }
  }
`

export const SkillsCardsContainerTwo = styled(SkillsCardsContainer)`
  justify-content: flex-end;
`

const SkillsIllustration = styled.img`
  margin: 2rem auto;
  width: 250px;

  @media (min-width: ${ipad}) {
    width: 330px;
    height: 300px;
    margin-bottom: 1rem;
  }

  @media (min-width: ${large}) {
    width: 400px;
    height: 350px;
    margin: 0;
  }

  @media (min-width: ${veryLarge}) {
    width: 450px;
    height: 420px;
  }

  transition: var(--transition);

  &:hover {
    transform: scale(1.05);
  }
`

const SkillsFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  @media (min-width: ${ipad}) {
    flex-direction: column;
  }

  @media (min-width: ${large}) {
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: space-between;
  }
`

export {
  SkillsStyled,
  SkillsSections,
  SkillsSectionsTwo,
  SkillsTitle,
  SkillsCardsContainer,
  SkillsIllustration,
  SkillsFlex,
}
