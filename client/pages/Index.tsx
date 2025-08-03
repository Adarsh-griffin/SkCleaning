import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  CheckCircle, 
  Building2, 
  Factory, 
  Utensils, 
  Shield, 
  Recycle, 
  Users, 
  Clock,
  Star,
  Phone,
  ArrowRight,
  Sparkles,
  Target,
  Eye
} from 'lucide-react';

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Professional Deep Cleaning &{' '}
                  <span className="text-primary">Commercial Solutions</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Transforming offices, restaurants, and industrial spaces with spotless, hygienic, and germ-free environments. Trusted by industry leaders including TATA.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6">
                  Get Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-slate-900">
                  <Phone className="mr-2 w-5 h-5" />
                  92094 47145
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-gray-700">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">100+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">95%</div>
                  <div className="text-gray-300">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-gray-300">Service Available</div>
                </div>
              </div>
            </div>

            <div className="lg:justify-self-end">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-6">
                <h3 className="text-2xl font-bold">Service Areas</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-lg">Pune & PCMC</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-lg">IT Hubs & Corporate Parks</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-lg">Industrial Zones</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-lg">Commercial Districts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-foreground">
                  Transforming Spaces, Inspiring Cleanliness
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At SK Cleaning Services, we bring your vision for pristine spaces to life with a perfect blend of creativity, expertise, and functionality. Whether it's an office, restaurant, or industrial facility, our team of professionals reimagines spaces to create environments that are spotless, hygienic, and inspiring.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-muted-foreground">Years of Experience</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-muted-foreground">Professional & Reliable</div>
                </div>
              </div>

              <Button size="lg" className="w-fit">
                Learn More About Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <Building2 className="w-16 h-16 text-primary" />
                  </div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <div className="h-32 bg-gradient-to-br from-success/20 to-success/5 flex items-center justify-center">
                    <Sparkles className="w-12 h-12 text-success" />
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <div className="h-32 bg-gradient-to-br from-info/20 to-info/5 flex items-center justify-center">
                    <Shield className="w-12 h-12 text-info" />
                  </div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <div className="h-48 bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center">
                    <Factory className="w-16 h-16 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-foreground">
              Comprehensive Cleaning Solutions Crafted to Exceed Your Expectations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We create exceptional cleaning solutions that bring your vision to life, blending creativity and functionality to transform spaces.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Commercial Deep Cleaning */}
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <Building2 className="w-24 h-24 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Commercial Deep Cleaning</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Comprehensive cleaning for offices, commercial spaces, IT hubs, and restaurants. Includes kitchen degreasing, dining area sanitization, and complete space revitalization.
                </p>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Office Cleaning */}
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-success/10 to-success/5 flex items-center justify-center">
                <Users className="w-24 h-24 text-success group-hover:scale-110 transition-transform duration-300" />
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Office Cleaning</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Professional services covering total office handover cleaning and regular deep cleaning to ensure a productive and healthy workspace environment.
                </p>
                <Button variant="outline" className="w-full group-hover:bg-success group-hover:text-white transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Industrial Cleaning */}
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-info/10 to-info/5 flex items-center justify-center">
                <Factory className="w-24 h-24 text-info group-hover:scale-110 transition-transform duration-300" />
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Industrial Cleaning</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Specialized cleaning for industrial facilities, including ISO-standard cleanroom maintenance, anti-bacterial cleaning, and heavy-duty factory floor sanitization.
                </p>
                <Button variant="outline" className="w-full group-hover:bg-info group-hover:text-white transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold">
                  Guided by Vision, Powered by Precision, Creating Exceptional Spaces
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  At SK Cleaning Services, we blend creativity with precision to transform spaces into functional, beautiful, and hygienic environments that exceed expectations.
                </p>
              </div>

              {/* Vision & Mission Cards */}
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/20 p-3 rounded-lg flex-shrink-0">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                    <p className="text-gray-300">
                      To be a leading force in delivering innovative, sustainable, and functional cleaning solutions that enrich lives and inspire future generations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-success/20 p-3 rounded-lg flex-shrink-0">
                    <Target className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                    <p className="text-gray-300">
                      To deliver exceptional cleaning solutions, combining creativity, precision, and dedication to create spaces that reflect our clients' needs and aspirations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:justify-self-end">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 space-y-8">
                <h3 className="text-2xl font-bold">Why Choose SK Cleaning Services</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary p-2 rounded-lg flex-shrink-0">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Advanced Equipment</h4>
                      <p className="text-gray-300 text-sm">State-of-the-art equipment and eco-friendly solutions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-success p-2 rounded-lg flex-shrink-0">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">100% Reliable</h4>
                      <p className="text-gray-300 text-sm">Trained, vetted, and experienced professionals</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-info p-2 rounded-lg flex-shrink-0">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Tailored Solutions</h4>
                      <p className="text-gray-300 text-sm">Customized cleaning plans for specific needs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary p-2 rounded-lg flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Flexible Scheduling</h4>
                      <p className="text-gray-300 text-sm">Work around your business hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-foreground">
              Our Approach to Crafting Exceptional Spaces
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We blend creativity and precision to turn your vision into reality, crafting spaces that are functional, inspiring, and tailored to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Initial Consultation and Planning</h3>
              <p className="text-muted-foreground">
                We begin by understanding your needs and vision, creating a customized plan that aligns with your goals, style, and budget.
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="bg-success/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-10 h-10 text-success" />
              </div>
              <h3 className="text-xl font-bold mb-4">Deep Cleaning and Sanitization</h3>
              <p className="text-muted-foreground">
                We transform your space through innovative cleaning methods, combining innovative techniques with seamless execution for exceptional results.
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="bg-info/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-info" />
              </div>
              <h3 className="text-xl font-bold mb-4">Final Inspection and Handover</h3>
              <p className="text-muted-foreground">
                We ensure flawless execution and a smooth handover, delivering your space on time and to perfection.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl font-bold">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-primary-foreground/90">
            Let's turn your vision into reality with expert cleaning and flawless execution. Contact us today to get started!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Contact Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
              <Phone className="mr-2 w-5 h-5" />
              92094 47145
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">100+</div>
              <div className="text-muted-foreground">Successful Projects</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">95%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">5+</div>
              <div className="text-muted-foreground">Years of Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">100%</div>
              <div className="text-muted-foreground">On-Time Delivery</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
