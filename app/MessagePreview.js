import React from "react"
import styled from "styled-components"
import { observer } from "mobx-react"

const Message = observer(({ attributes, body, onClick }) => (
  <Layout onClick={onClick}>
    <Meta>From: {attributes.from}</Meta>
    <Meta>To: {attributes.to}</Meta>

    <Body>{body.substring(0, 40)}...</Body>
  </Layout>
))

const Layout = styled.div`
  border: 1px solid grey;
  padding: 0.5rem;
`

const Meta = styled.div`
  color: grey;
`

const Body = styled.div`
  margin-top: 0.5rem;
`

export default Message
