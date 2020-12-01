export class HotMusicService {
  public useMusicHotList = (navigation: any): [any[]] => {
    const listHotMusic = [
      {
        id: 1,
        url:
          'https://appmusictrantien.000webhostapp.com/Mp3/TimLaiBauTroi-TuanHung-2504559.mp3',
        type: 'default',
        title: 'Tìm lại bầu trời',
        album: 'Nhạc hót',
        artist: 'Tuấn Hưng',
        artwork:
          'https://media.baodautu.vn/Images/chicuong/2019/06/24/tuan-hung-2-4511-1561286660.jpg',
      },
      {
        id: 2,
        url:
          'https://appmusictrantien.000webhostapp.com/Mp3/Hong%20Nhan%20-%20Jack%20[128kbps_MP3].mp3',
        type: 'default',
        title: 'Hồng nhan',
        album: 'Nhạc hot',
        artist: 'Jack',
        artwork: 'https://i.ytimg.com/vi/FJcBThfsJc0/maxresdefault.jpg',
      },
      {
        id: 3,
        url:
          'https://appmusictrantien.000webhostapp.com/Mp3/Where%20s%20My%20Love%20-%20SYML%20-.mp3',
        type: 'default',
        title: 'Where`s my love ',
        album: 'Nhạc hot',
        artist: 'Jack',
        artwork:
          'https://images.genius.com/b8ca3e4b67190b5fbe72dcaaeec3b358.640x640x1.jpg',
      },
    ];

    return [listHotMusic];
  };
}

export const hotMusicService: HotMusicService = new HotMusicService();
