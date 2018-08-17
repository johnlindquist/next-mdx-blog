import getConfig from "next/config"

const { publicRuntimeConfig: config = {} } = getConfig()

export default () => (
  <div>
    <h1>My Blog</h1>
    {(config.posts || []).map(post => {
      const { default: Post } = require("../posts/" +
        post)

      return <Post key={post} />
    })}
  </div>
)
