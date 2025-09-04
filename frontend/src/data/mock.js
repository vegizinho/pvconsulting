// Mock data for PV Consulting website
export const companyInfo = {
  name: "PV Consulting d.o.o.",
  tagline: "za građevinski inženjering i javnu nabavu",
  description: "PV Consulting d.o.o. je poduzeće osnovano u veljači 2025. godine u Sisku i prvenstveno se bavi građevinskim inženjeringom i javnom nabavom, ali i drugim djelatnostima kao što su geodetska djelatnost, savjetovanje u vezi s poslovanjem i upravljanjem, istraživanje tržišta i ispitivanje javnog mnijenja, administrativne djelatnosti, poslovi zaštite na radu, organiziranje sajmova, priredbi, kongresa, koncerata, promocija, zabavnih manifestacija, izložbi, seminara, tečajeva i tribina, poslovi upravljanja i održavanja nekretnina te računovodstveni poslovi.",
  established: "veljača 2025.",
  location: "Sisak, Hrvatska",
  phone: "+385(98)9417413",
  email: "info@pvconsulting.hr",
  address: "Kupska ulica 12, 44000 Sisak",
  oib: "37847992892",
  legalName: "PV Consulting d.o.o. za građevinski inženjering i javnu nabavu"
};

export const services = [
  {
    id: "gradevinski-injenjering",
    title: "Građevinski inženjering",
    description: "Izrada građevinske knjige, troškovnika i vođenje gradilišta.",
    icon: "Building2",
    features: [
      "Izrada građevinske knjige",
      "Izrada troškovnika", 
      "Vođenje gradilišta",
      "Projektiranje stambenih i poslovnih objekata",
      "Statički proračuni konstrukcija",
      "Pomoć pri nadzoru izvođenja radova",
      "Tehnički pregledi"
    ]
  },
  {
    id: "usluge-projektiranja",
    title: "Pomoć u projektiranju",
    description: "Usluge pomoći u projektiranju od idejnih do izvedbenih projakata",
    icon: "PenTool",
    features: [
      "Idejni projekti",
      "Glavni projekti",
      "Izvedbeni projekti",
      "Revizije projekata"
    ]
  },
  {
    id: "javna-nabava-ponuditelji",
    title: "Javna nabava za Ponuditelje",
    description: "Izrada ponuda, stručna pomoć Ponuditeljima u postupcima javne nabave",
    icon: "FileText",
    features: [
      "Priprema ponuda",
      "Analiza tender dokumentacije",
      "Pravno savjetovanje",
      "Zastupanje u postupcima"
    ]
  },
  {
    id: "javna-nabava-narucitelji",
    title: "Javna nabava za Naručitelje",
    description: "provedba postupaka javne nabave i stručna pomoć Naručiteljima",
    icon: "Briefcase",
    features: [
      "Priprema tender dokumentacije",
      "Provedba postupaka",
      "Evaluacija ponuda",
      "Ugovaranje"
    ]
  },
  {
    id: "zastita-na-radu",
    title: "Zaštita na radu",
    description: "usluge Koordinatora za zaštitu na radu u fazi projektiranja i tijekom izvođenja radova",
    icon: "Shield",
    features: [
      "Procjena rizika",
      "Obuka zaposlenika",
      "Planovi zaštite",
      "Redoviti pomoć pri nadzoru"
    ]
  },
  {
    id: "knjigovodstvene-usluge",
    title: "Knjigovodstvene usluge",
    description: "profesionalne knjigovodstvene usluge za mikro i mala poduzeća, obrte",
    icon: "Calculator",
    features: [
      "Vođenje poslovnih knjiga",
      "Priprema financijskih izvješća",
      "Porezno savjetovanje",
      "Plaće i doprinosi"
    ]
  },
  {
    id: "upravljanje-zgrada",
    title: "Upravljanje i održavanje zgrada",
    description: "Profesionalno upravljanje stambenim i poslovnim zgradama.",
    icon: "Home",
    features: [
      "Upravljanje nekretninama",
      "Održavanje zgrada",
      "Komunalne usluge",
      "Administrativni poslovi"
    ]
  },
  {
    id: "ostale-djelatnosti",
    title: "Ostale djelatnosti",
    description: "Širok spektar dodatnih usluga za potpunu podršku vašem poslovanju.",
    icon: "Settings",
    features: [
      "Geodetska djelatnost",
      "Savjetovanje u poslovanju",
      "Istraživanje tržišta",
      "Organiziranje događanja"
    ]
  }
];

export const specialOffers = [
  {
    id: 2,
    title: "Građevinski paket",
    description: "Sve što trebate za vaš građevinski projekt pod jednim krovom.",
    price: "Cijena na upit",
    features: [
      "Projektiranje",
      "Građevinska dozvola",
      "Pomoć pri nadzoru radova",
      "Tehnički pregled"
    ]
  },
  {
    id: 3,
    title: "Javna nabava Premium",
    description: "VIP usluga za složene postupke javne nabave.",
    price: "Individualna ponuda",
    features: [
      "Analiza tržišta",
      "Strategija nadmetanja",
      "Priprema dokumentacije",
      "Cjelovita podrška"
    ]
  }
];

export const navigationItems = [
  { name: "Početna stranica", href: "/" },
  { name: "Građevinski inženjering", href: "/gradevinski-injenjering" },
  { name: "Pomoć u projektiranju", href: "/usluge-projektiranja" },
  { name: "Javna nabava za ponuditelje", href: "/javna-nabava-ponuditelji" },
  { name: "Javna nabava za naručitelje", href: "/javna-nabava-narucitelji" },
  { name: "Zaštita na radu", href: "/zastita-na-radu" },
  { name: "Knjigovodstvene usluge", href: "/knjigovodstvene-usluge" },
  { name: "Upravljanje i održavanje zgrada", href: "/upravljanje-zgrada" },
  { name: "Ostale djelatnosti", href: "/ostale-djelatnosti" },
  { name: "Posebne ponude", href: "/posebne-ponude" },
  { name: "Kontakt", href: "/kontakt" }
];