import React from "react"
import styled from "styled-components"
import { observer } from "mobx-react"
import {
  EmailPlusIcon,
  ReplyIcon,
  ReplyAllIcon,
  ForwardIcon,
} from "mdi-react"

const Toolbar = observer(({ store }) => (
  <Layout>
    <ReplyIcon />
    <ReplyAllIcon />
    <ForwardIcon />
    <EmailPlusIcon />
  </Layout>
))

const Layout = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 2rem;
  padding: 1rem;
`

const Meta = styled.div`
  color: grey;
`

const Body = styled.div`
  margin-top: 0.5rem;
`

export default Toolbar
