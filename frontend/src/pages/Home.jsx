import React from 'react';
import { Link } from 'react-router-dom';
import { companyInfo, services, specialOffers } from '../data/mock';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import SEO from '../components/SEO';
import { 
  Building2, 
  PenTool, 
  FileText, 
  Briefcase, 
  Shield, 
  Calculator, 
  Home as HomeIcon, 
  Settings,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Award,
  TrendingUp
} from 'lucide-react';

const iconMap = {
  Building2,
  PenTool,
  FileText,
  Briefcase,
  Shield,
  Calculator,
  Home: HomeIcon,
  Settings
};

const colorPalette = [
  '#44687a', '#122a3a', '#293042', '#8093a0', 
  '#4c555c', '#202c52', '#000a26', '#4b4e4f', '#215354'
];

const Home = () => {
  const homeJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PV Consulting d.o.o.",
    "description": companyInfo.description,
    "url": "https://pvconsulting.hr",
    "logo": "https://pvconsulting.hr/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ulica Hrvatske bratske zajednice 1",
      "addressLocality": "Sisak",
      "postalCode": "44000",
      "addressCountry": "HR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+385-44-123-456",
      "contactType": "customer service",
      "email": "info@pvconsulting.hr"
    },
    "foundingDate": "2025-02",
    "service": services.map(service => ({
      "@type": "Service",
      "name": service.title,
      "description": service.description
    }))
  };

  return (
    <>
      <SEO 
        title="PV Consulting d.o.o. - Stručne usluge građevinskog inženjeringa i javne nabave"
        description="PV Consulting iz Siska pruža profesionalne usluge građevinskog inženjeringa, javne nabave, projektiranja, zaštite na radu i knjigovodstva. Kontaktirajte nas za besplatnu konzultaciju."
        keywords="PV Consulting, građevinski inženjering, javna nabava, projektiranje, Sisak, Hrvatska, zaštita na radu, knjigovodstvo"
        canonical="/"
        jsonLd={homeJsonLd}
      />

      {/* Hero Section */}
      <section className="relative bg-white py-12 sm:py-16 lg:py-20" style={{ background: 'linear-gradient(135deg, #8093a0 0%, white 50%, #8093a0 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-white" style={{ backgroundColor: '#44687a' }}>
                  Osnovano {companyInfo.established}
                </Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight" style={{ color: '#122a3a' }}>
                  {companyInfo.name}
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl font-medium" style={{ color: '#44687a' }}>
                  {companyInfo.tagline}
                </p>
                <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#4c555c' }}>
                  Pružamo stručne usluge građevinskog inženjeringa, javne nabave i poslovnog savjetovanja u {companyInfo.location}.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link to="/kontakt">
                  <Button 
                    size="lg" 
                    className="text-white group w-full sm:w-auto hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: '#44687a' }}
                  >
                    Besplatne konultacije
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/posebne-ponude">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full sm:w-auto hover:text-white hover:opacity-90 transition-all"
                    style={{ borderColor: '#215354', color: '#215354' }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#215354';
                      e.target.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = '#215354';
                    }}
                  >
                    Posebne ponude
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4 lg:gap-6 pt-6 lg:pt-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold" style={{ color: '#44687a' }}>100+</div>
                  <div className="text-xs sm:text-sm" style={{ color: '#4c555c' }}>Uspješnih projekata</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold" style={{ color: '#215354' }}>8</div>
                  <div className="text-xs sm:text-sm" style={{ color: '#4c555c' }}>Glavnih usluga</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold" style={{ color: '#202c52' }}>100%</div>
                  <div className="text-xs sm:text-sm" style={{ color: '#4c555c' }}>Zadovoljstvo klijenata</div>
                </div>
              </div>
            </div>

            <div className="relative order-first lg:order-last">
              <div className="aspect-square rounded-2xl lg:rounded-3xl p-6 sm:p-8 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #8093a0 0%, #293042 100%)' }}>
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  {[Building2, PenTool, FileText, Briefcase].map((Icon, index) => (
                    <div key={index} className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-xl sm:rounded-2xl shadow-lg flex items-center justify-center">
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10" style={{ color: colorPalette[index] }} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 rounded-full flex items-center justify-center shadow-xl" style={{ background: 'linear-gradient(135deg, #44687a 0%, #215354 100%)' }}>
                <Star className="w-8 h-8 sm:w-12 sm:h-12 text-white fill-current" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold" style={{ color: '#122a3a' }}>
                O nama
              </h2>
              <p className="leading-relaxed text-sm sm:text-base" style={{ color: '#4c555c' }}>
                {companyInfo.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#44687a' }} />
                  <span className="text-sm sm:text-base" style={{ color: '#4b4e4f' }}>Licencirani stručnjaci</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#215354' }} />
                  <span className="text-sm sm:text-base" style={{ color: '#4b4e4f' }}>Brza realizacija</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#202c52' }} />
                  <span className="text-sm sm:text-base" style={{ color: '#4b4e4f' }}>Povoljne cijene</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#293042' }} />
                  <span className="text-sm sm:text-base" style={{ color: '#4b4e4f' }}>24/7 podrška</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <Card className="text-center p-4 sm:p-6">
                <Users className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3" style={{ color: '#44687a' }} />
                <div className="text-xl sm:text-2xl font-bold mb-1" style={{ color: '#122a3a' }}>20+</div>
                <div className="text-xs sm:text-sm" style={{ color: '#4c555c' }}>Zadovoljnih klijenata</div>
              </Card>
              <Card className="text-center p-4 sm:p-6">
                <Award className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3" style={{ color: '#215354' }} />
                <div className="text-xl sm:text-2xl font-bold mb-1" style={{ color: '#122a3a' }}>15+</div>
                <div className="text-xs sm:text-sm" style={{ color: '#4c555c' }}>Godina iskustva tima</div>
              </Card>
              <Card className="text-center p-4 sm:p-6">
                <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3" style={{ color: '#202c52' }} />
                <div className="text-xl sm:text-2xl font-bold mb-1" style={{ color: '#122a3a' }}>95%</div>
                <div className="text-xs sm:text-sm" style={{ color: '#4c555c' }}>Uspješnih projekata</div>
              </Card>
              <Card className="text-center p-4 sm:p-6">
                <Building2 className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3" style={{ color: '#293042' }} />
                <div className="text-xl sm:text-2xl font-bold mb-1" style={{ color: '#122a3a' }}>200+</div>
                <div className="text-xs sm:text-sm" style={{ color: '#4c555c' }}>Završenih projekata</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#122a3a' }}>
              Naše usluge
            </h2>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto" style={{ color: '#4c555c' }}>
              Nudimo sveobuhvatan spektar profesionalnih usluga za sve vaše poslovne potrebe
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              const bgColor = colorPalette[index % colorPalette.length];
              const lightBg = `${bgColor}20`;
              return (
                <Link key={service.id} to={`/${service.id}`}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 group border-0 shadow-md bg-white">
                    <CardHeader className="pb-3">
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center mb-3 group-hover:opacity-80 transition-opacity"
                        style={{ backgroundColor: lightBg }}
                      >
                        <Icon className="w-6 h-6" style={{ color: bgColor }} />
                      </div>
                      <CardTitle className="text-base sm:text-lg font-semibold transition-colors" style={{ color: '#122a3a' }}>
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="mb-4 text-sm" style={{ color: '#4c555c' }}>
                        {service.description}
                      </CardDescription>
                      <div className="flex items-center text-sm font-medium" style={{ color: bgColor }}>
                        Saznajte više
                        <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#122a3a' }}>
              Posebne ponude
            </h2>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto" style={{ color: '#4c555c' }}>
              Otkrijte naše pakete usluga prilagođene različitim potrebama
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {specialOffers.map((offer, index) => (
              <Card key={offer.id} className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-white pb-6 sm:pb-8" style={{ background: `linear-gradient(135deg, ${colorPalette[index * 2]} 0%, ${colorPalette[index * 2 + 1]} 100%)` }}>
                  <CardTitle className="text-xl sm:text-2xl font-bold mb-2">{offer.title}</CardTitle>
                  <CardDescription className="text-gray-100">
                    {offer.description}
                  </CardDescription>
                  <div className="text-lg sm:text-xl font-semibold mt-4">{offer.price}</div>
                </CardHeader>
                <CardContent className="p-4 sm:p-6">
                  <ul className="space-y-2 sm:space-y-3">
                    {offer.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: colorPalette[index * 2] }} />
                        <span className="text-sm sm:text-base" style={{ color: '#4b4e4f' }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/kontakt" className="block mt-4 sm:mt-6">
                    <Button 
                      className="w-full text-white hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: colorPalette[index * 2] }}
                    >
                      Zatražite ponudu
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20" style={{ background: 'linear-gradient(135deg, #44687a 0%, #215354 50%, #202c52 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              Spremni ste za početak?
            </h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8" style={{ color: '#8093a0' }}>
              Kontaktirajte nas danas za besplatne konultacije i saznajte kako možemo pomoći vašem projektu
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link to="/kontakt">
                <Button size="lg" className="bg-white hover:opacity-90 w-full sm:w-auto transition-opacity" style={{ color: '#44687a' }}>
                  Kontaktirajte nas
                </Button>
              </Link>
              <Link to="/posebne-ponude">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white w-full sm:w-auto transition-all"
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'white';
                    e.target.style.color = '#44687a';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = 'white';
                  }}
                >
                  Pogledajte ponude
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;