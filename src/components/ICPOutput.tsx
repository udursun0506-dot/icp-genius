import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, CheckCheck, Download, Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ICPOutputProps {
  data: any;
}

export const ICPOutput = ({ data }: ICPOutputProps) => {
  const [showJson, setShowJson] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    
    toast({
      title: "Copied to clipboard",
      description: "ICP data has been copied successfully.",
    });
  };

  const downloadJson = () => {
    const dataStr = JSON.stringify(data, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'ideal-customer-profile.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  return (
    <div className="space-y-6">
      {/* Action Buttons */}
      <div className="flex gap-3 justify-end">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowJson(!showJson)}
          className="border-border/50"
        >
          {showJson ? <EyeOff className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
          {showJson ? "Hide" : "Show"} JSON
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={downloadJson}
          className="border-border/50"
        >
          <Download className="h-4 w-4 mr-2" />
          Download
        </Button>
        <Button
          size="sm"
          onClick={() => copyToClipboard(JSON.stringify(data, null, 2))}
          className="bg-accent hover:bg-accent/90"
        >
          {copied ? <CheckCheck className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
          {copied ? "Copied!" : "Copy JSON"}
        </Button>
      </div>

      {showJson ? (
        /* JSON View */
        <Card className="shadow-card border-border/50">
          <CardHeader>
            <CardTitle className="text-lg">Raw JSON Output</CardTitle>
            <CardDescription>
              Ready to import into your prospecting tools
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="text-xs bg-muted/30 p-4 rounded-lg overflow-x-auto border border-border/50">
              <code>{JSON.stringify(data, null, 2)}</code>
            </pre>
          </CardContent>
        </Card>
      ) : (
        /* Structured View */
        <div className="space-y-6">
          {/* Personas */}
          <Card className="shadow-card border-border/50">
            <CardHeader>
              <CardTitle className="text-lg text-primary">Customer Personas</CardTitle>
              <CardDescription>
                Key decision makers and influencers in your target market
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {data.personas?.map((persona: any, index: number) => (
                <div key={index} className="space-y-4 p-4 bg-muted/20 rounded-lg border border-border/30">
                  <div className="flex items-start justify-between">
                    <h4 className="font-semibold text-lg">{persona.title}</h4>
                    <Badge variant="secondary" className="ml-2">
                      Persona {index + 1}
                    </Badge>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h5 className="font-medium text-foreground/90 mb-2">Job Titles</h5>
                      <div className="flex flex-wrap gap-1">
                        {persona.job_titles?.map((title: string, idx: number) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {title}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-foreground/90 mb-2">Company Details</h5>
                      <div className="space-y-1 text-muted-foreground">
                        {persona.company_stage && <p>Stage: {persona.company_stage}</p>}
                        {persona.team_size && <p>Team Size: {persona.team_size}</p>}
                        {persona.industry && (
                          <div>
                            Industry: {persona.industry.join(", ")}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {persona.pain_points && (
                    <div>
                      <h5 className="font-medium text-foreground/90 mb-2">Pain Points</h5>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {persona.pain_points.map((point: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-destructive mt-1.5 h-1 w-1 bg-current rounded-full flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {persona.growth_signals && (
                    <div>
                      <h5 className="font-medium text-foreground/90 mb-2">Growth Signals</h5>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {persona.growth_signals.map((signal: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-accent mt-1.5 h-1 w-1 bg-current rounded-full flex-shrink-0" />
                            {signal}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Filter Logic */}
          {data.filter_logic && (
            <Card className="shadow-card border-border/50">
              <CardHeader>
                <CardTitle className="text-lg text-secondary">Filter Logic</CardTitle>
                <CardDescription>
                  Use these filters in LinkedIn Sales Navigator, Apollo.io, or similar platforms
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  {Object.entries(data.filter_logic).map(([key, value]) => (
                    <div key={key} className="space-y-2">
                      <h5 className="font-medium capitalize text-foreground/90">
                        {key.replace(/_/g, ' ')}
                      </h5>
                      <div className="text-muted-foreground">
                        {Array.isArray(value) ? value.join(", ") : String(value)}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Keywords & Intent Signals */}
          <div className="grid md:grid-cols-2 gap-6">
            {data.sample_keywords && (
              <Card className="shadow-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">Sample Keywords</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {data.sample_keywords.map((keyword: string, idx: number) => (
                      <Badge key={idx} variant="outline" className="bg-muted/20">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {data.intent_signals && (
              <Card className="shadow-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">Intent Signals</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {data.intent_signals.map((signal: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1.5 h-1 w-1 bg-current rounded-full flex-shrink-0" />
                        {signal}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      )}
    </div>
  );
};