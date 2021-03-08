import React from 'react';
import { InfoSection } from '../InfoSection';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="container ">
      <h1 style={{ textAlign: 'center' }}>História de Osasco</h1>
      <InfoSection title="Período pré-cabralino">
        <p>
          Osasco foi habitada por inúmeras tribos indígenas, do tronco
          tupi-guarani, que habitavam a região desde o período pré-cabralino.
          Devido a fertilidade do solo cortado por córregos e rios. O que
          favorecia caça de animais, pesca, plantio e extrativismo na região.
        </p>
      </InfoSection>
      <InfoSection title="Período colonial">
        <p>
          O primeiro núcleo de povoamento de colonizadores foi a vila de
          Quitaúna, Vila pobre, bandeirantes frequentavam o local. Fundada no
          século XVII, onde residiu o bandeirante Antônio Raposo Tavares e onde
          supostamente estaria enterrado. A vila foi esvaziada no século XVIII.
          Por causa da descoberta do ouro, os bandeirantes que antes habitavam a
          vila, foram para Minas Gerais.
        </p>
      </InfoSection>
      <InfoSection title="Período moderno">
        <p>
          Na região onde hoje se situa Osasco e em seus arredores existiam
          vários sítios e chácaras. Há especulações que havia uma estrada férrea
          de barões do café com uma estação modesta na região. Próximo às
          margens do Rio Tietê, no século XIX havia uma aldeia de pescadores e
          também grandes fazendas. Uma delas foi vendida ao italiano Antonio
          Agù, e outra ao português Manuel Rodrigues, dois imigrantes que
          começaram a história da cidade. Antonio Agù foi proprietário de vários
          negócios e terras na região e, em 1887, comprou uma gleba de terra no
          quilômetro 16 da Estrada de Ferro Sorocabana. Por volta de 1890,
          resolveu ampliar sua pequena olaria e convidou para sócio o barão
          Dimitri Sensaud de Lavaud. A olaria que fabricava tijolos e telhas
          passou a produzir também tubos e cerâmicas, dando origem à primeira
          indústria da cidade. Após outras iniciativas, em 1895, Agù construiu a
          estação ferroviária, erguendo várias casas nos arredores para abrigar
          os operários que chegavam para realizar a obra. Os dirigentes da
          estrada de ferro quiseram designar a estação com o nome do principal
          empreendedor da região, mas Antonio Agù pediu que a homenagem não
          fosse dada a ele e sim à sua vila natal da Itália: Osasco. Neste
          período Antônio Agu, casado com Josefina Vianco, traçou ruas na região
          do atual Centro da cidade e batizou o nome de uma rua em homenagem a
          sua primeira e única filha: Primitiva Vianco. Daí por diante Osasco,
          como a região passou a ser conhecida, não parava de crescer. Muitas
          pessoas conhecidas do comércio e diversas indústrias importantes se
          instalaram por lá. Para operar as máquinas dessas indústrias foi
          contratada mão-de-obra imigrante. Os imigrantes vinham principalmente
          da Itália, Espanha, Portugal, Alemanha. Com o aumento da população de
          operários, tornou-se possível também o desenvolvimento do comércio,
          desenvolvido principalmente pelas colônias armênia,libanesa e judia.
          Na zona rural, muitos imigrantes japoneses plantavam verduras e
          legumes. Essa mistura de imigrantes marca as primeiras populações do
          atual município. Posteriormente vieram imigrantes do interior de São
          Paulo, Minas Gerais, Paraná, Rio Grande do Sul e do Nordeste. Foi em
          Osasco que aconteceu o primeiro voo da América Latina, em 7 de Janeiro
          de 1910, realizado pelo imigrante entusiasta Barão Dimitri Sensaud de
          Lavaud.
        </p>
      </InfoSection>
      <InfoSection title="Formação administrativa">
        <p>
          Em 31 de dezembro de 1918 o então povoado de Osasco tornou-se distrito
          de paz do município de São Paulo pela Lei estadual nº. 1634. Pelo
          Decreto-lei estadual nº. 9073 de 31 de março de 1938, Osasco torna-se
          a 15ª. zona distrital do município de São Paulo. Em 1944, pelo
          Decreto-lei estadual nº. 14334 de 30 de novembro, Osasco torna-se o
          14º. subdistrito de São Paulo (a 9ª. zona distrital de São Miguel
          passa a ser o distrito de Baquiviru, causando a mudança ordinal). Em
          1953 foi feito primeiro plebiscito pela emancipação do subdistrito. O
          movimento emancipacionista (ou autonomista) sofreu muitas
          contraposições e empecilhos, mas após o segundo plebiscito a
          emancipação viria a se tornar realidade. Finalmente, Osasco é elevado
          à categoria de município pela Lei estadual nº. 5285 de 18 de fevereiro
          de 1959. A nova administração municipal foi instalada apenas três anos
          mais tarde em 19 de fevereiro de 1962.
        </p>
      </InfoSection>
      <InfoSection title="Período contemporâneo">
        <p>
          Osasco seguiu prosperamente sua atividade industrial e na década de
          1970, e passou a receber grande contingente populacional que vinha
          para a Região Metropolitana de São Paulo. Fazendo com que na década de
          1980 ficasse divulgada pela violência e pobreza dos bairros da zona
          norte principalmente. Após a redemocratização, Osasco passou por um
          processo de desconcentração industrial e passou a investir em
          infraestrutura e bens de prestação de serviços. Ao qual a cidade se
          mantém neste seguimento inclusive nos tempos atuais.
        </p>
      </InfoSection>
      <InfoSection title="Ocorrências de grande repercussão no município">
        <ul className="list-group">
          <li className="list-group-item">
            A greve da Cobrasma foi em 16 de julho de 1968. Operários
            protestaram contra as mortes de seus colegas em caldeiras, condições
            de trabalhos desfavoráveis e o rebaixamento dos salários. Ato esse
            já um sintoma de resistência contra o Regime Militar da época.
          </li>
          <li className="list-group-item">
            A explosão do Osasco Plaza Shopping em 11 de junho de 1996. O motivo
            foi vazamento de gás subterrâneo. Morreram 42 pessoas e 300 outras
            ficaram feridas, algumas gravemente. Esse acidente repercutiu na
            mídia nacional e internacional.
          </li>
        </ul>
      </InfoSection>
    </div>
  );
};

export { Home };
