// Mini kasir
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
      kategori: "Aksesoris Komputer",
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
      kategori: "Aksesoris Komputer",
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

      kategori: "Aksesoris Gadget",
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

      kategori: "Aksesoris Komputer",
      deskripsi:
        "Webcam Full HD 1080p untuk video conference dan kebutuhan streaming.",
      harga: 950000,
    },
  ],
]);

// operasi tambah
productsWithMap.set("SKU-MEIZU-M5C", {
  nama: "Meizu M5c",
  merek: "Meizu",
  kategori: "Elektronik",
  deskripsi: "HP android dari china yang sekarang di Indonesia sudah tidak ada",
  harga: 600,
});

// operasi cari
if (productsWithMap.has("SKU-MEIZU-M5C")) {
  console.log(productsWithMap.get("SKU-MEIZU-M5C"));
}

// operasi update
productsWithMap.set("SKU-MEIZU-M5C", {
  nama: "Meizu M5c",
  merek: "Meizu",
  kategori: "Smartphone",
  deskripsi: "HP android dari china yang sangat jelek",
  harga: 1000000,
});

// operasi hapus
if (productsWithMap.delete("SKU-MEIZU-M5C")) {
  console.log("Element berhasil dihapus");
}
// console.log(productsWithMap);

// mencari sebuah product berdasarkan kategori
const kategoriElektronik = new Map();
const elektronik = /elektronik/i;
productsWithMap.forEach((value, key, map) => {
  if (value.kategori.match(elektronik)) {
    kategoriElektronik.set(key, value);
  }
});

// console.log(kategoriElektronik);

// mengelompokkan produk berdasarkan kategori
const basedOnKategori = new Map();
// const allKategori = ["elektronik", "aksesoris", "audio", "penyimpanan"];

// for (let index = 0; index < allKategori.length; index++) {
//   let kategori = [];
//   productsWithMap.forEach((value, key, map) => {
//     const regexp = new RegExp(allKategori[index], "i");
//     if (value.kategori.search(regexp) !== -1) {
//       kategori.push(value);
//     }
//   });

//   basedOnKategori.set(allKategori[index], kategori);
// }
// console.log(basedOnKategori);

function grupByCategory() {
  for ([key, element] of productsWithMap.entries()) {
    if (!basedOnKategori.has(element.kategori)) {
      basedOnKategori
        .set(element.kategori, [])
        .get(element.kategori)
        .push(element);
    } else {
      basedOnKategori.get(element.kategori).push(element);
    }
  }
}
