import React from 'react';
import type { Tool } from '../types';
import { ExternalLink, Star } from 'lucide-react';

interface ToolDetailsProps {
  tool: Tool;
  isDark: boolean;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
  isAuthenticated?: boolean;
}

export const ToolDetails: React.FC<ToolDetailsProps> = ({
  tool,
  isDark,
  isFavorite = false,
  onToggleFavorite,
  isAuthenticated = false,
}) => {
  const Icon = tool.icon;

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Hero Section */}
      <div className={`py-12 ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-4">
              <div className={`p-4 rounded-lg bg-gradient-to-br ${getGradient()}`}>
                <Icon className="w-12 h-12 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">{tool.title}</h1>
                <p className={`mt-2 text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {tool.description}
                </p>
              </div>
            </div>
            {isAuthenticated && onToggleFavorite && (
              <button
                onClick={onToggleFavorite}
                className={`p-2 rounded-full ${
                  isDark ? 'hover:bg-white/10' : 'hover:bg-gray-200'
                } transition-colors`}
              >
                <Star
                  className={`w-6 h-6 ${
                    isFavorite ? 'text-yellow-400 fill-current' : 'text-gray-400'
                  }`}
                />
              </button>
            )}
          </div>
          <div className="mt-6">
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center space-x-2 px-6 py-3 rounded-lg ${
                isDark 
                  ? 'bg-blue-600 hover:bg-blue-700' 
                  : 'bg-blue-500 hover:bg-blue-600'
              } text-white font-medium transition-colors`}
            >
              <span>Open {tool.title}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-12">
          {/* Key Features */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {getToolFeatures(tool.category).map((feature, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg ${
                    isDark ? 'bg-gray-800' : 'bg-gray-100'
                  }`}
                >
                  <h3 className="font-medium mb-2">{feature.title}</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Common Use Cases</h2>
            <div className="space-y-4">
              {getToolUseCases(tool.category).map((useCase, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg ${
                    isDark ? 'bg-gray-800' : 'bg-gray-100'
                  }`}
                >
                  <h3 className="font-medium mb-2">{useCase.title}</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Getting Started */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Getting Started</h2>
            <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <ol className="space-y-4">
                {getGettingStartedSteps(tool.category).map((step, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full ${
                      isDark ? 'bg-gray-700' : 'bg-white'
                    }`}>
                      {index + 1}
                    </span>
                    <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

const gradients = [
  'from-pink-500 to-rose-500',
  'from-purple-500 to-indigo-500',
  'from-blue-500 to-cyan-500',
  'from-green-500 to-emerald-500',
  'from-yellow-500 to-orange-500',
];

const getGradient = () => {
  return gradients[Math.floor(Math.random() * gradients.length)];
};

const getToolFeatures = (category: string) => {
  const commonFeatures = [
    {
      title: 'User-Friendly Interface',
      description: 'Intuitive design that makes it easy to get started and accomplish your tasks efficiently.'
    },
    {
      title: 'Cloud-Based Solution',
      description: 'Access your work from anywhere, with automatic saves and seamless synchronization.'
    }
  ];

  const categoryFeatures = {
    ai: [
      {
        title: 'Advanced AI Models',
        description: 'Powered by state-of-the-art machine learning models for accurate results.'
      },
      {
        title: 'Real-time Processing',
        description: 'Get instant responses and analysis for your queries and tasks.'
      }
    ],
    productivity: [
      {
        title: 'Task Automation',
        description: 'Automate repetitive tasks and workflows to save time and reduce errors.'
      },
      {
        title: 'Team Collaboration',
        description: 'Built-in features for sharing and collaborating with team members.'
      }
    ],
    development: [
      {
        title: 'Code Integration',
        description: 'Seamlessly integrate with your existing development workflow and tools.'
      },
      {
        title: 'Version Control',
        description: 'Track changes and maintain different versions of your work.'
      }
    ],
    design: [
      {
        title: 'Professional Templates',
        description: 'Start with pre-made templates and customize them to your needs.'
      },
      {
        title: 'Export Options',
        description: 'Export your work in various formats suitable for different platforms.'
      }
    ]
  };

  return [...commonFeatures, ...(categoryFeatures[category as keyof typeof categoryFeatures] || [])];
};

const getToolUseCases = (category: string) => {
  const useCases = {
    ai: [
      {
        title: 'Content Generation',
        description: 'Create high-quality content for various purposes, from marketing copy to creative writing.'
      },
      {
        title: 'Data Analysis',
        description: 'Analyze and extract insights from large datasets using AI capabilities.'
      }
    ],
    productivity: [
      {
        title: 'Project Management',
        description: 'Organize and track projects, tasks, and team collaboration efficiently.'
      },
      {
        title: 'Document Processing',
        description: 'Handle document creation, editing, and management with advanced features.'
      }
    ],
    development: [
      {
        title: 'Code Development',
        description: 'Write, test, and deploy code with integrated development features.'
      },
      {
        title: 'API Integration',
        description: 'Connect and integrate with various services through API endpoints.'
      }
    ],
    design: [
      {
        title: 'Visual Design',
        description: 'Create professional designs for web, mobile, or print materials.'
      },
      {
        title: 'Prototyping',
        description: 'Build and test interactive prototypes for user experience validation.'
      }
    ]
  };

  return useCases[category as keyof typeof useCases] || [];
};

const getGettingStartedSteps = (category: string) => {
  const commonSteps = [
    'Create an account or sign in to your existing account',
    'Complete the initial setup process',
    'Familiarize yourself with the main dashboard'
  ];

  const categorySteps = {
    ai: [
      'Select your preferred AI model or template',
      'Input your requirements or data',
      'Review and refine the AI-generated results'
    ],
    productivity: [
      'Set up your workspace and preferences',
      'Import existing data or start fresh',
      'Configure automation rules and workflows'
    ],
    development: [
      'Connect your development environment',
      'Set up necessary API keys and configurations',
      'Start coding with the integrated tools'
    ],
    design: [
      'Choose a template or start from scratch',
      'Customize the design elements',
      'Preview and export your work'
    ]
  };

  return [...commonSteps, ...(categorySteps[category as keyof typeof categorySteps] || [])];
};