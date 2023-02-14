import { Helmet } from "react-helmet-async";
// import ContainerPage from "../containerPage/containerPage";
import { dessertsPagedata, formulePagedata } from "./globalConfig";
import ContainerPage from "../containerPage/containerPage"
import { desserts, formule } from "../../data";

export const Dessert = () => {
  return (<>
    <Helmet>
      <meta name="title" content={dessertsPagedata?.metaTitle} data-react-helmet="true" />
      <meta name="description" content={dessertsPagedata?.metaDescription} data-react-helmet="true" />
      <meta property="og:title" content={dessertsPagedata?.metaOgTitle} data-react-helmet="true" />
      <meta property="og:description" content={dessertsPagedata?.metaOgDescription} data-react-helmet="true" />
      {/* <meta property="og:image" content={dessertsPagedata?.metaOgImage} data-react-helmet="true" /> */}
      <meta name="robots" content={dessertsPagedata?.metaRobots} />
      <meta name="keywords" content={dessertsPagedata?.metaKeywords} />
      <link rel="canonical" href={dessertsPagedata?.metaLink} />
      <title>{dessertsPagedata?.titePage}</title>
    </Helmet>
    <ContainerPage data={desserts} />
  </>);
}
export const Formule = () => {
  return (<>
    <Helmet>
      <meta name="title" content={formulePagedata?.metaTitle} data-react-helmet="true" />
      <meta name="description" content={formulePagedata?.metaDescription} data-react-helmet="true" />
      <meta property="og:title" content={formulePagedata?.metaOgTitle} data-react-helmet="true" />
      <meta property="og:description" content={formulePagedata?.metaOgDescription} data-react-helmet="true" />
      {/* <meta property="og:image" content={formulePagedata?.metaOgImage} data-react-helmet="true" /> */}
      <meta name="robots" content={formulePagedata?.metaRobots} />
      <meta name="keywords" content={formulePagedata?.metaKeywords} />
      <link rel="canonical" href={formulePagedata?.metaLink} />
      <title>{formulePagedata?.titePage}</title>
    </Helmet>
    <ContainerPage data={formule} />
  </>);
}