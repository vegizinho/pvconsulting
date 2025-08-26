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
          <h1 className="text-2xl font-bold mb-4" style={{ color: '#122a3a' }}>Usluga nije pronađena</h1>
          <Link to="/">
            <Button className="text-white" style={{ backgroundColor: '#44687a' }}>Vrati se na početnu</Button>
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

      <div className="min-h-screen" style={{ backgroundColor: '#f8f9fa' }}>
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
            <div className="flex items-center space-x-2 text-sm" style={{ color: '#4c555c' }}>
              <Link to="/" className="transition-colors" style={{ color: '#44687a' }} 
                onMouseEnter={(e) => e.target.style.color = '#215354'}
                onMouseLeave={(e) => e.target.style.color = '#44687a'}>
                Početna
              </Link>
              <span>/</span>
              <span className="font-medium" style={{ color: '#122a3a' }}>{service.title}</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="py-12 sm:py-16" style={{ background: 'linear-gradient(135deg, #8093a0 0%, white 50%, #8093a0 100%)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <Link to="/">
                  <Button variant="ghost" size="sm" className="mb-4 sm:mb-6 transition-colors" 
                    style={{ color: '#44687a' }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#44687a20';
                      e.target.style.color = '#44687a';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = '#44687a';
                    }}>
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Natrag na početnu
                  </Button>
                </Link>
                <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#44687a20' }}>
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: '#44687a' }} />
                  </div>
                  <div>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold" style={{ color: '#122a3a' }}>
                      {service.title}
                    </h1>
                    <Badge variant="secondary" className="mt-2 text-white" style={{ backgroundColor: '#44687a' }}>
                      Profesionalna usluga
                    </Badge>
                  </div>
                </div>
                <p className="text-lg sm:text-xl mb-6 sm:mb-8" style={{ color: '#4c555c' }}>
                  {service.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Link to="/kontakt">
                    <Button size="lg" className="w-full sm:w-auto text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: '#44687a' }}>
                      Zatražite ponudu
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto transition-all" 
                    style={{ borderColor: '#215354', color: '#215354' }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#215354';
                      e.target.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = '#215354';
                    }}>
                    <Phone className="w-4 h-4 mr-2" />
                    +385 44 123 456
                  </Button>
                </div>
              </div>
              <div className="relative">
                <Card className="bg-white/80 backdrop-blur shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-center" style={{ color: '#122a3a' }}>Što uključuje naša usluga</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#215354' }} />
                          <span className="text-sm sm:text-base" style={{ color: '#4b4e4f' }}>{feature}</span>
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
                    <CardTitle style={{ color: '#122a3a' }}>Detaljne informacije</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p className="leading-relaxed text-sm sm:text-base" style={{ color: '#4c555c' }}>
                      Naša usluga {service.title.toLowerCase()} dizajnirana je za zadovoljavanje specifičnih potreba
                      vaših projekata. S godinama iskustva i stručnim pristupom, pružamo kvalitetne rješenja koja
                      će vam pomoći postići vaše ciljeve.
                    </p>
                    <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-3" style={{ color: '#122a3a' }}>Zašto odabrati nas?</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#44687a' }} />
                        <span className="text-sm sm:text-base" style={{ color: '#4b4e4f' }}>Iskusni stručnjaci s licencama</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#215354' }} />
                        <span className="text-sm sm:text-base" style={{ color: '#4b4e4f' }}>Brža realizacija projekata</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#202c52' }} />
                        <span className="text-sm sm:text-base" style={{ color: '#4b4e4f' }}>Konkurentne cijene</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#293042' }} />
                        <span className="text-sm sm:text-base" style={{ color: '#4b4e4f' }}>Potpuna podrška tijekom cijelog procesa</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle style={{ color: '#122a3a' }}>Proces rada</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                      <div className="text-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: '#44687a20' }}>
                          <span className="font-bold text-base sm:text-lg" style={{ color: '#44687a' }}>1</span>
                        </div>
                        <h4 className="font-semibold mb-2 text-sm sm:text-base" style={{ color: '#122a3a' }}>Konzultacija</h4>
                        <p className="text-xs sm:text-sm" style={{ color: '#4c555c' }}>Analiza vaših potreba i definiranje opsega rada</p>
                      </div>
                      <div className="text-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: '#21535420' }}>
                          <span className="font-bold text-base sm:text-lg" style={{ color: '#215354' }}>2</span>
                        </div>
                        <h4 className="font-semibold mb-2 text-sm sm:text-base" style={{ color: '#122a3a' }}>Realizacija</h4>
                        <p className="text-xs sm:text-sm" style={{ color: '#4c555c' }}>Profesionalno izvršavanje usluge prema dogovorenom planu</p>
                      </div>
                      <div className="text-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: '#202c5220' }}>
                          <span className="font-bold text-base sm:text-lg" style={{ color: '#202c52' }}>3</span>
                        </div>
                        <h4 className="font-semibold mb-2 text-sm sm:text-base" style={{ color: '#122a3a' }}>Podrška</h4>
                        <p className="text-xs sm:text-sm" style={{ color: '#4c555c' }}>Kontinuirana podrška i pomoć nakon završetka</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle style={{ color: '#122a3a' }}>Kontakt</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5" style={{ color: '#44687a' }} />
                      <div>
                        <div className="font-medium text-sm sm:text-base" style={{ color: '#122a3a' }}>Telefon</div>
                        <div className="text-xs sm:text-sm" style={{ color: '#4c555c' }}>+385 44 123 456</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5" style={{ color: '#215354' }} />
                      <div>
                        <div className="font-medium text-sm sm:text-base" style={{ color: '#122a3a' }}>Email</div>
                        <div className="text-xs sm:text-sm" style={{ color: '#4c555c' }}>info@pvconsulting.hr</div>
                      </div>
                    </div>
                    <Link to="/kontakt" className="block">
                      <Button className="w-full text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: '#44687a' }}>
                        Pošaljite upit
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle style={{ color: '#122a3a' }}>Ostale usluge</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {services.filter(s => s.id !== serviceId).slice(0, 4).map((otherService, index) => {
                        const OtherIcon = iconMap[otherService.icon];
                        const colors = ['#44687a', '#215354', '#202c52', '#293042'];
                        const bgColor = colors[index % colors.length];
                        return (
                          <Link key={otherService.id} to={`/${otherService.id}`}>
                            <div className="flex items-center space-x-3 p-2 rounded-lg hover:opacity-80 transition-opacity" style={{ backgroundColor: `${bgColor}10` }}>
                              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${bgColor}20` }}>
                                <OtherIcon className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: bgColor }} />
                              </div>
                              <span className="text-xs sm:text-sm font-medium transition-colors" style={{ color: '#122a3a' }}>
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
        <div className="py-12 sm:py-16" style={{ background: 'linear-gradient(135deg, #44687a 0%, #215354 50%, #202c52 100%)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Trebate {service.title.toLowerCase()}?
            </h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto" style={{ color: '#8093a0' }}>
              Kontaktirajte nas danas za besplatnu konzultaciju i personaliziranu ponudu
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link to="/kontakt">
                <Button size="lg" className="bg-white hover:opacity-90 w-full sm:w-auto transition-opacity" style={{ color: '#44687a' }}>
                  Zatražite ponudu
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
                }}>
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