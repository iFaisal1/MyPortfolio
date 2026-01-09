import React, { useState, useEffect } from 'react';
import { BookOpen, Calendar, Tag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getAllBlogPosts, getAllTags, clearBlogCache } from '../utils/blogLoader';

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        console.log('Loading blog posts...');
        // Clear cache to force fresh load
        clearBlogCache();
        
        const [allPosts, allTags] = await Promise.all([
          getAllBlogPosts(),
          getAllTags()
        ]);
        console.log('Blog posts loaded:', allPosts);
        console.log('Tags loaded:', allTags);
        setPosts(allPosts);
        setTags(allTags);
      } catch (error) {
        console.error('Error loading blogs:', error);
        console.error('Error stack:', error.stack);
        setPosts([]);
        setTags([]);
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  const filteredPosts = selectedTag
    ? posts.filter(post => post.tags.includes(selectedTag))
    : posts;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <section id="blogs" className="py-20 bg-white scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse text-gray-400">Loading blogs...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blogs" className="py-20 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-600 mb-4 flex items-center justify-center gap-3">
            <BookOpen className="w-10 h-10" />
            Blog
          </h2>
          <p className="text-gray-600 text-lg">
            Thoughts, tutorials, and insights on software development
          </p>
        </div>

        {/* Tags Filter */}
        {tags.length > 0 && (
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                  selectedTag === null
                    ? 'bg-green-600 text-white border-green-600'
                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                }`}
              >
                جميع المنشورات
              </button>
              {tags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-lg border transition-all duration-300 flex items-center gap-2 ${
                    selectedTag === tag
                      ? 'bg-green-600 text-white border-green-600'
                      : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  <Tag className="w-4 h-4" />
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No blog posts found.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map(post => {
              const isRTL = post.rtl || false;
              return (
                <Link
                  key={post.slug}
                  to={`/blogs/${post.slug}`}
                  className="group bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-green-500/50 hover:shadow-lg transition-all duration-300 flex flex-col"
                  dir={isRTL ? 'rtl' : 'ltr'}
                >
                  <h3 className={`text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors ${isRTL ? 'text-right' : 'text-left'}`}>
                    {post.title}
                  </h3>
                  
                  <p className={`text-gray-600 mb-4 flex-grow line-clamp-3 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {post.excerpt || post.content.substring(0, 150) + '...'}
                  </p>

                  <div className={`flex items-center mt-auto pt-4 border-t border-gray-200 ${isRTL ? 'flex-row-reverse justify-between' : 'justify-between'}`}>
                    <div className={`flex items-center gap-2 text-sm text-gray-500 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    
                    <div className={`flex items-center gap-2 text-green-600 group-hover:gap-3 transition-all ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <span className="text-sm font-medium">{isRTL ? 'اقرأ المزيد' : 'Read more'}</span>
                      <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                    </div>
                  </div>

                  {post.tags && post.tags.length > 0 && (
                    <div className={`flex flex-wrap gap-2 mt-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      {post.tags.slice(0, 3).map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded border border-green-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blogs;
