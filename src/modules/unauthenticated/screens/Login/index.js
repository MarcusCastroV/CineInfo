import {
  Flex,
  FormControl,
  FormLabel,
  Spacer,
  Stack,
  Checkbox,
  Link
} from '@chakra-ui/react'
import { Button, Input, Text } from 'components'

export const LoginScreen = () => {
  return (
    <Flex
      h="100vh"
      backgroundImage="url('img/auth-background.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        w="25%"
        h="auto"
        backdropFilter="auto"
        backdropBlur="15px"
        boxShadow="dark-lg"
        p="6"
        rounded="md"
        direction="column"
        alignItems="flex-start"
      >
        <Flex w="100%" justifyContent="center">
          <Text.ScreenTitle>Entrar</Text.ScreenTitle>
        </Flex>
        <FormControl
          bgColor="transparent"
          mt="24px"
          variant="floating"
          id="email"
          aria-required="true"
        >
          <Input autocomplete="off" placeholder=" " />
          <FormLabel color="brand.grey">Email ou número de telefone</FormLabel>
        </FormControl>
        <FormControl
          mt="24px"
          variant="floating"
          id="password"
          aria-required="true"
        >
          <Input.Password autocomplete="off" placeholder=" " />
          {/* Efeito focus todo bugado nessa merda */}
          <FormLabel color="brand.grey">Senha</FormLabel>
        </FormControl>
        <Flex
          width="100%"
          mt="12px"
          alignItems="center"
          justifyContent="flex-end"
        >
          <Link color="brand.white">Esqueceu sua senha?</Link>
          {/* alterar para link depois */}
        </Flex>
        <Button w="100%" mt="24px">
          Entrar
        </Button>
        <Flex mt="12px" w="100%">
          <Stack spacing={5} direction="row">
            <Checkbox colorScheme="red" defaultChecked>
              <Text>Lembre de mim</Text>
            </Checkbox>
          </Stack>
          <Spacer />
          <Link color="brand.white">Precisa de ajuda?</Link>
        </Flex>
        <Flex
          width="100%"
          mt="16px"
          alignItems="center"
          justifyContent="center"
        >
          <Text>Não possui uma conta? <Link>Cadastre-se aqui</Link></Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
