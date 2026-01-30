import Sidebar from '@/components/sidebar/ui/Sidebar';
import './global.scss';
import Player from '@/components/player/Player';

export default function Home() {
  return (
    <div className="home">
      <Sidebar />
      <Player />
    </div>
  );
}
