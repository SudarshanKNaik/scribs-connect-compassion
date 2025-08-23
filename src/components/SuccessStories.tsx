import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Computer Science Student",
    content: "Thanks to Scribs, I completed my final exams with confidence. My volunteer writer Sarah understood my needs perfectly and helped me achieve a first-class degree.",
    impact: "First-Class Honours"
  },
  {
    name: "David Chen", 
    role: "Volunteer Writer",
    content: "Being part of Scribs has been incredibly fulfilling. Helping students like Maria succeed in their studies reminds me why education should be accessible to everyone.",
    impact: "2 Years Volunteering"
  },
  {
    name: "Fatima Al-Zahra",
    role: "Law Student",
    content: "The support I received through Scribs transformed my academic journey. My volunteer helped me navigate complex legal texts and I'm now pursuing my dream career.",
    impact: "Law Degree Achieved"
  }
];

const SuccessStories = () => {
  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Stories of{" "}
            <span className="bg-gradient-warm bg-clip-text text-transparent">
              Transformation
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every connection we facilitate creates ripples of positive change. 
            Here are just a few stories from our incredible community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Quote */}
                  <div className="relative">
                    <div className="absolute -top-2 -left-2 text-6xl text-primary/20 font-serif">"</div>
                    <p className="text-card-foreground leading-relaxed relative z-10 pt-4">
                      {testimonial.content}
                    </p>
                  </div>

                  {/* Impact Badge */}
                  <div className="inline-flex items-center bg-gradient-warm px-4 py-2 rounded-full">
                    <span className="text-accent-warm-foreground font-semibold text-sm">
                      {testimonial.impact}
                    </span>
                  </div>

                  {/* Author */}
                  <div className="border-t border-border/50 pt-6">
                    <div className="font-semibold text-card-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Community Stats */}
        <div className="mt-20 text-center">
          <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
            <h3 className="text-2xl font-bold text-card-foreground mb-8">
              Building an Inclusive Community Together
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Countries Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">500+</div>
                <div className="text-muted-foreground">Exams Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-warm mb-2">98%</div>
                <div className="text-muted-foreground">Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-gentle mb-2">24/7</div>
                <div className="text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;