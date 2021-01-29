import { graphql } from "gatsby"
import React from "react"

import Layout from "../components/layout"

export default function BlogPost({ data }) {
    const post = data.markdownRemark
    return (
        <Layout>
            <h1>{post.frontmatter.title}</h1>
            <small>{post.frontmatter.date}</small>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                date(formatString: "Do MMMM, YYYY")
            }
        }
    }
`