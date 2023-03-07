import { Text as ChakraText } from '@chakra-ui/react'

export const Text = ({ children, ...props }) => (
  <ChakraText color="brand.white"{...props}>{children}</ChakraText>
)

Text.ScreenTitle = ({ children, ...props }) => (
  <ChakraText
    color="brand.white"
    fontSize="32px"
    fontWeight="extrabold"
    {...props}
  >
    {children}
  </ChakraText>
)

Text.ScreenTitle.displayName = 'ScreenTitle'
