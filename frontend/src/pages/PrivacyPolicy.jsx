import React from 'react';
import { companyInfo } from '../data/mock';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import SEO from '../components/SEO';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
  const privacyJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Politika privatnosti - PV Consulting d.o.o.",
    "description": "Politika privatnosti PV Consulting d.o.o. - kako koristimo i štitimo vaše osobne podatke.",
    "dateModified": "2025-02-01"
  };

  return (
    <>
      <SEO 
        title="Politika privatnosti - PV Consulting d.o.o."
        description="Politika privatnosti PV Consulting d.o.o. Saznajte kako koristimo i štitimo vaše osobne podatke u skladu s GDPR propisima."
        keywords="politika privatnosti, GDPR, osobni podaci, PV Consulting, zaštita podataka"
        canonical="/politika-privatnosti"
        jsonLd={privacyJsonLd}
      />

      <div className="min-h-screen" style={{ backgroundColor: '#f8f9fa' }}>
        {/* Hero Section */}
        <div className="py-12 sm:py-16" style={{ background: 'linear-gradient(135deg, #8093a0 0%, white 50%, #8093a0 100%)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4 sm:mb-6">
              <Shield className="w-8 h-8 sm:w-10 sm:h-10" style={{ color: '#44687a' }} />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6" style={{ color: '#122a3a' }}>
              Politika privatnosti
            </h1>
            <p className="text-lg sm:text-xl" style={{ color: '#4c555c' }}>
              Vaša privatnost nam je važna. Ova politika objašnjava kako koristimo vaše podatke.
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
                    {companyInfo.name} ("mi", "naše", "naš") posvećen je zaštiti vaše privatnosti. 
                    Ova Politika privatnosti objašnjava kako prikupljamo, koristimo, otkrivamo i 
                    štitimo vaše informacije kada koristite našu web stranicu i usluge.
                  </p>
                  <p style={{ color: '#4c555c' }}>
                    Korištenjem naše web stranice, pristajete na prikupljanje i korište informacija 
                    u skladu s ovom politikom.
                  </p>
                </CardContent>
              </Card>

              {/* Data Collection */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Eye className="w-5 h-5" style={{ color: '#215354' }} />
                    <span style={{ color: '#122a3a' }}>Koje informacije prikupljamo</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <h3 style={{ color: '#122a3a' }}>Osobne informacije</h3>
                  <p style={{ color: '#4c555c' }}>Možemo prikupiti sljedeće osobne informacije:</p>
                  <ul style={{ color: '#4c555c' }}>
                    <li>Ime i prezime</li>
                    <li>Email adresa</li>
                    <li>Broj telefona</li>
                    <li>Adresa tvrtke</li>
                    <li>Informacije o vašem poslu ili projektima</li>
                  </ul>

                  <h3 style={{ color: '#122a3a' }}>Automatski prikupljene informacije</h3>
                  <ul style={{ color: '#4c555c' }}>
                    <li>IP adresa</li>
                    <li>Tip preglednika</li>
                    <li>Stranice koje ste posjetili</li>
                    <li>Vrijeme provedeno na stranici</li>
                    <li>Cookie podaci</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Data Usage */}
              <Card>
                <CardHeader>
                  <CardTitle style={{ color: '#122a3a' }}>Kako koristimo vaše informacije</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p style={{ color: '#4c555c' }}>Koristimo prikupljene informacije u sljedeće svrhe:</p>
                  <ul style={{ color: '#4c555c' }}>
                    <li>Pružanje i poboljšanje naših usluga</li>
                    <li>Komunikacija s vama o vašim upitima</li>
                    <li>Slanje informacija o našim uslugama (samo uz vašu suglasnost)</li>
                    <li>Analiza korišnja web stranice za poboljšanja</li>
                    <li>Sprječavanje prijevara i zloupotebe</li>
                    <li>Poštovanje zakonskih obveza</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Data Protection */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Lock className="w-5 h-5" style={{ color: '#202c52' }} />
                    <span style={{ color: '#122a3a' }}>Zaštita podataka</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p style={{ color: '#4c555c' }}>
                    Koristimo odgovarajuće tehničke i organizacijske mjere za zaštitu vaših 
                    osobnih podataka od neovlaštenog pristupa, korišnja ili otkrivanja:
                  </p>
                  <ul style={{ color: '#4c555c' }}>
                    <li>SSL enkripcija za sve podatke u prijenosu</li>
                    <li>Sigurno pohranjivanje podataka na zaštićenim serverima</li>
                    <li>Redovite sigurnosne procjene</li>
                    <li>Ograničen pristup podacima samo ovlaštenom osoblju</li>
                    <li>Redovite sigurnosne kopije</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Cookies */}
              <Card>
                <CardHeader>
                  <CardTitle style={{ color: '#122a3a' }}>Cookies i praćenje</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p style={{ color: '#4c555c' }}>
                    Naša web stranica koristi cookie-jeve za poboljšanje vašeg iskustva. 
                    Cookie-jevi su male datoteke koje se pohranjuju na vašem uređaju.
                  </p>
                  
                  <h3 style={{ color: '#122a3a' }}>Vrste cookie-jeva koje koristimo:</h3>
                  <ul style={{ color: '#4c555c' }}>
                    <li><strong>Neophodni cookie-jevi:</strong> Potrebni za funkcioniranje stranice</li>
                    <li><strong>Analitički cookie-jevi:</strong> Pomažu nam razumjeti kako koristite stranicu</li>
                    <li><strong>Funkcionalni cookie-jevi:</strong> Pamte vaše postavke i preferencije</li>
                  </ul>
                  
                  <p style={{ color: '#4c555c' }}>
                    Možete kontrolirati cookie-jeve kroz postavke vašeg preglednika.
                  </p>
                </CardContent>
              </Card>

              {/* Rights */}
              <Card>
                <CardHeader>
                  <CardTitle style={{ color: '#122a3a' }}>Vaša prava (GDPR)</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p style={{ color: '#4c555c' }}>U skladu s GDPR propisima, imate sljedeća prava:</p>
                  <ul style={{ color: '#4c555c' }}>
                    <li><strong>Pravo pristupa:</strong> Možete zatražiti kopiju svojih osobnih podataka</li>
                    <li><strong>Pravo ispravka:</strong> Možete zatražiti ispravku netočnih podataka</li>
                    <li><strong>Pravo brisanja:</strong> Možete zatražiti brisanje svojih podataka</li>
                    <li><strong>Pravo ograničavanja:</strong> Možete ograničiti obradu svojih podataka</li>
                    <li><strong>Pravo prigovora:</strong> Možete se protiviti obradi svojih podataka</li>
                    <li><strong>Pravo prenosivosti:</strong> Možete zatražiti prijenos podataka</li>
                  </ul>
                  
                  <p style={{ color: '#4c555c' }}>
                    Za ostvarivanje svojih prava, kontaktirajte nas na {companyInfo.email}.
                  </p>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card>
                <CardHeader>
                  <CardTitle style={{ color: '#122a3a' }}>Kontakt</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p style={{ color: '#4c555c' }}>
                    Ako imate pitanja o ovoj Politici privatnosti ili načinu na koji rukujemo 
                    vašim podacima, molimo kontaktirajte nas:
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
                  <CardTitle style={{ color: '#122a3a' }}>Promjene politike</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p style={{ color: '#4c555c' }}>
                    Zadržavamo pravo izmjene ove Politike privatnosti u bilo koje vrijeme. 
                    O značajnim promjenama ćemo vas obavijestiti putem email-a ili putem 
                    obavijesti na našoj web stranici.
                  </p>
                  <p style={{ color: '#4c555c' }}>
                    Preporučujemo da povremeno provjerite ovu stranicu za najnovije informacije 
                    o našim praksama privatnosti.
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

export default PrivacyPolicy;