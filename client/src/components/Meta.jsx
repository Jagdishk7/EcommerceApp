import { Helmet } from "react-helmet-async";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome To Jagdeesh Store",
  description: "This a Machine Coding Round of Jagdeesh Software Solutions Pvt. Ltd.",
  keywords: "Buy Anything",
};

export default Meta;
