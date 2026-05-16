import type { Section } from '../../common/types';

export const section6_synchronizace: Section = {
    uuid: "2dfc454a-1180-4d9d-a73c-02e8ad67b8ed",
    sectionNumber: "6",
    sectionTitle: "Synchronizace",
    statements: [
      {
        uuid: "bc4eabf2-a5aa-419f-be05-681ad26f139f",
        correct:
          "Z\u00e1kladn\u00edm smyslem synchroniza\u010dn\u00edch za\u0159\u00edzen\u00ed v opera\u010dn\u00edch syst\u00e9mech je omezen\u00ed soub\u011b\u017enosti, p\u0159i\u010dem\u017e r\u016fzn\u00e9 kategorie probl\u00e9m\u016f soub\u011b\u017enosti vy\u017eaduj\u00ed specifick\u00e1 za\u0159\u00edzen\u00ed. Tato za\u0159\u00edzen\u00ed jsou implementov\u00e1na jako datov\u00e9 struktury, umo\u017e\u0148uj\u00edc\u00ed existenci mnoha nez\u00e1visl\u00fdch instanc\u00ed, kter\u00e9 mezi sebou neinteraguj\u00ed. Ka\u017ed\u00e1 instance je identifikov\u00e1na adresou, na kter\u00e9 je ulo\u017een jej\u00ed stav, kl\u00ed\u010dov\u00fd pro spr\u00e1vnou funkci synchronizace.",
        incorrect:
          "Z\u00e1kladn\u00edm smyslem synchroniza\u010dn\u00edch za\u0159\u00edzen\u00ed v opera\u010dn\u00edch syst\u00e9mech je zv\u00fd\u0161en\u00ed soub\u011b\u017enosti, p\u0159i\u010dem\u017e v\u0161echny kategorie probl\u00e9m\u016f soub\u011b\u017enosti vy\u017eaduj\u00ed univerz\u00e1ln\u00ed za\u0159\u00edzen\u00ed. Tato za\u0159\u00edzen\u00ed jsou implementov\u00e1na jako sd\u00edlen\u00e9 glob\u00e1ln\u00ed prom\u011bnn\u00e9, umo\u017e\u0148uj\u00edc\u00ed existenci jedin\u00e9 instance, kter\u00e1 interaguje se v\u0161emi procesy. Ka\u017ed\u00e1 instance je identifikov\u00e1na typem za\u0159\u00edzen\u00ed, kter\u00fd je kl\u00ed\u010dov\u00fd pro glob\u00e1ln\u00ed funkci synchronizace.",
        sectionNumber: "6.1.1",
        sectionTitle: "Spole\u010dn\u00e9 vlastnosti",
      },
      {
        uuid: "d21a96cd-8c62-48f5-b891-bfd7aa8cba0b",
        correct:
          "V kontextu synchroniza\u010dn\u00edch za\u0159\u00edzen\u00ed v opera\u010dn\u00edch syst\u00e9mech je d\u016fle\u017eit\u00e9 si uv\u011bdomit, \u017ee a\u010dkoliv se jedn\u00e1 o datov\u00e9 struktury, r\u016fzn\u00e9 instance t\u011bchto za\u0159\u00edzen\u00ed existuj\u00ed nez\u00e1visle a navz\u00e1jem nesynchronizovan\u011b. To znamen\u00e1, \u017ee operace proveden\u00e9 na jedn\u00e9 instanci nemaj\u00ed p\u0159\u00edm\u00fd vliv na stav jin\u00e9 instance t\u00e9ho\u017e synchroniza\u010dn\u00edho za\u0159\u00edzen\u00ed, co\u017e umo\u017e\u0148uje jemnozrnnou kontrolu soub\u011b\u017enosti v r\u00e1mci opera\u010dn\u00edho syst\u00e9mu.",
        incorrect:
          "V kontextu synchroniza\u010dn\u00edch za\u0159\u00edzen\u00ed v opera\u010dn\u00edch syst\u00e9mech je d\u016fle\u017eit\u00e9 si uv\u011bdomit, \u017ee a\u010dkoliv se jedn\u00e1 o datov\u00e9 struktury, r\u016fzn\u00e9 instance t\u011bchto za\u0159\u00edzen\u00ed existuj\u00ed z\u00e1visle a navz\u00e1jem synchronizovan\u011b. To znamen\u00e1, \u017ee operace proveden\u00e9 na jedn\u00e9 instanci maj\u00ed p\u0159\u00edm\u00fd vliv na stav v\u0161ech instanc\u00ed t\u00e9ho\u017e synchroniza\u010dn\u00edho za\u0159\u00edzen\u00ed, co\u017e umo\u017e\u0148uje hrubozrnnou kontrolu soub\u011b\u017enosti v r\u00e1mci opera\u010dn\u00edho syst\u00e9mu.",
        sectionNumber: "6.1.1",
        sectionTitle: "Spole\u010dn\u00e9 vlastnosti",
      },
      {
        uuid: "48c6512e-1ce4-4715-a350-fcb3e7c16042",
        correct:
          "Definice synchroniza\u010dn\u00edho za\u0159\u00edzen\u00ed v opera\u010dn\u00edch syst\u00e9mech se komplikuje v prost\u0159ed\u00ed s virtu\u00e1ln\u00ed pam\u011bt\u00ed a v\u00edce procesy. Zat\u00edmco instance za\u0159\u00edzen\u00ed je koncep\u010dn\u011b spjata s adresou, v p\u0159\u00edpad\u011b synchronizace mezi procesy se tato adresa st\u00e1v\u00e1 virtu\u00e1ln\u00ed a m\u016f\u017ee se li\u0161it v z\u00e1vislosti na kontextu procesu. Rigor\u00f3zn\u00ed p\u0159\u00edstup proto vy\u017eaduje uva\u017eovat t\u0159\u00eddy ekvivalence virtu\u00e1ln\u00edch adres pro p\u0159esnou identifikaci synchroniza\u010dn\u00edho za\u0159\u00edzen\u00ed.",
        incorrect:
          "Definice synchroniza\u010dn\u00edho za\u0159\u00edzen\u00ed v opera\u010dn\u00edch syst\u00e9mech se zjednodu\u0161uje v prost\u0159ed\u00ed s virtu\u00e1ln\u00ed pam\u011bt\u00ed a v\u00edce procesy. Instance za\u0159\u00edzen\u00ed je v\u017edy spjata s fyzickou adresou, kter\u00e1 je sd\u00edlen\u00e1 mezi v\u0161emi procesy pro zaji\u0161t\u011bn\u00ed glob\u00e1ln\u00ed synchronizace. Virtu\u00e1ln\u00ed adresy jsou irelevantn\u00ed pro identifikaci synchroniza\u010dn\u00edho za\u0159\u00edzen\u00ed, proto\u017ee fyzick\u00e1 adresa je konzistentn\u00ed nap\u0159\u00ed\u010d cel\u00fdm syst\u00e9mem.",
        sectionNumber: "6.1.1",
        sectionTitle: "Spole\u010dn\u00e9 vlastnosti",
      },
      {
        uuid: "7f1fbe81-7bee-4b5c-8834-914764a51a8d",
        correct:
          'Mutex, ozna\u010dovan\u00fd tak\u00e9 jako "mutual exclusion device", p\u0159edstavuje z\u00e1kladn\u00ed synchroniza\u010dn\u00ed n\u00e1stroj v opera\u010dn\u00edch syst\u00e9mech, kter\u00fd efektivn\u011b \u0159e\u0161\u00ed probl\u00e9m kritick\u00e9 sekce t\u00edm, \u017ee zaji\u0161\u0165uje vz\u00e1jemn\u00e9 vylou\u010den\u00ed a chr\u00e1n\u00ed sd\u00edlen\u00e9 zdroje p\u0159ed soub\u011b\u017en\u00fdm p\u0159\u00edstupem v\u00edce vl\u00e1ken. Jeho kl\u00ed\u010dovou funkc\u00ed je umo\u017enit pouze jednomu vl\u00e1knu v dan\u00e9m \u010dase vlastnit z\u00e1mek a vstoupit do chr\u00e1n\u011bn\u00e9 kritick\u00e9 sekce, \u010d\u00edm\u017e se p\u0159edch\u00e1z\u00ed nekonzistenci dat a z\u00e1vodn\u00edm podm\u00ednk\u00e1m.',
        incorrect:
          "Mutex, a\u010dkoliv je pova\u017eov\u00e1n za synchroniza\u010dn\u00ed n\u00e1stroj, prim\u00e1rn\u011b neslou\u017e\u00ed k \u0159e\u0161en\u00ed probl\u00e9mu kritick\u00e9 sekce, ale sp\u00ed\u0161e k optimalizaci v\u00fdkonu opera\u010dn\u00edho syst\u00e9mu povolen\u00edm soub\u011b\u017en\u00e9ho p\u0159\u00edstupu v\u00edce vl\u00e1ken do kritick\u00fdch sekc\u00ed. Jeho hlavn\u00edm c\u00edlem nen\u00ed zaji\u0161t\u011bn\u00ed vz\u00e1jemn\u00e9ho vylou\u010den\u00ed, ale sp\u00ed\u0161e koordinace vl\u00e1ken tak, aby se minimalizovaly \u010dasy \u010dek\u00e1n\u00ed a maximalizovala propustnost syst\u00e9mu, i za cenu potenci\u00e1ln\u00edho rizika z\u00e1vodn\u00edch podm\u00ednek.",
        sectionNumber: "6.1.2",
        sectionTitle: "Vz\u00e1jemn\u00e9 vylou\u010den\u00ed (mutex)",
      },
      {
        uuid: "8acbb160-f606-4497-988c-90ee017a23b4",
        correct:
          "Operace `lock` u mutexu je navr\u017eena tak, \u017ee pokud se vl\u00e1kno pokus\u00ed zamknout mutex, kter\u00fd je ji\u017e zam\u010den\u00fd jin\u00fdm vl\u00e1knem, toto vl\u00e1kno bude pozastaveno a uvedeno do stavu \u010dek\u00e1n\u00ed, dokud aktu\u00e1ln\u00ed vlastn\u00edk mutexu neuvoln\u00ed z\u00e1mek operac\u00ed `unlock`. Tento mechanismus \u010dek\u00e1n\u00ed je z\u00e1sadn\u00ed pro synchronizaci a zaru\u010duje, \u017ee kritick\u00e1 sekce bude v\u017edy chr\u00e1n\u011bna p\u0159ed sou\u010dasn\u00fdm vstupem v\u00edce vl\u00e1ken, \u010d\u00edm\u017e se zachov\u00e1v\u00e1 integrita sd\u00edlen\u00fdch dat.",
        incorrect:
          'Operace `lock` u mutexu nikdy nezp\u016fsob\u00ed, \u017ee vl\u00e1kno \u010dek\u00e1, bez ohledu na to, zda je mutex ji\u017e zam\u010den\u00fd jin\u00fdm vl\u00e1knem. Vl\u00e1kno, kter\u00e9 vol\u00e1 `lock`, v\u017edy okam\u017eit\u011b z\u00edsk\u00e1 p\u0159\u00edstup, a pokud je mutex ji\u017e "vlastn\u011bn\u00fd", dojde k automatick\u00e9mu sd\u00edlen\u00ed z\u00e1mku mezi vl\u00e1kny. Tento p\u0159\u00edstup eliminuje zbyte\u010dn\u00e9 zdr\u017een\u00ed a maximalizuje paralelizmus, i kdy\u017e to m\u016f\u017ee v\u00e9st k ob\u010dasn\u00fdm nekonzistenc\u00edm v datech v kritick\u00fdch sekc\u00edch.',
        sectionNumber: "6.1.2",
        sectionTitle: "Vz\u00e1jemn\u00e9 vylou\u010den\u00ed (mutex)",
      },
      {
        uuid: "c93df86a-c617-4076-a754-7aaba3cadec8",
        correct:
          "Pro efektivn\u00ed ochranu kritick\u00e9 sekce pomoc\u00ed mutexu je naprosto kl\u00ed\u010dov\u00e9, aby byla chr\u00e1n\u011bna nejen samotn\u00e1 kritick\u00e1 sekce, ale tak\u00e9 v\u0161echny b\u011bhy, v\u016f\u010di kter\u00fdm je tato sekce kritick\u00e1, a to d\u016fsledn\u00fdm pou\u017e\u00edv\u00e1n\u00edm stejn\u00e9 instance mutexu pro v\u0161echny z\u00fa\u010dastn\u011bn\u00e9 \u010d\u00e1sti k\u00f3du. Nespr\u00e1vn\u00e9 pou\u017eit\u00ed, nap\u0159\u00edklad ochrana pouze \u010d\u00e1sti kritick\u00fdch b\u011bh\u016f nebo pou\u017eit\u00ed r\u016fzn\u00fdch mutex\u016f, m\u016f\u017ee v\u00e9st k selh\u00e1n\u00ed synchronizace a vzniku obt\u00ed\u017en\u011b odhaliteln\u00fdch z\u00e1vodn\u00edch podm\u00ednek.",
        incorrect:
          "P\u0159i ochran\u011b kritick\u00e9 sekce mutexem je doporu\u010deno pou\u017e\u00edvat pro ka\u017edou kritickou sekci samostatn\u00fd mutex, aby se minimalizovalo riziko vz\u00e1jemn\u00e9ho blokov\u00e1n\u00ed a zv\u00fd\u0161ila se granularita z\u00e1mk\u016f. Pou\u017eit\u00ed jedin\u00e9ho mutexu pro ochranu v\u00edce kritick\u00fdch sekc\u00ed nebo b\u011bh\u016f se pova\u017euje za neefektivn\u00ed a potenci\u00e1ln\u011b \u0161kodliv\u00e9, proto\u017ee to zbyte\u010dn\u011b omezuje paralelizmus a m\u016f\u017ee v\u00e9st k zbyte\u010dn\u00e9mu \u010dek\u00e1n\u00ed vl\u00e1ken, \u010d\u00edm\u017e se sni\u017euje celkov\u00fd v\u00fdkon syst\u00e9mu.",
        sectionNumber: "6.1.2",
        sectionTitle: "Vz\u00e1jemn\u00e9 vylou\u010den\u00ed (mutex)",
      },
      {
        uuid: "786000cd-6070-4a9c-81c4-feb351e7f15a",
        correct:
          "Z\u00e1sadn\u00ed upozorn\u011bn\u00ed t\u00fdkaj\u00edc\u00ed se mutex\u016f spo\u010d\u00edv\u00e1 v tom, \u017ee standardn\u00ed implementace mutex\u016f nedok\u00e1\u017ee detekovat situaci, kdy vl\u00e1kno provede operaci `unlock` na mutexu, kter\u00fd aktu\u00e1ln\u011b nevlastn\u00ed. I kdy\u017e je takov\u00e9 odem\u010den\u00ed logicky chybn\u00e9 a m\u016f\u017ee m\u00edt katastrof\u00e1ln\u00ed n\u00e1sledky pro integritu dat a synchronizaci, operace `unlock` zpravidla usp\u011bje bez jak\u00e9hokoliv varov\u00e1n\u00ed nebo chybov\u00e9ho hl\u00e1\u0161en\u00ed, co\u017e klade velkou zodpov\u011bdnost na program\u00e1tora pro spr\u00e1vn\u00e9 pou\u017e\u00edv\u00e1n\u00ed mutex\u016f.",
        incorrect:
          "Modern\u00ed implementace mutex\u016f jsou vybaveny sofistikovan\u00fdmi mechanismy pro detekci chyb a zneu\u017eit\u00ed, v\u010detn\u011b situace, kdy se vl\u00e1kno pokus\u00ed odemknout mutex, kter\u00fd nevlastn\u00ed. V takov\u00e9m p\u0159\u00edpad\u011b mutex automaticky vyvol\u00e1 v\u00fdjimku nebo vr\u00e1t\u00ed chybov\u00fd k\u00f3d, \u010d\u00edm\u017e aktivn\u011b zabra\u0148uje potenci\u00e1ln\u00edm katastrof\u00e1ln\u00edm d\u016fsledk\u016fm a usnad\u0148uje lad\u011bn\u00ed a odhalov\u00e1n\u00ed chyb v synchroniza\u010dn\u00edm k\u00f3du, \u010d\u00edm\u017e se zvy\u0161uje robustnost a spolehlivost aplikac\u00ed.",
        sectionNumber: "6.1.2",
        sectionTitle: "Vz\u00e1jemn\u00e9 vylou\u010den\u00ed (mutex)",
      },
      {
        uuid: "f063d29d-fa5f-43b9-bfdf-9858f4dc261b",
        correct:
          "Spinlock je synchroniza\u010dn\u00ed mechanismus, kter\u00fd se vyzna\u010duje aktivn\u00edm \u010dek\u00e1n\u00edm, co\u017e znamen\u00e1, \u017ee vl\u00e1kno, kter\u00e9 se sna\u017e\u00ed z\u00edskat z\u00e1mek, opakovan\u011b kontroluje stav z\u00e1mku v smy\u010dce, ani\u017e by uvolnilo procesor. Tato implementace je efektivn\u00ed v situac\u00edch, kdy je z\u00e1mek dr\u017een jen kr\u00e1tkou dobu a p\u0159ep\u00edn\u00e1n\u00ed kontextu by bylo dra\u017e\u0161\u00ed, ale st\u00e1v\u00e1 se neefektivn\u00ed p\u0159i del\u0161\u00edm \u010dek\u00e1n\u00ed nebo na jednoprocesorov\u00e9m syst\u00e9mu.",
        incorrect:
          "Spinlock je synchroniza\u010dn\u00ed mechanismus, kter\u00fd se vyzna\u010duje pasivn\u00edm \u010dek\u00e1n\u00edm, co\u017e znamen\u00e1, \u017ee vl\u00e1kno, kter\u00e9 se sna\u017e\u00ed z\u00edskat z\u00e1mek, se usp\u00ed a uvoln\u00ed procesor, dokud z\u00e1mek nen\u00ed dostupn\u00fd. Tato implementace je v\u017edy efektivn\u00ed, bez ohledu na d\u00e9lku \u010dek\u00e1n\u00ed nebo typ syst\u00e9mu, a je ide\u00e1ln\u00ed i pro jednoprocesorov\u00e9 syst\u00e9my, kde aktivn\u00ed \u010dek\u00e1n\u00ed m\u016f\u017ee v\u00e9st k neefektivn\u00edmu vyu\u017eit\u00ed procesoru.",
        sectionNumber: "6.1.3",
        sectionTitle: "Spinlock",
      },
      {
        uuid: "c34b4399-e59f-4777-99af-0f2d43229cb4",
        correct:
          "Implementace operace lock u spinlocku s atomickou instrukc\u00ed cmpxchg zahrnuje porovn\u00e1n\u00ed o\u010dek\u00e1van\u00e9 hodnoty z\u00e1mku s aktu\u00e1ln\u00ed hodnotou v pam\u011bti a n\u00e1slednou v\u00fdm\u011bnu hodnoty pouze v p\u0159\u00edpad\u011b shody. Pokud se o\u010dek\u00e1van\u00e1 hodnota neshoduje, operace se opakuje, dokud se z\u00e1mek nepoda\u0159\u00ed z\u00edskat atomicky, \u010d\u00edm\u017e se zaji\u0161\u0165uje vz\u00e1jemn\u00e9 vylou\u010den\u00ed bez rizika stavu z\u00e1vodu.",
        incorrect:
          "Implementace operace lock u spinlocku s atomickou instrukc\u00ed cmpxchg zahrnuje pouze nastaven\u00ed hodnoty z\u00e1mku na zamknuto bez ohledu na aktu\u00e1ln\u00ed stav z\u00e1mku, co\u017e zjednodu\u0161uje proces z\u00edsk\u00e1v\u00e1n\u00ed z\u00e1mku a eliminuje nutnost opakov\u00e1n\u00ed operace v p\u0159\u00edpad\u011b, \u017ee z\u00e1mek ji\u017e dr\u017e\u00ed jin\u00e9 vl\u00e1kno, a zaru\u010duje tak efektivn\u00ed a rychl\u00e9 zamyk\u00e1n\u00ed.",
        sectionNumber: "6.1.3",
        sectionTitle: "Spinlock",
      },
      {
        uuid: "c7f44b55-85c7-4c58-b57e-a45cc9a7c794",
        correct:
          "Pou\u017eit\u00ed spinlocku pro ochranu dlouh\u00fdch kritick\u00fdch sekc\u00ed m\u016f\u017ee v\u00e9st k neefektivn\u00edmu vyu\u017eit\u00ed procesorov\u00e9ho \u010dasu, proto\u017ee vl\u00e1kna \u010dekaj\u00edc\u00ed na z\u00e1mek aktivn\u011b spot\u0159ebov\u00e1vaj\u00ed procesorov\u00fd \u010das v busy-waiting smy\u010dce, m\u00edsto aby procesor mohl b\u00fdt vyu\u017eit pro jin\u00e9 produktivn\u00ed \u00falohy. Proto je spinlock vhodn\u011bj\u0161\u00ed pro kr\u00e1tkodob\u00e9 kritick\u00e9 sekce, kde je minimalizov\u00e1no pl\u00fdtv\u00e1n\u00ed procesorov\u00fdm \u010dasem.",
        incorrect:
          "Pou\u017eit\u00ed spinlocku pro ochranu dlouh\u00fdch kritick\u00fdch sekc\u00ed je vysoce efektivn\u00ed, proto\u017ee aktivn\u00ed \u010dek\u00e1n\u00ed zaji\u0161\u0165uje, \u017ee vl\u00e1kna \u010dekaj\u00edc\u00ed na z\u00e1mek okam\u017eit\u011b z\u00edskaj\u00ed p\u0159\u00edstup ke kritick\u00e9 sekci, jakmile je z\u00e1mek uvoln\u011bn, a minimalizuje se tak latence a maximalizuje propustnost syst\u00e9mu i v p\u0159\u00edpad\u011b dlouhotrvaj\u00edc\u00edch kritick\u00fdch sekc\u00ed.",
        sectionNumber: "6.1.3",
        sectionTitle: "Spinlock",
      },
      {
        uuid: "5ce0898b-d9bd-4296-bd6d-cbb94b08bdf0",
        correct:
          "\u201cUsp\u00e1vaj\u00edc\u00ed mutex\u201d je implementov\u00e1n s vyu\u017eit\u00edm slu\u017eeb opera\u010dn\u00edho syst\u00e9mu, konkr\u00e9tn\u011b syst\u00e9mov\u00fdch vol\u00e1n\u00ed, co\u017e znamen\u00e1, \u017ee operace z\u00e1mku a odem\u010den\u00ed jsou realizov\u00e1ny s asistenc\u00ed j\u00e1dra opera\u010dn\u00edho syst\u00e9mu, kter\u00e9 spravuje fronty \u010dekaj\u00edc\u00edch vl\u00e1ken a pl\u00e1nov\u00e1n\u00ed proces\u016f pro efektivn\u00ed vyu\u017eit\u00ed procesoru.",
        incorrect:
          "\u201cUsp\u00e1vaj\u00edc\u00ed mutex\u201d je implementov\u00e1n v\u00fdhradn\u011b v u\u017eivatelsk\u00e9m prostoru bez nutnosti syst\u00e9mov\u00fdch vol\u00e1n\u00ed, co\u017e minimalizuje re\u017eii spojenou s p\u0159ep\u00edn\u00e1n\u00edm kontextu do j\u00e1dra a zaji\u0161\u0165uje vysokou efektivitu operac\u00ed z\u00e1mku a odem\u010den\u00ed, srovnatelnou s atomick\u00fdmi instrukcemi.",
        sectionNumber: "6.1.4",
        sectionTitle: "Usp\u00e1vaj\u00edc\u00ed mutex",
      },
      {
        uuid: "cf19e766-efd8-4846-99d9-cb07bea85a5c",
        correct:
          "Operace `lock` u \u201cusp\u00e1vaj\u00edc\u00edho mutexu\u201d v opera\u010dn\u00edm syst\u00e9mu zahrnuje kontrolu stavu z\u00e1mku j\u00e1drem; pokud je z\u00e1mek voln\u00fd, j\u00e1dro ho uzamkne a vr\u00e1t\u00ed vl\u00e1knu kontrolu, jinak vl\u00e1kno za\u0159ad\u00ed do fronty spojen\u00e9 s mutexem a aktivuje pl\u00e1nova\u010d pro probuzen\u00ed jin\u00e9ho vl\u00e1kna, \u010d\u00edm\u017e se efektivn\u011b zabr\u00e1n\u00ed pl\u00fdtv\u00e1n\u00ed procesorov\u00fdm \u010dasem \u010dek\u00e1n\u00edm ve smy\u010dce.",
        incorrect:
          "Operace `lock` u \u201cusp\u00e1vaj\u00edc\u00edho mutexu\u201d se v\u017edy pokou\u0161\u00ed o okam\u017eit\u00e9 uzam\u010den\u00ed pomoc\u00ed atomick\u00fdch instrukc\u00ed v u\u017eivatelsk\u00e9m prostoru a teprve v p\u0159\u00edpad\u011b ne\u00fasp\u011bchu, kdy z\u00e1mek je ji\u017e dr\u017een jin\u00fdm vl\u00e1knem, doch\u00e1z\u00ed k syst\u00e9mov\u00e9mu vol\u00e1n\u00ed a usp\u00e1n\u00ed vl\u00e1kna, co\u017e minimalizuje re\u017eii syst\u00e9mov\u00fdch vol\u00e1n\u00ed v p\u0159\u00edpadech, kdy je z\u00e1mek \u010dasto voln\u00fd.",
        sectionNumber: "6.1.4",
        sectionTitle: "Usp\u00e1vaj\u00edc\u00ed mutex",
      },
      {
        uuid: "e5d592e2-a8ca-480d-8831-e9488c4e8d4b",
        correct:
          "Odem\u010den\u00ed \u201cusp\u00e1vaj\u00edc\u00edho mutexu\u201d v opera\u010dn\u00edm syst\u00e9mu zahrnuje kontrolu j\u00e1dra, zda existuj\u00ed \u010dekaj\u00edc\u00ed vl\u00e1kna ve front\u011b mutexu; pokud ano, j\u00e1dro ihned znovu uzamkne mutex a p\u0159ed\u00e1 ho prvn\u00edmu vl\u00e1knu z fronty p\u0159ed n\u00e1vratem z syst\u00e9mov\u00e9ho vol\u00e1n\u00ed, co\u017e zaji\u0161\u0165uje spravedliv\u00e9 p\u0159id\u011blov\u00e1n\u00ed z\u00e1mku \u010dekaj\u00edc\u00edm vl\u00e1kn\u016fm.",
        incorrect:
          "Odem\u010den\u00ed \u201cusp\u00e1vaj\u00edc\u00edho mutexu\u201d je implementov\u00e1no pouze jako jednoduch\u00e1 atomick\u00e1 operace v u\u017eivatelsk\u00e9m prostoru, kter\u00e1 pouze uvoln\u00ed z\u00e1mek bez kontroly \u010dekaj\u00edc\u00edch vl\u00e1ken a bez asistence pl\u00e1nova\u010de, co\u017e zjednodu\u0161uje implementaci, ale m\u016f\u017ee v\u00e9st k neefektivn\u00edmu probouzen\u00ed vl\u00e1ken a potenci\u00e1ln\u00edm zpo\u017ed\u011bn\u00edm.",
        sectionNumber: "6.1.4",
        sectionTitle: "Usp\u00e1vaj\u00edc\u00ed mutex",
      },
      {
        uuid: "404b41b3-48c8-4535-90e0-3cb64d05e287",
        correct:
          "\u0158e\u0161en\u00ed pro efektivn\u00ed implementaci mutex\u016f spo\u010d\u00edv\u00e1 v rozd\u011blen\u00ed stavu mutexu mezi u\u017eivatelsk\u00e9 vl\u00e1kno a opera\u010dn\u00ed syst\u00e9m, kde u\u017eivatelsk\u00e9 vl\u00e1kno rozhoduje o zam\u010den\u00ed a odem\u010den\u00ed pomoc\u00ed atomick\u00fdch instrukc\u00ed podobn\u011b jako spinlock, a syst\u00e9mov\u00e9 vol\u00e1n\u00ed se prov\u00e1d\u00ed jen v p\u0159\u00edpad\u011b ne\u00fasp\u011b\u0161n\u00e9ho pokusu o zam\u010den\u00ed.",
        incorrect:
          "\u0158e\u0161en\u00ed pro efektivn\u00ed implementaci mutex\u016f spo\u010d\u00edv\u00e1 v\u00fdhradn\u011b v syst\u00e9mov\u00e9m vol\u00e1n\u00ed pro ka\u017ed\u00fd pokus o zam\u010den\u00ed a odem\u010den\u00ed, \u010d\u00edm\u017e se minimalizuje slo\u017eitost u\u017eivatelsk\u00e9ho vl\u00e1kna a ve\u0161ker\u00e1 logika spr\u00e1vy mutexu je p\u0159esunuta do opera\u010dn\u00edho syst\u00e9mu, co\u017e zaji\u0161\u0165uje maxim\u00e1ln\u00ed bezpe\u010dnost a minimalizuje riziko soub\u011bhu.",
        sectionNumber: "6.1.5",
        sectionTitle: "Rychl\u00fd mutex (spinlock + futex)",
      },
      {
        uuid: "5d8cbc90-0b9c-4094-b8ce-3d77508c088e",
        correct:
          "Syst\u00e9mov\u00e1 \u010d\u00e1st stavu mutexu, ozna\u010dovan\u00e1 jako futex, se skl\u00e1d\u00e1 z fronty usp\u00e1n\u00fdch vl\u00e1ken a je sv\u00e1z\u00e1na s u\u017eivatelsk\u00fdmi mutexy pomoc\u00ed adresy, co\u017e umo\u017e\u0148uje opera\u010dn\u00edmu syst\u00e9mu efektivn\u011b spravovat \u010dekaj\u00edc\u00ed vl\u00e1kna a probouzet je pouze v p\u0159\u00edpad\u011b pot\u0159eby, na z\u00e1klad\u011b po\u010d\u00edtadla pokus\u016f o zam\u010den\u00ed.",
        incorrect:
          "Syst\u00e9mov\u00e1 \u010d\u00e1st stavu mutexu, ozna\u010dovan\u00e1 jako futex, se skl\u00e1d\u00e1 pouze z po\u010d\u00edtadla aktivn\u00edch vl\u00e1ken, kter\u00e1 aktu\u00e1ln\u011b dr\u017e\u00ed z\u00e1mek, a nen\u00ed sv\u00e1z\u00e1na s \u017e\u00e1dn\u00fdmi frontami usp\u00e1n\u00fdch vl\u00e1ken, proto\u017ee opera\u010dn\u00ed syst\u00e9m probouz\u00ed vl\u00e1kna \u010dekaj\u00edc\u00ed na mutex na z\u00e1klad\u011b mechanismu broadcast, \u010d\u00edm\u017e zaji\u0161\u0165uje spravedliv\u00e9 p\u0159id\u011blov\u00e1n\u00ed z\u00e1mku.",
        sectionNumber: "6.1.5",
        sectionTitle: "Rychl\u00fd mutex (spinlock + futex)",
      },
      {
        uuid: "a5252e9d-4410-4874-a896-4260ca5ab136",
        correct:
          "P\u0159i odemyk\u00e1n\u00ed mutexu se syst\u00e9mov\u00e9 vol\u00e1n\u00ed pro probuzen\u00ed \u010dekaj\u00edc\u00edho vl\u00e1kna provede pouze tehdy, kdy\u017e je po\u010d\u00edtadlo pokus\u016f o zam\u010den\u00ed v\u011bt\u0161\u00ed ne\u017e jedna, co\u017e optimalizuje v\u00fdkon a zamezuje zbyte\u010dn\u00e9mu probouzen\u00ed vl\u00e1ken, pokud na mutex aktu\u00e1ln\u011b \u017e\u00e1dn\u00e9 jin\u00e9 vl\u00e1kno ne\u010dek\u00e1.",
        incorrect:
          "P\u0159i odemyk\u00e1n\u00ed mutexu se syst\u00e9mov\u00e9 vol\u00e1n\u00ed pro probuzen\u00ed \u010dekaj\u00edc\u00edho vl\u00e1kna provede v\u017edy, bez ohledu na hodnotu po\u010d\u00edtadla pokus\u016f o zam\u010den\u00ed, aby se zajistilo, \u017ee \u017e\u00e1dn\u00e9 vl\u00e1kno nez\u016fstane zbyte\u010dn\u011b sp\u00e1t, i kdy\u017e mutex m\u016f\u017ee b\u00fdt brzy znovu odem\u010den jin\u00fdm vl\u00e1knem.",
        sectionNumber: "6.1.5",
        sectionTitle: "Rychl\u00fd mutex (spinlock + futex)",
      },
      {
        uuid: "ed6d3e78-955b-408d-8e0a-3b85d7bcecbc",
        correct:
          "U\u017eivatelsk\u00e1 \u010d\u00e1st implementace mutexu vyu\u017e\u00edv\u00e1 atomick\u00e9 instrukce pro rozhodov\u00e1n\u00ed o zam\u010den\u00ed a odem\u010den\u00ed, podobn\u011b jako spinlock, a roz\u0161i\u0159uje stav mutexu o po\u010d\u00edtadlo vl\u00e1ken, kter\u00e1 se pokusila o zam\u010den\u00ed, co\u017e umo\u017e\u0148uje efektivn\u00ed detekci pot\u0159eby syst\u00e9mov\u00e9ho vol\u00e1n\u00ed pro probuzen\u00ed \u010dekaj\u00edc\u00edch vl\u00e1ken.",
        incorrect:
          "U\u017eivatelsk\u00e1 \u010d\u00e1st implementace mutexu se spol\u00e9h\u00e1 v\u00fdhradn\u011b na standardn\u00ed z\u00e1mky poskytovan\u00e9 programovac\u00edm jazykem a nevyu\u017e\u00edv\u00e1 \u017e\u00e1dn\u00e9 atomick\u00e9 instrukce ani po\u010d\u00edtadlo pokus\u016f o zam\u010den\u00ed, p\u0159i\u010dem\u017e ve\u0161ker\u00e1 synchronizace a spr\u00e1va \u010dekaj\u00edc\u00edch vl\u00e1ken je pln\u011b v kompetenci opera\u010dn\u00edho syst\u00e9mu prost\u0159ednictv\u00edm futexu.",
        sectionNumber: "6.1.5",
        sectionTitle: "Rychl\u00fd mutex (spinlock + futex)",
      },
      {
        uuid: "c5725da8-5d65-45b5-81bc-481c4c4c4cfd",
        correct:
          "V situaci, kdy dva podprogramy sd\u00edlej\u00ed stejn\u00fd mutex a jeden z nich vol\u00e1 druh\u00fd, m\u016f\u017ee doj\u00edt k zablokov\u00e1n\u00ed vl\u00e1kna, pokud se naivn\u011b pokus\u00edme o op\u011btovn\u00e9 zam\u010den\u00ed mutexu v r\u00e1mci stejn\u00e9ho vl\u00e1kna, co\u017e je probl\u00e9m, kter\u00fd se \u0159e\u0161\u00ed nap\u0159\u00edklad pou\u017eit\u00edm rekurzivn\u00edch mutex\u016f.",
        incorrect:
          "V situaci, kdy dva podprogramy sd\u00edlej\u00ed stejn\u00fd mutex a jeden z nich vol\u00e1 druh\u00fd, nem\u016f\u017ee doj\u00edt k zablokov\u00e1n\u00ed vl\u00e1kna, proto\u017ee mutexy jsou navr\u017eeny tak, aby umo\u017e\u0148ovaly opakovan\u00e9 zam\u010den\u00ed stejn\u00fdm vl\u00e1knem, co\u017e eliminuje pot\u0159ebu rekurzivn\u00edch mutex\u016f.",
        sectionNumber: "6.1.6",
        sectionTitle: "Rekurzivn\u00ed mutex",
      },
      {
        uuid: "eb1d27dc-9105-4e7b-8d84-b2daa35f8614",
        correct:
          "Rekurzivn\u00ed mutexy \u0159e\u0161\u00ed probl\u00e9m opakovan\u00e9ho zamyk\u00e1n\u00ed mutexu stejn\u00fdm vl\u00e1knem t\u00edm, \u017ee si pamatuj\u00ed identifik\u00e1tor aktu\u00e1ln\u00edho vlastn\u00edka mutexu a po\u010d\u00edtadlo zano\u0159en\u00ed, kter\u00e9 se inkrementuje p\u0159i ka\u017ed\u00e9m \u00fasp\u011b\u0161n\u00e9m zam\u010den\u00ed a dekrementuje p\u0159i odem\u010den\u00ed, p\u0159i\u010dem\u017e mutex se skute\u010dn\u011b odemkne a\u017e po dosa\u017een\u00ed nulov\u00e9ho po\u010d\u00edtadla.",
        incorrect:
          "Rekurzivn\u00ed mutexy \u0159e\u0161\u00ed probl\u00e9m opakovan\u00e9ho zamyk\u00e1n\u00ed mutexu stejn\u00fdm vl\u00e1knem t\u00edm, \u017ee ignoruj\u00ed opakovan\u00e9 pokusy o zam\u010den\u00ed stejn\u00fdm vl\u00e1knem a okam\u017eit\u011b povol\u00ed p\u0159\u00edstup, ani\u017e by vy\u017eadovaly po\u010d\u00edtadlo zano\u0159en\u00ed nebo identifik\u00e1tor vlastn\u00edka, co\u017e zjednodu\u0161uje jejich implementaci.",
        sectionNumber: "6.1.6",
        sectionTitle: "Rekurzivn\u00ed mutex",
      },
      {
        uuid: "e075c6c2-2dc1-4361-a109-88b94c6de47b",
        correct:
          "Refaktorov\u00e1n\u00ed programu s c\u00edlem vy\u010dlenit \u010d\u00e1st k\u00f3du do pomocn\u00e9 funkce a obalit vol\u00e1n\u00ed kritick\u00e9 sekce z\u00e1mkem a odem\u010den\u00edm m\u016f\u017ee b\u00fdt v n\u011bkter\u00fdch p\u0159\u00edpadech praktick\u00fdm \u0159e\u0161en\u00edm probl\u00e9mu zablokov\u00e1n\u00ed p\u0159i vol\u00e1n\u00ed podprogram\u016f sd\u00edlej\u00edc\u00edch stejn\u00fd mutex, ale nemus\u00ed b\u00fdt v\u017edy ide\u00e1ln\u00ed, zejm\u00e9na pokud kritick\u00e1 sekce nepokr\u00fdv\u00e1 cel\u00e9 t\u011blo funkce.",
        incorrect:
          "Refaktorov\u00e1n\u00ed programu s c\u00edlem vy\u010dlenit \u010d\u00e1st k\u00f3du do pomocn\u00e9 funkce a obalit vol\u00e1n\u00ed kritick\u00e9 sekce z\u00e1mkem a odem\u010den\u00edm je v\u017edy ide\u00e1ln\u00edm a jednoduch\u00fdm \u0159e\u0161en\u00edm probl\u00e9mu zablokov\u00e1n\u00ed p\u0159i vol\u00e1n\u00ed podprogram\u016f sd\u00edlej\u00edc\u00edch stejn\u00fd mutex a eliminuje pot\u0159ebu slo\u017eit\u011bj\u0161\u00edch mechanism\u016f, jako jsou rekurzivn\u00ed mutexy.",
        sectionNumber: "6.1.6",
        sectionTitle: "Rekurzivn\u00ed mutex",
      },
      {
        uuid: "eed4ff10-c333-4407-9f03-e59cd5ac7822",
        correct:
          "Za\u0159\u00edzen\u00ed rwlock, ur\u010den\u00e9 pro \u0159e\u0161en\u00ed probl\u00e9mu \u010dten\u00e1\u0159\u016f a p\u00edsa\u0159\u016f, roz\u0161i\u0159uje koncept mutexu o stavy specifick\u00e9 pro \u010dten\u00ed, konkr\u00e9tn\u011b stavy '\u010dten\u00ed 1, 2, ...', umo\u017e\u0148uj\u00edc\u00ed v\u00edce \u010dten\u00e1\u0159\u016fm soub\u011b\u017en\u00fd p\u0159\u00edstup, zat\u00edmco stav 'z\u00e1pis' zaji\u0161\u0165uje exkluzivn\u00ed p\u0159\u00edstup pouze pro jednoho p\u00edsa\u0159e, \u010d\u00edm\u017e efektivn\u011bji spravuje soub\u011b\u017enost oproti standardn\u00edmu mutexu.",
        incorrect:
          "Za\u0159\u00edzen\u00ed rwlock, ur\u010den\u00e9 pro \u0159e\u0161en\u00ed probl\u00e9mu \u010dten\u00e1\u0159\u016f a p\u00edsa\u0159\u016f, funguje identicky jako standardn\u00ed mutex, av\u0161ak s\u00a0dodate\u010dn\u00fdmi stavy pro \u010dten\u00ed, kter\u00e9 sice existuj\u00ed, ale nemaj\u00ed vliv na chov\u00e1n\u00ed z\u00e1mku, proto\u017ee rwlock intern\u011b st\u00e1le pou\u017e\u00edv\u00e1 pouze bin\u00e1rn\u00ed stavy 'zam\u010deno' a 'odem\u010deno' bez ohledu na operace \u010dten\u00ed \u010di z\u00e1pisu.",
        sectionNumber: "6.1.7",
        sectionTitle: "Za\u0159\u00edzen\u00ed \u2039rwlock\u203a",
      },
      {
        uuid: "4569293c-bc0c-4be6-89fb-995e39db4230",
        correct:
          "Operace wrlock na za\u0159\u00edzen\u00ed rwlock je navr\u017eena tak, aby byla exkluzivn\u00ed, co\u017e znamen\u00e1, \u017ee \u00fasp\u011b\u0161n\u011b prob\u011bhne pouze tehdy, kdy\u017e je za\u0159\u00edzen\u00ed ve stavu 'odem\u010deno'; v jak\u00e9mkoli jin\u00e9m stavu, v\u010detn\u011b stav\u016f '\u010dten\u00ed 1, 2, ...' nebo 'z\u00e1pis', bude operace wrlock blokov\u00e1na, dokud se za\u0159\u00edzen\u00ed nep\u0159epne do stavu 'odem\u010deno', \u010d\u00edm\u017e se zaru\u010d\u00ed, \u017ee v\u00a0dan\u00fd moment prob\u00edh\u00e1 maxim\u00e1ln\u011b jeden z\u00e1pis.",
        incorrect:
          "Operace wrlock na za\u0159\u00edzen\u00ed rwlock je navr\u017eena tak, aby byla sd\u00edlen\u00e1, podobn\u011b jako rdlock, co\u017e znamen\u00e1, \u017ee m\u016f\u017ee \u00fasp\u011b\u0161n\u011b prob\u011bhnout i kdy\u017e je za\u0159\u00edzen\u00ed ve stavu '\u010dten\u00ed'; blokov\u00e1na bude pouze ve stavu 'z\u00e1pis', aby se zabr\u00e1nilo konflikt\u016fm mezi z\u00e1pisy, ale soub\u011b\u017en\u00fd z\u00e1pis a \u010dten\u00ed jsou povoleny pro zv\u00fd\u0161en\u00ed propustnosti syst\u00e9mu.",
        sectionNumber: "6.1.7",
        sectionTitle: "Za\u0159\u00edzen\u00ed \u2039rwlock\u203a",
      },
      {
        uuid: "9f0bd325-ba94-4373-bca0-83e3d6aa8377",
        correct:
          "Operace rdlock na za\u0159\u00edzen\u00ed rwlock, ur\u010den\u00e1 pro \u010dten\u00e1\u0159e, je sd\u00edlen\u00e1 z\u00e1mkov\u00e1 operace, kter\u00e1 usp\u011bje nejen ve stavu 'odem\u010deno', ale i ve stavech '\u010dten\u00ed 1, 2, ...', umo\u017e\u0148uj\u00edc tak soub\u011b\u017en\u00fd p\u0159\u00edstup v\u00edce \u010dten\u00e1\u0159\u016f;  blokov\u00e1na je pouze ve stavu 'z\u00e1pis', aby se zabr\u00e1nilo konfliktu mezi \u010dten\u00edm a z\u00e1pisem, a \u010dek\u00e1, dokud za\u0159\u00edzen\u00ed nep\u0159ejde do stavu 'odem\u010deno' nebo '\u010dten\u00ed'.",
        incorrect:
          "Operace rdlock na za\u0159\u00edzen\u00ed rwlock je exkluzivn\u00ed z\u00e1mkov\u00e1 operace, kter\u00e1 m\u016f\u017ee \u00fasp\u011b\u0161n\u011b prob\u011bhnout pouze ve stavu 'odem\u010deno', podobn\u011b jako wrlock; ve stavech '\u010dten\u00ed 1, 2, ...' nebo 'z\u00e1pis' je operace rdlock blokov\u00e1na, proto\u017ee rwlock nepovoluje soub\u011b\u017en\u00fd p\u0159\u00edstup ani pro \u010dten\u00e1\u0159e a vy\u017eaduje v\u00fdhradn\u00ed p\u0159\u00edstup k\u00a0za\u0159\u00edzen\u00ed pro ka\u017edou operaci, v\u010detn\u011b \u010dten\u00ed.",
        sectionNumber: "6.1.7",
        sectionTitle: "Za\u0159\u00edzen\u00ed \u2039rwlock\u203a",
      },
      {
        uuid: "ff648c6c-fcee-4e1f-8e5b-bb390e36bc77",
        correct:
          "Mechanismus RCU (Read-Copy-Update) je alternativn\u00ed \u0159e\u0161en\u00ed probl\u00e9mu \u010dten\u00e1\u0159\u016f a p\u00edsa\u0159\u016f, kter\u00e9 se z\u00e1m\u011brn\u011b vyh\u00fdb\u00e1 pou\u017eit\u00ed z\u00e1mk\u016f a kritick\u00fdch sekc\u00ed, a t\u00edm umo\u017e\u0148uje \u010dten\u00e1\u0159\u016fm pracovat soub\u011b\u017en\u011b s p\u00edsa\u0159i bez nutnosti \u010dek\u00e1n\u00ed na synchronizaci, co\u017e je dosa\u017eeno kop\u00edrov\u00e1n\u00edm datov\u00e9 struktury p\u00edsa\u0159em a n\u00e1slednou aktualizac\u00ed sd\u00edlen\u00e9ho ukazatele na novou verzi.",
        incorrect:
          "Mechanismus RCU (Read-Copy-Update) je alternativn\u00ed \u0159e\u0161en\u00ed probl\u00e9mu \u010dten\u00e1\u0159\u016f a p\u00edsa\u0159\u016f, kter\u00e9 **vy\u017eaduje** pou\u017eit\u00ed z\u00e1mk\u016f a kritick\u00fdch sekc\u00ed, a **proto ne**umo\u017e\u0148uje \u010dten\u00e1\u0159\u016fm pracovat soub\u011b\u017en\u011b s p\u00edsa\u0159i bez nutnosti \u010dek\u00e1n\u00ed na synchronizaci, co\u017e je dosa\u017eeno kop\u00edrov\u00e1n\u00edm datov\u00e9 struktury p\u00edsa\u0159em a n\u00e1slednou aktualizac\u00ed sd\u00edlen\u00e9ho ukazatele na novou verzi.",
        sectionNumber: "6.1.8",
        sectionTitle: "Read-Copy-Update",
      },
      {
        uuid: "4b9a8331-2f6b-418c-a1c4-c70aeb1d3f46",
        correct:
          "V mechanismu RCU (Read-Copy-Update) p\u00edsa\u0159 neupravuje datovou strukturu p\u0159\u00edmo na m\u00edst\u011b, ale vytv\u00e1\u0159\u00ed jej\u00ed kopii, na kter\u00e9 prov\u00e1d\u00ed \u00fapravy, zat\u00edmco \u010dten\u00e1\u0159i nad\u00e1le pracuj\u00ed s p\u016fvodn\u00ed verz\u00ed datov\u00e9 struktury, a a\u017e po dokon\u010den\u00ed \u00faprav a p\u0159esm\u011brov\u00e1n\u00ed sd\u00edlen\u00e9ho ukazatele za\u010dnou nov\u00ed \u010dten\u00e1\u0159i p\u0159istupovat k upraven\u00e9 kopii, co\u017e zaji\u0161\u0165uje konzistenci dat pro \u010dten\u00e1\u0159e po celou dobu operace.",
        incorrect:
          "V mechanismu RCU (Read-Copy-Update) p\u00edsa\u0159 **upravuje datovou strukturu p\u0159\u00edmo na m\u00edst\u011b**, **ani\u017e by vytv\u00e1\u0159el jej\u00ed kopii**,  zat\u00edmco \u010dten\u00e1\u0159i nad\u00e1le pracuj\u00ed s p\u016fvodn\u00ed verz\u00ed datov\u00e9 struktury, a a\u017e po dokon\u010den\u00ed \u00faprav a p\u0159esm\u011brov\u00e1n\u00ed sd\u00edlen\u00e9ho ukazatele za\u010dnou nov\u00ed \u010dten\u00e1\u0159i p\u0159istupovat k upraven\u00e9 kopii, co\u017e zaji\u0161\u0165uje konzistenci dat pro \u010dten\u00e1\u0159e po celou dobu operace.",
        sectionNumber: "6.1.8",
        sectionTitle: "Read-Copy-Update",
      },
      {
        uuid: "995178a6-f11c-4b61-9c0e-ede8991d5f8b",
        correct:
          "Star\u0161\u00ed verze dat v mechanismu RCU (Read-Copy-Update) nemohou b\u00fdt uvoln\u011bny okam\u017eit\u011b po aktualizaci p\u00edsa\u0159em, ale a\u017e pot\u00e9, co je zaru\u010deno, \u017ee \u017e\u00e1dn\u00fd \u010dten\u00e1\u0159 k nim ji\u017e nep\u0159istupuje, co\u017e se \u010dasto \u0159e\u0161\u00ed pomoc\u00ed po\u010d\u00edtadla odkaz\u016f, kter\u00e9 sleduje aktivn\u00ed \u010dten\u00e1\u0159e, a posledn\u00ed \u010dten\u00e1\u0159, kter\u00fd ukon\u010d\u00ed p\u0159\u00edstup, zodpov\u00edd\u00e1 za uvoln\u011bn\u00ed pam\u011bti star\u00e9 verze dat.",
        incorrect:
          "Star\u0161\u00ed verze dat v mechanismu RCU (Read-Copy-Update) **mohou** b\u00fdt uvoln\u011bny **okam\u017eit\u011b** po aktualizaci p\u00edsa\u0159em, **bez ohledu na to, zda k nim je\u0161t\u011b p\u0159istupuj\u00ed n\u011bjac\u00ed \u010dten\u00e1\u0159i**, co\u017e se \u010dasto \u0159e\u0161\u00ed pomoc\u00ed po\u010d\u00edtadla odkaz\u016f, kter\u00e9 sleduje aktivn\u00ed \u010dten\u00e1\u0159e, a posledn\u00ed \u010dten\u00e1\u0159, kter\u00fd ukon\u010d\u00ed p\u0159\u00edstup, zodpov\u00edd\u00e1 za uvoln\u011bn\u00ed pam\u011bti star\u00e9 verze dat.",
        sectionNumber: "6.1.8",
        sectionTitle: "Read-Copy-Update",
      },
      {
        uuid: "e45756ea-c0c3-49ea-873d-ccec545617a9",
        correct:
          "Monitory p\u0159edstavuj\u00ed abstrakci pro synchronizaci v programov\u00e1n\u00ed, kter\u00e1 kombinuje skryt\u00e1 data a viditeln\u00e9 procedury, podobn\u011b jako objektov\u011b orientovan\u00e9 programov\u00e1n\u00ed, a jsou zalo\u017eeny na principu vz\u00e1jemn\u00e9ho vylou\u010den\u00ed, co\u017e zaji\u0161\u0165uje, \u017ee v dan\u00e9m okam\u017eiku m\u016f\u017ee do monitoru vstoupit pouze jedno vl\u00e1kno, \u010d\u00edm\u017e se zjednodu\u0161uje koordinace a sni\u017euje riziko chyb soub\u011bhu oproti p\u0159\u00edm\u00e9mu pou\u017e\u00edv\u00e1n\u00ed mutex\u016f.",
        incorrect:
          "Monitory jsou sofistikovanou sou\u010d\u00e1st\u00ed opera\u010dn\u00edho syst\u00e9mu, kter\u00e1 dynamicky \u0159\u00edd\u00ed p\u0159\u00edstup k dat\u016fm a procedur\u00e1m, a\u010dkoliv se podobaj\u00ed koncept\u016fm objektov\u011b orientovan\u00e9ho programov\u00e1n\u00ed, intern\u011b nevyu\u017e\u00edvaj\u00ed princip vz\u00e1jemn\u00e9ho vylou\u010den\u00ed, umo\u017e\u0148uj\u00ed soub\u011b\u017en\u00fd p\u0159\u00edstup v\u00edce vl\u00e1ken a prim\u00e1rn\u011b se zam\u011b\u0159uj\u00ed na maximalizaci soub\u011b\u017enosti, i kdy\u017e to m\u016f\u017ee v\u00e9st ke slo\u017eit\u011bj\u0161\u00ed koordinaci a vy\u0161\u0161\u00edmu riziku chyb.",
        sectionNumber: "6.1.9",
        sectionTitle: "Monitor",
      },
      {
        uuid: "a77ad896-d276-4a9f-946b-d21c1c6c98a5",
        correct:
          "Implementace monitor\u016f m\u016f\u017ee b\u00fdt \u0159e\u0161ena dv\u011bma strategiemi: ide\u00e1ln\u011b p\u0159eklada\u010dem, kter\u00fd automaticky vkl\u00e1d\u00e1 zamyk\u00e1n\u00ed a odemyk\u00e1n\u00ed mutex\u016f na za\u010d\u00e1tku a konci operac\u00ed, a m\u00e9n\u011b ide\u00e1ln\u011b ru\u010dn\u011b, kdy program\u00e1tor mus\u00ed zajistit spr\u00e1vn\u00e9 zamyk\u00e1n\u00ed a odemyk\u00e1n\u00ed, p\u0159i\u010dem\u017e v druh\u00e9m p\u0159\u00edpad\u011b se \u010dasto vyu\u017e\u00edvaj\u00ed rekurzivn\u00ed mutexy pro podporu vno\u0159en\u00fdch vol\u00e1n\u00ed operac\u00ed monitoru.",
        incorrect:
          "Implementace monitor\u016f je v\u017edy v\u00fdhradn\u011b z\u00e1visl\u00e1 na opera\u010dn\u00edm syst\u00e9mu, kter\u00fd dynamicky spravuje zamyk\u00e1n\u00ed a odemyk\u00e1n\u00ed mutex\u016f na z\u00e1klad\u011b aktu\u00e1ln\u00edho stavu syst\u00e9mu, p\u0159i\u010dem\u017e p\u0159eklada\u010de nemaj\u00ed \u017e\u00e1dnou roli v implementaci monitor\u016f a rekurzivn\u00ed mutexy se v kontextu monitor\u016f nikdy nepou\u017e\u00edvaj\u00ed, proto\u017ee by naru\u0161ovaly princip vz\u00e1jemn\u00e9ho vylou\u010den\u00ed.",
        sectionNumber: "6.1.9",
        sectionTitle: "Monitor",
      },
      {
        uuid: "6bdb30f5-9b6f-4c61-99bf-3b8280428ab9",
        correct:
          "P\u0159esto\u017ee monitory usnad\u0148uj\u00ed synchronizaci a sni\u017euj\u00ed pravd\u011bpodobnost chyb soub\u011bhu, p\u0159id\u00e1vaj\u00ed do programu v\u00edce synchronizace, ne\u017e je striktn\u011b nutn\u00e9, co\u017e m\u016f\u017ee v\u00e9st k men\u0161\u00ed m\u00ed\u0159e soub\u011b\u017enosti, ale tento kompromis mezi soub\u011b\u017enost\u00ed a bezpe\u010dnost\u00ed je v mnoha programech rozumn\u00fd, proto\u017ee minimalizuje riziko obt\u00ed\u017en\u011b odhaliteln\u00fdch synchroniza\u010dn\u00edch chyb.",
        incorrect:
          "Monitory jsou navr\u017eeny tak, aby minimalizovaly synchronizaci a maximalizovaly soub\u011b\u017enost v programech, a proto p\u0159id\u00e1vaj\u00ed pouze absolutn\u00ed minimum synchronizace pot\u0159ebn\u00e9 pro korektn\u00ed fungov\u00e1n\u00ed, co\u017e zaru\u010duje, \u017ee programy s monitory dosahuj\u00ed maxim\u00e1ln\u00ed mo\u017en\u00e9 paralelizace, i kdy\u017e to m\u016f\u017ee v\u00e9st k potenci\u00e1ln\u011b slo\u017eit\u011bj\u0161\u00ed logice a obt\u00ed\u017en\u011bj\u0161\u00edmu lad\u011bn\u00ed synchroniza\u010dn\u00edch probl\u00e9m\u016f.",
        sectionNumber: "6.1.9",
        sectionTitle: "Monitor",
      },
      {
        uuid: "800699e9-437d-4548-9cb6-d24e298052f3",
        correct:
          "Monitor s\u00e1m o sob\u011b negarantuje, \u017ee program jako celek bude bez synchroniza\u010dn\u00edch chyb, proto\u017ee invarianty programu mohou p\u0159esahovat hranice jednotliv\u00fdch monitorovan\u00fdch datov\u00fdch struktur, co\u017e znamen\u00e1, \u017ee i s pou\u017eit\u00edm monitor\u016f je st\u00e1le mo\u017en\u00e9, aby program obsahoval chyby soub\u011bhu, zejm\u00e9na v situac\u00edch, kdy je pot\u0159eba koordinovat operace mezi v\u00edce datov\u00fdmi strukturami.",
        incorrect:
          "Monitor zaru\u010duje, \u017ee jak\u00fdkoliv program, kter\u00fd ho pou\u017e\u00edv\u00e1, bude absolutn\u011b bez synchroniza\u010dn\u00edch chyb, a to i v p\u0159\u00edpadech, kdy invarianty programu p\u0159esahuj\u00ed hranice monitorovan\u00fdch datov\u00fdch struktur, proto\u017ee monitor automaticky koordinuje synchronizaci mezi v\u0161emi datov\u00fdmi strukturami v programu a eliminuje ve\u0161ker\u00e9 potenci\u00e1ln\u00ed chyby soub\u011bhu na syst\u00e9mov\u00e9 \u00farovni.",
        sectionNumber: "6.1.9",
        sectionTitle: "Monitor",
      },
      {
        uuid: "93d36a99-a2fd-49d3-a423-6c87ff5c7ea9",
        correct:
          "Podm\u00ednkov\u00e1 prom\u011bnn\u00e1 je synchroniza\u010dn\u00ed n\u00e1stroj pou\u017e\u00edvan\u00fd v opera\u010dn\u00edch syst\u00e9mech pro \u0159e\u0161en\u00ed probl\u00e9m\u016f soub\u011b\u017en\u00fdch datov\u00fdch z\u00e1vislost\u00ed, kter\u00fd umo\u017e\u0148uje vl\u00e1kn\u016fm efektivn\u011b \u010dekat na spln\u011bn\u00ed ur\u010dit\u00e9 podm\u00ednky p\u0159ed pokra\u010dov\u00e1n\u00edm v prov\u00e1d\u011bn\u00ed k\u00f3du. Operace `wait` slou\u017e\u00ed k zablokov\u00e1n\u00ed vl\u00e1kna, dokud jin\u00e9 vl\u00e1kno neprovede operaci `signal`, kter\u00e1 toto \u010dekaj\u00edc\u00ed vl\u00e1kno odblokuje a umo\u017en\u00ed mu pokra\u010dovat v b\u011bhu.",
        incorrect:
          "Podm\u00ednkov\u00e1 prom\u011bnn\u00e1 je synchroniza\u010dn\u00ed n\u00e1stroj pou\u017e\u00edvan\u00fd v opera\u010dn\u00edch syst\u00e9mech v\u00fdhradn\u011b pro \u0159e\u0161en\u00ed probl\u00e9m\u016f vz\u00e1jemn\u00e9ho vylou\u010den\u00ed a zabr\u00e1n\u011bn\u00ed uv\u00e1znut\u00ed, kter\u00fd prim\u00e1rn\u011b slou\u017e\u00ed k \u0159\u00edzen\u00ed p\u0159\u00edstupu v\u00edce vl\u00e1ken ke sd\u00edlen\u00fdm prost\u0159edk\u016fm. Operace `wait` slou\u017e\u00ed k aktivn\u00edmu \u010dek\u00e1n\u00ed vl\u00e1kna v nekone\u010dn\u00e9 smy\u010dce, dokud jin\u00e9 vl\u00e1kno neprovede operaci `signal`, kter\u00e1 pouze nastav\u00ed intern\u00ed p\u0159\u00edznak, ale nijak neovlivn\u00ed stav \u010dekaj\u00edc\u00edho vl\u00e1kna.",
        sectionNumber: "6.1.10",
        sectionTitle: "Podm\u00ednkov\u00e1 prom\u011bnn\u00e1",
      },
      {
        uuid: "b596e91b-9aec-4b6e-b6f0-d7b3edafcfc6",
        correct:
          "V kontextu podm\u00ednkov\u00fdch prom\u011bnn\u00fdch existuj\u00ed dv\u011b s\u00e9mantick\u00e9 verze popisu stavu: prvn\u00ed verze reprezentuje stav jedn\u00edm bitem, indikuj\u00edc\u00edm \u010dekaj\u00edc\u00ed vl\u00e1kno, kde operace `wait` je p\u0159\u00edpustn\u00e1 pouze pokud \u017e\u00e1dn\u00e9 vl\u00e1kno ne\u010dek\u00e1; druh\u00e1 verze ch\u00e1pe stav jako mno\u017einu \u010dekaj\u00edc\u00edch vl\u00e1ken, umo\u017e\u0148uj\u00edc\u00ed operaci `signal` probudit jedno, v\u0161echna, nebo podmno\u017einu zablokovan\u00fdch vl\u00e1ken.",
        incorrect:
          "V kontextu podm\u00ednkov\u00fdch prom\u011bnn\u00fdch existuj\u00ed dv\u011b s\u00e9mantick\u00e9 verze popisu stavu, kter\u00e9 se li\u0161\u00ed pouze v implementa\u010dn\u00edch detailech, ale nemaj\u00ed vliv na chov\u00e1n\u00ed z pohledu program\u00e1tora: prvn\u00ed verze reprezentuje stav jako \u010d\u00edta\u010d \u010dekaj\u00edc\u00edch vl\u00e1ken, druh\u00e1 verze jako frontu FIFO. Ob\u011b verze v\u0161ak zaru\u010duj\u00ed, \u017ee operace `signal` v\u017edy probud\u00ed v\u0161echna \u010dekaj\u00edc\u00ed vl\u00e1kna v po\u0159ad\u00ed, v jak\u00e9m na prom\u011bnnou \u010dekala.",
        sectionNumber: "6.1.10",
        sectionTitle: "Podm\u00ednkov\u00e1 prom\u011bnn\u00e1",
      },
      {
        uuid: "a101b498-2201-4961-98a6-67bd0f9bb1a8",
        correct:
          "Implementace operace `wait` u podm\u00ednkov\u00e9 prom\u011bnn\u00e9 typicky zahrnuje interakci s pl\u00e1nova\u010dem opera\u010dn\u00edho syst\u00e9mu, podobn\u011b jako u usp\u00e1vaj\u00edc\u00edho mutexu, co\u017e znamen\u00e1, \u017ee \u010dekaj\u00edc\u00ed vl\u00e1kno uvoln\u00ed procesor pro b\u011bh jin\u00fdch vl\u00e1ken. Alternativn\u00ed implementac\u00ed je aktivn\u00ed \u010dek\u00e1n\u00ed, kter\u00e9 se podob\u00e1 spinlocku, av\u0161ak je m\u00e9n\u011b obvykl\u00e9 pro podm\u00ednkov\u00e9 prom\u011bnn\u00e9 z d\u016fvodu obt\u00ed\u017enosti p\u0159edv\u00edd\u00e1n\u00ed doby \u010dek\u00e1n\u00ed na datov\u00e9 z\u00e1vislosti.",
        incorrect:
          "Implementace operace `wait` u podm\u00ednkov\u00e9 prom\u011bnn\u00e9 se z\u00e1sadn\u011b li\u0161\u00ed od implementace usp\u00e1vaj\u00edc\u00edho mutexu, proto\u017ee podm\u00ednkov\u00e1 prom\u011bnn\u00e1 nikdy neinteraguje s pl\u00e1nova\u010dem opera\u010dn\u00edho syst\u00e9mu a \u010dekaj\u00edc\u00ed vl\u00e1kno neust\u00e1le spot\u0159ebov\u00e1v\u00e1 procesorov\u00fd \u010das aktivn\u00edm \u010dek\u00e1n\u00edm. Aktivn\u00ed \u010dek\u00e1n\u00ed je naopak preferovanou implementac\u00ed podm\u00ednkov\u00fdch prom\u011bnn\u00fdch, proto\u017ee minimalizuje re\u017eii p\u0159ep\u00edn\u00e1n\u00ed kontextu.",
        sectionNumber: "6.1.10",
        sectionTitle: "Podm\u00ednkov\u00e1 prom\u011bnn\u00e1",
      },
      {
        uuid: "b748558e-67e9-4376-9ff9-aa21a73fe36b",
        correct:
          "Klasick\u00fd semafor s\u00e1m o sob\u011b p\u0159\u00edmo ne\u0159e\u0161\u00ed probl\u00e9m producent\u016f a konzument\u016f efektivn\u011bji ne\u017e mutex, av\u0161ak s vyu\u017eit\u00edm dvou klasick\u00fdch semafor\u016f, E a F, kde E reprezentuje voln\u00e1 m\u00edsta a F obsazen\u00e1 m\u00edsta, lze implementovat klasick\u00e9 \u0159e\u0161en\u00ed tohoto probl\u00e9mu, p\u0159i\u010dem\u017e operace wait a post na t\u011bchto semaforech koordinuj\u00ed produkci a konzumaci.",
        incorrect:
          "Klasick\u00fd semafor s\u00e1m o sob\u011b p\u0159\u00edmo \u0159e\u0161\u00ed probl\u00e9m producent\u016f a konzument\u016f efektivn\u011bji ne\u017e mutex, a k implementaci klasick\u00e9ho \u0159e\u0161en\u00ed tohoto probl\u00e9mu sta\u010d\u00ed pouze jeden klasick\u00fd semafor, kter\u00fd kombinuje funkce semafor\u016f E a F, reprezentuj\u00edc\u00edch voln\u00e1 a obsazen\u00e1 m\u00edsta, p\u0159i\u010dem\u017e operace wait a post na tomto jedin\u00e9m semaforu koordinuj\u00ed produkci a konzumaci.",
        sectionNumber: "6.1.11",
        sectionTitle: "Semafor",
      },
      {
        uuid: "5b58cdb8-cf37-444f-89c5-064a0ae51fbc",
        correct:
          "Symetrick\u00fd semafor je modifikac\u00ed klasick\u00e9ho semaforu, u kter\u00e9ho operace post, na rozd\u00edl od klasick\u00e9ho semaforu, blokuje v p\u0159\u00edpad\u011b pokusu o p\u0159ekro\u010den\u00ed maxim\u00e1ln\u00ed povolen\u00e9 hodnoty po\u010d\u00edtadla n, \u010d\u00edm\u017e se dosahuje symetrie s operac\u00ed wait, kter\u00e1 blokuje p\u0159i dosa\u017een\u00ed hodnoty 0, a tato \u00faprava umo\u017e\u0148uje p\u0159\u00edm\u011bj\u0161\u00ed \u0159e\u0161en\u00ed probl\u00e9mu producent\u016f a konzument\u016f.",
        incorrect:
          "Symetrick\u00fd semafor je modifikac\u00ed klasick\u00e9ho semaforu, u kter\u00e9ho operace wait, na rozd\u00edl od klasick\u00e9ho semaforu, neblokuje v p\u0159\u00edpad\u011b dosa\u017een\u00ed hodnoty 0, ale pouze sni\u017euje hodnotu po\u010d\u00edtadla, zat\u00edmco operace post z\u016fst\u00e1v\u00e1 stejn\u00e1 jako u klasick\u00e9ho semaforu a neblokuje p\u0159i p\u0159ekro\u010den\u00ed maxim\u00e1ln\u00ed hodnoty n, co\u017e zachov\u00e1v\u00e1 asymetrii operac\u00ed wait a post.",
        sectionNumber: "6.1.11",
        sectionTitle: "Semafor",
      },
      {
        uuid: "c7ffc6f1-8971-4516-a60c-f9bbf1dc46ac",
        correct:
          "V klasick\u00e9m \u0159e\u0161en\u00ed probl\u00e9mu producent\u016f a konzument\u016f s vyu\u017eit\u00edm dvou semafor\u016f, semafor E s po\u010d\u00e1te\u010dn\u00ed hodnotou n reprezentuje po\u010det voln\u00fdch m\u00edst ve front\u011b a semafor F s po\u010d\u00e1te\u010dn\u00ed hodnotou 0 reprezentuje po\u010det zabran\u00fdch m\u00edst, p\u0159i\u010dem\u017e produkce je realizov\u00e1na sekvenc\u00ed operac\u00ed wait E; post F a konzumace sekvenc\u00ed wait F; post E, a plat\u00ed invariant E + F = n.",
        incorrect:
          "V klasick\u00e9m \u0159e\u0161en\u00ed probl\u00e9mu producent\u016f a konzument\u016f s vyu\u017eit\u00edm dvou semafor\u016f, semafor E s po\u010d\u00e1te\u010dn\u00ed hodnotou 0 reprezentuje po\u010det voln\u00fdch m\u00edst ve front\u011b a semafor F s po\u010d\u00e1te\u010dn\u00ed hodnotou n reprezentuje po\u010det zabran\u00fdch m\u00edst, p\u0159i\u010dem\u017e produkce je realizov\u00e1na sekvenc\u00ed operac\u00ed wait F; post E a konzumace sekvenc\u00ed wait E; post F, a invariant je E - F = n.",
        sectionNumber: "6.1.11",
        sectionTitle: "Semafor",
      },
      {
        uuid: "cf50c032-89fe-4e59-a15a-7e05c6a2fb6a",
        correct:
          "Bari\u00e9ra v opera\u010dn\u00edch syst\u00e9mech slou\u017e\u00ed k \u0159e\u0161en\u00ed probl\u00e9mu rozv\u011btven\u00ed a setk\u00e1n\u00ed vl\u00e1ken, p\u0159i\u010dem\u017e se zam\u011b\u0159uje zejm\u00e9na na synchronizaci v\u011bt\u0161\u00edho po\u010dtu vl\u00e1ken, kter\u00e1 paraleln\u011b \u0159e\u0161\u00ed d\u00edl\u010d\u00ed probl\u00e9my v r\u00e1mci komplexn\u011bj\u0161\u00edho v\u00fdpo\u010dtu. Implementace bari\u00e9ry \u010dasto zahrnuje po\u010d\u00edtadlo a podm\u00ednkovou prom\u011bnnou pro efektivn\u00ed \u0159\u00edzen\u00ed pr\u016fchodu vl\u00e1ken synchroniza\u010dn\u00edm bodem.",
        incorrect:
          "Bari\u00e9ra v opera\u010dn\u00edch syst\u00e9mech je prim\u00e1rn\u011b navr\u017eena pro \u0159e\u0161en\u00ed probl\u00e9m\u016f spojen\u00fdch s exkluzivn\u00edm p\u0159\u00edstupem k sd\u00edlen\u00fdm zdroj\u016fm, podobn\u011b jako semafor, a jej\u00ed implementace se typicky op\u00edr\u00e1 o mechanismy z\u00e1mk\u016f a monitor\u016f pro zaji\u0161t\u011bn\u00ed vz\u00e1jemn\u00e9ho vylou\u010den\u00ed a prevenci uv\u00e1znut\u00ed mezi vl\u00e1kny.",
        sectionNumber: "6.1.12",
        sectionTitle: "Bari\u00e9ra",
      },
      {
        uuid: "049885bd-e648-4394-bed6-44d2320748f3",
        correct:
          "Operace `wait` u bari\u00e9ry v opera\u010dn\u00edch syst\u00e9mech m\u00e1 za \u00fakol atomicky sn\u00ed\u017eit po\u010d\u00edtadlo bari\u00e9ry o jedni\u010dku a v p\u0159\u00edpad\u011b, \u017ee v\u00fdsledn\u00e1 hodnota po\u010d\u00edtadla je v\u011bt\u0161\u00ed ne\u017e nula, vl\u00e1kno je usp\u00e1no a \u010dek\u00e1 na sign\u00e1l. Pokud je v\u00fdsledn\u00e1 hodnota nula, operace `wait` signalizuje podm\u00ednku, umo\u017e\u0148uj\u00edc\u00ed probuzen\u00ed \u010dekaj\u00edc\u00edch vl\u00e1ken.",
        incorrect:
          "Operace `wait` u bari\u00e9ry v opera\u010dn\u00edch syst\u00e9mech prim\u00e1rn\u011b slou\u017e\u00ed k aktivn\u00edmu \u010dek\u00e1n\u00ed vl\u00e1ken v smy\u010dce, dokud se nespln\u00ed ur\u010dit\u00e1 podm\u00ednka, jako je dosa\u017een\u00ed specifick\u00e9 hodnoty sd\u00edlen\u00e9 prom\u011bnn\u00e9, p\u0159i\u010dem\u017e se nevyu\u017e\u00edv\u00e1 mechanism\u016f usp\u00e1v\u00e1n\u00ed a probouzen\u00ed vl\u00e1ken opera\u010dn\u00edm syst\u00e9mem.",
        sectionNumber: "6.1.12",
        sectionTitle: "Bari\u00e9ra",
      },
      {
        uuid: "a94ff36e-09a9-471d-8817-d7d4437c1a14",
        correct:
          "Implementace bari\u00e9ry s vyu\u017eit\u00edm aktivn\u00edho \u010dek\u00e1n\u00ed je teoreticky mo\u017en\u00e1, av\u0161ak je pova\u017eov\u00e1na za m\u00e9n\u011b efektivn\u00ed a praktickou v b\u011b\u017en\u00fdch sc\u00e9n\u00e1\u0159\u00edch pou\u017eit\u00ed bari\u00e9r v opera\u010dn\u00edch syst\u00e9mech, proto\u017ee je vhodn\u00e1 pouze pro specifick\u00e9 p\u0159\u00edpady, kdy je zaru\u010deno, \u017ee v\u0161echna vl\u00e1kna dos\u00e1hnou synchroniza\u010dn\u00edho bodu p\u0159ibli\u017en\u011b ve stejn\u00fd \u010das.",
        incorrect:
          "Implementace bari\u00e9ry s vyu\u017eit\u00edm aktivn\u00edho \u010dek\u00e1n\u00ed je preferovan\u00fdm a nejefektivn\u011bj\u0161\u00edm p\u0159\u00edstupem v modern\u00edch opera\u010dn\u00edch syst\u00e9mech, jeliko\u017e minimalizuje re\u017eii spojenou s usp\u00e1v\u00e1n\u00edm a probouzen\u00edm vl\u00e1ken a zaji\u0161\u0165uje rychlej\u0161\u00ed synchronizaci vl\u00e1ken, i kdy\u017e \u010dasy p\u0159\u00edchodu vl\u00e1ken k bari\u00e9\u0159e nejsou synchronizovan\u00e9.",
        sectionNumber: "6.1.12",
        sectionTitle: "Bari\u00e9ra",
      },
    ],
  };
