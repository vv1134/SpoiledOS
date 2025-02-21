import { 
  Brain, 
  Image, 
  MessageSquare, 
  Code, 
  Music, 
  Video, 
  PenTool, 
  FileText, 
  Wand2,
  Microscope,
  Database,
  Bot,
  Sparkles,
  Camera,
  Mic,
  BookOpen,
  Palette,
  Globe,
  Cpu,
  LineChart,
  Cloud,
  Pencil,
  Search,
  BarChart,
  Layers,
  Zap,
  Terminal,
  Mail,
  Headphones,
  Film,
  Briefcase,
  Share2,
  Lightbulb,
  Smartphone,
  Keyboard,
  Eye,
  Monitor,
  Speaker,
  Book,
  Presentation,
  GitBranch,
  Box,
  Server,
  Settings,
  Users,
  Target,
  Sliders,
  Coffee,
  Compass
} from 'lucide-react';

export const tools = [
  {
    id: 'chatgpt',
    title: 'ChatGPT',
    description: 'Advanced language model for conversation and text generation',
    category: 'ai',
    icon: MessageSquare,
    url: 'https://chat.openai.com'
  },
  {
    id: 'midjourney',
    title: 'Midjourney',
    description: 'AI art generation through Discord',
    category: 'ai',
    icon: Image,
    url: 'https://www.midjourney.com'
  },
  {
    id: 'dalle',
    title: 'DALL-E',
    description: 'Create realistic images and art from text descriptions',
    category: 'ai',
    icon: Image,
    url: 'https://labs.openai.com'
  },
  {
    id: 'perplexity',
    title: 'Perplexity AI',
    description: 'AI-powered search engine with real-time information',
    category: 'productivity',
    icon: Search,
    url: 'https://www.perplexity.ai'
  },
  {
    id: 'anthropic-claude2',
    title: 'Claude 2',
    description: 'Advanced AI model with enhanced reasoning capabilities',
    category: 'ai',
    icon: Brain,
    url: 'https://claude.ai'
  },
  {
    id: 'gemini',
    title: 'Google Gemini',
    description: 'Multimodal AI model for text, code, and image understanding',
    category: 'ai',
    icon: Sparkles,
    url: 'https://gemini.google.com'
  },
  {
    id: 'autodraw',
    title: 'AutoDraw',
    description: 'AI-powered drawing tool that recognizes sketches',
    category: 'design',
    icon: Pencil,
    url: 'https://autodraw.com'
  },
  {
    id: 'descript',
    title: 'Descript',
    description: 'AI video and podcast editing platform',
    category: 'design',
    icon: Video,
    url: 'https://www.descript.com'
  },
  {
    id: 'tome',
    title: 'Tome',
    description: 'AI-powered storytelling and presentation platform',
    category: 'productivity',
    icon: Presentation,
    url: 'https://tome.app'
  },
  {
    id: 'fireflies',
    title: 'Fireflies.ai',
    description: 'AI meeting transcription and analysis',
    category: 'productivity',
    icon: Mic,
    url: 'https://fireflies.ai'
  },
  {
    id: 'grammarly',
    title: 'Grammarly AI',
    description: 'AI writing assistant for grammar and style',
    category: 'productivity',
    icon: FileText,
    url: 'https://www.grammarly.com'
  },
  {
    id: 'copy-ai',
    title: 'Copy.ai',
    description: 'AI copywriting and content generation',
    category: 'productivity',
    icon: FileText,
    url: 'https://www.copy.ai'
  },
  {
    id: 'beautiful-ai',
    title: 'Beautiful.ai',
    description: 'AI-powered presentation design',
    category: 'design',
    icon: Presentation,
    url: 'https://www.beautiful.ai'
  },
  {
    id: 'soundraw',
    title: 'Soundraw',
    description: 'AI music composition and generation',
    category: 'design',
    icon: Music,
    url: 'https://soundraw.io'
  },
  {
    id: 'runwayml',
    title: 'Runway Gen-2',
    description: 'Advanced AI video generation and editing',
    category: 'design',
    icon: Film,
    url: 'https://runwayml.com'
  },
  {
    id: 'anthropic',
    title: 'Anthropic Claude API',
    description: 'Enterprise AI language model API',
    category: 'development',
    icon: Terminal,
    url: 'https://anthropic.com/api'
  },
  {
    id: 'resemble-ai',
    title: 'Resemble AI',
    description: 'AI voice cloning and synthesis',
    category: 'design',
    icon: Mic,
    url: 'https://www.resemble.ai'
  },
  {
    id: 'writesonic',
    title: 'Writesonic',
    description: 'AI writing assistant for marketing content',
    category: 'productivity',
    icon: FileText,
    url: 'https://writesonic.com'
  },
  {
    id: 'gamma',
    title: 'Gamma',
    description: 'AI-powered presentation creation',
    category: 'productivity',
    icon: Presentation,
    url: 'https://gamma.app'
  },
  {
    id: 'pictory',
    title: 'Pictory',
    description: 'AI video creation from text',
    category: 'design',
    icon: Video,
    url: 'https://pictory.ai'
  },
  {
    id: 'otter-ai',
    title: 'Otter.ai',
    description: 'AI meeting transcription and notes',
    category: 'productivity',
    icon: Mic,
    url: 'https://otter.ai'
  },
  {
    id: 'deepl',
    title: 'DeepL',
    description: 'AI-powered language translation',
    category: 'productivity',
    icon: Globe,
    url: 'https://www.deepl.com'
  },
  {
    id: 'stability-api',
    title: 'Stability API',
    description: 'Image generation API for developers',
    category: 'development',
    icon: Code,
    url: 'https://stability.ai/api'
  },
  {
    id: 'cohere',
    title: 'Cohere',
    description: 'AI language models for businesses',
    category: 'development',
    icon: Brain,
    url: 'https://cohere.ai'
  },
  {
    id: 'openai-api',
    title: 'OpenAI API',
    description: 'Access to GPT-4 and other AI models',
    category: 'development',
    icon: Terminal,
    url: 'https://openai.com/api'
  },
  {
    id: 'dreamstudio',
    title: 'DreamStudio',
    description: 'AI image generation platform',
    category: 'design',
    icon: Image,
    url: 'https://dreamstudio.ai'
  },
  {
    id: 'adobe-firefly',
    title: 'Adobe Firefly',
    description: 'AI creative tools integrated with Adobe',
    category: 'design',
    icon: Wand2,
    url: 'https://www.adobe.com/firefly'
  },
  {
    id: 'microsoft-copilot',
    title: 'Microsoft Copilot',
    description: 'AI assistant integrated with Microsoft 365',
    category: 'productivity',
    icon: Sparkles,
    url: 'https://copilot.microsoft.com'
  },
  {
    id: 'amazon-bedrock',
    title: 'Amazon Bedrock',
    description: 'Foundation models for AWS',
    category: 'development',
    icon: Cloud,
    url: 'https://aws.amazon.com/bedrock'
  },
  {
    id: 'google-vertex',
    title: 'Google Vertex AI',
    description: 'Machine learning platform on Google Cloud',
    category: 'development',
    icon: Cloud,
    url: 'https://cloud.google.com/vertex-ai'
  },
  {
    id: 'azure-openai',
    title: 'Azure OpenAI',
    description: 'OpenAI models on Azure',
    category: 'development',
    icon: Cloud,
    url: 'https://azure.microsoft.com/products/cognitive-services/openai-service'
  },
  {
    id: 'mlflow',
    title: 'MLflow',
    description: 'Platform for ML lifecycle management',
    category: 'development',
    icon: GitBranch,
    url: 'https://mlflow.org'
  },
  {
    id: 'weights-and-biases',
    title: 'Weights & Biases',
    description: 'MLOps platform for model training',
    category: 'development',
    icon: BarChart,
    url: 'https://wandb.ai'
  },
  {
    id: 'labelstudio',
    title: 'Label Studio',
    description: 'Data labeling platform for ML',
    category: 'development',
    icon: Target,
    url: 'https://labelstud.io'
  },
  {
    id: 'neptune',
    title: 'Neptune',
    description: 'Metadata store for MLOps',
    category: 'development',
    icon: Database,
    url: 'https://neptune.ai'
  },
  {
    id: 'gradio',
    title: 'Gradio',
    description: 'Create UIs for ML models',
    category: 'development',
    icon: Layers,
    url: 'https://gradio.app'
  },
  {
    id: 'streamlit',
    title: 'Streamlit',
    description: 'Build data apps with Python',
    category: 'development',
    icon: Sliders,
    url: 'https://streamlit.io'
  },
  {
    id: 'modal',
    title: 'Modal',
    description: 'Cloud platform for AI applications',
    category: 'development',
    icon: Cloud,
    url: 'https://modal.com'
  },
  {
    id: 'together-ai',
    title: 'Together AI',
    description: 'Open source AI model deployment',
    category: 'development',
    icon: Users,
    url: 'https://together.ai'
  },
  {
    id: 'nvidia-nemo',
    title: 'NVIDIA NeMo',
    description: 'Framework for conversational AI',
    category: 'development',
    icon: Cpu,
    url: 'https://developer.nvidia.com/nemo'
  },
  {
    id: 'pinecone',
    title: 'Pinecone',
    description: 'Vector database for AI applications',
    category: 'development',
    icon: Database,
    url: 'https://www.pinecone.io'
  },
  {
    id: 'weaviate',
    title: 'Weaviate',
    description: 'Vector search engine',
    category: 'development',
    icon: Search,
    url: 'https://weaviate.io'
  },
  {
    id: 'milvus',
    title: 'Milvus',
    description: 'Open-source vector database',
    category: 'development',
    icon: Database,
    url: 'https://milvus.io'
  },
  {
    id: 'qdrant',
    title: 'Qdrant',
    description: 'Vector similarity search engine',
    category: 'development',
    icon: Search,
    url: 'https://qdrant.tech'
  },
  {
    id: 'chroma',
    title: 'Chroma',
    description: 'Open-source embedding database',
    category: 'development',
    icon: Database,
    url: 'https://www.trychroma.com'
  },
  {
    id: 'lancedb',
    title: 'LanceDB',
    description: 'Developer-friendly vector database',
    category: 'development',
    icon: Database,
    url: 'https://lancedb.com'
  },
  {
    id: 'haystack',
    title: 'Haystack',
    description: 'NLP framework for question answering',
    category: 'development',
    icon: Search,
    url: 'https://haystack.deepset.ai'
  },
  {
    id: 'txtai',
    title: 'txtai',
    description: 'AI-powered search engine',
    category: 'development',
    icon: Search,
    url: 'https://neuml.github.io/txtai'
  },
  {
    id: 'docarray',
    title: 'DocArray',
    description: 'Data structure for unstructured data',
    category: 'development',
    icon: Box,
    url: 'https://docarray.jina.ai'
  },
  {
    id: 'jina',
    title: 'Jina AI',
    description: 'Cloud-native neural search framework',
    category: 'development',
    icon: Cloud,
    url: 'https://jina.ai'
  },
  {
    id: 'vespa',
    title: 'Vespa',
    description: 'Real-time AI data platform',
    category: 'development',
    icon: Zap,
    url: 'https://vespa.ai'
  },
  {
    id: 'ray',
    title: 'Ray',
    description: 'Framework for scaling AI applications',
    category: 'development',
    icon: Cpu,
    url: 'https://www.ray.io'
  },
  {
    id: 'dvc',
    title: 'DVC',
    description: 'Version control for ML projects',
    category: 'development',
    icon: GitBranch,
    url: 'https://dvc.org'
  },
  {
    id: 'bentoml',
    title: 'BentoML',
    description: 'Platform for ML model serving',
    category: 'development',
    icon: Box,
    url: 'https://www.bentoml.com'
  },
  {
    id: 'seldon',
    title: 'Seldon',
    description: 'MLOps platform for model deployment',
    category: 'development',
    icon: Server,
    url: 'https://www.seldon.io'
  },
  {
    id: 'evidently',
    title: 'Evidently',
    description: 'ML model monitoring and testing',
    category: 'development',
    icon: Eye,
    url: 'https://evidentlyai.com'
  },
  {
    id: 'whylabs',
    title: 'WhyLabs',
    description: 'AI observability platform',
    category: 'development',
    icon: Monitor,
    url: 'https://whylabs.ai'
  },
  {
    id: 'arize',
    title: 'Arize',
    description: 'ML observability platform',
    category: 'development',
    icon: LineChart,
    url: 'https://arize.com'
  },
  {
    id: 'fiddler',
    title: 'Fiddler',
    description: 'ML monitoring and explainability',
    category: 'development',
    icon: Settings,
    url: 'https://www.fiddler.ai'
  },
  {
    id: 'truera',
    title: 'TruEra',
    description: 'AI quality management platform',
    category: 'development',
    icon: Target,
    url: 'https://truera.com'
  },
  {
    id: 'deepchecks',
    title: 'Deepchecks',
    description: 'Testing and validation for AI',
    category: 'development',
    icon: Target,
    url: 'https://deepchecks.com'
  },
  {
    id: 'great-expectations',
    title: 'Great Expectations',
    description: 'Data quality for ML pipelines',
    category: 'development',
    icon: Target,
    url: 'https://greatexpectations.io'
  },
  {
    id: 'cleanlab',
    title: 'Cleanlab',
    description: 'Clean ML data and labels',
    category: 'development',
    icon: Wand2,
    url: 'https://cleanlab.ai'
  },
  {
    id: 'snorkel',
    title: 'Snorkel',
    description: 'Programmatic data labeling',
    category: 'development',
    icon: Target,
    url: 'https://www.snorkel.org'
  },
  {
    id: 'labelbox',
    title: 'Labelbox',
    description: 'Training data platform for AI',
    category: 'development',
    icon: Target,
    url: 'https://labelbox.com'
  },
  {
    id: 'scale-ai',
    title: 'Scale AI',
    description: 'AI training data platform',
    category: 'development',
    icon: Target,
    url: 'https://scale.com'
  },
  {
    id: 'humanloop',
    title: 'Humanloop',
    description: 'Platform for LLM app development',
    category: 'development',
    icon: Users,
    url: 'https://humanloop.com'
  },
  {
    id: 'determined-ai',
    title: 'Determined AI',
    description: 'ML training platform',
    category: 'development',
    icon: Brain,
    url: 'https://www.determined.ai'
  },
  {
    id: 'domino',
    title: 'Domino Data Lab',
    description: 'Enterprise MLOps platform',
    category: 'development',
    icon: Box,
    url: 'https://www.dominodatalab.com'
  },
  {
    id: 'databricks',
    title: 'Databricks',
    description: 'Unified analytics platform',
    category: 'development',
    icon: Sparkles,
    url: 'https://www.databricks.com'
  },
  {
    id: 'sagemaker',
    title: 'Amazon SageMaker',
    description: 'ML platform on AWS',
    category: 'development',
    icon: Cloud,
    url: 'https://aws.amazon.com/sagemaker'
  },
  {
    id: 'datarobot',
    title: 'DataRobot',
    description: 'AI platform for enterprises',
    category: 'development',
    icon: Bot,
    url: 'https://www.datarobot.com'
  },
  {
    id: 'h2o',
    title: 'H2O.ai',
    description: 'Open source AI platform',
    category: 'development',
    icon: Cloud,
    url: 'https://h2o.ai'
  },
  {
    id: 'cnvrg',
    title: 'cnvrg.io',
    description: 'End-to-end ML platform',
    category: 'development',
    icon: Brain,
    url: 'https://cnvrg.io'
  },
  {
    id: 'paperspace',
    title: 'Paperspace',
    description: 'ML development platform',
    category: 'development',
    icon: Cloud,
    url: 'https://www.paperspace.com'
  },
  {
    id: 'spell',
    title: 'Spell',
    description: 'ML platform for deep learning',
    category: 'development',
    icon: Wand2,
    url: 'https://spell.ml'
  },
  {
    id: 'valohai',
    title: 'Valohai',
    description: 'MLOps platform',
    category: 'development',
    icon: Settings,
    url: 'https://valohai.com'
  },
  {
    id: 'kubeflow',
    title: 'Kubeflow',
    description: 'ML toolkit for Kubernetes',
    category: 'development',
    icon: Box,
    url: 'https://www.kubeflow.org'
  },
  {
    id: 'metaflow',
    title: 'Metaflow',
    description: 'Framework for data science',
    category: 'development',
    icon: GitBranch,
    url: 'https://metaflow.org'
  },
  {
    id: 'prefect',
    title: 'Prefect',
    description: 'Workflow orchestration platform',
    category: 'development',
    icon: GitBranch,
    url: 'https://www.prefect.io'
  },
  {
    id: 'dagster',
    title: 'Dagster',
    description: 'Data orchestration platform',
    category: 'development',
    icon: GitBranch,
    url: 'https://dagster.io'
  },
  {
    id: 'airflow',
    title: 'Apache Airflow',
    description: 'Workflow management platform',
    category: 'development',
    icon: GitBranch,
    url: 'https://airflow.apache.org'
  },
  {
    id: 'feast',
    title: 'Feast',
    description: 'Feature store for ML',
    category: 'development',
    icon: Database,
    url: 'https://feast.dev'
  },
  {
    id: 'hopsworks',
    title: 'Hopsworks',
    description: 'Feature store and ML platform',
    category: 'development',
    icon: Database,
    url: 'https://www.hopsworks.ai'
  },
  {
    id: 'tecton',
    title: 'Tecton',
    description: 'Enterprise feature platform',
    category: 'development',
    icon: Database,
    url: 'https://www.tecton.ai'
  }
];