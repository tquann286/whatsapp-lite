import { Fragment, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../config/firebase'
import { useRecipient } from '../hooks/useRecipient'
import { Conversation, IMessage } from '../types'
import styled from '@emotion/styled'
import RecipientAvatar from './RecipientAvatar'
import { convertFirestoreTimestampToString } from '../utils/getMessagesInConversation'

const StyledRecipientHeader = styled.div`
  position: sticky;
  background-color: white;
  z-index: 100;
  top: 0;
  display: flex;
  align-items: center;
  padding: 11px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
`

const StyledHeaderInfo = styled.div`
  flex-grow: 1;
  > h3 {
    margin-top: 0;
    margin-bottom: 3px;
  }
  > span {
    font-size: 14px;
    color: gray;
  }
`

const StyledH3 = styled.h3`
  word-break: break-all;
`

const ConversationScreen = ({ conversation, messages }: { conversation: Conversation; messages: IMessage[] }) => {
  const [newMessage, setNewMessage] = useState('')
  const [loggedInUser, _loading, _error] = useAuthState(auth)

  const conversationUsers = conversation.users

  const { recipientEmail, recipient } = useRecipient(conversationUsers)

  return (
    <Fragment>
      <StyledRecipientHeader>
        <RecipientAvatar recipient={recipient} recipientEmail={recipientEmail} />
        <StyledHeaderInfo>
          <StyledH3>{recipientEmail}</StyledH3>
          {recipient && <span>Last active: {convertFirestoreTimestampToString(recipient.lastSeen)}</span>}
        </StyledHeaderInfo>
      </StyledRecipientHeader>
    </Fragment>
  )
}

export default ConversationScreen
