import{_ as e,o as t,c as o,a,b as p,w as i,d as n,e as c,r as l}from"./app.7096a2c0.js";const r={},u=a("h1",{id:"cara-mendapatkan-token-akses-menggunakan-metode-pembuatan-aplikasi",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#cara-mendapatkan-token-akses-menggunakan-metode-pembuatan-aplikasi","aria-hidden":"true"},"#"),n(" Cara mendapatkan token akses menggunakan metode pembuatan aplikasi")],-1),d=a("p",null,[n("Pada bagian ini menjelaskan tentang cara mendapatkan token akses sebelum adanya MiAuth (12.27.0)."),a("br"),n(" Metode lama ini harus digunakan pada peladen Misskey dengan versi di bawah.")],-1),k=a("h2",{id:"_1-membuat-aplikasi",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_1-membuat-aplikasi","aria-hidden":"true"},"#"),n(" 1. Membuat Aplikasi")],-1),m=n("Kirim informasi ke "),v=n("endpoint "),h=a("code",null,"app/create",-1),b=n("untuk mendapatkan "),g=a("code",null,"appSecret",-1),_=n("."),f=c(`<div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token comment">// Nama Aplikasi</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// Deskripsi Aplikasi</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my test application&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// Ijin Aplikasi</span>
    <span class="token property">&quot;permission&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;write:notes&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Pada saat ini, jika kamu memasukkan URL favoritmu ke dalam <code>callbackUrl</code>, perintah tersebut akan memanggil kembali ke fungsi tersebut ketika operasi ijin berikutnya telah selesai, termasuk <code>token</code> pada string kueri.</p><h2 id="_2-otentikasikan-pengguna" tabindex="-1"><a class="header-anchor" href="#_2-otentikasikan-pengguna" aria-hidden="true">#</a> 2. Otentikasikan Pengguna</h2><p>Kirim POST <code>appSecret</code> ke <a href="endpoints/auth/session/generate">endpoint <code>auth/session/generate</code></a>.</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;appSecret&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fAb12cD34Ef56gH78Ij16kL32Mn64oPf&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Akan mengeluarkan sebuah <code>token</code> (secara tentatif disini adalah <code>798b9f6e-248d-43a7-a919-fabc664027f1</code>) dan <code>url</code>. Maka akses url ini terlebih dahulu di peramban lalu pilih &quot;Bolehkan akses&quot;.</p><h2 id="_3-meminta-accesstoken" tabindex="-1"><a class="header-anchor" href="#_3-meminta-accesstoken" aria-hidden="true">#</a> 3. Meminta accessToken</h2><p>Setelah mengonfirmasi tahap 2 selesai, lakukan POST dengan data <code>appSecret</code> dan <code>token</code> dari sebelumnya ke <a href="endpoints/auth/session/userkey">endpoint <code>auth/session/userkey</code></a>.</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;appSecret&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fAb12cD34Ef56gH78Ij16kL32Mn64oPf&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;798b9f6e-248d-43a7-a919-fabc664027f1&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>String yang kamu dapatkan disini disebut <code>accessToken</code>. <code>accessToken</code> hanya bisa didapatkan sekali.</p><h2 id="_4-menghasilkan-i" tabindex="-1"><a class="header-anchor" href="#_4-menghasilkan-i" aria-hidden="true">#</a> 4. Menghasilkan i</h2><p><code>i</code> dapat dihasilkan dalam Node.js dengan kode berikut yang merupakan angka heksadesimal 64-digit. Tidak seperti yang kamu dapatkan pada layar konfigurasi.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> crypto <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;crypto&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> i <span class="token operator">=</span> crypto<span class="token punctuation">.</span><span class="token function">createHash</span><span class="token punctuation">(</span><span class="token string">&quot;sha256&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>accessToken <span class="token operator">+</span> appSecret<span class="token punctuation">,</span> <span class="token string">&quot;utf8&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">digest</span><span class="token punctuation">(</span><span class="token string">&quot;hex&quot;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-lakukan-percobaan-tes" tabindex="-1"><a class="header-anchor" href="#_5-lakukan-percobaan-tes" aria-hidden="true">#</a> 5. Lakukan percobaan tes</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&quot;https://misskey.io/api/notes/create&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">i</span><span class="token operator">:</span> <span class="token string">&quot;/* Masukkan i disini */&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;Hello Misskey API World with My Application!&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;Content-Type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;application/json&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">credentials</span><span class="token operator">:</span> <span class="token string">&#39;omit&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function y(q,j){const s=l("RouterLink");return t(),o("div",null,[u,d,k,a("p",null,[m,p(s,{to:"/id/docs/api/endpoints/app/create.html"},{default:i(()=>[v,h]),_:1}),b,g,_]),f])}var S=e(r,[["render",y],["__file","app.html.vue"]]);export{S as default};