import React from 'react';
import Svg, { Path, Circle, Rect, Ellipse, G, Line, Polygon, Defs, LinearGradient, Stop, RadialGradient } from 'react-native-svg';

export const getItemIcon = (id: number, isWrong: boolean, size = 50) => {
  if (isWrong) {
    switch (id) {
      case 1: // Strong perfume (Purple elegant gradient bottle)
        return (
          <Svg width={size} height={size} viewBox="0 0 100 100">
            <Defs>
              <LinearGradient id="perfumeBase" x1="0%" y1="0%" x2="100%" y2="100%">
                <Stop offset="0%" stopColor="#DDA0DD" />
                <Stop offset="100%" stopColor="#800080" />
              </LinearGradient>
              <LinearGradient id="perfumeCap" x1="0%" y1="0%" x2="100%" y2="100%">
                <Stop offset="0%" stopColor="#FFC0CB" />
                <Stop offset="100%" stopColor="#FF69B4" />
              </LinearGradient>
              <RadialGradient id="sprayGlass" cx="30%" cy="30%" r="50%">
                <Stop offset="0%" stopColor="#DDA0DD" stopOpacity="0.8" />
                <Stop offset="100%" stopColor="#800080" stopOpacity="0" />
              </RadialGradient>
            </Defs>
            <Rect x="25" y="40" width="50" height="50" rx="8" fill="url(#perfumeBase)" />
            <Rect x="25" y="40" width="50" height="50" rx="8" fill="url(#sprayGlass)" />
            <Rect x="40" y="30" width="20" height="10" fill="#DA70D6" />
            <Circle cx="50" cy="20" r="10" fill="url(#perfumeCap)" />
            <Circle cx="47" cy="17" r="3" fill="#FFF" opacity="0.6" />
            <Path d="M75 50 Q 85 45 80 35 M80 55 Q 95 50 90 40 M70 60 Q 80 65 90 55" stroke="#E6E6FA" strokeWidth="3" fill="none" strokeLinecap="round" />
            <Path d="M75 50 Q 85 45 80 35 M80 55 Q 95 50 90 40 L 92 42" stroke="#BA55D3" strokeWidth="1" fill="none" opacity="0.5" />
          </Svg>
        );
      case 2: // Underwired bra (More 3D shading)
        return (
          <Svg width={size} height={size} viewBox="0 0 100 100">
            <Defs>
              <RadialGradient id="braCupWrong" cx="40%" cy="40%" r="60%">
                <Stop offset="0%" stopColor="#FFB6C1" />
                <Stop offset="100%" stopColor="#FF1493" />
              </RadialGradient>
              <LinearGradient id="wireDark" x1="0%" y1="0%" x2="0%" y2="100%">
                <Stop offset="0%" stopColor="#000" stopOpacity="0.8" />
                <Stop offset="100%" stopColor="#000" stopOpacity="0.4" />
              </LinearGradient>
            </Defs>
            <Path d="M20 70 C 20 90, 45 90, 45 70" fill="url(#braCupWrong)" />
            <Path d="M55 70 C 55 90, 80 90, 80 70" fill="url(#braCupWrong)" />
            <Path d="M20 70 Q 32.5 50 45 70 Z" fill="#FFE4E1" />
            <Path d="M55 70 Q 67.5 50 80 70 Z" fill="#FFE4E1" />
            <Path d="M25 70 L 20 30 M40 70 L 45 30" stroke="#FF69B4" strokeWidth="3" strokeLinecap="round" />
            <Path d="M60 70 L 55 30 M75 70 L 80 30" stroke="#FF69B4" strokeWidth="3" strokeLinecap="round" />
            <Path d="M20 70 C 20 95, 45 95, 45 70" fill="none" stroke="url(#wireDark)" strokeWidth="3" strokeLinecap="round" />
            <Path d="M55 70 C 55 95, 80 95, 80 70" fill="none" stroke="url(#wireDark)" strokeWidth="3" strokeLinecap="round" />
            <Circle cx="50" cy="70" r="3" fill="#8B0000" />
            <Path d="M28 80 Q 32 85 40 80" stroke="#FFF" strokeWidth="2" fill="none" opacity="0.6" strokeLinecap="round" />
            <Path d="M63 80 Q 67 85 75 80" stroke="#FFF" strokeWidth="2" fill="none" opacity="0.6" strokeLinecap="round" />
          </Svg>
        );
      case 5: // Baby powder (Chubby 3D bottle with cloud)
        return (
          <Svg width={size} height={size} viewBox="0 0 100 100">
            <Defs>
              <LinearGradient id="powderBottle" x1="0%" y1="0%" x2="100%" y2="0%">
                <Stop offset="0%" stopColor="#99CCFF" />
                <Stop offset="80%" stopColor="#3399FF" />
                <Stop offset="100%" stopColor="#0066CC" />
              </LinearGradient>
              <LinearGradient id="powderCap" x1="0%" y1="0%" x2="100%" y2="0%">
                <Stop offset="0%" stopColor="#66B2FF" />
                <Stop offset="100%" stopColor="#3399FF" />
              </LinearGradient>
            </Defs>
            <Path d="M30 40 C 30 20, 70 20, 70 40 L 75 90 C 75 95, 25 95, 25 90 Z" fill="url(#powderBottle)" />
            <Circle cx="50" cy="65" r="12" fill="#87CEFA" />
            <Circle cx="48" cy="63" r="4" fill="#FFF" opacity="0.6" />
            <Rect x="40" y="15" width="20" height="12" rx="3" fill="url(#powderCap)" />
            <Rect x="42" y="17" width="4" height="8" rx="1" fill="#99CCFF" />
            <Circle cx="80" cy="30" r="4" fill="#F0F8FF" opacity="0.9" />
            <Circle cx="85" cy="40" r="3" fill="#F0F8FF" opacity="0.9" />
            <Circle cx="75" cy="45" r="5" fill="#F0F8FF" opacity="0.9" />
            <Circle cx="90" cy="25" r="2" fill="#F0F8FF" opacity="0.9" />
          </Svg>
        );
      case 6: // Kajal (Glossy pot and stick)
        return (
          <Svg width={size} height={size} viewBox="0 0 100 100">
            <Defs>
              <LinearGradient id="kajalStick" x1="0%" y1="0%" x2="100%" y2="100%">
                <Stop offset="0%" stopColor="#DEB887" />
                <Stop offset="50%" stopColor="#D2B48C" />
                <Stop offset="100%" stopColor="#8B4513" />
              </LinearGradient>
              <RadialGradient id="kajalPot" cx="30%" cy="30%" r="60%">
                <Stop offset="0%" stopColor="#555" />
                <Stop offset="50%" stopColor="#222" />
                <Stop offset="100%" stopColor="#000" />
              </RadialGradient>
            </Defs>
            <Path d="M20 80 C 20 95, 50 95, 50 80 C 50 65, 20 65, 20 80" fill="url(#kajalPot)" />
            <Path d="M25 75 Q 30 70 35 75" stroke="#FFF" strokeWidth="1" fill="none" opacity="0.5" />
            <Path d="M35 70 L 85 20 L 90 25 L 40 75 Z" fill="url(#kajalStick)" />
            <Polygon points="35,70 40,75 30,85" fill="#111" />
            <Circle cx="35" cy="80" r="10" fill="#111" />
            <Circle cx="33" cy="78" r="2" fill="#FFF" opacity="0.4" />
          </Svg>
        );
      default:
        return null;
    }
  } else {
    switch (id) {
      case 6: // Maternity overnight pads (Soft, puffy gradient 3D pad)
        return (
          <Svg width={size} height={size} viewBox="0 0 100 100">
            <Defs>
              <LinearGradient id="padBase" x1="0%" y1="0%" x2="100%" y2="100%">
                <Stop offset="0%" stopColor="#FFB6C1" />
                <Stop offset="100%" stopColor="#DB7093" />
              </LinearGradient>
              <LinearGradient id="padCenter" x1="0%" y1="0%" x2="0%" y2="100%">
                <Stop offset="0%" stopColor="#87CEEB" />
                <Stop offset="100%" stopColor="#4682B4" />
              </LinearGradient>
            </Defs>
            <Path d="M30 35 C 15 35, 10 50, 10 50 C 10 50, 15 65, 30 65" fill="#FFF0F5" />
            <Path d="M70 35 C 85 35, 90 50, 90 50 C 90 50, 85 65, 70 65" fill="#FFF0F5" />
            <Rect x="25" y="10" width="50" height="80" rx="25" fill="url(#padBase)" stroke="#FFB6C1" strokeWidth="1.5" />
            <Rect x="38" y="25" width="24" height="50" rx="12" fill="url(#padCenter)" />
            <Rect x="42" y="30" width="8" height="40" rx="4" fill="#B0E0E6" opacity="0.6" />
          </Svg>
        );
      case 8: // Nursing bras (Soft curved gradients)
        return (
          <Svg width={size} height={size} viewBox="0 0 100 100">
            <Defs>
              <RadialGradient id="braCup" cx="30%" cy="30%" r="60%">
                <Stop offset="0%" stopColor="#FF69B4" />
                <Stop offset="70%" stopColor="#FF1493" />
                <Stop offset="100%" stopColor="#C71585" />
              </RadialGradient>
              <LinearGradient id="strapGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <Stop offset="0%" stopColor="#FFB6C1" />
                <Stop offset="100%" stopColor="#FF69B4" />
              </LinearGradient>
            </Defs>
            <Path d="M15 60 C 15 90, 48 90, 48 60 C 48 45, 15 45, 15 60 Z" fill="url(#braCup)" />
            <Path d="M52 60 C 52 90, 85 90, 85 60 C 85 45, 52 45, 52 60 Z" fill="url(#braCup)" />
            <Path d="M22 60 Q 31.5 80 41 60" stroke="#FF69B4" strokeWidth="1" fill="none" opacity="0.3" />
            <Path d="M59 60 Q 68.5 80 78 60" stroke="#FF69B4" strokeWidth="1" fill="none" opacity="0.3" />
            <Rect x="46" y="55" width="8" height="15" rx="3" fill="#DB7093" />
            <Path d="M25 45 Q 31.5 30 25 15 M 31.5 50 Q 50 30 50 10" stroke="url(#strapGrad)" strokeWidth="5" fill="none" strokeLinecap="round" />
            <Path d="M75 45 Q 68.5 30 75 15 M 68.5 50 Q 50 30 50 10" stroke="url(#strapGrad)" strokeWidth="5" fill="none" strokeLinecap="round" />
            <Circle cx="50" cy="63" r="4" fill="#000" opacity="0.1" />
            <Circle cx="50" cy="62" r="4" fill="#FFF" />
          </Svg>
        );
      case 11: // Hair tie (Bumpy shiny scrunchie)
        return (
          <Svg width={size} height={size} viewBox="0 0 100 100">
            <Defs>
              <LinearGradient id="scrunchieOuter" x1="0%" y1="0%" x2="100%" y2="100%">
                <Stop offset="0%" stopColor="#FF1493" />
                <Stop offset="50%" stopColor="#FF69B4" />
                <Stop offset="100%" stopColor="#DB7093" />
              </LinearGradient>
              <RadialGradient id="scrunchieHighlight" cx="30%" cy="30%" r="50%">
                <Stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.7" />
                <Stop offset="100%" stopColor="#FFF" stopOpacity="0" />
              </RadialGradient>
            </Defs>
            <Path d="M50 15 C 65 10, 80 15, 85 30 C 95 40, 90 60, 85 70 C 80 85, 65 90, 50 85 C 35 90, 20 85, 15 70 C 10 60, 5 40, 15 30 C 20 15, 35 10, 50 15 Z" fill="url(#scrunchieOuter)" />
            <Path d="M50 25 C 65 25, 75 35, 75 50 C 75 65, 65 75, 50 75 C 35 75, 25 65, 25 50 C 25 35, 35 25, 50 25 Z" fill="#FFF" opacity="0.2" />
            <Path d="M40 15 Q 50 30 60 15 M85 40 Q 70 50 85 60 M60 85 Q 50 70 40 85 M15 60 Q 30 50 15 40 M30 25 Q 40 40 25 45" stroke="#8B0A50" strokeWidth="2.5" fill="none" opacity="0.6" strokeLinecap="round" />
            <Path d="M40 20 Q 55 25 75 40" stroke="#FFF" strokeWidth="4" fill="none" opacity="0.4" strokeLinecap="round" />
          </Svg>
        );
      case 12: // Lip balm (Glossy tube)
        return (
          <Svg width={size} height={size} viewBox="0 0 100 100">
            <Defs>
              <LinearGradient id="balmTubeBody" x1="0%" y1="0%" x2="100%" y2="0%">
                <Stop offset="0%" stopColor="#FF69B4" />
                <Stop offset="30%" stopColor="#FFC0CB" />
                <Stop offset="70%" stopColor="#FF69B4" />
                <Stop offset="100%" stopColor="#DB7093" />
              </LinearGradient>
              <LinearGradient id="balmStick" x1="0%" y1="0%" x2="100%" y2="0%">
                <Stop offset="0%" stopColor="#C71585" />
                <Stop offset="40%" stopColor="#FF1493" />
                <Stop offset="100%" stopColor="#8B0A50" />
              </LinearGradient>
            </Defs>
            <Rect x="35" y="45" width="30" height="45" rx="3" fill="url(#balmTubeBody)" />
            <Path d="M40 45 L 40 25 C 40 10, 60 10, 60 25 L 60 45 Z" fill="url(#balmStick)" />
            <Rect x="42" y="15" width="6" height="25" fill="#FFF" opacity="0.3" rx="2" />
            <Rect x="30" y="40" width="40" height="10" rx="4" fill="#DB7093" />
            <Rect x="32" y="42" width="36" height="4" fill="#FFF" opacity="0.4" rx="2" />
            <Line x1="40" y1="60" x2="60" y2="60" stroke="#FFF" strokeWidth="3" opacity="0.8" />
            <Line x1="45" y1="70" x2="55" y2="70" stroke="#FFF" strokeWidth="3" opacity="0.8" />
          </Svg>
        );
      case 13: // Coconut or mustard oil (Golden 3D bottle and drop)
        return (
          <Svg width={size} height={size} viewBox="0 0 100 100">
            <Defs>
              <LinearGradient id="oilBottle" x1="0%" y1="0%" x2="100%" y2="0%">
                <Stop offset="0%" stopColor="#DEB887" />
                <Stop offset="30%" stopColor="#F5DEB3" />
                <Stop offset="100%" stopColor="#CD853F" />
              </LinearGradient>
              <LinearGradient id="oilDrop" x1="0%" y1="0%" x2="100%" y2="100%">
                <Stop offset="0%" stopColor="#FFD700" />
                <Stop offset="50%" stopColor="#DAA520" />
                <Stop offset="100%" stopColor="#B8860B" />
              </LinearGradient>
            </Defs>
            <Path d="M35 50 C 35 25, 65 25, 65 50 L 70 85 C 70 95, 30 95, 30 85 Z" fill="url(#oilBottle)" />
            <Path d="M35 60 C 35 90, 65 90, 65 60" fill="#CD853F" opacity="0.3" />
            <Rect x="40" y="15" width="20" height="15" rx="3" fill="#8B4513" />
            <Rect x="42" y="17" width="5" height="11" fill="#FFF" opacity="0.4" rx="1" />
            <Path d="M50 40 Q 60 55 50 70 Q 40 55 50 40" fill="url(#oilDrop)" />
            <Path d="M48 45 Q 52 55 48 65 Q 45 55 48 45" fill="#FFF" opacity="0.6" />
          </Svg>
        );
      case 14: // Home pillow (Soft puffy 3D)
        return (
          <Svg width={size} height={size} viewBox="0 0 100 100">
            <Defs>
              <RadialGradient id="pillowGrad" cx="30%" cy="30%" r="70%">
                <Stop offset="0%" stopColor="#B0C4DE" />
                <Stop offset="60%" stopColor="#778899" />
                <Stop offset="100%" stopColor="#4682B4" />
              </RadialGradient>
            </Defs>
            <Rect x="15" y="30" width="70" height="40" rx="20" fill="url(#pillowGrad)" stroke="#E6E6FA" strokeWidth="2" />
            <Path d="M25 40 Q 50 55 75 40" stroke="#FFF" strokeWidth="4" fill="none" opacity="0.8" strokeLinecap="round" />
            <Path d="M25 60 Q 50 45 75 60" stroke="#87CEEB" strokeWidth="2" fill="none" opacity="0.5" strokeLinecap="round" />
            <Path d="M15 30 L 85 70 M 85 30 L 15 70" stroke="#FFF" strokeWidth="4" opacity="0.3" fill="none" strokeDasharray="10,20"/>
          </Svg>
        );
      case 15: // Massage oil (Green 3D bottle with roller)
        return (
          <Svg width={size} height={size} viewBox="0 0 100 100">
            <Defs>
              <LinearGradient id="massageBottle" x1="0%" y1="0%" x2="100%" y2="0%">
                <Stop offset="0%" stopColor="#20B2AA" />
                <Stop offset="40%" stopColor="#48D1CC" />
                <Stop offset="100%" stopColor="#008B8B" />
              </LinearGradient>
              <LinearGradient id="massageCap" x1="0%" y1="0%" x2="0%" y2="100%">
                <Stop offset="0%" stopColor="#F5F5DC" />
                <Stop offset="100%" stopColor="#DEB887" />
              </LinearGradient>
            </Defs>
            <Path d="M40 35 C 20 45, 10 90, 50 90 C 90 90, 80 45, 60 35 L 55 15 L 45 15 Z" fill="url(#massageBottle)" />
            <Rect x="42" y="5" width="16" height="12" rx="3" fill="url(#massageCap)" />
            <Path d="M25 60 C 25 85, 75 85, 75 60" fill="#008B8B" opacity="0.4" />
            <Circle cx="50" cy="65" r="12" fill="#E0FFFF" opacity="0.9" />
            <Circle cx="50" cy="65" r="4" fill="#3CB371" />
            <Path d="M20 50 Q 25 35 40 30" stroke="#E0FFFF" strokeWidth="4" fill="none" opacity="0.6" strokeLinecap="round" />
          </Svg>
        );
      case 16: // Thermos flask (Metallic 3D cylinder)
        return (
          <Svg width={size} height={size} viewBox="0 0 100 100">
            <Defs>
              <LinearGradient id="flaskBody" x1="0%" y1="0%" x2="100%" y2="0%">
                <Stop offset="0%" stopColor="#A9A9A9" />
                <Stop offset="30%" stopColor="#F5F5F5" />
                <Stop offset="50%" stopColor="#DCDCDC" />
                <Stop offset="100%" stopColor="#696969" />
              </LinearGradient>
              <LinearGradient id="flaskCap" x1="0%" y1="0%" x2="100%" y2="0%">
                <Stop offset="0%" stopColor="#2F4F4F" />
                <Stop offset="50%" stopColor="#708090" />
                <Stop offset="100%" stopColor="#000000" />
              </LinearGradient>
            </Defs>
            <Rect x="35" y="30" width="30" height="60" rx="8" fill="url(#flaskBody)" />
            <Rect x="30" y="10" width="40" height="20" rx="4" fill="url(#flaskCap)" />
            <Rect x="38" y="4" width="24" height="6" rx="2" fill="#C0C0C0" />
            <Line x1="45" y1="40" x2="45" y2="80" stroke="#708090" strokeWidth="2" opacity="0.4" />
            <Line x1="55" y1="40" x2="55" y2="80" stroke="#708090" strokeWidth="2" opacity="0.4" />
            <Ellipse cx="50" cy="18" rx="15" ry="4" fill="#A9A9A9" opacity="0.2" />
          </Svg>
        );
      case 21: // Soft muslin cloth (Thick layered cloth)
        return (
          <Svg width={size} height={size} viewBox="0 0 100 100">
            <Defs>
              <LinearGradient id="clothGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
                <Stop offset="0%" stopColor="#F5DEB3" />
                <Stop offset="100%" stopColor="#DEB887" />
              </LinearGradient>
              <LinearGradient id="clothGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                <Stop offset="0%" stopColor="#DEB887" />
                <Stop offset="100%" stopColor="#D2B48C" />
              </LinearGradient>
            </Defs>
            <Path d="M22 40 L 82 30 L 87 75 L 27 85 Z" fill="url(#clothGrad2)" />
            <Path d="M20 30 L 80 20 L 85 70 L 25 80 Z" fill="url(#clothGrad1)" stroke="#DEB887" strokeWidth="1.5" />
            <Path d="M25 45 L 82 35" stroke="#D2B48C" strokeWidth="2" strokeDasharray="3,3" opacity="0.8" />
            <Path d="M22 65 L 80 55" stroke="#D2B48C" strokeWidth="2" strokeDasharray="3,3" opacity="0.8" />
            <Path d="M30 35 L 75 25" stroke="#FFF" strokeWidth="3" opacity="0.6" strokeLinecap="round" />
          </Svg>
        );
      case 23: // Baby caps (Plump, round hat with pompom)
        return (
          <Svg width={size} height={size} viewBox="0 0 100 100">
            <Defs>
              <RadialGradient id="capBody" cx="35%" cy="40%" r="65%">
                <Stop offset="0%" stopColor="#87CEEB" />
                <Stop offset="60%" stopColor="#4682B4" />
                <Stop offset="100%" stopColor="#000080" />
              </RadialGradient>
              <RadialGradient id="capPom" cx="30%" cy="30%" r="50%">
                <Stop offset="0%" stopColor="#FFF" />
                <Stop offset="60%" stopColor="#FFC0CB" />
                <Stop offset="100%" stopColor="#FF69B4" />
              </RadialGradient>
            </Defs>
            <Path d="M20 70 C 20 15, 80 15, 80 70 Z" fill="url(#capBody)" />
            <Rect x="15" y="65" width="70" height="15" rx="7.5" fill="#87CEFA" />
            <Rect x="15" y="68" width="70" height="3" fill="#FFF" opacity="0.3" rx="1.5" />
            <Circle cx="50" cy="15" r="10" fill="url(#capPom)" />
            <Path d="M30 40 Q 50 30 70 40" stroke="#FFF" strokeWidth="3" fill="none" opacity="0.5" strokeLinecap="round" />
          </Svg>
        );
      case 24: // Mittens (Cute round puffy mittens)
        return (
          <Svg width={size} height={size} viewBox="0 0 100 100">
            <Defs>
              <LinearGradient id="mittenBody" x1="0%" y1="0%" x2="100%" y2="100%">
                <Stop offset="0%" stopColor="#FFC0CB" />
                <Stop offset="50%" stopColor="#FF69B4" />
                <Stop offset="100%" stopColor="#C71585" />
              </LinearGradient>
              <LinearGradient id="mittenCuff" x1="0%" y1="0%" x2="0%" y2="100%">
                <Stop offset="0%" stopColor="#FFB6C1" />
                <Stop offset="100%" stopColor="#FF69B4" />
              </LinearGradient>
            </Defs>
            <Path d="M25 60 C 15 20, 50 20, 45 60 L 45 75 L 25 75 Z" fill="url(#mittenBody)" />
            <Path d="M60 60 C 50 20, 85 20, 80 60 L 80 75 L 60 75 Z" fill="url(#mittenBody)" />
            <Rect x="23" y="70" width="24" height="12" rx="4" fill="url(#mittenCuff)" />
            <Rect x="58" y="70" width="24" height="12" rx="4" fill="url(#mittenCuff)" />
            <Path d="M28 35 Q 35 30 40 38" stroke="#FFF" strokeWidth="2.5" fill="none" opacity="0.7" strokeLinecap="round" />
            <Path d="M63 35 Q 70 30 75 38" stroke="#FFF" strokeWidth="2.5" fill="none" opacity="0.7" strokeLinecap="round" />
          </Svg>
        );
      case 25: // Soft baby blankets (Stacked thick rounded rects)
        return (
          <Svg width={size} height={size} viewBox="0 0 100 100">
            <Defs>
              <LinearGradient id="blanket1" x1="0%" y1="0%" x2="0%" y2="100%">
                <Stop offset="0%" stopColor="#B0C4DE" />
                <Stop offset="100%" stopColor="#778899" />
              </LinearGradient>
              <LinearGradient id="blanket2" x1="0%" y1="0%" x2="0%" y2="100%">
                <Stop offset="0%" stopColor="#DB7093" />
                <Stop offset="100%" stopColor="#C71585" />
              </LinearGradient>
              <LinearGradient id="blanket3" x1="0%" y1="0%" x2="0%" y2="100%">
                <Stop offset="0%" stopColor="#4682B4" />
                <Stop offset="100%" stopColor="#000080" />
              </LinearGradient>
            </Defs>
            <Rect x="15" y="40" width="70" height="20" rx="8" fill="url(#blanket1)" />
            <Rect x="15" y="55" width="70" height="20" rx="8" fill="url(#blanket2)" />
            <Rect x="15" y="70" width="70" height="20" rx="8" fill="url(#blanket3)" />
            <Path d="M30 40 C 35 25, 65 25, 70 40" fill="url(#blanket1)" stroke="#E6E6FA" strokeWidth="2" />
            <Circle cx="35" cy="48" r="2" fill="#D8BFD8" />
            <Circle cx="65" cy="48" r="2" fill="#D8BFD8" />
            <Circle cx="50" cy="48" r="2" fill="#D8BFD8" />
            <Circle cx="35" cy="63" r="2" fill="#FFC0CB" />
            <Circle cx="65" cy="63" r="2" fill="#FFC0CB" />
            <Circle cx="50" cy="63" r="2" fill="#FFC0CB" />
            <Circle cx="35" cy="78" r="2" fill="#AFEEEE" />
            <Circle cx="65" cy="78" r="2" fill="#AFEEEE" />
            <Circle cx="50" cy="78" r="2" fill="#AFEEEE" />
          </Svg>
        );
      case 26: // Newborn diapers (Chubby diaper with yellow stripe)
        return (
          <Svg width={size} height={size} viewBox="0 0 100 100">
            <Defs>
              <RadialGradient id="diaperBody" cx="30%" cy="30%" r="70%">
                <Stop offset="0%" stopColor="#DCDCDC" />
                <Stop offset="80%" stopColor="#A9A9A9" />
                <Stop offset="100%" stopColor="#808080" />
              </RadialGradient>
              <LinearGradient id="diaperTape" x1="0%" y1="0%" x2="0%" y2="100%">
                <Stop offset="0%" stopColor="#E0FFFF" />
                <Stop offset="100%" stopColor="#87CEEB" />
              </LinearGradient>
            </Defs>
            <Path d="M15 30 L 85 30 C 95 60, 80 95, 50 95 C 20 95, 5 60, 15 30 Z" fill="url(#diaperBody)" />
            <Path d="M25 30 C 25 50, 40 60, 50 60 C 60 60, 75 50, 75 30" stroke="#E6E6FA" strokeWidth="4" fill="none" strokeLinecap="round" />
            <Line x1="50" y1="65" x2="50" y2="85" stroke="#FFD700" strokeWidth="5" strokeLinecap="round" />
            <Rect x="10" y="25" width="22" height="15" rx="5" fill="url(#diaperTape)" />
            <Rect x="68" y="25" width="22" height="15" rx="5" fill="url(#diaperTape)" />
            <Circle cx="21" cy="32" r="3" fill="#FFF" opacity="0.6" />
            <Circle cx="79" cy="32" r="3" fill="#FFF" opacity="0.6" />
          </Svg>
        );
      case 27: // Unscented baby wipes (Puffy pack with an open wipe protruding)
        return (
          <Svg width={size} height={size} viewBox="0 0 100 100">
            <Defs>
              <LinearGradient id="wipesBase" x1="0%" y1="0%" x2="100%" y2="100%">
                <Stop offset="0%" stopColor="#99CCFF" />
                <Stop offset="50%" stopColor="#3399FF" />
                <Stop offset="100%" stopColor="#004C99" />
              </LinearGradient>
              <RadialGradient id="wipesLid" cx="30%" cy="30%" r="60%">
                <Stop offset="0%" stopColor="#FFF" />
                <Stop offset="100%" stopColor="#E6F2FF" />
              </RadialGradient>
            </Defs>
            <Rect x="15" y="35" width="70" height="45" rx="12" fill="url(#wipesBase)" />
            <Ellipse cx="50" cy="57" rx="18" ry="12" fill="url(#wipesLid)" stroke="#66B2FF" strokeWidth="2" />
            <Path d="M45 57 C 35 25, 75 15, 65 45" fill="#FFF" stroke="#E6F2FF" strokeWidth="2" strokeLinecap="round" />
            <Path d="M45 57 C 35 25, 75 15, 65 45" fill="none" stroke="#E6E6FA" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
            <Ellipse cx="50" cy="57" rx="12" ry="6" fill="#000" opacity="0.1" />
            <Circle cx="30" cy="45" r="3" fill="#FFF" opacity="0.5" />
            <Circle cx="70" cy="65" r="4" fill="#FFF" opacity="0.5" />
          </Svg>
        );
      case 28: // Cotton balls (3D fluffy clustered spheres)
        return (
          <Svg width={size} height={size} viewBox="0 0 100 100">
            <Defs>
              <RadialGradient id="cottonBall" cx="35%" cy="35%" r="65%">
                <Stop offset="0%" stopColor="#B0C4DE" />
                <Stop offset="60%" stopColor="#778899" />
                <Stop offset="100%" stopColor="#4A708B" />
              </RadialGradient>
            </Defs>
            <Circle cx="35" cy="60" r="22" fill="url(#cottonBall)" />
            <Circle cx="65" cy="60" r="22" fill="url(#cottonBall)" />
            <Circle cx="50" cy="35" r="24" fill="url(#cottonBall)" />
            <Path d="M28 55 Q 35 48 42 55" stroke="#FFF" strokeWidth="3" fill="none" strokeLinecap="round" />
            <Path d="M58 55 Q 65 48 72 55" stroke="#FFF" strokeWidth="3" fill="none" strokeLinecap="round" />
            <Path d="M40 30 Q 50 20 60 30" stroke="#FFF" strokeWidth="3" fill="none" strokeLinecap="round" />
          </Svg>
        );
      default:
        return null;
    }
  }
};
