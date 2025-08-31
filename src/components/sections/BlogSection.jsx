import React, { useMemo } from 'react';
import OptimizedImage from '../OptimizedImage';
import VirtualizedList from '../VirtualizedList';

// Blog Section Component
const BlogSection = React.memo(({ blog }) => {
  if (!blog || blog.length === 0) return null;

  const memoizedBlog = useMemo(() => {
    return blog.map((post) => (
      <BlogCard key={post.id} post={post} />
    ));
  }, [blog]);

  const renderBlogItem = (post, index) => (
    <BlogCard key={post.id || index} post={post} />
  );

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest Blog Posts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with our latest insights and industry news
          </p>
        </div>
        {blog.length > 6 ? (
          <VirtualizedList
            items={blog}
            renderItem={renderBlogItem}
            itemHeight={400}
            containerHeight={800}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {memoizedBlog}
          </div>
        )}
      </div>
    </section>
  );
});

// Individual Blog Card Component
const BlogCard = React.memo(({ post }) => (
  <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
    <div className="relative overflow-hidden">
      <OptimizedImage
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
        {post.category}
      </div>
    </div>
    <div className="p-6">
      <div className="flex items-center text-sm text-gray-500 mb-3">
        <span>{post.author}</span>
        <span className="mx-2">•</span>
        <span>{post.date}</span>
        <span className="mx-2">•</span>
        <span>{post.readTime} min read</span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
        {post.title}
      </h3>
      <p className="text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>
      <button className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300">
        Read More →
      </button>
    </div>
  </article>
));

BlogSection.displayName = 'BlogSection';
BlogCard.displayName = 'BlogCard';

export default BlogSection;