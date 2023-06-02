import { useRoutes } from 'react-router-dom'
import routes from './routes'
import './assets/index.css'

function App() {
  const router = useRoutes(routes)
  return router
}
export default App;
