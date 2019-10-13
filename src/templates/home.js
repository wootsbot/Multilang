import React from "react"
import { RichText } from 'prismic-reactjs'
import { graphql } from 'gatsby'
import {Link} from 'prismic-reactjs';
import linkResolver from './../utils/linkresolver'
export const query = graphql`
query Homepage($id: String) {
  prismic {
    allBlog_homes(id: $id) {
      edges {
        node {
          headline
          image
        }
      }
    }
  }
}

  `
	
  export default ({ data }) => {
    // Required check for no data being returned
    console.log("data", data)
    const doc = data.prismic.allBlog_homes.edges.slice(0,1).pop();
    console.log("doc", doc.node.headline)
    if (!doc) return null;

    
    return (
      <div>
        {/* <a href={Link.url(document.data.document_link, linkResolver)}>Home</a> */}
        {RichText.render(doc.node.headline)}
      </div>
    );
  }