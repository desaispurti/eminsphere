import { useParams, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { proceedings } from "@/data/eminsphereData";

const ProceedingLayout = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const pathId = location.pathname.split('/').pop() || "";
  const finalId = id || pathId;

  // Default fallback if not found
  const data = finalId ? proceedings[finalId] : undefined;

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col pt-32 px-4 items-center gap-4 bg-background">
        <Header />
        <h1 className="text-3xl font-display font-bold">Proceeding Not Found</h1>
        <p className="text-muted-foreground">The proceeding paper you are looking for is currently being updated or does not exist.</p>
        <a href="/" className="text-primary hover:text-accent font-semibold">Return Home</a>
        <div className="mt-auto w-full"><Footer /></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#313B34] flex flex-col font-body">
      <Header />

      <main className="flex-1 w-full flex flex-col py-16 px-4 md:px-8">
        <div className="max-w-6xl w-full mx-auto flex flex-col items-center">
          <div className="text-center mb-12">
            <h1 className="text-3xl text-white font-display font-bold mb-4">{data.title}</h1>
            <p className="text-sm md:text-base text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {data.description}
            </p>
          </div>

          {data.videos && data.videos.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-16">
              {data.videos.map((vid, i) => (
                <div key={i} className="rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] bg-black group relative aspect-video">
                  <iframe
                    className="w-full h-full absolute inset-0"
                    src={`https://www.youtube.com/embed/${vid}?rel=0`}
                    title={`Conference Video ${i+1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-xl" />
                </div>
              ))}
            </div>
          )}

          {data.papers && data.papers.length > 0 && (
            <div className="w-full flex flex-col gap-4">
              {data.papers.map((paper, idx) => (
                <div key={idx} className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/10 w-full flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all hover:bg-black/60">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2 leading-tight">{paper.title}</h3>
                    <p className="text-[#A2E2C7] text-sm font-medium">{paper.authors}</p>
                  </div>
                  <a 
                    href={paper.pdfLink} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="shrink-0 inline-flex items-center justify-center bg-white text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors whitespace-nowrap"
                  >
                    Click Here (PDF)
                  </a>
                </div>
              ))}
            </div>
          )}
          
          {(!data.videos || data.videos.length === 0) && (!data.papers || data.papers.length === 0) && (
            <div className="py-12 mt-4 text-center border border-white/5 bg-black/20 rounded-xl w-full max-w-2xl">
              <p className="text-gray-400 italic">Papers and proceedings are currently being updated.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProceedingLayout;
