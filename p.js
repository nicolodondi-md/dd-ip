window.__IP_CSS="/* Aspetto del CRM dentro l'app Info Prezzi. Il sito non viene modificato. */\n\n:root {\n  --ip-rosso: var(--color-accent, #cc1619);\n  --ip-nero: #111318;\n  --ip-bordo: #e4e6eb;\n  --ip-grigio: #697586;\n  --ip-fondo: #f2f3f5;\n  --ip-carta: #fff;\n  --ip-testo: #00010f;\n  --ip-scelta: #fff;\n  --ip-eef0f3: #eef0f3;\n  --ip-d9dce2: #d9dce2;\n  --ip-f5f6f8: #f5f6f8;\n  --ip-e6e9ee: #e6e9ee;\n  --ip-f1f2f5: #f1f2f5;\n  --ip-e6e8ec: #e6e8ec;\n  --ip-e3e6eb: #e3e6eb;\n  --ip-dfe2e8: #dfe2e8;\n  --ip-d3d7de: #d3d7de;\n  --ip-d1d5db: #d1d5db;\n  --ip-b3b9c4: #b3b9c4;\n  --ip-4b5565: #4b5565;\n}\n\n:root.ip-scuro {\n  color-scheme: dark;\n  --ip-nero: #2e3138;\n  --ip-bordo: #2c2e33;\n  --ip-grigio: #9aa1ad;\n  --ip-fondo: #000;\n  --ip-carta: #1c1c1e;\n  --ip-testo: #f2f3f5;\n  --ip-scelta: #636366;\n  --ip-eef0f3: #2a2c31;\n  --ip-d9dce2: #3a3d44;\n  --ip-f5f6f8: #232529;\n  --ip-e6e9ee: #2f3238;\n  --ip-f1f2f5: #232529;\n  --ip-e6e8ec: #2f3238;\n  --ip-e3e6eb: #2f3238;\n  --ip-dfe2e8: #34373d;\n  --ip-d3d7de: #3a3d44;\n  --ip-d1d5db: #4a4d55;\n  --ip-b3b9c4: #6b7280;\n  --ip-4b5565: #c2c7d0;\n}\n/* ---------- Tema scuro: il testo ereditato dal sito diventa chiaro ---------- */\n.ip-scuro body.ip-app, .ip-scuro #ip-root, .ip-scuro #ip-imp { color: var(--ip-testo); }\n.ip-scuro #ip-root input, .ip-scuro #ip-root textarea, .ip-scuro #ip-root select { color: var(--ip-testo); }\n\n/* ---------- Niente del sito che ricordi un browser ---------- */\n.ip-app .console-mobile-bar,\n.ip-app #console-aside,\n.ip-app .console-aside-scrim,\n.ip-app .console-page-header,\n.ip-app #console-content > .h-12 { display: none !important; }\n.ip-nascosto { display: none !important; }\n\nbody.ip-app { background: var(--ip-fondo) !important; -webkit-tap-highlight-color: transparent; }\n.ip-app #console-content { background: transparent !important; border: 0 !important; box-shadow: none !important; margin: 0 !important; }\n.ip-app .console-container { max-width: 760px; }\n.ip-app .console-page-body { padding-top: 72px !important; }\n.ip-app [class*=\"text-[13px]/none\"] { line-height: 1.35 !important; }\n\n/* ---------- Barra dell'app ---------- */\n#ip-bar {\n  position: fixed; top: 0; left: 0; right: 0; height: 56px; z-index: 20;\n  display: flex; align-items: center; gap: 2px; padding: 0 6px 0 18px;\n  background: var(--ip-nero); color: #fff;\n}\n#ip-bar.ip-con-indietro { padding-left: 6px; }\n#ip-bar a, #ip-bar button {\n  flex: none; width: 46px; height: 46px; padding: 0; border: 0; border-radius: 23px;\n  display: inline-flex; align-items: center; justify-content: center;\n  background: transparent; color: #fff; cursor: pointer;\n}\n#ip-bar a:active, #ip-bar button:active { background: rgba(255, 255, 255, .14); }\n#ip-bar svg { width: 24px; height: 24px; }\n#ip-bar .ip-bar-titolo {\n  flex: 1 1 auto; min-width: 0; font-size: 19px; font-weight: 600; letter-spacing: -.2px;\n  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;\n}\n\n/* Pagina di accesso: solo l'ingranaggio in alto a destra */\n#ip-impostazioni {\n  position: fixed; top: 6px; right: 8px; z-index: 11;\n  width: 44px; height: 44px; padding: 0; display: inline-flex; align-items: center; justify-content: center;\n  border: 0; border-radius: 22px; background: transparent; color: #697586; cursor: pointer;\n}\n#ip-impostazioni svg { width: 23px; height: 23px; }\n\n/* Lettura da fotocamera spenta nelle impostazioni */\n.ip-senza-camera .ip-scan-box,\n.ip-senza-camera button.camera { display: none !important; }\n\n/* ---------- Schede bianche ---------- */\n.ip-card {\n  background: var(--ip-carta); border: 1px solid var(--ip-bordo); border-radius: 16px; padding: 16px;\n  margin: 0 !important;\n}\n.ip-card > :first-child { margin-top: 0 !important; }\n.ip-card > :last-child { margin-bottom: 0 !important; }\n.ip-card .ip-card-titolo,\n.ip-card h2 {\n  margin: 0 0 12px !important; font-size: 13px !important; font-weight: 600 !important;\n  text-transform: uppercase; letter-spacing: .05em; color: var(--ip-grigio) !important; white-space: nowrap;\n}\n.ip-card .ip-card-testa { margin: 0 0 12px !important; min-height: 0; }\n.ip-card .ip-card-testa h2, .ip-card .ip-card-testa .ip-card-titolo { margin: 0 !important; }\n\n/* ---------- Elenco: scansione e ricerca ---------- */\n.ip-lista .ip-titolo { display: none !important; }\n.ip-scan-box { order: -2; display: block !important; margin: 0 !important; }\n.ip-scan-box button.camera {\n  width: 100%; height: 64px !important; justify-content: center; gap: 12px !important;\n  font-size: 18px !important; font-weight: 600 !important; color: #fff !important;\n  background: var(--ip-rosso) !important; border-color: var(--ip-rosso) !important;\n  border-radius: 16px !important; box-shadow: 0 6px 16px rgba(204, 22, 25, .22);\n}\n.ip-scan-box button.camera svg { width: 26px !important; height: 26px !important; }\n\n.ip-lista form[name=\"form\"] { order: -1; }\n.ip-lista form[name=\"form\"] input,\n.ip-modulo-codice .ip-campo-codice {\n  height: 54px !important; font-size: 17px !important; font-weight: 500 !important;\n  border-radius: 14px !important; padding: 0 16px !important;\n  background: var(--ip-carta) !important; border: 1px solid var(--ip-bordo) !important; color: var(--ip-testo);\n}\n.ip-lista form[name=\"form\"] button[type=\"submit\"],\n.ip-modulo-codice .ip-cerca {\n  height: 54px !important; font-size: 16px !important; font-weight: 600 !important;\n  padding: 0 20px !important; border-radius: 14px !important; border: 0;\n  color: #fff; background: var(--ip-nero) !important; cursor: pointer;\n}\n.ip-lista form[name=\"form\"] input:focus,\n.ip-modulo-codice .ip-campo-codice:focus {\n  outline: none; border-color: var(--ip-nero) !important; box-shadow: 0 0 0 3px rgba(17, 19, 24, .12) !important;\n}\n\n.ip-lista .ip-etichetta { margin: 18px 4px 2px !important; }\n.ip-elenco {\n  background: var(--ip-carta); border: 1px solid var(--ip-bordo); border-radius: 16px; padding: 2px 14px;\n}\n.ip-elenco a[href^=\"/product/info/\"] { padding-top: 12px !important; padding-bottom: 12px !important; min-height: 76px; }\n.ip-elenco a[href^=\"/product/info/\"] .size-12 { width: 52px !important; height: 52px !important; }\n.ip-elenco a[href^=\"/product/info/\"] .truncate {\n  white-space: normal !important; display: -webkit-box !important; -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2; overflow: hidden; font-size: 15px !important; line-height: 1.3 !important;\n}\n.ip-elenco a[href^=\"/product/info/\"] .font-mono { margin-top: 5px; }\n\n/* ---------- Scheda prodotto ---------- */\n.ip-scheda .console-page-body { padding-bottom: 104px; }\n.ip-scheda .console-page-body .text-sm { font-size: 15px !important; }\n\n.ip-modulo-codice { display: flex !important; gap: 8px; align-items: center; margin: 0; order: -5; }\n.ip-modulo-codice .ip-campo-codice { flex: 1 1 auto; min-width: 0; font-family: inherit; -webkit-appearance: none; appearance: none; }\n.ip-modulo-codice .ip-cerca { flex: none; font-family: inherit; }\n\n.ip-riepilogo-box { order: -4; }\n.ip-riepilogo {\n  display: flex !important; flex-wrap: wrap; align-items: center; gap: 14px !important;\n  background: var(--ip-carta); border: 1px solid var(--ip-bordo); border-radius: 16px; padding: 14px;\n}\n.ip-riepilogo > img {\n  flex: none; width: 84px !important; height: 84px; object-fit: contain; border-radius: 10px; align-self: center !important;\n}\n.ip-riepilogo > div { display: contents; }\n.ip-scheda .console-page-body .ip-riepilogo .ip-nome {\n  flex: 1 1 0; min-width: 0; margin: 0 !important;\n  font-size: 17px !important; font-weight: 600 !important; line-height: 1.25 !important; color: var(--ip-testo);\n}\n.ip-riepilogo .grid {\n  flex: 1 1 100%; margin: 0 !important; display: grid !important;\n  grid-template-columns: 1.5fr 1fr !important; gap: 10px !important;\n}\n.ip-riepilogo .grid > div { background: var(--ip-fondo); border-radius: 12px; padding: 10px 14px 12px; min-width: 0; }\n.ip-scheda .console-page-body .ip-riepilogo .grid p:first-child {\n  font-size: 12px !important; text-transform: uppercase; letter-spacing: .05em; color: var(--ip-grigio);\n}\n.ip-scheda .console-page-body .ip-riepilogo .ip-valore {\n  margin-top: 2px !important; font-size: 30px !important; font-weight: 700 !important; line-height: 1.1 !important;\n  white-space: nowrap; letter-spacing: -.5px;\n}\n\n.ip-card-prezzo { order: -3; }\n.ip-card-giacenze { order: -2; }\n/* Prezzo e quantit\u00e0 si modificano dalla barra in basso */\n.ip-card-prezzo a[href$=\"/price\"],\n.ip-card-giacenze .desktop-actions-toolbar,\n.ip-card-giacenze .ip-menu-puntini { display: none !important; }\n.ip-card .ip-menu-puntini { display: none !important; }\n.ip-card .ip-azioni { display: flex !important; }\n.ip-card.ip-card-giacenze .ip-azioni { display: none !important; }\n.ip-card .ip-azioni a {\n  height: 36px !important; padding: 0 12px !important; border-radius: 10px !important;\n  background: var(--ip-carta) !important; color: var(--ip-testo) !important; border-color: var(--ip-d9dce2) !important;\n}\n.ip-card-prezzo > p:nth-of-type(2) { font-size: 30px !important; font-weight: 700 !important; letter-spacing: -.5px; }\n.ip-scheda .console-card { margin: 0 !important; border-radius: 16px !important; height: auto !important; }\n\n.ip-barra {\n  position: fixed; left: 0; right: 0; bottom: 0; z-index: 12;\n  display: flex; gap: 8px; padding: 10px 12px calc(10px + env(safe-area-inset-bottom));\n  background: var(--ip-carta); border-top: 1px solid var(--ip-bordo); box-shadow: 0 -6px 18px rgba(0, 0, 0, .06);\n}\n.ip-barra > * {\n  flex: 1 1 0; min-width: 0; height: 58px; border-radius: 14px; border: 1px solid var(--ip-d9dce2); background: var(--ip-carta);\n  display: flex; flex-direction: column; align-items: center; justify-content: center;\n  font-family: inherit; color: var(--ip-testo); text-decoration: none; cursor: pointer; line-height: 1.15;\n}\n/* Modifica prezzo e quantit\u00e0: tasti scuri, la scansione resta l'unico tasto rosso */\n.ip-barra > a { background: var(--ip-nero); border-color: var(--ip-nero); color: #fff; }\n.ip-barra > a:active { background: #2a2e37; }\n.ip-barra small { font-size: 11px; font-weight: 500; color: #9ba1ac; }\n.ip-barra b { font-size: 16px; font-weight: 600; }\n.ip-barra .ip-barra-scan {\n  flex: 1.5 1 0; flex-direction: row; gap: 8px; color: #fff;\n  background: var(--ip-rosso); border-color: var(--ip-rosso);\n}\n.ip-barra .ip-barra-scan b { font-size: 17px; }\n.ip-barra .ip-barra-scan svg { width: 24px; height: 24px; flex: none; }\n.ip-senza-barra .console-page-body { padding-bottom: 32px !important; }\n\n/* ---------- Modifica prezzo e quantit\u00e0 ---------- */\n.ip-modifica .console-page-body { padding-bottom: 112px; }\n.ip-modifica form input[type=\"text\"],\n.ip-modifica form input[type=\"number\"] {\n  height: 62px !important; font-size: 26px !important; font-weight: 600 !important;\n  border-radius: 14px !important; padding-left: 16px !important; background: var(--ip-carta) !important;\n}\n.ip-modifica form label { font-size: 15px !important; margin-bottom: 8px !important; }\n.ip-modifica #price-mode,\n.ip-modifica #quantity-mode { margin-top: 16px; background: var(--ip-e6e8ec) !important; border-radius: 12px !important; }\n.ip-modifica #price-mode button,\n.ip-modifica #quantity-mode button { min-height: 46px; font-size: 15px !important; border-radius: 9px !important; }\n.ip-modifica [data-step] { height: 62px !important; min-width: 62px; font-size: 18px !important; border-radius: 14px !important; }\n.ip-modifica [data-percent] { height: 52px !important; font-size: 17px !important; border-radius: 12px !important; }\n.ip-modifica #warehouse-strip { scrollbar-width: none; }\n.ip-modifica #warehouse-strip::-webkit-scrollbar { display: none; }\n.ip-modifica #warehouse-strip button { min-height: 66px; }\n.ip-modifica .ip-prodotto { background: var(--ip-carta) !important; border: 1px solid var(--ip-bordo); border-radius: 14px !important; padding: 10px !important; }\n.ip-modifica .ip-prodotto .truncate { font-size: 15px !important; }\n.ip-modifica #price-preview,\n.ip-modifica #quantity-preview { padding: 16px !important; background: var(--ip-carta) !important; border: 1px solid var(--ip-bordo); border-radius: 14px !important; }\n.ip-modifica #price-preview span,\n.ip-modifica #quantity-preview span { font-size: 16px !important; }\n.ip-modifica #price-preview-value,\n.ip-modifica #quantity-preview-value { font-size: 20px !important; font-weight: 700 !important; }\n\n.ip-salva {\n  position: fixed; left: 0; right: 0; bottom: 0; z-index: 12;\n  padding: 10px 12px calc(10px + env(safe-area-inset-bottom)) !important;\n  background: var(--ip-carta); border-top: 1px solid var(--ip-bordo); box-shadow: 0 -6px 18px rgba(0, 0, 0, .06);\n}\n.ip-salva button[type=\"reset\"] { display: none !important; }\n.ip-salva button[type=\"submit\"] {\n  width: 100% !important; height: 58px !important; font-size: 18px !important; font-weight: 600 !important;\n  border-radius: 14px !important;\n}\n\n/* Con la fotocamera aperta le barre dell'app spariscono */\n.ip-scanner .ip-barra,\n.ip-scanner .ip-salva,\n.ip-scanner #ip-bar { display: none !important; }\n\n/* ---------- Schermata Impostazioni ---------- */\nbody.ip-imp-aperta { overflow: hidden !important; }\n#ip-imp {\n  position: fixed; inset: 0; z-index: 2000; display: flex; flex-direction: column;\n  background: var(--ip-fondo); color: var(--ip-testo); font-family: inherit;\n  animation: ip-entra .18s ease-out;\n}\n@keyframes ip-entra { from { transform: translateX(24px); opacity: 0; } to { transform: none; opacity: 1; } }\n#ip-imp .ip-imp-testa {\n  flex: none; height: 56px; display: flex; align-items: center; gap: 2px; padding: 0 6px;\n  background: var(--ip-nero); color: #fff;\n}\n#ip-imp .ip-imp-testa button {\n  flex: none; width: 46px; height: 46px; padding: 0; border: 0; border-radius: 23px; background: transparent; color: #fff;\n  display: inline-flex; align-items: center; justify-content: center; cursor: pointer;\n}\n#ip-imp .ip-imp-testa svg { width: 24px; height: 24px; }\n#ip-imp .ip-bar-titolo { flex: 1 1 auto; font-size: 19px; font-weight: 600; letter-spacing: -.2px; }\n#ip-imp .ip-imp-corpo {\n  flex: 1 1 auto; overflow-y: auto; -webkit-overflow-scrolling: touch;\n  width: 100%; max-width: 760px; margin: 0 auto; padding: 6px 16px calc(28px + env(safe-area-inset-bottom));\n}\n#ip-imp .ip-imp-etichetta {\n  margin: 20px 6px 8px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: .06em; color: var(--ip-grigio);\n}\n#ip-imp .ip-imp-gruppo { background: var(--ip-carta); border: 1px solid var(--ip-bordo); border-radius: 16px; overflow: hidden; }\n#ip-imp .ip-imp-riga {\n  width: 100%; min-height: 60px; display: flex; align-items: center; gap: 14px; padding: 12px 16px;\n  border: 0; border-top: 1px solid var(--ip-eef0f3); background: var(--ip-carta); text-align: left; font-family: inherit; color: inherit; cursor: pointer;\n}\n#ip-imp .ip-imp-gruppo > .ip-imp-riga:first-child { border-top: 0; }\n#ip-imp button.ip-imp-riga:active { background: var(--ip-f5f6f8); }\n#ip-imp div.ip-imp-riga { cursor: default; }\n#ip-imp .ip-imp-testi { flex: 1 1 auto; min-width: 0; }\n#ip-imp .ip-imp-titolo { font-size: 16px; font-weight: 500; line-height: 1.3; }\n#ip-imp .ip-imp-sotto { margin-top: 3px; font-size: 13px; font-weight: 400; line-height: 1.35; color: var(--ip-grigio); }\n#ip-imp .ip-imp-valore { flex: none; max-width: 55%; font-size: 15px; color: var(--ip-grigio); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n#ip-imp .ip-imp-freccia { flex: none; display: inline-flex; color: #a3a9b3; }\n#ip-imp .ip-imp-freccia svg { width: 20px; height: 20px; }\n#ip-imp .ip-imp-rossa .ip-imp-titolo { color: var(--ip-rosso); font-weight: 600; }\n#ip-imp .ip-imp-leva {\n  flex: none; position: relative; width: 52px; height: 32px; border-radius: 16px; background: var(--ip-d3d7de); transition: background .15s;\n}\n#ip-imp .ip-imp-leva::after {\n  content: ''; position: absolute; top: 3px; left: 3px; width: 26px; height: 26px; border-radius: 13px; background: var(--ip-carta);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, .25); transition: transform .15s;\n}\n#ip-imp .ip-imp-leva.ip-attiva { background: var(--ip-rosso); }\n#ip-imp .ip-imp-leva.ip-attiva::after { transform: translateX(20px); }\n\n#ip-imp .ip-imp-foglio {\n  position: absolute; inset: 0; display: none; align-items: flex-end; justify-content: center;\n  background: rgba(17, 19, 24, .5); padding: 12px;\n}\n#ip-imp .ip-imp-foglio.ip-aperto { display: flex; }\n#ip-imp .ip-imp-carta {\n  width: 100%; max-width: 480px; background: var(--ip-carta); border-radius: 22px; padding: 22px 18px calc(16px + env(safe-area-inset-bottom));\n  animation: ip-sale .18s ease-out;\n}\n@keyframes ip-sale { from { transform: translateY(30px); opacity: 0; } to { transform: none; opacity: 1; } }\n#ip-imp .ip-imp-carta-titolo { font-size: 20px; font-weight: 700; text-align: center; }\n#ip-imp .ip-imp-carta-testo { margin: 8px 6px 20px; font-size: 15px; line-height: 1.4; text-align: center; color: var(--ip-grigio); }\n#ip-imp .ip-imp-conferma, #ip-imp .ip-imp-annulla {\n  width: 100%; height: 56px; border-radius: 14px; border: 0; font-family: inherit; font-size: 17px; font-weight: 600; cursor: pointer;\n}\n#ip-imp .ip-imp-conferma { background: var(--ip-rosso); color: #fff; }\n#ip-imp .ip-imp-annulla { margin-top: 8px; background: var(--ip-fondo); color: var(--ip-testo); }\n\n/* ---------- Avvisi del CRM (articolo non trovato, salvataggi) ---------- */\n/* Sul sito sono una striscia scura in alto: nell'app diventano un riquadro al centro dello schermo. */\n.ip-app #toast-container:has([role=\"alert\"]) {\n  inset: 0 !important; width: auto !important; max-width: none !important;\n  align-items: center; justify-content: center; padding: 24px; background: rgba(17, 19, 24, .5);\n}\n.ip-app #toast-container [role=\"alert\"] {\n  width: 100%; max-width: 340px; flex-direction: column; align-items: center !important; gap: 0 !important;\n  padding: 28px 22px 18px !important; border-radius: 24px !important; background: var(--ip-carta) !important;\n  box-shadow: 0 20px 50px rgba(0, 0, 0, .3) !important; text-align: center;\n}\n.ip-app #toast-container [role=\"alert\"] > span:first-child {\n  width: 64px !important; height: 64px !important; margin: 0 0 16px !important;\n}\n.ip-app #toast-container [role=\"alert\"] > span:first-child svg { width: 34px !important; height: 34px !important; stroke-width: 2.2px !important; }\n.ip-app #toast-container [role=\"alert\"] > div { flex: none !important; width: 100%; }\n.ip-app #toast-container [role=\"alert\"] > div > div:first-child { font-size: 21px !important; font-weight: 700 !important; color: var(--ip-testo) !important; }\n.ip-app #toast-container [role=\"alert\"] > div > div + div { margin-top: 8px !important; font-size: 16px !important; font-weight: 400 !important; line-height: 1.4 !important; color: var(--ip-grigio) !important; }\n.ip-app #toast-container [role=\"alert\"] > button[data-dismiss=\"toast\"] {\n  width: 100% !important; height: 54px !important; margin: 22px 0 0 !important; border-radius: 14px !important;\n  background: var(--ip-nero) !important; color: #fff !important;\n}\n.ip-app #toast-container [role=\"alert\"] > button[data-dismiss=\"toast\"] svg { display: none !important; }\n.ip-app #toast-container [role=\"alert\"] > button[data-dismiss=\"toast\"]::after { content: 'OK'; font-size: 17px; font-weight: 600; }\n\n/* ---------- Costo nascosto ---------- */\n.ip-costo { display: flex !important; align-items: center; gap: 6px; min-height: 32px; }\n.ip-costo .ip-costo-valore { letter-spacing: .5px; }\n.ip-costo .ip-costo-occhio {\n  flex: none; width: 36px; height: 32px; padding: 0; border: 0; border-radius: 10px; background: var(--ip-fondo);\n  display: inline-flex; align-items: center; justify-content: center; color: var(--ip-grigio); cursor: pointer;\n}\n.ip-costo .ip-costo-occhio svg { width: 20px; height: 20px; }\n.ip-costo .ip-costo-occhio.ip-attivo { background: var(--ip-nero); color: #fff; }\n\n/* ====================================================================================\n   App per Elenco e Scheda prodotto: il sito resta nascosto, queste sono le schermate dell'app\n   ==================================================================================== */\n.ip-spa .console-shell,\n.ip-spa .console-mobile-bar,\n.ip-spa #ip-bar { display: none !important; }\nbody.ip-spa { background: var(--ip-fondo) !important; overflow-x: hidden; }\n\n/* L'app occupa tutto lo schermo e scorre al suo interno: lo scorrimento non dipende dalla pagina del sito. */\nhtml:has(body.ip-spa), body.ip-spa { height: 100%; overflow: hidden !important; }\n#ip-root { position: fixed; top: 0; left: 0; right: 0; bottom: 0; display: flex; flex-direction: column; color: var(--ip-testo); font-family: inherit; font-size: 15px; line-height: 1.35; }\n#ip-root button { font-family: inherit; cursor: pointer; -webkit-tap-highlight-color: transparent; }\n#ip-root svg { display: block; }\n\n/* Testata scura con il campo codice sempre presente */\n.ip-testa {\n  flex: none; position: relative; z-index: 20; padding: 0 12px 14px;\n  background: var(--ip-nero); color: #fff; border-radius: 0 0 24px 24px;\n}\n.ip-testa-riga { height: 56px; display: flex; align-items: center; gap: 2px; max-width: 760px; margin: 0 auto; }\n.ip-testa-titolo { flex: 1 1 auto; min-width: 0; padding-left: 6px; font-size: 20px; font-weight: 700; letter-spacing: -.3px; }\n.ip-tondo {\n  flex: none; width: 46px; height: 46px; padding: 0; border: 0; border-radius: 23px; background: transparent; color: #fff;\n  display: inline-flex; align-items: center; justify-content: center;\n}\n.ip-tondo:active { background: rgba(255, 255, 255, .14); }\n.ip-tondo svg { width: 24px; height: 24px; }\n.ip-indietro { display: none; margin-left: -6px; }\n.ip-su-prodotto .ip-indietro { display: inline-flex; }\n.ip-su-prodotto .ip-testa-titolo { padding-left: 0; }\n.ip-ingranaggio { margin-right: -6px; }\n\n.ip-ricerca {\n  max-width: 760px; margin: 0 auto; height: 56px; display: flex; align-items: center; gap: 10px;\n  padding: 0 6px 0 14px; background: var(--ip-carta); border-radius: 16px; transition: box-shadow .15s;\n}\n.ip-ricerca:focus-within { box-shadow: 0 0 0 3px rgba(255, 255, 255, .28); }\n.ip-ricerca-icona { flex: none; color: #9aa1ad; }\n.ip-ricerca-icona svg { width: 26px; height: 26px; }\n#ip-campo {\n  flex: 1 1 auto; min-width: 0; height: 100%; padding: 0; margin: 0; border: 0 !important; outline: 0 !important; box-shadow: none !important;\n  background: transparent; font-family: inherit; font-size: 18px; font-weight: 500; color: var(--ip-testo);\n  -webkit-appearance: none; appearance: none;\n}\n#ip-campo::placeholder { color: #9aa1ad; font-weight: 400; }\n#ip-campo::-webkit-search-cancel-button { display: none; }\n.ip-ricerca-vai {\n  flex: none; width: 44px; height: 44px; padding: 0; border: 0; border-radius: 12px; background: var(--ip-nero); color: #fff;\n  display: inline-flex; align-items: center; justify-content: center;\n}\n.ip-ricerca-vai svg { width: 22px; height: 22px; }\n\n.ip-vista {\n  flex: 1 1 0; min-height: 0; width: 100%; max-width: 760px; margin: 0 auto; padding: 14px 14px 28px;\n  overflow-y: auto; overflow-x: hidden; -webkit-overflow-scrolling: touch; overscroll-behavior: contain; touch-action: pan-y;\n}\n.ip-etichetta { margin: 20px 6px 8px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: .06em; color: var(--ip-grigio); }\n.ip-scheda { background: var(--ip-carta); border: 1px solid var(--ip-bordo); border-radius: 18px; }\n\n/* Elenco */\n.ip-guida { display: flex; align-items: center; gap: 14px; padding: 16px; background: var(--ip-carta); border: 1px solid var(--ip-bordo); border-radius: 18px; }\n.ip-guida-icona {\n  flex: none; width: 54px; height: 54px; border-radius: 16px; background: #fdecec; color: var(--ip-rosso);\n  display: flex; align-items: center; justify-content: center;\n}\n.ip-guida-icona svg { width: 30px; height: 30px; }\n.ip-guida-titolo { font-size: 17px; font-weight: 700; }\n.ip-guida-testo { margin-top: 2px; font-size: 14px; line-height: 1.4; color: var(--ip-grigio); }\n.ip-vuoto { padding: 28px 16px; text-align: center; font-size: 15px; color: var(--ip-grigio); }\n.ip-lista { overflow: hidden; }\n.ip-riga {\n  width: 100%; min-height: 76px; display: flex; align-items: center; gap: 12px; padding: 12px 10px 12px 14px;\n  border: 0; border-top: 1px solid var(--ip-eef0f3); background: var(--ip-carta); text-align: left; color: inherit;\n}\n.ip-riga:first-child { border-top: 0; }\n.ip-riga:active { background: var(--ip-f5f6f8); }\n.ip-mini, .ip-foto {\n  flex: none; overflow: hidden; background: var(--ip-fondo); color: var(--ip-b3b9c4);\n  display: flex; align-items: center; justify-content: center;\n}\n.ip-mini { width: 52px; height: 52px; border-radius: 12px; }\n.ip-mini img, .ip-foto img { width: 100%; height: 100%; object-fit: contain; background: #fff; }\n.ip-mini svg { width: 24px; height: 24px; }\n.ip-riga-testi { flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column; gap: 4px; }\n.ip-riga-nome {\n  font-size: 15px; font-weight: 600; line-height: 1.3;\n  display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden;\n}\n.ip-riga-codice, .ip-codice { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; }\n.ip-riga-codice { font-size: 13px; color: var(--ip-grigio); }\n.ip-riga-freccia { flex: none; color: var(--ip-b3b9c4); }\n.ip-riga-freccia svg { width: 20px; height: 20px; }\n\n/* Scheda prodotto */\n.ip-prodotto { display: flex; align-items: center; gap: 14px; padding: 14px; }\n.ip-foto { width: 92px; height: 92px; border-radius: 14px; border: 1px solid var(--ip-eef0f3); }\n.ip-foto svg { width: 34px; height: 34px; }\n.ip-prodotto-testi { flex: 1 1 auto; min-width: 0; }\n.ip-prodotto-nome { font-size: 18px; font-weight: 700; line-height: 1.25; letter-spacing: -.2px; overflow-wrap: anywhere; }\n.ip-codici { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 8px; }\n.ip-codice { padding: 4px 8px; border-radius: 8px; background: var(--ip-fondo); font-size: 12.5px; color: var(--ip-4b5565); }\n\n.ip-coppia { display: grid; grid-template-columns: 1.45fr 1fr; gap: 10px; margin-top: 10px; }\n.ip-numero { min-width: 0; padding: 14px 16px 16px; }\n.ip-numero-nome { font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: .06em; color: var(--ip-grigio); }\n.ip-numero-valore { margin-top: 4px; font-size: 34px; font-weight: 800; line-height: 1.1; letter-spacing: -1px; white-space: nowrap; }\n.ip-numero-valore small { font-size: 16px; font-weight: 500; letter-spacing: 0; color: var(--ip-grigio); }\n.ip-numero-prezzo { background: var(--ip-nero); border-color: var(--ip-nero); color: #fff; }\n.ip-numero-prezzo .ip-numero-nome { color: #9ba1ac; }\n.ip-sconto { margin-top: 8px; display: flex; align-items: center; gap: 8px; font-size: 14px; color: #9ba1ac; }\n.ip-sconto-percento { padding: 2px 8px; border-radius: 8px; background: var(--ip-rosso); color: #fff; font-weight: 700; }\n.ip-esaurito .ip-numero-valore { color: var(--ip-rosso); }\n\n.ip-dati { padding: 2px 16px; }\n.ip-dato {\n  min-height: 52px; display: flex; align-items: center; justify-content: space-between; gap: 16px;\n  padding: 10px 0; border-top: 1px solid var(--ip-eef0f3);\n}\n.ip-dato:first-child { border-top: 0; }\n.ip-dato-nome { flex: none; max-width: 55%; font-size: 15px; color: var(--ip-grigio); }\n.ip-dato-valore { min-width: 0; font-size: 15px; font-weight: 600; text-align: right; overflow-wrap: anywhere; }\n.ip-forte { font-size: 20px; font-weight: 800; }\n.ip-dato-magazzino .ip-dato-nome { flex: 1 1 auto; max-width: none; min-width: 0; display: flex; flex-direction: column; gap: 2px; }\n.ip-magazzino-nome { font-size: 15px; font-weight: 600; color: var(--ip-testo); }\n.ip-magazzino-nota { font-size: 12.5px; color: var(--ip-grigio); }\n#ip-root .ip-costo { display: inline-flex !important; align-items: center; gap: 8px; min-height: 0; }\n.ip-occhio {\n  flex: none; width: 38px; height: 32px; padding: 0; border: 0; border-radius: 10px; background: var(--ip-fondo); color: var(--ip-grigio);\n  display: inline-flex; align-items: center; justify-content: center;\n}\n.ip-occhio svg { width: 20px; height: 20px; }\n.ip-occhio.ip-attivo { background: var(--ip-nero); color: #fff; }\n.ip-secondario {\n  margin: 18px auto 0; height: 46px; padding: 0 16px; display: flex; align-items: center; gap: 8px;\n  border: 1px solid var(--ip-d9dce2); border-radius: 12px; background: var(--ip-carta); font-size: 15px; font-weight: 600; color: var(--ip-testo);\n}\n.ip-secondario svg { width: 18px; height: 18px; }\n\n/* Azioni in basso */\n.ip-azioni {\n  flex: none; position: relative; z-index: 12; display: flex; gap: 8px;\n  padding: 10px 12px calc(10px + env(safe-area-inset-bottom));\n  background: var(--ip-carta); border-top: 1px solid var(--ip-bordo); box-shadow: 0 -6px 18px rgba(0, 0, 0, .06);\n}\n.ip-azioni:empty { display: none; }\n.ip-azione {\n  flex: 1 1 0; min-width: 0; height: 58px; padding: 0; border: 0; border-radius: 16px; background: var(--ip-nero); color: #fff;\n  display: flex; flex-direction: column; align-items: center; justify-content: center; line-height: 1.15;\n}\n.ip-azione:active { opacity: .85; }\n.ip-azione small { font-size: 11px; font-weight: 500; color: #9ba1ac; }\n.ip-azione b { font-size: 16px; font-weight: 600; }\n.ip-azione-scan { flex: 1.5 1 0; flex-direction: row; gap: 8px; background: var(--ip-rosso); }\n.ip-azione-scan b { font-size: 17px; }\n.ip-azione-scan svg { width: 24px; height: 24px; }\n.ip-scanner .ip-azioni { display: none !important; }\n\n/* Avviso che non blocca: compare sotto la testata e se ne va da solo */\n.ip-avviso {\n  position: absolute; left: 12px; right: 12px; top: 134px; z-index: 30; max-width: 736px; margin: 0 auto;\n  display: flex; align-items: center; gap: 12px; padding: 14px 16px;\n  background: var(--ip-carta); border: 1px solid #f1c4c5; border-radius: 18px; box-shadow: 0 14px 34px rgba(0, 0, 0, .18);\n  transform: translateY(-14px); opacity: 0; pointer-events: none; transition: transform .18s, opacity .18s;\n}\n.ip-avviso.ip-aperto { transform: none; opacity: 1; pointer-events: auto; }\n.ip-avviso-icona {\n  flex: none; width: 44px; height: 44px; border-radius: 22px; background: var(--ip-rosso); color: #fff;\n  display: flex; align-items: center; justify-content: center;\n}\n.ip-avviso-icona svg { width: 26px; height: 26px; }\n.ip-avviso-titolo { font-size: 17px; font-weight: 700; }\n.ip-avviso-testo { margin-top: 2px; font-size: 14px; color: var(--ip-grigio); overflow-wrap: anywhere; }\n\n/* Segnaposto mentre arriva il prodotto */\n.ip-finto i { display: block; height: 14px; margin: 8px 0; border-radius: 7px; background: var(--ip-e6e9ee); animation: ip-pulsa .9s ease-in-out infinite alternate; }\n.ip-finto i.ip-alto { height: 30px; }\n.ip-finto .ip-foto { background: var(--ip-e6e9ee); border: 0; animation: ip-pulsa .9s ease-in-out infinite alternate; }\n.ip-dati.ip-finto { padding: 10px 16px; }\n@keyframes ip-pulsa { from { opacity: 1; } to { opacity: .45; } }\n\n/* Foto ingrandita */\n.ip-visore {\n  position: fixed; inset: 0; z-index: 1500; padding: 16px; background: rgba(10, 11, 14, .94);\n  display: flex; align-items: center; justify-content: center;\n}\n.ip-visore img { max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 14px; background: #fff; }\n\n/* ---------- Modifica prezzo e quantit\u00e0 dentro l'app ---------- */\n.ip-chip { display: flex; align-items: center; gap: 12px; padding: 10px 12px; }\n.ip-numero-medio { font-size: 24px !important; letter-spacing: -.5px !important; padding-top: 6px; }\n.ip-coppia-pari { grid-template-columns: 1fr 1fr; }\n.ip-numero.ip-su .ip-numero-valore { color: #5fe08a; }\n.ip-numero.ip-giu .ip-numero-valore { color: #ff7a7c; }\n.ip-numero-prezzo .ip-numero-valore small { color: #9ba1ac; font-size: 14px; }\n\n.ip-segmenti { margin-top: 16px; display: flex; gap: 4px; padding: 4px; border-radius: 14px; background: var(--ip-e3e6eb); }\n.ip-segmenti button {\n  flex: 1 1 0; min-width: 0; height: 46px; padding: 0 6px; border: 0; border-radius: 10px; background: transparent;\n  font-size: 15px; font-weight: 600; color: var(--ip-grigio);\n}\n.ip-segmenti button.ip-scelto { background: var(--ip-scelta); color: var(--ip-testo); box-shadow: 0 1px 3px rgba(0, 0, 0, .12); }\n\n.ip-campo-grande {\n  height: 68px; display: flex; align-items: center; gap: 8px; padding: 0 18px;\n  background: var(--ip-carta); border: 2px solid var(--ip-bordo); border-radius: 16px; transition: border-color .12s;\n}\n.ip-campo-grande:focus-within { border-color: var(--ip-nero); }\n.ip-campo-grande input {\n  flex: 1 1 auto; min-width: 0; height: 100%; padding: 0; border: 0 !important; outline: 0 !important; box-shadow: none !important;\n  background: transparent; font-family: inherit; font-size: 30px; font-weight: 700; color: var(--ip-testo); letter-spacing: -.5px;\n  -webkit-appearance: none; appearance: none;\n}\n.ip-campo-grande span { flex: none; font-size: 20px; font-weight: 600; color: var(--ip-grigio); }\n\n.ip-rapidi { margin-top: 10px; display: flex; gap: 8px; }\n.ip-rapidi button {\n  flex: 1 1 0; height: 50px; border: 1px solid var(--ip-d9dce2); border-radius: 12px; background: var(--ip-carta);\n  font-size: 16px; font-weight: 700; color: var(--ip-testo);\n}\n.ip-rapidi button:active, .ip-motivi button:active, .ip-magazzini button:active { background: var(--ip-f1f2f5); }\n\n.ip-esito {\n  margin-top: 12px; min-height: 58px; display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 0 18px;\n  background: var(--ip-carta); border: 1px solid var(--ip-bordo); border-radius: 16px; font-size: 15px; color: var(--ip-grigio);\n}\n.ip-esito b { font-size: 22px; font-weight: 800; color: var(--ip-testo); letter-spacing: -.4px; }\n.ip-esito.ip-esito-ok { background: #e9f8ee; border-color: #bfe8cc; color: #1b7a3c; }\n.ip-esito.ip-esito-ok b { color: #136c31; }\n\n.ip-magazzini { display: flex; gap: 8px; overflow-x: auto; padding-bottom: 2px; scrollbar-width: none; }\n.ip-magazzini::-webkit-scrollbar { display: none; }\n.ip-magazzini button {\n  flex: none; min-width: 150px; max-width: 230px; min-height: 66px; padding: 10px 14px; text-align: left;\n  display: flex; flex-direction: column; justify-content: center; gap: 3px;\n  background: var(--ip-carta); border: 2px solid var(--ip-bordo); border-radius: 14px; color: var(--ip-testo);\n}\n.ip-magazzini button span { font-size: 13px; color: var(--ip-grigio); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 100%; }\n.ip-magazzini button b { font-size: 18px; font-weight: 800; }\n.ip-magazzini button.ip-scelto { border-color: var(--ip-nero); }\n.ip-magazzini button.ip-altro { min-width: 130px; border-style: dashed; }\n.ip-magazzini button.ip-altro b svg { width: 20px; height: 20px; }\n\n.ip-passi { display: flex; align-items: center; gap: 8px; }\n.ip-passi > button {\n  flex: none; width: 68px; height: 68px; padding: 0; border: 0; border-radius: 16px; background: var(--ip-nero); color: #fff;\n  display: inline-flex; align-items: center; justify-content: center;\n}\n.ip-passi > button svg { width: 28px; height: 28px; }\n.ip-passi .ip-campo-grande { flex: 1 1 auto; min-width: 0; }\n.ip-passi .ip-campo-grande input { text-align: center; }\n\n.ip-motivi { display: flex; flex-wrap: wrap; gap: 8px; }\n.ip-motivi button {\n  min-height: 44px; padding: 8px 14px; border: 1px solid var(--ip-d9dce2); border-radius: 22px; background: var(--ip-carta);\n  font-size: 14px; font-weight: 600; color: var(--ip-testo); text-align: left;\n}\n.ip-motivi button.ip-scelto { background: var(--ip-nero); border-color: var(--ip-nero); color: #fff; }\n\n.ip-azione-salva { background: var(--ip-rosso); }\n.ip-azione-salva b { font-size: 18px; }\n.ip-azione:disabled { opacity: .4; }\n\n.ip-avviso.ip-avviso-ok { border-color: #bfe8cc; }\n.ip-avviso.ip-avviso-ok .ip-avviso-icona { background: #1f9d4d; }\n\n/* Scelta del magazzino */\n.ip-foglio {\n  position: fixed; inset: 0; z-index: 1400; display: flex; align-items: flex-end; justify-content: center; padding: 10px;\n  background: rgba(17, 19, 24, .5);\n}\n.ip-foglio-carta {\n  width: 100%; max-width: 520px; max-height: 82vh; display: flex; flex-direction: column;\n  background: var(--ip-carta); border-radius: 22px; padding: 18px 14px 12px; animation: ip-sale .18s ease-out;\n}\n.ip-foglio-titolo { padding: 0 4px 12px; font-size: 19px; font-weight: 700; }\n.ip-foglio-filtro {\n  flex: none; height: 50px; padding: 0 14px; border: 1px solid var(--ip-bordo) !important; border-radius: 12px; outline: 0 !important;\n  background: var(--ip-fondo); font-family: inherit; font-size: 16px; color: var(--ip-testo); -webkit-appearance: none; appearance: none;\n}\n.ip-foglio-lista { flex: 1 1 auto; overflow-y: auto; margin-top: 8px; -webkit-overflow-scrolling: touch; }\n.ip-foglio-lista button {\n  width: 100%; min-height: 52px; padding: 10px 8px; border: 0; border-top: 1px solid var(--ip-eef0f3); background: var(--ip-carta);\n  text-align: left; font-size: 15px; font-weight: 500; color: var(--ip-testo);\n}\n.ip-foglio-lista button:first-child { border-top: 0; }\n.ip-foglio-lista button.ip-scelto { font-weight: 800; }\n\n/* ---------- Carrelli ---------- */\n.ip-schede { display: none; flex: 1 1 auto; min-width: 0; gap: 4px; padding: 4px; margin-right: 6px; border-radius: 14px; background: rgba(255, 255, 255, .1); }\n.ip-radice .ip-schede { display: flex; }\n.ip-radice .ip-testa-titolo { display: none; }\n.ip-schede button {\n  flex: 1 1 0; height: 38px; padding: 0; border: 0; border-radius: 11px; background: transparent;\n  font-family: inherit; font-size: 15px; font-weight: 700; color: rgba(255, 255, 255, .62);\n}\n.ip-schede[data-scheda=\"prodotti\"] button[data-s=\"prodotti\"],\n.ip-schede[data-scheda=\"carrelli\"] button[data-s=\"carrelli\"],\n.ip-schede[data-scheda=\"vendite\"] button[data-s=\"vendite\"] { background: var(--ip-carta); color: var(--ip-testo); }\n\n.ip-segmenti-stretti { margin: 0 0 12px; }\n.ip-sotto { margin-top: 10px; }\n.ip-riga-sotto { font-size: 13px; line-height: 1.3; color: var(--ip-grigio); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n.ip-riga-prezzo { flex: none; font-size: 16px; font-weight: 800; letter-spacing: -.2px; white-space: nowrap; }\n.ip-riga-carrello { min-height: 84px; }\n.ip-riga-carrello .ip-riga-nome { font-size: 16px; font-weight: 700; -webkit-line-clamp: 1; }\n.ip-campo-testo { height: 58px; }\n.ip-campo-testo input { font-size: 19px !important; font-weight: 600 !important; letter-spacing: 0 !important; }\n\n.ip-articolo { margin-top: 8px; padding: 12px 12px 10px 14px; }\n.ip-articolo-sopra { display: flex; align-items: center; gap: 12px; }\n.ip-articolo-totale { flex: none; display: flex; flex-direction: column; align-items: flex-end; gap: 2px; white-space: nowrap; }\n.ip-articolo-totale small { font-size: 11px; font-weight: 600; color: var(--ip-grigio); }\n.ip-articolo-totale b { font-size: 17px; font-weight: 800; letter-spacing: -.2px; }\n.ip-articolo-sotto { margin-top: 10px; display: flex; align-items: center; gap: 8px; }\n.ip-contatore { flex: none; display: flex; align-items: center; height: 46px; border-radius: 13px; background: var(--ip-fondo); }\n.ip-contatore button {\n  width: 46px; height: 46px; padding: 0; border: 0; border-radius: 13px; background: transparent; color: var(--ip-testo);\n  display: inline-flex; align-items: center; justify-content: center;\n}\n.ip-contatore button:active { background: var(--ip-dfe2e8); }\n.ip-contatore button:disabled { opacity: .3; }\n.ip-contatore button svg { width: 20px; height: 20px; }\n.ip-contatore b { min-width: 34px; text-align: center; font-size: 18px; font-weight: 800; }\n.ip-articolo-prezzo {\n  flex: 1 1 auto; min-width: 0; height: 46px; padding: 0 12px; display: flex; align-items: center; gap: 8px;\n  border: 1px solid var(--ip-d9dce2); border-radius: 13px; background: var(--ip-carta); font-family: inherit; color: var(--ip-testo); text-align: left;\n}\n.ip-articolo-prezzo:active { background: var(--ip-f5f6f8); }\n.ip-articolo-prezzo small { font-size: 12px; font-weight: 600; color: var(--ip-grigio); }\n.ip-articolo-prezzo b { font-size: 15px; font-weight: 700; white-space: nowrap; }\n.ip-articolo-prezzo s { font-size: 12px; color: #9ba1ac; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.ip-articolo-togli {\n  flex: none; width: 46px; height: 46px; padding: 0; border: 0; border-radius: 13px; background: #fdeeee; color: var(--ip-rosso);\n  display: inline-flex; align-items: center; justify-content: center;\n}\n.ip-articolo-togli:active { background: #f9d9d9; }\n.ip-articolo-togli svg { width: 20px; height: 20px; }\n.ip-secondario.ip-pericolo { margin-top: 26px; border-color: #f3c9c9; color: var(--ip-rosso); }\n\n.ip-riga-catalogo { padding-right: 12px; }\n.ip-riga-catalogo:active { background: var(--ip-carta); }\n.ip-aggiungi {\n  flex: none; width: 46px; height: 46px; padding: 0; border: 0; border-radius: 23px; background: var(--ip-nero); color: #fff;\n  display: inline-flex; align-items: center; justify-content: center;\n}\n.ip-aggiungi svg { width: 22px; height: 22px; }\n.ip-aggiungi:disabled { opacity: .4; }\n.ip-aggiungi.ip-fatto { background: #1f9d4d; }\n\n.ip-foglio-testo { padding: 0 4px 14px; font-size: 15px; line-height: 1.4; color: var(--ip-grigio); }\n.ip-foglio-nota { padding: 10px 4px 4px; font-size: 13px; line-height: 1.4; color: var(--ip-grigio); }\n.ip-centrato { text-align: center; }\n.ip-foglio-ok, .ip-foglio-no {\n  width: 100%; height: 54px; margin-top: 10px; padding: 0; border: 0; border-radius: 15px;\n  font-family: inherit; font-size: 17px; font-weight: 700;\n}\n.ip-foglio-ok { background: var(--ip-rosso); color: #fff; }\n.ip-foglio-ok:disabled { opacity: .5; }\n.ip-foglio-no { margin-top: 8px; background: var(--ip-fondo); color: var(--ip-testo); }\n\n/* Dettaglio riga, sconti e cliente */\nbutton.ip-articolo-sopra { width: 100%; padding: 0; border: 0; background: transparent; font-family: inherit; color: inherit; text-align: left; }\nbutton.ip-articolo-sopra:active { opacity: .6; }\n.ip-articolo-sopra .ip-riga-freccia { margin-left: -4px; margin-right: -4px; }\n.ip-articolo-prezzo .ip-sconto-percento, .ip-prezzo-riga .ip-sconto-percento { flex: none; padding: 2px 6px; border-radius: 7px; font-size: 12px; }\nbutton.ip-numero-tocco { display: block; width: 100%; font-family: inherit; text-align: left; }\nbutton.ip-numero-tocco:active { opacity: .85; }\n.ip-numero-tocco .ip-numero-nome { display: flex; align-items: center; justify-content: space-between; }\n.ip-numero-matita { display: inline-flex; color: #fff; opacity: .8; }\n.ip-numero-matita svg { width: 17px; height: 17px; }\n.ip-numero-prezzo .ip-sconto { flex-wrap: wrap; }\n.ip-mini-icona { color: var(--ip-testo); }\n.ip-mini-grande { width: 72px; height: 72px; border-radius: 14px; }\n.ip-nome-intero { -webkit-line-clamp: 6 !important; font-size: 16px !important; }\nbutton.ip-riga-cliente { border: 1px solid var(--ip-bordo); border-radius: 18px; font-family: inherit; min-height: 68px; }\n.ip-riga-cliente .ip-riga-nome { font-size: 16px; font-weight: 700; }\n.ip-contatore-largo { margin-top: 8px; width: 100%; justify-content: space-between; }\n.ip-contatore-largo b { font-size: 22px; }\nbutton.ip-prezzo-riga {\n  width: 100%; min-height: 64px; padding: 12px 14px 12px 16px; display: flex; align-items: center; justify-content: space-between; gap: 10px;\n  font-family: inherit; color: var(--ip-testo); text-align: left;\n}\nbutton.ip-prezzo-riga:active { background: var(--ip-f5f6f8); }\n.ip-prezzo-riga-valori { min-width: 0; display: flex; align-items: center; flex-wrap: wrap; gap: 8px; }\n.ip-prezzo-riga-valori b { font-size: 24px; font-weight: 800; letter-spacing: -.5px; }\n.ip-prezzo-riga-valori s { font-size: 14px; color: #9ba1ac; }\n.ip-prezzo-riga-modifica { flex: none; display: inline-flex; align-items: center; gap: 6px; height: 38px; padding: 0 12px; border-radius: 11px; background: var(--ip-fondo); font-size: 14px; font-weight: 600; }\n.ip-prezzo-riga-modifica svg { width: 16px; height: 16px; }\n.ip-segmenti-foglio { margin: 0 0 12px; }\n.ip-segmenti-foglio button { font-size: 14px; }\n.ip-foglio-esito { min-height: 22px; padding: 10px 4px 0; font-size: 15px; font-weight: 600; color: var(--ip-testo); }\n.ip-foglio-esito.ip-errore { color: var(--ip-rosso); }\n.ip-foglio-togli { color: var(--ip-rosso); background: #fdeeee; }\n.ip-campo-modulo { margin-top: 8px; }\n.ip-secondario svg { flex: none; }\n.ip-nota-totale { margin-top: 8px; padding: 10px 14px; border-radius: 14px; background: #fff4e0; color: #7a4b00; font-size: 13.5px; line-height: 1.4; }\n.ip-sconto-percento:empty { display: none; }\n.ip-numero-prezzo.ip-numero-avviso { background: #f5b301; border-color: #f5b301; color: #1c1400; }\n.ip-numero-avviso .ip-numero-nome, .ip-numero-avviso .ip-sconto { color: #5c4300; }\n.ip-numero-avviso .ip-numero-matita { color: #1c1400; }\n.ip-nota-scelta { padding: 14px; background: #fff4d6; border: 1px solid #f5d37a; }\n.ip-nota-titolo { margin-bottom: 4px; font-size: 16px; font-weight: 800; color: #3d2b00; }\n.ip-nota-tasti { margin-top: 12px; display: flex; gap: 8px; }\n.ip-nota-tasti button { flex: 1 1 0; min-width: 0; height: 48px; padding: 0 8px; border: 0; border-radius: 13px; font-family: inherit; font-size: 15px; font-weight: 700; }\n.ip-nota-tasti button:disabled { opacity: .5; }\n.ip-nota-tieni { background: var(--ip-nero); color: #fff; }\n.ip-nota-rimuovi { background: var(--ip-carta); color: var(--ip-rosso); border: 1px solid #f3c9c9 !important; }\n\n/* ---------- Guscio nativo iPhone: barre e tasti sono dell'app, qui resta solo il contenuto ---------- */\n.ip-nativo .ip-testa, .ip-nativo .ip-azioni { display: none !important; }\n.ip-nativo .ip-vista { max-width: none; padding: calc(var(--ip-sopra, 0px) + 12px) 16px calc(var(--ip-sotto, 0px) + 20px); }\n.ip-nativo .ip-avviso { top: calc(var(--ip-sopra, 0px) + 8px); border-radius: 22px; }\n/* La tastiera di iOS copre il fondo dello schermo: i fogli si aprono in alto. */\n.ip-nativo .ip-foglio { align-items: flex-start; padding: calc(env(safe-area-inset-top, 0px) + 54px) 12px 12px; backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px); background: rgba(17, 19, 24, .32); }\n.ip-nativo .ip-foglio-carta { border-radius: 28px; max-height: 70vh; overflow-y: auto; }\n.ip-nativo .ip-scheda, .ip-nativo .ip-guida { border-radius: 22px; }\n.ip-nativo .ip-campo-grande { border-radius: 18px; }\n.ip-nativo input, .ip-nativo button { font-family: -apple-system, system-ui, sans-serif; }\n#ip-root.ip-nativo { font-family: -apple-system, system-ui, sans-serif; }\n.ip-guida-testi { flex: 1 1 auto; min-width: 0; }\n.ip-guida-chiudi {\n  flex: none; align-self: flex-start; width: 32px; height: 32px; margin: -6px -6px 0 0; padding: 0; border: 0; border-radius: 16px;\n  background: var(--ip-fondo); color: var(--ip-grigio); display: inline-flex; align-items: center; justify-content: center;\n}\n.ip-guida-chiudi svg { width: 16px; height: 16px; }\n/* Senza il riquadro di benvenuto la prima etichetta non deve lasciare un vuoto in alto. */\n.ip-vista > .ip-etichetta:first-child { margin-top: 4px; }\n/* Pagine del sito mostrate cos\u00ec come sono su iPhone (per ora solo \"Cambia immagine\"): spazio per le barre native. */\n.ip-nativo-pagina .console-page-body { padding-top: calc(var(--ip-sopra, 0px) + 12px) !important; padding-bottom: calc(var(--ip-sotto, 0px) + 20px) !important; }\n.ip-nativo-pagina, .ip-nativo-pagina button, .ip-nativo-pagina input { font-family: -apple-system, system-ui, sans-serif !important; }\n.ip-nativo-pagina button[type=\"submit\"] { height: 52px !important; border-radius: 26px !important; background: #007a85 !important; border-color: #007a85 !important; font-size: 17px !important; font-weight: 600 !important; }\n/* Immagine del prodotto */\n.ip-anteprima { margin-top: 10px; aspect-ratio: 1 / 1; max-height: 44vh; width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; overflow: hidden; padding: 0; }\n.ip-anteprima img { width: 100%; height: 100%; object-fit: contain; background: #fff; }\n.ip-anteprima-vuota { color: var(--ip-b3b9c4); }\n.ip-anteprima-vuota svg { width: 56px; height: 56px; }\n.ip-anteprima-testo { font-size: 15px; color: var(--ip-grigio); }\n.ip-secondario.ip-largo { width: 100%; height: 52px; justify-content: center; margin-top: 12px; border-radius: 16px; font-size: 16px; }\n.ip-secondario.ip-largo svg { width: 20px; height: 20px; }\n.ip-secondario.ip-pericolo.ip-largo { margin-top: 10px; }\n\n/* iPhone: il contenuto resta dentro l'area sicura su tutti e quattro i lati. Su iPhone Duo la barra verticale\n   di sistema occupa un lato solo, quindi i margini sinistro e destro sono diversi: mai darli per uguali. */\n.ip-nativo .ip-vista { padding: calc(var(--ip-sopra, 0px) + 12px) calc(var(--ip-destra, 0px) + 16px) calc(var(--ip-sotto, 0px) + 20px) calc(var(--ip-sinistra, 0px) + 16px); }\n.ip-nativo .ip-avviso { top: calc(var(--ip-sopra, 0px) + 8px); left: calc(var(--ip-sinistra, 0px) + 12px); right: calc(var(--ip-destra, 0px) + 12px); }\n.ip-nativo .ip-foglio { padding: calc(var(--ip-sopra, 0px) + 10px) calc(var(--ip-destra, 0px) + 12px) 12px calc(var(--ip-sinistra, 0px) + 12px); }\n.ip-nativo .ip-foglio-carta { max-width: 460px; }\n.ip-nativo-pagina .console-page-body { padding-left: calc(var(--ip-sinistra, 0px) + 16px) !important; padding-right: calc(var(--ip-destra, 0px) + 16px) !important; }\n/* Elenco di azioni in fondo alla scheda prodotto (iPhone) */\n.ip-riga-azione { min-height: 58px; gap: 14px; font-family: inherit; }\n.ip-riga-icona { flex: none; width: 34px; height: 34px; border-radius: 10px; background: rgba(0, 122, 133, .12); color: #007a85; display: inline-flex; align-items: center; justify-content: center; }\n.ip-riga-icona svg { width: 20px; height: 20px; }\n.ip-riga-testo { flex: 1 1 auto; min-width: 0; font-size: 16px; font-weight: 600; color: var(--ip-testo); }\n\n/* ---------- Vendite ---------- */\n.ip-senza-ricerca .ip-ricerca { display: none; }\n.ip-senza-ricerca .ip-testa { padding-bottom: 6px; }\n.ip-pillole { display: flex; gap: 8px; overflow-x: auto; padding: 2px 0 4px; -webkit-overflow-scrolling: touch; scrollbar-width: none; }\n.ip-pillole::-webkit-scrollbar { display: none; }\n.ip-pillole button { flex: none; height: 38px; padding: 0 14px; border: 1px solid var(--ip-d9dce2); border-radius: 19px; background: var(--ip-carta); font-size: 14px; font-weight: 600; color: var(--ip-testo); white-space: nowrap; }\n.ip-pillole button.ip-scelto { background: var(--ip-nero); border-color: var(--ip-nero); color: #fff; }\n.ip-pillole-filtri { margin-top: 6px; }\n.ip-pillole-filtri button { max-width: 240px; overflow: hidden; text-overflow: ellipsis; }\n.ip-grafico { padding: 14px 14px 10px; }\n.ip-grafico svg { display: block; width: 100%; height: 130px; margin-top: 8px; overflow: visible; }\n.ip-grafico-area { fill: rgba(0, 122, 133, .16); stroke: none; }\n.ip-grafico-linea { fill: none; stroke: #007a85; stroke-width: 2.2; stroke-linejoin: round; stroke-linecap: round; vector-effect: non-scaling-stroke; }\n.ip-grafico-punti circle { fill: #007a85; }\n.ip-grafico-massimo { font-size: 13px; font-weight: 600; color: var(--ip-grigio); }\n.ip-grafico-date { display: flex; justify-content: space-between; margin-top: 6px; font-size: 12px; color: var(--ip-grigio); }\n.ip-classifica { padding: 6px 16px; }\n.ip-classifica-riga { padding: 11px 0; border-top: 1px solid var(--ip-eef0f3); }\n.ip-classifica-riga:first-child { border-top: 0; }\n.ip-classifica-sopra { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; }\n.ip-classifica-nome { min-width: 0; font-size: 15px; font-weight: 600; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden; }\n.ip-classifica-valore { flex: none; font-size: 15px; font-weight: 800; white-space: nowrap; }\n.ip-classifica-barra { margin-top: 7px; height: 5px; border-radius: 3px; background: var(--ip-eef0f3); overflow: hidden; }\n.ip-classifica-barra i { display: block; height: 100%; border-radius: 3px; background: #007a85; }\n.ip-etichetta-foglio { margin: 10px 4px 6px; }\n.ip-campo-data { width: 100%; min-height: 50px; }\n.ip-articolo-prezzo small, .ip-articolo-prezzo b { white-space: nowrap; }\n/* ---------- Dashboard: griglia che si adatta alla larghezza ---------- */\n.ip-cruscotto { display: grid; grid-template-columns: minmax(0, 1fr); column-gap: 14px; margin-top: 10px; }\n.ip-blocco { min-width: 0; }\n.ip-blocco > .ip-etichetta { margin-top: 18px; }\n.ip-tessere { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; margin-top: 10px; }\n.ip-tessere .ip-numero { padding: 12px 14px 14px; }\n.ip-totale-periodo { margin-top: 8px; font-size: 13px; color: #9ba1ac; }\n.ip-b-elenco .ip-segmenti-stretti { margin: 0 0 10px; }\n.ip-vista:has(.ip-cruscotto) { max-width: none; }\n/* Da qui in su c'\u00e8 spazio per affiancare: totale accanto alle tessere, grafici in coppia, elenchi in coppia. */\n@media (min-width: 700px) {\n  .ip-cruscotto { grid-template-columns: repeat(6, minmax(0, 1fr)); }\n  .ip-b-totale { grid-column: span 2; display: flex; }\n  .ip-b-totale .ip-totale-vendite { flex: 1 1 auto; display: flex; flex-direction: column; justify-content: center; }\n  .ip-b-totale .ip-numero-valore { font-size: 40px; }\n  .ip-b-tessere { grid-column: span 4; }\n  .ip-b-tessere .ip-tessere { grid-template-columns: repeat(3, minmax(0, 1fr)); margin-top: 0; height: 100%; }\n  .ip-b-grafico, .ip-b-elenco { grid-column: span 3; }\n  .ip-b-articoli { grid-column: span 6; }\n  .ip-b-articoli .ip-classifica-articoli { column-count: 2; column-gap: 28px; }\n  .ip-b-articoli .ip-classifica-riga { break-inside: avoid; }\n  .ip-b-articoli .ip-classifica-riga:first-child { border-top: 1px solid transparent; }\n  .ip-grafico svg { height: 170px; }\n  .ip-pillole { flex-wrap: wrap; overflow: visible; }\n}\n/* Schermi molto larghi: i tre elenchi stanno su una riga sola. */\n@media (min-width: 1100px) {\n  .ip-b-elenco, .ip-b-articoli { grid-column: span 2; }\n  .ip-b-articoli .ip-classifica-articoli { column-count: 1; }\n}\n/* Su iPhone periodo e filtri della dashboard stanno nei menu di sistema: qui resta solo il riepilogo. */\n.ip-riepilogo-filtri { display: none; }\n.ip-nativo .ip-pillole { display: none; }\n.ip-nativo .ip-riepilogo-filtri { display: block; padding: 2px 4px 0; font-size: 14px; font-weight: 600; color: var(--ip-grigio); }\n.ip-pillole button.ip-interruttore { display: inline-flex; align-items: center; gap: 10px; padding-right: 8px; }\n.ip-interruttore i { position: relative; flex: none; width: 40px; height: 24px; border-radius: 12px; background: var(--ip-d1d5db); transition: background .15s; }\n.ip-interruttore i::after { content: ''; position: absolute; top: 2px; left: 2px; width: 20px; height: 20px; border-radius: 10px; background: #fff; box-shadow: 0 1px 3px rgba(0, 0, 0, .25); transition: transform .15s; }\n.ip-interruttore.ip-acceso i { background: #007a85; }\n.ip-interruttore.ip-acceso i::after { transform: translateX(16px); }\n\n/* Dashboard su iPhone: riga con l'interruttore dell'IVA, dentro la pagina. */\n.ip-riga-iva { display: none; }\n.ip-nativo .ip-riga-iva { display: flex; align-items: center; justify-content: space-between; width: 100%; margin: 10px 0 2px; padding: 12px 16px; border: 0; font: inherit; font-size: 17px; color: inherit; text-align: left; -webkit-tap-highlight-color: transparent; }\n.ip-riga-iva i { width: 51px; height: 31px; border-radius: 16px; }\n.ip-riga-iva i::after { width: 27px; height: 27px; border-radius: 14px; }\n.ip-riga-iva.ip-acceso i::after { transform: translateX(20px); }\n\n/* ---------- Impostazioni: scelta del tema ---------- */\n#ip-imp .ip-imp-tema { flex-direction: column; align-items: stretch; gap: 0; cursor: default; }\n#ip-imp .ip-imp-tema .ip-segmenti { margin-top: 12px; }\n#ip-imp .ip-imp-tema .ip-segmenti button { flex: 1 1 0; height: 40px; border: 0; border-radius: 10px; background: transparent; font: inherit; font-size: 14px; font-weight: 600; color: var(--ip-grigio); }\n#ip-imp .ip-imp-tema .ip-segmenti button.ip-scelto { background: var(--ip-scelta); color: var(--ip-testo); box-shadow: 0 1px 3px rgba(0, 0, 0, .12); }\n\n/* ---------- Tema scuro: ritocchi dove le variabili non bastano ---------- */\n.ip-scuro .ip-guida-icona, .ip-scuro .ip-articolo-togli, .ip-scuro .ip-foglio-togli { background: rgba(204, 22, 25, .24); color: #ff8e90; }\n.ip-scuro .ip-articolo-togli:active { background: rgba(204, 22, 25, .4); }\n.ip-scuro .ip-secondario.ip-pericolo, .ip-scuro .ip-nota-rimuovi { border-color: #6b2a2c !important; color: #ff8e90; }\n.ip-scuro .ip-nota-scelta, .ip-scuro .ip-nota-scelta .ip-nota-titolo { color: #3d2b00; }\n.ip-scuro .ip-esito.ip-esito-ok { background: #12301d; border-color: #1f5c36; color: #7fe0a3; }\n.ip-scuro .ip-grafico-area { opacity: .55; }\n.ip-scuro.ip-scuro .ip-app input::placeholder { color: #7d8490; }\n\n/* ---------- iPhone: niente tessere nere ----------\n   Su iOS il nero pieno stona con il resto del sistema: le tessere dei totali sono schede chiare come le altre,\n   con il numero nel colore dell'app, e i tasti pieni usano lo stesso colore. */\n.ip-nativo { --ip-nero: #007a85; }\n.ip-nativo .ip-numero-prezzo:not(.ip-numero-avviso) { background: var(--ip-carta); border-color: var(--ip-bordo); color: var(--ip-testo); }\n.ip-nativo .ip-numero-prezzo:not(.ip-numero-avviso) .ip-numero-valore { color: #007a85; }\n.ip-nativo .ip-numero-prezzo .ip-numero-nome, .ip-nativo .ip-numero-prezzo .ip-numero-valore small, .ip-nativo .ip-totale-periodo { color: var(--ip-grigio); }\n.ip-nativo .ip-numero-prezzo:not(.ip-numero-avviso) .ip-numero-matita { color: var(--ip-grigio); }\n.ip-nativo .ip-numero.ip-su .ip-numero-valore { color: #1f9d4d; }\n.ip-nativo .ip-numero.ip-giu .ip-numero-valore { color: #cc1619; }\n.ip-scuro .ip-nativo .ip-numero-prezzo:not(.ip-numero-avviso) .ip-numero-valore { color: #4fd0da; }\n.ip-scuro .ip-nativo .ip-numero.ip-su .ip-numero-valore { color: #5fe08a; }\n.ip-scuro .ip-nativo .ip-numero.ip-giu .ip-numero-valore { color: #ff7a7c; }\n\n/* ---------- iPhone: scorre il documento e i selettori sono quelli di sistema ---------- */\nhtml.ip-doc:has(body.ip-spa), html.ip-doc body.ip-spa { height: auto; min-height: 100%; overflow-x: hidden !important; overflow-y: visible !important; }\nhtml.ip-doc #ip-root { position: static; min-height: 100vh; }\nhtml.ip-doc .ip-vista { flex: none; overflow: visible; min-height: 100vh; box-sizing: border-box; }\n/* La pagina lascia lo spazio: sopra ci va il controllo di iOS in Liquid Glass. */\n.ip-nativo .ip-vista .ip-segmenti { visibility: hidden; height: 36px; padding: 0; box-sizing: border-box; }\n.ip-nativo .ip-riga-iva i { visibility: hidden; }\n.ip-nativo .ip-riga-iva { margin: 18px 0 4px; }\n\n/* ---------- Carrello: scheda articolo quando lo spazio \u00e8 stretto (iPhone Duo chiuso, telefoni piccoli) ----------\n   La scheda misura s\u00e9 stessa: sotto i 350 px il totale va su una riga sua, il prezzo unitario prende tutta\n   la larghezza (cos\u00ec sconto e prezzo pieno ci stanno) e il cestino sale accanto alla quantit\u00e0. */\n.ip-articolo { container-type: inline-size; }\n.ip-articolo-prezzo { flex-wrap: wrap; row-gap: 0; }\n@container (max-width: 350px) {\n  .ip-articolo-sopra { flex-wrap: wrap; row-gap: 10px; }\n  .ip-articolo-sopra .ip-riga-testi { flex: 1 1 0; }\n  .ip-articolo-sopra .ip-riga-nome { -webkit-line-clamp: 3; }\n  .ip-articolo-sopra .ip-riga-freccia { order: 2; }\n  .ip-articolo-totale { order: 3; flex: 1 1 100%; flex-direction: row; justify-content: space-between; align-items: baseline; padding-top: 10px; border-top: 1px solid var(--ip-eef0f3); }\n  .ip-articolo-totale small { font-size: 13px; }\n  .ip-articolo-sotto { flex-wrap: wrap; }\n  .ip-articolo-sotto .ip-contatore { flex: 1 1 0; justify-content: space-between; }\n  .ip-articolo-togli { order: 2; }\n  .ip-articolo-prezzo { order: 3; flex: 1 1 100%; }\n}\n\n/* Il numero della quantit\u00e0 si tocca per scriverlo a mano: una sottolineatura leggera lo fa capire. */\n.ip-contatore b { cursor: pointer; align-self: stretch; display: flex; align-items: center; justify-content: center; padding: 0 6px; text-decoration: underline; text-decoration-color: var(--ip-b3b9c4); text-decoration-thickness: 2px; text-underline-offset: 5px; }\n\n/* ---------- Codice a barre a video (tocco sul codice o sull'EAN nella scheda prodotto) ----------\n   Fondo bianco pieno anche in Dark Mode: il lettore della cassa legge bene solo nero su bianco. */\n.ip-codice-tocca { display: inline-flex; align-items: center; gap: 5px; border: 0; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; cursor: pointer; color: var(--ip-4b5565); }\n.ip-codice-tocca svg { width: 14px; height: 14px; flex: none; opacity: .75; }\n.ip-codice-tocca:active { opacity: .6; }\n.ip-visore.ip-visore-barre { background: #fff; padding: 24px; }\n.ip-barre-carta { width: 100%; max-width: 640px; display: flex; flex-direction: column; align-items: center; color: #111; }\n.ip-barre-nome { margin-bottom: 22px; font-size: 17px; font-weight: 600; text-align: center; line-height: 1.3; }\n.ip-barre-disegno { width: 100%; background: #fff; }\n.ip-barre-disegno svg { display: block; width: 100%; height: min(34vh, 200px); }\n.ip-barre-testo { margin-top: 14px; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: 24px; font-weight: 700; letter-spacing: .08em; }\n.ip-barre-tipo { margin-top: 8px; font-size: 13px; color: #6b7280; }\n\n/* Tasto Chiudi di foto e codice a barre (Android: su iPhone sono schermate di sistema) */\n.ip-visore-chiudi { position: absolute; top: calc(env(safe-area-inset-top, 0px) + 14px); left: 14px; display: inline-flex; align-items: center; gap: 6px; height: 44px; padding: 0 16px 0 12px; border: 0; border-radius: 22px; background: rgba(255, 255, 255, .16); color: #fff; font: inherit; font-size: 16px; font-weight: 600; -webkit-backdrop-filter: blur(16px); backdrop-filter: blur(16px); }\n.ip-visore-chiudi svg { width: 20px; height: 20px; }\n.ip-visore-barre .ip-visore-chiudi { background: rgba(17, 19, 24, .08); color: #111; }\n\n\n/* Tasto Aggiorna nella testata (Android; su iPhone c'\u00e8 quello della barra di sistema) */\n.ip-aggiorna { margin-right: 0; }\n.ip-aggiorna.ip-gira svg { animation: ip-gira .9s linear infinite; }\n@keyframes ip-gira { to { transform: rotate(360deg); } }\n\n/* ---------- Tema scuro: niente fondi neri pieni dentro le schede ----------\n   Il fondo dell'app in scuro \u00e8 nero: icona del cliente, foto mancanti e barra meno/pi\u00f9 ne prendevano il colore\n   e sembravano buchi nella scheda. Usano il grigio delle superfici. */\n.ip-scuro .ip-mini, .ip-scuro .ip-foto, .ip-scuro .ip-mini-icona { background: var(--ip-e6e9ee); color: var(--ip-c2c7d0, #c2c7d0); border-color: transparent; }\n.ip-scuro .ip-contatore { background: var(--ip-e6e9ee); }\n.ip-scuro .ip-contatore button:active { background: var(--ip-d3d7de); }\n\n/* ---------- iPhone: motivi di carico e scarico e scelta della cassa come menu di sistema ----------\n   La pagina disegna la riga (nome a sinistra) e lascia lo spazio a destra: l'app ci appoggia un menu di iOS. */\n.ip-riga-menu { display: none; }\n.ip-nativo .ip-riga-menu { display: flex; flex: 1 1 100%; width: 100%; box-sizing: border-box; align-items: center; justify-content: space-between; gap: 12px; min-height: 52px; padding: 8px 8px 8px 16px; font-size: 17px; }\n.ip-riga-menu span { flex: none; color: var(--ip-testo); }\n.ip-riga-menu i { flex: 1 1 auto; min-width: 0; height: 36px; visibility: hidden; }\n\n/* ---------- Scarico del carrello ---------- */\n.ip-scarico-riepilogo { padding: 16px; }\n.ip-scarico-quanti { font-size: 20px; font-weight: 800; letter-spacing: -.2px; }\n.ip-scarico-nota { margin-top: 4px; font-size: 14px; line-height: 1.4; color: var(--ip-grigio); }\n.ip-riga-scelta { width: 100%; min-height: 56px; display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 12px 12px 12px 16px; font: inherit; font-size: 16px; font-weight: 600; color: var(--ip-testo); text-align: left; }\n.ip-riga-scelta.ip-vuota span:first-child { color: var(--ip-grigio); font-weight: 500; }\n.ip-riga-scelta .ip-riga-freccia svg { width: 20px; height: 20px; }\n.ip-note { display: block; width: 100%; box-sizing: border-box; padding: 14px 16px; font: inherit; font-size: 16px; color: var(--ip-testo); resize: vertical; outline: 0; }\n.ip-note:focus { box-shadow: 0 0 0 2px #007a85; }\n/* Tema scuro: la scelta attiva (causali, motivi, casse, filtri) deve staccare dalle altre, non quasi sparire. */\n.ip-scuro .ip-motivi button.ip-scelto, .ip-scuro .ip-pillole button.ip-scelto, .ip-scuro .ip-magazzini button.ip-scelto { background: var(--ip-testo); border-color: var(--ip-testo); color: #111318; }\n\n/* ---------- Dashboard: confronto con un altro periodo ---------- */\n.ip-pillole-confronto { margin-top: 6px; }\n.ip-nativo .ip-pillole-confronto { display: none; }\n.ip-riepilogo-confronto { padding: 2px 4px 0; font-size: 13px; color: var(--ip-grigio); }\n.ip-variazione { margin-top: 6px; display: flex; flex-wrap: wrap; align-items: baseline; gap: 4px 8px; font-size: 13px; line-height: 1.25; }\n.ip-variazione-segno { font-weight: 800; white-space: nowrap; }\n.ip-variazione-allora { color: var(--ip-grigio); white-space: nowrap; }\n.ip-variazione.ip-su .ip-variazione-segno { color: #1f9d4d; }\n.ip-variazione.ip-giu .ip-variazione-segno { color: #cc1619; }\n.ip-numero-prezzo .ip-variazione-allora { color: #9ba1ac; }\n.ip-numero-prezzo .ip-variazione.ip-su .ip-variazione-segno { color: #5fe08a; }\n.ip-numero-prezzo .ip-variazione.ip-giu .ip-variazione-segno { color: #ff7a7c; }\n.ip-nativo .ip-numero-prezzo .ip-variazione.ip-su .ip-variazione-segno, .ip-scuro .ip-variazione.ip-su .ip-variazione-segno { color: #1f9d4d; }\n.ip-nativo .ip-numero-prezzo .ip-variazione.ip-giu .ip-variazione-segno { color: #cc1619; }\n.ip-scuro .ip-nativo .ip-variazione.ip-su .ip-variazione-segno { color: #5fe08a; }\n.ip-scuro .ip-nativo .ip-variazione.ip-giu .ip-variazione-segno, .ip-scuro .ip-variazione.ip-giu .ip-variazione-segno { color: #ff7a7c; }\n\n/* ---------- Schermo largo: elenco a sinistra, dettaglio a destra ---------- */\n.ip-colonna { display: none; }\n#ip-root.ip-due-colonne { display: grid; grid-template-columns: minmax(260px, 36%) minmax(0, 1fr); grid-template-rows: auto minmax(0, 1fr) auto; }\n#ip-root.ip-due-colonne .ip-testa { grid-column: 1 / -1; grid-row: 1; }\n#ip-root.ip-due-colonne .ip-colonna { display: block; grid-column: 1; grid-row: 2 / 4; min-height: 0; overflow-y: auto; padding: 14px 0 28px 14px; -webkit-overflow-scrolling: touch; }\n#ip-root.ip-due-colonne .ip-vista { grid-column: 2; grid-row: 2; max-width: none; }\n#ip-root.ip-due-colonne .ip-azioni { grid-column: 2; grid-row: 3; }\n.ip-colonna .ip-etichetta { margin-top: 4px; }\n.ip-colonna .ip-riga { min-height: 64px; }\n.ip-colonna .ip-riga.ip-attiva { background: var(--ip-eef0f3); box-shadow: inset 4px 0 0 #007a85; }\n.ip-colonna .ip-riga-nome { font-size: 14px; }\n/* iPhone: scorre il documento, quindi la colonna resta ferma e scorre per conto suo */\n/* (il fondo della pagina ha overflow-x nascosto, che impedisce position: sticky: la colonna \u00e8 fissata allo schermo) */\nhtml.ip-doc #ip-root.ip-due-colonne { display: block; --ip-larghezza-colonna: clamp(260px, 36vw, 420px); }\nhtml.ip-doc #ip-root.ip-due-colonne .ip-colonna { position: fixed; z-index: 5; top: 0; bottom: 0; left: 0; width: calc(var(--ip-larghezza-colonna) + var(--ip-sinistra, 0px)); box-sizing: border-box; overflow-y: auto; padding: calc(var(--ip-sopra, 0px) + 12px) 0 calc(var(--ip-sotto, 0px) + 20px) calc(var(--ip-sinistra, 0px) + 16px); }\nhtml.ip-doc #ip-root.ip-due-colonne .ip-vista { padding-left: calc(var(--ip-larghezza-colonna) + var(--ip-sinistra, 0px) + 16px); }\n\n/* Cambio di carrello dalla colonna: il contenuto di prima resta, attenuato, finch\u00e9 arriva il nuovo */\n.ip-vista.ip-in-attesa { opacity: .45; transition: opacity .15s; pointer-events: none; }\n\n/* ---------- Carrello: striscia dei totali sempre visibile ---------- */\n.ip-totali-mini {\n  position: fixed; z-index: 1300; top: 0; left: 50%; transform: translate(-50%, -10px); opacity: 0; pointer-events: none;\n  display: flex; align-items: baseline; gap: 16px; max-width: calc(100vw - 32px); padding: 8px 16px; border-radius: 20px;\n  background: rgba(255, 255, 255, .86); -webkit-backdrop-filter: blur(18px) saturate(1.6); backdrop-filter: blur(18px) saturate(1.6);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, .14), inset 0 0 0 1px rgba(0, 0, 0, .05); color: var(--ip-testo);\n  transition: opacity .16s, transform .16s; white-space: nowrap; cursor: pointer;\n}\n.ip-totali-mini.ip-visibile { opacity: 1; transform: translate(-50%, 0); pointer-events: auto; }\n.ip-mini-voce { display: inline-flex; align-items: baseline; gap: 6px; }\n.ip-mini-voce small { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: .05em; color: var(--ip-grigio); }\n.ip-mini-voce b { font-size: 16px; font-weight: 800; }\n.ip-scuro .ip-totali-mini { background: rgba(44, 46, 51, .82); box-shadow: 0 6px 20px rgba(0, 0, 0, .4), inset 0 0 0 1px rgba(255, 255, 255, .06); }\n\n/* Tasto per chiudere e riaprire la colonna dell'elenco (Android; su iPhone \u00e8 nella barra di sistema) */\n.ip-colonna-tasto { display: none; }\n.ip-colonna-possibile .ip-colonna-tasto { display: inline-flex; }\n.ip-colonna-possibile:not(.ip-colonna-chiusa) .ip-colonna-tasto { background: rgba(255, 255, 255, .14); }\n\n/* ====================================================================================\n   iPhone: stile approvato con l'app EasyStore (novembre 2026)\n   Fondo leggermente petrolio, schede sollevate senza bordo, totale principale pieno color petrolio,\n   pillole e tasti secondari color tinta, mai schede attaccate, cifre che non escono dal riquadro.\n   Vale solo per il guscio iPhone (html.ip-doc): Android resta con il suo stile.\n   ==================================================================================== */\nhtml.ip-doc {\n  --es-fondo: #e9f0f1; --es-tinta: #dcebed; --es-tinta-testo: #00636c; --es-ambra: #b4630a;\n  --es-ombra: 0 1px 2px rgba(0, 55, 61, .06), 0 6px 18px rgba(0, 55, 61, .06);\n  --es-storno-fondo: #fdeceb; --es-storno-barra: #d64545;\n}\nhtml.ip-doc.ip-scuro {\n  --es-fondo: #0a1113; --es-tinta: #10292c; --es-tinta-testo: #6fd6de; --es-ambra: #ffb35c;\n  --es-ombra: none;\n  --es-storno-fondo: #3a1d1c; --es-storno-barra: #ff7a7c;\n}\n\n/* Fondo e schede */\nhtml.ip-doc, html.ip-doc body, html.ip-doc body.ip-app, html.ip-doc body.ip-spa { background: var(--es-fondo) !important; }\nhtml.ip-doc .ip-scheda, html.ip-doc .ip-guida { border-color: transparent; box-shadow: var(--es-ombra); }\nhtml.ip-doc.ip-scuro .ip-scheda, html.ip-doc.ip-scuro .ip-guida { border-color: rgba(255, 255, 255, .06); }\nhtml.ip-doc .ip-etichetta { color: var(--es-tinta-testo); }\nhtml.ip-doc .ip-numero-nome { color: #5b7276; }\nhtml.ip-doc.ip-scuro .ip-numero-nome { color: #9aaeb1; }\nhtml.ip-doc .ip-riepilogo-filtri { color: var(--es-tinta-testo); font-weight: 600; }\n\n/* Totale principale: scheda piena color petrolio con le cifre bianche (non quella gialla di \"prodotti modificati\") */\nhtml.ip-doc .ip-numero.ip-numero-prezzo:not(.ip-numero-avviso) {\n  background: linear-gradient(135deg, #00838e 0%, #006a73 60%, #005158 100%) !important; border-color: transparent !important; color: #fff;\n  box-shadow: 0 8px 24px rgba(0, 106, 115, .28);\n}\nhtml.ip-doc.ip-scuro .ip-numero.ip-numero-prezzo:not(.ip-numero-avviso) { background: linear-gradient(135deg, #00a0ac 0%, #007a85 70%, #00606a 100%) !important; box-shadow: none; }\nhtml.ip-doc .ip-numero.ip-numero-prezzo:not(.ip-numero-avviso) .ip-numero-valore { color: #fff !important; }\nhtml.ip-doc .ip-numero.ip-numero-prezzo:not(.ip-numero-avviso) .ip-numero-nome,\nhtml.ip-doc .ip-numero.ip-numero-prezzo:not(.ip-numero-avviso) .ip-totale-periodo,\nhtml.ip-doc .ip-numero.ip-numero-prezzo:not(.ip-numero-avviso) .ip-numero-valore small,\nhtml.ip-doc .ip-numero.ip-numero-prezzo:not(.ip-numero-avviso) .ip-numero-matita,\nhtml.ip-doc .ip-numero.ip-numero-prezzo:not(.ip-numero-avviso) .ip-sconto { color: rgba(255, 255, 255, .78) !important; }\nhtml.ip-doc .ip-numero.ip-numero-prezzo .ip-variazione-allora { color: rgba(255, 255, 255, .7) !important; }\nhtml.ip-doc .ip-numero.ip-numero-prezzo .ip-variazione-segno { color: #fff !important; }\nhtml.ip-doc .ip-numero.ip-numero-prezzo .ip-variazione.ip-su .ip-variazione-segno { color: #b6f5c8 !important; }\nhtml.ip-doc .ip-numero.ip-numero-prezzo .ip-variazione.ip-giu .ip-variazione-segno { color: #ffd0cf !important; }\n\n/* Attenzione non grave: ambra, non rosso */\nhtml.ip-doc .es-attenzione .ip-numero-valore { color: var(--es-ambra) !important; }\n\n/* Righe di dati pi\u00f9 basse, valori in evidenza */\nhtml.ip-doc .ip-dato { min-height: 42px; padding-top: 8px; padding-bottom: 8px; }\nhtml.ip-doc .ip-dati { padding: 2px 18px; }\nhtml.ip-doc .ip-dato-valore { font-weight: 600; }\n\n/* Codici in pillola color tinta */\nhtml.ip-doc .ip-codice, html.ip-doc .ip-codice-tocca { background: var(--es-tinta); color: var(--es-tinta-testo); font-weight: 600; }\n\n/* Pillole e tasti secondari: color tinta, mai bianchi con il bordo */\nhtml.ip-doc .ip-pillole button:not(.ip-scelto) { background: var(--es-tinta); border-color: transparent; color: var(--es-tinta-testo); }\nhtml.ip-doc .ip-secondario { background: var(--es-tinta) !important; color: var(--es-tinta-testo) !important; border-color: transparent !important; box-shadow: none !important; }\nhtml.ip-doc .ip-secondario.ip-pericolo { background: var(--es-storno-fondo) !important; color: var(--es-storno-barra) !important; }\nhtml.ip-doc .ip-foglio-no { background: var(--es-tinta); color: var(--es-tinta-testo); }\n\n/* Spazio fisso tra le schede: mai schede attaccate */\nhtml.ip-doc .ip-vista > .ip-scheda + .ip-scheda,\nhtml.ip-doc .ip-vista > .ip-scheda + .ip-tessere, html.ip-doc .ip-vista > .ip-tessere + .ip-scheda,\nhtml.ip-doc .ip-vista > .ip-tessere + .ip-tessere,\nhtml.ip-doc .ip-vista > div > .ip-scheda + .ip-scheda { margin-top: 12px !important; }\nhtml.ip-doc .ip-tessere, html.ip-doc .ip-coppia { gap: 12px; }\n\n/* Cifre: mai fuori dal riquadro (insieme ad adattaCifre nel JS, che vale su entrambe le app) */\n.ip-numero { min-width: 0; overflow: hidden; }\n.ip-numero-valore { max-width: 100%; overflow: hidden; white-space: nowrap; }\n\n/* ====================================================================================\n   Vendite: elenco e dettaglio di ogni vendita (solo lettura)\n   ==================================================================================== */\n/* Quattro sezioni nella testata Android: testo pi\u00f9 piccolo perch\u00e9 ci stiano tutte */\n.ip-schede[data-scheda=\"ordini\"] button[data-s=\"ordini\"] { background: var(--ip-carta); color: var(--ip-testo); }\n.ip-schede button { min-width: 0; padding: 0 4px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n@media (max-width: 520px) { .ip-schede button { font-size: 13px; } }\n@media (max-width: 430px) { .ip-schede { gap: 2px; padding: 3px; margin-right: 2px; } .ip-schede button { font-size: 12.5px; letter-spacing: -.2px; padding: 0 2px; } .ip-testa-riga .ip-tondo { width: 42px; } }\n\n/* Filtri */\n.ip-ordini-filtri { display: flex; flex-direction: column; gap: 10px; }\n.ip-ordini-filtri .ip-segmenti { margin: 0; }\n.ip-ordini-filtri .ip-pillole { margin: 0; }\n.ip-filtri-righe .ip-riga { min-height: 50px; padding-top: 8px; padding-bottom: 8px; }\n.ip-riga-filtro-nome { flex: 1 1 auto; min-width: 0; font-size: 16px; font-weight: 500; }\n.ip-riga-filtro-valore { flex: 0 1 auto; min-width: 0; font-size: 15px; color: var(--ip-grigio); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n.ip-ordini-filtri .ip-riga-menu { margin: 0; }\n\n/* Totale del periodo */\n.ip-totale-ordini { margin-top: 12px !important; }\n.ip-totale-saldo { margin-top: 6px; font-size: 13px; font-weight: 700; color: #ffcf8a; }\n\n/* Intestazione di ogni giorno con il suo totale */\n.ip-giorno { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; }\n.ip-giorno-totale { flex: none; text-transform: none; letter-spacing: 0; font-weight: 600; }\n\n/* Riga di una vendita */\n.ip-riga-ordine { min-height: 72px; align-items: center; }\n.ip-ordine-lato { flex: none; width: 48px; display: flex; flex-direction: column; align-items: center; gap: 4px; }\n.ip-ordine-icona { width: 36px; height: 36px; border-radius: 11px; display: flex; align-items: center; justify-content: center; background: var(--ip-fondo); color: var(--ip-grigio); }\n.ip-ordine-icona svg { width: 21px; height: 21px; }\n.ip-ordine-fattura { background: #e3f1f2; color: #007a85; }\n.ip-ordine-ora { font-size: 12.5px; font-weight: 700; color: var(--ip-grigio); font-variant-numeric: tabular-nums; }\n.ip-riga-ordine .ip-riga-nome { font-size: 16px; font-weight: 700; -webkit-line-clamp: 1; }\n.ip-ordine-stati { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 2px; }\n.ip-chip-stato { display: inline-flex; align-items: center; height: 22px; padding: 0 8px; border-radius: 11px; background: var(--ip-fondo); color: var(--ip-4b5565); font-size: 12px; font-weight: 600; white-space: nowrap; }\n.ip-chip-rosso { background: #fdeceb; color: #c13a3a; }\n.ip-chip-ambra { background: #fdf0de; color: #b4630a; }\n.ip-chip-pieno { background: #007a85; color: #fff; }\n.ip-ordine-importo { flex: none; display: flex; flex-direction: column; align-items: flex-end; gap: 2px; padding-left: 4px; }\n.ip-ordine-importo b { font-size: 16px; font-weight: 800; letter-spacing: -.2px; white-space: nowrap; font-variant-numeric: tabular-nums; }\n.ip-ordine-importo s { font-size: 12.5px; color: var(--ip-grigio); white-space: nowrap; }\n.ip-altre { margin-top: 14px !important; }\n\n/* Dettaglio */\n.ip-ordine-testa { margin: 2px 4px 12px; }\n.ip-ordine-quando { font-size: 20px; font-weight: 700; letter-spacing: -.3px; }\n.ip-ordine-testa .ip-ordine-stati { margin-top: 8px; }\n.ip-riga-venduto { align-items: flex-start; cursor: default; }\n.ip-riga-venduto .ip-riga-nome { font-size: 15px; }\n.ip-venduto-sotto { display: flex; flex-wrap: wrap; align-items: center; gap: 6px 10px; margin-top: 2px; }\n.ip-venduto-quantita { font-size: 13.5px; font-weight: 600; color: var(--ip-grigio); font-variant-numeric: tabular-nums; }\n.ip-dato-doppio .ip-dato-nome { display: flex; flex-direction: column; gap: 2px; max-width: 65%; }\n.ip-dato-doppio .ip-dato-nome b { font-size: 15px; font-weight: 600; color: var(--ip-testo); }\n.ip-dato-doppio .ip-dato-nome small { font-size: 12.5px; color: var(--ip-grigio); }\n.ip-dato-colonna { display: flex; flex-direction: column; align-items: flex-end; gap: 2px; }\n.ip-dato-colonna small { font-size: 12px; font-weight: 500; color: var(--ip-grigio); }\n.ip-negativo { color: #c13a3a !important; }\n.ip-vuoto-scheda { padding: 18px 16px; }\n.ip-note-ordine { padding: 4px 16px; }\n.ip-nota-ordine { padding: 12px 0; border-top: 1px solid var(--ip-eef0f3); font-size: 15px; line-height: 1.4; }\n.ip-nota-ordine:first-child { border-top: 0; }\n.ip-nota-ordine small { display: block; margin-top: 4px; font-size: 12px; color: var(--ip-grigio); }\n\n/* Dashboard: il totale si tocca per aprire le vendite del periodo */\n.ip-tocca { cursor: pointer; }\n.ip-tocca:active { opacity: .9; }\n.ip-vedi-vendite { display: inline-flex; align-items: center; gap: 2px; margin-top: 10px; font-size: 13px; font-weight: 700; color: rgba(255, 255, 255, .9); }\n.ip-vedi-vendite svg { width: 16px; height: 16px; }\n\n/* Tema scuro */\n.ip-scuro .ip-chip-rosso { background: #3a1d1c; color: #ff8f8f; }\n.ip-scuro .ip-chip-ambra { background: #3a2a14; color: #ffb35c; }\n.ip-scuro .ip-ordine-fattura { background: #10292c; color: #6fd6de; }\n.ip-scuro .ip-negativo { color: #ff7a7c !important; }\n\n/* iPhone (stile EasyStore): chip e icone color tinta, cifre con la tinta dell'app */\nhtml.ip-doc .ip-chip-stato:not(.ip-chip-rosso):not(.ip-chip-ambra):not(.ip-chip-pieno) { background: var(--es-tinta); color: var(--es-tinta-testo); }\nhtml.ip-doc .ip-ordine-icona { background: var(--es-tinta); color: var(--es-tinta-testo); }\nhtml.ip-doc .ip-giorno-totale { color: var(--es-tinta-testo); }\nhtml.ip-doc.ip-scuro .ip-chip-pieno { background: #00a0ac; }\n\n/* ====================================================================================\n   Altro: scheda utente, elenco delle funzioni e schermate di consultazione\n   ==================================================================================== */\n.ip-schede[data-scheda=\"altro\"] button[data-s=\"altro\"] { background: var(--ip-carta); color: var(--ip-testo); }\n.ip-schede button[hidden] { display: none; }\n@media (max-width: 430px) { .ip-schede button { font-size: 12px; } }\n\n.ip-utente { display: flex; align-items: center; gap: 14px; padding: 18px 18px 20px; margin-bottom: 4px; }\n.ip-utente-foto { flex: none; width: 52px; height: 52px; border-radius: 50%; object-fit: cover; }\n.ip-utente-testi { min-width: 0; display: flex; flex-direction: column; align-items: flex-start; gap: 8px; }\n.ip-utente-nome { font-size: 24px; font-weight: 800; letter-spacing: -.4px; line-height: 1.15; }\n.ip-utente-email { font-size: 13px; padding: 4px 10px; border-radius: 9px; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n\n.ip-riga-altro { min-height: 76px; align-items: center; }\n.ip-altro-icona { flex: none; width: 52px; height: 52px; border-radius: 15px; display: flex; align-items: center; justify-content: center; background: var(--ip-fondo); color: #007a85; }\n.ip-altro-icona svg { width: 26px; height: 26px; }\n.ip-riga-altro .ip-riga-nome { font-size: 17px; font-weight: 700; -webkit-line-clamp: 1; }\n.ip-riga-altro .ip-riga-sotto { font-size: 14px; }\n\n.ip-riga-natura { min-height: 72px; align-items: center; }\n.ip-riga-natura .ip-riga-nome { font-size: 16px; font-weight: 700; -webkit-line-clamp: 1; }\n.ip-natura-barra { display: block; height: 5px; margin-top: 7px; border-radius: 3px; background: var(--ip-eef0f3); overflow: hidden; }\n.ip-natura-barra i { display: block; height: 100%; border-radius: 3px; background: #007a85; }\n.ip-ordine-importo small { font-size: 12px; font-weight: 600; color: var(--ip-grigio); }\n\n.ip-sottotitolo { margin: 0 4px 10px; font-size: 14px; font-weight: 600; color: var(--ip-grigio); }\n.ip-nota-piccola { margin: 10px 6px; font-size: 13px; color: var(--ip-grigio); text-align: center; }\n.ip-zona > .ip-totale-ordini:first-child { margin-top: 12px !important; }\n.ip-dato-lungo { flex-direction: column; align-items: flex-start; gap: 4px; }\n.ip-dato-lungo .ip-dato-valore { text-align: left; white-space: normal; }\n\n/* Ricerca dentro la pagina (Prodotti venduti) */\n.ip-cerca-pagina { margin: 0; }\n.ip-cerca-pagina input {\n  width: 100%; box-sizing: border-box; height: 48px; padding: 0 16px; border: 0; border-radius: 14px;\n  background: var(--ip-carta); color: var(--ip-testo); font: inherit; font-size: 16px; outline: none;\n  box-shadow: inset 0 0 0 1px var(--ip-bordo);\n}\n.ip-cerca-pagina input:focus { box-shadow: inset 0 0 0 2px #007a85; }\n\n.ip-scuro .ip-altro-icona { background: var(--ip-e6e9ee); color: #6fd6de; }\n.ip-scuro .ip-natura-barra i { background: #00a0ac; }\nhtml.ip-doc .ip-altro-icona { background: var(--es-tinta); color: var(--es-tinta-testo); }\nhtml.ip-doc .ip-cerca-pagina input { box-shadow: var(--es-ombra); }\nhtml.ip-doc.ip-scuro .ip-cerca-pagina input { box-shadow: inset 0 0 0 1px rgba(255, 255, 255, .08); }\n\n/* Android: \"Altro\" \u00e8 il tasto con i tre puntini, stretto, come in EasyStore */\n.ip-schede .ip-scheda-altro { flex: 0 0 42px; display: flex; align-items: center; justify-content: center; }\n.ip-schede .ip-scheda-altro svg { width: 20px; height: 20px; }\n@media (max-width: 430px) { .ip-schede button:not(.ip-scheda-altro) { flex: 1 1 auto; } }\n\n/* ====================================================================================\n   Catalogo prodotti: ricerca con fotocamera, scheda completa, modifica dei codici\n   ==================================================================================== */\n.ip-cerca-con-tasto { display: flex; gap: 8px; }\n.ip-cerca-con-tasto input { flex: 1 1 auto; min-width: 0; }\n.ip-tasto-fotocamera {\n  flex: none; display: inline-flex; align-items: center; justify-content: center; gap: 6px;\n  width: 48px; height: 48px; padding: 0; border: 0; border-radius: 14px; background: #007a85; color: #fff; font: inherit; font-weight: 700; cursor: pointer;\n}\n.ip-tasto-fotocamera svg { width: 24px; height: 24px; }\n.ip-tasto-fotocamera:active { opacity: .8; }\n.ip-tasto-fotocamera-grande { width: auto; height: 68px; padding: 0 16px; border-radius: 16px; font-size: 16px; }\n.ip-codice-con-fotocamera { display: flex; gap: 10px; align-items: stretch; }\n.ip-codice-con-fotocamera .ip-campo-grande { flex: 1 1 auto; min-width: 0; margin: 0; }\n.ip-nota-sinistra { text-align: left; }\n.ip-nota-errore { color: #c13a3a; font-weight: 600; }\n\n.ip-articolo-testa { display: flex; gap: 14px; padding: 14px; margin-bottom: 12px; align-items: flex-start; }\n.ip-articolo-foto { flex: none; width: 96px; height: 96px; border-radius: 16px; overflow: hidden; }\n.ip-articolo-foto img { width: 100%; height: 100%; object-fit: contain; }\n.ip-articolo-testi { min-width: 0; display: flex; flex-direction: column; gap: 8px; }\n.ip-articolo-nome { font-size: 17px; font-weight: 700; line-height: 1.3; }\n.ip-tessere + .ip-etichetta, .ip-coppia + .ip-tessere { margin-top: 12px; }\n\n.ip-tasto-modifica { flex: none; margin-left: 10px; padding: 6px 12px; border: 0; border-radius: 10px; background: var(--ip-fondo); color: #007a85; font: inherit; font-size: 14px; font-weight: 700; cursor: pointer; }\n.ip-dati .ip-dato .ip-dato-valore { min-width: 0; }\n.ip-riservato { border: 0; padding: 0; background: none; font: inherit; color: inherit; font-weight: 700; cursor: pointer; }\n.ip-riservato .ip-riservato-valore { display: none; }\n.ip-riservato.ip-visibile .ip-riservato-valore { display: inline; }\n.ip-riservato.ip-visibile .ip-riservato-punti { display: none; }\n.ip-riservato-punti { letter-spacing: 2px; color: var(--ip-grigio); }\n.ip-giacenza { font-size: 18px; font-weight: 800; }\n.ip-zero { color: var(--ip-grigio); }\n.ip-positivo { color: #1f9d4d; font-weight: 700; }\n\n.ip-scuro .ip-tasto-fotocamera { background: #00a0ac; }\n.ip-scuro .ip-tasto-modifica { background: var(--ip-e6e9ee); color: #6fd6de; }\n.ip-scuro .ip-positivo { color: #5fe08a; }\n.ip-scuro .ip-nota-errore { color: #ff7a7c; }\nhtml.ip-doc .ip-tasto-modifica { background: var(--es-tinta); color: var(--es-tinta-testo); }\n\n/* Righe con il tasto Modifica: il valore resta allineato a destra, vicino al tasto */\n.ip-dato .ip-tasto-modifica { order: 3; }\n.ip-dato:has(.ip-tasto-modifica) .ip-dato-valore { margin-left: auto; text-align: right; }\n\n/* Tasto matita per modificare un codice */\n.ip-tasto-modifica { width: 38px; height: 38px; padding: 0; display: inline-flex; align-items: center; justify-content: center; border-radius: 12px; }\n.ip-tasto-modifica svg { width: 20px; height: 20px; pointer-events: none; }\n\n/* Scheda articolo divisa in sezioni */\n.ip-segmenti-articolo { margin: 14px 0 2px !important; }\n.ip-parte-articolo[hidden] { display: none; }\n\n/* Galleria immagini dell'articolo: striscia che scorre in orizzontale */\n.ip-galleria { display: flex; gap: 10px; overflow-x: auto; padding: 2px 2px 8px; scroll-snap-type: x mandatory; }\n.ip-galleria img { flex: none; width: 120px; height: 120px; object-fit: cover; border-radius: 14px; background: var(--ip-carta); scroll-snap-align: start; cursor: pointer; }\n\n/* EAN secondari: riga per aggiungerne uno nuovo in fondo ai codici */\n.ip-riga-aggiungi { min-height: 52px; gap: 10px; color: #007a85; font-weight: 700; font-size: 16px; border-top: 1px solid var(--ip-eef0f3); padding-left: 0; padding-right: 0; }\n.ip-aggiungi-piu { width: 30px; height: 30px; border-radius: 9px; display: inline-flex; align-items: center; justify-content: center; background: var(--ip-fondo); font-size: 20px; line-height: 1; }\n.ip-scuro .ip-riga-aggiungi { color: #6fd6de; }\nhtml.ip-doc .ip-aggiungi-piu { background: var(--es-tinta); color: var(--es-tinta-testo); }\n\n/* Campo dei codici: il codice deve vedersi sempre intero (anche un EAN di 13 cifre o un codice lungo) */\n.ip-campo-codice input { font-size: 22px !important; letter-spacing: .5px; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-variant-numeric: tabular-nums; min-width: 0; text-overflow: clip; }\n.ip-tasto-fotocamera-grande { width: 60px; padding: 0; flex: none; }\n.ip-tasto-fotocamera-grande svg { width: 28px; height: 28px; }\n\n/* Codici: valori sempre su una riga sola, in caratteri a larghezza fissa */\n.ip-dati-codici .ip-dato { gap: 10px; }\n.ip-dati-codici .ip-dato-nome { flex: 1 1 auto; min-width: 0; }\n.ip-dati-codici .ip-dato-valore { flex: none; white-space: nowrap; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: 15px; letter-spacing: .2px; }\n\n/* Ricerca sempre visibile mentre si scorre l'elenco (catalogo, prodotti venduti) */\n.ip-cerca-fissa { position: sticky; top: 0; z-index: 60; margin: -6px -4px 0; padding: 6px 4px 8px; background: var(--ip-fondo); }\n.ip-nativo .ip-cerca-fissa, html.ip-doc .ip-cerca-fissa { top: var(--ip-sopra, 0px); }\nhtml.ip-doc .ip-cerca-fissa { background: var(--es-fondo); }\n.ip-cerca-fissa + .ip-ordini-filtri { margin-top: 4px; }\n";
window.__IP_CFG={fotocamera:true,tastiera:true};
window.__IP_MODIFICA=true;
// Adatta il CRM all'app Info Prezzi. Viene eseguito a ogni pagina caricata.
// Il sito non viene toccato: tutto succede solo dentro l'app.
// window.__IP_CSS e window.__IP_CFG arrivano dall'app, IPApp è il ponte verso l'app.
(function () {
  if (!/(^|\.)dondiarreda\.it$/.test(location.hostname)) return;
  var corpo = document.body;
  if (!corpo || corpo.getAttribute('data-ip')) return;
  corpo.setAttribute('data-ip', '1');

  var cfg = window.__IP_CFG || {};
  var app = window.IPApp || null;

  // ---------- Tema chiaro o scuro ----------
  // 'auto' segue il dispositivo, 'scuro' e 'chiaro' lo forzano. Su iPhone la scelta si fa nelle impostazioni
  // native, che cambiano l'aspetto dell'intera app: qui basta seguire quello che dice il sistema.
  function temaScelto() {
    if (cfg.guscio === 'ios') return 'auto';
    try { var t = localStorage.getItem('ip-tema'); return t === 'scuro' || t === 'chiaro' ? t : 'auto'; } catch (e) { return 'auto'; }
  }
  function sistemaScuro() {
    try { if (app && app.scuro) return !!app.scuro(); } catch (e) { /* si prova con la pagina */ }
    return !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  }
  function applicaTema() {
    var t = temaScelto();
    document.documentElement.classList.toggle('ip-scuro', t === 'scuro' || (t === 'auto' && sistemaScuro()));
  }
  window.__ipTema = function (nuovo) {
    if (nuovo) { try { localStorage.setItem('ip-tema', nuovo); } catch (e) { /* resta quello di prima */ } }
    applicaTema();
  };
  applicaTema();
  try {
    var mediaScuro = window.matchMedia('(prefers-color-scheme: dark)');
    if (mediaScuro.addEventListener) mediaScuro.addEventListener('change', applicaTema); else if (mediaScuro.addListener) mediaScuro.addListener(applicaTema);
  } catch (e) { /* browser senza questa funzione */ }
  // Registro di quello che succede, per capire i difetti che si vedono solo sul dispositivo.
  // Si invia da Impostazioni, "Invia diagnostica".
  var registro = window.__ipRegistro = window.__ipRegistro || [];
  function annota(cosa) {
    try {
      var t = new Date();
      registro.push(('0' + t.getHours()).slice(-2) + ':' + ('0' + t.getMinutes()).slice(-2) + ':' + ('0' + t.getSeconds()).slice(-2) + '.' + ('00' + t.getMilliseconds()).slice(-3) + ' ' + cosa);
      if (registro.length > 400) registro.splice(0, registro.length - 400);
    } catch (e) { /* il registro non deve mai dare problemi */ }
  }
  if (!window.__ipRegistroAttivo) {
    window.__ipRegistroAttivo = true;
    window.addEventListener('error', function (e) { annota('ERRORE ' + (e.message || '') + ' @' + (e.filename || '').split('/').pop() + ':' + (e.lineno || '')); });
    window.addEventListener('unhandledrejection', function (e) { annota('ERRORE promessa ' + (e.reason && e.reason.message ? e.reason.message : e.reason)); });
    window.addEventListener('resize', function () { annota('finestra ' + window.innerWidth + 'x' + window.innerHeight); });
    document.addEventListener('focusin', function (e) { annota('fuoco su ' + (e.target.id || e.target.name || e.target.tagName)); }, true);
    document.addEventListener('focusout', function (e) { annota('fuoco perso da ' + (e.target.id || e.target.name || e.target.tagName)); }, true);
  }
  annota('pagina ' + location.pathname + ' ' + window.innerWidth + 'x' + window.innerHeight);
  function avvisa(evento) { annota('evento ' + evento); try { if (app) app.evento(evento); } catch (e) { /* fuori dall'app */ } }
  // Chiude la tastiera: toglie il fuoco al campo e lo dice all'app, che la nasconde davvero.
  function chiudiTastiera() {
    try {
      var attivo = document.activeElement;
      if (attivo && attivo.blur && /^(INPUT|TEXTAREA)$/.test(attivo.tagName)) attivo.blur();
    } catch (e) { /* non indispensabile */ }
    avvisa('senza-tastiera');
  }
  function prova(f) { try { f(); } catch (e) { /* se il sito cambia, la pagina resta quella originale */ } }
  function crea(tag, classe, html) {
    var el = document.createElement(tag);
    if (classe) el.className = classe;
    if (html) el.innerHTML = html;
    return el;
  }
  function quandoPronta(f) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', f);
    else f();
  }

  var stile = document.createElement('style');
  stile.textContent = window.__IP_CSS || '';
  (document.head || document.documentElement).appendChild(stile);

  var ICONA_CAMERA = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M5 7h1a2 2 0 0 0 2-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-14a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2"/>' +
    '<path d="M9 13a3 3 0 1 0 6 0a3 3 0 0 0-6 0"/></svg>';
  var ICONA_INGRANAGGIO = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37c1 .608 2.296.07 2.572-1.065"/>' +
    '<path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0"/></svg>';

  var ICONA_FRECCIA = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6l-6 6"/></svg>';

  // ---------- Schermata Impostazioni ----------
  // È una schermata dell'app a tutto schermo, disegnata qui sopra alla pagina.
  function apriImpostazioni() {
    if (document.getElementById('ip-imp')) return;
    chiudiTastiera();
    var stato = {};
    try { stato = JSON.parse(app.stato()); } catch (e) { stato = {}; }
    var iniziale = JSON.stringify([stato.fotocamera, stato.tastiera]);

    var schermata = crea('div', '');
    schermata.id = 'ip-imp';

    function sezione(titolo) {
      schermata.querySelector('.ip-imp-corpo').appendChild(crea('div', 'ip-imp-etichetta', titolo));
      var gruppo = crea('div', 'ip-imp-gruppo');
      schermata.querySelector('.ip-imp-corpo').appendChild(gruppo);
      return gruppo;
    }
    function testi(titolo, sotto) {
      var blocco = crea('div', 'ip-imp-testi');
      var t = crea('div', 'ip-imp-titolo'); t.textContent = titolo; blocco.appendChild(t);
      if (sotto) { var d = crea('div', 'ip-imp-sotto'); d.textContent = sotto; blocco.appendChild(d); }
      return blocco;
    }
    function interruttore(gruppo, chiave, titolo, sotto) {
      var riga = crea('button', 'ip-imp-riga');
      riga.type = 'button';
      riga.appendChild(testi(titolo, sotto));
      var leva = crea('span', 'ip-imp-leva' + (stato[chiave] ? ' ip-attiva' : ''));
      riga.appendChild(leva);
      riga.addEventListener('click', function () {
        stato[chiave] = !stato[chiave];
        leva.classList.toggle('ip-attiva', stato[chiave]);
        try { app.imposta(chiave, stato[chiave]); } catch (e) { /* fuori dall'app */ }
        if (chiave === 'accesso') aggiornaUtente();
      });
      gruppo.appendChild(riga);
    }
    function azione(gruppo, titolo, sotto, fai, classe) {
      var riga = crea('button', 'ip-imp-riga' + (classe ? ' ' + classe : ''));
      riga.type = 'button';
      riga.appendChild(testi(titolo, sotto));
      riga.appendChild(crea('span', 'ip-imp-freccia', ICONA_FRECCIA));
      riga.addEventListener('click', fai);
      gruppo.appendChild(riga);
    }
    function valore(gruppo, titolo, testo) {
      var riga = crea('div', 'ip-imp-riga');
      riga.appendChild(testi(titolo));
      var v = crea('span', 'ip-imp-valore'); v.textContent = testo;
      riga.appendChild(v);
      gruppo.appendChild(riga);
      return v;
    }

    var testa = crea('div', 'ip-imp-testa');
    var indietro = crea('button', '', ICONA_INDIETRO);
    indietro.type = 'button';
    indietro.setAttribute('aria-label', 'Indietro');
    testa.appendChild(indietro);
    testa.appendChild(crea('div', 'ip-bar-titolo', 'Impostazioni'));
    schermata.appendChild(testa);
    schermata.appendChild(crea('div', 'ip-imp-corpo'));

    var g = sezione('Lettura dei codici');
    interruttore(g, 'fotocamera', 'Lettura da fotocamera', 'Se spenta, i codici si leggono solo con il lettore o scrivendoli nel campo.');

    interruttore(g, 'suono', 'Emetti un suono se articolo non trovato', 'Segnale acustico e vibrazione quando il codice non viene trovato. Vale anche per il segnale breve di conferma quando un articolo entra in un carrello.');

    g = sezione('Account');
    interruttore(g, 'accesso', 'Accesso automatico', 'Quando il CRM chiude la sessione l\'app rientra da sola.');
    var utente = valore(g, 'Utente salvato', '');
    function aggiornaUtente() {
      utente.textContent = stato.accesso ? (stato.utente || 'Al prossimo accesso') : 'Nessuno';
    }
    aggiornaUtente();
    azione(g, 'Esci dall\'account', null, function () { foglio.classList.add('ip-aperto'); }, 'ip-imp-rossa');

    g = sezione('Dark Mode');
    var rigaTema = crea('div', 'ip-imp-riga ip-imp-tema');
    rigaTema.appendChild(testi('Dark Mode', 'Auto segue l\'impostazione del dispositivo.'));
    var scelteTema = crea('div', 'ip-segmenti');
    [['auto', 'Auto'], ['scuro', 'On'], ['chiaro', 'Off']].forEach(function (v) {
      var b = crea('button', temaScelto() === v[0] ? 'ip-scelto' : '');
      b.type = 'button';
      b.textContent = v[1];
      b.addEventListener('click', function () {
        window.__ipTema(v[0]);
        [].forEach.call(scelteTema.children, function (altro) { altro.classList.toggle('ip-scelto', altro === b); });
      });
      scelteTema.appendChild(b);
    });
    rigaTema.appendChild(scelteTema);
    g.appendChild(rigaTema);

    g = sezione('Schermo e tastiera');
    interruttore(g, 'tastiera', 'Tastiera subito aperta', 'In Modifica prezzo e Modifica quantità il campo è già pronto per scrivere.');
    interruttore(g, 'schermo', 'Schermo sempre acceso', 'Utile sui dispositivi fissi o in carica.');

    g = sezione('App');
    interruttore(g, 'aggiornamenti', 'Aggiornamenti all\'avvio', 'A ogni apertura l\'app controlla se è uscita una versione nuova.');
    azione(g, 'Controlla aggiornamenti adesso', null, function () { try { app.aggiorna(); } catch (e) { /* fuori dall'app */ } });
    azione(g, 'Ricarica la pagina', null, function () { location.reload(); });
    azione(g, 'Invia diagnostica', 'Se qualcosa non va, mandami questo registro: dice cosa è successo sul dispositivo.', function () {
      var testo = 'Dondi Emporio ' + (stato.versione || '') + '\n' + navigator.userAgent + '\n' +
        'schermo ' + window.innerWidth + 'x' + window.innerHeight + ' densità ' + window.devicePixelRatio + '\n' +
        'impostazioni ' + JSON.stringify({ fotocamera: stato.fotocamera, accesso: stato.accesso, tastiera: stato.tastiera, schermo: stato.schermo, suono: stato.suono }) + '\n\n' +
        registro.join('\n');
      try { app.condividi(testo); } catch (e) { /* fuori dall'app */ }
    });
    valore(g, 'Versione', stato.versione || '');

    // Conferma di uscita, disegnata dall'app e non dal browser.
    var foglio = crea('div', 'ip-imp-foglio');
    var carta = crea('div', 'ip-imp-carta');
    carta.appendChild(crea('div', 'ip-imp-carta-titolo', 'Uscire dall\'account?'));
    carta.appendChild(crea('div', 'ip-imp-carta-testo', 'L\'app dimentica le credenziali salvate e torna alla pagina di accesso.'));
    var esci = crea('button', 'ip-foglio-ok', 'Esci');
    esci.type = 'button';
    esci.addEventListener('click', function () { try { app.esci(); } catch (e) { location.href = '/logout'; } });
    var annulla = crea('button', 'ip-foglio-no', 'Annulla');
    annulla.type = 'button';
    annulla.addEventListener('click', function () { foglio.classList.remove('ip-aperto'); });
    carta.appendChild(esci);
    carta.appendChild(annulla);
    foglio.appendChild(carta);
    foglio.addEventListener('click', function (e) { if (e.target === foglio) foglio.classList.remove('ip-aperto'); });
    schermata.appendChild(foglio);

    function chiudi() {
      window.removeEventListener('popstate', chiudi);
      if (!schermata.parentNode) return;
      schermata.parentNode.removeChild(schermata);
      corpo.classList.remove('ip-imp-aperta');
      if (JSON.stringify([stato.fotocamera, stato.tastiera]) !== iniziale) location.reload();
      else if (window.__ipFuoco) setTimeout(window.__ipFuoco, 100);
    }
    // Il tasto indietro di Android chiude la schermata invece di cambiare pagina.
    try { history.pushState({ ipImpostazioni: true }, ''); } catch (e) { /* non indispensabile */ }
    window.addEventListener('popstate', chiudi);
    indietro.addEventListener('click', function () {
      try { history.back(); } catch (e) { chiudi(); }
    });

    corpo.appendChild(schermata);
    corpo.classList.add('ip-imp-aperta');
    if (document.activeElement && document.activeElement.blur) document.activeElement.blur();
  }

  var ICONA_INDIETRO = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M5 12h14"/><path d="M5 12l6 6"/><path d="M5 12l6-6"/></svg>';

  // Barra dell'app al posto dell'intestazione del sito: titolo, freccia indietro e impostazioni.
  function barraApp(titolo, indietro) {
    if (cfg.guscio === 'ios') {
      // Su iPhone la barra è quella nativa: la pagina del sito comunica solo titolo e tasto indietro.
      corpo.classList.add('ip-nativo-pagina');
      prova(function () {
        var collegamenti = document.querySelectorAll('.console-page-body a');
        for (var i = 0; i < collegamenti.length; i++) {
          if (/^\s*Torna\b/.test(collegamenti[i].textContent)) collegamenti[i].style.display = 'none';
        }
      });
      var racconta = function () {
        try {
          window.webkit.messageHandlers.ip.postMessage({ t: 'vista', x: JSON.stringify({
            radice: false, scheda: 'prodotti', titolo: titolo, indietro: true, segnaposto: '', azioni: [], foglio: false }) });
        } catch (e) { /* non siamo nell'app */ }
      };
      window.__ipNativo = function (cosa, valore) {
        if (cosa === 'indietro') { if (indietro) location.href = indietro; else history.back(); }
        else if (cosa === 'margini') { ['sopra', 'sotto', 'sinistra', 'destra'].forEach(function (lato) { corpo.style.setProperty('--ip-' + lato, (valore[lato] || 0) + 'px'); }); }
        else if (cosa === 'racconta') racconta();
      };
      racconta();
      return;
    }
    prova(function () {
      var barra = crea('div', indietro ? 'ip-con-indietro' : '');
      barra.id = 'ip-bar';
      if (indietro) {
        var freccia = crea('a', '', ICONA_INDIETRO);
        freccia.href = indietro;
        freccia.setAttribute('aria-label', 'Indietro');
        barra.appendChild(freccia);
      }
      var testo = crea('div', 'ip-bar-titolo');
      testo.textContent = titolo;
      barra.appendChild(testo);
      var tasto = crea('button', '', ICONA_INGRANAGGIO);
      tasto.type = 'button';
      tasto.setAttribute('aria-label', 'Impostazioni');
      tasto.addEventListener('click', apriImpostazioni);
      barra.appendChild(tasto);
      corpo.appendChild(barra);
    });
  }

  function ingranaggio() {
    prova(function () {
      var tasto = crea('button', '', ICONA_INGRANAGGIO);
      tasto.id = 'ip-impostazioni';
      tasto.type = 'button';
      tasto.setAttribute('aria-label', 'Impostazioni');
      tasto.addEventListener('click', apriImpostazioni);
      corpo.appendChild(tasto);
    });
  }

  // ---------- Pagina di accesso ----------
  // Senza il menu del CRM siamo fuori: login, recupero password e simili.
  if (!document.getElementById('console-aside')) {
    quandoPronta(function () {
      if (document.getElementById('console-aside')) return;
      ingranaggio();
      // Nella pagina di accesso il campo password non c'è subito: lo crea il sito un attimo dopo
      // il caricamento. Lo aspetto, altrimenti l'app non salva le credenziali e non rientra da sola.
      function campoPassword() {
        return document.querySelector('input[type="password"]') || document.querySelector('form input[name="password"]');
      }
      var tentativi = 0;
      (function aspetta() {
        var password = campoPassword();
        if (!password || !password.form) {
          tentativi++;
          if (tentativi < 100) setTimeout(aspetta, 150);
          else annota('accesso: campo password non trovato dopo 15 secondi');
          return;
        }
        annota('accesso: campo password trovato al tentativo ' + tentativi);
        var modulo = password.form;
        var utente = modulo.querySelector('input[type="email"], input[type="text"], input:not([type])');
        prova(function () {
          // "Ricordami" sempre attivo, così il CRM scollega il più tardi possibile.
          var ricorda = modulo.querySelectorAll('input[type="checkbox"]');
          if (ricorda.length === 1 && !ricorda[0].checked) ricorda[0].click();
        });
        // Le credenziali vengono passate all'app in più momenti, perché non tutti i moduli
        // avvisano allo stesso modo quando vengono inviati. Il campo viene riletto ogni volta,
        // perché il sito può sostituirlo (per esempio con il tasto che mostra la password).
        var passa = function () {
          try {
            var adesso = campoPassword() || password;
            if (app && adesso && adesso.value) app.credenziali(utente ? utente.value : '', adesso.value);
          } catch (e) { /* fuori dall'app */ }
        };
        modulo.addEventListener('submit', passa, true);
        modulo.addEventListener('click', function (e) {
          if (e.target && e.target.closest && e.target.closest('button[type="submit"], input[type="submit"]')) passa();
        }, true);
        modulo.addEventListener('change', passa, true);
        modulo.addEventListener('keydown', function (e) { if (e.key === 'Enter') passa(); }, true);
        window.addEventListener('pagehide', passa);
        avvisa('login');
      })();
    });
    return;
  }

  // ====================================================================================
  // App vera e propria per Elenco e Scheda prodotto.
  // Il sito resta nascosto e fa da fonte dei dati: l'app chiede le pagine in sottofondo,
  // ne legge i valori e disegna le proprie schermate, senza ricaricare la pagina.
  // ====================================================================================
  function avviaApp(tipo, m, percorso) {
    var IC = {
      camera: ICONA_CAMERA,
      cerca: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0-14 0"/><path d="M21 21l-6-6"/></svg>',
      codice: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7v-1a2 2 0 0 1 2-2h2"/><path d="M4 17v1a2 2 0 0 0 2 2h2"/><path d="M16 4h2a2 2 0 0 1 2 2v1"/><path d="M16 20h2a2 2 0 0 0 2-2v-1"/><path d="M8 8v8"/><path d="M11 8v8"/><path d="M14 8v8"/><path d="M17 8v8"/></svg>',
      occhio: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0"/><path d="M21 12c-2.4 4-5.4 6-9 6c-3.6 0-6.6-2-9-6c2.4-4 5.4-6 9-6c3.6 0 6.6 2 9 6"/></svg>',
      avviso: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8v5"/><path d="M12 16.5v.01"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0"/></svg>',
      foto: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 8h.01"/><path d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-12a3 3 0 0 1-3-3z"/><path d="M3 16l5-5c.9-.9 2.1-.9 3 0l5 5"/><path d="M14 14l1-1c.9-.9 2.1-.9 3 0l3 3"/></svg>',
      fatto: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5l10-10"/></svg>',
      meno: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M5 12h14"/></svg>',
      piu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>',
      cestino: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"/></svg>',
      persona: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"/><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/></svg>',
      matita: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h4l10.5-10.5a2.8 2.8 0 1 0-4-4l-10.5 10.5v4"/><path d="M13.5 6.5l4 4"/></svg>'
    };

    // ---------- Lettura dei dati dalle pagine del sito ----------
    function pulisci(t) { return (t || '').replace(/\s+/g, ' ').trim(); }

    function leggiProdotto(doc, id) {
      var radice = doc.querySelector('.console-page-body') || doc.body;
      var valori = {};
      var righe = radice.querySelectorAll('p');
      for (var i = 0; i < righe.length; i++) {
        var p = righe[i], n = p.nextElementSibling;
        if (/text-text-muted/.test(p.className) && n && n.tagName === 'P' && !/text-text-muted/.test(n.className)) {
          var chiave = pulisci(p.textContent);
          if (!(chiave in valori)) valori[chiave] = pulisci(n.textContent);
        }
      }
      if (!valori['Descrizione'] && !valori['Codice']) return null;
      var magazzini = [];
      var blocchi = radice.querySelectorAll('.divide-y > div');
      for (var b = 0; b < blocchi.length; b++) {
        var testi = blocchi[b].querySelectorAll('p');
        var quanti = blocchi[b].querySelector('span');
        if (testi.length && quanti) {
          magazzini.push({ nome: pulisci(testi[0].textContent), nota: testi[1] ? pulisci(testi[1].textContent) : '', quantita: pulisci(quanti.textContent) });
        }
      }
      var statistiche = [];
      var numeri = radice.querySelectorAll('.console-card .tnum');
      for (var s = 0; s < numeri.length; s++) {
        var cella = numeri[s].closest('.border-l') || numeri[s].parentElement.parentElement.parentElement;
        var nome = cella ? cella.querySelector('.flex-1') : null;
        statistiche.push({ nome: nome ? pulisci(nome.textContent) : '', valore: pulisci(numeri[s].textContent) });
      }
      var foto = radice.querySelector('img[src]');
      function link(fine) { return !!radice.querySelector('[href$="/' + id + '/' + fine + '"]'); }
      return {
        id: id,
        nome: valori['Descrizione'] || valori['Codice'],
        codice: valori['Codice'] || '',
        ean: valori['Ean'] || '',
        fornitore: valori['Fornitore'] || '',
        categoria: valori['Categoria'] || '',
        sottocategoria: valori['Sottocategoria'] || '',
        prezzo: valori['Prezzo finale IC'] || valori['Prezzo finale'] || '',
        listino: valori['Prezzo di listino IC'] || '',
        prezzoBase: valori['Prezzo IC'] || '',
        scontato: valori['Prezzo scontato IC'] || '',
        costo: valori['Costo'] || '',
        giacenza: (valori['Giacenza complessiva'] || valori['Giacenza'] || '').replace(/\s*pz$/i, ''),
        magazzini: magazzini,
        statistiche: statistiche,
        foto: foto ? foto.getAttribute('src') : '',
        puoPrezzo: link('price'), puoQuantita: link('quantity'), puoFoto: link('image')
      };
    }

    function leggiRecenti(doc) {
      var lista = [];
      var righe = doc.querySelectorAll('.console-page-body a[href^="/product/info/"]');
      for (var i = 0; i < righe.length; i++) {
        var id = (righe[i].getAttribute('href').match(/\/product\/info\/(\d+)/) || [])[1];
        if (!id) continue;
        var foto = righe[i].querySelector('img[src]');
        var nome = righe[i].querySelector('.truncate');
        var codice = righe[i].querySelector('.font-mono');
        lista.push({ id: id, nome: nome ? pulisci(nome.textContent) : '', codice: codice ? pulisci(codice.textContent) : '', foto: foto ? foto.getAttribute('src') : '' });
      }
      return lista;
    }

    function numero(testo) {
      var n = parseFloat(String(testo).replace(/[^0-9,.-]/g, '').replace(/\./g, '').replace(',', '.'));
      return isNaN(n) ? null : n;
    }

    function chiedi(indirizzo, corpoPost) {
      var opzioni = { credentials: 'same-origin' };
      if (corpoPost) {
        opzioni.method = 'POST';
        opzioni.headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
        opzioni.body = corpoPost;
      }
      return fetch(indirizzo, opzioni).then(function (r) {
        return r.text().then(function (testo) {
          var arrivo = new URL(r.url, location.href).pathname.replace(/\/+$/, '');
          return { percorso: arrivo, doc: new DOMParser().parseFromString(testo, 'text/html') };
        });
      });
    }

    // ---------- Struttura dell'app ----------
    var sito = { campo: document.getElementById('form_search'), camera: document.querySelector('button.camera'), scanner: document.getElementById('code-scanner') };
    // Su iPhone la lettura dei codici la fa l'app con il lettore di sistema: non serve il tasto fotocamera del sito.
    var conCamera = cfg.fotocamera !== false && (cfg.guscio === 'ios' || !!sito.camera);
    var memoria = {};          // prodotti già letti in questa sessione
    var recenti = [];
    var corrente = null;       // prodotto mostrato, null = elenco
    var modifica = null;       // 'prezzo' o 'quantita' quando è aperta una schermata di modifica
    var moduli = {};           // moduli di modifica già scaricati, per aprirli all'istante
    var dopoRitorno = null;
    // Le schermate di modifica dell'app sono state provate sul CRM vero (articolo PROVA RESO).
    // Con window.__IP_MODIFICA = false si torna alle pagine di modifica del sito.
    var MODIFICA_IN_APP = window.__IP_MODIFICA !== false;
    var richiesta = 0;

    var radice = crea('div', '');
    radice.id = 'ip-root';
    radice.innerHTML =
      '<header class="ip-testa">' +
        '<div class="ip-testa-riga">' +
          '<button type="button" class="ip-tondo ip-indietro" aria-label="Indietro">' + ICONA_INDIETRO + '</button>' +
          '<div class="ip-testa-titolo">Dondi Emporio</div>' +
          '<div class="ip-schede" data-scheda="prodotti"><button type="button" data-s="vendite">Dashboard</button><button type="button" data-s="ordini">Vendite</button><button type="button" data-s="prodotti">Prodotti</button><button type="button" data-s="carrelli">Carrelli</button><button type="button" data-s="altro" class="ip-scheda-altro" aria-label="Altro"><svg viewBox="0 0 24 24" fill="currentColor" style="pointer-events:none"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg></button></div>' +
          '<button type="button" class="ip-tondo ip-colonna-tasto" aria-label="Mostra o nascondi l\'elenco"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><rect x="3" y="4.5" width="18" height="15" rx="3"/><path d="M9.5 4.5v15"/></svg></button>' +
          '<button type="button" class="ip-tondo ip-aggiorna" aria-label="Aggiorna"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 11a8 8 0 1 0-2.3 5.7"/><path d="M20 4v7h-7"/></svg></button>' +
          '<button type="button" class="ip-tondo ip-ingranaggio" aria-label="Impostazioni">' + ICONA_INGRANAGGIO + '</button>' +
        '</div>' +
        '<form class="ip-ricerca" autocomplete="off">' +
          '<span class="ip-ricerca-icona">' + IC.codice + '</span>' +
          '<input id="ip-campo" type="search" enterkeyhint="search" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Codice o EAN">' +
          '<button type="submit" class="ip-ricerca-vai" aria-label="Cerca">' + IC.cerca + '</button>' +
        '</form>' +
      '</header>' +
      '<div class="ip-avviso" role="status"></div>' +
      '<aside class="ip-colonna" aria-label="Elenco"></aside>' +
      '<main class="ip-vista"></main>' +
      '<footer class="ip-azioni"></footer>';
    var vista = radice.querySelector('.ip-vista');
    var azioni = radice.querySelector('.ip-azioni');
    var titolo = radice.querySelector('.ip-testa-titolo');
    var schede = radice.querySelector('.ip-schede');
    var tastoIndietro = radice.querySelector('.ip-indietro');
    var campo = radice.querySelector('#ip-campo');
    var avviso = radice.querySelector('.ip-avviso');
    var colonna = radice.querySelector('.ip-colonna');

    // Il lettore a fotocamera del sito resta quello originale: lo porto fuori dalla parte nascosta
    // e quando legge un codice lo passo alla ricerca dell'app invece di ricaricare la pagina.
    prova(function () {
      if (sito.scanner) corpo.appendChild(sito.scanner);
      var avvisiSito = document.getElementById('toast-container');
      if (avvisiSito) corpo.appendChild(avvisiSito.parentElement && avvisiSito.parentElement.children.length === 1 ? avvisiSito.parentElement : avvisiSito);
      if (sito.campo && sito.campo.form) {
        sito.campo.form.submit = function () {
          var letto = sito.campo.value;
          sito.campo.value = '';
          instrada(letto);
        };
      }
    });
    corpo.classList.add('ip-spa');
    corpo.appendChild(radice);

    // ---------- Guscio nativo (iPhone) ----------
    // Su iPhone barre, ricerca e tasti li disegna l'app con i materiali di iOS: la pagina mostra solo
    // il contenuto e racconta all'app in che schermata si trova. Su Android questo blocco non fa nulla.
    // Su iPhone fogli, conferme e scelte sono quelli di sistema (in vetro): la pagina li chiede all'app
    // e riceve la risposta in window.__ipRisposta. Su Android restano disegnati dalla pagina.
    var NATIVO = cfg.guscio === 'ios';
    var attese = {}, prossimaAttesa = 1;
    function chiediNativo(dati, risposta) {
      dati.id = prossimaAttesa++;
      attese[dati.id] = risposta;
      try { window.webkit.messageHandlers.ip.postMessage({ t: 'foglio', x: JSON.stringify(dati) }); }
      catch (e) { delete attese[dati.id]; risposta(null); }
    }
    window.__ipRisposta = function (id, valore) {
      var risposta = attese[id];
      delete attese[id];
      if (risposta) risposta(valore);
    };
    if (cfg.guscio === 'ios') {
      radice.classList.add('ip-nativo');
      // Su iPhone scorre l'intero documento, non un riquadro interno: così lo scorrimento è quello di iOS
      // e l'app può appoggiare sopra il contenuto i suoi selettori veri, che scorrono insieme alla pagina.
      document.documentElement.classList.add('ip-doc');
      try {
        Object.defineProperty(vista, 'scrollTop', {
          configurable: true,
          get: function () { return window.pageYOffset || 0; },
          set: function (v) { window.scrollTo(0, v); }
        });
      } catch (e) { /* resta lo scorrimento interno */ }
      // Selettori (segmenti e interruttori): la pagina lascia lo spazio e dice all'app dove sono;
      // l'app ci mette sopra i controlli di sistema in Liquid Glass. Un tocco torna qui come clic.
      var selettoriVivi = [], ultimiSelettori = '';
      var raccontaSelettori = function () {
        var trovati = vista.querySelectorAll('.ip-segmenti, .ip-riga-iva, .ip-riga-menu');
        var lista = [];
        selettoriVivi = [];
        for (var i = 0; i < trovati.length; i++) {
          var e = trovati[i], leva = e.classList.contains('ip-riga-iva'), menu = e.classList.contains('ip-riga-menu');
          var r = (leva || menu ? e.querySelector('i') : e).getBoundingClientRect();
          if (!r.width || !r.height) continue;
          var voce = { n: selettoriVivi.length, tipo: leva ? 'leva' : (menu ? 'menu' : 'segmenti'), x: Math.round(r.left + window.pageXOffset), y: Math.round(r.top + window.pageYOffset), w: Math.round(r.width), h: Math.round(r.height) };
          if (leva) { voce.acceso = e.classList.contains('ip-acceso'); voce.voci = []; voce.scelto = 0; }
          else if (menu) { voce.voci = e.__ipVoci.map(function (o) { return pulisci(o.t); }); voce.scelto = e.__ipScelto; voce.acceso = false; }
          else {
            voce.voci = []; voce.scelto = -1; voce.acceso = false;
            for (var k = 0; k < e.children.length; k++) { voce.voci.push(pulisci(e.children[k].textContent)); if (e.children[k].classList.contains('ip-scelto')) voce.scelto = k; }
          }
          selettoriVivi.push(e);
          lista.push(voce);
        }
        var testo = JSON.stringify(lista);
        if (testo === ultimiSelettori) return;
        ultimiSelettori = testo;
        try { window.webkit.messageHandlers.ip.postMessage({ t: 'selettori', x: testo }); } catch (e2) { /* non siamo nell'app */ }
      };
      window.addEventListener('resize', function () { setTimeout(raccontaSelettori, 60); });
      try { new ResizeObserver(function () { raccontaSelettori(); }).observe(vista); } catch (e) { /* si aggiorna comunque a ogni ridisegno */ }
      // Quando cambia solo lo spazio in alto (le barre di iOS si accorciano scorrendo) il contenuto si sposta
      // senza che la vista cambi misura: né il ResizeObserver né il MutationObserver se ne accorgono e i selettori
      // restano dove erano. Si ricalcola dopo ogni cambio di margini e alla fine di ogni scorrimento.
      var selettoriDopoDisegno = function () { requestAnimationFrame(function () { requestAnimationFrame(raccontaSelettori); }); };
      var attesaScorrimento = null;
      window.addEventListener('scroll', function () { clearTimeout(attesaScorrimento); attesaScorrimento = setTimeout(raccontaSelettori, 120); }, { passive: true });
      var ultimoRacconto = '';
      var racconta = function () {
        var tasti = [];
        for (var i = 0; i < azioni.children.length; i++) {
          var b = azioni.children[i];
          var forte = b.querySelector('b'), piccolo = b.querySelector('small');
          tasti.push({
            t: pulisci(forte ? forte.textContent : b.textContent), s: piccolo ? pulisci(piccolo.textContent) : '',
            tipo: b.classList.contains('ip-azione-scan') ? 'scan' : (b.classList.contains('ip-azione-salva') ? 'salva' : 'normale'), off: !!b.disabled
          });
        }
        var racconto = JSON.stringify({
          radice: radice.classList.contains('ip-radice'), scheda: schede.getAttribute('data-scheda') || 'prodotti', titolo: titolo.textContent || '',
          indietro: radice.classList.contains('ip-su-prodotto'),
          // Nelle schermate dove si compila un modulo il campo del codice non serve e viene tolto.
          segnaposto: (radice.classList.contains('ip-in-modifica') || vistaCarrelli === 'nuovo' || vistaCarrelli === 'cliente' || vistaCarrelli === 'vendite' || vistaCarrelli === 'scarico' || vistaCarrelli === 'ordine' || vistaCarrelli === 'altro' || vistaCarrelli === 'altro-voce') ? '' : (campo.getAttribute('placeholder') || ''),
          azioni: radice.classList.contains('ip-senza-azioni') ? [] : tasti, foglio: !!radice.querySelector('.ip-foglio, .ip-visore'),
          // Foto ingrandita: schermata immersiva, l'app nasconde barre e tasti finché non si tocca la foto.
          visore: !!radice.querySelector('.ip-visore'),
          colonna: radice.classList.contains('ip-colonna-possibile') ? (radice.classList.contains('ip-colonna-chiusa') ? 'chiusa' : 'aperta') : null,
          sezioni: sezioniVisibili(),
          vendite: vistaCarrelli === 'vendite' ? { periodo: vendite.periodo, iva: vendite.iva, sedi: vendite.sedi.length, cassa: !!vendite.stampante, confronto: confrontoValido(), confronti: confrontiPossibili() } : null
        });
        raccontaSelettori();
        if (racconto === ultimoRacconto) return;
        ultimoRacconto = racconto;
        try { window.webkit.messageHandlers.ip.postMessage({ t: 'vista', x: racconto }); } catch (e) { /* non siamo nell'app */ }
      };
      window.__ipRaccontaOra = function () { racconta(); };
      var attesaRacconto = null;
      new MutationObserver(function () { clearTimeout(attesaRacconto); attesaRacconto = setTimeout(racconta, 30); })
        .observe(radice, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ['class', 'disabled', 'data-scheda', 'placeholder'] });
      window.__ipNativo = function (cosa, valore) {
        if (cosa === 'indietro') tastoIndietro.click();
        else if (cosa === 'scheda') {
          // Toccando di nuovo la sezione già aperta si torna alla sua prima schermata (con i filtri che c'erano).
          if (valore === schede.getAttribute('data-scheda')) { if (!radice.classList.contains('ip-radice')) vaiASezione(valore); }
          else { var s = schede.querySelector('[data-s="' + valore + '"]'); if (s) s.click(); }
        }
        else if (cosa === 'azione') { var a = azioni.children[valore]; if (a && !a.disabled) a.click(); }
        else if (cosa === 'filtro') { campo.value = valore; campo.dispatchEvent(new Event('input', { bubbles: true })); }
        else if (cosa === 'cerca') { campo.value = valore; radice.querySelector('.ip-ricerca').dispatchEvent(new Event('submit', { cancelable: true })); }
        else if (cosa === 'margini') { ['sopra', 'sotto', 'sinistra', 'destra'].forEach(function (lato) { radice.style.setProperty('--ip-' + lato, (valore[lato] || 0) + 'px'); }); selettoriDopoDisegno(); }
        else if (cosa === 'colonna') { alternaColonna(); }
        else if (cosa === 'racconta') { ultimoRacconto = ''; ultimiSelettori = ''; racconta(); }
        else if (cosa === 'codice') { instrada(String(valore)); }
        else if (cosa === 'selettore') {
          var scelto = selettoriVivi[valore.n];
          if (scelto && scelto.classList.contains('ip-riga-menu')) scelto.__ipScegli(valore.voce);
          else if (scelto && scelto.classList.contains('ip-riga-iva')) scelto.click();
          else if (scelto && scelto.children[valore.voce]) scelto.children[valore.voce].click();
        }
        else if (cosa === 'vendite' && vistaCarrelli === 'vendite') {
          if (valore.periodo) { vendite.periodo = valore.periodo; caricaVendite(); }
          else if (valore.iva) { vendite.iva = valore.iva; caricaVendite(); }
          else if (valore.confronto) { vendite.confronto = valore.confronto; caricaVendite(); }
          else if (valore.apri === 'date') foglioDate();
          else if (valore.apri === 'sedi') scegliSedi();
          else if (valore.apri === 'cassa') scegliCassa();
        }
      };
      setTimeout(racconta, 0);
    }

    // Tasto Aggiorna (barra di iPhone e testata di Android): aggiorna dal CRM la schermata che si sta guardando.
    // Restituisce true se è partito l'aggiornamento, false se qui non c'è niente da aggiornare (moduli in compilazione).
    function aggiornaVista() {
      if (document.getElementById('ip-imp') || radice.querySelector('.ip-foglio, .ip-visore')) return false;
      nascondiAvviso();
      if (vistaCarrelli === 'vendite') { caricaVendite(); return true; }
      if (vistaCarrelli === 'ordini') { caricaOrdini(true); return true; }
      if (vistaCarrelli === 'ordine' && ordini.aperto) { apriOrdine(ordini.aperto.id, false, true, ordini.aperto.daAltro); return true; }
      if (vistaCarrelli === 'altro') { disegnaAltro(); return true; }
      if (vistaCarrelli === 'altro-voce') { aggiornaVoceAltro(); return true; }
      if (vistaCarrelli === 'elenco') { caricaCarrelli(); return true; }
      if (vistaCarrelli === 'carrello' && carrello) { var idCarrello = carrello.id; carrello = null; apriCarrello(idCarrello, false); return true; }
      if (vistaCarrelli) return false;
      if (modifica) return false;
      if (corrente) { apri(corrente.id); return true; }
      var mia = ++richiesta;
      chiedi('/product/info').then(function (r) {
        if (mia !== richiesta || corrente || vistaCarrelli) return;
        if (/\/login$/.test(r.percorso)) { location.reload(); return; }
        var letti = leggiRecenti(r.doc);
        if (letti.length) recenti = letti;
        mostraElenco();
      }, function () {
        if (mia !== richiesta) return;
        mostraAvviso('Connessione assente', 'Controlla la rete e riprova.');
        avvisa('errore');
      });
      return true;
    }
    window.__ipAggiorna = aggiornaVista;

    radice.querySelector('.ip-colonna-tasto').addEventListener('click', function () { alternaColonna(); });
    // Android: tasto Aggiorna nella testata, accanto all'ingranaggio. Gira mentre aggiorna; nei moduli non fa nulla.
    var tastoAggiorna = radice.querySelector('.ip-aggiorna');
    tastoAggiorna.addEventListener('click', function () {
      if (tastoAggiorna.classList.contains('ip-gira')) return;
      if (!aggiornaVista()) { avvisa('errore'); return; }
      tastoAggiorna.classList.add('ip-gira');
      setTimeout(function () { tastoAggiorna.classList.remove('ip-gira'); }, 900);
    });
    // ---------- Schermo largo: elenco a sinistra, dettaglio a destra ----------
    // Quando lo spazio supera i 700 punti (iPhone Duo aperto, tablet) la scheda prodotto e il carrello mostrano
    // accanto l'elenco da cui si arriva, con la voce aperta evidenziata. Decide solo la larghezza, mai il dispositivo.
    var colonnaFirma = '';
    // La colonna si può chiudere e riaprire (tasto Elenco); la scelta resta ricordata su questo dispositivo.
    var colonnaChiusa = false;
    try { colonnaChiusa = localStorage.getItem('ip-colonna-chiusa') === '1'; } catch (e) { /* resta aperta */ }
    function alternaColonna() {
      colonnaChiusa = !colonnaChiusa;
      try { localStorage.setItem('ip-colonna-chiusa', colonnaChiusa ? '1' : '0'); } catch (e) { /* non indispensabile */ }
      colonnaFirma = '';
      aggiornaColonna();
    }
    function aggiornaColonna() {
      var larga = window.innerWidth >= 700, tipo = '';
      if (larga && corrente && !modifica && !vistaCarrelli && recenti.length > 1) tipo = 'prodotti';
      else if (larga && vistaCarrelli === 'ordine' && ordini.aperto && !ordini.aperto.daAltro && ordini.righe.length > 1) tipo = 'ordini';
      else if (larga && carrello && (vistaCarrelli === 'carrello' || vistaCarrelli === 'riga' || vistaCarrelli === 'cliente' || vistaCarrelli === 'catalogo' || vistaCarrelli === 'scarico') && elencoCarrelli.length > 1) tipo = 'carrelli';
      var voci = tipo === 'prodotti' ? recenti.map(function (r) { return { id: r.id, nome: r.nome, sotto: r.codice, foto: r.foto }; })
        : tipo === 'carrelli' ? elencoCarrelli.map(function (x) { return { id: String(x.id), nome: x.nome, sotto: x.prodotti + (x.prodotti === 1 ? ' prodotto' : ' prodotti') + (x.cliente ? ' · ' + x.cliente : ''), destra: x.prezzo }; })
        : tipo === 'ordini' ? ordini.righe.map(function (o) { return { id: o.id, nome: o.cliente || o.tipo || 'Vendita', sotto: [o.quando ? nomeGiorno(o.quando.data) + ' ' + o.quando.ora : o.testoData, o.venditore].filter(Boolean).join(' · '), destra: soldi(o.totale) }; }) : [];
      var attivo = tipo === 'prodotti' ? corrente.id : (tipo === 'carrelli' ? String(carrello.id) : (tipo === 'ordini' ? ordini.aperto.id : ''));
      radice.classList.toggle('ip-colonna-possibile', !!tipo);
      radice.classList.toggle('ip-colonna-chiusa', !!tipo && colonnaChiusa);
      if (colonnaChiusa) tipo = '';
      var firma = tipo + '|' + attivo + '|' + voci.map(function (v) { return v.id + v.nome + (v.destra || ''); }).join(',');
      radice.classList.toggle('ip-due-colonne', !!tipo);
      if (firma === colonnaFirma) return;
      var stessoElenco = colonnaFirma && colonnaFirma.split('|')[0] === tipo && colonnaFirma.split('|')[2] === firma.split('|')[2];
      colonnaFirma = firma;
      if (stessoElenco) {
        // Stesso elenco, cambia solo la voce aperta: niente ridisegno, la colonna resta dov'era.
        var righe = colonna.querySelectorAll('.ip-riga');
        for (var k = 0; k < righe.length; k++) righe[k].classList.toggle('ip-attiva', righe[k].getAttribute('data-id') === attivo);
        return;
      }
      colonna.innerHTML = '';
      if (!tipo) return;
      colonna.appendChild(el('div', 'ip-etichetta', tipo === 'prodotti' ? 'Ultimi articoli' : (tipo === 'ordini' ? 'Vendite' : 'Carrelli')));
      var lista = el('div', 'ip-scheda ip-lista');
      voci.forEach(function (v) {
        var riga = crea('button', 'ip-riga' + (v.id === attivo ? ' ip-attiva' : ''));
        riga.type = 'button';
        riga.setAttribute('data-id', v.id);
        if (tipo === 'prodotti') riga.appendChild(miniatura(v.foto, 'ip-mini'));
        var testi = el('span', 'ip-riga-testi');
        testi.appendChild(el('span', 'ip-riga-nome', v.nome));
        testi.appendChild(el('span', tipo === 'prodotti' ? 'ip-riga-codice' : 'ip-riga-sotto', v.sotto));
        riga.appendChild(testi);
        if (v.destra) riga.appendChild(el('span', 'ip-riga-prezzo', v.destra));
        riga.addEventListener('click', function () {
          if (v.id === attivo) return;
          if (tipo === 'prodotti') { apri(v.id); return; }
          vista.classList.add('ip-in-attesa');
          if (tipo === 'ordini') {
            apriOrdine(v.id, false, true);
            try { history.replaceState(statoVista('ordine', { id: v.id, sotto: true }), '', location.pathname); } catch (e) { /* non indispensabile */ }
            return;
          }
          apriCarrello(v.id, false, null, true);
          try { history.replaceState(statoVista('carrello', { id: v.id, sotto: true }), '', location.pathname); } catch (e) { /* non indispensabile */ }
        });
        lista.appendChild(riga);
      });
      colonna.appendChild(lista);
      var scelta = colonna.querySelector('.ip-attiva');
      if (scelta && scelta.scrollIntoView) { try { scelta.scrollIntoView({ block: 'nearest' }); } catch (e) { /* non indispensabile */ } }
    }
    // ---------- Carrello: totali sempre visibili ----------
    // Quando scorrendo i riquadri del totale escono dallo schermo, in alto compare una striscia sottile con gli
    // stessi numeri (letti dai riquadri, quindi sempre aggiornati). Toccandola si torna in cima.
    var mini = el('div', 'ip-totali-mini');
    mini.setAttribute('role', 'button');
    radice.appendChild(mini);
    mini.addEventListener('click', function () {
      try { if (NATIVO) window.scrollTo({ top: 0, behavior: 'smooth' }); else vista.scrollTo({ top: 0, behavior: 'smooth' }); } catch (e) { vista.scrollTop = 0; }
    });
    function controllaMini() {
      var coppia = (vistaCarrelli === 'carrello' && carrello) || vistaCarrelli === 'ordine' ? vista.querySelector('.ip-coppia') : null;
      var area = vista.getBoundingClientRect();
      var limite = NATIVO ? (parseFloat(getComputedStyle(radice).getPropertyValue('--ip-sopra')) || 0) : area.top;
      var fuori = !!coppia && coppia.getBoundingClientRect().bottom < limite + 4;
      if (fuori) {
        mini.innerHTML = '';
        var tessere = coppia.querySelectorAll('.ip-numero');
        for (var i = 0; i < tessere.length; i++) {
          var nome = tessere[i].querySelector('.ip-numero-nome'), valore = tessere[i].querySelector('.ip-numero-valore');
          if (!nome || !valore) continue;
          var pezzo = el('span', 'ip-mini-voce');
          pezzo.appendChild(el('small', '', pulisci(nome.textContent)));
          pezzo.appendChild(el('b', '', pulisci(valore.textContent)));
          mini.appendChild(pezzo);
        }
        mini.style.top = (limite + 8) + 'px';
        mini.style.left = (area.left + area.width / 2) + 'px';
      }
      mini.classList.toggle('ip-visibile', fuori);
    }
    vista.addEventListener('scroll', controllaMini, { passive: true });
    window.addEventListener('scroll', controllaMini, { passive: true });

    var attesaColonna = null;
    function colonnaPresto() { clearTimeout(attesaColonna); attesaColonna = setTimeout(function () { aggiornaColonna(); controllaMini(); }, 40); }
    try { new MutationObserver(colonnaPresto).observe(vista, { childList: true }); } catch (e) { /* senza osservatore resta una colonna */ }
    window.addEventListener('resize', colonnaPresto);

    radice.querySelector('.ip-ingranaggio').addEventListener('click', apriImpostazioni);
    tastoIndietro.addEventListener('click', function () {
      if (modifica) { history.back(); return; }
      if (vistaCarrelli && vistaCarrelli !== 'elenco') { history.back(); return; }
      if (history.state && history.state.ipProdotto && history.length > 1 && history.state.daElenco) history.back();
      else { mostraElenco(); try { history.replaceState({ ipElenco: true }, '', '/product/info'); } catch (e) { /* non indispensabile */ } }
    });
    radice.querySelector('.ip-ricerca').addEventListener('submit', function (e) {
      e.preventDefault();
      if (vistaCarrelli === 'ordini') {
        // Nell'elenco delle vendite il campo cerca per numero, cliente o importo (ricerca del CRM).
        clearTimeout(attesaCercaOrdini);
        ordini.cerca = campo.value.trim();
        caricaOrdini(true);
        campo.blur();
        chiudiTastiera();
        return;
      }
      if (vistaCarrelli === 'elenco') {
        // Nell'elenco dei carrelli il campo filtra per nome, cliente o venditore.
        filtroCarrelli = campo.value.trim();
        disegnaElencoCarrelli();
        campo.blur();
        chiudiTastiera();
        return;
      }
      var scritto = campo.value;
      campo.value = '';
      campo.blur();
      instrada(scritto);
    });
    var attesaCercaOrdini = null;
    campo.addEventListener('input', function () {
      if (vistaCarrelli === 'ordini') {
        clearTimeout(attesaCercaOrdini);
        attesaCercaOrdini = setTimeout(function () {
          var q = campo.value.trim();
          if (vistaCarrelli !== 'ordini' || q === ordini.cerca) return;
          ordini.cerca = q;
          caricaOrdini(true);
        }, 450);
        return;
      }
      if (vistaCarrelli !== 'elenco') return;
      filtroCarrelli = campo.value.trim();
      disegnaElencoCarrelli();
    });
    function vaiASezione(quale) {
      richiesta++;
      nascondiAvviso();
      if (quale === 'carrelli') mostraCarrelli(true);
      else if (quale === 'vendite') mostraVendite(true);
      else if (quale === 'ordini') mostraOrdini(true);
      else if (quale === 'altro') mostraAltro(true);
      else { mostraElenco(); try { history.replaceState({ ipElenco: true }, '', '/product/info'); } catch (err) { /* non indispensabile */ } }
    }
    schede.addEventListener('click', function (e) {
      var quale = e.target && e.target.getAttribute && e.target.getAttribute('data-s');
      if (!quale || quale === schede.getAttribute('data-scheda')) return;
      vaiASezione(quale);
    });

    // Cifre grandi: non devono mai uscire dal riquadro. Dopo ogni disegno (anche con i dati presi dalla memoria)
    // e a ogni cambio di larghezza, le cifre troppo larghe si rimpiccioliscono un punto alla volta.
    function adattaCifre() {
      requestAnimationFrame(function () {
        var tutte = vista.querySelectorAll('.ip-numero-valore');
        for (var i = 0; i < tutte.length; i++) {
          var c = tutte[i];
          c.style.fontSize = '';
          if (!c.clientWidth) continue;
          var dim = parseFloat(getComputedStyle(c).fontSize) || 30;
          while (c.scrollWidth > c.clientWidth + 1 && dim > 13) { dim -= 1; c.style.setProperty('font-size', dim + 'px', 'important'); }
        }
      });
    }
    var attesaCifre = null;
    var cifreDopo = function () { clearTimeout(attesaCifre); attesaCifre = setTimeout(adattaCifre, 60); };
    new MutationObserver(cifreDopo).observe(vista, { subtree: true, childList: true, characterData: true });
    window.addEventListener('resize', cifreDopo);
    // Dentro un carrello aperto un codice viene aggiunto al carrello, altrove apre il prodotto.
    function instrada(codice) {
      if (consegnaCodice(codice)) return;
      if (inCarrello()) { aggiungiCodice(codice); return; }
      cerca(codice);
    }

    // Scorciatoie dall'icona dell'app (pressione lunga sulla Home): l'app si apre già nel punto giusto.
    window.__ipScorciatoia = function (quale) {
      var vai = function (sezione) { var t = schede.querySelector('[data-s="' + sezione + '"]'); if (t && schede.getAttribute('data-scheda') !== sezione) t.click(); };
      if (quale === 'leggi') { vai('prodotti'); setTimeout(apriCamera, 350); }
      else if (quale === 'carrello') { vai('carrelli'); setTimeout(function () { mostraNuovoCarrello(true); }, 600); }
    };

    // ---------- Disegno ----------
    function el(tag, classe, testo) {
      var e = document.createElement(tag);
      if (classe) e.className = classe;
      if (testo != null) e.textContent = testo;
      return e;
    }
    function miniatura(src, classe) {
      var box = el('span', classe);
      if (src) {
        var img = document.createElement('img');
        img.src = src; img.alt = ''; img.loading = 'lazy';
        img.addEventListener('error', function () { box.innerHTML = IC.foto; box.classList.add('ip-senza-foto'); });
        box.appendChild(img);
      } else { box.innerHTML = IC.foto; box.classList.add('ip-senza-foto'); }
      return box;
    }
    function tastoAzione(classe, html, fai) {
      var t = crea('button', classe, html);
      t.type = 'button';
      t.addEventListener('click', fai);
      return t;
    }
    function apriCamera() {
      if (cfg.guscio === 'ios') {
        // In un carrello la lettura continua (un articolo dopo l'altro); altrove si chiude al primo codice.
        var dentro = inCarrello();
        try {
          window.webkit.messageHandlers.ip.postMessage({ t: 'fotocamera', x: JSON.stringify({
            continuo: dentro, titolo: dentro ? 'Aggiungi a ' + ((carrello && carrello.nome) || 'carrello') : 'Leggi un codice'
          }) });
          return;
        } catch (e) { /* non siamo nell'app: si prova con il lettore del sito */ }
      }
      if (sito.camera) sito.camera.click();
    }

    function disegnaAzioni(p) {
      azioni.innerHTML = '';
      if (conCamera) azioni.appendChild(tastoAzione('ip-azione ip-azione-scan', IC.camera + '<b>Scansiona</b>', apriCamera));
      if (p && p.puoPrezzo) azioni.appendChild(tastoAzione('ip-azione', '<small>Modifica</small><b>Prezzo</b>', function () {
        if (MODIFICA_IN_APP) apriModifica(p, 'prezzo'); else location.href = '/product/edit/' + p.id + '/price';
      }));
      if (p && p.puoQuantita) azioni.appendChild(tastoAzione('ip-azione', '<small>Modifica</small><b>Quantità</b>', function () {
        if (MODIFICA_IN_APP) apriModifica(p, 'quantita'); else location.href = '/product/edit/' + p.id + '/quantity';
      }));
      radice.classList.toggle('ip-senza-azioni', !azioni.children.length);
    }

    function mostraElenco() {
      chiudiTastiera();
      corrente = null;
      modifica = null;
      fuoriDaiCarrelli();
      radice.classList.add('ip-radice');
      schede.setAttribute('data-scheda', 'prodotti');
      radice.classList.remove('ip-in-modifica');
      radice.classList.remove('ip-su-prodotto');
      titolo.textContent = 'Dondi Emporio';
      vista.innerHTML = '';
      // Il riquadro di benvenuto si può chiudere con la X: da quel momento non compare più su questo dispositivo.
      var guidaChiusa = false;
      try { guidaChiusa = localStorage.getItem('ip-guida-chiusa') === '1'; } catch (e) { /* senza memoria locale resta visibile */ }
      if (!guidaChiusa) {
        var guida = el('div', 'ip-guida');
        guida.appendChild(crea('span', 'ip-guida-icona', IC.codice));
        var testi = el('div', 'ip-guida-testi');
        var dove = cfg.guscio === 'ios' ? 'qui sotto' : 'qui sopra';
        testi.appendChild(el('div', 'ip-guida-titolo', 'Pronto a leggere'));
        testi.appendChild(el('div', 'ip-guida-testo', conCamera
          ? 'Leggi un codice con il lettore, scrivilo ' + dove + ' oppure usa la fotocamera.'
          : 'Leggi un codice con il lettore oppure scrivilo ' + dove + '.'));
        guida.appendChild(testi);
        var chiudiGuida = crea('button', 'ip-guida-chiudi', '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12"/><path d="M18 6l-12 12"/></svg>');
        chiudiGuida.type = 'button';
        chiudiGuida.setAttribute('aria-label', 'Chiudi');
        chiudiGuida.addEventListener('click', function () {
          try { localStorage.setItem('ip-guida-chiusa', '1'); } catch (e) { /* non indispensabile */ }
          if (guida.parentNode) guida.parentNode.removeChild(guida);
        });
        guida.appendChild(chiudiGuida);
        vista.appendChild(guida);
      }

      vista.appendChild(el('div', 'ip-etichetta', 'Ultimi articoli'));
      if (!recenti.length) {
        vista.appendChild(el('div', 'ip-vuoto', 'Qui compaiono gli ultimi articoli che hai cercato.'));
      } else {
        var lista = el('div', 'ip-scheda ip-lista');
        recenti.forEach(function (r) {
          var riga = crea('button', 'ip-riga');
          riga.type = 'button';
          riga.appendChild(miniatura(r.foto, 'ip-mini'));
          var t = el('span', 'ip-riga-testi');
          t.appendChild(el('span', 'ip-riga-nome', r.nome));
          t.appendChild(el('span', 'ip-riga-codice', r.codice));
          riga.appendChild(t);
          riga.appendChild(crea('span', 'ip-riga-freccia', ICONA_FRECCIA));
          riga.addEventListener('click', function () { apri(r.id); });
          lista.appendChild(riga);
        });
        vista.appendChild(lista);
      }
      disegnaAzioni(null);
      vista.scrollTop = 0;
    }

    function rigaDato(nome, valore) {
      var r = el('div', 'ip-dato');
      r.appendChild(el('span', 'ip-dato-nome', nome));
      r.appendChild(el('span', 'ip-dato-valore', valore || '—'));
      return r;
    }

    function mostraProdotto(p) {
      chiudiTastiera();
      corrente = p;
      modifica = null;
      memoria[p.id] = p;
      ricorda(p);
      fuoriDaiCarrelli();
      radice.classList.remove('ip-radice');
      radice.classList.add('ip-su-prodotto');
      radice.classList.remove('ip-in-modifica');
      titolo.textContent = 'Prodotto';
      precarica(p);
      vista.innerHTML = '';

      // Nome, foto e codici
      var testa = el('div', 'ip-scheda ip-prodotto');
      var foto = miniatura(p.foto, 'ip-foto');
      if (p.foto) foto.addEventListener('click', function () { ingrandisci(p.foto); });
      testa.appendChild(foto);
      var chi = el('div', 'ip-prodotto-testi');
      chi.appendChild(el('div', 'ip-prodotto-nome', p.nome));
      var codici = el('div', 'ip-codici');
      // Toccando un codice si apre il suo codice a barre a tutto schermo.
      if (p.codice) codici.appendChild(codiceToccabile(p.codice, p.codice, p.nome));
      if (p.ean) codici.appendChild(codiceToccabile(p.ean, 'EAN ' + p.ean, p.nome));
      chi.appendChild(codici);
      testa.appendChild(chi);
      vista.appendChild(testa);

      // Prezzo e giacenza: le due cose che servono subito
      var coppia = el('div', 'ip-coppia');
      var prezzo = el('div', 'ip-scheda ip-numero ip-numero-prezzo');
      prezzo.appendChild(el('div', 'ip-numero-nome', 'Prezzo'));
      prezzo.appendChild(el('div', 'ip-numero-valore', p.prezzo || '—'));
      var finale = numero(p.prezzo), pieno = numero(p.listino);
      if (finale != null && pieno != null && pieno > finale + 0.005) {
        var sconto = el('div', 'ip-sconto');
        sconto.appendChild(el('s', '', p.listino));
        sconto.appendChild(el('span', 'ip-sconto-percento', '-' + Math.round((1 - finale / pieno) * 100) + '%'));
        prezzo.appendChild(sconto);
        prezzo.classList.add('ip-in-sconto');
      }
      coppia.appendChild(prezzo);
      var giacenza = el('div', 'ip-scheda ip-numero');
      giacenza.appendChild(el('div', 'ip-numero-nome', 'Giacenza'));
      var quanti = el('div', 'ip-numero-valore', p.giacenza || '0');
      quanti.appendChild(el('small', '', ' pz'));
      giacenza.appendChild(quanti);
      if ((numero(p.giacenza) || 0) <= 0) giacenza.classList.add('ip-esaurito');
      coppia.appendChild(giacenza);
      vista.appendChild(coppia);

      // Giacenza per magazzino
      if (p.magazzini.length) {
        vista.appendChild(el('div', 'ip-etichetta', 'Dove si trova'));
        var mag = el('div', 'ip-scheda ip-dati');
        p.magazzini.forEach(function (g) {
          var r = el('div', 'ip-dato ip-dato-magazzino');
          var t = el('span', 'ip-dato-nome');
          t.appendChild(el('span', 'ip-magazzino-nome', g.nome));
          if (g.nota) t.appendChild(el('span', 'ip-magazzino-nota', g.nota));
          r.appendChild(t);
          r.appendChild(el('span', 'ip-dato-valore ip-forte', g.quantita));
          mag.appendChild(r);
        });
        vista.appendChild(mag);
      }

      // Prezzi in dettaglio, con il costo nascosto
      vista.appendChild(el('div', 'ip-etichetta', 'Prezzi'));
      var prezzi = el('div', 'ip-scheda ip-dati');
      prezzi.appendChild(rigaDato('Listino', p.listino));
      prezzi.appendChild(rigaDato('Prezzo', p.prezzoBase));
      prezzi.appendChild(rigaDato('Scontato', /\d/.test(p.scontato) ? p.scontato : 'Nessuno'));
      if (p.costo) {
        var costo = el('div', 'ip-dato');
        costo.appendChild(el('span', 'ip-dato-nome', 'Costo'));
        var valore = el('span', 'ip-dato-valore ip-costo');
        var testo = el('span', '', '•••••');
        var occhio = crea('button', 'ip-occhio', IC.occhio);
        occhio.type = 'button';
        occhio.setAttribute('aria-label', 'Mostra o nascondi il costo');
        var visibile = false;
        occhio.addEventListener('click', function () {
          visibile = !visibile;
          testo.textContent = visibile ? p.costo : '•••••';
          occhio.classList.toggle('ip-attivo', visibile);
        });
        valore.appendChild(testo); valore.appendChild(occhio);
        costo.appendChild(valore);
        prezzi.appendChild(costo);
      }
      vista.appendChild(prezzi);

      // Dettagli
      vista.appendChild(el('div', 'ip-etichetta', 'Dettagli'));
      var dati = el('div', 'ip-scheda ip-dati');
      dati.appendChild(rigaDato('Fornitore', p.fornitore));
      dati.appendChild(rigaDato('Categoria', p.categoria));
      dati.appendChild(rigaDato('Sottocategoria', p.sottocategoria));
      p.statistiche.forEach(function (s) { if (s.nome) dati.appendChild(rigaDato(s.nome, s.valore)); });
      vista.appendChild(dati);

      if (cfg.guscio === 'ios') {
        // Su iPhone i tasti della barra di sistema possono ridursi alla sola icona (per esempio su iPhone Duo):
        // le stesse azioni sono ripetute qui, scritte per esteso, in fondo alla scheda.
        var voci = [];
        if (p.puoPrezzo) voci.push({ t: 'Modifica prezzo', i: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.2 7a6 6 0 1 0 0 10"/><path d="M13 10h-8m0 4h8"/></svg>', f: function () { apriModifica(p, 'prezzo'); } });
        if (p.puoQuantita) voci.push({ t: 'Modifica quantità', i: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 4.5v9l-8 4.5l-8 -4.5v-9l8 -4.5"/><path d="M12 12l8 -4.5"/><path d="M12 12v9"/><path d="M12 12l-8 -4.5"/></svg>', f: function () { apriModifica(p, 'quantita'); } });
        if (p.puoFoto) voci.push({ t: 'Cambia immagine', i: IC.foto, f: function () { apriImmagine(p); } });
        if (voci.length) {
          vista.appendChild(el('div', 'ip-etichetta', 'Azioni'));
          var elencoAzioni = el('div', 'ip-scheda ip-lista ip-lista-azioni');
          voci.forEach(function (voce) {
            var riga = crea('button', 'ip-riga ip-riga-azione');
            riga.type = 'button';
            riga.appendChild(crea('span', 'ip-riga-icona', voce.i));
            riga.appendChild(el('span', 'ip-riga-testo', voce.t));
            riga.appendChild(crea('span', 'ip-riga-freccia', ICONA_FRECCIA));
            riga.addEventListener('click', voce.f);
            elencoAzioni.appendChild(riga);
          });
          vista.appendChild(elencoAzioni);
        }
      } else if (p.puoFoto) {
        var cambia = crea('button', 'ip-secondario', IC.matita + '<span>Cambia immagine</span>');
        cambia.type = 'button';
        cambia.addEventListener('click', function () { apriImmagine(p); });
        vista.appendChild(cambia);
      }

      disegnaAzioni(p);
      vista.scrollTop = 0;
    }

    function mostraAttesa() {
      chiudiTastiera();
      fuoriDaiCarrelli();
      radice.classList.remove('ip-radice');
      radice.classList.add('ip-su-prodotto');
      titolo.textContent = 'Prodotto';
      vista.innerHTML =
        '<div class="ip-scheda ip-prodotto ip-finto"><span class="ip-foto"></span><div class="ip-prodotto-testi"><i style="width:80%"></i><i style="width:55%"></i></div></div>' +
        '<div class="ip-coppia"><div class="ip-scheda ip-numero ip-finto"><i style="width:40%"></i><i class="ip-alto" style="width:70%"></i></div>' +
        '<div class="ip-scheda ip-numero ip-finto"><i style="width:50%"></i><i class="ip-alto" style="width:45%"></i></div></div>' +
        '<div class="ip-scheda ip-dati ip-finto"><i style="width:90%"></i><i style="width:75%"></i><i style="width:85%"></i></div>';
      disegnaAzioni(null);
      vista.scrollTop = 0;
    }

    // Su iPhone foto e codice a barre li mostra l'app con una schermata di sistema (Liquid Glass, tasto Chiudi).
    function visoreNativo(dati) {
      if (cfg.guscio !== 'ios') return false;
      try { window.webkit.messageHandlers.ip.postMessage({ t: 'visore', x: JSON.stringify(dati) }); return true; } catch (e) { return false; }
    }

    // Tasto Chiudi della foto e del codice a barre disegnati dalla pagina (Android). Il tocco arriva al velo, che si chiude.
    function tastoChiudiVisore() {
      var b = el('button', 'ip-visore-chiudi');
      b.type = 'button';
      b.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg><span>Chiudi</span>';
      return b;
    }

    function ingrandisci(src) {
      chiudiTastiera();
      var completo = src;
      try { completo = new URL(src, location.href).href; } catch (e) { /* resta com'è */ }
      if (visoreNativo({ tipo: 'foto', src: completo })) return;
      var velo = el('div', 'ip-visore');
      var img = document.createElement('img');
      img.src = src; img.alt = '';
      velo.appendChild(img);
      velo.appendChild(tastoChiudiVisore());
      velo.addEventListener('click', function () { if (velo.parentNode) velo.parentNode.removeChild(velo); });
      radice.appendChild(velo);
    }

    // ---------- Codice a barre a video ----------
    // Toccando il codice o l'EAN nella scheda prodotto il codice si apre a tutto schermo, da far leggere
    // al lettore della cassa. EAN-13 o EAN-8 se il numero è un EAN con la cifra di controllo giusta,
    // altrimenti Code 128 (sottoinsieme C per soli numeri in numero pari, B per il resto).
    var BARRE = {
      l: ['0001101', '0011001', '0010011', '0111101', '0100011', '0110001', '0101111', '0111011', '0110111', '0001011'],
      parita: ['LLLLLL', 'LLGLGG', 'LLGGLG', 'LLGGGL', 'LGLLGG', 'LGGLLG', 'LGGGLL', 'LGLGLG', 'LGLGGL', 'LGGLGL'],
      c128: ['212222', '222122', '222221', '121223', '121322', '131222', '122213', '122312', '132212', '221213',
        '221312', '231212', '112232', '122132', '122231', '113222', '123122', '123221', '223211', '221132',
        '221231', '213212', '223112', '312131', '311222', '321122', '321221', '312212', '322112', '322211',
        '212123', '212321', '232121', '111323', '131123', '131321', '112313', '132113', '132311', '211313',
        '231113', '231311', '112133', '112331', '132131', '113123', '113321', '133121', '313121', '211331',
        '231131', '213113', '213311', '213131', '311123', '311321', '331121', '312113', '312311', '332111',
        '314111', '221411', '431111', '111224', '111422', '121124', '121421', '141122', '141221', '112214',
        '112412', '122114', '122411', '142112', '142211', '241211', '221114', '413111', '241112', '134111',
        '111242', '121142', '121241', '114212', '124112', '124211', '411212', '421112', '421211', '212141',
        '214121', '412121', '111143', '111341', '131141', '114113', '114311', '411113', '411311', '113141',
        '114131', '311141', '411131', '211412', '211214', '211232', '2331112']
    };
    function eanValido(t) {
      if (!/^(\d{8}|\d{13})$/.test(t)) return false;
      var somma = 0, n = t.length;
      for (var i = 0; i < n - 1; i++) somma += Number(t[i]) * ((n - 1 - i) % 2 === 1 ? 3 : 1);
      return (10 - somma % 10) % 10 === Number(t[n - 1]);
    }
    function inverti(s) { return s.replace(/[01]/g, function (c) { return c === '0' ? '1' : '0'; }); }
    // Restituisce i moduli come stringa di 0 e 1 (1 = barra), oppure null se il testo non si può codificare.
    function moduliEan(t) {
      var r = '101';
      if (t.length === 13) {
        var schema = BARRE.parita[Number(t[0])];
        for (var i = 1; i <= 6; i++) { var l = BARRE.l[Number(t[i])]; r += schema[i - 1] === 'L' ? l : inverti(l).split('').reverse().join(''); }
        r += '01010';
        for (var j = 7; j <= 12; j++) r += inverti(BARRE.l[Number(t[j])]);
      } else {
        for (var a = 0; a < 4; a++) r += BARRE.l[Number(t[a])];
        r += '01010';
        for (var b = 4; b < 8; b++) r += inverti(BARRE.l[Number(t[b])]);
      }
      return r + '101';
    }
    function moduli128(t) {
      var valori = [];
      if (/^\d+$/.test(t) && t.length % 2 === 0 && t.length >= 4) {
        valori.push(105);
        for (var i = 0; i < t.length; i += 2) valori.push(Number(t.substr(i, 2)));
      } else {
        valori.push(104);
        for (var k = 0; k < t.length; k++) {
          var c = t.charCodeAt(k);
          if (c < 32 || c > 126) return null;
          valori.push(c - 32);
        }
      }
      var somma = valori[0];
      for (var p = 1; p < valori.length; p++) somma += valori[p] * p;
      valori.push(somma % 103);
      valori.push(106);
      var r = '';
      valori.forEach(function (v) {
        var larghezze = BARRE.c128[v];
        for (var q = 0; q < larghezze.length; q++) r += new Array(Number(larghezze[q]) + 1).join(q % 2 === 0 ? '1' : '0');
      });
      return r;
    }
    function disegnoBarre(moduli) {
      var margine = 11, alto = 70, larghezza = moduli.length + margine * 2, barre = '';
      for (var i = 0; i < moduli.length; i++) {
        if (moduli[i] !== '1') continue;
        var lungo = 1;
        while (moduli[i + lungo] === '1') lungo++;
        barre += '<rect x="' + (i + margine) + '" y="0" width="' + lungo + '" height="' + alto + '"/>';
        i += lungo - 1;
      }
      return '<svg viewBox="0 0 ' + larghezza + ' ' + alto + '" preserveAspectRatio="none" shape-rendering="crispEdges" fill="#000">' + barre + '</svg>';
    }
    window.__ipBarre = { ean: eanValido, moduliEan: moduliEan, moduli128: moduli128, disegno: disegnoBarre };
    function mostraBarre(testo, nome) {
      testo = String(testo || '').trim();
      if (!testo) return;
      chiudiTastiera();
      var ean = eanValido(testo);
      var moduli = ean ? moduliEan(testo) : moduli128(testo);
      if (!moduli) { mostraAvviso('Codice non disegnabile', 'Contiene caratteri che il Code 128 non prevede.'); return; }
      var formato = ean ? (testo.length === 13 ? 'EAN-13' : 'EAN-8') : 'Code 128';
      if (visoreNativo({ tipo: 'barre', testo: testo, nome: nome || '', formato: formato, moduli: moduli })) return;
      var velo = el('div', 'ip-visore ip-visore-barre');
      var carta = el('div', 'ip-barre-carta');
      if (nome) carta.appendChild(el('div', 'ip-barre-nome', nome));
      var disegno = el('div', 'ip-barre-disegno');
      disegno.innerHTML = disegnoBarre(moduli);
      carta.appendChild(disegno);
      carta.appendChild(el('div', 'ip-barre-testo', testo));
      carta.appendChild(el('div', 'ip-barre-tipo', (ean ? (testo.length === 13 ? 'EAN-13' : 'EAN-8') : 'Code 128') + ' · tocca per chiudere'));
      velo.appendChild(carta);
      velo.appendChild(tastoChiudiVisore());
      velo.addEventListener('click', function () {
        if (velo.parentNode) velo.parentNode.removeChild(velo);
        avvisa('codice-chiuso');
      });
      radice.appendChild(velo);
      avvisa('codice-aperto');
    }
    // Su iPhone una scelta da un elenco breve è un menu di sistema: la pagina disegna la riga e dice all'app
    // dove metterlo (vedi raccontaSelettori, tipo "menu"). voci: [{v, t}]; scelto: valore; cambia(valore).
    function rigaMenu(nome, voci, scelto, cambia, vuoto) {
      var riga = el('div', 'ip-scheda ip-riga-menu');
      riga.appendChild(el('span', '', nome));
      riga.appendChild(el('i', ''));
      var tutte = vuoto ? [{ v: '', t: vuoto }].concat(voci) : voci.slice();
      riga.__ipVoci = tutte;
      riga.__ipScelto = Math.max(0, tutte.map(function (o) { return o.v; }).indexOf(scelto));
      riga.__ipScegli = function (indice) { var o = tutte[indice]; if (o) cambia(o.v); };
      return riga;
    }

    function codiceToccabile(testo, etichetta, nome) {
      var chip = el('button', 'ip-codice ip-codice-tocca');
      chip.type = 'button';
      chip.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6v12M7 6v12M11 6v12M14 6v12M17 6v12M20 6v12"/></svg>';
      chip.appendChild(document.createTextNode(etichetta));
      chip.setAttribute('aria-label', 'Mostra il codice a barre ' + testo);
      chip.addEventListener('click', function (e) { e.stopPropagation(); mostraBarre(testo, nome); });
      return chip;
    }

    var timerAvviso = null;
    function mostraAvviso(titoloAvviso, testoAvviso, positivo) {
      avviso.innerHTML = '';
      avviso.classList.toggle('ip-avviso-ok', !!positivo);
      avviso.appendChild(crea('span', 'ip-avviso-icona', positivo ? IC.fatto : IC.avviso));
      var t = el('div', '');
      t.appendChild(el('div', 'ip-avviso-titolo', titoloAvviso));
      if (testoAvviso) t.appendChild(el('div', 'ip-avviso-testo', testoAvviso));
      avviso.appendChild(t);
      avviso.classList.add('ip-aperto');
      // Su iPhone l'esito va anche all'app, che lo mostra sopra il lettore di codici quando è aperto.
      if (cfg.guscio === 'ios') {
        try { window.webkit.messageHandlers.ip.postMessage({ t: 'avviso', x: JSON.stringify({ titolo: titoloAvviso || '', testo: testoAvviso || '', ok: !!positivo }) }); } catch (e) { /* fuori dall'app */ }
      }
      clearTimeout(timerAvviso);
      timerAvviso = setTimeout(nascondiAvviso, 3500);
    }
    function nascondiAvviso() { avviso.classList.remove('ip-aperto'); }
    avviso.addEventListener('click', nascondiAvviso);

    // ---------- Azioni ----------
    function ricorda(p) {
      recenti = recenti.filter(function (r) { return r.id !== p.id; });
      recenti.unshift({ id: p.id, nome: p.nome, codice: p.codice, foto: p.foto });
      if (recenti.length > 20) recenti.length = 20;
    }

    function storia(p, sostituisci) {
      try {
        var stato = { ipProdotto: p.id, daElenco: sostituisci ? !!(history.state && history.state.daElenco) : true };
        if (sostituisci) history.replaceState(stato, '', '/product/info/' + p.id);
        else history.pushState(stato, '', '/product/info/' + p.id);
      } catch (e) { /* non indispensabile */ }
    }

    function arrivata(risposta, mia, codice) {
      if (mia !== richiesta) return;
      if (/\/login$/.test(risposta.percorso) || !risposta.doc.getElementById('console-aside')) {
        // Sessione scaduta: ricarico, l'app rientra da sola e torna qui.
        location.reload();
        return;
      }
      var trovato = risposta.percorso.match(/^\/product\/info\/(\d+)$/);
      var p = trovato ? leggiProdotto(risposta.doc, trovato[1]) : null;
      if (!p) {
        if (!trovato) { var letti = leggiRecenti(risposta.doc); if (letti.length) recenti = letti; }
        if (corrente) mostraProdotto(corrente); else mostraElenco();
        mostraAvviso('Articolo non trovato', codice ? 'Nessun prodotto con il codice ' + codice + '.' : 'Il codice letto non corrisponde a nessun prodotto.');
        avvisa('non-trovato');
        return;
      }
      var eraSuProdotto = !!(history.state && history.state.ipProdotto);
      nascondiAvviso();
      mostraProdotto(p);
      storia(p, eraSuProdotto);
    }

    function fallita(mia) {
      if (mia !== richiesta) return;
      if (corrente) mostraProdotto(corrente); else mostraElenco();
      mostraAvviso('Connessione assente', 'Controlla la rete e riprova.');
      avvisa('errore');
    }

    function cerca(codice) {
      codice = pulisci(codice);
      if (!codice) return;
      var mia = ++richiesta;
      nascondiAvviso();
      mostraAttesa();
      chiedi('/product/info', 'form%5Bsearch%5D=' + encodeURIComponent(codice))
        .then(function (r) { arrivata(r, mia, codice); }, function () { fallita(mia); });
    }

    function apri(id) {
      var mia = ++richiesta;
      nascondiAvviso();
      if (memoria[id]) {
        var eraSuProdotto = !!(history.state && history.state.ipProdotto);
        mostraProdotto(memoria[id]);
        storia(memoria[id], eraSuProdotto);
      } else {
        mostraAttesa();
      }
      // Anche quando ce l'ho già in memoria lo richiedo: prezzo e giacenza devono essere quelli di adesso.
      chiedi('/product/info/' + id).then(function (r) {
        if (mia !== richiesta) return;
        var p = leggiProdotto(r.doc, id);
        if (!p) { arrivata(r, mia, ''); return; }
        var primaVolta = !corrente || corrente.id !== id;
        mostraProdotto(p);
        if (primaVolta) storia(p, !!(history.state && history.state.ipProdotto));
      }, function () { if (!memoria[id]) fallita(mia); });
    }

    // Tasto indietro di Android e della barra: torna all'elenco senza ricaricare.
    window.addEventListener('popstate', function () {
      if (document.getElementById('ip-imp')) return;
      var fogli = radice.querySelectorAll('.ip-foglio');
      for (var f = 0; f < fogli.length; f++) fogli[f].parentNode.removeChild(fogli[f]);
      if (dopoRitorno) { var fai = dopoRitorno; dopoRitorno = null; fai(); return; }
      if (history.state && history.state.ipVista) { richiesta++; nascondiAvviso(); ripristinaVista(history.state); return; }
      if (history.state && history.state.ipModifica && corrente) { disegnaModifica(corrente, history.state.ipModifica); return; }
      var qui = location.pathname.replace(/\/+$/, '').match(/^\/product\/info\/(\d+)$/);
      richiesta++;
      if (qui && memoria[qui[1]]) mostraProdotto(memoria[qui[1]]);
      else if (qui) apri(qui[1]);
      else mostraElenco();
    });

    // ---------- Lettore sempre in ascolto ----------
    // Nessun campo resta selezionato da solo: è l'app, sotto la pagina, a raccogliere quello che
    // il lettore scrive e a passarlo qui. Il campo in alto serve solo per scrivere un codice a mano:
    // toccandolo si apre la tastiera, toccando fuori si chiude, come in qualsiasi app.
    window.__ipCodice = function (codice) {
      annota('codice dal lettore, ' + String(codice).length + ' caratteri');
      if (document.getElementById('ip-imp')) return;
      if (document.activeElement && document.activeElement.blur && /^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName)) document.activeElement.blur();
      if (consegnaCodice(codice)) return;
      if (inCarrello()) { aggiungiCodice(codice); return; }
      if (modifica) {
        try { history.back(); } catch (e) { /* non indispensabile */ }
        setTimeout(function () { cerca(codice); }, 60);
        return;
      }
      cerca(codice);
    };
    avvisa('ascolto-si');

    // Il lettore funziona anche se il campo ha perso il fuoco: raccolgo i tasti e cerco all'Invio.
    var raccolti = '';
    var scadenza = null;
    document.addEventListener('keydown', function (e) {
      if (corpo.classList.contains('ip-imp-aperta')) return;
      if (e.target && /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) return;
      if (e.key === 'Enter') {
        if (raccolti.length >= 3) { e.preventDefault(); var c = raccolti; raccolti = ''; instrada(c); }
        return;
      }
      if (e.key && e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
        raccolti += e.key;
        clearTimeout(scadenza);
        scadenza = setTimeout(function () { raccolti = ''; }, 1500);
      }
    }, true);

    // ====================================================================================
    // Modifica prezzo e quantità dentro l'app. I moduli del sito vengono scaricati in
    // sottofondo appena si apre un prodotto, così la schermata è pronta all'istante.
    // ====================================================================================
    function opzioni(modulo, nome) {
      try {
        return JSON.parse(modulo.querySelector('console-select[name="' + nome + '"]').getAttribute('options'))
          .map(function (o) { return { v: String(o.value), t: o.label }; });
      } catch (e) { return []; }
    }
    function leggiModuloPrezzo(doc) {
      var f = doc.querySelector('form[name="price"]');
      var gettone = f && f.querySelector('[name="price[_token]"]');
      if (!gettone) return null;
      var anteprima = doc.querySelector('#price-preview');
      // Se c'è già un prezzo scontato il sito offre "Rimuovi sconto attuale".
      var togli = doc.getElementById('remove-discount-form');
      var gettoneTogli = togli && togli.querySelector('[name="_token"]');
      return {
        gettone: gettone.value, base: anteprima ? Number(anteprima.getAttribute('data-price') || 0) : 0,
        togli: gettoneTogli ? { indirizzo: togli.getAttribute('action'), gettone: gettoneTogli.value } : null
      };
    }
    function leggiModuloQuantita(doc) {
      var f = doc.querySelector('form[name="movement"]');
      var gettone = f && f.querySelector('[name="movement[_token]"]');
      if (!gettone) return null;
      var presenti = [];
      var tasti = doc.querySelectorAll('#warehouse-strip [data-warehouse]');
      for (var i = 0; i < tasti.length; i++) {
        presenti.push({ v: tasti[i].getAttribute('data-warehouse'), t: tasti[i].getAttribute('data-name'), q: parseInt(tasti[i].getAttribute('data-quantity'), 10) || 0 });
      }
      return {
        gettone: gettone.value, presenti: presenti,
        tutti: opzioni(f, 'movement[warehouse]'), carico: opzioni(f, 'movement[loadReason]'), scarico: opzioni(f, 'movement[unloadReason]')
      };
    }
    // Messaggi che il sito mostrerebbe dopo un salvataggio (errori del modulo o avvisi).
    function leggiErrori(doc) {
      var trovati = [];
      var nodi = doc.querySelectorAll('form .invalid-feedback, form [class*="text-danger"], form [role="alert"], .console-page-body [role="alert"]');
      for (var i = 0; i < nodi.length; i++) {
        var t = pulisci(nodi[i].textContent);
        if (t.length > 2 && trovati.indexOf(t) === -1) trovati.push(t);
      }
      var script = doc.querySelectorAll('script:not([src])');
      for (var s = 0; s < script.length; s++) {
        var m = script[s].textContent.match(/(dangerAlert|warningAlert)\(\s*("(?:[^"\\]|\\.)*")/);
        if (m) { try { trovati.push(JSON.parse(m[2])); } catch (e) { /* formato diverso */ } }
      }
      return trovati;
    }

    function scarica(p, quale) {
      var indirizzo = '/product/edit/' + p.id + '/' + (quale === 'prezzo' ? 'price' : 'quantity');
      return chiedi(indirizzo).then(function (r) {
        var m = quale === 'prezzo' ? leggiModuloPrezzo(r.doc) : leggiModuloQuantita(r.doc);
        if (m) { moduli[p.id] = moduli[p.id] || {}; moduli[p.id][quale] = m; m.quando = Date.now(); }
        return m;
      });
    }
    var timerPrecarico = null;
    function precarica(p) {
      clearTimeout(timerPrecarico);
      timerPrecarico = setTimeout(function () {
        if (!MODIFICA_IN_APP || corrente !== p || modifica) return;
        if (p.puoPrezzo) scarica(p, 'prezzo').then(null, function () {});
        if (p.puoQuantita) scarica(p, 'quantita').then(null, function () {});
      }, 350);
    }

    function apriModifica(p, quale) {
      var pronto = moduli[p.id] && moduli[p.id][quale];
      var fresco = pronto && Date.now() - pronto.quando < 5 * 60 * 1000;
      try { history.pushState({ ipProdotto: p.id, ipModifica: quale, daElenco: !!(history.state && history.state.daElenco) }, '', '/product/info/' + p.id); } catch (e) { /* non indispensabile */ }
      disegnaModifica(p, quale);
      if (!fresco) {
        scarica(p, quale).then(function (m) {
          if (!m) { location.href = '/product/edit/' + p.id + '/' + (quale === 'prezzo' ? 'price' : 'quantity'); return; }
          if (corrente === p && modifica === quale) disegnaModifica(p, quale);
        }, function () {
          if (corrente === p && modifica === quale) { mostraAvviso('Connessione assente', 'Controlla la rete e riprova.'); avvisa('errore'); }
        });
      }
    }

    function chipProdotto(p) {
      var chip = el('div', 'ip-scheda ip-chip');
      chip.appendChild(miniatura(p.foto, 'ip-mini'));
      var t = el('span', 'ip-riga-testi');
      t.appendChild(el('span', 'ip-riga-nome', p.nome));
      t.appendChild(el('span', 'ip-riga-codice', p.codice + (p.ean ? ' · EAN ' + p.ean : '')));
      chip.appendChild(t);
      return chip;
    }
    function segmenti(voci, scelta, cambia) {
      var box = el('div', 'ip-segmenti');
      voci.forEach(function (v) {
        var t = el('button', v.v === scelta ? 'ip-scelto' : '', v.t);
        t.type = 'button';
        t.addEventListener('click', function () { cambia(v.v); });
        box.appendChild(t);
      });
      return box;
    }
    // Un codice a barre letto mentre si scrive in un campo arriva tutto insieme e finisce con Invio:
    // non deve diventare un prezzo o una quantità, ma far partire la ricerca di quell'articolo.
    function ascoltaLettore(campoModifica) {
      var s = { inizio: 0, ultimo: 0, lunghezza: 0, prima: '' };
      var precedente = campoModifica.value;
      campoModifica.addEventListener('input', function () {
        var adesso = Date.now();
        if (adesso - s.ultimo > 150) { s.inizio = adesso; s.lunghezza = precedente.length; s.prima = precedente; }
        s.ultimo = adesso;
        precedente = campoModifica.value;
      });
      campoModifica.addEventListener('keydown', function (e) {
        if (e.key !== 'Enter') return;
        e.preventDefault();
        var aggiunta = campoModifica.value.slice(s.lunghezza);
        if (aggiunta.length >= 6 && (s.ultimo - s.inizio) <= aggiunta.length * 50 && Date.now() - s.ultimo < 400) {
          campoModifica.value = s.prima;
          history.back();
          setTimeout(function () { cerca(aggiunta); }, 60);
        } else {
          campoModifica.blur();
        }
      });
    }
    function euro(centesimi) {
      return (centesimi / 100).toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' €';
    }

    // ---------- Immagine del prodotto, dentro l'app ----------
    function apriImmagine(p) {
      try { history.pushState({ ipProdotto: p.id, ipModifica: 'immagine', daElenco: !!(history.state && history.state.daElenco) }, '', '/product/info/' + p.id); } catch (e) { /* non indispensabile */ }
      disegnaImmagine(p);
    }

    // Le foto del telefono pesano diversi megabyte: le riduco prima di caricarle, così l'invio è rapido.
    function alleggerisci(file) {
      if (!file || file.size < 1500000 || !window.createImageBitmap) return Promise.resolve(file);
      return createImageBitmap(file).then(function (img) {
        var lato = Math.max(img.width, img.height), k = Math.min(1, 2000 / lato);
        var tela = document.createElement('canvas');
        tela.width = Math.round(img.width * k); tela.height = Math.round(img.height * k);
        tela.getContext('2d').drawImage(img, 0, 0, tela.width, tela.height);
        return new Promise(function (fatto) {
          tela.toBlob(function (b) { fatto(b ? new File([b], (file.name || 'foto').replace(/\.[^.]+$/, '') + '.jpg', { type: 'image/jpeg' }) : file); }, 'image/jpeg', 0.86);
        });
      }).catch(function () { return file; });
    }

    function mandaImmagine(p, riempi, fatto, fallita) {
      chiedi('/product/edit/' + p.id + '/image').then(function (r) {
        var gettone = r.doc.querySelector('[name="image[_token]"]');
        if (!gettone) {
          if (!r.doc.getElementById('console-aside')) { location.reload(); return null; }
          return { percorso: '', doc: r.doc };
        }
        var dati = new FormData();
        riempi(dati);
        dati.append('image[_token]', gettone.value);
        return fetch('/product/edit/' + p.id + '/image', { method: 'POST', body: dati, credentials: 'same-origin' }).then(function (x) {
          return x.text().then(function (t) {
            return { percorso: new URL(x.url, location.href).pathname.replace(/\/+$/, ''), doc: new DOMParser().parseFromString(t, 'text/html') };
          });
        });
      }).then(function (r) {
        if (!r) return;
        var nuovo = /^\/product\/info\/\d+$/.test(r.percorso) ? leggiProdotto(r.doc, p.id) : null;
        var problemi = leggiErrori(r.doc);
        if (nuovo && !problemi.length) {
          dopoRitorno = function () { mostraProdotto(nuovo); mostraAvviso(fatto, null, true); };
          history.back();
          return;
        }
        fallita();
        mostraAvviso('Non salvato', problemi[0] || 'Il CRM non ha accettato l\'immagine.');
        avvisa('errore');
      }, function () {
        fallita();
        mostraAvviso('Connessione assente', 'L\'immagine non è stata salvata.');
        avvisa('errore');
      });
    }

    function disegnaImmagine(p) {
      chiudiTastiera();
      modifica = 'immagine';
      radice.classList.remove('ip-radice');
      radice.classList.add('ip-su-prodotto', 'ip-in-modifica');
      titolo.textContent = 'Immagine prodotto';
      vista.innerHTML = '';
      azioni.innerHTML = '';
      vista.appendChild(chipProdotto(p));

      var scelto = null;
      var anteprima = el('div', 'ip-scheda ip-anteprima');
      function mostra(src) {
        anteprima.innerHTML = '';
        if (src) { var img = document.createElement('img'); img.src = src; img.alt = ''; anteprima.appendChild(img); }
        else { anteprima.appendChild(crea('span', 'ip-anteprima-vuota', IC.foto)); anteprima.appendChild(el('div', 'ip-anteprima-testo', 'Nessuna immagine')); }
      }
      mostra(p.foto);
      vista.appendChild(anteprima);

      var campoFile = document.createElement('input');
      campoFile.type = 'file';
      campoFile.accept = 'image/*';
      campoFile.style.display = 'none';
      vista.appendChild(campoFile);

      var scegli = crea('button', 'ip-secondario ip-largo', IC.camera + '<span>Scatta o scegli una foto</span>');
      scegli.type = 'button';
      scegli.addEventListener('click', function () { campoFile.click(); });
      vista.appendChild(scegli);

      var salva = tastoAzione('ip-azione ip-azione-salva', '<b>Salva immagine</b>', function () {
        if (!scelto || salva.disabled) return;
        salva.disabled = true;
        salva.innerHTML = '<b>Caricamento…</b>';
        alleggerisci(scelto).then(function (file) {
          mandaImmagine(p, function (dati) { dati.append('image[image][file]', file, file.name || 'foto.jpg'); }, 'Immagine aggiornata', function () {
            salva.disabled = false;
            salva.innerHTML = '<b>Salva immagine</b>';
          });
        });
      });
      salva.disabled = true;
      campoFile.addEventListener('change', function () {
        var file = campoFile.files && campoFile.files[0];
        if (!file) return;
        scelto = file;
        try { mostra(URL.createObjectURL(file)); } catch (e) { /* resta l'immagine di prima */ }
        salva.disabled = false;
      });

      if (p.foto) {
        var togli = crea('button', 'ip-secondario ip-pericolo ip-largo', IC.cestino + '<span>Togli l\'immagine</span>');
        togli.type = 'button';
        togli.addEventListener('click', function () {
          conferma('Togliere l\'immagine?', 'Il prodotto resterà senza foto finché non ne carichi un\'altra.', 'Togli', function () {
            togli.disabled = true;
            mandaImmagine(p, function (dati) { dati.append('image[image][remove]', '1'); }, 'Immagine tolta', function () { togli.disabled = false; });
          });
        });
        vista.appendChild(togli);
      }

      azioni.appendChild(salva);
      radice.classList.remove('ip-senza-azioni');
      vista.scrollTop = 0;
    }

    function disegnaModifica(p, quale) {
      if (quale === 'immagine') { disegnaImmagine(p); return; }
      chiudiTastiera();
      modifica = quale;
      radice.classList.remove('ip-radice');
      radice.classList.add('ip-su-prodotto', 'ip-in-modifica');
      titolo.textContent = quale === 'prezzo' ? 'Modifica prezzo' : 'Modifica quantità';
      vista.innerHTML = '';
      azioni.innerHTML = '';
      vista.appendChild(chipProdotto(p));
      var m = moduli[p.id] && moduli[p.id][quale];
      if (!m) {
        vista.insertAdjacentHTML('beforeend', '<div class="ip-scheda ip-dati ip-finto" style="margin-top:10px"><i style="width:60%"></i><i class="ip-alto" style="width:100%"></i><i style="width:80%"></i></div>');
        radice.classList.add('ip-senza-azioni');
        vista.scrollTop = 0;
        return;
      }
      radice.classList.remove('ip-senza-azioni');
      var salva = el('button', 'ip-azione ip-azione-salva');
      salva.type = 'button';
      salva.innerHTML = '<b>Salva</b>';
      azioni.appendChild(salva);
      if (quale === 'prezzo') moduloPrezzo(p, m, salva); else moduloQuantita(p, m, salva);
      vista.scrollTop = 0;
    }

    function invia(p, quale, corpoPost, salva, fatto, altroIndirizzo) {
      salva.disabled = true;
      salva.innerHTML = '<b>Salvataggio…</b>';
      var indirizzo = altroIndirizzo || '/product/edit/' + p.id + '/' + (quale === 'prezzo' ? 'price' : 'quantity');
      chiedi(indirizzo, corpoPost).then(function (r) {
        delete moduli[p.id];
        if (/\/login$/.test(r.percorso) || !r.doc.getElementById('console-aside')) { location.reload(); return; }
        var nuovo = /^\/product\/info\/\d+$/.test(r.percorso) ? leggiProdotto(r.doc, p.id) : null;
        var problemi = leggiErrori(r.doc);
        if (nuovo && !(problemi.length && r.percorso.indexOf('/edit/') !== -1)) {
          dopoRitorno = function () {
            mostraProdotto(nuovo);
            if (problemi.length) { mostraAvviso('Non salvato', problemi[0]); avvisa('errore'); }
            else mostraAvviso(fatto, null, true);
          };
          history.back();
          return;
        }
        // Il sito ha rimandato al modulo: qualcosa non è stato accettato.
        var letto = quale === 'prezzo' ? leggiModuloPrezzo(r.doc) : leggiModuloQuantita(r.doc);
        if (letto) { moduli[p.id] = {}; moduli[p.id][quale] = letto; letto.quando = Date.now(); }
        salva.disabled = false;
        salva.innerHTML = '<b>Salva</b>';
        mostraAvviso('Non salvato', problemi[0] || 'Il CRM non ha accettato la modifica.');
        avvisa('errore');
      }, function () {
        salva.disabled = false;
        salva.innerHTML = '<b>Salva</b>';
        mostraAvviso('Connessione assente', 'La modifica non è stata salvata.');
        avvisa('errore');
      });
    }
    function codifica(coppie) {
      return coppie.map(function (c) { return encodeURIComponent(c[0]) + '=' + encodeURIComponent(c[1] == null ? '' : c[1]); }).join('&');
    }
    function campoGrande(suffisso, modoTastiera) {
      var box = el('div', 'ip-campo-grande');
      var input = document.createElement('input');
      input.type = 'text';
      input.setAttribute('inputmode', modoTastiera);
      input.setAttribute('autocomplete', 'off');
      box.appendChild(input);
      if (suffisso) box.appendChild(el('span', '', suffisso));
      return { box: box, input: input };
    }
    function prontoAScrivere(input) {
      if (cfg.tastiera === false) return;
      try { input.focus({ preventScroll: true }); } catch (e) { input.focus(); }
      avvisa('tastiera');
    }

    function moduloPrezzo(p, m, salva) {
      var modo = 'amount';
      var base = m.base || Math.round((numero(p.prezzoBase) || 0) * 100);

      var numeri = el('div', 'ip-coppia');
      var attuale = el('div', 'ip-scheda ip-numero ip-numero-prezzo');
      attuale.appendChild(el('div', 'ip-numero-nome', 'Prezzo attuale'));
      attuale.appendChild(el('div', 'ip-numero-valore', p.prezzo || '—'));
      numeri.appendChild(attuale);
      var listino = el('div', 'ip-scheda ip-numero');
      listino.appendChild(el('div', 'ip-numero-nome', 'Prezzo pieno'));
      listino.appendChild(el('div', 'ip-numero-valore ip-numero-medio', base ? euro(base) : (p.prezzoBase || '—')));
      numeri.appendChild(listino);
      vista.appendChild(numeri);

      var zona = el('div', '');
      vista.appendChild(zona);
      var esito = el('div', 'ip-esito');
      var esitoNome = el('span', '', '');
      var esitoValore = el('b', '', '');
      esito.appendChild(esitoNome); esito.appendChild(esitoValore);

      var campoPrezzo, campoSconto;
      function valore() {
        var c = modo === 'amount' ? campoPrezzo : campoSconto;
        var n = parseFloat(String(c.input.value).replace(',', '.'));
        return isNaN(n) ? null : n;
      }
      function aggiorna() {
        var n = valore();
        var valido = n != null && n >= 0 && base > 0 && (modo === 'amount' || n <= 100);
        if (modo === 'amount') {
          esitoNome.textContent = 'Sconto applicato';
          esitoValore.textContent = valido ? Math.round((1 - Math.round(n * 100) / base) * 100) + '%' : '—';
        } else {
          esitoNome.textContent = 'Prezzo scontato';
          esitoValore.textContent = valido ? euro(Math.round(base * (1 - n / 100))) : '—';
        }
        esito.classList.toggle('ip-esito-ok', valido);
        salva.disabled = n == null;
      }
      function disegna() {
        zona.innerHTML = '';
        zona.appendChild(segmenti([{ v: 'amount', t: 'Nuovo prezzo' }, { v: 'percentage', t: 'Sconto in %' }], modo, function (v) { modo = v; disegna(); }));
        if (modo === 'amount') {
          zona.appendChild(el('div', 'ip-etichetta', 'Nuovo prezzo scontato'));
          campoPrezzo = campoGrande('€', 'decimal');
          zona.appendChild(campoPrezzo.box);
          campoPrezzo.input.addEventListener('input', aggiorna);
          ascoltaLettore(campoPrezzo.input);
          prontoAScrivere(campoPrezzo.input);
        } else {
          zona.appendChild(el('div', 'ip-etichetta', 'Sconto da applicare'));
          campoSconto = campoGrande('%', 'decimal');
          zona.appendChild(campoSconto.box);
          campoSconto.input.addEventListener('input', aggiorna);
          ascoltaLettore(campoSconto.input);
          var rapidi = el('div', 'ip-rapidi');
          [10, 20, 30, 50].forEach(function (x) {
            var t = el('button', '', '-' + x + '%');
            t.type = 'button';
            t.addEventListener('click', function () { campoSconto.input.value = String(x); aggiorna(); });
            rapidi.appendChild(t);
          });
          zona.appendChild(rapidi);
          prontoAScrivere(campoSconto.input);
        }
        zona.appendChild(esito);
        aggiorna();
      }
      disegna();

      if (m.togli && m.togli.indirizzo && m.togli.indirizzo.indexOf('/product/edit/' + p.id + '/') === 0) {
        var togli = crea('button', 'ip-secondario', '<span>Togli lo sconto attuale</span>');
        togli.type = 'button';
        togli.addEventListener('click', function () {
          togli.disabled = true;
          invia(p, 'prezzo', codifica([['_token', m.togli.gettone]]), salva, 'Sconto tolto', m.togli.indirizzo);
        });
        vista.appendChild(togli);
      }

      salva.addEventListener('click', function () {
        if (valore() == null) return;
        invia(p, 'prezzo', codifica([
          ['price[mode]', modo],
          ['price[fixedValue]', modo === 'amount' ? campoPrezzo.input.value.trim() : ''],
          ['price[percentageValue]', modo === 'percentage' ? campoSconto.input.value.trim().replace(',', '.') : ''],
          ['price[_token]', m.gettone]
        ]), salva, 'Prezzo aggiornato');
      });
    }

    function moduloQuantita(p, m, salva) {
      var magazzino = m.presenti.length ? m.presenti[0].v : '';
      var modo = 'set';
      var motivo = '';
      var giacenze = {};
      m.presenti.forEach(function (g) { giacenze[g.v] = g.q; });
      function nomeMagazzino(v) {
        for (var i = 0; i < m.tutti.length; i++) if (m.tutti[i].v === v) return m.tutti[i].t;
        for (var j = 0; j < m.presenti.length; j++) if (m.presenti[j].v === v) return m.presenti[j].t;
        return '';
      }

      vista.appendChild(el('div', 'ip-etichetta', 'Magazzino'));
      var scelta = el('div', 'ip-magazzini');
      vista.appendChild(scelta);
      var numeri = el('div', 'ip-coppia ip-coppia-pari');
      var ora = el('div', 'ip-scheda ip-numero');
      ora.appendChild(el('div', 'ip-numero-nome', 'Giacenza attuale'));
      var oraValore = el('div', 'ip-numero-valore', '');
      ora.appendChild(oraValore);
      numeri.appendChild(ora);
      var dopo = el('div', 'ip-scheda ip-numero ip-numero-prezzo');
      dopo.appendChild(el('div', 'ip-numero-nome', 'Dopo la modifica'));
      var dopoValore = el('div', 'ip-numero-valore', '');
      dopo.appendChild(dopoValore);
      numeri.appendChild(dopo);
      vista.appendChild(numeri);
      var zona = el('div', '');
      vista.appendChild(zona);
      var zonaMotivo = el('div', '');
      vista.appendChild(zonaMotivo);

      var campoNuova, campoDelta;
      function attuale() { return giacenze[magazzino] || 0; }
      function variazione() {
        if (modo === 'set') {
          var n = parseInt(campoNuova.input.value, 10);
          return isNaN(n) ? null : n - attuale();
        }
        var d = parseInt(campoDelta.input.value, 10);
        return isNaN(d) ? null : d;
      }
      var segnoMotivo = 0;
      function aggiorna() {
        var v = variazione();
        oraValore.innerHTML = '';
        oraValore.appendChild(document.createTextNode(String(attuale())));
        oraValore.appendChild(el('small', '', ' pz'));
        dopoValore.innerHTML = '';
        dopoValore.appendChild(document.createTextNode(String(attuale() + (v || 0))));
        dopoValore.appendChild(el('small', '', v ? ' pz (' + (v > 0 ? '+' : '') + v + ')' : ' pz'));
        dopo.classList.toggle('ip-su', !!v && v > 0);
        dopo.classList.toggle('ip-giu', !!v && v < 0);
        salva.disabled = !magazzino || !v;
        var segno = v ? (v > 0 ? 1 : -1) : 0;
        if (segno !== segnoMotivo) { segnoMotivo = segno; motivo = ''; disegnaMotivo(); }
      }
      function disegnaMotivo() {
        zonaMotivo.innerHTML = '';
        if (!segnoMotivo) return;
        var voci = segnoMotivo > 0 ? m.carico : m.scarico;
        if (!voci.length) return;
        zonaMotivo.appendChild(el('div', 'ip-etichetta', segnoMotivo > 0 ? 'Motivo del carico (facoltativo)' : 'Motivo dello scarico (facoltativo)'));
        if (NATIVO) {
          zonaMotivo.appendChild(rigaMenu('Motivo', voci, motivo, function (v) { motivo = v; disegnaMotivo(); }, 'Nessuno'));
          return;
        }
        var box = el('div', 'ip-motivi');
        voci.forEach(function (o) {
          var t = el('button', o.v === motivo ? 'ip-scelto' : '', o.t);
          t.type = 'button';
          t.addEventListener('click', function () { motivo = motivo === o.v ? '' : o.v; disegnaMotivo(); });
          box.appendChild(t);
        });
        zonaMotivo.appendChild(box);
      }
      function disegnaMagazzini() {
        scelta.innerHTML = '';
        var visti = {};
        m.presenti.forEach(function (g) {
          visti[g.v] = true;
          var t = el('button', g.v === magazzino ? 'ip-scelto' : '');
          t.type = 'button';
          t.appendChild(el('span', '', g.t));
          t.appendChild(el('b', '', g.q + ' pz'));
          t.addEventListener('click', function () { magazzino = g.v; disegnaMagazzini(); aggiorna(); });
          scelta.appendChild(t);
        });
        if (magazzino && !visti[magazzino]) {
          var altro = el('button', 'ip-scelto');
          altro.type = 'button';
          altro.appendChild(el('span', '', nomeMagazzino(magazzino)));
          altro.appendChild(el('b', '', '0 pz'));
          scelta.appendChild(altro);
        }
        var piu = el('button', 'ip-altro');
        piu.type = 'button';
        piu.appendChild(el('span', '', 'Altro magazzino'));
        piu.appendChild(crea('b', '', IC.piu));
        piu.addEventListener('click', scegliMagazzino);
        scelta.appendChild(piu);
      }
      function scegliMagazzino() {
        var velo = el('div', 'ip-foglio');
        var carta = el('div', 'ip-foglio-carta');
        carta.appendChild(el('div', 'ip-foglio-titolo', 'Scegli il magazzino'));
        var filtro = document.createElement('input');
        filtro.type = 'search'; filtro.placeholder = 'Cerca magazzino'; filtro.className = 'ip-foglio-filtro';
        carta.appendChild(filtro);
        var lista = el('div', 'ip-foglio-lista');
        carta.appendChild(lista);
        function riempi() {
          var q = filtro.value.trim().toLowerCase();
          lista.innerHTML = '';
          m.tutti.forEach(function (o) {
            if (q && o.t.toLowerCase().indexOf(q) === -1) return;
            var r = el('button', o.v === magazzino ? 'ip-scelto' : '', o.t);
            r.type = 'button';
            r.addEventListener('click', function () { magazzino = o.v; chiudi(); disegnaMagazzini(); aggiorna(); });
            lista.appendChild(r);
          });
        }
        function chiudi() { if (velo.parentNode) velo.parentNode.removeChild(velo); }
        filtro.addEventListener('input', riempi);
        velo.addEventListener('click', function (e) { if (e.target === velo) chiudi(); });
        velo.appendChild(carta);
        radice.appendChild(velo);
        riempi();
      }
      function disegna() {
        zona.innerHTML = '';
        zona.appendChild(segmenti([{ v: 'set', t: 'Imposta quantità' }, { v: 'adjust', t: 'Aggiungi o togli' }], modo, function (v) { modo = v; disegna(); }));
        if (modo === 'set') {
          zona.appendChild(el('div', 'ip-etichetta', 'Nuova quantità in questo magazzino'));
          campoNuova = campoGrande('pz', 'numeric');
          zona.appendChild(campoNuova.box);
          campoNuova.input.addEventListener('input', aggiorna);
          ascoltaLettore(campoNuova.input);
          prontoAScrivere(campoNuova.input);
        } else {
          zona.appendChild(el('div', 'ip-etichetta', 'Pezzi da aggiungere o togliere'));
          var riga = el('div', 'ip-passi');
          var meno = crea('button', '', IC.meno); meno.type = 'button';
          var piu = crea('button', '', IC.piu); piu.type = 'button';
          campoDelta = campoGrande('pz', 'numeric');
          campoDelta.input.value = '0';
          function passo(x) { var n = parseInt(campoDelta.input.value, 10); campoDelta.input.value = String((isNaN(n) ? 0 : n) + x); aggiorna(); }
          meno.addEventListener('click', function () { passo(-1); });
          piu.addEventListener('click', function () { passo(1); });
          campoDelta.input.addEventListener('input', aggiorna);
          ascoltaLettore(campoDelta.input);
          riga.appendChild(meno); riga.appendChild(campoDelta.box); riga.appendChild(piu);
          zona.appendChild(riga);
        }
        aggiorna();
      }
      disegnaMagazzini();
      disegna();

      salva.addEventListener('click', function () {
        var v = variazione();
        if (!magazzino || !v) return;
        invia(p, 'quantita', codifica([
          ['movement[warehouse]', magazzino],
          ['movement[mode]', modo],
          ['movement[newQuantity]', modo === 'set' ? campoNuova.input.value.trim() : ''],
          ['movement[delta]', modo === 'adjust' ? campoDelta.input.value.trim() : ''],
          ['movement[loadReason]', v > 0 ? motivo : ''],
          ['movement[unloadReason]', v < 0 ? motivo : ''],
          ['movement[_token]', m.gettone]
        ]), salva, 'Giacenza aggiornata');
      });
    }

    // ====================================================================================
    // Carrelli. Stesso principio del resto dell'app: i dati arrivano dal CRM in sottofondo
    // e le schermate sono dell'app. Dentro un carrello aperto, un codice letto viene aggiunto
    // al carrello invece di aprire la scheda del prodotto.
    // ====================================================================================
    var vistaCarrelli = null;   // null, 'elenco', 'carrello', 'nuovo', 'catalogo'
    var carrello = null;        // carrello aperto: { id, nome, gettone, indirizzi, righe, totali, ... }
    var elencoCarrelli = [];
    var soloAperti = true;
    var filtroCarrelli = '';
    var totaleCarrelli = 0;
    var inCarico = false;

    function chiediJson(indirizzo, daInviare) {
      var opzioni = { credentials: 'same-origin', headers: { 'Accept': 'application/json', 'X-Requested-With': 'XMLHttpRequest' } };
      if (daInviare) {
        opzioni.method = 'POST';
        opzioni.headers['Content-Type'] = 'application/json';
        opzioni.body = JSON.stringify(daInviare);
      }
      return fetch(indirizzo, opzioni).then(function (r) {
        return r.text().then(function (testo) {
          var dati = null;
          try { dati = JSON.parse(testo); } catch (e) { /* non era JSON: sessione scaduta o accesso negato */ }
          return { ok: r.ok, stato: r.status, dati: dati, login: /\/login/.test(r.url) };
        });
      });
    }
    function soldi(numeroEuro) { return euro(Math.round((numeroEuro || 0) * 100)); }
    function statoVista(nome, extra) {
      var s = { ipVista: nome };
      if (extra) for (var k in extra) s[k] = extra[k];
      return s;
    }
    function spingi(nome, extra) { try { var st = statoVista(nome, extra); st.sotto = true; history.pushState(st, '', location.pathname); } catch (e) { /* non indispensabile */ } }
    function intestazioneInterna(testo) {
      radice.classList.remove('ip-radice');
      radice.classList.add('ip-su-prodotto');
      radice.classList.remove('ip-in-modifica');
      titolo.textContent = testo;
    }
    function fuoriDaiCarrelli() { radice.classList.remove('ip-senza-ricerca'); if (vistaCarrelli === 'elenco') { campo.value = ''; filtroCarrelli = ''; } if (vistaCarrelli === 'ordini' || vistaCarrelli === 'ordine') { campo.value = ''; ordini.aperto = null; } vistaCarrelli = null; carrello = null; campo.setAttribute('placeholder', 'Codice o EAN'); }

    // ---------- Elenco dei carrelli ----------
    function disegnaElencoCarrelli() {
      vista.innerHTML = '';
      var q = filtroCarrelli.toLowerCase();
      var visibili = elencoCarrelli.filter(function (c) {
        return !q || (c.nome + ' ' + c.cliente + ' ' + c.venditore).toLowerCase().indexOf(q) !== -1;
      });
      if (inCarico && !elencoCarrelli.length) {
        vista.insertAdjacentHTML('beforeend', '<div class="ip-scheda ip-dati ip-finto"><i style="width:70%"></i><i style="width:50%"></i><i style="width:80%"></i><i style="width:60%"></i></div>');
      } else if (!visibili.length) {
        vista.appendChild(el('div', 'ip-vuoto', elencoCarrelli.length ? 'Nessun carrello con questo nome.' : 'Non ci sono carrelli. Creane uno con il tasto qui sotto.'));
      } else {
        if (!q && totaleCarrelli > elencoCarrelli.length) vista.appendChild(el('div', 'ip-etichetta', 'Ultimi ' + elencoCarrelli.length + ' di ' + totaleCarrelli));
        var lista = el('div', 'ip-scheda ip-lista');
        visibili.forEach(function (c) {
          var riga = crea('button', 'ip-riga ip-riga-carrello');
          riga.type = 'button';
          var t = el('span', 'ip-riga-testi');
          t.appendChild(el('span', 'ip-riga-nome', c.nome));
          t.appendChild(el('span', 'ip-riga-sotto', c.prodotti + (c.prodotti === 1 ? ' prodotto' : ' prodotti') + (c.cliente ? ' · ' + c.cliente : '') + (c.venditore ? ' · ' + c.venditore : '')));
          t.appendChild(el('span', 'ip-riga-sotto', c.creato + (c.consumato ? ' · Consumato' : '')));
          riga.appendChild(t);
          riga.appendChild(el('span', 'ip-riga-prezzo', c.prezzo));
          riga.appendChild(crea('span', 'ip-riga-freccia', ICONA_FRECCIA));
          riga.addEventListener('click', function () { apriCarrello(c.id, true); });
          lista.appendChild(riga);
        });
        vista.appendChild(lista);
      }
      azioni.innerHTML = '';
      azioni.appendChild(tastoAzione('ip-azione ip-azione-salva', '<b>Nuovo carrello</b>', function () { mostraNuovoCarrello(true); }));
      radice.classList.remove('ip-senza-azioni');
    }

    function caricaCarrelli() {
      var mia = ++richiesta;
      inCarico = true;
      if (!elencoCarrelli.length) disegnaElencoCarrelli();
      // Il CRM elenca dal più vecchio: se i carrelli sono tanti prendo le ultime pagine, cioè i più recenti.
      var base = '/retail/cart?dataTableView=cart_table&f%5Bsearch%5D=' + (soloAperti ? '&f%5Bconsumed%5D=0' : '') + '&perPage=100&page=';
      // Per "Tutti", che sono centinaia, chiedo prima solo quanti sono: è molto più rapido.
      chiediJson(soloAperti ? base + '1' : base.replace('perPage=100', 'perPage=1') + '1').then(function (r) {
        var quanti = r.dati && r.dati.filtered ? r.dati.filtered : 0;
        if (!r.dati || !r.dati.rows) return r;
        if (quanti <= 100) return soloAperti ? r : chiediJson(base + '1');
        var ultima = Math.ceil(quanti / 100);
        return Promise.all([chiediJson(base + (ultima - 1)), chiediJson(base + ultima)]).then(function (pagine) {
          if (!pagine[0].dati || !pagine[1].dati || !pagine[0].dati.rows || !pagine[1].dati.rows) return pagine[1];
          pagine[1].dati.rows = pagine[0].dati.rows.concat(pagine[1].dati.rows);
          return pagine[1];
        });
      }).then(function (r) {
        if (mia !== richiesta || vistaCarrelli !== 'elenco') return;
        inCarico = false;
        if (r.login) { location.reload(); return; }
        if (!r.dati || !r.dati.rows) {
          vista.innerHTML = '';
          vista.appendChild(el('div', 'ip-vuoto', r.stato === 403 ? 'Questo utente non ha accesso ai carrelli.' : 'Non riesco a leggere i carrelli dal CRM.'));
          azioni.innerHTML = '';
          radice.classList.add('ip-senza-azioni');
          return;
        }
        elencoCarrelli = r.dati.rows.map(function (x) {
          return {
            id: (String(x.summaryUrl || '').match(/(\d+)$/) || [])[1],
            nome: x.name || '', prodotti: x.productsNumber || 0, prezzo: x.price || '',
            cliente: x.customer_name && x.customer_name.name ? x.customer_name.name : '',
            venditore: x.createdBy_name && x.createdBy_name.name ? x.createdBy_name.name : '',
            creato: x.createdAt || '', consumato: !!(x.consumed && /^s/i.test(x.consumed.value || ''))
          };
        }).filter(function (c) { return c.id; }).reverse();
        totaleCarrelli = r.dati.filtered || elencoCarrelli.length;
        disegnaElencoCarrelli();
      }, function () {
        if (mia !== richiesta) return;
        inCarico = false;
        if (vistaCarrelli === 'elenco') disegnaElencoCarrelli();
        mostraAvviso('Connessione assente', 'Controlla la rete e riprova.');
        avvisa('errore');
      });
    }

    function mostraCarrelli(daUtente) {
      chiudiTastiera();
      corrente = null; modifica = null; carrello = null;
      vistaCarrelli = 'elenco';
      radice.classList.remove('ip-su-prodotto', 'ip-in-modifica', 'ip-senza-ricerca');
      radice.classList.add('ip-radice');
      schede.setAttribute('data-scheda', 'carrelli');
      campo.setAttribute('placeholder', 'Cerca carrello');
      campo.value = filtroCarrelli;
      if (daUtente) { try { history.replaceState(statoVista('carrelli'), '', location.pathname); } catch (e) { /* non indispensabile */ } }
      disegnaElencoCarrelli();
      caricaCarrelli();
      vista.scrollTop = 0;
    }

    // ---------- Nuovo carrello ----------
    function mostraNuovoCarrello(daUtente) {
      chiudiTastiera();
      vistaCarrelli = 'nuovo';
      carrello = null;
      intestazioneInterna('Nuovo carrello');
      campo.setAttribute('placeholder', 'Codice o EAN');
      if (daUtente) spingi('nuovo');
      vista.innerHTML = '<div class="ip-scheda ip-dati ip-finto"><i style="width:40%"></i><i class="ip-alto" style="width:100%"></i><i style="width:60%"></i></div>';
      azioni.innerHTML = '';
      radice.classList.add('ip-senza-azioni');
      var mia = ++richiesta;
      chiedi('/retail/cart/add').then(function (r) {
        if (mia !== richiesta || vistaCarrelli !== 'nuovo') return;
        var f = r.doc.querySelector('form[name="cart"]');
        var gettone = f && f.querySelector('[name="cart[_token]"]');
        if (!gettone) {
          if (!r.doc.getElementById('console-aside')) { location.reload(); return; }
          vista.innerHTML = '';
          vista.appendChild(el('div', 'ip-vuoto', 'Questo utente non può creare carrelli.'));
          return;
        }
        var casse = opzioni(f, 'cart[pointOfSale]');
        // Dall'app il carrello nasce sempre sulla Cassa Jolly, senza chiedere nulla.
        // La scelta della cassa compare solo se il CRM non ha una Cassa Jolly.
        var jolly = casse.filter(function (c) { return /jolly/i.test(c.t); })[0];
        var cassa = jolly ? jolly.v : (casse.length === 1 ? casse[0].v : '');

        vista.innerHTML = '';
        vista.appendChild(el('div', 'ip-etichetta', 'Nome del carrello'));
        var nome = campoGrande('', 'text');
        nome.input.setAttribute('maxlength', '80');
        nome.box.classList.add('ip-campo-testo');
        vista.appendChild(nome.box);
        var scelte = el('div', 'ip-motivi');
        if (!jolly) {
          vista.appendChild(el('div', 'ip-etichetta', 'Cassa che lo richiamerà'));
          vista.appendChild(scelte);
        }
        var salva = tastoAzione('ip-azione ip-azione-salva', '<b>Crea carrello</b>', function () {
          if (salva.disabled) return;
          salva.disabled = true;
          salva.innerHTML = '<b>Creo…</b>';
          chiedi('/retail/cart/add', codifica([['cart[name]', nome.input.value.trim()], ['cart[pointOfSale]', cassa], ['cart[_token]', gettone.value]])).then(function (esito) {
            var nuovo = esito.percorso.match(/^\/retail\/cart\/(\d+)$/);
            if (nuovo) {
              // Il nuovo carrello prende il posto di questa schermata: indietro torna all'elenco.
              try { history.replaceState(statoVista('carrello', { id: nuovo[1], sotto: true }), '', location.pathname); } catch (e) { /* non indispensabile */ }
              apriCarrello(nuovo[1], false, esito.doc);
              mostraAvviso('Carrello creato', 'Ora leggi i codici per riempirlo.', true);
              return;
            }
            salva.disabled = false;
            salva.innerHTML = '<b>Crea carrello</b>';
            mostraAvviso('Non creato', leggiErrori(esito.doc)[0] || 'Il CRM non ha accettato il carrello.');
            avvisa('errore');
          }, function () {
            salva.disabled = false;
            salva.innerHTML = '<b>Crea carrello</b>';
            mostraAvviso('Connessione assente', 'Il carrello non è stato creato.');
            avvisa('errore');
          });
        });
        function aggiorna() { salva.disabled = !nome.input.value.trim() || !cassa; }
        function disegnaCasse() {
          scelte.innerHTML = '';
          if (NATIVO) {
            scelte.appendChild(rigaMenu('Cassa', casse, cassa, function (v) { cassa = v; disegnaCasse(); aggiorna(); }, cassa ? null : 'Scegli…'));
            return;
          }
          casse.forEach(function (c) {
            var t = el('button', c.v === cassa ? 'ip-scelto' : '', c.t);
            t.type = 'button';
            t.addEventListener('click', function () { cassa = c.v; disegnaCasse(); aggiorna(); });
            scelte.appendChild(t);
          });
        }
        nome.input.addEventListener('input', aggiorna);
        nome.input.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); nome.input.blur(); } });
        disegnaCasse();
        azioni.appendChild(salva);
        radice.classList.remove('ip-senza-azioni');
        aggiorna();
        prontoAScrivere(nome.input);
      }, function () {
        if (mia !== richiesta) return;
        mostraAvviso('Connessione assente', 'Controlla la rete e riprova.');
        avvisa('errore');
      });
    }

    // ---------- Dentro un carrello ----------
    // Modulo "Scarica prodotti" del carrello: c'è finché il carrello non è stato scaricato (si scarica una volta sola).
    function leggiScarico(doc) {
      var f = doc.querySelector('form[name="unload"]');
      var g = f && f.querySelector('[name="unload[_token]"]');
      if (!g) return null;
      return { gettone: g.value, magazzini: opzioni(f, 'unload[warehouse]'), causali: opzioni(f, 'unload[reason]') };
    }
    function nomeDi(voci, valore) { var o = voci.filter(function (x) { return x.v === valore; })[0]; return o ? o.t : ''; }

    function leggiCarrello(doc, id) {
      var compone = doc.querySelector('#cart-compose');
      if (!compone) return null;
      var d = compone.dataset;
      var intestazione = doc.querySelector('h1');
      var elimina = doc.querySelector('form[action$="/retail/cart/' + id + '/delete"] [name="_token"]');
      var cliente = '';
      var finestraCliente = doc.getElementById('cart-customer-modal');
      if (finestraCliente) {
        var trovato = pulisci(finestraCliente.textContent).match(/Ora è associato (.+?)\. Cercane/);
        if (trovato) cliente = trovato[1];
      }
      return {
        id: id,
        nome: pulisci(intestazione ? intestazione.textContent : '').replace(/^Carrello\s+/i, '') || 'Carrello',
        gettone: d.token, aggiungi: d.addUrl, togli: d.removeUrl, quantita: d.quantityUrl, prezzo: d.priceUrl,
        gettoneElimina: elimina ? elimina.value : '', cliente: cliente, righe: [], totali: null,
        gettoneSconto: (doc.querySelector('[name="discounted_amount[_token]"]') || {}).value || '',
        gettoneCliente: (doc.querySelector('[name="customer_choice[_token]"]') || {}).value || '',
        scarico: leggiScarico(doc)
      };
    }

    function caricaRighe(dopo) {
      var c = carrello;
      if (!c) return;
      var giro = giroRighe;
      chiediJson('/retail/cart/' + c.id + '?dataTableView=product_table&f%5Bsearch%5D=&page=1&perPage=500').then(function (r) {
        if (carrello !== c) return;
        if (r.login) { location.reload(); return; }
        if (!r.dati || !r.dati.rows) return;
        // Se nel frattempo è stata toccata un'altra quantità, questa risposta è già vecchia.
        if (giro !== giroRighe) return;
        var prima = c.righe;
        c.righe = r.dati.rows.map(function (x) {
          var scontato = typeof x.product_discountedPrice === 'number' ? x.product_discountedPrice : null;
          return {
            id: x.id, codice: x.product_code || '', ean: x.product_ean || '', nome: x.product_description || '',
            fornitore: x.product_supplier_companyName || '', costo: typeof x.product_cost === 'number' ? x.product_cost : null,
            quantita: x.quantity || 1, prezzo: x.product_price || 0, scontato: scontato, totale: x.totalPrice || 0,
            foto: x.product_image && x.product_image.src && x.product_image.src.indexOf('data:') !== 0 ? x.product_image.src : ''
          };
        }).reverse();
        c.totali = r.dati.additionalData || null;
        // Stessi articoli e stessi prezzi: aggiorno solo i numeri, senza ridisegnare (niente sfarfallio).
        var uguali = c.nodi && prima.length === c.righe.length && c.righe.every(function (n, i) {
          return prima[i].id === n.id && prima[i].prezzo === n.prezzo && prima[i].scontato === n.scontato;
        });
        if (vistaCarrelli === 'carrello') { if (uguali && statoFisso(c) === c.statoDisegnato) aggiornaNumeri(); else disegnaCarrello(); }
        else if (vistaCarrelli === 'riga') { if (uguali) aggiornaNumeri(); else disegnaRiga(); }
        if (dopo) dopo();
      }, function () { /* resta quello che c'è */ });
    }

    function manda(indirizzo, dati) {
      var c = carrello;
      var corpoRichiesta = { _token: c.gettone };
      for (var k in dati) corpoRichiesta[k] = dati[k];
      return chiediJson(indirizzo, corpoRichiesta).then(function (r) {
        if (r.login) { location.reload(); return null; }
        if (!r.ok) {
          mostraAvviso(r.stato === 404 ? 'Articolo non trovato' : 'Non riuscito', (r.dati && r.dati.message) || 'Il CRM non ha accettato l\'operazione.');
          avvisa(r.stato === 404 ? 'non-trovato' : 'errore');
          return null;
        }
        return r.dati || {};
      }, function () {
        mostraAvviso('Connessione assente', 'L\'operazione non è stata eseguita.');
        avvisa('errore');
        return null;
      });
    }

    function aggiungiCodice(codice) {
      codice = pulisci(codice);
      if (!codice || !carrello) return;
      var c = carrello;
      manda(c.aggiungi, { identifier: codice }).then(function (esito) {
        if (!esito || carrello !== c) return;
        mostraAvviso('Aggiunto al carrello', (esito.message || '').replace(/\s*aggiunto al carrello\.?$/i, ''), true);
        avvisa('aggiunto');
        caricaRighe(function () {
          // Appena arrivano le righe mostro il nome dell'articolo e quanti ce ne sono ora.
          var riga = c.righe.filter(function (r) { return r.codice === codice || r.ean === codice; })[0];
          if (riga) mostraAvviso('Aggiunto al carrello', riga.nome + (riga.quantita > 1 ? ' · ora ' + riga.quantita : ''), true);
        });
      });
    }

    var giroRighe = 0;
    function totaleFissato(c) { return !!(c && c.totali && c.totali.totalPrice !== c.totali.totalDiscountedPrice); }
    // Quando si fissa il totale a mano l'app ricorda quanto facevano le righe in quel momento:
    // se poi i prodotti cambiano, lo segnala e chiede se tenere il totale o togliere lo sconto.
    var basiFisse = {};
    function leggiBase(id) {
      try { var v = localStorage.getItem('ip-totale-' + id); if (v != null) return Number(v); } catch (e) { /* uso la memoria */ }
      return basiFisse[id] != null ? basiFisse[id] : null;
    }
    function scriviBase(id, valore) {
      if (valore == null) delete basiFisse[id]; else basiFisse[id] = valore;
      try { if (valore == null) localStorage.removeItem('ip-totale-' + id); else localStorage.setItem('ip-totale-' + id, String(valore)); } catch (e) { /* resta in memoria */ }
    }
    function statoFisso(c) {
      if (!c || !c.totali) return 'no';
      if (!totaleFissato(c)) { if (leggiBase(c.id) != null) scriviBase(c.id, null); return 'no'; }
      var base = leggiBase(c.id);
      if (base == null) { scriviBase(c.id, c.totali.totalDiscountedPrice); return 'ok'; }
      return base === c.totali.totalDiscountedPrice ? 'ok' : 'cambiato';
    }
    function togliScontoTotale(c) {
      return chiedi('/retail/cart/' + c.id + '/discounted-amount', codifica([['discounted_amount[discountedAmount]', ''], ['discounted_amount[_token]', c.gettoneSconto]])).then(function (esito) {
        if (carrello !== c) return;
        var errori = leggiErrori(esito.doc);
        if (!rinfresca(esito.doc) || errori.length) { mostraAvviso('Sconto non rimosso', errori[0] || 'Il CRM non ha accettato la modifica.'); avvisa('errore'); return; }
        scriviBase(c.id, null);
        c.totali = null;
        caricaRighe(function () { if (vistaCarrelli === 'carrello') disegnaCarrello(); mostraAvviso('Sconto rimosso', 'Il totale ora segue le righe.', true); });
      }, function () { mostraAvviso('Connessione assente', 'Lo sconto non è stato rimosso.'); avvisa('errore'); });
    }
    function aggiornaNumeri() {
      var c = carrello;
      if (!c || !c.nodi) return;
      var somma = 0, pezzi = 0;
      c.righe.forEach(function (r) {
        somma += r.totale; pezzi += r.quantita;
        var n = c.nodi.righe[r.id];
        if (!n) return;
        n.quanti.textContent = String(r.quantita);
        n.totale.textContent = soldi(r.totale);
        n.meno.disabled = r.quantita <= 1;
      });
      // Se il totale è stato fissato a mano il CRM lo tiene fermo anche cambiando le quantità: lo mostro fermo anch'io.
      var fissato = totaleFissato(c);
      var finale = fissato || !c.locale ? (c.totali ? c.totali.totalPrice / 100 : somma) : somma;
      if (c.nodi.totale) c.nodi.totale.textContent = soldi(finale);
      if (c.nodi.pezzi) c.nodi.pezzi.textContent = String(pezzi);
      if (c.nodi.pieno) {
        var pieno = c.righe.reduce(function (t, r) { return t + r.prezzo * r.quantita; }, 0);
        c.nodi.pieno.textContent = soldi(pieno);
        if (c.nodi.percento) c.nodi.percento.textContent = pieno > finale ? '−' + testoPercento(percento(pieno, finale)) : '';
      }
    }
    var codeQuantita = {};
    function cambiaQuantita(riga, nuova) {
      if (nuova < 1) nuova = 1;
      riga.quantita = nuova;
      riga.totale = (riga.scontato != null ? riga.scontato : riga.prezzo) * nuova;
      clearTimeout(codeQuantita[riga.id]);
      var c = carrello;
      giroRighe++;
      c.locale = true;   // finché il CRM non conferma, il totale è quello calcolato qui
      aggiornaNumeri();
      codeQuantita[riga.id] = setTimeout(function () {
        var giro = giroRighe;
        manda(c.quantita.replace('__ROW__', riga.id), { quantity: String(nuova) }).then(function () {
          if (carrello !== c || giro !== giroRighe) return;
          c.locale = false;
          caricaRighe();
        });
      }, 450);
    }

    function percento(pieno, finale) { return pieno > 0 ? Math.round((1 - finale / pieno) * 1000) / 10 : 0; }
    function testoPercento(x) { return String(x).replace('.', ',') + '%'; }
    function virgola(n) { return (Math.round(n * 100) / 100).toFixed(2).replace('.', ','); }
    function inCarrello() { return !!carrello && /^(carrello|catalogo|riga|cliente)$/.test(vistaCarrelli || ''); }

    // Foglio unico per cambiare un importo: si può scrivere il prezzo finale, lo sconto in % o lo sconto in euro.
    // o = { titolo, testo, pieno, attuale, nota, finale (etichetta), salva(n) -> promessa, togli() -> promessa oppure null }
    function foglioImporto(o) {
      chiudiTastiera();
      if (NATIVO) {
        chiediNativo({ tipo: 'importo', titolo: o.titolo, testo: o.testo || '', pieno: o.pieno, attuale: o.attuale, nota: o.nota || '', finale: o.finale || 'Prezzo finale', togli: !!o.togli }, function (v) {
          if (!v) return;
          if (v.azione === 'togli' && o.togli) o.togli();
          else if (v.azione === 'salva' && typeof v.valore === 'number') o.salva(Math.round(v.valore * 100) / 100);
        });
        return;
      }
      var modo = 'prezzo';
      var nomeFinale = o.finale || 'Prezzo finale';
      var velo = el('div', 'ip-foglio');
      var carta = el('div', 'ip-foglio-carta');
      carta.appendChild(el('div', 'ip-foglio-titolo', o.titolo));
      if (o.testo) carta.appendChild(el('div', 'ip-foglio-testo', o.testo));
      var scelta = el('div', 'ip-segmenti ip-segmenti-foglio');
      carta.appendChild(scelta);
      var c = campoGrande('€', 'decimal');
      var simbolo = c.box.querySelector('span');
      carta.appendChild(c.box);
      var esito = el('div', 'ip-foglio-esito');
      carta.appendChild(esito);
      if (o.nota) carta.appendChild(el('div', 'ip-foglio-nota', o.nota));
      var ok = el('button', 'ip-foglio-ok', 'Salva');
      ok.type = 'button';
      function chiudi() { chiudiTastiera(); if (velo.parentNode) velo.parentNode.removeChild(velo); }
      function finale() {
        var n = parseFloat(c.input.value.replace(/\s/g, '').replace(',', '.'));
        if (isNaN(n) || n < 0) return null;
        var f = modo === 'prezzo' ? n : (modo === 'percento' ? o.pieno * (1 - n / 100) : o.pieno - n);
        f = Math.round(f * 100) / 100;
        return f < 0 ? null : f;
      }
      function aggiorna() {
        var f = finale();
        ok.disabled = f == null;
        esito.classList.toggle('ip-errore', f == null && !!c.input.value);
        if (f == null) { esito.textContent = c.input.value ? 'Valore non valido' : ' '; return; }
        var sconto = o.pieno - f;
        esito.textContent = nomeFinale + ' ' + soldi(f) + (sconto > 0.004 ? ' · sconto ' + soldi(sconto) + ' (' + testoPercento(percento(o.pieno, f)) + ')' : (sconto < -0.004 ? ' · ' + soldi(-sconto) + ' in più del pieno' : ' · nessuno sconto'));
      }
      function disegnaScelta() {
        scelta.innerHTML = '';
        [{ v: 'prezzo', t: nomeFinale }, { v: 'percento', t: 'Sconto %' }, { v: 'euro', t: 'Sconto €' }].forEach(function (s) {
          var t = el('button', s.v === modo ? 'ip-scelto' : '', s.t);
          t.type = 'button';
          t.addEventListener('click', function () {
            if (modo === s.v) return;
            modo = s.v;
            simbolo.textContent = modo === 'percento' ? '%' : '€';
            c.input.value = modo === 'prezzo' ? virgola(o.attuale) : '';
            disegnaScelta(); aggiorna();
            prontoAScrivere(c.input);
          });
          scelta.appendChild(t);
        });
      }
      c.input.value = virgola(o.attuale);
      c.input.addEventListener('input', aggiorna);
      c.input.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); ok.click(); } });
      ok.addEventListener('click', function () {
        var f = finale();
        if (f == null || ok.disabled) return;
        ok.disabled = true;
        o.salva(f).then(chiudi, chiudi);
      });
      carta.appendChild(ok);
      if (o.togli) {
        var via = el('button', 'ip-foglio-no ip-foglio-togli', 'Togli lo sconto');
        via.type = 'button';
        via.addEventListener('click', function () { via.disabled = true; o.togli().then(chiudi, chiudi); });
        carta.appendChild(via);
      }
      var no = el('button', 'ip-foglio-no', 'Annulla');
      no.type = 'button';
      no.addEventListener('click', chiudi);
      velo.addEventListener('click', function (e) { if (e.target === velo) chiudi(); });
      carta.appendChild(no);
      velo.appendChild(carta);
      radice.appendChild(velo);
      disegnaScelta(); aggiorna();
      prontoAScrivere(c.input);
      try { c.input.select(); } catch (e) { /* non indispensabile */ }
    }

    // Quantità scritta a mano: toccando il numero tra meno e più si apre il tastierino.
    function foglioQuantita(riga) {
      chiudiTastiera();
      function applica(n) {
        var viva = (carrello && carrello.righe.filter(function (q) { return q.id === riga.id; })[0]) || riga;
        if (n !== viva.quantita) cambiaQuantita(viva, n);
      }
      if (NATIVO) {
        chiediNativo({ tipo: 'quantita', titolo: 'Quantità', testo: riga.nome || '', attuale: riga.quantita }, function (v) {
          var n = v && typeof v.valore === 'number' ? Math.round(v.valore) : NaN;
          if (n >= 1 && n <= 9999) applica(n);
        });
        return;
      }
      var velo = el('div', 'ip-foglio');
      var carta = el('div', 'ip-foglio-carta');
      carta.appendChild(el('div', 'ip-foglio-titolo', 'Quantità'));
      if (riga.nome) carta.appendChild(el('div', 'ip-foglio-testo', riga.nome));
      var c = campoGrande('pz', 'numeric');
      carta.appendChild(c.box);
      var esito = el('div', 'ip-foglio-esito', ' ');
      carta.appendChild(esito);
      var ok = el('button', 'ip-foglio-ok', 'Conferma');
      ok.type = 'button';
      function chiudi() { chiudiTastiera(); if (velo.parentNode) velo.parentNode.removeChild(velo); }
      function letta() { var t = c.input.value.replace(/\s/g, ''); return /^\d{1,4}$/.test(t) && +t >= 1 ? +t : null; }
      function aggiorna() {
        var n = letta();
        ok.disabled = n == null;
        esito.classList.toggle('ip-errore', n == null && !!c.input.value);
        esito.textContent = n == null && c.input.value ? 'Scrivi un numero da 1 a 9999' : ' ';
      }
      c.input.value = String(riga.quantita);
      c.input.addEventListener('input', aggiorna);
      c.input.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); ok.click(); } });
      ok.addEventListener('click', function () { var n = letta(); if (n == null) return; chiudi(); applica(n); });
      carta.appendChild(ok);
      var no = el('button', 'ip-foglio-no', 'Annulla');
      no.type = 'button';
      no.addEventListener('click', chiudi);
      velo.addEventListener('click', function (e) { if (e.target === velo) chiudi(); });
      carta.appendChild(no);
      velo.appendChild(carta);
      radice.appendChild(velo);
      aggiorna();
      prontoAScrivere(c.input);
      try { c.input.select(); } catch (e) { /* non indispensabile */ }
    }

    function foglioPrezzo(riga) {
      var questo = carrello;
      var indirizzo = questo.prezzo.replace('__ROW__', riga.id);
      function fatto(testo) {
        return function (esito) { if (esito && carrello === questo) { mostraAvviso('Prezzo aggiornato', testo, true); caricaRighe(); } };
      }
      foglioImporto({
        titolo: 'Prezzo unitario', testo: riga.nome, pieno: riga.prezzo, attuale: riga.scontato != null ? riga.scontato : riga.prezzo,
        nota: 'Prezzo pieno ' + soldi(riga.prezzo) + '. Vale solo per questo carrello, il prezzo del prodotto non cambia.',
        // Il CRM vuole il punto come separatore: con la virgola taglierebbe i centesimi senza avvisare.
        salva: function (n) {
          if (Math.abs(n - riga.prezzo) < 0.005) return manda(indirizzo, { discountedPrice: null }).then(fatto('Prezzo pieno ' + soldi(riga.prezzo)));
          return manda(indirizzo, { discountedPrice: n.toFixed(2) }).then(fatto(soldi(n)));
        },
        togli: riga.scontato != null && riga.scontato < riga.prezzo ? function () { return manda(indirizzo, { discountedPrice: null }).then(fatto('Prezzo pieno ' + soldi(riga.prezzo))); } : null
      });
    }

    // Dopo un salvataggio fatto con i moduli del sito il CRM restituisce la pagina del carrello: ne rileggo i dati.
    function rinfresca(doc) {
      var c = carrello;
      var letto = c && leggiCarrello(doc, c.id);
      if (!letto) return false;
      ['nome', 'gettone', 'gettoneElimina', 'gettoneSconto', 'gettoneCliente', 'cliente'].forEach(function (k) { c[k] = letto[k]; });
      return true;
    }

    function foglioTotale() {
      var c = carrello;
      if (!c || !c.totali || !c.gettoneSconto) return;
      var daRighe = c.totali.totalDiscountedPrice / 100;
      var ora = c.totali.totalPrice / 100;
      function invia(valore, testo) {
        return chiedi('/retail/cart/' + c.id + '/discounted-amount', codifica([['discounted_amount[discountedAmount]', valore], ['discounted_amount[_token]', c.gettoneSconto]])).then(function (esito) {
          if (carrello !== c) return;
          var errori = leggiErrori(esito.doc);
          if (!rinfresca(esito.doc) || errori.length) { mostraAvviso('Totale non modificato', errori[0] || 'Il CRM non ha accettato il totale.'); avvisa('errore'); return; }
          mostraAvviso('Totale aggiornato', testo, true);
          scriviBase(c.id, null);
          c.totali = null;
          caricaRighe(function () { if (vistaCarrelli === 'carrello') disegnaCarrello(); });
        }, function () { mostraAvviso('Connessione assente', 'Il totale non è stato modificato.'); avvisa('errore'); });
      }
      foglioImporto({
        titolo: 'Totale del carrello', testo: 'Totale calcolato dalle righe: ' + soldi(daRighe), pieno: daRighe, attuale: ora, finale: 'Totale finale',
        salva: function (n) { return Math.abs(n - daRighe) < 0.005 ? invia('', soldi(daRighe)) : invia(n.toFixed(2), soldi(n)); },
        togli: ora < daRighe - 0.004 ? function () { return invia('', soldi(daRighe)); } : null
      });
    }

    function conferma(titoloFoglio, testoFoglio, etichetta, fai) {
      chiudiTastiera();
      if (NATIVO) {
        chiediNativo({ tipo: 'conferma', titolo: titoloFoglio, testo: testoFoglio, etichetta: etichetta, pericolo: /^(Togli|Elimina)/.test(etichetta) }, function (si) { if (si) fai(); });
        return;
      }
      var velo = el('div', 'ip-foglio');
      var carta = el('div', 'ip-foglio-carta');
      carta.appendChild(el('div', 'ip-foglio-titolo ip-centrato', titoloFoglio));
      carta.appendChild(el('div', 'ip-foglio-testo ip-centrato', testoFoglio));
      var ok = el('button', 'ip-foglio-ok', etichetta);
      ok.type = 'button';
      var no = el('button', 'ip-foglio-no', 'Annulla');
      no.type = 'button';
      function chiudi() { if (velo.parentNode) velo.parentNode.removeChild(velo); }
      ok.addEventListener('click', function () { chiudi(); fai(); });
      no.addEventListener('click', chiudi);
      velo.addEventListener('click', function (e) { if (e.target === velo) chiudi(); });
      carta.appendChild(ok); carta.appendChild(no);
      velo.appendChild(carta);
      radice.appendChild(velo);
    }

    function contatore(r, classe) {
      var passi = el('div', 'ip-contatore' + (classe ? ' ' + classe : ''));
      var meno = crea('button', '', IC.meno); meno.type = 'button';
      var quanti = el('b', '', String(r.quantita));
      quanti.setAttribute('role', 'button');
      quanti.setAttribute('aria-label', 'Scrivi la quantità');
      quanti.addEventListener('click', function () { foglioQuantita(r); });
      var piu = crea('button', '', IC.piu); piu.type = 'button';
      function muovi(x) {
        // Cerco la riga per id: dopo un aggiornamento dal CRM l'oggetto in memoria è nuovo.
        var viva = carrello.righe.filter(function (q) { return q.id === r.id; })[0] || r;
        cambiaQuantita(viva, viva.quantita + x);
      }
      meno.disabled = r.quantita <= 1;
      meno.addEventListener('click', function () { muovi(-1); });
      piu.addEventListener('click', function () { muovi(1); });
      passi.appendChild(meno); passi.appendChild(quanti); passi.appendChild(piu);
      return { box: passi, quanti: quanti, meno: meno };
    }
    function etichettaSconto(pieno, finale) {
      return el('span', 'ip-sconto-percento', '−' + testoPercento(percento(pieno, finale)));
    }
    function togliRiga(r, dopo) {
      conferma('Togliere l\'articolo?', r.nome, 'Togli', function () {
        var questo = carrello;
        manda(questo.togli.replace('__ROW__', r.id), {}).then(function (esito) { if (esito && carrello === questo) dopo(); });
      });
    }

    function disegnaCarrello() {
      var c = carrello;
      if (!c) return;
      var scorrimento = vista.scrollTop;
      vista.innerHTML = '';
      c.nodi = { righe: {} };
      c.locale = false;

      var totale = c.totali ? c.totali.totalPrice : null;
      var pieno = c.totali ? c.totali.totalProductPrice : null;
      var pezzi = c.righe.reduce(function (s, r) { return s + r.quantita; }, 0);
      var coppia = el('div', 'ip-coppia');
      var t = crea('button', 'ip-scheda ip-numero ip-numero-prezzo ip-numero-tocco');
      t.type = 'button';
      var nomeTotale = el('div', 'ip-numero-nome', 'Totale');
      if (c.gettoneSconto) nomeTotale.appendChild(crea('span', 'ip-numero-matita', IC.matita));
      t.appendChild(nomeTotale);
      c.nodi.totale = el('div', 'ip-numero-valore', totale != null ? euro(totale) : '—');
      t.appendChild(c.nodi.totale);
      if (totale != null && pieno != null && pieno > totale) {
        var s = el('div', 'ip-sconto');
        c.nodi.pieno = el('s', '', euro(pieno));
        s.appendChild(c.nodi.pieno);
        c.nodi.percento = etichettaSconto(pieno, totale);
        s.appendChild(c.nodi.percento);
        t.appendChild(s);
      }
      t.addEventListener('click', function () {
        if (!c.righe.length) { mostraAvviso('Carrello vuoto', 'Aggiungi almeno un articolo prima di cambiare il totale.'); return; }
        foglioTotale();
      });
      coppia.appendChild(t);
      var n = el('div', 'ip-scheda ip-numero');
      n.appendChild(el('div', 'ip-numero-nome', 'Pezzi'));
      c.nodi.pezzi = el('div', 'ip-numero-valore', String(pezzi));
      n.appendChild(c.nodi.pezzi);
      coppia.appendChild(n);
      vista.appendChild(coppia);
      var fisso = statoFisso(c);
      c.statoDisegnato = fisso;
      if (fisso === 'cambiato') {
        t.classList.add('ip-numero-avviso');
        var box = el('div', 'ip-nota-totale ip-nota-scelta');
        box.appendChild(el('div', 'ip-nota-titolo', 'Prodotti modificati dopo lo sconto'));
        box.appendChild(el('div', '', 'Il totale è rimasto fissato a ' + euro(totale) + '. Vuoi tenerlo o togliere lo sconto?'));
        var scelte = el('div', 'ip-nota-tasti');
        var tieni = el('button', 'ip-nota-tieni', 'Mantieni ' + euro(totale));
        tieni.type = 'button';
        tieni.addEventListener('click', function () { scriviBase(c.id, c.totali.totalDiscountedPrice); disegnaCarrello(); });
        var rimuovi = el('button', 'ip-nota-rimuovi', 'Rimuovi sconto');
        rimuovi.type = 'button';
        rimuovi.addEventListener('click', function () { rimuovi.disabled = true; tieni.disabled = true; togliScontoTotale(c); });
        scelte.appendChild(tieni); scelte.appendChild(rimuovi);
        box.appendChild(scelte);
        vista.appendChild(box);
      } else if (fisso === 'ok') {
        vista.appendChild(el('div', 'ip-nota-totale', 'Totale fissato a mano: non cambia se aggiungi articoli o modifichi le quantità.'));
      }

      if (c.gettoneCliente) {
        var cl = crea('button', 'ip-scheda ip-riga ip-riga-cliente ip-sotto');
        cl.type = 'button';
        cl.appendChild(crea('span', 'ip-mini ip-mini-icona', IC.persona));
        var testiCliente = el('span', 'ip-riga-testi');
        testiCliente.appendChild(el('span', 'ip-riga-sotto', 'Cliente'));
        testiCliente.appendChild(el('span', 'ip-riga-nome', c.cliente || 'Aggiungi cliente'));
        cl.appendChild(testiCliente);
        cl.appendChild(crea('span', 'ip-riga-freccia', ICONA_FRECCIA));
        cl.addEventListener('click', function () { mostraCliente(true); });
        vista.appendChild(cl);
      }

      if (!c.righe.length) {
        var guida = el('div', 'ip-guida ip-sotto');
        guida.appendChild(crea('span', 'ip-guida-icona', IC.codice));
        var testi = el('div', '');
        testi.appendChild(el('div', 'ip-guida-titolo', 'Carrello vuoto'));
        testi.appendChild(el('div', 'ip-guida-testo', 'Leggi un codice con il lettore, scrivilo qui sopra o cercalo a catalogo.'));
        guida.appendChild(testi);
        vista.appendChild(guida);
      } else {
        vista.appendChild(el('div', 'ip-etichetta', c.righe.length + (c.righe.length === 1 ? ' articolo' : ' articoli')));
        c.righe.forEach(function (r) {
          var scheda = el('div', 'ip-scheda ip-articolo');
          // Toccando la parte alta si entra nel dettaglio dell'articolo.
          var sopra = crea('button', 'ip-articolo-sopra');
          sopra.type = 'button';
          sopra.appendChild(miniatura(r.foto, 'ip-mini'));
          var testi = el('span', 'ip-riga-testi');
          testi.appendChild(el('span', 'ip-riga-nome', r.nome));
          testi.appendChild(el('span', 'ip-riga-codice', r.codice));
          sopra.appendChild(testi);
          var boxTotale = el('span', 'ip-articolo-totale');
          boxTotale.appendChild(el('small', '', 'Totale'));
          var prezzoTotale = el('b', '', soldi(r.totale));
          boxTotale.appendChild(prezzoTotale);
          sopra.appendChild(boxTotale);
          sopra.appendChild(crea('span', 'ip-riga-freccia', ICONA_FRECCIA));
          sopra.addEventListener('click', function () { mostraRiga(r.id, true); });
          scheda.appendChild(sopra);

          var sotto = el('div', 'ip-articolo-sotto');
          var passi = contatore(r);
          c.nodi.righe[r.id] = { quanti: passi.quanti, totale: prezzoTotale, meno: passi.meno };
          sotto.appendChild(passi.box);

          var prezzoRiga = crea('button', 'ip-articolo-prezzo');
          prezzoRiga.type = 'button';
          var unitario = r.scontato != null ? r.scontato : r.prezzo;
          prezzoRiga.appendChild(el('small', '', 'Cad.'));
          prezzoRiga.setAttribute('aria-label', 'Prezzo unitario');
          prezzoRiga.appendChild(el('b', '', soldi(unitario)));
          if (r.prezzo > unitario) {
            prezzoRiga.appendChild(el('s', '', soldi(r.prezzo)));
            prezzoRiga.appendChild(etichettaSconto(r.prezzo, unitario));
          }
          prezzoRiga.addEventListener('click', function () { foglioPrezzo(r); });
          sotto.appendChild(prezzoRiga);

          var via = crea('button', 'ip-articolo-togli', IC.cestino);
          via.type = 'button';
          via.setAttribute('aria-label', 'Togli dal carrello');
          via.addEventListener('click', function () { togliRiga(r, function () { caricaRighe(); }); });
          sotto.appendChild(via);
          scheda.appendChild(sotto);
          vista.appendChild(scheda);
        });
      }

      if (c.scarico && c.righe.length) {
        var scarica = crea('button', 'ip-secondario', '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8l8-4 8 4v8l-8 4-8-4z"/><path d="M12 12v9"/><path d="M4 8l8 4 8-4"/></svg><span>Scarica dal magazzino</span>');
        scarica.type = 'button';
        scarica.addEventListener('click', function () { mostraScarico(true); });
        vista.appendChild(scarica);
      }

      if (c.gettoneElimina) {
        var elimina = crea('button', 'ip-secondario ip-pericolo', IC.cestino + '<span>Elimina carrello</span>');
        elimina.type = 'button';
        elimina.addEventListener('click', function () {
          conferma('Eliminare il carrello?', '"' + c.nome + '" verrà rimosso definitivamente.', 'Elimina', function () {
            chiedi('/retail/cart/' + c.id + '/delete', codifica([['_token', c.gettoneElimina]])).then(function (esito) {
              if (/^\/retail\/cart$/.test(esito.percorso)) {
                dopoRitorno = function () { filtroCarrelli = ''; mostraCarrelli(false); mostraAvviso('Carrello eliminato', c.nome, true); };
                history.back();
              } else {
                mostraAvviso('Non eliminato', leggiErrori(esito.doc)[0] || 'Il CRM non ha eliminato il carrello.');
                avvisa('errore');
              }
            }, function () { mostraAvviso('Connessione assente', 'Il carrello non è stato eliminato.'); avvisa('errore'); });
          });
        });
        vista.appendChild(elimina);
      }

      azioni.innerHTML = '';
      if (conCamera) azioni.appendChild(tastoAzione('ip-azione ip-azione-scan', IC.camera + '<b>Scansiona</b>', apriCamera));
      azioni.appendChild(tastoAzione('ip-azione', '<small>Cerca a</small><b>Catalogo</b>', function () { mostraCatalogo(true); }));
      radice.classList.remove('ip-senza-azioni');
      vista.scrollTop = scorrimento;
    }

    // ---------- Dettaglio di una riga del carrello ----------
    var rigaAperta = null;
    var costoVisibile = false;
    function mostraRiga(idRiga, daUtente) {
      if (!carrello) return;
      chiudiTastiera();
      vistaCarrelli = 'riga';
      rigaAperta = idRiga;
      costoVisibile = false;
      intestazioneInterna('Dettaglio articolo');
      if (daUtente) spingi('riga', { id: carrello.id, riga: idRiga });
      disegnaRiga();
      vista.scrollTop = 0;
    }
    function disegnaRiga() {
      var c = carrello;
      if (!c) return;
      var r = c.righe.filter(function (x) { return String(x.id) === String(rigaAperta); })[0];
      var scorrimento = vista.scrollTop;
      vista.innerHTML = '';
      azioni.innerHTML = '';
      radice.classList.add('ip-senza-azioni');
      c.nodi = { righe: {} };
      c.locale = false;
      if (!r) { vista.appendChild(el('div', 'ip-vuoto', 'Questo articolo non è più nel carrello.')); return; }
      var unitario = r.scontato != null ? r.scontato : r.prezzo;

      var prodotto = el('div', 'ip-scheda ip-articolo');
      var sopra = el('div', 'ip-articolo-sopra');
      sopra.appendChild(miniatura(r.foto, 'ip-mini ip-mini-grande'));
      var testi = el('span', 'ip-riga-testi');
      testi.appendChild(el('span', 'ip-riga-nome ip-nome-intero', r.nome));
      testi.appendChild(el('span', 'ip-riga-codice', r.codice + (r.ean && r.ean !== r.codice ? ' · ' + r.ean : '')));
      sopra.appendChild(testi);
      prodotto.appendChild(sopra);
      vista.appendChild(prodotto);

      var coppia = el('div', 'ip-coppia ip-sotto');
      var t = el('div', 'ip-scheda ip-numero ip-numero-prezzo');
      t.appendChild(el('div', 'ip-numero-nome', 'Prezzo totale'));
      var totale = el('div', 'ip-numero-valore', soldi(r.totale));
      t.appendChild(totale);
      coppia.appendChild(t);
      var q = el('div', 'ip-scheda ip-numero');
      q.appendChild(el('div', 'ip-numero-nome', 'Quantità'));
      var passi = contatore(r, 'ip-contatore-largo');
      q.appendChild(passi.box);
      coppia.appendChild(q);
      vista.appendChild(coppia);
      c.nodi.righe[r.id] = { quanti: passi.quanti, totale: totale, meno: passi.meno };

      vista.appendChild(el('div', 'ip-etichetta', 'Prezzo unitario'));
      var prezzo = crea('button', 'ip-scheda ip-prezzo-riga');
      prezzo.type = 'button';
      var valori = el('span', 'ip-prezzo-riga-valori');
      valori.appendChild(el('b', '', soldi(unitario)));
      if (r.prezzo > unitario) {
        valori.appendChild(el('s', '', soldi(r.prezzo)));
        valori.appendChild(etichettaSconto(r.prezzo, unitario));
      }
      prezzo.appendChild(valori);
      prezzo.appendChild(crea('span', 'ip-prezzo-riga-modifica', IC.matita + '<span>Modifica</span>'));
      prezzo.addEventListener('click', function () { foglioPrezzo(r); });
      vista.appendChild(prezzo);

      vista.appendChild(el('div', 'ip-etichetta', 'Dettagli'));
      var dati = el('div', 'ip-scheda ip-dati');
      dati.appendChild(rigaDato('Fornitore', r.fornitore));
      dati.appendChild(rigaDato('Prezzo pieno', soldi(r.prezzo)));
      dati.appendChild(rigaDato('Sconto', r.prezzo > unitario ? soldi(r.prezzo - unitario) + ' (' + testoPercento(percento(r.prezzo, unitario)) + ')' : 'Nessuno'));
      if (r.costo != null) {
        var costo = rigaDato('Costo unitario', costoVisibile ? soldi(r.costo) : '•••••');
        var occhio = crea('button', 'ip-occhio', IC.occhio);
        occhio.type = 'button';
        occhio.setAttribute('aria-label', 'Mostra o nascondi il costo');
        occhio.addEventListener('click', function () { costoVisibile = !costoVisibile; disegnaRiga(); });
        if (costoVisibile) occhio.classList.add('ip-attivo');
        costo.querySelector('.ip-dato-valore').classList.add('ip-costo');
        costo.querySelector('.ip-dato-valore').appendChild(occhio);
        dati.appendChild(costo);
        if (costoVisibile) {
          dati.appendChild(rigaDato('Costo totale', soldi(r.costo * r.quantita)));
          dati.appendChild(rigaDato('Margine unitario', soldi(unitario - r.costo)));
        }
      }
      vista.appendChild(dati);

      var via = crea('button', 'ip-secondario ip-pericolo', IC.cestino + '<span>Togli dal carrello</span>');
      via.type = 'button';
      via.addEventListener('click', function () {
        togliRiga(r, function () {
          dopoRitorno = function () { apriCarrello(c.id, false); mostraAvviso('Articolo tolto', r.nome, true); };
          history.back();
        });
      });
      vista.appendChild(via);
      vista.scrollTop = scorrimento;
    }

    // ---------- Cliente del carrello ----------
    function mostraCliente(daUtente) {
      var c = carrello;
      if (!c) return;
      chiudiTastiera();
      vistaCarrelli = 'cliente';
      intestazioneInterna('Cliente');
      if (daUtente) spingi('cliente', { id: c.id });
      vista.innerHTML = '';
      azioni.innerHTML = '';
      if (c.cliente) {
        var ora = el('div', 'ip-scheda ip-dati');
        ora.appendChild(rigaDato('Cliente attuale', c.cliente));
        vista.appendChild(ora);
      }
      vista.appendChild(el('div', 'ip-etichetta', 'Cerca o registra un cliente'));
      var campi = {};
      [['nome', 'Nome', 'text'], ['cognome', 'Cognome', 'text'], ['telefono', 'Telefono', 'tel'], ['email', 'E-mail', 'email']].forEach(function (d) {
        var f = campoGrande('', d[2]);
        f.box.classList.add('ip-campo-testo', 'ip-campo-modulo');
        f.input.setAttribute('placeholder', d[1]);
        if (d[0] === 'email' || d[0] === 'telefono') f.input.setAttribute('autocapitalize', 'off');
        f.input.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); f.input.blur(); cercaClienti(); } });
        campi[d[0]] = f.input;
        vista.appendChild(f.box);
      });
      var risultati = el('div', 'ip-sotto');
      vista.appendChild(risultati);
      function valori() {
        return { nome: campi.nome.value.trim(), cognome: campi.cognome.value.trim(), telefono: campi.telefono.value.replace(/\D+/g, ''), email: campi.email.value.trim() };
      }
      function associa(coppie, nomeCliente) {
        chiedi('/retail/cart/' + c.id, codifica(coppie.concat([['customer_choice[_token]', c.gettoneCliente]]))).then(function (esito) {
          if (carrello !== c) return;
          var errori = leggiErrori(esito.doc);
          if (!rinfresca(esito.doc) || errori.length) { mostraAvviso('Cliente non associato', errori[0] || 'Il CRM non ha accettato il cliente.'); avvisa('errore'); return; }
          dopoRitorno = function () { apriCarrello(c.id, false); mostraAvviso('Cliente associato', c.cliente || nomeCliente, true); };
          history.back();
        }, function () { mostraAvviso('Connessione assente', 'Il cliente non è stato associato.'); avvisa('errore'); });
      }
      function cercaClienti() {
        var v = valori();
        if (!v.nome && !v.cognome && !v.telefono && !v.email) { mostraAvviso('Scrivi qualcosa', 'Basta un nome, un cognome, un telefono o una e-mail.'); return; }
        chiudiTastiera();
        var api = window.consoleBundle;
        if (!api || !api.apiBaseUrl || !api.apiToken) { mostraAvviso('Ricerca non disponibile', 'Il CRM non ha fornito l\'accesso alla ricerca clienti.'); return; }
        risultati.innerHTML = '<div class="ip-scheda ip-dati ip-finto"><i style="width:70%"></i><i style="width:50%"></i><i style="width:80%"></i></div>';
        fetch(new URL('/customers/search', api.apiBaseUrl), {
          method: 'POST', headers: { 'X-Auth-Token': api.apiToken, 'Content-Type': 'application/json', 'Accept': 'application/hal+json' },
          body: JSON.stringify({ name: v.nome || null, surname: v.cognome || null, email: v.email || null, telephone: v.telefono || null })
        }).then(function (r) { return r.json(); }).then(function (j) {
          if (carrello !== c || vistaCarrelli !== 'cliente') return;
          var trovati = (j._embedded && j._embedded.item) || [];
          risultati.innerHTML = '';
          if (trovati.length) {
            risultati.appendChild(el('div', 'ip-etichetta', trovati.length === 1 ? '1 cliente trovato' : trovati.length + ' clienti trovati'));
            var lista = el('div', 'ip-scheda ip-lista');
            trovati.forEach(function (x) {
              var nomeCliente = pulisci((x.name || '') + ' ' + (x.surname || ''));
              var telefono = x.telephone && x.telephone.fullString ? x.telephone.fullString : (typeof x.telephone === 'string' ? x.telephone : '');
              var riga = crea('button', 'ip-riga');
              riga.type = 'button';
              var t = el('span', 'ip-riga-testi');
              t.appendChild(el('span', 'ip-riga-nome', nomeCliente || 'Senza nome'));
              t.appendChild(el('span', 'ip-riga-sotto', [x.email, telefono].filter(Boolean).join(' · ')));
              riga.appendChild(t);
              riga.appendChild(crea('span', 'ip-riga-freccia', ICONA_FRECCIA));
              riga.addEventListener('click', function () {
                conferma('Associare questo cliente?', nomeCliente, 'Associa', function () {
                  associa([['customer_choice[registeredCustomer]', x.id], ['customer_choice[newCustomer][name]', ''], ['customer_choice[newCustomer][surname]', ''], ['customer_choice[newCustomer][email]', ''],
                    ['customer_choice[newCustomer][telephone][prefix]', ''], ['customer_choice[newCustomer][telephone][local]', '']], nomeCliente);
                });
              });
              lista.appendChild(riga);
            });
            risultati.appendChild(lista);
          } else {
            risultati.appendChild(el('div', 'ip-vuoto', 'Nessun cliente trovato con questi dati.'));
          }
          var nuovo = crea('button', 'ip-secondario', IC.piu + '<span>Registra come nuovo cliente</span>');
          nuovo.type = 'button';
          nuovo.addEventListener('click', function () {
            var n = valori();
            if (!n.nome || !n.cognome) { mostraAvviso('Mancano dei dati', 'Per registrare un nuovo cliente servono almeno nome e cognome.'); return; }
            conferma('Registrare il nuovo cliente?', n.nome + ' ' + n.cognome + (n.telefono ? ' · ' + n.telefono : '') + (n.email ? ' · ' + n.email : ''), 'Registra e associa', function () {
              associa([['customer_choice[registeredCustomer]', ''], ['customer_choice[newCustomer][name]', n.nome], ['customer_choice[newCustomer][surname]', n.cognome], ['customer_choice[newCustomer][email]', n.email],
                ['customer_choice[newCustomer][telephone][prefix]', n.telefono ? '39' : ''], ['customer_choice[newCustomer][telephone][local]', n.telefono]], n.nome + ' ' + n.cognome);
            });
          });
          risultati.appendChild(nuovo);
        }, function () {
          risultati.innerHTML = '';
          risultati.appendChild(el('div', 'ip-vuoto', 'Non riesco a cercare i clienti: controlla la rete.'));
        });
      }
      azioni.appendChild(tastoAzione('ip-azione ip-azione-salva', '<b>Cerca cliente</b>', cercaClienti));
      radice.classList.remove('ip-senza-azioni');
      vista.scrollTop = 0;
    }

    // ---------- Scarico del carrello ----------
    // Rifatto rispetto al sito: riepilogo di cosa esce, magazzino (ricordato per la volta dopo), causale,
    // nota già compilata, conferma esplicita. Il CRM scarica tutti gli articoli del carrello e poi toglie
    // il modulo: per questo lo scarico si fa una volta sola.
    function mostraScarico(daUtente) {
      var c = carrello;
      if (!c || !c.scarico) return;
      chiudiTastiera();
      vistaCarrelli = 'scarico';
      intestazioneInterna('Scarica prodotti');
      radice.classList.add('ip-senza-ricerca');
      campo.value = '';
      if (daUtente) spingi('scarico', { id: c.id });
      var s = c.scarico;
      var pezzi = c.righe.reduce(function (somma, r) { return somma + (r.quantita || 0); }, 0);
      var quanti = pezzi + (pezzi === 1 ? ' pezzo' : ' pezzi');
      var magazzino = '';
      try { magazzino = localStorage.getItem('ip-scarico-magazzino') || ''; } catch (e) { /* nessun ricordo */ }
      if (!nomeDi(s.magazzini, magazzino)) magazzino = s.magazzini.length === 1 ? s.magazzini[0].v : '';
      var causale = nomeDi(s.causali, 'sale') ? 'sale' : '';

      vista.innerHTML = '';
      var riepilogo = el('div', 'ip-scheda ip-scarico-riepilogo');
      riepilogo.appendChild(el('div', 'ip-scarico-quanti', c.righe.length + (c.righe.length === 1 ? ' articolo' : ' articoli') + ' · ' + quanti));
      riepilogo.appendChild(el('div', 'ip-scarico-nota', 'Escono tutti dal magazzino che scegli qui sotto. Ogni carrello si scarica una volta sola.'));
      vista.appendChild(riepilogo);

      vista.appendChild(el('div', 'ip-etichetta', 'Magazzino'));
      var rigaMagazzino = el('button', 'ip-scheda ip-riga-scelta');
      rigaMagazzino.type = 'button';
      function disegnaMagazzino() {
        rigaMagazzino.innerHTML = '';
        rigaMagazzino.classList.toggle('ip-vuota', !magazzino);
        rigaMagazzino.appendChild(el('span', '', nomeDi(s.magazzini, magazzino) || 'Scegli il magazzino'));
        rigaMagazzino.appendChild(crea('span', 'ip-riga-freccia', ICONA_FRECCIA));
      }
      rigaMagazzino.addEventListener('click', function () {
        foglioScelta('Magazzino', s.magazzini, magazzino ? [magazzino] : [], false, function (v) {
          if (!v.length) return;
          magazzino = v[0];
          try { localStorage.setItem('ip-scarico-magazzino', magazzino); } catch (e) { /* non indispensabile */ }
          disegnaMagazzino(); aggiorna();
        }, true);
      });
      disegnaMagazzino();
      vista.appendChild(rigaMagazzino);

      vista.appendChild(el('div', 'ip-etichetta', 'Causale'));
      var zonaCausale = el('div', '');
      function disegnaCausale() {
        zonaCausale.innerHTML = '';
        if (NATIVO) {
          zonaCausale.appendChild(rigaMenu('Causale', s.causali, causale, function (v) { causale = v; disegnaCausale(); aggiorna(); }, causale ? null : 'Scegli…'));
          return;
        }
        var box = el('div', 'ip-motivi');
        s.causali.forEach(function (o) {
          var b = el('button', o.v === causale ? 'ip-scelto' : '', o.t);
          b.type = 'button';
          b.addEventListener('click', function () { causale = o.v; disegnaCausale(); aggiorna(); });
          box.appendChild(b);
        });
        zonaCausale.appendChild(box);
      }
      disegnaCausale();
      vista.appendChild(zonaCausale);

      vista.appendChild(el('div', 'ip-etichetta', 'Note'));
      var note = document.createElement('textarea');
      note.className = 'ip-scheda ip-note';
      note.rows = 3;
      note.value = 'Scarico carrello ' + c.nome;
      note.addEventListener('input', aggiorna);
      vista.appendChild(note);

      var salva = tastoAzione('ip-azione ip-azione-salva', '<b>Scarica</b>', function () {
        if (salva.disabled) return;
        var dove = nomeDi(s.magazzini, magazzino);
        conferma('Scaricare ' + quanti + '?', 'Escono da ' + dove + ' con causale "' + nomeDi(s.causali, causale) + '". Si fa una volta sola e dall\'app non si annulla.', 'Scarica', function () {
          salva.disabled = true;
          salva.innerHTML = '<b>Controllo…</b>';
          function rimetti() { salva.disabled = false; salva.innerHTML = '<b>Scarica</b>'; }
          // Il CRM accetta uno scarico anche su un carrello già scaricato (provato su staging il 13/11/2026):
          // prima di inviare rileggo il carrello e procedo solo se il modulo di scarico c'è ancora.
          chiedi('/retail/cart/' + c.id).then(function (adesso) {
            var fresco = adesso.doc && adesso.doc.getElementById('cart-compose') ? leggiScarico(adesso.doc) : undefined;
            if (fresco === undefined) { rimetti(); mostraAvviso('Non scaricato', 'Non riesco a rileggere il carrello dal CRM. Riprova.'); avvisa('errore'); return; }
            if (!fresco) {
              c.scarico = null;
              dopoRitorno = function () { apriCarrello(c.id, false); mostraAvviso('Già scaricato', 'Questo carrello risulta già scaricato: non viene scaricato una seconda volta.'); avvisa('errore'); };
              history.back();
              return;
            }
            salva.innerHTML = '<b>Scarico…</b>';
            invia(fresco.gettone);
          }, function () { rimetti(); mostraAvviso('Connessione assente', 'Lo scarico non è stato fatto.'); avvisa('errore'); });
        });
      });
      function invia(gettone) {
          var dove = nomeDi(s.magazzini, magazzino);
          chiedi('/retail/cart/' + c.id + '/unload', codifica([['unload[warehouse]', magazzino], ['unload[reason]', causale], ['unload[notes]', note.value.trim()], ['unload[_token]', gettone]])).then(function (esito) {
            // Scarico riuscito: il CRM torna al carrello e il modulo di scarico non c'è più.
            if (esito.doc && esito.doc.getElementById('cart-compose') && !esito.doc.querySelector('form[name="unload"]')) {
              c.scarico = null;
              dopoRitorno = function () { apriCarrello(c.id, false); mostraAvviso('Prodotti scaricati', quanti + ' da ' + dove + '.', true); avvisa('aggiunto'); };
              history.back();
              return;
            }
            salva.disabled = false;
            salva.innerHTML = '<b>Scarica</b>';
            mostraAvviso('Non scaricato', leggiErrori(esito.doc)[0] || 'Il CRM non ha accettato lo scarico.');
            avvisa('errore');
          }, function () {
            salva.disabled = false;
            salva.innerHTML = '<b>Scarica</b>';
            mostraAvviso('Connessione assente', 'Lo scarico potrebbe non essere stato fatto: riapri il carrello per controllare.');
            avvisa('errore');
          });
      }
      azioni.innerHTML = '';
      azioni.appendChild(salva);
      radice.classList.remove('ip-senza-azioni');
      function aggiorna() { salva.disabled = !magazzino || !causale || !note.value.trim(); }
      aggiorna();
      vista.scrollTop = 0;
    }

    function apriCarrello(id, daUtente, docGiaLetto, senzaAttesa) {
      chiudiTastiera();
      corrente = null; modifica = null;
      vistaCarrelli = 'carrello';
      var conosciuto = elencoCarrelli.filter(function (x) { return x.id === String(id); })[0];
      intestazioneInterna(carrello && carrello.id === String(id) ? carrello.nome : (conosciuto ? conosciuto.nome : 'Carrello'));
      campo.setAttribute('placeholder', 'Leggi o scrivi un codice');
      campo.value = '';
      if (daUtente) spingi('carrello', { id: String(id) });
      if (carrello && carrello.id === String(id)) { disegnaCarrello(); caricaRighe(); return; }
      carrello = null;
      if (!senzaAttesa) vista.innerHTML = '<div class="ip-coppia"><div class="ip-scheda ip-numero ip-finto"><i style="width:40%"></i><i class="ip-alto" style="width:70%"></i></div><div class="ip-scheda ip-numero ip-finto"><i style="width:50%"></i><i class="ip-alto" style="width:40%"></i></div></div><div class="ip-scheda ip-dati ip-finto ip-sotto"><i style="width:90%"></i><i style="width:70%"></i></div>';
      azioni.innerHTML = '';
      radice.classList.add('ip-senza-azioni');
      var mia = ++richiesta;
      var pronto = function (doc) {
        if (mia !== richiesta || vistaCarrelli !== 'carrello') return;
        var letto = leggiCarrello(doc, String(id));
        if (!letto) {
          if (!doc.getElementById('console-aside')) { location.reload(); return; }
          vista.classList.remove('ip-in-attesa');
          vista.innerHTML = '';
          vista.appendChild(el('div', 'ip-vuoto', 'Questo carrello non si può aprire: forse è stato eliminato o consumato.'));
          return;
        }
        carrello = letto;
        titolo.textContent = letto.nome;
        vista.classList.remove('ip-in-attesa');
        disegnaCarrello();
        caricaRighe();
      };
      if (docGiaLetto) pronto(docGiaLetto);
      else chiedi('/retail/cart/' + id).then(function (r) { pronto(r.doc); }, function () {
        if (mia !== richiesta) return;
        vista.classList.remove('ip-in-attesa');
        mostraAvviso('Connessione assente', 'Controlla la rete e riprova.');
        avvisa('errore');
      });
    }

    // ---------- Ricerca a catalogo dentro un carrello ----------
    function mostraCatalogo(daUtente) {
      if (!carrello) return;
      chiudiTastiera();
      vistaCarrelli = 'catalogo';
      intestazioneInterna('Cerca a catalogo');
      campo.setAttribute('placeholder', 'Leggi o scrivi un codice');
      if (daUtente) spingi('catalogo', { id: carrello.id });
      vista.innerHTML = '';
      azioni.innerHTML = '';
      radice.classList.add('ip-senza-azioni');
      var cerca = campoGrande('', 'search');
      cerca.box.classList.add('ip-campo-testo');
      cerca.input.setAttribute('placeholder', 'Nome, codice o EAN');
      cerca.input.setAttribute('enterkeyhint', 'search');
      vista.appendChild(cerca.box);
      var risultati = el('div', 'ip-sotto');
      vista.appendChild(risultati);
      risultati.appendChild(el('div', 'ip-vuoto', 'Scrivi almeno tre lettere per cercare un prodotto.'));
      var attesa = null, ultima = 0;
      function cercaOra() {
        var q = cerca.input.value.trim();
        if (q.length < 3) { risultati.innerHTML = ''; risultati.appendChild(el('div', 'ip-vuoto', 'Scrivi almeno tre lettere per cercare un prodotto.')); return; }
        var mia = ++ultima;
        var c = carrello;
        risultati.innerHTML = '<div class="ip-scheda ip-dati ip-finto"><i style="width:80%"></i><i style="width:60%"></i><i style="width:70%"></i></div>';
        chiediJson('/retail/cart/' + c.id + '?dataTableView=cart_stock_table&page=1&perPage=30&q=' + encodeURIComponent(q)).then(function (r) {
          if (mia !== ultima || carrello !== c || vistaCarrelli !== 'catalogo') return;
          risultati.innerHTML = '';
          var righe = r.dati && r.dati.rows ? r.dati.rows : [];
          if (!righe.length) { risultati.appendChild(el('div', 'ip-vuoto', 'Nessun prodotto trovato.')); return; }
          if (r.dati.filtered > righe.length) risultati.appendChild(el('div', 'ip-etichetta', 'Primi ' + righe.length + ' di ' + r.dati.filtered + ': affina la ricerca'));
          var lista = el('div', 'ip-scheda ip-lista');
          righe.forEach(function (x) {
            var riga = el('div', 'ip-riga ip-riga-catalogo');
            var foto = x.image && x.image.src && x.image.src.indexOf('data:') !== 0 ? x.image.src : '';
            riga.appendChild(miniatura(foto, 'ip-mini'));
            var t = el('span', 'ip-riga-testi');
            t.appendChild(el('span', 'ip-riga-nome', x.description || ''));
            t.appendChild(el('span', 'ip-riga-codice', x.code || ''));
            var prezzoOra = typeof x.discountedPrice === 'number' ? x.discountedPrice : x.price;
            t.appendChild(el('span', 'ip-riga-sotto', soldi(prezzoOra) + ' · giacenza ' + (x.totalAvailability != null ? x.totalAvailability : 0)));
            riga.appendChild(t);
            var piu = crea('button', 'ip-aggiungi', IC.piu);
            piu.type = 'button';
            piu.setAttribute('aria-label', 'Aggiungi al carrello');
            piu.addEventListener('click', function () {
              piu.disabled = true;
              manda(c.aggiungi, { products: [x.id] }).then(function (esito) {
                piu.disabled = false;
                if (!esito) return;
                piu.classList.add('ip-fatto');
                mostraAvviso('Aggiunto al carrello', x.description || '', true);
                avvisa('aggiunto');
                caricaRighe();
              });
            });
            riga.appendChild(piu);
            lista.appendChild(riga);
          });
          risultati.appendChild(lista);
        }, function () {
          if (mia !== ultima) return;
          risultati.innerHTML = '';
          risultati.appendChild(el('div', 'ip-vuoto', 'Connessione assente.'));
        });
      }
      cerca.input.addEventListener('input', function () { clearTimeout(attesa); attesa = setTimeout(cercaOra, 400); });
      cerca.input.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); clearTimeout(attesa); cercaOra(); cerca.input.blur(); } });
      prontoAScrivere(cerca.input);
      vista.scrollTop = 0;
    }

    // ====================================================================================
    // Vendite: la dashboard del CRM (/retail/order/dashboard) ridisegnata per l'app.
    // I numeri arrivano dalla pagina del sito, letta in sottofondo con gli stessi filtri.
    // ====================================================================================
    var vendite = { periodo: 'oggi', da: '', a: '', sedi: [], stampante: '', iva: 'excluded', pagamenti: 0, dati: null, filtri: null, confronto: 'anno-sett', datiConfronto: null };
    try {
      var ricordate = JSON.parse(localStorage.getItem('ip-vendite') || 'null');
      if (ricordate) { vendite.sedi = ricordate.sedi || []; vendite.stampante = ricordate.stampante || ''; vendite.iva = ricordate.iva || 'excluded'; if (ricordate.confronto) vendite.confronto = ricordate.confronto; }
    } catch (e) { /* si parte dai filtri predefiniti */ }

    function giorno(d) { return ('0' + d.getDate()).slice(-2) + '/' + ('0' + (d.getMonth() + 1)).slice(-2) + '/' + d.getFullYear(); }
    function daCampo(v) { var p = String(v).split('-'); return p.length === 3 ? p[2] + '/' + p[1] + '/' + p[0] : ''; }
    function perCampo(v) { var p = String(v).split('/'); return p.length === 3 ? p[2] + '-' + p[1] + '-' + p[0] : ''; }
    function intervallo() {
      var oggi = new Date(), da = new Date(oggi), a = new Date(oggi);
      if (vendite.periodo === 'ieri') { da.setDate(da.getDate() - 1); a = new Date(da); }
      else if (vendite.periodo === 'settimana') { da.setDate(da.getDate() - ((da.getDay() + 6) % 7)); }
      else if (vendite.periodo === 'mese') { da.setDate(1); }
      else if (vendite.periodo === 'anno') { da = new Date(oggi.getFullYear(), 0, 1); }
      else if (vendite.periodo === 'date' && vendite.da && vendite.a) { return vendite.da + ' - ' + vendite.a; }
      return giorno(da) + ' - ' + giorno(a);
    }

    // ---------- Confronto con un altro periodo ----------
    // 'prima': il periodo subito prima, allineato ai giorni della settimana (un giorno o una settimana: 7 giorni prima;
    //          il mese: il mese scorso; date libere: lo stesso numero di settimane prima).
    // 'anno-sett': l'anno scorso con gli stessi giorni della settimana (52 settimane = 364 giorni prima:
    //          venerdì 13/11/2026 contro venerdì 14/11/2025).
    // 'anno-data': l'anno scorso con le stesse date di calendario (13/11/2026 contro 13/11/2025).
    var CONFRONTI = { no: 'Nessun confronto', prima: 'Periodo prima', 'anno-sett': 'Anno scorso, stessi giorni della settimana', 'anno-data': 'Anno scorso, stesse date' };
    function confrontiPossibili() {
      var prima = { oggi: 'Settimana prima, stesso giorno', ieri: 'Settimana prima, stesso giorno', settimana: 'Settimana prima', mese: 'Mese prima', date: 'Settimane prima' }[vendite.periodo];
      var voci = [{ v: 'no', t: CONFRONTI.no }];
      if (prima) voci.push({ v: 'prima', t: prima });
      voci.push({ v: 'anno-sett', t: CONFRONTI['anno-sett'] }, { v: 'anno-data', t: CONFRONTI['anno-data'] });
      return voci;
    }
    function confrontoValido() { return confrontiPossibili().some(function (o) { return o.v === vendite.confronto; }) ? vendite.confronto : 'anno-sett'; }
    function aData(s) { var p = String(s).split('/'); return new Date(+p[2], +p[1] - 1, +p[0]); }
    function spostaGiorni(d, n) { var x = new Date(d.getFullYear(), d.getMonth(), d.getDate()); x.setDate(x.getDate() + n); return x; }
    function spostaMesi(d, n) {
      var x = new Date(d.getFullYear(), d.getMonth() + n, 1);
      x.setDate(Math.min(d.getDate(), new Date(x.getFullYear(), x.getMonth() + 1, 0).getDate()));
      return x;
    }
    function intervalloConfronto() {
      var modo = confrontoValido();
      if (modo === 'no') return null;
      var e = intervallo().split(' - '), da = aData(e[0]), a = aData(e[1]);
      var giorni = Math.round((a - da) / 864e5) + 1;
      if (modo === 'anno-sett') return [spostaGiorni(da, -364), spostaGiorni(a, -364)];
      if (modo === 'anno-data') return [spostaMesi(da, -12), spostaMesi(a, -12)];
      if (vendite.periodo === 'mese') return [spostaMesi(da, -1), spostaMesi(a, -1)];
      var passo = Math.ceil(giorni / 7) * 7;
      return [spostaGiorni(da, -passo), spostaGiorni(a, -passo)];
    }
    var GIORNI = ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab'];
    function dataBreve(d) { return GIORNI[d.getDay()] + ' ' + d.getDate() + ' ' + MESI[d.getMonth()] + ' ' + d.getFullYear(); }
    function nomeIntervallo(da, a) { return da.getTime() === a.getTime() ? dataBreve(da) : dataBreve(da) + ' → ' + dataBreve(a); }
    // Riga sotto un totale: variazione rispetto al confronto e valore di allora.
    function variazione(testoOra, testoAllora) {
      var riga = el('div', 'ip-variazione');
      if (testoAllora == null) return null;
      var ora = importo(testoOra), allora = importo(testoAllora);
      if (Math.abs(allora) < 0.005) {
        riga.appendChild(el('span', 'ip-variazione-segno', ora > 0 ? 'Nuovo' : '='));
      } else {
        var p = (ora - allora) / Math.abs(allora) * 100;
        var su = p > 0.05, giu = p < -0.05;
        riga.classList.add(su ? 'ip-su' : (giu ? 'ip-giu' : 'ip-pari'));
        riga.appendChild(el('span', 'ip-variazione-segno', (su ? '▲ +' : (giu ? '▼ ' : '= ')) + (Math.round(p * 10) / 10).toString().replace('.', ',') + '%'));
      }
      riga.appendChild(el('span', 'ip-variazione-allora', 'prima ' + testoAllora));
      return riga;
    }

    // Legge la pagina della dashboard: tessere, pagamenti, canali e grafici.
    function leggiVendite(doc) {
      var corpoPagina = doc.querySelector('.console-page-body');
      var modulo = doc.querySelector('form[name="form"]');
      if (!corpoPagina || !modulo) return null;
      var filtri = { stampanti: opzioni(modulo, 'form[printer]'), sedi: opzioni(modulo, 'form[headquarters][]') };
      var testi = [];
      var foglie = corpoPagina.querySelectorAll('span, p, h1, h2, h3, div');
      for (var i = 0; i < foglie.length; i++) {
        var nodo = foglie[i];
        if (nodo.children.length || nodo.closest('form') || nodo.closest('console-chart')) continue;
        var t = pulisci(nodo.textContent);
        if (t) testi.push(t);
      }
      var titoli = ['Suddivisione pagamenti (totale)', 'Suddivisione pagamenti (scontrini)', 'Suddivisione pagamenti (fatture)', 'Incassi per canale',
        'Andamento degli importi', 'Andamento degli ordini', 'Articoli più venduti'];
      var dati = { tessere: [], pagamenti: [[], [], []], canali: [], importi: null, ordini: null, articoli: [] };
      var zona = -1, attesa = null;
      testi.forEach(function (t) {
        var quale = titoli.indexOf(t);
        if (quale !== -1) { zona = quale; attesa = null; return; }
        if (/^(Vedi i pagamenti|Vai alla cassa|Dashboard vendite|Applica)$/.test(t)) return;
        var valore = /^-?[\d.]+(,\d+)?( €)?$/.test(t);
        if (!valore) { attesa = t; return; }
        if (attesa == null) return;
        if (zona === -1) dati.tessere.push({ nome: attesa.replace(/\s*\((IE|IC)\)$/, ''), valore: t });
        else if (zona < 3) dati.pagamenti[zona].push({ nome: attesa, valore: t });
        else if (zona === 3) dati.canali.push({ nome: attesa, valore: t });
        attesa = null;
      });
      var grafici = corpoPagina.querySelectorAll('console-chart');
      for (var g = 0; g < grafici.length; g++) {
        var contenuto = null;
        try { contenuto = JSON.parse(grafici[g].getAttribute('data')); } catch (e) { /* grafico senza dati */ }
        if (!contenuto) continue;
        if (contenuto.categories) {
          var quantita = contenuto.series && contenuto.series[0] ? contenuto.series[0].data || [] : [];
          dati.articoli = contenuto.categories.map(function (nome, n) { return { nome: nome, quanti: Number(quantita[n]) || 0 }; });
        } else if (contenuto.series && contenuto.series[0]) {
          var risultati = contenuto.series[0].results || {};
          var punti = Object.keys(risultati).map(function (k) { return { quando: Number(k) * 1000, valore: Number(risultati[k]) || 0 }; })
            .sort(function (x, y) { return x.quando - y.quando; });
          var serie = { punti: punti, gruppo: contenuto.grouping || '', soldi: grafici[g].getAttribute('format') === 'currency', da: Date.parse(contenuto.from), a: Date.parse(contenuto.to) };
          if (serie.soldi && !dati.importi) dati.importi = serie; else if (!dati.ordini) dati.ordini = serie;
        }
      }
      return { dati: dati, filtri: filtri };
    }

    function importo(testo) { return numero(testo) || 0; }
    var MESI = ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic'];

    // Grafico ad area disegnato dall'app, senza librerie.
    function grafico(serie) {
      var box = el('div', 'ip-scheda ip-grafico');
      var punti = serie.punti;
      var massimo = Math.max.apply(null, punti.map(function (p) { return p.valore; }).concat([0]));
      if (!punti.length || massimo <= 0) { box.appendChild(el('div', 'ip-vuoto', 'Nessun dato nel periodo.')); return box; }
      var L = 320, A = 120, passo = punti.length > 1 ? L / (punti.length - 1) : 0;
      var linea = punti.map(function (p, n) { return (n ? 'L' : 'M') + (punti.length > 1 ? n * passo : L / 2).toFixed(1) + ',' + (A - 6 - (p.valore / massimo) * (A - 16)).toFixed(1); }).join(' ');
      var area = linea + ' L' + (punti.length > 1 ? L : L / 2) + ',' + A + ' L' + (punti.length > 1 ? 0 : L / 2) + ',' + A + ' Z';
      var tondi = punti.length <= 14 ? punti.map(function (p, n) {
        return '<circle cx="' + (punti.length > 1 ? n * passo : L / 2).toFixed(1) + '" cy="' + (A - 6 - (p.valore / massimo) * (A - 16)).toFixed(1) + '" r="2.6"/>';
      }).join('') : '';
      box.innerHTML = '<div class="ip-grafico-massimo"></div><svg viewBox="0 0 ' + L + ' ' + A + '" preserveAspectRatio="none" aria-hidden="true">' +
        '<path class="ip-grafico-area" d="' + area + '"/><path class="ip-grafico-linea" d="' + linea + '"/><g class="ip-grafico-punti">' + tondi + '</g></svg><div class="ip-grafico-date"><span></span><span></span></div>';
      var formato = function (v) { return serie.soldi ? soldi(v) : String(Math.round(v)); };
      var data = function (ms) { var d = new Date(ms); return d.getDate() + ' ' + MESI[d.getMonth()]; };
      box.querySelector('.ip-grafico-massimo').textContent = 'Massimo ' + formato(massimo) + (serie.gruppo === 'weekly' ? ' a settimana' : serie.gruppo === 'monthly' ? ' al mese' : serie.gruppo === 'hourly' ? ' all\'ora' : ' al giorno');
      var date = box.querySelectorAll('.ip-grafico-date span');
      // Le date sono quelle del periodo dichiarato dal CRM, non quelle dei singoli punti.
      var inizio = serie.da || punti[0].quando, fine = serie.a || punti[punti.length - 1].quando;
      date[0].textContent = data(inizio);
      date[1].textContent = data(fine) !== data(inizio) ? data(fine) : '';
      return box;
    }

    // Elenco con barra proporzionale: pagamenti, canali, articoli più venduti.
    function classifica(voci, formato) {
      var lista = el('div', 'ip-scheda ip-classifica');
      var massimo = Math.max.apply(null, voci.map(function (v) { return v.n; }).concat([0]));
      voci.forEach(function (v) {
        var riga = el('div', 'ip-classifica-riga');
        var sopra = el('div', 'ip-classifica-sopra');
        sopra.appendChild(el('span', 'ip-classifica-nome', v.nome));
        sopra.appendChild(el('span', 'ip-classifica-valore', formato(v)));
        riga.appendChild(sopra);
        var barra = el('div', 'ip-classifica-barra');
        var piena = el('i', '');
        piena.style.width = (massimo > 0 ? Math.max(2, (v.n / massimo) * 100) : 0) + '%';
        barra.appendChild(piena);
        riga.appendChild(barra);
        lista.appendChild(riga);
      });
      return lista;
    }

    function foglioScelta(titoloFoglio, voci, scelte, multipla, fatto, senzaTutte) {
      chiudiTastiera();
      if (NATIVO) {
        chiediNativo({ tipo: 'scelta', titolo: titoloFoglio, voci: voci, scelte: scelte, multipla: !!multipla, senzaTutte: !!senzaTutte }, function (v) { if (v) fatto(v); });
        return;
      }
      var attuali = scelte.slice();
      var velo = el('div', 'ip-foglio');
      var carta = el('div', 'ip-foglio-carta');
      carta.appendChild(el('div', 'ip-foglio-titolo', titoloFoglio));
      var filtro = null;
      if (voci.length > 8) {
        filtro = document.createElement('input');
        filtro.className = 'ip-foglio-filtro';
        filtro.type = 'search';
        filtro.setAttribute('placeholder', 'Cerca');
        carta.appendChild(filtro);
      }
      var lista = el('div', 'ip-foglio-lista');
      carta.appendChild(lista);
      function chiudi() { chiudiTastiera(); if (velo.parentNode) velo.parentNode.removeChild(velo); }
      function disegna() {
        var q = filtro ? filtro.value.trim().toLowerCase() : '';
        lista.innerHTML = '';
        var tutte = el('button', attuali.length ? '' : 'ip-scelto', (attuali.length ? '' : '✓ ') + (multipla ? 'Tutti' : 'Tutte'));
        tutte.type = 'button';
        tutte.addEventListener('click', function () { attuali = []; if (multipla) disegna(); else { chiudi(); fatto(attuali); } });
        if (!q && !senzaTutte) lista.appendChild(tutte);
        voci.forEach(function (v) {
          if (q && v.t.toLowerCase().indexOf(q) === -1) return;
          var scelta = attuali.indexOf(v.v) !== -1;
          var riga = el('button', scelta ? 'ip-scelto' : '', (scelta ? '✓ ' : '') + v.t);
          riga.type = 'button';
          riga.addEventListener('click', function () {
            if (!multipla) { attuali = [v.v]; chiudi(); fatto(attuali); return; }
            if (scelta) attuali = attuali.filter(function (x) { return x !== v.v; }); else attuali.push(v.v);
            disegna();
          });
          lista.appendChild(riga);
        });
      }
      if (filtro) filtro.addEventListener('input', disegna);
      if (multipla) {
        var ok = el('button', 'ip-foglio-ok', 'Applica');
        ok.type = 'button';
        ok.addEventListener('click', function () { chiudi(); fatto(attuali); });
        carta.appendChild(ok);
      }
      var no = el('button', 'ip-foglio-no', 'Annulla');
      no.type = 'button';
      no.addEventListener('click', chiudi);
      velo.addEventListener('click', function (e) { if (e.target === velo) chiudi(); });
      carta.appendChild(no);
      velo.appendChild(carta);
      radice.appendChild(velo);
      disegna();
    }

    function foglioDate(dopo) {
      var poi = dopo || caricaVendite;
      if (NATIVO) {
        var periodo = intervallo().split(' - ');
        chiediNativo({ tipo: 'date', titolo: 'Periodo', da: perCampo(periodo[0]), a: perCampo(periodo[1]), max: perCampo(giorno(new Date())) }, function (v) {
          if (!v || !v.da || !v.a) return;
          var primo = v.da <= v.a ? v.da : v.a, ultimo = v.da <= v.a ? v.a : v.da;
          vendite.periodo = 'date'; vendite.da = daCampo(primo); vendite.a = daCampo(ultimo);
          poi();
        });
        return;
      }
      var velo = el('div', 'ip-foglio');
      var carta = el('div', 'ip-foglio-carta');
      carta.appendChild(el('div', 'ip-foglio-titolo', 'Periodo'));
      var parti = intervallo().split(' - ');
      function campoData(etichetta, valore) {
        carta.appendChild(el('div', 'ip-etichetta ip-etichetta-foglio', etichetta));
        var c = document.createElement('input');
        c.type = 'date';
        c.className = 'ip-foglio-filtro ip-campo-data';
        c.value = perCampo(valore);
        c.max = perCampo(giorno(new Date()));
        carta.appendChild(c);
        return c;
      }
      var da = campoData('Dal', parti[0]), a = campoData('Al', parti[1]);
      function chiudi() { if (velo.parentNode) velo.parentNode.removeChild(velo); }
      var ok = el('button', 'ip-foglio-ok', 'Applica');
      ok.type = 'button';
      ok.addEventListener('click', function () {
        if (!da.value || !a.value) { mostraAvviso('Date mancanti', 'Scegli sia l\'inizio sia la fine del periodo.'); return; }
        var primo = da.value <= a.value ? da.value : a.value, ultimo = da.value <= a.value ? a.value : da.value;
        vendite.periodo = 'date'; vendite.da = daCampo(primo); vendite.a = daCampo(ultimo);
        chiudi();
        poi();
      });
      var no = el('button', 'ip-foglio-no', 'Annulla');
      no.type = 'button';
      no.addEventListener('click', chiudi);
      velo.addEventListener('click', function (e) { if (e.target === velo) chiudi(); });
      carta.appendChild(ok); carta.appendChild(no);
      velo.appendChild(carta);
      radice.appendChild(velo);
    }

    function scegliSedi() {
      if (!vendite.filtri) return;
      foglioScelta('Punti vendita', vendite.filtri.sedi, vendite.sedi, true, function (nuove) { vendite.sedi = nuove; caricaVendite(); });
    }
    function scegliCassa() {
      if (!vendite.filtri) return;
      foglioScelta('Cassa', vendite.filtri.stampanti, vendite.stampante ? [vendite.stampante] : [], false, function (nuove) { vendite.stampante = nuove[0] || ''; caricaVendite(); });
    }

    function disegnaVendite(messaggio) {
      var scorrimento = vista.scrollTop;
      vista.innerHTML = '';

      var periodi = el('div', 'ip-pillole');
      [['oggi', 'Oggi'], ['ieri', 'Ieri'], ['settimana', 'Settimana'], ['mese', 'Mese'], ['anno', 'Anno'], ['date', vendite.periodo === 'date' ? vendite.da.slice(0, 5) + ' → ' + vendite.a.slice(0, 5) : 'Date…']].forEach(function (p) {
        var t = el('button', vendite.periodo === p[0] ? 'ip-scelto' : '', p[1]);
        t.type = 'button';
        t.addEventListener('click', function () {
          if (p[0] === 'date') { foglioDate(); return; }
          if (vendite.periodo === p[0]) return;
          vendite.periodo = p[0];
          caricaVendite();
        });
        periodi.appendChild(t);
      });
      vista.appendChild(periodi);

      var filtri = el('div', 'ip-pillole ip-pillole-filtri');
      var f = vendite.filtri;
      var nomeSedi = !vendite.sedi.length ? 'Tutti i punti vendita' : (vendite.sedi.length === 1 && f ? ((f.sedi.filter(function (s) { return s.v === vendite.sedi[0]; })[0] || {}).t || '1 punto vendita') : vendite.sedi.length + ' punti vendita');
      var sedi = el('button', vendite.sedi.length ? 'ip-scelto' : '', nomeSedi);
      sedi.type = 'button';
      sedi.addEventListener('click', scegliSedi);
      filtri.appendChild(sedi);
      var nomeCassa = vendite.stampante && f ? ((f.stampanti.filter(function (s) { return s.v === vendite.stampante; })[0] || {}).t || 'Una cassa') : 'Tutte le casse';
      var cassa = el('button', vendite.stampante ? 'ip-scelto' : '', nomeCassa);
      cassa.type = 'button';
      cassa.addEventListener('click', scegliCassa);
      filtri.appendChild(cassa);
      // L'IVA è un interruttore: acceso = importi IVA compresa.
      var iva = crea('button', 'ip-interruttore' + (vendite.iva === 'included' ? ' ip-acceso' : ''), '<span>IVA compresa</span><i></i>');
      iva.type = 'button';
      iva.setAttribute('role', 'switch');
      iva.setAttribute('aria-checked', vendite.iva === 'included' ? 'true' : 'false');
      iva.addEventListener('click', function () { vendite.iva = vendite.iva === 'included' ? 'excluded' : 'included'; caricaVendite(); });
      filtri.appendChild(iva);
      vista.appendChild(filtri);
      // Confronto: su Android chip nella pagina; su iPhone è un menu di sistema nella barra (vendite.confronto).
      var modo = confrontoValido();
      var confronti = el('div', 'ip-pillole ip-pillole-filtri ip-pillole-confronto');
      confrontiPossibili().forEach(function (o) {
        var b = el('button', o.v === modo ? 'ip-scelto' : '', o.v === 'no' ? 'Senza confronto' : o.t);
        b.type = 'button';
        b.addEventListener('click', function () { if (vendite.confronto === o.v) return; vendite.confronto = o.v; caricaVendite(); });
        confronti.appendChild(b);
      });
      vista.appendChild(confronti);
      var nomiPeriodo = { oggi: 'Oggi', ieri: 'Ieri', settimana: 'Questa settimana', mese: 'Questo mese', anno: 'Quest\'anno', date: intervallo().replace(' - ', ' → ') };
      vista.appendChild(el('div', 'ip-riepilogo-filtri', [nomiPeriodo[vendite.periodo], nomeSedi, nomeCassa].join(' · ')));
      var altro = intervalloConfronto();
      if (altro) vista.appendChild(el('div', 'ip-riepilogo-confronto', 'Confronto con ' + nomeIntervallo(altro[0], altro[1])));

      azioni.innerHTML = '';
      radice.classList.add('ip-senza-azioni');

      if (messaggio) { vista.appendChild(el('div', 'ip-vuoto', messaggio)); return; }
      var d = vendite.dati;
      if (!d) {
        vista.insertAdjacentHTML('beforeend', '<div class="ip-scheda ip-numero ip-finto ip-sotto"><i style="width:40%"></i><i class="ip-alto" style="width:70%"></i></div>' +
          '<div class="ip-coppia ip-sotto"><div class="ip-scheda ip-numero ip-finto"><i style="width:50%"></i><i class="ip-alto" style="width:60%"></i></div><div class="ip-scheda ip-numero ip-finto"><i style="width:50%"></i><i class="ip-alto" style="width:60%"></i></div></div>' +
          '<div class="ip-scheda ip-dati ip-finto ip-sotto"><i style="width:90%"></i><i style="width:70%"></i><i style="width:80%"></i></div>');
        return;
      }

      // Il cruscotto è una griglia: una colonna sugli schermi stretti, più colonne affiancate quando c'è spazio
      // (schermo interno di iPhone Duo, tablet). Decide solo la larghezza disponibile, mai il tipo di dispositivo.
      var cruscotto = el('div', 'ip-cruscotto');
      function blocco(classe, etichetta) {
        var b = el('div', 'ip-blocco ' + classe);
        if (etichetta) b.appendChild(el('div', 'ip-etichetta', etichetta));
        cruscotto.appendChild(b);
        return b;
      }

      // Valore della stessa tessera nel periodo di confronto (null finché non è arrivato o se non c'è confronto).
      function valoreAllora(nome) {
        var c = vendite.datiConfronto;
        if (!c || !intervalloConfronto()) return null;
        var t = c.tessere.filter(function (x) { return x.nome === nome; })[0];
        return t ? t.valore : null;
      }
      var principale = d.tessere.filter(function (t) { return /^Totale venduto/.test(t.nome); })[0];
      if (principale) {
        var grande = el('div', 'ip-scheda ip-numero ip-numero-prezzo ip-totale-vendite');
        grande.appendChild(el('div', 'ip-numero-nome', principale.nome + (vendite.iva === 'included' ? ' · IVA compresa' : ' · IVA esclusa')));
        grande.appendChild(el('div', 'ip-numero-valore', principale.valore));
        grande.appendChild(el('div', 'ip-totale-periodo', intervallo().replace(' - ', ' → ')));
        var vp = variazione(principale.valore, valoreAllora(principale.nome));
        if (vp) grande.appendChild(vp);
        grande.appendChild(crea('div', 'ip-vedi-vendite', '<span>Vedi le vendite</span>' + ICONA_FRECCIA));
        grande.classList.add('ip-tocca');
        grande.addEventListener('click', function () { var t = schede.querySelector('[data-s="ordini"]'); if (t) t.click(); });
        blocco('ip-b-totale').appendChild(grande);
      }
      var griglia = el('div', 'ip-tessere');
      d.tessere.filter(function (t) { return t !== principale; }).forEach(function (t) {
        var tessera = el('div', 'ip-scheda ip-numero');
        tessera.appendChild(el('div', 'ip-numero-nome', t.nome));
        tessera.appendChild(el('div', 'ip-numero-valore ip-numero-medio', t.valore));
        var vt = variazione(t.valore, valoreAllora(t.nome));
        if (vt) tessera.appendChild(vt);
        griglia.appendChild(tessera);
      });
      blocco('ip-b-tessere').appendChild(griglia);

      // Con un solo giorno un andamento non ha senso: i due grafici compaiono solo da due giorni in su.
      var estremi = intervallo().split(' - '), piuGiorni = estremi[0] !== estremi[1];
      if (piuGiorni && d.importi && d.importi.punti.length > 1) blocco('ip-b-grafico', 'Andamento degli importi').appendChild(grafico(d.importi));
      if (piuGiorni && d.ordini && d.ordini.punti.length > 1) blocco('ip-b-grafico', 'Andamento delle vendite').appendChild(grafico(d.ordini));

      var bPagamenti = blocco('ip-b-elenco', 'Pagamenti');
      var scelta = segmenti([{ v: 0, t: 'Totale' }, { v: 1, t: 'Scontrini' }, { v: 2, t: 'Fatture' }], vendite.pagamenti, function (v) { vendite.pagamenti = v; disegnaVendite(); });
      scelta.classList.add('ip-segmenti-stretti');
      bPagamenti.appendChild(scelta);
      var pagati = (d.pagamenti[vendite.pagamenti] || []).map(function (p) { return { nome: p.nome, n: importo(p.valore), testo: p.valore }; }).sort(function (x, y) { return y.n - x.n; });
      bPagamenti.appendChild(pagati.length ? classifica(pagati, function (v) { return v.testo; }) : el('div', 'ip-vuoto', 'Nessun pagamento nel periodo.'));

      // "Incassi per canale" tolto su richiesta di Nicolò (13/11/2026): ripeteva gli stessi importi dei pagamenti.

      var articoli = d.articoli.map(function (a) { return { nome: a.nome, n: a.quanti }; }).sort(function (x, y) { return y.n - x.n; });
      var elencoArticoli = articoli.length ? classifica(articoli, function (v) { return v.n + (v.n === 1 ? ' pezzo' : ' pezzi'); }) : el('div', 'ip-vuoto', 'Nessun articolo venduto nel periodo.');
      elencoArticoli.classList.add('ip-classifica-articoli');
      blocco('ip-b-elenco ip-b-articoli', 'Articoli più venduti').appendChild(elencoArticoli);

      vista.appendChild(cruscotto);
      // Su iPhone l'IVA è una riga con il suo interruttore, in fondo alla dashboard.
      var rigaIva = crea('button', 'ip-scheda ip-riga-iva ip-interruttore' + (vendite.iva === 'included' ? ' ip-acceso' : ''), '<span>Importi IVA compresa</span><i></i>');
      rigaIva.type = 'button';
      rigaIva.setAttribute('role', 'switch');
      rigaIva.setAttribute('aria-checked', vendite.iva === 'included' ? 'true' : 'false');
      rigaIva.addEventListener('click', function () { vendite.iva = vendite.iva === 'included' ? 'excluded' : 'included'; caricaVendite(); });
      vista.appendChild(rigaIva);
      vista.scrollTop = scorrimento;
    }

    function caricaVendite() {
      var mia = ++richiesta;
      try { localStorage.setItem('ip-vendite', JSON.stringify({ sedi: vendite.sedi, stampante: vendite.stampante, iva: vendite.iva, confronto: vendite.confronto })); } catch (e) { /* non indispensabile */ }
      vendite.dati = null;
      vendite.datiConfronto = null;
      disegnaVendite();
      var indirizzo = '/retail/order/dashboard?form%5Bprinter%5D=' + encodeURIComponent(vendite.stampante) + '&form%5Brange%5D=' + encodeURIComponent(intervallo()) +
        '&form%5Bvat%5D=' + vendite.iva + vendite.sedi.map(function (s) { return '&form%5Bheadquarters%5D%5B%5D=' + encodeURIComponent(s); }).join('');
      chiedi(indirizzo).then(function (r) {
        if (mia !== richiesta || vistaCarrelli !== 'vendite') return;
        if (/\/login$/.test(r.percorso)) { location.reload(); return; }
        var letto = leggiVendite(r.doc);
        if (!letto) { disegnaVendite(r.doc.getElementById('console-aside') ? 'Questo utente non ha accesso alla dashboard delle vendite.' : 'Non riesco a leggere la dashboard dal CRM.'); return; }
        vendite.dati = letto.dati;
        vendite.filtri = letto.filtri;
        disegnaVendite();
        // Poi il periodo di confronto, con gli stessi filtri: le variazioni compaiono appena arriva.
        var altro = intervalloConfronto();
        if (!altro) return;
        chiedi(indirizzo.replace(/form%5Brange%5D=[^&]*/, 'form%5Brange%5D=' + encodeURIComponent(giorno(altro[0]) + ' - ' + giorno(altro[1])))).then(function (r2) {
          if (mia !== richiesta || vistaCarrelli !== 'vendite') return;
          var vecchio = leggiVendite(r2.doc);
          if (!vecchio) return;
          vendite.datiConfronto = vecchio.dati;
          disegnaVendite();
        }, function () { /* senza confronto restano i numeri del periodo */ });
      }, function () {
        if (mia !== richiesta || vistaCarrelli !== 'vendite') return;
        disegnaVendite('Connessione assente. Controlla la rete e riprova.');
        avvisa('errore');
      });
    }

    function mostraVendite(daUtente) {
      chiudiTastiera();
      corrente = null; modifica = null; carrello = null;
      vistaCarrelli = 'vendite';
      radice.classList.remove('ip-su-prodotto', 'ip-in-modifica');
      radice.classList.add('ip-radice', 'ip-senza-ricerca');
      schede.setAttribute('data-scheda', 'vendite');
      campo.value = '';
      if (daUtente) { try { history.replaceState(statoVista('vendite'), '', location.pathname); } catch (e) { /* non indispensabile */ } }
      caricaVendite();
      vista.scrollTop = 0;
    }

    function ripristinaVista(s) {
      if (s.ipVista === 'carrelli') mostraCarrelli(false);
      else if (s.ipVista === 'vendite') mostraVendite(false);
      else if (s.ipVista === 'ordini') mostraOrdini(false);
      else if (s.ipVista === 'ordine') apriOrdine(s.id, false, false, s.daAltro);
      else if (s.ipVista === 'altro') mostraAltro(false);
      else if (s.ipVista === 'altro-voce') mostraVoceAltro(s);
      else if (s.ipVista === 'nuovo') mostraNuovoCarrello(false);
      else if (s.ipVista === 'carrello') apriCarrello(s.id, false);
      else if (s.ipVista === 'riga') { if (carrello && carrello.id === s.id) mostraRiga(s.riga, false); else apriCarrello(s.id, false); }
      else if (s.ipVista === 'cliente') { if (carrello && carrello.id === s.id) mostraCliente(false); else apriCarrello(s.id, false); }
      else if (s.ipVista === 'scarico') { if (carrello && carrello.id === s.id && carrello.scarico) mostraScarico(false); else apriCarrello(s.id, false); }
      else if (s.ipVista === 'catalogo') { if (carrello && carrello.id === s.id) mostraCatalogo(false); else apriCarrello(s.id, false); }
    }

    // ====================================================================================
    // ---------- Vendite: elenco e dettaglio di ogni vendita (SOLO LETTURA) ----------
    // Legge dal CRM l'elenco delle vendite (/retail/order) e, per ogni vendita, dettagli, prodotti, servizi,
    // pagamenti, documenti fiscali, fatture, note e cliente. Solo richieste GET: qui non si modifica niente.
    // Periodo e punti vendita sono gli stessi della Dashboard, così i numeri tornano tra le due sezioni.
    var ordini = { tipo: '', cassa: '', cerca: '', righe: [], pagina: 0, filtrati: 0, somme: null, inCarico: false, opzioni: null, firma: '', scorrimento: 0, aperto: null };
    try {
      var ordiniRicordati = JSON.parse(localStorage.getItem('ip-ordini') || 'null');
      if (ordiniRicordati) { ordini.tipo = ordiniRicordati.tipo || ''; ordini.cassa = ordiniRicordati.cassa || ''; }
    } catch (e) { /* si parte senza filtri */ }
    var ORDINI_PER_PAGINA = 50;
    var MESI_BREVI = ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic'];
    var MESI_LUNGHI = ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'];
    var GIORNI_SETTIMANA = ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'];
    var IC_ORDINE = {
      scontrino: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2"/><path d="M14 8h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5m2 0v1.5m0 -9v1.5"/></svg>',
      fattura: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/><path d="M9 7l1 0"/><path d="M9 13l6 0"/><path d="M13 17l2 0"/></svg>'
    };

    // "08 ott 2026 19:38" (anche con i secondi) -> { data, ora }
    function dataCrm(testo) {
      var m = String(testo || '').match(/(\d{1,2})\s+([a-zà-ù]{3})[a-zà-ù]*\.?\s+(\d{4})(?:\s+(\d{1,2}):(\d{2}))?/i);
      if (!m) return null;
      var mese = MESI_BREVI.indexOf(m[2].toLowerCase());
      if (mese < 0) return null;
      return { data: new Date(+m[3], mese, +m[1]), ora: m[4] ? ('0' + m[4]).slice(-2) + ':' + m[5] : '' };
    }
    function nomeGiorno(d) {
      var ora = new Date(), oggi = new Date(ora.getFullYear(), ora.getMonth(), ora.getDate());
      var diff = Math.round((oggi - d) / 86400000);
      if (diff === 0) return 'Oggi';
      if (diff === 1) return 'Ieri';
      var t = GIORNI_SETTIMANA[d.getDay()] + ' ' + d.getDate() + ' ' + MESI_LUNGHI[d.getMonth()];
      if (d.getFullYear() !== oggi.getFullYear()) t += ' ' + d.getFullYear();
      return t.charAt(0).toUpperCase() + t.slice(1);
    }
    function soldi(valore) { return euro(Math.round((+valore || 0) * 100)); }
    // "1.234,50 €" -> 123450 (centesimi)
    function centesimiDa(testo) {
      var t = String(testo || '').replace(/[^\d,.\-]/g, '');
      if (!t) return null;
      var n = parseFloat(t.replace(/\./g, '').replace(',', '.'));
      return isNaN(n) ? null : Math.round(n * 100);
    }
    function interoItaliano(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.'); }
    function nomeCassa(stampante) { return pulisci(String(stampante || '').replace(/^EPSON\s+/i, '')); }
    function chip(testo, classe) { return el('span', 'ip-chip-stato' + (classe ? ' ' + classe : ''), testo); }
    function salvaFiltriVendite() {
      try { localStorage.setItem('ip-vendite', JSON.stringify({ sedi: vendite.sedi, stampante: vendite.stampante, iva: vendite.iva, confronto: vendite.confronto })); } catch (e) { /* non indispensabile */ }
    }

    function leggiOrdine(x) {
      var cliente = x.customer_name && x.customer_name.name && !/^non disponibile$/i.test(pulisci(x.customer_name.name)) ? pulisci(x.customer_name.name) : '';
      if (cliente && cliente === cliente.toLowerCase()) cliente = cliente.replace(/(^|[\s'-])([a-zà-ù])/g, function (t, prima, lettera) { return prima + lettera.toUpperCase(); });
      var tipo = x.type && x.type.value ? pulisci(x.type.value) : '';
      return {
        id: String(x.id), numero: x.secret ? String(x.secret) : '', quando: dataCrm(x.createdAt), testoData: x.createdAt || '',
        tipo: tipo, fattura: /fattura/i.test(tipo), stampante: x.printer_name || '', cliente: cliente,
        venditore: x.createdBy_name && x.createdBy_name.name ? pulisci(x.createdBy_name.name) : '',
        cap: typeof x.metadata === 'string' ? x.metadata : '',
        totale: +x.discountedAmount || 0, lordo: (+x.amount || 0) / 100, imponibile: +x.noVatAmount || 0, saldo: +x.missingAmount || 0,
        consegna: x.deliveryStatus && x.deliveryStatus.value ? pulisci(String(x.deliveryStatus.value)) : '',
        rimborsata: x.refunded && x.refunded.value ? pulisci(String(x.refunded.value)) : 'No'
      };
    }

    // Punti vendita e casse, presi dai filtri della pagina Vendite del CRM (una volta sola).
    function leggiOpzioniOrdini() {
      if (ordini.opzioni) return Promise.resolve(ordini.opzioni);
      return chiedi('/retail/order').then(function (r) {
        function opzioni(nome) {
          var e = r.doc.querySelector('[name="f[' + nome + ']"][options]');
          try { return JSON.parse(e.getAttribute('options')).map(function (o) { return { v: String(o.value), t: pulisci(o.label) }; }); } catch (x) { return []; }
        }
        ordini.opzioni = { casse: opzioni('pointOfSale'), sedi: opzioni('headquarter') };
        return ordini.opzioni;
      });
    }

    function firmaOrdini() { return [intervallo(), ordini.tipo, ordini.cassa, ordini.cerca, vendite.sedi.join(',')].join('|'); }
    function indirizzoOrdini(pagina) {
      return '/retail/order?dataTableView=order_table&f%5Bsearch%5D=' + encodeURIComponent(ordini.cerca) +
        '&f%5Brange%5D=' + encodeURIComponent(intervallo()) +
        (ordini.tipo ? '&f%5Btype%5D=' + encodeURIComponent(ordini.tipo) : '') +
        (ordini.cassa ? '&f%5BpointOfSale%5D=' + encodeURIComponent(ordini.cassa) : '') +
        vendite.sedi.map(function (s) { return '&f%5Bheadquarter%5D%5B%5D=' + encodeURIComponent(s); }).join('') +
        '&sort=createdAt%3Adesc&page=' + pagina + '&perPage=' + ORDINI_PER_PAGINA;
    }

    function caricaOrdini(daCapo) {
      var mia = ++richiesta;
      if (daCapo) { ordini.righe = []; ordini.pagina = 0; ordini.somme = null; ordini.filtrati = 0; }
      ordini.firma = firmaOrdini();
      ordini.inCarico = true;
      try { localStorage.setItem('ip-ordini', JSON.stringify({ tipo: ordini.tipo, cassa: ordini.cassa })); } catch (e) { /* non indispensabile */ }
      var scorrimento = vista.scrollTop;
      disegnaOrdini();
      if (!daCapo) vista.scrollTop = scorrimento;
      var pagina = ordini.pagina + 1;
      Promise.all([chiediJson(indirizzoOrdini(pagina)), leggiOpzioniOrdini().catch(function () { return null; })]).then(function (risposte) {
        var r = risposte[0];
        if (mia !== richiesta || vistaCarrelli !== 'ordini') return;
        ordini.inCarico = false;
        if (r.login) { location.reload(); return; }
        if (!r.dati || !r.dati.rows) {
          disegnaOrdini(r.stato === 403 ? 'Questo utente non ha accesso all\'elenco delle vendite.' : 'Non riesco a leggere le vendite dal CRM.');
          return;
        }
        ordini.pagina = pagina;
        ordini.filtrati = r.dati.filtered || 0;
        var somme = r.dati.additionalData || {};
        ordini.somme = { totale: +somme.totalAmount || 0, imponibile: +somme.totalNoVatAmount || 0, saldo: +somme.totalMissingAmount || 0 };
        var presenti = {};
        ordini.righe.forEach(function (o) { presenti[o.id] = true; });
        ordini.righe = ordini.righe.concat(r.dati.rows.map(leggiOrdine).filter(function (o) { return !presenti[o.id]; }));
        var dove = vista.scrollTop;
        disegnaOrdini();
        vista.scrollTop = daCapo ? 0 : dove;
      }, function () {
        if (mia !== richiesta) return;
        ordini.inCarico = false;
        if (vistaCarrelli === 'ordini') disegnaOrdini('Connessione assente. Controlla la rete e riprova.');
        avvisa('errore');
      });
    }

    function rigaFiltro(nome, valore, fai) {
      var riga = crea('button', 'ip-riga ip-riga-filtro');
      riga.type = 'button';
      riga.appendChild(el('span', 'ip-riga-filtro-nome', nome));
      riga.appendChild(el('span', 'ip-riga-filtro-valore', valore));
      riga.appendChild(crea('span', 'ip-riga-freccia', ICONA_FRECCIA));
      riga.addEventListener('click', fai);
      return riga;
    }

    function filtriOrdini() {
      var box = el('div', 'ip-ordini-filtri');
      // Tipo di documento (su iPhone diventa il controllo a segmenti di sistema).
      var segmenti = el('div', 'ip-segmenti ip-segmenti-stretti');
      [['', 'Tutte'], ['receipt', 'Scontrini'], ['invoice', 'Fatture']].forEach(function (p) {
        var b = el('button', ordini.tipo === p[0] ? 'ip-scelto' : '', p[1]);
        b.type = 'button';
        b.addEventListener('click', function () { if (ordini.tipo === p[0]) return; ordini.tipo = p[0]; caricaOrdini(true); });
        segmenti.appendChild(b);
      });
      box.appendChild(segmenti);
      // Periodo: lo stesso della Dashboard.
      var dateScelte = vendite.periodo === 'date' && vendite.da ? vendite.da.slice(0, 5) + ' → ' + vendite.a.slice(0, 5) : '';
      var cambiaPeriodo = function (v) {
        if (v === 'date') { foglioDate(function () { caricaOrdini(true); }); return; }
        if (v === vendite.periodo) return;
        vendite.periodo = v;
        caricaOrdini(true);
      };
      if (NATIVO) {
        box.appendChild(rigaMenu('Periodo', [
          { v: 'oggi', t: 'Oggi' }, { v: 'ieri', t: 'Ieri' }, { v: 'settimana', t: 'Questa settimana' }, { v: 'mese', t: 'Questo mese' },
          { v: 'anno', t: 'Quest\'anno' }, { v: 'date', t: dateScelte || 'Scegli le date…' }
        ], vendite.periodo, cambiaPeriodo));
      } else {
        var pillole = el('div', 'ip-pillole');
        [['oggi', 'Oggi'], ['ieri', 'Ieri'], ['settimana', 'Settimana'], ['mese', 'Mese'], ['anno', 'Anno'], ['date', dateScelte || 'Date…']].forEach(function (p) {
          var t = el('button', vendite.periodo === p[0] ? 'ip-scelto' : '', p[1]);
          t.type = 'button';
          t.addEventListener('click', function () { cambiaPeriodo(p[0]); });
          pillole.appendChild(t);
        });
        box.appendChild(pillole);
      }
      // Punti vendita (gli stessi della Dashboard) e cassa.
      var opz = ordini.opzioni;
      function nomeDi(lista, v) { var o = (lista || []).filter(function (x) { return x.v === v; })[0]; return o ? o.t : ''; }
      var testoSedi = !vendite.sedi.length ? 'Tutti' : (vendite.sedi.length === 1 ? (nomeDi(opz && opz.sedi, vendite.sedi[0]) || '1 scelto') : vendite.sedi.length + ' scelti');
      var testoCassa = ordini.cassa ? (nomeDi(opz && opz.casse, ordini.cassa) || 'Una cassa') : 'Tutte';
      var righe = el('div', 'ip-scheda ip-lista ip-filtri-righe');
      righe.appendChild(rigaFiltro('Punti vendita', testoSedi, function () {
        leggiOpzioniOrdini().then(function (o) {
          foglioScelta('Punti vendita', o.sedi, vendite.sedi, true, function (nuove) { vendite.sedi = nuove; salvaFiltriVendite(); caricaOrdini(true); });
        }, function () { mostraAvviso('Connessione assente', 'Controlla la rete e riprova.'); });
      }));
      righe.appendChild(rigaFiltro('Cassa', testoCassa, function () {
        leggiOpzioniOrdini().then(function (o) {
          foglioScelta('Cassa', o.casse, ordini.cassa ? [ordini.cassa] : [], false, function (nuove) { ordini.cassa = nuove[0] || ''; caricaOrdini(true); });
        }, function () { mostraAvviso('Connessione assente', 'Controlla la rete e riprova.'); });
      }));
      box.appendChild(righe);
      return box;
    }

    function rigaOrdine(o) {
      var riga = crea('button', 'ip-riga ip-riga-ordine');
      riga.type = 'button';
      riga.setAttribute('data-id', o.id);
      var lato = el('span', 'ip-ordine-lato');
      lato.appendChild(crea('span', 'ip-ordine-icona' + (o.fattura ? ' ip-ordine-fattura' : ''), o.fattura ? IC_ORDINE.fattura : IC_ORDINE.scontrino));
      lato.appendChild(el('span', 'ip-ordine-ora', o.quando ? o.quando.ora : ''));
      riga.appendChild(lato);
      var testi = el('span', 'ip-riga-testi');
      testi.appendChild(el('span', 'ip-riga-nome', o.cliente || (o.fattura ? 'Fattura' : 'Scontrino')));
      testi.appendChild(el('span', 'ip-riga-sotto', [o.cliente ? o.tipo : '', o.venditore, nomeCassa(o.stampante)].filter(Boolean).join(' · ')));
      var stati = el('span', 'ip-ordine-stati');
      if (/^s/i.test(o.rimborsata)) stati.appendChild(chip('Rimborsata', 'ip-chip-rosso'));
      else if (/^parz/i.test(o.rimborsata)) stati.appendChild(chip('Reso parziale', 'ip-chip-rosso'));
      if (o.saldo > 0.004) stati.appendChild(chip('Da incassare ' + soldi(o.saldo), 'ip-chip-ambra'));
      if (o.consegna && !/completamente consegnata|non tracciata/i.test(o.consegna)) stati.appendChild(chip(o.consegna));
      if (stati.children.length) testi.appendChild(stati);
      riga.appendChild(testi);
      var importo = el('span', 'ip-ordine-importo');
      importo.appendChild(el('b', '', soldi(o.totale)));
      if (o.lordo - o.totale > 0.004) importo.appendChild(el('s', '', soldi(o.lordo)));
      riga.appendChild(importo);
      riga.addEventListener('click', function () { apriOrdine(o.id, true); });
      return riga;
    }

    function disegnaOrdini(messaggio) {
      vista.innerHTML = '';
      vista.appendChild(filtriOrdini());
      if (ordini.somme) {
        var tot = el('div', 'ip-scheda ip-numero ip-numero-prezzo ip-totale-ordini');
        tot.appendChild(el('div', 'ip-numero-nome', ordini.filtrati === 1 ? '1 vendita' : interoItaliano(ordini.filtrati) + ' vendite'));
        tot.appendChild(el('div', 'ip-numero-valore', euro(ordini.somme.totale)));
        tot.appendChild(el('div', 'ip-totale-periodo', 'IVA esclusa ' + euro(ordini.somme.imponibile) + ' · ' + intervallo().replace(' - ', ' → ')));
        if (ordini.somme.saldo > 0) tot.appendChild(el('div', 'ip-totale-saldo', 'Da incassare ' + euro(ordini.somme.saldo)));
        vista.appendChild(tot);
      }
      if (messaggio) {
        vista.appendChild(el('div', 'ip-vuoto', messaggio));
      } else if (ordini.inCarico && !ordini.righe.length) {
        vista.insertAdjacentHTML('beforeend', '<div class="ip-scheda ip-dati ip-finto ip-sotto"><i style="width:70%"></i><i style="width:50%"></i><i style="width:80%"></i><i style="width:60%"></i><i style="width:75%"></i></div>');
      } else if (!ordini.righe.length) {
        vista.appendChild(el('div', 'ip-vuoto', ordini.cerca ? 'Nessuna vendita trovata per "' + ordini.cerca + '".' : 'Nessuna vendita in questo periodo.'));
      } else {
        // Raggruppate per giorno, con il totale del giorno (delle vendite già caricate).
        var gruppi = [], ultimo = null;
        ordini.righe.forEach(function (o) {
          var chiave = o.quando ? o.quando.data.getTime() : o.testoData.slice(0, 11);
          if (!ultimo || ultimo.chiave !== chiave) { ultimo = { chiave: chiave, data: o.quando ? o.quando.data : null, testo: o.testoData.slice(0, 11), righe: [], somma: 0 }; gruppi.push(ultimo); }
          ultimo.righe.push(o);
          ultimo.somma += o.totale;
        });
        gruppi.forEach(function (g) {
          var testa = el('div', 'ip-etichetta ip-giorno');
          testa.appendChild(el('span', '', g.data ? nomeGiorno(g.data) : g.testo));
          testa.appendChild(el('span', 'ip-giorno-totale', (g.righe.length === 1 ? '1 vendita' : g.righe.length + ' vendite') + ' · ' + soldi(g.somma)));
          vista.appendChild(testa);
          var lista = el('div', 'ip-scheda ip-lista');
          g.righe.forEach(function (o) { lista.appendChild(rigaOrdine(o)); });
          vista.appendChild(lista);
        });
        var mancano = ordini.filtrati - ordini.righe.length;
        if (mancano > 0) {
          var altre = crea('button', 'ip-secondario ip-largo ip-altre', ordini.inCarico ? 'Carico…' : 'Mostra altre ' + Math.min(mancano, ORDINI_PER_PAGINA) + ' (ne restano ' + interoItaliano(mancano) + ')');
          altre.type = 'button';
          altre.disabled = ordini.inCarico;
          altre.addEventListener('click', function () { caricaOrdini(false); });
          vista.appendChild(altre);
        }
      }
      azioni.innerHTML = '';
      radice.classList.add('ip-senza-azioni');
    }

    function mostraOrdini(daUtente) {
      chiudiTastiera();
      var tornando = vistaCarrelli === 'ordine' && !daUtente;
      corrente = null; modifica = null; carrello = null;
      vistaCarrelli = 'ordini';
      ordini.aperto = null;
      vista.classList.remove('ip-in-attesa');
      radice.classList.remove('ip-su-prodotto', 'ip-in-modifica', 'ip-senza-ricerca');
      radice.classList.add('ip-radice');
      schede.setAttribute('data-scheda', 'ordini');
      titolo.textContent = 'Vendite';
      campo.setAttribute('placeholder', 'Cerca numero o cliente');
      campo.value = ordini.cerca;
      if (daUtente) { try { history.replaceState(statoVista('ordini'), '', location.pathname); } catch (e) { /* non indispensabile */ } }
      // Tornando da una vendita l'elenco resta quello di prima, nello stesso punto: niente ricarica.
      if (tornando && ordini.righe.length && ordini.firma === firmaOrdini()) {
        disegnaOrdini();
        vista.scrollTop = ordini.scorrimento;
        return;
      }
      caricaOrdini(true);
      vista.scrollTop = 0;
    }

    // ---------- Dettaglio di una vendita ----------
    // La pagina del CRM ha schede con righe "nome / valore" (Vendita, Importi, Cliente, Anagrafica, Consegna)
    // e in cima alcuni numeri grandi (sconto applicato, righe, pagamenti): li leggo tutti in modo generico.
    function leggiDettaglioOrdine(doc) {
      var corpoPagina = doc.querySelector('.console-page-body') || doc.body;
      var numeri = {};
      var cifre = corpoPagina.querySelectorAll('.tnum');
      for (var i = 0; i < cifre.length; i++) {
        var n = cifre[i];
        // Il riquadro del numero contiene anche la sua etichetta (testo attenuato, non vuoto: l'icona ha la stessa classe).
        var etichetta = null, box = n.parentElement;
        while (box && box !== corpoPagina && !etichetta) {
          var attenuati = box.querySelectorAll('.text-text-muted');
          for (var a = 0; a < attenuati.length && !etichetta; a++) if (pulisci(attenuati[a].textContent) && !attenuati[a].contains(n)) etichetta = attenuati[a];
          box = box.parentElement;
        }
        if (etichetta && !numeri[pulisci(etichetta.textContent)]) numeri[pulisci(etichetta.textContent)] = pulisci(n.textContent);
      }
      var sezioni = {};
      var corpi = corpoPagina.querySelectorAll('.console-card-body');
      for (var c = 0; c < corpi.length; c++) {
        var corpoScheda = corpi[c], scheda = corpoScheda.parentElement;
        var testa = scheda && scheda.firstElementChild !== corpoScheda ? scheda.firstElementChild : null;
        var nome = '';
        if (testa) {
          var pezzi = testa.querySelectorAll('span, a, p, h2, h3');
          for (var k = 0; k < pezzi.length && !nome; k++) {
            var t = pulisci(pezzi[k].textContent);
            if (t && !pezzi[k].children.length && !/^modifica$/i.test(t)) nome = t;
          }
        }
        var righe = [];
        var celle = corpoScheda.querySelectorAll('[data-console-row]');
        for (var r = 0; r < celle.length; r++) {
          var p = celle[r].querySelectorAll('p');
          if (p.length >= 2) righe.push([pulisci(p[0].textContent), pulisci(p[1].textContent)]);
        }
        var linee = [];
        if (!righe.length) {
          var foglie = corpoScheda.querySelectorAll('*');
          for (var f = 0; f < foglie.length; f++) {
            if (foglie[f].children.length) continue;
            var testo = pulisci(foglie[f].textContent);
            if (testo) linee.push(testo);
          }
        }
        if (nome && !sezioni[nome]) sezioni[nome] = { righe: righe, linee: linee };
      }
      var haFatture = !!doc.querySelector('a[href^="/retail/order/invoice/"][href$="/invoice"]');
      return { numeri: numeri, sezioni: sezioni, haFatture: haFatture };
    }
    function valoreDi(sezione, nome) {
      if (!sezione) return '';
      for (var i = 0; i < sezione.righe.length; i++) if (sezione.righe[i][0].toLowerCase() === nome.toLowerCase()) return sezione.righe[i][1];
      return '';
    }

    function apriOrdine(id, daUtente, senzaAttesa, daAltro) {
      chiudiTastiera();
      var mia = ++richiesta;
      if (vistaCarrelli === 'ordini') ordini.scorrimento = vista.scrollTop;
      vistaCarrelli = 'ordine';
      corrente = null; modifica = null; carrello = null;
      var base = ordini.righe.filter(function (o) { return o.id === String(id); })[0] || null;
      if (daAltro) base = null;
      ordini.aperto = { id: String(id), base: base, dati: null, daAltro: !!daAltro };
      var quando = base && base.quando;
      intestazioneInterna((base ? (base.tipo || 'Vendita') : 'Vendita') + (quando ? ' ' + ('0' + quando.data.getDate()).slice(-2) + '/' + ('0' + (quando.data.getMonth() + 1)).slice(-2) : ''));
      radice.classList.add('ip-senza-ricerca');
      schede.setAttribute('data-scheda', daAltro ? 'altro' : 'ordini');
      azioni.innerHTML = '';
      radice.classList.add('ip-senza-azioni');
      if (daUtente) spingi('ordine', { id: String(id), daAltro: !!daAltro });
      if (!senzaAttesa) { disegnaOrdine(); vista.scrollTop = 0; }
      var nulla = function () { return { dati: null }; };
      var tabella = function (percorso, nome, quanti) { return chiediJson('/retail/order/' + id + percorso + '?dataTableView=' + nome + '&f%5Bsearch%5D=&page=1&perPage=' + quanti).catch(nulla); };
      Promise.all([
        chiedi('/retail/order/' + id),
        tabella('/row', 'row_table', 500),
        tabella('/payment', 'payment_table', 100),
        tabella('/transaction', 'transaction_table', 100),
        tabella('/service-row/list', 'service_row_table', 100),
        tabella('/summary/note/list', 'note_table', 100)
      ]).then(function (r) {
        if (mia !== richiesta || vistaCarrelli !== 'ordine') return;
        if (/\/login$/.test(r[0].percorso) || r[1].login) { location.reload(); return; }
        var dettaglio = leggiDettaglioOrdine(r[0].doc);
        var righe = function (x) { return x && x.dati && x.dati.rows ? x.dati.rows : []; };
        var fine = function (fatture) {
          if (mia !== richiesta || vistaCarrelli !== 'ordine') return;
          ordini.aperto.dati = {
            dettaglio: dettaglio, prodotti: righe(r[1]), sommeProdotti: r[1].dati && r[1].dati.additionalData || {},
            pagamenti: righe(r[2]), transazioni: righe(r[3]), servizi: righe(r[4]), note: righe(r[5]), fatture: fatture
          };
          var dove = vista.scrollTop;
          disegnaOrdine();
          if (senzaAttesa) vista.scrollTop = 0; else vista.scrollTop = dove;
          vista.classList.remove('ip-in-attesa');
        };
        if (!dettaglio.haFatture) { fine([]); return; }
        chiediJson('/retail/order/invoice/' + id + '/invoice?dataTableView=invoice_table&page=1&perPage=50').then(function (f) { fine(righe(f)); }, function () { fine([]); });
      }, function () {
        if (mia !== richiesta) return;
        vista.classList.remove('ip-in-attesa');
        disegnaOrdine('Non riesco a leggere questa vendita dal CRM. Controlla la rete e riprova.');
        avvisa('errore');
      });
    }

    function sezioneDati(titoloSezione, coppie) {
      var buone = coppie.filter(function (c) { return c && c[1]; });
      if (!buone.length) return;
      vista.appendChild(el('div', 'ip-etichetta', titoloSezione));
      var box = el('div', 'ip-scheda ip-dati');
      buone.forEach(function (c) {
        var r = el('div', 'ip-dato');
        r.appendChild(el('span', 'ip-dato-nome', c[0]));
        var v = el('span', 'ip-dato-valore', c[1]);
        if (c[2]) v.classList.add(c[2]);
        r.appendChild(v);
        box.appendChild(r);
      });
      vista.appendChild(box);
    }

    function disegnaOrdine(messaggio) {
      var o = ordini.aperto;
      if (!o) return;
      var b = o.base, d = o.dati;
      var det = d ? d.dettaglio : null;
      var sezioneVendita = det && det.sezioni['Vendita'], importi = det && det.sezioni['Importi'];
      vista.innerHTML = '';

      // Intestazione: giorno e ora, tipo di documento, stati.
      var testa = el('div', 'ip-ordine-testa');
      var dataDettaglio = valoreDi(sezioneVendita, 'Data');
      var quando = b && b.quando;
      if (!quando) {
        // Riaperta senza passare dall'elenco (rientro nell'app): giorno e ora dal dettaglio, "07/10/2026 17:05".
        var dd = dataDettaglio.match(/(\d{2})\/(\d{2})\/(\d{4})(?:\s+(\d{2}:\d{2}))?/);
        if (dd) quando = { data: new Date(+dd[3], +dd[2] - 1, +dd[1]), ora: dd[4] || '' };
      }
      testa.appendChild(el('div', 'ip-ordine-quando', quando ? nomeGiorno(quando.data) + (quando.ora ? ' alle ' + quando.ora : '') : (dataDettaglio || '')));
      var stati = el('div', 'ip-ordine-stati');
      var tipo = b ? b.tipo : (d ? (d.fatture.length ? 'Fattura' : 'Scontrino') : '');
      if (tipo) stati.appendChild(chip(tipo, /fattura/i.test(tipo) ? 'ip-chip-pieno' : ''));
      if (b && /^s/i.test(b.rimborsata)) stati.appendChild(chip('Rimborsata', 'ip-chip-rosso'));
      else if (b && /^parz/i.test(b.rimborsata)) stati.appendChild(chip('Reso parziale', 'ip-chip-rosso'));
      else if (!b && d && d.transazioni.some(function (x) { return x.type && /reso/i.test(x.type.value || ''); })) stati.appendChild(chip('Con reso', 'ip-chip-rosso'));
      var consegna = valoreDi(sezioneVendita, 'Stato consegna') || (b && b.consegna) || '';
      if (consegna) stati.appendChild(chip(consegna));
      if (stati.children.length) testa.appendChild(stati);
      vista.appendChild(testa);

      // Totale e pagato: la coppia di riquadri resta visibile in alto quando si scorre (striscia dei totali).
      var totale = valoreDi(importi, 'Totale scontato') || valoreDi(importi, 'Totale') || (b ? soldi(b.totale) : '');
      var pieno = valoreDi(importi, 'Totale scontato') ? valoreDi(importi, 'Totale') : '';
      var pagato = valoreDi(importi, 'Pagato');
      var saldo = b ? b.saldo : 0;
      if (importi) {
        importi.righe.forEach(function (x) { if (/residuo|da pagare|da incassare|saldo/i.test(x[0])) { var cc = centesimiDa(x[1]); if (cc !== null) saldo = cc / 100; } });
      }
      if (totale) {
        var coppia = el('div', 'ip-coppia');
        var t = el('div', 'ip-scheda ip-numero ip-numero-prezzo');
        t.appendChild(el('div', 'ip-numero-nome', 'Totale'));
        t.appendChild(el('div', 'ip-numero-valore', totale));
        var sconto = det && det.numeri['Sconto applicato'];
        var percento = det && det.numeri['% sconto'];
        if (sconto) t.appendChild(el('div', 'ip-totale-periodo', 'Sconto ' + sconto + (percento ? ' (' + percento.replace(/,00$/, '') + '%)' : '') + (pieno ? ' su ' + pieno : '')));
        coppia.appendChild(t);
        var p = el('div', 'ip-scheda ip-numero' + (saldo > 0.004 ? ' es-attenzione' : ''));
        p.appendChild(el('div', 'ip-numero-nome', saldo > 0.004 ? 'Da incassare' : 'Pagato'));
        p.appendChild(el('div', 'ip-numero-valore ip-numero-medio', saldo > 0.004 ? soldi(saldo) : (pagato || (d ? '—' : '…'))));
        coppia.appendChild(p);
        vista.appendChild(coppia);
      }

      if (messaggio) { vista.appendChild(el('div', 'ip-vuoto', messaggio)); return; }
      if (!d) {
        vista.insertAdjacentHTML('beforeend', '<div class="ip-etichetta">Prodotti</div><div class="ip-scheda ip-dati ip-finto"><i style="width:70%"></i><i style="width:50%"></i><i style="width:80%"></i><i style="width:60%"></i></div>');
        return;
      }

      // Prodotti
      var pezzi = d.prodotti.reduce(function (s, x) { return s + (+x.quantity || 0); }, 0);
      vista.appendChild(el('div', 'ip-etichetta', 'Prodotti' + (pezzi ? ' · ' + pezzi + (pezzi === 1 ? ' pezzo' : ' pezzi') : '')));
      if (!d.prodotti.length) {
        vista.appendChild(el('div', 'ip-vuoto', 'Nessun prodotto in questa vendita.'));
      } else {
        var lista = el('div', 'ip-scheda ip-lista');
        d.prodotti.forEach(function (x) {
          var riga = el('div', 'ip-riga ip-riga-venduto');
          // Senza foto il CRM manda un disegno segnaposto su fondo bianco: meglio il nostro, che segue il tema.
          var foto = x.product_image && x.product_image.src && !/^data:image\/svg/.test(x.product_image.src) ? x.product_image.src : '';
          riga.appendChild(miniatura(foto, 'ip-mini'));
          var testi = el('span', 'ip-riga-testi');
          testi.appendChild(el('span', 'ip-riga-nome', pulisci(x.product_description || x.product_code || 'Prodotto')));
          var sotto = el('span', 'ip-venduto-sotto');
          var codice = pulisci(x.product_code || '');
          var ean = pulisci(x.product_ean || '');
          if (codice || ean) sotto.appendChild(codiceToccabile(ean || codice, codice || ean, pulisci(x.product_description || '')));
          var quantita = +x.quantity || 0, prezzo = +x.product_price || 0;
          sotto.appendChild(el('span', 'ip-venduto-quantita', quantita + ' × ' + soldi(prezzo)));
          testi.appendChild(sotto);
          var stato = el('span', 'ip-ordine-stati');
          var origine = x.source && x.source.value ? pulisci(x.source.value) : '';
          if (origine && !/^stock$/i.test(origine)) stato.appendChild(chip(origine));
          var cons = x.deliveryStatus && x.deliveryStatus.value;
          var testoCons = pulisci(Array.isArray(cons) ? cons.join(', ') : String(cons || ''));
          if (testoCons && !/^consegnato$/i.test(testoCons)) stato.appendChild(chip(testoCons, 'ip-chip-ambra'));
          if (x.appliedPromos) stato.appendChild(chip(pulisci(String(x.appliedPromos))));
          var venditoreRiga = pulisci([x.seller_name, x.seller_surname].filter(Boolean).join(' '));
          if (venditoreRiga) stato.appendChild(chip(venditoreRiga));
          if (stato.children.length) testi.appendChild(stato);
          riga.appendChild(testi);
          var importo = el('span', 'ip-ordine-importo');
          var finale = +x.finalPrice || 0;
          importo.appendChild(el('b', '', soldi(finale)));
          if (prezzo * quantita - finale > 0.004) importo.appendChild(el('s', '', soldi(prezzo * quantita)));
          riga.appendChild(importo);
          lista.appendChild(riga);
        });
        vista.appendChild(lista);
      }

      // Servizi (trasporto, montaggio...): campi letti in modo prudente, perché qui sono quasi sempre vuoti.
      if (d.servizi.length) {
        sezioneDati('Servizi', d.servizi.map(function (x) {
          var nome = x.service_name || x.name || x.description || x.service_description || 'Servizio';
          var prezzo = x.finalPrice != null ? x.finalPrice : (x.price != null ? x.price : '');
          return [pulisci(String(nome)), typeof prezzo === 'number' ? soldi(prezzo) : pulisci(String(prezzo))];
        }));
      }

      // Pagamenti
      if (d.pagamenti.length) {
        vista.appendChild(el('div', 'ip-etichetta', 'Pagamenti'));
        var pag = el('div', 'ip-scheda ip-dati');
        d.pagamenti.forEach(function (x) {
          var r = el('div', 'ip-dato ip-dato-doppio');
          var nome = el('span', 'ip-dato-nome');
          nome.appendChild(el('b', '', pulisci(x.method_name || 'Pagamento')));
          nome.appendChild(el('small', '', pulisci(x.transaction_createdAt || '')));
          r.appendChild(nome);
          var negativo = /^-/.test(String(x.amount || '').trim());
          r.appendChild(el('span', 'ip-dato-valore' + (negativo ? ' ip-negativo' : ''), pulisci(x.amount || '')));
          pag.appendChild(r);
        });
        vista.appendChild(pag);
      }

      // Documenti fiscali: scontrini, resi e fatture.
      if (d.transazioni.length || d.fatture.length) {
        vista.appendChild(el('div', 'ip-etichetta', 'Documenti'));
        var doc = el('div', 'ip-scheda ip-dati');
        d.transazioni.forEach(function (x) {
          var r = el('div', 'ip-dato ip-dato-doppio');
          var nome = el('span', 'ip-dato-nome');
          var tipoDoc = x.type && x.type.value ? pulisci(x.type.value) : 'Documento';
          nome.appendChild(el('b', '', tipoDoc + (x.invoiceNumber ? ' n. ' + x.invoiceNumber : '')));
          nome.appendChild(el('small', '', [pulisci(x.createdAt || ''), x.invoiceZRepNumber ? 'chiusura ' + x.invoiceZRepNumber : '', x.createdBy_name ? pulisci(x.createdBy_name) : ''].filter(Boolean).join(' · ')));
          r.appendChild(nome);
          var val = el('span', 'ip-dato-valore ip-dato-colonna');
          var negativo = /^-/.test(String(x.amount || '').trim());
          val.appendChild(el('b', negativo ? 'ip-negativo' : '', pulisci(x.amount || '')));
          if (x.vatAmount) val.appendChild(el('small', '', 'IVA ' + pulisci(x.vatAmount)));
          r.appendChild(val);
          doc.appendChild(r);
        });
        d.fatture.forEach(function (x) {
          var r = el('div', 'ip-dato ip-dato-doppio');
          var nome = el('span', 'ip-dato-nome');
          nome.appendChild(el('b', '', 'Fattura ' + pulisci(String(x.number || ''))));
          nome.appendChild(el('small', '', [pulisci(x.createdAt || ''), x.status && x.status.value ? pulisci(x.status.value) : ''].filter(Boolean).join(' · ')));
          r.appendChild(nome);
          var val = el('span', 'ip-dato-valore ip-dato-colonna');
          val.appendChild(el('b', '', pulisci(x.total || '')));
          if (x.transaction_vatAmount) val.appendChild(el('small', '', 'IVA ' + pulisci(x.transaction_vatAmount)));
          r.appendChild(val);
          doc.appendChild(r);
        });
        vista.appendChild(doc);
      }

      // Cliente, anagrafica e indirizzo di consegna.
      var cliente = det.sezioni['Cliente'], anagrafica = det.sezioni['Anagrafica'], indirizzo = det.sezioni['Consegna'];
      if (cliente && cliente.righe.length) {
        sezioneDati('Cliente', cliente.righe.concat(anagrafica ? anagrafica.righe : []).concat(indirizzo && indirizzo.linee.length ? [['Consegna', indirizzo.linee.join(', ')]] : []));
      } else {
        vista.appendChild(el('div', 'ip-etichetta', 'Cliente'));
        vista.appendChild(el('div', 'ip-scheda ip-vuoto ip-vuoto-scheda', 'Nessun cliente collegato.'));
      }

      // Dati della vendita
      var datiVendita = sezioneVendita ? sezioneVendita.righe.filter(function (x) { return !/^stato consegna$/i.test(x[0]); }) : [];
      if (b && b.numero) datiVendita.push(['Numero', b.numero]);
      if (det.numeri['Righe']) datiVendita.push(['Righe', det.numeri['Righe']]);
      if (importi) importi.righe.forEach(function (x) { if (!/^(totale scontato|pagato)$/i.test(x[0]) && !(x[0] === 'Totale' && !pieno)) datiVendita.push(x); });
      sezioneDati('Dati della vendita', datiVendita);

      // Note
      if (d.note.length) {
        vista.appendChild(el('div', 'ip-etichetta', 'Note'));
        var note = el('div', 'ip-scheda ip-note-ordine');
        d.note.forEach(function (x) {
          var testo = '';
          ['content', 'text', 'note', 'body', 'description', 'message'].forEach(function (k) { if (!testo && typeof x[k] === 'string') testo = x[k]; });
          if (!testo) Object.keys(x).forEach(function (k) { if (!testo && typeof x[k] === 'string' && x[k].length > 3 && !/url$|^id$|createdAt/i.test(k)) testo = x[k]; });
          var riga = el('div', 'ip-nota-ordine');
          riga.appendChild(el('div', '', pulisci(testo.replace(/<[^>]+>/g, ' '))));
          if (x.createdAt) riga.appendChild(el('small', '', pulisci(x.createdAt)));
          note.appendChild(riga);
        });
        vista.appendChild(note);
      }
    }

    // ====================================================================================
    // ---------- Altro: le altre funzioni (SOLO LETTURA) ----------
    // Una pagina come in EasyStore: scheda dell'utente e, sotto, le funzioni divise per argomento.
    // Ogni funzione compare solo se l'utente del CRM può usarla: all'avvio l'app prova a leggere i dati di
    // ognuna e nasconde quelle per cui il CRM risponde "accesso negato". La protezione vera resta del CRM.
    var IC_ALTRO = {
      analisi: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 13a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"/><path d="M15 9a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"/><path d="M9 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"/><path d="M4 20h14"/></svg>',
      incassi: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 9m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z"/><path d="M14 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M17 9v-2a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h2"/></svg>',
      catalogo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3z"/></svg>',
      venduti: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"/><path d="M12 12l8 -4.5"/><path d="M12 12l0 9"/><path d="M12 12l-8 -4.5"/></svg>',
      ticket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l0 2"/><path d="M15 11l0 2"/><path d="M15 17l0 2"/><path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2"/></svg>',
      casse: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 13a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"/><path d="M7 11v-6a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v6"/><path d="M10 7h4"/><path d="M8 15h.01"/><path d="M12 15h.01"/><path d="M16 15h.01"/></svg>',
      stampanti: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2"/><path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4"/><path d="M7 13m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z"/></svg>',
      terminali: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"/><path d="M3 10l18 0"/><path d="M7 15l.01 0"/><path d="M11 15l2 0"/></svg>'
    };
    var ALTRO_SEZIONI = [
      { nome: 'Analisi', voci: [
        { id: 'promo', titolo: 'Analisi promozioni', sotto: 'Vendite e sconti di ogni promozione', icona: 'analisi', prova: '/analytics/promo/dashboard?dataTableView=promo_usage_table&page=1&perPage=1' }
      ] },
      { nome: 'Consultazione', voci: [
        { id: 'catalogo', titolo: 'Catalogo prodotti', sotto: 'Ogni articolo con la scheda completa', icona: 'catalogo', prova: '/product?dataTableView=product_table&page=1&perPage=1' },
        { id: 'incassi', titolo: 'Incassi', sotto: 'Transazioni per natura e per giorno', icona: 'incassi', prova: '/order/payment/list?dataTableView=payment_table&page=1&perPage=1' },
        { id: 'venduti', titolo: 'Prodotti venduti', sotto: 'Articoli venduti nel periodo', icona: 'venduti', prova: '/retail/row/list?dataTableView=order_row_table&page=1&perPage=1' }
      ] },
      { nome: 'Promozioni', voci: [
        { id: 'ticket', titolo: 'Ticket promozionali', sotto: 'Messaggi stampati sugli scontrini', icona: 'ticket', prova: '/promo-ticket?dataTableView=promo_ticket_table&page=1&perPage=1' }
      ] },
      { nome: 'Configurazione casse', voci: [
        { id: 'casse', titolo: 'Casse', sotto: 'Stampante e POS di ogni cassa', icona: 'casse', prova: '/retail/point-of-sale?dataTableView=point_of_sale_table&page=1&perPage=1' },
        { id: 'stampanti', titolo: 'Stampanti', sotto: 'Stampanti fiscali e indirizzi di rete', icona: 'stampanti', prova: '/retail/printer?dataTableView=printer_table&page=1&perPage=1' },
        { id: 'terminali', titolo: 'Terminali', sotto: 'POS di pagamento e indirizzi di rete', icona: 'terminali', prova: '/retail/terminal?dataTableView=terminal_table&page=1&perPage=1' }
      ] }
    ];
    var VOCE_ALTRO = {};
    ALTRO_SEZIONI.forEach(function (s) { s.voci.forEach(function (v) { VOCE_ALTRO[v.id] = v; }); });

    // ---------- Permessi ----------
    // true = si può usare, false = il CRM ha negato l'accesso. Finché non si sa, tutto resta visibile.
    var permessi = { controllati: false, voci: {}, sezioni: {} };
    var PROVE_SEZIONI = {
      vendite: '/retail/order/dashboard',
      ordini: '/retail/order?dataTableView=order_table&page=1&perPage=1',
      carrelli: '/retail/cart?dataTableView=cart_table&page=1&perPage=1'
    };
    var utente = null;
    function leggiUtente(doc) {
      var tasto = doc && doc.querySelector('button[aria-label="Apri profilo"]');
      if (!tasto) return null;
      var nome = tasto.querySelector('.font-semibold'), email = tasto.querySelector('.text-xs'), foto = tasto.querySelector('img');
      var u = { nome: nome ? pulisci(nome.textContent) : pulisci(tasto.getAttribute('title') || ''), email: email ? pulisci(email.textContent) : '', foto: foto ? foto.getAttribute('src') : '' };
      return u.nome || u.email ? u : null;
    }
    function prova(indirizzo) {
      // Accesso negato solo con una risposta esplicita del CRM (401 o 403). Rete assente o altri errori: si lascia visibile.
      return fetch(indirizzo, { credentials: 'same-origin', headers: { 'Accept': 'application/json', 'X-Requested-With': 'XMLHttpRequest' } }).then(function (r) {
        if (r.status === 401 || r.status === 403) return false;
        if (/\/login$/.test(new URL(r.url, location.href).pathname)) return null;
        return true;
      }, function () { return null; });
    }
    function sezionePermessa(s) { if (!permessi) return true; return s === 'prodotti' || (s === 'altro' ? altroHaVoci() : permessi.sezioni[s] !== false); }
    function altroHaVoci() { return Object.keys(VOCE_ALTRO).some(function (id) { return permessi.voci[id] !== false; }); }
    function sezioniVisibili() { return ['vendite', 'ordini', 'prodotti', 'carrelli', 'altro'].filter(sezionePermessa); }
    function applicaPermessi() {
      var tasti = schede.querySelectorAll('button[data-s]');
      for (var i = 0; i < tasti.length; i++) tasti[i].hidden = !sezionePermessa(tasti[i].getAttribute('data-s'));
      // Se la sezione aperta non è permessa si va alla prima che lo è (Prodotti c'è sempre).
      var ora = schede.getAttribute('data-scheda');
      if (radice.classList.contains('ip-radice') && !sezionePermessa(ora)) vaiASezione(sezioniVisibili()[0] || 'prodotti');
      else if (vistaCarrelli === 'altro') disegnaAltro();
      if (window.__ipRaccontaOra) window.__ipRaccontaOra();
    }
    function negaAccesso(id) {
      if (VOCE_ALTRO[id]) permessi.voci[id] = false; else permessi.sezioni[id] = false;
      applicaPermessi();
    }
    function controllaPermessi() {
      var nomi = Object.keys(PROVE_SEZIONI), voci = Object.keys(VOCE_ALTRO);
      var richieste = nomi.map(function (n) { return prova(PROVE_SEZIONI[n]); }).concat(voci.map(function (id) { return prova(VOCE_ALTRO[id].prova); }));
      return Promise.all(richieste).then(function (esiti) {
        nomi.forEach(function (n, i) { if (esiti[i] !== null) permessi.sezioni[n] = esiti[i]; });
        voci.forEach(function (id, i) { var e = esiti[nomi.length + i]; if (e !== null) permessi.voci[id] = e; });
        permessi.controllati = true;
        applicaPermessi();
      });
    }

    // ---------- Pagina Altro ----------
    var altro = { stato: null, scorrimento: 0 };
    function mostraAltro(daUtente) {
      chiudiTastiera();
      corrente = null; modifica = null; carrello = null;
      vistaCarrelli = 'altro';
      altro.stato = null;
      vista.classList.remove('ip-in-attesa');
      radice.classList.remove('ip-su-prodotto', 'ip-in-modifica');
      radice.classList.add('ip-radice', 'ip-senza-ricerca');
      schede.setAttribute('data-scheda', 'altro');
      titolo.textContent = 'Altro';
      campo.value = '';
      if (daUtente) { try { history.replaceState(statoVista('altro'), '', location.pathname); } catch (e) { /* non indispensabile */ } }
      azioni.innerHTML = '';
      radice.classList.add('ip-senza-azioni');
      disegnaAltro();
      vista.scrollTop = 0;
    }
    function disegnaAltro() {
      vista.innerHTML = '';
      var u = utente || leggiUtente(document);
      if (u) {
        var scheda = el('div', 'ip-scheda ip-utente');
        if (u.foto && !/^data:image\/svg/.test(u.foto)) { var f = document.createElement('img'); f.src = u.foto; f.alt = ''; f.className = 'ip-utente-foto'; f.addEventListener('error', function () { f.remove(); }); scheda.appendChild(f); }
        var testi = el('div', 'ip-utente-testi');
        testi.appendChild(el('div', 'ip-utente-nome', u.nome));
        if (u.email) testi.appendChild(el('span', 'ip-codice ip-utente-email', u.email));
        scheda.appendChild(testi);
        vista.appendChild(scheda);
      }
      var qualcosa = false;
      ALTRO_SEZIONI.forEach(function (s) {
        var voci = s.voci.filter(function (v) { return permessi.voci[v.id] !== false; });
        if (!voci.length) return;
        qualcosa = true;
        vista.appendChild(el('div', 'ip-etichetta', s.nome));
        var lista = el('div', 'ip-scheda ip-lista');
        voci.forEach(function (v) {
          var riga = crea('button', 'ip-riga ip-riga-altro');
          riga.type = 'button';
          riga.appendChild(crea('span', 'ip-altro-icona', IC_ALTRO[v.icona]));
          var t = el('span', 'ip-riga-testi');
          t.appendChild(el('span', 'ip-riga-nome', v.titolo));
          t.appendChild(el('span', 'ip-riga-sotto', v.sotto));
          riga.appendChild(t);
          riga.appendChild(crea('span', 'ip-riga-freccia', ICONA_FRECCIA));
          riga.addEventListener('click', function () { apriVoceAltro({ voce: v.id }); });
          lista.appendChild(riga);
        });
        vista.appendChild(lista);
      });
      if (!qualcosa) vista.appendChild(el('div', 'ip-vuoto', 'Il tuo utente non ha accesso ad altre funzioni.'));
    }

    // ---------- Navigazione dentro Altro ----------
    // Ogni schermata ha uno stato { voce, ... } salvato nella cronologia: indietro torna a quella prima.
    function apriVoceAltro(s) {
      if (vistaCarrelli === 'altro' || vistaCarrelli === 'altro-voce') altro.scorrimento = vista.scrollTop;
      spingi('altro-voce', s);
      mostraVoceAltro(s);
    }
    function mostraVoceAltro(s) {
      chiudiTastiera();
      richiesta++;
      corrente = null; modifica = null; carrello = null;
      vistaCarrelli = 'altro-voce';
      altro.stato = s;
      vista.classList.remove('ip-in-attesa');
      schede.setAttribute('data-scheda', 'altro');
      azioni.innerHTML = '';
      radice.classList.add('ip-senza-azioni', 'ip-senza-ricerca');
      var voce = VOCE_ALTRO[s.voce];
      intestazioneInterna(s.titolo || (voce ? voce.titolo : 'Altro'));
      vista.innerHTML = '';
      vista.scrollTop = 0;
      lettoreVerso = null;
      if (s.voce === 'catalogo') { if (s.modifica) mostraModificaCodice(s); else if (s.prodotto) mostraArticolo(s); else mostraCatalogo(); }
      else if (s.voce === 'incassi') { if (s.natura) mostraNatura(s); else mostraIncassi(); }
      else if (s.voce === 'venduti') mostraVenduti();
      else if (s.voce === 'promo') { if (s.ordini) mostraVenditePromo(s); else mostraPromo(); }
      else if (s.voce === 'ticket') { if (s.scheda) mostraSchedaCrm(s); else mostraTicket(); }
      else if (s.voce === 'casse' || s.voce === 'stampanti' || s.voce === 'terminali') { if (s.scheda) mostraSchedaCrm(s); else mostraConfigurazione(s.voce); }
    }
    function aggiornaVoceAltro() { if (altro.stato) mostraVoceAltro(altro.stato); }

    // Riquadri e messaggi comuni
    function caricamento(quante) {
      var h = '<div class="ip-scheda ip-dati ip-finto ip-sotto">';
      for (var i = 0; i < (quante || 4); i++) h += '<i style="width:' + [70, 50, 80, 60, 75][i % 5] + '%"></i>';
      vista.insertAdjacentHTML('beforeend', h + '</div>');
    }
    function zonaContenuto() { var z = el('div', 'ip-zona'); vista.appendChild(z); return z; }
    function erroreDati(zona, r, id) {
      zona.innerHTML = '';
      if (r && (r.stato === 401 || r.stato === 403)) { zona.appendChild(el('div', 'ip-vuoto', 'Il tuo utente non ha accesso a questa funzione.')); if (id) negaAccesso(id); return; }
      zona.appendChild(el('div', 'ip-vuoto', r && r.login ? 'Sessione scaduta: rientro in corso…' : 'Non riesco a leggere i dati dal CRM. Controlla la rete e riprova.'));
      if (r && r.login) location.reload();
    }
    function totaleGrande(nome, valore, sotto, extra) {
      var t = el('div', 'ip-scheda ip-numero ip-numero-prezzo ip-totale-ordini');
      t.appendChild(el('div', 'ip-numero-nome', nome));
      t.appendChild(el('div', 'ip-numero-valore', valore));
      if (sotto) t.appendChild(el('div', 'ip-totale-periodo', sotto));
      if (extra) t.appendChild(extra);
      return t;
    }
    function periodoTesto() { return intervallo().replace(' - ', ' → '); }
    // Periodo (lo stesso della Dashboard) e punti vendita (gli stessi della Dashboard), riusabili da ogni schermata.
    function filtriPeriodo(box, ricarica, conSedi) {
      var dateScelte = vendite.periodo === 'date' && vendite.da ? vendite.da.slice(0, 5) + ' → ' + vendite.a.slice(0, 5) : '';
      var cambia = function (v) {
        if (v === 'date') { foglioDate(ricarica); return; }
        if (v === vendite.periodo) return;
        vendite.periodo = v;
        ricarica();
      };
      if (NATIVO) {
        box.appendChild(rigaMenu('Periodo', [
          { v: 'oggi', t: 'Oggi' }, { v: 'ieri', t: 'Ieri' }, { v: 'settimana', t: 'Questa settimana' }, { v: 'mese', t: 'Questo mese' },
          { v: 'anno', t: 'Quest\'anno' }, { v: 'date', t: dateScelte || 'Scegli le date…' }
        ], vendite.periodo, cambia));
      } else {
        var pillole = el('div', 'ip-pillole');
        [['oggi', 'Oggi'], ['ieri', 'Ieri'], ['settimana', 'Settimana'], ['mese', 'Mese'], ['anno', 'Anno'], ['date', dateScelte || 'Date…']].forEach(function (p) {
          var t = el('button', vendite.periodo === p[0] ? 'ip-scelto' : '', p[1]);
          t.type = 'button';
          t.addEventListener('click', function () { cambia(p[0]); });
          pillole.appendChild(t);
        });
        box.appendChild(pillole);
      }
      if (conSedi) {
        var righe = el('div', 'ip-scheda ip-lista ip-filtri-righe');
        var opz = ordini.opzioni;
        var nomeSede = function (v) { var o = (opz && opz.sedi || []).filter(function (x) { return x.v === v; })[0]; return o ? o.t : '1 scelto'; };
        righe.appendChild(rigaFiltro('Punti vendita', !vendite.sedi.length ? 'Tutti' : (vendite.sedi.length === 1 ? nomeSede(vendite.sedi[0]) : vendite.sedi.length + ' scelti'), function () {
          leggiOpzioniOrdini().then(function (o) {
            foglioScelta('Punti vendita', o.sedi, vendite.sedi, true, function (nuove) { vendite.sedi = nuove; salvaFiltriVendite(); ricarica(); });
          }, function () { mostraAvviso('Connessione assente', 'Controlla la rete e riprova.'); });
        }));
        box.appendChild(righe);
        return righe;
      }
      return null;
    }
    function sediQuery(nome) { return vendite.sedi.map(function (s) { return '&f%5B' + nome + '%5D%5B%5D=' + encodeURIComponent(s); }).join(''); }
    function gruppiPerGiorno(righe, quando, importo) {
      var gruppi = [], ultimo = null;
      righe.forEach(function (r) {
        var q = quando(r), chiave = q ? q.data.getTime() : 'x';
        if (!ultimo || ultimo.chiave !== chiave) { ultimo = { chiave: chiave, data: q ? q.data : null, righe: [], somma: 0 }; gruppi.push(ultimo); }
        ultimo.righe.push(r);
        ultimo.somma += importo(r);
      });
      return gruppi;
    }
    function testaGiorno(g, parola, parole) {
      var testa = el('div', 'ip-etichetta ip-giorno');
      testa.appendChild(el('span', '', g.data ? nomeGiorno(g.data) : 'Senza data'));
      testa.appendChild(el('span', 'ip-giorno-totale', (g.righe.length === 1 ? '1 ' + parola : g.righe.length + ' ' + parole) + ' · ' + soldi(g.somma)));
      return testa;
    }
    function tastoAltre(mancano, inCarico, fai, perPagina) {
      var b = crea('button', 'ip-secondario ip-largo ip-altre', inCarico ? 'Carico…' : 'Mostra altre ' + Math.min(mancano, perPagina || 50) + ' (ne restano ' + interoItaliano(mancano) + ')');
      b.type = 'button';
      b.disabled = inCarico;
      b.addEventListener('click', fai);
      return b;
    }
    // Una vendita aperta da Altro: il dettaglio è quello della sezione Vendite, ma si resta in Altro.
    function apriVenditaDaAltro(id) {
      altro.scorrimento = vista.scrollTop;
      apriOrdine(String(id), true, false, true);
    }

    // ---------- Incassi ----------
    var incassi = { tipo: '', cassa: '', nature: null, totale: null, metodi: null };
    function indirizzoIncassi(extra, pagina, quante) {
      return '/order/payment/list?dataTableView=payment_table&f%5Brange%5D=' + encodeURIComponent(intervallo()) + sediQuery('headquarter') +
        (incassi.tipo ? '&f%5Btype%5D=' + incassi.tipo : '') + (incassi.cassa ? '&f%5BpointOfSale%5D=' + encodeURIComponent(incassi.cassa) : '') +
        (extra || '') + '&sort=transaction_createdAt%3Adesc&page=' + (pagina || 1) + '&perPage=' + (quante || 1);
    }
    function leggiMetodi() {
      if (incassi.metodi) return Promise.resolve(incassi.metodi);
      return chiedi('/order/payment/list').then(function (r) {
        function opzioni(nome) {
          var e = r.doc.querySelector('[name="f[' + nome + ']"][options]');
          try { return JSON.parse(e.getAttribute('options')).map(function (o) { return { v: String(o.value), t: pulisci(o.label) }; }); } catch (x) { return []; }
        }
        incassi.metodi = { nature: opzioni('method'), casse: opzioni('pointOfSale') };
        return incassi.metodi;
      });
    }
    function mostraIncassi() {
      var mia = richiesta;
      var box = el('div', 'ip-ordini-filtri');
      var segmenti = el('div', 'ip-segmenti ip-segmenti-stretti');
      [['', 'Tutti'], ['receipt', 'Scontrini'], ['invoice', 'Fatture']].forEach(function (p) {
        var b = el('button', incassi.tipo === p[0] ? 'ip-scelto' : '', p[1]);
        b.type = 'button';
        b.addEventListener('click', function () { if (incassi.tipo === p[0]) return; incassi.tipo = p[0]; aggiornaVoceAltro(); });
        segmenti.appendChild(b);
      });
      box.appendChild(segmenti);
      var righe = filtriPeriodo(box, aggiornaVoceAltro, true);
      var nomeCassaScelta = incassi.cassa && incassi.metodi ? ((incassi.metodi.casse.filter(function (c) { return c.v === incassi.cassa; })[0] || {}).t || 'Una cassa') : (incassi.cassa ? 'Una cassa' : 'Tutte');
      righe.appendChild(rigaFiltro('Cassa', nomeCassaScelta, function () {
        leggiMetodi().then(function (m) { foglioScelta('Cassa', m.casse, incassi.cassa ? [incassi.cassa] : [], false, function (n) { incassi.cassa = n[0] || ''; aggiornaVoceAltro(); }); });
      }));
      vista.appendChild(box);
      var zona = zonaContenuto();
      caricamento(5);
      // Totale e, per ogni natura, numero di transazioni e importo: una richiesta leggera per ognuna (solo i conteggi).
      Promise.all([chiediJson(indirizzoIncassi()), leggiMetodi()]).then(function (r) {
        if (mia !== richiesta) return;
        var tot = r[0];
        if (!tot.dati || tot.dati.filtered == null) { erroreDati(zona, tot, 'incassi'); vista.querySelector('.ip-finto') && vista.querySelector('.ip-finto').remove(); return; }
        var nature = r[1].nature;
        return Promise.all(nature.map(function (n) { return chiediJson(indirizzoIncassi('&f%5Bmethod%5D=' + encodeURIComponent(n.v))); })).then(function (per) {
          if (mia !== richiesta) return;
          var finto = vista.querySelector('.ip-finto'); if (finto) finto.remove();
          zona.innerHTML = '';
          var quante = tot.dati.filtered || 0, totale = +(tot.dati.additionalData && tot.dati.additionalData.amount) || 0;
          zona.appendChild(totaleGrande(quante === 1 ? '1 transazione' : interoItaliano(quante) + ' transazioni', euro(totale), 'Incassato · ' + periodoTesto()));
          var elenco = nature.map(function (n, i) {
            var d = per[i] && per[i].dati;
            return { v: n.v, t: n.t, quante: d ? d.filtered || 0 : 0, totale: d ? +(d.additionalData && d.additionalData.amount) || 0 : 0 };
          }).filter(function (n) { return n.quante; }).sort(function (a, b) { return b.totale - a.totale; });
          if (!elenco.length) { zona.appendChild(el('div', 'ip-vuoto', 'Nessun incasso in questo periodo.')); return; }
          zona.appendChild(el('div', 'ip-etichetta', 'Per natura'));
          var lista = el('div', 'ip-scheda ip-lista');
          elenco.forEach(function (n) {
            var riga = crea('button', 'ip-riga ip-riga-natura');
            riga.type = 'button';
            var t = el('span', 'ip-riga-testi');
            t.appendChild(el('span', 'ip-riga-nome', n.t));
            t.appendChild(el('span', 'ip-riga-sotto', (n.quante === 1 ? '1 transazione' : interoItaliano(n.quante) + ' transazioni') + ' · media ' + euro(Math.round(n.totale / n.quante))));
            var barra = el('span', 'ip-natura-barra');
            var piena = el('i', ''); piena.style.width = Math.max(2, Math.round(n.totale / Math.max(1, totale) * 100)) + '%';
            barra.appendChild(piena);
            t.appendChild(barra);
            riga.appendChild(t);
            var imp = el('span', 'ip-ordine-importo');
            imp.appendChild(el('b', '', euro(n.totale)));
            imp.appendChild(el('small', '', Math.round(n.totale / Math.max(1, totale) * 100) + '%'));
            riga.appendChild(imp);
            riga.appendChild(crea('span', 'ip-riga-freccia', ICONA_FRECCIA));
            riga.addEventListener('click', function () { apriVoceAltro({ voce: 'incassi', natura: n.v, titolo: n.t }); });
            lista.appendChild(riga);
          });
          zona.appendChild(lista);
        });
      }).catch(function () { if (mia === richiesta) { var finto = vista.querySelector('.ip-finto'); if (finto) finto.remove(); erroreDati(zona, null); } });
    }
    // Le transazioni di una natura, giorno per giorno: quante e quanto in ogni giorno.
    function mostraNatura(s) {
      var mia = richiesta;
      vista.appendChild(el('div', 'ip-sottotitolo', periodoTesto() + (vendite.sedi.length ? ' · ' + vendite.sedi.length + (vendite.sedi.length === 1 ? ' punto vendita' : ' punti vendita') : '')));
      var zona = zonaContenuto();
      caricamento(5);
      var tutte = [], LIMITE = 2000;
      function pagina(n) {
        return chiediJson(indirizzoIncassi('&f%5Bmethod%5D=' + encodeURIComponent(s.natura), n, 500)).then(function (r) {
          if (!r.dati || !r.dati.rows) return r;
          tutte = tutte.concat(r.dati.rows);
          if (tutte.length < (r.dati.filtered || 0) && tutte.length < LIMITE) return pagina(n + 1);
          r.tutte = tutte;
          return r;
        });
      }
      pagina(1).then(function (r) {
        if (mia !== richiesta) return;
        var finto = vista.querySelector('.ip-finto'); if (finto) finto.remove();
        if (!r.tutte) { erroreDati(zona, r, 'incassi'); return; }
        zona.innerHTML = '';
        var filtrate = r.dati.filtered || 0, totale = +(r.dati.additionalData && r.dati.additionalData.amount) || 0;
        zona.appendChild(totaleGrande(filtrate === 1 ? '1 transazione' : interoItaliano(filtrate) + ' transazioni', euro(totale), s.titolo + ' · media ' + euro(Math.round(totale / Math.max(1, filtrate)))));
        if (!r.tutte.length) { zona.appendChild(el('div', 'ip-vuoto', 'Nessuna transazione in questo periodo.')); return; }
        if (filtrate > r.tutte.length) zona.appendChild(el('div', 'ip-nota-piccola', 'Mostro le ultime ' + interoItaliano(r.tutte.length) + ' transazioni: per vederle tutte scegli un periodo più corto.'));
        gruppiPerGiorno(r.tutte, function (x) { return dataCrm(x.transaction_createdAt); }, function (x) { return +x.amount || 0; }).forEach(function (g) {
          zona.appendChild(testaGiorno(g, 'transazione', 'transazioni'));
          var lista = el('div', 'ip-scheda ip-lista');
          g.righe.forEach(function (x) {
            var riga = crea('button', 'ip-riga ip-riga-ordine');
            riga.type = 'button';
            var q = dataCrm(x.transaction_createdAt);
            var lato = el('span', 'ip-ordine-lato');
            var fattura = x.order_type && /fattura/i.test(x.order_type.value || '');
            lato.appendChild(crea('span', 'ip-ordine-icona' + (fattura ? ' ip-ordine-fattura' : ''), fattura ? IC_ORDINE.fattura : IC_ORDINE.scontrino));
            lato.appendChild(el('span', 'ip-ordine-ora', q ? q.ora : ''));
            riga.appendChild(lato);
            var t = el('span', 'ip-riga-testi');
            var nomeCli = pulisci(x.order_customer_name || ''), cognomeCli = pulisci(x.order_customer_surname || '');
            var cliente = nomeCli && cognomeCli && nomeCli.toLowerCase().indexOf(cognomeCli.toLowerCase()) === -1 ? nomeCli + ' ' + cognomeCli : (nomeCli || cognomeCli);
            t.appendChild(el('span', 'ip-riga-nome', cliente || (fattura ? 'Fattura' : 'Scontrino')));
            t.appendChild(el('span', 'ip-riga-sotto', [pulisci(x.transaction_createdBy_name || ''), pulisci(x.transaction_pointOfSale_name || ''), pulisci(x.order_headquarter_name || '')].filter(Boolean).join(' · ')));
            riga.appendChild(t);
            var imp = el('span', 'ip-ordine-importo');
            imp.appendChild(el('b', (+x.amount < 0 ? 'ip-negativo' : ''), soldi(x.amount)));
            riga.appendChild(imp);
            if (x.order_id) riga.addEventListener('click', function () { apriVenditaDaAltro(x.order_id); });
            lista.appendChild(riga);
          });
          zona.appendChild(lista);
        });
      }, function () { if (mia === richiesta) { var finto = vista.querySelector('.ip-finto'); if (finto) finto.remove(); erroreDati(zona, null); } });
    }

    // ---------- Prodotti venduti ----------
    var venduti = { fonte: '', fornitore: '', cerca: '', righe: [], pagina: 0, filtrati: 0, somme: null, inCarico: false, opzioni: null };
    var FONTI = [{ v: '', t: 'Tutte le provenienze' }, { v: 'stock', t: 'Stock' }, { v: 'easy_store', t: 'Easystore' }, { v: 'listing', t: 'Listino' }, { v: 'composition', t: 'Composizione' }, { v: 'manual', t: 'Riga manuale' }];
    function indirizzoVenduti(pagina) {
      return '/retail/row/list?dataTableView=order_row_table&f%5Bsearch%5D=' + encodeURIComponent(venduti.cerca) + '&f%5Brange%5D=' + encodeURIComponent(intervallo()) +
        (venduti.fonte ? '&f%5Bsource%5D=' + encodeURIComponent(venduti.fonte) : '') + (venduti.fornitore ? '&f%5Bsupplier%5D=' + encodeURIComponent(venduti.fornitore) : '') +
        '&sort=order_createdAt%3Adesc&page=' + pagina + '&perPage=50';
    }
    function leggiFornitori() {
      if (venduti.opzioni) return Promise.resolve(venduti.opzioni);
      return chiedi('/retail/row/list').then(function (r) {
        var e = r.doc.querySelector('[name="f[supplier]"][options]');
        try { venduti.opzioni = JSON.parse(e.getAttribute('options')).map(function (o) { return { v: String(o.value), t: pulisci(o.label) }; }); } catch (x) { venduti.opzioni = []; }
        return venduti.opzioni;
      });
    }
    function mostraVenduti() {
      var box = el('div', 'ip-ordini-filtri');
      // Ricerca nella pagina: codice, EAN o descrizione (ricerca del CRM).
      var cerca = el('form', 'ip-cerca-pagina ip-cerca-fissa');
      var input = document.createElement('input');
      input.type = 'search'; input.placeholder = 'Cerca codice, EAN o descrizione'; input.value = venduti.cerca;
      input.setAttribute('enterkeyhint', 'search');
      cerca.appendChild(input);
      var attesa = null;
      input.addEventListener('input', function () { clearTimeout(attesa); attesa = setTimeout(function () { if (input.value.trim() !== venduti.cerca) { venduti.cerca = input.value.trim(); caricaVenduti(true); } }, 500); });
      cerca.addEventListener('submit', function (e) { e.preventDefault(); clearTimeout(attesa); venduti.cerca = input.value.trim(); input.blur(); caricaVenduti(true); });
      vista.appendChild(cerca);
      var righe = filtriPeriodo(box, function () { aggiornaVoceAltro(); }, false);
      righe = el('div', 'ip-scheda ip-lista ip-filtri-righe');
      righe.appendChild(rigaFiltro('Provenienza', (FONTI.filter(function (f) { return f.v === venduti.fonte; })[0] || FONTI[0]).t, function () {
        foglioScelta('Provenienza', FONTI.slice(1), venduti.fonte ? [venduti.fonte] : [], false, function (n) { venduti.fonte = n[0] || ''; aggiornaVoceAltro(); });
      }));
      var nomeForn = venduti.fornitore && venduti.opzioni ? ((venduti.opzioni.filter(function (f) { return f.v === venduti.fornitore; })[0] || {}).t || 'Uno') : (venduti.fornitore ? 'Uno' : 'Tutti');
      righe.appendChild(rigaFiltro('Fornitore', nomeForn, function () {
        leggiFornitori().then(function (o) { foglioScelta('Fornitore', o, venduti.fornitore ? [venduti.fornitore] : [], false, function (n) { venduti.fornitore = n[0] || ''; aggiornaVoceAltro(); }); });
      }));
      box.appendChild(righe);
      vista.appendChild(box);
      venduti.zona = zonaContenuto();
      caricaVenduti(true);
    }
    function caricaVenduti(daCapo) {
      var mia = ++richiesta;
      if (daCapo) { venduti.righe = []; venduti.pagina = 0; venduti.somme = null; }
      venduti.inCarico = true;
      disegnaVenduti();
      chiediJson(indirizzoVenduti(venduti.pagina + 1)).then(function (r) {
        if (mia !== richiesta) return;
        venduti.inCarico = false;
        if (!r.dati || !r.dati.rows) { erroreDati(venduti.zona, r, 'venduti'); return; }
        venduti.pagina++;
        venduti.filtrati = r.dati.filtered || 0;
        venduti.somme = r.dati.additionalData || {};
        venduti.righe = venduti.righe.concat(r.dati.rows);
        var dove = vista.scrollTop;
        disegnaVenduti();
        vista.scrollTop = dove;
      }, function () { if (mia === richiesta) { venduti.inCarico = false; erroreDati(venduti.zona, null); } });
    }
    function disegnaVenduti() {
      var zona = venduti.zona;
      if (!zona) return;
      zona.innerHTML = '';
      if (venduti.somme) {
        var finale = +venduti.somme.totalFinalPrice || 0, pieno = +venduti.somme.totalPrice || 0;
        var sotto = venduti.filtrati === 1 ? '1 riga venduta' : interoItaliano(venduti.filtrati) + ' righe vendute';
        if (pieno > finale) sotto += ' · sconti ' + euro(pieno - finale);
        zona.appendChild(totaleGrande('Venduto', euro(finale), sotto + ' · ' + periodoTesto()));
      }
      if (venduti.inCarico && !venduti.righe.length) { caricamentoIn(zona); return; }
      if (!venduti.righe.length) { zona.appendChild(el('div', 'ip-vuoto', venduti.cerca ? 'Nessun articolo venduto trovato per "' + venduti.cerca + '".' : 'Nessun articolo venduto in questo periodo.')); return; }
      gruppiPerGiorno(venduti.righe, function (x) { return dataCrm(x.order_createdAt); }, function (x) { return +x.finalPrice || 0; }).forEach(function (g) {
        zona.appendChild(testaGiorno(g, 'riga', 'righe'));
        var lista = el('div', 'ip-scheda ip-lista');
        g.righe.forEach(function (x) {
          var riga = crea('button', 'ip-riga ip-riga-venduto');
          riga.type = 'button';
          var foto = x.product_image && x.product_image.src && !/^data:image\/svg/.test(x.product_image.src) ? x.product_image.src : '';
          riga.appendChild(miniatura(foto, 'ip-mini'));
          var t = el('span', 'ip-riga-testi');
          t.appendChild(el('span', 'ip-riga-nome', pulisci(x.product_description || x.product_code || 'Prodotto')));
          var sotto = el('span', 'ip-venduto-sotto');
          var codice = pulisci(x.product_code || ''), ean = pulisci(x.product_ean || '');
          if (codice || ean) sotto.appendChild(codiceToccabile(ean || codice, codice || ean, pulisci(x.product_description || '')));
          sotto.appendChild(el('span', 'ip-venduto-quantita', (+x.quantity || 0) + ' × ' + soldi(+x.product_price || 0)));
          t.appendChild(sotto);
          var q = dataCrm(x.order_createdAt);
          var cliente = pulisci(x.order_customer_shownName || [x.order_customer_name, x.order_customer_surname].filter(Boolean).join(' ') || '');
          t.appendChild(el('span', 'ip-riga-sotto', [q ? q.ora : '', cliente, pulisci(x.product_supplier_companyName || '')].filter(Boolean).join(' · ')));
          var stato = el('span', 'ip-ordine-stati');
          var fonte = x.source && x.source.value ? pulisci(x.source.value) : '';
          if (fonte && !/^stock$/i.test(fonte)) stato.appendChild(chip(fonte));
          var cons = x.deliveryStatus && x.deliveryStatus.value;
          var testoCons = pulisci(Array.isArray(cons) ? cons.join(', ') : String(cons || ''));
          if (testoCons && !/^consegnato$/i.test(testoCons)) stato.appendChild(chip(testoCons, 'ip-chip-ambra'));
          if (stato.children.length) t.appendChild(stato);
          riga.appendChild(t);
          var imp = el('span', 'ip-ordine-importo');
          var finale = +x.finalPrice || 0, pieno = (+x.product_price || 0) * (+x.quantity || 0);
          imp.appendChild(el('b', '', soldi(finale)));
          if (pieno - finale > 0.004) imp.appendChild(el('s', '', soldi(pieno)));
          riga.appendChild(imp);
          if (x.order_id) riga.addEventListener('click', function () { apriVenditaDaAltro(x.order_id); });
          lista.appendChild(riga);
        });
        zona.appendChild(lista);
      });
      var mancano = venduti.filtrati - venduti.righe.length;
      if (mancano > 0) zona.appendChild(tastoAltre(mancano, venduti.inCarico, function () { caricaVenduti(false); }));
    }
    function caricamentoIn(zona) { zona.insertAdjacentHTML('beforeend', '<div class="ip-scheda ip-dati ip-finto ip-sotto"><i style="width:70%"></i><i style="width:50%"></i><i style="width:80%"></i><i style="width:60%"></i></div>'); }

    // ---------- Analisi promozioni ----------
    function mostraPromo() {
      var mia = richiesta;
      var box = el('div', 'ip-ordini-filtri');
      filtriPeriodo(box, aggiornaVoceAltro, true);
      vista.appendChild(box);
      var zona = zonaContenuto();
      caricamentoIn(zona);
      chiediJson('/analytics/promo/dashboard?dataTableView=promo_usage_table&f%5Brange%5D=' + encodeURIComponent(intervallo()) + sediQuery('headquarter') + '&page=1&perPage=500').then(function (r) {
        if (mia !== richiesta) return;
        if (!r.dati || !r.dati.rows) { erroreDati(zona, r, 'promo'); return; }
        zona.innerHTML = '';
        var righe = r.dati.rows.slice().sort(function (a, b) { return (+b.discountAmount || 0) - (+a.discountAmount || 0); });
        var vendite_ = righe.reduce(function (s, x) { return s + (+x.salesCount || 0); }, 0), sconto = righe.reduce(function (s, x) { return s + (+x.discountAmount || 0); }, 0);
        zona.appendChild(totaleGrande('Sconti concessi con le promozioni', soldi(sconto), (righe.length === 1 ? '1 promozione' : righe.length + ' promozioni') + ' · ' + interoItaliano(vendite_) + (vendite_ === 1 ? ' vendita' : ' vendite') + ' · ' + periodoTesto()));
        if (!righe.length) { zona.appendChild(el('div', 'ip-vuoto', 'Nessuna promozione usata in questo periodo.')); return; }
        zona.appendChild(el('div', 'ip-etichetta', 'Promozioni'));
        var lista = el('div', 'ip-scheda ip-lista');
        var massimo = Math.max.apply(null, righe.map(function (x) { return +x.discountAmount || 0; }).concat([0.01]));
        righe.forEach(function (x) {
          var riga = crea('button', 'ip-riga ip-riga-natura');
          riga.type = 'button';
          var t = el('span', 'ip-riga-testi');
          t.appendChild(el('span', 'ip-riga-nome', pulisci(x.name || 'Promozione')));
          t.appendChild(el('span', 'ip-riga-sotto', [pulisci(x.type || ''), (+x.salesCount || 0) + ((+x.salesCount || 0) === 1 ? ' vendita' : ' vendite')].filter(Boolean).join(' · ')));
          var barra = el('span', 'ip-natura-barra'); var piena = el('i', ''); piena.style.width = Math.max(2, Math.round((+x.discountAmount || 0) / massimo * 100)) + '%'; barra.appendChild(piena); t.appendChild(barra);
          riga.appendChild(t);
          var imp = el('span', 'ip-ordine-importo');
          imp.appendChild(el('b', '', soldi(x.discountAmount)));
          imp.appendChild(el('small', '', 'di sconto'));
          riga.appendChild(imp);
          var link = x.orderListUrl && x.orderListUrl.href;
          if (link) {
            riga.appendChild(crea('span', 'ip-riga-freccia', ICONA_FRECCIA));
            riga.addEventListener('click', function () { apriVoceAltro({ voce: 'promo', ordini: link, titolo: pulisci(x.name || 'Promozione') }); });
          }
          lista.appendChild(riga);
        });
        zona.appendChild(lista);
      }, function () { if (mia === richiesta) erroreDati(zona, null); });
    }
    // Le vendite in cui è stata usata una promozione, nel periodo scelto.
    function mostraVenditePromo(s) {
      var mia = richiesta;
      vista.appendChild(el('div', 'ip-sottotitolo', periodoTesto()));
      var zona = zonaContenuto();
      caricamentoIn(zona);
      var base = s.ordini.split('?')[0];
      chiediJson(base + '?dataTableView=order_table&f%5Bsearch%5D=&f%5Brange%5D=' + encodeURIComponent(intervallo()) + '&sort=createdAt%3Adesc&page=1&perPage=500').then(function (r) {
        if (mia !== richiesta) return;
        if (!r.dati || !r.dati.rows) { erroreDati(zona, r, 'promo'); return; }
        zona.innerHTML = '';
        var righe = r.dati.rows.map(leggiOrdine);
        var somma = righe.reduce(function (t, o) { return t + o.totale; }, 0);
        zona.appendChild(totaleGrande(righe.length === 1 ? '1 vendita' : interoItaliano(r.dati.filtered || righe.length) + ' vendite', soldi(somma), 'Con la promozione · ' + s.titolo));
        if (!righe.length) { zona.appendChild(el('div', 'ip-vuoto', 'Nessuna vendita con questa promozione nel periodo.')); return; }
        gruppiPerGiorno(righe, function (o) { return o.quando; }, function (o) { return o.totale; }).forEach(function (g) {
          zona.appendChild(testaGiorno(g, 'vendita', 'vendite'));
          var lista = el('div', 'ip-scheda ip-lista');
          g.righe.forEach(function (o) {
            var riga = rigaOrdine(o);
            // Il dettaglio si apre restando in Altro.
            var nuova = riga.cloneNode(true);
            nuova.addEventListener('click', function () { apriVenditaDaAltro(o.id); });
            lista.appendChild(nuova);
          });
          zona.appendChild(lista);
        });
      }, function () { if (mia === richiesta) erroreDati(zona, null); });
    }

    // ---------- Ticket promozionali ----------
    function statoValidita(da, a) {
      var inizio = dataCrm(da), fine = dataCrm(a), ora = new Date();
      if (fine && fine.data.getTime() + 86400000 <= ora.getTime()) return ['Scaduto', ''];
      if (inizio && inizio.data.getTime() > ora.getTime()) return ['Programmato', 'ip-chip-ambra'];
      return ['Attivo', 'ip-chip-pieno'];
    }
    function mostraTicket() {
      var mia = richiesta;
      var zona = zonaContenuto();
      caricamentoIn(zona);
      chiediJson('/promo-ticket?dataTableView=promo_ticket_table&page=1&perPage=200').then(function (r) {
        if (mia !== richiesta) return;
        if (!r.dati || !r.dati.rows) { erroreDati(zona, r, 'ticket'); return; }
        zona.innerHTML = '';
        if (!r.dati.rows.length) { zona.appendChild(el('div', 'ip-vuoto', 'Non ci sono ticket promozionali.')); return; }
        var lista = el('div', 'ip-scheda ip-lista');
        r.dati.rows.forEach(function (x) {
          var riga = crea('button', 'ip-riga ip-riga-altro');
          riga.type = 'button';
          riga.appendChild(crea('span', 'ip-altro-icona', IC_ALTRO.ticket));
          var t = el('span', 'ip-riga-testi');
          t.appendChild(el('span', 'ip-riga-nome', pulisci(x.name || 'Ticket')));
          t.appendChild(el('span', 'ip-riga-sotto', 'Dal ' + pulisci(String(x.validFrom || '')).replace(/:00$/, '') + ' al ' + pulisci(String(x.expiresAt || '')).replace(/:00$/, '')));
          var stati = el('span', 'ip-ordine-stati');
          var st = statoValidita(x.validFrom, x.expiresAt);
          stati.appendChild(chip(st[0], st[1]));
          if (x.codeType && x.codeType.value) stati.appendChild(chip(pulisci(x.codeType.value)));
          t.appendChild(stati);
          riga.appendChild(t);
          riga.appendChild(crea('span', 'ip-riga-freccia', ICONA_FRECCIA));
          if (x.summaryUrl) riga.addEventListener('click', function () { apriVoceAltro({ voce: 'ticket', scheda: x.summaryUrl, titolo: pulisci(x.name || 'Ticket') }); });
          lista.appendChild(riga);
        });
        zona.appendChild(lista);
      }, function () { if (mia === richiesta) erroreDati(zona, null); });
    }

    // ---------- Casse, stampanti e terminali ----------
    var CONFIG = {
      casse: { indirizzo: '/retail/point-of-sale', tabella: 'point_of_sale_table' },
      stampanti: { indirizzo: '/retail/printer', tabella: 'printer_table' },
      terminali: { indirizzo: '/retail/terminal', tabella: 'terminal_table' }
    };
    function mostraConfigurazione(id) {
      var mia = richiesta;
      var zona = zonaContenuto();
      caricamentoIn(zona);
      var c = CONFIG[id];
      var richieste = [chiediJson(c.indirizzo + '?dataTableView=' + c.tabella + '&page=1&perPage=500')];
      // Per le casse servono anche i nomi di stampanti e terminali (la tabella ha solo gli indirizzi IP).
      if (id === 'casse') richieste.push(chiediJson('/retail/printer?dataTableView=printer_table&page=1&perPage=500').catch(function () { return {}; }), chiediJson('/retail/terminal?dataTableView=terminal_table&page=1&perPage=500').catch(function () { return {}; }));
      Promise.all(richieste).then(function (r) {
        if (mia !== richiesta) return;
        if (!r[0].dati || !r[0].dati.rows) { erroreDati(zona, r[0], id); return; }
        zona.innerHTML = '';
        // Nome dal suo indirizzo IP, solo se l'indirizzo è di un elemento solo: se è condiviso si mostra l'IP
        // (il collegamento esatto è nella scheda della cassa).
        var perIp = function (x) {
          var m = {}, conta = {};
          (x && x.dati && x.dati.rows || []).forEach(function (y) { if (!y.ip) return; conta[y.ip] = (conta[y.ip] || 0) + 1; m[y.ip] = pulisci(y.name || ''); });
          Object.keys(conta).forEach(function (ip) { if (conta[ip] > 1) m[ip] = ip + ' (indirizzo condiviso)'; });
          return m;
        };
        var stampanti = perIp(r[1]), terminali = perIp(r[2]);
        // Raggruppate per punto vendita.
        var gruppi = {}, ordine = [];
        r[0].dati.rows.forEach(function (x) { var hq = pulisci(x.headquarter_name || 'Senza punto vendita'); if (!gruppi[hq]) { gruppi[hq] = []; ordine.push(hq); } gruppi[hq].push(x); });
        if (!ordine.length) { zona.appendChild(el('div', 'ip-vuoto', 'Nessun elemento configurato.')); return; }
        ordine.forEach(function (hq) {
          zona.appendChild(el('div', 'ip-etichetta', hq));
          var lista = el('div', 'ip-scheda ip-lista');
          gruppi[hq].forEach(function (x) {
            var riga = crea('button', 'ip-riga ip-riga-altro');
            riga.type = 'button';
            riga.appendChild(crea('span', 'ip-altro-icona', IC_ALTRO[id]));
            var t = el('span', 'ip-riga-testi');
            t.appendChild(el('span', 'ip-riga-nome', pulisci(x.name || '')));
            if (id === 'casse') {
              t.appendChild(el('span', 'ip-riga-sotto', 'Stampante: ' + (stampanti[x.printer_ip] || x.printer_ip || 'nessuna')));
              t.appendChild(el('span', 'ip-riga-sotto', 'POS: ' + (terminali[x.terminal_ip] || x.terminal_ip || 'nessuno')));
              if (x.tailscale && x.tailscale.value) { var st = el('span', 'ip-ordine-stati'); st.appendChild(chip('Rete: ' + pulisci(x.tailscale.value), /non/i.test(x.tailscale.value) ? '' : 'ip-chip-pieno')); t.appendChild(st); }
            } else {
              t.appendChild(el('span', 'ip-riga-sotto ip-riga-codice', x.ip || ''));
            }
            riga.appendChild(t);
            riga.appendChild(crea('span', 'ip-riga-freccia', ICONA_FRECCIA));
            if (x.summaryUrl) riga.addEventListener('click', function () { apriVoceAltro({ voce: id, scheda: x.summaryUrl, titolo: pulisci(x.name || '') }); });
            lista.appendChild(riga);
          });
          zona.appendChild(lista);
        });
      }, function () { if (mia === richiesta) erroreDati(zona, null); });
    }

    // ---------- Scheda letta da un modulo del CRM, in sola lettura ----------
    // Le pagine di dettaglio di casse, stampanti, terminali e ticket sono moduli di modifica: qui ne leggo
    // etichette e valori e li mostro come dati. Chiavi, password e gettoni non si mostrano mai.
    var CAMPO_RISERVATO = /key|token|password|secret|api/i;
    function valoreCampo(c) {
      var tag = c.tagName.toLowerCase();
      if (tag === 'console-select' || tag === 'console-ajax-select') {
        var iniziale = c.getAttribute('initial-value') || '';
        var scelti = [];
        try { var v = JSON.parse(iniziale); scelti = Array.isArray(v) ? v.map(String) : [String(v)]; } catch (e) { scelti = iniziale ? [iniziale] : []; }
        var voci = [];
        try { voci = JSON.parse(c.getAttribute('options') || c.getAttribute('initial-items') || '[]'); } catch (e) { voci = []; }
        if (tag === 'console-ajax-select') { try { voci = JSON.parse(c.getAttribute('initial-items') || '[]'); } catch (e) { /* niente */ } return voci.map(function (o) { return pulisci(o.label || o.text || ''); }).filter(Boolean).join(', '); }
        var nomi = scelti.map(function (s) { var o = voci.filter(function (x) { return String(x.value) === s; })[0]; return o ? pulisci(o.label) : ''; }).filter(Boolean);
        if (voci.length && nomi.length === voci.length && voci.length > 2) return 'Tutti';
        return nomi.join(', ');
      }
      if (tag === 'select') { var o = c.options[c.selectedIndex]; return o ? pulisci(o.textContent) : ''; }
      if (tag === 'textarea') return pulisci(c.textContent);
      if (c.type === 'checkbox') return c.hasAttribute('checked') ? 'Sì' : 'No';
      // Date, orari e altri campi speciali: valore iniziale, oppure il campo nascosto con lo stesso nome.
      var valore = c.getAttribute('value') || c.getAttribute('initial-value') || '';
      if (!valore && c.getAttribute('name') && c.parentElement) {
        var nascosto = c.parentElement.querySelector('input[type="hidden"][name="' + c.getAttribute('name') + '"]');
        if (nascosto) valore = nascosto.getAttribute('value') || '';
      }
      return pulisci(valore);
    }
    function leggiModulo(doc) {
      var corpo = doc.querySelector('.console-page-body') || doc.body;
      var modulo = corpo.querySelector('form') || corpo;
      var gruppi = [], gruppo = { nome: '', righe: [] };
      gruppi.push(gruppo);
      var visti = {};
      var nodi = modulo.querySelectorAll('p.font-semibold, label');
      for (var i = 0; i < nodi.length; i++) {
        var n = nodi[i];
        if (n.tagName === 'P') { gruppo = { nome: pulisci(n.textContent).replace(/^modifica\b.*/i, 'Dati'), righe: [] }; gruppi.push(gruppo); continue; }
        var etichetta = pulisci(n.textContent).replace(/\*$/, '');
        if (!etichetta) continue;
        var contenitore = n.parentElement;
        var c = contenitore.querySelector('console-select, console-ajax-select, console-date-picker, console-input-mask, textarea, select, input:not([type="hidden"])');
        if (!c) continue;
        var nome = c.getAttribute('name') || '';
        if (!nome || visti[nome] || /_token|\[file\]/.test(nome)) continue;
        visti[nome] = true;
        if (CAMPO_RISERVATO.test(nome) || CAMPO_RISERVATO.test(etichetta)) continue;
        var valore = valoreCampo(c);
        gruppo.righe.push([etichetta, valore || '—']);
      }
      return gruppi.filter(function (g) { return g.righe.length; });
    }
    function mostraSchedaCrm(s) {
      var mia = richiesta;
      var zona = zonaContenuto();
      caricamentoIn(zona);
      chiedi(s.scheda).then(function (r) {
        if (mia !== richiesta) return;
        if (/\/login$/.test(r.percorso)) { location.reload(); return; }
        var gruppi = leggiModulo(r.doc);
        zona.innerHTML = '';
        if (!gruppi.length) { zona.appendChild(el('div', 'ip-vuoto', 'Non riesco a leggere questa scheda dal CRM.')); return; }
        gruppi.forEach(function (g, i) {
          zona.appendChild(el('div', 'ip-etichetta', g.nome || (i === 0 ? 'Dati' : '')));
          var box = el('div', 'ip-scheda ip-dati');
          g.righe.forEach(function (c) {
            var riga = el('div', 'ip-dato' + (c[1].length > 40 ? ' ip-dato-lungo' : ''));
            riga.appendChild(el('span', 'ip-dato-nome', c[0]));
            riga.appendChild(el('span', 'ip-dato-valore', c[1]));
            box.appendChild(riga);
          });
          zona.appendChild(box);
        });
        zona.appendChild(el('div', 'ip-nota-piccola', 'Solo consultazione: le modifiche si fanno dal CRM.'));
      }, function () { if (mia === richiesta) erroreDati(zona, null); });
    }

    // ====================================================================================
    // ---------- Catalogo prodotti: elenco e scheda completa di ogni articolo ----------
    // Legge tutto quello che il CRM sa di un articolo (riepilogo, dettagli, dati tecnici, prezzi, misure,
    // e-commerce, giacenze, movimenti, vendite, storico costi, attributi, allegati). Si modificano solo i codici
    // (codice, codice secondario, EAN), anche leggendoli dalla fotocamera, con conferma prima di salvare.
    var catalogo = { cerca: '', disponibili: '', categoria: '', fornitore: '', righe: [], pagina: 0, filtrati: 0, inCarico: false, opzioni: null, perId: {}, costoVisibile: false };
    var IC_FOTOCAMERA = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7v-1a2 2 0 0 1 2 -2h2"/><path d="M4 17v1a2 2 0 0 0 2 2h2"/><path d="M16 4h2a2 2 0 0 1 2 2v1"/><path d="M16 20h2a2 2 0 0 0 2 -2v-1"/><path d="M5 12h14"/></svg>';

    // Lettore verso un campo: il prossimo codice letto (fotocamera o lettore a pistola) va lì, non alla ricerca.
    var lettoreVerso = null;
    function leggiCodiceVerso(titoloLettore, fai) {
      lettoreVerso = fai;
      if (cfg.guscio === 'ios') {
        try { window.webkit.messageHandlers.ip.postMessage({ t: 'fotocamera', x: JSON.stringify({ continuo: false, titolo: titoloLettore }) }); return; } catch (e) { /* fuori dall'app */ }
      }
      if (sito.camera) sito.camera.click();
    }
    function consegnaCodice(codice) {
      if (!lettoreVerso) return false;
      var fai = lettoreVerso;
      lettoreVerso = null;
      fai(String(codice).trim());
      return true;
    }

    function leggiOpzioniCatalogo() {
      if (catalogo.opzioni) return Promise.resolve(catalogo.opzioni);
      return chiedi('/product').then(function (r) {
        function opzioni(nome) {
          var e = r.doc.querySelector('[name="' + nome + '"][options]');
          try { return JSON.parse(e.getAttribute('options')).map(function (o) { return { v: String(o.value), t: pulisci(o.label) }; }); } catch (x) { return []; }
        }
        catalogo.opzioni = { categorie: opzioni('f[categories][]'), fornitori: opzioni('f[suppliers][]') };
        return catalogo.opzioni;
      });
    }
    function indirizzoCatalogo(pagina) {
      return '/product?dataTableView=product_table&f%5Bsearch%5D=' + encodeURIComponent(catalogo.cerca) +
        (catalogo.disponibili ? '&f%5Bavailable%5D=' + catalogo.disponibili : '') +
        (catalogo.categoria ? '&f%5Bcategories%5D%5B%5D=' + encodeURIComponent(catalogo.categoria) : '') +
        (catalogo.fornitore ? '&f%5Bsuppliers%5D%5B%5D=' + encodeURIComponent(catalogo.fornitore) : '') +
        '&page=' + pagina + '&perPage=50';
    }

    function mostraCatalogo() {
      var box = el('div', 'ip-ordini-filtri');
      var cerca = el('form', 'ip-cerca-pagina ip-cerca-con-tasto ip-cerca-fissa');
      var input = document.createElement('input');
      input.type = 'search'; input.placeholder = 'Cerca codice, EAN o descrizione'; input.value = catalogo.cerca;
      input.setAttribute('enterkeyhint', 'search');
      cerca.appendChild(input);
      var leggi = crea('button', 'ip-tasto-fotocamera', IC_FOTOCAMERA);
      leggi.type = 'button';
      leggi.setAttribute('aria-label', 'Leggi il codice con la fotocamera');
      leggi.addEventListener('click', function () {
        leggiCodiceVerso('Cerca un articolo', function (codice) { input.value = codice; catalogo.cerca = codice; caricaCatalogo(true); });
      });
      cerca.appendChild(leggi);
      var attesa = null;
      input.addEventListener('input', function () { clearTimeout(attesa); attesa = setTimeout(function () { if (input.value.trim() !== catalogo.cerca) { catalogo.cerca = input.value.trim(); caricaCatalogo(true); } }, 500); });
      cerca.addEventListener('submit', function (e) { e.preventDefault(); clearTimeout(attesa); catalogo.cerca = input.value.trim(); input.blur(); caricaCatalogo(true); });
      // Fuori dal riquadro dei filtri, direttamente nella pagina: così resta fermo in alto per tutto l'elenco.
      vista.appendChild(cerca);
      var segmenti = el('div', 'ip-segmenti ip-segmenti-stretti');
      [['', 'Tutti'], ['1', 'Disponibili'], ['0', 'Esauriti']].forEach(function (p) {
        var b = el('button', catalogo.disponibili === p[0] ? 'ip-scelto' : '', p[1]);
        b.type = 'button';
        b.addEventListener('click', function () { if (catalogo.disponibili === p[0]) return; catalogo.disponibili = p[0]; aggiornaVoceAltro(); });
        segmenti.appendChild(b);
      });
      box.appendChild(segmenti);
      var opz = catalogo.opzioni;
      var nomeDi = function (lista, v) { var o = (lista || []).filter(function (x) { return x.v === v; })[0]; return o ? o.t : 'Uno'; };
      var righe = el('div', 'ip-scheda ip-lista ip-filtri-righe');
      righe.appendChild(rigaFiltro('Categoria', catalogo.categoria ? nomeDi(opz && opz.categorie, catalogo.categoria) : 'Tutte', function () {
        leggiOpzioniCatalogo().then(function (o) { foglioScelta('Categoria', o.categorie, catalogo.categoria ? [catalogo.categoria] : [], false, function (n) { catalogo.categoria = n[0] || ''; aggiornaVoceAltro(); }); });
      }));
      righe.appendChild(rigaFiltro('Fornitore', catalogo.fornitore ? nomeDi(opz && opz.fornitori, catalogo.fornitore) : 'Tutti', function () {
        leggiOpzioniCatalogo().then(function (o) { foglioScelta('Fornitore', o.fornitori, catalogo.fornitore ? [catalogo.fornitore] : [], false, function (n) { catalogo.fornitore = n[0] || ''; aggiornaVoceAltro(); }); });
      }));
      box.appendChild(righe);
      vista.appendChild(box);
      catalogo.zona = zonaContenuto();
      caricaCatalogo(true);
    }
    function caricaCatalogo(daCapo) {
      var mia = ++richiesta;
      if (daCapo) { catalogo.righe = []; catalogo.pagina = 0; }
      catalogo.inCarico = true;
      disegnaCatalogo();
      chiediJson(indirizzoCatalogo(catalogo.pagina + 1)).then(function (r) {
        if (mia !== richiesta) return;
        catalogo.inCarico = false;
        if (!r.dati || !r.dati.rows) { erroreDati(catalogo.zona, r, 'catalogo'); return; }
        catalogo.pagina++;
        catalogo.filtrati = r.dati.filtered || 0;
        r.dati.rows.forEach(function (x) { catalogo.perId[String(x.id)] = x; });
        catalogo.righe = catalogo.righe.concat(r.dati.rows);
        var dove = vista.scrollTop;
        disegnaCatalogo();
        vista.scrollTop = dove;
      }, function () { if (mia === richiesta) { catalogo.inCarico = false; erroreDati(catalogo.zona, null); } });
    }
    function fotoArticolo(x) { var src = x && x.image && x.image.src; return src && !/^data:image\/svg/.test(src) ? src : ''; }
    function disegnaCatalogo() {
      var zona = catalogo.zona;
      if (!zona) return;
      zona.innerHTML = '';
      if (catalogo.inCarico && !catalogo.righe.length) { caricamentoIn(zona); return; }
      if (!catalogo.righe.length) { zona.appendChild(el('div', 'ip-vuoto', catalogo.cerca ? 'Nessun articolo trovato per "' + catalogo.cerca + '".' : 'Nessun articolo con questi filtri.')); return; }
      zona.appendChild(el('div', 'ip-etichetta', interoItaliano(catalogo.filtrati) + (catalogo.filtrati === 1 ? ' articolo' : ' articoli')));
      var lista = el('div', 'ip-scheda ip-lista');
      catalogo.righe.forEach(function (x) {
        var riga = crea('button', 'ip-riga ip-riga-venduto');
        riga.type = 'button';
        riga.appendChild(miniatura(fotoArticolo(x), 'ip-mini'));
        var t = el('span', 'ip-riga-testi');
        t.appendChild(el('span', 'ip-riga-nome', pulisci(x.description || x.code || 'Articolo')));
        t.appendChild(el('span', 'ip-riga-sotto ip-riga-codice', [x.code, x.ean].filter(Boolean).join(' · ')));
        t.appendChild(el('span', 'ip-riga-sotto', [pulisci(x.supplier_companyName || ''), pulisci(x.category_name || '')].filter(Boolean).join(' · ')));
        var stati = el('span', 'ip-ordine-stati');
        var giac = +x.totalAvailability || 0;
        stati.appendChild(chip(giac > 0 ? 'Disponibili ' + giac : 'Esaurito', giac > 0 ? '' : 'ip-chip-rosso'));
        if (x.favourite && /^s/i.test(x.favourite.value || '')) stati.appendChild(chip('Preferito', 'ip-chip-ambra'));
        t.appendChild(stati);
        riga.appendChild(t);
        var imp = el('span', 'ip-ordine-importo');
        var prezzo = x.discountedPrice !== '' && x.discountedPrice != null ? +x.discountedPrice : +x.price || 0;
        imp.appendChild(el('b', '', soldi(prezzo)));
        if ((+x.listingPrice || 0) - prezzo > 0.004) imp.appendChild(el('s', '', soldi(x.listingPrice)));
        riga.appendChild(imp);
        riga.addEventListener('click', function () { apriVoceAltro({ voce: 'catalogo', prodotto: String(x.id), titolo: pulisci(x.code || 'Articolo') }); });
        lista.appendChild(riga);
      });
      zona.appendChild(lista);
      var mancano = catalogo.filtrati - catalogo.righe.length;
      if (mancano > 0) zona.appendChild(tastoAltre(mancano, catalogo.inCarico, function () { caricaCatalogo(false); }));
    }

    // ---------- Scheda completa di un articolo ----------
    function leggiRiepilogoArticolo(doc) {
      var corpo = doc.querySelector('.console-page-body') || doc.body;
      var r = leggiDettaglioOrdine(doc);
      var titoloPagina = '';
      var link = corpo.querySelector('a[href^="/product/"]');
      var testa = corpo.querySelector('h1, h2');
      if (testa) titoloPagina = pulisci(testa.textContent);
      var foto = '';
      var imgs = corpo.querySelectorAll('img');
      for (var i = 0; i < imgs.length && !foto; i++) { var s = imgs[i].getAttribute('src') || ''; if (/minio|\/retail\/|\.(jpe?g|png|webp)/i.test(s) && !/avatar/i.test(imgs[i].className)) foto = s; }
      return { numeri: r.numeri, sezioni: r.sezioni, titolo: titoloPagina, foto: foto };
    }
    function tabellaArticolo(id, percorso, nome, quante, ordine, pagina) {
      return chiediJson('/product/' + id + percorso + '?dataTableView=' + nome + '&page=' + (pagina || 1) + '&perPage=' + (quante || 50) + (ordine ? '&sort=' + encodeURIComponent(ordine) : '')).then(function (r) { return r.dati || null; }, function () { return null; });
    }
    function moduloArticolo(id, percorso) {
      return chiedi('/product/' + id + percorso).then(function (r) { return { doc: r.doc, gruppi: leggiModulo(r.doc), percorso: r.percorso }; }, function () { return null; });
    }
    function mostraArticolo(s) {
      var mia = richiesta;
      var id = s.prodotto;
      var base = catalogo.perId[id] || null;
      var zona = zonaContenuto();
      if (base) disegnaArticolo(zona, id, base, null);
      else caricamentoIn(zona);
      Promise.all([
        chiedi('/product/' + id),
        moduloArticolo(id, '/edit'),
        moduloArticolo(id, '/edit/technical'),
        moduloArticolo(id, '/edit/prices'),
        moduloArticolo(id, '/edit/measures'),
        moduloArticolo(id, '/edit/ecommerce'),
        tabellaArticolo(id, '/availability/list', 'availability_table', 200),
        tabellaArticolo(id, '/order/list', 'order_table', 30, 'order_createdAt:desc'),
        tabellaArticolo(id, '/movement/list', 'movement_table', 30, 'createdAt:desc'),
        tabellaArticolo(id, '/cost/list', 'cost_table', 30),
        tabellaArticolo(id, '/summary/attribute/list', 'ordered_attribute_table', 100),
        tabellaArticolo(id, '/attachment/list', 'attachment_table', 100),
        chiediJson('/product?dataTableView=product_table&f%5Bsearch%5D=' + encodeURIComponent(base ? (base.ean || base.code) : '') + '&page=1&perPage=20').then(function (r) { return r.dati; }, function () { return null; }),
        chiedi('/product/' + id + '/gallery-image/list').then(function (g) { return leggiGalleria(g.doc); }, function () { return []; })
      ]).then(function (r) {
        if (mia !== richiesta) return;
        if (/\/login$/.test(r[0].percorso)) { location.reload(); return; }
        if (r[0].percorso.indexOf('/product/' + id) !== 0) { zona.innerHTML = ''; zona.appendChild(el('div', 'ip-vuoto', 'Il tuo utente non ha accesso a questo articolo.')); return; }
        // La riga dell'elenco (foto, codici, EAN secondari) se non c'era già.
        if (!base && r[12] && r[12].rows) base = r[12].rows.filter(function (x) { return String(x.id) === id; })[0] || null;
        var dati = {
          riepilogo: leggiRiepilogoArticolo(r[0].doc), dettagli: r[1], tecnici: r[2], prezzi: r[3], misure: r[4], ecommerce: r[5],
          giacenze: r[6], vendite: r[7], movimenti: r[8], costi: r[9], attributi: r[10], allegati: r[11], galleria: r[13] || []
        };
        disegnaArticolo(zona, id, base, dati);
      }, function () { if (mia === richiesta) erroreDati(zona, null); });
    }

    // Immagini della galleria: sono le anteprime dentro il riquadro di caricamento del CRM.
    function leggiGalleria(doc) {
      var zona = doc.querySelector('oneam-dropzone') || doc.querySelector('.console-page-body');
      if (!zona) return [];
      var trovate = [], viste = {};
      var nodi = zona.querySelectorAll('img[src], [data-src], a[href]');
      for (var i = 0; i < nodi.length; i++) {
        var src = nodi[i].getAttribute('src') || nodi[i].getAttribute('data-src') || nodi[i].getAttribute('href') || '';
        if (!/\.(jpe?g|png|webp|gif)(\?|$)/i.test(src) || /avatar/i.test(src) || viste[src]) continue;
        if (nodi[i].closest('template')) continue;
        viste[src] = true;
        trovate.push(src);
      }
      return trovate;
    }
    // Altre righe di vendite o movimenti: la pagina successiva, aggiunta in fondo.
    function piuRigheArticolo(id, d, quale) {
      var t = quale === 'vendite' ? ['/order/list', 'order_table', 'order_createdAt:desc'] : ['/movement/list', 'movement_table', 'createdAt:desc'];
      var dati = d[quale];
      dati.pagina = (dati.pagina || 1) + 1;
      return tabellaArticolo(id, t[0], t[1], 30, t[2], dati.pagina).then(function (nuovi) {
        if (nuovi && nuovi.rows) dati.rows = dati.rows.concat(nuovi.rows);
      });
    }
    function gruppoDati(zona, titoloGruppo, coppie, mostraVuoti) {
      var buone = coppie.filter(function (c) { return c && (mostraVuoti || (c[1] && c[1] !== '—')); });
      if (!buone.length) return null;
      zona.appendChild(el('div', 'ip-etichetta', titoloGruppo));
      var box = el('div', 'ip-scheda ip-dati');
      buone.forEach(function (c) {
        var riga = el('div', 'ip-dato' + (String(c[1] || '').length > 40 ? ' ip-dato-lungo' : ''));
        riga.appendChild(el('span', 'ip-dato-nome', c[0]));
        var v = c[1] instanceof Node ? c[1] : el('span', 'ip-dato-valore', c[1] || '—');
        if (c[1] instanceof Node) v.classList.add('ip-dato-valore');
        riga.appendChild(v);
        box.appendChild(riga);
      });
      zona.appendChild(box);
      return box;
    }
    function coppieModulo(m) { var tutte = []; (m && m.gruppi || []).forEach(function (g) { tutte = tutte.concat(g.righe); }); return tutte; }
    function valoreModulo(m, etichetta) { var c = coppieModulo(m).filter(function (x) { return x[0].toLowerCase() === etichetta.toLowerCase(); })[0]; return c && c[1] !== '—' ? c[1] : ''; }
    function numeroIt(t) { var n = parseFloat(String(t || '').replace(/[^\d,.\-]/g, '').replace(/\./g, '').replace(',', '.')); return isNaN(n) ? null : n; }

    function disegnaArticolo(zona, id, base, d) {
      zona.innerHTML = '';
      var riep = d && d.riepilogo;
      var descrizione = (d && valoreModulo(d.dettagli, 'Descrizione')) || (base && pulisci(base.description)) || '';
      var codice = (d && valoreModulo(d.tecnici, 'Codice')) || (base && base.code) || '';
      var ean = (d && valoreModulo(d.tecnici, 'EAN')) || (base && base.ean) || '';
      var secondario = d ? valoreModulo(d.tecnici, 'Codice secondario') : '';

      // Testata: foto grande, descrizione e codici toccabili.
      var testa = el('div', 'ip-scheda ip-articolo-testa');
      var foto = fotoArticolo(base) || (riep && riep.foto) || '';
      var cornice = miniatura(foto, 'ip-foto ip-articolo-foto');
      if (foto) cornice.addEventListener('click', function () { ingrandisci(foto); });
      testa.appendChild(cornice);
      var testi = el('div', 'ip-articolo-testi');
      testi.appendChild(el('div', 'ip-articolo-nome', descrizione || 'Articolo'));
      var codici = el('div', 'ip-venduto-sotto');
      if (codice) codici.appendChild(codiceToccabile(codice, codice, descrizione));
      if (ean) codici.appendChild(codiceToccabile(ean, ean, descrizione));
      testi.appendChild(codici);
      var fornitore = (d && valoreModulo(d.tecnici, 'Fornitore')) || (base && pulisci(base.supplier_companyName || '')) || '';
      if (fornitore) testi.appendChild(el('div', 'ip-riga-sotto', fornitore));
      testa.appendChild(testi);
      zona.appendChild(testa);

      // Numeri principali: prezzo e giacenza, poi venduto.
      var prezzi = d && d.prezzi;
      var listino = numeroIt(valoreModulo(prezzi, 'Prezzo di listino (iva inclusa)')), prezzo = numeroIt(valoreModulo(prezzi, 'Prezzo (iva inclusa)')), scontato = numeroIt(valoreModulo(prezzi, 'Prezzo scontato (IC)'));
      if (!d && base) { listino = +base.listingPrice || null; prezzo = +base.price || null; scontato = base.discountedPrice !== '' && base.discountedPrice != null ? +base.discountedPrice : null; }
      var finale = scontato != null ? scontato : prezzo;
      var coppia = el('div', 'ip-coppia');
      var tp = el('div', 'ip-scheda ip-numero ip-numero-prezzo');
      tp.appendChild(el('div', 'ip-numero-nome', scontato != null ? 'Prezzo scontato' : 'Prezzo'));
      tp.appendChild(el('div', 'ip-numero-valore', finale != null ? soldi(finale) : '—'));
      if (listino != null && finale != null && listino - finale > 0.004) tp.appendChild(el('div', 'ip-totale-periodo', 'Listino ' + soldi(listino) + ' · sconto ' + Math.round((1 - finale / listino) * 100) + '%'));
      coppia.appendChild(tp);
      var giacenza = d && riep ? numeroIt(valoreDi(riep.sezioni['Giacenza'], 'Disponibilità totale')) : (base ? +base.totalAvailability : null);
      var tg = el('div', 'ip-scheda ip-numero' + (giacenza != null && giacenza <= 0 ? ' es-attenzione' : ''));
      tg.appendChild(el('div', 'ip-numero-nome', 'Giacenza'));
      tg.appendChild(el('div', 'ip-numero-valore ip-numero-medio', giacenza != null ? String(giacenza) : '…'));
      coppia.appendChild(tg);
      zona.appendChild(coppia);
      if (!d) { caricamentoIn(zona); return; }
      if (riep && (riep.numeri['Totale venduto IE'] || riep.numeri['Prodotti venduti'])) {
        var tessere = el('div', 'ip-tessere');
        [['Totale venduto IE', riep.numeri['Totale venduto IE']], ['Pezzi venduti', riep.numeri['Prodotti venduti']]].forEach(function (x) {
          if (!x[1]) return;
          var t = el('div', 'ip-scheda ip-numero');
          t.appendChild(el('div', 'ip-numero-nome', x[0]));
          t.appendChild(el('div', 'ip-numero-valore ip-numero-medio', x[1]));
          tessere.appendChild(t);
        });
        zona.appendChild(tessere);
      }

      // Le informazioni sono tante: divise in quattro sezioni con un selettore (su iPhone quello di sistema).
      var SEZIONI_ARTICOLO = [['scheda', 'Scheda'], ['dati', 'Dati'], ['magazzino', 'Magazzino'], ['vendite', 'Vendite']];
      if (!catalogo.sezione) catalogo.sezione = 'scheda';
      var selettore = el('div', 'ip-segmenti ip-segmenti-articolo');
      var parti = {};
      SEZIONI_ARTICOLO.forEach(function (p) {
        var b = el('button', catalogo.sezione === p[0] ? 'ip-scelto' : '', p[1]);
        b.type = 'button';
        b.addEventListener('click', function () {
          if (catalogo.sezione === p[0]) return;
          catalogo.sezione = p[0];
          for (var i = 0; i < selettore.children.length; i++) selettore.children[i].classList.toggle('ip-scelto', SEZIONI_ARTICOLO[i][0] === p[0]);
          Object.keys(parti).forEach(function (k) { parti[k].hidden = k !== p[0]; });
        });
        selettore.appendChild(b);
      });
      zona.appendChild(selettore);
      SEZIONI_ARTICOLO.forEach(function (p) { parti[p[0]] = el('div', 'ip-parte-articolo'); parti[p[0]].hidden = catalogo.sezione !== p[0]; zona.appendChild(parti[p[0]]); });

      // Codici: modificabili, anche dalla fotocamera. Gli EAN secondari sono una lista: se ne aggiungono quanti si vuole.
      var tecnici = d.tecnici;
      if (tecnici) {
        var secondari = eanSecondari(tecnici.doc);
        var voci = [['Codice', codice || '—', { modifica: 'code' }], ['Codice secondario', secondario || '—', { modifica: 'secondaryCode' }], ['EAN', ean || '—', { modifica: 'ean' }]];
        secondari.forEach(function (e, n) { voci.push([secondari.length > 1 ? 'EAN secondario ' + (n + 1) : 'EAN secondario', e, { modifica: 'secondaryEans', indice: n }]); });
        var boxCodici = gruppoDati(parti.scheda, 'Codici', voci.map(function (v) { return [v[0], v[1]]; }), true);
        if (boxCodici) boxCodici.classList.add('ip-dati-codici');
        if (boxCodici) {
          var righeCodici = boxCodici.querySelectorAll('.ip-dato');
          for (var k = 0; k < righeCodici.length && k < voci.length; k++) (function (riga, voce) {
            var tasto = crea('button', 'ip-tasto-modifica', ICONA_MATITA);
            tasto.type = 'button';
            tasto.setAttribute('aria-label', 'Modifica ' + voce[0]);
            tasto.addEventListener('click', function () { apriVoceAltro({ voce: 'catalogo', prodotto: id, modifica: voce[2].modifica, indice: voce[2].indice, titolo: voce[0] }); });
            riga.appendChild(tasto);
          })(righeCodici[k], voci[k]);
          var aggiungi = crea('button', 'ip-riga ip-riga-aggiungi', '<span class="ip-aggiungi-piu">+</span><span>Aggiungi EAN secondario</span>');
          aggiungi.type = 'button';
          aggiungi.addEventListener('click', function () { apriVoceAltro({ voce: 'catalogo', prodotto: id, modifica: 'secondaryEans', indice: -1, titolo: 'Nuovo EAN secondario' }); });
          boxCodici.appendChild(aggiungi);
        }
      }

      // Galleria immagini: toccandone una si apre grande.
      if (d.galleria && d.galleria.length) {
        parti.scheda.appendChild(el('div', 'ip-etichetta', 'Immagini · ' + d.galleria.length));
        var striscia = el('div', 'ip-galleria');
        d.galleria.forEach(function (src) {
          var img = document.createElement('img');
          img.src = src; img.alt = ''; img.loading = 'lazy';
          img.addEventListener('click', function () { ingrandisci(src); });
          img.addEventListener('error', function () { img.remove(); });
          striscia.appendChild(img);
        });
        parti.scheda.appendChild(striscia);
      }

      // Prezzi: costo e margine nascosti finché non si toccano (come nella scheda prodotto).
      if (prezzi) {
        var costo = numeroIt(valoreModulo(prezzi, 'Costo (iva esclusa)'));
        var iva = valoreModulo(prezzi, '% IVA');
        var aliquota = numeroIt(iva) || 22;
        var margine = costo != null && finale ? Math.round((1 - costo / (finale / (1 + aliquota / 100))) * 1000) / 10 : null;
        var nascosto = function (testo) {
          var b = crea('button', 'ip-riservato' + (catalogo.costoVisibile ? ' ip-visibile' : ''), '');
          b.type = 'button';
          b.appendChild(el('span', 'ip-riservato-valore', testo));
          b.appendChild(el('span', 'ip-riservato-punti', '••••'));
          b.addEventListener('click', function () { catalogo.costoVisibile = !catalogo.costoVisibile; var tutti = zona.querySelectorAll('.ip-riservato'); for (var i = 0; i < tutti.length; i++) tutti[i].classList.toggle('ip-visibile', catalogo.costoVisibile); });
          return b;
        };
        gruppoDati(parti.scheda, 'Prezzi', [
          ['Prezzo di listino', listino != null ? soldi(listino) : '—'], ['Prezzo', prezzo != null ? soldi(prezzo) : '—'], ['Prezzo scontato', scontato != null ? soldi(scontato) : '—'],
          ['IVA', iva || '—'], ['Costo (IVA esclusa)', costo != null ? nascosto(soldi(costo)) : '—'], ['Margine sul prezzo', margine != null ? nascosto(String(margine).replace('.', ',') + '%') : '—']
        ], true);
      }

      // Giacenze per magazzino
      var giac = d.giacenze && d.giacenze.rows || [];
      if (giac.length) {
        parti.magazzino.appendChild(el('div', 'ip-etichetta', 'Giacenze per magazzino'));
        var gl = el('div', 'ip-scheda ip-dati');
        giac.forEach(function (x) {
          var r = el('div', 'ip-dato ip-dato-doppio');
          var n = el('span', 'ip-dato-nome');
          n.appendChild(el('b', '', pulisci(x.warehouse || 'Magazzino')));
          var sync = pulisci(String(x.easyStore || '')), quando = pulisci(String(x.syncedAt || '')).replace(/^-$/, '');
          n.appendChild(el('small', '', 'EasyStore: ' + (sync || '—') + (quando ? ' · ' + quando : '')));
          r.appendChild(n);
          r.appendChild(el('span', 'ip-dato-valore ip-giacenza' + ((+x.quantity || 0) <= 0 ? ' ip-zero' : ''), String(x.quantity)));
          gl.appendChild(r);
        });
        parti.magazzino.appendChild(gl);
      }
      var riepGiac = riep && riep.sezioni['Giacenza'];
      if (riepGiac) gruppoDati(parti.magazzino, 'Disponibilità', riepGiac.righe, false);

      // Classificazione e opzioni (dati tecnici senza i codici)
      if (tecnici) gruppoDati(parti.dati, 'Classificazione', coppieModulo(tecnici).filter(function (c) { return !/^(codice|codice secondario|ean|ean secondari)$/i.test(c[0]) && !/^\d{8,14}$/.test(c[0]); }), true);
      // Descrizioni (dettagli)
      if (d.dettagli) gruppoDati(parti.scheda, 'Descrizioni', coppieModulo(d.dettagli), false);
      // Misure: solo quelle compilate, con il gruppo (articolo o imballo) nel nome
      if (d.misure) {
        var misure = [];
        d.misure.gruppi.forEach(function (g) { g.righe.forEach(function (c) { if (c[1] && c[1] !== '—') misure.push([(g.nome && !/^dati$/i.test(g.nome) ? g.nome + ' · ' : '') + c[0], c[1]]); }); });
        if (misure.length) gruppoDati(parti.dati, 'Misure', misure, false);
        else { parti.dati.appendChild(el('div', 'ip-etichetta', 'Misure')); parti.dati.appendChild(el('div', 'ip-scheda ip-vuoto ip-vuoto-scheda', 'Nessuna misura inserita.')); }
      }
      // Attributi
      var attr = d.attributi && d.attributi.rows || [];
      if (attr.length) gruppoDati(parti.dati, 'Attributi', attr.map(function (x) {
        var nome = x.attribute_name || x.name || x.attribute || '', valore = x.value || x.attributeValue_value || x.values || '';
        if (!nome) { var k = Object.keys(x).filter(function (q) { return typeof x[q] === 'string' && !/url$/i.test(q); }); nome = x[k[0]] || 'Attributo'; valore = x[k[1]] || ''; }
        return [pulisci(String(nome)), pulisci(Array.isArray(valore) ? valore.join(', ') : String(valore))];
      }), true);
      // E-commerce
      if (d.ecommerce) {
        var web = coppieModulo(d.ecommerce).map(function (c) { return [c[0], c[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() || '—']; });
        gruppoDati(parti.dati, 'E-commerce', web, false);
      }

      // Ultime vendite
      var vend = d.vendite && d.vendite.rows || [];
      if (vend.length) {
        var tot = d.vendite.filtered || vend.length;
        parti.vendite.appendChild(el('div', 'ip-etichetta ip-giorno', '')).appendChild(el('span', '', 'Ultime vendite'));
        parti.vendite.lastChild.appendChild(el('span', 'ip-giorno-totale', interoItaliano(tot) + (tot === 1 ? ' vendita' : ' vendite') + (d.vendite.additionalData && d.vendite.additionalData.totalFinalPrice ? ' · ' + euro(+d.vendite.additionalData.totalFinalPrice) : '')));
        var vl = el('div', 'ip-scheda ip-lista');
        vend.forEach(function (x) {
          var riga = crea('button', 'ip-riga ip-riga-ordine');
          riga.type = 'button';
          var q = dataCrm(x.order_createdAt);
          var lato = el('span', 'ip-ordine-lato');
          lato.appendChild(crea('span', 'ip-ordine-icona', IC_ORDINE.scontrino));
          riga.appendChild(lato);
          var t = el('span', 'ip-riga-testi');
          t.appendChild(el('span', 'ip-riga-nome', q ? nomeGiorno(q.data) + (q.ora ? ' alle ' + q.ora : '') : pulisci(x.order_createdAt || '')));
          t.appendChild(el('span', 'ip-riga-sotto', [(+x.quantity || 0) + ' × ' + pulisci(String(x.unitPrice || '')), pulisci(x.order_createdBy_name || ''), nomeCassa(x.order_printer_name)].filter(Boolean).join(' · ')));
          riga.appendChild(t);
          var imp = el('span', 'ip-ordine-importo');
          imp.appendChild(el('b', '', soldi(x.finalPrice)));
          riga.appendChild(imp);
          if (x.order_id) riga.addEventListener('click', function () { apriVenditaDaAltro(x.order_id); });
          vl.appendChild(riga);
        });
        parti.vendite.appendChild(vl);
        if (tot > vend.length) parti.vendite.appendChild(tastoAltre(tot - vend.length, false, function () {
          this.disabled = true; this.textContent = 'Carico…';
          var dove = vista.scrollTop;
          piuRigheArticolo(id, d, 'vendite').then(function () { disegnaArticolo(zona, id, base, d); vista.scrollTop = dove; });
        }, 30));
      }
      // Movimenti di magazzino
      var mov = d.movimenti && d.movimenti.rows || [];
      if (mov.length) {
        parti.magazzino.appendChild(el('div', 'ip-etichetta', 'Movimenti di magazzino'));
        var ml = el('div', 'ip-scheda ip-dati');
        mov.forEach(function (x) {
          var r = el('div', 'ip-dato ip-dato-doppio');
          var n = el('span', 'ip-dato-nome');
          n.appendChild(el('b', '', pulisci(x.reason && x.reason.value || 'Movimento')));
          n.appendChild(el('small', '', [pulisci(x.createdAt || ''), pulisci(x.warehouse_name || ''), pulisci(x.createdBy_name || '')].filter(Boolean).join(' · ')));
          r.appendChild(n);
          var qta = String(x.quantity || '');
          r.appendChild(el('span', 'ip-dato-valore' + (/^-/.test(qta) ? ' ip-negativo' : ' ip-positivo'), qta));
          ml.appendChild(r);
        });
        parti.magazzino.appendChild(ml);
        var totMov = d.movimenti.filtered || mov.length;
        if (totMov > mov.length) parti.magazzino.appendChild(tastoAltre(totMov - mov.length, false, function () {
          this.disabled = true; this.textContent = 'Carico…';
          var dove = vista.scrollTop;
          piuRigheArticolo(id, d, 'movimenti').then(function () { disegnaArticolo(zona, id, base, d); vista.scrollTop = dove; });
        }, 30));
      }
      // Storico costi
      var costi = d.costi && d.costi.rows || [];
      if (costi.length) gruppoDati(parti.vendite, 'Storico costi', costi.map(function (x) { return [pulisci(x.order_createdAt || ''), pulisci(String(x.cost || ''))]; }), true);
      // Allegati
      var all = d.allegati && d.allegati.rows || [];
      if (all.length) gruppoDati(parti.dati, 'Allegati', all.map(function (x) { return [pulisci(x.name || x.fileName || x.originalName || 'Allegato'), pulisci(x.createdAt || x.type || '')]; }), true);
      // Una sezione rimasta senza dati lo dice, invece di restare vuota.
      Object.keys(parti).forEach(function (k) { if (!parti[k].children.length) parti[k].appendChild(el('div', 'ip-vuoto', k === 'vendite' ? 'Nessuna vendita di questo articolo.' : 'Nessun dato in questa sezione.')); });
      parti.scheda.appendChild(el('div', 'ip-nota-piccola', 'Prezzi, giacenze e descrizioni si modificano dal CRM; da qui si modificano solo i codici.'));
    }

    // ---------- Modifica di un codice (codice, codice secondario, EAN o EAN secondario) ----------
    var NOMI_CODICE = { code: 'Codice', secondaryCode: 'Codice secondario', ean: 'EAN', secondaryEans: 'EAN secondario' };
    var ICONA_MATITA = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"/><path d="M13.5 6.5l4 4"/></svg>';
    var NOME_SECONDARI = /^product_technicals\[secondaryEans\]\[\d+\]$/;
    // Gli EAN secondari di un articolo, nell'ordine del CRM (campi product_technicals[secondaryEans][n]).
    function eanSecondari(doc) {
      var modulo = doc && doc.querySelector('form[name="product_technicals"]');
      if (!modulo) return [];
      var campi = modulo.querySelectorAll('input[name^="product_technicals[secondaryEans]"]');
      var lista = [];
      for (var i = 0; i < campi.length; i++) {
        if (!NOME_SECONDARI.test(campi[i].getAttribute('name'))) continue;
        var v = (campi[i].getAttribute('value') || '').trim();
        if (v) lista.push(v);
      }
      return lista;
    }
    // Dati del modulo tecnico pronti da inviare: tutti i campi come sono nel CRM, con le modifiche chieste.
    // cambia = { campo: valore } per i campi semplici; secondari = nuova lista completa degli EAN secondari.
    function datiTecnici(modulo, cambia, secondari) {
      var dati = new URLSearchParams();
      var campi = modulo.querySelectorAll('input[name], textarea[name], select[name]');
      for (var i = 0; i < campi.length; i++) {
        var c = campi[i], nome = c.getAttribute('name');
        if (c.type === 'file' || c.disabled) continue;
        if (secondari && NOME_SECONDARI.test(nome)) continue;
        if ((c.type === 'checkbox' || c.type === 'radio') && !c.hasAttribute('checked')) continue;
        if (c.tagName === 'SELECT') { var o = c.querySelectorAll('option[selected]'); for (var j = 0; j < o.length; j++) dati.append(nome, o[j].getAttribute('value')); continue; }
        var valore = c.tagName === 'TEXTAREA' ? c.textContent : (c.getAttribute('value') || '');
        if (cambia && Object.prototype.hasOwnProperty.call(cambia, nome)) valore = cambia[nome];
        dati.append(nome, valore);
      }
      if (secondari) secondari.forEach(function (e, n) { dati.append('product_technicals[secondaryEans][' + n + ']', e); });
      return dati;
    }

    function mostraModificaCodice(s) {
      var mia = richiesta;
      var lista = s.modifica === 'secondaryEans';
      var indice = lista ? (typeof s.indice === 'number' ? s.indice : -1) : null;
      var campoNome = 'product_technicals[' + s.modifica + ']';
      var nomeCodice = NOMI_CODICE[s.modifica];
      var zona = zonaContenuto();
      caricamentoIn(zona);
      chiedi('/product/' + s.prodotto + '/edit/technical').then(function (r) {
        if (mia !== richiesta) return;
        if (/\/login$/.test(r.percorso)) { location.reload(); return; }
        var modulo = r.doc.querySelector('form[name="product_technicals"]');
        var campo = modulo && (lista ? modulo : modulo.querySelector('[name="' + campoNome + '"]'));
        zona.innerHTML = '';
        if (!modulo || !campo) { zona.appendChild(el('div', 'ip-vuoto', 'Il tuo utente non può modificare i codici di questo articolo.')); return; }
        var secondariOra = eanSecondari(r.doc);
        if (lista && indice >= secondariOra.length) indice = -1;
        var attuale = lista ? (indice >= 0 ? secondariOra[indice] : '') : (campo.getAttribute('value') || '');
        var eanPrincipale = (modulo.querySelector('[name="product_technicals[ean]"]') || { getAttribute: function () { return ''; } }).getAttribute('value') || '';
        zona.appendChild(el('div', 'ip-sottotitolo', lista && indice < 0 ? 'Nuovo EAN secondario' + (secondariOra.length ? ' (ce ne sono già ' + secondariOra.length + ')' : '') : nomeCodice + ' attuale: ' + (attuale || 'nessuno')));
        var numerico = s.modifica === 'ean' || lista;
        var grande = campoGrande('', numerico ? 'numeric' : 'text');
        grande.input.value = attuale;
        grande.input.setAttribute('autocapitalize', 'characters');
        var riga = el('div', 'ip-codice-con-fotocamera');
        riga.appendChild(grande.box);
        grande.box.classList.add('ip-campo-codice');
        var leggi = crea('button', 'ip-tasto-fotocamera ip-tasto-fotocamera-grande', IC_FOTOCAMERA);
        leggi.setAttribute('aria-label', 'Leggi con la fotocamera');
        leggi.type = 'button';
        leggi.addEventListener('click', function () { leggiCodiceVerso('Leggi ' + nomeCodice, function (codice) { grande.input.value = codice; controlla(); avvisa('ok'); }); });
        riga.appendChild(leggi);
        zona.appendChild(riga);
        var nota = el('div', 'ip-nota-piccola ip-nota-sinistra', '');
        zona.appendChild(nota);
        // Un EAN secondario già presente si può anche togliere.
        if (lista && indice >= 0) {
          var togli = crea('button', 'ip-secondario ip-largo ip-pericolo', 'Togli questo EAN secondario');
          togli.type = 'button';
          togli.addEventListener('click', function () {
            conferma('Togliere l\'EAN secondario?', attuale + '\nNon sarà più collegato a questo articolo.', 'Togli', function () {
              invia(null);
            });
          });
          zona.appendChild(togli);
        }
        var salva = tastoAzione('ip-azione ip-azione-salva', '<b>Salva ' + nomeCodice + '</b>', function () {
          var nuovo = grande.input.value.trim();
          var errore = controlla();
          if (errore) { mostraAvviso('Controlla il codice', errore); avvisa('errore'); return; }
          conferma(lista && indice < 0 ? 'Aggiungere l\'EAN secondario?' : 'Salvare il nuovo ' + nomeCodice + '?', lista && indice < 0 ? nuovo : 'Prima: ' + (attuale || 'nessuno') + '\nDopo: ' + (nuovo || 'nessuno'), lista && indice < 0 ? 'Aggiungi' : 'Salva', function () { invia(nuovo); });
        });
        function controlla() {
          var v = grande.input.value.trim(), errore = '';
          if ((s.modifica !== 'secondaryCode') && !v) errore = 'Il campo è obbligatorio.';
          else if (numerico && v && !/^\d{8}$|^\d{12,14}$/.test(v)) errore = 'Un EAN ha 8 oppure 13 cifre.';
          else if (numerico && v && /^\d{8}$|^\d{13}$/.test(v) && !eanValido(v)) errore = 'La cifra di controllo dell\'EAN non torna: ricontrolla il codice.';
          else if (lista && v && v !== attuale && (v === eanPrincipale || secondariOra.indexOf(v) !== -1)) errore = 'Questo EAN è già collegato all\'articolo.';
          nota.textContent = errore || (v === attuale && !(lista && indice < 0) ? 'Nessuna modifica.' : '');
          nota.classList.toggle('ip-nota-errore', !!errore);
          salva.disabled = !!errore || (v === attuale && !(lista && indice < 0)) || (lista && indice < 0 && !v);
          return errore;
        }
        grande.input.addEventListener('input', controlla);
        azioni.innerHTML = '';
        azioni.appendChild(salva);
        radice.classList.remove('ip-senza-azioni');
        controlla();
        prontoAScrivere(grande.input);
        // Invia il modulo intero com'è nel CRM, cambiando solo il codice scelto (gettone appena letto).
        // nuovo = null vuol dire togliere l'EAN secondario.
        function invia(nuovo) {
          salva.disabled = true;
          var atteso = null;
          chiedi('/product/' + s.prodotto + '/edit/technical').then(function (fresco) {
            var m = fresco.doc.querySelector('form[name="product_technicals"]');
            if (!m) throw new Error('modulo');
            var dati;
            if (lista) {
              var elenco = eanSecondari(fresco.doc);
              var dove = indice >= 0 ? elenco.indexOf(attuale) : -1;
              if (indice >= 0 && dove === -1) throw new Error('cambiato');
              if (nuovo === null) elenco.splice(dove, 1);
              else if (dove >= 0) elenco[dove] = nuovo;
              else elenco.push(nuovo);
              atteso = elenco;
              dati = datiTecnici(m, null, elenco);
            } else {
              var cambia = {}; cambia[campoNome] = nuovo;
              dati = datiTecnici(m, cambia, null);
            }
            var azione = m.getAttribute('action') || ('/product/' + s.prodotto + '/edit/technical');
            return fetch(azione, { method: 'POST', credentials: 'same-origin', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: dati.toString() });
          }).then(function (risposta) { return risposta.text(); }).then(function () {
            // Verifica: rileggo il modulo e controllo che il CRM abbia davvero salvato.
            return chiedi('/product/' + s.prodotto + '/edit/technical');
          }).then(function (dopo) {
            var ok;
            if (lista) ok = eanSecondari(dopo.doc).join('|') === atteso.join('|');
            else { var c = dopo.doc.querySelector('[name="' + campoNome + '"]'); ok = c && (c.getAttribute('value') || '') === nuovo; }
            if (ok) {
              mostraAvviso(nuovo === null ? 'Tolto' : 'Salvato', nuovo === null ? 'EAN secondario ' + attuale + ' tolto' : nomeCodice + ': ' + (nuovo || 'nessuno'), true);
              avvisa('ok');
              if (catalogo.perId[s.prodotto] && s.modifica === 'ean') catalogo.perId[s.prodotto].ean = nuovo;
              if (catalogo.perId[s.prodotto] && s.modifica === 'code') catalogo.perId[s.prodotto].code = nuovo;
              try { history.back(); } catch (e) { /* resta qui */ }
            } else {
              var errori = dopo.doc.querySelectorAll('.invalid-feedback, .form-error-message, [class*="text-danger"]');
              var testo = '';
              for (var k = 0; k < errori.length && !testo; k++) { var t = pulisci(errori[k].textContent); if (t && t !== '*') testo = t; }
              mostraAvviso('Non salvato', testo || 'Il CRM non ha accettato il codice (forse è già usato da un altro articolo).');
              avvisa('errore');
              salva.disabled = false;
            }
          }).catch(function (e) {
            mostraAvviso(e && e.message === 'cambiato' ? 'Articolo cambiato' : 'Connessione assente', e && e.message === 'cambiato' ? 'Qualcun altro ha appena modificato gli EAN secondari: torna indietro e riprova.' : 'Il codice non è stato salvato. Riprova.');
            avvisa('errore');
            salva.disabled = false;
          });
        }
      }, function () { if (mia === richiesta) erroreDati(zona, null); });
    }

    // ---------- Avvio ----------
    // Subito dopo l'avvio, in silenzio: quali sezioni e funzioni può usare questo utente.
    setTimeout(function () { controllaPermessi().catch(function () { /* restano tutte visibili */ }); }, 400);
    if (tipo === 'scheda') {
      var qui = leggiProdotto(document, m[1]);
      if (qui) {
        mostraProdotto(qui);
        try { history.replaceState({ ipProdotto: qui.id, daElenco: false }, '', '/product/info/' + qui.id); } catch (e) { /* non indispensabile */ }
      } else {
        mostraElenco();
      }
      // L'elenco degli ultimi articoli lo preparo in sottofondo, così tornando indietro è già pronto.
      chiedi('/product/info').then(function (r) {
        var letti = leggiRecenti(r.doc);
        if (letti.length) {
          recenti = letti;
          if (corrente) ricorda(corrente); else mostraElenco();
        }
      }, function () { /* resta l'elenco che c'è */ });
    } else {
      recenti = leggiRecenti(document);
      // Dopo un rientro automatico l'app riparte dalla schermata dei carrelli in cui era.
      if (history.state && history.state.ipVista) {
        var ripresa = history.state;
        // Se sotto questa schermata non c'è l'elenco dei carrelli lo rimetto, così "indietro" ci torna sempre.
        if (ripresa.ipVista !== 'carrelli' && ripresa.ipVista !== 'vendite' && ripresa.ipVista !== 'ordini' && ripresa.ipVista !== 'altro' && !ripresa.sotto) {
          try {
            history.replaceState({ ipVista: 'carrelli' }, '', location.pathname);
            ripresa = statoVista('carrello', { id: ripresa.id, sotto: true });
            history.pushState(ripresa, '', location.pathname);
          } catch (e) { /* non indispensabile */ }
        }
        ripristinaVista(ripresa);
      }
      else {
        // All'apertura dell'app si parte dalla Dashboard. Solo la prima volta: se la pagina si ricarica
        // (rientro, aggiornamento) si resta dove si era. sessionStorage si svuota quando l'app viene chiusa.
        var primaApertura = true;
        try { primaApertura = !sessionStorage.getItem('ip-aperta'); sessionStorage.setItem('ip-aperta', '1'); } catch (e) { /* si parte comunque dalla Dashboard */ }
        if (primaApertura) {
          mostraVendite(false);
          try { history.replaceState(statoVista('vendite'), '', '/product/info'); } catch (e) { /* non indispensabile */ }
        } else {
          mostraElenco();
          try { history.replaceState({ ipElenco: true }, '', '/product/info'); } catch (e) { /* non indispensabile */ }
        }
      }
    }
  }

  // ---------- Dentro al CRM ----------
  // L'app resta dentro Info prodotto: elenco, scheda, modifica prezzi, quantità e immagine.
  var percorso = location.pathname.replace(/\/+$/, '');
  var consentito = percorso.indexOf('/product/info') === 0 || percorso.indexOf('/product/edit/') === 0;
  if (!consentito) {
    location.replace('/product/info');
    return;
  }

  var tipo = 'altro';
  var m;
  if (percorso === '/product/info') tipo = 'lista';
  else if ((m = percorso.match(/^\/product\/info\/(\d+)$/))) tipo = 'scheda';
  else if ((m = percorso.match(/^\/product\/edit\/(\d+)\/(price|quantity)$/))) tipo = 'modifica';
  corpo.classList.add('ip-app', 'ip-' + tipo);
  if (cfg.fotocamera === false) corpo.classList.add('ip-senza-camera');

  quandoPronta(function () {
    avvisa('dentro');
    if (tipo === 'lista' || tipo === 'scheda') {
      var avviata = false;
      try { avviaApp(tipo, m, percorso); avviata = true; } catch (e) { corpo.classList.remove('ip-spa'); }
      if (!avviata) barraApp('Dondi Emporio', tipo === 'scheda' ? '/product/info' : null);
    } else {
      var titoloBarra = (document.title || 'Dondi Emporio').split(' - ')[0];
      var indietroBarra = '/product/info';
      if (tipo === 'modifica') {
        titoloBarra = m[2] === 'price' ? 'Modifica prezzo' : 'Modifica quantità';
        indietroBarra = '/product/info/' + m[1];
      } else {
        var prodotto = percorso.match(/^\/product\/edit\/(\d+)/);
        if (prodotto) indietroBarra = '/product/info/' + prodotto[1];
      }
      barraApp(titoloBarra, indietroBarra);
    }

    var tastoCamera = document.querySelector('button.camera');
    var campo = document.getElementById('form_search');

    // Modifica prezzo e quantità: campi grandi, Salva sempre visibile, tastiera già aperta.
    if (tipo === 'modifica') {
      // Anche qui l'app resta in ascolto del lettore. Un codice a barre arriva tutto insieme e
      // finisce con Invio: se succede dentro a un campo, non viene salvato come prezzo o quantità
      // ma parte la ricerca di quell'articolo.
      prova(function () {
        var modulo = document.querySelector('form[name="price"], form[name="movement"]');
        if (!modulo) return;
        var campi = modulo.querySelectorAll('input[type="text"], input[type="number"]');
        var stato = { campo: null, inizio: 0, ultimo: 0, lunghezza: 0, prima: '' };
        function cerca(codice) {
          var f = document.createElement('form');
          f.method = 'post';
          f.action = '/product/info';
          var c = document.createElement('input');
          c.type = 'hidden'; c.name = 'form[search]'; c.value = codice;
          f.appendChild(c);
          corpo.appendChild(f);
          f.submit();
        }
        function codiceLetto() {
          var campo = stato.campo;
          if (!campo) return null;
          var adesso = Date.now();
          var aggiunta = campo.value.slice(stato.lunghezza);
          var veloce = aggiunta.length >= 6 && (stato.ultimo - stato.inizio) <= aggiunta.length * 50 && adesso - stato.ultimo < 400;
          if (!veloce) return null;
          campo.value = stato.prima;
          campo.dispatchEvent(new Event('input', { bubbles: true }));
          stato.campo = null;
          return aggiunta.trim();
        }
        for (var i = 0; i < campi.length; i++) {
          (function (campo) {
            var precedente = campo.value;
            campo.addEventListener('input', function () {
              var adesso = Date.now();
              if (stato.campo !== campo || adesso - stato.ultimo > 150) {
                stato.campo = campo; stato.inizio = adesso; stato.lunghezza = precedente.length; stato.prima = precedente;
              }
              stato.ultimo = adesso;
              precedente = campo.value;
            });
          })(campi[i]);
        }
        var ferma = function (e) {
          var codice = codiceLetto();
          if (codice) {
            e.preventDefault(); e.stopPropagation();
            cerca(codice);
          }
        };
        modulo.addEventListener('keydown', function (e) { if (e.key === 'Enter') ferma(e); }, true);
        modulo.addEventListener('submit', ferma, true);
      });
      prova(function () {
        // La freccia nella barra dell'app sostituisce "Torna alla lista"; il titolo è già nella barra.
        var modulo = document.querySelector('form[name="price"], form[name="movement"]');
        if (!modulo) return;
        var prima = modulo.previousElementSibling;
        if (prima && prima.querySelector('a[href="/product/info/' + m[1] + '"]')) prima.classList.add('ip-nascosto');
        var titolo = modulo.querySelector('p.font-semibold');
        if (titolo) titolo.classList.add('ip-nascosto');
        var foto = modulo.querySelector('img');
        if (foto && foto.closest('.bg-surface-2')) foto.closest('.bg-surface-2').classList.add('ip-prodotto');
      });
      prova(function () {
        var salva = document.querySelector('form[name="price"] button[type="submit"], form[name="movement"] button[type="submit"]');
        if (salva) salva.parentElement.classList.add('ip-salva');
      });
      prova(function () {
        var quantita = document.getElementById('movement_newQuantity');
        if (quantita) quantita.setAttribute('inputmode', 'numeric');
        var primo = document.getElementById('price_fixedValue') || quantita;
        if (primo && cfg.tastiera !== false) {
          primo.focus();
          avvisa('tastiera');
        }
      });
    }

    // Il costo è nascosto: si vede solo toccando l'occhio, e torna nascosto a ogni pagina.
    prova(function () {
      var OCCHIO = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
        '<path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0"/><path d="M21 12c-2.4 4-5.4 6-9 6c-3.6 0-6.6-2-9-6c2.4-4 5.4-6 9-6c3.6 0 6.6 2 9 6"/></svg>';
      var etichette = document.querySelectorAll('.console-page-body p');
      for (var i = 0; i < etichette.length; i++) {
        (function (etichetta) {
          var cella = etichetta.nextElementSibling;
          if (etichetta.textContent.trim() !== 'Costo' || !cella || cella.tagName !== 'P' || cella.getAttribute('data-ip-costo')) return;
          var vero = cella.textContent.trim();
          var visibile = false;
          cella.setAttribute('data-ip-costo', '1');
          cella.classList.add('ip-costo');
          cella.textContent = '';
          var testo = crea('span', 'ip-costo-valore');
          testo.textContent = '•••••';
          var occhio = crea('button', 'ip-costo-occhio', OCCHIO);
          occhio.type = 'button';
          occhio.setAttribute('aria-label', 'Mostra o nascondi il costo');
          occhio.addEventListener('click', function (e) {
            e.preventDefault();
            visibile = !visibile;
            testo.textContent = visibile ? vero : '•••••';
            occhio.classList.toggle('ip-attivo', visibile);
          });
          cella.appendChild(testo);
          cella.appendChild(occhio);
        })(etichette[i]);
      }
    });

    // Avvisi del CRM: "articolo non trovato" ha un titolo chiaro e un suono, e ogni avviso
    // sparisce da solo dopo poco o al primo tocco, senza bloccare la lettura successiva.
    prova(function () {
      var avvisi = document.getElementById('toast-container');
      if (!avvisi) return;
      function chiudi(avviso) {
        var tasto = avviso.querySelector('[data-dismiss="toast"]');
        if (tasto) tasto.click();
        setTimeout(function () { if (avviso.parentNode) avviso.parentNode.removeChild(avviso); }, 400);
      }
      var sistema = function () {
        var lista = avvisi.querySelectorAll('[role="alert"]');
        for (var i = 0; i < lista.length; i++) {
          (function (avviso) {
            if (avviso.getAttribute('data-ip')) return;
            avviso.setAttribute('data-ip', '1');
            var righe = avviso.querySelectorAll(':scope > div > div');
            var errore = !!avviso.querySelector('[class*="danger"]');
            if (righe.length === 2 && /non è presente/i.test(righe[1].textContent)) {
              righe[0].textContent = 'Articolo non trovato';
              righe[1].textContent = 'Il codice letto non corrisponde a nessun prodotto.';
              avvisa('non-trovato');
            } else if (errore) {
              avvisa('errore');
            }
            setTimeout(function () { chiudi(avviso); }, errore ? 3500 : 2000);
          })(lista[i]);
        }
      };
      if (window.MutationObserver) new MutationObserver(sistema).observe(avvisi, { childList: true });
      sistema();
      document.addEventListener('click', function () {
        var aperti = avvisi.querySelectorAll('[role="alert"]');
        for (var i = 0; i < aperti.length; i++) chiudi(aperti[i]);
      }, true);
    });

    // La pagina è pronta e disegnata: l'app può togliere il velo che copre il cambio pagina.
    setTimeout(function () { avvisa('pronta'); }, 60);

    // Quando si apre la fotocamera del sito, le barre dell'app si nascondono.
    prova(function () {
      var scanner = document.getElementById('code-scanner');
      if (!scanner || !window.MutationObserver) return;
      var aggiorna = function () {
        var aperto = !scanner.classList.contains('d-none');
        corpo.classList.toggle('ip-scanner', aperto);
        if (!aperto && window.__ipFuoco) setTimeout(window.__ipFuoco, 200);
      };
      new MutationObserver(aggiorna).observe(scanner, { attributes: true, attributeFilter: ['class', 'style', 'hidden'] });
      aggiorna();
    });
  });
})();
