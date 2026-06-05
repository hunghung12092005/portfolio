import {
  Brain,
  Briefcase,
  Code2,
  Database,
  GitBranch,
  Server,
} from "lucide-react";

export const skillGroups = [
  {
    title: "Kỹ năng làm việc",
    icon: Briefcase,
    items: ["System Design", "Agile / Scrum", "Requirements Analysis", "Vibe Coding"],
  },
  {
    title: "Ngôn ngữ lập trình",
    icon: Code2,
    items: ["Python", "JavaScript", "PHP", "SQL"],
  },
  {
    title: "Frameworks",
    icon: Brain,
    items: ["Next.js", "Vue.js", "Node.js", "Flask", "FastAPI", "LangChain", "Laravel"],
  },
  {
    title: "Data & Architecture",
    icon: Database,
    items: ["PostgreSQL", "MySQL", "MongoDB", "Socket", "RESTful APIs", "LangGraph", "LangFuse"],
  },
  {
    title: "Công cụ",
    icon: GitBranch,
    items: ["GitHub", "GitLab", "GitKraken", "Docker", "Postman", "Jira"],
  },
  // {
  //   title: "Định hướng chuyên môn",
  //   icon: Workflow,
  //   items: ["AI Application", "Backend System", "Data Pipeline", "VAD / ASR"],
  // },
  {
    title: "Năng lực triển khai",
    icon: Server,
    items: ["Web App", "API Backend", "Automation", "Production-ready Systems"],
  },
];
