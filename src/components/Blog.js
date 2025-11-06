import React, { useState, useRef, useEffect } from 'react';
import { 
  FaCalendar, 
  FaUser, 
  FaArrowRight, 
  FaBookmark, 
  FaShare,
  FaPlay,
  FaRegClock,
  FaEye,
  FaHeart,
  FaComment,
  FaTags,
  FaSearch,
  FaFilter
} from 'react-icons/fa';
import './Blog.css';

const Blog = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [likedPosts, setLikedPosts] = useState(new Set());
  const [savedPosts, setSavedPosts] = useState(new Set());
  const blogRef = useRef(null);

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Urban Mobility: AI-Powered Ride Sharing',
      excerpt: 'Discover how artificial intelligence is revolutionizing urban transportation and reducing congestion in major cities worldwide.',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      category: 'Technology',
      author: 'Sarah Chen',
      date: 'March 15, 2024',
      readTime: '5 min read',
      views: '2.4K',
      likes: 128,
      comments: 24,
      tags: ['AI', 'Mobility', 'Innovation'],
      featured: true,
      gradient: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)'
    },
    {
      id: 2,
      title: 'Sustainable Transportation: Our Green Initiative Journey',
      excerpt: 'Exploring Yuva commitment to reducing carbon footprint through electric vehicles and eco-friendly routes.',
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      category: 'Sustainability',
      author: 'Mike Rodriguez',
      date: 'March 12, 2024',
      readTime: '4 min read',
      views: '1.8K',
      likes: 95,
      comments: 18,
      tags: ['Eco-Friendly', 'Green', 'EV'],
      featured: true,
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      id: 3,
      title: 'Building Community Through Shared Rides: Real Stories',
      excerpt: 'Heartwarming stories from our users who have formed meaningful connections during their shared commutes.',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      category: 'Community',
      author: 'Emily Brown',
      date: 'March 10, 2024',
      readTime: '6 min read',
      views: '3.2K',
      likes: 210,
      comments: 42,
      tags: ['Community', 'Stories', 'Connection'],
      featured: false,
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 4,
      title: 'Mobile App Innovation: Behind Yuva Tech Stack',
      excerpt: 'Deep dive into the cutting-edge technologies powering our seamless ride-sharing experience.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      category: 'Development',
      author: 'David Kim',
      date: 'March 8, 2024',
      readTime: '7 min read',
      views: '2.1K',
      likes: 156,
      comments: 31,
      tags: ['Tech', 'Mobile', 'Innovation'],
      featured: false,
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    
    {
      id: 6,
      title: 'User Experience: Designing the Perfect Ride-Sharing App',
      excerpt: 'The design principles and user research that shaped Yuva intuitive mobile application interface.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      category: 'Design',
      author: 'Lisa Wang',
      date: 'March 1, 2024',
      readTime: '4 min read',
      views: '2.7K',
      likes: 178,
      comments: 29,
      tags: ['Design', 'UX', 'Interface'],
      featured: false,
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts', count: blogPosts.length },
    { id: 'technology', name: 'Technology', count: blogPosts.filter(p => p.category === 'Technology').length },
    { id: 'sustainability', name: 'Sustainability', count: blogPosts.filter(p => p.category === 'Sustainability').length },
    { id: 'community', name: 'Community', count: blogPosts.filter(p => p.category === 'Community').length },
    { id: 'development', name: 'Development', count: blogPosts.filter(p => p.category === 'Development').length },
    { id: 'safety', name: 'Safety', count: blogPosts.filter(p => p.category === 'Safety').length },
    { id: 'design', name: 'Design', count: blogPosts.filter(p => p.category === 'Design').length }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeFilter === 'all' || 
      post.category.toLowerCase() === activeFilter;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const handleLike = (postId) => {
    setLikedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const handleSave = (postId) => {
    setSavedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  // Parallax effect for featured posts
  useEffect(() => {
    const handleScroll = () => {
      const featuredCards = document.querySelectorAll('.featured-blog-card');
      featuredCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const scrollPercent = (rect.top / window.innerHeight) * 100;
        if (scrollPercent < 80 && scrollPercent > -20) {
          const translateY = scrollPercent * 0.1;
          card.style.transform = `perspective(1000px) rotateX(${translateY}deg)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="blog" className="blog-advanced-cards" ref={blogRef}>
      <div className="blog-container">
        {/* Header Section */}
        <div className="blog-header">
          <div className="blog-title-content">
            <h2 className="blog-main-title">Insights & Stories</h2>
            <p className="blog-subtitle">
              Discover the latest trends, stories, and innovations in urban mobility and ride-sharing
            </p>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="blog-controls">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search articles, topics, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
          
          <div className="filter-tabs">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-tab ${activeFilter === category.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(category.id)}
              >
                <span className="tab-name">{category.name}</span>
                <span className="tab-count">{category.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="featured-section">
            <h3 className="section-title">Featured Stories</h3>
            <div className="featured-grid">
              {featuredPosts.map((post, index) => (
                <article 
                  key={post.id} 
                  className="featured-blog-card"
                  style={{ '--card-delay': `${index * 0.1}s` }}
                >
                  <div className="card-background">
                    <img src={post.image} alt={post.title} />
                    <div className="card-overlay" style={{ background: post.gradient }}></div>
                  </div>
                  
                  <div className="card-content">
                    <div className="card-badge">
                      <span className="badge-text">Featured</span>
                    </div>
                    
                    <div className="card-category">
                      <span>{post.category}</span>
                    </div>
                    
                    <h3 className="card-title">{post.title}</h3>
                    <p className="card-excerpt">{post.excerpt}</p>
                    
                    <div className="card-meta">
                      <div className="meta-left">
                        <div className="author-avatar">
                          <span>{post.author.split(' ').map(n => n[0]).join('')}</span>
                        </div>
                        <div className="meta-info">
                          <span className="author-name">{post.author}</span>
                          <span className="post-date">{post.date}</span>
                        </div>
                      </div>
                      <div className="meta-right">
                        <span className="read-time">
                          <FaRegClock />
                          {post.readTime}
                        </span>
                      </div>
                    </div>

                    <div className="card-tags">
                      {post.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>

                    <div className="card-actions">
                      <button 
                        className={`action-btn like-btn ${likedPosts.has(post.id) ? 'liked' : ''}`}
                        onClick={() => handleLike(post.id)}
                      >
                        <FaHeart />
                        <span>{post.likes + (likedPosts.has(post.id) ? 1 : 0)}</span>
                      </button>
                      
                      <button className="action-btn">
                        <FaComment />
                        <span>{post.comments}</span>
                      </button>
                      
                      <button 
                        className={`action-btn save-btn ${savedPosts.has(post.id) ? 'saved' : ''}`}
                        onClick={() => handleSave(post.id)}
                      >
                        <FaBookmark />
                      </button>
                      
                      <button className="action-btn">
                        <FaShare />
                      </button>
                    </div>

                    <button className="read-more-btn">
                      Read Full Story
                      <FaArrowRight className="btn-arrow" />
                    </button>
                  </div>

                  <div className="card-hover-effect"></div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="posts-section">
          <h3 className="section-title">Latest Articles</h3>
          <div className="posts-grid">
            {regularPosts.map((post, index) => (
              <article 
                key={post.id} 
                className="blog-card"
                style={{ '--card-delay': `${index * 0.1}s` }}
              >
                <div className="card-image">
                  <img src={post.image} alt={post.title} />
                  <div className="image-overlay" style={{ background: post.gradient }}></div>
                  <div className="card-category-tag">
                    <span>{post.category}</span>
                  </div>
                  
                  <button 
                    className={`save-icon ${savedPosts.has(post.id) ? 'saved' : ''}`}
                    onClick={() => handleSave(post.id)}
                  >
                    <FaBookmark />
                  </button>
                </div>

                <div className="card-content">
                  <div className="card-meta-mini">
                    <span className="post-date">
                      <FaCalendar />
                      {post.date}
                    </span>
                    <span className="read-time">
                      <FaRegClock />
                      {post.readTime}
                    </span>
                    <span className="views">
                      <FaEye />
                      {post.views}
                    </span>
                  </div>

                  <h3 className="card-title">{post.title}</h3>
                  <p className="card-excerpt">{post.excerpt}</p>

                  <div className="card-footer">
                    <div className="author-info">
                      <div className="author-avatar-mini">
                        <span>{post.author.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                      <span className="author-name">{post.author}</span>
                    </div>

                    <div className="engagement-stats">
                      <button 
                        className={`engagement-btn like-btn ${likedPosts.has(post.id) ? 'liked' : ''}`}
                        onClick={() => handleLike(post.id)}
                      >
                        <FaHeart />
                        <span>{post.likes + (likedPosts.has(post.id) ? 1 : 0)}</span>
                      </button>
                      
                      <button className="engagement-btn">
                        <FaComment />
                        <span>{post.comments}</span>
                      </button>
                    </div>
                  </div>

                  <div className="card-tags-mini">
                    {post.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="tag-mini">{tag}</span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="tag-mini more">+{post.tags.length - 2}</span>
                    )}
                  </div>
                </div>

                <div className="card-hover-glow" style={{ background: post.gradient }}></div>
              </article>
            ))}
          </div>
        </div>

        {/* Load More Section */}
        <div className="load-more-section">
          <button className="load-more-btn">
            <span>Load More Articles</span>
            <div className="loading-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>

       
      </div>
    </section>
  );
};

export default Blog;