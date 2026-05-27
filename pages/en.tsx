import SitePage, { getSiteCopy } from '../components/SitePage';

export default function EnglishHome() {
  return <SitePage copy={getSiteCopy('en')} />;
}
