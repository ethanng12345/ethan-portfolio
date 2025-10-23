import Container from "@/components/Container";
import { useEffect, useRef, Suspense, useState } from "react";
import styles from "@/styles/Home.module.css";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Code2,
  Database,
  Brain,
  Award,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { TriangleDownIcon } from "@radix-ui/react-icons";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import { cn, scrollTo } from "@/lib/utils";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const aboutStats = [
  { label: "Years of Experience", value: "2+" },
  { label: "Technologies Mastered", value: "7+" },
  { label: "Cumulative GPA", value: "3.82/4.0" },
];

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

const skills = {
  technical: [
    "Python",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "SQL",
    "Power BI",
    "Matplotlib",
    "Seaborn",
    "Plotly",
    "Machine Learning",
    "Deep Learning",
    "TensorFlow",
    "Keras",
    "Data Engineering",
    "Statistics",
    "MLOps",
    "HTML/CSS",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MySQL",
    "RESTful API",
    "JWT",
  ],
  soft: [
    "Analytical Thinking",
    "Problem-Solving",
    "Data Storytelling",
    "Communication",
    "Collaboration",
    "Attention to Detail",
    "Entrepreneurial Mindset",
  ],
  certifications: [
    "Generative AI Concepts",
    "Deep Learning with Keras",
    "Supervised Learning with scikit-learn",
    "Data Manipulation with pandas",
    "Data Visualization with Plotly",
  ],
};

const awards = [
  {
    title: "2nd Prize - Learning Express Program Hackathon 2025",
    image: "/assets/awards/bc8d3e27-0e17-425e-9202-89253fb8254a.jpg",
  },
  {
    title: "Semi-Finalist & People's Choice Award - SP Batey Hackathon",
    image: "/assets/awards/1744336684711.jpg",
  },
  {
    title: "NUS Maritime Hackathon Participant (2025)",
    image: "/assets/awards/PHOTO-2023-06-20-22-16-07 (2).jpg",
  },
  {
    title: "Edusave Awards (2017-2023) - Academic Excellence",
    image: "/assets/awards/PHOTO-2023-06-20-22-16-07.jpg",
  },
];

const entrepreneurialImages = [
  "/assets/entrepreneurial/2.jpg",
  "/assets/entrepreneurial/KRxREhG4 copy.jpg",
  "/assets/entrepreneurial/ryzen_5_5600rtx_4060rgb_fishta_1742227687_6a8c3bd0_progressive.jpg",
  "/assets/entrepreneurial/ryzen_7_7700rtx_4070_super_rgb_1749351805_acc29c86_progressive.jpg",
  "/assets/entrepreneurial/f5336f5d-f54d-4977-bcf0-f8e9e33ed263.jpg",
  "/assets/entrepreneurial/bf6bedbd-9fa1-4ce0-a972-ecd5b9f6feca.jpg",
];

