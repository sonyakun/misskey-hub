import{_ as s,o as n,c as a,e}from"./app.7096a2c0.js";const i={},t=e(`<h1 id="misskey-\u1109\u116E\u1103\u1169\u11BC-\u1109\u1165\u11AF\u110E\u1175-\u1100\u1161\u110B\u1175\u1103\u1173" tabindex="-1"><a class="header-anchor" href="#misskey-\u1109\u116E\u1103\u1169\u11BC-\u1109\u1165\u11AF\u110E\u1175-\u1100\u1161\u110B\u1175\u1103\u1173" aria-hidden="true">#</a> Misskey \uC218\uB3D9 \uC124\uCE58 \uAC00\uC774\uB4DC</h1><p>\uC774 \uAC00\uC774\uB4DC\uC5D0\uC11C\uB294 Misskey\uC758 \uC124\uCE58 \uBC0F \uC900\uBE44 \uBC29\uBC95\uC5D0 \uB300\uD574 \uC124\uBA85\uD569\uB2C8\uB2E4.</p><div class="custom-container danger"><i class="fas fa-times"></i><p>\uD55C \uBC88 \uC0AC\uC6A9\uC744 \uC2DC\uC791\uD55C \uB3C4\uBA54\uC778/\uD638\uC2A4\uD2B8\uBA85\uC73C\uB85C DB\uB97C \uC0C8\uB85C \uC0DD\uC131\uD558\uC9C0 \uB9C8\uC138\uC694!</p></div><div class="custom-container tip"><i class="fas fa-info"></i><p class="custom-container-title">\uC900\uBE44\uC0AC\uD56D</p><p>\uB2E4\uC74C\uC744 \uBBF8\uB9AC \uC124\uCE58\uD574\uC8FC\uC138\uC694:</p><ul><li><a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">Node.js</a> 20.4 \uC774\uC0C1</li><li><a href="https://www.postgresql.org" target="_blank" rel="noopener noreferrer">PostgreSQL</a> 15 \uC774\uC0C1</li><li><a href="https://redis.io" target="_blank" rel="noopener noreferrer">Redis</a></li><li><a href="https://www.ffmpeg.org" target="_blank" rel="noopener noreferrer">FFmpeg</a></li></ul><p>GNU/Linux \uD658\uACBD\uC774\uBA74 <code>build-essential</code> \uD328\uD0A4\uC9C0\uB97C \uC124\uCE58\uD574 \uB450\uBA74 \uC88B\uC2B5\uB2C8\uB2E4.</p><p>\uB610\uD55C corepack\uC774 \uD65C\uC131\uD654\uB418\uC5B4 \uC788\uC5B4\uC57C \uD569\uB2C8\uB2E4.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> corepack <span class="token builtin class-name">enable</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><h2 id="\u1109\u1161\u110B\u116D\u11BC\u110C\u1161-\u1109\u1162\u11BC\u1109\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1109\u1161\u110B\u116D\u11BC\u110C\u1161-\u1109\u1162\u11BC\u1109\u1165\u11BC" aria-hidden="true">#</a> \uC0AC\uC6A9\uC790 \uC0DD\uC131</h2><p>root\uB85C Misskey\uB97C \uC2E4\uD589\uD558\uB294 \uAC83\uC740 \uC88B\uC740 \uC0DD\uAC01\uC774 \uC544\uB2D9\uB2C8\uB2E4. \uBCC4\uB3C4\uC758 \uC0AC\uC6A9\uC790\uB97C \uB9CC\uB4E4\uC5B4 \uC124\uCE58\uD558\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>adduser --disabled-password --disabled-login misskey
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="misskey-\u1109\u1165\u11AF\u110E\u1175" tabindex="-1"><a class="header-anchor" href="#misskey-\u1109\u1165\u11AF\u110E\u1175" aria-hidden="true">#</a> Misskey \uC124\uCE58</h2><p>\uC704\uC5D0\uC11C \uC0DD\uC131\uD55C \uC0AC\uC6A9\uC790\uB85C \uC804\uD658\uD574 Misskey \uC124\uCE58\uB97C \uC2DC\uC791\uD569\uB2C8\uB2E4.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> -iu misskey
<span class="token function">git</span> clone --recursive https://github.com/misskey-dev/misskey.git
<span class="token builtin class-name">cd</span> misskey
<span class="token function">git</span> checkout master
<span class="token function">git</span> submodule update --init
<span class="token assign-left variable">NODE_ENV</span><span class="token operator">=</span>production <span class="token function">pnpm</span> <span class="token function">install</span> --frozen-lockfile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="misskey-\u1109\u1165\u11AF\u110C\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#misskey-\u1109\u1165\u11AF\u110C\u1165\u11BC" aria-hidden="true">#</a> Misskey \uC124\uC815</h2><p>\uC124\uC815 \uC608\uC2DC \uD30C\uC77C(<code>.config/example.yml</code>)\uC744 \uBCF5\uC0AC\uD574 <code>default.yml</code> \uD30C\uC77C\uC744 \uB9CC\uB4ED\uB2C8\uB2E4.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cp</span> .config/example.yml .config/default.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uD14D\uC2A4\uD2B8 \uD3B8\uC9D1\uAE30\uB97C \uC774\uC6A9\uD574 <code>default.yml</code> \uD30C\uC77C\uC744 \uC5F4\uC5B4, \uD30C\uC77C \uB0B4\uC758 \uC9C0\uC2DC\uC5D0 \uB530\uB77C \uC218\uC815\uD569\uB2C8\uB2E4.</p><h2 id="misskey-\u1107\u1175\u11AF\u1103\u1173-\u1106\u1175\u11BE-\u110E\u1169\u1100\u1175\u1112\u116A" tabindex="-1"><a class="header-anchor" href="#misskey-\u1107\u1175\u11AF\u1103\u1173-\u1106\u1175\u11BE-\u110E\u1169\u1100\u1175\u1112\u116A" aria-hidden="true">#</a> Misskey \uBE4C\uB4DC \uBC0F \uCD08\uAE30\uD654</h2><p>\uB2E4\uC74C \uBA85\uB839\uC744 \uC2E4\uD589\uD574 Misskey\uB97C \uBE4C\uB4DC(<code>pnpm run build</code>)\uD558\uACE0 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uB97C \uCD08\uAE30\uD654(<code>pnpm run init</code>)\uD569\uB2C8\uB2E4. \uBCF8 \uC791\uC5C5\uC740 \uC2DC\uAC04\uC774 \uC18C\uC694\uB418\uB294 \uC791\uC5C5\uC785\uB2C8\uB2E4.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">NODE_ENV</span><span class="token operator">=</span>production <span class="token function">pnpm</span> run build
<span class="token function">pnpm</span> run init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="misskey-\u1109\u1175\u11AF\u1112\u1162\u11BC" tabindex="-1"><a class="header-anchor" href="#misskey-\u1109\u1175\u11AF\u1112\u1162\u11BC" aria-hidden="true">#</a> Misskey \uC2E4\uD589</h2><p>Misskey\uC758 \uC2E4\uD589\uC744 \uC704\uD55C \uBAA8\uB4E0 \uC900\uBE44\uAC00 \uB05D\uB0AC\uC2B5\uB2C8\uB2E4. \uC774\uC81C \uB2E4\uC74C \uBA85\uB839\uC744 \uD1B5\uD574 Misskey\uB97C \uC2E4\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">NODE_ENV</span><span class="token operator">=</span>production <span class="token function">pnpm</span> run start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="details-systemd\u1105\u1173\u11AF-\u110B\u1175\u110B\u116D\u11BC\u1112\u1161\u11AB-\u1100\u116A\u11AB\u1105\u1175" tabindex="-1"><a class="header-anchor" href="#details-systemd\u1105\u1173\u11AF-\u110B\u1175\u110B\u116D\u11BC\u1112\u1161\u11AB-\u1100\u116A\u11AB\u1105\u1175" aria-hidden="true">#</a> details systemd\uB97C \uC774\uC6A9\uD55C \uAD00\uB9AC</h3><p>\uC6B0\uC120 systemd \uC11C\uBE44\uC2A4 \uD30C\uC77C\uC744 \uC0DD\uC131\uD569\uB2C8\uB2E4.</p><p><code>/etc/systemd/system/misskey.service</code> \uD30C\uC77C\uC744 \uC5D0\uB514\uD130\uB85C \uC5F4\uACE0 \uC544\uB798 \uCF54\uB4DC\uB97C \uC791\uC131\uD574 \uB123\uC2B5\uB2C8\uB2E4.</p><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">Unit</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">Description</span><span class="token punctuation">=</span><span class="token value attr-value">Misskey daemon</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">Service</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">Type</span><span class="token punctuation">=</span><span class="token value attr-value">simple</span>
<span class="token key attr-name">User</span><span class="token punctuation">=</span><span class="token value attr-value">misskey</span>
<span class="token key attr-name">ExecStart</span><span class="token punctuation">=</span><span class="token value attr-value">/usr/bin/npm start</span>
<span class="token key attr-name">WorkingDirectory</span><span class="token punctuation">=</span><span class="token value attr-value">/home/misskey/misskey</span>
<span class="token key attr-name">Environment</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;<span class="token inner-value">NODE_ENV=production</span>&quot;</span>
<span class="token key attr-name">TimeoutSec</span><span class="token punctuation">=</span><span class="token value attr-value">60</span>
<span class="token key attr-name">StandardOutput</span><span class="token punctuation">=</span><span class="token value attr-value">journal</span>
<span class="token key attr-name">StandardError</span><span class="token punctuation">=</span><span class="token value attr-value">journal</span>
<span class="token key attr-name">SysLogIdentifier</span><span class="token punctuation">=</span><span class="token value attr-value">misskey</span>
<span class="token key attr-name">Restart</span><span class="token punctuation">=</span><span class="token value attr-value">always</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">Install</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">WantedBy</span><span class="token punctuation">=</span><span class="token value attr-value">multi-user.target</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><i class="fas fa-exclamation"></i><p>CentOS\uC5D0\uC11C 1024 \uC774\uD558\uC758 \uD3EC\uD2B8\uB97C \uC774\uC6A9\uD574 Misskey\uB97C \uC2E4\uD589\uD558\uB294 \uACBD\uC6B0 <code>ExecStart=/usr/bin/sudo/usr/bin/npm start</code>\uB85C \uBCC0\uACBD\uD574\uC57C \uD569\uB2C8\uB2E4.</p></div><p>\uC774\uC81C systemd\uB97C \uB2E4\uC2DC \uC2DC\uC791\uD574 \uC11C\uBE44\uC2A4\uB97C \uD65C\uC131\uD654\uD569\uB2C8\uB2E4.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl daemon-reload
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> misskey
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC774\uB807\uAC8C \uD558\uBA74 Misskey \uC11C\uBE44\uC2A4\uB97C \uBD80\uD305\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl start misskey
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><i class="fas fa-info"></i><p>\uC774\uC81C <code>systemctl status misskey</code> \uBA85\uB839\uC5B4\uB85C Misskey\uC758 \uC11C\uBE44\uC2A4 \uC0C1\uD0DC\uB97C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p></div><h2 id="misskey-\u110B\u1165\u11B8\u1103\u1166\u110B\u1175\u1110\u1173-\u1107\u1161\u11BC\u1107\u1165\u11B8" tabindex="-1"><a class="header-anchor" href="#misskey-\u110B\u1165\u11B8\u1103\u1166\u110B\u1175\u1110\u1173-\u1107\u1161\u11BC\u1107\u1165\u11B8" aria-hidden="true">#</a> Misskey \uC5C5\uB370\uC774\uD2B8 \uBC29\uBC95</h2><div class="custom-container warning"><i class="fas fa-exclamation"></i><p>\uC5C5\uB370\uC774\uD2B8 \uC2DC \uBC18\uB4DC\uC2DC <a href="https://github.com/misskey-dev/misskey/blob/master/CHANGELOG.md" target="_blank" rel="noopener noreferrer">\uBCC0\uACBD\uC0AC\uD56D</a>\uB97C \uD655\uC778\uD558\uACE0 \uBCC0\uACBD\uC0AC\uD56D\uC774\uB098 \uD544\uC694\uD55C \uCD94\uAC00 \uC791\uC5C5\uC744 \uBBF8\uB9AC \uD655\uC778\uD574 \uC8FC\uC2ED\uC2DC\uC624.</p></div><p>master\uB97C \uB2E4\uC2DC \uD487\uD558\uACE0 \uC124\uCE58, \uBE4C\uB4DC, DB \uB9C8\uC774\uADF8\uB808\uC774\uC158\uC744 \uC2E4\uC2DC\uD569\uB2C8\uB2E4.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout master
<span class="token function">git</span> pull
<span class="token function">git</span> submodule update --init
<span class="token assign-left variable">NODE_ENV</span><span class="token operator">=</span>production <span class="token function">pnpm</span> <span class="token function">install</span> --frozen-lockfile
<span class="token assign-left variable">NODE_ENV</span><span class="token operator">=</span>production <span class="token function">pnpm</span> run build
<span class="token function">pnpm</span> run migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC5C5\uB370\uC774\uD2B8\uC758 \uB0B4\uC6A9 \uBC0F DB \uADDC\uBAA8\uC5D0 \uB530\uB77C \uC2DC\uAC04\uC774 \uC18C\uC694\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uC5C5\uB370\uC774\uD2B8\uAC00 \uC644\uB8CC\uB418\uB294 \uB300\uB85C Misskey\uB97C \uB2E4\uC2DC \uC2DC\uC791\uD569\uB2C8\uB2E4.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl restart misskey
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><i class="fas fa-info"></i><p>\uBE4C\uB4DC \uD639\uC740 \uC2E4\uD589 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0 \uC544\uB798 \uBA85\uB839\uC744 \uC2E4\uD589\uD574\uBCF4\uC138\uC694.</p><ul><li><code>pnpm run clean</code> \uB610\uB294 <code>pnpm run clean-all</code><ul><li>\uC774 \uBA85\uB839\uC744 \uC2E4\uD589\uD55C \uD6C4\uC5D0\uB294 \uBC18\uB4DC\uC2DC <code>pnpm install</code>\uC744 \uB2E4\uC2DC \uC2E4\uD589\uD574\uC8FC\uC138\uC694.</li></ul></li><li><code>pnpm rebuild</code></li></ul></div>`,38),l=[t];function c(p,o){return n(),a("div",null,l)}var r=s(i,[["render",c],["__file","manual.html.vue"]]);export{r as default};