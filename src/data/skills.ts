export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: "Languages & Frameworks",
    items: [
      "Java",
      "Python",
      "C",
      "C#",
      ".NET",
      "JavaScript",
      "TypeScript",
      "AngularJS",
      "React",
      "HTML",
      "CSS",
      "Tailwind CSS"
    ]
  },
  {
    category: "Cloud & DevOps",
    items: [
      "AWS (S3, CloudFront, CloudTrail, Secrets Manager)",
      "Azure DevOps",
      "Docker",
      "Docker Compose",
      "Nginx"
    ]
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "SQL"]
  },
  {
    category: "Testing & Collaboration",
    items: [
      "JUnit",
      "TypeMoq",
      "Jasmine",
      "Playwright",
      "Postman",
      "Swagger",
      "Git",
      "Agile / Scrumban",
      "PR Reviews",
      "Figma"
    ]
  }
];
