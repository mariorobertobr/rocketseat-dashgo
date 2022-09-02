import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {Flex,  Button, Stack, FormLabel, FormControl} from '@chakra-ui/react' 
import { Input } from '../components/Form/Input'


const Home: NextPage = () => {
  return (
   <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center" >
  
    <Flex as="form"
     
      width="100%" 
      maxWidth={360}
      bg="gray.800" 
      p="8" 
      borderRadius={8}
      flexDir="column"
    >
      <Stack spacing="4">
        <Input name="email" type="email" label='email'></Input>
        <Input name="password" type="password" label='password'></Input>
      <Button type='submit' mt="6" colorScheme={'pink'} size="lg">Entrar</Button>
      </Stack>
    </Flex>
    </Flex>

  )
}

export default Home
