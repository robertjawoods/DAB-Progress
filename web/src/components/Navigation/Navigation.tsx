import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react'

import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'

interface NavItem {
  text: string
  href: string
}

const Links: NavItem[] = [
  { text: 'Dashboard', href: '/dashboard' },
  { text: 'Lessons', href: '/lessons' },
  { text: 'Homework', href: '/homework' },
  { text: 'Challenges', href: '/challenges' },
  { text: 'Warm Up', href: '/warmup' },
  { text: '50% Timer', href: '/fifty' },
]

const NavLink = ({ text, href }: NavItem) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={href}
  >
    {text}
  </Link>
)

const AccountMenu = ({ logOut }) => (
  <Menu>
    <MenuButton
      as={Button}
      rounded={'full'}
      variant={'link'}
      cursor={'pointer'}
      minW={0}
    >
      <Avatar
        size={'sm'}
        src={
          'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
        }
      />
    </MenuButton>
    <MenuList>
      <MenuItem>Account</MenuItem>
      <MenuItem onClick={logOut}>Sign Out</MenuItem>
    </MenuList>
  </Menu>
)

export default function Navigation() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const { currentUser, isAuthenticated, logOut } = useAuth()

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>DAB Progress</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link, i) => (
                <NavLink key={i} href={link.href} text={link.text} />
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            {!(isAuthenticated || currentUser) && (
              <>
                <Button
                  variant={'solid'}
                  colorScheme={'teal'}
                  size={'sm'}
                  mr={4}
                  onClick={() => {
                    navigate(routes.signUp())
                  }}
                >
                  Sign Up
                </Button>
                <NavLink text="Sign In" href="/login" />
              </>
            )}

            {isAuthenticated && currentUser && <AccountMenu logOut={logOut} />}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link, i) => (
                <NavLink key={i} href={link.href} text={link.text} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}
