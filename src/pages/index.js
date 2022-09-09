import React, { useState } from "react"
import loadable from '@loadable/component'
import { graphql } from "gatsby"
import './index.css'

const OtherComponent = loadable(() => import('../components/Component'))

const IndexPage = ({data}) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  }

  const close = () => {
    setIsOpen(false);
  }

  return (
    <main>
      <h1>hello</h1>
      <button onClick={open}>Open</button>
      {isOpen && <OtherComponent file={data.file.publicURL} close={close}/>}
    </main>
  )
}

export const query = graphql`
  query {
    file(extension: {eq: "pdf"}) {
      publicURL
    }
  }
`

export default IndexPage
