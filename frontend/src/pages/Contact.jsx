import React, { useState } from 'react';
import { companyInfo } from '../data/mock';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { useToast } from '../hooks/use-toast';
import SEO from '../components/SEO';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Poruka uspješno poslana!",
      description: "Kontaktirati ćemo vas u najkraćem mogućem roku.",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      service: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Kontakt - PV Consulting d.o.o.",
    "description": "Kontaktirajte PV Consulting za profesionalne usluge građevinskog inženjeringa i javne nabave.",
    "mainEntity": {
      "@type": "Organization",
      "name": "PV Consulting d.o.o.",
      "telephone": "+385-44-123-456",
      "email": "info@pvconsulting.hr",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ulica Hrvatske bratske zajednice 1",
        "addressLocality": "Sisak",
        "postalCode": "44000",
        "addressCountry": "HR"
      }
    }
  };

  return (
    <>
      <SEO 
        title="Kontakt - PV Consulting d.o.o."
        description="Kontaktirajte PV Consulting iz Siska za profesionalne usluge građevinskog inženjeringa, javne nabave i projektiranja. Besplatna konzultacija!"
        keywords="kontakt, PV Consulting, Sisak, građevinski inženjering, javna nabava, projektiranje, telefon, email"
        canonical="/kontakt"
        jsonLd={contactJsonLd}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="py-12 sm:py-16" style={{ background: 'linear-gradient(135deg, #8093a0 0%, white 50%, #8093a0 100%)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6" style={{ color: '#122a3a' }}>
              Kontaktirajte nas
            </h1>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto" style={{ color: '#4c555c' }}>
              Spremni smo odgovoriti na sva vaša pitanja i pomoći vam s vašim projektima. 
              Kontaktirajte nas za besplatnu konzultaciju.
            </p>
          </div>
        </div>

        <div className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Contact Information */}
              <div className="space-y-6 lg:space-y-8">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6" style={{ color: '#122a3a' }}>Informacije o kontaktu</h2>
                  <div className="space-y-4 sm:space-y-6">
                    <Card>
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#44687a20' }}>
                            <Phone className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: '#44687a' }} />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1" style={{ color: '#122a3a' }}>Telefon</h3>
                            <p className="text-sm sm:text-base" style={{ color: '#4c555c' }}>{companyInfo.phone}</p>
                            <p className="text-xs sm:text-sm mt-1" style={{ color: '#8093a0' }}>Pon - Pet: 08:00 - 17:00</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#21535420' }}>
                            <Mail className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: '#215354' }} />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1" style={{ color: '#122a3a' }}>Email</h3>
                            <p className="text-sm sm:text-base" style={{ color: '#4c555c' }}>{companyInfo.email}</p>
                            <p className="text-xs sm:text-sm mt-1" style={{ color: '#8093a0' }}>Odgovor u roku od 24h</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#202c5220' }}>
                            <MapPin className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: '#202c52' }} />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1" style={{ color: '#122a3a' }}>Adresa</h3>
                            <p className="text-sm sm:text-base" style={{ color: '#4c555c' }}>{companyInfo.address}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#29304220' }}>
                            <Clock className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: '#293042' }} />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1" style={{ color: '#122a3a' }}>Radno vrijeme</h3>
                            <div className="space-y-1 text-sm sm:text-base" style={{ color: '#4c555c' }}>
                              <p>Ponedjeljak - Petak: 08:00 - 17:00</p>
                              <p>Subota: 09:00 - 13:00</p>
                              <p className="text-xs sm:text-sm" style={{ color: '#8093a0' }}>Nedjelja: Zatvoreno</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl sm:text-2xl flex items-center space-x-2">
                      <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: '#44687a' }} />
                      <span style={{ color: '#122a3a' }}>Pošaljite nam poruku</span>
                    </CardTitle>
                    <CardDescription style={{ color: '#4c555c' }}>
                      Ispunite formu ispod i kontaktirati ćemo vas u najkraćem mogućem roku
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        <div>
                          <Label htmlFor="name">Ime i prezime *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            placeholder="Vaše ime i prezime"
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email adresa *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            placeholder="vasa@email.adresa"
                            required
                            className="mt-1"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        <div>
                          <Label htmlFor="phone">Broj telefona</Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            placeholder="+385 XX XXX XXXX"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="service">Usluga od interesa</Label>
                          <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Odaberite uslugu" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="gradevinski-injenjering">Građevinski inženjering</SelectItem>
                              <SelectItem value="usluge-projektiranja">Usluge projektiranja</SelectItem>
                              <SelectItem value="javna-nabava-ponuditelji">Javna nabava za Ponuditelje</SelectItem>
                              <SelectItem value="javna-nabava-narucitelji">Javna nabava za Naručitelje</SelectItem>
                              <SelectItem value="zastita-na-radu">Zaštita na radu</SelectItem>
                              <SelectItem value="knjigovodstvene-usluge">Knjigovodstvene usluge</SelectItem>
                              <SelectItem value="upravljanje-zgrada">Upravljanje zgrada</SelectItem>
                              <SelectItem value="ostale-djelatnosti">Ostale djelatnosti</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="subject">Predmet *</Label>
                        <Input
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => handleInputChange('subject', e.target.value)}
                          placeholder="Kratki opis potrebe"
                          required
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="message">Poruka *</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          placeholder="Detaljno opišite vašu potrebu ili pitanje..."
                          required
                          rows={6}
                          className="mt-1"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full text-white hover:opacity-90 transition-opacity"
                        style={{ backgroundColor: '#44687a' }}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Šalje se..."
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Pošaljite poruku
                          </>
                        )}
                      </Button>

                      <p className="text-xs sm:text-sm text-gray-500 text-center">
                        Slanjem forme prihvaćate našu{' '}
                        <a href="/politika-privatnosti" className="text-indigo-600 hover:underline">
                          politiku privatnosti
                        </a>
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Naša lokacija</h2>
              <p className="text-lg sm:text-xl text-gray-600">Posjetite nas u srcu Siska</p>
            </div>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <div className="bg-gray-200 flex items-center justify-center h-64 sm:h-96">
                <div className="text-center text-gray-500">
                  <MapPin className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-3" />
                  <p className="font-medium">Google Maps</p>
                  <p className="text-sm">{companyInfo.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;