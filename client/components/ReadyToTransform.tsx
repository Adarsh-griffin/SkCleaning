import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Sparkles } from 'lucide-react';

export default function ReadyToTransform() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-green-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">


          <h2 className="text-5xl lg:text-6xl font-display font-semibold leading-tight">
            Ready to Transform 
            <br />
            <span className="gradient-text">Your Space?</span>
          </h2>
          
          <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            Join 100+ satisfied clients who trust SK Cleaning Services for their premium cleaning needs. 
            Get your free consultation today and experience the difference.
          </p>
          
          {/* Contact highlight */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md mx-auto transform hover:scale-105 transition-all duration-300">
            <div className="space-y-4">
              <div className="text-white">
                <div className="text-sm opacity-80">Call Now for Instant Quote</div>
                <div className="text-3xl font-display font-bold animate-pulse">92094 47145</div>
              </div>
              <div className="text-white/80 text-sm">
                Available 24/7 • Free Consultation • Pune & PCMC
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-12 py-6 bg-white text-slate-900 hover:bg-gray-100 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Get Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-12 py-6 border-white text-white hover:bg-white/10 rounded-xl backdrop-blur-sm hover:scale-105 transition-all duration-300"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-3 gap-8 pt-8 max-w-2xl mx-auto">
            <div className="text-center group">
              <div className="text-2xl font-display font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300">100+</div>
              <div className="text-white/70 text-sm">Happy Clients</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl font-display font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-white/70 text-sm">Available</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl font-display font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300">TATA</div>
              <div className="text-white/70 text-sm">Trusted</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
