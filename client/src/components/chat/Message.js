import React from 'react'
import styled from 'styled-components'



const Message = (props) => {

   

    const Message = styled.li`
        background-color: ${props.color || "black"};
        border-radius: 5px;
        width: 70%;
        height: 50px;
        margin-left: ${props.margin || 0};
        padding: 10px;
        margin-top: 10px;
        list-style-type: none;
        &:last-child {
            margin-bottom: 10px;
        }       

    `

    return (
        <Message>
            {props.children}
        </Message>
    )
}

export default Message
