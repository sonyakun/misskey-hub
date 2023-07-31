import{_ as a,o as n,c as e,e as s}from"./app.5a4d8cc2.js";const i={},d=s(`<h1 id="buat-instansi-misskey-dengan-docker-compose" tabindex="-1"><a class="header-anchor" href="#buat-instansi-misskey-dengan-docker-compose" aria-hidden="true">#</a> Buat instansi Misskey dengan Docker Compose</h1><p>Panduan ini akan menjelaskan tentang bagaimana cara memasang dan menyetel instansi Misskey dengan menggunakan Docker Compose.</p><div class="custom-container danger"><i class="fas fa-times"></i><p>Jangan pernah mengubah nama domain (hostname) instansi peladen ketika kamu sudah mulai menggunakannya!</p></div><div class="custom-container tip"><i class="fas fa-info"></i><p class="custom-container-title">Persyaratan</p><ul><li>docker dan dockercompose terpasang</li></ul></div><h2 id="dapatkan-repositorinya" tabindex="-1"><a class="header-anchor" href="#dapatkan-repositorinya" aria-hidden="true">#</a> Dapatkan repositorinya</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone -b master https://github.com/misskey-dev/misskey.git
<span class="token builtin class-name">cd</span> misskey
<span class="token function">git</span> checkout master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="atur" tabindex="-1"><a class="header-anchor" href="#atur" aria-hidden="true">#</a> Atur</h2><p>Salin berkas konfigurasi dengan menjalankan perintah berikut:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cp</span> .config/docker_example.yml .config/default.yml
<span class="token function">cp</span> .config/docker_example.env .config/docker.env
<span class="token function">cp</span> ./docker-compose.yml.example ./docker-compose.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Sunting <code>default.yml</code> dan <code>docker.env</code> sesuai dengan instruksi yang terdapat di dalam berkas.</p><p>Sunting <code>docker-compose.yml</code> bila perlu. (Contoh: Apabila kamu ingin mengganti port peladen).</p><h2 id="bangun-dan-inisialisasi" tabindex="-1"><a class="header-anchor" href="#bangun-dan-inisialisasi" aria-hidden="true">#</a> Bangun dan inisialisasi</h2><p>Perintah berikut akan membangun Misskey dan menginisialisasi basis data. Proses ini akan memakan waktu sesaat.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> compose build
<span class="token function">sudo</span> <span class="token function">docker</span> compose run --rm web <span class="token function">pnpm</span> run init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jalankan" tabindex="-1"><a class="header-anchor" href="#jalankan" aria-hidden="true">#</a> Jalankan</h2><p>Selamat! Kamu sudah dapat memulai peladen Misskey dengan perintah berikut.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> compose up -d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Semoga Beruntung &amp; Selamat Bersenang-senang\u2728</p><h2 id="bagaimana-memutakhirkan-peladen-misskey-kamu" tabindex="-1"><a class="header-anchor" href="#bagaimana-memutakhirkan-peladen-misskey-kamu" aria-hidden="true">#</a> Bagaimana memutakhirkan peladen Misskey kamu?</h2><div class="custom-container warning"><i class="fas fa-exclamation"></i><p>Ketika memutakhirkan, pastikan mengecek <a href="https://github.com/misskey-dev/misskey/blob/master/CHANGELOG.md" target="_blank" rel="noopener noreferrer">catatan rilisan</a> untuk mengetahui lebih awal akan perubahan ataupun tambahan pekerjaan yang nantinya dibutuhkan (biasanya tidak perlu.</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> stash
<span class="token function">git</span> checkout master
<span class="token function">git</span> pull
<span class="token function">git</span> submodule update --init
<span class="token function">git</span> stash pop
<span class="token function">sudo</span> <span class="token function">docker</span> compose build
<span class="token function">sudo</span> <span class="token function">docker</span> compose stop <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> <span class="token function">docker</span> compose up -d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Perintah tersebut akan memakan waktu sesaat bergantung dengan konten dari pemutakhiran dan ukuran basis data.</p><h2 id="bagaimana-cara-mengeksekusi-perintah-cli" tabindex="-1"><a class="header-anchor" href="#bagaimana-cara-mengeksekusi-perintah-cli" aria-hidden="true">#</a> Bagaimana cara mengeksekusi perintah CLI</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> compose run --rm web <span class="token function">node</span> packages/backend/built/tools/foo bar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,24),t=[d];function c(o,r){return n(),e("div",null,t)}var u=a(i,[["render",c],["__file","docker.html.vue"]]);export{u as default};