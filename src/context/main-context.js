import { DetailProvider } from './detail-context'
import { CharactersProvider } from './characters-context'
import { TooltipProvider } from './tooltip-context'
import { SpellsProvider } from './spells-context'
import { HitpointsSettingProvider } from './hitpoints-setting-context'

export default function ContextProvider({children}) {
  return (
    <DetailProvider>
      <CharactersProvider>
        <TooltipProvider>
          <SpellsProvider>
            <HitpointsSettingProvider>
              {children}
            </HitpointsSettingProvider>
          </SpellsProvider>
        </TooltipProvider>
      </CharactersProvider>
    </DetailProvider>
  )
}
