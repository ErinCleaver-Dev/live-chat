import React from 'react'
import Message from './Message'
import styled from 'styled-components'

const ChatWindow = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 200px;
    margin-top: 40px;
    padding: 0 10px;
    border: 1px solid black; 
`

const Chat = () => {
    return (
        <ChatWindow>
            <Message color="green"/>
            <Message color="blue" margin="45px"/>
        </ChatWindow>
    )
}

export default Chat
