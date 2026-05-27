import type { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => ({
  redirect: {
    destination: '/#cloudvance',
    permanent: false,
  },
});

export default function CompanyRedirect() {
  return null;
}
