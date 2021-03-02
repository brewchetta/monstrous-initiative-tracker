import { DetailProvider } from './detail-context'
import { CharactersProvider } from './characters-context'
import { TooltipProvider } from './tooltip-context'
import { SpellsProvider } from './spells-context'

export default function ContextProvider({children}) {
  return (
    <DetailProvider>
      <CharactersProvider>
        <TooltipProvider>
          <SpellsProvider>
            {children}
          </SpellsProvider>
        </TooltipProvider>
      </CharactersProvider>
    </DetailProvider>
  )
}
