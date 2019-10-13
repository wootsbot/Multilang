import React from "react"
import { RichText } from 'prismic-reactjs'
import { graphql } from 'gatsby'

export const query = graphql`
query PostQuery($uid:String) {
    prismic {
      allPosts(uid:$uid) {
        edges {
          node {
            post_content
            title
          }
        }
      }
    }
  }
  `

	
export default ({ data }) => {
    // Required check for no data being returned
    console.log("data", data)
    const doc = data.prismic.allPosts.edges.slice(0,1).pop();
    console.log("doc", doc)
    if (!doc) return null;

    
    return (
      <div>
        {RichText.render(doc.node.title)}
      </div>
    );
  }

