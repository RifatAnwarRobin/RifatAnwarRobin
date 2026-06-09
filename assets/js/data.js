/**
 * data.js — content model for the portfolio.
 *
 * This is the only file you edit to update content. Each section below maps
 * to a render function in render.js. Keep links real; empty/missing links are
 * simply not rendered.
 */

/** @typedef {{ label: string, href: string }} Link */

export const skills = [
  {
    name: "Languages",
    tags: ["Python", "SQL", "JavaScript", "Bash", "XML / QWeb"],
  },
  {
    name: "AI & Machine Learning",
    tags: ["scikit-learn", "PyTorch", "TensorFlow", "Pandas", "NumPy", "Feature Engineering", "EDA"],
  },
  {
    name: "Backend & APIs",
    tags: ["FastAPI", "Django", "REST", "XML-RPC"],
  },
  {
    name: "Data & Visualisation",
    tags: ["Power BI", "Streamlit", "Matplotlib", "Seaborn", "Plotly"],
  },
  {
    name: "Databases",
    tags: ["PostgreSQL", "MySQL"],
  },
  {
    name: "Tooling & Platform",
    tags: ["Git", "Docker", "Linux", "CI/CD", "Odoo / ERP"],
  },
];

export const projects = [
  {
    feature: true,
    kicker: "Machine Learning · Recommender",
    title: "Movie Recommendation System",
    desc:
      "A hybrid recommender that blends content-based and collaborative signals, served through a " +
      "FastAPI backend with a Streamlit interface and kept light enough to run on low-resource machines. " +
      "Covers the full path: data cleaning, feature extraction, model logic and serving.",
    tags: ["Python", "FastAPI", "Streamlit", "scikit-learn", "Pandas"],
    links: [
      { label: "Code ↗", href: "https://github.com/RifatAnwarRobin/Movie-Recommendation-System" },
    ],
  },
  {
    kicker: "Machine Learning · Thesis",
    title: "ML Unemployment Prediction",
    desc:
      "Undergraduate thesis: supervised models forecasting unemployment trends from labour-market data. " +
      "Spanned data preparation, feature engineering, model comparison and evaluation.",
    tags: ["Python", "scikit-learn", "EDA", "Feature Engineering"],
    links: [],
  },
  {
    kicker: "Computer Vision · App",
    title: "Image Background Remover",
    desc:
      "A Streamlit tool for background removal and image editing — alpha matting, flipping and " +
      "ratio-aware resizing — built on Pillow and the U²-Net segmentation model.",
    tags: ["Python", "Streamlit", "Pillow", "U²-Net"],
    links: [
      { label: "Live demo ↗", href: "https://removebg-by-rifat.streamlit.app/" },
      { label: "Code ↗", href: "https://github.com/RifatAnwarRobin/image_background_remover" },
    ],
  },
  {
    kicker: "Open Source · PyPI",
    title: "num2words-BD-INR",
    desc:
      "A published Python package that converts numeric amounts into words using the South-Asian " +
      "Lakh/Crore system for Bangladeshi Taka and Indian Rupee — built for invoices and financial documents.",
    tags: ["Python", "PyPI", "Packaging"],
    links: [
      { label: "PyPI ↗", href: "https://pypi.org/project/num2words-BD-INR/" },
      { label: "Code ↗", href: "https://github.com/RifatAnwarRobin/num2words-BD-INR" },
    ],
  },
  {
    kicker: "Open Source · PyPI",
    title: "function-comment",
    desc:
      "A small published decorator that disables a function's execution by treating its body as " +
      "commented-out code — a quick toggle for debugging and feature flags.",
    tags: ["Python", "PyPI", "Decorators"],
    links: [
      { label: "PyPI ↗", href: "https://pypi.org/project/function-comment/" },
    ],
  },
  {
    kicker: "DevOps · Automation",
    title: "Automated Odoo Backup & Restore",
    desc:
      "Bash automation for self-hosted Odoo: scheduled PostgreSQL backups and one-command restore, " +
      "used to keep ERP operations safe and recoverable.",
    tags: ["Bash", "PostgreSQL", "Odoo", "Linux"],
    links: [
      { label: "Code ↗", href: "https://github.com/RifatAnwarRobin/odoo-scripts" },
    ],
  },
];

export const experience = [
  {
    period: "Jun 2022 — Aug 2025",
    role: "Senior Python (Odoo) Developer",
    company: "Metamorphosis Ltd.",
    points: [
      "Architected and deployed custom ERP modules, improving business workflow efficiency by ~40%.",
      "Automated multi-stage approval processes and inventory tracking with Python and PostgreSQL.",
      "Built AI-ready data pipelines and analytics dashboards in collaboration with cross-functional teams.",
    ],
  },
  {
    period: "Dec 2021 — Apr 2022",
    role: "Junior Developer",
    company: "Itqan Analytics & Software Ltd.",
    points: [
      "Contributed to data-centric software solutions and backend optimisation.",
      "Implemented new data models and improved maintainability using Python, Git and CI/CD.",
    ],
  },
  {
    period: "Mar 2021 — Nov 2021",
    role: "Data Analyst & Travel Coordinator",
    company: "Itinerary Holidays",
    points: [
      "Processed and analysed operational datasets to support decision-making and lift revenue by up to 30%.",
    ],
  },
];

export const education = [
  {
    period: "Expected 2026",
    degree: "MSc Artificial Intelligence Technology",
    school: "Northumbria University (London)",
    note: "Focus on applied ML, data pipelines and deploying models as services.",
  },
  {
    period: "2021",
    degree: "BSc Computer Science & Engineering",
    school: "Daffodil International University",
    note: "CGPA 3.53 / 4.00 · Thesis: ML-based unemployment rate prediction.",
  },
];
