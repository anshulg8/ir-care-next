export default function VideoSection({ videoTitle, videoLink }) {
  return (
    <section className="bg-white px-4 py-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">
        {videoTitle}
      </h2>

      <div className="w-full aspect-video rounded-lg overflow-hidden shadow-md">
        <iframe
          className="w-full h-full"
          src={videoLink}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
