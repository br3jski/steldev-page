import SitePage, { getSiteCopy } from '../components/SitePage';

export default function Home() {
  return <SitePage copy={getSiteCopy('pl')} />;
}
