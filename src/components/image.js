import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./image.css"

const Image = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { nin: ["background", "img1"] }
        }
      ) {
        edges {
          node {
            id
            publicURL
            base
            childImageSharp {
              fluid(maxHeight: 600, maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div className="image__container">
      <h1>View Our Destinations</h1>
      <duv className="image__grid">
        {data.allFile.edges.map((image, key) => (
          <Img
            key={key}
            className="image__item"
            fluid={image.node.childImageSharp.fluid}
            alt={image.node.base.split(".")[0]}
          />
        ))}
      </duv>
    </div>
  )
}

export default Image
