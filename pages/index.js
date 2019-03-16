import Link from 'next/link';

const postFileNames =
  preval`
const fs = require("fs");
const path = require("path");
module.exports = fs.readdirSync("./pages/").filter((file) =>
  path.extname(file).toLowerCase() === '.md'
);
` || [];

const posts = postFileNames.map(name => {
  const {
    default: Component,
    meta: { title }
  } = require('../pages/' + name);

  return {
    Component,
    title,
    path: `/${name.replace('.md', '')}`
  };
});

export default () => (
  <div>
    <h1>My Blog</h1>
    {posts.map(post => (
      <div key={`post-${post.title}`}>
        <Link href={post.path}>
          <a>
            <h2>{post.title}</h2>
          </a>
        </Link>
      </div>
    ))}
  </div>
);
