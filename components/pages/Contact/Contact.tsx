import ClientForm from './Client/ClientForm';
import Footer from 'ui/Footer';

export default function Contact() {
  return (
    <>
      <section className={'min-h-screen bg-contact bg-cover bg-center'}>
        <ClientForm />
      </section>
      <Footer />
    </>
  );
}
