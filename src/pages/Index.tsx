import flowchartImage from "@/assets/ai-lead-generation-flowchart-english.png";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-8">
      <div className="text-center max-w-4xl">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">AI Lead Generation Platform</h1>
        <p className="text-xl text-muted-foreground mb-8">Autonomous lead discovery through social media, web scraping, and data mining</p>
        <div className="border rounded-lg overflow-hidden shadow-lg">
          <img 
            src={flowchartImage} 
            alt="AI Lead Generation Agent Flowchart" 
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
