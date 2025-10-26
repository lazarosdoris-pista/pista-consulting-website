import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import CookieBanner from './CookieBanner';
import PistiChatbot from './PistiChatbot';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center" style={{ fontFamily: 'Gomme Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>404 - Blog Post nicht gefunden</h1>
          <p className="text-xl text-gray-600 mb-8" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
            Der angefragte Blog-Beitrag existiert leider nicht.
          </p>
          <Link to="/blog" className="inline-block bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-300" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>
            Zurück zum Blog
          </Link>
        </div>
      </div>
    );
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Gomme Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header */}
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
          </nav>
        </div>
      </header>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <Link to="/blog" className="text-red-500 hover:text-red-700 flex items-center mb-6" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Zurück zum Blog
          </Link>
          {/* Hero Image */}
          {post.image && (
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-96 object-cover"
              />
            </div>
          )}
          
          <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>{post.title}</h1>
          <div className="flex items-center justify-between text-sm text-gray-500 mb-6" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
            <span>Von {post.author}</span>
            <span>{post.date}</span>
            <span>{post.readTime} Min. Lesezeit</span>
          </div>
          <div className="prose prose-lg max-w-none" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              components={{
                h2: ({node, ...props}) => <h2 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }} {...props} />,
                h3: ({node, ...props}) => <h3 className="text-xl font-bold mt-6 mb-3" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }} {...props} />,
                p: ({node, ...props}) => <p className="mb-4 text-gray-700 leading-relaxed text-lg" {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc ml-6 mb-6 space-y-2" {...props} />,
                li: ({node, ...props}) => <li className="text-gray-700" {...props} />,
                strong: ({node, ...props}) => <strong className="font-semibold text-gray-900" {...props} />,
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </div>
      </section>

      {/* Footer */}
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

export default BlogPost;

