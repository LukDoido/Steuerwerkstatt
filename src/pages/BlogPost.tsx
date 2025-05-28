import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Tag } from 'lucide-react';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import { blogPosts } from '../data';
import Button from '../components/ui/Button';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const post = blogPosts.find(post => post.id === id);
  
  useEffect(() => {
    if (!post) {
      navigate('/blog');
      return;
    }
    
    document.title = `${post.title} | Steuerwerkstatt Blog`;
  }, [post, navigate]);
  
  if (!post) return null;

  return (
    <>
      <div className="relative overflow-hidden bg-blue-700">
        <div className="absolute inset-0">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover opacity-20"
          />
        </div>
        <Container>
          <div className="relative py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {post.title}
              </h1>
              <div className="mt-6 flex justify-center items-center space-x-6 text-blue-100">
                <div className="flex items-center">
                  <Clock className="mr-2 h-5 w-5" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Tag className="mr-2 h-5 w-5" />
                  <span>{post.category}</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Section>
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg prose-blue mx-auto">
            <p className="lead">
              {post.excerpt}
            </p>
            
            <h2>Wichtige Änderungen im Überblick</h2>
            
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, 
              nunc sit amet aliquam lacinia, nisl nisl aliquet nisl, eget aliquam nunc 
              nisl eu lectus. Sed euismod, nunc sit amet aliquam lacinia, nisl nisl 
              aliquet nisl, eget aliquam nunc nisl eu lectus.
            </p>
            
            <p>
              Nullam euismod, nunc sit amet aliquam lacinia, nisl nisl aliquet nisl, 
              eget aliquam nunc nisl eu lectus. Sed euismod, nunc sit amet aliquam 
              lacinia, nisl nisl aliquet nisl, eget aliquam nunc nisl eu lectus.
            </p>
            
            <h2>Was bedeutet das für Sie?</h2>
            
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, 
              nunc sit amet aliquam lacinia, nisl nisl aliquet nisl, eget aliquam nunc 
              nisl eu lectus. Sed euismod, nunc sit amet aliquam lacinia, nisl nisl 
              aliquet nisl, eget aliquam nunc nisl eu lectus.
            </p>
            
            <ul>
              <li>Punkt 1: Lorem ipsum dolor sit amet</li>
              <li>Punkt 2: Consectetur adipiscing elit</li>
              <li>Punkt 3: Sed euismod, nunc sit amet aliquam lacinia</li>
              <li>Punkt 4: Nisl nisl aliquet nisl, eget aliquam nunc</li>
            </ul>
            
            <h2>Fazit</h2>
            
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, 
              nunc sit amet aliquam lacinia, nisl nisl aliquet nisl, eget aliquam nunc 
              nisl eu lectus. Sed euismod, nunc sit amet aliquam lacinia, nisl nisl 
              aliquet nisl, eget aliquam nunc nisl eu lectus.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg my-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Benötigen Sie Hilfe?</h3>
              <p className="mb-4">
                Unsere Experten stehen Ihnen gerne zur Verfügung, um Ihre individuellen Fragen zu beantworten.
              </p>
              <Button>
                <Link to="/contact">Kontakt aufnehmen</Link>
              </Button>
            </div>
          </div>
          
          <div className="mt-12">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Zurück zur Übersicht
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};

export default BlogPost;