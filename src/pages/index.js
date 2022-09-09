import React, { useState } from "react"
import loadable from '@loadable/component'
import { graphql } from "gatsby"
import './index.css'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const frontmatter = {
  title: "Choropleth on d3v4",
  written: "2017-05-04",
  layoutType: "post",
  path: "../images/sample.pdf",
  image: "../images/sunset-g1ab685e59_1280.jpg",
  category: "data science",
  description: "Things about the choropleth.",
}

const OtherComponent = loadable(() => import('../components/Component'))

const IndexPage = (data) => {
  const [isOpen, setIsOpen] = useState(false);

  const path = data.data.javascriptFrontmatter.frontmatter.path.publicURL;
  const image = data.data.javascriptFrontmatter.frontmatter.image;
  console.log("da", image)

  const open = () => {
    setIsOpen(true);
  }

  const close = () => {
    setIsOpen(false);
  }

  return (
    <main>
      <GatsbyImage image={getImage(image)} alt="here" width={100} height={100} />
      <h1>hello</h1>
      <button onClick={open}>Open</button>
      {isOpen && <OtherComponent file={path} close={close}/>}
    </main>
  )
}

export const query = graphql`
  {
    javascriptFrontmatter {
      frontmatter {
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
        path {
          publicURL
        }
      }
    }
  }
`

export default IndexPage
