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

      {data.videos && data.videos.length > 0 ? (
        <section className="w-full flex-1 py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl text-white font-display font-medium mb-4">{data.title.replace('Proceeding ', '')}</h2>
            <p className="text-center text-sm text-gray-300 max-w-2xl mb-12">
              A prestigious global platform bringing together researchers, engineers, scientists, and industry professionals to discuss cutting-edge innovations shaping the future of technology and engineering.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
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
          </div>
        </section>
      ) : (
        <main className="flex-1 flex items-center justify-center py-24 px-4">
          <div className="text-center">
            <h1 className="text-3xl text-white font-display font-bold mb-4">{data.title}</h1>
            <p className="text-gray-300">{data.description}</p>
          </div>
        </main>
      )}

      <Footer />
    </div>
  );
};

export default ProceedingLayout;
