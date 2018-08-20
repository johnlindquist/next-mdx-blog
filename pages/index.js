const postFileNames =
  preval`
module.exports = require("fs").readdirSync("./posts")
` || []

const posts = postFileNames.map(name => {
  const {
    default: Component,
    meta: { title }
  } = require("../posts/" + name)

  return {
    Component,
    title
  }
})

export default () => (
  <div>
    <h1>My Blog</h1>
    {posts.map(post => (
      <>
        <h2>{post.title}</h2>
        <post.Component />
      </>
    ))}
  </div>
)
