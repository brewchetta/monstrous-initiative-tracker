import { DetailProvider } from './detail-context'
import { CharactersProvider } from './characters-context'

export default function ContextProvider({children}) {
  return (
    <DetailProvider>
      <CharactersProvider>
        {children}
      </CharactersProvider>
    </DetailProvider>
  )
}
