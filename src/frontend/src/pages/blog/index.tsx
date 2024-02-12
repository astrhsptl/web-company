import { BlogContent } from "@/widgets/blog";
import Footer from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { Helmet } from "react-helmet";

export const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Блог | WebLab</title>
      </Helmet>
      <Header />
      <BlogContent />
      <Footer />
    </>
  );
};
