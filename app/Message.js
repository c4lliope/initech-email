import React from "react"
import styled from "styled-components"

const Message = ({ attributes, body, onClick }) => (
  <Layout onClick={onClick}>
    <div>From: {attributes.from}</div>
    <div>To: {attributes.to}</div>
    <div>{body}</div>
  </Layout>
)

const Layout = styled.div`
  border: 1px solid grey;
  padding: 0.5rem;
`

export default Message
