import { useContext } from 'react'
import styled from 'styled-components/macro'
import tw from 'twin.macro'
import { Overlay } from 'styling/styles'
import { GeyserAction } from 'types'
import { GeyserContext } from 'context/GeyserContext'
import { TabView } from 'components/TabView'
import { GeyserStakeView } from './GeyserStakeView'
import { GeyserStatsView } from './GeyserStatsView'

export const GeyserFirstContainer = () => {
  const {
    geyserAction,
    updateGeyserAction,
    selectedGeyserInfo: { isWrapped },
  } = useContext(GeyserContext)
  const actions = Object.values(GeyserAction)
  return (
    <Container>
      <StyledOverlay>
        <GeyserStatsView />
      </StyledOverlay>
      <StyledOverlay>
        <ToggleContainer>
          <TabView
            active={actions.indexOf(geyserAction)}
            onChange={(a) => updateGeyserAction(actions[a])}
            tabs={isWrapped ? ['Stake', 'Unstake', 'Wrapper'] : ['Stake', 'Unstake']}
          />
        </ToggleContainer>
        <GeyserStakeView />
      </StyledOverlay>
    </Container>
  )
}
const StyledOverlay = styled(Overlay)`
  ${tw` text-white bg-gray bg-opacity-40`}
`

const Container = styled.div`
  ${tw`text-center m-auto  flex flex-col flex-wrap w-full`}
  ${tw`sm:w-sm`}
`

const ToggleContainer = styled.div`
  ${tw`m-6`}
`
