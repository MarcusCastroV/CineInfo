import { extendTheme } from '@chakra-ui/react'
import { colors } from './colors'

const activeLabelStyles = {
  transform: 'scale(0.8) translateY(-24px)'
}

export const theme = extendTheme({
  colors: {
    brand: colors
  },
  styles: {
    global: {
      'html, body': {
        fontFamily: 'Andika',
        padding: 0,
        margin: 0,
        backgroundColor: colors.background
      }
    }
  },
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles
              }
            },
            'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label':
              {
                ...activeLabelStyles
              },
            label: {
              top: 1,
              left: 0,
              zIndex: 2,
              position: 'absolute',
              backgroundColor: 'transparent',
              pointerEvents: 'none',
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: 'left top'
            }
          }
        }
      }
    }
  }
})
