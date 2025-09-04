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
      "prijave gradilišta tijelu nadležnom za poslove inspekcije rada",
      "izrada planova izvođenja radova",
      "izrada akata o imenovanju glavnog inženjera gradilišta, inženjera gradilišta i voditelja radova",
      "priprema dokumentacije koja se sukladno Zakonu o gradnji mora nalaziti na gradilištu",
      "vođenje građevinskog dnevnika",
      "izrada dokaznica mjera s pripadajućim obračunskim nacrtima",
      "izrada građevinskih knjiga",
      "sastavljanje računa, privremenih i okončanih situacija",
      "izrada i priprema dokumentacije za obavljanje tehničkog pregleda i izdavanje uporabne dozvole",
      "izrada i sastavljanje pisanih izjava izvođača o izvedenim radovima",
      "usluge vođenja gradnje"
    ]
  },
  {
    id: "usluge-projektiranja",
    title: "Pomoć u projektiranju",
    description: "Usluge pomoći u projektiranju od idejnih do izvedbenih projekata",
    icon: "PenTool",
    features: [
      "Tehnička podrška izvođačima, projektantskim i arhitektonskim uredima:",
      "suradnja u izradi elaborata, idejnog, glavnog, izvedbenog i tipskog projekta, projekta uklanjanja i projekta postojećeg stanja građevine"
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
    description: "Provedba postupaka javne nabave i stručna pomoć Naručiteljima",
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
    description: "Usluge Koordinatora za zaštitu na radu u fazi projektiranja i tijekom izvođenja radova",
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
    description: "Profesionalne knjigovodstvene usluge za mikro i mala poduzeća, obrte",
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
    title: "Građevinski inženjering PREMIUM",
    description: "Sve što trebate za vaš građevinski projekt pod jednim krovom.",
    price: "Cijena na upit",
    features: [
      "prijava gradilišta",
      "izrada plana izvođenja radova",
      "izrada akta o imenovanju glavnog inženjera gradilišta, inženjera gradilišta i voditelja radova",
      "priprema dokumentacije koja se sukladno Zakonu o gradnji mora nalaziti na gradilištu",
      "vođenje građevinskog dnevnika",
      "izrada dokaznica mjera s pripadajućim obračunskim nacrtima",
      "izrada građevinske knjige",
      "sastavljanje računa, privremenih i okončanih situacija",
      "izrada i priprema dokumentacije za obavljanje tehničkog pregleda i izdavanje uporabne dozvole",
      "izrada i sastavljanje pisane izjave izvođača o izvedenim radovima"
    ]
  },
  {
    id: 3,
    title: "Javna nabava za ponuditelje PREMIUM",
    description: "VIP usluga za složene postupke javne nabave.",
    price: "Individualna ponuda",
    features: [
      "analiza objavljene dokumentacije o nabavi",
      "izrada ponude",
      "izrada troškovnika (analiza tržišta, slanje upita dobavljačima, komunikacija s dobavljačima, analiza dostavljenih ponuda dobavljača, analize i kalkulacije cijena, unos jediničnih cijena u troškovnik, analiza troškova)",
      "priprema jamstva za ozbiljnost ponude",
      "komunikacija s Naručiteljem tijekom roka za dostavu ponuda ((izrada i slanje upita za pojašnjenjem ili izmjenom dokumentacije o nabavi)",
      "dostava ponude i njezinih dijelova",
      "komunikacija s Naručiteljem tijekom pregleda i ocjene ponuda (izrada i slanje pojašnjenja, dopuna, ispravka računske pogreške i sl., izrada i slanje ažuriranih popratnih dokumenata)"
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