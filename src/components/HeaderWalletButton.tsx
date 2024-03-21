import { useContext } from 'react'
import styled from 'styled-components/macro'
import tw from 'twin.macro'
import Web3Context from 'context/Web3Context'
import { displayAddr } from 'utils/formatDisplayAddress'
import { Paragraph } from 'styling/styles'
import { NamedColors } from 'styling/colors'
import arrowDown from 'assets/arrow-down.svg'

export const HeaderWalletButton = () => {
  const { selectWallet, address } = useContext(Web3Context)

  return (
    <ButtonContainer>
      <Button onClick={selectWallet}
        className=' '
      >
        {address && (
          <FakeImg />
        )}
        <StyledParagraph autoCapitalize="yes" color={NamedColors.WHITE} >
          {address ? displayAddr(address) : 'CONNECT'}
        </StyledParagraph>
        {address && (
          <img src={arrowDown} alt="" />
        )}
      </Button>
    </ButtonContainer>
  )
}

const FakeImg = styled.div`
  width: 21px;
  height: 21px;
  background-color: #D9D9D9;
  border-radius: 100%;
  flex-shrink: 0;
  
`
const ButtonContainer = styled.div`
  ${tw` flex bg-gray bg-opacity-70 rounded`}
`

// const pink = `bg-footer hover:bg-[#FF6ED7/50]`
const Button = styled.button`
  outline: none !important;
  ${tw`w-full h-7 px-2 py-1 float-right rounded outline-none flex gap-3 items-center`}
  ${tw``}
`
const StyledParagraph = styled(Paragraph)`
  line-height: 21px;

  ${tw`text-xs font-bold`}
`
