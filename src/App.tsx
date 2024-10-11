import { useRef } from "react"
import { Grid } from "./Components/Grid"
import { PathfindingProvider } from "./context/PathfindingContext"
import { SpeedProvider } from "./context/SpeedContext"
import { TileProvider } from "./context/TileContext"

function App() {
  return (
    <PathfindingProvider> 
      <TileProvider>
        <SpeedProvider>
          <div className="h-screen w-screen flex flex-col">
            <Grid />
          </div>
        </SpeedProvider>
      </TileProvider>
    </PathfindingProvider>
  )
}

export default App
