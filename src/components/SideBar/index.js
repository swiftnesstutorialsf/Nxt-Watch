import {Component} from 'react'
import MenuItemList from '../MenuItemList'
import ThemeContext from '../../context/ThemeContext'
import {
  Container,
  LogoIcons,
  ContactUsContainer,
  Text,
} from './styledComponents'

class sideBar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const theme = isDarkTheme ? 'dark' : 'light'

          return (
            <Container theme={theme}>
              <MenuItemList />
              <ContactUsContainer>
                <Text theme={theme}>CONTACT US</Text>

                <div>
                  <LogoIcons
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <LogoIcons
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <LogoIcons
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </div>
                <Text theme={theme}>
                  Enjoy! Now to see your channels and recommendations!
                </Text>
              </ContactUsContainer>
            </Container>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default sideBar
