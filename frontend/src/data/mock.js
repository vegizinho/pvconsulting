// Mock data for PV Consulting website
export const companyInfo = {
  name: "PV Consulting d.o.o.",
  tagline: "za građevinski inženjering i javnu nabavu",
  description: "PV Consulting d.o.o. je poduzeće osnovano u veljači 2025. godine u Sisku i prvenstveno se bavi građevinskim inženjeringom i javnom nabavom, ali i drugim djelatnostima kao što su geodetska djelatnost, savjetovanje u vezi s poslovanjem i upravljanjem, istraživanje tržišta i ispitivanje javnog mnijenja, administrativne djelatnosti, poslovi zaštite na radu, organiziranje sajmova, priredbi, kongresa, koncerata, promocija, zabavnih manifestacija, izložbi, seminara, tečajeva i tribina, poslovi upravljanja i održavanja nekretnina te računovodstveni poslovi.",
  established: "veljača 2025.",
  location: "Sisak, Hrvatska",
  phone: "+385 44 123 456",
  email: "info@pvconsulting.hr",
  address: "Ulica Hrvatske bratske zajednice 1, 44000 Sisak"
};

export const services = [
  {
    id: "gradevinski-injenjering",
    title: "Građevinski inženjering",
    description: "Projektiranje i nadzor građevinskih objekata, statički proračuni i konstrukcijska rješenja.",
    icon: "Building2",
    features: [
      "Projektiranje stambenih i poslovnih objekata",
      "Statički proračuni konstrukcija",
      "Nadzor izvođenja radova",
      "Tehnički pregledi"
    ]
  },
  {
    id: "usluge-projektiranja",
    title: "Usluge projektiranja",
    description: "Kompletne usluge projektiranja od idejnih do izvedbenih projekata.",
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
    description: "Stručna pomoć ponuditeljima u postupcima javne nabave.",
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
    description: "Potpuna podrška naručiteljima u provedbi postupaka javne nabave.",
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
    description: "Sveobuhvatne usluge zaštite zdravlja i sigurnosti na radnom mjestu.",
    icon: "Shield",
    features: [
      "Procjena rizika",
      "Obuka zaposlenika",
      "Planovi zaštite",
      "Redoviti nadzor"
    ]
  },
  {
    id: "knjigovodstvene-usluge",
    title: "Knjigovodstvene usluge",
    description: "Profesionalne računovodstvene usluge za poduzeća svih veličina.",
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
    id: 1,
    title: "Paket za mala poduzeća",
    description: "Kompletna podrška za pokretanje i vođenje malog poduzeća.",
    price: "Početna cijena od 500 HRK",
    features: [
      "Osnivanje poduzeća",
      "Mjesečno knjigovodstvo",
      "Porezno savjetovanje",
      "Pravna podrška"
    ]
  },
  {
    id: 2,
    title: "Građevinski paket",
    description: "Sve što trebate za vaš građevinski projekt pod jednim krovom.",
    price: "Cijena na upit",
    features: [
      "Projektiranje",
      "Građevinska dozvola",
      "Nadzor radova",
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
  { name: "Početna", href: "/" },
  { name: "Građevinski inženjering", href: "/gradevinski-injenjering" },
  { name: "Usluge projektiranja", href: "/usluge-projektiranja" },
  { name: "Javna nabava za Ponuditelje", href: "/javna-nabava-ponuditelji" },
  { name: "Javna nabava za Naručitelje", href: "/javna-nabava-narucitelji" },
  { name: "Zaštita na radu", href: "/zastita-na-radu" },
  { name: "Knjigovodstvene usluge", href: "/knjigovodstvene-usluge" },
  { name: "Upravljanje zgrada", href: "/upravljanje-zgrada" },
  { name: "Ostale djelatnosti", href: "/ostale-djelatnosti" },
  { name: "Posebne ponude", href: "/posebne-ponude" },
  { name: "Kontakt", href: "/kontakt" }
];