import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import AIParticleBackground from "./components/AIParticleBackground.tsx";
import Navbar from "./components/Navbar.tsx";
import Sidebar from "./components/Sidebar.tsx";
import Footer from "./components/Footer.tsx";
import Loading from "./components/Loading.tsx";
import Experience from "./pages/Experience.tsx";
import Skills from "./pages/Skills.tsx";
import Projects from "./pages/Projects.tsx";

import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";

const Home = lazy(() => import("./pages/Home.tsx"));
const About = lazy(() => import("./pages/About.tsx"));
// const Education = lazy(() => import("./pages/Education.tsx"));
const TechnicalExperience = lazy(() => import("./pages/TechnicalExperience.tsx"));


// Per-page SEO metadata
interface PageMeta {
  title: string;
  description: string;
}

const pageMeta: Record<string, PageMeta> = {
  "/": {
    title: "Md Farhad Reja - Full Stack Developer | React, Node.js, MERN Stack",
    description:
      "Md Farhad Reja — Full Stack Developer specializing in MERN stack, React.js, Node.js, Next.js and TypeScript. Based in Dhaka, Bangladesh.",
  },
  "/about": {
    title: "About - Md Farhad Reja | Full Stack Developer",
    description:
      "Learn about Md Farhad Reja — B.Tech Computer Science graduate, Full Stack Developer with 3+ internships and 10+ projects. Based in Dhaka, Bangladesh.",
  },
  "/projects": {
    title: "Projects - Md Farhad Reja | Full Stack Developer Portfolio",
    description:
      "Explore full-stack web projects built by Md Farhad Reja using React.js, Node.js, MongoDB, Next.js and TypeScript.",
  },
  "/skills": {
    title: "Skills - Md Farhad Reja | React, Node.js, MERN Stack",
    description:
      "Technical skills of Md Farhad Reja — React.js, Node.js, Express, MongoDB, Next.js, TypeScript, AWS, Docker and more.",
  },
  "/experience": {
    title: "Experience - Md Farhad Reja | Full Stack Developer",
    description:
      "Professional experience of Md Farhad Reja including 3+ internships in full stack web development.",
  },
  "/education": {
    title: "Education - Md Farhad Reja | B.Tech Computer Science",
    description:
      "Educational background of Md Farhad Reja — B.Tech in Computer Science with 8.48 CGPA.",
  },
  "/certificates": {
    title: "Certificates - Md Farhad Reja | Developer Certifications",
    description:
      "Professional certifications and achievements of Md Farhad Reja in web development and cloud technologies.",
  },
  "/contact": {
    title: "Contact - Md Farhad Reja | Hire a Full Stack Developer",
    description:
      "Get in touch with Md Farhad Reja for freelance projects, job opportunities or collaborations. Based in Dhaka, Bangladesh.",
  },
};

// Hook to update document title + meta description on route change
function SEOUpdater(): null {
  const location = useLocation();

  useEffect(() => {
    const meta = pageMeta[location.pathname] || {
      title: "Farhad Reja - Full Stack Developer",
      description:
        "Portfolio of Farhad Reja — Full Stack Developer specializing in MERN stack and modern web technologies.",
    };

    document.title = meta.title;

    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) descTag.setAttribute("content", meta.description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", meta.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", meta.description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl)
      ogUrl.setAttribute(
        "content",
        `https://farhadreja.vercel.app${location.pathname}`,
      );

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical)
      canonical.setAttribute(
        "href",
        `https://farhadreja.vercel.app${location.pathname}`,
      );
  }, [location]);

  return null;
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <SEOUpdater />
      <div className="min-h-screen selection:bg-[#FFC107] selection:text-black">
        <AIParticleBackground />
        <Sidebar isMenuOpen={isMenuOpen} toggleMenu={() => setIsMenuOpen(!isMenuOpen)} />
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <main className="relative pl-16 md:pl-20">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              {/* <Route path="/education" element={<Education />} /> */}
              <Route path="/experience" element={<Experience />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/tech-stack" element={<TechnicalExperience />} />
              <Route path="/projects" element={<Projects />} />
              {/* <Route path="/certificates" element={<Certificates />} /> */}
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
