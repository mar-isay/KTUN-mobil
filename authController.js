const pool = require('./pool'); // Veritabanı bağlantısı [cite: 11]
const bcrypt = require('bcrypt'); // Şifreleme kütüphanesi [cite: 18]
const jwt = require('jsonwebtoken'); // Oturum anahtarı [cite: 17]

const register = async (req, res) => {
    const { isim_soyisim, eposta, sifre, ogrenci_no } = req.body;

    try {
        // 1. KTÜN e-posta formatı doğrulama [cite: 18]
        if (!eposta.endsWith("@ktun.edu.tr")) {
            return res.status(400).json({ hata: "Sadece KTÜN e-postası ile kayıt olunabilir." });
        }

        // 2. Şifreyi güvenli hale getirme (Hashing) [cite: 18]
        const salt = await bcrypt.genSalt(10);
        const hashedSifre = await bcrypt.hash(sifre, salt);

        // 3. Veritabanına kaydetme [cite: 12]
        const yeniKullanici = await pool.query(
            "INSERT INTO ogrenciler (isim_soyisim, eposta, sifre, ogrenci_no) VALUES ($1, $2, $3, $4) RETURNING *",
            [isim_soyisim, eposta, hashedSifre, ogrenci_no]
        );

        res.status(201).json({ mesaj: "Kayıt başarıyla oluşturuldu!", kullanici: yeniKullanici.rows[0] });
    } catch (err) {
        res.status(500).json({ hata: "Sunucu hatası veya kullanıcı zaten mevcut." });
    }
};

const login = async (req, res) => {
    const { eposta, sifre } = req.body;

    try {
        // 1. Kullanıcı var mı kontrol et
        const kullanici = await pool.query("SELECT * FROM ogrenciler WHERE eposta = $1", [eposta]);
        if (kullanici.rows.length === 0) {
            return res.status(401).json({ hata: "Geçersiz e-posta veya şifre." });
        }

        // 2. Şifre doğru mu kontrol et (Bcrypt ile karşılaştırma)
        const sifreDogru = await bcrypt.compare(sifre, kullanici.rows[0].sifre);
        if (!sifreDogru) {
            return res.status(401).json({ hata: "Geçersiz e-posta veya şifre." });
        }

        // 3. JWT Token Oluştur (Giriş Bileti)
        const token = jwt.sign(
            { id: kullanici.rows[0].id, eposta: kullanici.rows[0].eposta },
            "ktun_gizli_anahtar", // Bu anahtarı ilerde .env dosyasına taşıyacağız
            { expiresIn: "24h" }
        );

        res.json({ mesaj: "Giriş başarılı!", token });
    } catch (err) {
        res.status(500).json({ hata: "Giriş işlemi sırasında bir hata oluştu." });
    }
};
module.exports = { register, login };