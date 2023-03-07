import { Button as ChakraButton } from '@chakra-ui/react'

export const Button = ({ children, ...props }) => {
  return (
    <ChakraButton
      fontSize="16px"
      fontWeight="bold"
      color="brand.white"
      h="56px"
      borderRadius="16px"
      border="1px"
      borderColor="brand.white"
      bg="brand.primary"
      _hover={{
        bg: 'brand.primary',
        transform: 'scale(1.03)'
      }}
      {...props}
    >
      {children}
    </ChakraButton>
  )
}
