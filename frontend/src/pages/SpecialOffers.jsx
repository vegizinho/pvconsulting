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

      <div className="min-h-screen" style={{ backgroundColor: '#f8f9fa' }}>
        {/* Hero Section */}
        <div className="py-12 sm:py-16" style={{ background: 'linear-gradient(135deg, #8093a0 0%, white 50%, #8093a0 100%)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4 sm:mb-6">
              <Gift className="w-8 h-8 sm:w-10 sm:h-10" style={{ color: '#44687a' }} />
              <Badge variant="secondary" className="text-white text-base sm:text-lg px-3 sm:px-4 py-2" style={{ backgroundColor: '#44687a' }}>
                Posebne ponude
              </Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6" style={{ color: '#122a3a' }}>
              Naši paketi usluga
            </h1>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto" style={{ color: '#4c555c' }}>
              Odabrali smo najbolje kombinacije naših usluga kako bismo vam pružili 
              maksimalnu vrijednost po najpovoljnijim cijenama.
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: '#122a3a' }}>
                Zašto odabrati naše pakete?
              </h2>
              <p className="text-lg sm:text-xl max-w-3xl mx-auto" style={{ color: '#4c555c' }}>
                Svaki paket je pažljivo dizajniran za specifične potrebe i omogućava značajne uštede
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#44687a20' }}>
                  <Star className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: '#44687a' }} />
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2" style={{ color: '#122a3a' }}>Višestruke uštede</h3>
                <p className="text-sm sm:text-base" style={{ color: '#4c555c' }}>Do 30% uštede u odnosu na pojedinačne usluge</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#21535420' }}>
                  <Clock className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: '#215354' }} />
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2" style={{ color: '#122a3a' }}>Brža realizacija</h3>
                <p className="text-sm sm:text-base" style={{ color: '#4c555c' }}>Koordinirane usluge za bržu završetak projekta</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#202c5220' }}>
                  <Users className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: '#202c52' }} />
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2" style={{ color: '#122a3a' }}>Jednocontaktni pristup</h3>
                <p className="text-sm sm:text-base" style={{ color: '#4c555c' }}>Jedan kontakt za sve vaše potrebe</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#29304220' }}>
                  <Shield className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: '#293042' }} />
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2" style={{ color: '#122a3a' }}>Garancija kvalitete</h3>
                <p className="text-sm sm:text-base" style={{ color: '#4c555c' }}>Potpuna garancija na sve usluge u paketu</p>
              </div>
            </div>
          </div>
        </div>

        {/* Offers Section */}
        <div className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {specialOffers.map((offer, index) => {
                const colors = [
                  { primary: '#44687a', secondary: '#215354' },
                  { primary: '#202c52', secondary: '#293042' },
                  { primary: '#44687a', secondary: '#122a3a' }
                ];
                const colorScheme = colors[index];
                
                return (
                  <Card key={offer.id} className={`relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                    index === 1 ? 'border-2 transform scale-105' : ''
                  }`} style={index === 1 ? { borderColor: colorScheme.primary } : {}}>
                    {index === 1 && (
                      <div className="absolute top-0 left-0 right-0 text-white text-center py-2 text-sm font-medium" style={{ backgroundColor: colorScheme.primary }}>
                        NAJPOPULARNIJI
                      </div>
                    )}
                    <CardHeader 
                      className="text-white pb-6 sm:pb-8 pt-6 sm:pt-8" 
                      style={{ background: `linear-gradient(135deg, ${colorScheme.primary} 0%, ${colorScheme.secondary} 100%)` }}>
                      {index === 1 && <div className="h-6"></div>}
                      <div className="flex items-center justify-between mb-4">
                        <CardTitle className="text-xl sm:text-2xl font-bold">{offer.title}</CardTitle>
                        {index === 0 && <Badge className="text-xs sm:text-sm text-white" style={{ backgroundColor: '#215354' }}>NOVO</Badge>}
                        {index === 1 && <Star className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />}
                        {index === 2 && <Badge className="text-xs sm:text-sm" style={{ backgroundColor: '#8093a0' }}>VIP</Badge>}
                      </div>
                      <CardDescription className="text-gray-100 text-base sm:text-lg">
                        {offer.description}
                      </CardDescription>
                      <div className="text-xl sm:text-2xl font-bold mt-4">{offer.price}</div>
                    </CardHeader>
                    <CardContent className="p-6 sm:p-8">
                      <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                        {offer.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: colorScheme.primary }} />
                            <span className="text-sm sm:text-base" style={{ color: '#4b4e4f' }}>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="space-y-3">
                        <Link to="/kontakt" className="block">
                          <Button className="w-full text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: colorScheme.primary }}>
                            Zatražite ponudu
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                        <Button variant="outline" className="w-full transition-all" 
                          style={{ borderColor: colorScheme.secondary, color: colorScheme.secondary }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = colorScheme.secondary;
                            e.target.style.color = 'white';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'transparent';
                            e.target.style.color = colorScheme.secondary;
                          }}
                          asChild>
                          <a href="tel:+385441234456">
                            <Phone className="w-4 h-4 mr-2" />
                            Pozovite nas
                          </a>
                        </Button>
                      </div>

                      <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 text-center" style={{ borderTop: '1px solid #8093a020' }}>
                        <p className="text-xs sm:text-sm mb-2" style={{ color: '#8093a0' }}>Besplatne konultacije uključene</p>
                        <div className="flex items-center justify-center space-x-1" style={{ color: '#8093a0' }}>
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-12 sm:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: '#122a3a' }}>
                Često postavljana pitanja
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <Card>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="font-semibold text-base sm:text-lg mb-2" style={{ color: '#122a3a' }}>
                    Mogu li kombinirati usluge iz različitih paketa?
                  </h3>
                  <p className="text-sm sm:text-base" style={{ color: '#4c555c' }}>
                    Da, možete prilagoditi paket prema vašim specifičnim potrebama. Kontaktirajte nas 
                    za personaliziranu ponudu koja najbolje odgovara vašem projektu.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="font-semibold text-base sm:text-lg mb-2" style={{ color: '#122a3a' }}>
                    Koliko traje realizacija paketa?
                  </h3>
                  <p className="text-sm sm:text-base" style={{ color: '#4c555c' }}>
                    Vremenske okvire ovise o složenosti projekta, ali paketi omogućavaju do 40% kraće 
                    vrijeme realizacije zbog koordinirane provedbe usluga.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="font-semibold text-base sm:text-lg mb-2" style={{ color: '#122a3a' }}>
                    Postoje li dodatni troškovi?
                  </h3>
                  <p className="text-sm sm:text-base" style={{ color: '#4c555c' }}>
                    Ne, sve navedene usluge su uključene u cijenu paketa. Jedini dodatni troškovi mogu 
                    biti službene naknade i dozvole koje se plaćaju institucijama.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-12 sm:py-16" style={{ background: 'linear-gradient(135deg, #44687a 0%, #215354 50%, #202c52 100%)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Spremni za početak?
            </h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto" style={{ color: '#8093a0' }}>
              Kontaktirajte nas danas i saznajte koji paket najbolje odgovara vašim potrebama
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link to="/kontakt">
                <Button size="lg" className="bg-white hover:opacity-90 w-full sm:w-auto transition-opacity" style={{ color: '#44687a' }}>
                  Zatražite besplatne konultacije
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white w-full sm:w-auto transition-all" 
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'white';
                  e.target.style.color = '#44687a';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = 'white';
                }}
                asChild>
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