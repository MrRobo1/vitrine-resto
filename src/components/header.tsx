
export default function Header() {
    return (
        <header className="relative h-[60vh] w-full">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/video-prez-plats.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéo.
            </video>
            <div className="absolute inset-0 bg-foreground/65 z-10" />

            <div className="absolute inset-0 flex items-center justify-center z-20">
              <h1 className="text-white text-4xl md:text-6xl text-center">
                Bienvenue chez<br />Épicurien
              </h1>
            </div>
        </header>
    )
}