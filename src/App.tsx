import { Container, Typography } from '@mui/material'
import AddHabitForm from './components/add-habit-form'

function App() {

  return (
    <>
      <Container maxWidth="md">
      <Typography component="h1" align='center' variant='h2'>
        Habit Tracker
      </Typography>
      <AddHabitForm/>
     </Container>
      
    </>
  )
}

export default App
