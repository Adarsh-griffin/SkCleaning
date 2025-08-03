import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  CheckCircle, 
  Building2, 
  Factory, 
  Utensils, 
  Shield,
  Phone,
  ArrowRight,
  Star,
  Quote
} from 'lucide-react';

export default function Index() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    {
      url: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=800&fit=crop",
      alt: "Professional office cleaning team"
    },
    {
      url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop",
      alt: "Restaurant deep cleaning service"
    },
    {
      url: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=1200&h=800&fit=crop",
      alt: "Industrial facility cleaning"
    },
    {
      url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
      alt: "Commercial space cleaning"
    }
  ];

  // Auto-cycle images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="min-h-screen">
      {/* Minimalistic Hero Section */}
      <section className="relative min-h-screen bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
            
            {/* Content Side */}
            <div className="space-y-12">
              <div className="space-y-8">
                <div className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full text-slate-700 text-sm font-medium">
                  <Shield className="w-4 h-4 mr-2" />
                  Trusted by Industry Leaders
                </div>
                
                <h1 className="text-6xl lg:text-7xl font-display font-semibold leading-tight text-slate-900">
                  Premium
                  <br />
                  <span className="gradient-text">Cleaning</span>
                  <br />
                  Services
                </h1>
                
                <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                  Transform your workspace with professional deep cleaning solutions. 
                  Spotless, hygienic environments for offices, restaurants, and industrial facilities.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl transition-all duration-300">
                  Get Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-slate-300 text-slate-700 hover:bg-slate-50 rounded-xl transition-all duration-300">
                  <Phone className="mr-2 w-5 h-5" />
                  92094 47145
                </Button>
              </div>

              {/* Simple Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-display font-semibold text-slate-900 mb-1">100+</div>
                  <div className="text-sm text-slate-500">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-display font-semibold text-slate-900 mb-1">95%</div>
                  <div className="text-sm text-slate-500">Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-display font-semibold text-slate-900 mb-1">24/7</div>
                  <div className="text-sm text-slate-500">Support</div>
                </div>
              </div>
            </div>

            {/* Cycling Images Side */}
            <div className="lg:justify-self-end">
              <div className="relative">
                <div className="aspect-[4/5] max-w-lg mx-auto relative overflow-hidden rounded-3xl bg-slate-100">
                  {heroImages.map((image, index) => (
                    <img
                      key={index}
                      src={image.url}
                      alt={image.alt}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  
                  {/* Image Indicators */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {heroImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex 
                            ? 'bg-white w-8' 
                            : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Minimalistic */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-5xl font-display font-semibold text-slate-900">
              Our Services
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Professional cleaning solutions tailored to your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Commercial Cleaning */}
            <Card className="group hover:shadow-xl transition-all duration-500 border-0 bg-white">
              <CardContent className="p-10 text-center">
                <div className="bg-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-blue-100 transition-colors duration-300">
                  <Building2 className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-display font-semibold mb-4 text-slate-900">Commercial Cleaning</h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Comprehensive office and commercial space cleaning with attention to detail
                </p>
                <div className="text-2xl font-display font-semibold text-slate-900">₹5,000+</div>
              </CardContent>
            </Card>

            {/* Restaurant Cleaning */}
            <Card className="group hover:shadow-xl transition-all duration-500 border-0 bg-white">
              <CardContent className="p-10 text-center">
                <div className="bg-green-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-green-100 transition-colors duration-300">
                  <Utensils className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-display font-semibold mb-4 text-slate-900">Restaurant Cleaning</h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Specialized kitchen and dining area deep cleaning and sanitization
                </p>
                <div className="text-2xl font-display font-semibold text-slate-900">₹8,000+</div>
              </CardContent>
            </Card>

            {/* Industrial Cleaning */}
            <Card className="group hover:shadow-xl transition-all duration-500 border-0 bg-white">
              <CardContent className="p-10 text-center">
                <div className="bg-purple-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-purple-100 transition-colors duration-300">
                  <Factory className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-2xl font-display font-semibold mb-4 text-slate-900">Industrial Cleaning</h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  ISO-standard cleanroom maintenance and heavy-duty industrial cleaning
                </p>
                <div className="text-2xl font-display font-semibold text-slate-900">₹12,000+</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Simple */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl font-display font-semibold text-slate-900">
                Why Choose SK Cleaning Services
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Professional, reliable, and trusted by industry leaders including TATA. 
                We deliver exceptional results with advanced equipment and eco-friendly solutions.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">100% Professional & Reliable</h4>
                    <p className="text-slate-600">Trained, vetted, and experienced cleaning professionals</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Advanced Equipment</h4>
                    <p className="text-slate-600">State-of-the-art cleaning technology and eco-friendly products</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Trusted by Industry Leaders</h4>
                    <p className="text-slate-600">Proven track record with clients like TATA and major corporations</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-3xl p-12">
              <img 
                src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=600&h=600&fit=crop" 
                alt="Professional cleaning equipment"
                className="w-full h-80 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Simple Testimonial */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="w-16 h-16 text-slate-300 mx-auto mb-8" />
          <blockquote className="text-2xl font-display text-slate-700 mb-8 leading-relaxed">
            "SK Cleaning Services transformed our office environment beyond expectations. 
            Their professional approach and attention to detail is unmatched."
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
              alt="Client testimonial"
              className="w-12 h-12 rounded-full"
            />
            <div className="text-left">
              <div className="font-semibold text-slate-900">Rajesh Patel</div>
              <div className="text-slate-600">Facilities Manager, TATA</div>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="py-32 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-5xl font-display font-semibold">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-slate-300">
            Contact us today for a free consultation and quote
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
            <div className="text-3xl font-display font-semibold mb-2">92094 47145</div>
            <div className="text-slate-300">Available 24/7 • Pune & PCMC</div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-10 py-4 bg-white text-slate-900 hover:bg-gray-100 rounded-xl">
              Get Free Quote
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-4 border-white text-white hover:bg-white/10 rounded-xl">
              Call Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
