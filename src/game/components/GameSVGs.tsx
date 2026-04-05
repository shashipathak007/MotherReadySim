import React from 'react';
import Svg, { Rect, Circle, Path, Ellipse, Polygon, G, Text, LinearGradient, RadialGradient, Stop, Defs, Line } from 'react-native-svg';

export const BedroomScene = () => (
  <Svg width="100%" height="100%" viewBox="0 0 400 800" preserveAspectRatio="xMidYMid slice">
    <Rect width="400" height="500" fill="#E8B573" />
    <Rect y="500" width="400" height="300" fill="#A47B55" />
    <Rect x="20" y="40" width="120" height="180" fill="#FFF2CC" rx="10" />
    <Rect x="25" y="45" width="50" height="80" fill="#FFFFFF" rx="5" opacity="0.6" />
    <Rect x="85" y="45" width="50" height="80" fill="#FFFFFF" rx="5" opacity="0.6" />
    <Rect x="25" y="135" width="50" height="80" fill="#FFFFFF" rx="5" opacity="0.6" />
    <Rect x="85" y="135" width="50" height="80" fill="#FFFFFF" rx="5" opacity="0.6" />
    <Rect x="0" y="320" width="220" height="180" fill="#7D98A1" rx="15" />
    <Rect x="0" y="300" width="60" height="200" fill="#604A3A" />
    <Rect x="60" y="340" width="160" height="180" fill="#BDC8C4" rx="10" />
    <Rect x="250" y="100" width="120" height="15" fill="#604A3A" rx="5" />
    <Rect x="260" y="90" width="30" height="10" fill="#C17C54" />
    <Rect x="300" y="80" width="10" height="20" fill="#2B6D45" />
    <Rect x="280" y="350" width="120" height="150" fill="#8B604A" rx="5" />
    <Rect x="290" y="360" width="100" height="40" fill="#75503C" rx="5" />
    <Rect x="290" y="410" width="100" height="40" fill="#75503C" rx="5" />
  </Svg>
);

export const DeskScene = () => (
  <Svg width="100%" height="100%" viewBox="0 0 400 800" preserveAspectRatio="xMidYMid slice">
    <Rect width="400" height="300" fill="#3D5A5C" />
    <Rect y="300" width="400" height="500" fill="#936441" />
    <Circle cx="350" cy="200" r="40" fill="#F4D03F" />
    <Polygon points="350,160 380,240 320,240" fill="#BDC3C7" />
    <Path d="M350,240 Q350,280 380,300" stroke="#7F8C8D" strokeWidth="8" fill="none" />
    <Rect x="40" y="280" width="120" height="15" fill="#EAECEE" rx="2" transform="rotate(-5 100 280)" />
    <Rect x="40" y="270" width="110" height="10" fill="#D5D8DC" rx="2" transform="rotate(-15 100 270)" />
    <Rect x="250" y="280" width="60" height="40" fill="#BDC8C4" rx="2" />
  </Svg>
);

export const PhoneScene = () => (
  <Svg width="100%" height="100%" viewBox="0 0 400 800" preserveAspectRatio="xMidYMid slice">
    <Rect width="400" height="800" fill="#EAD1B6" />
    <Circle cx="60" cy="100" r="30" fill="#FFFFFF" />
    <Circle cx="60" cy="100" r="22" fill="#D35400" />
    <Rect x="280" y="100" width="80" height="80" fill="#F9E79F" rx="2" transform="rotate(12 320 140)" />
  </Svg>
);

export const LivingRoomScene = () => (
  <Svg width="100%" height="100%" viewBox="0 0 400 800" preserveAspectRatio="xMidYMid slice">
    <Rect width="400" height="800" fill="#FBF2E1" />
    <Rect x="40" y="400" width="320" height="150" fill="#D68A70" rx="20" />
    <Rect x="60" y="350" width="140" height="80" fill="#C46E52" rx="15" />
    <Rect x="200" y="350" width="140" height="80" fill="#C46E52" rx="15" />
  </Svg>
);

export const HospitalEntranceScene = () => (
  <Svg width="100%" height="100%" viewBox="0 0 400 800" preserveAspectRatio="xMidYMid slice">
    <Rect width="400" height="400" fill="#FFCF9E" />
    <Circle cx="200" cy="180" r="120" fill="#FFF2CC" />
    <Rect x="50" y="200" width="300" height="300" fill="#E8EBED" rx="5" />
    <Rect x="150" y="320" width="100" height="180" fill="#95A5A6" rx="5" />
    <Rect x="185" y="220" width="30" height="10" fill="#E74C3C" />
    <Rect x="195" y="210" width="10" height="30" fill="#E74C3C" />
    <Rect y="500" width="400" height="300" fill="#BDC3C7" />
    <Path d="M0,500 L400,500" stroke="#7F8C8D" strokeWidth="5" />
  </Svg>
);

