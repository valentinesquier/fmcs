"use client";

import { useState, useEffect, useCallback } from "react";

const FIRST_NAMES = [
  "Lucas", "Thomas", "Antoine", "Julien", "Maxime", "Alexandre",
  "Nicolas", "Mathieu", "Hugo", "Romain", "Emma", "Julie",
  "Sarah", "Chloé", "Laura", "Camille", "Léa", "Manon",
  "Sébastien", "Florian", "Kevin", "Dylan", "Alexis", "Valentin",
  "Nathan", "Quentin", "Théo", "Mehdi", "Sofiane", "Ilias",
];

const CITIES = [
  "Lyon (69)", "Paris (75)", "Marseille (13)", "Bordeaux (33)",
  "Toulouse (31)", "Nantes (44)", "Lille (59)", "Strasbourg (67)",
  "Montpellier (34)", "Nice (06)", "Rennes (35)", "Grenoble (38)",
  "Rouen (76)", "Toulon (83)", "Dijon (21)",
];

function getRandomMessage(): string {
  const messages = [
    "vient de réserver un appel découverte",
    "vient de rejoindre la FMCS",
    `a pris rendez-vous il y a ${Math.floor(3 + Math.random() * 45)} min`,
    "vient de s'inscrire à la FMCS",
    "a réservé son appel découverte",
  ];
  return messages[Math.floor(Math.random() * messages.length)];
}

function getRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function SocialNotif() {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({ name: "", city: "", message: "" });

  const showNotif = useCallback(() => {
    setData({
      name: getRandom(FIRST_NAMES),
      city: getRandom(CITIES),
      message: getRandomMessage(),
    });
    setVisible(true);
    setTimeout(() => setVisible(false), 8000);
  }, []);

  useEffect(() => {
    const firstTimeout = setTimeout(showNotif, 30000);

    const interval = setInterval(() => {
      showNotif();
    }, 45000 + Math.random() * 45000);

    return () => {
      clearTimeout(firstTimeout);
      clearInterval(interval);
    };
  }, [showNotif]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-20 left-4 sm:bottom-6 sm:left-6 z-40 animate-slide-up">
      <div className="flex items-center gap-3 bg-white border border-[#e5e5e5] rounded-2xl px-4 py-3 shadow-[0_8px_40px_rgba(0,0,0,0.1)] max-w-[320px]">
        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-[#e5b80b] flex items-center justify-center text-white font-700 text-[0.875rem] shrink-0">
          {data.name[0]}
        </div>
        {/* Content */}
        <div className="min-w-0">
          <p className="text-[0.8125rem] text-[#131316] leading-tight">
            <span className="font-600">{data.name}</span>{" "}
            <span className="text-[#555]">de {data.city}</span>
          </p>
          <p className="text-[0.75rem] text-[#e5b80b] font-500 leading-tight mt-0.5">
            {data.message}
          </p>
        </div>
      </div>
    </div>
  );
}
