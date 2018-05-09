declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

interface PortfolioInfo {
  color: string;
  url: string;
  image: string;
  video: string;
  title: string;
  main: string;
  tech: string;
  frontend: string;
  backend: string;
}
