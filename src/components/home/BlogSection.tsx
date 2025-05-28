import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import Card, { CardHeader, CardContent, CardFooter } from '../ui/Card';
import Button from '../ui/Button';
import { blogPosts } from '../../data';

const BlogSection: React.FC = () => {
  return (
    <Section>
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Aktuelle Steuer-Tipps</h2>
        <p className="mt-4 text-lg text-gray-600">
          Erfahren Sie mehr über aktuelle steuerliche Entwicklungen und nützliche Buchhaltungstipps.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {blogPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden flex flex-col h-full">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 bg-blue-700 text-white px-3 py-1 text-sm font-medium">
                {post.category}
              </div>
            </div>
            <CardHeader>
              <p className="text-sm text-gray-500 mb-2">{post.date}</p>
              <h3 className="text-xl font-semibold text-gray-900">{post.title}</h3>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-600">{post.excerpt}</p>
            </CardContent>
            <CardFooter>
              <Link 
                to={`/blog/${post.id}`} 
                className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium"
              >
                Weiterlesen <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Button variant="outline">
          <Link to="/blog" className="flex items-center">
            Alle Beiträge anzeigen <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </Section>
  );
};

export default BlogSection;