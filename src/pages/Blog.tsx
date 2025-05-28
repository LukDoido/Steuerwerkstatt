import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../components/ui/Section';
import Card, { CardHeader, CardContent, CardFooter } from '../components/ui/Card';
import Container from '../components/ui/Container';
import { blogPosts } from '../data';

const Blog: React.FC = () => {
  useEffect(() => {
    document.title = 'Blog & Steuertipps | Steuerwerkstatt';
  }, []);

  const [filter, setFilter] = useState('Alle');
  const categories = ['Alle', ...new Set(blogPosts.map(post => post.category))];
  
  const filteredPosts = filter === 'Alle' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === filter);

  return (
    <>
      <div className="bg-blue-700 py-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Blog & Steuertipps
            </h1>
            <p className="text-xl text-blue-100">
              Aktuelle Informationen und nützliche Tipps rund um Steuern, 
              Buchhaltung und Treuhand für Unternehmen und Privatpersonen.
            </p>
          </div>
        </Container>
      </div>

      <Section>
        <div className="flex justify-center mb-8 overflow-x-auto py-2">
          <div className="flex space-x-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category
                    ? 'bg-blue-700 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filteredPosts.map((post) => (
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
      </Section>
    </>
  );
};

export default Blog;