import OnboardingWizard from '@/components/OnboardingWizard';

export const metadata = {
  title: 'Kom igång med ditt projekt | Christoffer Wallman',
  description: 'Berätta om ditt projekt så hjälper vi dig att synas bättre på Google och få fler kunder online.',
};

export default function OnboardingPage() {
  return (
    <main className="min-h-screen bg-gray-900 py-12 px-4">
      <OnboardingWizard />
    </main>
  );
}