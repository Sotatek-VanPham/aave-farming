import styled from 'styled-components/macro'
import tw from 'twin.macro'

interface Props {
  onClick: () => void
  displayText: string
  disabled?: boolean
}

export const GeyserInteractionButton: React.FC<Props> = ({ onClick, displayText, disabled }) => (
  <Button disabled={disabled} onClick={onClick}>
    {displayText}
  </Button>
)

const Button = styled.button`
  ${tw`h-16 border-2 rounded-md uppercase font-semibold`};
  ${tw`disabled:text-textGray disabled:bg-secondary disabled:cursor-not-allowed disabled:border-none `}
`
