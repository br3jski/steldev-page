import type { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => ({
  redirect: {
    destination: '/#services',
    permanent: false,
  },
});

export default function ServicesRedirect() {
  return null;
}
