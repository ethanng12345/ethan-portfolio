import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft, ExternalLink, Github, Youtube, Instagram, FileText, X, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: "cnn",
    title: "Engineered a Custom CNN to Achieve 99.09% Test Accuracy on Vegetable Classification",
    shortDesc: "Custom-built CNN achieving 99.09% accuracy in vegetable classification",
    category: "Deep Learning Project",
    timeline: "2025",
    techStack: ["Python", "TensorFlow", "Keras", "CNN", "Deep Learning"],
    video: "/assets/projects/cnn/vegetables.mov",
    images: [
      { path: "/assets/projects/cnn/3644e9eb-8a01-4dee-a35a-b817e3b163ec.png", priority: 1, size: "81K" },
      { path: "/assets/projects/cnn/Screenshot 2025-10-23 200857.png", priority: 2, size: "641K" },
      { path: "/assets/projects/cnn/Screenshot 2025-10-23 201017.png", priority: 2, size: "72K" },
      { path: "/assets/projects/cnn/download.png", priority: 3, size: "7.4M" },
      { path: "/assets/projects/cnn/Screenshot 2025-10-23 200709.png", priority: 3, size: "38K" },
    ],
    links: {
      github: "https://github.com/ethanng12345/DEEPLEARNINGCA1-CNN-VEGETABLES",
    },
    presentation: "/assets/presentations/Custom CNN for Vegetable Image Classification  Deep Learning Project.pptx",
    sections: [
      {
        title: "Key Achievements",
        content: `Achieved 99.09% test accuracy through systematic architecture optimization

Outperformed industry-standard ResNet50 transfer learning benchmarks

Implemented advanced data augmentation techniques including rotation, zoom, and flip transformations

Optimized model performance by experimenting with various input resolutions and layer configurations`,
      },
      {
        title: "Technical Approach",
        content: `The project involved designing a multi-layer CNN architecture with carefully tuned convolutional layers, pooling operations, and fully connected layers. I employed batch normalization and dropout techniques to prevent overfitting and ensure robust generalization.`,
      },
      {
        title: "Impact",
        content: `This project demonstrated my ability to build deep learning models from first principles, optimize complex architectures, and achieve state-of-the-art results that exceed pre-trained transfer learning models.`,
      },
    ],
  },
  {
    id: "hdb",
    title: "Data Analysis of 200K+ HDB Transactions to Propose 3-Tiered Policy Framework",
    shortDesc: "Data-driven policy framework based on analysis of 202,764 HDB transactions",
    category: "Data Visualization Project",
    timeline: "2025",
    techStack: ["Python", "Pandas", "Tableau", "Data Visualization"],
    video: "/assets/projects/hdb/hdb-buildings.mp4",
    images: [
      { path: "/assets/projects/hdb/Picture5.png", priority: 1, size: "2.0M" },
      { path: "/assets/projects/hdb/Picture4.png", priority: 1, size: "1.7M" },
    ],
    links: {
      github: "https://github.com/ethanng12345/HDB-Resale-Market-Analysis-Policy-Recommendation-DAVICA1",
    },
    presentation: "/assets/presentations/HDB Resale Market Analysis & Policy Recommendation  Data Visualization Project.pptx",
    sections: [
      {
        title: "Data Engineering",
        content: `Processed and cleansed a massive dataset of 202,764 HDB resale transactions using Python (Pandas)

Implemented rigorous data quality checks and validation procedures

Engineered meaningful features to identify market trends and patterns`,
      },
      {
        title: "Visualization & Analysis",
        content: `Developed a compelling 2-dashboard Tableau story featuring 6 interactive visualizations that revealed:

Geographic price disparities across Singapore's estates

Temporal trends in resale prices and transaction volumes

Correlation between flat characteristics and market values

Identification of overheated markets like Punggol`,
      },
      {
        title: "Business Impact",
        content: `Extracted actionable insights that led to the development of a 3-tiered policy framework proposal for HDB, specifically targeting overheated markets to improve housing affordability for Singaporeans.`,
      },
    ],
  },
  {
    id: "learning-express",
    title: "Led Digital Transformation: Full Website Redesign for Vietnamese Artisan & Business Growth",
    shortDesc: "2nd Prize Winner - Full digital transformation for Vietnamese traditional craft business",
    category: "Business & Web Development Project",
    timeline: "2025",
    techStack: ["HTML", "CSS", "JavaScript", "UX/UI Design", "Chatbot Integration"],
    video: "/assets/projects/learning-express/vietnam.mp4",
    images: [
      { path: "/assets/projects/learning-express/Screenshot 2025-10-23 194813.png", priority: 1, size: "667K" },
      { path: "/assets/projects/learning-express/NTTU-35.JPG", priority: 2, size: "3.4M" },
      { path: "/assets/projects/learning-express/bc8d3e27-0e17-425e-9202-89253fb8254a.jpg", priority: 2, size: "1.5M" },
    ],
    links: {
      github: "https://github.com/ethanng12345/Learning-Express-Digital-Transformation-for-Vietnamese-Artisan",
      instagram: "https://www.instagram.com/home24h_?igsh=dnZsemg0dzg4cjNm",
    },
    sections: [
      {
        title: "Problem Discovery",
        content: `Through on-site consultation in Vietnam, I identified critical pain points:

Non-functional, outdated website that failed to represent the brand

Weak online market differentiation in a competitive landscape

Limited customer engagement and storytelling capabilities`,
      },
      {
        title: "Solution Development",
        content: `Led a comprehensive website redesign that balanced modern web technologies with authentic Vietnamese cultural elements:

Integrated compelling storytelling videos that showcase the artisan's craft and heritage

Implemented a downloadable product catalog for easy browsing

Developed an AI-powered customer service chatbot for instant engagement

Created a responsive, mobile-first design with intuitive navigation`,
      },
      {
        title: "Recognition",
        content: `The solution successfully exceeded the owner's expectations and won 2nd Prize at the Learning Express Program Hackathon 2025, validating the business impact and technical execution.`,
      },
    ],
  },
  {
    id: "glove-royale",
    title: "Architected Modular Full-Stack Web App: Node.js, MySQL, and RESTful API for Boxing Game",
    shortDesc: "Full-stack web application with secure authentication and modular API architecture",
    category: "Back-End Development Project",
    timeline: "2024",
    techStack: ["Node.js", "Express.js", "MySQL", "RESTful API", "JWT", "bcrypt"],
    video: "/assets/projects/glove-royale/boxing.mp4",
    images: [
      { path: "/assets/projects/glove-royale/Screenshot 2025-10-23 195747.png", priority: 1, size: "2.8M" },
      { path: "/assets/projects/glove-royale/Screenshot 2025-10-23 195849.png", priority: 3, size: "420K" },
    ],
    links: {
      github: "https://github.com/ethanng12345/gamebox.git",
      youtube: "https://www.youtube.com/watch?v=0KRcBrWA82M",
    },
    sections: [
      {
        title: "System Architecture",
        content: `Designed and implemented a complete full-stack boxing simulation game featuring:

Backend: Robust Node.js server with Express.js framework

Database: MySQL relational database with optimized schema design

API Design: Modular RESTful API supporting all CRUD operations

Clean separation of concerns with MVC architecture pattern`,
      },
      {
        title: "Security Implementation",
        content: `Prioritized application security through industry-standard practices:

JWT (JSON Web Tokens) for stateless authentication

bcrypt password hashing to protect user credentials

Input validation and sanitization to prevent injection attacks

Secure session management and token refresh mechanisms`,
      },
      {
        title: "Technical Highlights",
        content: `Modular route handlers for maintainable code structure

Database connection pooling for optimal performance

Error handling middleware for robust application behavior

RESTful endpoint design following industry best practices`,
      },
    ],
  },
  {
    id: "gan",
    title: "Developed CDCGAN with Novel Evaluation Pipeline for High-Fidelity Synthetic Letter Generation",
    shortDesc: "Novel conditional DCGAN generating synthetic handwritten letters with 98% validation accuracy",
    category: "Deep Learning Project",
    timeline: "2025",
    techStack: ["Python", "Deep Learning", "GANs", "CNN", "TensorFlow"],
    video: "/assets/projects/gan/handwriting.mov",
    images: [
      { path: "/assets/projects/gan/download.png", priority: 2, size: "256K" },
      { path: "/assets/projects/gan/download (1).png", priority: 2, size: "61K" },
      { path: "/assets/projects/gan/Picture9.png", priority: 2, size: "5.7K" },
    ],
    links: {
      github: "https://github.com/ethanng12345/Generative-AI-Conditional-GAN-for-Letter-Generation-Deep-Learning-Project",
    },
    presentation: "/assets/presentations/Generative AI Conditional GAN for Letter Generation  Deep Learning Project.pptx",
    sections: [
      {
        title: "Model Architecture",
        content: `Developed a conditional Deep Convolutional GAN (CDCGAN) capable of generating realistic handwritten letters across 16 different character classes. The conditional architecture allows targeted generation based on desired letter class.`,
      },
      {
        title: "Generator Network",
        content: `Designed multi-layer transposed convolutional architecture

Implemented batch normalization for training stability

Utilized label embedding for conditional generation

Generated high-quality synthetic handwriting samples`,
      },
      {
        title: "Discriminator Network",
        content: `Built robust discriminator to distinguish real from generated samples

Employed progressive training techniques for convergence

Balanced generator-discriminator learning dynamics`,
      },
      {
        title: "Novel Evaluation Pipeline",
        content: `Engineered an innovative validation approach:

Developed a separate CNN classifier trained on real handwriting data

Used the classifier to evaluate the quality and realism of GAN-generated samples

Achieved an impressive 98% accuracy score, proving the synthetic images are virtually indistinguishable from real handwriting`,
      },
    ],
  },
  {
    id: "genai-website",
    title: "Rapid Prototyping: Leveraging GenAI (Hugging Face) to Build and Refine Websites from Prompts",
    shortDesc: "AI-powered prompt-to-website application leveraging generative AI for rapid prototyping",
    category: "Personal Project",
    timeline: "2025",
    techStack: ["Hugging Face", "Generative AI", "HTML", "CSS", "Prompt Engineering"],
    video: "/assets/projects/genai-website/genai.mp4",
    images: [
      { path: "/assets/projects/genai-website/Screenshot 2025-10-23 195600.png", priority: 1, size: "767K" },
    ],
    links: {
      github: "https://github.com/ethanng12345/GenAI-Website-Architect-Prompt-to-Website-Application-Personal-Project",
    },
    sections: [
      {
        title: "AI Integration",
        content: `Leveraged Hugging Face's state-of-the-art generative AI models to:

Accept natural language prompts describing desired website features

Generate multi-section website layouts automatically

Produce initial HTML/CSS code structure from text descriptions`,
      },
      {
        title: "Manual Refinement & Engineering",
        content: `While AI handled the initial generation, I applied software engineering expertise to:

Re-engineer and refactor the generated code for production quality

Enhance responsive design for mobile, tablet, and desktop experiences

Optimize CSS for visual appeal and consistent styling

Implement modern web development best practices

Debug and resolve AI-generated code inconsistencies`,
      },
      {
        title: "Technical Insights",
        content: `This project highlighted the synergy between AI-assisted development and human engineering judgment. It demonstrated that generative AI is a powerful tool for rapid prototyping, but requires skilled engineering to transform raw output into polished, user-ready applications.`,
      },
      {
        title: "Impact",
        content: `The application significantly accelerates the website development workflow, reducing time from concept to prototype while maintaining high code quality standards.`,
      },
    ],
  },
];

