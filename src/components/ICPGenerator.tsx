import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Copy, Sparkles, Target, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ICPOutput } from "./ICPOutput";
import { generateICP } from "@/lib/icp-generator";

export const ICPGenerator = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<any>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!input.trim()) {
      toast({
        title: "Input Required",
        description: "Please describe your product or service first.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    
    try {
      // Simulate API call - in real implementation, this would call an AI service
      await new Promise(resolve => setTimeout(resolve, 2000));
      const generatedICP = generateICP(input);
      setOutput(generatedICP);
      
      toast({
        title: "ICP Generated Successfully",
        description: "Your ideal customer profile is ready!",
      });
    } catch (error) {
      toast({
        title: "Generation Failed",
        description: "Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-primary shadow-glow">
              <Target className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              ICP Generator
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Generate structured Ideal Customer Profiles that can be directly used for prospecting on 
            LinkedIn, Apollo.io, Clearbit, and other B2B platforms.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <Card className="shadow-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Describe Your Product
              </CardTitle>
              <CardDescription>
                Provide details about your product, service, target market, and value proposition.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="product-input">Product Description</Label>
                <Textarea
                  id="product-input"
                  placeholder="Example: We're an AI-powered LinkedIn outreach tool that helps B2B SaaS founders and sales teams personalize cold messages at scale. Our tool analyzes prospect profiles and generates custom messaging that increases reply rates by 3x..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  rows={12}
                  className="min-h-[300px] bg-muted/30 border-border/50 focus:ring-primary/50"
                />
              </div>
              
              <Button 
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full bg-gradient-primary hover:opacity-90 shadow-elegant"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full mr-2" />
                    Generating ICP...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4 mr-2" />
                    Generate ICP
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Output Section */}
          <div className="space-y-6">
            {output ? (
              <ICPOutput data={output} />
            ) : (
              <Card className="shadow-card border-border/50 border-dashed">
                <CardContent className="flex items-center justify-center min-h-[400px] text-center">
                  <div className="space-y-4">
                    <div className="p-4 rounded-full bg-muted/30 w-fit mx-auto">
                      <Target className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-muted-foreground">
                        Your ICP will appear here
                      </h3>
                      <p className="text-sm text-muted-foreground/70">
                        Fill in your product details and click generate
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};