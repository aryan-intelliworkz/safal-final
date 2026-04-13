import './globals.css';

export const metadata = {
  title: 'Safal Infosoft Limited - The Architecture of Global Enterprise',
  description: 'A diversified technology holding company engineering the future of global enterprise. Operating at the intersection of agentic AI, industrial automation, and strategic advisory.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
