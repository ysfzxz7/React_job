import type { jobsType } from "./type";

let jobsdata: jobsType[] = [
  {
    uuid: "f72e6f32-0e43-4e6a-b79e-0f99103dff01",
    jobtype: "Full Time",
    title: "Senior React Developer",
    location: "Boston, MA",
    description:
      "We are seeking a highly experienced Senior React Developer to lead the development of modern, responsive web applications. You will work closely with our design and product teams to implement elegant, maintainable user interfaces using the latest tools and best practices. The ideal candidate should have a strong understanding of React fundamentals, component lifecycles, hooks, and performance optimization. Experience with TypeScript, Redux, and modern build tools is highly preferred.",
    salary: [70, 80],
    companyName: "NewTek Solutions",
    companyDesc:
      "NewTek Solutions is a fast-growing technology firm specializing in enterprise software and cutting-edge SaaS solutions for Fortune 500 companies across the globe.",
    Email: "contact@teksoulution.com",
    phone: "+1232456789",
  },
  {
    uuid: "6df8db09-f06a-4a4a-89d7-53650a1a0df0",
    jobtype: "Part Time",
    title: "UI/UX Designer",
    location: "San Francisco, CA",
    description:
      "Join our creative team as a part-time UI/UX Designer. You will be responsible for creating wireframes, high-fidelity designs, and interactive prototypes for both mobile and web products. Strong knowledge of Figma, Adobe XD, or Sketch is required. You will collaborate with developers and product managers to deliver intuitive and beautiful user experiences. Familiarity with design systems and accessibility standards is a plus.",
    salary: [40, 55],
    companyName: "PixelPerfect Inc.",
    companyDesc:
      "PixelPerfect Inc. is a design-focused agency helping startups and large companies build stunning, user-friendly interfaces that convert.",
    Email: "hr@pixelperfect.com",
    phone: "+1987654321",
  },
  {
    uuid: "203bf2a0-0c6e-49fc-8717-63c85f36aa8e",
    jobtype: "Remote",
    title: "Backend Node.js Engineer",
    location: "Remote",
    description:
      "We are looking for a Node.js backend engineer to join our remote-first engineering team. Your responsibilities will include building and maintaining RESTful APIs, integrating third-party services, and ensuring scalable backend infrastructure. You must be proficient in Express.js, MongoDB or PostgreSQL, and have experience deploying apps on cloud platforms like AWS or GCP. Knowledge of containerization with Docker and CI/CD pipelines is desirable.",
    salary: [60, 90],
    companyName: "CodeCrafters",
    companyDesc:
      "CodeCrafters builds reliable backend systems for high-traffic web applications used by millions worldwide.",
    Email: "jobs@codecrafters.dev",
    phone: "+1478523690",
  },
  {
    uuid: "e245f71d-67ab-490c-9e77-7402196c7d5e",
    jobtype: "Full Time",
    title: "DevOps Engineer",
    location: "Austin, TX",
    description:
      "As a DevOps Engineer, you’ll work on automating infrastructure, managing cloud environments, and improving our CI/CD workflows. You should have hands-on experience with tools like Terraform, Docker, Kubernetes, and Jenkins. Familiarity with observability tools such as Prometheus, Grafana, or Datadog is a strong plus. You will work closely with developers to ensure smooth deployments and minimize downtime.",
    salary: [75, 95],
    companyName: "CloudNinjas",
    companyDesc:
      "CloudNinjas empowers companies to scale fast and reliably through automated infrastructure and DevOps excellence.",
    Email: "careers@cloudninjas.com",
    phone: "+1625347980",
  },
  {
    uuid: "a0848fc6-8d22-44ff-84b0-1f2681548453",
    jobtype: "Contract",
    title: "QA Automation Tester",
    location: "New York, NY",
    description:
      "We’re hiring a contract-based QA Automation Tester to develop and maintain automated test suites for our core web products. You will write tests using frameworks such as Cypress or Selenium, perform regression testing, and work closely with developers to ensure quality standards are met. The role requires strong analytical skills and attention to detail. Experience testing REST APIs and using tools like Postman is also expected.",
    salary: [45, 60],
    companyName: "BugFree Corp",
    companyDesc:
      "BugFree Corp is a dedicated QA consultancy that helps businesses maintain software reliability across all platforms.",
    Email: "qa@bugfree.io",
    phone: "+1717283920",
  },
  {
    uuid: "32f1b8a3-59e2-40fd-b319-99c59a6ed763",
    jobtype: "Full Time",
    title: "Frontend Engineer",
    location: "Chicago, IL",
    description:
      "We're looking for a Frontend Engineer passionate about creating elegant web interfaces. You’ll work closely with designers and backend developers to deliver seamless and responsive user experiences. Strong understanding of JavaScript, React, and TailwindCSS is required. Experience with testing frameworks like Jest and React Testing Library is a plus.",
    salary: [65, 85],
    companyName: "WebFlowy",
    companyDesc:
      "WebFlowy helps small businesses scale their web platforms with performant and accessible frontend technology.",
    Email: "jobs@webflowy.io",
    phone: "+11234567890",
  },
  {
    uuid: "cc6e56b7-2e03-4374-8f62-e239f7cc02e6",
    jobtype: "Remote",
    title: "Technical Writer",
    location: "Remote",
    description:
      "We’re hiring a Technical Writer to create high-quality documentation for developers and customers. You'll collaborate with product managers and engineers to produce API docs, tutorials, and user guides. Ideal candidates have excellent communication skills and experience using Markdown, Git, and documentation tools like Docusaurus or ReadTheDocs.",
    salary: [40, 60],
    companyName: "Docify",
    companyDesc:
      "Docify builds developer-friendly documentation tools and services for modern SaaS teams.",
    Email: "write@docify.io",
    phone: "+1222333444",
  },
  {
    uuid: "b926ac20-dc59-4de5-9177-fca1cf1812a9",
    jobtype: "Internship",
    title: "Marketing Intern",
    location: "Los Angeles, CA",
    description:
      "Join our marketing team as a summer intern! You'll assist with social media campaigns, content creation, email newsletters, and analytics. Ideal for students pursuing a marketing or communications degree. Familiarity with Canva, HubSpot, or Google Analytics is a bonus.",
    salary: [15, 20],
    companyName: "BrandLoop",
    companyDesc:
      "BrandLoop is a creative marketing agency helping startups and influencers grow their digital presence.",
    Email: "interns@brandloop.com",
    phone: "+1988222333",
  },
  {
    uuid: "a5ef2854-110f-4dbe-90ce-4a294eae9635",
    jobtype: "Full Time",
    title: "Mobile App Developer",
    location: "Seattle, WA",
    description:
      "We're looking for a Mobile App Developer with expertise in Flutter or React Native to develop cross-platform mobile applications. You will be working closely with product designers to create intuitive mobile experiences. Knowledge of publishing apps to the App Store and Play Store is required.",
    salary: [70, 95],
    companyName: "MobilityX",
    companyDesc:
      "MobilityX creates high-performance, cross-platform mobile apps for startups and enterprises.",
    Email: "careers@mobilityx.com",
    phone: "+1777666555",
  },
  {
    uuid: "78323255-c217-49dc-a779-4f3d6e304fbc",
    jobtype: "Contract",
    title: "Data Analyst",
    location: "Denver, CO",
    description:
      "We are seeking a Data Analyst to turn raw data into insights. You'll create dashboards, track KPIs, and provide recommendations based on trends. Strong skills in SQL, Excel, and visualization tools like Power BI or Tableau are required. Python is a plus.",
    salary: [50, 75],
    companyName: "Insightlytics",
    companyDesc:
      "Insightlytics helps companies understand customer behavior and make data-informed decisions.",
    Email: "apply@insightlytics.com",
    phone: "+1444555666",
  },
  {
    uuid: "90f2d81a-f444-405e-b497-c3f412b37ec2",
    jobtype: "Part Time",
    title: "Content Strategist",
    location: "Miami, FL",
    description:
      "We are hiring a content strategist to plan and manage digital content across blog, email, and social platforms. Strong writing skills and experience with SEO and CMS tools like WordPress are essential. You'll work alongside marketing and design teams.",
    salary: [30, 45],
    companyName: "StoryEdge",
    companyDesc:
      "StoryEdge creates compelling brand narratives for clients across tech, lifestyle, and health sectors.",
    Email: "content@storyedge.com",
    phone: "+1212555123",
  },
  {
    uuid: "1c17a53d-9a49-4475-8e8f-15360b77e358",
    jobtype: "Full Time",
    title: "Machine Learning Engineer",
    location: "New York, NY",
    description:
      "Looking for a Machine Learning Engineer to design and deploy scalable ML models for NLP and computer vision tasks. Must be experienced with Python, TensorFlow or PyTorch, and cloud ML services. You'll work with data scientists and backend teams to bring intelligent features to life.",
    salary: [100, 130],
    companyName: "SmartSense AI",
    companyDesc:
      "SmartSense AI develops intelligent applications that enhance automation, recommendation, and personalization.",
    Email: "ml@smartsense.ai",
    phone: "+1555777888",
  },
  {
    uuid: "46c2eb0e-2d15-4c4f-86a1-46cf58e764f0",
    jobtype: "Remote",
    title: "Customer Success Manager",
    location: "Remote",
    description:
      "We're seeking a Customer Success Manager to support our B2B SaaS customers. You’ll onboard new clients, provide training, and ensure ongoing satisfaction. Excellent communication and problem-solving skills are required. Experience with CRM platforms and basic tech troubleshooting is helpful.",
    salary: [55, 75],
    companyName: "ClientFirst",
    companyDesc:
      "ClientFirst provides white-glove support for SaaS platforms looking to build loyal customer relationships.",
    Email: "jobs@clientfirst.io",
    phone: "+1313444555",
  },
  {
    uuid: "ab63b444-d7d7-4c23-8e4a-5a8e7201cdd8",
    jobtype: "Full Time",
    title: "Cloud Engineer",
    location: "Phoenix, AZ",
    description:
      "We're hiring a Cloud Engineer to manage and optimize our cloud infrastructure. Proficiency in AWS, Terraform, Kubernetes, and CI/CD tools is essential. You’ll ensure high availability and performance for our services.",
    salary: [85, 110],
    companyName: "SkyStack",
    companyDesc:
      "SkyStack is a cloud consulting company helping startups scale using AWS and DevOps best practices.",
    Email: "tech@skystack.io",
    phone: "+1999222111",
  },
  {
    uuid: "9be91ae8-c2c2-4f8a-a06c-750450f6b78f",
    jobtype: "Full Time",
    title: "Product Manager",
    location: "Atlanta, GA",
    description:
      "Seeking a Product Manager to lead cross-functional teams in launching new features. You’ll gather requirements, define roadmaps, and work with design and engineering. Prior experience in SaaS product management and agile workflows required.",
    salary: [90, 120],
    companyName: "BuildBridge",
    companyDesc:
      "BuildBridge delivers innovative software products that simplify enterprise workflows.",
    Email: "pm@buildbridge.com",
    phone: "+1877666888",
  },
  {
    uuid: "b78a2b14-3c9e-4d8a-87d3-e1ab0a6e4ff4",
    jobtype: "Part Time",
    title: "Technical Support Specialist",
    location: "Austin, TX",
    description:
      "Provide excellent customer and technical support to end-users. You'll troubleshoot issues, assist with onboarding, and escalate bugs. Familiarity with ticketing systems and strong communication skills are essential.",
    salary: [25, 40],
    companyName: "Helpify",
    companyDesc:
      "Helpify provides 24/7 support for digital tools used in education and healthcare.",
    Email: "support@helpify.com",
    phone: "+1404555999",
  },
  {
    uuid: "206fae0d-1276-4f38-9f4e-7b26144fa0ce",
    jobtype: "Internship",
    title: "Graphic Design Intern",
    location: "Portland, OR",
    description:
      "Assist in creating visual assets for campaigns, social media, and websites. Knowledge of Adobe Creative Suite is required. Great opportunity for design students to build a strong portfolio.",
    salary: [15, 18],
    companyName: "PixelNest",
    companyDesc:
      "PixelNest is a boutique creative agency with a passion for innovative and colorful branding.",
    Email: "design@pixelnest.co",
    phone: "+1988999111",
  },
  {
    uuid: "dc2c5824-2d84-4c4f-a313-9d2636b92b9d",
    jobtype: "Contract",
    title: "WordPress Developer",
    location: "Remote",
    description:
      "Contract WordPress Developer needed to build custom themes and plugins. Must be proficient in PHP, HTML/CSS, and have experience working with WooCommerce and ACF. Strong portfolio required.",
    salary: [35, 55],
    companyName: "WPStudio",
    companyDesc:
      "WPStudio creates bespoke WordPress solutions for businesses and nonprofits.",
    Email: "dev@wpstudio.com",
    phone: "+1444666777",
  },
  {
    uuid: "81963f34-5995-4b91-a4d6-7de72db2196b",
    jobtype: "Full Time",
    title: "Cybersecurity Analyst",
    location: "Washington, DC",
    description:
      "Responsible for monitoring network traffic, performing risk assessments, and responding to incidents. Knowledge of SIEM tools, firewalls, and security compliance frameworks is necessary.",
    salary: [90, 115],
    companyName: "SecureNet",
    companyDesc:
      "SecureNet defends critical infrastructure through cutting-edge cybersecurity solutions and services.",
    Email: "security@securenet.com",
    phone: "+1333555111",
  },
];
export default jobsdata;
