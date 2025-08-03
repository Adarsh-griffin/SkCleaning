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
  Eye,
  Award,
  TrendingUp,
  Zap,
  ArrowDown,
  Quote,
  ChevronLeft,
  ChevronRight,
  Calendar,
  ClipboardCheck,
  Brush,
  CheckSquare
} from 'lucide-react';

export default function Index() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [beforeAfterView, setBeforeAfterView] = useState<{ [key: number]: 'before' | 'after' }>({
    0: 'before',
    1: 'before',
    2: 'before'
  });

  const testimonials = [
    {
      name: "Rajesh Patel",
      company: "TATA Consultancy Services",
      role: "Facilities Manager",
      content: "SK Cleaning Services transformed our office environment beyond expectations. Their attention to detail and professional approach made our workspace spotless and hygienic. The team is reliable and delivers consistent quality.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Priya Sharma",
      company: "TechMahindra",
      role: "Office Administrator",
      content: "Exceptional service quality! Our IT hub has never been cleaner. They understand the unique requirements of tech environments and deliver with precision. Highly recommended for commercial spaces.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b742?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Amit Kumar",
      company: "Infosys Limited",
      role: "Facility Head",
      content: "Professional, efficient, and trustworthy. SK Cleaning Services has been maintaining our facilities for over 2 years. Their industrial cleaning expertise is unmatched in Pune.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const beforeAfterProjects = [
    {
      title: "Corporate Office Deep Clean",
      location: "IT Hub, Pune",
      before: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
      after: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=600&h=400&fit=crop"
    },
    {
      title: "Restaurant Kitchen Sanitization",
      location: "Commercial District, PCMC",
      before: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
      after: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&brightness=1.2"
    },
    {
      title: "Industrial Floor Cleaning",
      location: "Manufacturing Unit, Pune",
      before: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&h=400&fit=crop",
      after: "https://images.unsplash.com/photo-1581092446206-53b4e9d0c0a2?w=600&h=400&fit=crop"
    }
  ];

  const toggleBeforeAfter = (index: number) => {
    setBeforeAfterView(prev => ({
      ...prev,
      [index]: prev[index] === 'before' ? 'after' : 'before'
    }));
  };

  return (
    <div className="min-h-screen">
      {/* Premium Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium">
                  <Award className="w-4 h-4 mr-2" />
                  Trusted by Industry Leaders
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-premium">Professional</span>{' '}
                  <span className="gradient-text">Deep Cleaning</span>{' '}
                  <span className="text-premium">Services</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Transform your workspace with our premium cleaning solutions. We deliver spotless, hygienic, and germ-free environments for offices, restaurants, and industrial facilities across Pune & PCMC.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" className="text-lg px-10 py-6 shadow-luxury transition-smooth hover:shadow-xl hover:scale-105">
                  Get Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-10 py-6 transition-smooth hover:scale-105">
                  <Phone className="mr-2 w-5 h-5" />
                  92094 47145
                </Button>
              </div>

              {/* Premium Trust Indicators */}
              <div className="grid grid-cols-3 gap-8 pt-10 border-t border-gray-200">
                <div className="text-center group">
                  <div className="text-4xl font-bold gradient-text mb-2 transition-smooth group-hover:scale-110">100+</div>
                  <div className="text-sm text-muted-foreground font-medium">Projects Completed</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-bold gradient-text mb-2 transition-smooth group-hover:scale-110">95%</div>
                  <div className="text-sm text-muted-foreground font-medium">Client Satisfaction</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-bold gradient-text mb-2 transition-smooth group-hover:scale-110">24/7</div>
                  <div className="text-sm text-muted-foreground font-medium">Service Available</div>
                </div>
              </div>
            </div>

            <div className="lg:justify-self-end relative">
              {/* Main Hero Image */}
              <div className="relative">
                <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 shadow-luxury">
                  <img 
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=700&fit=crop" 
                    alt="Professional cleaning team at work"
                    className="rounded-2xl w-full h-[500px] object-cover"
                  />
                  
                  {/* Floating Cards */}
                  <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-6 shadow-luxury">
                    <div className="flex items-center space-x-3">
                      <div className="bg-success/10 p-3 rounded-lg">
                        <CheckCircle className="w-6 h-6 text-success" />
                      </div>
                      <div>
                        <div className="font-bold text-premium">ISO Certified</div>
                        <div className="text-sm text-muted-foreground">Quality Assured</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-luxury">
                    <div className="flex items-center space-x-3">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Shield className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-bold text-premium">Trusted by TATA</div>
                        <div className="text-sm text-muted-foreground">Industry Leader</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </section>

      {/* Services Gallery Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-5xl font-bold">
              <span className="text-premium">Our</span>{' '}
              <span className="gradient-text">Premium Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive cleaning solutions designed to exceed expectations and transform your workspace
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Commercial Deep Cleaning */}
            <Card className="group hover:shadow-luxury transition-smooth overflow-hidden border-0 bg-gradient-to-br from-white to-blue-50">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop" 
                  alt="Commercial office cleaning"
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="bg-primary p-3 rounded-lg mb-4 w-fit">
                    <Building2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Commercial Deep Cleaning</h3>
                  <p className="text-white/90">Offices • IT Hubs • Corporate Parks</p>
                </div>
              </div>
              <CardContent className="p-8">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Comprehensive cleaning for offices, commercial spaces, and IT hubs. Complete space revitalization with attention to every detail.
                </p>
                <div className="flex items-center justify-between">
                  <Button variant="outline" className="group-hover:bg-primary group-hover:text-white transition-smooth">
                    Learn More
                  </Button>
                  <div className="text-2xl font-bold gradient-text">₹5,000+</div>
                </div>
              </CardContent>
            </Card>

            {/* Restaurant Cleaning */}
            <Card className="group hover:shadow-luxury transition-smooth overflow-hidden border-0 bg-gradient-to-br from-white to-green-50">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop" 
                  alt="Restaurant kitchen cleaning"
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="bg-success p-3 rounded-lg mb-4 w-fit">
                    <Utensils className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Restaurant Cleaning</h3>
                  <p className="text-white/90">Kitchens • Dining Areas • Food Courts</p>
                </div>
              </div>
              <CardContent className="p-8">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Specialized kitchen degreasing, dining area sanitization, and complete food service area cleaning.
                </p>
                <div className="flex items-center justify-between">
                  <Button variant="outline" className="group-hover:bg-success group-hover:text-white transition-smooth">
                    Learn More
                  </Button>
                  <div className="text-2xl font-bold gradient-text">₹8,000+</div>
                </div>
              </CardContent>
            </Card>

            {/* Industrial Cleaning */}
            <Card className="group hover:shadow-luxury transition-smooth overflow-hidden border-0 bg-gradient-to-br from-white to-purple-50">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&h=400&fit=crop" 
                  alt="Industrial facility cleaning"
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="bg-info p-3 rounded-lg mb-4 w-fit">
                    <Factory className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Industrial Cleaning</h3>
                  <p className="text-white/90">Factories • Cleanrooms • Manufacturing</p>
                </div>
              </div>
              <CardContent className="p-8">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  ISO-standard cleanroom maintenance, anti-bacterial cleaning, and heavy-duty industrial sanitization.
                </p>
                <div className="flex items-center justify-between">
                  <Button variant="outline" className="group-hover:bg-info group-hover:text-white transition-smooth">
                    Learn More
                  </Button>
                  <div className="text-2xl font-bold gradient-text">₹12,000+</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Before & After Showcase */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-5xl font-bold">
              <span className="text-premium">Transformation</span>{' '}
              <span className="gradient-text">Gallery</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See the remarkable transformations we've achieved for our clients across Pune and PCMC
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {beforeAfterProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-luxury bg-white">
                <div className="relative h-80 overflow-hidden cursor-pointer" onClick={() => toggleBeforeAfter(index)}>
                  <img 
                    src={beforeAfterView[index] === 'before' ? project.before : project.after}
                    alt={`${project.title} - ${beforeAfterView[index]}`}
                    className="w-full h-full object-cover transition-smooth"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  
                  {/* Before/After Toggle */}
                  <div className="absolute top-4 left-4">
                    <div className={`px-4 py-2 rounded-full text-white font-bold ${
                      beforeAfterView[index] === 'before' ? 'bg-red-500' : 'bg-green-500'
                    }`}>
                      {beforeAfterView[index] === 'before' ? 'BEFORE' : 'AFTER'}
                    </div>
                  </div>
                  
                  {/* Click Indicator */}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3">
                    <Eye className="w-5 h-5 text-premium" />
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.location}</p>
                  <Button 
                    variant="outline" 
                    className="w-full transition-smooth hover:bg-primary hover:text-white"
                    onClick={() => toggleBeforeAfter(index)}
                  >
                    Toggle View
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Workflow Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-5xl font-bold">
              <span className="text-premium">Our</span>{' '}
              <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to delivering exceptional cleaning results every time
            </p>
          </div>

          {/* Process Flow Chart */}
          <div className="relative">
            {/* Connection Lines */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-info"></div>

            <div className="grid lg:grid-cols-4 gap-12">
              {/* Step 1 */}
              <div className="relative group">
                <div className="bg-white rounded-3xl p-8 shadow-luxury border-2 border-primary/10 group-hover:border-primary/30 transition-smooth text-center">
                  <div className="bg-gradient-to-br from-primary to-info p-6 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-smooth">
                    <Calendar className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-premium">Initial Consultation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We assess your space, understand requirements, and create a customized cleaning plan
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative group">
                <div className="bg-white rounded-3xl p-8 shadow-luxury border-2 border-success/10 group-hover:border-success/30 transition-smooth text-center">
                  <div className="bg-gradient-to-br from-success to-green-400 p-6 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-smooth">
                    <ClipboardCheck className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-success text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-premium">Planning & Preparation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Equipment setup, team briefing, and preparation of eco-friendly cleaning solutions
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative group">
                <div className="bg-white rounded-3xl p-8 shadow-luxury border-2 border-info/10 group-hover:border-info/30 transition-smooth text-center">
                  <div className="bg-gradient-to-br from-info to-blue-400 p-6 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-smooth">
                    <Brush className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-info text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-premium">Deep Cleaning Execution</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Systematic cleaning using advanced equipment and proven methodologies
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative group">
                <div className="bg-white rounded-3xl p-8 shadow-luxury border-2 border-purple-200 group-hover:border-purple-300 transition-smooth text-center">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-6 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-smooth">
                    <CheckSquare className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    4
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-premium">Quality Inspection</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Final inspection, client walkthrough, and satisfaction confirmation
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Process Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">24hrs</div>
              <div className="text-muted-foreground">Average Completion</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">100%</div>
              <div className="text-muted-foreground">Quality Assured</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">15+</div>
              <div className="text-muted-foreground">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">99%</div>
              <div className="text-muted-foreground">On-Time Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-premium to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-5xl font-bold">
              Client <span className="gradient-text">Testimonials</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients across Pune and PCMC
            </p>
          </div>

          {/* Featured Testimonial */}
          <div className="relative mb-16">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white overflow-hidden">
              <CardContent className="p-12 text-center">
                <Quote className="w-16 h-16 text-primary mx-auto mb-8 opacity-50" />
                <blockquote className="text-2xl font-medium mb-8 leading-relaxed">
                  "{testimonials[activeTestimonial].content}"
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <img 
                    src={testimonials[activeTestimonial].image}
                    alt={testimonials[activeTestimonial].name}
                    className="w-16 h-16 rounded-full border-2 border-primary"
                  />
                  <div className="text-left">
                    <div className="font-bold text-lg">{testimonials[activeTestimonial].name}</div>
                    <div className="text-white/70">{testimonials[activeTestimonial].role}</div>
                    <div className="text-primary font-medium">{testimonials[activeTestimonial].company}</div>
                  </div>
                </div>
                <div className="flex justify-center mt-6">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <button 
              onClick={() => setActiveTestimonial(prev => prev === 0 ? testimonials.length - 1 : prev - 1)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-smooth"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => setActiveTestimonial(prev => prev === testimonials.length - 1 ? 0 : prev + 1)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-smooth"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* All Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className={`bg-white/5 backdrop-blur-sm border-white/10 text-white cursor-pointer transition-smooth hover:bg-white/10 ${
                  index === activeTestimonial ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setActiveTestimonial(index)}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full border-2 border-primary mr-4"
                    />
                    <div>
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="text-white/70 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                  <p className="text-white/90 mb-4 leading-relaxed">{testimonial.content.substring(0, 120)}...</p>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary via-info to-primary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-5xl font-bold text-white">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Join 100+ satisfied clients who trust SK Cleaning Services for their premium cleaning needs
            </p>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-md mx-auto">
              <div className="space-y-4">
                <div className="text-white">
                  <div className="text-sm opacity-80">Call Now for Instant Quote</div>
                  <div className="text-3xl font-bold">92094 47145</div>
                </div>
                <div className="text-white/80 text-sm">
                  Available 24/7 • Free Consultation • Pune & PCMC
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-12 py-6 shadow-luxury hover:scale-105 transition-smooth">
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-12 py-6 border-white text-white hover:bg-white hover:text-primary transition-smooth">
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold gradient-text">100+</div>
              <div className="text-muted-foreground">Successful Projects</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold gradient-text">95%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold gradient-text">5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold gradient-text">24/7</div>
              <div className="text-muted-foreground">Service Available</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
