import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  MapPin,
  Calendar,
  Award,
  Trophy,
  Code,
  Database,
  Layers,
  ExternalLink,
} from "lucide-react";

export default function Index() {
  const skills = {
    languages: ["ReactJS", "Python", "SQL", "HTML", "CSS", "JavaScript"],
    frameworks: [
      "React.js",
      "Redux",
      "Redux Toolkit",
      "Material-UI",
      "AG Grid",
      "Chart.js",
    ],
    tools: ["React Table V7", "React Table V8", "MySQL", "Tesseract OCR"],
    databases: ["MySQL"],
  };

  const experience = [
    {
      company: "Zenarate",
      position: "Software Engineer - II",
      period: "Jan 2024 - Present",
      achievements: [
        "Providing guidance on best practices, code reviews, and professional development to help them grow and succeed in their roles",
        "Delivered scalable, modular, and efficient code for report-based web applications, consistently meeting and exceeding deadlines.",
      ],
    },
    {
      company: "Zenarate",
      position: "Software Engineer - I",
      period: "Jan 2023 - Feb 2024",
      achievements: [
        "Enhanced code organization and optimization by implementing reusable components, improving performance and readability.",
        "Gained valuable expertise in performance tuning, enabling the creation of highly efficient and responsive web applications.",
      ],
    },
    {
      company: "Zenarate",
      position: "Associate Software Engineer",
      period: "Jan 2022 - Feb 2023",
      achievements: [
        "Developed skills in modular programming, enhancing the scalability of applications.",
        "Contributed to core functionalities of web applications, gaining in-depth understanding of workflows and system architecture.",
      ],
    },
  ];

  const projects = [
    {
      title: "Blood Donation System",
      period: "Jan 2016 - Apr 2017",
      description:
        "Designed and implemented a user-friendly software solution using HTML, CSS, and SQL to manage donor information and schedules. Delivered a reliable system that streamlined operations for administrators and donors alike.",
      technologies: ["HTML", "CSS", "SQL"],
    },
    {
      title: "Helmet and Number Plate Detection",
      period: "Oct 2020 - Apr 2021",
      description:
        "Built a detection system utilizing Tesseract OCR to accurately recognize and extract text from number plates. The project enhanced vehicle safety measures with advanced optical character recognition capabilities.",
      technologies: ["Tesseract OCR", "Computer Vision", "Python"],
    },
    {
      title: "Drowsiness Detection Research",
      period: "Oct 2020 - Apr 2021",
      description:
        "Published a research paper on a drowsiness detection system designed to improve road safety by providing early warnings to drivers. Explored future integration with vehicle control system.",
      technologies: ["Machine Learning", "Computer Vision", "Research"],
    },
  ];

  const achievements = [
    "SQL Udemy Course",
    "React.js Udemy Course",
    "Python Udemy Course",
    "Core Java UPTEC",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Surya Dwivedi
            </h1>
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="#experience"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Experience
              </a>
              <a
                href="#skills"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Surya Dwivedi
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Software Engineer II @ Zenarate
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Passionate software engineer with 3+ years of experience in
              building scalable web applications using React, Redux, and modern
              technologies. Specialized in performance optimization and
              mentoring junior developers.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button asChild size="lg" className="gap-2">
              <a href="mailto:nakshdwivedi801@gmail.com">
                <Mail size={20} />
                Contact Me
              </a>
            </Button>
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <a
                href="https://github.com/suryadwivedi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <a
                href="https://www.linkedin.com/in/surya-dwivedi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Card className="border-primary/20">
              <CardContent className="p-6 text-center">
                <Code className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Frontend Expert</h3>
                <p className="text-sm text-muted-foreground">
                  React, Redux, TypeScript
                </p>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="p-6 text-center">
                <Database className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Backend Development</h3>
                <p className="text-sm text-muted-foreground">
                  Python, SQL, MySQL
                </p>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="p-6 text-center">
                <Layers className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Performance Tuning</h3>
                <p className="text-sm text-muted-foreground">
                  Optimization & Scalability
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-muted-foreground mb-6">
                  I'm a passionate Software Engineer with over 3 years of
                  experience at Zenarate, where I've grown from Associate
                  Software Engineer to Software Engineer II. I specialize in
                  building scalable, efficient web applications and mentoring
                  junior developers.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  My expertise lies in React.js ecosystem, performance
                  optimization, and creating modular, reusable components. I
                  have a strong background in computer vision research and have
                  published papers on drowsiness detection systems.
                </p>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h3 className="font-semibold">
                      Master of Computer Application (MCA)
                    </h3>
                    <p className="text-muted-foreground">
                      Amity University, Noida
                    </p>
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <Calendar size={16} />
                      July 2018 - Aug 2021
                    </p>
                    <p className="text-sm font-medium">CGPA: 7.8</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Work Experience
            </h2>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <CardTitle className="text-xl">
                          {exp.position}
                        </CardTitle>
                        <p className="text-lg text-primary font-semibold">
                          {exp.company}
                        </p>
                      </div>
                      <Badge variant="outline" className="w-fit">
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <p className="text-muted-foreground">{achievement}</p>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Programming Languages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((skill, index) => (
                      <Badge key={index} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Frameworks</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.frameworks.map((skill, index) => (
                      <Badge key={index} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Libraries & Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill, index) => (
                      <Badge key={index} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Databases</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.databases.map((skill, index) => (
                      <Badge key={index} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="h-full hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Badge variant="outline" className="w-fit">
                      {project.period}
                    </Badge>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-muted-foreground mb-4 flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Achievements & Certifications
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {achievements.map((achievement, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-primary" />
                    Hackathon Achievement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold">
                        🥈 2nd Place - Zenarate Hackathon
                      </h3>
                      <p className="text-muted-foreground text-sm mt-2">
                        Secured 2nd place by developing Smart Learning Analytics
                        & Insights, competing against 6 teams of 10 members
                        each.
                      </p>
                      <p className="text-muted-foreground text-sm mt-2">
                        Collaborated with a cross-functional team to deliver a
                        scalable and innovative solution within a tight
                        deadline.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Let's Connect
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              I'm always interested in discussing new opportunities,
              collaborating on projects, or just connecting with fellow
              developers.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a
                    href="mailto:nakshdwivedi801@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    nakshdwivedi801@gmail.com
                  </a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <a
                    href="tel:+918700813894"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91-8700813894
                  </a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-muted-foreground">Noida, India</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center gap-4">
              <Button size="lg" className="gap-2" asChild>
                <a href="mailto:nakshdwivedi801@gmail.com">
                  <Mail size={20} />
                  Send Email
                </a>
              </Button>
              <Button variant="outline" size="lg" className="gap-2" asChild>
                <a
                  href="https://www.linkedin.com/in/surya-dwivedi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={20} />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-secondary/30">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">
              © 2024 Surya Dwivedi. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/suryadwivedi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/surya-dwivedi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:nakshdwivedi801@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
