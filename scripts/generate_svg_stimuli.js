const fs = require('fs');
const path = require('path');

const tasks = [
    {
        id: "social-organization-relationships",
        theme: "Social Organization",
        title: "Relationships & Emotional Support",
        color1: "#4c1d95",
        color2: "#831843",
        svgScene: `
          <!-- Park Background -->
          <rect width="1200" height="675" fill="#0f172a" />
          <path d="M0 450 Q 300 380 600 420 T 1200 400 L 1200 675 L 0 675 Z" fill="#14532d" opacity="0.8" />
          <path d="M0 500 Q 400 460 800 490 T 1200 470 L 1200 675 L 0 675 Z" fill="#15803d" />
          <!-- Trees -->
          <circle cx="150" cy="320" r="90" fill="#166534" />
          <rect x="140" y="400" width="20" height="100" fill="#78350f" />
          <circle cx="1050" cy="300" r="110" fill="#166534" />
          <rect x="1040" y="390" width="20" height="110" fill="#78350f" />
          <!-- Park Bench -->
          <rect x="350" y="460" width="500" height="25" rx="5" fill="#92400e" stroke="#451a03" stroke-width="4"/>
          <rect x="350" y="495" width="500" height="20" rx="4" fill="#78350f" stroke="#451a03" stroke-width="3"/>
          <rect x="370" y="515" width="20" height="70" fill="#334155" />
          <rect x="810" y="515" width="20" height="70" fill="#334155" />
          <rect x="360" y="420" width="15" height="100" fill="#334155" />
          <rect x="825" y="420" width="15" height="100" fill="#334155" />
          <!-- Two Teenagers Silhouette Graphic -->
          <!-- Teenager 1 (Upset, head bowed) -->
          <circle cx="500" cy="390" r="32" fill="#f43f5e" />
          <path d="M 460 460 C 460 420, 540 420, 540 460 Z" fill="#cbd5e1" />
          <text x="500" y="380" font-size="28" text-anchor="middle">😢</text>
          <!-- Teenager 2 (Comforting with arm around shoulder) -->
          <circle cx="620" cy="375" r="32" fill="#3b82f6" />
          <path d="M 575 460 C 575 410, 665 410, 665 460 Z" fill="#60a5fa" />
          <!-- Comforting Arm -->
          <path d="M 600 410 Q 550 410 520 430" fill="none" stroke="#60a5fa" stroke-width="18" stroke-linecap="round" />
          <text x="620" y="365" font-size="28" text-anchor="middle">🤗</text>
          <!-- Dialogue Bubble -->
          <rect x="520" y="270" width="220" height="60" rx="20" fill="#ffffff" />
          <polygon points="580,330 600,330 580,350" fill="#ffffff" />
          <text x="630" y="306" font-weight="bold" font-size="18" fill="#1e293b" text-anchor="middle">"Estoy aquí contigo"</text>
        `,
        promptDesc: "Dos adolescentes sentados en un banco del parque, uno consolando al otro que parece disgustado."
    },
    {
        id: "social-organization-education",
        theme: "Social Organization",
        title: "Education & Classroom Learning",
        color1: "#1e3a8a",
        color2: "#1d4ed8",
        svgScene: `
          <!-- Classroom Background -->
          <rect width="1200" height="675" fill="#f8fafc" />
          <!-- Whiteboard -->
          <rect x="250" y="80" width="700" height="320" rx="12" fill="#0f766e" stroke="#334155" stroke-width="12" />
          <!-- Whiteboard Content -->
          <text x="600" y="160" font-size="28" font-weight="bold" fill="#ffffff" text-anchor="middle">Día Internacional de la Educación 📚</text>
          <path d="M 350 250 Q 600 200 850 250" fill="none" stroke="#2dd4bf" stroke-width="6" stroke-dasharray="10 10" />
          <circle cx="600" cy="225" r="45" fill="#ffffff" opacity="0.2" />
          <text x="600" y="235" font-size="36" text-anchor="middle">🧠 💡 📊</text>
          <!-- Teacher -->
          <circle cx="180" cy="260" r="35" fill="#0284c7" />
          <rect x="150" y="300" width="60" height="150" fill="#0369a1" rx="10" />
          <line x1="210" y1="330" x2="300" y2="240" stroke="#f59e0b" stroke-width="8" stroke-linecap="round" />
          <text x="180" y="250" font-size="30" text-anchor="middle">👨‍🏫</text>
          <!-- Desks & Students Raising Hands -->
          <!-- Desk 1 -->
          <rect x="320" y="480" width="180" height="80" fill="#94a3b8" rx="8" />
          <circle cx="410" cy="440" r="30" fill="#ea580c" />
          <line x1="430" y1="420" x2="460" y2="350" stroke="#ea580c" stroke-width="14" stroke-linecap="round" />
          <text x="410" y="430" font-size="26" text-anchor="middle">🙋‍♀️</text>
          <!-- Desk 2 -->
          <rect x="580" y="480" width="180" height="80" fill="#94a3b8" rx="8" />
          <circle cx="670" cy="440" r="30" fill="#16a34a" />
          <line x1="690" y1="420" x2="720" y2="340" stroke="#16a34a" stroke-width="14" stroke-linecap="round" />
          <text x="670" y="430" font-size="26" text-anchor="middle">🙋‍♂️</text>
          <!-- Desk 3 -->
          <rect x="840" y="480" width="180" height="80" fill="#94a3b8" rx="8" />
          <circle cx="930" cy="440" r="30" fill="#9333ea" />
          <line x1="950" y1="420" x2="980" y2="350" stroke="#9333ea" stroke-width="14" stroke-linecap="round" />
          <text x="930" y="430" font-size="26" text-anchor="middle">🙋‍♀️</text>
        `,
        promptDesc: "Un aula de estudiantes levantando la mano con entusiasmo mientras un profesor señala un diagrama en la pizarra."
    },
    {
        id: "sharing-planet-globalization",
        theme: "Sharing the Planet",
        title: "Globalization & World Markets",
        color1: "#9a3412",
        color2: "#c2410c",
        svgScene: `
          <!-- Market Canopy Background -->
          <rect width="1200" height="675" fill="#fff7ed" />
          <path d="M 0 0 L 1200 0 L 1200 160 L 0 160 Z" fill="#ea580c" />
          <!-- Canopy Stripes -->
          <polygon points="0,0 100,0 70,160 0,160" fill="#ffffff" />
          <polygon points="200,0 300,0 270,160 170,160" fill="#ffffff" />
          <polygon points="400,0 500,0 470,160 370,160" fill="#ffffff" />
          <polygon points="600,0 700,0 670,160 570,160" fill="#ffffff" />
          <polygon points="800,0 900,0 870,160 770,160" fill="#ffffff" />
          <polygon points="1000,0 1100,0 1070,160 970,160" fill="#ffffff" />
          <!-- Market Stall Counter -->
          <rect x="150" y="360" width="900" height="180" rx="12" fill="#78350f" />
          <!-- International Products on Display -->
          <g transform="translate(200, 260)">
            <!-- Products crate 1 (Asian Tea/Spices) -->
            <rect x="0" y="20" width="180" height="80" fill="#d97706" rx="8" />
            <text x="90" y="65" font-size="40" text-anchor="middle">🍵 🌶️ ⛩️</text>
            <text x="90" y="115" font-weight="bold" font-size="16" fill="#78350f" text-anchor="middle">Asia / Especias</text>
            <!-- Products crate 2 (Latin American Coffee/Cacao) -->
            <rect x="250" y="20" width="180" height="80" fill="#b45309" rx="8" />
            <text x="340" y="65" font-size="40" text-anchor="middle">☕ 🥑 🌮</text>
            <text x="340" y="115" font-weight="bold" font-size="16" fill="#78350f" text-anchor="middle">América Latina</text>
            <!-- Products crate 3 (European Cheese/Pastry) -->
            <rect x="500" y="20" width="180" height="80" fill="#f59e0b" rx="8" />
            <text x="590" y="65" font-size="40" text-anchor="middle">🧀 🥐 🍇</text>
            <text x="590" y="115" font-weight="bold" font-size="16" fill="#78350f" text-anchor="middle">Europa</text>
          </g>
          <!-- Customers of Different Nationalities Browsing -->
          <circle cx="300" cy="500" r="35" fill="#3b82f6" />
          <text x="300" y="495" font-size="30" text-anchor="middle">🛍️</text>
          <circle cx="600" cy="500" r="35" fill="#ec4899" />
          <text x="600" y="495" font-size="30" text-anchor="middle">🌍</text>
          <circle cx="900" cy="500" r="35" fill="#10b981" />
          <text x="900" y="495" font-size="30" text-anchor="middle">💱</text>
        `,
        promptDesc: "Un puesto de mercado concurrido que vende productos de muchos países diferentes, con clientes de distintas nacionalidades mirando."
    },
    {
        id: "sharing-planet-consumption",
        theme: "Sharing the Planet",
        title: "Ethical Consumption & Fair-Trade",
        color1: "#15803d",
        color2: "#047857",
        svgScene: `
          <!-- Supermarket Aisle Background -->
          <rect width="1200" height="675" fill="#f0fdf4" />
          <!-- Shelves Left & Right -->
          <rect x="50" y="80" width="300" height="450" fill="#bbf7d0" rx="10" stroke="#16a34a" stroke-width="4" />
          <text x="200" y="160" font-size="40" text-anchor="middle">📦 🧃 🥫</text>
          <text x="200" y="300" font-size="40" text-anchor="middle">🥣 🍿 🍫</text>
          <rect x="850" y="80" width="300" height="450" fill="#bbf7d0" rx="10" stroke="#16a34a" stroke-width="4" />
          <text x="1000" y="160" font-size="40" text-anchor="middle">🍌 🍎 🍊</text>
          <text x="1000" y="300" font-size="40" text-anchor="middle">🥦 🍞 🥛</text>
          <!-- Customer in Center Comparing Two Products -->
          <circle cx="600" cy="240" r="45" fill="#0d9488" />
          <text x="600" y="235" font-size="38" text-anchor="middle">🧑‍🛒</text>
          <!-- Product Left: Fair-Trade Label -->
          <g transform="translate(420, 310)">
            <rect width="140" height="180" rx="12" fill="#15803d" stroke="#22c55e" stroke-width="6" />
            <text x="70" y="60" font-size="36" text-anchor="middle">🌿</text>
            <rect x="15" y="85" width="110" height="30" rx="6" fill="#ffffff" />
            <text x="70" y="105" font-weight="bold" font-size="13" fill="#15803d" text-anchor="middle">FAIR TRADE</text>
            <text x="70" y="150" font-size="18" fill="#ffffff" text-anchor="middle">Comercio Justo</text>
          </g>
          <!-- Product Right: Standard Label -->
          <g transform="translate(640, 310)">
            <rect width="140" height="180" rx="12" fill="#64748b" stroke="#94a3b8" stroke-width="4" />
            <text x="70" y="60" font-size="36" text-anchor="middle">📦</text>
            <rect x="15" y="85" width="110" height="30" rx="6" fill="#cbd5e1" />
            <text x="70" y="105" font-weight="bold" font-size="13" fill="#334155" text-anchor="middle">ESTÁNDAR</text>
            <text x="70" y="150" font-size="18" fill="#ffffff" text-anchor="middle">Sin Etiqueta</text>
          </g>
          <!-- Scale / Decision Graphic -->
          <text x="600" y="530" font-size="50" text-anchor="middle">⚖️</text>
        `,
        promptDesc: "Una persona comparando dos productos en un supermercado, uno con etiqueta de comercio justo y otro sin ella."
    },
    {
        id: "human-ingenuity-communication",
        theme: "Human Ingenuity",
        title: "Social Media & Communication",
        color1: "#312e81",
        color2: "#4338ca",
        svgScene: `
          <!-- Dark Bedroom at Night -->
          <rect width="1200" height="675" fill="#090d16" />
          <!-- Window with Moon & Stars -->
          <rect x="800" y="60" width="300" height="260" rx="16" fill="#1e1b4b" stroke="#3730a3" stroke-width="6" />
          <text x="950" y="160" font-size="60" text-anchor="middle">🌙 ⭐️ ✨</text>
          <!-- Bed & Teenager Scrolling Smartphone -->
          <rect x="150" y="380" width="700" height="160" rx="16" fill="#1e293b" />
          <circle cx="300" cy="370" r="40" fill="#f43f5e" />
          <text x="300" y="365" font-size="32" text-anchor="middle">🛌</text>
          <!-- Glowing Smartphone Screen -->
          <rect x="420" y="240" width="160" height="280" rx="20" fill="#0284c7" stroke="#38bdf8" stroke-width="6" />
          <!-- Glowing Aura Filter -->
          <circle cx="500" cy="380" r="140" fill="#38bdf8" opacity="0.15" />
          <!-- Social Media App Elements on Phone -->
          <rect x="440" y="270" width="120" height="35" rx="8" fill="#ffffff" />
          <text x="500" y="293" font-weight="bold" font-size="14" fill="#0284c7" text-anchor="middle">💬 Chat Feed</text>
          <circle cx="460" cy="330" r="15" fill="#ef4444" />
          <circle cx="500" cy="370" r="15" fill="#22c55e" />
          <circle cx="540" cy="410" r="15" fill="#eab308" />
          <text x="500" y="475" font-size="28" text-anchor="middle">📱 👍 ❤️</text>
        `,
        promptDesc: "Un adolescente revisando las redes sociales en un teléfono inteligente por la noche en la cama, con la habitación oscura excepto por la luz de la pantalla."
    },
    {
        id: "human-ingenuity-technology",
        theme: "Human Ingenuity",
        title: "Technology & Robotics in School",
        color1: "#0369a1",
        color2: "#0284c7",
        svgScene: `
          <!-- Science Tech Lab Classroom -->
          <rect width="1200" height="675" fill="#f0f9ff" />
          <!-- Lab Workbench -->
          <rect x="150" y="380" width="900" height="180" rx="16" fill="#334155" />
          <!-- Educational Science Robot on Table -->
          <rect x="520" y="200" width="160" height="180" rx="20" fill="#0284c7" stroke="#38bdf8" stroke-width="6" />
          <circle cx="560" cy="250" r="18" fill="#fef08a" />
          <circle cx="640" cy="250" r="18" fill="#fef08a" />
          <rect x="560" y="300" width="80" height="15" rx="5" fill="#ffffff" />
          <text x="600" y="170" font-size="50" text-anchor="middle">🤖</text>
          <!-- Students with Tablets & Laptops -->
          <circle cx="320" cy="300" r="40" fill="#ea580c" />
          <rect x="260" y="350" width="120" height="70" rx="10" fill="#94a3b8" />
          <text x="320" y="295" font-size="30" text-anchor="middle">💻</text>
          <circle cx="880" cy="300" r="40" fill="#16a34a" />
          <rect x="820" y="350" width="120" height="70" rx="10" fill="#94a3b8" />
          <text x="880" y="295" font-size="30" text-anchor="middle">📱</text>
        `,
        promptDesc: "Un grupo de estudiantes en un aula usando tabletas y un robot para completar un proyecto de ciencias."
    },
    {
        id: "human-ingenuity-transport",
        theme: "Human Ingenuity",
        title: "Sustainable Urban Transport",
        color1: "#047857",
        color2: "#059669",
        svgScene: `
          <!-- City Street & Bike Lane Background -->
          <rect width="1200" height="675" fill="#e0f2fe" />
          <!-- City Buildings Skyline -->
          <rect x="100" y="100" width="180" height="300" fill="#94a3b8" />
          <rect x="320" y="60" width="220" height="340" fill="#64748b" />
          <rect x="700" y="120" width="190" height="280" fill="#94a3b8" />
          <rect x="930" y="80" width="200" height="320" fill="#475569" />
          <!-- Road & Green Bike Lane -->
          <rect x="0" y="400" width="1200" height="275" fill="#334155" />
          <rect x="0" y="440" width="1200" height="90" fill="#16a34a" />
          <!-- Bike Lane Symbol -->
          <text x="200" y="500" font-size="40" fill="#ffffff">🚲 BIKE LANE</text>
          <!-- Eco Bus -->
          <rect x="700" y="350" width="380" height="130" rx="16" fill="#0284c7" />
          <text x="890" y="420" font-size="45" text-anchor="middle">🚌 ECO BUS</text>
          <!-- Electric Scooter & Helmet Cyclist Graphic -->
          <text x="450" y="490" font-size="65">🛴</text>
          <text x="600" y="490" font-size="65">🚴‍♂️</text>
        `,
        promptDesc: "Una calle concurrida de la ciudad con patinetes eléctricos, bicicletas y un autobús público, con ciclistas que llevan casco."
    },
    {
        id: "social-organization-employment",
        theme: "Social Organization",
        title: "Job Interview & Career",
        color1: "#0f766e",
        color2: "#115e59",
        svgScene: `
          <!-- Office Conference Room -->
          <rect width="1200" height="675" fill="#f1f5f9" />
          <!-- Conference Table -->
          <rect x="200" y="360" width="800" height="180" rx="16" fill="#475569" />
          <!-- Resume Document on Table -->
          <rect x="520" y="390" width="160" height="110" rx="6" fill="#ffffff" stroke="#94a3b8" stroke-width="2" />
          <text x="600" y="430" font-weight="bold" font-size="14" fill="#0f766e" text-anchor="middle">CURRÍCULUM</text>
          <line x1="540" y1="450" x2="660" y2="450" stroke="#cbd5e1" stroke-width="4" />
          <line x1="540" y1="470" x2="640" y2="470" stroke="#cbd5e1" stroke-width="4" />
          <!-- Candidate (Left) -->
          <circle cx="320" cy="280" r="40" fill="#3b82f6" />
          <text x="320" y="275" font-size="32" text-anchor="middle">👔 Candidate</text>
          <!-- Two Interviewers (Right) -->
          <circle cx="800" cy="280" r="40" fill="#0f766e" />
          <text x="800" y="275" font-size="32" text-anchor="middle">💼 Interviewer 1</text>
          <circle cx="920" cy="280" r="40" fill="#d97706" />
          <text x="920" y="275" font-size="32" text-anchor="middle">💼 Interviewer 2</text>
          <text x="560" y="320" font-size="60" text-anchor="middle">🤝</text>
        `,
        promptDesc: "Una persona joven en una entrevista de trabajo, sentada frente a dos entrevistadores en una mesa con un currículum."
    },
    {
        id: "social-organization-community",
        theme: "Social Organization",
        title: "Community Volunteering & Food Drive",
        color1: "#b91c1c",
        color2: "#991b1b",
        svgScene: `
          <!-- Community Center Room -->
          <rect width="1200" height="675" fill="#fef2f2" />
          <!-- Banner -->
          <rect x="300" y="50" width="600" height="70" rx="12" fill="#dc2626" />
          <text x="600" y="95" font-weight="bold" font-size="26" fill="#ffffff" text-anchor="middle">CENTRO COMUNITARIO DE AYUDA ❤️</text>
          <!-- Cardboard Donation Boxes -->
          <g transform="translate(200, 320)">
            <rect x="0" y="0" width="220" height="180" rx="10" fill="#d97706" stroke="#92400e" stroke-width="4" />
            <text x="110" y="70" font-weight="bold" font-size="20" fill="#ffffff" text-anchor="middle">ALIMENTOS</text>
            <text x="110" y="130" font-size="45" text-anchor="middle">🥫 🍞 🍎</text>
          </g>
          <g transform="translate(490, 320)">
            <rect x="0" y="0" width="220" height="180" rx="10" fill="#0284c7" stroke="#0369a1" stroke-width="4" />
            <text x="110" y="70" font-weight="bold" font-size="20" fill="#ffffff" text-anchor="middle">ROPA</text>
            <text x="110" y="130" font-size="45" text-anchor="middle">👕 🧦 🧥</text>
          </g>
          <g transform="translate(780, 320)">
            <rect x="0" y="0" width="220" height="180" rx="10" fill="#16a34a" stroke="#15803d" stroke-width="4" />
            <text x="110" y="70" font-weight="bold" font-size="20" fill="#ffffff" text-anchor="middle">DONACIONES</text>
            <text x="110" y="130" font-size="45" text-anchor="middle">📦 🎁 🧸</text>
          </g>
          <!-- Volunteers -->
          <text x="310" y="270" font-size="50" text-anchor="middle">🤝 Volunteer 1</text>
          <text x="890" y="270" font-size="50" text-anchor="middle">🤝 Volunteer 2</text>
        `,
        promptDesc: "Voluntarios organizando alimentos y ropa donados en un centro comunitario."
    },
    {
        id: "social-organization-law",
        theme: "Social Organization",
        title: "Democracy, Voting & Law",
        color1: "#1e3a8a",
        color2: "#312e81",
        svgScene: `
          <!-- Polling Station Background -->
          <rect width="1200" height="675" fill="#f8fafc" />
          <!-- Voting Booth & Ballot Box -->
          <rect x="750" y="200" width="300" height="320" rx="16" fill="#1e3a8a" />
          <text x="900" y="270" font-weight="bold" font-size="24" fill="#ffffff" text-anchor="middle">URNA DE VOTACIÓN</text>
          <rect x="830" y="310" width="140" height="150" rx="10" fill="#3b82f6" stroke="#ffffff" stroke-width="4" />
          <rect x="870" y="300" width="60" height="15" fill="#ffffff" />
          <text x="900" y="400" font-size="50" text-anchor="middle">🗳️</text>
          <!-- Line of Citizens Voting -->
          <g transform="translate(150, 300)">
            <circle cx="80" cy="50" r="35" fill="#ea580c" />
            <text x="80" y="45" font-size="28" text-anchor="middle">🧾</text>
            <circle cx="240" cy="50" r="35" fill="#16a34a" />
            <text x="240" y="45" font-size="28" text-anchor="middle">🆔</text>
            <circle cx="400" cy="50" r="35" fill="#9333ea" />
            <text x="400" y="45" font-size="28" text-anchor="middle">📄</text>
          </g>
          <text x="350" y="450" font-weight="bold" font-size="22" fill="#334155">Fila de Votantes e Identificación</text>
        `,
        promptDesc: "Personas haciendo fila para votar en un centro de votación, con voluntarios revisando identificaciones."
    },
    {
        id: "sharing-planet-environment",
        theme: "Sharing the Planet",
        title: "Beach Plastic Cleanup",
        color1: "#0f766e",
        color2: "#047857",
        svgScene: `
          <!-- Ocean & Beach Coastline Background -->
          <rect width="1200" height="675" fill="#fef3c7" />
          <path d="M 0 0 L 1200 0 L 1200 280 Q 600 350 0 280 Z" fill="#0284c7" />
          <!-- Ocean Waves -->
          <path d="M 0 280 Q 300 320 600 280 T 1200 280" fill="none" stroke="#38bdf8" stroke-width="8" />
          <!-- Volunteers Cleaning Plastic -->
          <circle cx="350" cy="450" r="40" fill="#16a34a" />
          <text x="350" y="445" font-size="32" text-anchor="middle">🧹</text>
          <circle cx="650" cy="450" r="40" fill="#059669" />
          <text x="650" y="445" font-size="32" text-anchor="middle">🚮</text>
          <!-- Recycling Bins -->
          <g transform="translate(850, 360)">
            <rect x="0" y="0" width="100" height="160" rx="10" fill="#2563eb" />
            <text x="50" y="60" font-weight="bold" font-size="16" fill="#ffffff" text-anchor="middle">PLÁSTICO</text>
            <text x="50" y="110" font-size="35" text-anchor="middle">♻️</text>
          </g>
          <g transform="translate(980, 360)">
            <rect x="0" y="0" width="100" height="160" rx="10" fill="#16a34a" />
            <text x="50" y="60" font-weight="bold" font-size="16" fill="#ffffff" text-anchor="middle">RECICLAJE</text>
            <text x="50" y="110" font-size="35" text-anchor="middle">🏖️</text>
          </g>
        `,
        promptDesc: "Un grupo de personas recogiendo residuos de plástico en una playa, con contenedores de reciclaje cerca."
    },
    {
        id: "sharing-planet-human-rights",
        theme: "Sharing the Planet",
        title: "Human Rights & Student Assembly",
        color1: "#b91c1c",
        color2: "#be185d",
        svgScene: `
          <!-- Assembly Stage Background -->
          <rect width="1200" height="675" fill="#fdf2f8" />
          <rect x="100" y="400" width="1000" height="180" rx="16" fill="#9d174d" />
          <!-- Student Assembly Banner -->
          <rect x="250" y="60" width="700" height="90" rx="16" fill="#be185d" />
          <text x="600" y="115" font-weight="bold" font-size="32" fill="#ffffff" text-anchor="middle">IGUALDAD Y DERECHOS HUMANOS ✊</text>
          <!-- Diverse Students Holding Protest Signs -->
          <g transform="translate(250, 220)">
            <rect x="0" y="0" width="180" height="120" rx="10" fill="#ffffff" stroke="#be185d" stroke-width="4" />
            <text x="90" y="65" font-weight="bold" font-size="20" fill="#be185d" text-anchor="middle">EQUAL RIGHTS</text>
            <line x1="90" y1="120" x2="90" y2="200" stroke="#78350f" stroke-width="10" />
          </g>
          <g transform="translate(510, 200)">
            <rect x="0" y="0" width="180" height="120" rx="10" fill="#ffffff" stroke="#be185d" stroke-width="4" />
            <text x="90" y="65" font-weight="bold" font-size="20" fill="#be185d" text-anchor="middle">JUSTICIA 🌈</text>
            <line x1="90" y1="120" x2="90" y2="220" stroke="#78350f" stroke-width="10" />
          </g>
          <g transform="translate(770, 220)">
            <rect x="0" y="0" width="180" height="120" rx="10" fill="#ffffff" stroke="#be185d" stroke-width="4" />
            <text x="90" y="65" font-weight="bold" font-size="20" fill="#be185d" text-anchor="middle">PAZ Y DIGNIDAD</text>
            <line x1="90" y1="120" x2="90" y2="200" stroke="#78350f" stroke-width="10" />
          </g>
        `,
        promptDesc: "Un grupo de estudiantes diversos sosteniendo carteles sobre la igualdad en una asamblea escolar pacífica."
    }
];

