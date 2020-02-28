exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const response = await graphql(`
    {
      allMdx {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  const posts = response.data.allMdx.edges
  posts.forEach(({ node }) => {
    const { slug } = node.frontmatter
    createPage({
      path: slug,
      component: require.resolve("./src/templates/post-template.js"),
      context: { slug: slug },
    })
  })
}

/*
result:
{
  "data": {
    "allMdx": {
      "edges": [
        {
          "node": {
            "frontmatter": {
              "slug": "first-post"
            }
          }
        },
        {
          "node": {
            "frontmatter": {
              "slug": "second-post"
            }
          }
        },
        {
          "node": {
            "frontmatter": {
              "slug": "third-post"
            }
          }
        }
      ]
    }
  }
}

*/
