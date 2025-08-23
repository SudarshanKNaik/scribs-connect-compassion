import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-inclusion.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-light/20 to-secondary-light/20" />
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                Empowering{" "}
                <span className="bg-gradient-warm bg-clip-text text-transparent">
                  Blind Students
                </span>{" "}
                Through Connection
              </h1>
              <p className="text-xl lg:text-2xl text-primary-foreground/90 max-w-2xl">
                Scribs connects blind and visually impaired students with compassionate volunteer writers, 
                creating bridges to academic success and independence.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-6">
              <p className="text-primary-foreground/95 text-lg italic">
                "Education is the most powerful weapon which you can use to change the world. 
                At Scribs, we ensure that visual impairment never stands in the way of learning."
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                variant="warm"
                className="text-lg px-8 py-4 shadow-warm hover:shadow-lg transition-all duration-300"
                aria-label="Find a volunteer writer to help with your studies"
              >
                Find a Writer
              </Button>
              <Button 
                size="lg" 
                variant="gentle"
                className="text-lg px-8 py-4 shadow-soft hover:shadow-lg transition-all duration-300"
                aria-label="Volunteer to help blind students as a writer"
              >
                Become a Volunteer
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-warm">1,200+</div>
                <div className="text-primary-foreground/80">Students Helped</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-gentle">850+</div>
                <div className="text-primary-foreground/80">Active Volunteers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-light">95%</div>
                <div className="text-primary-foreground/80">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-warm">
              <img 
                src={heroImage} 
                alt="Diverse group of people connecting and helping each other through technology, showing inclusivity and collaboration in education"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 bg-accent-warm/90 backdrop-blur-sm rounded-lg p-4 shadow-warm">
              <div className="text-accent-warm-foreground font-semibold">24/7 Support</div>
              <div className="text-accent-warm-foreground/80 text-sm">Always here to help</div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-accent-gentle/90 backdrop-blur-sm rounded-lg p-4 shadow-warm">
              <div className="text-accent-gentle-foreground font-semibold">Free Service</div>
              <div className="text-accent-gentle-foreground/80 text-sm">Education for everyone</div>
            </div>
          </div>
        </div>
      </div>

      {/* Accessibility Indicator */}
      <div className="absolute bottom-6 left-6 bg-card/90 backdrop-blur-sm rounded-lg p-3 shadow-card">
        <div className="flex items-center gap-2 text-card-foreground">
          <span className="w-3 h-3 bg-accent-warm rounded-full animate-pulse" />
          <span className="text-sm font-medium">Screen Reader Optimized</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;