import { DetailProvider } from './detail-context'
import { CharactersProvider } from './characters-context'
import { TooltipProvider } from './tooltip-context'
import { SpellsProvider } from './spells-context'
import { OptionsSettingsProvider } from './options-settings-context'

export default function ContextProvider({children}) {
  return (
    <DetailProvider>
      <CharactersProvider>
        <TooltipProvider>
          <SpellsProvider>
            <OptionsSettingsProvider>
              {children}
            </OptionsSettingsProvider>
          </SpellsProvider>
        </TooltipProvider>
      </CharactersProvider>
    </DetailProvider>
  )
}
