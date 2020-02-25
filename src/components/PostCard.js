import React from "react"
import Image from "gatsby-image"
import styles from "../css/postcard.module.css"
import { Link } from "gatsby"

const PostCard = ({ post }) => {
  console.log(post)
  const { title, date, author, slug } = post.frontmatter
  const img = post.frontmatter.image.childImageSharp.fluid

  return <div>{title}</div>
}

export default PostCard
