import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "customer-churn-prediction",
    title: "Customer Churn Prediction using Machine Learning",
    shortDescription:
      "Developed a machine learning model to predict customer churn by analyzing customer demographics, subscription details, and service usage patterns, enabling businesses to identify customers at risk of leaving.",
    businessImpact:
      "Predicted customer churn using supervised machine learning, enabling proactive retention strategies.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
      "Jupyter Notebook",
    ],
    githubLink: "https://github.com/Hallada-Manoj/Telco_Churn_Analysis",
    problemStatement:
      "Customer retention is more cost-effective than acquiring new customers. This project predicts customers likely to churn, helping businesses take proactive retention measures.",
    keyResults: [
      "Built and compared multiple machine learning models",
      "Performed data preprocessing and feature engineering",
      "Evaluated models using multiple performance metrics",
      "Identified key factors influencing customer churn",
      "Supported data-driven customer retention strategies",
    ],
    featured: true,
    image: "/images/projects/churn.svg",
  },
  {
    id: "sales-dashboard",
    title: "Sales Performance & Profitability Analysis Dashboard",
    shortDescription:
      "Designed an interactive Power BI dashboard to analyze sales trends, profitability, regional performance, and product category insights for business decision-making.",
    businessImpact:
      "Transformed raw sales data into actionable insights through interactive dashboards and KPI tracking.",
    technologies: [
      "Power BI",
      "SQL",
      "MySQL",
      "Excel",
      "Power Query",
    ],
    githubLink: "https://github.com/Hallada-Manoj/Sales-Performance-Dashboard",
    problemStatement:
      "Businesses often struggle to identify profitable products, regions, and sales trends due to scattered business data.",
    keyResults: [
      "Built an interactive Power BI dashboard",
      "Performed SQL-based business analysis",
      "Created KPI cards, slicers, and dynamic reports",
      "Identified high-performing regions and product categories",
      "Improved business decision-making through visual analytics",
    ],
    image: "/images/projects/sales.svg",
  },
  {
    id: "fake-news-detection",
    title: "Fake News Detection using Natural Language Processing",
    shortDescription:
      "Developed an NLP-based machine learning model to classify news articles as genuine or fake using text preprocessing and feature extraction techniques.",
    businessImpact:
      "Automated the detection of misleading news using NLP and machine learning classification.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "TF-IDF",
      "Logistic Regression",
      "Multinomial Naive Bayes",
    ],
    githubLink: undefined,
    problemStatement:
      "The rapid spread of misinformation makes it difficult to identify trustworthy news. This project automates fake news detection using machine learning.",
    keyResults: [
      "Implemented complete NLP preprocessing pipeline",
      "Applied TF-IDF Vectorization for text representation",
      "Compared multiple machine learning algorithms",
      "Built an automated fake news classification system",
    ],
    image: "/images/projects/fake-news.svg",
  },
  {
    id: "support-ticket-classification",
    title: "Customer Support Ticket Classification",
    shortDescription:
      "Developed a machine learning model that automatically classifies customer support tickets into predefined categories using Natural Language Processing.",
    businessImpact:
      "Reduced manual categorization effort and improved support workflow efficiency through automated ticket classification.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "TF-IDF",
      "Logistic Regression",
    ],
    githubLink: undefined,
    problemStatement:
      "Organizations receive thousands of customer support tickets daily. Manual categorization delays response time and reduces operational efficiency.",
    keyResults: [
      "Automated ticket classification process",
      "Reduced manual categorization effort",
      "Improved support workflow efficiency",
      "Demonstrated NLP-based text classification",
    ],
    image: "/images/projects/support-tickets.svg",
  },
  {
    id: "ag-news-classification",
    title: "AG News Text Classification",
    shortDescription:
      "Built a machine learning model that automatically classifies news articles into predefined categories using Natural Language Processing and supervised learning.",
    businessImpact:
      "Automated news categorization for efficient content organization and retrieval on large publishing platforms.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "TF-IDF",
      "Logistic Regression",
      "Multinomial Naive Bayes",
    ],
    githubLink: "https://github.com/Hallada-Manoj/Telco_Churn_Analysis",
    problemStatement:
      "Large news platforms require automatic categorization of articles to improve organization and search efficiency.",
    keyResults: [
      "Compared multiple machine learning models",
      "Optimized hyperparameters using GridSearchCV",
      "Automated news categorization",
      "Improved content organization and retrieval",
    ],
    image: "/images/projects/news.svg",
  },
];
