import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  components: {
    Link: {
      baseStyle: {
        textDecoration: 'none', 
      },
    },
  },
})

export default theme