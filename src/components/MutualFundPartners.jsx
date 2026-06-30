import React, { useRef, useState, useEffect } from "react";

export default function MutualFundPartners() {
  const row1Logos = [
    { name: "360 One", src: "/icons/360-one.png" },
    { name: "Abakkus", src: "/icons/abakkus.png" },
    { name: "Aditya Birla", src: "/icons/aditya_v2_landing.png" },
    { name: "Angel One", src: "/icons/angelone-new.png" },
    { name: "Axis", src: "/icons/axis.png" },
    { name: "Bajaj", src: "/icons/bajaj.png" },
    { name: "Bandhan", src: "/icons/Bandhan.png" },
    { name: "Baroda BNP", src: "/icons/baroda-bnp.png" },
    { name: "BOI", src: "/icons/boi.png" },
    { name: "Canara Robeco", src: "/icons/canara_robeco.png" },
    { name: "Choice", src: "/icons/choice.png" },
    { name: "DSP", src: "/icons/DSP.png" },
    { name: "Edelweiss", src: "/icons/edel.png" },
    { name: "Franklin", src: "/icons/franklin.png" },
    { name: "Groww", src: "/icons/Groww-New.png" },
    { name: "HDFC", src: "/icons/HDFC.png" },
  ];

  const row2Logos = [
    { name: "Helios", src: "/icons/Helios.png" },
    { name: "HSBC", src: "/icons/HSBC.png" },
    { name: "ICICI", src: "/icons/ICICI.png" },
    { name: "Invesco", src: "/icons/Invesco.png" },
    { name: "ITI", src: "/icons/itimf_logo.png" },
    { name: "Jio", src: "/icons/jio.png" },
    { name: "JM Financial", src: "/icons/jmf.png" },
    { name: "Kotak", src: "/icons/KOTAK.png" },
    { name: "LIC", src: "/icons/lic.png" },
    { name: "Mahindra Manulife", src: "/icons/MahindraManulife.png" },
    { name: "Motilal Oswal", src: "/icons/mo.png" },
    { name: "Navi", src: "/icons/navi_mf_logo.png" },
    { name: "Nippon", src: "/icons/njam.png" },
    { name: "Old Bridge", src: "/icons/Old_Bridge.png" },
    { name: "PGIM", src: "/icons/PGIMamc.png" },
    { name: "PPFAS", src: "/icons/PPFAS.png" },
    { name: "Quant", src: "/icons/quant.png" },
    { name: "Quantum", src: "/icons/quantum.png" },
    { name: "SBI", src: "/icons/SBI.png" },
    { name: "TATA", src: "/icons/TATA.png" },
    { name: "UTI", src: "/icons/uti.png" },
    { name: "WhiteOak", src: "/icons/WhiteOak.png" },
    { name: "Zerodha", src: "/icons/zerodha.png" },
  ];

  const InteractiveTickerRow = ({ items, reverse = false }) => {
    const containerRef = useRef(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeftStart = useRef(0);
    const [isHovered, setIsHovered] = useState(false);

    // Frame-based auto-scroll cycle loops
    useEffect(() => {
      const el = containerRef.current;
      if (!el) return;

      // Duplicate content safety baseline centering 
      if (el.scrollLeft === 0) {
        el.scrollLeft = el.scrollWidth / 3;
      }

      let animationFrameId;
      const speed = 0.8; // Change pixel pace increment to adjust default speed

      const updateAutoScroll = () => {
        if (!isDragging.current && !isHovered) {
          if (reverse) {
            el.scrollLeft -= speed;
          } else {
            el.scrollLeft += speed;
          }

          // Reset loop smoothly when tracking bounds limits cross boundaries
          const thirdWidth = el.scrollWidth / 3;
          if (el.scrollLeft >= thirdWidth * 2) {
            el.scrollLeft -= thirdWidth;
          } else if (el.scrollLeft <= 0) {
            el.scrollLeft += thirdWidth;
          }
        }
        animationFrameId = requestAnimationFrame(updateAutoScroll);
      };

      animationFrameId = requestAnimationFrame(updateAutoScroll);
      return () => cancelAnimationFrame(animationFrameId);
    }, [reverse, isHovered]);

    // Native Pointer Drag Event Handlers
    const handlePointerDown = (e) => {
      isDragging.current = true;
      startX.current = e.pageX - containerRef.current.offsetLeft;
      scrollLeftStart.current = containerRef.current.scrollLeft;
      containerRef.current.setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e) => {
      if (!isDragging.current) return;
      const x = e.pageX - containerRef.current.offsetLeft;
      const walk = (x - startX.current) * 1.5; // Drag friction sensitivity multiplier
      let nextScroll = scrollLeftStart.current - walk;

      const thirdWidth = containerRef.current.scrollWidth / 3;
      if (nextScroll <= 0) nextScroll += thirdWidth;
      if (nextScroll >= thirdWidth * 2) nextScroll -= thirdWidth;

      containerRef.current.scrollLeft = nextScroll;
    };

    const handlePointerUp = (e) => {
      isDragging.current = false;
      if (containerRef.current) {
        containerRef.current.releasePointerCapture(e.pointerId);
      }
    };

    // Render 3 exact copies to create an endless buffer canvas for fast manual swiping
    const tripleItems = [...items, ...items, ...items];

    return (
      <div
        ref={containerRef}
        className="flex w-full overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)] py-4 select-none touch-pan-y active:cursor-grabbing"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex gap-6 shrink-0 items-center">
          {tripleItems.map((logo, idx) => (
            <div
              key={`${logo.name}-${idx}`}
              className="h-14 w-40 shrink-0 bg-white border border-zinc-200 rounded-xl px-5 py-3 flex items-center justify-center hover:scale-[1.03] transition duration-300 shadow-md shadow-black/10 pointer-events-none"
            >
              <img
                src={logo.src}
                alt={`${logo.name} logo`}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="bg-zinc-950 text-white py-16 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-12 ">
          <span className="inline-block mb-3 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-1 text-xs font-mono font-medium text-zinc-400 tracking-wider ">
            Associated with 42+ Mutual Funds & Health Insurance Providers
          </span>
          <h2 className="text-2xl md:text-3xl font-sans font-bold tracking-tight text-zinc-100">
            Institutional Asset Ecosystem
          </h2>
          <p className="mt-2 text-zinc-500 text-xs md:text-sm font-light">
            Execution-integrated with India's premier asset management houses.
          </p>
        </div>

        {/* Dynamic Dual-Direction Slider Track Box */}
        <div className="space-y-3 max-w-5xl mx-auto relative">
          <InteractiveTickerRow items={row1Logos} reverse={false} />
          <InteractiveTickerRow items={row2Logos} reverse={true} />
        </div>

      </div>
    </section>
  );
}