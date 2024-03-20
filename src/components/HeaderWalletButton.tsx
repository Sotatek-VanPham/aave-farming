import { useContext } from 'react'
import styled from 'styled-components/macro'
import tw from 'twin.macro'
import Web3Context from 'context/Web3Context'
import { displayAddr } from 'utils/formatDisplayAddress'
import { Paragraph } from 'styling/styles'
import { NamedColors } from 'styling/colors'

export const HeaderWalletButton = () => {
  const { selectWallet, address } = useContext(Web3Context)

  return (
    <ButtonContainer>
      <Button onClick={selectWallet}
        className='bg-gray bg-opacity-70 '
      >
        <StyledParagraph autoCapitalize="yes" color={NamedColors.WHITE}>
          {address ? displayAddr(address) : 'CONNECT'}
        </StyledParagraph>
      </Button>
    </ButtonContainer>
  )
}

const ButtonContainer = styled.div`
  ${tw`w-6/12 flex `}
`

// const pink = `bg-footer hover:bg-[#FF6ED7/50]`
const Button = styled.button`
  ${tw`w-full px-8 py-2 float-right h-fit rounded`}
  ${tw``}
`
const StyledParagraph = styled(Paragraph)`
  ${tw`text-xs font-bold`}
`
