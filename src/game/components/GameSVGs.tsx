import React from 'react';
import Svg, { Rect, Circle, Path, Polygon, G, Text, LinearGradient, Stop, Defs } from 'react-native-svg';

export const BedroomScene = () => (
  <Svg width="100%" height="100%" viewBox="0 0 400 800" preserveAspectRatio="xMidYMid slice">
    {/* Ochre wall */}
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
    <Circle cx="150" cy="550" r="80" fill="#D67B5A" scaleY="0.4" />
    <Polygon points="320,550 380,550 370,600 330,600" fill="#C49A6C" />
  </Svg>
);

export const DeskScene = () => (
  <Svg width="100%" height="100%" viewBox="0 0 400 800" preserveAspectRatio="xMidYMid slice">
    <Rect width="400" height="300" fill="#3D5A5C" />
    <Rect y="300" width="400" height="500" fill="#936441" />
    <Circle cx="350" cy="200" r="40" fill="#F4D03F" />
    <Polygon points="350,160 380,240 320,240" fill="#BDC3C7" />
    <Path d="M350,240 Q350,280 380,300" stroke="#7F8C8D" strokeWidth="8" fill="none" />
    <Polygon points="350,240 450,450 250,450" fill="#F4D03F" opacity="0.1" />
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
  <Svg width="120" height="240" viewBox="0 0 100 200">
    <G transform="translate(50, 40)">
      <Circle cy="-20" r="15" fill="#E0A96D" />
      <Path d="M-15,-20 A15,15 0 0,1 15,-20 L20,-5 A10,10 0 0,0 -20,-5 Z" fill="#2C3E50" />
      <Circle cy="-5" cx="18" r="8" fill="#2C3E50" />
      <Circle cy="-5" cx="-18" r="8" fill="#2C3E50" />
      {pose === 'sitting' ? (
        <G>
          <Path d="M-15,0 L15,0 C20,40 40,60 40,90 L-40,90 C-40,60 -20,40 -15,0 Z" fill="#2B9EB3" />
          <Circle cx="10" cy="40" r="28" fill="#2B9EB3" />
        </G>
      ) : (
        <G>
          <Path d="M-15,0 L15,0 L30,120 L-30,120 Z" fill="#2B9EB3" />
          <Path d="M-15,5 L-25,40 L-10,60" fill="none" stroke="#E0A96D" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          <Path d="M15,5 L25,40 L10,60" fill="none" stroke="#E0A96D" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
           <Circle cx="12" cy="45" r="30" fill="#2B9EB3" />
           {pose === 'worried' && (
              <Path d="M-5,-22 L-10,-25 M5,-22 L10,-25" stroke="#2C3E50" strokeWidth="1.5" />
           )}
           {pose === 'happy' && (
              <Path d="M-5,-20 Q0,-15 5,-20" fill="none" stroke="#E74C3C" strokeWidth="2" strokeLinecap="round" />
           )}
        </G>
      )}
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

export const HospitalBag = ({ filled = 0, isZipped = false, glow = false }) => (
  <Svg width="220" height="180" viewBox="0 0 100 80">
    <Defs>
      <LinearGradient id="bagMain" x1="0" y1="0" x2="0" y2="1">
        <Stop offset="0%" stopColor="#FADDEB" />
        <Stop offset="100%" stopColor="#E294B1" />
      </LinearGradient>
      <LinearGradient id="bagDark" x1="0" y1="0" x2="0" y2="1">
        <Stop offset="0%" stopColor="#D980A1" />
        <Stop offset="100%" stopColor="#B04C8A" />
      </LinearGradient>
      <LinearGradient id="strapGrad" x1="0" y1="0" x2="0" y2="1">
        <Stop offset="0%" stopColor="#9E3573" />
        <Stop offset="100%" stopColor="#6C244E" />
      </LinearGradient>
    </Defs>

    {glow && (
      <Rect x="5" y="10" width="90" height="65" fill="#F33A6A" rx="20" opacity="0.2" />
    )}

    {/* Drop shadow */}
    <Rect x="15" y="72" width="70" height="12" fill="rgba(0,0,0,0.15)" rx="6" />

    {/* Back Straps */}
    <Path d="M30,28 C30,0 70,0 70,28" fill="none" stroke="url(#strapGrad)" strokeWidth="6" strokeLinecap="round" />
    <Path d="M30,28 C30,0 70,0 70,28" fill="none" stroke="#B04C8A" strokeWidth="2" strokeLinecap="round" />

    {/* Back Inner layer */}
    <Path d="M20,22 C20,18 30,15 40,15 L60,15 C70,15 80,18 80,22 L85,72 C85,76 80,78 70,78 L30,78 C20,78 15,76 15,72 Z" fill="#C57591" />

    {/* Solid Fallback for Visibility */}
    <Path d="M12,28 C12,23 22,20 32,20 L68,20 C78,20 88,23 88,28 L92,72 C92,78 86,80 80,80 L20,80 C14,80 8,78 8,72 Z" fill="#F8BBD0" />
    
    {/* Gradient Body */}
    <Path d="M12,28 C12,23 22,20 32,20 L68,20 C78,20 88,23 88,28 L92,72 C92,78 86,80 80,80 L20,80 C14,80 8,78 8,72 Z" fill="url(#bagMain)" opacity="0.9" />

    {/* Front Pocket Solid Fallback */}
    <Path d="M20,40 C20,35 30,35 40,35 L60,35 C70,35 80,35 80,40 L82,70 C82,75 75,78 60,78 L40,78 C25,78 18,75 18,70 Z" fill="#D81B60" />
    <Path d="M20,40 C20,35 30,35 40,35 L60,35 C70,35 80,35 80,40 L82,70 C82,75 75,78 60,78 L40,78 C25,78 18,75 18,70 Z" fill="url(#bagDark)" opacity="0.9" />
    
    {/* Pocket Highlight */}
    <Path d="M20,40 C20,35 30,35 40,35 L60,35 C70,35 80,35 80,40 C70,45 30,45 20,40 Z" fill="#FFFFFF" opacity="0.15" />

    {/* Zipper details on pocket */}
    <Path d="M22,38 L78,38" stroke="#E6A8C2" strokeWidth="1" strokeDasharray="1,1" />

    {/* Front Straps */}
    <Path d="M30,28 L28,75 M70,28 L72,75" stroke="url(#strapGrad)" strokeWidth="6" strokeLinecap="round" />
    <Path d="M30,28 L28,75 M70,28 L72,75" stroke="#B04C8A" strokeWidth="2" strokeLinecap="round" />

    {!isZipped && (
      <G>
        {filled > 0 && <Text x="20" y="20" fontSize="14">🧦</Text>}
        {filled > 1 && <Text x="45" y="16" fontSize="16">🧴</Text>}
        {filled > 2 && <Text x="65" y="22" fontSize="14">🍎</Text>}
        {filled > 3 && <Text x="35" y="25" fontSize="14">🧸</Text>}
      </G>
    )}
    <Path d="M12,28 L88,28" stroke="#FFFFFF" strokeWidth="2.5" strokeDasharray="3,2" opacity="0.6" />
    <Path d="M12,29 L88,29" stroke="#90346E" strokeWidth="1" opacity="0.5" />

    {isZipped && (
      <G transform="translate(80, 25)">
        <Rect width="12" height="6" fill="#F1C40F" rx="3" />
        <Circle cx="2" cy="3" r="1.5" fill="#B04C8A" />
      </G>
    )}
  </Svg>
);

export const OpenFolder = ({ glow = false, filled = 0 }) => (
  <Svg width="200" height="160" viewBox="0 0 100 80">
    <Defs>
      <LinearGradient id="folderBack" x1="0" y1="0" x2="0" y2="1">
         <Stop offset="0%" stopColor="#3B82F6" />
         <Stop offset="100%" stopColor="#1E3A8A" />
      </LinearGradient>
      <LinearGradient id="folderFront" x1="0" y1="0" x2="0" y2="1">
         <Stop offset="0%" stopColor="#93C5FD" />
         <Stop offset="100%" stopColor="#2563EB" />
      </LinearGradient>
    </Defs>
    
    {glow && <Rect x="0" y="5" width="100" height="75" fill="#3B82F6" opacity="0.2" rx="10" />}
    
    {/* Shadow */}
    <Rect x="15" y="72" width="70" height="8" fill="rgba(0,0,0,0.15)" rx="4" />

    {/* Back Flap */}
    <Path d="M10,25 L35,25 L40,15 L90,15 C95,15 97,18 97,22 L97,72 C97,76 93,78 88,78 L12,78 C7,78 5,75 5,70 L5,30 C5,27 7,25 10,25 Z" fill="url(#folderBack)" />

    {/* Papers array */}
    {filled > 0 && <Rect x="15" y="18" width="40" height="45" fill="#FFFFFF" rx="2" transform="rotate(-6 15 18)" />}
    {filled > 0 && <Path d="M18,22 L45,20 M18,26 L40,24" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />}
    
    {filled > 1 && <Rect x="40" y="20" width="35" height="45" fill="#E0F2FE" rx="2" transform="rotate(4 40 20)" />}
    {filled > 1 && <Rect x="60" y="25" width="10" height="10" fill="#BAE6FD" rx="1" transform="rotate(4 40 20)" />}
    
    {filled > 2 && (
      <G transform="translate(30, 14)">
        <Rect width="35" height="40" fill="#FFF" rx="2" stroke="#E2E8F0" strokeWidth="0.5" />
        <Rect x="5" y="5" width="25" height="3" fill="#94A3B8" rx="1" />
        <Rect x="5" y="12" width="20" height="2" fill="#CBD5E1" rx="1" />
        <Rect x="5" y="16" width="15" height="2" fill="#CBD5E1" rx="1" />
        <Circle cx="25" cy="25" r="5" fill="#F87171" opacity="0.8" />
        <Path d="M23,25 L25,27 L28,22" stroke="#FFF" strokeWidth="1" fill="none" />
      </G>
    )}

    {/* Front Flap */}
    <Path d="M4,78 L96,78 L103,42 C104,38 100,34 96,34 L28,34 C24,34 18,36 15,40 L4,78 Z" fill="url(#folderFront)" />
    
    {/* Inside pocket line */}
    <Path d="M22,44 L78,44" stroke="#FFF" strokeWidth="2" opacity="0.5" strokeLinecap="round" />
    
    {/* Label */}
    <Rect x="40" y="55" width="25" height="10" fill="#FFF" opacity="0.8" rx="2" />
    <Path d="M43,60 L62,60" stroke="#1E3A8A" strokeWidth="1.5" strokeLinecap="round" />
  </Svg>
);
