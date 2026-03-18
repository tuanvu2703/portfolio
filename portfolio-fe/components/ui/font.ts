import { Inter, Montserrat, Roboto_Mono, Zen_Tokyo_Zoo } from 'next/font/google';

export const ZenTokyoZoo = Zen_Tokyo_Zoo({
subsets: ['latin'],
variable: '--font-zen-tokyo-zoo',
style: 'normal',
weight: '400',
});

export const inter = Inter({
subsets: ["latin"],
variable: "--font-inter",
})

export const montserrat = Montserrat({
subsets: ["latin"],
variable: "--font-montserrat",
})

export const roboto_mono = Roboto_Mono({
subsets: ["latin"],
variable: "--font-roboto_mono",
})


