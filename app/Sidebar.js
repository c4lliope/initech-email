import React from "react"
import styled from "styled-components"
import Message from "./Message"

const Sidebar = ({ store }) => (
  <Layout>
    {store.messages.map((message, i) =>
      <Message key={i} onClick={store.selectMessage(i)} {...message} />
    )}
  </Layout>
)

const Layout = styled.div`
  border-right: 1px solid grey;
`

export default Sidebar
