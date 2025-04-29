# Cendere42

🎮 Pong Turnuva Uygulaması - Proje Gereksinimleri (Türkçe)
I. Genel Özellikler
  Bu bir Tek Sayfa Uygulaması (SPA) olmalıdır. Kullanıcı, tarayıcıdaki Geri / İleri butonlarını kullanabilmelidir.

  Uygulama, Mozilla Firefox’un en güncel kararlı sürümü ile uyumlu olmalıdır (diğer tarayıcılarla uyumlu olması da kabul edilir).

  Kullanıcı siteyi kullanırken hiçbir beklenmeyen hata veya uyarı ile karşılaşmamalıdır.

  Uygulama Docker üzerinden çalıştırılmalıdır. Tek bir komutla bağımsız çalışan bir container başlatılabilmelidir. (Detaylar ve kısıtlamalar için belgeye bakınız.)

a) Frontend
  Yalnızca Tailwind CSS ve TypeScript kullanılmalıdır.

b) Backend
  Fastify ve Node.js kullanılmalıdır.

  Veritabanı olarak SQLite kullanılacaktır.

II. Oyun Gereksinimleri
  Kullanıcılar sitede canlı Pong oyununa katılabilmelidir.

  İki oyuncu aynı klavyeyi kullanarak oyunu oynamalıdır (Remote Players modülü ile uzaktan oyuncu desteği eklenebilir).

  Turnuva sistemi olmalıdır: Oyuncuların eşleşmeleri ve oynama sıraları gösterilmelidir.

  Kayıt sistemi olmalıdır: Turnuva başında her oyuncu takma adını girmelidir. Yeni turnuva başladığında takma adlar sıfırlanmalıdır.

  Eşleştirme sistemi (matchmaking) olmalıdır: Turnuva sistemi oyuncuları eşleştirmeli ve sonraki maçı duyurmalıdır.

  Tüm oyuncular için oyun kuralları eşit olmalıdır (örneğin paddle (raket) hızları aynı olmalıdır — bu, AI kullanılsa bile geçerlidir).

  Oyun, frontend kısıtlamalarına uygun olmalı veya FrontEnd/Graphics modülleri ile geliştirilebilir. Görsel tasarım serbesttir ancak Pong (1972) oyununun özünü yansıtmalıdır.

III. Güvenlik Gereksinimleri
  Veritabanına kaydedilen tüm şifreler hash’lenmiş olmalıdır.

  Uygulama SQL injection / XSS saldırılarına karşı korumalı olmalıdır.

  HTTPS bağlantısı zorunludur. (WebSocket yerine wss kullanılmalı.)

  Formlar ve kullanıcı girdileri mutlaka doğrulanmalıdır:

  Backend varsa sunucu tarafında,

  Backend yoksa tarayıcı tarafında doğrulama yapılmalıdır.

  JWT ve 2FA kullanılmasa bile tüm API rotaları ve sistemler güvenli olmalıdır.

  Tüm şifreler, API anahtarları ve .env dosyasında bulunan bilgiler git ile paylaşılmamalı, .gitignore ile hariç tutulmalıdır.

IV. Modüller
  Web
  ✅ Ana modül: Backend için bir framework kullanımı (Fastify)

  ✅ İkincil modül (2 tanesi = 1 ana modül):

  Frontend için bir araç veya framework kullanımı (örneğin: React + Tailwind)

  Backend’de veritabanı kullanımı (SQLite)

Kullanıcı Yönetimi
  ✅ Ana modül: Kullanıcı kimlik doğrulama, turnuvalar arasında kullanıcı yönetimi

DevOps
  ✅ Ana modül: Backend'i mikroservis yapısında tasarlamak

Oynanış ve Kullanıcı Deneyimi
  ✅ Ana modüller:

    İkinci bir oyun ve kullanıcı geçmişi / eşleştirme sistemi

    Canlı sohbet sistemi

  ✅ İkincil modül: Oyun özelleştirme seçenekleri (örneğin paddle rengi, hız ayarı vb.)

  Siber Güvenlik
  ✅ Ana modüller:
    JWT + 2 Faktörlü Kimlik Doğrulama (2FA)