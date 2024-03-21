import { AppContext } from 'context/AppContext'
import { useContext } from 'react'
import { VaultFirstContainer } from './VaultFirst/VaultFirstContainer'
import { Mode } from '../constants'
import { GeyserFirstContainer } from './GeyserFirst/GeyserFirstContainer'

export const Body = () => {
  const { mode } = useContext(AppContext)
  return (
    <div>
      {mode === Mode.VAULTS ? <VaultFirstContainer /> : <GeyserFirstContainer />}
    </div>
  )
}