export const PregnantWoman = ({ pose = 'standing' }) => (
  <Svg width="390" height="420" viewBox="0 0 390 420" preserveAspectRatio="xMidYMax meet">
    <Defs>
      <LinearGradient id="skinW" x1="0" y1="0" x2="0" y2="1">
        <Stop offset="0%" stopColor="#F0B98A" />
        <Stop offset="100%" stopColor="#D9895A" />
      </LinearGradient>
      <LinearGradient id="kurtaW" x1="0" y1="0" x2="1" y2="1">
        <Stop offset="0%" stopColor="#5CD6D6" />
        <Stop offset="100%" stopColor="#1A9AA0" />
      </LinearGradient>
      <LinearGradient id="hairW" x1="0" y1="0" x2="0" y2="1">
        <Stop offset="0%" stopColor="#1A0A00" />
        <Stop offset="100%" stopColor="#3A1F0D" />
      </LinearGradient>
      <LinearGradient id="sofaBodyW" x1="0" y1="0" x2="0" y2="1">
        <Stop offset="0%" stopColor="#F0C49A" />
        <Stop offset="100%" stopColor="#D4956A" />
      </LinearGradient>
      <LinearGradient id="sofaSeatW" x1="0" y1="0" x2="0" y2="1">
        <Stop offset="0%" stopColor="#E8B07A" />
        <Stop offset="100%" stopColor="#C47840" />
      </LinearGradient>
      <LinearGradient id="cushionW" x1="0" y1="0" x2="0" y2="1">
        <Stop offset="0%" stopColor="#FDDBB4" />
        <Stop offset="100%" stopColor="#EEC48A" />
      </LinearGradient>
    </Defs>

    {/* ─── WIDE SOFA — spans full 390px width ─── */}
    {/* Sofa back wall/back */}
    <Rect x="0" y="250" width="390" height="170" rx="0" fill="url(#sofaBodyW)" />
    {/* Sofa back cushion row */}
    <Rect x="10" y="240" width="370" height="110" rx="24" fill="url(#sofaBodyW)" />
    {/* Back cushion highlight */}
    <Path d="M10,252 Q195,240 380,252" stroke="rgba(255,255,255,0.25)" strokeWidth="4" fill="none" />
    {/* Back cushion seam */}
    <Path d="M195,240 L195,350" stroke="rgba(0,0,0,0.08)" strokeWidth="2" />

    {/* Sofa seat */}
    <Rect x="0" y="320" width="390" height="100" rx="0" fill="url(#sofaSeatW)" />
    {/* Seat front edge */}
    <Rect x="0" y="410" width="390" height="10" rx="4" fill="#B8682A" />

    {/* Left arm */}
    <Rect x="0" y="248" width="55" height="172" rx="18" fill="#D4956A" />
    <Rect x="5" y="244" width="45" height="30" rx="14" fill="#E8C090" />
    {/* Right arm */}
    <Rect x="335" y="248" width="55" height="172" rx="18" fill="#D4956A" />
    <Rect x="340" y="244" width="45" height="30" rx="14" fill="#E8C090" />

    {/* Left seat cushion */}
    <Rect x="55" y="322" width="138" height="88" rx="10" fill="url(#cushionW)" />
    <Path d="M60,330 Q124,322 188,330" stroke="rgba(255,255,255,0.3)" strokeWidth="3" fill="none" />
    {/* Right seat cushion */}
    <Rect x="197" y="322" width="138" height="88" rx="10" fill="url(#cushionW)" />
    <Path d="M202,330 Q266,322 330,330" stroke="rgba(255,255,255,0.3)" strokeWidth="3" fill="none" />
    {/* Cushion divider */}
    <Rect x="191" y="322" width="8" height="88" rx="4" fill="rgba(0,0,0,0.07)" />

    {/* Sofa legs */}
    <Rect x="40" y="400" width="20" height="20" rx="4" fill="#8B4A18" />
    <Rect x="330" y="400" width="20" height="20" rx="4" fill="#8B4A18" />

    {/* ─── WOMAN centered on sofa ─── */}
    <G transform="translate(195, 0)">
      {/* ── THIGHS (sitting horizontally) ── */}
      <Rect x="-55" y="315" width="50" height="20" rx="10" fill="url(#skinW)" />
      <Rect x="5" y="315" width="50" height="20" rx="10" fill="url(#skinW)" />
      {/* Lower legs hanging down */}
      <Rect x="-42" y="333" width="20" height="55" rx="10" fill="url(#skinW)" />
      <Rect x="22" y="333" width="20" height="55" rx="10" fill="url(#skinW)" />
      {/* Feet */}
      <Ellipse cx="-32" cy="388" rx="16" ry="9" fill="#C8784A" />
      <Ellipse cx="32" cy="388" rx="16" ry="9" fill="#C8784A" />
      {/* Sandal straps */}
      <Path d="M-47,388 L-17,388" stroke="#8B4A18" strokeWidth="3" strokeLinecap="round" />
      <Path d="M17,388 L47,388" stroke="#8B4A18" strokeWidth="3" strokeLinecap="round" />

      {/* ── KURTA BODY ── */}
      <Path d="M-68,155 C-85,162 -95,185 -90,225 L-88,330 L88,330 L90,225 C95,185 85,162 68,155 Z" fill="url(#kurtaW)" />
      {/* Kurta neckline */}
      <Path d="M-25,155 Q0,170 25,155" stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="none" />
      {/* Kurta border at hem */}
      <Path d="M-90,310 L90,310" stroke="rgba(255,255,255,0.2)" strokeWidth="6" />
      {/* Kurta highlight */}
      <Path d="M-68,160 C-78,185 -80,210 -75,240" stroke="rgba(255,255,255,0.25)" strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* Kurta embroidery dots */}
      <Circle cx="-15" cy="175" r="3" fill="rgba(255,255,255,0.5)" />
      <Circle cx="0" cy="170" r="3" fill="rgba(255,255,255,0.5)" />
      <Circle cx="15" cy="175" r="3" fill="rgba(255,255,255,0.5)" />
      {/* Dupatta/scarf over shoulder */}
      <Path d="M-68,155 C-90,165 -105,190 -95,230" stroke="#1A7A80" strokeWidth="16" fill="none" strokeLinecap="round" opacity="0.7" />
      <Path d="M-68,155 C-90,165 -105,190 -95,230" stroke="rgba(255,255,255,0.2)" strokeWidth="4" fill="none" strokeLinecap="round" />

      {/* ── BABY BUMP ── */}
      <Ellipse cx="0" cy="245" rx="58" ry="52" fill="#2ABCC0" />
      <Ellipse cx="-8" cy="238" rx="20" ry="18" fill="rgba(255,255,255,0.12)" />

      {/* ── LEFT ARM resting on bump ── */}
      <Path d="M-68,168 C-88,195 -85,230 -58,250" stroke="#D9895A" strokeWidth="20" fill="none" strokeLinecap="round" />
      <Ellipse cx="-58" cy="256" rx="16" ry="11" fill="#F0B98A" />
      {/* ── RIGHT ARM resting on bump ── */}
      <Path d="M68,168 C88,195 85,230 58,250" stroke="#D9895A" strokeWidth="20" fill="none" strokeLinecap="round" />
      <Ellipse cx="58" cy="256" rx="16" ry="11" fill="#F0B98A" />

      {/* ── NECK ── */}
      <Rect x="-12" y="125" width="24" height="35" rx="12" fill="url(#skinW)" />

      {/* ── HEAD ── */}
      <Ellipse cx="0" cy="90" rx="48" ry="52" fill="url(#skinW)" />

      {/* ── HAIR ── */}
      {/* Hair cap on top */}
      <Path d="M-48,75 C-55,40 -35,5 0,2 C35,5 55,40 48,75 C55,60 65,80 58,105 C62,120 52,140 42,132 L40,115 C52,108 52,85 42,80 C32,76 16,72 0,72 C-16,72 -32,76 -42,80 C-52,85 -52,108 -40,115 L-42,132 C-52,140 -62,120 -58,105 C-65,80 -55,60 -48,75 Z" fill="url(#hairW)" />
      {/* Long hair down left side */}
      <Path d="M-42,128 C-55,165 -60,210 -52,270" stroke="#1A0A00" strokeWidth="16" fill="none" strokeLinecap="round" />
      <Path d="M-48,130 C-62,170 -66,215 -58,272" stroke="#3A1F0D" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.5" />
      {/* Long hair down right side */}
      <Path d="M42,128 C55,165 60,210 52,270" stroke="#1A0A00" strokeWidth="16" fill="none" strokeLinecap="round" />
      {/* Hair bun/braid detail */}
      <Ellipse cx="42" cy="55" rx="10" ry="8" fill="#1A0A00" />
      <Path d="M38,48 Q45,38 52,45" stroke="#3A1F0D" strokeWidth="4" fill="none" strokeLinecap="round" />

      {/* ── FACE ── */}
      {/* Eyes */}
      <Ellipse cx="-16" cy="88" rx="7" ry="8" fill="#1A0A00" />
      <Ellipse cx="16" cy="88" rx="7" ry="8" fill="#1A0A00" />
      <Circle cx="-14" cy="86" r="3" fill="#FFFFFF" />
      <Circle cx="18" cy="86" r="3" fill="#FFFFFF" />
      <Circle cx="-13" cy="85" r="1.5" fill="#5588CC" />
      <Circle cx="19" cy="85" r="1.5" fill="#5588CC" />
      {/* Eyebrows */}
      {pose !== 'worried' ? (
        <G>
          <Path d="M-26,77 Q-16,73 -6,77" stroke="#1A0A00" strokeWidth="3" fill="none" strokeLinecap="round" />
          <Path d="M6,77 Q16,73 26,77" stroke="#1A0A00" strokeWidth="3" fill="none" strokeLinecap="round" />
        </G>
      ) : (
        <G>
          <Path d="M-26,74 Q-16,70 -6,75" stroke="#1A0A00" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <Path d="M6,75 Q16,70 26,74" stroke="#1A0A00" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        </G>
      )}
      {/* Nose */}
      <Ellipse cx="0" cy="102" rx="5" ry="3" fill="#C8784A" opacity="0.5" />
      <Path d="M-4,100 Q0,106 4,100" stroke="#C8784A" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Mouth */}
      {pose !== 'worried' ? (
        <Path d="M-12,114 Q0,122 12,114" stroke="#C8784A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      ) : (
        <Path d="M-10,118 Q0,114 10,118" stroke="#C8845A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      )}
      {/* Cheeks */}
      <Ellipse cx="-28" cy="108" rx="12" ry="7" fill="#F5A0A0" opacity="0.35" />
      <Ellipse cx="28" cy="108" rx="12" ry="7" fill="#F5A0A0" opacity="0.35" />
      {/* Bindi */}
      <Circle cx="0" cy="78" r="3.5" fill="#CC2244" />
    </G>
  </Svg>
);

export const FCHVCharacter = () => (
  <Svg width="40" height="80" viewBox="0 0 50 100">
    <G transform="translate(25, 20)">
      <Circle cy="-10" r="8" fill="#E0A96D" />
      <Path d="M-8,-10 A8,8 0 0,1 8,-10 L10,5 A5,5 0 0,0 -10,5 Z" fill="#2C3E50" />
      <Path d="M-10,0 L10,0 L15,60 L-15,60 Z" fill="#2ECC71" />
      <Path d="M-10,0 L12,30 L10,60 L-10,0 Z" fill="#27AE60" />
      <Path d="M-10,5 L-15,25 L-5,30" fill="none" stroke="#E0A96D" strokeWidth="4" strokeLinecap="round" />
      <Path d="M10,5 L15,25 L5,30" fill="none" stroke="#E0A96D" strokeWidth="4" strokeLinecap="round" />
    </G>
  </Svg>
);

// ─── HOSPITAL BAG — beautiful transparent SVG ───────────────────────────────
export const HospitalBag = ({ filled = 0, isZipped = false, glow = false }) => (
  <Svg width="230" height="190" viewBox="0 0 230 190">
    <Defs>
      <LinearGradient id="bagBody" x1="0" y1="0" x2="0" y2="1">
        <Stop offset="0%" stopColor="#F9C8DC" />
        <Stop offset="100%" stopColor="#E991B5" />
      </LinearGradient>
      <LinearGradient id="bagPocket" x1="0" y1="0" x2="0" y2="1">
        <Stop offset="0%" stopColor="#D4608E" />
        <Stop offset="100%" stopColor="#B03C72" />
      </LinearGradient>
      <LinearGradient id="strap" x1="0" y1="0" x2="0" y2="1">
        <Stop offset="0%" stopColor="#C2547E" />
        <Stop offset="100%" stopColor="#943060" />
      </LinearGradient>
      <RadialGradient id="glowRad" cx="50%" cy="50%" r="50%">
        <Stop offset="0%" stopColor="#FF6FAE" stopOpacity="0.3" />
        <Stop offset="100%" stopColor="#FF6FAE" stopOpacity="0" />
      </RadialGradient>
    </Defs>

    {glow && <Ellipse cx="115" cy="130" rx="100" ry="55" fill="url(#glowRad)" />}

    {/* Shadow */}
    <Ellipse cx="115" cy="178" rx="80" ry="10" fill="rgba(0,0,0,0.12)" />

    {/* Handle arch */}
    <Path d="M82,55 C82,20 148,20 148,55" fill="none" stroke="url(#strap)" strokeWidth="11" strokeLinecap="round" />
    <Path d="M82,55 C82,20 148,20 148,55" fill="none" stroke="#E8A0BE" strokeWidth="4" strokeLinecap="round" opacity="0.5" />

    {/* Main bag body */}
    <Rect x="22" y="52" width="186" height="118" rx="22" fill="url(#bagBody)" />
    {/* Body top highlight */}
    <Path d="M44,52 Q115,44 186,52" stroke="rgba(255,255,255,0.55)" strokeWidth="3" fill="none" strokeLinecap="round" />

    {/* Zipper line */}
    <Path d="M30,78 L200,78" stroke="#C0608A" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.7" />
    {/* Zipper pull */}
    {isZipped && (
      <G transform="translate(190,72)">
        <Rect width="16" height="9" rx="4" fill="#F1C40F" />
        <Circle cx="3" cy="4.5" r="2" fill="#B04C8A" />
      </G>
    )}

    {/* Front pocket */}
    <Rect x="50" y="90" width="130" height="72" rx="16" fill="url(#bagPocket)" />
    {/* Pocket shine */}
    <Path d="M66,90 Q115,82 164,90" stroke="rgba(255,255,255,0.2)" strokeWidth="4" fill="none" strokeLinecap="round" />

    {/* Heart on pocket */}
    <Path
      d="M115,120 C115,120 100,108 100,100 C100,95 105,92 110,95 C112,96 115,99 115,99 C115,99 118,96 120,95 C125,92 130,95 130,100 C130,108 115,120 115,120 Z"
      fill="rgba(255,255,255,0.35)"
    />

    {/* Packed items peeking out (when not zipped) */}
    {!isZipped && filled > 0 && (
      <G>
        <Rect x="68" y="60" width="20" height="18" rx="4" fill="#A8D8EA" opacity="0.9" />
        <Text x="72" y="73" fontSize="10" fill="#FFF">🧦</Text>
      </G>
    )}
    {!isZipped && filled > 1 && (
      <G>
        <Rect x="98" y="56" width="22" height="22" rx="4" fill="#FFB7B2" opacity="0.9" />
        <Text x="101" y="71" fontSize="12" fill="#FFF">🧴</Text>
      </G>
    )}
    {!isZipped && filled > 2 && (
      <G>
        <Rect x="130" y="60" width="20" height="18" rx="4" fill="#FFDAC1" opacity="0.9" />
        <Text x="133" y="73" fontSize="10" fill="#FFF">🍎</Text>
      </G>
    )}
    {!isZipped && filled > 3 && (
      <G>
        <Rect x="158" y="58" width="20" height="20" rx="4" fill="#E2F0CB" opacity="0.9" />
        <Text x="161" y="72" fontSize="11" fill="#FFF">🧸</Text>
      </G>
    )}

    {/* Side strap line */}
    <Path d="M22,110 L8,155 Q6,162 14,164 Q22,166 24,158 L34,115" fill="#D4608E" opacity="0.5" />
    <Path d="M208,110 L222,155 Q224,162 216,164 Q208,166 206,158 L196,115" fill="#D4608E" opacity="0.5" />
  </Svg>
);

// ─── OPEN FOLDER — beautiful transparent SVG ───────────────────────────────
export const OpenFolder = ({ glow = false, filled = 0 }) => (
  <Svg width="210" height="175" viewBox="0 0 210 175">
    <Defs>
      <LinearGradient id="fBack" x1="0" y1="0" x2="0" y2="1">
        <Stop offset="0%" stopColor="#4A9FE8" />
        <Stop offset="100%" stopColor="#1A6FBF" />
      </LinearGradient>
      <LinearGradient id="fFront" x1="0" y1="0" x2="0" y2="1">
        <Stop offset="0%" stopColor="#74BBFF" />
        <Stop offset="100%" stopColor="#2E8DE0" />
      </LinearGradient>
      <LinearGradient id="doc1" x1="0" y1="0" x2="0" y2="1">
        <Stop offset="0%" stopColor="#FFFFFF" />
        <Stop offset="100%" stopColor="#F0F4FF" />
      </LinearGradient>
      <RadialGradient id="fGlow" cx="50%" cy="50%" r="50%">
        <Stop offset="0%" stopColor="#3B82F6" stopOpacity="0.25" />
        <Stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
      </RadialGradient>
    </Defs>

    {glow && <Ellipse cx="105" cy="110" rx="95" ry="60" fill="url(#fGlow)" />}

    {/* Shadow */}
    <Ellipse cx="105" cy="168" rx="80" ry="8" fill="rgba(0,0,0,0.12)" />

    {/* Back of folder */}
    <Path d="M18,50 L55,50 L62,36 L192,36 C198,36 200,40 200,45 L200,155 C200,161 196,164 190,164 L20,164 C14,164 10,161 10,155 L10,58 C10,53 13,50 18,50 Z" fill="url(#fBack)" />
    {/* Back top shine */}
    <Path d="M62,36 L192,36 C198,36 200,40 200,45 L196,45 C196,41 194,38 192,38 L62,38 Z" fill="rgba(255,255,255,0.2)" />

    {/* Paper 1 — medical doc, tilted left */}
    {filled > 0 && (
      <G transform="rotate(-8 80 100)">
        <Rect x="28" y="30" width="62" height="82" rx="4" fill="url(#doc1)" />
        <Path d="M38,45 L80,45 M38,52 L74,52 M38,59 L68,59" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
        {/* Red cross */}
        <Rect x="48" y="65" width="18" height="6" rx="2" fill="#EF4444" />
        <Rect x="54" y="59" width="6" height="18" rx="2" fill="#EF4444" />
        <Circle cx="57" cy="68" r="10" fill="none" stroke="#EF4444" strokeWidth="1.5" opacity="0.4" />
      </G>
    )}

    {/* Paper 2 — ID card, tilted right */}
    {filled > 1 && (
      <G transform="rotate(6 130 95)">
        <Rect x="100" y="28" width="68" height="85" rx="4" fill="#FFF9E6" />
        <Rect x="108" y="36" width="52" height="30" rx="3" fill="#DBEAFE" />
        <Circle cx="122" cy="51" r="10" fill="#93C5FD" />
        <Rect x="136" y="46" width="20" height="4" rx="2" fill="#60A5FA" />
        <Rect x="136" y="54" width="14" height="3" rx="1.5" fill="#93C5FD" />
        <Rect x="108" y="74" width="52" height="3" rx="1.5" fill="#CBD5E1" />
        <Rect x="108" y="81" width="40" height="3" rx="1.5" fill="#CBD5E1" />
        <Rect x="108" y="88" width="30" height="3" rx="1.5" fill="#CBD5E1" />
        <Text x="110" y="108" fontSize="7" fill="#60A5FA" fontWeight="bold">HEALTH ID</Text>
      </G>
    )}

    {/* Paper 3 — report, centre */}
    {filled > 2 && (
      <G transform="rotate(-2 105 95)">
        <Rect x="72" y="22" width="60" height="78" rx="4" fill="#ECFDF5" />
        <Rect x="80" y="30" width="44" height="4" rx="2" fill="#6EE7B7" />
        <Rect x="80" y="38" width="36" height="3" rx="1.5" fill="#A7F3D0" />
        <Rect x="80" y="45" width="40" height="3" rx="1.5" fill="#A7F3D0" />
        <Circle cx="97" cy="65" r="14" fill="none" stroke="#34D399" strokeWidth="3" />
        <Path d="M90,65 L95,71 L104,58" stroke="#10B981" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </G>
    )}

    {/* Front flap of folder */}
    <Path d="M8,164 L202,164 L210,112 C212,106 208,100 202,100 L36,100 C30,100 22,104 19,110 L8,164 Z" fill="url(#fFront)" />
    {/* Front flap shine */}
    <Path d="M19,110 C22,104 30,100 36,100 L202,100 C208,100 212,106 210,112 L208,112 C206,106 202,102 196,102 L36,102 C30,102 23,106 21,112 Z" fill="rgba(255,255,255,0.18)" />

    {/* Tab label */}
    <Rect x="80" y="126" width="50" height="18" rx="6" fill="rgba(255,255,255,0.85)" />
    <Text x="93" y="139" fontSize="8" fill="#1E6FB5" fontWeight="bold">DOCS</Text>
  </Svg>
);

// ─── MINI ICONS for draggable circles ─────────────────────────────────────
// Each renders a 52×52 SVG — fully transparent background

// Citizenship card (ID card with photo)
export const IconCitizenship = () => (
  <Svg width="52" height="52" viewBox="0 0 52 52">
    <Defs>
      <LinearGradient id="idCard" x1="0" y1="0" x2="0" y2="1">
        <Stop offset="0%" stopColor="#1C6B9E" /><Stop offset="100%" stopColor="#0A4A7A" />
      </LinearGradient>
    </Defs>
    <Rect x="4" y="10" width="44" height="32" rx="5" fill="url(#idCard)" />
    <Rect x="4" y="10" width="44" height="8" rx="5" fill="#0A3A6A" />
    <Rect x="6" y="10" width="44" height="4" rx="2" fill="rgba(255,255,255,0.1)" />
    {/* Photo box */}
    <Rect x="8" y="22" width="14" height="16" rx="2" fill="#DBEAFE" />
    <Circle cx="15" cy="27" r="4" fill="#93C5FD" />
    <Path d="M9,38 Q15,32 21,38" fill="#7BBFF5" />
    {/* Text lines */}
    <Rect x="26" y="22" width="18" height="3" rx="1.5" fill="rgba(255,255,255,0.9)" />
    <Rect x="26" y="28" width="14" height="2.5" rx="1.25" fill="rgba(255,255,255,0.6)" />
    <Rect x="26" y="33" width="16" height="2.5" rx="1.25" fill="rgba(255,255,255,0.6)" />
    {/* Nepal emblem dots */}
    <Circle cx="12" cy="15" r="1.5" fill="#F59E0B" />
    <Text x="18" y="17" fontSize="5" fill="#F8FAFC" fontWeight="bold">NEPAL</Text>
  </Svg>
);

// Marriage certificate (decorative scroll)
export const IconMarriage = () => (
  <Svg width="52" height="52" viewBox="0 0 52 52">
    <Defs>
      <LinearGradient id="scroll" x1="0" y1="0" x2="0" y2="1">
        <Stop offset="0%" stopColor="#FEF9C3" /><Stop offset="100%" stopColor="#FDE68A" />
      </LinearGradient>
    </Defs>
    <Rect x="8" y="8" width="36" height="36" rx="3" fill="url(#scroll)" />
    {/* Scroll ends */}
    <Ellipse cx="8" cy="26" rx="5" ry="18" fill="#FDE68A" />
    <Ellipse cx="44" cy="26" rx="5" ry="18" fill="#FDE68A" />
    {/* Two rings */}
    <Circle cx="20" cy="20" r="6" fill="none" stroke="#F59E0B" strokeWidth="3" />
    <Circle cx="32" cy="20" r="6" fill="none" stroke="#F59E0B" strokeWidth="3" />
    <Path d="M24,20 Q26,23 28,20" fill="none" stroke="#F59E0B" strokeWidth="2" />
    {/* Text lines */}
    <Rect x="12" y="30" width="28" height="2.5" rx="1.25" fill="#92400E" opacity="0.5" />
    <Rect x="14" y="35" width="24" height="2" rx="1" fill="#92400E" opacity="0.35" />
    {/* Seal */}
    <Circle cx="26" cy="43" r="5" fill="#DC2626" opacity="0.8" />
    <Text x="23.5" y="45.5" fontSize="5" fill="#FFF" fontWeight="bold">✓</Text>
  </Svg>
);

// Ward/Palika letter (official letter with stamp)
export const IconLetter = () => (
  <Svg width="52" height="52" viewBox="0 0 52 52">
    <Defs>
      <LinearGradient id="letterBg" x1="0" y1="0" x2="0" y2="1">
        <Stop offset="0%" stopColor="#F0FDF4" /><Stop offset="100%" stopColor="#DCFCE7" />
      </LinearGradient>
    </Defs>
    <Rect x="6" y="8" width="40" height="36" rx="4" fill="url(#letterBg)" />
    <Rect x="6" y="8" width="40" height="10" rx="4" fill="#16A34A" />
    <Rect x="6" y="14" width="40" height="4" rx="0" fill="#15803D" />
    {/* Lines */}
    <Rect x="10" y="23" width="32" height="2.5" rx="1.25" fill="#86EFAC" />
    <Rect x="10" y="28" width="28" height="2" rx="1" fill="#86EFAC" />
    <Rect x="10" y="33" width="24" height="2" rx="1" fill="#86EFAC" />
    {/* Official stamp */}
    <Circle cx="38" cy="36" r="7" fill="none" stroke="#DC2626" strokeWidth="2" />
    <Circle cx="38" cy="36" r="4" fill="none" stroke="#DC2626" strokeWidth="1" />
    <Text x="35.5" y="38.5" fontSize="5" fill="#DC2626" fontWeight="bold">★</Text>
    {/* Header text */}
    <Text x="14" y="14" fontSize="5" fill="white" fontWeight="bold">PALIKA</Text>
  </Svg>
);

// ANC card (green health card with checkmarks)
export const IconANCCard = () => (
  <Svg width="52" height="52" viewBox="0 0 52 52">
    <Defs>
      <LinearGradient id="ancBg" x1="0" y1="0" x2="0" y2="1">
        <Stop offset="0%" stopColor="#ECFDF5" /><Stop offset="100%" stopColor="#A7F3D0" />
      </LinearGradient>
    </Defs>
    <Rect x="5" y="6" width="42" height="40" rx="5" fill="url(#ancBg)" />
    <Rect x="5" y="6" width="42" height="12" rx="5" fill="#059669" />
    <Rect x="5" y="14" width="42" height="4" rx="0" fill="#047857" />
    <Text x="9" y="15" fontSize="5.5" fill="white" fontWeight="bold">ANC CARD</Text>
    {/* Checkmark rows */}
    {[0,1,2,3,4,5,6,7].map(i => (
      <G key={i} transform={`translate(${i < 4 ? 9 : 29}, ${22 + (i % 4) * 6})`}>
        <Rect width="15" height="4.5" rx="2" fill={i < 5 ? '#34D399' : 'rgba(0,0,0,0.08)'} />
        {i < 5 && <Text x="2" y="4" fontSize="4" fill="white">✓ {i+1}</Text>}
        {i >= 5 && <Text x="2" y="4" fontSize="4" fill="#9CA3AF">{i+1}</Text>}
      </G>
    ))}
    <Text x="9" y="46" fontSize="4.5" fill="#065F46" fontWeight="bold">8 visits needed</Text>
  </Svg>
);

// Bank account (card with bank symbol)
export const IconBank = () => (
  <Svg width="52" height="52" viewBox="0 0 52 52">
    <Defs>
      <LinearGradient id="bankCard" x1="0" y1="1" x2="1" y2="0">
        <Stop offset="0%" stopColor="#1D4ED8" /><Stop offset="100%" stopColor="#6D28D9" />
      </LinearGradient>
    </Defs>
    <Rect x="3" y="12" width="46" height="28" rx="6" fill="url(#bankCard)" />
    {/* Chip */}
    <Rect x="9" y="20" width="10" height="8" rx="2" fill="#F59E0B" />
    <Line x1="9" y1="24" x2="19" y2="24" stroke="#D97706" strokeWidth="1" />
    <Line x1="14" y1="20" x2="14" y2="28" stroke="#D97706" strokeWidth="1" />
    {/* Card number dots */}
    {[0,1,2,3].map(i => (
      <G key={i} transform={`translate(${8 + i * 10}, 32)`}>
        <Circle cx="1" cy="1" r="1.2" fill="rgba(255,255,255,0.7)" />
        <Circle cx="4" cy="1" r="1.2" fill="rgba(255,255,255,0.7)" />
        <Circle cx="7" cy="1" r="1.2" fill="rgba(255,255,255,0.7)" />
      </G>
    ))}
    {/* Bank symbol */}
    <Text x="28" y="27" fontSize="12" fill="rgba(255,255,255,0.3)">₨</Text>
    <Text x="30" y="26" fontSize="9" fill="white">₨</Text>
  </Svg>
);

// Referral letter
export const IconReferral = () => (
  <Svg width="52" height="52" viewBox="0 0 52 52">
    <Defs>
      <LinearGradient id="refBg" x1="0" y1="0" x2="0" y2="1">
        <Stop offset="0%" stopColor="#FFF7ED" /><Stop offset="100%" stopColor="#FED7AA" />
      </LinearGradient>
    </Defs>
    <Rect x="6" y="6" width="40" height="40" rx="4" fill="url(#refBg)" />
    <Rect x="6" y="6" width="40" height="11" rx="4" fill="#EA580C" />
    <Rect x="6" y="13" width="40" height="4" rx="0" fill="#C2410C" />
    <Text x="10" y="14" fontSize="5" fill="white" fontWeight="bold">REFERRAL</Text>
    {/* Arrow right */}
    <Path d="M10,28 L30,28 M26,24 L32,28 L26,32" stroke="#EA580C" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    {/* From/To */}
    <Rect x="8" y="22" width="10" height="10" rx="2" fill="#FED7AA" />
    <Text x="9.5" y="30" fontSize="5">🏥</Text>
    <Rect x="34" y="22" width="10" height="10" rx="2" fill="#FED7AA" />
    <Text x="35.5" y="30" fontSize="5">🏨</Text>
    <Rect x="10" y="36" width="32" height="2.5" rx="1.25" fill="#FB923C" opacity="0.5" />
  </Svg>
);

// Ultrasound scan
export const IconUltrasound = () => (
  <Svg width="52" height="52" viewBox="0 0 52 52">
    <Defs>
      <LinearGradient id="usBg" x1="0" y1="0" x2="0" y2="1">
        <Stop offset="0%" stopColor="#1E1B4B" /><Stop offset="100%" stopColor="#312E81" />
      </LinearGradient>
    </Defs>
    <Rect x="4" y="6" width="44" height="40" rx="5" fill="url(#usBg)" />
    {/* Scan lines */}
    {[0,1,2,3,4].map(i => (
      <Path key={i} d={`M10,${14 + i*5} Q26,${10 + i*5 + (i===2?-4:2)} 42,${14 + i*5}`}
        stroke={`rgba(52,211,153,${0.3 + i*0.1})`} strokeWidth="1.5" fill="none" />
    ))}
    {/* Baby silhouette */}
    <Ellipse cx="26" cy="28" rx="8" ry="10" fill="none" stroke="#34D399" strokeWidth="1.5" opacity="0.6" />
    <Circle cx="26" cy="21" r="4" fill="none" stroke="#34D399" strokeWidth="1.5" opacity="0.6" />
    {/* Scan cursor */}
    <Line x1="26" y1="8" x2="26" y2="44" stroke="#34D399" strokeWidth="0.8" opacity="0.4" />
    <Text x="6" y="46" fontSize="4.5" fill="#6EE7B7">Ultrasound</Text>
  </Svg>
);

// Blood group card
export const IconBloodGroup = () => (
  <Svg width="52" height="52" viewBox="0 0 52 52">
    <Defs>
      <LinearGradient id="bloodBg" x1="0" y1="0" x2="0" y2="1">
        <Stop offset="0%" stopColor="#FFF1F2" /><Stop offset="100%" stopColor="#FFE4E6" />
      </LinearGradient>
    </Defs>
    <Rect x="5" y="6" width="42" height="40" rx="5" fill="url(#bloodBg)" />
    {/* Blood drop */}
    <Path d="M26,10 C26,10 16,22 16,28 C16,34 20.5,38 26,38 C31.5,38 36,34 36,28 C36,22 26,10 26,10 Z" fill="#EF4444" />
    <Ellipse cx="22" cy="28" rx="3" ry="5" fill="rgba(255,255,255,0.3)" />
    {/* Blood type text */}
    <Text x="20" y="32" fontSize="10" fill="white" fontWeight="bold">B+</Text>
  </Svg>
);

// CBC report (lab tube)
export const IconCBC = () => (
  <Svg width="52" height="52" viewBox="0 0 52 52">
    <Defs>
      <LinearGradient id="tubeBg" x1="0" y1="0" x2="1" y2="1">
        <Stop offset="0%" stopColor="#EDE9FE" /><Stop offset="100%" stopColor="#DDD6FE" />
      </LinearGradient>
      <LinearGradient id="tubeFluid" x1="0" y1="0" x2="0" y2="1">
        <Stop offset="0%" stopColor="#F87171" /><Stop offset="100%" stopColor="#DC2626" />
      </LinearGradient>
    </Defs>
    <Rect x="5" y="5" width="42" height="42" rx="5" fill="url(#tubeBg)" />
    {/* Test tubes */}
    {[0,1,2].map(i => (
      <G key={i} transform={`translate(${11 + i*12}, 8)`}>
        <Rect x="0" y="0" width="8" height="28" rx="4" fill="white" stroke="#A78BFA" strokeWidth="1.5" />
        <Rect x="1" y={28 - (i+1)*7} width="6" height={(i+1)*7} rx="3" fill={i===0?'#F87171':i===1?'#60A5FA':'#34D399'} />
        <Rect x="0" y="0" width="8" height="5" rx="2" fill="#7C3AED" />
      </G>
    ))}
    <Text x="9" y="46" fontSize="5" fill="#6D28D9" fontWeight="bold">CBC Report</Text>
  </Svg>
);

// HIV/Hepatitis test
export const IconHIV = () => (
  <Svg width="52" height="52" viewBox="0 0 52 52">
    <Defs>
      <LinearGradient id="hivBg" x1="0" y1="0" x2="0" y2="1">
        <Stop offset="0%" stopColor="#F0FDF4" /><Stop offset="100%" stopColor="#DCFCE7" />
      </LinearGradient>
    </Defs>
    <Rect x="5" y="6" width="42" height="40" rx="5" fill="url(#hivBg)" />
    {/* Rapid test strip */}
    <Rect x="15" y="10" width="22" height="32" rx="6" fill="white" stroke="#16A34A" strokeWidth="2" />
    <Rect x="18" y="14" width="16" height="6" rx="2" fill="#DCFCE7" />
    {/* Control line C */}
    <Rect x="19" y="24" width="14" height="2.5" rx="1.25" fill="#16A34A" />
    <Text x="17" y="23.5" fontSize="5" fill="#16A34A">C</Text>
    {/* Test line T */}
    <Rect x="19" y="30" width="14" height="2.5" rx="1.25" fill="#16A34A" opacity="0.3" />
    <Text x="17" y="29.5" fontSize="5" fill="#16A34A">T</Text>
    {/* Negative result checkmark */}
    <Circle cx="38" cy="12" r="7" fill="#16A34A" />
    <Path d="M34,12 L37,15 L42,9" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

// Urine test
export const IconUrine = () => (
  <Svg width="52" height="52" viewBox="0 0 52 52">
    <Defs>
      <LinearGradient id="urineBg" x1="0" y1="0" x2="0" y2="1">
        <Stop offset="0%" stopColor="#FFFBEB" /><Stop offset="100%" stopColor="#FEF3C7" />
      </LinearGradient>
      <LinearGradient id="urineFluid" x1="0" y1="0" x2="0" y2="1">
        <Stop offset="0%" stopColor="#FDE68A" /><Stop offset="100%" stopColor="#F59E0B" />
      </LinearGradient>
    </Defs>
    <Rect x="5" y="5" width="42" height="42" rx="5" fill="url(#urineBg)" />
    {/* Sample cup */}
    <Path d="M16,10 L36,10 L33,38 Q32,42 26,42 Q20,42 19,38 Z" fill="white" stroke="#F59E0B" strokeWidth="2" />
    {/* Fluid */}
    <Path d="M19,26 L33,26 L31,38 Q30,41 26,41 Q22,41 21,38 Z" fill="url(#urineFluid)" opacity="0.8" />
    {/* Test strip in cup */}
    <Rect x="24" y="11" width="5" height="22" rx="2" fill="#D1FAE5" stroke="#34D399" strokeWidth="1" />
    {[0,1,2,3].map(i=>(
      <Rect key={i} x="25" y={13+i*4} width="3" height="2.5" rx="1" fill={['#3B82F6','#10B981','#F59E0B','#EF4444'][i]} />
    ))}
  </Svg>
);

// Surgery records
export const IconSurgery = () => (
  <Svg width="52" height="52" viewBox="0 0 52 52">
    <Defs>
      <LinearGradient id="surgBg" x1="0" y1="0" x2="0" y2="1">
        <Stop offset="0%" stopColor="#FFF1F2" /><Stop offset="100%" stopColor="#FFE4E6" />
      </LinearGradient>
    </Defs>
    <Rect x="5" y="5" width="42" height="42" rx="5" fill="url(#surgBg)" />
    {/* Medical file */}
    <Rect x="10" y="8" width="32" height="36" rx="4" fill="white" stroke="#FDA4AF" strokeWidth="1.5" />
    {/* Red cross */}
    <Rect x="22" y="14" width="8" height="3" rx="1.5" fill="#EF4444" />
    <Rect x="24.5" y="11.5" width="3" height="8" rx="1.5" fill="#EF4444" />
    {/* Scissors icon */}
    <Path d="M14,30 Q18,26 22,30" stroke="#6B7280" strokeWidth="2" fill="none" strokeLinecap="round" />
    <Path d="M14,30 L22,38" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" />
    <Path d="M22,30 Q18,34 14,38" stroke="#6B7280" strokeWidth="2" fill="none" strokeLinecap="round" />
    <Circle cx="14" cy="30" r="3" fill="none" stroke="#9CA3AF" strokeWidth="1.5" />
    <Circle cx="14" cy="38" r="3" fill="none" stroke="#9CA3AF" strokeWidth="1.5" />
    {/* Text lines */}
    <Rect x="28" y="28" width="10" height="2" rx="1" fill="#FDA4AF" />
    <Rect x="28" y="32" width="8" height="2" rx="1" fill="#FDA4AF" />
    <Rect x="28" y="36" width="10" height="2" rx="1" fill="#FDA4AF" />
  </Svg>
);

// Medication list
export const IconMedication = () => (
  <Svg width="52" height="52" viewBox="0 0 52 52">
    <Defs>
      <LinearGradient id="medBg" x1="0" y1="0" x2="0" y2="1">
        <Stop offset="0%" stopColor="#F0F9FF" /><Stop offset="100%" stopColor="#E0F2FE" />
      </LinearGradient>
    </Defs>
    <Rect x="5" y="5" width="42" height="42" rx="5" fill="url(#medBg)" />
    {/* Pills */}
    <Ellipse cx="18" cy="18" rx="8" ry="5" fill="#F87171" transform="rotate(-35 18 18)" />
    <Path d="M12.5,13.5 L23.5,22.5" stroke="white" strokeWidth="1.5" />
    <Ellipse cx="18" cy="18" rx="8" ry="5" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1" transform="rotate(-35 18 18)" />
    {/* Capsule */}
    <Rect x="28" y="10" width="14" height="7" rx="3.5" fill="#60A5FA" />
    <Rect x="35" y="10" width="7" height="7" rx="3.5" fill="#93C5FD" />
    {/* List */}
    <Rect x="10" y="28" width="32" height="2.5" rx="1.25" fill="#0EA5E9" opacity="0.6" />
    <Rect x="10" y="33" width="28" height="2.5" rx="1.25" fill="#0EA5E9" opacity="0.4" />
    <Rect x="10" y="38" width="24" height="2.5" rx="1.25" fill="#0EA5E9" opacity="0.3" />
    <Circle cx="8" cy="29.25" r="1.5" fill="#0EA5E9" />
    <Circle cx="8" cy="34.25" r="1.5" fill="#0EA5E9" />
    <Circle cx="8" cy="39.25" r="1.5" fill="#0EA5E9" />
  </Svg>
);

// Bag items icons
export const IconClothes = () => (
  <Svg width="52" height="52" viewBox="0 0 52 52">
    <Path d="M15,8 L37,8 L44,18 L37,16 L37,44 L15,44 L15,16 L8,18 Z" fill="#A78BFA" />
    <Path d="M15,8 Q26,14 37,8" fill="#8B5CF6" />
    <Rect x="20" y="8" width="12" height="8" rx="6" fill="#DDD6FE" />
    <Rect x="17" y="24" width="18" height="2" rx="1" fill="rgba(255,255,255,0.4)" />
    <Rect x="17" y="30" width="18" height="2" rx="1" fill="rgba(255,255,255,0.4)" />
  </Svg>
);

export const IconBaby = () => (
  <Svg width="52" height="52" viewBox="0 0 52 52">
    <Circle cx="26" cy="20" r="12" fill="#FDE68A" />
    <Ellipse cx="26" cy="20" rx="6" ry="5" fill="#F0B98A" />
    <Circle cx="23" cy="19" r="1.5" fill="#1A0A00" />
    <Circle cx="29" cy="19" r="1.5" fill="#1A0A00" />
    <Path d="M22,23 Q26,26 30,23" stroke="#C8784A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <Path d="M14,30 Q26,44 38,30 Q36,50 26,50 Q16,50 14,30 Z" fill="#BFDBFE" />
  </Svg>
);

export const IconSnacks = () => (
  <Svg width="52" height="52" viewBox="0 0 52 52">
    {/* Apple */}
    <Path d="M26,12 C26,12 18,16 18,26 C18,34 22,40 26,40 C30,40 34,34 34,26 C34,16 26,12 26,12 Z" fill="#EF4444" />
    <Path d="M22,14 C22,14 20,10 26,10" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" />
    <Ellipse cx="22" cy="24" rx="4" ry="6" fill="rgba(255,255,255,0.2)" />
    {/* Biscuit */}
    <Rect x="10" y="32" width="12" height="10" rx="2" fill="#FDE68A" stroke="#F59E0B" strokeWidth="1" />
    {[0,1,2].map(i=><Circle key={i} cx={13+i*3} cy="37" r="0.8" fill="#D97706" />)}
    {/* Water bottle */}
    <Rect x="30" y="28" width="12" height="16" rx="3" fill="#BAE6FD" stroke="#38BDF8" strokeWidth="1.5" />
    <Rect x="33" y="25" width="6" height="5" rx="2" fill="#7DD3FC" />
  </Svg>
);

export const IconDocuments = () => (
  <Svg width="52" height="52" viewBox="0 0 52 52">
    <Defs>
      <LinearGradient id="stackDoc" x1="0" y1="0" x2="0" y2="1">
        <Stop offset="0%" stopColor="#BFDBFE" /><Stop offset="100%" stopColor="#93C5FD" />
      </LinearGradient>
    </Defs>
    {/* Stack of papers */}
    <Rect x="8" y="14" width="36" height="32" rx="3" fill="#DBEAFE" transform="rotate(-6 26 30)" />
    <Rect x="8" y="12" width="36" height="32" rx="3" fill="url(#stackDoc)" transform="rotate(3 26 28)" />
    <Rect x="8" y="10" width="36" height="32" rx="3" fill="white" stroke="#93C5FD" strokeWidth="1.5" />
    {/* Red cross top */}
    <Rect x="22" y="16" width="8" height="3" rx="1.5" fill="#EF4444" />
    <Rect x="24.5" y="13.5" width="3" height="8" rx="1.5" fill="#EF4444" />
    <Rect x="12" y="26" width="28" height="2" rx="1" fill="#93C5FD" />
    <Rect x="12" y="31" width="22" height="2" rx="1" fill="#93C5FD" opacity="0.6" />
    <Rect x="12" y="36" width="18" height="2" rx="1" fill="#93C5FD" opacity="0.4" />
  </Svg>
);

// Map of document id → which mini icon to use
export const getMiniIcon = (id: number, category: string): React.ReactElement => {
  // Bag category fallbacks
  if (category === 'Clothing') return <IconClothes />;
  if (category === 'Baby') return <IconBaby />;
  if (category === 'Comfort' || category === 'Hygiene') return <IconSnacks />;

  // Document icons by ID
  const iconMap: Record<number, React.ReactElement> = {
    1: <IconCitizenship />,
    2: <IconCitizenship />,
    3: <IconLetter />,
    4: <IconMarriage />,
    5: <IconANCCard />,
    6: <IconANCCard />,
    7: <IconReferral />,
    8: <IconBank />,
    9: <IconUltrasound />,
    10: <IconBloodGroup />,
    11: <IconCBC />,
    12: <IconHIV />,
    13: <IconUrine />,
    14: <IconSurgery />,
    15: <IconMedication />,
  };
  if (iconMap[id]) return iconMap[id];
  // Fallback by category
  if (category === 'Identity') return <IconCitizenship />;
  if (category === 'Aama Programme') return <IconANCCard />;
  if (category === 'Medical') return <IconUltrasound />;
  return <IconDocuments />;
};
