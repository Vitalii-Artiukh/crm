import AddCompanyButton from '@/app/components/add-company-button';
import ServerComponent from '@/app/components/server-component';
import ClientComponent from '@/app/components/client-component';
import ServerComponentCopy from '@/app/components/server-component-copy';

export default function Home() {
  return (
    <main>
      <h1 className="p-4 text-xl text-red-950">Home page</h1>
      <AddCompanyButton />
      <ServerComponent />
      <ClientComponent>
        <ServerComponentCopy />
      </ClientComponent>
    </main>
  );
}
