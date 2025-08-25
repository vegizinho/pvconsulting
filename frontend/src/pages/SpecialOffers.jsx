import React from 'react';
import { Link } from 'react-router-dom';
import { specialOffers } from '../data/mock';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import SEO from '../components/SEO';
import { 
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
  Gift,
  Clock,
  Users,
  Shield
} from 'lucide-react';

const SpecialOffers = () => {
  const offersJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Posebne ponude - PV Consulting d.o.o.",
    "description": "Otkrijte naše posebne ponude za građevinski inženjering, javnu nabavu i druge usluge. Povoljni paketi za mala poduzeća.",
    "offers": specialOffers.map(offer => ({
      "@type": "Offer",
      "name": offer.title,
      "description": offer.description,
      "price": offer.price,
      "priceCurrency": "HRK",
      "seller": {
        "@type": "Organization",
        "name": "PV Consulting d.o.o."
      }
    }))
  };

  return (
    <>
      <SEO 
        title="Posebne ponude - PV Consulting d.o.o."
        description="Otkrijte naše posebne ponude i pakete usluga za građevinski inženjering, javnu nabavu i projektiranje. Povoljne cijene za mala poduzeća u Sisku."
        keywords="posebne ponude, paketi usluga, PV Consulting, građevinski inženjering, javna nabava, Sisak, popusti"
        canonical="/posebne-ponude"
        jsonLd={offersJsonLd}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4 sm:mb-6">
              <Gift className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
              <Badge variant="secondary" className="bg-green-100 text-green-700 text-base sm:text-lg px-3 sm:px-4 py-2">
                Posebne ponude
              </Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Naši paketi usluga
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Odabrali smo najbolje kombinacije naših usluga kako bismo vam pružili 
              maksimalnu vrijednost po najpovoljnijim cijenama.
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Zašto odabrati naše pakete?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Svaki paket je pažljivo dizajniran za specifične potrebe i omogućava značajne uštede
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Višestruke uštede</h3>
                <p className="text-gray-600 text-sm sm:text-base">Do 30% uštede u odnosu na pojedinačne usluge</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Brža realizacija</h3>
                <p className="text-gray-600 text-sm sm:text-base">Koordinirane usluge za bržu završetak projekta</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Jednozatni pristup</h3>
                <p className="text-gray-600 text-sm sm:text-base">Jedan kontakt za sve vaše potrebe</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Garancija kvalitete</h3>
                <p className="text-gray-600 text-sm sm:text-base">Potpuna garancija na sve usluge u paketu</p>
              </div>
            </div>
          </div>
        </div>

        {/* Offers Section */}
        <div className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {specialOffers.map((offer, index) => (
                <Card key={offer.id} className={`relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                  index === 1 ? 'border-2 border-green-500 transform scale-105' : ''
                }`}>
                  {index === 1 && (
                    <div className="absolute top-0 left-0 right-0 bg-green-500 text-white text-center py-2 text-sm font-medium">
                      NAJPOPULARNIJI
                    </div>
                  )}
                  <CardHeader className="bg-gradient-to-br from-green-600 to-green-700 text-white pb-6 sm:pb-8 pt-6 sm:pt-8">
                    {index === 1 && <div className="h-6"></div>}
                    <div className="flex items-center justify-between mb-4">
                      <CardTitle className="text-xl sm:text-2xl font-bold">{offer.title}</CardTitle>
                      {index === 0 && <Badge className="bg-green-500 text-xs sm:text-sm">NOVO</Badge>}
                      {index === 1 && <Star className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />}
                      {index === 2 && <Badge className="bg-orange-500 text-xs sm:text-sm">VIP</Badge>}
                    </div>
                    <CardDescription className="text-green-100 text-base sm:text-lg">
                      {offer.description}
                    </CardDescription>
                    <div className="text-xl sm:text-2xl font-bold mt-4">{offer.price}</div>
                  </CardHeader>
                  <CardContent className="p-6 sm:p-8">
                    <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                      {offer.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="space-y-3">
                      <Link to="/kontakt" className="block">
                        <Button className={`w-full ${
                          index === 1 
                            ? 'bg-green-600 hover:bg-green-700' 
                            : 'bg-gray-800 hover:bg-gray-900'
                        }`}>
                          Zatražite ponudu
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                      <Button variant="outline" className="w-full" asChild>
                        <a href="tel:+385441234456">
                          <Phone className="w-4 h-4 mr-2" />
                          Pozovite nas
                        </a>
                      </Button>
                    </div>

                    <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t text-center">
                      <p className="text-xs sm:text-sm text-gray-500 mb-2">Besplatna konzultacija uključena</p>
                      <div className="flex items-center justify-center space-x-1 text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-12 sm:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Često postavljana pitanja
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <Card>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-2">
                    Mogu li kombinirati usluge iz različitih paketa?
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Da, možete prilagoditi paket prema vašim specifičnim potrebama. Kontaktirajte nas 
                    za personaliziranu ponudu koja najbolje odgovara vašem projektu.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-2">
                    Koliko traje realizacija paketa?
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Vremenske okvire ovise o složenosti projekta, ali paketi omogućavaju do 40% kraće 
                    vrijeme realizacije zbog koordinirane provedbe usluga.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-2">
                    Postoje li dodatni troškovi?
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Ne, sve navedene usluge su uključene u cijenu paketa. Jedini dodatni troškovi mogu 
                    biti službene naknade i dozvole koje se plaćaju institucijama.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-green-600 to-green-800 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Spremni za početak?
            </h2>
            <p className="text-lg sm:text-xl text-green-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Kontaktirajte nas danas i saznajte koji paket najbolje odgovara vašim potrebama
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link to="/kontakt">
                <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100 w-full sm:w-auto">
                  Zatražite besplatnu konzultaciju
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 w-full sm:w-auto" asChild>
                <a href="mailto:info@pvconsulting.hr">
                  <Mail className="w-4 h-4 mr-2" />
                  Pošaljite email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialOffers;