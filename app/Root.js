import React from "react"
import styled from "styled-components"
import Sidebar from "./Sidebar"
import Main from "./Main"
import { UserIcon } from "mdi-react"

const Root = ({ store }) => (
  <Layout>
    <Title>Initech Email</Title>

    <Right>
      <SessionInfo>Signed in as {store.user}</SessionInfo>
      <Avatar/>
    </Right>

    <Sidebar store={store}>Sidebar</Sidebar>
    <Main store={store}>Main</Main>
  </Layout>
)

const Layout = styled.div`
  display: grid;
  grid-row-gap: 2rem;
  grid-template-columns: 30% 1fr;
  grid-template-rows: 4rem 1fr;
  height: 100%;
  font-family: sans-serif;
`

const SessionInfo = styled.div`
  display: inline-block;
  height: 1rem;
  margin-right: 1rem;
`

const Avatar = styled(UserIcon)`
  display: inline-block;
  height: 1.5rem;
  border-radius: 50%;
  border: 1px solid black;
`

const Title = styled.h1`
  display: inline-block;
  margin-left: 2rem;
`

const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 2rem;
  align-items: center;
`

export default Root
