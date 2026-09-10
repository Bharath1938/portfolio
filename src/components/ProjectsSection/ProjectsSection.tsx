import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Stock Market Prediction (Big Data & LSTM)",
      badge: "Deep Learning & Big Data",
      subtitle: "Predictive analysis system utilizing Big Data pipelines and LSTM neural networks for accurate forecasting & investment analytics.",
      tags: ["Python", "LSTM", "Big Data", "Time Series", "Pandas"],
      link: "#projects",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200",
      gridClass: "md:col-span-7 min-h-[440px]",
    },
    {
      id: 2,
      title: "Ophthalmic Care – Multi-Disease Diagnosis",
      badge: "Team Lead • Computer Vision",
      subtitle: "Medical imaging classification platform employing Swin Transformer deep learning architecture to diagnose complex retinal pathologies.",
      tags: ["Swin Transformer", "PyTorch", "Team Lead", "Medical AI"],
      link: "#projects",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200",
      gridClass: "md:col-span-5 min-h-[440px]",
    },
    {
      id: 3,
      title: "Enterprise Full-Stack Web Application",
      badge: "Production Full-Stack",
      subtitle: "Scalable enterprise web application built with .NET, Java, and React.js, featuring secure REST APIs and high-performance SQL query architecture.",
      tags: [".NET / ASP.NET", "React.js", "SQL", "Entity Framework", "REST APIs"],
      link: "#projects",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
      gridClass: "md:col-span-5 min-h-[400px]",
    },
    {
      id: 4,
      title: "IoT Sensor Ingestion & Automation Platform",
      badge: "Pantech Internship",
      subtitle: "Real-time hardware sensor integration, telemetry streaming, and automated Python processing developed during IoT research internship.",
      tags: ["Internet of Things", "Python", "Sensors", "Automation"],
      link: "#projects",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
      gridClass: "md:col-span-7 min-h-[400px]",
    },
  ];

  return (
    <section id="projects" className="w-full max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="mb-12 md:mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-center md:text-left">
          Featured <span className="text-gradient-primary">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center md:text-left max-w-2xl text-lg">
          Key engineering initiatives spanning predictive deep learning, computer vision models, scalable .NET web applications, and IoT automation.
        </p>
      </motion.div>

      {/* 12-Column Full-Width Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
        {projects.map((project, i) => (
          <motion.a
            key={project.id}
            href={project.link}
            className={`group relative overflow-hidden rounded-[2.25rem] block shadow-xl border border-foreground/10 ${project.gridClass}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Background Image Container */}
            <div className="absolute inset-0 bg-neutral-950">
              <img 
                src={project.image} 
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-75 transform-gpu"
              />
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20 pointer-events-none" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 p-7 md:p-8 flex flex-col justify-between pointer-events-none">
              {/* Top Badge */}
              <div className="flex justify-between items-start">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-primary/20 backdrop-blur-md text-primary border border-primary/30 shadow-sm">
                  {project.badge}
                </span>
                
                {/* Arrow Action Icon */}
                <div className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shrink-0 opacity-80 group-hover:opacity-100 group-hover:bg-primary group-hover:text-white transition-all duration-300 rotate-45 group-hover:rotate-0 z-10 shadow-lg">
                  <ArrowUpRight className="w-5 h-5 text-white transition-colors" />
                </div>
              </div>

              {/* Bottom Details */}
              <div className="flex flex-col gap-3 translate-y-1 group-hover:translate-y-0 transition-transform duration-300 transform-gpu">
                <div className="z-10 max-w-xl">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white mb-2 tracking-tight drop-shadow-md">
                    {project.title}
                  </h3>
                  <p className="text-xs md:text-sm font-normal text-white/80 leading-relaxed line-clamp-3">
                    {project.subtitle}
                  </p>
                </div>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-white/15 text-white/90 backdrop-blur-sm border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};
