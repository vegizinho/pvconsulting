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
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                  Osnovano {companyInfo.established}
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  {companyInfo.name}
                </h1>
                <p className="text-xl lg:text-2xl text-blue-700 font-medium">
                  {companyInfo.tagline}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Pružamo stručne usluge građevinskog inženjeringa, javne nabave, projektiranja i poslovnog savjetovanja u {companyInfo.location}.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/kontakt">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white group">
                    Besplatna konzultacija
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/posebne-ponude">
                  <Button size="lg" variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                    Posebne ponude
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600">Uspješnih projekata</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">8</div>
                  <div className="text-sm text-gray-600">Glavnih usluga</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">100%</div>
                  <div className="text-sm text-gray-600">Zadovoljstvo klijenata</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-200 rounded-3xl p-8 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-6">
                  {[Building2, PenTool, FileText, Briefcase].map((Icon, index) => (
                    <div key={index} className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                      <Icon className="w-10 h-10 text-blue-600" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center shadow-xl">
                <Star className="w-12 h-12 text-white fill-current" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                O nama
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {companyInfo.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Licencirani stručnjaci</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Brza realizacija</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Povoljne cijene</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">24/7 podrška</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center p-6">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-1">100+</div>
                <div className="text-sm text-gray-600">Zadovoljnih klijenata</div>
              </Card>
              <Card className="text-center p-6">
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-1">15+</div>
                <div className="text-sm text-gray-600">Godina iskustva tima</div>
              </Card>
              <Card className="text-center p-6">
                <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-1">95%</div>
                <div className="text-sm text-gray-600">Uspješnih projekata</div>
              </Card>
              <Card className="text-center p-6">
                <Building2 className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-1">200+</div>
                <div className="text-sm text-gray-600">Završenih projekata</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Naše usluge
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nudimo sveobuhvatan spektar profesionalnih usluga za sve vaše poslovne potrebe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <Link key={service.id} to={`/${service.id}`}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 group border-0 shadow-md">
                    <CardHeader className="pb-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-200 transition-colors">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-gray-600 mb-4">
                        {service.description}
                      </CardDescription>
                      <div className="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700">
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
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Posebne ponude
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Otkrijte naše pakete usluga prilagođene različitim potrebama
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialOffers.map((offer) => (
              <Card key={offer.id} className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="bg-gradient-to-br from-blue-600 to-blue-700 text-white pb-8">
                  <CardTitle className="text-2xl font-bold mb-2">{offer.title}</CardTitle>
                  <CardDescription className="text-blue-100">
                    {offer.description}
                  </CardDescription>
                  <div className="text-xl font-semibold mt-4">{offer.price}</div>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {offer.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/kontakt" className="block mt-6">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
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
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Spremni ste za početak?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Kontaktirajte nas danas za besplatnu konzultaciju i saznajte kako možemo pomoći vašem projektu
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/kontakt">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                  Kontaktirajte nas
                </Button>
              </Link>
              <Link to="/posebne-ponude">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
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