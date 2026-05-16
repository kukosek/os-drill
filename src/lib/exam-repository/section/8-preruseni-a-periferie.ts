import type { Section } from '../../common/types';

export const section8_preruseni_a_periferie: Section = {
    uuid: "28f24d2f-fc48-4012-a7e9-bad847f0eb09",
    sectionNumber: "8",
    sectionTitle: "P\u0159eru\u0161en\u00ed a periferie",
    statements: [
      {
        uuid: "f278bed9-b78e-4d4c-bfbe-8af240f2436a",
        correct:
          "P\u0159eru\u0161en\u00ed v opera\u010dn\u00edch syst\u00e9mech slou\u017e\u00ed jako synchroniza\u010dn\u00ed mechanismus, kter\u00fd umo\u017e\u0148uje koordinaci mezi hardwarem, konkr\u00e9tn\u011b periferiemi, a softwarem, zejm\u00e9na opera\u010dn\u00edm syst\u00e9mem. V abstraktn\u00ed rovin\u011b je mo\u017en\u00e9 p\u0159eru\u0161en\u00ed ch\u00e1pat jako specifick\u00fd typ synchroniza\u010dn\u00edho n\u00e1stroje, kter\u00fd se odli\u0161uje od b\u011b\u017en\u00fdch mechanism\u016f pro synchronizaci softwarov\u00fdch vl\u00e1ken t\u00edm, \u017ee zprost\u0159edkov\u00e1v\u00e1 interakci mezi hardwarem a softwarem, a nikoli pouze mezi dv\u011bma softwarov\u00fdmi entitami.",
        incorrect:
          "P\u0159eru\u0161en\u00ed v opera\u010dn\u00edch syst\u00e9mech slou\u017e\u00ed prim\u00e1rn\u011b jako mechanismus pro optimalizaci v\u00fdkonu procesoru, umo\u017e\u0148uj\u00edc\u00ed opera\u010dn\u00edmu syst\u00e9mu efektivn\u011bji spravovat procesy a p\u0159id\u011blovat syst\u00e9mov\u00e9 zdroje.  A\u010dkoli p\u0159eru\u0161en\u00ed mohou m\u00edt vedlej\u0161\u00ed efekt synchronizace softwarov\u00fdch vl\u00e1ken, jejich hlavn\u00ed \u00fa\u010del spo\u010d\u00edv\u00e1 v \u0159\u00edzen\u00ed toku instrukc\u00ed a spr\u00e1v\u011b hardwarov\u00fdch ud\u00e1lost\u00ed, nikoli v synchronizaci periferi\u00ed a opera\u010dn\u00edho syst\u00e9mu, jak je tomu u jin\u00fdch synchroniza\u010dn\u00edch za\u0159\u00edzen\u00ed.",
        sectionNumber: "8.1.1",
        sectionTitle: "Synchronizace",
      },
      {
        uuid: "ac667f28-d50e-479a-a326-f1f62d47adf1",
        correct:
          "Asymetrie p\u0159eru\u0161en\u00ed v kontextu opera\u010dn\u00edch syst\u00e9m\u016f se projevuje t\u00edm, \u017ee p\u0159eru\u0161en\u00ed je v\u017edy iniciov\u00e1no periferi\u00ed sm\u011brem k opera\u010dn\u00edmu syst\u00e9mu, a nikoli naopak. Tato asymetrick\u00e1 povaha znamen\u00e1, \u017ee opera\u010dn\u00ed syst\u00e9m je pasivn\u00edm p\u0159\u00edjemcem sign\u00e1l\u016f p\u0159eru\u0161en\u00ed, kter\u00e9 signalizuj\u00ed ud\u00e1losti z hardwarov\u00e9ho prost\u0159ed\u00ed, a nem\u016f\u017ee aktivn\u011b vyvolat p\u0159eru\u0161en\u00ed sm\u011brem k periferii jako formu synchronizace nebo \u0159\u00edzen\u00ed hardwaru.",
        incorrect:
          "Asymetrie p\u0159eru\u0161en\u00ed v opera\u010dn\u00edch syst\u00e9mech spo\u010d\u00edv\u00e1 v tom, \u017ee p\u0159eru\u0161en\u00ed mohou b\u00fdt iniciov\u00e1na jak periferiemi sm\u011brem k opera\u010dn\u00edmu syst\u00e9mu, tak opera\u010dn\u00edm syst\u00e9mem sm\u011brem k periferi\u00edm. Tato obousm\u011brn\u00e1 povaha umo\u017e\u0148uje opera\u010dn\u00edmu syst\u00e9mu aktivn\u011b \u0159\u00eddit a synchronizovat periferie prost\u0159ednictv\u00edm mechanismu p\u0159eru\u0161en\u00ed, \u010d\u00edm\u017e se zvy\u0161uje flexibilita a kontrola nad hardwarov\u00fdmi komponentami syst\u00e9mu.",
        sectionNumber: "8.1.1",
        sectionTitle: "Synchronizace",
      },
      {
        uuid: "e910a4f1-ecfc-4099-9268-2141860d1cd1",
        correct:
          "P\u0159esto\u017ee se p\u0159eru\u0161en\u00ed v opera\u010dn\u00edch syst\u00e9mech li\u0161\u00ed od tradi\u010dn\u00edch synchroniza\u010dn\u00edch mechanism\u016f, jako jsou podm\u00ednkov\u00e9 prom\u011bnn\u00e9, v mnoha ohledech se jim funk\u010dn\u011b podobaj\u00ed. Stejn\u011b jako podm\u00ednkov\u00e1 prom\u011bnn\u00e1, i p\u0159eru\u0161en\u00ed slou\u017e\u00ed k signalizaci ud\u00e1losti \u2013 v p\u0159\u00edpad\u011b p\u0159eru\u0161en\u00ed se jedn\u00e1 o ud\u00e1lost hardwarovou, iniciovanou periferi\u00ed, kter\u00e1 vy\u017eaduje reakci opera\u010dn\u00edho syst\u00e9mu. Toto signaliza\u010dn\u00ed chov\u00e1n\u00ed umo\u017e\u0148uje opera\u010dn\u00edmu syst\u00e9mu efektivn\u011b reagovat na asynchronn\u00ed ud\u00e1losti z periferi\u00ed.",
        incorrect:
          "P\u0159eru\u0161en\u00ed v opera\u010dn\u00edch syst\u00e9mech se z\u00e1sadn\u011b li\u0161\u00ed od synchroniza\u010dn\u00edch mechanism\u016f, jako jsou podm\u00ednkov\u00e9 prom\u011bnn\u00e9, a nemaj\u00ed s nimi funk\u010dn\u00ed paralely. Zat\u00edmco podm\u00ednkov\u00e9 prom\u011bnn\u00e9 slou\u017e\u00ed k synchronizaci softwarov\u00fdch vl\u00e1ken a \u010dek\u00e1n\u00ed na spln\u011bn\u00ed ur\u010dit\u00fdch podm\u00ednek, p\u0159eru\u0161en\u00ed p\u0159edstavuj\u00ed zcela odli\u0161n\u00fd mechanismus pro zpracov\u00e1n\u00ed hardwarov\u00fdch ud\u00e1lost\u00ed a nemaj\u00ed \u017e\u00e1dnou roli v synchronizaci softwarov\u00fdch proces\u016f nebo vl\u00e1ken v opera\u010dn\u00edm syst\u00e9mu.",
        sectionNumber: "8.1.1",
        sectionTitle: "Synchronizace",
      },
      {
        uuid: "fa2baad5-6cc7-4758-bf70-d79997eded72",
        correct:
          "P\u0159eru\u0161en\u00ed je hardwarov\u00fd mechanizmus, kter\u00fd je iniciov\u00e1n periferiemi nebo jin\u00fdmi hardwarov\u00fdmi komponentami a slou\u017e\u00ed k signalizaci procesoru o ud\u00e1lostech, kter\u00e9 vy\u017eaduj\u00ed okam\u017eitou pozornost, jako je dokon\u010den\u00ed I/O operace nebo v\u00fdskyt chyby, a jeho implementace je nezbytn\u00e1 pro efektivn\u00ed fungov\u00e1n\u00ed modern\u00edch opera\u010dn\u00edch syst\u00e9m\u016f.",
        incorrect:
          "P\u0159eru\u0161en\u00ed je softwarov\u00fd mechanizmus opera\u010dn\u00edho syst\u00e9mu, kter\u00fd je iniciov\u00e1n b\u011b\u017e\u00edc\u00edmi procesy a slou\u017e\u00ed k pl\u00e1nov\u00e1n\u00ed \u00faloh a spr\u00e1v\u011b syst\u00e9mov\u00fdch prost\u0159edk\u016f, p\u0159i\u010dem\u017e se jedn\u00e1 o pln\u011b softwarovou abstrakci implementovanou v\u00fdhradn\u011b na \u00farovni opera\u010dn\u00edho syst\u00e9mu bez nutnosti hardwarov\u00e9 podpory.",
        sectionNumber: "8.1.2",
        sectionTitle: "Procesor",
      },
      {
        uuid: "d35fb843-6903-4aed-b535-1dd4c622df75",
        correct:
          "Opera\u010dn\u00ed syst\u00e9m, jako\u017eto komplexn\u00ed programov\u00fd syst\u00e9m, je vykon\u00e1v\u00e1n centr\u00e1ln\u00ed procesorovou jednotkou (CPU), kter\u00e1 prov\u00e1d\u00ed jeho instrukce a zaji\u0161\u0165uje tak ve\u0161kerou funk\u010dnost syst\u00e9mu, od spr\u00e1vy pam\u011bti a proces\u016f a\u017e po obsluhu periferi\u00ed a poskytov\u00e1n\u00ed u\u017eivatelsk\u00e9ho rozhran\u00ed, co\u017e je kl\u00ed\u010dov\u00e9 pro b\u011bh aplikac\u00ed a interakci u\u017eivatele s po\u010d\u00edta\u010dem.",
        incorrect:
          "Opera\u010dn\u00ed syst\u00e9m je prim\u00e1rn\u011b vykon\u00e1v\u00e1n v opera\u010dn\u00ed pam\u011bti (RAM) a je nez\u00e1visl\u00fd na centr\u00e1ln\u00ed procesorov\u00e9 jednotce (CPU), kter\u00e1 pouze zaji\u0161\u0165uje prov\u00e1d\u011bn\u00ed jednotliv\u00fdch aplikac\u00ed a perifern\u00edch za\u0159\u00edzen\u00ed, p\u0159i\u010dem\u017e opera\u010dn\u00ed syst\u00e9m funguje jako pasivn\u00ed spr\u00e1vce zdroj\u016f ulo\u017een\u00fd v pam\u011bti.",
        sectionNumber: "8.1.2",
        sectionTitle: "Procesor",
      },
      {
        uuid: "1d6ab62a-c7fa-43b8-9aa3-f6331f38069d",
        correct:
          "Realizace p\u0159eru\u0161en\u00ed je kl\u00ed\u010dovou funkc\u00ed centr\u00e1ln\u00ed procesorov\u00e9 jednotky (CPU), kter\u00e1 po obdr\u017een\u00ed sign\u00e1lu p\u0159eru\u0161en\u00ed z periferie nebo jin\u00e9ho zdroje mus\u00ed p\u0159eru\u0161it aktu\u00e1ln\u011b prov\u00e1d\u011bn\u00fd program, ulo\u017eit jeho stav a spustit obslu\u017enou rutinu p\u0159eru\u0161en\u00ed, \u010d\u00edm\u017e zajist\u00ed rychlou a efektivn\u00ed reakci na ud\u00e1losti vy\u017eaduj\u00edc\u00ed okam\u017eitou pozornost.",
        incorrect:
          "Realizace p\u0159eru\u0161en\u00ed je pln\u011b v kompetenci opera\u010dn\u00edho syst\u00e9mu, kter\u00fd na z\u00e1klad\u011b sign\u00e1lu z periferie s\u00e1m obslou\u017e\u00ed p\u0159eru\u0161en\u00ed bez p\u0159\u00edm\u00e9ho z\u00e1sahu centr\u00e1ln\u00ed procesorov\u00e9 jednotky (CPU), p\u0159i\u010dem\u017e CPU je pouze informov\u00e1no o dokon\u010den\u00ed obsluhy p\u0159eru\u0161en\u00ed opera\u010dn\u00edm syst\u00e9mem.",
        sectionNumber: "8.1.2",
        sectionTitle: "Procesor",
      },
      {
        uuid: "009a87af-f4fa-4dfe-ad3c-82022446254b",
        correct:
          "P\u0159eru\u0161en\u00ed v opera\u010dn\u00edch syst\u00e9mech jsou implementov\u00e1na jako preemptivn\u00ed mechanismus, co\u017e znamen\u00e1, \u017ee v okam\u017eiku v\u00fdskytu p\u0159eru\u0161en\u00ed je aktu\u00e1ln\u011b b\u011b\u017e\u00edc\u00ed procesorov\u00e1 \u010dinnost okam\u017eit\u011b pozastavena, stav aktu\u00e1ln\u00edho vl\u00e1kna je ulo\u017een a procesor za\u010dne vykon\u00e1vat obsluhu p\u0159eru\u0161en\u00ed, aby se minimalizovala latence a zajistila rychl\u00e1 reakce na d\u016fle\u017eit\u00e9 ud\u00e1losti.",
        incorrect:
          "P\u0159eru\u0161en\u00ed v opera\u010dn\u00edch syst\u00e9mech jsou obvykle implementov\u00e1na jako nepreemptivn\u00ed mechanismus, co\u017e znamen\u00e1, \u017ee aktu\u00e1ln\u011b b\u011b\u017e\u00edc\u00ed procesorov\u00e1 \u010dinnost nen\u00ed okam\u017eit\u011b pozastavena, ale obsluha p\u0159eru\u0161en\u00ed je odlo\u017eena a\u017e do dokon\u010den\u00ed aktu\u00e1ln\u00ed instrukce nebo bloku instrukc\u00ed, aby se minimalizovalo re\u017eijn\u00ed n\u00e1klady spojen\u00e9 s p\u0159ep\u00edn\u00e1n\u00edm kontextu.",
        sectionNumber: "8.1.2",
        sectionTitle: "Procesor",
      },
      {
        uuid: "b45a8e7b-9873-44d5-9d9e-3e8b8c56e3ec",
        correct:
          "P\u0159eru\u0161en\u00ed v opera\u010dn\u00edch syst\u00e9mech existuj\u00ed v instanc\u00edch, jejich\u017e po\u010det je omezen hardwarov\u00fdmi specifikacemi a typicky dosahuje maxim\u00e1ln\u00edho po\u010dtu 256, p\u0159i\u010dem\u017e ka\u017ed\u00e1 instance p\u0159eru\u0161en\u00ed je identifikov\u00e1na unik\u00e1tn\u00edm \u010d\u00edslem, co\u017e umo\u017e\u0148uje opera\u010dn\u00edmu syst\u00e9mu rozli\u0161ovat mezi r\u016fzn\u00fdmi zdroji p\u0159eru\u0161en\u00ed a efektivn\u011b spravovat asynchronn\u00ed ud\u00e1losti vyvolan\u00e9 hardwarem nebo softwarem.",
        incorrect:
          "P\u0159eru\u0161en\u00ed v opera\u010dn\u00edch syst\u00e9mech existuj\u00ed pouze v jedn\u00e9 glob\u00e1ln\u00ed instanci, kter\u00e1 nen\u00ed omezena hardwarov\u00fdmi specifikacemi, a nen\u00ed identifikov\u00e1na unik\u00e1tn\u00edm \u010d\u00edslem, co\u017e zjednodu\u0161uje spr\u00e1vu asynchronn\u00edch ud\u00e1lost\u00ed, ale omezuje schopnost opera\u010dn\u00edho syst\u00e9mu efektivn\u011b rozli\u0161ovat mezi r\u016fzn\u00fdmi zdroji p\u0159eru\u0161en\u00ed a spravovat specifick\u00e9 po\u017eadavky jednotliv\u00fdch periferi\u00ed.",
        sectionNumber: "8.1.3",
        sectionTitle: "Instance",
      },
      {
        uuid: "9b55aef3-330d-4455-b864-f5ec5acfaca3",
        correct:
          "Obsluha p\u0159eru\u0161en\u00ed je v opera\u010dn\u00edch syst\u00e9mech realizov\u00e1na prost\u0159ednictv\u00edm specializovan\u00fdch podprogram\u016f, jejich\u017e adresy jsou ulo\u017eeny v tabulce obsluhy p\u0159eru\u0161en\u00ed, co\u017e umo\u017e\u0148uje syst\u00e9mu rychle a efektivn\u011b reagovat na p\u0159eru\u0161en\u00ed; tato tabulka funguje jako kl\u00ed\u010dov\u00fd mechanismus pro sm\u011brov\u00e1n\u00ed \u0159\u00edzen\u00ed k odpov\u00eddaj\u00edc\u00ed obslu\u017en\u00e9 rutin\u011b na z\u00e1klad\u011b \u010d\u00edsla p\u0159eru\u0161en\u00ed.",
        incorrect:
          "Obsluha p\u0159eru\u0161en\u00ed je v opera\u010dn\u00edch syst\u00e9mech realizov\u00e1na p\u0159\u00edmo v j\u00e1d\u0159e opera\u010dn\u00edho syst\u00e9mu bez pou\u017eit\u00ed podprogram\u016f nebo tabulek obsluhy p\u0159eru\u0161en\u00ed, co\u017e eliminuje re\u017eii spojenou s vyhled\u00e1v\u00e1n\u00edm adres obslu\u017en\u00fdch rutin, ale z\u00e1rove\u0148 \u010din\u00ed reakci na p\u0159eru\u0161en\u00ed m\u00e9n\u011b flexibiln\u00ed a h\u016f\u0159e \u0161k\u00e1lovatelnou pro syst\u00e9my s velk\u00fdm mno\u017estv\u00edm periferi\u00ed a typ\u016f p\u0159eru\u0161en\u00ed.",
        sectionNumber: "8.1.3",
        sectionTitle: "Instance",
      },
      {
        uuid: "6cfc9f3e-5a4e-4ef6-8f5c-0155128c9187",
        correct:
          "P\u0159esto\u017ee p\u0159eru\u0161en\u00ed v opera\u010dn\u00edch syst\u00e9mech mohou b\u00fdt ch\u00e1p\u00e1na jako synchroniza\u010dn\u00ed mechanismy podobn\u00e9 podm\u00ednkov\u00fdm prom\u011bnn\u00fdm, jsou implementov\u00e1na hardwarov\u011b na n\u00edzk\u00e9 \u00farovni, co\u017e znamen\u00e1, \u017ee po\u010det instanc\u00ed p\u0159eru\u0161en\u00ed je fixn\u00ed a omezen\u00fd hardwarovou architekturou syst\u00e9mu, na rozd\u00edl od softwarov\u00fdch synchroniza\u010dn\u00edch mechanism\u016f, kter\u00e9 mohou b\u00fdt dynamicky vytv\u00e1\u0159eny a ru\u0161eny.",
        incorrect:
          "P\u0159esto\u017ee p\u0159eru\u0161en\u00ed v opera\u010dn\u00edch syst\u00e9mech mohou b\u00fdt ch\u00e1p\u00e1na jako synchroniza\u010dn\u00ed mechanismy podobn\u00e9 semafor\u016fm, jsou implementov\u00e1na softwarov\u011b na vysok\u00e9 \u00farovni, co\u017e znamen\u00e1, \u017ee po\u010det instanc\u00ed p\u0159eru\u0161en\u00ed je dynamick\u00fd a neomezen\u00fd hardwarovou architekturou syst\u00e9mu, podobn\u011b jako softwarov\u00e9 synchroniza\u010dn\u00ed mechanismy, kter\u00e9 mohou b\u00fdt flexibiln\u011b vytv\u00e1\u0159eny a ru\u0161eny podle pot\u0159eby.",
        sectionNumber: "8.1.3",
        sectionTitle: "Instance",
      },
      {
        uuid: "a225d903-75d1-4763-b3ba-352aee711c9d",
        correct:
          "Obslu\u017en\u00fd podprogram p\u0159eru\u0161en\u00ed se podob\u00e1 standardn\u00edmu podprogramu v tom, \u017ee m\u016f\u017ee b\u00fdt implementov\u00e1n v jazyce vysok\u00e9 \u00farovn\u011b, jako je C, a je schopen volat dal\u0161\u00ed podprogramy, co\u017e mu umo\u017e\u0148uje prov\u00e1d\u011bt komplexn\u011bj\u0161\u00ed operace a vyu\u017e\u00edvat existuj\u00edc\u00ed knihovny a funkce pro zpracov\u00e1n\u00ed p\u0159eru\u0161en\u00ed.",
        incorrect:
          "Obslu\u017en\u00fd podprogram p\u0159eru\u0161en\u00ed se z\u00e1sadn\u011b li\u0161\u00ed od standardn\u00edho podprogramu v tom, \u017ee nem\u016f\u017ee b\u00fdt implementov\u00e1n v jazyce vysok\u00e9 \u00farovn\u011b, jako je C, a nen\u00ed schopen volat dal\u0161\u00ed podprogramy, co\u017e ho omezuje na velmi jednoduch\u00e9 operace a vy\u017eaduje implementaci ve strojov\u00e9m k\u00f3du.",
        sectionNumber: "8.1.4",
        sectionTitle: "Stav procesoru",
      },
      {
        uuid: "609a997b-1a0b-47f1-b406-82b47e973540",
        correct:
          "Pro zaji\u0161t\u011bn\u00ed spr\u00e1vn\u00e9 funk\u010dnosti obsluhy p\u0159eru\u0161en\u00ed a zabr\u00e1n\u011bn\u00ed koliz\u00edm se st\u00e1vaj\u00edc\u00edm kontextem procesu se stav procesoru p\u0159i vstupu do obslu\u017en\u00e9ho podprogramu ukl\u00e1d\u00e1 do opera\u010dn\u00ed pam\u011bti RAM a b\u011b\u017en\u011b doch\u00e1z\u00ed k p\u0159epnut\u00ed na vyhrazen\u00fd z\u00e1sobn\u00edk, \u010d\u00edm\u017e se izoluje pam\u011b\u0165ov\u00fd prostor obsluhy p\u0159eru\u0161en\u00ed.",
        incorrect:
          "Pro urychlen\u00ed zpracov\u00e1n\u00ed p\u0159eru\u0161en\u00ed a minimalizaci re\u017eie se stav procesoru p\u0159i vstupu do obslu\u017en\u00e9ho podprogramu neukl\u00e1d\u00e1 a nikdy nedoch\u00e1z\u00ed k p\u0159epnut\u00ed na vyhrazen\u00fd z\u00e1sobn\u00edk, \u010d\u00edm\u017e obsluha p\u0159eru\u0161en\u00ed sd\u00edl\u00ed pam\u011b\u0165ov\u00fd prostor s aktu\u00e1ln\u011b b\u011b\u017e\u00edc\u00edm procesem.",
        sectionNumber: "8.1.4",
        sectionTitle: "Stav procesoru",
      },
      {
        uuid: "f1078049-8043-4045-8df2-4dd0ddedabfe",
        correct:
          "A\u010dkoliv se obsluha p\u0159eru\u0161en\u00ed chov\u00e1 podobn\u011b jako aktivace vl\u00e1kna v opera\u010dn\u00edm syst\u00e9mu, s ohledem na kr\u00e1tkodobost jej\u00edho b\u011bhu a fakt, \u017ee po jej\u00edm ukon\u010den\u00ed se stav procesoru neukl\u00e1d\u00e1 pro pozd\u011bj\u0161\u00ed pokra\u010dov\u00e1n\u00ed, je p\u0159esn\u011bj\u0161\u00ed ch\u00e1pat obsluhu p\u0159eru\u0161en\u00ed sp\u00ed\u0161e jako formu kr\u00e1tkodob\u00e9ho vl\u00e1kna s omezenou \u017eivotnost\u00ed.",
        incorrect:
          "Obsluha p\u0159eru\u0161en\u00ed se chov\u00e1 zcela identicky jako aktivace standardn\u00edho vl\u00e1kna v opera\u010dn\u00edm syst\u00e9mu, v\u010detn\u011b dlouhodob\u00e9ho charakteru jej\u00edho b\u011bhu a faktu, \u017ee po jej\u00edm ukon\u010den\u00ed se stav procesoru ukl\u00e1d\u00e1 pro pozd\u011bj\u0161\u00ed pokra\u010dov\u00e1n\u00ed, co\u017e umo\u017e\u0148uje obsluze p\u0159eru\u0161en\u00ed b\u011b\u017eet na pozad\u00ed.",
        sectionNumber: "8.1.4",
        sectionTitle: "Stav procesoru",
      },
      {
        uuid: "8f9402a7-dfe0-41ec-8669-7e184ba65a47",
        correct:
          "Obsluha p\u0159eru\u0161en\u00ed mus\u00ed \u0159e\u0161it synchronizaci s ostatn\u00edmi procesorov\u00fdmi j\u00e1dry, kde mohou b\u011b\u017eet jin\u00e9 \u010d\u00e1sti syst\u00e9mu v\u010detn\u011b obsluh p\u0159eru\u0161en\u00ed, a pro tento sc\u00e9n\u00e1\u0159 je mo\u017en\u00e9 pou\u017e\u00edt spinlocky nebo nezamykaj\u00edc\u00ed komunika\u010dn\u00ed mechanismy, proto\u017ee procesorov\u00e1 j\u00e1dra pracuj\u00ed paraleln\u011b a mohou se synchronizovat b\u011b\u017en\u00fdmi prost\u0159edky pro v\u00edceprocesorov\u00e9 syst\u00e9my.",
        incorrect:
          "Obsluha p\u0159eru\u0161en\u00ed se nikdy nemus\u00ed synchronizovat s ostatn\u00edmi procesorov\u00fdmi j\u00e1dry, proto\u017ee p\u0159eru\u0161en\u00ed jsou v\u017edy zpracov\u00e1v\u00e1na izolovan\u011b na j\u00e1d\u0159e, na kter\u00e9m vznikla, a proto se nem\u016f\u017ee st\u00e1t, \u017ee by obsluha p\u0159eru\u0161en\u00ed b\u011b\u017e\u00edc\u00ed na jednom j\u00e1d\u0159e ovlivnila b\u011bh obsluhy p\u0159eru\u0161en\u00ed nebo jin\u00e9ho k\u00f3du j\u00e1dra b\u011b\u017e\u00edc\u00edho na jin\u00e9m j\u00e1d\u0159e.",
        sectionNumber: "8.1.5",
        sectionTitle: "Soub\u011b\u017enost",
      },
      {
        uuid: "465e6f78-5971-4bd0-aa8f-190438af03cd",
        correct:
          "Pro synchronizaci obsluhy p\u0159eru\u0161en\u00ed se zbytkem syst\u00e9mu b\u011b\u017e\u00edc\u00edm na stejn\u00e9m procesorov\u00e9m j\u00e1d\u0159e, kter\u00fd byl p\u0159eru\u0161en, nelze pou\u017e\u00edt spinlocky, proto\u017ee p\u0159eru\u0161en\u00fd k\u00f3d nem\u016f\u017ee pokra\u010dovat v b\u011bhu, dokud obsluha p\u0159eru\u0161en\u00ed neskon\u010d\u00ed, co\u017e by vedlo k uv\u00e1znut\u00ed (deadlocku), pokud by se p\u0159eru\u0161en\u00fd k\u00f3d pokou\u0161el z\u00edskat stejn\u00fd spinlock.",
        incorrect:
          "Pro synchronizaci obsluhy p\u0159eru\u0161en\u00ed se zbytkem syst\u00e9mu b\u011b\u017e\u00edc\u00edm na stejn\u00e9m procesorov\u00e9m j\u00e1d\u0159e je spinlock ide\u00e1ln\u00edm \u0159e\u0161en\u00edm, proto\u017ee zaru\u010duje exkluzivn\u00ed p\u0159\u00edstup k sd\u00edlen\u00fdm zdroj\u016fm a z\u00e1rove\u0148 umo\u017e\u0148uje obsluze p\u0159eru\u0161en\u00ed efektivn\u011b \u010dekat na uvoln\u011bn\u00ed z\u00e1mku, ani\u017e by musela p\u0159ep\u00ednat kontext nebo blokovat pl\u00e1nova\u010d.",
        sectionNumber: "8.1.5",
        sectionTitle: "Soub\u011b\u017enost",
      },
      {
        uuid: "8208739f-22d7-4a71-8495-2582c5c0e42a",
        correct:
          "Pokud dojde k soub\u011b\u017en\u00e9mu p\u0159eru\u0161en\u00ed na stejn\u00e9m procesorov\u00e9m j\u00e1d\u0159e, synchronizace obsluh t\u011bchto p\u0159eru\u0161en\u00ed se \u0159e\u0161\u00ed z\u00e1kazem p\u0159eru\u0161en\u00ed, co\u017e odlo\u017e\u00ed obsluhu nov\u011b p\u0159\u00edchoz\u00edho p\u0159eru\u0161en\u00ed a\u017e do doby, kdy je aktu\u00e1ln\u011b obsluhovan\u00e9 p\u0159eru\u0161en\u00ed dokon\u010deno a p\u0159eru\u0161en\u00ed jsou op\u011btovn\u011b povolena, \u010d\u00edm\u017e se zajist\u00ed vz\u00e1jemn\u00e9 vylou\u010den\u00ed.",
        incorrect:
          "P\u0159i soub\u011b\u017en\u00e9m p\u0159eru\u0161en\u00ed na stejn\u00e9m procesorov\u00e9m j\u00e1d\u0159e se synchronizace obsluh p\u0159eru\u0161en\u00ed prov\u00e1d\u00ed pomoc\u00ed semafor\u016f, kter\u00e9 umo\u017e\u0148uj\u00ed obsluh\u00e1m p\u0159eru\u0161en\u00ed vz\u00e1jemn\u011b se blokovat a uvol\u0148ovat, a t\u00edm koordinovat p\u0159\u00edstup ke sd\u00edlen\u00fdm zdroj\u016fm a zajistit spr\u00e1vn\u00e9 po\u0159ad\u00ed zpracov\u00e1n\u00ed ud\u00e1lost\u00ed, ani\u017e by bylo nutn\u00e9 zakazovat p\u0159eru\u0161en\u00ed.",
        sectionNumber: "8.1.5",
        sectionTitle: "Soub\u011b\u017enost",
      },
      {
        uuid: "665d4982-7976-4f84-8fed-3884ff6732c4",
        correct:
          "Z\u00e1kaz p\u0159eru\u0161en\u00ed v opera\u010dn\u00edm syst\u00e9mu je z\u00e1m\u011brn\u011b navr\u017een jako asymetrick\u00fd mechanismus, kde obslu\u017en\u00fd podprogram p\u0159eru\u0161en\u00ed m\u016f\u017ee zak\u00e1zat p\u0159eru\u0161en\u00ed, aby ochr\u00e1nil kritickou sekci k\u00f3du p\u0159ed konkuren\u010dn\u00edm p\u0159\u00edstupem ze strany jin\u00fdch \u010d\u00e1st\u00ed j\u00e1dra, ale nem\u016f\u017ee t\u00edmto z\u00e1kazem ovlivnit chov\u00e1n\u00ed jin\u00fdch \u010d\u00e1st\u00ed j\u00e1dra, kter\u00e9 by se mohly pokou\u0161et o zak\u00e1z\u00e1n\u00ed p\u0159eru\u0161en\u00ed z jin\u00fdch d\u016fvod\u016f.",
        incorrect:
          "Z\u00e1kaz p\u0159eru\u0161en\u00ed v opera\u010dn\u00edm syst\u00e9mu je symetrick\u00fd mechanismus, kde jak obslu\u017en\u00fd podprogram p\u0159eru\u0161en\u00ed, tak i jin\u00e9 \u010d\u00e1sti j\u00e1dra mohou vz\u00e1jemn\u011b ovliv\u0148ovat sv\u00e9 schopnosti zakazovat p\u0159eru\u0161en\u00ed, co\u017e zaji\u0161\u0165uje flexibiln\u00ed a vyv\u00e1\u017een\u00fd p\u0159\u00edstup k synchronizaci kritick\u00fdch sekc\u00ed v j\u00e1d\u0159e opera\u010dn\u00edho syst\u00e9mu a umo\u017e\u0148uje komplexn\u00ed koordinaci mezi r\u016fzn\u00fdmi komponentami syst\u00e9mu.",
        sectionNumber: "8.1.6",
        sectionTitle: "Reentrance",
      },
      {
        uuid: "bd66511b-4608-4d67-b7b8-1881d511cae5",
        correct:
          "P\u0159esto\u017ee je z\u00e1kaz p\u0159eru\u0161en\u00ed efektivn\u00ed technikou pro ochranu kritick\u00fdch sekc\u00ed v j\u00e1d\u0159e opera\u010dn\u00edho syst\u00e9mu, je z\u00e1sadn\u00ed, aby doba trv\u00e1n\u00ed z\u00e1kazu p\u0159eru\u0161en\u00ed byla minimalizov\u00e1na, proto\u017ee prodlou\u017een\u00fd z\u00e1kaz p\u0159eru\u0161en\u00ed m\u016f\u017ee negativn\u011b ovlivnit odezvu syst\u00e9mu na extern\u00ed ud\u00e1losti a zp\u016fsobit zpo\u017ed\u011bn\u00ed v obsluze dal\u0161\u00edch, potenci\u00e1ln\u011b d\u016fle\u017eit\u00fdch p\u0159eru\u0161en\u00ed.",
        incorrect:
          "Dlouhodob\u00fd z\u00e1kaz p\u0159eru\u0161en\u00ed v opera\u010dn\u00edm syst\u00e9mu je b\u011b\u017enou a doporu\u010denou prax\u00ed pro zaji\u0161t\u011bn\u00ed maxim\u00e1ln\u00ed bezpe\u010dnosti a integrity kritick\u00fdch sekc\u00ed, proto\u017ee del\u0161\u00ed doba z\u00e1kazu poskytuje v\u011bt\u0161\u00ed jistotu, \u017ee nedojde ke konkuren\u010dn\u00edmu p\u0159\u00edstupu nebo naru\u0161en\u00ed kritick\u00e9 operace, a minimalizuje tak riziko chyb a nestability syst\u00e9mu.",
        sectionNumber: "8.1.6",
        sectionTitle: "Reentrance",
      },
      {
        uuid: "97f4cc00-f0c8-4249-9ebe-6923204d33c4",
        correct:
          "V kontextu synchronizace mezi obsluhou p\u0159eru\u0161en\u00ed a zbytkem j\u00e1dra opera\u010dn\u00edho syst\u00e9mu je kl\u00ed\u010dov\u00e9 rozli\u0161ovat dva sc\u00e9n\u00e1\u0159e kritick\u00fdch sekc\u00ed: prvn\u00ed, kdy obsluha p\u0159eru\u0161en\u00ed obsahuje kritickou sekci v\u016f\u010di zbytku j\u00e1dra, a druh\u00fd, kdy jin\u00e1 \u010d\u00e1st j\u00e1dra je kritick\u00e1 v\u016f\u010di akc\u00edm prov\u00e1d\u011bn\u00fdm v obsluze p\u0159eru\u0161en\u00ed, p\u0159i\u010dem\u017e ka\u017ed\u00fd sc\u00e9n\u00e1\u0159 vy\u017eaduje specifick\u00fd p\u0159\u00edstup k synchronizaci a ochran\u011b sd\u00edlen\u00fdch zdroj\u016f.",
        incorrect:
          "V kontextu synchronizace mezi obsluhou p\u0159eru\u0161en\u00ed a zbytkem j\u00e1dra opera\u010dn\u00edho syst\u00e9mu nen\u00ed nutn\u00e9 rozli\u0161ovat r\u016fzn\u00e9 sc\u00e9n\u00e1\u0159e kritick\u00fdch sekc\u00ed, proto\u017ee mechanismy synchronizace, jako je z\u00e1kaz p\u0159eru\u0161en\u00ed, jsou univerz\u00e1ln\u00ed a efektivn\u011b \u0159e\u0161\u00ed v\u0161echny potenci\u00e1ln\u00ed konflikty a konkuren\u010dn\u00ed p\u0159\u00edstupy ke sd\u00edlen\u00fdm zdroj\u016fm bez ohledu na specifickou povahu kritick\u00e9 sekce nebo interakce mezi obsluhou p\u0159eru\u0161en\u00ed a zbytkem j\u00e1dra.",
        sectionNumber: "8.1.6",
        sectionTitle: "Reentrance",
      },
      {
        uuid: "06e28da4-ab67-4485-9e16-2cc936d89064",
        correct:
          "Vl\u00e1kno, v kontextu opera\u010dn\u00edch syst\u00e9m\u016f, je definov\u00e1no jako sekven\u010dn\u00ed v\u00fdpo\u010detn\u00ed jednotka reprezentuj\u00edc\u00ed posloupnost zm\u011bn stavu, kter\u00e1 vznik\u00e1 nep\u0159eru\u0161enou \u010dinnost\u00ed procesoru \u0159\u00edzen\u00e9ho programem, p\u0159i\u010dem\u017e kl\u00ed\u010dov\u00fdm rysem vl\u00e1ken je jejich nez\u00e1vislost na adresn\u00edm prostoru, co\u017e umo\u017e\u0148uje existenci v\u00edce vl\u00e1ken v r\u00e1mci jednoho procesu, sd\u00edlej\u00edc\u00edch spole\u010dn\u00fd adresn\u00ed prostor a syst\u00e9mov\u00e9 zdroje.",
        incorrect:
          "Vl\u00e1kno je v opera\u010dn\u00edch syst\u00e9mech ch\u00e1p\u00e1no jako zcela izolovan\u00e1 v\u00fdpo\u010detn\u00ed jednotka, kter\u00e1 je striktn\u011b v\u00e1z\u00e1na na adresn\u00ed prostor procesu, co\u017e znamen\u00e1, \u017ee ka\u017ed\u00fd proces m\u016f\u017ee obsahovat v\u00fdhradn\u011b jedno vl\u00e1kno, kter\u00e9 m\u00e1 exkluzivn\u00ed a izolovan\u00fd p\u0159\u00edstup k adresn\u00edmu prostoru dan\u00e9ho procesu, a sd\u00edlen\u00ed adresn\u00edho prostoru mezi vl\u00e1kny v jednom procesu nen\u00ed mo\u017en\u00e9.",
        sectionNumber: "8.2.1",
        sectionTitle: "Kontext",
      },
      {
        uuid: "efab0ccb-3854-40d7-b946-c5bde2991fda",
        correct:
          "Aktivace obsluhy p\u0159eru\u0161en\u00ed v opera\u010dn\u00edm syst\u00e9mu vykazuje podobnosti s aktivac\u00ed vl\u00e1kna, zejm\u00e9na v kontextu minimalizace re\u017eijn\u00edch n\u00e1klad\u016f spojen\u00fdch s p\u0159ep\u00edn\u00e1n\u00edm proces\u016f, jeliko\u017e obsluha p\u0159eru\u0161en\u00ed je aktivov\u00e1na bez nutnosti p\u0159epnut\u00ed procesu a b\u011b\u017e\u00ed v adresn\u00edm prostoru aktu\u00e1ln\u011b aktivn\u00edho procesu, \u010d\u00edm\u017e se z\u00e1sadn\u011b odli\u0161uje od aktivace nov\u00e9ho procesu, kter\u00e1 vy\u017eaduje n\u00e1kladnou zm\u011bnu mapov\u00e1n\u00ed pam\u011bti.",
        incorrect:
          "Aktivace obsluhy p\u0159eru\u0161en\u00ed se v opera\u010dn\u00edch syst\u00e9mech z\u00e1sadn\u011b li\u0161\u00ed od aktivace vl\u00e1kna a je analogick\u00e1 aktivaci nov\u00e9ho procesu, proto\u017ee obsluha p\u0159eru\u0161en\u00ed v\u017edy vy\u017eaduje kompletn\u00ed p\u0159epnut\u00ed procesu, v\u010detn\u011b zm\u011bny mapov\u00e1n\u00ed pam\u011bti a kontextu, co\u017e vede k tomu, \u017ee obsluha p\u0159eru\u0161en\u00ed b\u011b\u017e\u00ed v izolovan\u00e9m adresn\u00edm prostoru, odd\u011blen\u00e9m od adresn\u00edho prostoru procesu, kter\u00fd p\u0159eru\u0161en\u00ed vyvolal.",
        sectionNumber: "8.2.1",
        sectionTitle: "Kontext",
      },
      {
        uuid: "ced905c1-db7f-4b0e-a78e-ea62ec3d960a",
        correct:
          "Pro zaji\u0161t\u011bn\u00ed efektivn\u00ed a rychl\u00e9 obsluhy p\u0159eru\u0161en\u00ed v opera\u010dn\u00edm syst\u00e9mu je nezbytn\u00e9, aby pam\u011b\u0165ov\u00e9 struktury vyu\u017e\u00edvan\u00e9 obsluhou p\u0159eru\u0161en\u00ed byly mapov\u00e1ny do v\u0161ech virtu\u00e1ln\u00edch adresn\u00edch prostor\u016f spu\u0161t\u011bn\u00fdch proces\u016f a sou\u010dasn\u011b byly dostupn\u00e9 na identick\u00fdch virtu\u00e1ln\u00edch adres\u00e1ch v r\u00e1mci t\u011bchto prostor\u016f, co\u017e umo\u017e\u0148uje obsluze p\u0159eru\u0161en\u00ed b\u00fdt spu\u0161t\u011bna okam\u017eit\u011b v kontextu jak\u00e9hokoliv aktu\u00e1ln\u011b b\u011b\u017e\u00edc\u00edho procesu bez nutnosti slo\u017eit\u00e9ho p\u0159ep\u00edn\u00e1n\u00ed pam\u011b\u0165ov\u00fdch map.",
        incorrect:
          "Z d\u016fvodu zv\u00fd\u0161en\u00ed bezpe\u010dnosti a izolace proces\u016f v opera\u010dn\u00edm syst\u00e9mu jsou pam\u011b\u0165ov\u00e9 struktury obsluhy p\u0159eru\u0161en\u00ed mapov\u00e1ny dynamicky a v\u00fdhradn\u011b do adresn\u00edho prostoru procesu, kter\u00fd aktu\u00e1ln\u011b vyvolal p\u0159eru\u0161en\u00ed, a nejsou sd\u00edleny mezi adresn\u00edmi prostory r\u016fzn\u00fdch proces\u016f, co\u017e zaji\u0161\u0165uje, \u017ee obsluha p\u0159eru\u0161en\u00ed m\u00e1 p\u0159\u00edstup pouze k pam\u011bti relevantn\u00edho procesu a minimalizuje riziko neopr\u00e1vn\u011bn\u00e9ho p\u0159\u00edstupu k pam\u011bti jin\u00fdch proces\u016f.",
        sectionNumber: "8.2.1",
        sectionTitle: "Kontext",
      },
      {
        uuid: "7cab4758-2914-4c5d-9670-82b540e53ce8",
        correct:
          "Obsluha p\u0159eru\u0161en\u00ed opera\u010dn\u00edho syst\u00e9mu b\u011b\u017e\u00ed v provizorn\u00edch podm\u00ednk\u00e1ch, co\u017e znamen\u00e1, \u017ee se vykon\u00e1v\u00e1 v specifick\u00e9m kontextu s omezen\u00fdmi mo\u017enostmi, a z tohoto d\u016fvodu m\u016f\u017ee blokovat p\u0159eru\u0161en\u00e9 vl\u00e1kno, \u010d\u00edm\u017e se zabr\u00e1n\u00ed jeho soub\u011b\u017en\u00e9mu b\u011bhu na jin\u00e9m procesoru a efektivn\u00ed duplikaci po n\u00e1vratu z obsluhy p\u0159eru\u0161en\u00ed.",
        incorrect:
          "Obsluha p\u0159eru\u0161en\u00ed opera\u010dn\u00edho syst\u00e9mu b\u011b\u017e\u00ed v pln\u011b standardn\u00edch podm\u00ednk\u00e1ch, co\u017e umo\u017e\u0148uje neomezen\u00e9 operace a synchronizaci, a proto nikdy neblokuje p\u0159eru\u0161en\u00e9 vl\u00e1kno, co\u017e umo\u017e\u0148uje jeho okam\u017eit\u00fd soub\u011b\u017en\u00fd b\u011bh na jin\u00e9m procesoru a efektivn\u00ed paralelizaci po n\u00e1vratu z obsluhy p\u0159eru\u0161en\u00ed.",
        sectionNumber: "8.2.2",
        sectionTitle: "Prodleva",
      },
      {
        uuid: "989aed34-a0e3-437c-ad10-6903d1c6e820",
        correct:
          "Kv\u016fli provizorn\u00edm podm\u00ednk\u00e1m, ve kter\u00fdch obsluha p\u0159eru\u0161en\u00ed b\u011b\u017e\u00ed, a faktu, \u017ee blokuje p\u0159eru\u0161en\u00e9 vl\u00e1kno, je synchronizace obsluhy p\u0159eru\u0161en\u00ed s p\u0159eru\u0161en\u00fdm vl\u00e1knem b\u011b\u017en\u00fdmi synchroniza\u010dn\u00edmi mechanismy opera\u010dn\u00edho syst\u00e9mu prakticky nemo\u017en\u00e1, zvl\u00e1\u0161t\u011b pokud se p\u0159eru\u0161en\u00e9 vl\u00e1kno a obsluha p\u0159eru\u0161en\u00ed t\u00fdkaj\u00ed stejn\u00e9 \u010d\u00e1sti j\u00e1dra opera\u010dn\u00edho syst\u00e9mu.",
        incorrect:
          "D\u00edky standardn\u00edm podm\u00ednk\u00e1m, ve kter\u00fdch obsluha p\u0159eru\u0161en\u00ed b\u011b\u017e\u00ed, a faktu, \u017ee neblokuje p\u0159eru\u0161en\u00e9 vl\u00e1kno, je synchronizace obsluhy p\u0159eru\u0161en\u00ed s p\u0159eru\u0161en\u00fdm vl\u00e1knem pomoc\u00ed b\u011b\u017en\u00fdch synchroniza\u010dn\u00edch mechanism\u016f opera\u010dn\u00edho syst\u00e9mu snadno provediteln\u00e1, a to i v p\u0159\u00edpadech, kdy se p\u0159eru\u0161en\u00e9 vl\u00e1kno a obsluha p\u0159eru\u0161en\u00ed t\u00fdkaj\u00ed r\u016fzn\u00fdch \u010d\u00e1st\u00ed u\u017eivatelsk\u00e9ho prostoru.",
        sectionNumber: "8.2.2",
        sectionTitle: "Prodleva",
      },
      {
        uuid: "59874674-daac-4885-b8a3-6ea42fd9f87d",
        correct:
          "P\u0159i vstupu do obsluhy p\u0159eru\u0161en\u00ed se jako b\u011b\u017en\u00e1 strategie pou\u017e\u00edv\u00e1 z\u00e1kaz dal\u0161\u00edho p\u0159eru\u0161ov\u00e1n\u00ed, a to minim\u00e1ln\u011b toho typu, kter\u00e9 obsluhu vyvolalo, v syst\u00e9mech s prioritami p\u0159eru\u0161en\u00ed i v\u0161ech p\u0159eru\u0161en\u00ed s ni\u017e\u0161\u00ed prioritou, a n\u011bkdy dokonce v\u0161ech p\u0159eru\u0161en\u00ed \u00fapln\u011b, co\u017e slou\u017e\u00ed k ochran\u011b kritick\u00fdch sekc\u00ed obsluhy p\u0159ed sebou navz\u00e1jem a k prevenci vy\u010derp\u00e1n\u00ed z\u00e1sobn\u00edku vlivem nadm\u011brn\u00e9ho po\u010dtu rychle p\u0159ich\u00e1zej\u00edc\u00edch p\u0159eru\u0161en\u00ed.",
        incorrect:
          "P\u0159i vstupu do obsluhy p\u0159eru\u0161en\u00ed se nikdy nepou\u017e\u00edv\u00e1 z\u00e1kaz dal\u0161\u00edho p\u0159eru\u0161ov\u00e1n\u00ed, proto\u017ee modern\u00ed opera\u010dn\u00ed syst\u00e9my jsou navr\u017eeny tak, aby efektivn\u011b zvl\u00e1daly soub\u011b\u017en\u00e9 obsluhy p\u0159eru\u0161en\u00ed pomoc\u00ed sofistikovan\u00fdch mechanism\u016f synchronizace, jako jsou semafory a mutexy, a z\u00e1kaz p\u0159eru\u0161en\u00ed by zbyte\u010dn\u011b sni\u017eoval v\u00fdkon syst\u00e9mu a zvy\u0161oval latenci zpracov\u00e1n\u00ed ud\u00e1lost\u00ed.",
        sectionNumber: "8.2.3",
        sectionTitle: "Struktura obsluhy",
      },
      {
        uuid: "5fa5e799-7a70-442d-89bc-6efae0890679",
        correct:
          "Obsluha p\u0159eru\u0161en\u00ed typicky vykon\u00e1v\u00e1 pouze minim\u00e1ln\u00ed nutnou akci, kter\u00e1 zajist\u00ed, \u017ee syst\u00e9m z\u016fstane v provozuschopn\u00e9m stavu; to zahrnuje nap\u0159\u00edklad vypr\u00e1zdn\u011bn\u00ed hardwarov\u00fdch mezipam\u011bt\u00ed, kter\u00e9 by mohly p\u0159et\u00e9ct, a proveden\u00ed nezbytn\u00fdch operac\u00ed pl\u00e1nova\u010de, p\u0159i\u010dem\u017e datov\u00e9 struktury sd\u00edlen\u00e9 s jin\u00fdmi \u010d\u00e1stmi j\u00e1dra mus\u00ed b\u00fdt bu\u010f bez z\u00e1mk\u016f, nebo chr\u00e1n\u011bny z\u00e1kazem p\u0159eru\u0161en\u00ed na stran\u011b zbytku j\u00e1dra.",
        incorrect:
          "Obsluha p\u0159eru\u0161en\u00ed je navr\u017eena tak, aby provedla kompletn\u00ed a detailn\u00ed obsluhu ud\u00e1losti okam\u017eit\u011b a v kontextu p\u0159eru\u0161en\u00ed, v\u010detn\u011b v\u0161ech operac\u00ed, kter\u00e9 by mohly b\u00fdt potenci\u00e1ln\u011b odlo\u017eeny, s c\u00edlem maximalizovat okam\u017eitou odezvu syst\u00e9mu na vn\u011bj\u0161\u00ed ud\u00e1losti a minimalizovat latenci zpracov\u00e1n\u00ed, i za cenu del\u0161\u00ed doby b\u011bhu obsluhy p\u0159eru\u0161en\u00ed.",
        sectionNumber: "8.2.3",
        sectionTitle: "Struktura obsluhy",
      },
      {
        uuid: "4c131d0d-22cd-4f59-b6c4-4caf9f73f2c1",
        correct:
          "B\u011b\u017enou sou\u010d\u00e1st\u00ed strategie obsluhy p\u0159eru\u0161en\u00ed je napl\u00e1nov\u00e1n\u00ed zb\u00fdvaj\u00edc\u00edch, m\u00e9n\u011b \u010dasov\u011b kritick\u00fdch akc\u00ed na pozd\u011bj\u0161\u00ed dobu, co\u017e vy\u017eaduje explicitn\u00ed komunikaci a synchronizaci s jin\u00fdmi \u010d\u00e1stmi opera\u010dn\u00edho syst\u00e9mu, aby j\u00e1dro mohlo p\u0159evz\u00edt kontrolu nad t\u011bmito odlo\u017een\u00fdmi akcemi a zajistit jejich n\u00e1sledn\u00e9 proveden\u00ed v jin\u00e9m kontextu, typicky mimo re\u017eim p\u0159eru\u0161en\u00ed.",
        incorrect:
          "Po proveden\u00ed minim\u00e1ln\u00ed nutn\u00e9 akce v obsluze p\u0159eru\u0161en\u00ed se ve\u0161ker\u00e9 zb\u00fdvaj\u00edc\u00ed operace souvisej\u00edc\u00ed s p\u0159eru\u0161en\u00edm prov\u00e1d\u011bj\u00ed okam\u017eit\u011b a v kontextu obsluhy p\u0159eru\u0161en\u00ed, bez jak\u00e9hokoli pl\u00e1nov\u00e1n\u00ed odlo\u017een\u00fdch akc\u00ed nebo komunikace s jin\u00fdmi \u010d\u00e1stmi j\u00e1dra, aby se zajistila co nejv\u011bt\u0161\u00ed jednoduchost a minimalizovala re\u017eie spojen\u00e1 s obsluhou p\u0159eru\u0161en\u00ed.",
        sectionNumber: "8.2.3",
        sectionTitle: "Struktura obsluhy",
      },
      {
        uuid: "3d5d231c-e89a-4611-88f3-0b5f511ea720",
        correct:
          "Nejz\u00e1kladn\u011bj\u0161\u00ed formou p\u0159eru\u0161en\u00ed v opera\u010dn\u00edch syst\u00e9mech je notifikace, kter\u00e1 slou\u017e\u00ed jako upozorn\u011bn\u00ed na obecn\u00e9 ud\u00e1losti, jako je nap\u0159\u00edklad synchroniza\u010dn\u00ed sign\u00e1l VSync, a je charakteristick\u00e1 svou relativn\u00ed nez\u00e1vaznost\u00ed, kdy zpo\u017ed\u011bn\u00ed nebo i \u00fapln\u00e9 vynech\u00e1n\u00ed jej\u00ed obsluhy obvykle neohroz\u00ed syst\u00e9m ani zpracov\u00e1van\u00e1 data, co\u017e se projevuje nap\u0159\u00edklad u vykreslov\u00e1n\u00ed obrazu na displeji, kde zpo\u017ed\u011bn\u00ed o jednu periodu VSync nen\u00ed kritick\u00e9.",
        incorrect:
          "Nejz\u00e1sadn\u011bj\u0161\u00ed formou p\u0159eru\u0161en\u00ed v opera\u010dn\u00edch syst\u00e9mech je notifikace, kter\u00e1 slou\u017e\u00ed jako upozorn\u011bn\u00ed na kritick\u00e9 ud\u00e1losti, jako je nap\u0159\u00edklad sign\u00e1l pln\u00e9 vyrovn\u00e1vac\u00ed pam\u011bti, a je charakteristick\u00e1 svou absolutn\u00ed z\u00e1vaznost\u00ed, kdy zpo\u017ed\u011bn\u00ed nebo i \u00fapln\u00e9 vynech\u00e1n\u00ed jej\u00ed obsluhy v\u017edy ohroz\u00ed syst\u00e9m i zpracov\u00e1van\u00e1 data, co\u017e se projevuje nap\u0159\u00edklad u operac\u00ed \u010dten\u00ed dat z disku, kde zpo\u017ed\u011bn\u00ed o jednu periodu notifikace je kritick\u00e9.",
        sectionNumber: "8.3.1",
        sectionTitle: "Notifikace",
      },
      {
        uuid: "3e63e527-4b1d-4187-8c52-9df912152aa2",
        correct:
          "Pro periferie s n\u00edzkou p\u0159enosovou rychlost\u00ed, jako je nap\u0159\u00edklad s\u00e9riov\u00e1 linka UART s rychlostmi do 115200 bit\u016f za sekundu a vyrovn\u00e1vac\u00ed pam\u011bt\u00ed o velikosti 128 bit\u016f, se v opera\u010dn\u00edch syst\u00e9mech b\u011b\u017en\u011b pou\u017e\u00edv\u00e1 mechanismus p\u0159ed\u00e1v\u00e1n\u00ed dat pomoc\u00ed p\u0159eru\u0161en\u00ed, kdy periferie upozorn\u00ed syst\u00e9m na p\u0159ipraven\u00e1 data, a obsluha t\u011bchto p\u0159eru\u0161en\u00ed nen\u00ed obvykle \u010dasov\u011b kritick\u00e1, s frekvenc\u00ed p\u0159eru\u0161en\u00ed v rozmez\u00ed 75\u2013900Hz p\u0159i pln\u00e9m vyt\u00ed\u017een\u00ed linky.",
        incorrect:
          "Pro periferie s vysokou p\u0159enosovou rychlost\u00ed, jako je nap\u0159\u00edklad modern\u00ed grafick\u00e1 karta s rychlostmi v \u0159\u00e1du gigabit\u016f za sekundu a vyrovn\u00e1vac\u00ed pam\u011bt\u00ed o velikosti megabyt\u016f, se v opera\u010dn\u00edch syst\u00e9mech b\u011b\u017en\u011b pou\u017e\u00edv\u00e1 mechanismus p\u0159ed\u00e1v\u00e1n\u00ed dat pomoc\u00ed p\u0159eru\u0161en\u00ed, kdy periferie upozorn\u00ed syst\u00e9m na p\u0159ipraven\u00e1 data, a obsluha t\u011bchto p\u0159eru\u0161en\u00ed je obvykle \u010dasov\u011b kritick\u00e1, s frekvenc\u00ed p\u0159eru\u0161en\u00ed v rozmez\u00ed kHz-MHz p\u0159i pln\u00e9m vyt\u00ed\u017een\u00ed linky.",
        sectionNumber: "8.3.1",
        sectionTitle: "Notifikace",
      },
      {
        uuid: "02f1c5a7-d38b-4cf3-8384-75acb8a0883c",
        correct:
          "Za\u0159\u00edzen\u00ed s v\u011bt\u0161\u00ed \u0161\u00ed\u0159kou p\u00e1sma, jako jsou modern\u00ed s\u00ed\u0165ov\u00e9 karty, typicky vyu\u017e\u00edvaj\u00ed pro p\u0159enos dat mechanismus DMA, kter\u00fd umo\u017e\u0148uje periferii p\u0159esouvat data p\u0159\u00edmo do opera\u010dn\u00ed pam\u011bti. Nicm\u00e9n\u011b, i kdy\u017e DMA umo\u017e\u0148uje soub\u011b\u017en\u00fd p\u0159enos dat s chodem syst\u00e9mu, je nezbytn\u00e9 tyto p\u0159enosy synchronizovat s opera\u010dn\u00edm syst\u00e9mem, konkr\u00e9tn\u011b s ovlada\u010dem za\u0159\u00edzen\u00ed, aby se zajistila spr\u00e1vn\u00e1 a efektivn\u00ed spr\u00e1va dat a syst\u00e9mov\u00fdch zdroj\u016f.",
        incorrect:
          "Za\u0159\u00edzen\u00ed s v\u011bt\u0161\u00ed \u0161\u00ed\u0159kou p\u00e1sma, jako jsou modern\u00ed s\u00ed\u0165ov\u00e9 karty, typicky vyu\u017e\u00edvaj\u00ed pro p\u0159enos dat mechanismus DMA, kter\u00fd umo\u017e\u0148uje periferii p\u0159esouvat data p\u0159\u00edmo do opera\u010dn\u00ed pam\u011bti.  P\u0159esto\u017ee DMA umo\u017e\u0148uje soub\u011b\u017en\u00fd p\u0159enos dat s chodem syst\u00e9mu, synchronizace t\u011bchto p\u0159enos\u016f s opera\u010dn\u00edm syst\u00e9mem a ovlada\u010dem za\u0159\u00edzen\u00ed nen\u00ed nutn\u00e1, proto\u017ee DMA operace jsou pln\u011b autonomn\u00ed a opera\u010dn\u00ed syst\u00e9m do nich nijak nezasahuje.",
        sectionNumber: "8.3.2",
        sectionTitle: "DMA",
      },
      {
        uuid: "272fa7bb-9ab8-44fa-80cd-928082ef9bc3",
        correct:
          "Synchronizace p\u0159enosu dat mezi opera\u010dn\u00edm syst\u00e9mem a periferi\u00ed prob\u00edh\u00e1 odli\u0161n\u011b v z\u00e1vislosti na sm\u011bru p\u0159enosu. Sm\u011brem k periferii se synchronizace typicky realizuje z\u00e1pisem do specifick\u00e9ho registru za\u0159\u00edzen\u00ed, zat\u00edmco v opa\u010dn\u00e9m sm\u011bru, tedy od periferie k opera\u010dn\u00edmu syst\u00e9mu, se pou\u017e\u00edv\u00e1 mechanismus p\u0159eru\u0161en\u00ed, kdy periferie signalizuje opera\u010dn\u00edmu syst\u00e9mu dokon\u010den\u00ed p\u0159enosu nebo pot\u0159ebu dal\u0161\u00ed akce.",
        incorrect:
          "Synchronizace p\u0159enosu dat mezi opera\u010dn\u00edm syst\u00e9mem a periferi\u00ed prob\u00edh\u00e1 jednotn\u011b, nez\u00e1visle na sm\u011bru p\u0159enosu dat.  Jak sm\u011brem k periferii, tak i od periferie k opera\u010dn\u00edmu syst\u00e9mu se synchronizace realizuje v\u00fdhradn\u011b z\u00e1pisem do specifick\u00fdch registr\u016f za\u0159\u00edzen\u00ed, co\u017e je univerz\u00e1ln\u00ed a dostate\u010dn\u00fd mechanismus pro v\u0161echny typy datov\u00fdch p\u0159enos\u016f a periferi\u00ed.",
        sectionNumber: "8.3.2",
        sectionTitle: "DMA",
      },
      {
        uuid: "40480540-940a-4b6e-8160-1ba3748e4a8d",
        correct:
          "Vysok\u00e9 p\u0159enosov\u00e9 rychlosti u modern\u00edch periferi\u00ed, dosahuj\u00edc\u00ed \u0159\u00e1dov\u011b gigabit\u016f za vte\u0159inu, kladou zna\u010dn\u00e9 n\u00e1roky na opera\u010dn\u00ed syst\u00e9m a obsluhu p\u0159eru\u0161en\u00ed. Nap\u0159\u00edklad, p\u0159i p\u0159enosov\u00e9 rychlosti 1 Gb/s a frekvenci p\u0159eru\u0161en\u00ed 1 kHz je nutn\u00e9 p\u0159i ka\u017ed\u00e9m p\u0159eru\u0161en\u00ed zpracovat relativn\u011b velk\u00e9 mno\u017estv\u00ed dat, konkr\u00e9tn\u011b a\u017e 1 megabit, co\u017e ilustruje v\u00fdzvy spojen\u00e9 s rychl\u00fdmi datov\u00fdmi p\u0159enosy a nutnost efektivn\u00ed obsluhy p\u0159eru\u0161en\u00ed.",
        incorrect:
          "Vysok\u00e9 p\u0159enosov\u00e9 rychlosti u modern\u00edch periferi\u00ed, dosahuj\u00edc\u00ed \u0159\u00e1dov\u011b gigabit\u016f za vte\u0159inu, nemaj\u00ed z\u00e1sadn\u00ed vliv na n\u00e1roky kladen\u00e9 na opera\u010dn\u00ed syst\u00e9m a obsluhu p\u0159eru\u0161en\u00ed.  I p\u0159i p\u0159enosov\u00e9 rychlosti 1 Gb/s a frekvenci p\u0159eru\u0161en\u00ed 1 kHz je nutn\u00e9 p\u0159i ka\u017ed\u00e9m p\u0159eru\u0161en\u00ed zpracovat pouze mal\u00e9 mno\u017estv\u00ed dat, srovnateln\u00e9 s pomalej\u0161\u00edmi periferiemi, co\u017e ukazuje, \u017ee modern\u00ed syst\u00e9my efektivn\u011b maskuj\u00ed dopady vysok\u00fdch rychlost\u00ed p\u0159enosu dat.",
        sectionNumber: "8.3.2",
        sectionTitle: "DMA",
      },
      {
        uuid: "7e093252-6383-4f21-b5c3-90411ecf236a",
        correct:
          "Obsluha p\u0159eru\u0161en\u00ed \u010dasova\u010de je z pohledu opera\u010dn\u00edho syst\u00e9mu pova\u017eov\u00e1na za obzvl\u00e1\u0161t\u011b komplexn\u00ed, a to zejm\u00e9na kv\u016fli jej\u00edmu \u00fazk\u00e9mu propojen\u00ed s pl\u00e1nova\u010dem vl\u00e1ken. Na rozd\u00edl od v\u011bt\u0161iny ostatn\u00edch typ\u016f p\u0159eru\u0161en\u00ed, obsluha \u010dasova\u010de nem\u016f\u017ee efektivn\u011b vyu\u017e\u00edt rozd\u011blen\u00ed na prvn\u00ed a druhou \u00farove\u0148, proto\u017ee \u0159\u00edd\u00ed pl\u00e1nova\u010d, a proto mus\u00ed ve\u0161ker\u00e9 kritick\u00e9 operace, jako je v\u00fdb\u011br vl\u00e1kna a p\u0159epnut\u00ed kontextu, prov\u00e1d\u011bt p\u0159\u00edmo v prvn\u00ed \u00farovni obsluhy.",
        incorrect:
          "Obsluha p\u0159eru\u0161en\u00ed \u010dasova\u010de je z pohledu opera\u010dn\u00edho syst\u00e9mu pova\u017eov\u00e1na za jednoduchou rutinu, jeliko\u017e se prim\u00e1rn\u011b zam\u011b\u0159uje pouze na aktualizaci syst\u00e9mov\u00e9ho \u010dasu. D\u00edky sv\u00e9 jednoduchosti m\u016f\u017ee obsluha \u010dasova\u010de efektivn\u011b vyu\u017e\u00edvat rozd\u011blen\u00ed na prvn\u00ed a druhou \u00farove\u0148, p\u0159i\u010dem\u017e kritick\u00e9 operace, jako je v\u00fdb\u011br vl\u00e1kna a p\u0159epnut\u00ed kontextu, jsou odlo\u017eeny do druh\u00e9 \u00farovn\u011b, co\u017e minimalizuje z\u00e1t\u011b\u017e prvn\u00ed \u00farovn\u011b obsluhy.",
        sectionNumber: "8.3.3",
        sectionTitle: "\u010casova\u010d",
      },
      {
        uuid: "e68176d0-6b17-4d61-aa21-49b5fe78af6e",
        correct:
          "Manipulace s frontami vl\u00e1ken v opera\u010dn\u00edm syst\u00e9mu, kter\u00e1 zahrnuje v\u00fdb\u011br vl\u00e1kna ke spu\u0161t\u011bn\u00ed a jeho odstran\u011bn\u00ed z fronty, vy\u017eaduje d\u016fslednou synchronizaci. Tyto operace mus\u00ed b\u00fdt chr\u00e1n\u011bny jak proti soub\u011b\u017en\u00e9mu p\u0159\u00edstupu z jin\u00fdch procesorov\u00fdch jader, tak proti p\u0159eru\u0161en\u00ed, a proto se obvykle pou\u017e\u00edvaj\u00ed mechanismy jako spinlocky v kombinaci se z\u00e1kazem p\u0159eru\u0161en\u00ed, aby se zajistila atomi\u010dnost a konzistence datov\u00fdch struktur pl\u00e1nova\u010de.",
        incorrect:
          "Manipulace s frontami vl\u00e1ken v opera\u010dn\u00edm syst\u00e9mu nevy\u017eaduje \u017e\u00e1dnou speci\u00e1ln\u00ed synchronizaci, proto\u017ee opera\u010dn\u00ed syst\u00e9m zaji\u0161\u0165uje, \u017ee k front\u00e1m vl\u00e1ken p\u0159istupuje v\u017edy pouze jedno procesorov\u00e9 j\u00e1dro v dan\u00e9m okam\u017eiku. D\u00edky t\u00e9to implicitn\u00ed exkluzivit\u011b mohou b\u00fdt operace s frontami vl\u00e1ken prov\u00e1d\u011bny bez obav z konflikt\u016f nebo nekonzistenc\u00ed dat, co\u017e zjednodu\u0161uje implementaci pl\u00e1nova\u010de a zvy\u0161uje jeho v\u00fdkon.",
        sectionNumber: "8.3.3",
        sectionTitle: "\u010casova\u010d",
      },
      {
        uuid: "7b285ea7-e739-42bd-af25-e3d2ffa1f531",
        correct:
          "P\u0159epnut\u00ed kontextu mezi vl\u00e1kny v r\u00e1mci jednoho procesu je relativn\u011b p\u0159\u00edmo\u010dar\u00e9, proto\u017ee zahrnuje p\u0159edev\u0161\u00edm obnoven\u00ed ulo\u017een\u00e9ho kontextu c\u00edlov\u00e9ho vl\u00e1kna. Nicm\u00e9n\u011b, situace se st\u00e1v\u00e1 slo\u017eit\u011bj\u0161\u00ed, pokud p\u016fvodn\u00ed a nov\u00e9 vl\u00e1kno pat\u0159\u00ed r\u016fzn\u00fdm proces\u016fm, proto\u017ee v takov\u00e9m p\u0159\u00edpad\u011b je krom\u011b kontextu vl\u00e1kna nutn\u00e9 p\u0159epnout i str\u00e1nkovac\u00ed tabulky, co\u017e p\u0159edstavuje dodate\u010dnou re\u017eii a komplikuje proces p\u0159ep\u00edn\u00e1n\u00ed kontextu.",
        incorrect:
          "P\u0159epnut\u00ed kontextu mezi vl\u00e1kny, bez ohledu na to, zda pat\u0159\u00ed ke stejn\u00e9mu nebo r\u016fzn\u00fdm proces\u016fm, je v modern\u00edch opera\u010dn\u00edch syst\u00e9mech v\u017edy stejn\u011b jednoduch\u00e9 a rychl\u00e9. Opera\u010dn\u00ed syst\u00e9my efektivn\u011b spravuj\u00ed pam\u011b\u0165 a kontext vl\u00e1ken, tak\u017ee p\u0159epnut\u00ed kontextu nevy\u017eaduje p\u0159ep\u00edn\u00e1n\u00ed str\u00e1nkovac\u00edch tabulek ani jin\u00e9 slo\u017eit\u00e9 operace, \u010d\u00edm\u017e se minimalizuje latence a maximalizuje v\u00fdkon syst\u00e9mu.",
        sectionNumber: "8.3.3",
        sectionTitle: "\u010casova\u010d",
      },
      {
        uuid: "f885b273-c023-4452-ad3e-bf6a877fa11e",
        correct:
          "P\u0159eru\u0161en\u00ed \u010dasova\u010de se v opera\u010dn\u00edch syst\u00e9mech li\u0161\u00ed od v\u011bt\u0161iny ostatn\u00edch p\u0159eru\u0161en\u00ed t\u00edm, \u017ee obvykle nem\u016f\u017ee efektivn\u011b delegovat \u010dasov\u011b kritick\u00e9 operace pl\u00e1nov\u00e1n\u00ed vl\u00e1ken do obsluhy p\u0159eru\u0161en\u00ed druh\u00e9 \u00farovn\u011b. D\u016fvodem je fakt, \u017ee samotn\u00fd pl\u00e1nova\u010d, kter\u00fd spou\u0161t\u00ed obsluhu druh\u00e9 \u00farovn\u011b, je \u0159\u00edzen pr\u00e1v\u011b p\u0159eru\u0161en\u00edm \u010dasova\u010de, co\u017e vytv\u00e1\u0159\u00ed cyklickou z\u00e1vislost a vy\u017eaduje, aby kl\u00ed\u010dov\u00e9 pl\u00e1novac\u00ed operace prob\u00edhaly p\u0159\u00edmo v obsluze prvn\u00ed \u00farovn\u011b p\u0159eru\u0161en\u00ed \u010dasova\u010de.",
        incorrect:
          "P\u0159eru\u0161en\u00ed \u010dasova\u010de se v opera\u010dn\u00edch syst\u00e9mech vyzna\u010duje t\u00edm, \u017ee na rozd\u00edl od v\u011bt\u0161iny ostatn\u00edch p\u0159eru\u0161en\u00ed efektivn\u011b vyu\u017e\u00edv\u00e1 obsluhu p\u0159eru\u0161en\u00ed druh\u00e9 \u00farovn\u011b pro v\u0161echny \u010dasov\u011b kritick\u00e9 operace pl\u00e1nov\u00e1n\u00ed vl\u00e1ken. Tato architektura umo\u017e\u0148uje, aby obsluha prvn\u00ed \u00farovn\u011b p\u0159eru\u0161en\u00ed \u010dasova\u010de byla co nejkrat\u0161\u00ed a nejjednodu\u0161\u0161\u00ed, zat\u00edmco komplexn\u00ed pl\u00e1novac\u00ed algoritmy a p\u0159ep\u00edn\u00e1n\u00ed kontextu jsou odlo\u017eeny do druh\u00e9 \u00farovn\u011b, co\u017e zvy\u0161uje celkovou efektivitu syst\u00e9mu.",
        sectionNumber: "8.3.3",
        sectionTitle: "\u010casova\u010d",
      },
    ],
  };
