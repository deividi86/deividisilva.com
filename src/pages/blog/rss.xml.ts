import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts } from '../../posts';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: 'Deividi Silva',
    description: 'What I learned running my own servers and software products.',
    site: context.site!,
    trailingSlash: true,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      categories: post.data.tags,
      link: `/blog/${post.id}/`,
    })),
  });
}
