import type { Section } from '../../common/types';

export const section1_virtualizace_pameti: Section = {
    uuid: "b7e389fb-7aa7-4716-95f8-44b5ba19e690",
    sectionNumber: "1",
    sectionTitle: "Virtualizace pam\u011bti",
    statements: [
      {
        uuid: "51373408-ac25-4f7c-b894-44d888762a04",
        correct:
          "Na fundament\u00e1ln\u00ed \u00farovni, instrukce typu \u2039ld reg_addr \u2192 reg_out\u203a slou\u017e\u00ed k na\u010dten\u00ed hodnoty z pam\u011bti, p\u0159i\u010dem\u017e adresa pam\u011bti, z kter\u00e9 se \u010dte, je ulo\u017eena v registru \u2039reg_addr\u203a a na\u010dten\u00e1 hodnota se n\u00e1sledn\u011b ulo\u017e\u00ed do registru \u2039reg_out\u203a. Tato operace je z\u00e1kladn\u00edm stavebn\u00edm kamenem pro interakci program\u016f s pam\u011bt\u00ed.",
        incorrect:
          "Na fundament\u00e1ln\u00ed \u00farovni, instrukce typu \u2039ld \u010d\u00edslo \u2192 reg_out\u203a slou\u017e\u00ed k z\u00e1pisu hodnoty do pam\u011bti, p\u0159i\u010dem\u017e adresa pam\u011bti, kam se zapisuje, je ur\u010dena konstantou \u2039\u010d\u00edslo\u203a p\u0159\u00edmo v instrukci a hodnota, kter\u00e1 se m\u00e1 zapsat, se na\u010dte z registru \u2039reg_out\u203a. Tato operace je z\u00e1kladn\u00edm stavebn\u00edm kamenem pro interakci program\u016f s pam\u011bt\u00ed.",
        sectionNumber: "1.1.1",
        sectionTitle: "P\u0159\u00edstup k\u00a0pam\u011bti",
      },
      {
        uuid: "f18dcd2c-a626-4d4c-b292-5c13d156914b",
        correct:
          "Instrukce typu \u2039st reg_in \u2192 reg_addr\u203a slou\u017e\u00ed k ulo\u017een\u00ed hodnoty z registru \u2039reg_in\u203a do pam\u011bti na adresu, kter\u00e1 je ulo\u017eena v registru \u2039reg_addr\u203a.  Podle popisu v textu, libovoln\u00e9 slo\u017eit\u011bj\u0161\u00ed instrukce, kter\u00e9 procesor poskytuje, mohou b\u00fdt rozlo\u017eeny do sekvence z\u00e1kladn\u00edch operac\u00ed jako \u2039ld\u203a, \u2039st\u203a a v\u00fdpo\u010detn\u00edch instrukc\u00ed pracuj\u00edc\u00edch s registry.",
        incorrect:
          "Instrukce typu \u2039st reg_in \u2192 reg_addr\u203a slou\u017e\u00ed k ulo\u017een\u00ed hodnoty z registru \u2039reg_in\u203a do pam\u011bti na adresu, kter\u00e1 je ulo\u017eena v registru \u2039reg_addr\u203a.  Nicm\u00e9n\u011b, slo\u017eit\u00e9 instrukce procesoru jsou ned\u011bliteln\u00e9 atomick\u00e9 operace, kter\u00e9 nelze rozlo\u017eit na jednodu\u0161\u0161\u00ed sekvence instrukc\u00ed jako \u2039ld\u203a, \u2039st\u203a a v\u00fdpo\u010detn\u00ed instrukce pracuj\u00edc\u00ed pouze s registry.",
        sectionNumber: "1.1.1",
        sectionTitle: "P\u0159\u00edstup k\u00a0pam\u011bti",
      },
      {
        uuid: "7ff355e4-5ac0-4918-8785-4f5ba8314d99",
        correct:
          "Adresn\u00ed prostor opera\u010dn\u00ed pam\u011bti, jak je definov\u00e1n v modern\u00edch opera\u010dn\u00edch syst\u00e9mech, se obvykle skl\u00e1d\u00e1 z n\u011bkolika diskr\u00e9tn\u00edch, av\u0161ak souvisl\u00fdch blok\u016f adres, kde ka\u017ed\u00fd blok reprezentuje ucelen\u00fd rozsah pam\u011b\u0165ov\u00fdch lokac\u00ed. Tyto bloky dohromady vymezuj\u00ed mno\u017einu platn\u00fdch adres, ke kter\u00fdm m\u00e1 procesor povolen\u00fd p\u0159\u00edstup pro operace \u010dten\u00ed a z\u00e1pisu dat, a tvo\u0159\u00ed tak z\u00e1kladn\u00ed r\u00e1mec pro adresaci pam\u011bti.",
        incorrect:
          "Adresn\u00ed prostor opera\u010dn\u00ed pam\u011bti je charakterizov\u00e1n jako jedin\u00fd, rozs\u00e1hl\u00fd a nesouvisl\u00fd blok adres, kde jednotliv\u00e9 adresy jsou n\u00e1hodn\u011b rozm\u00edst\u011bny a netvo\u0159\u00ed logick\u00e9 celky. Tato fragmentace adresn\u00edho prostoru zt\u011b\u017euje efektivn\u00ed spr\u00e1vu pam\u011bti a alokaci souvisl\u00fdch oblast\u00ed pro programy, co\u017e vede k neefektivn\u00edmu vyu\u017eit\u00ed pam\u011b\u0165ov\u00fdch zdroj\u016f a potenci\u00e1ln\u00edm probl\u00e9m\u016fm s v\u00fdkonem syst\u00e9mu.",
        sectionNumber: "1.1.2",
        sectionTitle: "Adresn\u00ed prostor",
      },
      {
        uuid: "de9bcbde-76ac-4b3e-84ec-b27e57dc0730",
        correct:
          "V kontextu standardn\u00ed architektury po\u010d\u00edta\u010d\u016f se za\u017eitou konvenc\u00ed stalo, \u017ee ka\u017ed\u00e1 adresa v adresn\u00edm prostoru opera\u010dn\u00ed pam\u011bti jednozna\u010dn\u011b koresponduje s \u00falo\u017en\u00fdm prostorem o velikosti jednoho bajtu dat. Tato granularita adresace na \u00farovni jednotliv\u00fdch bajt\u016f umo\u017e\u0148uje opera\u010dn\u00edmu syst\u00e9mu a aplikac\u00edm flexibiln\u011b a efektivn\u011b manipulovat s daty r\u016fzn\u00e9 velikosti a struktury, od jednotliv\u00fdch znak\u016f a\u017e po komplexn\u00ed datov\u00e9 objekty, ulo\u017een\u00e9 v souvisl\u00fdch pam\u011b\u0165ov\u00fdch oblastech.",
        incorrect:
          "V modern\u00edch po\u010d\u00edta\u010dov\u00fdch syst\u00e9mech se b\u011b\u017en\u011b pou\u017e\u00edv\u00e1 adresace, kde jedna adresa v adresn\u00edm prostoru opera\u010dn\u00ed pam\u011bti reprezentuje v\u011bt\u0161\u00ed datovou jednotku, nap\u0159\u00edklad \u010dty\u0159bajtov\u00e9 slovo, a jednotliv\u00e9 bajty uvnit\u0159 tohoto slova nejsou samostatn\u011b adresovateln\u00e9. Tento p\u0159\u00edstup zjednodu\u0161uje adresaci velk\u00fdch datov\u00fdch struktur, av\u0161ak omezuje flexibilitu p\u0159i pr\u00e1ci s men\u0161\u00edmi datov\u00fdmi celky a vy\u017eaduje slo\u017eit\u011bj\u0161\u00ed mechanismy pro manipulaci s jednotliv\u00fdmi bajty.",
        sectionNumber: "1.1.2",
        sectionTitle: "Adresn\u00ed prostor",
      },
      {
        uuid: "e360e03e-ab27-4064-b0e6-fcd2bbc76336",
        correct:
          "B\u011bhem sv\u00e9ho b\u011bhu m\u00e1 program k dispozici adresn\u00ed prostor, kter\u00fd slou\u017e\u00ed k ukl\u00e1d\u00e1n\u00ed dat a skl\u00e1d\u00e1 se z n\u011bkolika kl\u00ed\u010dov\u00fdch \u010d\u00e1st\u00ed. Mezi tyto \u010d\u00e1sti pat\u0159\u00ed pracovn\u00ed pam\u011b\u0165, ur\u010den\u00e1 pro ukl\u00e1d\u00e1n\u00ed libovoln\u00fdch dat dle pot\u0159eby programu, d\u00e1le prostor pro k\u00f3d, kde jsou ulo\u017eeny instrukce programu, a v neposledn\u00ed \u0159ad\u011b hardwarov\u00fd z\u00e1sobn\u00edk, kter\u00fd se vyu\u017e\u00edv\u00e1 pro spr\u00e1vu vol\u00e1n\u00ed podprogram\u016f a funkc\u00ed.",
        incorrect:
          "Adresn\u00ed prostor programu je v\u00fdhradn\u011b vyhrazen pro pracovn\u00ed pam\u011b\u0165, do kter\u00e9 si program ukl\u00e1d\u00e1 ve\u0161ker\u00e1 data. Nezahrnuje \u017e\u00e1dn\u00e9 vyhrazen\u00e9 oblasti pro ulo\u017een\u00ed instrukc\u00ed programu, tedy k\u00f3du, ani pro hardwarov\u00fd z\u00e1sobn\u00edk, kter\u00fd by slou\u017eil k realizaci podprogram\u016f a spr\u00e1v\u011b vol\u00e1n\u00ed funkc\u00ed.",
        sectionNumber: "1.1.3",
        sectionTitle: "Pam\u011b\u0165 programu",
      },
      {
        uuid: "6a82ebd9-abf3-4dd3-a4cb-138deb83985a",
        correct:
          "Z\u00e1sobn\u00edk, kter\u00fd je ned\u00edlnou sou\u010d\u00e1st\u00ed adresn\u00edho prostoru ka\u017ed\u00e9ho programu, slou\u017e\u00ed v opera\u010dn\u00edm syst\u00e9mu k efektivn\u00ed spr\u00e1v\u011b informac\u00ed o aktu\u00e1ln\u011b aktivn\u00edch podprogramech. Tento z\u00e1sobn\u00edk se m\u016f\u017ee dynamicky m\u011bnit, to znamen\u00e1, \u017ee se jeho velikost a rozsah adres v pam\u011bti mohou zv\u011bt\u0161ovat a zmen\u0161ovat v pr\u016fb\u011bhu b\u011bhu programu v z\u00e1vislosti na vol\u00e1n\u00ed a n\u00e1vratech z podprogram\u016f.",
        incorrect:
          "Z\u00e1sobn\u00edk, kter\u00fd je sou\u010d\u00e1st\u00ed adresn\u00edho prostoru programu, je prim\u00e1rn\u011b ur\u010den k ukl\u00e1d\u00e1n\u00ed k\u00f3du programu a instrukc\u00ed, kter\u00e9 se maj\u00ed prov\u00e9st. Jeho velikost je statick\u00e1 a nem\u011bnn\u00e1 po celou dobu b\u011bhu programu, tud\u00ed\u017e se nem\u016f\u017ee dynamicky roz\u0161i\u0159ovat ani zmen\u0161ovat v z\u00e1vislosti na vol\u00e1n\u00ed podprogram\u016f.",
        sectionNumber: "1.1.3",
        sectionTitle: "Pam\u011b\u0165 programu",
      },
      {
        uuid: "c2d74d17-4684-4640-86a0-189f13535932",
        correct:
          "Fyzick\u00e9 adresy v po\u010d\u00edta\u010di p\u0159\u00edmo pojmenov\u00e1vaj\u00ed fyzick\u00e9 pam\u011b\u0165ov\u00e9 bu\u0148ky hardwarov\u00fdch za\u0159\u00edzen\u00ed, zejm\u00e9na pam\u011bti RAM, a\u010dkoli fyzick\u00fd adresn\u00ed prostor m\u016f\u017ee zahrnovat i adresy periferi\u00ed, jako jsou grafick\u00e9 a s\u00ed\u0165ov\u00e9 karty, p\u0159i\u010dem\u017e bloky fyzick\u00fdch adres, kter\u00e9 neodpov\u00eddaj\u00ed RAM, obvykle nelze vyu\u017e\u00edvat pro pracovn\u00ed data v\u00fdpo\u010dt\u016f.",
        incorrect:
          "Fyzick\u00e9 adresy v po\u010d\u00edta\u010di p\u0159\u00edmo pojmenov\u00e1vaj\u00ed fyzick\u00e9 pam\u011b\u0165ov\u00e9 bu\u0148ky hardwarov\u00fdch za\u0159\u00edzen\u00ed, zejm\u00e9na pam\u011bti RAM, a\u010dkoli fyzick\u00fd adresn\u00ed prostor je v\u00fdhradn\u011b ur\u010den pro pam\u011b\u0165 RAM a nezahrnuje adresy periferi\u00ed, jako jsou grafick\u00e9 a s\u00ed\u0165ov\u00e9 karty, p\u0159i\u010dem\u017e v\u0161echny bloky fyzick\u00fdch adres, v\u010detn\u011b t\u011bch, kter\u00e9 neodpov\u00eddaj\u00ed RAM, lze b\u011b\u017en\u011b vyu\u017e\u00edvat pro pracovn\u00ed data v\u00fdpo\u010dt\u016f.",
        sectionNumber: "1.1.4",
        sectionTitle: "Fyzick\u00e1 pam\u011b\u0165",
      },
      {
        uuid: "48539d1a-d1f5-482f-9a8c-20133a3fca2d",
        correct:
          "P\u0159esto\u017ee fyzick\u00fd adresn\u00ed prostor je jednotn\u00fd, nejv\u011bt\u0161\u00ed \u010d\u00e1st fyzick\u00fdch adres obvykle pat\u0159\u00ed opera\u010dn\u00ed pam\u011bti RAM, kter\u00e1 slou\u017e\u00ed prim\u00e1rn\u011b k ukl\u00e1d\u00e1n\u00ed pracovn\u00edch dat program\u016f, nicm\u00e9n\u011b n\u011bkter\u00e9 bloky fyzick\u00fdch adres mohou b\u00fdt vyhrazeny pro periferie nebo pro read-only pam\u011b\u0165, kam nelze zapisovat data.",
        incorrect:
          "P\u0159esto\u017ee fyzick\u00fd adresn\u00ed prostor je rozd\u011blen\u00fd, nejv\u011bt\u0161\u00ed \u010d\u00e1st fyzick\u00fdch adres obvykle pat\u0159\u00ed periferi\u00edm, kter\u00e9 slou\u017e\u00ed prim\u00e1rn\u011b k ukl\u00e1d\u00e1n\u00ed pracovn\u00edch dat program\u016f, nicm\u00e9n\u011b v\u0161echny bloky fyzick\u00fdch adres jsou v\u017edy vyhrazeny v\u00fdhradn\u011b pro opera\u010dn\u00ed pam\u011b\u0165 RAM a nikdy pro periferie nebo read-only pam\u011b\u0165, co\u017e umo\u017e\u0148uje z\u00e1pis dat do v\u0161ech blok\u016f.",
        sectionNumber: "1.1.4",
        sectionTitle: "Fyzick\u00e1 pam\u011b\u0165",
      },
      {
        uuid: "010f87eb-017b-4798-9f29-7896cf9d14cd",
        correct:
          "Podle p\u0159\u00edkladu rozlo\u017een\u00ed fyzick\u00e9ho adresn\u00edho prostoru klasick\u00e9ho 32bitov\u00e9ho po\u010d\u00edta\u010de s procesorem x86, blok adres \u2039000a'0000\u203a\u2013\u2039000b'ffff\u203a je vyhrazen pro periferie, konkr\u00e9tn\u011b pro framebuffer, a blok adres \u2039000c'0000\u203a\u2013\u2039000f'ffff\u203a je vyhrazen pro ROM BIOS, co\u017e demonstruje, \u017ee fyzick\u00e9 adresy nemus\u00ed v\u017edy odkazovat pouze na RAM.",
        incorrect:
          "Podle p\u0159\u00edkladu rozlo\u017een\u00ed fyzick\u00e9ho adresn\u00edho prostoru modern\u00edho 64bitov\u00e9ho po\u010d\u00edta\u010de s procesorem ARM, blok adres \u2039000a'0000\u203a\u2013\u2039000b'ffff\u203a je vyhrazen pro RAM, konkr\u00e9tn\u011b pro voln\u00e9 pou\u017eit\u00ed, a blok adres \u2039000c'0000\u203a\u2013\u2039000f'ffff\u203a je vyhrazen pro RAM blok 2, co\u017e demonstruje, \u017ee fyzick\u00e9 adresy v\u017edy odkazuj\u00ed pouze na RAM.",
        sectionNumber: "1.1.4",
        sectionTitle: "Fyzick\u00e1 pam\u011b\u0165",
      },
      {
        uuid: "d784f8cb-7d1c-4f41-8b35-ecd6afa95976",
        correct:
          "V principu programy mohou pracovat s fyzick\u00fdmi adresami pam\u011bti, ale tento p\u0159\u00edstup se st\u00e1v\u00e1 problematick\u00fdm p\u0159i sou\u010dasn\u00e9m b\u011bhu v\u00edce program\u016f, proto\u017ee vy\u017eaduje koordinaci adres a p\u0159edstavuje riziko vz\u00e1jemn\u00e9ho naru\u0161ov\u00e1n\u00ed a potenci\u00e1ln\u00edho \u0161kodliv\u00e9ho p\u0159\u00edstupu mezi programy b\u011b\u017e\u00edc\u00edmi na stejn\u00e9m po\u010d\u00edta\u010di.",
        incorrect:
          "Programy mohou bez probl\u00e9m\u016f voln\u011b pou\u017e\u00edvat fyzick\u00e9 adresy pam\u011bti i p\u0159i sou\u010dasn\u00e9m b\u011bhu v\u00edce aplikac\u00ed, proto\u017ee opera\u010dn\u00ed syst\u00e9m automaticky \u0159e\u0161\u00ed koordinaci adres a zabra\u0148uje jak\u00e9mukoli ru\u0161en\u00ed nebo \u0161kodliv\u00e9mu p\u0159\u00edstupu mezi nimi, a to i bez nutnosti explicitn\u00ed koordinace ze strany program\u016f.",
        sectionNumber: "1.2.1",
        sectionTitle: "Motivace",
      },
      {
        uuid: "5c8f01b4-ab3a-40bb-984e-358f389574e0",
        correct:
          "P\u0159i sou\u010dasn\u00e9m b\u011bhu v\u00edce program\u016f, kter\u00e9 p\u0159\u00edmo pou\u017e\u00edvaj\u00ed fyzick\u00e9 adresy, je nutn\u00e1 koordinace vyu\u017eit\u00ed pam\u011bti mezi programy, aby se p\u0159ede\u0161lo konflikt\u016fm, kdy pou\u017eit\u00ed konkr\u00e9tn\u00ed adresy jedn\u00edm programem by zabr\u00e1nilo jej\u00edmu pou\u017eit\u00ed jin\u00fdm programem, co\u017e by vedlo k nepredv\u00eddateln\u00e9mu chov\u00e1n\u00ed syst\u00e9mu.",
        incorrect:
          "P\u0159i sou\u010dasn\u00e9m b\u011bhu v\u00edce program\u016f, kter\u00e9 p\u0159\u00edmo pou\u017e\u00edvaj\u00ed fyzick\u00e9 adresy, nen\u00ed nutn\u00e1 koordinace vyu\u017eit\u00ed pam\u011bti, proto\u017ee ka\u017ed\u00fd program pracuje izolovan\u011b a nem\u016f\u017ee zasahovat do pam\u011b\u0165ov\u00e9ho prostoru jin\u00fdch program\u016f, a opera\u010dn\u00ed syst\u00e9m zaji\u0161\u0165uje, \u017ee nedoch\u00e1z\u00ed ke konflikt\u016fm adres.",
        sectionNumber: "1.2.1",
        sectionTitle: "Motivace",
      },
      {
        uuid: "c22f0c92-10f5-4add-b94f-89fa7542c82e",
        correct:
          "Chyby v programech, jako nap\u0159\u00edklad p\u0159ekro\u010den\u00ed hranic pole, mohou p\u0159i p\u0159\u00edm\u00e9m pou\u017eit\u00ed fyzick\u00fdch adres v\u00e9st k ne\u00famysln\u00e9mu p\u0159eps\u00e1n\u00ed nebo po\u0161kozen\u00ed dat jin\u00e9ho programu, co\u017e vytv\u00e1\u0159\u00ed nestabilitu a potenci\u00e1ln\u00ed bezpe\u010dnostn\u00ed hrozby, proto\u017ee programy by mohly necht\u011bn\u011b ovliv\u0148ovat pam\u011b\u0165 jin\u00fdch aplikac\u00ed.",
        incorrect:
          "Chyby v programech, jako nap\u0159\u00edklad p\u0159ekro\u010den\u00ed hranic pole, jsou p\u0159i p\u0159\u00edm\u00e9m pou\u017eit\u00ed fyzick\u00fdch adres automaticky izolov\u00e1ny v pam\u011b\u0165ov\u00e9m prostoru dan\u00e9ho programu a nemohou ovlivnit jin\u00e9 programy ani celkovou stabilitu syst\u00e9mu, proto\u017ee fyzick\u00e9 adresy jsou striktn\u011b odd\u011bleny pro ka\u017ed\u00fd program.",
        sectionNumber: "1.2.1",
        sectionTitle: "Motivace",
      },
      {
        uuid: "607b3a50-67ed-4bb7-9a96-d4a7da8a67c6",
        correct:
          "Virtu\u00e1ln\u00ed adresn\u00ed prostor poskytovan\u00fd modern\u00edmi procesory pro b\u011b\u017en\u00e9 po\u010d\u00edta\u010de je navr\u017een tak, aby byl program\u016fm viditeln\u00fd a z\u00e1rove\u0148 d\u016fsledn\u011b odd\u011blen od fyzick\u00e9ho adresn\u00edho prostoru, co\u017e znamen\u00e1, \u017ee u\u017eivatelsk\u00e9 programy nemaj\u00ed p\u0159\u00edm\u00fd p\u0159\u00edstup k fyzick\u00e9mu adresn\u00edmu prostoru a pracuj\u00ed v\u00fdhradn\u011b s adresami v r\u00e1mci p\u0159id\u011blen\u00e9ho virtu\u00e1ln\u00edho prostoru.",
        incorrect:
          "Virtu\u00e1ln\u00ed adresn\u00ed prostor je v modern\u00edch procesorech pro b\u011b\u017en\u00e9 po\u010d\u00edta\u010de pouze konceptu\u00e1ln\u00ed abstrakc\u00ed, kter\u00e1 sice program\u016fm usnad\u0148uje pr\u00e1ci s pam\u011bt\u00ed, ale ve skute\u010dnosti nen\u00ed fyzicky odd\u011blena od fyzick\u00e9ho adresn\u00edho prostoru, a u\u017eivatelsk\u00e9 programy tak maj\u00ed st\u00e1le p\u0159\u00edm\u00fd p\u0159\u00edstup k fyzick\u00e9mu adresn\u00edmu prostoru, i kdy\u017e se jim adresy transformuj\u00ed.",
        sectionNumber: "1.2.2",
        sectionTitle: "Virtu\u00e1ln\u00ed a fyzick\u00e9 adresy",
      },
      {
        uuid: "dba5f67f-1046-4ab9-8bb1-7be986363bd8",
        correct:
          "Existence virtu\u00e1ln\u00edch adresn\u00edch prostor\u016f umo\u017e\u0148uje, aby stejn\u00e1 \u010d\u00edseln\u00e1 hodnota adresy, nap\u0159\u00edklad \u20390x0100\u203a, mohla m\u00edt naprosto odli\u0161n\u00fd v\u00fdznam v r\u016fzn\u00fdch virtu\u00e1ln\u00edch adresn\u00edch prostorech, kde v jednom prostoru m\u016f\u017ee odkazovat na jinou pam\u011b\u0165ovou lokaci ne\u017e ve druh\u00e9m prostoru, nebo dokonce nemus\u00ed b\u00fdt v druh\u00e9m prostoru platnou adresou v\u016fbec.",
        incorrect:
          "Existence virtu\u00e1ln\u00edch adresn\u00edch prostor\u016f zaru\u010duje, \u017ee stejn\u00e1 \u010d\u00edseln\u00e1 hodnota adresy, nap\u0159\u00edklad \u20390x0100\u203a, bude m\u00edt v\u017edy identick\u00fd v\u00fdznam nap\u0159\u00ed\u010d v\u0161emi existuj\u00edc\u00edmi virtu\u00e1ln\u00edmi adresn\u00edmi prostory v syst\u00e9mu, proto\u017ee virtu\u00e1ln\u00ed adresn\u00ed prostory jsou pouze logick\u00fdm roz\u0161\u00ed\u0159en\u00edm fyzick\u00e9ho adresn\u00edho prostoru a sd\u00edlej\u00ed stejnou interpretaci adres.",
        sectionNumber: "1.2.2",
        sectionTitle: "Virtu\u00e1ln\u00ed a fyzick\u00e9 adresy",
      },
      {
        uuid: "3ea8c8ad-0ec4-4781-82fb-7ce956e35ce4",
        correct:
          'V kontextu virtu\u00e1ln\u00edch adresn\u00edch prostor\u016f je kl\u00ed\u010dov\u00e9 si uv\u011bdomit, \u017ee pojem "virtu\u00e1ln\u00ed adresa" nezahrnuje pouze \u010d\u00edselnou hodnotu adresy, ale tak\u00e9 implicitn\u011b specifikuje, do kter\u00e9ho konkr\u00e9tn\u00edho virtu\u00e1ln\u00edho adresn\u00edho prostoru tato adresa n\u00e1le\u017e\u00ed, co\u017e znamen\u00e1, \u017ee adresa \u20390x0100\u203a ve virtu\u00e1ln\u00edm prostoru P a adresa \u20390x0100\u203a ve virtu\u00e1ln\u00edm prostoru Q jsou pova\u017eov\u00e1ny za dv\u011b zcela odli\u0161n\u00e9 virtu\u00e1ln\u00ed adresy.',
        incorrect:
          'V kontextu virtu\u00e1ln\u00edch adresn\u00edch prostor\u016f se pojem "virtu\u00e1ln\u00ed adresa" vztahuje v\u00fdhradn\u011b k \u010d\u00edseln\u00e9 hodnot\u011b adresy, a nikoliv k p\u0159\u00edslu\u0161nosti k virtu\u00e1ln\u00edmu adresn\u00edmu prostoru, co\u017e znamen\u00e1, \u017ee adresa \u20390x0100\u203a je v\u017edy interpretov\u00e1na stejn\u011b bez ohledu na to, v jak\u00e9m virtu\u00e1ln\u00edm prostoru se nach\u00e1z\u00ed, a adresa \u20390x0100\u203a ve virtu\u00e1ln\u00edm prostoru P a adresa \u20390x0100\u203a ve virtu\u00e1ln\u00edm prostoru Q jsou pova\u017eov\u00e1ny za identick\u00e9 virtu\u00e1ln\u00ed adresy.',
        sectionNumber: "1.2.2",
        sectionTitle: "Virtu\u00e1ln\u00ed a fyzick\u00e9 adresy",
      },
      {
        uuid: "cbbab33e-41e6-4936-9844-49a7a4bfc2f1",
        correct:
          "Aby mohla virtu\u00e1ln\u00ed adresa plnit sv\u016fj \u00fa\u010del v opera\u010dn\u00edm syst\u00e9mu, mus\u00ed b\u00fdt nutn\u011b propojena s fyzickou pam\u011b\u0165ovou bu\u0148kou, kter\u00e1 m\u00e1 p\u0159id\u011blenou pr\u00e1v\u011b jednu fyzickou adresu, av\u0161ak je d\u016fle\u017eit\u00e9 si uv\u011bdomit, \u017ee tato fyzick\u00e1 bu\u0148ka m\u016f\u017ee b\u00fdt mapov\u00e1na z n\u011bkolika r\u016fzn\u00fdch virtu\u00e1ln\u00edch adres v z\u00e1vislosti na pot\u0159eb\u00e1ch syst\u00e9mu a b\u011b\u017e\u00edc\u00edch proces\u016f.",
        incorrect:
          "Aby mohla virtu\u00e1ln\u00ed adresa plnit sv\u016fj \u00fa\u010del v opera\u010dn\u00edm syst\u00e9mu, mus\u00ed b\u00fdt nutn\u011b propojena s fyzickou pam\u011b\u0165ovou bu\u0148kou, kter\u00e1 m\u00e1 p\u0159id\u011blenou pr\u00e1v\u011b jednu fyzickou adresu, a je kl\u00ed\u010dov\u00e9, \u017ee tato fyzick\u00e1 bu\u0148ka m\u016f\u017ee b\u00fdt mapov\u00e1na v\u00fdhradn\u011b z jedn\u00e9 virtu\u00e1ln\u00ed adresy, \u010d\u00edm\u017e se zaji\u0161\u0165uje p\u0159\u00edm\u00e1 a jednozna\u010dn\u00e1 korespondence mezi virtu\u00e1ln\u00edm a fyzick\u00fdm adresov\u00e1n\u00edm.",
        sectionNumber: "1.2.3",
        sectionTitle: "P\u0159eklad adres",
      },
      {
        uuid: "0585b689-7c5e-4b77-9eb6-6edde406e7db",
        correct:
          "Mechanismus virtu\u00e1ln\u00edch adres v modern\u00edch opera\u010dn\u00edch syst\u00e9mech umo\u017e\u0148uje, \u017ee fyzick\u00e1 pam\u011b\u0165ov\u00e1 bu\u0148ka nemus\u00ed m\u00edt v dan\u00fd okam\u017eik p\u0159i\u0159azenou \u017e\u00e1dnou virtu\u00e1ln\u00ed adresu, co\u017e se vyu\u017e\u00edv\u00e1 nap\u0159\u00edklad pro optimalizaci vyu\u017eit\u00ed pam\u011bti a spr\u00e1vu voln\u00fdch str\u00e1nek, a sou\u010dasn\u011b dovoluje, aby r\u016fzn\u00e9 programy b\u011b\u017eely izolovan\u011b ve sv\u00fdch vlastn\u00edch virtu\u00e1ln\u00edch adresn\u00edch prostorech.",
        incorrect:
          "Mechanismus virtu\u00e1ln\u00edch adres v modern\u00edch opera\u010dn\u00edch syst\u00e9mech vy\u017eaduje, aby ka\u017ed\u00e1 fyzick\u00e1 pam\u011b\u0165ov\u00e1 bu\u0148ka m\u011bla neust\u00e1le p\u0159i\u0159azenou alespo\u0148 jednu virtu\u00e1ln\u00ed adresu, aby bylo zaji\u0161t\u011bno jej\u00ed vyu\u017eit\u00ed, a sou\u010dasn\u011b vy\u017eaduje, aby v\u0161echny programy b\u011b\u017eely sd\u00edlen\u011b v jednom glob\u00e1ln\u00edm virtu\u00e1ln\u00edm adresn\u00edm prostoru pro zjednodu\u0161en\u00ed spr\u00e1vy pam\u011bti a sd\u00edlen\u00ed dat mezi procesy.",
        sectionNumber: "1.2.3",
        sectionTitle: "P\u0159eklad adres",
      },
      {
        uuid: "9128cb5d-6e77-4838-a75e-e716e8e1e42e",
        correct:
          "V kontextu spr\u00e1vy pam\u011bti opera\u010dn\u00edho syst\u00e9mu je z\u00e1sadn\u00ed rozli\u0161ovat mezi virtu\u00e1ln\u00edmi adresami, kter\u00e9, a\u010dkoliv mohou b\u00fdt reprezentov\u00e1ny identick\u00fdmi \u010d\u00edseln\u00fdmi hodnotami, jsou pova\u017eov\u00e1ny za naprosto odli\u0161n\u00e9, pokud n\u00e1le\u017e\u00ed do r\u016fzn\u00fdch virtu\u00e1ln\u00edch adresn\u00edch prostor\u016f, co\u017e je kl\u00ed\u010dov\u00fd koncept pro zaji\u0161t\u011bn\u00ed izolace proces\u016f a bezpe\u010dnosti syst\u00e9mu p\u0159ed neopr\u00e1vn\u011bn\u00fdm p\u0159\u00edstupem.",
        incorrect:
          "V kontextu spr\u00e1vy pam\u011bti opera\u010dn\u00edho syst\u00e9mu je nerozhoduj\u00edc\u00ed rozli\u0161ovat mezi virtu\u00e1ln\u00edmi adresami n\u00e1le\u017e\u00edc\u00edmi do r\u016fzn\u00fdch virtu\u00e1ln\u00edch adresn\u00edch prostor\u016f, nebo\u0165 pokud jsou reprezentov\u00e1ny stejn\u00fdmi \u010d\u00edseln\u00fdmi hodnotami, jsou pova\u017eov\u00e1ny za ekvivalentn\u00ed a zam\u011bniteln\u00e9, co\u017e umo\u017e\u0148uje efektivn\u011bj\u0161\u00ed sd\u00edlen\u00ed pam\u011bti a zjednodu\u0161uje adresov\u00e1n\u00ed nap\u0159\u00ed\u010d procesy.",
        sectionNumber: "1.2.3",
        sectionTitle: "P\u0159eklad adres",
      },
      {
        uuid: "159494cc-f6c8-4525-b401-afb51e23a90f",
        correct:
          "P\u0159eklad adres z virtu\u00e1ln\u00edch na fyzick\u00e9 adresy je kriticky d\u016fle\u017eit\u00fd pro spr\u00e1vnou funkci modern\u00edch opera\u010dn\u00edch syst\u00e9m\u016f, jeliko\u017e procesor pracuje s virtu\u00e1ln\u00edmi adresami, kter\u00e9 se mus\u00ed p\u0159ed ka\u017ed\u00fdm p\u0159\u00edstupem do pam\u011bti transformovat na fyzick\u00e9 adresy, aby bylo mo\u017en\u00e9 lokalizovat data v re\u00e1ln\u00e9 pam\u011bti.",
        incorrect:
          "P\u0159eklad adres z virtu\u00e1ln\u00edch na fyzick\u00e9 adresy je zanedbateln\u00fd proces v modern\u00edch opera\u010dn\u00edch syst\u00e9mech, jeliko\u017e procesor pracuje p\u0159\u00edmo s fyzick\u00fdmi adresami, a opera\u010dn\u00ed syst\u00e9m se tak nemus\u00ed starat o slo\u017eitou transformaci adres p\u0159ed ka\u017ed\u00fdm p\u0159\u00edstupem do pam\u011bti, co\u017e zjednodu\u0161uje spr\u00e1vu pam\u011bti.",
        sectionNumber: "1.2.4",
        sectionTitle: "Jednotka spr\u00e1vy pam\u011bti",
      },
      {
        uuid: "845cd0c5-a4fa-424f-b180-b347ba6c77ce",
        correct:
          "Realizace p\u0159ekladu adres je implementov\u00e1na hardwarov\u011b jako sou\u010d\u00e1st centr\u00e1ln\u00ed procesorov\u00e9 jednotky (CPU), konkr\u00e9tn\u011b jednotkou spr\u00e1vy pam\u011bti (MMU), co\u017e umo\u017e\u0148uje dos\u00e1hnout vysok\u00e9 rychlosti p\u0159ekladu pot\u0159ebn\u00e9 pro efektivn\u00ed b\u011bh program\u016f a minimalizaci latence p\u0159i p\u0159\u00edstupu do pam\u011bti.",
        incorrect:
          "Realizace p\u0159ekladu adres je implementov\u00e1na softwarov\u011b opera\u010dn\u00edm syst\u00e9mem, co\u017e umo\u017e\u0148uje maxim\u00e1ln\u00ed flexibilitu a snadnou modifikaci p\u0159ekladov\u00fdch algoritm\u016f, av\u0161ak za cenu sn\u00ed\u017een\u00ed v\u00fdkonu a zv\u00fd\u0161en\u00ed latence p\u0159i ka\u017ed\u00e9m p\u0159\u00edstupu do pam\u011bti, co\u017e m\u016f\u017ee zpomalit b\u011bh program\u016f.",
        sectionNumber: "1.2.4",
        sectionTitle: "Jednotka spr\u00e1vy pam\u011bti",
      },
      {
        uuid: "4ce9cefd-db69-4480-9913-fd04b249347c",
        correct:
          "Opera\u010dn\u00ed syst\u00e9m, konkr\u00e9tn\u011b jeho j\u00e1dro, hraje kl\u00ed\u010dovou roli v procesu p\u0159ekladu adres t\u00edm, \u017ee spravuje p\u0159ekladov\u00e9 tabulky, kter\u00e9 definuj\u00ed mapov\u00e1n\u00ed mezi virtu\u00e1ln\u00edmi a fyzick\u00fdmi adresami, a t\u00edm umo\u017e\u0148uje \u0159\u00eddit virtu\u00e1ln\u00ed adresn\u00ed prostory jednotliv\u00fdch proces\u016f a zabezpe\u010dit izolaci pam\u011bti.",
        incorrect:
          "Opera\u010dn\u00ed syst\u00e9m nehraje \u017e\u00e1dnou roli v procesu p\u0159ekladu adres, jeliko\u017e p\u0159eklad je pln\u011b autonomn\u00ed hardwarov\u00e1 operace \u0159\u00edzen\u00e1 v\u00fdhradn\u011b procesorem, a opera\u010dn\u00ed syst\u00e9m tak nem\u00e1 mo\u017enost ovlivnit mapov\u00e1n\u00ed virtu\u00e1ln\u00edch adres na fyzick\u00e9 adresy ani spravovat virtu\u00e1ln\u00ed adresn\u00ed prostory proces\u016f.",
        sectionNumber: "1.2.4",
        sectionTitle: "Jednotka spr\u00e1vy pam\u011bti",
      },
      {
        uuid: "1480145d-39cb-4bfa-bfef-66c7fda1a2e1",
        correct:
          "P\u0159eklad virtu\u00e1ln\u00edch adres v modern\u00edch opera\u010dn\u00edch syst\u00e9mech vyu\u017e\u00edv\u00e1 str\u00e1nkov\u00e1n\u00ed, kde jsou virtu\u00e1ln\u00ed adresy rozd\u011bleny do blok\u016f pevn\u00e9 velikosti, ozna\u010dovan\u00fdch jako str\u00e1nky, jejich\u017e velikost je typicky mocninou dvou a je z\u00e1visl\u00e1 na hardwarov\u00e9 implementaci. Tato metoda nejen\u017ee redukuje pam\u011b\u0165ovou n\u00e1ro\u010dnost p\u0159ekladov\u00fdch tabulek, ale tak\u00e9 zjednodu\u0161uje a zefektiv\u0148uje cel\u00fd proces p\u0159ekladu virtu\u00e1ln\u00edch adres na fyzick\u00e9 adresy v pam\u011bti.",
        incorrect:
          "P\u0159eklad virtu\u00e1ln\u00edch adres v modern\u00edch opera\u010dn\u00edch syst\u00e9mech vyu\u017e\u00edv\u00e1 segmentaci, kde jsou virtu\u00e1ln\u00ed adresy rozd\u011bleny do blok\u016f prom\u011bnn\u00e9 velikosti, ozna\u010dovan\u00fdch jako segmenty, jejich\u017e velikost je libovoln\u00e1 a nez\u00e1visl\u00e1 na hardwarov\u00e9 implementaci. Tato metoda naopak zv\u011bt\u0161uje pam\u011b\u0165ovou n\u00e1ro\u010dnost p\u0159ekladov\u00fdch tabulek a komplikuje a zneefektiv\u0148uje cel\u00fd proces p\u0159ekladu virtu\u00e1ln\u00edch adres na fyzick\u00e9 adresy v pam\u011bti.",
        sectionNumber: "1.2.5",
        sectionTitle: "Str\u00e1nky",
      },
      {
        uuid: "e9bdf689-dc7e-4501-a0ca-09185be32f37",
        correct:
          "V kontextu str\u00e1nkov\u00e1n\u00ed pam\u011bti, za p\u0159edpokladu, \u017ee velikost str\u00e1nky je definov\u00e1na jako 2 na n-tou bajt\u016f a ka\u017ed\u00e1 str\u00e1nka za\u010d\u00edn\u00e1 na virtu\u00e1ln\u00ed adrese, kter\u00e1 je beze zbytku d\u011bliteln\u00e1 touto velikost\u00ed, a je mapov\u00e1na na fyzickou adresu, kter\u00e1 spl\u0148uje stejnou podm\u00ednku d\u011blitelnosti, je mo\u017en\u00e9 efektivn\u011b vyu\u017e\u00edt spodn\u00edch n bit\u016f virtu\u00e1ln\u00ed adresy pro p\u0159\u00edm\u00e9 ur\u010den\u00ed odpov\u00eddaj\u00edc\u00edch spodn\u00edch n bit\u016f fyzick\u00e9 adresy, co\u017e p\u0159edstavuje optimaliza\u010dn\u00ed techniku v procesu p\u0159ekladu adres.",
        incorrect:
          "V kontextu str\u00e1nkov\u00e1n\u00ed pam\u011bti, i kdy\u017e je velikost str\u00e1nky definov\u00e1na jako 2 na n-tou bajt\u016f a ka\u017ed\u00e1 str\u00e1nka za\u010d\u00edn\u00e1 na virtu\u00e1ln\u00ed adrese, kter\u00e1 je beze zbytku d\u011bliteln\u00e1 touto velikost\u00ed, ale nen\u00ed mapov\u00e1na na fyzickou adresu, kter\u00e1 spl\u0148uje stejnou podm\u00ednku d\u011blitelnosti, je st\u00e1le mo\u017en\u00e9 efektivn\u011b vyu\u017e\u00edt spodn\u00edch n bit\u016f virtu\u00e1ln\u00ed adresy pro p\u0159\u00edm\u00e9 ur\u010den\u00ed odpov\u00eddaj\u00edc\u00edch spodn\u00edch n bit\u016f fyzick\u00e9 adresy, co\u017e p\u0159edstavuje optimaliza\u010dn\u00ed techniku v procesu p\u0159ekladu adres.",
        sectionNumber: "1.2.5",
        sectionTitle: "Str\u00e1nky",
      },
      {
        uuid: "8e13c0b7-dce2-40f5-92c6-1e5967c2769b",
        correct:
          "Str\u00e1nkovac\u00ed tabulky, pou\u017e\u00edvan\u00e9 v modern\u00edch opera\u010dn\u00edch syst\u00e9mech s velk\u00fdmi adresn\u00edmi prostory, jsou obvykle ulo\u017eeny v opera\u010dn\u00ed pam\u011bti a implementov\u00e1ny jako v\u00edce\u00farov\u0148ov\u00e9 struktury, co\u017e umo\u017e\u0148uje efektivn\u011b spravovat \u0159\u00eddk\u00e9 adresn\u00ed prostory a urychlit p\u0159eklad virtu\u00e1ln\u00edch adres na fyzick\u00e9 adresy d\u00edky mechanism\u016fm jako TLB.",
        incorrect:
          "Str\u00e1nkovac\u00ed tabulky, pou\u017e\u00edvan\u00e9 v modern\u00edch opera\u010dn\u00edch syst\u00e9mech, jsou obvykle ulo\u017eeny p\u0159\u00edmo v procesoru a implementov\u00e1ny jako jedinou, rozs\u00e1hlou tabulku pro mapov\u00e1n\u00ed v\u0161ech virtu\u00e1ln\u00edch adres na fyzick\u00e9, co\u017e zaji\u0161\u0165uje nejrychlej\u0161\u00ed mo\u017en\u00fd p\u0159eklad adres bez dodate\u010dn\u00e9 re\u017eie spojen\u00e9 s v\u00edce\u00farov\u0148ov\u00fdm p\u0159ekladem.",
        sectionNumber: "1.2.6",
        sectionTitle: "Str\u00e1nkov\u00e9 tabulky",
      },
      {
        uuid: "1e111be0-730b-43f0-a654-1477664b4013",
        correct:
          "V syst\u00e9mu s v\u00edce\u00farov\u0148ov\u00fdmi str\u00e1nkovac\u00edmi tabulkami je virtu\u00e1ln\u00ed adresa rozd\u011blena na segmenty, kde ka\u017ed\u00fd segment, krom\u011b segmentu pro p\u0159\u00edm\u00e9 mapov\u00e1n\u00ed do fyzick\u00e9 adresy, slou\u017e\u00ed jako index do tabulky ur\u010dit\u00e9 \u00farovn\u011b, p\u0159i\u010dem\u017e hodnota na dan\u00e9m indexu odkazuje na tabulku ni\u017e\u0161\u00ed \u00farovn\u011b, dokud se nedos\u00e1hne fyzick\u00e9 adresy.",
        incorrect:
          "V syst\u00e9mu s v\u00edce\u00farov\u0148ov\u00fdmi str\u00e1nkovac\u00edmi tabulkami je virtu\u00e1ln\u00ed adresa rozd\u011blena na segmenty, kde ka\u017ed\u00fd segment slou\u017e\u00ed jako index do samostatn\u00e9 tabulky, a v\u0161echny tyto tabulky jsou prohled\u00e1v\u00e1ny paraleln\u011b najednou, aby se urychlil proces p\u0159ekladu virtu\u00e1ln\u00ed adresy na fyzickou adresu, co\u017e minimalizuje latenci p\u0159ekladu.",
        sectionNumber: "1.2.6",
        sectionTitle: "Str\u00e1nkov\u00e9 tabulky",
      },
      {
        uuid: "79547ff3-d55b-4e41-a82f-c06d01b2f525",
        correct:
          "Pro urychlen\u00ed p\u0159ekladu virtu\u00e1ln\u00edch adres opera\u010dn\u00ed syst\u00e9my vyu\u017e\u00edvaj\u00ed TLB (Translation Lookaside Buffer), co\u017e je asociativn\u00ed pam\u011b\u0165, kter\u00e1 uchov\u00e1v\u00e1 ned\u00e1vno p\u0159elo\u017een\u00e9 virtu\u00e1ln\u00ed adresy a odpov\u00eddaj\u00edc\u00ed fyzick\u00e9 adresy, a t\u00edm sni\u017euje pot\u0159ebu opakovan\u00e9ho proch\u00e1zen\u00ed v\u00edce\u00farov\u0148ov\u00fdch str\u00e1nkovac\u00edch tabulek v opera\u010dn\u00ed pam\u011bti.",
        incorrect:
          "Pro urychlen\u00ed p\u0159ekladu virtu\u00e1ln\u00edch adres opera\u010dn\u00ed syst\u00e9my vyu\u017e\u00edvaj\u00ed vyrovn\u00e1vac\u00ed pam\u011b\u0165 na pevn\u00e9m disku, kam se ukl\u00e1daj\u00ed \u010dasto pou\u017e\u00edvan\u00e9 str\u00e1nkovac\u00ed tabulky, co\u017e urychluje p\u0159\u00edstup k p\u0159ekladov\u00fdm informac\u00edm, zejm\u00e9na pokud jsou str\u00e1nkovac\u00ed tabulky p\u0159\u00edli\u0161 velk\u00e9 a nevejdou se do opera\u010dn\u00ed pam\u011bti.",
        sectionNumber: "1.2.6",
        sectionTitle: "Str\u00e1nkov\u00e9 tabulky",
      },
      {
        uuid: "eeeea780-f6aa-412d-83f4-673ad9a47134",
        correct:
          "Proces, form\u00e1ln\u011b definovan\u00fd jako virtu\u00e1ln\u00ed adresn\u00ed prostor v opera\u010dn\u00edch syst\u00e9mech, zahrnuje k\u00f3d programu a pracovn\u00ed data pot\u0159ebn\u00e1 pro jeho b\u011bh, p\u0159i\u010dem\u017e opera\u010dn\u00ed syst\u00e9m o procesu vede z\u00e1znam a proces m\u016f\u017ee vlastnit r\u016fzn\u00e9 zdroje, ale nevy\u017eaduje se, aby proces byl nutn\u011b p\u0159ipraven ke spu\u0161t\u011bn\u00ed nebo aby instrukce byly vykon\u00e1v\u00e1ny sekven\u010dn\u011b v jeho r\u00e1mci.",
        incorrect:
          "Proces, form\u00e1ln\u011b definovan\u00fd jako virtu\u00e1ln\u00ed adresn\u00ed prostor, opera\u010dn\u00ed syst\u00e9m pova\u017euje za entitu, kter\u00e1 mus\u00ed b\u00fdt neust\u00e1le p\u0159ipravena k okam\u017eit\u00e9mu spu\u0161t\u011bn\u00ed a vy\u017eaduje, aby instrukce v r\u00e1mci procesu byly vykon\u00e1v\u00e1ny striktn\u011b sekven\u010dn\u011b, a\u010dkoli st\u00e1le plat\u00ed, \u017ee proces zahrnuje k\u00f3d programu a pracovn\u00ed data a opera\u010dn\u00ed syst\u00e9m o n\u011bm vede z\u00e1znam.",
        sectionNumber: "1.3.1",
        sectionTitle: "Proces",
      },
      {
        uuid: "faddbd59-12ac-4315-aaaf-d13e443dca6d",
        correct:
          "V kontextu opera\u010dn\u00edch syst\u00e9m\u016f, proces, ch\u00e1pan\u00fd jako abstrakce pam\u011bti podle von Neumannovy architektury, m\u016f\u017ee b\u00fdt asociov\u00e1n s libovoln\u00fdm po\u010dtem vl\u00e1ken, v\u010detn\u011b nuly, a\u010dkoli proces bez vl\u00e1ken by byl z praktick\u00e9ho hlediska m\u00e9n\u011b u\u017eite\u010dn\u00fd, p\u0159i\u010dem\u017e vl\u00e1kna zaji\u0161\u0165uj\u00ed sekven\u010dn\u00ed vykon\u00e1v\u00e1n\u00ed instrukc\u00ed programu v r\u00e1mci dan\u00e9ho procesu.",
        incorrect:
          "Proces v opera\u010dn\u00edch syst\u00e9mech je striktn\u011b v\u00e1z\u00e1n na pr\u00e1v\u011b jedno vl\u00e1kno, kter\u00e9 zaji\u0161\u0165uje ve\u0161ker\u00e9 vykon\u00e1v\u00e1n\u00ed instrukc\u00ed programu sekven\u010dn\u011b, a a\u010dkoli se proces ch\u00e1pe jako abstrakce pam\u011bti von Neumannova typu, nem\u016f\u017ee existovat proces bez alespo\u0148 jednoho vl\u00e1kna, proto\u017ee vl\u00e1kna jsou nezbytn\u00e1 pro jeho funk\u010dnost.",
        sectionNumber: "1.3.1",
        sectionTitle: "Proces",
      },
      {
        uuid: "2fdcd890-16aa-45a4-a2cb-f2b14807f933",
        correct:
          "Virtu\u00e1ln\u00ed adresn\u00ed prostory proces\u016f jsou z velk\u00e9 \u010d\u00e1sti odd\u011blen\u00e9, co\u017e zaji\u0161\u0165uje, \u017ee procesy standardn\u011b nemaj\u00ed p\u0159\u00edm\u00fd p\u0159\u00edstup k pam\u011bti jin\u00fdch proces\u016f. Nicm\u00e9n\u011b existuj\u00ed v\u00fdjimky z tohoto pravidla, kter\u00e9 umo\u017e\u0148uj\u00ed sd\u00edlen\u00ed pam\u011bti mezi procesy, nap\u0159\u00edklad pro sd\u00edlen\u00ed k\u00f3du nebo pro implementaci komunika\u010dn\u00edch mechanism\u016f, a\u010dkoli toto sd\u00edlen\u00ed je pe\u010dliv\u011b kontrolov\u00e1no opera\u010dn\u00edm syst\u00e9mem.",
        incorrect:
          "Virtu\u00e1ln\u00ed adresn\u00ed prostory proces\u016f jsou zcela odd\u011blen\u00e9, co\u017e znamen\u00e1, \u017ee procesy nikdy nemaj\u00ed p\u0159\u00edm\u00fd p\u0159\u00edstup k pam\u011bti jin\u00fdch proces\u016f. Neexistuj\u00ed \u017e\u00e1dn\u00e9 mechanismy, kter\u00e9 by umo\u017e\u0148ovaly sd\u00edlen\u00ed pam\u011bti mezi procesy, a opera\u010dn\u00ed syst\u00e9m aktivn\u011b br\u00e1n\u00ed jak\u00e9mukoli pokusu o takov\u00e9 sd\u00edlen\u00ed, aby byla zaji\u0161t\u011bna maxim\u00e1ln\u00ed bezpe\u010dnost a izolace.",
        sectionNumber: "1.3.2",
        sectionTitle: "Ochrana pam\u011bti",
      },
      {
        uuid: "1960deb5-3eff-4a1c-8829-b8562bc50d97",
        correct:
          "Opera\u010dn\u00ed syst\u00e9m realizuje odd\u011blen\u00ed adresn\u00edch prostor\u016f pomoc\u00ed samostatn\u00fdch sad str\u00e1nkov\u00fdch tabulek pro ka\u017ed\u00fd proces, co\u017e mu umo\u017e\u0148uje detailn\u011b kontrolovat, kter\u00e9 fyzick\u00e9 adresy jsou dostupn\u00e9 pro ka\u017ed\u00fd proces. Str\u00e1nkov\u00e9 tabulky nav\u00edc obvykle obsahuj\u00ed mechanismy pro omezen\u00ed p\u0159\u00edstupu k pam\u011bti na \u00farovni jednotliv\u00fdch str\u00e1nek, v\u010detn\u011b mo\u017enosti zak\u00e1zat z\u00e1pis nebo spou\u0161t\u011bn\u00ed instrukc\u00ed, a t\u00edm efektivn\u011b chr\u00e1nit pam\u011b\u0165 p\u0159ed neopr\u00e1vn\u011bn\u00fdm p\u0159\u00edstupem.",
        incorrect:
          "Opera\u010dn\u00ed syst\u00e9m realizuje odd\u011blen\u00ed adresn\u00edch prostor\u016f v\u00fdhradn\u011b na hardwarov\u00e9 \u00farovni bez pou\u017eit\u00ed str\u00e1nkov\u00fdch tabulek, co\u017e je rychlej\u0161\u00ed, ale m\u00e9n\u011b flexibiln\u00ed.  Str\u00e1nkov\u00e9 tabulky slou\u017e\u00ed pouze pro mapov\u00e1n\u00ed virtu\u00e1ln\u00edch adres na fyzick\u00e9 a neobsahuj\u00ed \u017e\u00e1dn\u00e9 mechanismy pro \u0159\u00edzen\u00ed p\u0159\u00edstupov\u00fdch pr\u00e1v k pam\u011bti, proto\u017ee ve\u0161ker\u00e1 kontrola p\u0159\u00edstupu je zaji\u0161t\u011bna fyzick\u00fdm odd\u011blen\u00edm pam\u011b\u0165ov\u00fdch \u010dip\u016f.",
        sectionNumber: "1.3.2",
        sectionTitle: "Ochrana pam\u011bti",
      },
      {
        uuid: "4cf5c802-bb5d-4560-a451-f4c89b4b2373",
        correct:
          "Mechanismus sd\u00edlen\u00e9 pam\u011bti umo\u017e\u0148uje dv\u011bma nebo v\u00edce proces\u016fm mapovat stejn\u00fd blok fyzick\u00e9 pam\u011bti do sv\u00fdch virtu\u00e1ln\u00edch adresn\u00edch prostor\u016f, a to i s povolen\u00edm z\u00e1pisu, \u010d\u00edm\u017e se vytv\u00e1\u0159\u00ed prostor pro efektivn\u00ed komunikaci a sd\u00edlen\u00ed dat mezi procesy. D\u016fle\u017eit\u00e9 je, \u017ee virtu\u00e1ln\u00ed adresy tohoto sd\u00edlen\u00e9ho bloku pam\u011bti se nemus\u00ed nutn\u011b shodovat v adresn\u00edch prostorech v\u0161ech z\u00fa\u010dastn\u011bn\u00fdch proces\u016f.",
        incorrect:
          "Mechanismus sd\u00edlen\u00e9 pam\u011bti vy\u017eaduje, aby v\u0161echny procesy, kter\u00e9 sd\u00edlej\u00ed pam\u011b\u0165, m\u011bly tuto pam\u011b\u0165 namapovanou na stejn\u00e9 virtu\u00e1ln\u00ed adresy ve sv\u00fdch adresn\u00edch prostorech. Opera\u010dn\u00ed syst\u00e9m aktivn\u011b zaji\u0161\u0165uje, \u017ee virtu\u00e1ln\u00ed adresy sd\u00edlen\u00e9 pam\u011bti jsou identick\u00e9 nap\u0159\u00ed\u010d v\u0161emi procesy, aby se zjednodu\u0161ila spr\u00e1va pam\u011bti a minimalizovaly se potenci\u00e1ln\u00ed konflikty.",
        sectionNumber: "1.3.2",
        sectionTitle: "Ochrana pam\u011bti",
      },
      {
        uuid: "3d7c5549-eca6-46e6-9bc9-da275df653d7",
        correct:
          "Fyzick\u00e1 adresa str\u00e1nkovac\u00ed tabulky prvn\u00ed \u00farovn\u011b, kter\u00e1 je kl\u00ed\u010dov\u00e1 pro p\u0159eklad virtu\u00e1ln\u00edch adres na fyzick\u00e9, je ulo\u017eena ve speci\u00e1ln\u00edm registru procesoru. Tato adresa se nastavuje pomoc\u00ed privilegovan\u00e9 instrukce, kterou m\u016f\u017ee prov\u00e9st pouze j\u00e1dro opera\u010dn\u00edho syst\u00e9mu, \u010d\u00edm\u017e se zaji\u0161\u0165uje ochrana pam\u011bti a kontrola nad spr\u00e1vou adresn\u00edho prostoru. Zm\u011bnou hodnoty tohoto registru se aktivuje nov\u00e1 str\u00e1nkovac\u00ed tabulka, co\u017e je z\u00e1kladn\u00ed mechanismus pro p\u0159ep\u00edn\u00e1n\u00ed mezi procesy a spr\u00e1vu jejich pam\u011b\u0165ov\u00fdch prostor\u016f.",
        incorrect:
          "Fyzick\u00e1 adresa str\u00e1nkovac\u00ed tabulky prvn\u00ed \u00farovn\u011b je ulo\u017eena v b\u011b\u017en\u00e9 pam\u011bti RAM a je p\u0159\u00edstupn\u00e1 v\u0161em proces\u016fm. Tato adresa se nastavuje pomoc\u00ed standardn\u00ed instrukce, kterou m\u016f\u017ee prov\u00e9st jak\u00fdkoliv proces, co\u017e umo\u017e\u0148uje flexibiln\u00ed spr\u00e1vu pam\u011bti. Zm\u011bnou hodnoty t\u00e9to adresy se aktivuje nov\u00e1 str\u00e1nkovac\u00ed tabulka, ale tento mechanismus nen\u00ed spojen s p\u0159ep\u00edn\u00e1n\u00edm proces\u016f, ale slou\u017e\u00ed pouze pro dynamickou alokaci pam\u011bti v r\u00e1mci jednoho procesu.",
        sectionNumber: "1.3.3",
        sectionTitle: "P\u0159epnut\u00ed procesu",
      },
      {
        uuid: "7c6fd06a-bcb7-4bd8-a577-b3d1d6f63560",
        correct:
          "P\u0159epnut\u00ed procesu v opera\u010dn\u00edm syst\u00e9mu se realizuje zm\u011bnou aktivn\u00ed str\u00e1nkovac\u00ed tabulky. Tato operace spo\u010d\u00edv\u00e1 v nastaven\u00ed registru procesoru, kter\u00fd obsahuje fyzickou adresu str\u00e1nkovac\u00ed tabulky prvn\u00ed \u00farovn\u011b, na adresu tabulky pat\u0159\u00edc\u00ed nov\u011b aktivovan\u00e9mu procesu. D\u00edky tomu procesor za\u010dne pou\u017e\u00edvat pro p\u0159eklad virtu\u00e1ln\u00edch adres novou sadu mapov\u00e1n\u00ed, \u010d\u00edm\u017e se efektivn\u011b p\u0159epne kontext pam\u011b\u0165ov\u00e9ho prostoru mezi r\u016fzn\u00fdmi procesy.",
        incorrect:
          "P\u0159epnut\u00ed procesu v opera\u010dn\u00edm syst\u00e9mu se realizuje slo\u017eit\u00fdm kop\u00edrov\u00e1n\u00edm obsahu pam\u011bti z jednoho procesu do druh\u00e9ho. Tato operace spo\u010d\u00edv\u00e1 v manu\u00e1ln\u00edm p\u0159esunu dat a k\u00f3du mezi pam\u011b\u0165ov\u00fdmi prostory proces\u016f, co\u017e zaji\u0161\u0165uje izolaci a bezpe\u010dnost. Aktivn\u00ed str\u00e1nkovac\u00ed tabulka se p\u0159i p\u0159ep\u00edn\u00e1n\u00ed proces\u016f nem\u011bn\u00ed, proto\u017ee v\u0161echny procesy sd\u00edlej\u00ed stejn\u00fd adresn\u00ed prostor a pam\u011b\u0165.",
        sectionNumber: "1.3.3",
        sectionTitle: "P\u0159epnut\u00ed procesu",
      },
      {
        uuid: "957d5e47-df3e-4bf4-b6df-50d2377eb8f5",
        correct:
          "P\u0159epnut\u00ed vl\u00e1kna je \u00fazce spojeno s p\u0159epnut\u00edm procesu, av\u0161ak zahrnuje nav\u00edc v\u00fdm\u011bnu hodnot v\u00fdpo\u010detn\u00edch registr\u016f procesoru. Zat\u00edmco p\u0159epnut\u00ed procesu se zam\u011b\u0159uje na zm\u011bnu adresn\u00edho prostoru pomoc\u00ed str\u00e1nkovac\u00edch tabulek, p\u0159epnut\u00ed vl\u00e1kna se star\u00e1 o p\u0159epnut\u00ed kontextu v\u00fdpo\u010detn\u00ed jednotky. To je nezbytn\u00e9, proto\u017ee vl\u00e1kno, a nikoliv proces, je pova\u017eov\u00e1no za virtu\u00e1ln\u00ed v\u00fdpo\u010detn\u00ed jednotku v opera\u010dn\u00edm syst\u00e9mu.",
        incorrect:
          "P\u0159epnut\u00ed vl\u00e1kna je zcela nez\u00e1visl\u00e9 na p\u0159epnut\u00ed procesu a zahrnuje pouze zm\u011bnu adresn\u00edho prostoru pomoc\u00ed str\u00e1nkovac\u00edch tabulek. V\u00fdm\u011bna hodnot v\u00fdpo\u010detn\u00edch registr\u016f procesoru se prov\u00e1d\u00ed pouze p\u0159i p\u0159epnut\u00ed procesu, nikoliv vl\u00e1kna. Proces je pova\u017eov\u00e1n za virtu\u00e1ln\u00ed v\u00fdpo\u010detn\u00ed jednotku, zat\u00edmco vl\u00e1kno slou\u017e\u00ed pouze pro paraleln\u00ed prov\u00e1d\u011bn\u00ed \u00faloh v r\u00e1mci jednoho procesu.",
        sectionNumber: "1.3.3",
        sectionTitle: "P\u0159epnut\u00ed procesu",
      },
      {
        uuid: "93ae8169-4bd2-4cd1-b4ad-bcc371322b2c",
        correct:
          "Proces vytv\u00e1\u0159en\u00ed nov\u00e9ho procesu operac\u00ed `fork` v opera\u010dn\u00edch syst\u00e9mech vyu\u017e\u00edv\u00e1 techniku copy-on-write, kter\u00e1 efektivn\u011b \u0161et\u0159\u00ed syst\u00e9mov\u00e9 prost\u0159edky. Tato metoda spo\u010d\u00edv\u00e1 v po\u010d\u00e1te\u010dn\u00edm sd\u00edlen\u00ed adresn\u00edho prostoru mezi rodi\u010dovsk\u00fdm a potomkovsk\u00fdm procesem, p\u0159i\u010dem\u017e fyzick\u00e1 data v pam\u011bti se zpo\u010d\u00e1tku nekop\u00edruj\u00ed. Str\u00e1nky pam\u011bti jsou ozna\u010deny jako \u201ejen pro \u010dten\u00ed\u201c, a teprve p\u0159i pokusu o z\u00e1pis do sd\u00edlen\u00e9 pam\u011bti ze strany n\u011bkter\u00e9ho z proces\u016f dojde ke skute\u010dn\u00e9mu vytvo\u0159en\u00ed kopie dat.",
        incorrect:
          "Proces vytv\u00e1\u0159en\u00ed nov\u00e9ho procesu operac\u00ed `fork` v opera\u010dn\u00edch syst\u00e9mech zahrnuje okam\u017eitou a \u00faplnou duplikaci ve\u0161ker\u00fdch dat a adresn\u00edho prostoru rodi\u010dovsk\u00e9ho procesu, \u010d\u00edm\u017e se zajist\u00ed naprost\u00e1 izolace nov\u011b vznikl\u00e9ho procesu. Tato metoda sice spot\u0159ebov\u00e1v\u00e1 v\u00edce syst\u00e9mov\u00fdch prost\u0159edk\u016f na po\u010d\u00e1tku, ale zaru\u010duje, \u017ee jak\u00e9koli n\u00e1sledn\u00e9 operace z\u00e1pisu v jednom procesu neovlivn\u00ed data druh\u00e9ho procesu, a to i bez pou\u017eit\u00ed techniky copy-on-write.",
        sectionNumber: "1.3.4",
        sectionTitle: "Vytvo\u0159en\u00ed procesu",
      },
      {
        uuid: "9c7f7a8f-5cb2-4259-932e-1bbbdf236a7b",
        correct:
          "Mechanismus copy-on-write, implementovan\u00fd u operace `fork`, se op\u00edr\u00e1 o iluzi odd\u011blen\u00fdch adresn\u00edch prostor\u016f pro procesy, a\u010dkoli ve skute\u010dnosti data mohou b\u00fdt sd\u00edlena mezi procesy a\u017e do momentu, kdy jeden z nich provede z\u00e1pis. Do t\u00e9 doby oba procesy pracuj\u00ed s identick\u00fdmi daty v pam\u011bti, co\u017e je umo\u017en\u011bno ozna\u010den\u00edm str\u00e1nek jako \u201ejen pro \u010dten\u00ed\u201c a n\u00e1sledn\u00fdm zkop\u00edrov\u00e1n\u00edm pouze p\u0159i detekci pokusu o z\u00e1pis, \u010d\u00edm\u017e se \u0161et\u0159\u00ed pam\u011b\u0165 a \u010das.",
        incorrect:
          "Mechanismus copy-on-write u operace `fork` vytv\u00e1\u0159\u00ed skute\u010dn\u011b odd\u011blen\u00e9 adresn\u00ed prostory pro procesy ihned po jejich vytvo\u0159en\u00ed, p\u0159i\u010dem\u017e data nejsou nikdy sd\u00edlena mezi rodi\u010dovsk\u00fdm a potomkovsk\u00fdm procesem. Opera\u010dn\u00ed syst\u00e9m provede kompletn\u00ed kopii dat p\u0159i vol\u00e1n\u00ed `fork`, aby zajistil, \u017ee procesy budou od za\u010d\u00e1tku pracovat s vlastn\u00edmi, nez\u00e1visl\u00fdmi kopiemi dat, a p\u0159ede\u0161lo se tak necht\u011bn\u00fdm interakc\u00edm a chyb\u00e1m.",
        sectionNumber: "1.3.4",
        sectionTitle: "Vytvo\u0159en\u00ed procesu",
      },
      {
        uuid: "186e4590-3614-4120-9c5a-d0bfa8e62a5f",
        correct:
          "Pokus o p\u0159\u00edstup k neplatn\u00e9 virtu\u00e1ln\u00ed adrese v opera\u010dn\u00edm syst\u00e9mu v\u017edy vyvol\u00e1 v\u00fdjimku, co\u017e je mechanismus, kter\u00fd opera\u010dn\u00edmu syst\u00e9mu umo\u017e\u0148uje detekovat a reagovat na potenci\u00e1ln\u00ed chyby a neobvykl\u00e9 situace, p\u0159i\u010dem\u017e n\u00e1sledn\u00e9 zpracov\u00e1n\u00ed t\u00e9to v\u00fdjimky je pln\u011b v kompetenci j\u00e1dra opera\u010dn\u00edho syst\u00e9mu.",
        incorrect:
          "Pokus o p\u0159\u00edstup k neplatn\u00e9 virtu\u00e1ln\u00ed adrese v opera\u010dn\u00edm syst\u00e9mu je automaticky ignorov\u00e1n procesorem a nijak neovlivn\u00ed b\u011bh programu ani opera\u010dn\u00ed syst\u00e9m, p\u0159i\u010dem\u017e j\u00e1dro opera\u010dn\u00edho syst\u00e9mu se o t\u00e9to ud\u00e1losti nijak nedozv\u00ed a nem\u016f\u017ee na ni reagovat.",
        sectionNumber: "1.4.1",
        sectionTitle: "Neplatn\u00e9 adresy",
      },
      {
        uuid: "5db5a9d0-212c-46ab-a312-368a5b6dcfd5",
        correct:
          "Pokud se program pokus\u00ed zapsat data na virtu\u00e1ln\u00ed adresu, kter\u00e1 je v tabulce str\u00e1nek ozna\u010dena jako pouze pro \u010dten\u00ed, dojde k vyvol\u00e1n\u00ed v\u00fdjimky ochrany pam\u011bti, co\u017e zp\u016fsob\u00ed, \u017ee \u0159\u00edzen\u00ed nad syst\u00e9mem p\u0159evezme j\u00e1dro opera\u010dn\u00edho syst\u00e9mu, aby situaci vy\u0159e\u0161ilo.",
        incorrect:
          "Pokud se program pokus\u00ed zapsat data na virtu\u00e1ln\u00ed adresu, kter\u00e1 je v tabulce str\u00e1nek ozna\u010dena jako pouze pro \u010dten\u00ed, z\u00e1pis se neprovede, ale nedojde k \u017e\u00e1dn\u00e9 v\u00fdjimce a program pokra\u010duje v b\u011bhu, ani\u017e by o probl\u00e9mu byl informov\u00e1n opera\u010dn\u00ed syst\u00e9m.",
        sectionNumber: "1.4.1",
        sectionTitle: "Neplatn\u00e9 adresy",
      },
      {
        uuid: "ad7aa5a0-621e-4340-a942-70e2325aa304",
        correct:
          "V situaci, kdy virtu\u00e1ln\u00ed adresa je neplatn\u00e1, nemus\u00ed p\u0159\u00edslu\u0161n\u00fd \u0159\u00e1dek v tabulce str\u00e1nek obsahovat platnou fyzickou adresu, a opera\u010dn\u00ed syst\u00e9m m\u00e1 mo\u017enost vyu\u017e\u00edt toto pole v tabulce str\u00e1nek pro sv\u00e9 vlastn\u00ed \u00fa\u010dely, nap\u0159\u00edklad pro spr\u00e1vu pam\u011bti nebo sledov\u00e1n\u00ed stavu str\u00e1nek.",
        incorrect:
          "V situaci, kdy virtu\u00e1ln\u00ed adresa je neplatn\u00e1, mus\u00ed p\u0159\u00edslu\u0161n\u00fd \u0159\u00e1dek v tabulce str\u00e1nek v\u017edy obsahovat platnou fyzickou adresu, kter\u00e1 je alespo\u0148 implicitn\u011b nulov\u00e1, a opera\u010dn\u00ed syst\u00e9m nesm\u00ed toto pole v tabulce str\u00e1nek vyu\u017e\u00edvat pro \u017e\u00e1dn\u00e9 jin\u00e9 \u00fa\u010dely ne\u017e pro mapov\u00e1n\u00ed platn\u00fdch fyzick\u00fdch adres.",
        sectionNumber: "1.4.1",
        sectionTitle: "Neplatn\u00e9 adresy",
      },
      {
        uuid: "3b61604d-7946-4702-8338-52e50c69e115",
        correct:
          "Opera\u010dn\u00ed syst\u00e9m m\u016f\u017ee p\u0159esunout data z opera\u010dn\u00ed pam\u011bti na extern\u00ed \u00falo\u017ei\u0161t\u011b, jako je pevn\u00fd disk, pokud opera\u010dn\u00ed pam\u011b\u0165 za\u010d\u00edn\u00e1 b\u00fdt nedostate\u010dn\u00e1 a b\u011b\u017e\u00edc\u00ed programy vy\u017eaduj\u00ed v\u00edce pam\u011bti, ne\u017e je fyzicky dostupn\u00e9, p\u0159i\u010dem\u017e v str\u00e1nkov\u00e9 tabulce ozna\u010d\u00ed p\u016fvodn\u00ed adresu str\u00e1nky jako neplatnou.",
        incorrect:
          "Opera\u010dn\u00ed syst\u00e9m m\u016f\u017ee p\u0159esunout data z opera\u010dn\u00ed pam\u011bti na extern\u00ed \u00falo\u017ei\u0161t\u011b, jako je pevn\u00fd disk, pouze pokud opera\u010dn\u00ed pam\u011b\u0165 je zcela zapln\u011bna a b\u011b\u017e\u00edc\u00ed programy vy\u017eaduj\u00ed absolutn\u011b nezbytn\u011b v\u00edce pam\u011bti, ne\u017e je fyzicky dostupn\u00e9, p\u0159i\u010dem\u017e v str\u00e1nkov\u00e9 tabulce sma\u017ee p\u016fvodn\u00ed adresu str\u00e1nky.",
        sectionNumber: "1.4.2",
        sectionTitle: "Extern\u00ed str\u00e1nkov\u00e1n\u00ed",
      },
      {
        uuid: "883a0707-9f0e-499a-8fbf-b2d69bb0d7d9",
        correct:
          "Mechanismus p\u0159esunu str\u00e1nek z opera\u010dn\u00ed pam\u011bti na extern\u00ed \u00falo\u017ei\u0161t\u011b umo\u017e\u0148uje opera\u010dn\u00edmu syst\u00e9mu efektivn\u011bji spravovat omezen\u00e9 zdroje fyzick\u00e9 pam\u011bti, a to i za cenu potenci\u00e1ln\u00edho zpomalen\u00ed v p\u0159\u00edpad\u011b \u010dast\u00e9ho p\u0159\u00edstupu k takto odklizen\u00fdm str\u00e1nk\u00e1m, co\u017e je akceptovateln\u00e9, pokud se to ned\u011bje p\u0159\u00edli\u0161 \u010dasto.",
        incorrect:
          "Mechanismus p\u0159esunu str\u00e1nek z opera\u010dn\u00ed pam\u011bti na extern\u00ed \u00falo\u017ei\u0161t\u011b umo\u017e\u0148uje opera\u010dn\u00edmu syst\u00e9mu v\u00fdrazn\u011b zv\u00fd\u0161it v\u00fdkon syst\u00e9mu za v\u0161ech okolnost\u00ed, a to i v p\u0159\u00edpad\u011b \u010dast\u00e9ho p\u0159\u00edstupu k takto odklizen\u00fdm str\u00e1nk\u00e1m, co\u017e je v\u017edy akceptovateln\u00e9 a nikdy nezp\u016fsobuje zpomalen\u00ed.",
        sectionNumber: "1.4.2",
        sectionTitle: "Extern\u00ed str\u00e1nkov\u00e1n\u00ed",
      },
      {
        uuid: "d7bfe85c-b931-47f5-96a0-853edba44989",
        correct:
          "V kontextu extern\u00edho str\u00e1nkov\u00e1n\u00ed, jak je pops\u00e1no v\u00a0materi\u00e1lech, se pojem r\u00e1mec pou\u017e\u00edv\u00e1 k ozna\u010den\u00ed rozsahu fyzick\u00fdch adres v pam\u011bti, kter\u00e9 maj\u00ed stejnou velikost a zarovn\u00e1n\u00ed jako str\u00e1nky virtu\u00e1ln\u00ed pam\u011bti, p\u0159i\u010dem\u017e ka\u017ed\u00fd r\u00e1mec je ur\u010den k ulo\u017een\u00ed pr\u00e1v\u011b jedn\u00e9 str\u00e1nky, co\u017e umo\u017e\u0148uje flexibiln\u00ed spr\u00e1vu pam\u011bti a p\u0159esouv\u00e1n\u00ed str\u00e1nek mezi r\u00e1mci.",
        incorrect:
          "V kontextu extern\u00edho str\u00e1nkov\u00e1n\u00ed se pojem r\u00e1mec chybn\u011b pou\u017e\u00edv\u00e1 k ozna\u010den\u00ed rozsahu virtu\u00e1ln\u00edch adres, kter\u00e9 se mapuj\u00ed na fyzickou pam\u011b\u0165 a maj\u00ed prom\u011bnlivou velikost v z\u00e1vislosti na aktu\u00e1ln\u00edch pot\u0159eb\u00e1ch syst\u00e9mu, p\u0159i\u010dem\u017e jeden r\u00e1mec m\u016f\u017ee obsahovat v\u00edce str\u00e1nek a slou\u017e\u00ed k agregaci virtu\u00e1ln\u00edch adres pro efektivn\u011bj\u0161\u00ed spr\u00e1vu pam\u011bti.",
        sectionNumber: "1.4.3",
        sectionTitle: "R\u00e1mce a str\u00e1nky",
      },
      {
        uuid: "a27490ad-0330-4924-aac7-f3a86a615cde",
        correct:
          "Podle poskytnut\u00fdch materi\u00e1l\u016f, zaveden\u00ed pojmu r\u00e1mec je motivov\u00e1no pot\u0159ebou p\u0159esn\u011bj\u0161\u00ed terminologie v situac\u00edch, kdy extern\u00ed str\u00e1nkov\u00e1n\u00ed zp\u016fsobuje p\u0159em\u00eds\u0165ov\u00e1n\u00ed str\u00e1nek ve fyzick\u00e9 pam\u011bti, a proto je nutn\u00e9 rozli\u0161ovat mezi str\u00e1nkou jako rozsahem virtu\u00e1ln\u00edch adres a r\u00e1mcem jako rozsahem fyzick\u00fdch adres, do kter\u00e9ho se str\u00e1nka ukl\u00e1d\u00e1.",
        incorrect:
          "Podle materi\u00e1l\u016f, zaveden\u00ed pojmu r\u00e1mec je motivov\u00e1no snahou o zjednodu\u0161en\u00ed terminologie v oblasti spr\u00e1vy pam\u011bti, kdy r\u00e1mec a str\u00e1nka se st\u00e1vaj\u00ed synonyma ozna\u010duj\u00edc\u00ed libovoln\u00fd blok pam\u011bti, a to jak virtu\u00e1ln\u00ed, tak fyzick\u00e9, \u010d\u00edm\u017e se eliminuje pot\u0159eba rozli\u0161ovat mezi r\u016fzn\u00fdmi typy adres v pam\u011b\u0165ov\u00e9m prostoru.",
        sectionNumber: "1.4.3",
        sectionTitle: "R\u00e1mce a str\u00e1nky",
      },
      {
        uuid: "b9e8e6bc-8399-44c1-b0f7-3eba60853cea",
        correct:
          "L\u00edn\u00e9 na\u010d\u00edt\u00e1n\u00ed spustiteln\u00fdch soubor\u016f vyu\u017e\u00edv\u00e1 str\u00e1nkovac\u00ed tabulku k zaji\u0161t\u011bn\u00ed na\u010dten\u00ed str\u00e1nek programu z extern\u00edho \u00falo\u017ei\u0161t\u011b, jako je disk, pouze v okam\u017eiku, kdy jsou skute\u010dn\u011b pot\u0159eba, \u010d\u00edm\u017e se minimalizuje po\u010d\u00e1te\u010dn\u00ed zpo\u017ed\u011bn\u00ed p\u0159i spou\u0161t\u011bn\u00ed programu a \u0161et\u0159\u00ed opera\u010dn\u00ed pam\u011b\u0165.",
        incorrect:
          "L\u00edn\u00e9 na\u010d\u00edt\u00e1n\u00ed spustiteln\u00fdch soubor\u016f vy\u017eaduje, aby byl cel\u00fd obsah spustiteln\u00e9ho souboru na\u010dten do opera\u010dn\u00ed pam\u011bti je\u0161t\u011b p\u0159ed samotn\u00fdm spu\u0161t\u011bn\u00edm programu, a teprve pot\u00e9 se str\u00e1nkovac\u00ed tabulka pou\u017eije pro efektivn\u00ed spr\u00e1vu pam\u011bti, co\u017e zaji\u0161\u0165uje rychl\u00fd start programu.",
        sectionNumber: "1.4.4",
        sectionTitle: "L\u00edn\u00e9 na\u010d\u00edt\u00e1n\u00ed",
      },
      {
        uuid: "344d3498-ff39-4fa0-a364-1d5312a6655a",
        correct:
          "Mechanismus l\u00edn\u00e9ho na\u010d\u00edt\u00e1n\u00ed je principi\u00e1ln\u011b shodn\u00fd s extern\u00edm str\u00e1nkov\u00e1n\u00edm, av\u0161ak je jednodu\u0161\u0161\u00ed, proto\u017ee p\u0159i n\u011bm odpad\u00e1 nutnost vyhled\u00e1v\u00e1n\u00ed a ukl\u00e1d\u00e1n\u00ed ob\u011btn\u00ed str\u00e1nky na disk, jeliko\u017e po\u017eadovan\u00e9 str\u00e1nky se na\u010d\u00edtaj\u00ed p\u0159\u00edmo ze spustiteln\u00e9ho souboru, kde jsou trvale ulo\u017eeny.",
        incorrect:
          "Mechanismus l\u00edn\u00e9ho na\u010d\u00edt\u00e1n\u00ed se z\u00e1sadn\u011b li\u0161\u00ed od extern\u00edho str\u00e1nkov\u00e1n\u00ed v tom, \u017ee nevyu\u017e\u00edv\u00e1 str\u00e1nkovac\u00ed tabulku a m\u00edsto toho spol\u00e9h\u00e1 na segmentaci pam\u011bti pro na\u010d\u00edt\u00e1n\u00ed \u010d\u00e1st\u00ed spustiteln\u00e9ho souboru, p\u0159i\u010dem\u017e proces hled\u00e1n\u00ed ob\u011btn\u00ed str\u00e1nky a jej\u00edho ulo\u017een\u00ed na disk z\u016fst\u00e1v\u00e1 nezm\u011bn\u011bn.",
        sectionNumber: "1.4.4",
        sectionTitle: "L\u00edn\u00e9 na\u010d\u00edt\u00e1n\u00ed",
      },
      {
        uuid: "e8658506-b1ff-4006-bd14-b4da15b52365",
        correct:
          "V p\u0159\u00edpad\u011b kombinace l\u00edn\u00e9ho na\u010d\u00edt\u00e1n\u00ed s klasick\u00fdm extern\u00edm str\u00e1nkov\u00e1n\u00edm, pokud je jako ob\u011btn\u00ed str\u00e1nka vybr\u00e1na str\u00e1nka obsahuj\u00edc\u00ed k\u00f3d nebo konstantn\u00ed data, nen\u00ed nutn\u00e9 tuto str\u00e1nku zapisovat na disk, proto\u017ee jej\u00ed aktu\u00e1ln\u00ed kopie ji\u017e existuje ve spustiteln\u00e9m souboru, odkud m\u016f\u017ee b\u00fdt v p\u0159\u00edpad\u011b pot\u0159eby znovu na\u010dtena.",
        incorrect:
          "P\u0159i kombinaci l\u00edn\u00e9ho na\u010d\u00edt\u00e1n\u00ed s extern\u00edm str\u00e1nkov\u00e1n\u00edm, i kdy\u017e je jako ob\u011b\u0165 zvolena str\u00e1nka s k\u00f3dem programu, je nezbytn\u00e9 ji p\u0159ed uvoln\u011bn\u00edm pam\u011bti ulo\u017eit na disk, a to i v p\u0159\u00edpadech, kdy je tato str\u00e1nka identick\u00e1 s obsahem ve spustiteln\u00e9m souboru, aby se p\u0159ede\u0161lo ztr\u00e1t\u011b dat.",
        sectionNumber: "1.4.4",
        sectionTitle: "L\u00edn\u00e9 na\u010d\u00edt\u00e1n\u00ed",
      },
      {
        uuid: "70acaa38-05fd-472c-b993-82e2c9acea94",
        correct:
          "Nejd\u016fle\u017eit\u011bj\u0161\u00ed aplikace extern\u00edho str\u00e1nkov\u00e1n\u00ed v opera\u010dn\u00edch syst\u00e9mech spo\u010d\u00edv\u00e1 v mapov\u00e1n\u00ed datov\u00fdch soubor\u016f do pam\u011bti na explicitn\u00ed \u017e\u00e1dost aplikace, co\u017e umo\u017e\u0148uje program\u016fm p\u0159istupovat k dat\u016fm v souborech, jako by byly p\u0159\u00edmo ulo\u017eeny v opera\u010dn\u00ed pam\u011bti, nam\u00edsto prov\u00e1d\u011bn\u00ed tradi\u010dn\u00edch vstupn\u011b-v\u00fdstupn\u00edch operac\u00ed.",
        incorrect:
          "Nejm\u00e9n\u011b d\u016fle\u017eit\u00e1 aplikace extern\u00edho str\u00e1nkov\u00e1n\u00ed v opera\u010dn\u00edch syst\u00e9mech spo\u010d\u00edv\u00e1 v mapov\u00e1n\u00ed datov\u00fdch soubor\u016f do pam\u011bti bez explicitn\u00ed \u017e\u00e1dosti aplikace, co\u017e neumo\u017e\u0148uje program\u016fm p\u0159istupovat k dat\u016fm v souborech, jako by byly p\u0159\u00edmo ulo\u017eeny v opera\u010dn\u00ed pam\u011bti, a vy\u017eaduje prov\u00e1d\u011bn\u00ed tradi\u010dn\u00edch vstupn\u011b-v\u00fdstupn\u00edch operac\u00ed.",
        sectionNumber: "1.4.5",
        sectionTitle: "Mapov\u00e1n\u00ed soubor\u016f",
      },
      {
        uuid: "9acfd0d4-7446-442c-9283-91fcadf1e3e4",
        correct:
          "P\u0159i mapov\u00e1n\u00ed datov\u00fdch soubor\u016f do pam\u011bti pomoc\u00ed extern\u00edho str\u00e1nkov\u00e1n\u00ed jsou extern\u00ed str\u00e1nky, kter\u00e9 reprezentuj\u00ed \u010d\u00e1sti souboru, fyzicky ulo\u017eeny v b\u011b\u017en\u00e9m souboru na disku, co\u017e umo\u017e\u0148uje efektivn\u00ed spr\u00e1vu pam\u011bti a sd\u00edlen\u00ed dat mezi procesy, kter\u00e9 mapuj\u00ed stejn\u00fd soubor.",
        incorrect:
          "P\u0159i mapov\u00e1n\u00ed datov\u00fdch soubor\u016f do pam\u011bti pomoc\u00ed extern\u00edho str\u00e1nkov\u00e1n\u00ed jsou extern\u00ed str\u00e1nky, kter\u00e9 reprezentuj\u00ed \u010d\u00e1sti souboru, fyzicky ulo\u017eeny ve vyhrazen\u00e9 swapovac\u00ed oblasti, nikoli v b\u011b\u017en\u00e9m souboru na disku, co\u017e neumo\u017e\u0148uje efektivn\u00ed spr\u00e1vu pam\u011bti a sd\u00edlen\u00ed dat mezi procesy, kter\u00e9 mapuj\u00ed stejn\u00fd soubor.",
        sectionNumber: "1.4.5",
        sectionTitle: "Mapov\u00e1n\u00ed soubor\u016f",
      },
      {
        uuid: "606a0a12-b110-4d53-b846-a5861f013f0d",
        correct:
          "Mechanismus mapov\u00e1n\u00ed soubor\u016f do pam\u011bti s vyu\u017eit\u00edm extern\u00edho str\u00e1nkov\u00e1n\u00ed umo\u017e\u0148uje program\u016fm transparentn\u011b upravovat obsah soubor\u016f t\u00edm, \u017ee se zm\u011bn\u011bn\u00e9 str\u00e1nky automaticky zapisuj\u00ed zp\u011bt do souboru na disku, \u010d\u00edm\u017e se eliminuje pot\u0159eba explicitn\u00edch vol\u00e1n\u00ed pro z\u00e1pis dat a zjednodu\u0161uje se pr\u00e1ce s persistentn\u00edmi daty.",
        incorrect:
          "Mechanismus mapov\u00e1n\u00ed soubor\u016f do pam\u011bti s vyu\u017eit\u00edm extern\u00edho str\u00e1nkov\u00e1n\u00ed vy\u017eaduje, aby programy manu\u00e1ln\u011b volaly syst\u00e9mov\u00e1 vol\u00e1n\u00ed pro z\u00e1pis dat zp\u011bt do souboru na disku, proto\u017ee zm\u011bn\u011bn\u00e9 str\u00e1nky se automaticky nezapisuj\u00ed, co\u017e komplikuje pr\u00e1ci s persistentn\u00edmi daty a vy\u017eaduje explicitn\u00ed spr\u00e1vu z\u00e1pisu.",
        sectionNumber: "1.4.5",
        sectionTitle: "Mapov\u00e1n\u00ed soubor\u016f",
      },
    ],
  };
