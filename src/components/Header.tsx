import { AppContext } from 'context/AppContext'
import { useContext } from 'react'
import styled from 'styled-components/macro'
import tw from 'twin.macro'
import logo from 'assets/logo.svg'
import { Mode } from '../constants'
import { HeaderWalletButton } from './HeaderWalletButton'
import { HeaderToggle } from './HeaderToggle'
import SettingButton from './SettingButton'
// import { HeaderNetworkSelect } from './HeaderNetworkSelect'

const SEAMLESS_INTERFACE_URL = `https://app.seamlessprotocol.com`

export const Header = () => {
  const { mode, toggleMode } = useContext(AppContext)
  return (
    <Container>
      <LeftContainer>
        <LogoSpan>
          <a href={SEAMLESS_INTERFACE_URL}>
            <LogoImage src={logo} alt="Colend" />
          </a>
        </LogoSpan>
        <LeftLinkContainer>
          <a href={`${SEAMLESS_INTERFACE_URL}`}>
            <span className="text-white text-sm font-medium md:text-base">Dashboard</span>
          </a>
          <a href={`${SEAMLESS_INTERFACE_URL}/markets`}>
            <span className="text-white text-sm font-medium md:text-base">Markets</span>
          </a>
          <div className='activeLink'>
            <span className="text-white text-sm font-medium  cursor-pointer md:text-base">Staking Farms</span>
          </div>
        </LeftLinkContainer>
      </LeftContainer>
      <MiddleContainer>
        <MiddleLinkContainer>
          <a href={`${SEAMLESS_INTERFACE_URL}`}>
            <span className="text-white text-sm font-medium md:text-base">Dashboard</span>
          </a>
          <a href={`${SEAMLESS_INTERFACE_URL}/markets`}>
            <span className="text-white text-sm font-medium md:text-base">Markets</span>
          </a>
          <div>
            <span className="text-white text-sm font-medium cursor-pointer md:text-base">Staking Farms</span>
          </div>
        </MiddleLinkContainer>
        <HeaderToggle enabled={mode === Mode.VAULTS} toggle={toggleMode} options={['Single Farm View', 'Asset View']} />
      </MiddleContainer>
      <RightContainer>
        {/* <HeaderNetworkSelect /> */}
        <HeaderWalletButton />
        <SettingButton />
      </RightContainer>
    </Container>
  )
}

const LogoImage = styled.img`
  ${tw`w-auto sm:ml-0`}
`

const LinkContainer = styled.div`
  ${tw`hidden lg:flex flex-wrap justify-center gap-1 md:flex-col md:flex-row md:gap-2 lg:gap-4 xl:gap-8`}
`

const LeftLinkContainer = styled(LinkContainer)`
  ${tw`hidden lg:flex h-full items-center`}
`

const MiddleLinkContainer = styled(LinkContainer)`
  ${tw`lg:hidden`}
`

const Container = styled.div`
  height: 50.89px;
  ${tw`shadow-sm flex items-center justify-between flex-wrap  text-white bg-gray bg-opacity-50 `}
`

const LogoSpan = styled.span`
  font-family: 'Coromont Garamond';
  ${tw`ml-2 p-3 text-3xl`}
`

const LeftContainer = styled.div`
  ${tw`flex w-auto justify-center items-center h-full md:gap-2 lg:gap-4 xl:gap-8 `}
  ${tw`header-wrap:w-4/12`}

  .activeLink {
    height: 100%;
    display: flex;
    align-items: center;
    ${tw`h-full items-center flex relative`}

    &:after {
      content: '';
      border-radius: 10px;

      ${tw`h-1 bg-primary w-full absolute top-full left-0`}


    }

  }
`

const MiddleContainer = styled.div`
  ${tw`flex flex-col xl:flex-row items-center justify-center w-full order-3  gap-4`}
  ${tw`header-wrap:py-0 header-wrap:max-w-[830px] header-wrap:mx-auto header-wrap:order-2 header-wrap:w-1/3 xl:w-4/12`}
`
const RightContainer = styled.div`
  gap: 6px;
  ${tw`ml-auto  w-auto flex flex-wrap items-center justify-end pr-4`}
  ${tw`header-wrap:ml-0 header-wrap:order-3 header-wrap:w-4/12`}
`
