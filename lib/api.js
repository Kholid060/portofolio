import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

function getPath(path) {
	return join(process.cwd(), path);
}

export function getContentBySlug({ path, slug, exclude = [] }) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(getPath(path), `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {
    ...data,
    content,
    slug: realSlug,
  };
  
  exclude.forEach((field) => {
    if (data[field]) {
      delete items[field];
    }
  })

  return items;
}

export function getAllContent(path, exclude = []) {
  const slugs = fs.readdirSync(getPath(path));
  const content = slugs.map((slug) => getContentBySlug({ path, slug, exclude }));
  
  return content;
}