import type { Servicios } from "@/types/servicios";

import ThePrivate from "@/assets/svg/servicios/the-private.svg";
import TheFirstClass from "@/assets/svg/servicios/the-firstclass.svg";
import The360 from "@/assets/svg/servicios/the-360.svg";
import TheVoyager from "@/assets/svg/servicios/the-voyager.svg";
import HiramBingham from "@/assets/svg/servicios/hiram-bingham.svg";
import VistadomeObservatory from "@/assets/svg/servicios/vistadome-observatory.svg";
import Vistadome from "@/assets/svg/servicios/vistadome.svg";
import Expedition from "@/assets/svg/servicios/expedition.svg";

export const SERVICIOS: Servicios[] = [
  /*THE PRIVATE */
  {
    id: "the-private",
    name: "The Private",
    title: "El único tren privado a Machu Picchu",
    description:
      "Embárcate en un viaje verdaderamente exclusivo rumbo a la ciudadela de Machu Picchu. Disfruta de impresionantes vistas del Valle Sagrado de los Incas mientras saboreas un menú gourmet de tres tiempos, acompañado de un maridaje de bebidas y entretenimiento en vivo a bordo. Una experiencia diseñada para los viajeros más exigentes.",
    horarios: {
      ida: [
        {
          salida: "08:30",
          llegada: "12:41",
          origen: "Cusco",
          destino: "Machu Picchu",
          tipo: "Servicio bimodal (bus + tren)",
        },
        {
          salida: "04:20",
          llegada: "08:01",
          origen: "Cusco",
          destino: "Machu Picchu",
          tipo: "Servicio bimodal (bus + tren)",
        },
      ],
      retorno: [
        {
          salida: "14:30",
          llegada: "18:20",
          origen: "Machu Picchu",
          destino: "Cusco",
          tipo: "Servicio bimodal (bus + tren)",
        },
        {
          salida: "16:00",
          llegada: "20:00",
          origen: "Machu Picchu",
          destino: "Cusco",
          tipo: "Servicio bimodal (bus + tren)",
        },
      ],
    },
    includes: [
      {
        title: "🧭 Guía certificado",
        description:
          "Explora los secretos mejor guardados del Imperio Inca acompañado de un guía certificado, que enriquecerá tu viaje con historia, cultura y paisajes inolvidables en la ciudadela de Machu Picchu.",
      },
      {
        title: "🍷 Lounge comedor-bar y balcón al aire libre",
        description:
          "Admira la belleza del Valle Sagrado desde nuestro exclusivo lounge comedor-bar y balcón al aire libre. Relájate, contempla el paisaje y vive el viaje en total confort con destino a la ciudadela de Machu Picchu.",
      },
      {
        title: "🎶 Música en vivo",
        description:
          "Vive la emoción de la música en vivo durante tu trayecto. Una banda sonora perfecta para una experiencia mágica rumbo a Machu Picchu.",
      },
      {
        title: "🚆 Vagón privado y exclusivo",
        description:
          "Viaja en un vagón privado diseñado para ofrecer lujo, privacidad y comodidad total. Un espacio exclusivo pensado para transformar tu recorrido en una experiencia inolvidable.",
      },
      {
        title: "🍽️ Menú gourmet de tres tiempos con maridaje",
        description:
          "Deguste un menú gourmet de tres tiempos, elaborado con ingredientes andinos de alta calidad, acompañado de un maridaje seleccionado de bebidas típicas peruanas.",
      },
    ],
    galeria: [
      "/images/galeria/private/tren-private-1.avif",
      "/images/galeria/private/tren-private-2.avif",
      "/images/galeria/private/tren-private-3.avif",
      "/images/galeria/private/tren-private-4.avif",
      "/images/galeria/private/tren-private-5.avif",
    ],

    label: "Ver información del tren The Private de IncaRail",
    background: "https://incarail.com/es/tren-private-machu-picchu",
    styleclass: "premiumtrain",
    imagen: {
      logo: ThePrivate,
      alt: "Logo del tren The Private de IncaRail",
      height: 150,
      width: 150,
    },
  },

  /*THE FIRSTCLASS */
  {
    id: "the-firstclass",
    name: "The Firstclass",
    title:
      "Disfruta del lujo, la comodidad y la elegancia a bordo de The First Class",
    description:
      "Vive una experiencia inolvidable a bordo de The First Class, donde el lujo y la comodidad se combinan con la esencia de la cultura peruana. Disfruta de un servicio personalizado, música en vivo, un delicioso cóctel de bienvenida, menú gourmet de tres tiempos elaborado con productos andinos como quinua, aguaymanto y trucha, además de un exclusivo bar con una amplia selección de bebidas. Contempla los majestuosos paisajes del Valle Sagrado desde nuestro balcón panorámico mientras nuestro equipo a bordo cuida cada detalle para brindarte un viaje único, lleno de sabor, color y tradición.",

    horarios: {
      ida: [
        {
          salida: "08:30",
          llegada: "12:41",
          origen: "Cusco",
          destino: "Machu Picchu",
          tipo: "Servicio bimodal (bus + tren)",
        },
      ],
      retorno: [
        {
          salida: "19:00",
          llegada: "23:00",
          origen: "Machu Picchu",
          destino: "Cusco",
          tipo: "Servicio bimodal (bus + tren)",
        },
      ],
    },
    includes: [
      {
        title: "🍷 Ceremonia de vino y saxo en vivo",
        description:
          "Disfruta de una exclusiva presentación de vinos, acompañada de música en vivo interpretada con violín y saxofón por nuestro talentoso staff a bordo.",
      },
      {
        title: "🚆 Vagón comedor y vagón lounge/bar",
        description:
          "Déjate cautivar por los paisajes del Valle Sagrado desde nuestros espaciosos y confortables vagones comedor y lounge bar. Un entorno ideal para relajarte y disfrutar el viaje.",
      },
      {
        title: "🎶 Música en vivo",
        description:
          "Acompaña tu trayecto con la mejor música en vivo, una experiencia sonora que enriquecerá tu llegada a la maravilla ciudadela sagrada de los incas Machu Picchu.",
      },
      {
        title: "🍽️ Menú gourmet de tres tiempos con maridaje",
        description:
          "Disfruta de un menú gourmet de tres tiempos, elaborado con ingredientes andinos cuidadosamente seleccionados, acompañado por un maridaje perfecto con bebidas típicas del Perú.",
      },
      {
        title: "✨ Embarque preferente",
        description:
          "Vive la experiencia de un embarque exclusivo, con atención personalizada desde el primer momento, para comenzar tu viaje con total lujo y comodidad.",
      },
    ],
    galeria: [
      "/images/galeria/firstclass/tren-firstclass-1.avif",
      "/images/galeria/firstclass/tren-firstclass-2.avif",
      "/images/galeria/firstclass/tren-firstclass-3.avif",
      "/images/galeria/firstclass/tren-firstclass-4.avif",
      "/images/galeria/firstclass/tren-firstclass-5.avif",
    ],
    label: "Ver información del tren The First Class de IncaRail",
    background: "https://incarail.com/es/tren-firstclass-machu-picchu",
    styleclass: "incarailtrain",
    imagen: {
      logo: TheFirstClass,
      alt: "Logo del tren The First Class de IncaRail",
      height: 150,
      width: 150,
    },
  },

  //TREN THE 360
  {
    id: "the-360",
    name: "The 360",
    title: "Vagón observatorio al aire libre a borde del tren The 360°",
    description:
      "Vive una experiencia única a bordo de The 360° Machu Picchu Train. Con ventanas panorámicas más amplias y un exclusivo observatorio al aire libre, este tren te ofrece vistas incomparables de los majestuosos paisajes andinos. Además, disfruta de una variedad de bebidas frías y calientes preparadas con jugos de frutas y hierbas andinas, y una deliciosa oferta de platos gourmet elaborados con productos autóctonos del Valle Sagrado de los Incas. Descubre todo sobre Perú a través de nuestra app a bordo y haz de tu viaje una experiencia inolvidable.",

    horarios: {
      ida: [
        {
          salida: "04:50",
          llegada: "08:48",
          origen: "Cusco",
          destino: "Machu Picchu",
          tipo: "Servicio bimodal (bus + tren)",
        },
        {
          salida: "09:55",
          llegada: "14:00",
          origen: "Cusco",
          destino: "Machu Picchu",
          tipo: "Servicio bimodal (bus + tren)",
        },
      ],
      retorno: [
        {
          salida: "10:32",
          llegada: "14:30",
          origen: "Machu Picchu",
          destino: "Cusco",
          tipo: "Servicio bimodal (bus + tren)",
        },
        {
          salida: "16:12",
          llegada: "20:20",
          origen: "Machu Picchu",
          destino: "Cusco",
          tipo: "Servicio bimodal (bus + tren)",
        },
      ],
    },
    includes: [
      {
        title: "🌄 Vagón observatorio al aire libre",
        description:
          "Conéctate con la naturaleza en nuestro exclusivo vagón observatorio al aire libre. Comparte momentos únicos mientras disfrutas de vistas panorámicas durante tu viaje a Machu Picchu. ¡No olvides capturar las mejores fotos de tu viaje!",
      },
      {
        title: "🌞 Ventanas panorámicas con protección UV",
        description:
          "Nuestro vagón cuenta con ventanas panorámicas en la parte superior que te permiten admirar el cielo y las montañas, además de ventanas laterales más amplias con protección UV para que tu experiencia sea cómoda y segura.",
      },
      {
        title: "🍽️ Experiencia con sabores andinos",
        description:
          "Viaja por los paisajes y sabores de los Andes con nuestra selección de snacks elaborados con ingredientes frescos y autóctonos del Valle Sagrado de los Incas. Un deleite para tus sentidos.",
      },
      {
        title: "📱 Descubre el camino en tiempo real",
        description:
          "Mantente conectado a lo largo del trayecto con nuestra plataforma Info Train & Wi-Fi a bordo. Conéctate para disfrutar de contenido exclusivo, descubrir más sobre las atracciones del viaje y hacer de cada momento una experiencia aún más especial.",
      },
      {
        title: "🎶 Música en vivo a bordo",
        description:
          "Disfruta de música en vivo interpretada por talentosos músicos que fusionan melodías andinas con otros géneros. Los instrumentos tradicionales como la quena y la zampoña crean una atmósfera única, perfecta para acompañar tu viaje a la maravilla del mundo Machu Picchu.",
      },
    ],
    galeria: [
      "/images/galeria/360/tren-360-1.avif",
      "/images/galeria/360/tren-360-2.avif",
      "/images/galeria/360/tren-360-3.avif",
      "/images/galeria/360/tren-360-4.avif",
      "/images/galeria/360/tren-360-5.avif",
    ],
    label: "Ver información del tren The 360 de IncaRail",
    background: "https://incarail.com/es/tren-the-360-machu-picchu",
    styleclass: "incarailtrain",
    imagen: {
      logo: The360,
      alt: "Logo del tren The 360 de IncaRail",
      height: 150,
      width: 150,
    },
  },

  //TREN THA VOYAGER
  {
    id: "the-voyager",
    name: "The Voyager",
    title:
      "Disfruta de cómodos asientos y excelente servicio a bordo de The Voyager",
    description:
      "Viaja cómodamente a Machu Picchu a bordo de The Voyager, un tren pensado para brindarte confort, relajación y paisajes inolvidables. Sus asientos ergonómicos, música ambiental andina y amplias ventanas panorámicas te permitirán disfrutar plenamente de la ruta, mientras contemplas picos nevados, ríos serpenteantes y el majestuoso Valle Sagrado. Nuestro cálido equipo a bordo se encargará de que vivas una experiencia excepcional, complementada con una carta de cócteles y jugos elaborados con frutas frescas y hierbas nativas. Además, podrás deleitarte con un menú gourmet inspirado en ingredientes tradicionales del Valle Sagrado de los Incas. Todo lo necesario para hacer de tu viaje una aventura única.",

    horarios: {
      ida: [
        {
          salida: "04:20",
          llegada: "08:01",
          origen: "Cusco",
          destino: "Machu Picchu",
          tipo: "Servicio bimodal (bus + tren)",
        },
        {
          salida: "04:50",
          llegada: "08:48",
          origen: "Cusco",
          destino: "Machu Picchu",
          tipo: "Servicio bimodal (bus + tren)",
        },
        {
          salida: "08:30",
          llegada: "12:41",
          origen: "Cusco",
          destino: "Machu Picchu",
          tipo: "Servicio bimodal (bus + tren)",
        },
        {
          salida: "09:55",
          llegada: "14:00",
          origen: "Cusco",
          destino: "Machu Picchu",
          tipo: "Servicio bimodal (bus + tren)",
        },
        {
          salida: "13:30",
          llegada: "18:09",
          origen: "Cusco",
          destino: "Machu Picchu",
          tipo: "Servicio bimodal (bus + tren)",
        },
        {
          salida: "16:15",
          llegada: "21:09",
          origen: "Cusco",
          destino: "Machu Picchu",
          tipo: "Servicio bimodal (bus + tren)",
        },
      ],
      retorno: [
        {
          salida: "08:30",
          llegada: "12:10",
          origen: "Machu Picchu",
          destino: "Cusco",
          tipo: "Servicio bimodal (bus + tren)",
        },
        {
          salida: "10:32",
          llegada: "14:30",
          origen: "Machu Picchu",
          destino: "Cusco",
          tipo: "Servicio bimodal (bus + tren)",
        },
        {
          salida: "14:30",
          llegada: "18:20",
          origen: "Machu Picchu",
          destino: "Cusco",
          tipo: "Servicio bimodal (bus + tren)",
        },
        {
          salida: "16:12",
          llegada: "20:20",
          origen: "Machu Picchu",
          destino: "Cusco",
          tipo: "Servicio bimodal (bus + tren)",
        },
        {
          salida: "19:00",
          llegada: "23:00",
          origen: "Machu Picchu",
          destino: "Cusco",
          tipo: "Servicio bimodal (bus + tren)",
        },
        {
          salida: "20:20",
          llegada: "00:10",
          origen: "Machu Picchu",
          destino: "Cusco",
          tipo: "Servicio bimodal (bus + tren)",
        },
        {
          salida: "21:30",
          llegada: "01:15",
          origen: "Machu Picchu",
          destino: "Cusco",
          tipo: "Servicio bimodal (bus + tren)",
        },
      ],
    },
    includes: [
      {
        title: "💺 Cómodos asientos",
        description:
          "Asientos ergonómicos, diseñados para brindarte confort durante todo el trayecto hacia Machu Picchu. Una experiencia de viaje verdaderamente placentera.",
      },
      {
        title: "🌄 Ventanas panorámicas con protección UV",
        description:
          "Admira los impresionantes paisajes de los Andes a través de amplias ventanas con protección UV. Una vista privilegiada con la seguridad y comodidad que mereces.",
      },
      {
        title: "🎵 Música ambiental andina",
        description:
          "Sumérgete en la cultura local con melodías tradicionales andinas que suenan a través de los parlantes, creando una atmósfera envolvente y auténtica a lo largo del viaje.",
      },
      {
        title: "🥤 Venta a bordo",
        description:
          "Disfruta de una variedad de snacks y bebidas disponibles durante todo el trayecto. Ideales para acompañar el paisaje y satisfacer tus antojos en cualquier momento.",
      },
      {
        title: "📅 Salidas diarias",
        description:
          "Viaja cualquier día de la semana. The Voyager ofrece salidas diarias con horarios que te permiten aprovechar al máximo tu visita a Machu Picchu.",
      },
    ],
    galeria: [
      "/images/galeria/voyager/tren-voyager-1.avif",
      "/images/galeria/voyager/tren-voyager-2.avif",
      "/images/galeria/voyager/tren-voyager-3.avif",
      "/images/galeria/voyager/tren-voyager-4.avif",
      "/images/galeria/voyager/tren-voyager-5.avif",
    ],
    label: "Ver información del tren Voyager de IncaRail",
    background: "https://incarail.com/es/tren-voyager-machu-picchu",
    styleclass: "incarailtrain",
    imagen: {
      logo: TheVoyager,
      alt: "Logo del tren Voyager de IncaRail",
      height: 150,
      width: 150,
    },
  },
  {
    id: "hiram-bingham",
    name: "Hiram Bingham",
    title: "Un viaje de lujo a Machu Picchu a bordo del Hiram Bingham",
    description:
      "Comienza tu aventura de lujo a bordo del tren Hiram Bingham, que parte de Cusco por la mañana y atraviesa paisajes cambiantes de la sierra peruana mientras disfrutas de un exquisito brunch. Tras ascender por una empinada pendiente a las afueras de Cusco, el tren desciende hacia el Valle Sagrado, recorriendo coloridos pueblos y campos verdes al pie de los Andes. Este exclusivo servicio cuenta con dos coches para pasajeros, un coche bar y un coche cocina. Su diseño combina elegancia y confort: mesas extra anchas de casi tres metros, asientos 30 cm más amplios que el promedio, y espacios considerados entre los más cómodos del mundo. Todo está pensado para que vivas una experiencia unica e inolvidable rumbo a la maravilla del mundo Machu Picchu.",

    horarios: {
      ida: [
        {
          salida: "09:05",
          llegada: "12:24",
          origen: "Poroy",
          destino: "Machu Picchu",
          tipo: "Servicio bimodal (bus + tren)",
        },
        {
          salida: "10:53",
          llegada: "12:24",
          origen: "Ollantaytambo",
          destino: "Machu Picchu",
          tipo: "Servicio regular (tren)",
        },
      ],
      retorno: [
        {
          salida: "17:50",
          llegada: "19:25",
          origen: "Machu Picchu",
          destino: "Ollantaytambo",
          tipo: "Servicio regular (tren)",
        },
        {
          salida: "17:50",
          llegada: "21:16",
          origen: "Machu Picchu",
          destino: "Poroy",
          tipo: "Servicio bimodal (tren + bus)",
        },
      ],
    },
    includes: [
      {
        title: "🎟️ Boleto de ingreso a Machu Picchu",
        description:
          "Tu boleto incluye el ingreso a la ciudadela de Machu Picchu, transporte en bus privado de ida y vuelta, y un guía turístico profesional. Importante: la entrada está sujeta a disponibilidad del Ministerio de Cultura. Se recomienda confirmar antes de reservar.",
      },
      {
        title: "🎶 Música en vivo",
        description:
          "Disfruta de un espectáculo vibrante con música tradicional e internacional interpretada con cajón peruano, guitarra y panderetas. El ambiente perfecto para acompañar tu viaje hacia Machu Picchu.",
      },
      {
        title: "🍸 Cocktail in the Mountains",
        description:
          "Para cerrar tu día con estilo, disfruta de un cóctel exclusivo en el Sanctuary Lodge, a Belmond Hotel, al final del viaje. Disponible solo en el trayecto de retorno.",
      },
      {
        title: "🌿 Impresionante biodiversidad",
        description:
          "Explora la rica biodiversidad del recorrido desde los coches observatorio, bar y comedor del tren Hiram Bingham. Disfruta del aire libre, un cóctel peruano en mano y música en vivo mientras atraviesas uno de los paisajes más extraordinarios rumbo a la ciudadela de lon incas Machu Picchu.",
      },
      {
        title: "🍽️ Almuerzo o cena gourmet",
        description:
          "Durante el viaje de ida, saborea un almuerzo gourmet preparado con ingredientes frescos. En el trayecto de regreso, te espera una cena de cuatro tiempos diseñada por el chef Jorge Muñoz, fusionando alta cocina con sabores peruanos.",
      },
      {
        title: "🕺 Show tradicional de bienvenida",
        description:
          "Antes de abordar, serás recibido con una cálida bienvenida que incluye danza típica, música en vivo y un cóctel elaborado con licor peruano. Una introducción perfecta a tu viaje rumbo a Machu Picchu.",
      },
    ],
    galeria: [
      "/images/galeria/hiranbimgham/tren-hiram-bingham-1.avif",
      "/images/galeria/hiranbimgham/tren-hiram-bingham-2.avif",
      "/images/galeria/hiranbimgham/tren-hiram-bingham-3.avif",
      "/images/galeria/hiranbimgham/tren-hiram-bingham-4.avif",
      "/images/galeria/hiranbimgham/tren-hiram-bingham-5.avif",
    ],
    label: "Ver información del tren Hiram Bingham de PeruRail",
    background: "https://perurail.com/es/tren-hiram-bingham",
    styleclass: "premiumtrain",
    imagen: {
      logo: HiramBingham,
      alt: "Logo del tren Hiram Bingham de PeruRail",
      height: 75,
      width: 150,
    },
  },

  // TREN VISTADOME
  {
    id: "vistadome-observatory",
    name: "Vistadome Observatory",
    title:
      "Vive un exclusivo viaje colmado de vistas asombrosas a bordo del Vistadome Observatory",
    description:
      "Embárcate en una travesía mágica hacia Machu Picchu a bordo del tren Vistadome Observatory, donde cada instante te conecta con la majestuosidad de los Andes. Disfruta de vistas panorámicas espectaculares desde coches con ventanas amplias, celebra la riqueza cultural del Perú en el coche bar y déjate envolver por danzas y melodías andinas en vivo. Cada detalle ha sido cuidadosamente diseñado para brindarte una experiencia inmersiva e inolvidable en el corazón del mundo andino.",

    horarios: {
      ida: [
        {
          salida: "05:10",
          llegada: "09:15",
          origen: "Cusco (Wanchaq)",
          destino: "Machu Picchu",
          tipo: "Servicio bimodal (bus + tren)",
        },
        {
          salida: "07:30",
          llegada: "12:11",
          origen: "Cusco (San Pedro)",
          destino: "Machu Picchu",
          tipo: "Servicio regular (tren)",
        },
        {
          salida: "12:30",
          llegada: "17:02",
          origen: "Cusco (Wanchaq)",
          destino: "Machu Picchu",
          tipo: "Servicio bimodal (bus + tren)",
        },
      ],
      retorno: [
        {
          salida: "10:55",
          llegada: "12:32",
          origen: "Machu Picchu",
          destino: "Ollantaytambo",
          tipo: "Servicio regular (tren)",
        },
        {
          salida: "13:37",
          llegada: "17:30",
          origen: "Machu Picchu",
          destino: "Cusco (Wanchaq)",
          tipo: "Servicio bimodal (bus + tren)",
        },
        {
          salida: "16:22",
          llegada: "20:30",
          origen: "Machu Picchu",
          destino: "Cusco (Wanchaq)",
          tipo: "Servicio bimodal (bus + tren)",
        },
        {
          salida: "17:23",
          llegada: "21:52",
          origen: "Machu Picchu",
          destino: "Cusco (San Pedro)",
          tipo: "Servicio regular (tren)",
        },
      ],
    },
    includes: [
      {
        title: "🍸 Coche bar observatorio",
        description:
          "Sumérgete en la cultura peruana en nuestro exclusivo tren Vistadome Observatory, donde la tradición cobra vida a través de la música, danza y un ambiente que rinde homenaje a la riqueza de los Andes.",
      },
      {
        title: "💃 Danza y música típica en vivo",
        description:
          "Conéctate con la esencia de la cultura andina mientras disfrutas de presentaciones en vivo a bordo: música tradicional y danzas que acompañan los majestuosos paisajes rumbo a Machu Picchu y Cusco.",
      },
      {
        title: "🏞️ Parada turística en la Laguna Huaypo",
        description:
          "Explora la belleza natural de la Laguna Huaypo durante una parada del viaje. Admira los glaciares de los Apus Salkantay, Chicon y Verónica, junto con la flora y fauna local. (Disponible solo en servicio bimodal diurno y sujeto a condiciones climáticas).",
      },
      {
        title: "🌄 Impresionantes vistas panorámicas",
        description:
          "Déjate envolver por los paisajes de los Andes desde nuestros coches panorámicos. Las ventanas de gran amplitud ofrecen una vista ininterrumpida que convierte cada tramo del camino en una obra de arte viva.",
      },
      {
        title: "🧣 Desfile de prendas de baby alpaca",
        description:
          "Disfruta de un desfile a bordo donde nuestro equipo presenta una exclusiva colección de prendas de baby alpaca. Admira, prueba y adquiere estas piezas únicas. Disponibles solo en el tramo de retorno de Machu Picchu a Cusco.",
      },
      {
        title: "🎵 Música ambiental a bordo",
        description:
          "La armonía entre música relajante y los sonidos de la naturaleza crea una atmósfera serena. Acompaña el paisaje andino con una experiencia auditiva envolvente a bordo del Vistadome Observatory.",
      },
      {
        title: "🎧 Audiotour explicativo",
        description:
          "Descubre los secretos del camino con nuestro audiotour. Escucha las historias detrás de cada sitio histórico a lo largo de la ruta y aprende más en tu trayecto a la maravilla del mundo.",
      },
      {
        title: "🥨 Snack a bordo",
        description:
          "Disfruta de un delicioso snack elaborado con ingredientes andinos mientras contemplas los paisajes únicos entre Cusco y Machu Picchu.",
      },
    ],
    galeria: [
      "/images/galeria/observatory/tren-vistadome-observatory-1.avif",
      "/images/galeria/observatory/tren-vistadome-observatory-2.avif",
      "/images/galeria/observatory/tren-vistadome-observatory-3.avif",
      "/images/galeria/observatory/tren-vistadome-observatory-4.avif",
      "/images/galeria/observatory/tren-vistadome-observatory-5.avif",
    ],
    label: "Ver información del tren Vistadome Observatory de PeruRail",
    background: "https://www.vistadomeobservatory.com/",
    styleclass: "perurailtrain",
    imagen: {
      logo: VistadomeObservatory,
      alt: "Logo del tren Vistadome Observatory de PeruRail",
      height: 150,
      width: 150,
    },
  },

  //TREN VISTADOME
  {
    id: "vistadome",
    name: "Vistadome",
    title:
      "Un sorprendente viaje panorámico que despierta tus sentidos a bordo del Vistadome",
    description:
      "Descubre la forma más cómoda y rápida de llegar a Machu Picchu con el tren Vistadome de PeruRail. A bordo, disfrutarás de coches recientemente renovados, equipados con ventanas panorámicas de vidrio que ofrecen vistas impresionantes de los paisajes andinos. Siéntete parte del entorno mientras saboreas deliciosos bocadillos y bebidas frías o calientes, en un trayecto lleno de oportunidades para capturar fotografías espectaculares. Cada detalle está diseñado para ofrecerte una experiencia visual, cultural y gastronómica inolvidable.",

    horarios: {
      ida: [
        {
          salida: "05:40",
          llegada: "09:54",
          origen: "Cusco (Wanchaq)",
          destino: "Machu Picchu",
          tipo: "Servicio bimodal (bus + tren)",
        },
        {
          salida: "06:40",
          llegada: "10:52",
          origen: "Cusco (San Pedro)",
          destino: "Machu Picchu",
          tipo: "Servicio regular (tren)",
        },
        {
          salida: "16:30",
          llegada: "20:45",
          origen: "Cusco (Wanchaq)",
          destino: "Machu Picchu",
          tipo: "Servicio bimodal (bus + tren)",
        },
      ],
      retorno: [
        {
          salida: "14:55",
          llegada: "19:00",
          origen: "Machu Picchu",
          destino: "Cusco (Wanchaq)",
          tipo: "Servicio bimodal (bus + tren)",
        },
        {
          salida: "15:20",
          llegada: "17:08",
          origen: "Machu Picchu",
          destino: "Cusco (Wanchaq)",
          tipo: "Servicio bimodal (bus + tren)",
        },
        {
          salida: "18:20",
          llegada: "22:30",
          origen: "Machu Picchu",
          destino: "Cusco (Wanchaq)",
          tipo: "Servicio bimodal (bus + tren)",
        },
      ],
    },
    includes: [
      {
        title: "🎭 Representación cultural",
        description:
          "En el viaje de regreso, déjate envolver por la esencia viva de la cultura andina. Melodías ancestrales y danzas tradicionales celebran el espíritu de los Andes, conectándote con la historia y el alma de esta tierra. Disponible en el tramo de retorno desde Machu Picchu.",
      },
      {
        title: "🌄 Impresionantes vistas",
        description:
          "Los coches panorámicos con ventanas de gran amplitud te invitan a sumergirte en los majestuosos paisajes andinos. Cada vista es una obra de arte natural que te conecta con la esencia de los andes peruanos.",
      },
      {
        title: "🥨 Snack a bordo",
        description:
          "Degusta con un snack elaborado con ingredientes típicos andinos mientras disfrutas del paisaje. Un toque de sabor local que complementa tu viaje a la maravilla del mundo, Machu Picchu.",
      },
      {
        title: "🏞️ Parada turística en la Laguna Huaypo",
        description:
          "Admira la belleza natural de la Laguna Huaypo en una parada durante la ruta. Observa los glaciares de los Apus Salkantay, Chicon y Verónica, además de la fauna y flora local. (Disponible solo en viajes bimodales diurnos y sujeto a condiciones climáticas.)",
      },
      {
        title: "🧶 Desfile de prendas de alpaca",
        description:
          "Durante el viaje de retorno desde Machu Picchu, nuestro equipo presentará una colección exclusiva de prendas de baby alpaca. Admira y adquiere piezas únicas a precios especiales, hechas con la suavidad y elegancia.",
      },
      {
        title: "🎧 Audiotour a bordo",
        description:
          "Explora los sitios históricos de la ruta con nuestro audiotour interactivo. Escucha las historias que dan vida a cada lugar emblemático mientras te acercas a Machu Picchu.",
      },
      {
        title: "🎵 Música ambiental a bordo",
        description:
          "Disfruta de una experiencia relajante con música andina, sonidos naturales y vistas inigualables. Cada kilómetro te conecta con la paz de los paisajes peruanos, envolviéndote en una travesía mágica.",
      },
    ],
    galeria: [
      "/images/galeria/vistadome/tren-vistadome-1.avif",
      "/images/galeria/vistadome/tren-vistadome-2.avif",
      "/images/galeria/vistadome/tren-vistadome-3.avif",
      "/images/galeria/vistadome/tren-vistadome-4.avif",
      "/images/galeria/vistadome/tren-vistadome-5.avif",
      "/images/galeria/vistadome/tren-vistadome-6.avif",
      "/images/galeria/vistadome/tren-vistadome-7.avif",
      "/images/galeria/vistadome/tren-vistadome-8.avif",
    ],
    label: "Ver información del tren Vistadome de PeruRail",
    background: "https://www.vistadomeobservatory.com/",
    styleclass: "perurailtrain",
    imagen: {
      logo: Vistadome,
      alt: "Logo del tren Vistadome de PeruRail",
      height: 150,
      width: 150,
    },
  },

  //TREN EXPEDITION
  {
    id: "expedition",
    name: "Expedition",
    title:
      "Explora la verdadera aventura hacia Machu Picchu a bordo del Expedition",
    description:
      "El tren Expedition de PeruRail ha sido diseñado para viajeros con espíritu aventurero que no quieren renunciar a la comodidad ni a la seguridad. Sus interiores, decorados con tapices de inspiración incaico, ofrecen un ambiente local auténtico. Disfruta de asientos cómodos y amplios espacios para mochilas, perfectos para quienes se preparan para explorar Machu Picchu. Durante el trayecto, podrás adquirir bebidas y snacks a un costo adicional. Una experiencia práctica, accesible y cultural, ideal para recorrer los Andes rumbo a la ciudadela inca.",

    horarios: {
      ida: [
        {
          salida: "03:20",
          llegada: "07:40",
          origen: "Cusco (Wanchaq)",
          destino: "Machu Picchu",
          tipo: "Servicio bimodal (bus + tren)",
        },
        {
          salida: "05:40",
          llegada: "09:54",
          origen: "Cusco (Wanchaq)",
          destino: "Machu Picchu",
          tipo: "Servicio bimodal (bus + tren)",
        },
        {
          salida: "12:30",
          llegada: "17:02",
          origen: "Cusco (Wanchaq)",
          destino: "Machu Picchu",
          tipo: "Servicio bimodal (bus + tren)",
        },
        {
          salida: "16:30",
          llegada: "20:45",
          origen: "Cusco (Wanchaq)",
          destino: "Machu Picchu",
          tipo: "Servicio bimodal (bus + tren)",
        },
      ],
      retorno: [
        {
          salida: "14:55",
          llegada: "19:00",
          origen: "Machu Picchu",
          destino: "Cusco (Wanchaq)",
          tipo: "Servicio bimodal (bus + tren)",
        },
        {
          salida: "15:20",
          llegada: "19:30",
          origen: "Machu Picchu",
          destino: "Cusco (Wanchaq)",
          tipo: "Servicio bimodal (bus + tren)",
        },
        {
          salida: "16:22",
          llegada: "20:30",
          origen: "Machu Picchu",
          destino: "Cusco (Wanchaq)",
          tipo: "Servicio bimodal (bus + tren)",
        },
        {
          salida: "18:20",
          llegada: "22:30",
          origen: "Machu Picchu",
          destino: "Cusco (Wanchaq)",
          tipo: "Servicio bimodal (bus + tren)",
        },
      ],
    },
    includes: [
      {
        title: "🏞️ Parada turística en la Laguna Huaypo",
        description:
          "Descubre la belleza de la Laguna Huaypo a mitad de tu viaje. Desde este punto podrás observar los glaciares de los Apus Salkantay, Chicon y Verónica, además de la flora y fauna local. (Disponible solo en horarios diurnos del servicio bimodal y sujeto a condiciones climáticas.)",
      },
      {
        title: "🎧 Audiotour informativo",
        description:
          "Conoce a fondo los sitios históricos a lo largo del recorrido con nuestro audiotour a bordo. Aprende sobre la historia y los misterios de Machu Picchu, Cusco y el Valle Sagrado.",
      },
      {
        title: "🎵 Música ambiental a bordo",
        description:
          "Relájate con una melodía suave de fondo combinada con los sonidos de la naturaleza. Las vistas de los paisajes andinos y esta atmósfera sonora convierten tu viaje en una experiencia serena y envolvente.",
      },
      {
        title: "🚉 Múltiples horarios y frecuencias",
        description:
          "El tren Expedition ofrece la mayor variedad de horarios y estaciones de salida, lo que lo convierte en la opción ideal para viajeros que buscan flexibilidad y libertad al planificar su visita a Machu Picchu.",
      },
      {
        title: "💺 Asientos cómodos y espaciosos",
        description:
          "Disfruta del viaje en asientos amplios y ergonómicos, pensados para ofrecer el mayor confort mientras te sumerges en los paisajes imponentes de los Andes peruanos.",
      },
    ],
    galeria: [
      "/images/galeria/expedition/tren-expedition-1.avif",
      "/images/galeria/expedition/tren-expedition-2.avif",
      "/images/galeria/expedition/tren-expedition-3.avif",
      "/images/galeria/expedition/tren-expedition-4.avif",
      "/images/galeria/expedition/tren-expedition-5.avif",
    ],
    label: "Ver información del tren Expedition de PeruRail",
    styleclass: "perurailtrain",
    background: "https://www.vistadomeobservatory.com/",
    imagen: {
      logo: Expedition,
      alt: "Logo del tren Expedition de PeruRail",
      height: 150,
      width: 150,
    },
  },
] as const;
