import { Helmet } from "react-helmet-async";
// import ContainerPage from "../containerPage/containerPage";
import { boissonsPagedata, boissons_chaudePagedata, boissons_teaPagedata, dessertsPagedata, formulePagedata, gamme_chaudePagedata, healty_bowlsPagedata, poke_creationPagedata, sidesPagedata } from "./globalConfig";
import ContainerPage from "../containerPage/containerPage"
import { boissons, boissons_chaude, boissons_tea, desserts, formule, gamme_chaude, healty_bowls, poke_creation, sides } from "../../data";

export const Dessert = ({ commande, setProducts, handleAddProduct }) => {
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
    <ContainerPage
      handleAddProduct={handleAddProduct}
      data={desserts}
      commande={commande}
      setProducts={setProducts}
    />
  </>);
}
export const Formule = ({ commande, setProducts, handleAddProduct }) => {
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
    <ContainerPage
      data={formule}
      handleAddProduct={handleAddProduct}
      commande={commande}
      setProducts={setProducts}
    />
  </>);
}
export const GammeChaude = ({ commande, setProducts, handleAddProduct }) => {
  return (<>
    <Helmet>
      <meta name="title" content={gamme_chaudePagedata?.metaTitle} data-react-helmet="true" />
      <meta name="description" content={gamme_chaudePagedata?.metaDescription} data-react-helmet="true" />
      <meta property="og:title" content={gamme_chaudePagedata?.metaOgTitle} data-react-helmet="true" />
      <meta property="og:description" content={gamme_chaudePagedata?.metaOgDescription} data-react-helmet="true" />
      {/* <meta property="og:image" content={gamme_chaudePagedata?.metaOgImage} data-react-helmet="true" /> */}
      <meta name="robots" content={gamme_chaudePagedata?.metaRobots} />
      <meta name="keywords" content={gamme_chaudePagedata?.metaKeywords} />
      <link rel="canonical" href={gamme_chaudePagedata?.metaLink} />
      <title>{gamme_chaudePagedata?.titePage}</title>
    </Helmet>
    <ContainerPage data={gamme_chaude}
      handleAddProduct={handleAddProduct}
      commande={commande}
      setProducts={setProducts}
    />
  </>);
}
export const PokeCreation = ({ commande, setProducts, handleAddProduct }) => {
  return (<>
    <Helmet>
      <meta name="title" content={poke_creationPagedata?.metaTitle} data-react-helmet="true" />
      <meta name="description" content={poke_creationPagedata?.metaDescription} data-react-helmet="true" />
      <meta property="og:title" content={poke_creationPagedata?.metaOgTitle} data-react-helmet="true" />
      <meta property="og:description" content={poke_creationPagedata?.metaOgDescription} data-react-helmet="true" />
      {/* <meta property="og:image" content={poke_creationPagedata?.metaOgImage} data-react-helmet="true" /> */}
      <meta name="robots" content={poke_creationPagedata?.metaRobots} />
      <meta name="keywords" content={poke_creationPagedata?.metaKeywords} />
      <link rel="canonical" href={poke_creationPagedata?.metaLink} />
      <title>{poke_creationPagedata?.titePage}</title>
    </Helmet>
    <ContainerPage data={poke_creation}
      handleAddProduct={handleAddProduct}
      commande={commande}
      setProducts={setProducts}
    />
  </>);
}
export const Sides = ({ commande, setProducts, handleAddProduct }) => {
  return (<>
    <Helmet>
      <meta name="title" content={sidesPagedata?.metaTitle} data-react-helmet="true" />
      <meta name="description" content={sidesPagedata?.metaDescription} data-react-helmet="true" />
      <meta property="og:title" content={sidesPagedata?.metaOgTitle} data-react-helmet="true" />
      <meta property="og:description" content={sidesPagedata?.metaOgDescription} data-react-helmet="true" />
      {/* <meta property="og:image" content={sidesPagedata?.metaOgImage} data-react-helmet="true" /> */}
      <meta name="robots" content={sidesPagedata?.metaRobots} />
      <meta name="keywords" content={sidesPagedata?.metaKeywords} />
      <link rel="canonical" href={sidesPagedata?.metaLink} />
      <title>{sidesPagedata?.titePage}</title>
    </Helmet>
    <ContainerPage
      handleAddProduct={handleAddProduct}
      data={sides} commande={commande}
      setProducts={setProducts}
    />
  </>);
}
export const HealtyBowls = ({ commande, setProducts, handleAddProduct }) => {
  return (<>
    <Helmet>
      <meta name="title" content={healty_bowlsPagedata?.metaTitle} data-react-helmet="true" />
      <meta name="description" content={healty_bowlsPagedata?.metaDescription} data-react-helmet="true" />
      <meta property="og:title" content={healty_bowlsPagedata?.metaOgTitle} data-react-helmet="true" />
      <meta property="og:description" content={healty_bowlsPagedata?.metaOgDescription} data-react-helmet="true" />
      {/* <meta property="og:image" content={healty_bowlsPagedata?.metaOgImage} data-react-helmet="true" /> */}
      <meta name="robots" content={healty_bowlsPagedata?.metaRobots} />
      <meta name="keywords" content={healty_bowlsPagedata?.metaKeywords} />
      <link rel="canonical" href={healty_bowlsPagedata?.metaLink} />
      <title>{healty_bowlsPagedata?.titePage}</title>
    </Helmet>
    <ContainerPage handleAddProduct={handleAddProduct}
      data={healty_bowls} commande={commande}
      setProducts={setProducts}
    />
  </>);
}
export const Boissons = ({ commande, setProducts, handleAddProduct }) => {
  return (<>
    <Helmet>
      <meta name="title" content={boissonsPagedata?.metaTitle} data-react-helmet="true" />
      <meta name="description" content={boissonsPagedata?.metaDescription} data-react-helmet="true" />
      <meta property="og:title" content={boissonsPagedata?.metaOgTitle} data-react-helmet="true" />
      <meta property="og:description" content={boissonsPagedata?.metaOgDescription} data-react-helmet="true" />
      {/* <meta property="og:image" content={boissonsPagedata?.metaOgImage} data-react-helmet="true" /> */}
      <meta name="robots" content={boissonsPagedata?.metaRobots} />
      <meta name="keywords" content={boissonsPagedata?.metaKeywords} />
      <link rel="canonical" href={boissonsPagedata?.metaLink} />
      <title>{boissonsPagedata?.titePage}</title>
    </Helmet>
    <ContainerPage data={boissons} handleAddProduct={handleAddProduct} commande={commande}
      setProducts={setProducts} />
  </>);
}
export const BoissonsChaude = ({ commande, setProducts, handleAddProduct }) => {
  return (<>
    <Helmet>
      <meta name="title" content={boissons_chaudePagedata?.metaTitle} data-react-helmet="true" />
      <meta name="description" content={boissons_chaudePagedata?.metaDescription} data-react-helmet="true" />
      <meta property="og:title" content={boissons_chaudePagedata?.metaOgTitle} data-react-helmet="true" />
      <meta property="og:description" content={boissons_chaudePagedata?.metaOgDescription} data-react-helmet="true" />
      {/* <meta property="og:image" content={boissons_chaudePagedata?.metaOgImage} data-react-helmet="true" /> */}
      <meta name="robots" content={boissons_chaudePagedata?.metaRobots} />
      <meta name="keywords" content={boissons_chaudePagedata?.metaKeywords} />
      <link rel="canonical" href={boissons_chaudePagedata?.metaLink} />
      <title>{boissons_chaudePagedata?.titePage}</title>
    </Helmet>
    <ContainerPage data={boissons_chaude} handleAddProduct={handleAddProduct} commande={commande}
      setProducts={setProducts} />
  </>);
}
export const BoissonsTea = ({ commande, setProducts, handleAddProduct }) => {
  return (<>
    <Helmet>
      <meta name="title" content={boissons_teaPagedata?.metaTitle} data-react-helmet="true" />
      <meta name="description" content={boissons_teaPagedata?.metaDescription} data-react-helmet="true" />
      <meta property="og:title" content={boissons_teaPagedata?.metaOgTitle} data-react-helmet="true" />
      <meta property="og:description" content={boissons_teaPagedata?.metaOgDescription} data-react-helmet="true" />
      {/* <meta property="og:image" content={boissons_teaPagedata?.metaOgImage} data-react-helmet="true" /> */}
      <meta name="robots" content={boissons_teaPagedata?.metaRobots} />
      <meta name="keywords" content={boissons_teaPagedata?.metaKeywords} />
      <link rel="canonical" href={boissons_teaPagedata?.metaLink} />
      <title>{boissons_teaPagedata?.titePage}</title>
    </Helmet>
    <ContainerPage data={boissons_tea} handleAddProduct={handleAddProduct} commande={commande}
      setProducts={setProducts} />
  </>);
}