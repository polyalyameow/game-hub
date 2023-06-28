import {Grid, GridItem, Show} from '@chakra-ui/react'

function App() {
  

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}>
      <GridItem area="nav" bg="coral">Nav</GridItem>
      {/* Show to make sure that aside will be shown only on large screens */}
      <Show above="lg">
      <GridItem area="aside" bg="gold">Aside</GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">Main</GridItem>
    </Grid>
  )
}

export default App
