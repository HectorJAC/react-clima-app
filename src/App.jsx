import AppClima from "./components/AppClima";
import { ClimaProvider } from './context/ClimaProvider'

function App() {
  return (
    <ClimaProvider value >
      <header>
        <h1>Buscador de Clima</h1>
      </header>
      <AppClima />
    </ClimaProvider>
  )
}

export default App
