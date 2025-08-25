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

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4 sm:mb-6">
              <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Politika privatnosti
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
              Vaša privatnost nam je važna. Ova politika objašnjava kako koristimo vaše podatke.
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
                    {companyInfo.name} ("mi", "naše", "naš") posvećen je zaštiti vaše privatnosti. 
                    Ova Politika privatnosti objašnjava kako prikupljamo, koristimo, otkrivamo i 
                    štitimo vaše informacije kada koristite našu web stranicu i usluge.
                  </p>
                  <p>
                    Korištenjem naše web stranice, pristajete na prikupljanje i korište informacija 
                    u skladu s ovom politikom.
                  </p>
                </CardContent>
              </Card>

              {/* Data Collection */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Eye className="w-5 h-5 text-blue-600" />
                    <span>Koje informacije prikupljamo</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <h3>Osobne informacije</h3>
                  <p>Možemo prikupiti sljedeće osobne informacije:</p>
                  <ul>
                    <li>Ime i prezime</li>
                    <li>Email adresa</li>
                    <li>Broj telefona</li>
                    <li>Adresa tvrtke</li>
                    <li>Informacije o vašem poslu ili projektima</li>
                  </ul>

                  <h3>Automatski prikupljene informacije</h3>
                  <ul>
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
                  <CardTitle>Kako koristimo vaše informacije</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>Koristimo prikupljene informacije u sljedeće svrhe:</p>
                  <ul>
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
                    <Lock className="w-5 h-5 text-blue-600" />
                    <span>Zaštita podataka</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>
                    Koristimo odgovarajuće tehničke i organizacijske mjere za zaštitu vaših 
                    osobnih podataka od neovlaštenog pristupa, korišnja ili otkrivanja:
                  </p>
                  <ul>
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
                  <CardTitle>Cookies i praćenje</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>
                    Naša web stranica koristi cookie-jeve za poboljšanje vašeg iskustva. 
                    Cookie-jevi su male datoteke koje se pohranjuju na vašem uređaju.
                  </p>
                  
                  <h3>Vrste cookie-jeva koje koristimo:</h3>
                  <ul>
                    <li><strong>Neophodni cookie-jevi:</strong> Potrebni za funkcioniranje stranice</li>
                    <li><strong>Analitički cookie-jevi:</strong> Pomažu nam razumjeti kako koristite stranicu</li>
                    <li><strong>Funkcionalni cookie-jevi:</strong> Pamte vaše postavke i preferencije</li>
                  </ul>
                  
                  <p>
                    Možete kontrolirati cookie-jeve kroz postavke vašeg preglednika.
                  </p>
                </CardContent>
              </Card>

              {/* Rights */}
              <Card>
                <CardHeader>
                  <CardTitle>Vaša prava (GDPR)</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>U skladu s GDPR propisima, imate sljedeća prava:</p>
                  <ul>
                    <li><strong>Pravo pristupa:</strong> Možete zatražiti kopiju svojih osobnih podataka</li>
                    <li><strong>Pravo ispravka:</strong> Možete zatražiti ispravku netočnih podataka</li>
                    <li><strong>Pravo brisanja:</strong> Možete zatražiti brisanje svojih podataka</li>
                    <li><strong>Pravo ograničavanja:</strong> Možete ograničiti obradu svojih podataka</li>
                    <li><strong>Pravo prigovora:</strong> Možete se protiviti obradi svojih podataka</li>
                    <li><strong>Pravo prenosivosti:</strong> Možete zatražiti prijenos podataka</li>
                  </ul>
                  
                  <p>
                    Za ostvarivanje svojih prava, kontaktirajte nas na {companyInfo.email}.
                  </p>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card>
                <CardHeader>
                  <CardTitle>Kontakt</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>
                    Ako imate pitanja o ovoj Politici privatnosti ili načinu na koji rukujemo 
                    vašim podacima, molimo kontaktirajte nas:
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
                  <CardTitle>Promjene politike</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>
                    Zadržavamo pravo izmjene ove Politike privatnosti u bilo koje vrijeme. 
                    O značajnim promjenama ćemo vas obavijestiti putem email-a ili putem 
                    obavijesti na našoj web stranici.
                  </p>
                  <p>
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