const CardBack = () => {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="300" height="300">
            <defs>
                <linearGradient id="bgGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1a3a5c" stopOpacity="1" />
                    <stop offset="50%" stopColor="#2d5a8c" stopOpacity="1" />
                    <stop offset="100%" stopColor="#1a3a5c" stopOpacity="1" />
                </linearGradient>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ffd700" stopOpacity="1" />
                    <stop offset="50%" stopColor="#ffed4e" stopOpacity="1" />
                    <stop offset="100%" stopColor="#d4af37" stopOpacity="1" />
                </linearGradient>
                <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#4a90e2" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#1a3a5c" stopOpacity="0" />
                </radialGradient>
            </defs>

            <rect width="300" height="300" fill="url(#bgGradient)" rx="15" />

            <rect x="10" y="10" width="280" height="280" fill="none" stroke="url(#goldGradient)" stroke-width="3" rx="12" />

            <rect x="20" y="20" width="260" height="260" fill="none" stroke="#d4af37" stroke-width="2" rx="10" />

            <path d="M 40 40 Q 35 35 35 30 L 30 30 Q 30 35 35 40 Z" fill="url(#goldGradient)" />
            <circle cx="45" cy="45" r="3" fill="#ffd700" />

            <path d="M 260 40 Q 265 35 270 30 L 270 30 Q 270 35 265 40 Z" fill="url(#goldGradient)" />
            <circle cx="255" cy="45" r="3" fill="#ffd700" />

            <path d="M 40 260 Q 35 265 30 270 L 30 270 Q 35 270 40 265 Z" fill="url(#goldGradient)" />
            <circle cx="45" cy="255" r="3" fill="#ffd700" />

            <path d="M 260 260 Q 265 265 270 270 L 270 270 Q 265 270 260 265 Z" fill="url(#goldGradient)" />
            <circle cx="255" cy="255" r="3" fill="#ffd700" />

            <circle cx="150" cy="150" r="80" fill="url(#centerGlow)" />

            <circle cx="150" cy="150" r="70" fill="none" stroke="url(#goldGradient)" stroke-width="3" opacity="0.7" />
            <circle cx="150" cy="150" r="55" fill="none" stroke="#4a90e2" stroke-width="2" opacity="0.5" />
            <circle cx="150" cy="150" r="40" fill="none" stroke="url(#goldGradient)" stroke-width="2" opacity="0.6" />

            <path d="M 150 110 Q 170 130 150 150 Q 130 170 110 150 Q 130 130 150 150 Q 170 170 190 150 Q 170 130 150 150"
                fill="none" stroke="#ffd700" stroke-width="3" opacity="0.8" />

            <path d="M 150 90 L 152 95 L 157 95 L 153 98 L 155 103 L 150 100 L 145 103 L 147 98 L 143 95 L 148 95 Z" fill="#ffd700" opacity="0.9" />
            <path d="M 90 150 L 92 155 L 97 155 L 93 158 L 95 163 L 90 160 L 85 163 L 87 158 L 83 155 L 88 155 Z" fill="#ffd700" opacity="0.7" />
            <path d="M 210 150 L 212 155 L 217 155 L 213 158 L 215 163 L 210 160 L 205 163 L 207 158 L 203 155 L 208 155 Z" fill="#ffd700" opacity="0.7" />

            <path d="M 150 30 Q 155 35 150 40" fill="none" stroke="#d4af37" stroke-width="2" opacity="0.6" />
            <path d="M 150 270 Q 155 265 150 260" fill="none" stroke="#d4af37" stroke-width="2" opacity="0.6" />
            <path d="M 30 150 Q 35 155 40 150" fill="none" stroke="#d4af37" stroke-width="2" opacity="0.6" />
            <path d="M 270 150 Q 265 155 260 150" fill="none" stroke="#d4af37" stroke-width="2" opacity="0.6" />

            <polygon points="150,50 155,60 150,65 145,60" fill="#4a90e2" opacity="0.6" />
            <polygon points="150,250 155,240 150,235 145,240" fill="#4a90e2" opacity="0.6" />
            <polygon points="50,150 60,155 65,150 60,145" fill="#4a90e2" opacity="0.6" />
            <polygon points="250,150 240,155 235,150 240,145" fill="#4a90e2" opacity="0.6" />
        </svg>
    )
}

export default CardBack;