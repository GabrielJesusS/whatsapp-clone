import { Button } from '@material-ui/core'
import Head from "next/head"
import styled from "styled-components"
import {signInWithPopup} from "firebase/auth"
import {auth, provider} from "../firebase"

function Login(){

    const signIn = ()=>{
        signInWithPopup(auth,provider).catch(alert)



    }

    return(
        <Container>
            <Head>
                <title>Login</title>
            </Head>

            <LoginContainer>
                <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1021px-WhatsApp.svg.png"/>
                <Button onClick={signIn} variant="outlined">Registre-se com o Google</Button>
            </LoginContainer>
        </Container>
    )

}

export default Login

const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: whitesmoke;
`

const LoginContainer = styled.div`
    padding: 70px 30px 70px 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: white;
    border-radius: 15px;
    box-shadow: 2px 4px 10px -3px rgba(0,0,0,.3);
`

const Logo = styled.img`
    width: 200px;
    height: 200px;
    margin-bottom: 50px;
`