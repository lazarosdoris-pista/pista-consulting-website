import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import CookieBanner from './CookieBanner';
import PistiChatbot from './PistiChatbot';

function Blog() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Gomme Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header (replicated from App.jsx for consistency) */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-50">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="text-3xl font-bold" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>
              <span style={{ color: '#1f1f1e' }}>PISTA</span>
              <span style={{ color: '#E4002B' }}>.</span>
              <span className="text-base font-normal ml-2" style={{ color: '#1f1f1e', fontFamily: 'Gomme Sans Regular, sans-serif', letterSpacing: '0.1em' }}>consulting</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Home</Link>
            <Link to="/blog" className="text-gray-700 hover:text-gray-900" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Blog</Link>
            {/* Add other navigation links as needed, perhaps linking to sections on the homepage */}
          </nav>
        </div>
      </header>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-12 text-center" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
            Unser Blog: Digitale Transformation verstehen
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map(post => (
              <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                <div className="p-6 flex-grow">
                  <div className="text-4xl mb-4 text-center">{post.image}</div>
                  <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>{post.title}</h2>
                  <p className="text-gray-600 mb-4" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                    <span>{post.readTime} Min. Lesezeit</span>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <Link 
                    to={`/blog/${post.slug}`}
                    onClick={scrollToTop}
                    className="inline-block bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-300"
                    style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}
                  >
                    Weiterlesen
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer (replicated from App.jsx for consistency) */}
      <footer className="bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-3xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>
              <span style={{ color: '#1f1f1e' }}>PISTA</span>
              <span style={{ color: '#E4002B' }}>.</span>
              <span className="text-base font-normal ml-2" style={{ color: '#1f1f1e', fontFamily: 'Gomme Sans Regular, sans-serif', letterSpacing: '0.1em' }}>consulting</span>
            </div>
            <p className="text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Auf der Überholspur zur digitalen Transformation.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-gray-900" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Home</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-gray-900" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>Rechtliches</h3>
            <ul className="space-y-2">
              <li><a href="#" onClick={(e) => { e.preventDefault(); /* setShowImpressum(true) */ }} className="text-gray-600 hover:text-gray-900" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Impressum</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); /* setShowDatenschutz(true) */ }} className="text-gray-600 hover:text-gray-900" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Datenschutz</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>Kontakt</h3>
            <p className="text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>info@pista.consulting</p>
          </div>
        </div>
      </footer>

      <CookieBanner />
      <PistiChatbot />
    </div>
  );
}

export default Blog;

