import { Avatar, Button, IconButton} from "@material-ui/core";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ForumIcon from '@mui/icons-material/Forum';
import SearchIcon from '@mui/icons-material/Search';
import styled from "styled-components";
import * as EmailValidator from "email-validator"


function Sidebar()
{

    
const createChat = ()=>{

    const input = prompt('Insira um e-mail de um usuário para iniciar sua conversa')

    if(!input) return null;

    if (EmailValidator.validate(input)){
        //Inserir o chat na coleção de "chats" no banco de dados
    }

}

    return(
        <Container>
            <Header>
                <UserAvatar/>
                <IconsContainer>
                    <IconButton>
                        <ForumIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </IconsContainer>
            </Header>
            <Search>
                    <SearchIcon/>
                    <SearchInput placeholder="Search in chats"/>
            </Search>
            <SidebarButton onClick={createChat}>START A NEW CHAT</SidebarButton>
        </Container>
    )
}

export default Sidebar;


const Container = styled.div``;

const Search = styled.div`
    display:flex;
    align-items: center;
    padding: 20px;
    border-radius: 2px;
`;

const SearchInput = styled.input`
    outline-width: 0;
    border: none;
    flex: 1;
`;

const SidebarButton = styled(Button)`
    width: 100%;
    

    &&& {
        border-top: 1px solid whitesmoke;
        border-bottom: 1px solid whitesmoke;
    }
    
`

const Header = styled.div`
    display:flex;
    position: sticky;
    top:0;
    background-color:white;
    z-index: 1;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    height: 80px;
    border-bottom: 1px solid whitesmoke;

`;

const UserAvatar = styled(Avatar)`
    cursor : pointer;

    :hover{

        opacity: 0.8;
    }
`;

const IconsContainer = styled.div``;