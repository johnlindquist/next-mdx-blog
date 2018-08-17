const withMDX = require("@zeit/next-mdx")({
  extension: /\.mdx?$/
})

const posts = require("fs").readdirSync("./posts")

module.exports = withMDX({
  pageExtensions: ["js", "md", "mdx"],
  publicRuntimeConfig: {
    posts
  }
})