export default function Home() {
  const refScrollContainer = useRef(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  // handle scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    async function getLocomotive() {
      const Locomotive = (await import("locomotive-scroll")).default;
      new Locomotive({
        el: refScrollContainer.current ?? new HTMLElement(),
        smooth: true,
      });
    }

    function handleScroll() {
      let current = "";
      setIsScrolled(window.scrollY > 0);

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 250) {
          current = section.getAttribute("id") ?? "";
        }
      });

      navLinks.forEach((li) => {
        li.classList.remove("nav-active");

        if (li.getAttribute("href") === `#${current}`) {
          li.classList.add("nav-active");
        }
      });
    }

    void getLocomotive();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!carouselApi) return;

    setCount(carouselApi.scrollSnapList().length);
    setCurrent(carouselApi.selectedScrollSnap() + 1);

    carouselApi.on("select", () => {
      setCurrent(carouselApi.selectedScrollSnap() + 1);
    });
  }, [carouselApi]);

  return (
    <Container>
      <div ref={refScrollContainer}>
        <Gradient />

        {/* Hero Section */}
        <section
          id="home"
          data-scroll-section
          className="mt-40 flex w-full flex-col items-center xl:mt-0 xl:min-h-screen xl:flex-row xl:justify-between"
        >
          <div className={styles.intro}>
            <div
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed=".09"
              className="flex flex-row items-center space-x-1.5"
            >
              <span className={styles.pill}>python</span>
              <span className={styles.pill}>machine learning</span>
              <span className={styles.pill}>data analytics</span>
            </div>
            <div>
              <h1
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                data-scroll-direction="horizontal"
              >
                <span className="text-6xl tracking-tighter text-foreground 2xl:text-8xl">
                  Hi, I&apos;m
                  <br />
                </span>
                <span className="clash-grotesk text-gradient text-6xl 2xl:text-8xl">
                  Ethan Ng.
                </span>
              </h1>
              <p
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                className="mt-1 max-w-lg tracking-tight text-muted-foreground 2xl:text-xl"
              >
                AI & Analytics Student | Data Science Enthusiast
              </p>
              <p
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                className="mt-3 max-w-lg text-sm tracking-tight text-muted-foreground"
              >
                Analytical and detail-oriented student with a strong foundation in data analytics, Python, SQL, and machine learning. Passionate about transforming data into actionable insights.
              </p>
            </div>
            <span
              data-scroll
              data-scroll-enable-touch-speed
              data-scroll-speed=".06"
              className="flex flex-row items-center space-x-1.5 pt-6"
            >
              <Link href="mailto:ngwenxian@yahoo.com" passHref>
                <Button>
                  Get in touch <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Button
                variant="outline"
                onClick={() => scrollTo(document.querySelector("#about"))}
              >
                Learn more
              </Button>
            </span>

            <div
              className={cn(
                styles.scroll,
                isScrolled && styles["scroll--hidden"],
              )}
            >
              Scroll to discover{" "}
              <TriangleDownIcon className="mt-1 animate-bounce" />
            </div>
          </div>
          <div
            data-scroll
            data-scroll-speed="-.01"
            className="mt-14 flex w-full items-center justify-center xl:mt-0"
          >
            <div className="relative h-[400px] w-[400px] overflow-hidden rounded-full">
              <Image
                src="/assets/profile.jpg"
                alt="Ethan Ng Wen Xian"
                width={400}
                height={400}
                className="h-full w-full object-cover"
                priority
                quality={100}
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="my-14 flex w-full flex-col justify-start space-y-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20"
            >
              <div className="space-y-6">
                <h2 className="text-4xl font-light leading-normal tracking-tighter text-foreground xl:text-6xl">
                  About Me
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  I'm an analytical and detail-oriented student pursuing a{" "}
                  <span className="text-foreground font-medium">
                    Diploma in Applied AI & Analytics
                  </span>{" "}
                  at Singapore Polytechnic, with a strong foundation in data
                  analytics, Python, SQL, and statistical modeling.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  I'm proficient in the{" "}
                  <span className="text-foreground font-medium">
                    end-to-end machine learning lifecycle
                  </span>
                  , from data engineering and model development to deployment.
                  I'm passionate about applying quantitative skills to derive
                  actionable business insights and contribute to challenging
                  data-driven projects.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  When I'm not analyzing data or building machine learning
                  models, I enjoy exploring new technologies and working on side
                  projects. I've turned my passion for technology into an
                  entrepreneurial venture, building a successful PC reselling
                  business.
                </p>

                <div className="flex flex-col gap-3 pt-4">
                  <Link href="/Resume_NG_WEN_XIAN.pdf" download passHref>
                    <Button className="w-full sm:w-auto">
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
                    </Button>
                  </Link>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="https://www.linkedin.com/in/ngwenxianethan/"
                      target="_blank"
                      passHref
                    >
                      <Button variant="outline" size="sm">
                        <Linkedin className="mr-2 h-4 w-4" />
                        LinkedIn
                      </Button>
                    </Link>
                    <Link href="mailto:ngwenxian@yahoo.com" passHref>
                      <Button variant="outline" size="sm">
                        <Mail className="mr-2 h-4 w-4" />
                        Email
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="space-y-2 pt-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    Languages
                  </h3>
                  <div className="flex gap-4">
                    <span className="text-sm text-muted-foreground">
                      English (Fluent)
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Chinese (Conversational)
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <Suspense fallback={<div className="h-[400px] w-full animate-pulse rounded-lg bg-white/5" />}>
                  <Spline scene="/assets/scene.splinecode" className="h-[400px] w-full" />
                </Suspense>
              </div>
            </motion.div>

            <div className="mt-16 grid grid-cols-1 gap-12 pt-10 md:grid-cols-3 xl:gap-20">
              {aboutStats.map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center"
                >
                  <span className="clash-grotesk text-gradient text-5xl font-semibold tracking-tight xl:text-7xl">
                    {stat.value}
                  </span>
                  <span className="mt-2 tracking-tight text-muted-foreground xl:text-xl">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" data-scroll-section>
          <div className="relative isolate -z-10">
            <div
              className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-[100px] sm:-top-80 lg:-top-60"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary via-primary to-secondary opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
          </div>
          <div data-scroll data-scroll-speed=".4" className="my-64">
            <span className="text-gradient clash-grotesk text-sm font-semibold tracking-tighter">
              ✨ Projects
            </span>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight tracking-tighter xl:text-6xl">
              Streamlined digital experiences.
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              I&apos;ve worked on a variety of projects, from small websites to
              large-scale web applications. Here are some of my favorites:
            </p>

            {/* Carousel */}
            <div className="mt-14">
              <Carousel setApi={setCarouselApi} className="w-full">
                <CarouselContent>
                  {projects.map((project) => (
                    <CarouselItem key={project.id} className="md:basis-1/2">
                      <Link href={`/projects/${project.id}`} passHref>
                        <Card className="group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                          <CardHeader className="p-0">
                            <div className="relative overflow-hidden rounded-t-md">
                              {project.images && project.images.length > 0 && (
                                <Image
                                  src={project.images[0]}
                                  alt={project.title}
                                  width={600}
                                  height={300}
                                  quality={100}
                                  className="aspect-video h-full w-full bg-primary object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                              )}
                            </div>
                          </CardHeader>
                          <CardContent className="p-6">
                            <CardTitle className="text-xl font-semibold tracking-tight">
                              {project.title}
                            </CardTitle>
                            <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                              {project.shortDesc}
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                              {project.techStack.slice(0, 3).map((tech) => (
                                <span
                                  key={tech}
                                  className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary"
                                >
                                  {tech}
                                </span>
                              ))}
                              {project.techStack.length > 3 && (
                                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                                  +{project.techStack.length - 3} more
                                </span>
                              )}
                            </div>
                            <Button variant="ghost" className="mt-4 w-full">
                              View Details <ChevronRight className="ml-2 h-4 w-4" />
                            </Button>
                          </CardContent>
                        </Card>
                      </Link>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="py-2 text-center text-sm text-muted-foreground">
                <span className="font-semibold">
                  {current} / {count}
                </span>{" "}
                projects
              </div>
            </div>
          </div>
        </section>

        {/* Entrepreneurial Experience Section */}
        <section id="entrepreneurial" data-scroll-section>
          <div data-scroll data-scroll-speed=".4" className="my-64">
            <span className="text-gradient clash-grotesk text-sm font-semibold tracking-tighter">
              💼 Entrepreneurial Experience
            </span>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight xl:text-6xl">
              Building a Successful Business
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              From passion to profit: My PC reselling journey
            </p>

            <Accordion type="single" collapsible className="mt-14 w-full">
              <AccordionItem value="entrepreneurial">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex w-full flex-col items-start gap-3 pr-4 text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-semibold text-foreground">
                        Founder & PC Reselling Specialist | Carousell Business
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      March 2025 – Present
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Generating $10,000+ in revenue with 150+ positive customer
                      reviews through data-driven market analysis
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6 pt-4">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                      {entrepreneurialImages.map((image, idx) => (
                        <div
                          key={idx}
                          className="relative aspect-square overflow-hidden rounded-lg border border-white/10"
                        >
                          <Image
                            src={image}
                            alt={`PC Build ${idx + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="prose prose-invert max-w-none">
                      <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                        {`What started as a personal hobby over a decade ago has evolved into a thriving entrepreneurial venture. I formalized my extensive trading experience by establishing a professional PC reselling business on Carousell, Singapore's leading marketplace platform.

📈 Business Metrics:
• $10,000+ in Revenue generated since launching in March 2025
• 150+ Positive Customer Reviews reflecting excellent service and quality
• 150% Average Markup achieved through strategic market analysis
• Decade of Experience in PC hardware trading and market dynamics

💡 Strategic Approach:

Market Analysis:
• Monitor real-time market trends and pricing data across multiple platforms
• Identify undervalued PC components and complete systems
• Analyze supply-demand dynamics to optimize purchasing decisions

Value Creation:
• Source high-quality components at competitive prices
• Perform thorough testing and quality assurance on all hardware
• Provide detailed specifications and honest product descriptions
• Offer configuration advice and technical support to customers

Customer-Centric Sales:
• Manage the full sales cycle from sourcing to delivery
• Maintain transparent communication throughout the transaction
• Provide after-sales support and warranty assistance
• Build long-term relationships resulting in repeat customers and referrals

🎯 Business Impact:
This venture demonstrates my ability to:
• Apply analytical thinking to real-world business challenges
• Identify market opportunities through data analysis
• Manage operations end-to-end with attention to detail
• Deliver exceptional customer experiences that drive growth`}
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="my-24 flex flex-col justify-start space-y-10"
          >
            <div>
              <span className="text-gradient clash-grotesk text-sm font-semibold tracking-tighter">
                🛠️ Skills & Expertise
              </span>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight xl:text-6xl">
                Technical Proficiency
              </h2>
              <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
                A comprehensive toolkit for data science and software development
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code2 className="h-5 w-5 text-primary" />
                    Technical Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap items-center gap-2.5">
                    {skills.technical.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition hover:bg-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-primary" />
                    Soft Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap items-center gap-2.5">
                    {skills.soft.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center rounded-lg bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary-foreground transition hover:bg-secondary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {skills.certifications.map((cert) => (
                      <li
                        key={cert}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                        {cert}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Awards & Activities Section */}
        <section id="awards" data-scroll-section>
          <div data-scroll data-scroll-speed=".4" className="my-64">
            <span className="text-gradient clash-grotesk text-sm font-semibold tracking-tighter">
              🏆 Awards & Recognition
            </span>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight xl:text-6xl">
              Achievements & Activities
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              Recognition for academic excellence and innovation
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-14 space-y-8"
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {awards.map((award, idx) => (
                  <Card key={idx} className="overflow-hidden">
                    <div className="relative aspect-video w-full">
                      <Image
                        src={award.image}
                        alt={award.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <p className="text-sm font-medium text-foreground">
                        {award.title}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Hackathon Participation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start text-sm">
                      <ChevronRight className="mr-2 mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">
                          2nd Prize Winner
                        </strong>{" "}
                        - Learning Express Program Hackathon 2025
                      </span>
                    </li>
                    <li className="flex items-start text-sm">
                      <ChevronRight className="mr-2 mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">
                          Semi-Finalist & People&apos;s Choice Award Winner
                        </strong>{" "}
                        - SP Batey Hackathon
                      </span>
                    </li>
                    <li className="flex items-start text-sm">
                      <ChevronRight className="mr-2 mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Participant</strong>{" "}
                        - NUS Maritime Hackathon (2025)
                      </span>
                    </li>
                    <li className="flex items-start text-sm">
                      <ChevronRight className="mr-2 mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Participant</strong>{" "}
                        - PolyFinTech100 API Hackathon
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Academic Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Recipient of Edusave Awards (2017-2023) for consistent
                    academic excellence and leadership, including the{" "}
                    <strong className="text-foreground">
                      Edusave Scholarship (2020)
                    </strong>{" "}
                    and the{" "}
                    <strong className="text-foreground">
                      EAGLES Award (2019)
                    </strong>
                    .
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" data-scroll-section className="my-64">
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="flex flex-col items-center justify-center rounded-lg bg-gradient-to-br from-primary/[6.5%] to-white/5 px-8 py-16 text-center xl:py-24"
          >
            <h2 className="text-4xl font-medium tracking-tighter xl:text-6xl">
              Let&apos;s{" "}
              <span className="text-gradient clash-grotesk">connect.</span>
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              I&apos;m always open to discussing new opportunities,
              collaborations, or just chatting about data science and technology.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="mailto:ngwenxian@yahoo.com" passHref>
                <Button size="lg">
                  <Mail className="mr-2 h-4 w-4" />
                  ngwenxian@yahoo.com
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/ngwenxianethan/"
                target="_blank"
                passHref
              >
                <Button size="lg" variant="outline">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn Profile
                </Button>
              </Link>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +65 8249 0057
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Singapore
              </span>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
}

function Gradient() {
  return (
    <>
      {/* Upper gradient */}
      <div className="absolute -top-40 right-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7980fe" />
              <stop offset={1} stopColor="#f0fff7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Lower gradient */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9A70FF" />
              <stop offset={1} stopColor="#838aff" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}
