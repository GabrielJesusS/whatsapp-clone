import { Avatar, IconButton} from "@material-ui/core";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ForumIcon from '@mui/icons-material/Forum';
import styled from "styled-components";


function Sidebar(){
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
        </Container>
    )
}

export default Sidebar;

const Container = styled.div``;

const Header = styled.div``;

const UserAvatar = styled(Avatar)``;

const IconsContainer = styled.div``;