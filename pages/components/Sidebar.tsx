import styled from '@emotion/styled'
import ChatIcon from '@mui/icons-material/Chat'
import MoreVerticalIcon from '@mui/icons-material/MoreVert'
import LogoutIcon from '@mui/icons-material/Logout'
import SearchIcon from '@mui/icons-material/Search'
import { IconButton, Avatar, Tooltip, Button } from '@mui/material'

const StyledContainer = styled.div`
  height: 100vh;
  min-width: 300px;
  max-width: 350px;
  overflow-y: auto;
  border-right: 1px solid whitesmoke;
`

const StyledHeader = styled.div`
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
  top: 0;
  background-color: white;
  z-index: 1;
`

const StyledSearch = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border-radius: 2px;
`

const StyledSidebarButton = styled(Button)`
  width: 100%;
  border-top: 1px solid whitesmoke;
  border-bottom: 1px solid whitesmoke;
`

const StyledUserAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`

const StyledSearchInput = styled.input`
  outline: none;
  border: none;
  flex: 1;
`

const Sidebar = () => {
  return (
    <StyledContainer>
      <StyledHeader>
        <Tooltip title='user email' placement='right'>
          <StyledUserAvatar />
        </Tooltip>
        <div>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVerticalIcon />
          </IconButton>
          <IconButton>
            <LogoutIcon />
          </IconButton>
        </div>
      </StyledHeader>
      <StyledSearch>
        <SearchIcon />
        <StyledSearchInput placeholder='Search in conversations' />
      </StyledSearch>
      <StyledSidebarButton>Start a new conversation</StyledSidebarButton>
    </StyledContainer>
  )
}

export default Sidebar
