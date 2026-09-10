import SkillCategory from "./SkillCategory";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award, CheckCircle2, Calendar, Building2, Sparkles } from "lucide-react";
import { MagicCard } from "../lightswind/magic-card";

export const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Engineering - Computer Science",
      school: "RVS College of Engineering and Technology, Coimbatore",
      year: "2020 – 2024",
      badge: "Graduated 2024",
      badgeIcon: Award,
      badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
      icon: GraduationCap,
      details: [
        "Rigorous foundation in Computer Science & Engineering, Data Structures, and Algorithms",
        "Deep coursework in Database Management Systems (DBMS), SQL, and Software Engineering",
        "Applied practical project engineering in .NET, Java, Web Technologies, and Machine Learning",
        "Active student organizer for campus events, workshops, and college placement drives"
      ]
    },
    {
      degree: "Professional Certifications",
      school: "GUVI & Applied AI Programs",
      year: "2024 – Present",
      badge: "Verified Skills",
      badgeIcon: Sparkles,
      badgeColor: "text-primary bg-primary/10 border-primary/30",
      icon: BookOpen,
      details: [
        "Full Stack with Python Programming – GUVI Certification",
        "JavaScript Specialist – GUVI Certification",
        "ChatGPT – GUI Architecture & Application Integration",
        "Specialized in modern web frameworks, asynchronous JavaScript, and REST APIs"
      ]
    }
  ];

  const achievements = [
    { title: "District-Level Kabaddi Player", category: "Athletics & Sportsmanship" },
    { title: "Placement Drive Organizer", category: "College Leadership" },
    { title: "E-Sports Participant", category: "Team Strategy & Focus" },
  ];

  return (
    <section id="education" className="max-w-7xl mx-auto px-6 py-24 space-y-20">
      
      {/* Education Header & Cards */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary shadow-md">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Academic <span className="text-gradient-primary">Background</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Building the theoretical foundation and research methodologies that empower high-performance practical engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, i) => {
            const DegreeIcon = edu.icon;
            const BadgeIcon = edu.badgeIcon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <MagicCard
                  className="h-full p-8 rounded-[2.25rem] border border-border/80 bg-card/80 shadow-xl"
                  gradientSize={300}
                  gradientColor="rgba(139, 92, 246, 0.12)"
                  gradientFrom="#8b5cf6"
                  gradientTo="#38bdf8"
                >
                  <div className="flex flex-col h-full justify-between gap-6">
                    <div>
                      {/* Header with Icon and Distinction Badge */}
                      <div className="flex items-start justify-between gap-4 mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/25 text-primary flex items-center justify-center shadow-sm">
                          <DegreeIcon className="w-7 h-7 text-primary" />
                        </div>
                        <span className={`px-3.5 py-1.5 rounded-full border text-xs font-extrabold flex items-center gap-1.5 shadow-sm ${edu.badgeColor}`}>
                          <BadgeIcon className="w-3.5 h-3.5" />
                          {edu.badge}
                        </span>
                      </div>

                      {/* Degree Title & Institution Meta */}
                      <h3 className="text-2xl font-extrabold text-foreground tracking-tight mb-2">
                        {edu.degree}
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-muted-foreground mb-6 pb-4 border-b border-border/60">
                        <span className="flex items-center gap-1.5 text-foreground font-bold">
                          <Building2 className="w-3.5 h-3.5 text-primary" /> {edu.school}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1.5 font-mono text-primary font-bold">
                          <Calendar className="w-3.5 h-3.5" /> {edu.year}
                        </span>
                      </div>

                      {/* Key Highlights List */}
                      <ul className="space-y-3.5">
                        {edu.details.map((detail, j) => (
                          <li key={j} className="text-sm text-muted-foreground flex items-start gap-3 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span className="text-foreground/90 font-medium">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </MagicCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Achievements & Recognition Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-panel p-6 md:p-8 rounded-[2rem] border border-primary/20 bg-gradient-to-r from-primary/5 via-background to-primary/5 shadow-lg"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">Key Achievements & Leadership</h3>
            <p className="text-xs md:text-sm text-muted-foreground">Recognitions in athletics, campus leadership, and competitive strategy</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-card/80 border border-border/80 flex items-center gap-3.5 hover:border-primary/50 transition-all group shadow-sm"
            >
              <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-sm shrink-0 group-hover:scale-110 transition-transform">
                ★
              </div>
              <div>
                <h4 className="font-bold text-sm text-foreground">{item.title}</h4>
                <span className="text-xs text-muted-foreground">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Expertise & Skills Component */}
      <div>
        <SkillCategory />
      </div>

    </section>
  );
};
