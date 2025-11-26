import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderComponent from '@/components/header';
import AboutComponent from '@/app/components/about';
import DownloadComponent from '@/app/components/download';
import ProjectsComponent from '@/app/components/projects';
import ContactComponent from '@/app/components/contact';
import EmailComponent from '@/app/components/email';
import FooterComponent from '@/components/footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Warren Dano | Software Engineer ",
  description: "With more than 10 years of bringing solutions to different industries, I deliver quality work and possibilities to any problems.",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log('test');
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="sm:grid homepage-container">
          <HeaderComponent />
          <div className="body pt-[120px] lg:pt-0">
            <AboutComponent />
            <DownloadComponent />
            <ProjectsComponent />
            <ContactComponent />
            <EmailComponent />
          </div>          
          <FooterComponent />
        </div>
      </body>
    </html>
  );
}
