import { motion } from 'framer-motion';
import { FocusCards } from '@/components/ui/focus-cards';
import { ImageTrailDemo } from '@/components/ui/image-trail-demo';

function Hero() {
  const destinationCards = [
    {
      title: "España",
      src: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=3270&auto=format&fit=crop",
    },
    {
      title: "Francia",
      src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=3273&auto=format&fit=crop",
    },
    {
      title: "Estados Unidos",
      src: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=3389&auto=format&fit=crop",
    },
    {
      title: "Italia",
      src: "https://images.unsplash.com/photo-1529260830199-42c24126f198?q=80&w=3276&auto=format&fit=crop",
    },
    {
      title: "Emiratos Árabes",
      src: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?q=80&w=3270&auto=format&fit=crop",
    },
    {
      title: "Suiza",
      src: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=3270&auto=format&fit=crop",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 bg-pure-black" />
      <div className="relative flex flex-col items-center justify-center px-4 lg:px-[10%] xl:px-[15%]">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          src="/src/components/jbp/Tarjeta Javier BOSCO - A.jpg"
          alt="Javier Bosco"
          className="w-full h-auto max-w-[1920px] mx-auto"
          style={{
            objectFit: 'contain',
            objectPosition: 'center',
          }}
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="w-full max-w-[1600px] mx-auto py-16 lg:py-20"
        >
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-20">
            {/* Left Column */}
            <div className="w-full md:w-[40%] flex flex-col items-center justify-center space-y-8">
              <h2 
                className="text-2xl md:text-3xl lg:text-4xl font-playfair leading-relaxed text-center max-w-[360px] lg:max-w-[420px] tracking-wide"
                style={{
                  background: 'linear-gradient(145deg, #FFFFFF 0%, #D3D3D3 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '0.02em',
                  lineHeight: '1.4',
                }}
              >
                Más que una inmobiliaria, tu acceso a oportunidades
              </h2>
              
              <div className="flex flex-col gap-4 w-full max-w-[280px] lg:max-w-[320px]">
                <button className="btn-primary w-full text-sm lg:text-base">
                  DESCUBRIR MÁS
                </button>
                <button className="btn-secondary w-full text-sm lg:text-base">
                  CONTACTAR
                </button>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-[60%] flex items-center">
              <div className="space-y-8 font-lora text-center md:text-left">
                <p className="text-lg lg:text-xl leading-relaxed text-ash/90">
                  En Javier Bosco Properties, entendemos que el verdadero lujo no es solo una propiedad, 
                  sino el acceso a las oportunidades correctas. Nos especializamos en bienes raíces de 
                  alto nivel y operaciones off-market, conectando a nuestros clientes con propiedades 
                  únicas en cualquier parte del mundo.
                </p>
                
                <p className="text-lg lg:text-xl leading-relaxed text-ash/90">
                  Nuestra red global de compradores, inversores y empresarios nos permite ofrecer un 
                  enfoque personalizado y estratégico, asegurando que cada operación sea más que una 
                  transacción: sea una puerta a nuevas posibilidades.
                </p>
                
                <p className="text-lg lg:text-xl leading-relaxed text-ash/90">
                  Con una visión moderna y un marketing de vanguardia, destacamos cada propiedad con 
                  la exclusividad y discreción que el mercado de lujo exige. Más que una firma 
                  inmobiliaria, somos tu conexión con lo extraordinario.
                </p>
              </div>
            </div>
          </div>

          {/* Destinations Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-24 lg:mt-32"
          >
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-playfair text-center mb-12 lg:mb-16"
              style={{
                background: 'linear-gradient(145deg, #FFFFFF 0%, #D3D3D3 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Presencia Internacional
            </h2>
            <div className="max-w-[1400px] mx-auto">
              <FocusCards cards={destinationCards} />
            </div>
          </motion.div>

          {/* Vision Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="mt-24 lg:mt-32 max-w-[1400px] mx-auto"
          >
            <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-[80px]">
              <div className="w-full lg:w-1/2">
                <h2 
                  className="text-xl md:text-2xl lg:text-3xl font-playfair mb-8 tracking-wide"
                  style={{
                    background: 'linear-gradient(145deg, #FFFFFF 0%, #D3D3D3 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Donde quieras estar, nosotros lo hacemos posible
                </h2>
                <div className="space-y-8 font-lora">
                  <p className="text-sm lg:text-base leading-[1.8] text-ash/90">
                    Desde los rascacielos de Nueva York hasta las playas privadas de Maldivas, 
                    desde una villa en Mónaco hasta un penthouse en Dubái, no hay fronteras cuando 
                    se trata de encontrar lo excepcional.
                  </p>
                  
                  <p className="text-sm lg:text-base leading-[1.8] text-ash/90">
                    En Javier Bosco Properties, no seguimos mapas, los creamos. Si buscas una 
                    inversión estratégica, un nuevo hogar o simplemente el lugar perfecto para tu 
                    próximo capítulo, nos encargamos de encontrarlo antes de que llegue al mercado.
                  </p>
                  
                  <p className="text-sm lg:text-base leading-[1.8] text-ash/90">
                    Cada destino tiene su esencia, su historia y su exclusividad. Nosotros te 
                    conectamos con propiedades que no solo cumplen tus expectativas, sino que las 
                    superan. No se trata solo de comprar un lugar, sino de acceder a una vida 
                    diseñada a tu medida.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <ImageTrailDemo />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;