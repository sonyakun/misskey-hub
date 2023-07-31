import{_ as a,o as n,c as e,e as i}from"./app.5a4d8cc2.js";const t={},k=i('<h1 id="bisukan-kata" tabindex="-1"><a class="header-anchor" href="#bisukan-kata" aria-hidden="true">#</a> Bisukan Kata</h1><p>Dengan mengatur bisukan kata, kamu dapat membuat catatan yang cocok dengan kondisi tertentu untuk tidak tampil lagi dalam lini masamu.</p><p>Terdapat dua tipe bisukan kata: lunak dan keras. Penjelasan di bawah ini menjelaskan proses pengaturan beserta efek dari keduanya.</p><h2 id="bisukan-kata-lunak" tabindex="-1"><a class="header-anchor" href="#bisukan-kata-lunak" aria-hidden="true">#</a> Bisukan Kata Lunak</h2><p>Dengan bisukan kata lunak, kata yang dibisukan diproses pada klien (aplikasi) yang sedang kamu gunakan.</p><p>Ketika catatan memenuhi kondisi set, catatan tersebut akan disembunyikan dibalik teks yang menyatakan &quot;(pengguna) mengatakan sesuatu&quot;. kamu dapat menampilkan konten dari catatan yang tersembunyi ini dengan mengeklik teks tersebut.</p><h2 id="bisukan-kata-keras" tabindex="-1"><a class="header-anchor" href="#bisukan-kata-keras" aria-hidden="true">#</a> Bisukan Kata Keras</h2><p>Dengan bisukan kata keras, peladen akan menilai apakah konten dari catatan baru yang datang memenuhi kondisi set (sama seperti cara kerja antena), dan catatan tersebut akan sepenuhnya dikecualikan dari lini masa kamu apabila kondisi set tersebut terpenuhi.</p><p>Bila kita ringkas, bisukan kata keras memiliki fitur berikut:</p><ul><li>Hanya catatan baru yang terbuat setelah konfigurasi akan dipengaruhi oleh aturan bisu.</li><li>Jika kondisi diubah, catatan yang dibisukan keras sebelumnya akan tetap terbisukan.</li><li>Linimasa tidak akan dipenuhi dengan &quot;(...) mengatakan sesuatu&quot;.</li><li>Bisukan keras akan tetap berfungsi bahkan untuk aplikasi yang tidak memiliki fungsionalitas akan bisukan lunak.</li></ul>',10),s=[k];function u(r,d){return n(),e("div",null,s)}var m=a(t,[["render",u],["__file","word-mute.html.vue"]]);export{m as default};
