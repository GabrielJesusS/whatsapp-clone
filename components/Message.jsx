import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components"
import {auth} from "../firebase"
import moment from "moment"


function Message ({user, message}){

    const [userLoggedIn] = useAuthState(auth)

    const TypeOfMessage = user === userLoggedIn.email ? Sender: Reciver;

    return(

        <Container>
            <TypeOfMessage>{message.message}
                <Timestamp>
                    {message.timestamp ? moment(message.timestamp).format("LT") : "..."}
                </Timestamp>
            </TypeOfMessage>
        </Container>


    )

}

export default Message;

/* --background
  --texts
  --chat1
  --chat2
  --chatBg
  --borders */

const Container = styled.div`

`

const MessageElement = styled.p`

    width: fit-content;
    padding: 10px;
    border-radius: 8px;
    margin: 10px;
    min-width: 60px;
    padding-bottom: 26px;
    position: relative;
    text-align: right;

`


const Sender = styled(MessageElement)`
    margin-left: auto;
    background-color: var(--chat1);
    color: var(--texts)
`

const Reciver = styled(MessageElement)`
    background-color: var(--chat2);
    text-align: left;
    color: var(--texts)
`

const Timestamp = styled.span`
    color:gray;
    padding: 10px;
    font-size: 10px;
    position: absolute;
    bottom: 0;
    text-align: right;
    right: 0;
`