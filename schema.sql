-- Öğrenci Bilgileri Tablosu [cite: 12]
CREATE TABLE ogrenciler (
    id SERIAL PRIMARY KEY,
    isim_soyisim VARCHAR(100),
    eposta VARCHAR(100) UNIQUE NOT NULL,
    ogrenci_no VARCHAR(20) UNIQUE
);

-- Duyurular Tablosu [cite: 12]
CREATE TABLE duyurular (
    id SERIAL PRIMARY KEY,
    baslik VARCHAR(255),
    icerik TEXT,
    tarih TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);