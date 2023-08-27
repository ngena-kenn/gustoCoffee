import { Helmet } from "react-helmet-async";
import React from "react";
// import ContainerPage from "../containerPage/containerPage";
import { salon7Pagedata, salon8Pagedata, salon9Pagedata, salon1Pagedata, salon2Pagedata, salon3Pagedata, salon6Pagedata, salon4Pagedata, salon5Pagedata , salon10Pagedata, salon11Pagedata } from "./globalConfig";
import ContainerPage from "../containerPage/containerPage"
import { salon1,salon2,salon3,salon4,salon5,salon6,salon7,salon8,salon9,salon10,salon11 } from "../../utils/dataProd";



export const Gsalon1 = ({ commande, setProducts, handleAddProduct, cancelCommande }) => {
  return (<>
    
    <Helmet>
      <meta name="title" content={salon1Pagedata?.metaTitle} data-react-helmet="true" />
      <meta name="description" content={salon1Pagedata?.metaDescription} data-react-helmet="true" />
      <meta property="og:title" content={salon1Pagedata?.metaOgTitle} data-react-helmet="true" />
      <meta property="og:description" content={salon1Pagedata?.metaOgDescription} data-react-helmet="true" />
      {/* <meta property="og:image" content={salon1Pagedata?.metaOgImage} data-react-helmet="true" /> */}
      <meta name="robots" content={salon1Pagedata?.metaRobots} />
      <meta name="keywords" content={salon1Pagedata?.metaKeywords} />
      <link rel="canonical" href={salon1Pagedata?.metaLink} />
      <title>{salon1Pagedata?.titePage}</title>
    </Helmet>
    
    <ContainerPage
      handleAddProduct={handleAddProduct}
      data={salon1}
      commande={commande}
      setProducts={setProducts}
    />
  </>);
}
export const Gsalon2 = ({ commande, setProducts, handleAddProduct }) => {
  return (<>
    <Helmet>
      <meta name="title" content={salon2Pagedata?.metaTitle} data-react-helmet="true" />
      <meta name="description" content={salon2Pagedata?.metaDescription} data-react-helmet="true" />
      <meta property="og:title" content={salon2Pagedata?.metaOgTitle} data-react-helmet="true" />
      <meta property="og:description" content={salon2Pagedata?.metaOgDescription} data-react-helmet="true" />
      {/* <meta property="og:image" content={salon2Pagedata?.metaOgImage} data-react-helmet="true" /> */}
      <meta name="robots" content={salon2Pagedata?.metaRobots} />
      <meta name="keywords" content={salon2Pagedata?.metaKeywords} />
      <link rel="canonical" href={salon2Pagedata?.metaLink} />
      <title>{salon2Pagedata?.titePage}</title>
    </Helmet>
    <ContainerPage
      data={salon2}
      handleAddProduct={handleAddProduct}
      commande={commande}
      setProducts={setProducts}
    />
  </>);
}
export const Gsalon3 = ({ commande, setProducts, handleAddProduct }) => {
  return (<>
    <Helmet>
      <meta name="title" content={salon3Pagedata?.metaTitle} data-react-helmet="true" />
      <meta name="description" content={salon3Pagedata?.metaDescription} data-react-helmet="true" />
      <meta property="og:title" content={salon3Pagedata?.metaOgTitle} data-react-helmet="true" />
      <meta property="og:description" content={salon3Pagedata?.metaOgDescription} data-react-helmet="true" />
      {/* <meta property="og:image" content={salon3Pagedata?.metaOgImage} data-react-helmet="true" /> */}
      <meta name="robots" content={salon3Pagedata?.metaRobots} />
      <meta name="keywords" content={salon3Pagedata?.metaKeywords} />
      <link rel="canonical" href={salon3Pagedata?.metaLink} />
      <title>{salon3Pagedata?.titePage}</title>
    </Helmet>
    <ContainerPage data={salon3}
      handleAddProduct={handleAddProduct}
      commande={commande}
      setProducts={setProducts}
    />
  </>);
}
export const Gsalon4 = ({ commande, setProducts, handleAddProduct }) => {
  return (<>
    <Helmet>
      <meta name="title" content={salon4Pagedata?.metaTitle} data-react-helmet="true" />
      <meta name="description" content={salon4Pagedata?.metaDescription} data-react-helmet="true" />
      <meta property="og:title" content={salon4Pagedata?.metaOgTitle} data-react-helmet="true" />
      <meta property="og:description" content={salon4Pagedata?.metaOgDescription} data-react-helmet="true" />
      {/* <meta property="og:image" content={salon4Pagedata?.metaOgImage} data-react-helmet="true" /> */}
      <meta name="robots" content={salon4Pagedata?.metaRobots} />
      <meta name="keywords" content={salon4Pagedata?.metaKeywords} />
      <link rel="canonical" href={salon4Pagedata?.metaLink} />
      <title>{salon4Pagedata?.titePage}</title>
    </Helmet>
    <ContainerPage data={salon4}
      handleAddProduct={handleAddProduct}
      commande={commande}
      setProducts={setProducts}
    />
  </>);
}
export const Gsalon5 = ({ commande, setProducts, handleAddProduct }) => {
  return (<>
    <Helmet>
      <meta name="title" content={salon5Pagedata?.metaTitle} data-react-helmet="true" />
      <meta name="description" content={salon5Pagedata?.metaDescription} data-react-helmet="true" />
      <meta property="og:title" content={salon5Pagedata?.metaOgTitle} data-react-helmet="true" />
      <meta property="og:description" content={salon5Pagedata?.metaOgDescription} data-react-helmet="true" />
      {/* <meta property="og:image" content={salonPagedata?.metaOgImage} data-react-helmet="true" /> */}
      <meta name="robots" content={salon5Pagedata?.metaRobots} />
      <meta name="keywords" content={salon5Pagedata?.metaKeywords} />
      <link rel="canonical" href={salon5Pagedata?.metaLink} />
      <title>{salon5Pagedata?.titePage}</title>
    </Helmet>
    <ContainerPage
      handleAddProduct={handleAddProduct}
      data={salon5} 
      commande={commande}
      setProducts={setProducts}
    />
  </>);
}
export const Psalon1 = ({ commande, setProducts, handleAddProduct }) => {
  return (<>
    <Helmet>
      <meta name="title" content={salon6Pagedata?.metaTitle} data-react-helmet="true" />
      <meta name="description" content={salon6Pagedata?.metaDescription} data-react-helmet="true" />
      <meta property="og:title" content={salon6Pagedata?.metaOgTitle} data-react-helmet="true" />
      <meta property="og:description" content={salon6Pagedata?.metaOgDescription} data-react-helmet="true" />
      {/* <meta property="og:image" content={salon6Pagedata?.metaOgImage} data-react-helmet="true" /> */}
      <meta name="robots" content={salon6Pagedata?.metaRobots} />
      <meta name="keywords" content={salon6Pagedata?.metaKeywords} />
      <link rel="canonical" href={salon6Pagedata?.metaLink} />
      <title>{salon6Pagedata?.titePage}</title>
    </Helmet>
    <ContainerPage handleAddProduct={handleAddProduct}
      data={salon6} 
      commande={commande}
      setProducts={setProducts}
    />
  </>);
}
export const Psalon2 = ({ commande, setProducts, handleAddProduct }) => {
  return (<>
    <Helmet>
      <meta name="title" content={salon7Pagedata?.metaTitle} data-react-helmet="true" />
      <meta name="description" content={salon7Pagedata?.metaDescription} data-react-helmet="true" />
      <meta property="og:title" content={salon7Pagedata?.metaOgTitle} data-react-helmet="true" />
      <meta property="og:description" content={salon7Pagedata?.metaOgDescription} data-react-helmet="true" />
      {/* <meta property="og:image" content={salonPagedata?.metaOgImage} data-react-helmet="true" /> */}
      <meta name="robots" content={salon7Pagedata?.metaRobots} />
      <meta name="keywords" content={salon7Pagedata?.metaKeywords} />
      <link rel="canonical" href={salon7Pagedata?.metaLink} />
      <title>{salon7Pagedata?.titePage}</title>
    </Helmet>
    <ContainerPage data={salon7} handleAddProduct={handleAddProduct} commande={commande}
      setProducts={setProducts} />
  </>);
}
export const Psalon3 = ({ commande, setProducts, handleAddProduct }) => {
  return (<>
    <Helmet>
      <meta name="title" content={salon8Pagedata?.metaTitle} data-react-helmet="true" />
      <meta name="description" content={salon8Pagedata?.metaDescription} data-react-helmet="true" />
      <meta property="og:title" content={salon8Pagedata?.metaOgTitle} data-react-helmet="true" />
      <meta property="og:description" content={salon8Pagedata?.metaOgDescription} data-react-helmet="true" />
      {/* <meta property="og:image" content={salon8Pagedata?.metaOgImage} data-react-helmet="true" /> */}
      <meta name="robots" content={salon8Pagedata?.metaRobots} />
      <meta name="keywords" content={salon8Pagedata?.metaKeywords} />
      <link rel="canonical" href={salon8Pagedata?.metaLink} />
      <title>{salon8Pagedata?.titePage}</title>
    </Helmet>
    <ContainerPage data={salon8} handleAddProduct={handleAddProduct} commande={commande}
      setProducts={setProducts} />
  </>);
}
export const Psalon4 = ({ commande, setProducts, handleAddProduct }) => {
  return (<>
    <Helmet>
      <meta name="title" content={salon9Pagedata?.metaTitle} data-react-helmet="true" />
      <meta name="description" content={salon9Pagedata?.metaDescription} data-react-helmet="true" />
      <meta property="og:title" content={salon9Pagedata?.metaOgTitle} data-react-helmet="true" />
      <meta property="og:description" content={salon9Pagedata?.metaOgDescription} data-react-helmet="true" />
      {/* <meta property="og:image" content={salon9Pagedata?.metaOgImage} data-react-helmet="true" /> */}
      <meta name="robots" content={salon9Pagedata?.metaRobots} />
      <meta name="keywords" content={salon9Pagedata?.metaKeywords} />
      <link rel="canonical" href={salon9Pagedata?.metaLink} />
      <title>{salon9Pagedata?.titePage}</title>
    </Helmet>
    <ContainerPage data={salon9} handleAddProduct={handleAddProduct} commande={commande}
      setProducts={setProducts} />
  </>);
}
export const Psalon5 = ({ commande, setProducts, handleAddProduct }) => {
  return (<>
    <Helmet>
      <meta name="title" content={salon10Pagedata?.metaTitle} data-react-helmet="true" />
      <meta name="description" content={salon10Pagedata?.metaDescription} data-react-helmet="true" />
      <meta property="og:title" content={salon10Pagedata?.metaOgTitle} data-react-helmet="true" />
      <meta property="og:description" content={salon10Pagedata?.metaOgDescription} data-react-helmet="true" />
      {/* <meta property="og:image" content={salon9Pagedata?.metaOgImage} data-react-helmet="true" /> */}
      <meta name="robots" content={salon10Pagedata?.metaRobots} />
      <meta name="keywords" content={salon10Pagedata?.metaKeywords} />
      <link rel="canonical" href={salon10Pagedata?.metaLink} />
      <title>{salon10Pagedata?.titePage}</title>
    </Helmet>
    <ContainerPage data={salon10} handleAddProduct={handleAddProduct} commande={commande}
      setProducts={setProducts} />
  </>);
}
export const Salonindiv = ({ commande, setProducts, handleAddProduct }) => {
  return (<>
    <Helmet>
      <meta name="title" content={salon11Pagedata?.metaTitle} data-react-helmet="true" />
      <meta name="description" content={salon11Pagedata?.metaDescription} data-react-helmet="true" />
      <meta property="og:title" content={salon11Pagedata?.metaOgTitle} data-react-helmet="true" />
      <meta property="og:description" content={salon11Pagedata?.metaOgDescription} data-react-helmet="true" />
      {/* <meta property="og:image" content={salon9Pagedata?.metaOgImage} data-react-helmet="true" /> */}
      <meta name="robots" content={salon11Pagedata?.metaRobots} />
      <meta name="keywords" content={salon11Pagedata?.metaKeywords} />
      <link rel="canonical" href={salon11Pagedata?.metaLink} />
      <title>{salon11Pagedata?.titePage}</title>
    </Helmet>
    <ContainerPage data={salon11} handleAddProduct={handleAddProduct} commande={commande}
      setProducts={setProducts} />
  </>);
}