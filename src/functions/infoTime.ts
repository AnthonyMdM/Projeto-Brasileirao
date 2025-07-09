export type TimeInfo = {
  caminho: string;
  corPrincipal: string;
  corSecundaria?: string;
  corTerciaria?: string;
  nomeFamoso?: string;
  url: string;
};

export const infoTime: Record<string, TimeInfo> = {
  Flamengo: {
    caminho: "/img/flamengo.svg",
    corPrincipal: "#C52613",
    corSecundaria: "#000000",
    url: "Flamengo",
  },
  Palmeiras: {
    caminho: "/img/palmeiras.svg",
    corPrincipal: "#006600",
    corSecundaria: "#FFFFFF",
    url: "Palmeiras",
  },
  Cruzeiro: {
    caminho: "/img/cruzeiro.png",
    corPrincipal: "#003090",
    corSecundaria: "#FFFFFF",
    url: "Cruzeiro",
  },
  Bragantino: {
    caminho: "/img/bragantino.svg",
     corSecundaria:"#FFFFFF",
    corPrincipal: "#ED1C24",
    url: "Bragantino",
  },
  Bahia: {
    caminho: "/img/bahia.svg",
    corPrincipal: "#0033A0",
    corSecundaria: "#FF0000",
    corTerciaria: "#FFFFFF",
    url: "Bahia",
  },
  Fluminense: {
    caminho: "/img/fluminense.svg",
    corPrincipal: "#007A3D",
    corSecundaria: "#7A0019",
    corTerciaria: "#FFFFFF",
    url: "Fluminense",
  },
  Paranaense: {
    url: "Athletico-Paranaense",
    caminho: "/img/athletico-paranaense.svg",
    nomeFamoso: "Athletico Paranaense",
    corPrincipal: "#E03A3E",
    corSecundaria: "#000000",
  },
  Mineiro: {
    url: "Atletico-Mineiro",
    caminho: "/img/atletico-mineiro.svg",
    nomeFamoso: "Atlético Mineiro",
    corPrincipal: "#000000",
    corSecundaria: "#FFFFFF",
  },
  Botafogo: {
    caminho: "/img/botafogo.svg",
    corPrincipal: "#000000",
    corSecundaria: "#FFFFFF",
    url: "Botafogo",
  },
  Mirassol: {
    caminho: "/img/mirassol.png",
    corPrincipal: "#FFD700",
    corSecundaria: "#008000",
    url: "Mirassol",
  },
  Santos: {
    caminho: "/img/santos.svg",
    corSecundaria: "#FFFFFF",
    corPrincipal: "#000000",
    url: "Santos",
  },
  Vitória: {
    caminho: "/img/vitoria.png",
    corPrincipal: "#FF0000",
    corSecundaria: "#000000",
    url: "Vitoria",
  },
  Internacional: {
    caminho: "/img/internacional.svg",
    corPrincipal: "#E03A3E",
    corSecundaria: "#FFFFFF",
    url: "Internacional",
  },
  Corinthians: {
    caminho: "/img/corinthians.svg",
    corPrincipal: "#010101",
    corSecundaria: "#ED1C2E",
    corTerciaria: "#FFFFFF",
    url: "Corinthians",
  },
  Fortaleza: {
    caminho: "/img/fortaleza.svg",
    corPrincipal: "#0000FF",
    corSecundaria: "#FFFFFF",
    corTerciaria: "#FF0000",
    url: "Fortaleza",
  },
  Juventude: {
    caminho: "/img/juventude.svg",
    corPrincipal: "#006233",
    corSecundaria: "#FFFFFF",
    url: "Juventude",
  },
  Criciúma: {
    url: "Criciuma",
    caminho: "/img/criciuma.png",
    corPrincipal: "#FFD700", 
    corSecundaria: "#000000", 
  },
  Goianiense: {
    url: "Atletico-Goianiense",
    caminho: "/img/atletico-goianiense.svg",
    nomeFamoso: "Atlético Goianiense",
    corPrincipal: "#FF0000",
    corSecundaria: "#000000",
    corTerciaria: "#FFFFFF",
  },
  Recife: {
    url: "Sport",
    caminho: "/img/sport.svg",
    nomeFamoso: "Sport",
    corPrincipal: "#FF0000",
    corSecundaria: "#000000",
  },
  Grêmio: {
    caminho: "/img/gremio.svg",
    corPrincipal: "#0093CB",
    corSecundaria: "#000000",
    corTerciaria: "#FFFFFF",
    url: "Gremio",
  },
  Ceará: {
    caminho: "/img/ceara.svg",
    corPrincipal: "#000000",
    corSecundaria: "#FFFFFF",
    url: "Ceara",
  },
  "Vasco da Gama": {
    url: "Vasco",
    caminho: "/img/vasco.svg",
    corPrincipal: "#000000",
    corSecundaria: "#FFFFFF",
    corTerciaria: "#D40000",
    nomeFamoso: "Vasco",
  },
  "São Paulo": {
    caminho: "/img/sao.svg",
    corPrincipal: "#ED1C2E",
    corSecundaria: "#FFFFFF",
    corTerciaria: "#000000",
    url: "Sao-Paulo",
  },
  "Cuiabá EC": {
    url: "Cuiaba",
    caminho: "/img/cuiaba.svg",
    nomeFamoso: "Cuiabá",
    corPrincipal: "#007A33",
    corSecundaria: "#FFD100",
  },
};