const targetDir = path.join(__dirname, '..', 'public', 'images', 'oral');
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

tasks.forEach((task) => {
    const fullSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad_${task.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${task.color1}" />
      <stop offset="100%" stop-color="${task.color2}" />
    </linearGradient>
  </defs>
  ${task.svgScene}
  <!-- Header Overlay -->
  <rect x="30" y="30" width="340" height="38" rx="19" fill="#0f172a" opacity="0.85" />
  <text x="50" y="55" font-family="sans-serif" font-size="14" font-weight="bold" fill="#e2e8f0" letter-spacing="1">
    ${task.theme.toUpperCase()}
  </text>
  <!-- Footer Scene Banner Overlay -->
  <rect x="30" y="575" width="1140" height="70" rx="14" fill="#0f172a" opacity="0.9" />
  <text x="55" y="602" font-family="sans-serif" font-size="13" font-weight="bold" fill="#c084fc" letter-spacing="1">
    ESCENA DEL ESTIMULO:
  </text>
  <text x="55" y="628" font-family="sans-serif" font-size="17" font-weight="600" fill="#ffffff">
    ${task.promptDesc}
  </text>
</svg>`;

    const filePath = path.join(targetDir, `${task.id}.svg`);
    fs.writeFileSync(filePath, fullSvg, 'utf8');
    console.log(`Generated SVG scene: ${filePath}`);
});

console.log('All detailed vector scene illustrations generated!');
