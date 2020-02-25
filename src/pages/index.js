import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import PostList from "../components/PostList"
import { graphql, useStaticQuery } from "gatsby"

const getPosts = graphql`
  query MyQuery {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            slug
            date(formatString: "MMMM Do, YYYY")
            author
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`

/*
{
  "data": {
    "allMdx": {
      "totalCount": 3,
      "edges": [
        {
          "node": {
            "frontmatter": {
              "title": "third post",
              "slug": "third-post",
              "date": "June 12th, 2019",
              "author": "john smith",
              "image": {
                "childImageSharp": {
                  "fluid": {
                    "srcSet": "/static/e67118af2681d9b24c489f76ed91844d/61e93/image-3.webp 200w,\n/static/e67118af2681d9b24c489f76ed91844d/1f5c5/image-3.webp 400w,\n/static/e67118af2681d9b24c489f76ed91844d/6193f/image-3.webp 605w"
                  }
                }
              }
            },
            */

export default () => {
  const response = useStaticQuery(getPosts)
  const posts = response.allMdx.edges

  return (
    <Layout>
      <PostList posts={posts} />
    </Layout>
  )
}
