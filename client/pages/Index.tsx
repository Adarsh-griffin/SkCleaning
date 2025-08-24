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
  Quote,
  Calendar,
  ClipboardCheck,
  Brush,
  CheckSquare,
  Eye,
  Play,
  Pause,
  Home
} from 'lucide-react';
import Lenis from 'lenis';

export default function Index() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [beforeAfterStates, setBeforeAfterStates] = useState<{ [key: number]: 'before' | 'after' }>({
    0: 'before',
    1: 'before',
    2: 'before',
    3: 'before'
  });

  const heroImages = [
    {
      url: "/heroimg/heroimg1.png",
      alt: "Professional office cleaning team"
    },
    {
      url: "/heroimg/heroimg2.png",
      alt: "Restaurant deep cleaning service"
    },
    {
      url: "/heroimg/heroimg3.png",
      alt: "Industrial facility cleaning"
    },
    {
      url: "/heroimg/heroimg4.png",
      alt: "Commercial space cleaning"
    }
  ];

  const transformationProjects = [
    {
      title: "Corporate Office Deep Clean",
      location: "IT Hub, Pune",
      type: "Commercial",
      before: "/before after/office clean before.png",
      after: "/before after/office cleaning after.png"
    },
    {
      title: "Restaurant Kitchen Sanitization", 
      location: "Commercial District, PCMC",
      type: "Restaurant",
      before: "/before after/restraunt kitchen before.png",
      after: "/before after/restraunt kitchen after.png"
    },
    {
      title: "Industrial Floor Cleaning",
      location: "Manufacturing Unit, Pune", 
      type: "Industrial",
      before: "/before after/indestrial floor before .png",
      after: "/before after/indestrial floor after.png"
    },
    {
      title: "Medical Facility Deep Clean",
      location: "Healthcare Center, PCMC",
      type: "Healthcare",
      before: "/before after/hospital before .png",
      after: "/before after/hospital after.png"
    }
  ];

  const workflowSteps = [
    {
      id: 1,
      title: "Initial Consultation",
      description: "We assess your space and understand your specific cleaning requirements",
      icon: <Calendar className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Custom Planning",
      description: "Create a tailored cleaning plan with timeline and methodology",
      icon: <ClipboardCheck className="w-8 h-8" />,
      color: "from-green-500 to-green-600"
    },
    {
      id: 3,
      title: "Professional Execution",
      description: "Our trained team performs deep cleaning using advanced equipment",
      icon: <Brush className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 4,
      title: "Quality Inspection",
      description: "Final walkthrough and quality assurance before project completion",
      icon: <CheckSquare className="w-8 h-8" />,
      color: "from-orange-500 to-orange-600"
    }
  ];

  // Initialize Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Auto-cycle images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Auto-cycle workflow steps every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % workflowSteps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [workflowSteps.length]);

  const toggleBeforeAfter = (index: number) => {
    setBeforeAfterStates(prev => ({
      ...prev,
      [index]: prev[index] === 'before' ? 'after' : 'before'
    }));
  };

  return (
    <div className="min-h-screen">
      {/* Premium Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
            
            <div className="space-y-12">
              <div className="space-y-8">
                <div className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full text-slate-700 text-sm font-medium animate-pulse">
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
                <Button size="lg" className="text-lg px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  Get Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-slate-300 text-slate-700 hover:bg-slate-50 rounded-xl transition-all duration-300 hover:scale-105">
                  <Phone className="mr-2 w-5 h-5" />
                  92094 47145
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center group">
                  <div className="text-3xl font-display font-semibold text-slate-900 mb-1 transition-transform duration-300 group-hover:scale-110">100+</div>
                  <div className="text-sm text-slate-500">Projects</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-display font-semibold text-slate-900 mb-1 transition-transform duration-300 group-hover:scale-110">95%</div>
                  <div className="text-sm text-slate-500">Satisfaction</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-display font-semibold text-slate-900 mb-1 transition-transform duration-300 group-hover:scale-110">24/7</div>
                  <div className="text-sm text-slate-500">Support</div>
                </div>
              </div>
            </div>

            {/* Cycling Images Side */}
            <div className="lg:justify-self-end w-full">
              <div className="relative w-full">
                <div className="aspect-[4/5] max-w-lg mx-auto relative overflow-hidden rounded-3xl bg-slate-100 shadow-2xl">
                  {heroImages.map((image, index) => (
                                         <img
                       key={index}
                       src={image.url}
                       alt={image.alt}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                        index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                      }`}
                      
                    />
                  ))}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {heroImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex 
                            ? 'bg-white w-8' 
                            : 'bg-white/50 w-2'
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

      {/* Our Transformations Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-5xl font-display font-semibold text-slate-900">
              Our <span className="gradient-text">Transformations</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See the remarkable before and after results of our professional cleaning services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {transformationProjects.map((project, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden cursor-pointer" onClick={() => toggleBeforeAfter(index)}>
                  <img 
                    src={beforeAfterStates[index] === 'before' ? project.before : project.after}
                    alt={`${project.title} - ${beforeAfterStates[index]}`}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  
                  {/* Animated overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Before/After Badge */}
                  <div className="absolute top-4 left-4">
                    <div className={`px-3 py-1 rounded-full text-white text-sm font-bold transition-all duration-300 ${
                      beforeAfterStates[index] === 'before' 
                        ? 'bg-red-500 animate-pulse' 
                        : 'bg-green-500 animate-bounce'
                    }`}>
                      {beforeAfterStates[index] === 'before' ? 'BEFORE' : 'AFTER'}
                    </div>
                  </div>
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-pulse">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Type badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-slate-700 text-sm font-medium">
                      {project.type}
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-lg font-display font-semibold mb-2 text-slate-900">{project.title}</h3>
                  <p className="text-slate-600 mb-4 text-sm">{project.location}</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full transition-all duration-300 hover:bg-slate-900 hover:text-white group-hover:scale-105"
                    onClick={() => toggleBeforeAfter(index)}
                  >
                    {beforeAfterStates[index] === 'before' ? 'View After' : 'View Before'}
                  </Button>
                </CardContent>
              </Card>
            ))}
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
            <Card className="group hover:shadow-xl transition-all duration-500 border-0 bg-white transform hover:-translate-y-2">
              <CardContent className="p-10">
                <div className="bg-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
                  <Building2 className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-display font-semibold mb-4 text-slate-900 text-center">Commercial Cleaning</h3>
                <h4 className="text-lg font-semibold text-blue-600 mb-4 text-center">Pristine Workspaces. Elevated Impressions.</h4>
                <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                  From boardrooms to shop floors, we deliver unmatched commercial cleaning designed to impress your clients and boost employee productivity. Our trained professionals handle every inch — carpets, glass, workstations, and high-traffic zones — with industry-grade precision. We work around your schedule, ensuring zero disruption and a consistently spotless environment that speaks volumes about your brand.
                </p>
                <div className="text-center">
                  <p className="text-blue-600 font-semibold mb-4 italic">"Because a clean business is good business."</p>
                  <div className="text-2xl font-display font-semibold gradient-text">₹5,000+</div>
                </div>
              </CardContent>
            </Card>

            {/* Residential Cleaning */}
            <Card className="group hover:shadow-xl transition-all duration-500 border-0 bg-white transform hover:-translate-y-2">
              <CardContent className="p-10">
                <div className="bg-green-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-green-100 group-hover:scale-110 transition-all duration-300">
                  <Home className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-display font-semibold mb-4 text-slate-900 text-center">Residential Cleaning</h3>
                <h4 className="text-lg font-semibold text-green-600 mb-4 text-center">Your Home, Transformed into Perfection.</h4>
                <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                  Whether it's deep cleaning for festivals, a move-in handover, or routine upkeep, we treat your home like it's our own. Our expert team uses advanced cleaning techniques and safe, eco-friendly products to revive every corner — from kitchen tiles to bathroom fixtures. Expect immaculate floors, dust-free surfaces, and a refreshing, healthy living space your family will love coming home to.
                </p>
                <div className="text-center">
                  <p className="text-green-600 font-semibold mb-4 italic">"Luxury cleaning, without the luxury price tag."</p>
                  <div className="text-2xl font-display font-semibold gradient-text">₹8,000+</div>
                </div>
              </CardContent>
            </Card>

            {/* Renovation Services */}
            <Card className="group hover:shadow-xl transition-all duration-500 border-0 bg-white transform hover:-translate-y-2">
              <CardContent className="p-10">
                <div className="bg-purple-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-purple-100 group-hover:scale-110 transition-all duration-300">
                  <Brush className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-2xl font-display font-semibold mb-4 text-slate-900 text-center">Renovation Services</h3>
                <h4 className="text-lg font-semibold text-purple-600 mb-4 text-center">From Concept to Completion — We Build Your Vision.</h4>
                <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                  Whether you're upgrading furniture, revamping interiors, or executing a full-scale property renovation, our end-to-end service brings your ideas to life with precision and style. We handle planning, design, execution, and finishing under one roof — ensuring quality control at every stage. From modern apartments to sprawling villas and premium commercial spaces, we transform spaces into statement pieces that reflect your taste and needs.
                </p>
                <div className="text-center">
                  <p className="text-purple-600 font-semibold mb-4 italic">"We don't just renovate. We redefine."</p>
                  <div className="text-2xl font-display font-semibold gradient-text">₹12,000+</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Work - Animated Workflow */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-5xl font-display font-semibold text-slate-900">
              How We <span className="gradient-text">Work</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our systematic approach to delivering exceptional cleaning results
            </p>
          </div>

          {/* Animated Workflow */}
          <div className="relative">
            {/* Animated connection line */}
            <div className="hidden lg:block absolute top-20 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 ease-in-out"
                style={{ 
                  width: `${((activeStep + 1) / workflowSteps.length) * 100}%`,
                  boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
                }}
              ></div>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
              {workflowSteps.map((step, index) => (
                <div 
                  key={step.id} 
                  className={`relative group transition-all duration-500 ${
                    index <= activeStep ? 'transform scale-105' : ''
                  }`}
                >
                  <Card className={`border-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 ${
                    index === activeStep ? 'ring-4 ring-blue-500/50 shadow-2xl' : ''
                  }`}>
                    <CardContent className="p-8 text-center">
                      {/* Animated step number */}
                      <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white transition-all duration-500 ${
                        index <= activeStep 
                          ? `bg-gradient-to-r ${step.color} scale-110 animate-pulse` 
                          : 'bg-slate-300'
                      }`}>
                        {step.id}
                      </div>

                      {/* Animated icon */}
                      <div className={`bg-gradient-to-br ${step.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white transition-all duration-500 ${
                        index === activeStep 
                          ? 'animate-bounce scale-110' 
                          : index < activeStep 
                            ? 'scale-105' 
                            : 'scale-100 opacity-60'
                      }`}>
                        {step.icon}
                      </div>

                      <h3 className="text-xl font-display font-semibold mb-4 text-slate-900">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Progress indicator */}
                      {index === activeStep && (
                        <div className="mt-4 w-full bg-slate-200 rounded-full h-2">
                          <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full animate-pulse" style={{ width: '100%' }}></div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Manual step controls */}
            <div className="flex justify-center mt-8 space-x-2">
              {workflowSteps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeStep 
                      ? 'bg-blue-500 scale-125' 
                      : index < activeStep 
                        ? 'bg-green-500' 
                        : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Simple */}
      <section className="py-32 bg-slate-50">
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
                {[
                  {
                    title: "100% Professional & Reliable",
                    description: "Trained, vetted, and experienced cleaning professionals"
                  },
                  {
                    title: "Advanced Equipment",
                    description: "State-of-the-art cleaning technology and eco-friendly products"
                  },
                  {
                    title: "Trusted by Industry Leaders",
                    description: "Proven track record with clients like TATA and major corporations"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl group hover:shadow-2xl transition-all duration-500">
              <img 
                src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=600&h=600&fit=crop" 
                alt="Professional cleaning equipment"
                className="w-full h-80 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Packages Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-5xl font-display font-semibold text-slate-900">
              Our <span className="gradient-text">Packages</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the perfect level of perfection for your space with our exclusive cleaning packages
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <Card className="group hover:shadow-xl transition-all duration-500 border-0 bg-white transform hover:-translate-y-2 border-2 border-blue-100">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
                  <span className="text-2xl">💎</span>
                </div>
                <h3 className="text-2xl font-display font-semibold mb-4 text-slate-900">Basic Package</h3>
                <p className="text-slate-600 mb-6">Perfect for regular maintenance</p>
                <div className="space-y-3 text-sm text-slate-600 mb-8">
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Standard deep cleaning
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Eco-friendly products
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    6-month warranty
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Choose Basic
                </Button>
              </CardContent>
            </Card>

            {/* Premium Package */}
            <Card className="group hover:shadow-xl transition-all duration-500 border-0 bg-white transform hover:-translate-y-2 border-2 border-green-100 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <CardContent className="p-8 text-center">
                <div className="bg-green-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-100 group-hover:scale-110 transition-all duration-300">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="text-2xl font-display font-semibold mb-4 text-slate-900">Premium Package</h3>
                <p className="text-slate-600 mb-6">Perfect for thorough cleaning</p>
                <div className="space-y-3 text-sm text-slate-600 mb-8">
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Advanced cleaning techniques
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Premium eco-friendly products
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    1-year warranty
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Includes sanitization
                  </div>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Choose Premium
                </Button>
              </CardContent>
            </Card>

            {/* Luxury Package */}
            <Card className="group hover:shadow-xl transition-all duration-500 border-0 bg-white transform hover:-translate-y-2 border-2 border-purple-100">
              <CardContent className="p-8 text-center">
                <div className="bg-purple-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-100 group-hover:scale-110 transition-all duration-300">
                  <span className="text-2xl">👑</span>
                </div>
                <h3 className="text-2xl font-display font-semibold mb-4 text-slate-900">Luxury Package</h3>
                <p className="text-slate-600 mb-6">Perfect for the uncompromising</p>
                <div className="space-y-3 text-sm text-slate-600 mb-8">
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    White-glove service
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Premium products & equipment
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    2-year warranty
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Sanitization & deodorizing
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Post-service inspection
                  </div>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  Choose Luxury
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Simple Testimonial */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="w-16 h-16 text-slate-300 mx-auto mb-8 animate-pulse" />
          <blockquote className="text-2xl font-display text-slate-700 mb-8 leading-relaxed">
            "SK Cleaning Services transformed our office environment beyond expectations. 
            Their professional approach and attention to detail is unmatched."
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
              alt="Client testimonial"
              className="w-12 h-12 rounded-full border-2 border-blue-500"
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
    </div>
  );
}
