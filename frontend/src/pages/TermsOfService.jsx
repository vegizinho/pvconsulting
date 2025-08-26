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

      <div className="min-h-screen" style={{ backgroundColor: '#f8f9fa' }}>
        {/* Hero Section */}
        <div className="py-12 sm:py-16" style={{ background: 'linear-gradient(135deg, #8093a0 0%, white 50%, #8093a0 100%)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4 sm:mb-6">
              <Scale className="w-8 h-8 sm:w-10 sm:h-10" style={{ color: '#44687a' }} />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6" style={{ color: '#122a3a' }}>
              Uvjeti korištenja
            </h1>
            <p className="text-lg sm:text-xl" style={{ color: '#4c555c' }}>
              Molimo pročitajte ove uvjete prije korišnja naših usluga i web stranice.
            </p>
            <p className="text-sm mt-4" style={{ color: '#8093a0' }}>
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
                    <FileText className="w-5 h-5" style={{ color: '#44687a' }} />
                    <span style={{ color: '#122a3a' }}>Uvod</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p style={{ color: '#4c555c' }}>
                    Dobrodošli na web stranicu {companyInfo.name}. Ovi Uvjeti korištenja ("Uvjeti") 
                    reguliraju vaše korište naše web stranice i usluga. Korištenjem naše stranice, 
                    pristajete biti vezani ovim uvjetima.
                  </p>
                  <p style={{ color: '#4c555c' }}>
                    Ako se ne slažete s bilo kojim dijelom ovih uvjeta, molimo ne koristite našu web stranicu.
                  </p>
                </CardContent>
              </Card>

              {/* Services */}
              <Card>
                <CardHeader>
                  <CardTitle style={{ color: '#122a3a' }}>Opis usluga</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p style={{ color: '#4c555c' }}>{companyInfo.name} pruža sljedeće usluge:</p>
                  <ul style={{ color: '#4c555c' }}>
                    <li>Građevinski inženjering i projektiranje</li>
                    <li>Usluge javne nabave za ponuditelje i naručitelje</li>
                    <li>Zaštita na radu</li>
                    <li>Knjigovodstvene usluge</li>
                    <li>Upravljanje i održavanje zgrada</li>
                    <li>Ostale djelatnosti u skladu s našom dozvolom</li>
                  </ul>
                  
                  <p style={{ color: '#4c555c' }}>
                    Zadržavamo pravo mijenjanja, prekidanja ili ograničavanja bilo koje usluge 
                    u bilo koje vrijeme bez prethodne najave.
                  </p>
                </CardContent>
              </Card>

              {/* User Obligations */}
              <Card>
                <CardHeader>
                  <CardTitle style={{ color: '#122a3a' }}>Obveze korisnika</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p style={{ color: '#4c555c' }}>Korištenjem naših usluga, obvezujete se:</p>
                  <ul style={{ color: '#4c555c' }}>
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
                    <AlertCircle className="w-5 h-5" style={{ color: '#215354' }} />
                    <span style={{ color: '#122a3a' }}>Ograničenja odgovornosti</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <h3 style={{ color: '#122a3a' }}>Ograničenja</h3>
                  <p style={{ color: '#4c555c' }}>
                    Naše usluge pružamo "kakve jesu" bez izričitih ili implicitnih jamstava. 
                    U najvećoj mjeri dozvoljenoj zakonom, odričemo se svih jamstava uključujući:
                  </p>
                  <ul style={{ color: '#4c555c' }}>
                    <li>Jamstva tržišnosti</li>
                    <li>Jamstva prikladnosti za određenu svrhu</li>
                    <li>Jamstva nepovrjede prava</li>
                  </ul>

                  <h3 style={{ color: '#122a3a' }}>Ograničenje štete</h3>
                  <p style={{ color: '#4c555c' }}>
                    Ni u kojem slučaju nećemo biti odgovorni za neizravne, slučajne, posebne 
                    ili kaznene štete, uključujući gubitak profita, podataka ili korišnja.
                  </p>
                </CardContent>
              </Card>

              {/* Intellectual Property */}
              <Card>
                <CardHeader>
                  <CardTitle style={{ color: '#122a3a' }}>Intelektualno vlasništvo</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p style={{ color: '#4c555c' }}>
                    Sav sadržaj web stranice, uključujući tekst, grafike, logotipe, slike i softver, 
                    vlasništvo je {companyInfo.name} ili naših partnera i zaštićen je autorskim pravima 
                    i drugim zakonima o intelektualnom vlasništvu.
                  </p>
                  
                  <h3 style={{ color: '#122a3a' }}>Dozvola korišnja</h3>
                  <p style={{ color: '#4c555c' }}>
                    Dajemo vam ograničenu, neisključivu i neotuđivu licencu za pristup i korište 
                    web stranice u osobne i poslovne svrhe u skladu s ovim uvjetima.
                  </p>
                </CardContent>
              </Card>

              {/* Privacy */}
              <Card>
                <CardHeader>
                  <CardTitle style={{ color: '#122a3a' }}>Privatnost</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p style={{ color: '#4c555c' }}>
                    Vaša privatnost je važna za nas. Molimo pročitajte našu{' '}
                    <a href="/politika-privatnosti" className="hover:underline" style={{ color: '#44687a' }}>
                      Politiku privatnosti
                    </a>{' '}
                    koja objašnjava kako prikupljamo, koristimo i štitimo vaše informacije.
                  </p>
                </CardContent>
              </Card>

              {/* Payment Terms */}
              <Card>
                <CardHeader>
                  <CardTitle style={{ color: '#122a3a' }}>Uvjeti plaćanja</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <h3 style={{ color: '#122a3a' }}>Cijene</h3>
                  <p style={{ color: '#4c555c' }}>
                    Cijene naših usluga navode se u hrvatskim kunama (HRK) ili eurima (EUR) 
                    i mogu se mijenjati bez prethodne najave.
                  </p>
                  
                  <h3 style={{ color: '#122a3a' }}>Plaćanje</h3>
                  <ul style={{ color: '#4c555c' }}>
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
                  <CardTitle style={{ color: '#122a3a' }}>Prekidanje usluga</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p style={{ color: '#4c555c' }}>
                    Bilo koja strana može prekinuti ugovorni odnos uz prethodnu pisanu obavijest 
                    od 30 dana. U slučaju kršenja uvjeta, možemo odmah prekinuti pružanje usluga.
                  </p>
                  
                  <h3 style={{ color: '#122a3a' }}>Posljedice prekidanja</h3>
                  <ul style={{ color: '#4c555c' }}>
                    <li>Obveza plaćanja za već pružene usluge</li>
                    <li>Vraćanje svih poslovnih materijala</li>
                    <li>Prestanak prava korišnja naših resursa</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Governing Law */}
              <Card>
                <CardHeader>
                  <CardTitle style={{ color: '#122a3a' }}>Mjerodavno pravo</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p style={{ color: '#4c555c' }}>
                    Ovi Uvjeti korišnja se tumače i provode u skladu sa zakonima Republike Hrvatske. 
                    Svi sporovi rješavaju se pred nadležnim sudovima u Sisku.
                  </p>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Phone className="w-5 h-5" style={{ color: '#202c52' }} />
                    <span style={{ color: '#122a3a' }}>Kontakt informacije</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p style={{ color: '#4c555c' }}>
                    Za pitanja o ovim Uvjetima korišnja ili našim uslugama, kontaktirajte nas:
                  </p>
                  
                  <div className="not-prose p-4 rounded-lg" style={{ backgroundColor: '#8093a020' }}>
                    <p className="font-semibold" style={{ color: '#122a3a' }}>{companyInfo.name}</p>
                    <p style={{ color: '#4c555c' }}>{companyInfo.address}</p>
                    <p style={{ color: '#4c555c' }}>Email: {companyInfo.email}</p>
                    <p style={{ color: '#4c555c' }}>Telefon: {companyInfo.phone}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Changes */}
              <Card>
                <CardHeader>
                  <CardTitle style={{ color: '#122a3a' }}>Promjene uvjeta</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p style={{ color: '#4c555c' }}>
                    Zadržavamo pravo izmjene ovih Uvjeta korišnja u bilo koje vrijeme. 
                    Promjene stupaju na snagu objavljivanjem na ovoj stranici.
                  </p>
                  <p style={{ color: '#4c555c' }}>
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