import React from 'react';
import { companyInfo } from '../data/mock';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import SEO from '../components/SEO';
import { FileText, Scale, AlertCircle, Phone } from 'lucide-react';

const TermsOfService = () => {
  const termsJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Uvjeti korištenja - PV Consulting d.o.o.",
    "description": "Uvjeti korištenja web stranice i usluga PV Consulting d.o.o.",
    "dateModified": "2025-02-01"
  };

  return (
    <>
      <SEO 
        title="Uvjeti korištenja - PV Consulting d.o.o."
        description="Uvjeti korištenja web stranice i usluga PV Consulting d.o.o. Pročitajte pravila i uvjete prije korištenja naših usluga."
        keywords="uvjeti korištenja, pravila, PV Consulting, usluge, odgovornost"
        canonical="/uvjeti-koristenja"
        jsonLd={termsJsonLd}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4 sm:mb-6">
              <Scale className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Uvjeti korištenja
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
              Molimo pročitajte ove uvjete prije korišnja naših usluga i web stranice.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Zadnji put ažurirano: 1. veljače 2025.
            </p>
          </div>
        </div>

        <div className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {/* Introduction */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="w-5 h-5 text-blue-600" />
                    <span>Uvod</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>
                    Dobrodošli na web stranicu {companyInfo.name}. Ovi Uvjeti korištenja ("Uvjeti") 
                    reguliraju vaše korište naše web stranice i usluga. Korištenjem naše stranice, 
                    pristajete biti vezani ovim uvjetima.
                  </p>
                  <p>
                    Ako se ne slažete s bilo kojim dijelom ovih uvjeta, molimo ne koristite našu web stranicu.
                  </p>
                </CardContent>
              </Card>

              {/* Services */}
              <Card>
                <CardHeader>
                  <CardTitle>Opis usluga</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>{companyInfo.name} pruža sljedeće usluge:</p>
                  <ul>
                    <li>Građevinski inženjering i projektiranje</li>
                    <li>Usluge javne nabave za ponuditelje i naručitelje</li>
                    <li>Zaštita na radu</li>
                    <li>Knjigovodstvene usluge</li>
                    <li>Upravljanje i održavanje zgrada</li>
                    <li>Ostale djelatnosti u skladu s našom dozvolom</li>
                  </ul>
                  
                  <p>
                    Zadržavamo pravo mijenjanja, prekidanja ili ograničavanja bilo koje usluge 
                    u bilo koje vrijeme bez prethodne najave.
                  </p>
                </CardContent>
              </Card>

              {/* User Obligations */}
              <Card>
                <CardHeader>
                  <CardTitle>Obveze korisnika</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>Korištenjem naših usluga, obvezujete se:</p>
                  <ul>
                    <li>Pružiti točne i potpune informacije</li>
                    <li>Ne koristiti usluge u nezakonite svrhe</li>
                    <li>Poštivati sva važeća prava intelektualnog vlasništva</li>
                    <li>Ne ometati rad web stranice ili usluga</li>
                    <li>Promptno platiti sve dogovorene naknade</li>
                    <li>Surađivati u doboj vjeri tijekom pružanja usluga</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Liability */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertCircle className="w-5 h-5 text-blue-600" />
                    <span>Ograničenja odgovornosti</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <h3>Ograničenja</h3>
                  <p>
                    Naše usluge pružamo "kakve jesu" bez izričitih ili implicitnih jamstava. 
                    U najvećoj mjeri dozvoljenoj zakonom, odričemo se svih jamstava uključujući:
                  </p>
                  <ul>
                    <li>Jamstva tržišnosti</li>
                    <li>Jamstva prikladnosti za određenu svrhu</li>
                    <li>Jamstva nepovrjede prava</li>
                  </ul>

                  <h3>Ograničenje štete</h3>
                  <p>
                    Ni u kojem slučaju nećemo biti odgovorni za neizravne, slučajne, posebne 
                    ili kaznene štete, uključujući gubitak profita, podataka ili korišnja.
                  </p>
                </CardContent>
              </Card>

              {/* Intellectual Property */}
              <Card>
                <CardHeader>
                  <CardTitle>Intelektualno vlasništvo</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>
                    Sav sadržaj web stranice, uključujući tekst, grafike, logotipe, slike i softver, 
                    vlasništvo je {companyInfo.name} ili naših partnera i zaštićen je autorskim pravima 
                    i drugim zakonima o intelektualnom vlasništvu.
                  </p>
                  
                  <h3>Dozvola korišnja</h3>
                  <p>
                    Dajemo vam ograničenu, neisključivu i neotuđivu licencu za pristup i korište 
                    web stranice u osobne i poslovne svrhe u skladu s ovim uvjetima.
                  </p>
                </CardContent>
              </Card>

              {/* Privacy */}
              <Card>
                <CardHeader>
                  <CardTitle>Privatnost</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>
                    Vaša privatnost je važna za nas. Molimo pročitajte našu{' '}
                    <a href="/politika-privatnosti" className="text-blue-600 hover:underline">
                      Politiku privatnosti
                    </a>{' '}
                    koja objašnjava kako prikupljamo, koristimo i štitimo vaše informacije.
                  </p>
                </CardContent>
              </Card>

              {/* Payment Terms */}
              <Card>
                <CardHeader>
                  <CardTitle>Uvjeti plaćanja</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <h3>Cijene</h3>
                  <p>
                    Cijene naših usluga navode se u hrvatskim kunama (HRK) ili eurima (EUR) 
                    i mogu se mijenjati bez prethodne najave.
                  </p>
                  
                  <h3>Plaćanje</h3>
                  <ul>
                    <li>Računi se izdaju prema dogovorenom rasporedu</li>
                    <li>Plaćanje je potrebno izvršiti u roku od 30 dana</li>
                    <li>Kasnine se mogu naplatiti u skladu sa zakonom</li>
                    <li>Sve cijene uključuju PDV prema važećim stopama</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Termination */}
              <Card>
                <CardHeader>
                  <CardTitle>Prekidanje usluga</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>
                    Bilo koja strana može prekinuti ugovorni odnos uz prethodnu pisanu obavijest 
                    od 30 dana. U slučaju kršenja uvjeta, možemo odmah prekinuti pružanje usluga.
                  </p>
                  
                  <h3>Posljedice prekidanja</h3>
                  <ul>
                    <li>Obveza plaćanja za već pružene usluge</li>
                    <li>Vraćanje svih poslovnih materijala</li>
                    <li>Prestanak prava korišnja naših resursa</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Governing Law */}
              <Card>
                <CardHeader>
                  <CardTitle>Mjerodavno pravo</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>
                    Ovi Uvjeti korišnja se tumače i provode u skladu sa zakonima Republike Hrvatske. 
                    Svi sporovi rješavaju se pred nadležnim sudovima u Sisku.
                  </p>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span>Kontakt informacije</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>
                    Za pitanja o ovim Uvjetima korišnja ili našim uslugama, kontaktirajte nas:
                  </p>
                  
                  <div className="not-prose bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold">{companyInfo.name}</p>
                    <p>{companyInfo.address}</p>
                    <p>Email: {companyInfo.email}</p>
                    <p>Telefon: {companyInfo.phone}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Changes */}
              <Card>
                <CardHeader>
                  <CardTitle>Promjene uvjeta</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>
                    Zadržavamo pravo izmjene ovih Uvjeta korišnja u bilo koje vrijeme. 
                    Promjene stupaju na snagu objavljivanjem na ovoj stranici.
                  </p>
                  <p>
                    Vaša kontinuirana uporaba usluga nakon promjene uvjeta predstavlja 
                    prihvaćanje novih uvjeta.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;