export default function ProjectDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Head>
          <title>Project Not Found - Ethan Ng</title>
        </Head>
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
    );
  }

  return (
    <>
      <Head>
        <title>{project.title} - Ethan Ng</title>
        <meta name="description" content={project.shortDesc} />
      </Head>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
          onClick={() => {
            setSelectedImage(null);
            setZoomLevel(1);
          }}
        >
          <button
            onClick={() => {
              setSelectedImage(null);
              setZoomLevel(1);
            }}
            className="absolute right-4 top-4 z-[110] rounded-full bg-white/10 p-2 backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            <X className="h-6 w-6 text-white" />
          </button>

          {/* Zoom Controls */}
          <div className="absolute left-4 top-4 z-[110] flex flex-col gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setZoomLevel(Math.min(zoomLevel + 0.25, 3));
              }}
              className="rounded-full bg-white/10 p-2 backdrop-blur-sm transition-colors hover:bg-white/20"
              title="Zoom In"
            >
              <ZoomIn className="h-5 w-5 text-white" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setZoomLevel(Math.max(zoomLevel - 0.25, 0.5));
              }}
              className="rounded-full bg-white/10 p-2 backdrop-blur-sm transition-colors hover:bg-white/20"
              title="Zoom Out"
            >
              <ZoomOut className="h-5 w-5 text-white" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setZoomLevel(1);
              }}
              className="rounded-full bg-white/10 p-2 backdrop-blur-sm transition-colors hover:bg-white/20"
              title="Reset Zoom"
            >
              <RotateCcw className="h-5 w-5 text-white" />
            </button>
          </div>

          <div className="relative h-[95vh] w-[95vw] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage}
              alt="Full size preview"
              width={3000}
              height={3000}
              quality={100}
              style={{ transform: `scale(${zoomLevel})`, transition: 'transform 0.2s ease-out' }}
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/#projects">
            <Button variant="ghost" size="sm" className="gap-2">
              <ChevronLeft className="h-4 w-4" />
              Back to Projects
            </Button>
          </Link>
          <Link href="/">
            <span className="text-lg font-semibold">Ethan Ng</span>
          </Link>
        </div>
      </nav>

      <main className="bg-background pt-20">
        {/* Hero Video Section */}
        <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden border-b-4 border-white">
          {project.video && (
            <video
              src={project.video}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />

          {/* Hero Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-12">
            <div className="mx-auto max-w-7xl">
              <p className="mb-3 text-sm font-medium uppercase tracking-wider text-white/80">
                {project.category} • {project.timeline}
              </p>
              <h1 className="clash-grotesk mb-4 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl xl:text-6xl">
                {project.title}
              </h1>
              <p className="max-w-2xl text-lg text-white/90 md:text-xl">
                {project.shortDesc}
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack & Links */}
        <section className="border-b border-white/10 bg-background px-6 py-12">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Tech Stack */}
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* External Links */}
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Project Links
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="gap-2">
                        <Github className="h-4 w-4" />
                        View on GitHub
                      </Button>
                    </a>
                  )}
                  {project.links.youtube && (
                    <a href={project.links.youtube} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="gap-2">
                        <Youtube className="h-4 w-4" />
                        Watch Demo
                      </Button>
                    </a>
                  )}
                  {project.links.instagram && (
                    <a href={project.links.instagram} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="gap-2">
                        <Instagram className="h-4 w-4" />
                        Instagram
                      </Button>
                    </a>
                  )}
                  {project.presentation && (
                    <a href={project.presentation} download>
                      <Button variant="outline" className="gap-2">
                        <FileText className="h-4 w-4" />
                        Download Presentation
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Images Gallery */}
        <section className="border-b border-white/10 bg-background px-6 py-16">
          <div className="mx-auto max-w-7xl">
            <div className={`grid gap-4 md:gap-6 lg:gap-8 ${project.images.length === 5 ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-2 md:grid-cols-3'}`}>
              {project.images.map((image, idx) => {
                // Layout logic based on priority and image count
                const totalImages = project.images.length;
                let colSpanClass = "";

                if (totalImages === 1) {
                  // Single image - full width
                  colSpanClass = "col-span-2 md:col-span-3";
                } else if (totalImages === 2) {
                  // Two images - stack vertically on mobile, side by side on desktop
                  colSpanClass = "col-span-2 md:col-span-3";
                } else if (totalImages === 3) {
                  // Three images - priority 1 takes full width, others split
                  if (image.priority === 1) {
                    colSpanClass = "col-span-2 md:col-span-3";
                  } else if (image.priority === 2) {
                    colSpanClass = "col-span-2 md:col-span-3 lg:col-span-1";
                  } else {
                    colSpanClass = "col-span-1";
                  }
                } else if (totalImages === 4) {
                  // Four images - balanced grid
                  colSpanClass = "col-span-1 md:col-span-1";
                } else if (totalImages === 5) {
                  // Five images - first image full width, others in row of 4 on desktop
                  if (idx === 0) {
                    colSpanClass = "col-span-2 md:col-span-4";
                  } else {
                    colSpanClass = "col-span-1";
                  }
                } else {
                  // 6+ images - balanced grid
                  if (idx === 0 && image.priority === 1) {
                    colSpanClass = "col-span-2 md:col-span-2";
                  } else {
                    colSpanClass = "col-span-1";
                  }
                }

                return (
                  <div
                    key={idx}
                    className={`group relative cursor-pointer overflow-hidden rounded-lg transition-all hover:scale-[1.02] hover:shadow-2xl ${colSpanClass}`}
                    onClick={() => setSelectedImage(image.path)}
                  >
                    <div className="relative flex h-full min-h-[400px] w-full items-center justify-center bg-black/5">
                      <Image
                        src={image.path}
                        alt={`${project.title} - Screenshot ${idx + 1}`}
                        width={1400}
                        height={800}
                        quality={100}
                        className="h-full w-full object-contain p-2"
                      />
                      <div className="absolute inset-0 bg-black/0 transition-all group-hover:bg-black/10" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Project Content Sections */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-5xl">
            {project.sections.map((section, idx) => (
              <div key={idx} className="mb-20">
                <h2 className="mb-6 text-2xl font-bold tracking-tight md:text-3xl">
                  {section.title}
                </h2>
                <div className="whitespace-pre-line text-lg leading-relaxed text-muted-foreground">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <section className="border-t border-white/10 bg-background px-6 py-16">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="mb-6 text-2xl font-bold tracking-tight md:text-3xl">
              Interested in this project?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Check out the code or get in touch to learn more
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#projects">
                <Button variant="outline" size="lg">
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  View More Projects
                </Button>
              </Link>
              <Link href="/#contact">
                <Button size="lg" className="gap-2">
                  Get in Touch
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
