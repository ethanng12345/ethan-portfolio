import { useRouter } from "next/router";
import Container from "@/components/Container";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

const projects = [
  {
    id: "cnn",
    title: "Custom CNN for Vegetable Image Classification",
    shortDesc: "Custom-built CNN achieving 99.09% accuracy in vegetable classification",
    techStack: ["Python", "TensorFlow", "Keras", "CNN", "Deep Learning"],
    images: [
      "/assets/projects/cnn/Screenshot 2025-10-23 200709.png",
      "/assets/projects/cnn/Screenshot 2025-10-23 200857.png",
      "/assets/projects/cnn/Screenshot 2025-10-23 201017.png",
      "/assets/projects/cnn/Picture3.png",
    ],
    fullDesc: `In this deep learning project, I engineered a custom Convolutional Neural Network (CNN) from scratch using Python and TensorFlow/Keras to classify 11 different types of vegetables with exceptional accuracy.

🎯 Key Achievements:
• Achieved 99.09% test accuracy through systematic architecture optimization
• Outperformed industry-standard ResNet50 transfer learning benchmarks
• Implemented advanced data augmentation techniques including rotation, zoom, and flip transformations
• Optimized model performance by experimenting with various input resolutions and layer configurations

🔧 Technical Approach:
The project involved designing a multi-layer CNN architecture with carefully tuned convolutional layers, pooling operations, and fully connected layers. I employed batch normalization and dropout techniques to prevent overfitting and ensure robust generalization.

💡 Impact:
This project demonstrated my ability to build deep learning models from first principles, optimize complex architectures, and achieve state-of-the-art results that exceed pre-trained transfer learning models.`,
  },
  {
    id: "hdb",
    title: "HDB Resale Market Analysis & Policy Recommendation",
    shortDesc: "Data-driven policy framework based on analysis of 202,764 HDB transactions",
    techStack: ["Python", "Pandas", "Tableau", "Data Visualization"],
    images: [
      "/assets/projects/hdb/Picture4.png",
      "/assets/projects/hdb/Picture5.png",
      "/assets/projects/hdb/Picture7.png",
      "/assets/projects/hdb/unnamed.png",
    ],
    fullDesc: `A comprehensive data analytics project that transformed raw transaction data into actionable policy recommendations for Singapore's public housing market.

📊 Data Engineering:
• Processed and cleansed a massive dataset of 202,764 HDB resale transactions using Python (Pandas)
• Implemented rigorous data quality checks and validation procedures
• Engineered meaningful features to identify market trends and patterns

📈 Visualization & Analysis:
Developed a compelling 2-dashboard Tableau story featuring 6 interactive visualizations that revealed:
• Geographic price disparities across Singapore's estates
• Temporal trends in resale prices and transaction volumes
• Correlation between flat characteristics and market values
• Identification of overheated markets like Punggol

🎯 Business Impact:
Extracted actionable insights that led to the development of a 3-tiered policy framework proposal for HDB, specifically targeting overheated markets to improve housing affordability for Singaporeans.`,
  },
  {
    id: "learning-express",
    title: "Learning Express - Digital Transformation for Vietnamese Artisan",
    shortDesc: "🏆 2nd Prize Winner - Full digital transformation for Vietnamese traditional craft business",
    techStack: ["HTML", "CSS", "JavaScript", "UX/UI Design", "Chatbot Integration"],
    images: [
      "/assets/projects/learning-express/Screenshot 2025-10-23 194813.png",
      "/assets/projects/learning-express/NTTU-35.JPG",
      "/assets/projects/learning-express/bc8d3e27-0e17-425e-9202-89253fb8254a.jpg",
    ],
    fullDesc: `A meaningful business and web development project that brought digital transformation to a traditional Vietnamese artisan, blending technology with cultural authenticity.

🔍 Problem Discovery:
Through on-site consultation in Vietnam, I identified critical pain points:
• Non-functional, outdated website that failed to represent the brand
• Weak online market differentiation in a competitive landscape
• Limited customer engagement and storytelling capabilities

💻 Solution Development:
Led a comprehensive website redesign that balanced modern web technologies with authentic Vietnamese cultural elements:
• Integrated compelling storytelling videos that showcase the artisan's craft and heritage
• Implemented a downloadable product catalog for easy browsing
• Developed an AI-powered customer service chatbot for instant engagement
• Created a responsive, mobile-first design with intuitive navigation

🏆 Recognition:
The solution successfully exceeded the owner's expectations and won **2nd Prize at the Learning Express Program Hackathon 2025**, validating the business impact and technical execution.`,
  },
  {
    id: "glove-royale",
    title: "Glove Royale - Full-Stack Boxing Simulation Game",
    shortDesc: "Full-stack web application with secure authentication and modular API architecture",
    techStack: ["Node.js", "Express.js", "MySQL", "RESTful API", "JWT", "bcrypt"],
    images: [
      "/assets/projects/glove-royale/Screenshot 2025-10-23 195747.png",
      "/assets/projects/glove-royale/Screenshot 2025-10-23 195849.png",
    ],
    fullDesc: `A comprehensive full-stack web development project that showcases modern backend engineering practices and secure application architecture.

🏗️ System Architecture:
Designed and implemented a complete full-stack boxing simulation game featuring:
• **Backend:** Robust Node.js server with Express.js framework
• **Database:** MySQL relational database with optimized schema design
• **API Design:** Modular RESTful API supporting all CRUD operations
• Clean separation of concerns with MVC architecture pattern

🔐 Security Implementation:
Prioritized application security through industry-standard practices:
• JWT (JSON Web Tokens) for stateless authentication
• bcrypt password hashing to protect user credentials
• Input validation and sanitization to prevent injection attacks
• Secure session management and token refresh mechanisms

⚡ Technical Highlights:
• Modular route handlers for maintainable code structure
• Database connection pooling for optimal performance
• Error handling middleware for robust application behavior
• RESTful endpoint design following industry best practices`,
  },
  {
    id: "gan",
    title: "Conditional GAN for Handwritten Letter Generation",
    shortDesc: "Novel conditional DCGAN generating synthetic handwritten letters with 98% validation accuracy",
    techStack: ["Python", "Deep Learning", "GANs", "CNN", "TensorFlow"],
    images: [
      "/assets/projects/gan/Picture9.png",
      "/assets/projects/gan/download.png",
      "/assets/projects/gan/download (1).png",
    ],
    fullDesc: `An advanced deep learning project exploring generative adversarial networks (GANs) for synthetic handwriting generation.

🧠 Model Architecture:
Developed a conditional Deep Convolutional GAN (CDCGAN) capable of generating realistic handwritten letters across 16 different character classes. The conditional architecture allows targeted generation based on desired letter class.

🎨 Generator Network:
• Designed multi-layer transposed convolutional architecture
• Implemented batch normalization for training stability
• Utilized label embedding for conditional generation
• Generated high-quality synthetic handwriting samples

🔍 Discriminator Network:
• Built robust discriminator to distinguish real from generated samples
• Employed progressive training techniques for convergence
• Balanced generator-discriminator learning dynamics

🎯 Novel Evaluation Pipeline:
Engineered an innovative validation approach:
• Developed a separate CNN classifier trained on real handwriting data
• Used the classifier to evaluate the quality and realism of GAN-generated samples
• Achieved an impressive 98% accuracy score, proving the synthetic images are virtually indistinguishable from real handwriting`,
  },
  {
    id: "genai-website",
    title: "GenAI Website Architect",
    shortDesc: "AI-powered prompt-to-website application leveraging generative AI for rapid prototyping",
    techStack: ["Hugging Face", "Generative AI", "HTML", "CSS", "Prompt Engineering"],
    images: ["/assets/projects/genai-website/Screenshot 2025-10-23 195600.png"],
    fullDesc: `An innovative personal project that harnesses the power of generative AI to transform natural language descriptions into functional websites.

🤖 AI Integration:
Leveraged Hugging Face's state-of-the-art generative AI models to:
• Accept natural language prompts describing desired website features
• Generate multi-section website layouts automatically
• Produce initial HTML/CSS code structure from text descriptions

⚙️ Manual Refinement & Engineering:
While AI handled the initial generation, I applied software engineering expertise to:
• Re-engineer and refactor the generated code for production quality
• Enhance responsive design for mobile, tablet, and desktop experiences
• Optimize CSS for visual appeal and consistent styling
• Implement modern web development best practices
• Debug and resolve AI-generated code inconsistencies

💡 Technical Insights:
This project highlighted the synergy between AI-assisted development and human engineering judgment. It demonstrated that generative AI is a powerful tool for rapid prototyping, but requires skilled engineering to transform raw output into polished, user-ready applications.

🎯 Impact:
The application significantly accelerates the website development workflow, reducing time from concept to prototype while maintaining high code quality standards.`,
  },
];

export default function ProjectDetail() {
  const router = useRouter();
  const { id } = router.query;

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <Container>
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Project Not Found</h1>
            <Link href="/#projects">
              <Button className="mt-6">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="mx-auto max-w-5xl px-4 py-20">
        <Link href="/#projects">
          <Button variant="outline" className="mb-8">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>

        <h1 className="text-4xl font-bold tracking-tight xl:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {project.shortDesc}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {project.images.map((image, idx) => (
            <div
              key={idx}
              className="relative aspect-video overflow-hidden rounded-lg border border-white/10"
            >
              <Image
                src={image}
                alt={`${project.title} - Image ${idx + 1}`}
                fill
                className="object-contain"
                quality={100}
              />
            </div>
          ))}
        </div>

        <div className="prose prose-invert mt-12 max-w-none">
          <div className="whitespace-pre-line text-base leading-relaxed text-muted-foreground">
            {project.fullDesc}
          </div>
        </div>
      </div>
    </Container>
  );
}
