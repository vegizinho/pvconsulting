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
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Kontaktirajte nas
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Spremni smo odgovoriti na sva vaša pitanja i pomoći vam s vašim projektima. 
              Kontaktirajte nas za besplatnu konzultaciju.
            </p>
          </div>
        </div>

        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Informacije o kontaktu</h2>
                  <div className="space-y-6">
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Phone className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">Telefon</h3>
                            <p className="text-gray-600">{companyInfo.phone}</p>
                            <p className="text-sm text-gray-500 mt-1">Pon - Pet: 08:00 - 17:00</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Mail className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                            <p className="text-gray-600">{companyInfo.email}</p>
                            <p className="text-sm text-gray-500 mt-1">Odgovor u roku od 24h</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <MapPin className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">Adresa</h3>
                            <p className="text-gray-600">{companyInfo.address}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Clock className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">Radno vrijeme</h3>
                            <div className="text-gray-600 space-y-1">
                              <p>Ponedjeljak - Petak: 08:00 - 17:00</p>
                              <p>Subota: 09:00 - 13:00</p>
                              <p className="text-sm text-gray-500">Nedjelja: Zatvoreno</p>
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
                    <CardTitle className="text-2xl flex items-center space-x-2">
                      <MessageSquare className="w-6 h-6 text-blue-600" />
                      <span>Pošaljite nam poruku</span>
                    </CardTitle>
                    <CardDescription>
                      Ispunite formu ispod i kontaktirati ćemo vas u najkraćem mogućem roku
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        className="w-full bg-blue-600 hover:bg-blue-700"
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

                      <p className="text-sm text-gray-500 text-center">
                        Slanjem forme prihvaćate našu{' '}
                        <a href="/politika-privatnosti" className="text-blue-600 hover:underline">
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
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Naša lokacija</h2>
              <p className="text-xl text-gray-600">Posjetite nas u srcu Siska</p>
            </div>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <div className="bg-gray-200 flex items-center justify-center h-96">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-3" />
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