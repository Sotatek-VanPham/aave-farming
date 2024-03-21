import React from 'react'
import { Tab } from '@headlessui/react'
import styled from 'styled-components/macro'
import tw from 'twin.macro'

interface Props {
  active: number
  tabs: string[]
  onChange: (tab: number) => void
}

export const TabView: React.FC<Props> = ({ active, tabs, onChange }) => {
  const StyledTabList = styled(Tab.List)`
    ${tw`relative rounded-md m-auto flex border border-white border-opacity-20 overflow-hidden`}
  `

  const StyledTab = styled(Tab)`
    ${tw`outline-none  focus:outline-none`}
    ${tw`font-medium uppercase z-10 h-full block self-center`}
  `

  const FlexTabWidth2 = styled(StyledTab)`
    ${tw`w-1/2`}
  `

  const FlexTabWidth3 = styled(StyledTab)`
    ${tw`w-1/3`}
  `

  const StyledFlexTab = tabs.length === 2 ? FlexTabWidth2 : FlexTabWidth3

  return (
    <Tab.Group onChange={onChange}>
      <StyledTabList className="h-14">
        {tabs.map((t, i) => (
          <StyledFlexTab key={t} className={`text-white ${active === i ? 'bg-primary' : ''}`}>
            {t}
          </StyledFlexTab>
        ))}
      </StyledTabList>
    </Tab.Group>
  )
}
