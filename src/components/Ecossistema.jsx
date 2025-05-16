import React from 'react';
import './Ecossistema.css'; 
import coraisImagem from '../imgs/corais.JPG';
import tartarugaImagem from '../imgs/tartatuga.JPG';
import { useLanguageContext } from './Context';

function Ecossistema() {
  const {data}=useLanguageContext();
  let tituloEcossistema ="";
  let textoCorais ="";
  let textoTartarugas="";
  let altText1 = "";
  let altText2 = "";

  if(data.lang=="br"){
    tituloEcossistema = 'Ecossistema';
    textoCorais = `Os recifes de corais na costa do Recife são formações naturais de grande beleza e importância ecológica. Eles atuam como barreiras naturais que reduzem a força das ondas, ajudando a proteger o litoral da erosão. Além disso, abrigam uma rica biodiversidade marinha, servindo de refúgio e alimentação para diversas espécies de peixes, crustáceos e outros organismos. Por tais motivos sua preservação é essencial.`;
    textoTartarugas = `A região costeira da RMR abriga uma grande variedade de espécies marinhas, graças aos seus recifes, mangues e estuários. Dentre elas estão as tartarugas marinhas, que usam as praias da região para desova, especialmente entre os meses de setembro e março. Espécies como a tartaruga-de-pente e a tartaruga-verde são frequentemente vistas. Além das tartarugas, é possível encontrar cardumes de peixes coloridos, cavalos-marinhos, ouriços e estrelas-do-mar.`;
    altText1 = "Recife de Corais";
    altText2 = "Tartaruga na Praia";
  }

  if(data.lang=="us"){
    tituloEcossistema = 'Ecosystem';
    textoCorais = `The coral reefs on the coast of Recife are natural formations of great beauty and ecologic relevance. They act as natural barriers that reduce the power of the waves, helping to protect the coast from erosion. Beyond that they are a haven for rich marine biodiversity, as a refuge and feeding ground for many species of fish, crustaceans and other organisms. For such reasons, it's preservation is essential.`;
    textoTartarugas = `The coastal region of the RMR hosts a wide variety of marine species, thanks to its reefs, mangroves, and estuaries. Among them are sea turtles, which use the region's beaches for nesting, especially between the months of September and March. Species such as the hawksbill turtle and the green turtle are frequently spotted. In addition to turtles, it's possible to find schools of colorful fish, seahorses, sea urchins, and starfish.`;
    altText1 = "Coral reef";
    altText2 = "Turtle on the sand";
  }
  return (
    <div className="pagina-ecossistema">
      <h1>{tituloEcossistema}</h1>

      <span className='centralize'>
      <div className="secao">
        <img src={coraisImagem} alt={altText1} />
        <p>{textoCorais}</p>
      </div>

      <div className="secao secao2">
        <img src={tartarugaImagem} alt={altText2} />
        <p>{textoTartarugas}</p>
      </div>
      </span>
    </div>
  );
}

export default Ecossistema;
