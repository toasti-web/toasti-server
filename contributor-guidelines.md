Pedoman Kontributor
======================
1. Baca pedoman kontributor utama kami di [sini](https://github.com/toasti-web/website-toasti/blob/staging/contributor-guidelines.md).
2. Jika ingin mengubah schema (definisi collection type dll.), kamu harus mengubahnya di environment lokal & melakukan push ke repositori ini. Di Heroku, aplikasi berjalan dengan mode production yang tidak mengizinkan perubahan schema karena alasan keamanan.
3. Saat ini, kami menggunakan server khusus development yang memiliki kemampuan terbatas. Jangan terlalu khawatir masalah load time, terutama jika kamu sudah cukup lama tidak mengakses website.
4. Saat ini, kami menggunakan database khusus development yang memiliki kapasitas terbatas. Jangan mengisi database dengan ribuan data dalam satu waktu. Jika kamu ingin menguji performa dari algoritma yang kamu tulis pada jumlah data yang besar, silakan gunakan database lokal / lakukan analisis kompleksitas sendiri.

Terima kasih dan semoga lancar dalam berkontribusi!


Contributor Guidelines
======================
1. Read our main contributor guidelines [here](https://github.com/toasti-web/website-toasti/blob/staging/contributor-guidelines.md).
2. If you want to make changes on the schema (collection type definition etc.), you will have to make the change in your local environment and push it to this repository since Heroku runs the app in production mode, where schema editing is not allowed due to security reasons.
3. Currently, we are running in a dev server with limited capability. Do not worry too much about the load time, especially if you are accessing the site for the first time in a while.
4. Currently, we are using a dev database with limited capacity. Do not populate the database with > 1000 data at once. If you want to test the performance of your algorithm in large collection sizes, please use your local database / do your own complexity analysis.

Thank you and hope everything goes well!
