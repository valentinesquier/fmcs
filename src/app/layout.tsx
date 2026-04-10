import type { Metadata } from "next";
import { Inter_Tight, Caveat } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FMCS | Fitmass Coaching School | Deviens coach en musculation",
  description:
    "L'école en ligne la plus complète pour maîtriser le coaching en musculation, trouver des clients et vivre de ta passion en 6 mois. +1000 coachs formés. 4.2/5 Trustpilot.",
  keywords: [
    "formation coaching musculation",
    "devenir coach sportif",
    "FMCS",
    "Fitmass Coaching School",
    "Nassim Sahili",
    "formation coach en ligne",
    "carte pro coach sportif",
    "BPJEPS alternative",
    "CQP coach sportif",
    "vivre du coaching",
    "formation nutrition sport",
    "programmation entraînement",
  ],
  metadataBase: new URL("https://fitmass.school"),
  alternates: {
    canonical: "https://fitmass.school",
  },
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  openGraph: {
    title: "FMCS | La formation n°1 pour vivre du coaching en musculation",
    description:
      "L'école en ligne la plus complète du marché. De l'anatomie au business. +1000 coachs formés. Rejoins la FMCS.",
    type: "website",
    locale: "fr_FR",
    url: "https://fitmass.school",
    siteName: "FMCS - Fitmass Coaching School",
    images: [
      {
        url: "/images/fmcs-hero.jpeg",
        width: 1200,
        height: 630,
        alt: "FMCS - Fitmass Coaching School",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FMCS | Deviens coach en musculation en 6 mois",
    description:
      "L'école en ligne la plus complète pour maîtriser le coaching en musculation. +1000 coachs formés.",
    images: ["/images/fmcs-hero.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${interTight.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd />
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function (v, i, d, a, l, y, t, c, s) {
    y='_'+d.toLowerCase();c=d+'L';if(!v[d]){v[d]={};}if(!v[c]){v[c]={};}if(!v[y]){v[y]={};}var vl='Loader',vli=v[y][vl],vsl=v[c][vl + 'Script'],vlf=v[c][vl + 'Loaded'],ve='Embed';
    if (!vsl){vsl=function(u,cb){
        if(t){cb();return;}s=i.createElement("script");s.type="text/javascript";s.async=1;s.src=u;
        if(s.readyState){s.onreadystatechange=function(){if(s.readyState==="loaded"||s.readyState=="complete"){s.onreadystatechange=null;vlf=1;cb();}};}else{s.onload=function(){vlf=1;cb();};}
        i.getElementsByTagName("head")[0].appendChild(s);
    };}
    vsl(l+'loader.min.js',function(){if(!vli){var vlc=v[c][vl];vli=new vlc();}vli.loadScript(l+'player.min.js',function(){var vec=v[d][ve];t=new vec();t.run(a);});});
})(window, document, 'Vidalytics', 'vidalytics_embed_TTLI7ZsYSFTFuoJT', 'https://fast.vidalytics.com/embeds/0XTAwFcp/TTLI7ZsYSFTFuoJT/');

(function (v, i, d, a, l, y, t, c, s) {
    y='_'+d.toLowerCase();c=d+'L';if(!v[d]){v[d]={};}if(!v[c]){v[c]={};}if(!v[y]){v[y]={};}var vl='Loader',vli=v[y][vl],vsl=v[c][vl + 'Script'],vlf=v[c][vl + 'Loaded'],ve='Embed';
    if (!vsl){vsl=function(u,cb){
        if(t){cb();return;}s=i.createElement("script");s.type="text/javascript";s.async=1;s.src=u;
        if(s.readyState){s.onreadystatechange=function(){if(s.readyState==="loaded"||s.readyState=="complete"){s.onreadystatechange=null;vlf=1;cb();}};}else{s.onload=function(){vlf=1;cb();};}
        i.getElementsByTagName("head")[0].appendChild(s);
    };}
    vsl(l+'loader.min.js',function(){if(!vli){var vlc=v[c][vl];vli=new vlc();}vli.loadScript(l+'player.min.js',function(){var vec=v[d][ve];t=new vec();t.run(a);});});
})(window, document, 'Vidalytics', 'vidalytics_embed_m9nQeSqmgdeuJEqd', 'https://fast.vidalytics.com/embeds/0XTAwFcp/m9nQeSqmgdeuJEqd/');

(function (v, i, d, a, l, y, t, c, s) {
    y='_'+d.toLowerCase();c=d+'L';if(!v[d]){v[d]={};}if(!v[c]){v[c]={};}if(!v[y]){v[y]={};}var vl='Loader',vli=v[y][vl],vsl=v[c][vl + 'Script'],vlf=v[c][vl + 'Loaded'],ve='Embed';
    if (!vsl){vsl=function(u,cb){
        if(t){cb();return;}s=i.createElement("script");s.type="text/javascript";s.async=1;s.src=u;
        if(s.readyState){s.onreadystatechange=function(){if(s.readyState==="loaded"||s.readyState=="complete"){s.onreadystatechange=null;vlf=1;cb();}};}else{s.onload=function(){vlf=1;cb();};}
        i.getElementsByTagName("head")[0].appendChild(s);
    };}
    vsl(l+'loader.min.js',function(){if(!vli){var vlc=v[c][vl];vli=new vlc();}vli.loadScript(l+'player.min.js',function(){var vec=v[d][ve];t=new vec();t.run(a);});});
})(window, document, 'Vidalytics', 'vidalytics_embed_iLskrr4hQB2EHZrU', 'https://fast.vidalytics.com/embeds/0XTAwFcp/iLskrr4hQB2EHZrU/');
            `,
          }}
        />
      </body>
    </html>
  );
}
