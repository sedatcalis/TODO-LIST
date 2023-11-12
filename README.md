# vite projesi için Adımlar

- npm create vite > yeni bir klasör içerisinde react oluşturur

- npm create vite .> terminal buldugu konuma oluşturur

- npm i > node modules indirme
- npm run dev > proje ayagı kaldırma

# Json-server
- kendi bilgisayarımızda  çalışam APİ oluşturma yarar

- Oluşturdumuz db.json içerindeki verileri izler

- her bi dizi için endpoint oluşturur

- bu endpointler yapılan istekleri izler

-istekler sonucunda olan degişimi db.json dosyasına kaydedilir

# Faydalar

1- hızlı Protoipleme: backend oluşturulmadan önce uygulamalrın temel özelliklerini oluşturmak için kıullanırız

- kendimiz geliştirmek için yazdıgımız uygulamalrı backend ihtiyaclarını karşılar

# Json-server Operatörler
- Filtrelerde kullanabilecegimiz operatörler

- gte > greater than or eqyaeals ">="
- lte > less than or equals "<="
- ne > not equals "!="

- degişken ismini sonuna ekleriz
- price_gte = 100 : fiyatlar 100den büyük veya eşit olan

## NOT : 
-Projede Json.server varsa ayaga kaldırmadan önce server ayaga kaldırılır (npm run server).Sonra projeyi ayaga kaldırılır(npm run dev)

# axios
- http istekleri için modern çözüm
- yerlişik degil paketini indirmek gerekiyor
- npm i axios 

# altın kural
- api güncelleniyorsa arayüzde güncellenecek
- arayüz güncelleniyorsa api de güncellenicek

- sadece api'yi güncellersek kullanıcı yaptıgı işlemi gerçekleştigini anlayamaz Örn : alişveriş sepetinden sipariş ver butonuna tıkladık sadece api istegi atarsak sipariş alınır ama bizim bu işlemin başarılı oldugunu kullancıya bildirmemiz lazım

- sadece arayüzü güncellerseniz 
kullanıcı yaptıgı işlemi sayfayı yenileyinca kaybeder örnek: alişveriş sepetinde kullanıcıya alışveriş başarılı bildirimi verdik ama api'ye istek atmadık o zaman kullanıcı günlerce beklesede spiariş eline geçmez

- Olması gereken
önce api istegi atılır egerki api istegi başarılı olursa arayüze bu yansıtılır. başarısız olursa hata uyarısı verilir

