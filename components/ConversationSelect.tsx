import { Conversation } from '../types'
import styled from '@emotion/styled'
import { useRecipient } from '../hooks/useRecipient'
import RecipientAvatar from './RecipientAvatar'
import Router from 'next/router'

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

	const onSelectConversation = () => {
		Router.push(`/conversations/${id}`)
	}

  return (
    <StyledContainer onClick={onSelectConversation}>
      <RecipientAvatar recipient={recipient} recipientEmail={recipientEmail} />
      <span>{recipientEmail}</span>
    </StyledContainer>
  )
}

export default ConversationSelect
