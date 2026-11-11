// object map menyimpan dalam bentuk key-value, dan menyimpannya berdasarkan urutannya
// value apapun (jenis data apapun) bisa digunakan sebagai key ataupun value
// setiap variabel map, hanya boleh berisi 1 key yang unik, 2 array kosong adalah hal yang berbeda begitu juga object kosong
// karena sama sama kosong, sama sama array, tapi alamat referense-nya beda
const myMap = new Map();

// menambahkan element
myMap.set([], "hai");
myMap.set([], "beda");
myMap.set(true, true);
myMap.set(true, false);
myMap.set(false, false);
myMap.set(10, "hai");
myMap.set({}, "hai");
myMap.set({}, "hai lagi");
console.log(myMap.size);
console.log(myMap);

const productsWithMap = new Map([
  [
    "SKU-LNV-LPT-001",
    {
      nama: "Laptop ThinkPad E14",
      merek: "Lenovo",
      kategori: "Elektronik",
      deskripsi:
        "Laptop untuk kebutuhan produktivitas, pekerjaan, dan pembelajaran.",
      harga: 12500000,
    },
  ],
  [
    "SKU-SMS-SPH-002",
    {
      nama: "Smartphone Galaxy A15",
      merek: "Samsung",
      kategori: "Elektronik",
      deskripsi: "Smartphone dengan layar Super AMOLED dan kamera utama 50 MP.",
      harga: 2899000,
    },
  ],
  [
    "SKU-LOG-MSE-003",
    {
      nama: "Mouse Wireless M331",
      merek: "Logitech",
      kategori: "Aksesori Komputer",
      deskripsi:
        "Mouse nirkabel dengan desain ergonomis dan teknologi SilentTouch.",
      harga: 275000,
    },
  ],
  [
    "SKU-RDG-KBD-004",
    {
      nama: "Mechanical Keyboard K552",
      merek: "Redragon",
      kategori: "Aksesori Komputer",
      deskripsi: "Keyboard mekanis dengan desain tenkeyless dan lampu RGB.",
      harga: 450000,
    },
  ],
  [
    "SKU-SNY-AUD-005",
    {
      nama: "Headphone WH-CH520",
      merek: "Sony",
      kategori: "Audio",
      deskripsi: "Headphone Bluetooth dengan daya tahan baterai hingga 50 jam.",
      harga: 699000,
    },
  ],
  [
    "SKU-KST-USB-006",
    {
      nama: "Flashdisk DataTraveler  Exodia",
      merek: "Kingston",
      kategori: "Penyimpanan",
      deskripsi:
        "Flashdisk USB untuk menyimpan dan memindahkan berbagai jenis file.",
      harga: 85000,
    },
  ],
  [
    "SKU-LG-MON-007",
    {
      nama: "Monitor UltraGear 24GN60R",
      merek: "LG",
      kategori: "Elektronik",
      deskripsi: "Monitor Full HD 24 inci dengan refresh rate 144 Hz.",
      harga: 2199000,
    },
  ],
  [
    "SKU-ANK-PWB-008",
    {
      nama: "Power Bank 20000mAh",
      merek: "Anker",

      kategori: "Aksesori Gadget",
      deskripsi:
        "Power bank berkapasitas 20000mAh untuk mengisi daya perangkat elektronik.",
      harga: 599000,
    },
  ],
  [
    "SKU-KST-SSD-009",
    {
      nama: "SSD NV2 1TB",
      merek: "Kingston",

      kategori: "Penyimpanan",
      deskripsi: "SSD NVMe PCIe 4.0 berkapasitas 1TB untuk penyimpanan data.",
      harga: 1250000,
    },
  ],
  [
    "SKU-LOG-WBC-010",
    {
      nama: "Webcam C920 HD Pro",
      merek: "Logitech",

      kategori: "Aksesori Komputer",
      deskripsi:
        "Webcam Full HD 1080p untuk video conference dan kebutuhan streaming.",
      harga: 950000,
    },
  ],
]);

// melakukan operasi cari
console.log(productsWithMap.get("SKU-LNV-LPT-001"));
// console.log(
//   productsWithMap.getOrInsert("SKU-LNV-LPT-001", "Maaf product tidak tersedia"),
// ); // jika element yang dicari tidak ada, maka secara otomatis akan menambahkan element baru

// cek apakah sebuah element ada atau tidak
if (productsWithMap.has("SKU-LNV-LPT-001")) {
  console.log(
    productsWithMap.getOrInsert(
      "SKU-LNV-LPT-001",
      "Maaf product tidak tersedia",
    ),
  );
}

const iterator = productsWithMap.entries(); //method Map.entries() sama seperti method Set.values() / Set.keys()
let { value, done } = iterator.next();

do {
  console.log(value[0]);
  ({ value, done } = iterator.next());
} while (!done);

// menambahkan element baru
productsWithMap.set("SKU-HP-MEIZU", {
  nama: "Meizu M5c",
  merek: "Meizu",
  kategori: "Elektronik",
  deskripsi:
    "HP android buatan china yang sudah tidak tersedia lagi di indonesia",
  harga: 6000,
});

console.log(productsWithMap.get("SKU-HP-MEIZU"));
