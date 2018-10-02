declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

interface PortfolioInfo {
  color: string;
  siteUrl: string;
  caseStudyUrl: string;
  repoUrl: string;
  image: string;
  video: string;
  title: string;
}
