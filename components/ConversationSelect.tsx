import { Conversation } from '../types'
import styled from '@emotion/styled'
import { useRecipient } from '../hooks/useRecipient'

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 15px;
  word-break: break-all;
  :hover {
    background-color: #e9eaeb;
  }
`

const ConversationSelect = ({ id, conversationUsers }: { id: string; conversationUsers: Conversation['users'] }) => {
  const { recipient, recipientEmail } = useRecipient(conversationUsers)

  return (
    <StyledContainer>
      {recipientEmail}
    </StyledContainer>
  )
}

export default ConversationSelect
