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
      <section className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200">
                  Osnovano {companyInfo.established}
                </Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                  {companyInfo.name}
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-indigo-700 font-medium">
                  {companyInfo.tagline}
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Pružamo stručne usluge građevinskog inženjeringa, javne nabave, projektiranja i poslovnog savjetovanja u {companyInfo.location}.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link to="/kontakt">
                  <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white group w-full sm:w-auto">
                    Besplatna konzultacija
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/posebne-ponude">
                  <Button size="lg" variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50 w-full sm:w-auto">
                    Posebne ponude
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4 lg:gap-6 pt-6 lg:pt-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-indigo-600">50+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Uspješnih projekata</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-600">8</div>
                  <div className="text-xs sm:text-sm text-gray-600">Glavnih usluga</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-indigo-600">100%</div>
                  <div className="text-xs sm:text-sm text-gray-600">Zadovoljstvo klijenata</div>
                </div>
              </div>
            </div>

            <div className="relative order-first lg:order-last">
              <div className="aspect-square bg-gradient-to-br from-indigo-100 to-purple-200 rounded-2xl lg:rounded-3xl p-6 sm:p-8 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  {[Building2, PenTool, FileText, Briefcase].map((Icon, index) => (
                    <div key={index} className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-xl sm:rounded-2xl shadow-lg flex items-center justify-center">
                      <Icon className={`w-8 h-8 sm:w-10 sm:h-10 ${index % 2 === 0 ? 'text-indigo-600' : 'text-purple-600'}`} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
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
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                O nama
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {companyInfo.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm sm:text-base">Licencirani stručnjaci</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm sm:text-base">Brza realizacija</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm sm:text-base">Povoljne cijene</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm sm:text-base">24/7 podrška</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <Card className="text-center p-4 sm:p-6">
                <Users className="w-10 h-10 sm:w-12 sm:h-12 text-indigo-600 mx-auto mb-3" />
                <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">100+</div>
                <div className="text-xs sm:text-sm text-gray-600">Zadovoljnih klijenata</div>
              </Card>
              <Card className="text-center p-4 sm:p-6">
                <Award className="w-10 h-10 sm:w-12 sm:h-12 text-purple-600 mx-auto mb-3" />
                <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">15+</div>
                <div className="text-xs sm:text-sm text-gray-600">Godina iskustva tima</div>
              </Card>
              <Card className="text-center p-4 sm:p-6">
                <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 text-indigo-600 mx-auto mb-3" />
                <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">95%</div>
                <div className="text-xs sm:text-sm text-gray-600">Uspješnih projekata</div>
              </Card>
              <Card className="text-center p-4 sm:p-6">
                <Building2 className="w-10 h-10 sm:w-12 sm:h-12 text-purple-600 mx-auto mb-3" />
                <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">200+</div>
                <div className="text-xs sm:text-sm text-gray-600">Završenih projekata</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Naše usluge
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Nudimo sveobuhvatan spektar profesionalnih usluga za sve vaše poslovne potrebe
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              const isIndigo = index % 2 === 0;
              return (
                <Link key={service.id} to={`/${service.id}`}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 group border-0 shadow-md hover:shadow-indigo-100">
                    <CardHeader className="pb-3">
                      <div className={`w-12 h-12 ${isIndigo ? 'bg-indigo-100' : 'bg-purple-100'} rounded-lg flex items-center justify-center mb-3 ${isIndigo ? 'group-hover:bg-indigo-200' : 'group-hover:bg-purple-200'} transition-colors`}>
                        <Icon className={`w-6 h-6 ${isIndigo ? 'text-indigo-600' : 'text-purple-600'}`} />
                      </div>
                      <CardTitle className={`text-base sm:text-lg font-semibold text-gray-900 ${isIndigo ? 'group-hover:text-indigo-600' : 'group-hover:text-purple-600'} transition-colors`}>
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-gray-600 mb-4 text-sm">
                        {service.description}
                      </CardDescription>
                      <div className={`flex items-center ${isIndigo ? 'text-indigo-600 group-hover:text-indigo-700' : 'text-purple-600 group-hover:text-purple-700'} text-sm font-medium`}>
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Posebne ponude
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Otkrijte naše pakete usluga prilagođene različitim potrebama
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {specialOffers.map((offer, index) => (
              <Card key={offer.id} className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className={`bg-gradient-to-br ${index === 0 ? 'from-indigo-600 to-indigo-700' : index === 1 ? 'from-purple-600 to-purple-700' : 'from-indigo-600 to-purple-600'} text-white pb-6 sm:pb-8`}>
                  <CardTitle className="text-xl sm:text-2xl font-bold mb-2">{offer.title}</CardTitle>
                  <CardDescription className={`${index === 0 ? 'text-indigo-100' : index === 1 ? 'text-purple-100' : 'text-indigo-100'}`}>
                    {offer.description}
                  </CardDescription>
                  <div className="text-lg sm:text-xl font-semibold mt-4">{offer.price}</div>
                </CardHeader>
                <CardContent className="p-4 sm:p-6">
                  <ul className="space-y-2 sm:space-y-3">
                    {offer.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className={`w-5 h-5 ${index === 0 ? 'text-indigo-500' : index === 1 ? 'text-purple-500' : 'text-indigo-500'} flex-shrink-0`} />
                        <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/kontakt" className="block mt-4 sm:mt-6">
                    <Button className={`w-full ${index === 0 ? 'bg-indigo-600 hover:bg-indigo-700' : index === 1 ? 'bg-purple-600 hover:bg-purple-700' : 'bg-indigo-600 hover:bg-indigo-700'}`}>
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
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              Spremni ste za početak?
            </h2>
            <p className="text-lg sm:text-xl text-indigo-100 mb-6 sm:mb-8">
              Kontaktirajte nas danas za besplatnu konzultaciju i saznajte kako možemo pomoći vašem projektu
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link to="/kontakt">
                <Button size="lg" variant="secondary" className="bg-white text-indigo-600 hover:bg-gray-100 w-full sm:w-auto">
                  Kontaktirajte nas
                </Button>
              </Link>
              <Link to="/posebne-ponude">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600 w-full sm:w-auto">
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