import React from 'react'
import styled from 'styled-components'
import wheelIcon from 'assets/wheel.svg'
import tw from 'twin.macro'

const SettingButton = () => {
    const onClick = () => {

    }
    return (
        <SSettingButton onClick={onClick}>
            <img src={wheelIcon} alt="" />
        </SSettingButton>
    )
}

const SSettingButton = styled.button`
    outline: none !important;
    padding: 6px;

    ${tw`bg-gray bg-opacity-70 rounded `}
    img {
        ${tw`w-4 h-4`}
    }
    

`

export default SettingButton
