import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { services } from '../data/mock';
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
  ArrowLeft,
  CheckCircle,
  Phone,
  Mail
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

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Usluga nije pronađena</h1>
          <Link to="/">
            <Button>Vrati se na početnu</Button>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[service.icon];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "PV Consulting d.o.o.",
      "url": "https://pvconsulting.hr"
    },
    "serviceType": service.title,
    "areaServed": "Sisak, Hrvatska"
  };

  return (
    <>
      <SEO 
        title={`${service.title} - PV Consulting d.o.o.`}
        description={`${service.description} Profesionalne usluge ${service.title.toLowerCase()} u Sisku. Kontaktirajte PV Consulting za kvalitetnu uslugu.`}
        keywords={`${service.title}, ${service.title.toLowerCase()}, PV Consulting, Sisak, Hrvatska`}
        canonical={`/${serviceId}`}
        jsonLd={serviceJsonLd}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-green-600">Početna</Link>
              <span>/</span>
              <span className="text-gray-900 font-medium">{service.title}</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <Link to="/">
                  <Button variant="ghost" size="sm" className="mb-4 sm:mb-6 text-green-600 hover:text-green-700">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Natrag na početnu
                  </Button>
                </Link>
                <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                  </div>
                  <div>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                      {service.title}
                    </h1>
                    <Badge variant="secondary" className="mt-2 bg-green-100 text-green-700">
                      Profesionalna usluga
                    </Badge>
                  </div>
                </div>
                <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
                  {service.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Link to="/kontakt">
                    <Button size="lg" className="bg-green-600 hover:bg-green-700 w-full sm:w-auto">
                      Zatražite ponudu
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    <Phone className="w-4 h-4 mr-2" />
                    +385 44 123 456
                  </Button>
                </div>
              </div>
              <div className="relative">
                <Card className="bg-white/80 backdrop-blur shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-center text-gray-900">Što uključuje naša usluga</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6 sm:space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Detaljne informacije</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      Naša usluga {service.title.toLowerCase()} dizajnirana je za zadovoljavanje specifičnih potreba
                      vaših projekata. S godinama iskustva i stručnim pristupom, pružamo kvalitetne rješenja koja
                      će vam pomoći postići vaše ciljeve.
                    </p>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-6 mb-3">Zašto odabrati nas?</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm sm:text-base">Iskusni stručnjaci s licencama</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm sm:text-base">Brža realizacija projekata</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm sm:text-base">Konkurentne cijene</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm sm:text-base">Potpuna podrška tijekom cijelog procesa</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Proces rada</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                      <div className="text-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-green-600 font-bold text-base sm:text-lg">1</span>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Konzultacija</h4>
                        <p className="text-xs sm:text-sm text-gray-600">Analiza vaših potreba i definiranje opsega rada</p>
                      </div>
                      <div className="text-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-green-600 font-bold text-base sm:text-lg">2</span>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Realizacija</h4>
                        <p className="text-xs sm:text-sm text-gray-600">Profesionalno izvršavanje usluge prema dogovorenom planu</p>
                      </div>
                      <div className="text-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-green-600 font-bold text-base sm:text-lg">3</span>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Podrška</h4>
                        <p className="text-xs sm:text-sm text-gray-600">Kontinuirana podrška i pomoć nakon završetka</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Kontakt</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-green-600" />
                      <div>
                        <div className="font-medium text-sm sm:text-base">Telefon</div>
                        <div className="text-xs sm:text-sm text-gray-600">+385 44 123 456</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-green-600" />
                      <div>
                        <div className="font-medium text-sm sm:text-base">Email</div>
                        <div className="text-xs sm:text-sm text-gray-600">info@pvconsulting.hr</div>
                      </div>
                    </div>
                    <Link to="/kontakt" className="block">
                      <Button className="w-full bg-green-600 hover:bg-green-700">
                        Pošaljite upit
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Ostale usluge</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {services.filter(s => s.id !== serviceId).slice(0, 4).map((otherService) => {
                        const OtherIcon = iconMap[otherService.icon];
                        return (
                          <Link key={otherService.id} to={`/${otherService.id}`}>
                            <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <OtherIcon className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                              </div>
                              <span className="text-xs sm:text-sm font-medium text-gray-900 hover:text-green-600">
                                {otherService.title}
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-green-600 to-green-800 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Trebate {service.title.toLowerCase()}?
            </h2>
            <p className="text-lg sm:text-xl text-green-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Kontaktirajte nas danas za besplatnu konzultaciju i personaliziranu ponudu
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link to="/kontakt">
                <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100 w-full sm:w-auto">
                  Zatražite ponudu
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 w-full sm:w-auto">
                <Phone className="w-4 h-4 mr-2" />
                Pozovite nas
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;