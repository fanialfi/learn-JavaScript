import { Bench } from "tinybench";
const bench = new Bench({ name: "Simple benchmark", time: 100 });

const artikelObj = [
  {
    id: 1,
    title: "Panduan lengkap mengoptimalkan performa linux untuk laptop lama",
    tags: ["linux", "optimasi", "sistem-operasi", "tutorial"],
  },
  {
    id: 2,
    title: "Mengenal struktur data Map dan Set pada javascript modern",
    tags: ["javascript", "pemrograman", "struktur-data", "tutorial"],
  },
  {
    id: 3,
    title: "Cara kerja btrfs dan manajemen snapshoot untuk keamanan data",
    tags: ["linux", "sistem-operasi", "penyimpanan", "tutorial"],
  },
  {
    id: 4,
    title: "Memahami Typed Array dan ArrayBuffer untuk pemrosesan data biner",
    tags: ["javascript", "pemrograman", "optimasi"],
  },
  {
    id: 5,
    title: "Dasar-dasar konfigurasi terminal emulator agar lebih produktif",
    tags: ["linux", "produktifitas", "tutorial"],
  },
];

const artikelMap = new Map([
  [
    "1",
    {
      title: "Panduan lengkap mengoptimalkan performa linux untuk laptop lama",
      tags: new Set(["linux", "optimasi", "sistem-operasi", "tutorial"]),
    },
  ],
  [
    "2",
    {
      title: "Mengenal struktur data Map dan Set pada javascript modern",
      tags: new Set(["javascript", "pemrograman", "struktur-data", "tutorial"]),
    },
  ],
  [
    "3",
    {
      title: "Cara kerja btrfs dan manajemen snapshoot untuk keamanan data",
      tags: new Set(["linux", "sistem-operasi", "penyimpanan", "tutorial"]),
    },
  ],
  [
    "4",
    {
      title: "Memahami Typed Array dan ArrayBuffer untuk pemrosesan data biner",
      tags: new Set(["javascript", "pemrograman", "optimasi"]),
    },
  ],
  [
    "5",
    {
      title: "Dasar-dasar konfigurasi terminal emulator agar lebih produktif",
      tags: new Set(["linux", "produktifitas", "tutorial"]),
    },
  ],
]);

function articleUnionObj(article1, article2) {
  const arry = [];
  article1?.tags.concat(article2?.tags).forEach((element) => {
    if (!arry.includes(element)) {
      arry.push(element);
    }
  });
  return arry;
}

function articleUnionSet(article1, article2) {
  if (artikelMap.has(article1) && artikelMap.has(article2)) {
    return artikelMap.get(article1).tags.union(artikelMap.get(article2).tags);
  }
}

bench
  .add("bench articleUnion Obj", () => {
    articleUnionObj(artikelObj[0], artikelObj[1]);
  })
  .add("bench artikelUnion Set", () => {
    articleUnionSet("1", "2");
  });

await bench.run();
console.log(bench.table());
