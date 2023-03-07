import { useState } from 'react'
import { Text } from 'components/atoms'
import {
  Input as ChakraInput,
  InputGroup,
  InputRightElement,
  Button
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

export const Input = (props) => (
  <>
    <ChakraInput
      h="56px"
      fontSize="16px"
      bg="transparent"
      focusBorderColor="transparent"
      _focus={{
        borderBottom: '2px solid black',
        outline: 'transparent'
      }}
      _hover={{
        borderColor: 'brand.black'
      }}
      borderTop="transparent"
      borderX="transparent"
      borderBottom="1px"
      color="brand.white"
      {...props}
    />
    {props.error && <Text color="red">{props.error}</Text>}
  </>
)

Input.Password = ({ value, onChange, id, name, ...props }) => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <>
      <InputGroup size="md" {...props}>
        <Input
          name={name}
          id={id}
          onChange={onChange}
          focusBorderColor="transparent"
          _focus={{
            borderBottom: '2px solid black',
            outline: 'transparent'
          }}
          value={value}
          pr="4.5rem"
          fontSize="16px"
          type={show ? 'text' : 'password'}
        />
        <InputRightElement h="100%">
          <Button
            bg="transparent"
            _hover={{ bg: 'transparent' }}
            size="sm"
            onClick={handleClick}
            h="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {show ? (
              <ViewOffIcon boxSize="24px" color="brand.black" />
            ) : (
              <ViewIcon boxSize="24px" color="brand.black" />
            )}
          </Button>
        </InputRightElement>
      </InputGroup>
      {props.error && <Text color="red">{props.error}</Text>}
    </>
  )
}

Input.Password.displayName = 'InputPassword'
