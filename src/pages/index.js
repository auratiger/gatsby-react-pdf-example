import React, { useState } from "react"
import loadable from '@loadable/component'
import { graphql } from "gatsby"
import './index.css'

export const frontmatter = {
   title: "Choropleth on d3v4",
   written: "2017-05-04",
   layoutType: "post",
   path: "../images/sample.pdf",
   category: "data science",
   description: "Things about the choropleth.",
}

const OtherComponent = loadable(() => import('../components/Component'))

const IndexPage = (data) => {
   const [isOpen, setIsOpen] = useState(false);

   const path = data.data.javascriptFrontmatter.frontmatter.path.publicURL;

   const open = () => {
      setIsOpen(true);
   }

   const close = () => {
      setIsOpen(false);
   }

   return (
      <main>
         <h1>Click to open the PDF modal</h1>
         <button onClick={open} style={{ padding: "1rem 2rem", borderRadius: "5px" }}>Open Modal</button>
         {isOpen && <OtherComponent file={path} close={close} />}
      </main>
   )
}

export const query = graphql`
  {
    javascriptFrontmatter {
      frontmatter {
        path {
          publicURL
        }
      }
    }
  }
`

export default IndexPage
