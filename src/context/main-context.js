import { DetailProvider } from './detail-context'
import { CharactersProvider } from './characters-context'
import { TooltipProvider } from './tooltip-context'

export default function ContextProvider({children}) {
  return (
    <DetailProvider>
      <CharactersProvider>
        <TooltipProvider>
          {children}
        </TooltipProvider>
      </CharactersProvider>
    </DetailProvider>
  )
}
