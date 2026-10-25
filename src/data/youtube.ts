export interface YouTubeVideo {
  id: string
  title: string
  description: string
  thumbnail: string
  category: string
}

export interface YouTubeChannel {
  channelUrl: string
  description: string
  videos: YouTubeVideo[]
}

export const youtubeData: YouTubeChannel = {
  channelUrl:' https://www.youtube.com/@AkademiaPrzywolywacza',
  description: 'Witaj w Akademii Przywoływacza! To projekt poświęcony grze League of Legends, współtworzony przeze mnie oraz mojego narzeczonego, który skupia się na przekazywaniu treści w efektywny, ale też przystępny sposób tak, aby widz po obejrzeniu filmiku dostał dawkę wiedzy, która nie tylko pomoże mu lepiej grać, ale też nie obciąży go na tyle, że dalsza nauka będzie nie przyjemna.',
  videos: [
    {
      id: '_gRcgVVYUPQ',
      title: 'MUSISZ znać te momenty w League of Legends!',
      description: 'Poradnik na temat występujących timerów w grze oraz co warto wiedzieć na ich temat.',
      thumbnail: 'https://img.youtube.com/vi/_gRcgVVYUPQ/maxresdefault.jpg',
      category: 'Poradnik'
    },
    {
      id: 'Clp3zkN115o',
      title: 'Co warto wiedzieć na temat run w League of Legends?',
      description: 'Wideo omawiające w przystępny sposób dość obszerny temat jakim są runy.',
      thumbnail: 'https://img.youtube.com/vi/Clp3zkN115o/maxresdefault.jpg',
      category: 'Poradnik'
    },
    {
      id: 'AC_CUKM_H8c&t=353s',
      title: 'Czego NIE uczyć się z Worldsów? z @bezum | League of Legends',
      description: 'Materiał zrealizowany we współpracy z innym youtuberem na temat esportu.',
      thumbnail: 'https://img.youtube.com/vi/AC_CUKM_H8c&t=353s/maxresdefault.jpg',
      category: 'Poradnik'
    },
  ]
}