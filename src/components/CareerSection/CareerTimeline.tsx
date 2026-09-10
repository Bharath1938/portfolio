import { ScrollTimeline } from "../lightswind/scroll-timeline";
import { Briefcase, Code, Cpu } from "lucide-react";

export const CareerTimeline = () => {
  const careerEvents = [
    {
      year: "2025 – Present",
      title: "Software Trainee",
      subtitle: "Brilliant Systems Solutions Pvt. Ltd.",
      description:
        "Develop and maintain responsive web applications using .NET, Java, React, JavaScript, HTML, CSS, and SQL. Build and integrate frontend interfaces, backend services, and REST APIs, including database connectivity. Write and optimize SQL queries, troubleshoot application issues, and perform testing and debugging while ensuring code quality and maintainability.",
      icon: <Briefcase className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2024 – 2025",
      title: "Junior Software Developer",
      subtitle: "Shiash Info Solutions",
      description:
        "Worked on software development activities involving Java and machine learning. Assisted in developing and testing application features, participated in debugging and resolving technical issues, and collaborated with the development team to implement software requirements.",
      icon: <Code className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2023 – 2024",
      title: "Internet of Things Intern",
      subtitle: "Pantech E Learning",
      description:
        "Completed a focused internship on Internet of Things (IoT) technologies. Worked with sensor integration and data processing, applied Python programming for IoT-related automation, and developed a practical project demonstrating technical and problem-solving skills.",
      icon: <Cpu className="h-4 w-4 mr-2 text-primary" />,
    },
  ];

  return (
    <div id="career">
      <ScrollTimeline
        events={careerEvents}
        title="Work Experience"
        subtitle="Professional career progression and hands-on software engineering roles"
        animationOrder="staggered"
        cardAlignment="alternating"
        cardVariant="elevated"
        parallaxIntensity={0.15}
        revealAnimation="fade"
        progressIndicator={true}
        lineColor="bg-primary/20"
        activeColor="bg-primary"
        progressLineWidth={3}
        progressLineCap="round"
      />
    </div>
  );
};
