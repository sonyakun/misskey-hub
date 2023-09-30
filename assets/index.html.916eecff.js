import{_ as o,o as r,c as p,a as e,b as s,w as i,d as a,e as t,r as l}from"./app.7096a2c0.js";const c={},d=e("h1",{id:"streaming-api",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#streaming-api","aria-hidden":"true"},"#"),a(" Streaming API")],-1),u={class:"custom-container tip"},v=e("i",{class:"fas fa-info"},null,-1),m=a("Prima di continuare, dovresti aver gi\xE0 letto "),g=a("Le API di Misskey"),k=a("."),h=t(`<p>La Streaming API mette a disposizione informazioni in real-time (es: nuovi post nella timeline, reazioni, followers ecc...) oltre ad altre attivit\xE0.</p><h2 id="conttettersi-al-flusso" tabindex="-1"><a class="header-anchor" href="#conttettersi-al-flusso" aria-hidden="true">#</a> Conttettersi al flusso.</h2><p>Per usare la Streaming API, occorre connettersi al server tramite <strong>websocket</strong>.</p><p>La URL di tipo websoket \xE8 simile a questa:</p><div class="language-text ext-text"><pre class="language-text"><code>wss://{host}/streaming?i={token}
</code></pre></div><ul><li><code>{host}</code> \xC8 il dominio dell&#39;istanza a cui connettersi</li><li><code>{token}</code> \xC8 il token di accesso ottenuto in precedenza</li></ul><div class="custom-container tip"><i class="fas fa-info"></i><p>Puoi anche connetterti senza il token di accesso, ma in questo caso otterrai informazioni limitate e svolgere attivit\xE0 limitate.</p></div><p>Dopo aver aperto la connessione al flusso, potrai iscriverti ai post come descritto di seguito, ma in questo momento ancora no. Se intendi ricevere i post dalla tua timeline devi entrare in un <strong>canale</strong> del flusso, come descritto di seguito.</p><p><strong>Tutti i dati dovrebbero essere codificati come JSON</strong></p><h2 id="canale" tabindex="-1"><a class="header-anchor" href="#canale" aria-hidden="true">#</a> Canale</h2><p>La Streaming API di Misskey ha il concetto dei canali. Con questo stratagemma si possono separare le informazioni da spedire e ricevere. Entrando in un canale del flusso potrai ricevere vari tipi di informazione e spedirne di altre.</p><div class="custom-container tip"><i class="fas fa-info"></i><p>Puoi entrare in pi\xF9 canali contemporaneamente con una unica connessione al flusso.</p></div>`,12),b=a("Di seguito descriviamo come usare i canali. Per sapere quali siano disponibili, consulta la "),y=a("Lista dei canali"),x=a("."),f=t(`<h3 id="entrare-in-un-canale" tabindex="-1"><a class="header-anchor" href="#entrare-in-un-canale" aria-hidden="true">#</a> Entrare in un canale</h3><p>Per entrare in un canale del flusso, spedisci i seguenti dati in formato JSON:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;connect&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">channel</span><span class="token operator">:</span> <span class="token string">&#39;xxxxxxxx&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;foobar&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token operator">...</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>channel</code> \xE8 il nome del canale in cui vuoi entrare. I tipi di canale verranno descritti dopo.</li><li><code>id</code> \xE8 un identificativo arbitrario pe interagire col canale. Necessario per indentificare da quale canale proviene il messaggio, perch\xE9 il flusso contiene pi\xF9 canali. Potrebbe essere un UUID oppure un numero casuale.</li><li><code>params</code> sono i parametri richiesti per entrare nel canale. Ogni canale necessita dei suoi paremtri specifici. Quando entri in un canale che non necessita di parametri, questo valore pu\xF2 essere ommesso (opzionale)</li></ul><div class="custom-container tip"><i class="fas fa-info"></i><p>L&#39; ID non \xE8 per canale ma <em>per ingresso al canale</em>, poich\xE9 potrebbe essere neccessario entrarci pi\xF9 volte ma con parametri diversi.</p></div><h3 id="ricevere-messaggi-dai-canali" tabindex="-1"><a class="header-anchor" href="#ricevere-messaggi-dai-canali" aria-hidden="true">#</a> Ricevere messaggi dai canali</h3><p>Mettiamo che un <em>canale timeline</em> spedisca un messaggio quando arriva una nota. Ricevendo il messaggio, sarai al corrente, in tempo reale, della presenza di una nuova nota nella tua timeline.</p><p>Quando un canale spedisci un messaggio, ottieni i seguenti dati JSON:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;channel&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;foobar&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;something&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token literal-property property">some</span><span class="token operator">:</span> <span class="token string">&#39;thing&#39;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>id</code> \xE8 l&#39;identificativo che hai impostato entrando nel canale, come indicato in precedenza. Questo ti permette di capire da quale ingresso al canale arriva il messaggio.</li><li><code>type</code> il tipo di messaggio. Dipende dal canale che lo ha spedito.</li><li><code>body</code> contenitore del messaggio. Il contenuto dipende dal canale che lo ha spedito.</li></ul><h3 id="spedire-un-messaggio-al-canale" tabindex="-1"><a class="header-anchor" href="#spedire-un-messaggio-al-canale" aria-hidden="true">#</a> Spedire un messaggio al canale</h3><p>Ad alcuni canali \xE8 possibile spedire messaggi e svolgere altre operazioni oltre alla ricezione di messaggi.</p><p>Per spedire un messaggio nel canale, spedisci il seguente JSON al flusso:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;channel&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;foobar&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;something&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token literal-property property">some</span><span class="token operator">:</span> <span class="token string">&#39;thing&#39;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>id</code> \xE8 l&#39;identificativo che hai impostato entrando nel canale, come indicato in precedenza. Questo ti permette di capire da quale ingresso al canale arriva il messaggio.</li><li><code>type</code> tipo di messaggio. Ogni canale accetta diversi tipi di messaggi.</li><li><code>body</code> Contenitore del messaggio. Ogni canale accetta diversi contenuti.</li></ul><h3 id="uscire-da-un-canale" tabindex="-1"><a class="header-anchor" href="#uscire-da-un-canale" aria-hidden="true">#</a> Uscire da un canale</h3><p>Per uscire da un canale, spedisci il seguente JSON al flusso:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;disconnect&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;foobar&#39;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>id</code> \xE8 l&#39;identificativo che hai impostato entrando nel canale, come indicato in precedenza. Questo ti permette di capire da quale ingresso al canale arriva il messaggio.</li></ul><h2 id="capturing-notes" tabindex="-1"><a class="header-anchor" href="#capturing-notes" aria-hidden="true">#</a> Capturing Notes</h2><p>Misskey mette a disposizione uno stratagemma chiamato <strong>cattura nota</strong> che ti mette in condizione di ricevere un flusso di eventi per una nota specifica.</p><p>Ad esempio, mettiamo che vorresti mostrare le reazioni ad una nota in tempo reale. Di solito, \xE8 il client che inizia le richieste dati, non pu\xF2 sapere dei cambiamenti lato server, prima di averli richiesti.</p><p>Per aggirare questo ostacolo Misskey mette a disposizione lo stratagemma <strong>cattura nota</strong>, con cui puoi ottenere anche tutti gli eventi correlati e quindi mostrare le reazioni in tempo reale.</p>`,23),_=a("Nel prossimo capitolo leggerai come attuare lo stratagemma. Per sapere quali altri eventi si possono catturare, leggi la "),z=a("Lista di eventi catturabili"),N=a("."),j=t(`<h3 id="catturare-una-nota" tabindex="-1"><a class="header-anchor" href="#catturare-una-nota" aria-hidden="true">#</a> Catturare una Nota</h3><p>Per catturare una nota e i suoi eventi, spedisci il seguente JSON al flusso:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;subNote&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;xxxxxxxxxxxxxxxx&#39;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>id</code> \xE8 l&#39;identificativo della Nota che vuoi catturare</li></ul><p>Inviando questo messaggio, chiedi a Misskey di catturare la Nota, gli eventi correlati verranno quindi indirizzati al tuo flusso.</p><p>Mettiamo il caso che una nota ottiene una reazione, vedrai un messaggio simile a questo:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;noteUpdated&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;xxxxxxxxxxxxxxxx&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;reacted&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token literal-property property">reaction</span><span class="token operator">:</span> <span class="token string">&#39;like&#39;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">userId</span><span class="token operator">:</span> <span class="token string">&#39;yyyyyyyyyyyyyyyy&#39;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>body.id</code> sar\xE0 l&#39;identificativo della nota che ha innescato l&#39;evento</li><li><code>body.type</code> sar\xE0 il tipo di evento che si \xE8 innescato</li><li><code>body.body</code> sar\xE0 il contenitore dei dettagli dell&#39;evento innescato</li></ul><h3 id="interrompere-la-cattura-della-nota" tabindex="-1"><a class="header-anchor" href="#interrompere-la-cattura-della-nota" aria-hidden="true">#</a> Interrompere la cattura della Nota</h3><p>Se vuoi interrompere la ricezione di eventi di una Nota, ad esempio quando scompare dallo schermo, puoi annullare la richiesta di cattura.</p><p>Spedisci il seguente JSON al flusso:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;unsubNote&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;xxxxxxxxxxxxxxxx&#39;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>id</code> \xE8 l&#39;identificativo della Nota di riferimento</li></ul><p>Una volta spedito questo messaggio, non riceverai pi\xF9 alcun evento relativo a quella Nota.</p>`,14);function q(P,S){const n=l("RouterLink");return r(),p("div",null,[d,e("div",u,[v,e("p",null,[m,s(n,{to:"/it/docs/api/"},{default:i(()=>[g]),_:1}),k])]),h,e("p",null,[b,s(n,{to:"/it/docs/api/streaming/channel/"},{default:i(()=>[y]),_:1}),x]),f,e("p",null,[_,s(n,{to:"/it/docs/api/streaming/note-capture-events.html"},{default:i(()=>[z]),_:1}),N]),j])}var L=o(c,[["render",q],["__file","index.html.vue"]]);export{L as default};