type serviciosId =
  | "the-private"
  | "the-firstclass"
  | "the-360"
  | "the-voyager"
  | "hiram-bingham"
  | "vistadome-observatory"
  | "vistadome"
  | "expedition";

type serviciosName =
  | "The Private"
  | "The Firstclass"
  | "The 360"
  | "The Voyager"
  | "Hiram Bingham"
  | "Vistadome Observatory"
  | "Vistadome"
  | "Expedition";

export interface HorarioItem {
  salida: string;
  llegada: string;
  origen: string;
  destino: string;
  tipo: string;
}

export interface Servicios {
  id: serviciosId;
  name: serviciosName;
  title: string;
  content: string;
  label: string;
  includes: {
    title: string;
    description: string;
  }[];
  horarios?: {
    ida: HorarioItem[];
    retorno: HorarioItem[];
  };
  galeria: string[];
  background: string;
  styleclass: string;
  imagen: {
    logo: any;
    alt: string;
    height: number;
    width: number;
  };
}
