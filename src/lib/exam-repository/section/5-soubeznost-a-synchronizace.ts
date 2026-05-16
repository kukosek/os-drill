import type { Section } from '../../common/types';

export const section5_soubeznost_a_synchronizace: Section = {
    uuid: "dd722703-4150-4bf8-96fc-751c64b7ee97",
    sectionNumber: "5",
    sectionTitle: "Soub\u011b\u017enost a synchronizace",
    statements: [
      {
        uuid: "86cb48c8-228e-4158-9908-1f94dff1a2d9",
        correct:
          "Text definuje relaci \u201ep\u0159edch\u00e1zen\u00ed\u201c jako kauz\u00e1ln\u00ed n\u00e1vaznost a zav\u00e1d\u00ed graf p\u0159edch\u00e1zen\u00ed jako tranzitivn\u00ed redukci t\u00e9to relace, co\u017e je acyklick\u00fd orientovan\u00fd graf, kde vrcholy reprezentuj\u00ed ud\u00e1losti a hrany reprezentuj\u00ed akce, kter\u00e9 p\u0159\u00edmo spojuj\u00ed chronologicky po sob\u011b jdouc\u00ed ud\u00e1losti bez p\u0159eskakov\u00e1n\u00ed jak\u00fdchkoli mezilehl\u00fdch ud\u00e1lost\u00ed v kauz\u00e1ln\u00edm \u0159et\u011bzci.",
        incorrect:
          "Text definuje relaci \u201ep\u0159edch\u00e1zen\u00ed\u201c jako chronologickou n\u00e1vaznost, ale graf p\u0159edch\u00e1zen\u00ed nen\u00ed tranzitivn\u00ed redukc\u00ed t\u00e9to relace, ale sp\u00ed\u0161e p\u0159\u00edmou reprezentac\u00ed v\u0161ech chronologick\u00fdch z\u00e1vislost\u00ed, co\u017e je acyklick\u00fd orientovan\u00fd graf, kde vrcholy reprezentuj\u00ed ud\u00e1losti a hrany reprezentuj\u00ed akce, kter\u00e9 mohou spojovat chronologicky po sob\u011b jdouc\u00ed ud\u00e1losti i s p\u0159eskakov\u00e1n\u00edm mezilehl\u00fdch ud\u00e1lost\u00ed v kauz\u00e1ln\u00edm \u0159et\u011bzci.",
        sectionNumber: "5.1.1",
        sectionTitle: "Relace p\u0159edch\u00e1zen\u00ed",
      },
      {
        uuid: "a27e13f4-d48b-45cb-be9e-0fea4f89ce14",
        correct:
          "Podle poskytnut\u00fdch pozn\u00e1mek je graf p\u0159edch\u00e1zen\u00ed, reprezentuj\u00edc\u00ed relaci \u201ep\u0159edch\u00e1zen\u00ed\u201c, acyklick\u00fd orientovan\u00fd graf, kde ka\u017ed\u00fd vrchol odpov\u00edd\u00e1 ud\u00e1losti, kter\u00e1 je definov\u00e1na jako pozorovateln\u00fd jev v \u010dase, a ka\u017ed\u00e1 hrana, naz\u00fdvan\u00e1 akce, zna\u010d\u00ed p\u0159\u00edm\u00fd kauz\u00e1ln\u00ed vztah mezi dv\u011bma ud\u00e1lostmi, bez obch\u00e1zen\u00ed jak\u00fdchkoli intervenuj\u00edc\u00edch ud\u00e1lost\u00ed v posloupnosti.",
        incorrect:
          "Podle poskytnut\u00fdch pozn\u00e1mek je graf p\u0159edch\u00e1zen\u00ed, reprezentuj\u00edc\u00ed relaci \u201ep\u0159edch\u00e1zen\u00ed\u201c, cyklick\u00fd orientovan\u00fd graf, kde ka\u017ed\u00fd vrchol odpov\u00edd\u00e1 akci, kter\u00e1 je definov\u00e1na jako pozorovateln\u00fd jev v \u010dase, a ka\u017ed\u00e1 hrana, naz\u00fdvan\u00e1 ud\u00e1lost, zna\u010d\u00ed p\u0159\u00edm\u00fd kauz\u00e1ln\u00ed vztah mezi dv\u011bma akcemi, bez obch\u00e1zen\u00ed jak\u00fdchkoli intervenuj\u00edc\u00edch akc\u00ed v posloupnosti.",
        sectionNumber: "5.1.1",
        sectionTitle: "Relace p\u0159edch\u00e1zen\u00ed",
      },
      {
        uuid: "ca002609-2d0e-46d1-a397-3642dc274f84",
        correct:
          "Podle definice soub\u011b\u017enosti ud\u00e1lost\u00ed v opera\u010dn\u00edch syst\u00e9mech, dv\u011b ud\u00e1losti jsou pova\u017eov\u00e1ny za soub\u011b\u017en\u00e9, pokud mezi nimi neexistuje p\u0159\u00edm\u00e1 kauz\u00e1ln\u00ed souvislost, co\u017e znamen\u00e1, \u017ee nenast\u00e1v\u00e1 situace, kdy jedna ud\u00e1lost mus\u00ed nutn\u011b p\u0159edch\u00e1zet druh\u00e9. V grafov\u00e9m zn\u00e1zorn\u011bn\u00ed ud\u00e1lost\u00ed se soub\u011b\u017enost projevuje absenc\u00ed cesty mezi uzly reprezentuj\u00edc\u00edmi tyto ud\u00e1losti, a proto mohou tyto ud\u00e1losti nastat v libovoln\u00e9m po\u0159ad\u00ed, potenci\u00e1ln\u011b i simult\u00e1nn\u011b na r\u016fzn\u00fdch procesorov\u00fdch j\u00e1drech, ani\u017e by jedna ovliv\u0148ovala nutn\u00fd \u010dasov\u00fd pr\u016fb\u011bh druh\u00e9.",
        incorrect:
          "Soub\u011b\u017en\u00e9 ud\u00e1losti v opera\u010dn\u00edch syst\u00e9mech jsou definov\u00e1ny jako ud\u00e1losti, kter\u00e9 mus\u00ed nastat p\u0159esn\u011b ve stejn\u00e9m okam\u017eiku, aby se mohly pova\u017eovat za skute\u010dn\u011b soub\u011b\u017en\u00e9. Tato definice vy\u017eaduje, aby mezi soub\u011b\u017en\u00fdmi ud\u00e1lostmi existovala siln\u00e1 \u010dasov\u00e1 z\u00e1vislost, kde jedna ud\u00e1lost je spu\u0161t\u011bna v\u00fdhradn\u011b a\u017e po dokon\u010den\u00ed druh\u00e9, a v grafov\u00e9m zn\u00e1zorn\u011bn\u00ed by soub\u011b\u017en\u00e9 ud\u00e1losti byly v\u017edy reprezentov\u00e1ny uzly spojen\u00fdmi p\u0159\u00edmou cestou, indikuj\u00edc\u00ed jejich vz\u00e1jemnou z\u00e1vislost na \u010dasov\u00e9m pr\u016fb\u011bhu.",
        sectionNumber: "5.1.2",
        sectionTitle: "Soub\u011b\u017enost",
      },
      {
        uuid: "a08176ea-e675-4bcc-bfd2-3d0671d84fe9",
        correct:
          "Line\u00e1rn\u00ed uspo\u0159\u00e1d\u00e1n\u00ed ud\u00e1lost\u00ed, kter\u00e9 je kl\u00ed\u010dov\u00e9 pro definici \u010dasov\u00e9ho sledu v opera\u010dn\u00edch syst\u00e9mech, vy\u017eaduje, aby pro jak\u00e9koli dv\u011b ud\u00e1losti, ozna\u010den\u00e9 jako A a B, platilo, \u017ee bu\u010f ud\u00e1lost A nutn\u011b p\u0159edch\u00e1z\u00ed ud\u00e1losti B, nebo naopak ud\u00e1lost B nutn\u011b p\u0159edch\u00e1z\u00ed ud\u00e1losti A, \u010d\u00edm\u017e se vylu\u010duje mo\u017enost, \u017ee by ud\u00e1losti nebyly vz\u00e1jemn\u011b uspo\u0159\u00e1d\u00e1ny v \u010dase.",
        incorrect:
          "Neline\u00e1rn\u00ed uspo\u0159\u00e1d\u00e1n\u00ed ud\u00e1lost\u00ed, kter\u00e9 je kl\u00ed\u010dov\u00e9 pro definici \u010dasov\u00e9ho sledu v opera\u010dn\u00edch syst\u00e9mech, vy\u017eaduje, aby pro jak\u00e9koli dv\u011b ud\u00e1losti, ozna\u010den\u00e9 jako A a B, platilo, \u017ee bu\u010f ud\u00e1lost A nutn\u011b p\u0159edch\u00e1z\u00ed ud\u00e1losti B, nebo naopak ud\u00e1lost B nutn\u011b p\u0159edch\u00e1z\u00ed ud\u00e1losti A, \u010d\u00edm\u017e se vylu\u010duje mo\u017enost, \u017ee by ud\u00e1losti nebyly vz\u00e1jemn\u011b uspo\u0159\u00e1d\u00e1ny v \u010dase.",
        sectionNumber: "5.1.3",
        sectionTitle: "\u010casov\u00fd sled",
      },
      {
        uuid: "d218bbdb-8364-42f0-b939-8e292d2a038a",
        correct:
          "V kontextu opera\u010dn\u00edch syst\u00e9m\u016f a spr\u00e1vy ud\u00e1lost\u00ed je \u010dasov\u00fd sled ud\u00e1lost\u00ed form\u00e1ln\u011b definov\u00e1n jako line\u00e1rn\u00ed uspo\u0159\u00e1d\u00e1n\u00ed, co\u017e znamen\u00e1, \u017ee pro libovoln\u00fd p\u00e1r ud\u00e1lost\u00ed, nap\u0159\u00edklad ud\u00e1losti X a Y, mus\u00ed platit striktn\u00ed podm\u00ednka, \u017ee bu\u010f ud\u00e1lost X p\u0159edch\u00e1z\u00ed ud\u00e1losti Y, nebo ud\u00e1lost Y p\u0159edch\u00e1z\u00ed ud\u00e1losti X, a nem\u016f\u017ee nastat situace, kdy by jejich vz\u00e1jemn\u00fd \u010dasov\u00fd vztah nebyl definov\u00e1n.",
        incorrect:
          "V kontextu opera\u010dn\u00edch syst\u00e9m\u016f a spr\u00e1vy ud\u00e1lost\u00ed je \u010dasov\u00fd sled ud\u00e1lost\u00ed form\u00e1ln\u011b definov\u00e1n jako neline\u00e1rn\u00ed uspo\u0159\u00e1d\u00e1n\u00ed, co\u017e znamen\u00e1, \u017ee pro libovoln\u00fd p\u00e1r ud\u00e1lost\u00ed, nap\u0159\u00edklad ud\u00e1losti X a Y, mus\u00ed platit striktn\u00ed podm\u00ednka, \u017ee bu\u010f ud\u00e1lost X p\u0159edch\u00e1z\u00ed ud\u00e1losti Y, nebo ud\u00e1lost Y p\u0159edch\u00e1z\u00ed ud\u00e1losti X, a nem\u016f\u017ee nastat situace, kdy by jejich vz\u00e1jemn\u00fd \u010dasov\u00fd vztah nebyl definov\u00e1n.",
        sectionNumber: "5.1.3",
        sectionTitle: "\u010casov\u00fd sled",
      },
      {
        uuid: "8529d6ef-3197-4295-ac1d-0c2cde2dac49",
        correct:
          "Pro praktickou implementaci a reprezentaci \u010dasov\u00e9ho sledu ud\u00e1lost\u00ed v opera\u010dn\u00edch syst\u00e9mech se \u010dasto vyu\u017e\u00edv\u00e1 mechanismus p\u0159id\u011blov\u00e1n\u00ed \u010dasov\u00fdch raz\u00edtek, p\u0159i\u010dem\u017e kl\u00ed\u010dov\u00fdm aspektem tohoto p\u0159\u00edstupu je zaji\u0161t\u011bn\u00ed, aby \u017e\u00e1dn\u00e9 dv\u011b ud\u00e1losti nemohly obdr\u017eet identick\u00e9 \u010dasov\u00e9 raz\u00edtko, co\u017e explicitn\u011b zaru\u010duje, \u017ee ka\u017ed\u00e1 ud\u00e1lost je v \u010dasov\u00e9m sledu jednozna\u010dn\u011b identifikovateln\u00e1 a uspo\u0159\u00e1dan\u00e1.",
        incorrect:
          "Pro praktickou implementaci a reprezentaci \u010dasov\u00e9ho sledu ud\u00e1lost\u00ed v opera\u010dn\u00edch syst\u00e9mech se \u010dasto vyu\u017e\u00edv\u00e1 mechanismus p\u0159id\u011blov\u00e1n\u00ed \u010dasov\u00fdch raz\u00edtek, p\u0159i\u010dem\u017e je b\u011b\u017en\u00e9 a \u017e\u00e1douc\u00ed, aby dv\u011b a v\u00edce ud\u00e1lost\u00ed mohly obdr\u017eet identick\u00e9 \u010dasov\u00e9 raz\u00edtko, co\u017e umo\u017e\u0148uje efektivn\u011bj\u0161\u00ed spr\u00e1vu ud\u00e1lost\u00ed v situac\u00edch, kdy je vy\u017eadov\u00e1no soub\u011b\u017en\u00e9 zpracov\u00e1n\u00ed.",
        sectionNumber: "5.1.3",
        sectionTitle: "\u010casov\u00fd sled",
      },
      {
        uuid: "25af9b2d-1989-47c1-b7c3-45b8d84a33f0",
        correct:
          "Relace p\u0159edch\u00e1zen\u00ed je abstrakce v opera\u010dn\u00edch syst\u00e9mech, kter\u00e1 popisuje vn\u011bj\u0161\u00ed chov\u00e1n\u00ed proces\u016f a d\u011bj\u016f, p\u0159i\u010dem\u017e z\u00e1m\u011brn\u011b abstrahuje od detailn\u00edho \u010dasov\u00e9ho uspo\u0159\u00e1d\u00e1n\u00ed intern\u00edch ud\u00e1lost\u00ed. Tato abstrakce se soust\u0159ed\u00ed na definov\u00e1n\u00ed z\u00e1vislost\u00ed mezi ud\u00e1lostmi tak, aby vn\u011bj\u0161\u00ed chov\u00e1n\u00ed syst\u00e9mu bylo pops\u00e1no v\u00fdhradn\u011b na z\u00e1klad\u011b t\u011bchto relac\u00ed, a nikoliv na konkr\u00e9tn\u00edm \u010dasov\u00e9m pr\u016fb\u011bhu, kter\u00fd m\u016f\u017ee b\u00fdt ovlivn\u011bn vn\u011bj\u0161\u00edmi faktory.",
        incorrect:
          "Relace p\u0159edch\u00e1zen\u00ed v opera\u010dn\u00edch syst\u00e9mech se zam\u011b\u0159uje na detailn\u00ed popis vnit\u0159n\u00edho \u010dasov\u00e9ho uspo\u0159\u00e1d\u00e1n\u00ed ud\u00e1lost\u00ed v procesech a d\u011bj\u00edch, s c\u00edlem p\u0159esn\u011b modelovat, jak se ud\u00e1losti odehr\u00e1vaj\u00ed v re\u00e1ln\u00e9m \u010dase, v\u010detn\u011b v\u0161ech prom\u011bnliv\u00fdch vliv\u016f. Tato abstrakce klade d\u016fraz na zachycen\u00ed konkr\u00e9tn\u00edho \u010dasov\u00e9ho rozvr\u017een\u00ed ud\u00e1lost\u00ed, nam\u00edsto pouh\u00e9ho definov\u00e1n\u00ed abstraktn\u00edch z\u00e1vislost\u00ed mezi nimi, a vn\u011bj\u0161\u00ed chov\u00e1n\u00ed syst\u00e9mu je tak p\u0159\u00edmo z\u00e1visl\u00e9 na intern\u00edm \u010dasov\u00e9m pr\u016fb\u011bhu.",
        sectionNumber: "5.1.4",
        sectionTitle: "Hazard soub\u011bhu",
      },
      {
        uuid: "aea8f9e3-098d-4c8a-9341-ccbae2f8b062",
        correct:
          "Hazard soub\u011bhu, v kontextu relace p\u0159edch\u00e1zen\u00ed, nast\u00e1v\u00e1, pokud existuj\u00ed alespo\u0148 dva r\u016fzn\u00e9 \u010dasov\u00e9 sledy ud\u00e1lost\u00ed, kter\u00e9 jsou oba konzistentn\u00ed s definovanou relac\u00ed p\u0159edch\u00e1zen\u00ed, av\u0161ak vedou k odli\u0161n\u00e9mu vn\u011bj\u0161\u00edmu chov\u00e1n\u00ed syst\u00e9mu. Tato situace indikuje poru\u0161en\u00ed abstrakce relace p\u0159edch\u00e1zen\u00ed, proto\u017ee vn\u011bj\u0161\u00ed chov\u00e1n\u00ed syst\u00e9mu by m\u011blo b\u00fdt jednozna\u010dn\u011b ur\u010deno pouze relac\u00ed p\u0159edch\u00e1zen\u00ed, a nem\u011blo by se m\u011bnit v z\u00e1vislosti na konkr\u00e9tn\u00edm \u010dasov\u00e9m pr\u016fb\u011bhu ud\u00e1lost\u00ed.",
        incorrect:
          "Hazard soub\u011bhu v kontextu relace p\u0159edch\u00e1zen\u00ed nast\u00e1v\u00e1 pouze tehdy, kdy\u017e existuje jedin\u00fd \u010dasov\u00fd sled ud\u00e1lost\u00ed, kter\u00fd je v souladu s definovanou relac\u00ed p\u0159edch\u00e1zen\u00ed, a tento sled ud\u00e1lost\u00ed vede k neo\u010dek\u00e1van\u00e9mu vn\u011bj\u0161\u00edmu chov\u00e1n\u00ed syst\u00e9mu. Tato situace indikuje spr\u00e1vnou funkci abstrakce relace p\u0159edch\u00e1zen\u00ed, proto\u017ee vn\u011bj\u0161\u00ed chov\u00e1n\u00ed syst\u00e9mu je deterministicky ur\u010deno jedin\u00fdm mo\u017en\u00fdm \u010dasov\u00fdm pr\u016fb\u011bhem ud\u00e1lost\u00ed, a jak\u00e9koli odchylky jsou pova\u017eov\u00e1ny za chybu v relaci p\u0159edch\u00e1zen\u00ed.",
        sectionNumber: "5.1.4",
        sectionTitle: "Hazard soub\u011bhu",
      },
      {
        uuid: "87391ed8-c29e-4c98-85c2-942e4fff9969",
        correct:
          "V kontextu graf\u016f p\u0159edch\u00e1zen\u00ed v opera\u010dn\u00edch syst\u00e9mech, term\u00edn 'hybatel' ozna\u010duje entitu, kter\u00e1 prov\u00e1d\u00ed akce reprezentovan\u00e9 hranami grafu. Typick\u00fdmi hybateli jsou vl\u00e1kna nebo periferie. Ka\u017ed\u00e9mu hybateli lze p\u0159isoudit 'barvu' hran, co\u017e umo\u017e\u0148uje vizualizovat a rozli\u0161ovat akce prov\u00e1d\u011bn\u00e9 r\u016fzn\u00fdmi hybateli v grafu p\u0159edch\u00e1zen\u00ed.",
        incorrect:
          "V kontextu graf\u016f p\u0159edch\u00e1zen\u00ed v opera\u010dn\u00edch syst\u00e9mech, term\u00edn 'hybatel' ozna\u010duje v\u00fdhradn\u011b proces, kter\u00fd prov\u00e1d\u00ed akce reprezentovan\u00e9 hranami grafu. Periferie a vl\u00e1kna nemohou b\u00fdt pova\u017eov\u00e1ny za hybatele. Barva hran v grafu p\u0159edch\u00e1zen\u00ed je glob\u00e1ln\u00ed a nespecifick\u00e1 pro jednotliv\u00e9 hybatele.",
        sectionNumber: "5.1.5",
        sectionTitle: "Hybatel",
      },
      {
        uuid: "c46c274d-3ddf-4dcc-b13f-7468a683a4b2",
        correct:
          "Podle uveden\u00e9ho p\u0159\u00edkladu s vl\u00e1kny A a B, kter\u00e1 nez\u00e1visle inkrementuj\u00ed sd\u00edlenou prom\u011bnnou V, je z\u0159ejm\u00e9, \u017ee konzistentn\u00ed \u010dasov\u00e9 sledy akc\u00ed mohou zahrnovat prokl\u00e1d\u00e1n\u00ed operac\u00ed obou vl\u00e1ken. Graf p\u0159edch\u00e1zen\u00ed a konzistentn\u00ed \u010dasov\u00e9 sledy ilustruj\u00ed, \u017ee po\u0159ad\u00ed prov\u00e1d\u011bn\u00ed akc\u00ed A1, A2, A3 a B1, B2, B3 nen\u00ed striktn\u011b sekven\u010dn\u00ed a umo\u017e\u0148uje r\u016fzn\u00e9 prokl\u00e1dan\u00e9 sc\u00e9n\u00e1\u0159e.",
        incorrect:
          "Podle uveden\u00e9ho p\u0159\u00edkladu s vl\u00e1kny A a B, kter\u00e1 nez\u00e1visle inkrementuj\u00ed sd\u00edlenou prom\u011bnnou V, graf p\u0159edch\u00e1zen\u00ed a konzistentn\u00ed \u010dasov\u00e9 sledy striktn\u011b vy\u017eaduj\u00ed, aby v\u0161echny akce vl\u00e1kna A (A1, A2, A3) byly provedeny kompletn\u011b p\u0159ed zah\u00e1jen\u00edm jak\u00fdchkoli akc\u00ed vl\u00e1kna B (B1, B2, B3). Prokl\u00e1d\u00e1n\u00ed operac\u00ed mezi vl\u00e1kny A a B nen\u00ed v tomto konkr\u00e9tn\u00edm p\u0159\u00edpad\u011b v souladu s konzistenc\u00ed \u010dasov\u00fdch sled\u016f.",
        sectionNumber: "5.1.5",
        sectionTitle: "Hybatel",
      },
      {
        uuid: "77adcaee-872d-4bd4-b0ac-9f68a8f4b179",
        correct:
          "Akce jsou soub\u011b\u017en\u00e9 pr\u00e1v\u011b tehdy, kdy\u017e jsou soub\u011b\u017en\u00e9 libovoln\u00e9 dv\u011b ud\u00e1losti, kter\u00fdch se tyto akce t\u00fdkaj\u00ed. D\u016fle\u017eit\u00e9 je, \u017ee ud\u00e1lost nem\u016f\u017ee b\u00fdt soub\u011b\u017en\u00e1 sama se sebou, a ani ud\u00e1losti spojen\u00e9 jednou a tou samou akc\u00ed nemohou b\u00fdt soub\u011b\u017en\u00e9, co\u017e vymezuje specifick\u00e9 sc\u00e9n\u00e1\u0159e soub\u011b\u017enosti akc\u00ed.",
        incorrect:
          "Akce jsou soub\u011b\u017en\u00e9 pr\u00e1v\u011b tehdy, kdy\u017e jsou soub\u011b\u017en\u00e9 v\u0161echny ud\u00e1losti, kter\u00fdch se tyto akce t\u00fdkaj\u00ed. Naopak, ud\u00e1lost m\u016f\u017ee b\u00fdt soub\u011b\u017en\u00e1 sama se sebou, a tak\u00e9 ud\u00e1losti spojen\u00e9 jednou a tou samou akc\u00ed mohou b\u00fdt soub\u011b\u017en\u00e9, co\u017e roz\u0161i\u0159uje mo\u017enosti soub\u011b\u017enosti akc\u00ed.",
        sectionNumber: "5.1.6",
        sectionTitle: "Synchronizace",
      },
      {
        uuid: "524df770-95ef-4957-9e1c-595687b95b90",
        correct:
          'Synchronizace akc\u00ed nast\u00e1v\u00e1 ve specifick\u00e9 situaci, kdy se dv\u011b akce sb\u00edhaj\u00ed ve spole\u010dn\u00e9 ud\u00e1losti. V kontextu soub\u011b\u017enosti to implikuje, \u017ee tyto akce, ozna\u010dovan\u00e9 jako synchronizovan\u00e9, mus\u00ed prob\u011bhnout prakticky "najednou", aby mohlo doj\u00edt k dan\u00e9 spole\u010dn\u00e9 ud\u00e1losti, kter\u00e1 je jejich c\u00edlem.',
        incorrect:
          "Synchronizace akc\u00ed nast\u00e1v\u00e1 ve specifick\u00e9 situaci, kdy se dv\u011b akce sb\u00edhaj\u00ed v rozd\u00edln\u00fdch ud\u00e1lostech. V kontextu soub\u011b\u017enosti to implikuje, \u017ee tyto akce, ozna\u010dovan\u00e9 jako synchronizovan\u00e9, mohou prob\u011bhnout v libovoln\u00e9m po\u0159ad\u00ed a \u010dase, bez nutnosti jejich \u010dasov\u00e9 koordinace pro dosa\u017een\u00ed c\u00edlov\u00fdch ud\u00e1lost\u00ed.",
        sectionNumber: "5.1.6",
        sectionTitle: "Synchronizace",
      },
      {
        uuid: "ce514d1f-2184-4c6f-bc3c-c0118a7cf64a",
        correct:
          "V p\u0159\u00edpadech, kdy akce vedou do soub\u011b\u017en\u00fdch ud\u00e1lost\u00ed a jsou ozna\u010deny jako nez\u00e1visl\u00e9, je kl\u00ed\u010dov\u00e9, \u017ee tyto akce mohou prob\u011bhnout v absolutn\u011b libovoln\u00e9m po\u0159ad\u00ed. Tato volnost v uspo\u0159\u00e1d\u00e1n\u00ed proveden\u00ed je d\u00e1na charakterem nez\u00e1visl\u00fdch ud\u00e1lost\u00ed, kter\u00e9 se navz\u00e1jem neovliv\u0148uj\u00ed a nemaj\u00ed mezi sebou \u017e\u00e1dnou vazbu.",
        incorrect:
          "V p\u0159\u00edpadech, kdy akce vedou do soub\u011b\u017en\u00fdch ud\u00e1lost\u00ed a jsou ozna\u010deny jako nez\u00e1visl\u00e9, je kl\u00ed\u010dov\u00e9, \u017ee tyto akce mus\u00ed prob\u011bhnout v p\u0159esn\u011b definovan\u00e9m po\u0159ad\u00ed. Tato nutnost striktn\u00edho uspo\u0159\u00e1d\u00e1n\u00ed proveden\u00ed je d\u00e1na charakterem nez\u00e1visl\u00fdch ud\u00e1lost\u00ed, kter\u00e9 se navz\u00e1jem ovliv\u0148uj\u00ed a vy\u017eaduj\u00ed specifickou sekvenci.",
        sectionNumber: "5.1.6",
        sectionTitle: "Synchronizace",
      },
      {
        uuid: "e3a0985d-610f-4c72-add6-8d6a681f3186",
        correct:
          "Definice soub\u011b\u017en\u00fdch sled\u016f akc\u00ed se roz\u0161i\u0159uje na situace, kdy sledy nesd\u00edl\u00ed \u017e\u00e1dnou ud\u00e1lost, s jedinou v\u00fdjimkou, kdy mohou sd\u00edlet po\u010d\u00e1te\u010dn\u00ed a nebo koncovou ud\u00e1lost. Tato v\u00fdjimka umo\u017e\u0148uje modelovat sc\u00e9n\u00e1\u0159e, kde se sledy mohou setk\u00e1vat na za\u010d\u00e1tku nebo na konci, ale jinak prob\u00edhaj\u00ed zcela odd\u011blen\u011b.",
        incorrect:
          "Definice soub\u011b\u017en\u00fdch sled\u016f akc\u00ed se roz\u0161i\u0159uje na situace, kdy sledy sd\u00edl\u00ed alespo\u0148 jednu ud\u00e1lost, a to povinn\u011b v\u010detn\u011b po\u010d\u00e1te\u010dn\u00ed a koncov\u00e9 ud\u00e1losti. Tato nutnost sd\u00edlen\u00ed ud\u00e1lost\u00ed zaji\u0161\u0165uje, \u017ee sledy jsou vz\u00e1jemn\u011b prov\u00e1zan\u00e9 a jejich pr\u016fb\u011bh je synchronizov\u00e1n skrze spole\u010dn\u00e9 ud\u00e1losti, kter\u00e9 je propojuj\u00ed.",
        sectionNumber: "5.1.6",
        sectionTitle: "Synchronizace",
      },
      {
        uuid: "c51a9fc9-226c-4804-aef6-6a1ed9d4f4f1",
        correct:
          "Akce v kontextu opera\u010dn\u00edch syst\u00e9m\u016f slou\u017e\u00ed k propojen\u00ed ud\u00e1lost\u00ed a stav\u016f, p\u0159i\u010dem\u017e v\u00fdpo\u010det lze ch\u00e1pat jako posloupnost stav\u016f, kde p\u0159echody mezi nimi jsou realizov\u00e1ny pr\u00e1v\u011b prost\u0159ednictv\u00edm akc\u00ed, co\u017e umo\u017e\u0148uje modelovat dynamick\u00e9 chov\u00e1n\u00ed syst\u00e9mu a jeho reakce na vn\u011bj\u0161\u00ed podn\u011bty.",
        incorrect:
          "Akce v kontextu opera\u010dn\u00edch syst\u00e9m\u016f jsou zcela nez\u00e1visl\u00e9 na stavech a ud\u00e1lostech, a v\u00fdpo\u010det lze ch\u00e1pat jako statickou mno\u017einu stav\u016f bez nutnosti akc\u00ed, co\u017e zjednodu\u0161uje modelov\u00e1n\u00ed syst\u00e9mu, ale neumo\u017e\u0148uje zachytit dynamick\u00e9 chov\u00e1n\u00ed a interakci s vn\u011bj\u0161\u00edm prost\u0159ed\u00edm.",
        sectionNumber: "5.1.7",
        sectionTitle: "Stavov\u00fd prostor",
      },
      {
        uuid: "b880fdef-3d7e-453e-b5df-fb15697a23d4",
        correct:
          "Stavov\u00fd prostor opera\u010dn\u00edho syst\u00e9mu je reprezentov\u00e1n orientovan\u00fdm grafem, kde vrcholy grafu p\u0159edstavuj\u00ed jednotliv\u00e9 stavy syst\u00e9mu, definovan\u00e9 hodnotami registr\u016f procesoru a obsahem pam\u011bti, a hrany grafu reprezentuj\u00ed akce, kter\u00e9 zp\u016fsobuj\u00ed p\u0159echody mezi t\u011bmito stavy, \u010d\u00edm\u017e se modeluje dynamika syst\u00e9mu.",
        incorrect:
          "Stavov\u00fd prostor opera\u010dn\u00edho syst\u00e9mu je line\u00e1rn\u00ed posloupnost stav\u016f, kde ka\u017ed\u00fd stav je n\u00e1sledov\u00e1n pouze jedn\u00edm dal\u0161\u00edm stavem, a akce jsou reprezentov\u00e1ny jako atributy stav\u016f, nikoli jako p\u0159echody mezi nimi, co\u017e zjednodu\u0161uje anal\u00fdzu, ale neodpov\u00edd\u00e1 komplexn\u00ed realit\u011b opera\u010dn\u00edho syst\u00e9mu.",
        sectionNumber: "5.1.7",
        sectionTitle: "Stavov\u00fd prostor",
      },
      {
        uuid: "02ab86a6-7913-4b09-856c-4501b80c1d24",
        correct:
          "Vstupn\u00ed periferie opera\u010dn\u00edho syst\u00e9mu, jako nap\u0159\u00edklad hodiny re\u00e1ln\u00e9ho \u010dasu, m\u011bn\u00ed sv\u016fj stav autonomn\u011b a nez\u00e1visle na \u0159\u00edzen\u00ed opera\u010dn\u00edho syst\u00e9mu, co\u017e znamen\u00e1, \u017ee opera\u010dn\u00ed syst\u00e9m mus\u00ed b\u00fdt schopen asynchronn\u011b reagovat na zm\u011bny stavu t\u011bchto periferi\u00ed a zpracov\u00e1vat ud\u00e1losti iniciovan\u00e9 vn\u011bj\u0161\u00edm sv\u011btem.",
        incorrect:
          "Vstupn\u00ed periferie opera\u010dn\u00edho syst\u00e9mu, jako nap\u0159\u00edklad hodiny re\u00e1ln\u00e9ho \u010dasu, jsou pln\u011b \u0159\u00edzeny opera\u010dn\u00edm syst\u00e9mem a jejich stav se m\u011bn\u00ed pouze na z\u00e1klad\u011b instrukc\u00ed opera\u010dn\u00edho syst\u00e9mu, co\u017e zaji\u0161\u0165uje synchronizaci a p\u0159edv\u00eddatelnost chov\u00e1n\u00ed syst\u00e9mu, ale omezuje schopnost reagovat na vn\u011bj\u0161\u00ed ud\u00e1losti asynchronn\u011b.",
        sectionNumber: "5.1.7",
        sectionTitle: "Stavov\u00fd prostor",
      },
      {
        uuid: "f8045bba-6811-4e37-ba1d-870b39e76782",
        correct:
          "B\u011bh, v kontextu stavov\u00e9ho prostoru opera\u010dn\u00edho syst\u00e9mu, je definov\u00e1n jako orientovan\u00e1 cesta. Tato cesta p\u0159edstavuje posloupnost stav\u016f, kter\u00fdmi syst\u00e9m proch\u00e1z\u00ed, p\u0159i\u010dem\u017e ka\u017ed\u00fd p\u0159echod mezi stavy je vyvol\u00e1n specifickou akc\u00ed. B\u011bh \u00fazce koresponduje s \u010dasov\u00fdm sledem ud\u00e1lost\u00ed, kde posloupnost ud\u00e1lost\u00ed je propojena akcemi v \u010dase.",
        incorrect:
          "B\u011bh, v kontextu stavov\u00e9ho prostoru opera\u010dn\u00edho syst\u00e9mu, je definov\u00e1n jako neorientovan\u00e1 cesta. Tato cesta nep\u0159edstavuje posloupnost stav\u016f, kter\u00fdmi syst\u00e9m proch\u00e1z\u00ed, p\u0159i\u010dem\u017e p\u0159echody mezi stavy nejsou vyvol\u00e1ny specifick\u00fdmi akcemi. B\u011bh nekoresponduje s \u010dasov\u00fdm sledem ud\u00e1lost\u00ed, kde posloupnost ud\u00e1lost\u00ed nen\u00ed propojena akcemi v \u010dase.",
        sectionNumber: "5.1.8",
        sectionTitle: "B\u011bh",
      },
      {
        uuid: "a3fb728e-ba11-4141-ad20-09597ce90ab2",
        correct:
          "V opera\u010dn\u00edch syst\u00e9mech m\u016f\u017eeme sekvenci akc\u00ed interpretovat dvoj\u00edm zp\u016fsobem: bu\u010f jako b\u011bh, zd\u016fraz\u0148uj\u00edc\u00ed posloupnost stav\u016f a p\u0159echod\u016f mezi nimi, nebo jako sled, kladouc\u00ed d\u016fraz na \u010dasovou posloupnost ud\u00e1lost\u00ed. V obou interpretac\u00edch, pro jednozna\u010dn\u00e9 ur\u010den\u00ed konkr\u00e9tn\u00edho b\u011bhu nebo sledu, je nezbytn\u00e9 definovat po\u010d\u00e1te\u010dn\u00ed stav syst\u00e9mu nebo po\u010d\u00e1te\u010dn\u00ed ud\u00e1lost, od kter\u00e9 se odv\u00edj\u00ed cel\u00e1 sekvence.",
        incorrect:
          "V opera\u010dn\u00edch syst\u00e9mech m\u016f\u017eeme sekvenci akc\u00ed interpretovat pouze jedn\u00edm zp\u016fsobem: bu\u010f jako b\u011bh, zd\u016fraz\u0148uj\u00edc\u00ed posloupnost stav\u016f, nebo jako sled, kladouc\u00ed d\u016fraz na \u010dasovou posloupnost ud\u00e1lost\u00ed. Pro ur\u010den\u00ed konkr\u00e9tn\u00edho b\u011bhu nebo sledu, nen\u00ed nezbytn\u00e9 definovat po\u010d\u00e1te\u010dn\u00ed stav syst\u00e9mu nebo po\u010d\u00e1te\u010dn\u00ed ud\u00e1lost, proto\u017ee sekvence akc\u00ed je sama o sob\u011b dostate\u010dn\u00e1 pro jednozna\u010dn\u00e9 ur\u010den\u00ed.",
        sectionNumber: "5.1.8",
        sectionTitle: "B\u011bh",
      },
      {
        uuid: "2d40376c-f0ce-4419-8e05-6d1459d9259b",
        correct:
          "P\u0159\u00edklad soub\u011b\u017en\u00e9ho syst\u00e9mu s vl\u00e1kny A a B, kter\u00e1 p\u0159istupuj\u00ed ke sd\u00edlen\u00e9 prom\u011bnn\u00e9 V, demonstruje, \u017ee r\u016fzn\u00e9 po\u0159ad\u00ed prov\u00e1d\u011bn\u00ed instrukc\u00ed (r\u016fzn\u00e9 b\u011bhy) mohou v\u00e9st k odli\u0161n\u00fdm v\u00fdsledn\u00fdm stav\u016fm syst\u00e9mu. Tato variabilita ve v\u00fdsledc\u00edch zd\u016fraz\u0148uje slo\u017eitost stavov\u00e9ho prostoru a potenci\u00e1ln\u00ed probl\u00e9my spojen\u00e9 se soub\u011b\u017en\u00fdm p\u0159\u00edstupem ke sd\u00edlen\u00fdm zdroj\u016fm v opera\u010dn\u00edch syst\u00e9mech.",
        incorrect:
          "P\u0159\u00edklad soub\u011b\u017en\u00e9ho syst\u00e9mu s vl\u00e1kny A a B, kter\u00e1 p\u0159istupuj\u00ed ke sd\u00edlen\u00e9 prom\u011bnn\u00e9 V, demonstruje, \u017ee r\u016fzn\u00e9 po\u0159ad\u00ed prov\u00e1d\u011bn\u00ed instrukc\u00ed (r\u016fzn\u00e9 b\u011bhy) v\u017edy vedou ke stejn\u00e9mu v\u00fdsledn\u00e9mu stavu syst\u00e9mu. Tato konzistence ve v\u00fdsledc\u00edch zd\u016fraz\u0148uje jednoduchost stavov\u00e9ho prostoru a absenci probl\u00e9m\u016f spojen\u00fdch se soub\u011b\u017en\u00fdm p\u0159\u00edstupem ke sd\u00edlen\u00fdm zdroj\u016fm v opera\u010dn\u00edch syst\u00e9mech.",
        sectionNumber: "5.1.8",
        sectionTitle: "B\u011bh",
      },
      {
        uuid: "5a6d2364-dce2-4a37-926d-576596dca310",
        correct:
          "V situac\u00edch, kdy hodnota ulo\u017een\u00e1 na ur\u010dit\u00e9 pam\u011b\u0165ov\u00e9 adrese, nap\u0159\u00edklad adrese sd\u00edlen\u00e9 prom\u011bnn\u00e9 V, m\u00e1 p\u0159\u00edm\u00fd dopad na vn\u011bj\u0161\u00ed chov\u00e1n\u00ed syst\u00e9mu, mohou r\u016fzn\u00e9 b\u011bhy s odli\u0161n\u00fdmi v\u00fdsledn\u00fdmi stavy indikovat existenci hazardu soub\u011bhu. Tento hazard vznik\u00e1, kdy\u017e nekontrolovan\u00fd soub\u011b\u017en\u00fd p\u0159\u00edstup ke sd\u00edlen\u00fdm zdroj\u016fm vede k nep\u0159edv\u00eddateln\u00fdm a ne\u017e\u00e1douc\u00edm v\u00fdsledk\u016fm v chov\u00e1n\u00ed syst\u00e9mu.",
        incorrect:
          "V situac\u00edch, kdy hodnota ulo\u017een\u00e1 na ur\u010dit\u00e9 pam\u011b\u0165ov\u00e9 adrese, nap\u0159\u00edklad adrese sd\u00edlen\u00e9 prom\u011bnn\u00e9 V, m\u00e1 p\u0159\u00edm\u00fd dopad na vn\u011bj\u0161\u00ed chov\u00e1n\u00ed syst\u00e9mu, r\u016fzn\u00e9 b\u011bhy s odli\u0161n\u00fdmi v\u00fdsledn\u00fdmi stavy nikdy nemohou indikovat existenci hazardu soub\u011bhu. Hazard soub\u011bhu vznik\u00e1 pouze v situac\u00edch, kdy soub\u011b\u017en\u00fd p\u0159\u00edstup ke sd\u00edlen\u00fdm zdroj\u016fm je \u0159\u00edzen opera\u010dn\u00edm syst\u00e9mem a vede k p\u0159edv\u00eddateln\u00fdm a \u017e\u00e1douc\u00edm v\u00fdsledk\u016fm v chov\u00e1n\u00ed syst\u00e9mu.",
        sectionNumber: "5.1.8",
        sectionTitle: "B\u011bh",
      },
      {
        uuid: "24f293e3-35e8-4e22-8aa3-1d540f92b19d",
        correct:
          "Kritick\u00e1 sekce b\u011bhu R v\u016f\u010di b\u011bhu S nast\u00e1v\u00e1 tehdy, kdy\u017e vlo\u017een\u00ed b\u011bhu S do b\u011bhu R zp\u016fsob\u00ed chybu, i kdy\u017e samotn\u00e9 b\u011bhy R a S chybu nezp\u016fsobuj\u00ed. Tato chyba se \u010dasto ozna\u010duje jako chyba atomicity a je specifick\u00fdm p\u0159\u00edpadem hazardu soub\u011bhu, kde ne\u017e\u00e1douc\u00ed uspo\u0159\u00e1d\u00e1n\u00ed soub\u011b\u017en\u00fdch akc\u00ed vede k chybov\u00e9 ud\u00e1losti, i kdy\u017e jednotliv\u00e9 akce samy o sob\u011b jsou korektn\u00ed.",
        incorrect:
          "Kritick\u00e1 sekce b\u011bhu R v\u016f\u010di b\u011bhu S nast\u00e1v\u00e1 tehdy, kdy\u017e proveden\u00ed b\u011bhu S p\u0159ed nebo po b\u011bhu R zp\u016fsob\u00ed chybu. Chyba kritick\u00e9 sekce se ozna\u010duje jako chyba soub\u011bhu a nen\u00ed specifick\u00fdm p\u0159\u00edpadem hazardu soub\u011bhu, ale obecn\u00fdm probl\u00e9mem paraleln\u00edho programov\u00e1n\u00ed, kde jak\u00e9koliv soub\u011b\u017en\u00e9 akce mohou v\u00e9st k chyb\u00e1m, bez ohledu na jejich vz\u00e1jemn\u00e9 uspo\u0159\u00e1d\u00e1n\u00ed.",
        sectionNumber: "5.2.1",
        sectionTitle: "Kritick\u00e1 sekce",
      },
      {
        uuid: "7ce3737c-243d-4209-9809-1bfa9d959d5e",
        correct:
          "V kontextu kritick\u00fdch sekc\u00ed, chyba atomicity typicky znamen\u00e1, \u017ee neo\u010dek\u00e1van\u00e9 prolo\u017een\u00ed operac\u00ed z r\u016fzn\u00fdch soub\u011b\u017en\u00fdch b\u011bh\u016f vede k nekonzistentn\u00edmu stavu syst\u00e9mu. Nap\u0159\u00edklad, v klasick\u00e9m p\u0159\u00edkladu p\u0159evodu pen\u011bz mezi \u00fa\u010dty, m\u016f\u017ee doj\u00edt ke zdvojen\u00ed nebo ztr\u00e1t\u011b pen\u011bz, pokud operace v\u00fdb\u011bru a vkladu nejsou atomick\u00e9 a jsou prolo\u017eeny operacemi jin\u00e9ho b\u011bhu.",
        incorrect:
          "V kontextu kritick\u00fdch sekc\u00ed, chyba atomicity obvykle znamen\u00e1, \u017ee jak\u00e1koliv chyba v k\u00f3du jednoho z b\u011bh\u016f vede k selh\u00e1n\u00ed cel\u00e9ho syst\u00e9mu. Nap\u0159\u00edklad, pokud jeden b\u011bh obsahuje chybu d\u011blen\u00ed nulou, syst\u00e9m automaticky detekuje kritickou sekci a zastav\u00ed v\u0161echny soub\u011b\u017en\u00e9 b\u011bhy, aby se zabr\u00e1nilo dal\u0161\u00edm probl\u00e9m\u016fm, i kdy\u017e prolo\u017een\u00ed b\u011bh\u016f nen\u00ed p\u0159\u00ed\u010dinou chyby.",
        sectionNumber: "5.2.1",
        sectionTitle: "Kritick\u00e1 sekce",
      },
      {
        uuid: "f8d09a65-3450-47d2-9a69-316ec38aa928",
        correct:
          "Z textu je patrn\u00e9, \u017ee symetrie kritick\u00fdch sekc\u00ed nen\u00ed nutn\u00e1, co\u017e znamen\u00e1, \u017ee b\u011bh B m\u016f\u017ee b\u00fdt kritickou sekc\u00ed v\u016f\u010di b\u011bhu A, ani\u017e by b\u011bh A byl kritickou sekc\u00ed v\u016f\u010di b\u011bhu B.  Tato asymetrie se projevuje nap\u0159\u00edklad v situac\u00edch, kdy jeden b\u011bh prov\u00e1d\u00ed operace, kter\u00e9 jsou citliv\u00e9 na p\u0159eru\u0161en\u00ed jin\u00fdm b\u011bhem, zat\u00edmco operace druh\u00e9ho b\u011bhu nejsou ovlivn\u011bny p\u0159eru\u0161en\u00edm prvn\u00edm b\u011bhem.",
        incorrect:
          "Z textu je patrn\u00e9, \u017ee kritick\u00e9 sekce jsou v\u017edy symetrick\u00e9, co\u017e znamen\u00e1, \u017ee pokud je b\u011bh B kritickou sekc\u00ed v\u016f\u010di b\u011bhu A, pak je nutn\u011b i b\u011bh A kritickou sekc\u00ed v\u016f\u010di b\u011bhu B. Tato symetrie je z\u00e1kladn\u00edm p\u0159edpokladem pro spr\u00e1vnou synchronizaci soub\u011b\u017en\u00fdch b\u011bh\u016f a zaji\u0161\u0165uje, \u017ee \u017e\u00e1dn\u00fd b\u011bh nem\u016f\u017ee ne\u00famysln\u011b naru\u0161it atomicitu jin\u00e9ho b\u011bhu.",
        sectionNumber: "5.2.1",
        sectionTitle: "Kritick\u00e1 sekce",
      },
      {
        uuid: "05005e4f-9c7f-4f49-b649-4d4f26fe93e6",
        correct:
          "Probl\u00e9m \u010dten\u00e1\u0159\u016f a p\u00edsa\u0159\u016f nast\u00e1v\u00e1 v situac\u00edch, kdy v\u00edce vl\u00e1ken sd\u00edl\u00ed spole\u010dn\u00fd zdroj dat, p\u0159i\u010dem\u017e n\u011bkter\u00e1 vl\u00e1kna (\u010dten\u00e1\u0159i) data pouze \u010dtou a jin\u00e1 vl\u00e1kna (p\u00edsa\u0159i) data modifikuj\u00ed, a to asymetricky, kdy \u010dten\u00e1\u0159i si vz\u00e1jemn\u011b nekonkuruj\u00ed, ale oba typy vl\u00e1ken konkuruj\u00ed p\u00edsa\u0159\u016fm, a p\u00edsa\u0159i konkuruj\u00ed i sob\u011b navz\u00e1jem.",
        incorrect:
          "Probl\u00e9m \u010dten\u00e1\u0159\u016f a p\u00edsa\u0159\u016f nast\u00e1v\u00e1 v situac\u00edch, kdy v\u00edce vl\u00e1ken sd\u00edl\u00ed spole\u010dn\u00fd zdroj dat, p\u0159i\u010dem\u017e v\u0161echna vl\u00e1kna (\u010dten\u00e1\u0159i i p\u00edsa\u0159i) data pouze \u010dtou a \u017e\u00e1dn\u00e1 vl\u00e1kna data nemodifikuj\u00ed, a to symetricky, kdy v\u0161echna vl\u00e1kna si vz\u00e1jemn\u011b konkuruj\u00ed a mus\u00ed se navz\u00e1jem vylu\u010dovat p\u0159i p\u0159\u00edstupu ke sd\u00edlen\u00e9mu zdroji dat.",
        sectionNumber: "5.2.2",
        sectionTitle: "\u010cten\u00e1\u0159i a p\u00edsa\u0159i",
      },
      {
        uuid: "4e22849b-b825-450b-8465-a1fd0b118b2c",
        correct:
          "V probl\u00e9mu \u010dten\u00e1\u0159\u016f a p\u00edsa\u0159\u016f je kl\u00ed\u010dov\u00e9, \u017ee \u010dten\u00e1\u0159i si vz\u00e1jemn\u011b nep\u0159edstavuj\u00ed kritickou sekci, co\u017e znamen\u00e1, \u017ee v\u00edce \u010dten\u00e1\u0159\u016f m\u016f\u017ee p\u0159istupovat ke sd\u00edlen\u00fdm dat\u016fm sou\u010dasn\u011b bez rizika nekonzistence dat, zat\u00edmco p\u00edsa\u0159i a \u010dten\u00e1\u0159i s p\u00edsa\u0159i si kritickou sekci p\u0159edstavuj\u00ed a mus\u00ed se navz\u00e1jem vylu\u010dovat.",
        incorrect:
          "V probl\u00e9mu \u010dten\u00e1\u0159\u016f a p\u00edsa\u0159\u016f je kl\u00ed\u010dov\u00e9, \u017ee \u010dten\u00e1\u0159i si vz\u00e1jemn\u011b p\u0159edstavuj\u00ed kritickou sekci, co\u017e znamen\u00e1, \u017ee pouze jeden \u010dten\u00e1\u0159 m\u016f\u017ee p\u0159istupovat ke sd\u00edlen\u00fdm dat\u016fm v dan\u00e9m okam\u017eiku, aby se p\u0159ede\u0161lo riziku nekonzistence dat, podobn\u011b jako u p\u00edsa\u0159\u016f, kte\u0159\u00ed si tak\u00e9 vz\u00e1jemn\u011b p\u0159edstavuj\u00ed kritickou sekci a mus\u00ed se navz\u00e1jem vylu\u010dovat.",
        sectionNumber: "5.2.2",
        sectionTitle: "\u010cten\u00e1\u0159i a p\u00edsa\u0159i",
      },
      {
        uuid: "b90d5fb4-b858-49f3-a749-48a4ea1b109d",
        correct:
          "Nejjednodu\u0161\u0161\u00ed, av\u0161ak neefektivn\u00ed \u0159e\u0161en\u00ed probl\u00e9mu \u010dten\u00e1\u0159\u016f a p\u00edsa\u0159\u016f spo\u010d\u00edv\u00e1 v zaveden\u00ed symetrick\u00e9ho chov\u00e1n\u00ed ke kritick\u00fdm sekc\u00edm, kdy se i \u010dten\u00e1\u0159i chovaj\u00ed tak, jako by si vz\u00e1jemn\u011b byli kritickou sekc\u00ed, \u010d\u00edm\u017e se zabr\u00e1n\u00ed soub\u011b\u017en\u00e9mu \u010dten\u00ed, a\u010dkoliv to nen\u00ed nutn\u00e9 a omezuje to potenci\u00e1ln\u00ed paralelizmus operac\u00ed \u010dten\u00ed.",
        incorrect:
          "Nejefektivn\u011bj\u0161\u00ed a z\u00e1rove\u0148 nejjednodu\u0161\u0161\u00ed \u0159e\u0161en\u00ed probl\u00e9mu \u010dten\u00e1\u0159\u016f a p\u00edsa\u0159\u016f spo\u010d\u00edv\u00e1 v zaveden\u00ed symetrick\u00e9ho chov\u00e1n\u00ed ke kritick\u00fdm sekc\u00edm, kdy se i \u010dten\u00e1\u0159i chovaj\u00ed tak, jako by si vz\u00e1jemn\u011b byli kritickou sekc\u00ed, \u010d\u00edm\u017e se pln\u011b vyu\u017eije potenci\u00e1ln\u00ed paralelizmus operac\u00ed \u010dten\u00ed a maximalizuje se propustnost syst\u00e9mu.",
        sectionNumber: "5.2.2",
        sectionTitle: "\u010cten\u00e1\u0159i a p\u00edsa\u0159i",
      },
      {
        uuid: "199d2c20-3002-43d4-9f6a-d668f5c40643",
        correct:
          "V situaci soub\u011b\u017en\u00e9ho p\u0159\u00edstupu \u010dten\u00e1\u0159\u016f a p\u00edsa\u0159\u016f ke sd\u00edlen\u00fdm dat\u016fm, m\u016f\u017ee doj\u00edt k hladov\u011bn\u00ed p\u00edsa\u0159\u016f, pokud je neust\u00e1le aktivn\u00ed alespo\u0148 jeden \u010dten\u00e1\u0159. V naivn\u00edm \u0159e\u0161en\u00ed probl\u00e9mu \u010dten\u00e1\u0159\u016f a p\u00edsa\u0159\u016f, kdy \u010dten\u00e1\u0159i maj\u00ed p\u0159ednost, m\u016f\u017ee neust\u00e1l\u00fd p\u0159\u00edchod nov\u00fdch \u010dten\u00e1\u0159\u016f zp\u016fsobit, \u017ee p\u00edsa\u0159i budou trvale blokov\u00e1ni a \u010dekaj\u00ed na uvoln\u011bn\u00ed sekce pro \u010dten\u00ed, \u010d\u00edm\u017e jim bude znemo\u017en\u011bn p\u0159\u00edstup ke sd\u00edlen\u00e9mu prost\u0159edku.",
        incorrect:
          "V situaci soub\u011b\u017en\u00e9ho p\u0159\u00edstupu \u010dten\u00e1\u0159\u016f a p\u00edsa\u0159\u016f ke sd\u00edlen\u00fdm dat\u016fm, k hladov\u011bn\u00ed p\u00edsa\u0159\u016f doj\u00edt nem\u016f\u017ee, i kdy\u017e je neust\u00e1le aktivn\u00ed alespo\u0148 jeden \u010dten\u00e1\u0159. Modern\u00ed opera\u010dn\u00ed syst\u00e9my a sofistikovan\u00e9 synchroniza\u010dn\u00ed mechanismy zaji\u0161\u0165uj\u00ed, \u017ee p\u00edsa\u0159i nebudou nikdy trvale blokov\u00e1ni \u010dten\u00e1\u0159i, a proto je hladov\u011bn\u00ed v probl\u00e9mu \u010dten\u00e1\u0159\u016f a p\u00edsa\u0159\u016f v podstat\u011b nemo\u017en\u00e9, a to i v naivn\u00edch implementac\u00edch.",
        sectionNumber: "5.2.3",
        sectionTitle: "Hladov\u011bn\u00ed",
      },
      {
        uuid: "f59b34d3-3262-41fc-82f3-285e91681d0e",
        correct:
          "Hladov\u011bn\u00ed v kontextu opera\u010dn\u00edch syst\u00e9m\u016f ozna\u010duje situaci, kdy vl\u00e1kno nem\u016f\u017ee trvale pokra\u010dovat ve sv\u00e9m v\u00fdpo\u010dtu, ani\u017e by nutn\u011b do\u0161lo k uv\u00e1znut\u00ed. Tento stav je \u010dasto zp\u016fsoben nevhodnou synchronizac\u00ed, kter\u00e1, paradoxn\u011b, m\u00e1 chr\u00e1nit p\u0159ed probl\u00e9my soub\u011b\u017en\u00e9ho p\u0159\u00edstupu. Hladov\u011bn\u00ed se projevuje tak, \u017ee vl\u00e1kno je neust\u00e1le odsouv\u00e1no stranou a nedost\u00e1v\u00e1 p\u0159id\u011blen\u00fd procesorov\u00fd \u010das pot\u0159ebn\u00fd k dokon\u010den\u00ed sv\u00e9 pr\u00e1ce.",
        incorrect:
          "Hladov\u011bn\u00ed v kontextu opera\u010dn\u00edch syst\u00e9m\u016f je situace, kdy vl\u00e1kno do\u010dasn\u011b nem\u016f\u017ee pokra\u010dovat ve sv\u00e9m v\u00fdpo\u010dtu, ale v\u017edy se jedn\u00e1 o p\u0159echodn\u00fd stav, kter\u00fd je snadno \u0159e\u0161iteln\u00fd p\u0159id\u00e1n\u00edm sofistikovan\u011bj\u0161\u00edch synchroniza\u010dn\u00edch mechanism\u016f. Hladov\u011bn\u00ed je prim\u00e1rn\u011b zp\u016fsobeno nedostatkem syst\u00e9mov\u00fdch prost\u0159edk\u016f a nem\u00e1 nic spole\u010dn\u00e9ho s probl\u00e9my v n\u00e1vrhu synchronizace, kter\u00e1 naopak v\u017edy hladov\u011bn\u00ed efektivn\u011b p\u0159edch\u00e1z\u00ed.",
        sectionNumber: "5.2.3",
        sectionTitle: "Hladov\u011bn\u00ed",
      },
      {
        uuid: "46e2dc8e-717d-4fd3-8aec-fad85d937e02",
        correct:
          "Uv\u00e1znut\u00ed, neboli deadlock, je v syst\u00e9mech s v\u00edce vl\u00e1kny b\u011b\u017enou p\u0159\u00ed\u010dinou hladov\u011bn\u00ed. Uv\u00e1znut\u00ed nast\u00e1v\u00e1, kdy\u017e se vl\u00e1kna zablokuj\u00ed vz\u00e1jemn\u011b \u010dek\u00e1n\u00edm na zdroje, kter\u00e9 dr\u017e\u00ed jin\u00e1 vl\u00e1kna v kruhu \u010dek\u00e1n\u00ed. V d\u016fsledku toho se \u017e\u00e1dn\u00e9 z uv\u00e1znut\u00fdch vl\u00e1ken nem\u016f\u017ee pohnout d\u00e1l, co\u017e p\u0159edstavuje specifick\u00fd a z\u00e1va\u017en\u00fd p\u0159\u00edpad hladov\u011bn\u00ed, kdy cel\u00fd syst\u00e9m nebo jeho \u010d\u00e1st p\u0159estane reagovat a efektivn\u011b vykon\u00e1vat u\u017eite\u010dnou pr\u00e1ci.",
        incorrect:
          "Uv\u00e1znut\u00ed, neboli deadlock, a hladov\u011bn\u00ed jsou dv\u011b naprosto odli\u0161n\u00e9 a nesouvisej\u00edc\u00ed situace v opera\u010dn\u00edch syst\u00e9mech. Uv\u00e1znut\u00ed se t\u00fdk\u00e1 pouze stavu, kdy program nem\u016f\u017ee pokra\u010dovat kv\u016fli chyb\u011b v k\u00f3du, zat\u00edmco hladov\u011bn\u00ed je zp\u016fsobeno v\u00fdhradn\u011b nedostatkem hardwarov\u00fdch prost\u0159edk\u016f a nem\u00e1 \u017e\u00e1dnou souvislost s uv\u00e1znut\u00edm. Proto uv\u00e1znut\u00ed nem\u016f\u017ee b\u00fdt nikdy pova\u017eov\u00e1no za p\u0159\u00ed\u010dinu hladov\u011bn\u00ed v \u017e\u00e1dn\u00e9m p\u0159\u00edpad\u011b.",
        sectionNumber: "5.2.3",
        sectionTitle: "Hladov\u011bn\u00ed",
      },
      {
        uuid: "95104b92-7762-4cf8-9303-e8d00d477605",
        correct:
          "Datov\u00e1 z\u00e1vislost v soub\u011b\u017en\u00fdch syst\u00e9mech vznik\u00e1, kdy\u017e akce Z \u010dte z pam\u011b\u0165ov\u00e9 bu\u0148ky nebo registru, do kter\u00e9ho naposledy zapisovala akce X. Tento typ z\u00e1vislosti m\u016f\u017ee v\u00e9st k chyb\u00e1m po\u0159ad\u00ed, pokud soub\u011b\u017en\u00e9 akce nejsou spr\u00e1vn\u011b se\u0159azeny, zvl\u00e1\u0161t\u011b kdy\u017e je zapisuj\u00edc\u00ed akce X kr\u00e1tk\u00e1 a \u010dtec\u00ed akce Z trv\u00e1 dlouho.",
        incorrect:
          "Datov\u00e1 z\u00e1vislost v soub\u011b\u017en\u00fdch syst\u00e9mech vznik\u00e1, kdy\u017e akce Z \u010dte z pam\u011b\u0165ov\u00e9 bu\u0148ky nebo registru, do kter\u00e9ho naposledy zapisovala akce X.  Toto je prim\u00e1rn\u011b probl\u00e9m kritick\u00fdch sekc\u00ed a nesouvis\u00ed s po\u0159ad\u00edm operac\u00ed v soub\u011b\u017en\u00fdch syst\u00e9mech, proto\u017ee datov\u00e9 z\u00e1vislosti jsou inherentn\u011b \u0159e\u0161eny kritick\u00fdmi sekcemi zaji\u0161\u0165uj\u00edc\u00edmi v\u00fdhradn\u00ed p\u0159\u00edstup.",
        sectionNumber: "5.2.4",
        sectionTitle: "Soub\u011b\u017en\u00e1 datov\u00e1 z\u00e1vislost",
      },
      {
        uuid: "e17c1e9f-eb8e-4d41-8117-54ecdec9c9ff",
        correct:
          'Text popisuje datov\u00e9 z\u00e1vislosti v soub\u011b\u017en\u00fdch syst\u00e9mech jako vztah mezi akcemi, kde vstupem akce Z je pam\u011b\u0165ov\u00e1 bu\u0148ka nebo registr, do kter\u00e9ho naposledy zapisovala akce X. Tento typ z\u00e1vislosti m\u016f\u017ee v\u00e9st k "chyb\u00e1m po\u0159ad\u00ed", pokud soub\u011b\u017en\u00e9 akce nejsou spr\u00e1vn\u011b se\u0159azeny, zvl\u00e1\u0161t\u011b kdy\u017e je zapisuj\u00edc\u00ed akce X kr\u00e1tk\u00e1 a \u010dtec\u00ed akce Z m\u00e1 dlouh\u00e9 trv\u00e1n\u00ed.',
        incorrect:
          'Text popisuje datov\u00e9 z\u00e1vislosti v soub\u011b\u017en\u00fdch syst\u00e9mech jako v z\u00e1sad\u011b stejn\u00fd probl\u00e9m jako kritick\u00e9 sekce. A\u010dkoli oboj\u00ed souvis\u00ed se soub\u011b\u017enost\u00ed, datov\u00e9 z\u00e1vislosti vedouc\u00ed k "chyb\u00e1m po\u0159ad\u00ed" se prim\u00e1rn\u011b \u0159e\u0161\u00ed mechanismy vz\u00e1jemn\u00e9ho vylou\u010den\u00ed, jako jsou semafory, co\u017e z nich \u010din\u00ed v podstat\u011b podmno\u017einu probl\u00e9m\u016f kritick\u00fdch sekc\u00ed v soub\u011b\u017en\u00e9m programov\u00e1n\u00ed.',
        sectionNumber: "5.2.4",
        sectionTitle: "Soub\u011b\u017en\u00e1 datov\u00e1 z\u00e1vislost",
      },
      {
        uuid: "df2e2862-3285-4f8c-89f1-9ee5f76cac85",
        correct:
          "Probl\u00e9m producent-konzument v opera\u010dn\u00edch syst\u00e9mech nast\u00e1v\u00e1, kdy\u017e skupina vl\u00e1ken generuje meziv\u00fdsledky, zat\u00edmco jin\u00e1 skupina vl\u00e1ken tyto v\u00fdsledky zpracov\u00e1v\u00e1, p\u0159i\u010dem\u017e ob\u011b skupiny pracuj\u00ed soub\u011b\u017en\u011b, co\u017e m\u016f\u017ee v\u00e9st k situac\u00edm, kdy producenti vytv\u00e1\u0159ej\u00ed data rychleji, ne\u017e je konzumenti st\u00edhaj\u00ed zpracov\u00e1vat, nebo naopak, konzumenti zpracov\u00e1vaj\u00ed data rychleji, ne\u017e je producenti generuj\u00ed.",
        incorrect:
          "Probl\u00e9m producent-konzument v opera\u010dn\u00edch syst\u00e9mech nast\u00e1v\u00e1, kdy\u017e skupina vl\u00e1ken generuje meziv\u00fdsledky, zat\u00edmco jin\u00e1 skupina vl\u00e1ken tyto v\u00fdsledky zpracov\u00e1v\u00e1, p\u0159i\u010dem\u017e ob\u011b skupiny pracuj\u00ed sekven\u010dn\u011b, co\u017e nikdy nem\u016f\u017ee v\u00e9st k situac\u00edm, kdy producenti vytv\u00e1\u0159ej\u00ed data rychleji, ne\u017e je konzumenti st\u00edhaj\u00ed zpracov\u00e1vat, nebo naopak, konzumenti zpracov\u00e1vaj\u00ed data rychleji, ne\u017e je producenti generuj\u00ed.",
        sectionNumber: "5.2.5",
        sectionTitle: "Producenti a konzumenti",
      },
      {
        uuid: "d4f2363f-854e-429f-b348-393e87ca25a4",
        correct:
          "V situaci producent-konzument, pokud producenti generuj\u00ed meziv\u00fdsledky rychleji ne\u017e konzumenti je zpracov\u00e1vaj\u00ed, m\u016f\u017ee doj\u00edt k hromad\u011bn\u00ed meziv\u00fdsledk\u016f, co\u017e potenci\u00e1ln\u011b vy\u010derp\u00e1 dostupnou pam\u011b\u0165 nebo zp\u016fsob\u00ed ztr\u00e1tu dat p\u0159eps\u00e1n\u00edm d\u0159\u00edve, ne\u017e jsou zpracov\u00e1na, pokud nen\u00ed zavedena adekv\u00e1tn\u00ed synchronizace mezi producenty a konzumenty.",
        incorrect:
          "V situaci producent-konzument, pokud producenti generuj\u00ed meziv\u00fdsledky rychleji ne\u017e konzumenti je zpracov\u00e1vaj\u00ed, nem\u016f\u017ee doj\u00edt k hromad\u011bn\u00ed meziv\u00fdsledk\u016f, a to i bez synchronizace, proto\u017ee opera\u010dn\u00ed syst\u00e9m automaticky \u0159\u00edd\u00ed tok dat mezi producenty a konzumenty, \u010d\u00edm\u017e zabra\u0148uje jak\u00e9mukoliv potenci\u00e1ln\u00edmu vy\u010derp\u00e1n\u00ed pam\u011bti nebo ztr\u00e1t\u011b dat.",
        sectionNumber: "5.2.5",
        sectionTitle: "Producenti a konzumenti",
      },
      {
        uuid: "6ceb598c-de6e-4d3c-aa52-60a4878dbe20",
        correct:
          "Synchronizace v probl\u00e9mu producent-konzument je kl\u00ed\u010dov\u00e1 pro zaji\u0161t\u011bn\u00ed efektivn\u00ed spolupr\u00e1ce mezi vl\u00e1kny, p\u0159i\u010dem\u017e c\u00edlem je up\u0159ednostnit pr\u00e1ci producent\u016f, pokud je meziv\u00fdsledk\u016f nedostatek, a naopak up\u0159ednostnit pr\u00e1ci konzument\u016f, pokud je meziv\u00fdsledk\u016f p\u0159ebytek, a ide\u00e1ln\u011b udr\u017eovat po\u010det nezpracovan\u00fdch meziv\u00fdsledk\u016f v pevn\u00fdch mez\u00edch, aby se p\u0159ede\u0161lo probl\u00e9m\u016fm s pam\u011bt\u00ed a zpracov\u00e1n\u00edm dat.",
        incorrect:
          "Synchronizace v probl\u00e9mu producent-konzument je zbyte\u010dn\u00e1 pro efektivn\u00ed spolupr\u00e1ci mezi vl\u00e1kny, proto\u017ee opera\u010dn\u00ed syst\u00e9m dok\u00e1\u017ee automaticky a efektivn\u011b \u0159\u00eddit tok meziv\u00fdsledk\u016f mezi producenty a konzumenty bez nutnosti explicitn\u00ed synchronizace, p\u0159i\u010dem\u017e se v\u017edy up\u0159ednost\u0148uje pr\u00e1ce producent\u016f bez ohledu na mno\u017estv\u00ed meziv\u00fdsledk\u016f.",
        sectionNumber: "5.2.5",
        sectionTitle: "Producenti a konzumenti",
      },
      {
        uuid: "ea05682a-b6e6-494a-9a4b-afb3c147ab0b",
        correct:
          "V opera\u010dn\u00edch syst\u00e9mech se m\u016f\u017eeme setkat s probl\u00e9mem nedostate\u010dn\u00e9 soub\u011b\u017enosti, kdy i p\u0159es dostatek v\u00fdpo\u010detn\u00edch jader nejsou hardwarov\u00e9 zdroje pln\u011b vyu\u017eity, proto\u017ee nedostatek vl\u00e1ken omezuje paraleln\u00ed prov\u00e1d\u011bn\u00ed akc\u00ed, kter\u00e9 by jinak mohly prob\u00edhat soub\u011b\u017en\u011b, co\u017e vede k neefektivn\u00edmu vyu\u017eit\u00ed v\u00fdpo\u010detn\u00edho v\u00fdkonu syst\u00e9mu.",
        incorrect:
          "V opera\u010dn\u00edch syst\u00e9mech se nem\u016f\u017eeme setkat s probl\u00e9mem nedostate\u010dn\u00e9 soub\u011b\u017enosti, proto\u017ee i p\u0159i nedostatku v\u00fdpo\u010detn\u00edch jader jsou hardwarov\u00e9 zdroje pln\u011b vyu\u017eity, proto\u017ee dostatek vl\u00e1ken umo\u017e\u0148uje paraleln\u00ed prov\u00e1d\u011bn\u00ed akc\u00ed, kter\u00e9 by jinak nemohly prob\u00edhat soub\u011b\u017en\u011b, co\u017e vede k efektivn\u00edmu vyu\u017eit\u00ed v\u00fdpo\u010detn\u00edho v\u00fdkonu syst\u00e9mu.",
        sectionNumber: "5.2.6",
        sectionTitle: "Rozv\u011btven\u00ed a setk\u00e1n\u00ed",
      },
      {
        uuid: "1c4b1bac-29a4-4b69-b6ef-c4d2d94d384b",
        correct:
          "Pokud v\u00fdpo\u010det obsahuje bloky, kter\u00e9 mohou b\u00fdt provedeny v libovoln\u00e9m po\u0159ad\u00ed bez vlivu na v\u00fdsledek, je mo\u017en\u00e9 a efektivn\u00ed v\u00fdpo\u010det rozv\u011btvit, aby se tyto bloky mohly prov\u00e1d\u011bt soub\u011b\u017en\u011b, \u010d\u00edm\u017e se zlep\u0161\u00ed vyu\u017eit\u00ed v\u00edcej\u00e1drov\u00fdch procesor\u016f a potenci\u00e1ln\u011b se zkr\u00e1t\u00ed celkov\u00fd \u010das v\u00fdpo\u010dtu, pokud je k dispozici dostatek v\u00fdpo\u010detn\u00edch zdroj\u016f.",
        incorrect:
          "Pokud v\u00fdpo\u010det obsahuje bloky, kter\u00e9 mus\u00ed b\u00fdt provedeny v pevn\u00e9m po\u0159ad\u00ed s vlivem na v\u00fdsledek, je nemo\u017en\u00e9 a neefektivn\u00ed v\u00fdpo\u010det rozv\u011btvit, aby se tyto bloky mohly prov\u00e1d\u011bt soub\u011b\u017en\u011b, \u010d\u00edm\u017e se zhor\u0161\u00ed vyu\u017eit\u00ed v\u00edcej\u00e1drov\u00fdch procesor\u016f a prodlou\u017e\u00ed se celkov\u00fd \u010das v\u00fdpo\u010dtu, i kdy\u017e je k dispozici dostatek v\u00fdpo\u010detn\u00edch zdroj\u016f.",
        sectionNumber: "5.2.6",
        sectionTitle: "Rozv\u011btven\u00ed a setk\u00e1n\u00ed",
      },
      {
        uuid: "3fb52695-0be6-4644-8627-4d30c81caaa8",
        correct:
          "Vl\u00e1kno v opera\u010dn\u00edm syst\u00e9mu definuje line\u00e1rn\u00ed uspo\u0159\u00e1d\u00e1n\u00ed akc\u00ed, co\u017e znamen\u00e1, \u017ee akce v r\u00e1mci jednoho vl\u00e1kna mus\u00ed b\u00fdt prov\u00e1d\u011bny sekven\u010dn\u011b v dan\u00e9m po\u0159ad\u00ed, a proto akce, kter\u00e9 nejsou soub\u011b\u017en\u00e9 s jin\u00fdmi vl\u00e1kny, nemohou b\u00fdt efektivn\u011b paraleln\u011b prov\u00e1d\u011bny, i kdy\u017e jsou k dispozici voln\u00e1 v\u00fdpo\u010detn\u00ed j\u00e1dra.",
        incorrect:
          "Vl\u00e1kno v opera\u010dn\u00edm syst\u00e9mu nedefinuje line\u00e1rn\u00ed uspo\u0159\u00e1d\u00e1n\u00ed akc\u00ed, co\u017e znamen\u00e1, \u017ee akce v r\u00e1mci jednoho vl\u00e1kna mohou b\u00fdt prov\u00e1d\u011bny paraleln\u011b bez dan\u00e9ho po\u0159ad\u00ed, a proto akce, kter\u00e9 nejsou soub\u011b\u017en\u00e9 s jin\u00fdmi vl\u00e1kny, mohou b\u00fdt efektivn\u011b paraleln\u011b prov\u00e1d\u011bny, i kdy\u017e nejsou k dispozici voln\u00e1 v\u00fdpo\u010detn\u00ed j\u00e1dra.",
        sectionNumber: "5.2.6",
        sectionTitle: "Rozv\u011btven\u00ed a setk\u00e1n\u00ed",
      },
    ],
  };
