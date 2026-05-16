import type { Section } from '../../common/types';

export const section4_virtualizace_periferii: Section = {
    uuid: "6b63955f-4e35-42cc-a033-58a2921b3496",
    sectionNumber: "4",
    sectionTitle: "Virtualizace periferi\u00ed",
    statements: [
      {
        uuid: "686028c0-20c3-4a03-9acd-4ac27da564d4",
        correct:
          "Mezi pomocn\u00e1 vnit\u0159n\u00ed za\u0159\u00edzen\u00ed, kter\u00e1 jsou kl\u00ed\u010dov\u00e1 pro funk\u010dnost modern\u00edch po\u010d\u00edta\u010d\u016f, se \u0159ad\u00ed p\u0159edev\u0161\u00edm \u0159adi\u010de sb\u011brnic, je\u017e zaji\u0161\u0165uj\u00ed nezbytnou komunikaci a spr\u00e1vu datov\u00e9ho toku mezi procesorem, opera\u010dn\u00ed pam\u011bt\u00ed a dal\u0161\u00edmi hardwarov\u00fdmi komponentami uvnit\u0159 syst\u00e9mu.",
        incorrect:
          "Mezi pomocn\u00e1 vnit\u0159n\u00ed za\u0159\u00edzen\u00ed po\u010d\u00edta\u010d\u016f se prim\u00e1rn\u011b \u0159ad\u00ed extern\u00ed periferie jako tisk\u00e1rny a skenery, kter\u00e9 jsou p\u0159ipojeny k po\u010d\u00edta\u010di zven\u010d\u00ed a zaji\u0161\u0165uj\u00ed interakci s vn\u011bj\u0161\u00edm prost\u0159ed\u00edm, zat\u00edmco \u0159adi\u010de sb\u011brnic jsou pova\u017eov\u00e1ny za m\u00e9n\u011b d\u016fle\u017eit\u00e9 pro z\u00e1kladn\u00ed funk\u010dnost syst\u00e9mu.",
        sectionNumber: "4.1.1",
        sectionTitle: "Typy periferi\u00ed",
      },
      {
        uuid: "2a37bab7-b37c-416c-a608-be43426e30a2",
        correct:
          "Perzistentn\u00ed \u00falo\u017ei\u0161t\u011b, jako jsou pevn\u00e9 disky nebo SSD disky, slou\u017e\u00ed v po\u010d\u00edta\u010dov\u00fdch syst\u00e9mech k dlouhodob\u00e9mu a spolehliv\u00e9mu uchov\u00e1n\u00ed dat i v p\u0159\u00edpad\u011b odpojen\u00ed nap\u00e1jen\u00ed, co\u017e je fundament\u00e1ln\u00ed pro zachov\u00e1n\u00ed dat u\u017eivatel\u016f a syst\u00e9mov\u00fdch informac\u00ed mezi jednotliv\u00fdmi pracovn\u00edmi relacemi.",
        incorrect:
          "Perzistentn\u00ed \u00falo\u017ei\u0161t\u011b v po\u010d\u00edta\u010dov\u00fdch syst\u00e9mech slou\u017e\u00ed v\u00fdhradn\u011b k do\u010dasn\u00e9mu ukl\u00e1d\u00e1n\u00ed dat opera\u010dn\u00ed pam\u011bti b\u011bhem kr\u00e1tkodob\u00fdch v\u00fdpo\u010dt\u016f a po ukon\u010den\u00ed b\u011bhu programu se data automaticky a bezpe\u010dn\u011b ma\u017eou, \u010d\u00edm\u017e se minimalizuje riziko neopr\u00e1vn\u011bn\u00e9ho p\u0159\u00edstupu k informac\u00edm.",
        sectionNumber: "4.1.1",
        sectionTitle: "Typy periferi\u00ed",
      },
      {
        uuid: "57aeddea-68f2-4ac9-a0dc-c852f164cb42",
        correct:
          "S\u00ed\u0165ov\u00e1 rozhran\u00ed p\u0159edstavuj\u00ed z\u00e1sadn\u00ed komponenty umo\u017e\u0148uj\u00edc\u00ed po\u010d\u00edta\u010d\u016fm komunikovat v r\u00e1mci s\u00edt\u00ed, a to jak lok\u00e1ln\u00edch, tak rozs\u00e1hl\u00fdch, p\u0159i\u010dem\u017e tato rozhran\u00ed realizuj\u00ed fyzick\u00e9 i logick\u00e9 propojen\u00ed, kter\u00e9 je nezbytn\u00e9 pro sd\u00edlen\u00ed dat, zdroj\u016f a provoz modern\u00edch distribuovan\u00fdch aplikac\u00ed a slu\u017eeb.",
        incorrect:
          "S\u00ed\u0165ov\u00e1 rozhran\u00ed v po\u010d\u00edta\u010d\u00edch jsou ur\u010dena v\u00fdhradn\u011b pro intern\u00ed komunikaci mezi komponentami uvnit\u0159 jednoho po\u010d\u00edta\u010de a nemaj\u00ed \u017e\u00e1dnou funk\u010dn\u00ed roli v propojov\u00e1n\u00ed po\u010d\u00edta\u010d\u016f do s\u00edt\u00ed, p\u0159i\u010dem\u017e komunikace mezi po\u010d\u00edta\u010di je \u0159e\u0161ena jin\u00fdmi, zcela odd\u011blen\u00fdmi mechanismy.",
        sectionNumber: "4.1.1",
        sectionTitle: "Typy periferi\u00ed",
      },
      {
        uuid: "5eb24569-35c6-4e68-bbc0-2783f21baa22",
        correct:
          "Termin\u00e1l, ch\u00e1pan\u00fd jako komplexn\u00ed u\u017eivatelsk\u00e9 rozhran\u00ed, integruje nejen obrazovku pro vizu\u00e1ln\u00ed prezentaci informac\u00ed a kl\u00e1vesnici pro zad\u00e1v\u00e1n\u00ed textov\u00fdch p\u0159\u00edkaz\u016f, ale obvykle zahrnuje i dal\u0161\u00ed vstupn\u00ed a v\u00fdstupn\u00ed za\u0159\u00edzen\u00ed, jako jsou my\u0161i, tisk\u00e1rny, skenery a audio periferie, \u010d\u00edm\u017e poskytuje u\u017eivateli kompletn\u00ed prost\u0159edky pro interakci s po\u010d\u00edta\u010dem.",
        incorrect:
          "Termin\u00e1l v modern\u00edm pojet\u00ed je striktn\u011b omezen na z\u00e1kladn\u00ed zobrazovac\u00ed jednotku, tedy pouze obrazovku, a kl\u00e1vesnici pro zad\u00e1v\u00e1n\u00ed znak\u016f, p\u0159i\u010dem\u017e ve\u0161ker\u00e1 dal\u0161\u00ed za\u0159\u00edzen\u00ed, jako my\u0161, tisk\u00e1rna nebo skener, jsou pova\u017eov\u00e1na za voliteln\u00e1 a nesouvisej\u00edc\u00ed roz\u0161\u00ed\u0159en\u00ed, kter\u00e1 nejsou integr\u00e1ln\u00ed sou\u010d\u00e1st\u00ed termin\u00e1lu.",
        sectionNumber: "4.1.1",
        sectionTitle: "Typy periferi\u00ed",
      },
      {
        uuid: "8ea74fe1-470d-461a-b2c1-4d2792c6c22d",
        correct:
          "Komunikace s periferiemi, kter\u00e9 produkuj\u00ed a konzumuj\u00ed data v mal\u00e9m objemu, se typicky realizuje mapov\u00e1n\u00edm registr\u016f t\u011bchto za\u0159\u00edzen\u00ed na fyzick\u00e9 adresy v pam\u011bti syst\u00e9mu, co\u017e umo\u017e\u0148uje procesoru p\u0159istupovat k registr\u016fm za\u0159\u00edzen\u00ed pomoc\u00ed standardn\u00edch instrukc\u00ed pro pr\u00e1ci s pam\u011bt\u00ed, jako by se jednalo o b\u011b\u017enou opera\u010dn\u00ed pam\u011b\u0165.",
        incorrect:
          "Komunikace s periferiemi, kter\u00e9 produkuj\u00ed a konzumuj\u00ed data v mal\u00e9m objemu, se typicky realizuje mapov\u00e1n\u00edm registr\u016f procesoru na fyzick\u00e9 adresy v pam\u011bti syst\u00e9mu, co\u017e vy\u017eaduje, aby opera\u010dn\u00ed syst\u00e9m pro ka\u017ed\u00fd p\u0159\u00edstup k periferii musel p\u0159eprogramovat mapov\u00e1n\u00ed registr\u016f procesoru a n\u00e1sledn\u011b pou\u017e\u00edt speci\u00e1ln\u00ed instrukce pro komunikaci s periferiemi.",
        sectionNumber: "4.1.2",
        sectionTitle: "Co je periferie?",
      },
      {
        uuid: "aca8c7db-1097-48d4-8d01-08073dc6303a",
        correct:
          "Registry za\u0159\u00edzen\u00ed, na rozd\u00edl od registr\u016f procesoru, p\u0159edstavuj\u00ed pevn\u00e9 pam\u011b\u0165ov\u00e9 bu\u0148ky s p\u0159edem definovanou funkc\u00ed, kter\u00e9 jsou z pohledu hlavn\u00edho procesoru adresovateln\u00e9 entity, a jejich hodnoty se mohou m\u011bnit v \u010dase i bez p\u0159\u00edm\u00e9ho z\u00e1sahu hlavn\u00edho procesoru nebo opera\u010dn\u00edho syst\u00e9mu, co\u017e se pova\u017euje za ud\u00e1lost generovanou za\u0159\u00edzen\u00edm.",
        incorrect:
          "Registry za\u0159\u00edzen\u00ed jsou identick\u00e9 s registry procesoru a slou\u017e\u00ed k do\u010dasn\u00e9mu ulo\u017een\u00ed dat b\u011bhem v\u00fdpo\u010dt\u016f prov\u00e1d\u011bn\u00fdch hlavn\u00edm procesorem.  Z pohledu opera\u010dn\u00edho syst\u00e9mu registry za\u0159\u00edzen\u00ed nejsou adresovateln\u00e9 p\u0159\u00edmo a vy\u017eaduj\u00ed pro p\u0159\u00edstup speci\u00e1ln\u00ed instrukce j\u00e1dra opera\u010dn\u00edho syst\u00e9mu, p\u0159i\u010dem\u017e jejich hodnoty se m\u011bn\u00ed pouze na z\u00e1klad\u011b p\u0159\u00edm\u00fdch instrukc\u00ed hlavn\u00edho procesoru.",
        sectionNumber: "4.1.2",
        sectionTitle: "Co je periferie?",
      },
      {
        uuid: "63dc0db9-9b9e-45b9-9bfd-edc5d75611eb",
        correct:
          "Dostupnost dat z produk\u010dn\u00edch za\u0159\u00edzen\u00ed je \u010dasto \u010dasov\u011b z\u00e1visl\u00e1, proto\u017ee data jsou zp\u0159\u00edstupn\u011bna po ur\u010dit\u00e9 vn\u011bj\u0161\u00ed ud\u00e1losti a jejich \u017eivotnost je omezena kapacitou pam\u011bti za\u0159\u00edzen\u00ed, kter\u00e1 funguje na principu FIFO, co\u017e vy\u017eaduje, aby opera\u010dn\u00ed syst\u00e9m data v\u010das p\u0159e\u010detl, aby nedo\u0161lo k jejich ztr\u00e1t\u011b p\u0159eps\u00e1n\u00edm nov\u00fdmi daty.",
        incorrect:
          "Dostupnost dat z produk\u010dn\u00edch za\u0159\u00edzen\u00ed nen\u00ed \u010dasov\u011b z\u00e1visl\u00e1, proto\u017ee data jsou trvale ulo\u017eena v pam\u011bti za\u0159\u00edzen\u00ed a opera\u010dn\u00ed syst\u00e9m m\u00e1 neomezen\u00fd \u010das na jejich p\u0159e\u010dten\u00ed. Pam\u011b\u0165 za\u0159\u00edzen\u00ed funguje na principu LIFO, co\u017e zaji\u0161\u0165uje, \u017ee nejnov\u011bj\u0161\u00ed data jsou v\u017edy dostupn\u00e1 a star\u0161\u00ed data jsou automaticky archivov\u00e1na pro pozd\u011bj\u0161\u00ed zpracov\u00e1n\u00ed.",
        sectionNumber: "4.1.2",
        sectionTitle: "Co je periferie?",
      },
      {
        uuid: "0e103eb7-b263-4930-aff4-3f26cfb1587b",
        correct:
          "Krom\u011b mapov\u00e1n\u00ed registr\u016f za\u0159\u00edzen\u00ed do fyzick\u00e9 pam\u011bti (memory-mapped IO) existuje i metoda komunikace s periferiemi naz\u00fdvan\u00e1 port-mapped IO, kter\u00e1 vyu\u017e\u00edv\u00e1 odli\u0161n\u00fd adresn\u00ed prostor pro porty a vy\u017eaduje speci\u00e1ln\u00ed instrukce procesoru pro p\u0159\u00edstup k t\u011bmto port\u016fm, av\u0161ak tato metoda je pova\u017eov\u00e1na za zastaralou a v modern\u00edch syst\u00e9mech se pou\u017e\u00edv\u00e1 m\u00e9n\u011b \u010dasto.",
        incorrect:
          "Port-mapped IO je modern\u011bj\u0161\u00ed a b\u011b\u017en\u011bji pou\u017e\u00edvan\u00e1 metoda komunikace s periferiemi ne\u017e memory-mapped IO. Port-mapped IO sd\u00edl\u00ed stejn\u00fd adresn\u00ed prostor jako opera\u010dn\u00ed pam\u011b\u0165, ale nevy\u017eaduje \u017e\u00e1dn\u00e9 speci\u00e1ln\u00ed instrukce procesoru, co\u017e zjednodu\u0161uje programov\u00e1n\u00ed a zvy\u0161uje v\u00fdkon syst\u00e9mu p\u0159i komunikaci s periferiemi.",
        sectionNumber: "4.1.2",
        sectionTitle: "Co je periferie?",
      },
      {
        uuid: "5fdcd92b-d56d-445a-8813-2b776c4ace34",
        correct:
          "Programovan\u00fd vstup/v\u00fdstup (PIO) je metoda komunikace se za\u0159\u00edzen\u00edmi, kter\u00e1 spo\u010d\u00edv\u00e1 v p\u0159enosu dat postupn\u00fdm \u010dten\u00edm a z\u00e1pisem registr\u016f za\u0159\u00edzen\u00ed hlavn\u00edm procesorem, co\u017e vy\u017eaduje aktivn\u00ed \u00fa\u010dast procesoru v pravideln\u00fdch \u010dasov\u00fdch intervalech ur\u010den\u00fdch p\u0159enosovou rychlost\u00ed a velikost\u00ed vyrovn\u00e1vac\u00ed pam\u011bti za\u0159\u00edzen\u00ed.",
        incorrect:
          "Programovan\u00fd vstup/v\u00fdstup (PIO) je metoda komunikace se za\u0159\u00edzen\u00edmi, kter\u00e1 spo\u010d\u00edv\u00e1 v p\u0159enosu dat bez nutnosti aktivn\u00ed \u00fa\u010dasti hlavn\u00edho procesoru, kdy se data p\u0159en\u00e1\u0161ej\u00ed automaticky pomoc\u00ed \u0159adi\u010de p\u0159\u00edm\u00e9ho p\u0159\u00edstupu do pam\u011bti (DMA) a procesor je o dokon\u010den\u00ed operace informov\u00e1n p\u0159eru\u0161en\u00edm.",
        sectionNumber: "4.1.3",
        sectionTitle: "Programovan\u00fd vstup/v\u00fdstup (PIO)",
      },
      {
        uuid: "3a15f43d-fc53-4453-9f00-5d628769df64",
        correct:
          "Programovan\u00fd vstup/v\u00fdstup (PIO) je efektivn\u00ed a vhodn\u00e1 metoda pro komunikaci se za\u0159\u00edzen\u00edmi v p\u0159\u00edpadech ob\u010dasn\u00fdch datov\u00fdch p\u0159enos\u016f nebo p\u0159enos\u016f s velmi malou \u0161\u00ed\u0159kou p\u00e1sma, jeliko\u017e v t\u011bchto sc\u00e9n\u00e1\u0159\u00edch je re\u017eie spojen\u00e1 s aktivn\u00ed \u00fa\u010dast\u00ed procesoru v rozumn\u00fdch mez\u00edch a nezat\u011b\u017euje syst\u00e9m nadm\u011brn\u011b.",
        incorrect:
          "Programovan\u00fd vstup/v\u00fdstup (PIO) je vysoce efektivn\u00ed a preferovan\u00e1 metoda pro p\u0159enos velk\u00fdch objem\u016f dat mezi opera\u010dn\u00ed pam\u011bt\u00ed a periferiemi, proto\u017ee minimalizuje re\u017eii procesoru a umo\u017e\u0148uje dos\u00e1hnout maxim\u00e1ln\u00ed mo\u017en\u00e9 p\u0159enosov\u00e9 rychlosti d\u00edky p\u0159\u00edm\u00e9 manipulaci s registry za\u0159\u00edzen\u00ed.",
        sectionNumber: "4.1.3",
        sectionTitle: "Programovan\u00fd vstup/v\u00fdstup (PIO)",
      },
      {
        uuid: "8cea97ad-0ab5-41d6-aa23-bf8197810832",
        correct:
          "P\u0159\u00edm\u00fd p\u0159\u00edstup do pam\u011bti (DMA) umo\u017e\u0148uje asynchronn\u00ed p\u0159enos dat mezi periferiemi a opera\u010dn\u00ed pam\u011bt\u00ed, \u010d\u00edm\u017e se minimalizuje zapojen\u00ed CPU a je zvl\u00e1\u0161t\u011b vhodn\u00fd pro \u010dast\u00e9 nebo objemn\u00e9 p\u0159enosy dat, jako jsou s\u00ed\u0165ov\u00e9 operace, komunikace s SSD disky a grafick\u00fdmi procesory. Tato metoda je kl\u00ed\u010dov\u00e1 pro efektivn\u00ed fungov\u00e1n\u00ed modern\u00edch po\u010d\u00edta\u010dov\u00fdch syst\u00e9m\u016f, kde je pot\u0159eba rychle p\u0159esouvat velk\u00e9 objemy dat bez zbyte\u010dn\u00e9ho zat\u00ed\u017een\u00ed hlavn\u00edho procesoru.",
        incorrect:
          "P\u0159\u00edm\u00fd p\u0159\u00edstup do pam\u011bti (DMA) vy\u017eaduje synchronn\u00ed p\u0159enos dat mezi periferiemi a opera\u010dn\u00ed pam\u011bt\u00ed, \u010d\u00edm\u017e se maximalizuje zapojen\u00ed CPU a je nevhodn\u00fd pro \u010dast\u00e9 nebo objemn\u00e9 p\u0159enosy dat, jako jsou s\u00ed\u0165ov\u00e9 operace, komunikace s SSD disky a grafick\u00fdmi procesory. Tato metoda je kl\u00ed\u010dov\u00e1 pro neefektivn\u00ed fungov\u00e1n\u00ed modern\u00edch po\u010d\u00edta\u010dov\u00fdch syst\u00e9m\u016f, kde nen\u00ed pot\u0159eba rychle p\u0159esouvat velk\u00e9 objemy dat bez zbyte\u010dn\u00e9ho zat\u00ed\u017een\u00ed hlavn\u00edho procesoru.",
        sectionNumber: "4.1.4",
        sectionTitle:
          "P\u0159\u00edm\u00fd p\u0159\u00edstup do pam\u011bti (DMA)",
      },
      {
        uuid: "76095e3e-96a9-4319-bff7-bb20eeeb06e7",
        correct:
          "Asynchronn\u00ed p\u0159enos dat metodou DMA m\u016f\u017ee b\u00fdt realizov\u00e1n bu\u010f dedikovan\u00fdm pomocn\u00fdm procesorem, kter\u00fd je sou\u010d\u00e1st\u00ed sb\u011brnice a p\u0159ij\u00edm\u00e1 instrukce od hlavn\u00edho procesoru, nebo m\u016f\u017ee b\u00fdt \u0159\u00edzen p\u0159\u00edmo periferi\u00ed na z\u00e1klad\u011b podobn\u00fdch instrukc\u00ed od hlavn\u00edho procesoru. Ob\u011b metody umo\u017e\u0148uj\u00ed efektivn\u00ed p\u0159enos dat mezi opera\u010dn\u00ed pam\u011bt\u00ed a periferiemi bez p\u0159\u00edm\u00e9 \u00fa\u010dasti v\u00fdpo\u010detn\u00edch jader hlavn\u00edho procesoru.",
        incorrect:
          "Asynchronn\u00ed p\u0159enos dat metodou DMA m\u016f\u017ee b\u00fdt realizov\u00e1n pouze dedikovan\u00fdm pomocn\u00fdm procesorem, kter\u00fd je sou\u010d\u00e1st\u00ed sb\u011brnice a p\u0159ij\u00edm\u00e1 instrukce od hlavn\u00edho procesoru, a nem\u016f\u017ee b\u00fdt \u0159\u00edzen p\u0159\u00edmo periferi\u00ed. Ob\u011b metody vy\u017eaduj\u00ed p\u0159\u00edmou \u00fa\u010dast v\u00fdpo\u010detn\u00edch jader hlavn\u00edho procesoru pro efektivn\u00ed p\u0159enos dat mezi opera\u010dn\u00ed pam\u011bt\u00ed a periferiemi.",
        sectionNumber: "4.1.4",
        sectionTitle:
          "P\u0159\u00edm\u00fd p\u0159\u00edstup do pam\u011bti (DMA)",
      },
      {
        uuid: "2659b930-e1c0-487e-847d-756e9b2ec8d7",
        correct:
          "P\u0159i p\u0159enosu dat metodou DMA na sd\u00edlen\u00e9 sb\u011brnici, jako je PCI, se role \u0159\u00edd\u00edc\u00edho prvku sb\u011brnice (bus master) m\u016f\u017ee do\u010dasn\u011b p\u0159esunout z procesoru na periferii, kter\u00e1 prov\u00e1d\u00ed p\u0159enos dat mezi pam\u011bt\u00ed a sebou. Toto do\u010dasn\u00e9 p\u0159evzet\u00ed \u0159\u00edzen\u00ed sb\u011brnice periferi\u00ed je nezbytn\u00e9, proto\u017ee v dan\u00e9m okam\u017eiku m\u016f\u017ee sb\u011brnici \u0159\u00eddit pouze jedno za\u0159\u00edzen\u00ed, a procesor se p\u0159enosu DMA ne\u00fa\u010dastn\u00ed.",
        incorrect:
          "P\u0159i p\u0159enosu dat metodou DMA na sd\u00edlen\u00e9 sb\u011brnici, jako je PCI, role \u0159\u00edd\u00edc\u00edho prvku sb\u011brnice (bus master) nikdy nem\u016f\u017ee p\u0159esunout z procesoru na periferii, a periferie nem\u016f\u017ee prov\u00e1d\u011bt p\u0159enos dat mezi pam\u011bt\u00ed a sebou bez aktivn\u00ed \u00fa\u010dasti procesoru. Toto trval\u00e9 dr\u017een\u00ed \u0159\u00edzen\u00ed sb\u011brnice procesorem je nezbytn\u00e9, proto\u017ee v dan\u00e9m okam\u017eiku mus\u00ed sb\u011brnici \u0159\u00eddit procesor, i kdy\u017e se procesor p\u0159enosu DMA ne\u00fa\u010dastn\u00ed.",
        sectionNumber: "4.1.4",
        sectionTitle:
          "P\u0159\u00edm\u00fd p\u0159\u00edstup do pam\u011bti (DMA)",
      },
      {
        uuid: "b7fa5024-dde9-48b3-a626-3fc1308f867e",
        correct:
          "Je z\u00e1sadn\u00ed rozli\u0161ovat p\u0159\u00edm\u00fd p\u0159\u00edstup do pam\u011bti (DMA), kde periferie a opera\u010dn\u00ed pam\u011b\u0165 komunikuj\u00ed p\u0159\u00edmo bez \u00fa\u010dasti hlavn\u00edho procesoru, od mapov\u00e1n\u00ed pam\u011bti za\u0159\u00edzen\u00ed do fyzick\u00e9ho adresn\u00edho prostoru, kde procesor komunikuje s periferi\u00ed bez p\u0159\u00edm\u00e9 \u00fa\u010dasti opera\u010dn\u00ed pam\u011bti v samotn\u00e9m datov\u00e9m p\u0159enosu, i kdy\u017e opera\u010dn\u00ed pam\u011b\u0165 adresy jsou pou\u017e\u00edv\u00e1ny pro mapov\u00e1n\u00ed. Tyto dva koncepty se li\u0161\u00ed v tom, kdo iniciuje a prov\u00e1d\u00ed datov\u00fd p\u0159enos a jak\u00e9 komponenty se na n\u011bm p\u0159\u00edmo pod\u00edlej\u00ed.",
        incorrect:
          "Nen\u00ed z\u00e1sadn\u00ed rozli\u0161ovat p\u0159\u00edm\u00fd p\u0159\u00edstup do pam\u011bti (DMA) a mapov\u00e1n\u00ed pam\u011bti za\u0159\u00edzen\u00ed do fyzick\u00e9ho adresn\u00edho prostoru, proto\u017ee v obou p\u0159\u00edpadech periferie a opera\u010dn\u00ed pam\u011b\u0165 komunikuj\u00ed p\u0159\u00edmo s \u00fa\u010dasti hlavn\u00edho procesoru. Oba koncepty se neli\u0161\u00ed v tom, kdo iniciuje a prov\u00e1d\u00ed datov\u00fd p\u0159enos a jak\u00e9 komponenty se na n\u011bm p\u0159\u00edmo pod\u00edlej\u00ed, a jsou v podstat\u011b zam\u011bniteln\u00e9 z hlediska funk\u010dnosti opera\u010dn\u00edho syst\u00e9mu.",
        sectionNumber: "4.1.4",
        sectionTitle:
          "P\u0159\u00edm\u00fd p\u0159\u00edstup do pam\u011bti (DMA)",
      },
      {
        uuid: "f4075836-963f-4893-b664-c44975be1185",
        correct:
          "V klasick\u00e9 implementaci DMA, a\u010dkoliv opera\u010dn\u00ed syst\u00e9m ud\u00e1v\u00e1 periferii instrukce ohledn\u011b fyzick\u00fdch adres, kter\u00e9 sm\u00ed pou\u017e\u00edvat, neexistuje efektivn\u00ed mechanismus, jak vynutit dodr\u017eov\u00e1n\u00ed t\u011bchto instrukc\u00ed. To p\u0159edstavuje v\u00fdznamn\u00e9 bezpe\u010dnostn\u00ed riziko, jeliko\u017e v takov\u00e9m syst\u00e9mu nic nebr\u00e1n\u00ed periferii v neopr\u00e1vn\u011bn\u00e9 modifikaci obsahu pam\u011bti, v\u010detn\u011b potenci\u00e1ln\u00edho p\u0159eps\u00e1n\u00ed k\u00f3du j\u00e1dra a z\u00edsk\u00e1n\u00ed kontroly nad cel\u00fdm syst\u00e9mem.",
        incorrect:
          "V klasick\u00e9 implementaci DMA opera\u010dn\u00ed syst\u00e9m efektivn\u011b kontroluje p\u0159\u00edstup periferi\u00ed do fyzick\u00e9 pam\u011bti prost\u0159ednictv\u00edm hardwarov\u00fdch mechanism\u016f, kter\u00e9 zaji\u0161\u0165uj\u00ed, \u017ee se periferie striktn\u011b dr\u017e\u00ed instrukc\u00ed opera\u010dn\u00edho syst\u00e9mu a nemohou p\u0159ekro\u010dit p\u0159id\u011blen\u00e9 fyzick\u00e9 adresy. T\u00edm je eliminov\u00e1no jak\u00e9koli bezpe\u010dnostn\u00ed riziko spojen\u00e9 s neopr\u00e1vn\u011bn\u00fdm p\u0159\u00edstupem periferi\u00ed do pam\u011bti a zneu\u017eit\u00edm DMA pro modifikaci k\u00f3du j\u00e1dra.",
        sectionNumber: "4.1.5",
        sectionTitle: "IO-MMU",
      },
      {
        uuid: "048a3f4a-6fc6-4da4-9dd5-5d2ab213e18c",
        correct:
          "IO-MMU p\u0159edstavuje \u0159e\u0161en\u00ed bezpe\u010dnostn\u00edch rizik spojen\u00fdch s DMA implementac\u00ed t\u00edm, \u017ee zav\u00e1d\u00ed mechanismus p\u0159ekladu adres pro periferie, analogick\u00fd k MMU pro software. Toto za\u0159\u00edzen\u00ed je programovateln\u00e9 v\u00fdhradn\u011b opera\u010dn\u00edm syst\u00e9mem, co\u017e umo\u017e\u0148uje efektivn\u00ed izolaci periferi\u00ed nejen vz\u00e1jemn\u011b, ale i od samotn\u00e9ho opera\u010dn\u00edho syst\u00e9mu a ve\u0161ker\u00e9ho dal\u0161\u00edho softwaru b\u011b\u017e\u00edc\u00edho v syst\u00e9mu, \u010d\u00edm\u017e se v\u00fdznamn\u011b zvy\u0161uje bezpe\u010dnost DMA operac\u00ed.",
        incorrect:
          "IO-MMU sice zav\u00e1d\u00ed p\u0159eklad adres pro periferie, ale je programovateln\u00e9 jak opera\u010dn\u00edm syst\u00e9mem, tak i ovlada\u010di periferi\u00ed, co\u017e umo\u017e\u0148uje flexibiln\u011bj\u0161\u00ed spr\u00e1vu DMA, av\u0161ak sou\u010dasn\u011b sni\u017euje \u00farove\u0148 izolace periferi\u00ed. Tato architektura sice p\u0159in\u00e1\u0161\u00ed ur\u010dit\u00e9 bezpe\u010dnostn\u00ed v\u00fdhody oproti klasick\u00e9mu DMA, ale pln\u011b neeliminuje riziko neopr\u00e1vn\u011bn\u00e9ho p\u0159\u00edstupu periferi\u00ed do pam\u011bti, zejm\u00e9na v kontextu potenci\u00e1ln\u011b \u0161kodliv\u00fdch ovlada\u010d\u016f.",
        sectionNumber: "4.1.5",
        sectionTitle: "IO-MMU",
      },
      {
        uuid: "88ed048d-d032-4aa8-985b-ffb7b591978f",
        correct:
          "Sb\u011brnice v po\u010d\u00edta\u010di se skl\u00e1d\u00e1 z fyzick\u00e9 vrstvy, kter\u00e1 se star\u00e1 o signalizaci a \u010dasov\u00e1n\u00ed, a logick\u00e9 vrstvy, kter\u00e1 definuje chov\u00e1n\u00ed za\u0159\u00edzen\u00ed na sb\u011brnici na vy\u0161\u0161\u00ed \u00farovni, zahrnuj\u00edc\u00ed adresaci, konfiguraci za\u0159\u00edzen\u00ed a p\u0159enosy dat. Logick\u00e1 vrstva je kl\u00ed\u010dov\u00e1 pro spr\u00e1vnou komunikaci a organizaci datov\u00e9ho toku mezi komponentami po\u010d\u00edta\u010de.",
        incorrect:
          "Sb\u011brnice v po\u010d\u00edta\u010di se skl\u00e1d\u00e1 pouze z fyzick\u00e9 vrstvy, kter\u00e1 se star\u00e1 o signalizaci a \u010dasov\u00e1n\u00ed, a neobsahuje logickou vrstvu pro definov\u00e1n\u00ed chov\u00e1n\u00ed za\u0159\u00edzen\u00ed na vy\u0161\u0161\u00ed \u00farovni, jako je adresace a konfigurace za\u0159\u00edzen\u00ed. Ve\u0161ker\u00e1 komunikace je \u0159\u00edzena v\u00fdhradn\u011b fyzick\u00fdmi sign\u00e1ly.",
        sectionNumber: "4.1.6",
        sectionTitle: "Sb\u011brnice",
      },
      {
        uuid: "bd5d831a-6ad7-4a04-b51f-c6494c0e8f85",
        correct:
          "\u0158adi\u010d sb\u011brnice, kter\u00fd propojuje sb\u011brnice bl\u00ed\u017ee hlavn\u00edmu procesoru s dal\u0161\u00edmi sb\u011brnicemi, je pova\u017eov\u00e1n za typ periferie, proto\u017ee je s n\u00edm mo\u017en\u00e9 komunikovat a je \u010dasto nutn\u00e9 s n\u00edm komunikovat pro spr\u00e1vnou funkci syst\u00e9mu. Tato komunikace umo\u017e\u0148uje konfiguraci a spr\u00e1vu p\u0159ipojen\u00fdch za\u0159\u00edzen\u00ed.",
        incorrect:
          "\u0158adi\u010d sb\u011brnice, kter\u00fd propojuje sb\u011brnice bl\u00ed\u017ee hlavn\u00edmu procesoru s dal\u0161\u00edmi sb\u011brnicemi, nen\u00ed pova\u017eov\u00e1n za typ periferie, proto\u017ee jeho prim\u00e1rn\u00ed funkc\u00ed je pouze zprost\u0159edkov\u00e1n\u00ed komunikace mezi sb\u011brnicemi a nikoliv interakce s procesorem. \u0158adi\u010d sb\u011brnice je transparentn\u00ed prvek bez mo\u017enosti konfigurace.",
        sectionNumber: "4.1.6",
        sectionTitle: "Sb\u011brnice",
      },
      {
        uuid: "81649a66-35ae-48b4-8326-bf42806920a0",
        correct:
          "Zat\u00edmco pam\u011b\u0165ov\u00e1 sb\u011brnice typicky slou\u017e\u00ed v\u00fdhradn\u011b pro p\u0159ipojen\u00ed modul\u016f RAM, sb\u011brnice PCIe je mnohem univerz\u00e1ln\u011bj\u0161\u00ed a umo\u017e\u0148uje p\u0159ipojen\u00ed \u0161irok\u00e9 \u0161k\u00e1ly za\u0159\u00edzen\u00ed, v\u010detn\u011b s\u00ed\u0165ov\u00fdch rozhran\u00ed, pevn\u00fdch disk\u016f NVMe a \u0159adi\u010d\u016f dal\u0161\u00edch sb\u011brnic jako USB a SATA. To demonstruje hierarchickou a rozmanitou povahu sb\u011brnicov\u00fdch syst\u00e9m\u016f v modern\u00edch po\u010d\u00edta\u010d\u00edch.",
        incorrect:
          "Pam\u011b\u0165ov\u00e1 sb\u011brnice a sb\u011brnice PCIe maj\u00ed v po\u010d\u00edta\u010di stejnou \u00farove\u0148 univerz\u00e1lnosti a ob\u011b umo\u017e\u0148uj\u00ed p\u0159ipojen\u00ed \u0161irok\u00e9 \u0161k\u00e1ly za\u0159\u00edzen\u00ed, v\u010detn\u011b modul\u016f RAM, s\u00ed\u0165ov\u00fdch rozhran\u00ed, pevn\u00fdch disk\u016f NVMe a \u0159adi\u010d\u016f dal\u0161\u00edch sb\u011brnic jako USB a SATA. Rozd\u00edl mezi nimi spo\u010d\u00edv\u00e1 pouze v rychlosti p\u0159enosu dat.",
        sectionNumber: "4.1.6",
        sectionTitle: "Sb\u011brnice",
      },
      {
        uuid: "abbcfd7d-5553-4118-bcd8-98ed9c1fd23a",
        correct:
          "Hlavn\u00edm \u00fakolem sb\u011brnice v po\u010d\u00edta\u010di je efektivn\u00ed p\u0159enos dat, v\u010detn\u011b adresace pot\u0159ebn\u00e9 k jejich spr\u00e1vn\u00e9mu sm\u011brov\u00e1n\u00ed, a signalizace r\u016fzn\u00fdch ud\u00e1lost\u00ed, p\u0159i\u010dem\u017e konfigurace a enumerace p\u0159ipojen\u00fdch periferi\u00ed jsou pova\u017eov\u00e1ny za vedlej\u0161\u00ed, av\u0161ak d\u016fle\u017eit\u00e9 \u00fakoly. Bez t\u011bchto funkc\u00ed by po\u010d\u00edta\u010d nemohl spr\u00e1vn\u011b fungovat a komunikovat se sv\u00fdmi komponentami.",
        incorrect:
          "Hlavn\u00edm \u00fakolem sb\u011brnice v po\u010d\u00edta\u010di je pouze konfigurace a enumerace p\u0159ipojen\u00fdch periferi\u00ed, zat\u00edmco p\u0159enos dat a signalizace ud\u00e1lost\u00ed jsou vedlej\u0161\u00ed funkce, kter\u00e9 sb\u011brnice zaji\u0161\u0165uje pro podporu periferi\u00ed. Prim\u00e1rn\u00ed v\u00fdznam sb\u011brnice spo\u010d\u00edv\u00e1 v inicializaci a nastaven\u00ed hardwaru.",
        sectionNumber: "4.1.6",
        sectionTitle: "Sb\u011brnice",
      },
      {
        uuid: "8f8e0e4e-d3a3-4b9e-9202-f4ef295bfe62",
        correct:
          "V kontextu s\u00ed\u0165ov\u00e9 karty funguje komponenta MAC jako \u0159adi\u010d sb\u011brnice MII, kter\u00e1 propojuje MAC a PHY komponenty, co\u017e ukazuje, \u017ee i v r\u00e1mci specializovan\u00fdch za\u0159\u00edzen\u00ed se sb\u011brnicov\u00e9 architektury a koncept \u0159adi\u010d\u016f uplat\u0148uj\u00ed pro intern\u00ed komunikaci. Tento p\u0159\u00edstup umo\u017e\u0148uje modul\u00e1rn\u00ed design a standardizaci rozhran\u00ed.",
        incorrect:
          "V kontextu s\u00ed\u0165ov\u00e9 karty komponenta MAC nep\u016fsob\u00ed jako \u0159adi\u010d sb\u011brnice, ale pouze jako rozhran\u00ed pro vy\u0161\u0161\u00ed vrstvy s\u00ed\u0165ov\u00e9ho protokolu, a komunikace mezi MAC a PHY komponentami se neuskute\u010d\u0148uje prost\u0159ednictv\u00edm sb\u011brnice MII. Komunikace je realizov\u00e1na propriet\u00e1rn\u00edm rozhran\u00edm specifick\u00fdm pro danou s\u00ed\u0165ovou kartu.",
        sectionNumber: "4.1.6",
        sectionTitle: "Sb\u011brnice",
      },
      {
        uuid: "2bf793f2-5d02-4df1-a523-8ffe3d499c7c",
        correct:
          "Enumerace sb\u011brnice je kl\u00ed\u010dov\u00fd proces v modern\u00edch opera\u010dn\u00edch syst\u00e9mech, kter\u00fd automaticky detekuje a identifikuje p\u0159ipojen\u00e1 perifern\u00ed za\u0159\u00edzen\u00ed a jejich specifick\u00e9 parametry bez nutnosti manu\u00e1ln\u00edho z\u00e1sahu u\u017eivatele, co\u017e usnad\u0148uje konfiguraci a spr\u00e1vu hardwaru v po\u010d\u00edta\u010dov\u00e9m syst\u00e9mu.",
        incorrect:
          "Enumerace sb\u011brnice vy\u017eaduje aktivn\u00ed \u00fa\u010dast u\u017eivatele pro manu\u00e1ln\u00ed konfiguraci a identifikaci p\u0159ipojen\u00fdch perifern\u00edch za\u0159\u00edzen\u00ed, jeliko\u017e modern\u00ed opera\u010dn\u00ed syst\u00e9my nejsou schopny automaticky detekovat hardware bez p\u0159\u00edm\u00e9ho u\u017eivatelsk\u00e9ho vstupu b\u011bhem procesu enumerace sb\u011brnice, co\u017e komplikuje spr\u00e1vu hardwaru.",
        sectionNumber: "4.1.7",
        sectionTitle: "Enumerace",
      },
      {
        uuid: "bc88bb98-aa2a-4502-87f4-634cdadacaf8",
        correct:
          "Prost\u0159ednictv\u00edm enumerace sb\u011brnice opera\u010dn\u00ed syst\u00e9m z\u00edsk\u00e1 jedine\u010dn\u00e9 identifik\u00e1tory pro ka\u017ed\u00e9 detekovan\u00e9 perifern\u00ed za\u0159\u00edzen\u00ed, co\u017e mu umo\u017e\u0148uje p\u0159esn\u011b ur\u010dit typ za\u0159\u00edzen\u00ed a jeho v\u00fdrobce, a n\u00e1sledn\u011b automaticky aktivovat nebo nainstalovat p\u0159\u00edslu\u0161n\u00e9 softwarov\u00e9 ovlada\u010de, \u010d\u00edm\u017e se zaji\u0161\u0165uje spr\u00e1vn\u00e1 funk\u010dnost hardwaru.",
        incorrect:
          "Proces enumerace sb\u011brnice opera\u010dn\u00edmu syst\u00e9mu poskytuje pouze obecn\u00e9 informace o kategorii za\u0159\u00edzen\u00ed, av\u0161ak neumo\u017e\u0148uje z\u00edskat unik\u00e1tn\u00ed identifik\u00e1tory, co\u017e znemo\u017e\u0148uje automatickou detekci v\u00fdrobce a typu za\u0159\u00edzen\u00ed a vy\u017eaduje manu\u00e1ln\u00ed instalaci ovlada\u010d\u016f, jeliko\u017e enumerace sb\u011brnice neposkytuje dostate\u010dn\u00e9 detaily.",
        sectionNumber: "4.1.7",
        sectionTitle: "Enumerace",
      },
      {
        uuid: "2ebf69af-7c36-42b5-9d41-b79d0ab1d3d2",
        correct:
          "Ovlada\u010de za\u0159\u00edzen\u00ed v opera\u010dn\u00edm syst\u00e9mu funguj\u00ed jako abstrak\u010dn\u00ed vrstva pro hardwarov\u00e1 za\u0159\u00edzen\u00ed a zprost\u0159edkov\u00e1vaj\u00ed komunikaci mezi opera\u010dn\u00edm syst\u00e9mem a periferiemi. Jejich kl\u00ed\u010dovou funkc\u00ed je transformace datov\u00fdch form\u00e1t\u016f a spr\u00e1va \u0159\u00eddic\u00edch i u\u017eivatelsk\u00fdch dat, co\u017e zaji\u0161\u0165uje bezprobl\u00e9movou interakci a funk\u010dnost r\u016fzn\u00fdch hardwarov\u00fdch komponent v syst\u00e9mu. Tato abstrakce umo\u017e\u0148uje opera\u010dn\u00edmu syst\u00e9mu a aplikac\u00edm komunikovat s hardwarem jednotn\u00fdm zp\u016fsobem, nez\u00e1visle na konkr\u00e9tn\u00edm modelu za\u0159\u00edzen\u00ed.",
        incorrect:
          "Ovlada\u010de za\u0159\u00edzen\u00ed v opera\u010dn\u00edm syst\u00e9mu funguj\u00ed prim\u00e1rn\u011b jako p\u0159\u00edm\u00e9 rozhran\u00ed k hardwarov\u00fdm periferi\u00edm, obch\u00e1zej\u00edc\u00ed opera\u010dn\u00ed syst\u00e9m za \u00fa\u010delem zv\u00fd\u0161en\u00ed v\u00fdkonu. Jejich hlavn\u00edm \u00fakolem je optimalizovat rychlost p\u0159enosu dat a minimalizovat latenci p\u0159\u00edmou manipulac\u00ed s hardwarov\u00fdmi registry a \u0159\u00eddic\u00edmi sign\u00e1ly. Tento p\u0159\u00edm\u00fd p\u0159\u00edstup k hardwaru umo\u017e\u0148uje vysoce specializovanou a efektivn\u00ed komunikaci, p\u0159izp\u016fsobenou specifick\u00fdm charakteristik\u00e1m ka\u017ed\u00e9ho perifern\u00edho za\u0159\u00edzen\u00ed, \u010d\u00edm\u017e se sni\u017euje re\u017eie spojen\u00e1 s intervenc\u00ed opera\u010dn\u00edho syst\u00e9mu.",
        sectionNumber: "4.1.8",
        sectionTitle: "Ovlada\u010d",
      },
      {
        uuid: "afaf1370-ec4d-431d-86c3-738667b3659b",
        correct:
          "Komunikace ovlada\u010de za\u0159\u00edzen\u00ed s periferi\u00ed zahrnuje nejen p\u0159enos u\u017eivatelsk\u00fdch dat, jako jsou bloky dat na disku nebo s\u00ed\u0165ov\u00e9 r\u00e1mce, ale tak\u00e9 \u0159\u00eddic\u00ed data. Tato \u0159\u00eddic\u00ed data jsou kl\u00ed\u010dov\u00e1 pro konfiguraci a spr\u00e1vu za\u0159\u00edzen\u00ed, umo\u017e\u0148uj\u00ed ovliv\u0148ovat jeho chov\u00e1n\u00ed a aktivovat specifick\u00e9 funkce nad r\u00e1mec pouh\u00e9ho p\u0159enosu dat.  \u0158\u00eddic\u00ed data tak hraj\u00ed z\u00e1sadn\u00ed roli v komplexn\u00ed interakci mezi opera\u010dn\u00edm syst\u00e9mem a hardwarem, zaji\u0161\u0165uj\u00ed flexibilitu a kontrolu nad periferiemi.",
        incorrect:
          "Komunikace ovlada\u010de za\u0159\u00edzen\u00ed s periferi\u00ed se omezuje v\u00fdhradn\u011b na p\u0159enos u\u017eivatelsk\u00fdch dat, p\u0159i\u010dem\u017e \u0159\u00eddic\u00ed data jsou zpracov\u00e1v\u00e1na v\u00fdhradn\u011b opera\u010dn\u00edm syst\u00e9mem mimo ovlada\u010d. Ovlada\u010d se star\u00e1 pouze o efektivn\u00ed p\u0159enos datov\u00fdch blok\u016f a r\u00e1mc\u016f, zat\u00edmco ve\u0161ker\u00e1 konfigurace a spr\u00e1va za\u0159\u00edzen\u00ed prob\u00edh\u00e1 na \u00farovni opera\u010dn\u00edho syst\u00e9mu, bez p\u0159\u00edm\u00e9ho zapojen\u00ed ovlada\u010de do \u0159\u00eddic\u00edch operac\u00ed.",
        sectionNumber: "4.1.8",
        sectionTitle: "Ovlada\u010d",
      },
      {
        uuid: "63dea0ee-4702-4dfd-a9a7-32241ca3e578",
        correct:
          "Podle textu, kdy\u017e opera\u010dn\u00ed syst\u00e9m pot\u0159ebuje zapsat data na pevn\u00fd disk, ovlada\u010d disku vytvo\u0159\u00ed po\u017eadavek a za pomoci ovlada\u010de sb\u011brnice jej zap\u00ed\u0161e do fronty disku. Disk n\u00e1sledn\u011b intern\u011b provede operace a pomoc\u00ed sb\u011brnice p\u0159enese data do opera\u010dn\u00ed pam\u011bti. Po dokon\u010den\u00ed p\u0159enosu disk informuje ovlada\u010d ud\u00e1lost\u00ed, kter\u00fd pak p\u0159ed\u00e1 potvrzen\u00ed operace opera\u010dn\u00edmu syst\u00e9mu. Tento proces ilustruje vrstvenou komunikaci a spolupr\u00e1ci mezi r\u016fzn\u00fdmi ovlada\u010di.",
        incorrect:
          "Podle textu, kdy\u017e opera\u010dn\u00ed syst\u00e9m pot\u0159ebuje zapsat data na pevn\u00fd disk, ovlada\u010d disku p\u0159\u00edmo zapisuje data na fyzickou adresu disku, obch\u00e1zej\u00edc\u00ed ovlada\u010d sb\u011brnice pro zv\u00fd\u0161en\u00ed rychlosti. Disk n\u00e1sledn\u011b intern\u011b provede operace a p\u0159enese data do opera\u010dn\u00ed pam\u011bti, p\u0159i\u010dem\u017e ve\u0161ker\u00e1 komunikace prob\u00edh\u00e1 v\u00fdhradn\u011b mezi ovlada\u010dem disku a diskem, bez zapojen\u00ed ovlada\u010de sb\u011brnice do procesu z\u00e1pisu dat.",
        sectionNumber: "4.1.8",
        sectionTitle: "Ovlada\u010d",
      },
      {
        uuid: "f1f1e9bb-3d21-4187-8bc2-30431a7b04e1",
        correct:
          "V kontextu ovlada\u010d\u016f sb\u011brnic, ovlada\u010d SATA sb\u011brnice nevykon\u00e1v\u00e1 p\u0159\u00edm\u00fd v\u00fdpo\u010det fyzick\u00fdch adres registr\u016f pot\u0159ebn\u00fdch pro komunikaci. Nam\u00edsto toho vyu\u017e\u00edv\u00e1 slu\u017eeb ovlada\u010de PCIe sb\u011brnice, ke kter\u00e9 je \u0159adi\u010d SATA p\u0159ipojen. Tato z\u00e1vislost a hierarchie ovlada\u010d\u016f sb\u011brnic demonstruje modul\u00e1rn\u00ed design opera\u010dn\u00edho syst\u00e9mu, kde slo\u017eit\u011bj\u0161\u00ed \u00falohy jsou rozd\u011bleny mezi specializovan\u00e9 ovlada\u010de pro r\u016fzn\u00e9 \u00farovn\u011b hardwarov\u00e9 abstrakce.",
        incorrect:
          "V kontextu ovlada\u010d\u016f sb\u011brnic, ovlada\u010d SATA sb\u011brnice je pln\u011b autonomn\u00ed a pro komunikaci s disky si s\u00e1m vypo\u010d\u00edt\u00e1v\u00e1 fyzick\u00e9 adresy registr\u016f, bez z\u00e1vislosti na ovlada\u010di PCIe sb\u011brnice. Ovlada\u010d PCIe sb\u011brnice slou\u017e\u00ed pouze k inicializaci a spr\u00e1v\u011b PCIe rozhran\u00ed, ale nem\u00e1 \u017e\u00e1dn\u00fd vliv na adresov\u00e1n\u00ed a komunikaci s disky na \u00farovni SATA sb\u011brnice.",
        sectionNumber: "4.1.8",
        sectionTitle: "Ovlada\u010d",
      },
      {
        uuid: "052a71e3-a612-440f-bdc9-e8e081f14d95",
        correct:
          "Fyzick\u00fd termin\u00e1l, ur\u010den\u00fd pro oboustrannou komunikaci s u\u017eivatelem, se skl\u00e1d\u00e1 ze dvou hlavn\u00edch \u010d\u00e1st\u00ed: v\u00fdstupn\u00ed a vstupn\u00ed. V\u00fdstupn\u00ed \u010d\u00e1st je typicky tvo\u0159ena obrazovkou, kter\u00e1 u\u017eivateli zobrazuje v\u00fdstupy syst\u00e9mu. Vstupn\u00ed \u010d\u00e1st pak zahrnuje kl\u00e1vesnici, a p\u0159\u00edpadn\u011b i my\u0161 nebo jin\u00e9 ukazovac\u00ed za\u0159\u00edzen\u00ed, umo\u017e\u0148uj\u00edc\u00ed u\u017eivateli zad\u00e1vat vstupy a ovl\u00e1dat syst\u00e9m.",
        incorrect:
          "Fyzick\u00fd termin\u00e1l, ur\u010den\u00fd pro jednosm\u011brnou komunikaci s u\u017eivatelem, se skl\u00e1d\u00e1 pouze z v\u00fdstupn\u00ed \u010d\u00e1sti, konkr\u00e9tn\u011b z obrazovky. Tato obrazovka slou\u017e\u00ed v\u00fdhradn\u011b k zobrazov\u00e1n\u00ed v\u00fdstup\u016f syst\u00e9mu u\u017eivateli, p\u0159i\u010dem\u017e fyzick\u00fd termin\u00e1l neobsahuje \u017e\u00e1dnou vstupn\u00ed \u010d\u00e1st, jako je kl\u00e1vesnice nebo my\u0161, a tud\u00ed\u017e neumo\u017e\u0148uje u\u017eivateli zad\u00e1vat vstupy do syst\u00e9mu.",
        sectionNumber: "4.2.1",
        sectionTitle: "Textov\u00fd termin\u00e1l",
      },
      {
        uuid: "e0293a7e-9b52-4193-8212-8a3d8a719a93",
        correct:
          "Virtualizace textov\u00e9ho termin\u00e1lu spo\u010d\u00edv\u00e1 ve vytvo\u0159en\u00ed n\u011bkolika virtu\u00e1ln\u00edch termin\u00e1l\u016f, jejich\u017e po\u010det m\u016f\u017ee b\u00fdt vy\u0161\u0161\u00ed ne\u017e po\u010det fyzick\u00fdch termin\u00e1l\u016f. Kl\u00ed\u010dov\u00fdm aspektem virtualizace je schopnost zapamatovat si obsah obrazovky ka\u017ed\u00e9ho virtu\u00e1ln\u00edho termin\u00e1lu a umo\u017enit p\u0159epojov\u00e1n\u00ed vstupn\u00edch za\u0159\u00edzen\u00ed mezi nimi, p\u0159i\u010dem\u017e aktivace virtu\u00e1ln\u00edho termin\u00e1lu obnov\u00ed jeho ulo\u017een\u00fd obsah na fyzick\u00e9 obrazovce.",
        incorrect:
          "Virtualizace textov\u00e9ho termin\u00e1lu se zam\u011b\u0159uje pouze na sd\u00edlen\u00ed fyzick\u00e9ho termin\u00e1lu mezi v\u00edce u\u017eivateli sou\u010dasn\u011b, ani\u017e by se zab\u00fdvala vytv\u00e1\u0159en\u00edm virtu\u00e1ln\u00edch termin\u00e1l\u016f s vlastn\u00edm obsahem obrazovky. Proces virtualizace nevy\u017eaduje zapamatov\u00e1n\u00ed obsahu obrazovky a neumo\u017e\u0148uje p\u0159epojov\u00e1n\u00ed vstupn\u00edch za\u0159\u00edzen\u00ed, p\u0159i\u010dem\u017e aktivace virtu\u00e1ln\u00edho termin\u00e1lu nem\u00e1 vliv na obsah fyzick\u00e9 obrazovky.",
        sectionNumber: "4.2.1",
        sectionTitle: "Textov\u00fd termin\u00e1l",
      },
      {
        uuid: "65c0dd05-1749-4c7c-b77b-80a3ef639a63",
        correct:
          "V kontextu virtualizovan\u00fdch termin\u00e1l\u016f je mo\u017en\u00e9 fyzickou kl\u00e1vesnici p\u0159ipojit nebo odpojit od virtu\u00e1ln\u00edho termin\u00e1lu bez jak\u00e9hokoli dopadu na program, kter\u00fd dan\u00fd virtu\u00e1ln\u00ed termin\u00e1l aktu\u00e1ln\u011b pou\u017e\u00edv\u00e1. P\u0159epojov\u00e1n\u00ed kl\u00e1vesnice a obrazovky je synchronizovan\u00e9, co\u017e zaji\u0161\u0165uje, \u017ee fyzick\u00e1 obrazovka v\u017edy zobrazuje ten virtu\u00e1ln\u00ed termin\u00e1l, ke kter\u00e9mu je pr\u00e1v\u011b p\u0159ipojena fyzick\u00e1 kl\u00e1vesnice pro zad\u00e1v\u00e1n\u00ed vstup\u016f.",
        incorrect:
          "V prost\u0159ed\u00ed virtualizovan\u00fdch termin\u00e1l\u016f je p\u0159ipojen\u00ed nebo odpojen\u00ed fyzick\u00e9 kl\u00e1vesnice od virtu\u00e1ln\u00edho termin\u00e1lu operace, kter\u00e1 m\u00e1 p\u0159\u00edm\u00fd a okam\u017eit\u00fd vliv na program b\u011b\u017e\u00edc\u00ed v dan\u00e9m virtu\u00e1ln\u00edm termin\u00e1lu, \u010dasto vedouc\u00ed k jeho chybov\u00e9mu ukon\u010den\u00ed. Synchronizace mezi p\u0159epojov\u00e1n\u00edm kl\u00e1vesnice a obrazovky neexistuje, co\u017e zp\u016fsobuje, \u017ee fyzick\u00e1 obrazovka m\u016f\u017ee zobrazovat obsah jin\u00e9ho virtu\u00e1ln\u00edho termin\u00e1lu, ne\u017e ke kter\u00e9mu je p\u0159ipojena kl\u00e1vesnice.",
        sectionNumber: "4.2.1",
        sectionTitle: "Textov\u00fd termin\u00e1l",
      },
      {
        uuid: "f8a60bcd-d76c-463f-92fb-e00c2de6a24d",
        correct:
          "Jeden virtu\u00e1ln\u00ed termin\u00e1l m\u016f\u017ee b\u00fdt pou\u017e\u00edv\u00e1n v\u00edce programy sou\u010dasn\u011b, av\u0161ak pouze jeden z nich je aktivn\u00ed a ovl\u00e1d\u00e1 termin\u00e1l v dan\u00e9m okam\u017eiku, zat\u00edmco ostatn\u00ed programy \u010dekaj\u00ed na sv\u00e9 p\u0159id\u011blen\u00ed \u010dasu a zdroj\u016f pro interakci s termin\u00e1lem. Tato funkcionalita umo\u017e\u0148uje spou\u0161t\u011bn\u00ed interaktivn\u00edch program\u016f z jin\u00fdch interaktivn\u00edch program\u016f, kde volaj\u00edc\u00ed program p\u0159ed\u00e1v\u00e1 kontrolu termin\u00e1lu volan\u00e9mu programu, a termin\u00e1l se vrac\u00ed volaj\u00edc\u00edmu programu po ukon\u010den\u00ed nebo p\u0159eru\u0161en\u00ed volan\u00e9ho programu.",
        incorrect:
          "Jeden virtu\u00e1ln\u00ed termin\u00e1l m\u016f\u017ee b\u00fdt pou\u017e\u00edv\u00e1n v\u00edce programy sou\u010dasn\u011b, p\u0159i\u010dem\u017e v\u0161echny programy jsou aktivn\u00ed a sou\u010dasn\u011b ovl\u00e1daj\u00ed termin\u00e1l, co\u017e umo\u017e\u0148uje paraleln\u00ed interakci s termin\u00e1lem a efektivn\u00ed sd\u00edlen\u00ed zdroj\u016f mezi r\u016fzn\u00fdmi programy bez nutnosti \u010dek\u00e1n\u00ed na p\u0159id\u011blen\u00ed \u010dasu. Tato funkcionalita zaji\u0161\u0165uje, \u017ee v\u0161echny spu\u0161t\u011bn\u00e9 programy mohou neomezen\u011b interagovat s termin\u00e1lem bez p\u0159ep\u00edn\u00e1n\u00ed kontextu.",
        sectionNumber: "4.2.2",
        sectionTitle: "V\u00fdstup na obrazovku",
      },
      {
        uuid: "76baf7d7-61dd-4342-82b7-6d5e78df2c84",
        correct:
          "V obrazovkov\u00e9m re\u017eimu virtu\u00e1ln\u00edho termin\u00e1lu m\u00e1 program schopnost c\u00edlen\u011b modifikovat obsah, tedy jednotliv\u00e9 znaky, v libovoln\u00e9m pol\u00ed\u010dku obd\u00e9ln\u00edkov\u00e9 m\u0159\u00ed\u017eky, kter\u00e1 reprezentuje obrazovku termin\u00e1lu, co\u017e poskytuje detailn\u00ed kontrolu nad zobrazen\u00edm a umo\u017e\u0148uje vytv\u00e1\u0159et komplexn\u00ed textov\u00e9 u\u017eivatelsk\u00e9 rozhran\u00ed pro interakci s u\u017eivatelem.",
        incorrect:
          "V obrazovkov\u00e9m re\u017eimu virtu\u00e1ln\u00edho termin\u00e1lu program nem\u00e1 mo\u017enost c\u00edlen\u011b modifikovat obsah jednotliv\u00fdch pol\u00ed\u010dek obd\u00e9ln\u00edkov\u00e9 m\u0159\u00ed\u017eky obrazovky, ale je omezen pouze na sekven\u010dn\u00ed z\u00e1pis znak\u016f do jednoho \u0159\u00e1dku, podobn\u011b jako v \u0159\u00e1dkov\u00e9m re\u017eimu, co\u017e omezuje mo\u017enosti tvorby komplexn\u00edch textov\u00fdch u\u017eivatelsk\u00fdch rozhran\u00ed a interaktivn\u00edch aplikac\u00ed.",
        sectionNumber: "4.2.2",
        sectionTitle: "V\u00fdstup na obrazovku",
      },
      {
        uuid: "b5811f2d-7d00-46a2-9695-7017719122a1",
        correct:
          'Virtu\u00e1ln\u00ed kl\u00e1vesnice v opera\u010dn\u00edch syst\u00e9mech m\u016f\u017ee pracovat ve dvou re\u017eimech: bu\u010f transparentn\u011b p\u0159epos\u00edl\u00e1 data z fyzick\u00e9 kl\u00e1vesnice, \u010d\u00edm\u017e umo\u017e\u0148uje aktivn\u00edmu programu v aktivn\u00edm virtu\u00e1ln\u00edm termin\u00e1lu p\u0159ij\u00edmat vstup, nebo m\u016f\u017ee fungovat jako "nulov\u00e1" kl\u00e1vesnice, kter\u00e1 ned\u011bl\u00e1 nic, a k takov\u00e9 jsou p\u0159ipojen\u00e9 programy, kter\u00e9 \u010dekaj\u00ed na vstup, dokud nejsou p\u0159epojeny na fyzickou kl\u00e1vesnici.',
        incorrect:
          'Virtu\u00e1ln\u00ed kl\u00e1vesnice v opera\u010dn\u00edch syst\u00e9mech typicky pracuje pouze v jednom re\u017eimu, a to v re\u017eimu aktivn\u00edho zpracov\u00e1n\u00ed vstupu, kdy nez\u00e1visle na fyzick\u00e9 kl\u00e1vesnici aktivn\u011b generuje ud\u00e1losti a data pro aplikace, p\u0159i\u010dem\u017e re\u017eim transparentn\u00edho p\u0159epos\u00edl\u00e1n\u00ed dat z fyzick\u00e9 kl\u00e1vesnice, nebo re\u017eim "nulov\u00e9" kl\u00e1vesnice, nen\u00ed pro virtu\u00e1ln\u00ed kl\u00e1vesnice obvykl\u00fd ani podporovan\u00fd.',
        sectionNumber: "4.2.3",
        sectionTitle: "Vstup z kl\u00e1vesnice",
      },
      {
        uuid: "10b85960-c5a2-4638-bf3b-8a43bb540fcd",
        correct:
          'V kontextu virtualizace kl\u00e1vesnice v opera\u010dn\u00edch syst\u00e9mech plat\u00ed, \u017ee aplikace jsou v\u016f\u010di kl\u00e1vesnici pasivn\u00ed a nemohou ji p\u0159\u00edmo ovl\u00e1dat, co\u017e znamen\u00e1, \u017ee i "nulov\u00e1" virtu\u00e1ln\u00ed kl\u00e1vesnice, kter\u00e1 ned\u011bl\u00e1 v\u016fbec nic, spl\u0148uje po\u017eadavky aplikace na vstupn\u00ed za\u0159\u00edzen\u00ed, proto\u017ee aplikace pouze pasivn\u011b p\u0159ij\u00edm\u00e1 vstup, pokud je j\u00ed doru\u010den.',
        incorrect:
          'V opera\u010dn\u00edch syst\u00e9mech aplikace aktivn\u011b ovl\u00e1daj\u00ed virtu\u00e1ln\u00ed kl\u00e1vesnici a vy\u017eaduj\u00ed, aby virtu\u00e1ln\u00ed kl\u00e1vesnice poskytovala komplexn\u00ed slu\u017eby a funkce pro zpracov\u00e1n\u00ed vstupu, a proto "nulov\u00e1" virtu\u00e1ln\u00ed kl\u00e1vesnice, kter\u00e1 by ned\u011blala nic, by byla pro aplikace zcela nepou\u017eiteln\u00e1 a nespl\u0148ovala by jejich standardn\u00ed po\u017eadavky na vstupn\u00ed za\u0159\u00edzen\u00ed.',
        sectionNumber: "4.2.3",
        sectionTitle: "Vstup z kl\u00e1vesnice",
      },
      {
        uuid: "4873d0db-4e42-47ad-b5a1-c34cd0fcee7f",
        correct:
          "Textov\u00e9 termin\u00e1ly, a\u010dkoliv historicky v\u00fdznamn\u00e9, se uk\u00e1zaly jako nedostate\u010dn\u00e9 pro \u0161irokou \u0161k\u00e1lu modern\u00edch aplikac\u00ed, zejm\u00e9na pro ty, kter\u00e9 vy\u017eaduj\u00ed vizu\u00e1ln\u011b bohat\u00e9 rozhran\u00ed, jako jsou editory fotografi\u00ed, proto\u017ee jejich z\u00e1kladn\u00ed stavebn\u00ed prvek, bu\u0148ka s p\u00edsmeny, je principi\u00e1ln\u011b omezen\u00fd v mo\u017enostech grafick\u00e9ho vyj\u00e1d\u0159en\u00ed a interakce s u\u017eivatelem ve srovn\u00e1n\u00ed s grafick\u00fdmi syst\u00e9my zalo\u017een\u00fdmi na pixelech.",
        incorrect:
          "Textov\u00e9 termin\u00e1ly jsou pln\u011b dosta\u010duj\u00edc\u00ed pro v\u0161echny modern\u00ed aplikace, v\u010detn\u011b graficky n\u00e1ro\u010dn\u00fdch program\u016f jako jsou editory fotografi\u00ed, proto\u017ee jejich z\u00e1kladn\u00ed stavebn\u00ed prvek, bu\u0148ka s p\u00edsmeny, umo\u017e\u0148uje flexibiln\u00ed a detailn\u00ed grafick\u00e9 vyj\u00e1d\u0159en\u00ed a interakci s u\u017eivatelem, srovnateln\u00e9 s grafick\u00fdmi syst\u00e9my zalo\u017een\u00fdmi na pixelech, a dokonce v n\u011bkter\u00fdch aspektech je p\u0159ekon\u00e1v\u00e1, nap\u0159\u00edklad v efektivit\u011b zpracov\u00e1n\u00ed textov\u00fdch dat.",
        sectionNumber: "4.2.4",
        sectionTitle: "Grafick\u00fd re\u017eim",
      },
      {
        uuid: "25013f71-cee7-4d8a-84ba-6e297db47f15",
        correct:
          "V grafick\u00e9m re\u017eimu opera\u010dn\u00edho syst\u00e9mu doch\u00e1z\u00ed k z\u00e1sadn\u00ed zm\u011bn\u011b v reprezentaci obrazu, kdy jsou tradi\u010dn\u00ed bu\u0148ky s p\u00edsmeny, charakteristick\u00e9 pro textov\u00e9 termin\u00e1ly, nahrazeny pixely, co\u017e jsou mal\u00e9 obd\u00e9ln\u00edkov\u00e9 prvky, jejich\u017e barvu m\u016f\u017ee aplikace individu\u00e1ln\u011b ovliv\u0148ovat a t\u00edm vytv\u00e1\u0159et libovoln\u00fd vizu\u00e1ln\u00ed obsah na obrazovce, co\u017e otev\u00edr\u00e1 cestu k mnohem bohat\u0161\u00edm a flexibiln\u011bj\u0161\u00edm u\u017eivatelsk\u00fdm rozhran\u00edm.",
        incorrect:
          "V grafick\u00e9m re\u017eimu opera\u010dn\u00edho syst\u00e9mu z\u016fst\u00e1vaj\u00ed bu\u0148ky s p\u00edsmeny z\u00e1kladn\u00edm prvkem pro reprezentaci obrazu, a pixely jsou pouze dopl\u0148kov\u00fdm prvkem slou\u017e\u00edc\u00edm k vylep\u0161en\u00ed textov\u00e9ho v\u00fdstupu, p\u0159i\u010dem\u017e aplikace st\u00e1le prim\u00e1rn\u011b manipuluje s bu\u0148kami s p\u00edsmeny a nem\u016f\u017ee p\u0159\u00edmo ovliv\u0148ovat barvu jednotliv\u00fdch pixel\u016f, co\u017e omezuje flexibilitu grafick\u00e9ho v\u00fdstupu ve srovn\u00e1n\u00ed s textov\u00fdmi termin\u00e1ly.",
        sectionNumber: "4.2.4",
        sectionTitle: "Grafick\u00fd re\u017eim",
      },
      {
        uuid: "808cbfee-5073-4123-9a44-4c14610f8021",
        correct:
          "Z hlediska virtualizace vstupn\u00edch za\u0159\u00edzen\u00ed, jako je kl\u00e1vesnice a my\u0161, plat\u00ed v grafick\u00e9m re\u017eimu podobn\u00e1 omezen\u00ed jako v textov\u00e9m re\u017eimu, co\u017e znamen\u00e1, \u017ee mo\u017enosti virtualizace t\u011bchto za\u0159\u00edzen\u00ed jsou st\u00e1le relativn\u011b omezen\u00e9, nicm\u00e9n\u011b grafick\u00e1 obrazovka jako v\u00fdstupn\u00ed za\u0159\u00edzen\u00ed nab\u00edz\u00ed v\u011bt\u0161\u00ed flexibilitu ne\u017e textov\u00e1 obrazovka a umo\u017e\u0148uje implementaci nov\u00fdch metod virtualizace, kter\u00e9 nejsou v textov\u00e9m re\u017eimu mo\u017en\u00e9.",
        incorrect:
          "Z hlediska virtualizace vstupn\u00edch za\u0159\u00edzen\u00ed, jako je kl\u00e1vesnice a my\u0161, grafick\u00fd re\u017eim odstra\u0148uje ve\u0161ker\u00e1 omezen\u00ed, kter\u00e1 existovala v textov\u00e9m re\u017eimu, a umo\u017e\u0148uje pln\u011b flexibiln\u00ed virtualizaci t\u011bchto za\u0159\u00edzen\u00ed bez jak\u00fdchkoliv kompromis\u016f, p\u0159i\u010dem\u017e grafick\u00e1 obrazovka nenab\u00edz\u00ed \u017e\u00e1dn\u00e9 nov\u00e9 metody virtualizace oproti textov\u00e9 obrazovce, a virtualizace v\u00fdstupu z\u016fst\u00e1v\u00e1 stejn\u011b omezen\u00e1 jako v textov\u00e9m re\u017eimu.",
        sectionNumber: "4.2.4",
        sectionTitle: "Grafick\u00fd re\u017eim",
      },
      {
        uuid: "c0e9b5df-8ce9-439a-9c31-4cd3c1d81028",
        correct:
          "Okenn\u00ed syst\u00e9my funguj\u00ed na principu virtualizace grafick\u00e9 obrazovky, kde ka\u017ed\u00e1 aplikace obdr\u017e\u00ed vlastn\u00ed virtu\u00e1ln\u00ed obrazovku, kter\u00e1 se n\u00e1sledn\u011b zobrazuje jako okno na fyzick\u00e9m displeji, p\u0159i\u010dem\u017e p\u0159esn\u00e9 chov\u00e1n\u00ed a vlastnosti t\u011bchto oken se mohou li\u0161it v z\u00e1vislosti na konkr\u00e9tn\u00edm implementaci okenn\u00edho syst\u00e9mu.",
        incorrect:
          "Okenn\u00ed syst\u00e9my funguj\u00ed na principu fyzick\u00e9ho rozd\u011blen\u00ed grafick\u00e9 obrazovky, kde ka\u017ed\u00e1 aplikace obdr\u017e\u00ed pevn\u011b danou \u010d\u00e1st fyzick\u00e9ho displeje, kter\u00e1 se n\u00e1sledn\u011b zobrazuje jako okno, p\u0159i\u010dem\u017e chov\u00e1n\u00ed a vlastnosti oken jsou standardizovan\u00e9 nap\u0159\u00ed\u010d v\u0161emi okenn\u00edmi syst\u00e9my.",
        sectionNumber: "4.2.5",
        sectionTitle: "Okenn\u00ed syst\u00e9my",
      },
      {
        uuid: "e5f8454a-20b4-4b86-ad33-c49790947f58",
        correct:
          "Koncept okenn\u00edho syst\u00e9mu je \u0161irok\u00fd a zahrnuje nejen tradi\u010dn\u00ed desktopov\u00e1 prost\u0159ed\u00ed s plovouc\u00edmi okny, ale i rozhran\u00ed mobiln\u00edch telefon\u016f s p\u0159ep\u00edn\u00e1n\u00edm mezi aplikacemi, p\u0159i\u010dem\u017e okenn\u00ed syst\u00e9m virtualizuje nejen grafick\u00fd v\u00fdstup, ale i vstupn\u00ed za\u0159\u00edzen\u00ed, jako je kl\u00e1vesnice a my\u0161.",
        incorrect:
          "Koncept okenn\u00edho syst\u00e9mu se omezuje v\u00fdhradn\u011b na tradi\u010dn\u00ed desktopov\u00e1 prost\u0159ed\u00ed s plovouc\u00edmi okny a nezahrnuje rozhran\u00ed mobiln\u00edch telefon\u016f, p\u0159i\u010dem\u017e okenn\u00ed syst\u00e9m se zam\u011b\u0159uje pouze na virtualizaci grafick\u00e9ho v\u00fdstupu a nijak neovliv\u0148uje vstupn\u00ed za\u0159\u00edzen\u00ed.",
        sectionNumber: "4.2.5",
        sectionTitle: "Okenn\u00ed syst\u00e9my",
      },
      {
        uuid: "cceddd86-b3c1-422f-8dd9-50ddec6c2284",
        correct:
          "P\u0159i zpracov\u00e1n\u00ed ud\u00e1lost\u00ed z ukazovac\u00edch za\u0159\u00edzen\u00ed, jako je my\u0161 nebo dotykov\u00e1 obrazovka, mus\u00ed okenn\u00ed syst\u00e9m prov\u00e1d\u011bt p\u0159evod sou\u0159adnic mezi sou\u0159adnicov\u00fdm syst\u00e9mem fyzick\u00e9 obrazovky a sou\u0159adnicov\u00fdm syst\u00e9mem okna aplikace, a\u010dkoli virtualizace oken je komplexn\u00ed a zahrnuje i pokro\u010dil\u00e9 funkce jako schr\u00e1nka a drag&drop.",
        incorrect:
          "P\u0159i zpracov\u00e1n\u00ed ud\u00e1lost\u00ed z ukazovac\u00edch za\u0159\u00edzen\u00ed se okenn\u00ed syst\u00e9m obejde bez p\u0159evodu sou\u0159adnic, proto\u017ee sou\u0159adnicov\u00e9 syst\u00e9my obrazovky a okna jsou v\u017edy identick\u00e9, a komplexnost okenn\u00edch syst\u00e9m\u016f spo\u010d\u00edv\u00e1 v\u00fdhradn\u011b v z\u00e1kladn\u00ed virtualizaci zobrazen\u00ed oken bez dal\u0161\u00edch pokro\u010dil\u00fdch funkc\u00ed.",
        sectionNumber: "4.2.5",
        sectionTitle: "Okenn\u00ed syst\u00e9my",
      },
      {
        uuid: "e620498d-01e7-4e63-a816-8d5f02e29818",
        correct:
          "V\u00fdpo\u010det barvy ka\u017ed\u00e9ho pixelu, zn\u00e1m\u00fd jako rasterizace, p\u0159edstavuje v\u00fdpo\u010detn\u011b n\u00e1ro\u010dn\u00fd proces, jeho\u017e n\u00e1ro\u010dnost se zvy\u0161uje s rostouc\u00edm po\u010dtem pixel\u016f a slo\u017eitost\u00ed zobrazovan\u00fdch objekt\u016f, co\u017e klade zna\u010dn\u00e9 n\u00e1roky na v\u00fdpo\u010detn\u00ed zdroje syst\u00e9mu. Specializovan\u00fd hardware, grafick\u00e9 procesory (GPU), byl vyvinut pro efektivn\u00ed prov\u00e1d\u011bn\u00ed t\u011bchto v\u00fdpo\u010dt\u016f.",
        incorrect:
          "V\u00fdpo\u010det barvy ka\u017ed\u00e9ho pixelu, zn\u00e1m\u00fd jako rasterizace, p\u0159edstavuje v\u00fdpo\u010detn\u011b nen\u00e1ro\u010dn\u00fd proces, jeho\u017e n\u00e1ro\u010dnost se sni\u017euje s rostouc\u00edm po\u010dtem pixel\u016f a slo\u017eitost\u00ed zobrazovan\u00fdch objekt\u016f, co\u017e klade mal\u00e9 n\u00e1roky na v\u00fdpo\u010detn\u00ed zdroje syst\u00e9mu. Specializovan\u00fd hardware, centr\u00e1ln\u00ed procesory (CPU), byl vyvinut pro efektivn\u00ed prov\u00e1d\u011bn\u00ed t\u011bchto v\u00fdpo\u010dt\u016f.",
        sectionNumber: "4.2.6",
        sectionTitle: "GPU",
      },
      {
        uuid: "3ce4ae05-a91d-4a02-9817-4f78fb6106ee",
        correct:
          "Modern\u00ed grafick\u00e9 procesory (GPU) implementuj\u00ed virtualizaci na hardwarov\u00e9 \u00farovni, podobn\u011b jako centr\u00e1ln\u00ed procesorov\u00e9 jednotky (CPU), a to prost\u0159ednictv\u00edm hardwarov\u00fdch kontext\u016f, kter\u00e9 umo\u017e\u0148uj\u00ed efektivn\u00ed p\u0159ep\u00edn\u00e1n\u00ed a sd\u00edlen\u00ed jednoho GPU mezi v\u00edce aplikacemi, z nich\u017e ka\u017ed\u00e1 vn\u00edm\u00e1 vlastn\u00ed virtu\u00e1ln\u00ed GPU, analogicky k virtu\u00e1ln\u00ed pam\u011bti.",
        incorrect:
          "Modern\u00ed grafick\u00e9 procesory (GPU) neimplementuj\u00ed virtualizaci na hardwarov\u00e9 \u00farovni, na rozd\u00edl od centr\u00e1ln\u00edch procesorov\u00fdch jednotek (CPU), a to prost\u0159ednictv\u00edm softwarov\u00fdch emulac\u00ed, kter\u00e9 neumo\u017e\u0148uj\u00ed efektivn\u00ed p\u0159ep\u00edn\u00e1n\u00ed a sd\u00edlen\u00ed jednoho GPU mezi v\u00edce aplikacemi, z nich\u017e ka\u017ed\u00e1 vn\u00edm\u00e1 sd\u00edlen\u00e9 fyzick\u00e9 GPU, na rozd\u00edl od virtu\u00e1ln\u00ed pam\u011bti.",
        sectionNumber: "4.2.6",
        sectionTitle: "GPU",
      },
      {
        uuid: "8a7ee744-5297-4fb8-8b22-f26c4d136505",
        correct:
          "Pixely vypo\u010dten\u00e9 grafick\u00fdm procesorem (GPU) se obvykle prim\u00e1rn\u011b ukl\u00e1daj\u00ed do pam\u011bti, co\u017e p\u0159edstavuje operaci n\u00e1ro\u010dnou na zdroje pro centr\u00e1ln\u00ed procesor (CPU) z d\u016fvodu latence spojen\u00e9 s p\u0159\u00edstupem k pomalej\u0161\u00ed pam\u011bti a sb\u011brnici, a tato n\u00e1ro\u010dnost se d\u00e1le zvy\u0161uje, pokud je pro v\u00fdpo\u010det barvy pixelu nutn\u00e9 na\u010d\u00edtat data z pam\u011bti, jako jsou textury nebo sprajty.",
        incorrect:
          "Pixely vypo\u010dten\u00e9 grafick\u00fdm procesorem (GPU) se obvykle prim\u00e1rn\u011b ukl\u00e1daj\u00ed do registr\u016f grafick\u00e9ho procesoru, co\u017e p\u0159edstavuje operaci nen\u00e1ro\u010dnou na zdroje pro centr\u00e1ln\u00ed procesor (CPU) z d\u016fvodu rychl\u00e9ho p\u0159\u00edstupu k registr\u016fm a sb\u011brnici, a tato nen\u00e1ro\u010dnost se d\u00e1le sni\u017euje, i kdy\u017e je pro v\u00fdpo\u010det barvy pixelu nutn\u00e9 na\u010d\u00edtat data z pam\u011bti, jako jsou textury nebo sprajty.",
        sectionNumber: "4.2.6",
        sectionTitle: "GPU",
      },
      {
        uuid: "11bbfd18-e298-4a0e-b821-7d0f0f095718",
        correct:
          "Kompozitor, jako\u017eto v\u00fdstupn\u00ed komponenta okenn\u00edho syst\u00e9mu, m\u00e1 za \u00fakol skl\u00e1dat obrazy jednotliv\u00fdch aplikac\u00ed do fin\u00e1ln\u00edho sn\u00edmku, kter\u00fd se n\u00e1sledn\u011b zobraz\u00ed na obrazovce, p\u0159i\u010dem\u017e ka\u017ed\u00e1 aplikace zodpov\u00edd\u00e1 za vykreslov\u00e1n\u00ed pixel\u016f ve sv\u00e9m okn\u011b a pro v\u00fdpo\u010det v\u00fdsledn\u00e9ho sn\u00edmku se b\u011b\u017en\u011b vyu\u017e\u00edv\u00e1 grafick\u00fd procesor.",
        incorrect:
          "Kompozitor, jako\u017eto vstupn\u00ed komponenta okenn\u00edho syst\u00e9mu, m\u00e1 za \u00fakol rozd\u011blovat v\u00fdpo\u010detn\u00ed zdroje mezi jednotliv\u00e9 aplikace, p\u0159i\u010dem\u017e ka\u017ed\u00e1 aplikace zodpov\u00edd\u00e1 za vykreslov\u00e1n\u00ed pixel\u016f ve sv\u00e9m okn\u011b a pro v\u00fdpo\u010det v\u00fdsledn\u00e9ho sn\u00edmku se b\u011b\u017en\u011b vyu\u017e\u00edv\u00e1 centr\u00e1ln\u00ed procesor, zat\u00edmco grafick\u00fd procesor se vyu\u017e\u00edv\u00e1 jen z\u0159\u00eddka.",
        sectionNumber: "4.2.7",
        sectionTitle: "Kompozitor",
      },
      {
        uuid: "b83268aa-a5aa-4ac3-97c7-ca9ed9dc16c0",
        correct:
          "V r\u00e1mci okenn\u00edho syst\u00e9mu kompozitor p\u0159edstavuje kl\u00ed\u010dovou v\u00fdstupn\u00ed \u010d\u00e1st, kter\u00e1 se star\u00e1 o fin\u00e1ln\u00ed zobrazen\u00ed obsahu aplikac\u00ed na obrazovce, a to tak, \u017ee skl\u00e1d\u00e1 obrazy jednotliv\u00fdch aplikac\u00ed do jednoho celkov\u00e9ho sn\u00edmku s vyu\u017eit\u00edm grafick\u00e9ho procesoru pro efektivn\u00ed v\u00fdpo\u010det a spr\u00e1vu sou\u0159adnic ud\u00e1lost\u00ed.",
        incorrect:
          "V r\u00e1mci okenn\u00edho syst\u00e9mu kompozitor p\u0159edstavuje kl\u00ed\u010dovou vstupn\u00ed \u010d\u00e1st, kter\u00e1 se star\u00e1 o p\u0159\u00edjem u\u017eivatelsk\u00e9ho vstupu a jeho distribuci mezi aplikace, a to tak, \u017ee analyzuje vstupy jednotliv\u00fdch aplikac\u00ed a koordinuje jejich interakci s hardwarem bez nutnosti skl\u00e1d\u00e1n\u00ed obraz\u016f aplikac\u00ed do jednoho celkov\u00e9ho sn\u00edmku.",
        sectionNumber: "4.2.7",
        sectionTitle: "Kompozitor",
      },
      {
        uuid: "3180a3f8-1af5-44d5-8bfc-31ee66eaf5b6",
        correct:
          "Grafick\u00fd server p\u0159edstavuje alternativn\u00ed p\u0159\u00edstup k virtualizaci grafick\u00e9ho subsyst\u00e9mu, kter\u00fd se odli\u0161uje od kompozitoru t\u00edm, \u017ee p\u0159ij\u00edm\u00e1 p\u0159\u00edkazy vy\u0161\u0161\u00ed \u00farovn\u011b popisuj\u00edc\u00ed 2D nebo 3D objekty nam\u00edsto jednotliv\u00fdch pixel\u016f, co\u017e umo\u017e\u0148uje efektivn\u011bj\u0161\u00ed vyu\u017eit\u00ed hardwaru pro rasterizaci, zejm\u00e9na v situac\u00edch, kdy hardware postr\u00e1d\u00e1 hardwarov\u00e9 kontexty a je obt\u00ed\u017en\u00e9 jej p\u0159\u00edmo virtualizovat, a sou\u010dasn\u011b minimalizuje objem dat pot\u0159ebn\u00fd pro p\u0159enos mezi aplikac\u00ed a serverem.",
        incorrect:
          "Grafick\u00fd server, na rozd\u00edl od kompozitoru, je navr\u017een tak, aby pracoval s p\u0159\u00edkazy ni\u017e\u0161\u00ed \u00farovn\u011b, jako jsou jednotliv\u00e9 pixely, a\u010dkoli je schopen spravovat cel\u00fd obsah obrazovky a poskytovat kresl\u00edc\u00ed p\u0159\u00edkazy; tato architektura je v\u00fdhodn\u00e1 p\u0159edev\u0161\u00edm v situac\u00edch, kdy hardware disponuje hardwarov\u00fdmi kontexty a je snadno virtualizovateln\u00fd, a sou\u010dasn\u011b maximalizuje objem dat pot\u0159ebn\u00fd pro p\u0159enos mezi aplikac\u00ed a serverem, co\u017e je efektivn\u00ed pro lok\u00e1ln\u00ed vykreslov\u00e1n\u00ed.",
        sectionNumber: "4.2.8",
        sectionTitle: "Grafick\u00fd server",
      },
      {
        uuid: "31497427-e635-4cad-b38d-1e50874c5884",
        correct:
          "V syst\u00e9mech vyu\u017e\u00edvaj\u00edc\u00edch grafick\u00fd server pro virtualizaci grafick\u00e9ho subsyst\u00e9mu se dosahuje sn\u00ed\u017een\u00ed objemu dat p\u0159en\u00e1\u0161en\u00fdch mezi aplikac\u00ed a grafick\u00fdm serverem, proto\u017ee se p\u0159en\u00e1\u0161ej\u00ed p\u0159\u00edkazy vy\u0161\u0161\u00ed \u00farovn\u011b popisuj\u00edc\u00ed objekty nam\u00edsto rozs\u00e1hl\u00e9 rastrov\u00e9 reprezentace, co\u017e je v\u00fdhodn\u00e9 zejm\u00e9na pro vzd\u00e1len\u00e9 vykreslov\u00e1n\u00ed, kde je minimalizace datov\u00e9ho toku kl\u00ed\u010dov\u00e1 pro zaji\u0161t\u011bn\u00ed plynul\u00e9ho u\u017eivatelsk\u00e9ho z\u00e1\u017eitku.",
        incorrect:
          "V syst\u00e9mech zalo\u017een\u00fdch na grafick\u00e9m serveru pro virtualizaci grafiky je objem dat mezi aplikac\u00ed a serverem maximalizov\u00e1n, jeliko\u017e se p\u0159en\u00e1\u0161\u00ed detailn\u00ed rastrov\u00e1 reprezentace, co\u017e je sice n\u00e1ro\u010dn\u011bj\u0161\u00ed na p\u0159enosovou kapacitu, ale naopak velice v\u00fdhodn\u00e9 pro lok\u00e1ln\u00ed vykreslov\u00e1n\u00ed, kde je kladen d\u016fraz na maxim\u00e1ln\u00ed detail a kvalitu obrazu bez ohledu na datov\u00fd tok.",
        sectionNumber: "4.2.8",
        sectionTitle: "Grafick\u00fd server",
      },
      {
        uuid: "419f3345-2cc0-4839-b916-cf1f30cd51fe",
        correct:
          "Zvukov\u00e1 rozhran\u00ed v opera\u010dn\u00edch syst\u00e9mech umo\u017e\u0148uj\u00ed mixov\u00e1n\u00ed v\u00fdstupn\u00edch zvukov\u00fdch proud\u016f, co\u017e se projevuje nap\u0159\u00edklad schopnost\u00ed kombinovat zvuk z v\u00edce aplikac\u00ed do jednoho v\u00fdstupu pro reproduktory nebo sluch\u00e1tka, a t\u00edm zajistit komplexn\u011bj\u0161\u00ed zvukov\u00fd z\u00e1\u017eitek pro u\u017eivatele.",
        incorrect:
          "Zvukov\u00e1 rozhran\u00ed v opera\u010dn\u00edch syst\u00e9mech neumo\u017e\u0148uj\u00ed mixov\u00e1n\u00ed v\u00fdstupn\u00edch zvukov\u00fdch proud\u016f, co\u017e znamen\u00e1, \u017ee ka\u017ed\u00e1 aplikace mus\u00ed m\u00edt exkluzivn\u00ed p\u0159\u00edstup k v\u00fdstupn\u00edmu zvukov\u00e9mu za\u0159\u00edzen\u00ed, jako jsou reproduktory nebo sluch\u00e1tka, a nelze kombinovat zvuk z v\u00edce zdroj\u016f sou\u010dasn\u011b.",
        sectionNumber: "4.2.9",
        sectionTitle: "Audio",
      },
      {
        uuid: "1a1a9197-f8a5-4ea6-ad36-45c5a6d96fef",
        correct:
          "Pro vstupn\u00ed zvukov\u00e1 za\u0159\u00edzen\u00ed, jako jsou mikrofony a MIDI rozhran\u00ed, opera\u010dn\u00ed syst\u00e9my typicky implementuj\u00ed p\u0159ep\u00edn\u00e1n\u00ed vstupn\u00edch proud\u016f, co\u017e znamen\u00e1, \u017ee v jeden okam\u017eik m\u016f\u017ee b\u00fdt aktivn\u00ed pouze jeden vstupn\u00ed zdroj, a syst\u00e9m mezi nimi p\u0159ep\u00edn\u00e1 na z\u00e1klad\u011b u\u017eivatelsk\u00e9ho vstupu nebo konfigurace.",
        incorrect:
          "Pro vstupn\u00ed zvukov\u00e1 za\u0159\u00edzen\u00ed, jako jsou mikrofony a MIDI rozhran\u00ed, opera\u010dn\u00ed syst\u00e9my b\u011b\u017en\u011b implementuj\u00ed mixov\u00e1n\u00ed vstupn\u00edch proud\u016f, umo\u017e\u0148uj\u00edc\u00ed sou\u010dasn\u00e9 zpracov\u00e1n\u00ed a kombinaci sign\u00e1l\u016f z v\u00edce vstupn\u00edch za\u0159\u00edzen\u00ed do jednoho vstupn\u00edho proudu pro flexibiln\u011bj\u0161\u00ed a komplexn\u011bj\u0161\u00ed zvukov\u00e9 vstupy.",
        sectionNumber: "4.2.9",
        sectionTitle: "Audio",
      },
      {
        uuid: "d2ed25ee-5ce3-4d82-9324-22564eaeef23",
        correct:
          "Latence zvukov\u00e9ho subsyst\u00e9mu opera\u010dn\u00edho syst\u00e9mu p\u0159edstavuje \u010dasov\u00e9 zpo\u017ed\u011bn\u00ed mezi akc\u00ed u\u017eivatele a zvukovou odezvou, p\u0159i\u010dem\u017e vysok\u00e1 latence m\u016f\u017ee negativn\u011b ovlivnit interaktivn\u00ed aplikace, jako jsou virtu\u00e1ln\u00ed n\u00e1stroje, kde je kl\u00ed\u010dov\u00e1 okam\u017eit\u00e1 reakce na u\u017eivatelsk\u00fd vstup.",
        incorrect:
          "Latence zvukov\u00e9ho subsyst\u00e9mu opera\u010dn\u00edho syst\u00e9mu je zanedbateln\u00e1 a nem\u00e1 prakticky \u017e\u00e1dn\u00fd vliv na u\u017eivatelskou zku\u0161enost, a to ani v interaktivn\u00edch aplikac\u00edch, jako jsou virtu\u00e1ln\u00ed n\u00e1stroje, kde je odezva syst\u00e9mu irelevantn\u00ed pro plynul\u00fd a kvalitn\u00ed zvukov\u00fd v\u00fdstup.",
        sectionNumber: "4.2.9",
        sectionTitle: "Audio",
      },
      {
        uuid: "034e5037-7bd2-4057-a483-6309eb95ef47",
        correct:
          "Z\u00e1sadn\u00ed rozd\u00edl mezi tisk\u00e1rnami a termin\u00e1lov\u00fdmi periferiemi spo\u010d\u00edv\u00e1 v jejich povaze zpracov\u00e1n\u00ed \u00faloh, kde tisk\u00e1rny pracuj\u00ed sp\u00ed\u0161e v d\u00e1vkov\u00e9m re\u017eimu, vy\u017eaduj\u00edc\u00ed ucelen\u00e9 \u00falohy pro tisk, a nejsou prim\u00e1rn\u011b navr\u017eeny pro interaktivn\u00ed operace s okam\u017eitou reakc\u00ed na zm\u011bny po\u017eadavk\u016f opera\u010dn\u00edho syst\u00e9mu, co\u017e odli\u0161uje jejich virtualizaci od virtualizace obrazovky.",
        incorrect:
          "Z\u00e1sadn\u00ed rozd\u00edl mezi tisk\u00e1rnami a termin\u00e1lov\u00fdmi periferiemi spo\u010d\u00edv\u00e1 v jejich povaze zpracov\u00e1n\u00ed \u00faloh, kde tisk\u00e1rny pracuj\u00ed sp\u00ed\u0161e v interaktivn\u00edm re\u017eimu, umo\u017e\u0148uj\u00edc\u00ed okam\u017eitou reakci na zm\u011bny po\u017eadavk\u016f opera\u010dn\u00edho syst\u00e9mu a pru\u017enou zm\u011bnu tiskov\u00e9 \u00falohy, podobn\u011b jako je tomu u virtualizace obrazovky, co\u017e zd\u016fraz\u0148uje jejich adaptabilitu na dynamick\u00e9 po\u017eadavky u\u017eivatele.",
        sectionNumber: "4.2.10",
        sectionTitle: "Tisk\u00e1rny",
      },
      {
        uuid: "e90f6b2b-3747-4b5a-b833-18661ddf9b30",
        correct:
          "Virtualizace tisk\u00e1ren v opera\u010dn\u00edch syst\u00e9mech se implementuje pomoc\u00ed fronty \u00faloh, co\u017e je analogick\u00e9 k mechanism\u016fm pl\u00e1nov\u00e1n\u00ed \u00faloh v d\u00e1vkov\u00fdch syst\u00e9mech, kde jednotliv\u00e9 tiskov\u00e9 \u00falohy \u010dekaj\u00ed ve front\u011b na zpracov\u00e1n\u00ed tisk\u00e1rnou, a tento p\u0159\u00edstup umo\u017e\u0148uje sd\u00edlen\u00ed tisk\u00e1rny mezi r\u016fzn\u00fdmi aplikacemi a u\u017eivateli v syst\u00e9mu.",
        incorrect:
          "Virtualizace tisk\u00e1ren v opera\u010dn\u00edch syst\u00e9mech se implementuje pomoc\u00ed mechanismu prioritn\u00edho pl\u00e1nov\u00e1n\u00ed \u00faloh v re\u00e1ln\u00e9m \u010dase, podobn\u011b jako u interaktivn\u00edch syst\u00e9m\u016f, kde se tiskov\u00e9 \u00falohy zpracov\u00e1vaj\u00ed okam\u017eit\u011b podle priority, bez nutnosti \u010dek\u00e1n\u00ed ve front\u011b, co\u017e zaji\u0161\u0165uje exkluzivn\u00ed p\u0159\u00edstup aplikac\u00ed k tisk\u00e1rn\u011b bez sd\u00edlen\u00ed.",
        sectionNumber: "4.2.10",
        sectionTitle: "Tisk\u00e1rny",
      },
      {
        uuid: "19bc943f-780d-456a-9e22-b7c26b363875",
        correct:
          "Abstrakce tisk\u00e1ren v opera\u010dn\u00edch syst\u00e9mech se \u0159e\u0161\u00ed zaveden\u00edm spole\u010dn\u00e9ho form\u00e1tu pro popis dokument\u016f, jako je nap\u0159\u00edklad PDF, kter\u00fd umo\u017e\u0148uje opera\u010dn\u00edmu syst\u00e9mu konvertovat dokument do form\u00e1tu specifick\u00e9ho pro danou tisk\u00e1rnu, a t\u00edm skr\u00fdt rozd\u00edly mezi r\u016fzn\u00fdmi modely tisk\u00e1ren z pohledu aplikac\u00ed, i kdy\u017e n\u011bkter\u00e9 aspekty tisk\u00e1ren z\u016fst\u00e1vaj\u00ed v aplikac\u00edch relevantn\u00ed.",
        incorrect:
          "Abstrakce tisk\u00e1ren v opera\u010dn\u00edch syst\u00e9mech se \u0159e\u0161\u00ed standardizac\u00ed hardwarov\u00e9ho rozhran\u00ed tisk\u00e1ren, co\u017e eliminuje pot\u0159ebu softwarov\u00e9 konverze form\u00e1t\u016f dokument\u016f a zaji\u0161\u0165uje, \u017ee v\u0161echny tisk\u00e1rny pracuj\u00ed s jednotn\u00fdm form\u00e1tem dat, \u010d\u00edm\u017e se kompletn\u011b skr\u00fdvaj\u00ed ve\u0161ker\u00e9 rozd\u00edly mezi tisk\u00e1rnami z pohledu aplikac\u00ed, a aplikace tak nemus\u00ed br\u00e1t v \u00favahu specifika jednotliv\u00fdch model\u016f.",
        sectionNumber: "4.2.10",
        sectionTitle: "Tisk\u00e1rny",
      },
      {
        uuid: "ea558ca0-c833-47bc-b262-c3a23f7b9a6b",
        correct:
          "Po\u010d\u00edta\u010dov\u00e1 s\u00ed\u0165 funguje na principu sd\u00edlen\u00e9ho komunika\u010dn\u00edho m\u00e9dia, podobn\u011b jako sb\u011brnice uvnit\u0159 po\u010d\u00edta\u010de, kde s\u00ed\u0165ov\u00e1 rozhran\u00ed pln\u00ed obdobnou funkci jako \u0159adi\u010de sb\u011brnice, umo\u017e\u0148uj\u00edc\u00ed propojen\u00ed uzl\u016f a v\u00fdm\u011bnu dat mezi nimi, a\u010dkoliv s\u00edt\u011b obvykle postr\u00e1daj\u00ed centr\u00e1ln\u00ed prvek s dominantn\u00ed rol\u00ed, kter\u00fd by \u0159\u00eddil komunikaci tak, jak to d\u011bl\u00e1 procesor v r\u00e1mci po\u010d\u00edta\u010dov\u00e9 sb\u011brnice.",
        incorrect:
          "Po\u010d\u00edta\u010dov\u00e1 s\u00ed\u0165 se vyzna\u010duje centralizovan\u00fdm \u0159\u00edzen\u00edm komunikace, podobn\u011b jako sb\u011brnice uvnit\u0159 po\u010d\u00edta\u010de, kde centr\u00e1ln\u00ed uzel s\u00edt\u011b, funguj\u00edc\u00ed jako hlavn\u00ed \u0159adi\u010d, koordinuje tok dat mezi jednotliv\u00fdmi s\u00ed\u0165ov\u00fdmi rozhran\u00edmi, zat\u00edmco s\u00ed\u0165ov\u00e1 rozhran\u00ed samotn\u00e1 se staraj\u00ed pouze o fyzick\u00e9 propojen\u00ed s p\u0159enosov\u00fdm m\u00e9diem a p\u0159evod dat do form\u00e1tu s\u00edt\u011b.",
        sectionNumber: "4.3.1",
        sectionTitle: "Po\u010d\u00edta\u010dov\u00e1 s\u00ed\u0165",
      },
      {
        uuid: "b2ab40b4-c89a-417f-8d2f-6b6ba93b7191",
        correct:
          "S\u00ed\u0165ov\u00e9 rozhran\u00ed v po\u010d\u00edta\u010di slou\u017e\u00ed jako kl\u00ed\u010dov\u00e9 za\u0159\u00edzen\u00ed pro p\u0159ipojen\u00ed k po\u010d\u00edta\u010dov\u00e9 s\u00edti, p\u0159i\u010dem\u017e na jedn\u00e9 stran\u011b se integruje do po\u010d\u00edta\u010de skrze sb\u011brnici, jako je nap\u0159\u00edklad PCIe, a na druh\u00e9 stran\u011b se p\u0159ipojuje k fyzick\u00e9mu p\u0159enosov\u00e9mu m\u00e9diu s\u00edt\u011b, a\u0165 u\u017e se jedn\u00e1 o dr\u00e1tov\u00e9 p\u0159ipojen\u00ed pomoc\u00ed konektoru RJ-45 nebo bezdr\u00e1tov\u00e9 prost\u0159ednictv\u00edm ant\u00e9ny, \u010d\u00edm\u017e umo\u017e\u0148uje po\u010d\u00edta\u010di komunikovat v s\u00ed\u0165ov\u00e9m prost\u0159ed\u00ed.",
        incorrect:
          "S\u00ed\u0165ov\u00e9 rozhran\u00ed v po\u010d\u00edta\u010di se prim\u00e1rn\u011b zam\u011b\u0159uje na softwarov\u00e9 zpracov\u00e1n\u00ed s\u00ed\u0165ov\u00fdch protokol\u016f a spr\u00e1vu datov\u00fdch tok\u016f, p\u0159i\u010dem\u017e jeho hardwarov\u00e1 role spo\u010d\u00edv\u00e1 pouze v pasivn\u00edm zprost\u0159edkov\u00e1n\u00ed fyzick\u00e9ho p\u0159ipojen\u00ed k s\u00edti pomoc\u00ed konektor\u016f jako RJ-45 nebo ant\u00e9n, a sb\u011brnice PCIe slou\u017e\u00ed pouze k nap\u00e1jen\u00ed rozhran\u00ed, nikoliv k datov\u00e9 komunikaci mezi rozhran\u00edm a zbytkem po\u010d\u00edta\u010de.",
        sectionNumber: "4.3.1",
        sectionTitle: "Po\u010d\u00edta\u010dov\u00e1 s\u00ed\u0165",
      },
      {
        uuid: "546c997e-3cec-484e-b915-481830ab637e",
        correct:
          "Podle ISO/OSI modelu s\u00ed\u0165ov\u00e9 komunikace, vrstvy jedna a dv\u011b, tedy fyzick\u00e1 a linkov\u00e1 vrstva, jsou prim\u00e1rn\u011b implementov\u00e1ny hardwarem a p\u0159edstavuj\u00ed rozhran\u00ed mezi fyzick\u00fdm m\u00e9diem a softwarem, zat\u00edmco vrstvy p\u011bt a\u017e sedm jsou p\u0159ev\u00e1\u017en\u011b z\u00e1le\u017eitost\u00ed aplikac\u00ed a stav\u00ed na abstrakc\u00edch poskytovan\u00fdch ni\u017e\u0161\u00edmi vrstvami opera\u010dn\u00edho syst\u00e9mu.",
        incorrect:
          "Podle ISO/OSI modelu s\u00ed\u0165ov\u00e9 komunikace, vrstvy p\u011bt a\u017e sedm, tedy aplika\u010dn\u00ed vrstvy, jsou prim\u00e1rn\u011b implementov\u00e1ny hardwarem a p\u0159edstavuj\u00ed rozhran\u00ed mezi fyzick\u00fdm m\u00e9diem a softwarem, zat\u00edmco vrstvy jedna a dv\u011b jsou p\u0159ev\u00e1\u017en\u011b z\u00e1le\u017eitost\u00ed aplikac\u00ed a stav\u00ed na abstrakc\u00edch poskytovan\u00fdch ni\u017e\u0161\u00edmi vrstvami opera\u010dn\u00edho syst\u00e9mu.",
        sectionNumber: "4.3.2",
        sectionTitle: "Vrstvy",
      },
      {
        uuid: "2f677aa4-d209-42db-8df8-627c8c8bd588",
        correct:
          "Virtualizace v kontextu s\u00ed\u0165ov\u00e9 komunikace se podle popsan\u00e9ho modelu ISO/OSI typicky umis\u0165uje mezi transportn\u00ed a aplika\u010dn\u00ed vrstvu, konkr\u00e9tn\u011b mezi \u010dtvrtou a p\u00e1tou vrstvu, proto\u017ee transportn\u00ed vrstva tvo\u0159\u00ed rozhran\u00ed mezi opera\u010dn\u00edm syst\u00e9mem a aplikacemi, co\u017e je logick\u00e9 m\u00edsto pro abstrakci a odd\u011blen\u00ed aplika\u010dn\u00ed logiky od detail\u016f s\u00ed\u0165ov\u00e9 komunikace.",
        incorrect:
          "Virtualizace v kontextu s\u00ed\u0165ov\u00e9 komunikace se podle popsan\u00e9ho modelu ISO/OSI typicky umis\u0165uje mezi fyzickou a linkovou vrstvu, konkr\u00e9tn\u011b mezi prvn\u00ed a druhou vrstvu, proto\u017ee fyzick\u00e1 vrstva tvo\u0159\u00ed rozhran\u00ed mezi opera\u010dn\u00edm syst\u00e9mem a aplikacemi, co\u017e je logick\u00e9 m\u00edsto pro abstrakci a odd\u011blen\u00ed aplika\u010dn\u00ed logiky od detail\u016f s\u00ed\u0165ov\u00e9 komunikace.",
        sectionNumber: "4.3.2",
        sectionTitle: "Vrstvy",
      },
      {
        uuid: "614b741b-020b-4cb4-acab-1f6758e41ed3",
        correct:
          "Architektura s\u00ed\u0165ov\u00e9 komunikace je v ISO/OSI modelu z\u00e1m\u011brn\u011b rozvrstvena do n\u011bkolika vrstev abstrakce, podobn\u011b jako je tomu u perzistentn\u00edho \u00falo\u017ei\u0161t\u011b, proto\u017ee p\u0159\u00edm\u00e1 virtualizace hardwarov\u00fdch slu\u017eeb poskytovan\u00fdch fyzickou vrstvou, jako je nap\u0159\u00edklad pos\u00edl\u00e1n\u00ed r\u00e1mc\u016f, by byla nepraktick\u00e1 a opera\u010dn\u00ed syst\u00e9m tak buduje vrstvy abstrakc\u00ed pro efektivn\u011bj\u0161\u00ed spr\u00e1vu a virtualizaci s\u00ed\u0165ov\u00fdch zdroj\u016f.",
        incorrect:
          "Architektura s\u00ed\u0165ov\u00e9 komunikace v ISO/OSI modelu je navr\u017eena tak, aby minimalizovala po\u010det vrstev abstrakce, a p\u0159\u00edm\u00e1 virtualizace hardwarov\u00fdch slu\u017eeb poskytovan\u00fdch fyzickou vrstvou, jako je pos\u00edl\u00e1n\u00ed r\u00e1mc\u016f, je pova\u017eov\u00e1na za efektivn\u00ed a praktickou metodu pro spr\u00e1vu s\u00ed\u0165ov\u00fdch zdroj\u016f, \u010d\u00edm\u017e se sni\u017euje slo\u017eitost opera\u010dn\u00edho syst\u00e9mu.",
        sectionNumber: "4.3.2",
        sectionTitle: "Vrstvy",
      },
      {
        uuid: "112d7282-c4b9-477b-b1e7-0b1b30654ec9",
        correct:
          "Abstrakce pro pot\u0159eby opera\u010dn\u00edho syst\u00e9mu se nach\u00e1z\u00ed mezi druhou a t\u0159et\u00ed vrstvou s\u00ed\u0165ov\u00e9ho modelu, p\u0159i\u010dem\u017e hlavn\u00edm c\u00edlem v tomto kontextu je poskytnout abstrakci, nikoli virtualizaci, proto\u017ee opera\u010dn\u00ed syst\u00e9m obvykle b\u011b\u017e\u00ed jako jedin\u00e1 instance a nepot\u0159ebuje virtualizovat hardware pro sv\u00e9 intern\u00ed operace v oblasti s\u00edt\u00ed.",
        incorrect:
          "Abstrakce pro pot\u0159eby opera\u010dn\u00edho syst\u00e9mu se nach\u00e1z\u00ed mezi \u010dtvrtou a p\u00e1tou vrstvou s\u00ed\u0165ov\u00e9ho modelu, p\u0159i\u010dem\u017e hlavn\u00edm c\u00edlem je zde virtualizace s\u00ed\u0165ov\u00e9ho hardwaru pro intern\u00ed pot\u0159eby opera\u010dn\u00edho syst\u00e9mu, umo\u017e\u0148uj\u00edc\u00ed tak opera\u010dn\u00edmu syst\u00e9mu efektivn\u011b spravovat s\u00ed\u0165ov\u00e9 zdroje a izolovat jednotliv\u00e9 s\u00ed\u0165ov\u00e9 procesy.",
        sectionNumber: "4.3.3",
        sectionTitle: "Abstrakce a virtualizace",
      },
      {
        uuid: "dd3608ef-208f-47db-a7a6-992c97fb3fa4",
        correct:
          "Pro pot\u0159eby aplikac\u00ed se abstrakce a virtualizace s\u00ed\u0165ov\u00e9 komunikace odehr\u00e1vaj\u00ed mezi \u010dtvrtou a p\u00e1tou vrstvou s\u00ed\u0165ov\u00e9ho modelu, kde aplika\u010dn\u00ed adresa je definov\u00e1na kombinac\u00ed adresy uzlu a portu, co\u017e umo\u017e\u0148uje aplikac\u00edm komunikovat v s\u00edti nez\u00e1visle na fyzick\u00e9 s\u00ed\u0165ov\u00e9 infrastruktu\u0159e a detailn\u00edch implementac\u00edch ni\u017e\u0161\u00edch vrstev.",
        incorrect:
          "Pro pot\u0159eby aplikac\u00ed se abstrakce a virtualizace s\u00ed\u0165ov\u00e9 komunikace odehr\u00e1vaj\u00ed mezi druhou a t\u0159et\u00ed vrstvou s\u00ed\u0165ov\u00e9ho modelu, kde aplika\u010dn\u00ed adresa je definov\u00e1na pouze adresou uzlu, bez pou\u017eit\u00ed port\u016f, co\u017e zjednodu\u0161uje s\u00ed\u0165ovou komunikaci aplikac\u00ed a eliminuje pot\u0159ebu spr\u00e1vy port\u016f na aplika\u010dn\u00ed \u00farovni.",
        sectionNumber: "4.3.3",
        sectionTitle: "Abstrakce a virtualizace",
      },
      {
        uuid: "19c1f9f2-4a06-4337-b06f-e30afbedf4fa",
        correct:
          "Kl\u00ed\u010dov\u00fdm stavebn\u00edm prvkem virtualizace s\u00ed\u0165ov\u00e9 komunikace je multiplexing, kter\u00fd na \u010dtvrt\u00e9 vrstv\u011b p\u0159id\u00e1v\u00e1 virtu\u00e1ln\u00ed koncov\u00e9 body pro jednotliv\u00e9 aplikace pomoc\u00ed port\u016f, p\u0159i\u010dem\u017e ka\u017ed\u00fd port reprezentuje nez\u00e1visl\u00fd proud dat nebo diskr\u00e9tn\u00edch paket\u016f, co\u017e umo\u017e\u0148uje soub\u011b\u017en\u00fd provoz v\u00edce s\u00ed\u0165ov\u00fdch aplikac\u00ed na jednom uzlu.",
        incorrect:
          "Kl\u00ed\u010dov\u00fdm stavebn\u00edm prvkem abstrakce s\u00ed\u0165ov\u00e9 komunikace je sm\u011brov\u00e1n\u00ed, kter\u00e9 na t\u0159et\u00ed vrstv\u011b p\u0159id\u00e1v\u00e1 virtu\u00e1ln\u00ed koncov\u00e9 body pro jednotliv\u00e9 aplikace pomoc\u00ed IP adres, p\u0159i\u010dem\u017e ka\u017ed\u00e1 IP adresa reprezentuje sd\u00edlen\u00fd proud dat pro v\u0161echny aplikace, co\u017e optimalizuje vyu\u017eit\u00ed s\u00ed\u0165ov\u00e9 kapacity na \u00fakor izolace mezi aplikacemi.",
        sectionNumber: "4.3.3",
        sectionTitle: "Abstrakce a virtualizace",
      },
      {
        uuid: "63cba9f5-6dbb-4b05-98dc-6da74ef3a04e",
        correct:
          "Ethernetov\u00e1 technologie pro po\u010d\u00edta\u010dov\u00e9 s\u00edt\u011b se skl\u00e1d\u00e1 ze dvou vrstev, fyzick\u00e9 vrstvy (PHY), kter\u00e1 se star\u00e1 o signalizaci a kabel\u00e1\u017e a jej\u00ed\u017e z\u00e1kladn\u00ed p\u0159enosovou jednotkou je bit, a linkov\u00e9 vrstvy (MAC), kter\u00e1 odpov\u00edd\u00e1 za r\u00e1mce jako z\u00e1kladn\u00ed p\u0159enosov\u00e9 jednotky o maxim\u00e1ln\u00ed velikosti 1500 bajt\u016f a s n\u00ed\u017e opera\u010dn\u00ed syst\u00e9m p\u0159\u00edmo komunikuje.",
        incorrect:
          "Ethernetov\u00e1 technologie pro po\u010d\u00edta\u010dov\u00e9 s\u00edt\u011b se skl\u00e1d\u00e1 ze dvou vrstev, fyzick\u00e9 vrstvy (PHY), kter\u00e1 se star\u00e1 o r\u00e1mce a linkov\u00e9 vrstvy (MAC), kter\u00e1 se star\u00e1 o signalizaci a kabel\u00e1\u017e a s n\u00ed\u017e opera\u010dn\u00ed syst\u00e9m p\u0159\u00edmo komunikuje.",
        sectionNumber: "4.3.4",
        sectionTitle: "Ethernet (IEEE 802.3)",
      },
      {
        uuid: "782e616c-51d1-4b2d-b187-74129b164f0a",
        correct:
          "Modern\u00ed Ethernet, na rozd\u00edl od star\u0161\u00edch implementac\u00ed, vyu\u017e\u00edv\u00e1 point-to-point topologii s aktivn\u00edmi p\u0159ep\u00edna\u010di, co\u017e znamen\u00e1, \u017ee komunikace prob\u00edh\u00e1 p\u0159\u00edmo mezi dv\u011bma body a pro sm\u011brov\u00e1n\u00ed dat se pou\u017e\u00edvaj\u00ed aktivn\u00ed s\u00ed\u0165ov\u00e9 prvky, a nikoliv sd\u00edlen\u00e9 m\u00e9dium.",
        incorrect:
          "Modern\u00ed Ethernet, podobn\u011b jako star\u0161\u00ed implementace, vyu\u017e\u00edv\u00e1 sd\u00edlen\u00e9 m\u00e9dium s pasivn\u00edmi p\u0159ep\u00edna\u010di, co\u017e znamen\u00e1, \u017ee komunikace prob\u00edh\u00e1 broadcastov\u011b a pro sm\u011brov\u00e1n\u00ed dat se pou\u017e\u00edvaj\u00ed pasivn\u00ed s\u00ed\u0165ov\u00e9 prvky, a nikoliv vyhrazen\u00e9 spoje.",
        sectionNumber: "4.3.4",
        sectionTitle: "Ethernet (IEEE 802.3)",
      },
      {
        uuid: "449dc2de-24a8-45a1-b7ef-1607cb1f2ec6",
        correct:
          "V ethernetov\u00e9 s\u00edti je adresace na druh\u00e9 vrstv\u011b omezena pouze na lok\u00e1ln\u00ed segment, co\u017e znamen\u00e1, \u017ee rozhran\u00ed m\u016f\u017ee adresovat pouze jin\u00e1 rozhran\u00ed p\u0159ipojen\u00e1 do stejn\u00e9 broadcastov\u00e9 dom\u00e9ny, a pro komunikaci mezi r\u016fzn\u00fdmi segmenty je nutn\u00e9 pou\u017e\u00edt adresov\u00e1n\u00ed t\u0159et\u00ed vrstvy, nap\u0159\u00edklad IP adresy.",
        incorrect:
          "V ethernetov\u00e9 s\u00edti je adresace na druh\u00e9 vrstv\u011b glob\u00e1ln\u00ed, co\u017e znamen\u00e1, \u017ee rozhran\u00ed m\u016f\u017ee adresovat libovoln\u00e9 jin\u00e9 rozhran\u00ed v s\u00edti bez ohledu na segment, a pro komunikaci v r\u00e1mci jednoho segmentu je nutn\u00e9 pou\u017e\u00edt adresov\u00e1n\u00ed t\u0159et\u00ed vrstvy, p\u0159i\u010dem\u017e MAC adresy slou\u017e\u00ed pouze pro lok\u00e1ln\u00ed identifikaci rozhran\u00ed uvnit\u0159 za\u0159\u00edzen\u00ed.",
        sectionNumber: "4.3.5",
        sectionTitle: "Adresace",
      },
      {
        uuid: "1bb0159a-b780-40bb-8732-a91083674f0a",
        correct:
          "P\u0159ep\u00edna\u010de v modern\u00edch ethernetov\u00fdch s\u00edt\u00edch funguj\u00ed na principu mapov\u00e1n\u00ed MAC adres na porty, co\u017e jim umo\u017e\u0148uje efektivn\u011b p\u0159epos\u00edlat r\u00e1mce pouze na port, kde se nach\u00e1z\u00ed c\u00edlov\u00e1 MAC adresa, a t\u00edm minimalizovat zbyte\u010dn\u00fd provoz v s\u00edti a zvy\u0161ovat celkovou propustnost, na rozd\u00edl od star\u0161\u00edch hub\u016f, kter\u00e9 r\u00e1mce \u0161\u00ed\u0159ily na v\u0161echny porty.",
        incorrect:
          "P\u0159ep\u00edna\u010de v modern\u00edch ethernetov\u00fdch s\u00edt\u00edch funguj\u00ed na principu broadcastu, podobn\u011b jako star\u0161\u00ed huby, co\u017e znamen\u00e1, \u017ee ka\u017ed\u00fd r\u00e1mec, kter\u00fd p\u0159ep\u00edna\u010d p\u0159ijme, je p\u0159eposl\u00e1n na v\u0161echny porty krom\u011b portu, ze kter\u00e9ho byl p\u0159ijat, a t\u00edm je zaji\u0161t\u011bna doru\u010ditelnost r\u00e1mc\u016f do v\u0161ech segment\u016f s\u00edt\u011b, av\u0161ak za cenu zv\u00fd\u0161en\u00e9ho provozu.",
        sectionNumber: "4.3.5",
        sectionTitle: "Adresace",
      },
      {
        uuid: "d70bd37f-64a6-463c-a4a3-ecaa6836fd29",
        correct:
          "Pro doru\u010den\u00ed paketu t\u0159et\u00ed vrstvy v ethernetov\u00e9 s\u00edti je nezbytn\u00e9 nejprve zjistit MAC adresu c\u00edlov\u00e9ho rozhran\u00ed, co\u017e se obvykle prov\u00e1d\u00ed pomoc\u00ed protokolu ARP, kter\u00fd umo\u017e\u0148uje p\u0159eklad IP adres na MAC adresy, a opera\u010dn\u00ed syst\u00e9m si udr\u017euje p\u0159ekladov\u00e9 tabulky pro urychlen\u00ed tohoto procesu, \u010d\u00edm\u017e se sni\u017euje latence p\u0159i komunikaci.",
        incorrect:
          "Pro doru\u010den\u00ed paketu t\u0159et\u00ed vrstvy v ethernetov\u00e9 s\u00edti je nezbytn\u00e9 nejprve zjistit IP adresu c\u00edlov\u00e9ho rozhran\u00ed, co\u017e se obvykle prov\u00e1d\u00ed pomoc\u00ed protokolu DHCP, kter\u00fd umo\u017e\u0148uje p\u0159eklad MAC adres na IP adresy, a opera\u010dn\u00ed syst\u00e9m si udr\u017euje p\u0159ekladov\u00e9 tabulky pro urychlen\u00ed tohoto procesu, prim\u00e1rn\u011b z d\u016fvodu p\u0159id\u011blov\u00e1n\u00ed dynamick\u00fdch IP adres.",
        sectionNumber: "4.3.5",
        sectionTitle: "Adresace",
      },
      {
        uuid: "50dfe537-5615-404c-9aa0-bbae1a8793c5",
        correct:
          "Opera\u010dn\u00ed syst\u00e9m p\u0159i odes\u00edl\u00e1n\u00ed paketu do s\u00edt\u011b nejprve p\u0159id\u00e1 r\u00e1mec do odchoz\u00ed fronty, kter\u00e1 je implementov\u00e1na jako kruhov\u00e1 fronta v opera\u010dn\u00ed pam\u011bti. Tato fronta je spravov\u00e1na pomoc\u00ed dvou ukazatel\u016f, hlavov\u00e9ho a koncov\u00e9ho, p\u0159i\u010dem\u017e koncov\u00fd ukazatel je modifikov\u00e1n opera\u010dn\u00edm syst\u00e9mem p\u0159i p\u0159id\u00e1v\u00e1n\u00ed nov\u00fdch r\u00e1mc\u016f do fronty.",
        incorrect:
          "Opera\u010dn\u00ed syst\u00e9m p\u0159i odes\u00edl\u00e1n\u00ed paketu do s\u00edt\u011b nejprve p\u0159id\u00e1 r\u00e1mec do odchoz\u00ed fronty, kter\u00e1 je implementov\u00e1na jako line\u00e1rn\u00ed fronta v opera\u010dn\u00ed pam\u011bti. Tato fronta je spravov\u00e1na pomoc\u00ed dvou ukazatel\u016f, hlavov\u00e9ho a koncov\u00e9ho, p\u0159i\u010dem\u017e hlavov\u00fd ukazatel je modifikov\u00e1n opera\u010dn\u00edm syst\u00e9mem p\u0159i p\u0159id\u00e1v\u00e1n\u00ed nov\u00fdch r\u00e1mc\u016f do fronty.",
        sectionNumber: "4.3.6",
        sectionTitle: "Odchoz\u00ed fronta",
      },
      {
        uuid: "ed613024-e1a7-46b2-973b-ffb0b6f3dabb",
        correct:
          "S\u00ed\u0165ov\u00e9 rozhran\u00ed autonomn\u011b \u010dte r\u00e1mce z odchoz\u00ed fronty pomoc\u00ed p\u0159\u00edm\u00e9ho p\u0159\u00edstupu do pam\u011bti (DMA) a asynchronn\u011b je odes\u00edl\u00e1 do s\u00edt\u011b. Pro spr\u00e1vu odchoz\u00ed fronty, kter\u00e1 je implementov\u00e1na jako kruhov\u00e1 fronta, s\u00ed\u0165ov\u00e9 rozhran\u00ed ovl\u00e1d\u00e1 hlavov\u00fd ukazatel, kter\u00fd posouv\u00e1 po zpracov\u00e1n\u00ed r\u00e1mce.",
        incorrect:
          "S\u00ed\u0165ov\u00e9 rozhran\u00ed autonomn\u011b \u010dte r\u00e1mce z odchoz\u00ed fronty pomoc\u00ed p\u0159\u00edm\u00e9ho p\u0159\u00edstupu do pam\u011bti (DMA) a synchronn\u011b je odes\u00edl\u00e1 do s\u00edt\u011b. Pro spr\u00e1vu odchoz\u00ed fronty, kter\u00e1 je implementov\u00e1na jako kruhov\u00e1 fronta, s\u00ed\u0165ov\u00e9 rozhran\u00ed ovl\u00e1d\u00e1 koncov\u00fd ukazatel, kter\u00fd posouv\u00e1 po zpracov\u00e1n\u00ed r\u00e1mce.",
        sectionNumber: "4.3.6",
        sectionTitle: "Odchoz\u00ed fronta",
      },
      {
        uuid: "7c588c9b-0874-4777-a3fd-fcb95dc019bd",
        correct:
          "Odchoz\u00ed fronta, slou\u017e\u00edc\u00ed pro odes\u00edl\u00e1n\u00ed s\u00ed\u0165ov\u00fdch paket\u016f, je v pam\u011bti organizov\u00e1na jako kruhov\u00e1 fronta pevn\u00e9 velikosti a je rozd\u011blena na dv\u011b \u010d\u00e1sti. Jedna \u010d\u00e1st fronty je ur\u010dena pro opera\u010dn\u00ed syst\u00e9m, kter\u00fd do n\u00ed umis\u0165uje nov\u00e9 r\u00e1mce k odesl\u00e1n\u00ed, zat\u00edmco druh\u00e1 \u010d\u00e1st je spravov\u00e1na s\u00ed\u0165ov\u00fdm rozhran\u00edm, kter\u00e9 z n\u00ed r\u00e1mce vyzved\u00e1v\u00e1 a odes\u00edl\u00e1 do s\u00edt\u011b.",
        incorrect:
          "Odchoz\u00ed fronta, slou\u017e\u00edc\u00ed pro odes\u00edl\u00e1n\u00ed s\u00ed\u0165ov\u00fdch paket\u016f, je v pam\u011bti organizov\u00e1na jako line\u00e1rn\u00ed fronta prom\u011bnn\u00e9 velikosti a je rozd\u011blena na dv\u011b \u010d\u00e1sti. Jedna \u010d\u00e1st fronty je ur\u010dena pro s\u00ed\u0165ov\u00e9 rozhran\u00ed, kter\u00e9 do n\u00ed umis\u0165uje nov\u00e9 r\u00e1mce k odesl\u00e1n\u00ed, zat\u00edmco druh\u00e1 \u010d\u00e1st je spravov\u00e1na opera\u010dn\u00edm syst\u00e9mem, kter\u00fd z n\u00ed r\u00e1mce vyzved\u00e1v\u00e1 a odes\u00edl\u00e1 do s\u00edt\u011b.",
        sectionNumber: "4.3.6",
        sectionTitle: "Odchoz\u00ed fronta",
      },
      {
        uuid: "f1bbb818-031c-46f5-861e-e64eeb09f45c",
        correct:
          "S\u00ed\u0165ov\u00e9 rozhran\u00ed funguje na principu kruhov\u00e9 fronty pro p\u0159\u00edjem dat, kam rozhran\u00ed kop\u00edruje p\u0159\u00edchoz\u00ed r\u00e1mce. Opera\u010dn\u00ed syst\u00e9m alokuje pam\u011b\u0165 pro tyto r\u00e1mce a signalizuje rozhran\u00ed, \u017ee pam\u011b\u0165 m\u016f\u017ee b\u00fdt p\u0159eps\u00e1na, p\u0159esunut\u00edm polo\u017eek do \u010d\u00e1sti fronty n\u00e1le\u017eej\u00edc\u00ed rozhran\u00ed. Po zpracov\u00e1n\u00ed dat s\u00ed\u0165ov\u00e9 rozhran\u00ed p\u0159esune bu\u0148ky zp\u011bt do \u010d\u00e1sti fronty opera\u010dn\u00edho syst\u00e9mu.",
        incorrect:
          "S\u00ed\u0165ov\u00e9 rozhran\u00ed pro p\u0159\u00edjem dat vyu\u017e\u00edv\u00e1 line\u00e1rn\u00ed frontu, kam opera\u010dn\u00ed syst\u00e9m p\u0159\u00edmo zapisuje p\u0159\u00edchoz\u00ed r\u00e1mce. S\u00ed\u0165ov\u00e9 rozhran\u00ed alokuje pam\u011b\u0165 pro r\u00e1mce a informuje opera\u010dn\u00ed syst\u00e9m o dostupnosti pam\u011bti p\u0159esunut\u00edm polo\u017eek do fronty. Opera\u010dn\u00ed syst\u00e9m po zpracov\u00e1n\u00ed dat p\u0159esune bu\u0148ky zp\u011bt do fronty s\u00ed\u0165ov\u00e9ho rozhran\u00ed.",
        sectionNumber: "4.3.7",
        sectionTitle: "P\u0159\u00edjmov\u00e1 fronta",
      },
      {
        uuid: "40281bdc-b8ae-4d46-a1fb-b6469a993688",
        correct:
          "P\u0159\u00edchod nov\u00fdch dat do p\u0159\u00edjmov\u00e9 fronty s\u00ed\u0165ov\u00e9ho rozhran\u00ed generuje ud\u00e1lost, kter\u00e1 m\u016f\u017ee b\u00fdt sdru\u017eov\u00e1na pro v\u00edce r\u00e1mc\u016f, aby se sn\u00ed\u017eila re\u017eie zpracov\u00e1n\u00ed. Pokud opera\u010dn\u00ed syst\u00e9m odeb\u00edr\u00e1 data z fronty p\u0159\u00edli\u0161 pomalu a fronta se zapln\u00ed, dojde ke ztr\u00e1t\u011b p\u0159\u00edchoz\u00edch dat. Standardn\u00ed velikost pam\u011b\u0165ov\u00e9ho bloku p\u0159ed\u00e1van\u00e9ho opera\u010dn\u00edm syst\u00e9mem rozhran\u00ed odpov\u00edd\u00e1 maxim\u00e1ln\u00ed p\u0159enosov\u00e9 jednotce (MTU), obvykle 1500 bajt\u016f.",
        incorrect:
          "P\u0159\u00edchod nov\u00fdch dat do p\u0159\u00edjmov\u00e9 fronty s\u00ed\u0165ov\u00e9ho rozhran\u00ed generuje ud\u00e1lost pro ka\u017ed\u00fd r\u00e1mec zvl\u00e1\u0161\u0165, aby se maximalizovala okam\u017eit\u00e1 odezva syst\u00e9mu. Pokud opera\u010dn\u00ed syst\u00e9m odeb\u00edr\u00e1 data z fronty p\u0159\u00edli\u0161 rychle a fronta je pr\u00e1zdn\u00e1, dojde ke ztr\u00e1t\u011b dat z d\u016fvodu nedostate\u010dn\u00e9ho p\u0159\u00edsunu. Standardn\u00ed velikost pam\u011b\u0165ov\u00e9ho bloku p\u0159ed\u00e1van\u00e9ho opera\u010dn\u00edm syst\u00e9mem rozhran\u00ed je prom\u011bnliv\u00e1 a z\u00e1vis\u00ed na aktu\u00e1ln\u00edm zat\u00ed\u017een\u00ed s\u00edt\u011b, av\u0161ak nikdy nep\u0159esahuje 500 bajt\u016f.",
        sectionNumber: "4.3.7",
        sectionTitle: "P\u0159\u00edjmov\u00e1 fronta",
      },
      {
        uuid: "f89084e6-9922-44ae-aeb7-7c961d9d9be9",
        correct:
          "Opera\u010dn\u00ed syst\u00e9m nemus\u00ed r\u00e1mce z p\u0159\u00edjmov\u00e9 fronty zpracov\u00e1vat okam\u017eit\u011b a pam\u011b\u0165 alokovanou pro n\u011b nemus\u00ed vracet s\u00ed\u0165ov\u00e9mu rozhran\u00ed ihned. M\u016f\u017ee alokovat nov\u00e9 bloky pam\u011bti pro dal\u0161\u00ed p\u0159\u00edchoz\u00ed r\u00e1mce a pln\u00e9 bloky, obsahuj\u00edc\u00ed ji\u017e zpracovan\u00e1 data, uvolnit nebo znovu pou\u017e\u00edt a\u017e po dokon\u010den\u00ed zpracov\u00e1n\u00ed. N\u011bkter\u00e1 s\u00ed\u0165ov\u00e1 rozhran\u00ed dok\u00e1\u017e\u00ed p\u0159\u00edchoz\u00ed r\u00e1mce rozd\u011blit do v\u00edce bun\u011bk, pokud je to nutn\u00e9 pro efektivn\u011bj\u0161\u00ed spr\u00e1vu pam\u011bti.",
        incorrect:
          "Opera\u010dn\u00ed syst\u00e9m mus\u00ed r\u00e1mce z p\u0159\u00edjmov\u00e9 fronty zpracov\u00e1vat okam\u017eit\u011b a pam\u011b\u0165 alokovanou pro n\u011b mus\u00ed vracet s\u00ed\u0165ov\u00e9mu rozhran\u00ed ihned po p\u0159ijet\u00ed r\u00e1mce. Nem\u016f\u017ee alokovat nov\u00e9 bloky pam\u011bti pro dal\u0161\u00ed p\u0159\u00edchoz\u00ed r\u00e1mce a pln\u00e9 bloky mus\u00ed b\u00fdt uvoln\u011bny p\u0159ed dal\u0161\u00edm p\u0159\u00edjmem dat. S\u00ed\u0165ov\u00e1 rozhran\u00ed nikdy ned\u011bl\u00ed p\u0159\u00edchoz\u00ed r\u00e1mce do v\u00edce bun\u011bk, proto\u017ee to by komplikovalo spr\u00e1vu pam\u011bti a zvy\u0161ovalo latenci.",
        sectionNumber: "4.3.7",
        sectionTitle: "P\u0159\u00edjmov\u00e1 fronta",
      },
      {
        uuid: "c8c6cfa7-fb29-4daf-af90-33e30308db17",
        correct:
          "Sou\u010dasn\u00e1 s\u00ed\u0165ov\u00e1 rozhran\u00ed s vysokou rychlost\u00ed, jako nap\u0159\u00edklad 10GbE, mohou snadno saturovat jedno procesorov\u00e9 j\u00e1dro kv\u016fli mno\u017estv\u00ed pr\u00e1ce pot\u0159ebn\u00e9 pro zpracov\u00e1n\u00ed ka\u017ed\u00e9ho paketu. Proto modern\u00ed adapt\u00e9ry implementuj\u00ed v\u00edce Tx a Rx front pro zlep\u0161en\u00ed paraleln\u00edho zpracov\u00e1n\u00ed s\u00ed\u0165ov\u00e9ho provozu, kde ka\u017ed\u00e1 fronta m\u00e1 vlastn\u00ed signalizaci ud\u00e1lost\u00ed.",
        incorrect:
          "Sou\u010dasn\u00e1 s\u00ed\u0165ov\u00e1 rozhran\u00ed s vysokou rychlost\u00ed, jako nap\u0159\u00edklad 10GbE, obvykle nemohou saturovat jedno procesorov\u00e9 j\u00e1dro, proto\u017ee modern\u00ed procesory jsou dostate\u010dn\u011b rychl\u00e9. Proto modern\u00ed adapt\u00e9ry obvykle implementuj\u00ed pouze jednu sd\u00edlenou Tx a Rx frontu, \u010d\u00edm\u017e se minimalizuje re\u017eie spojen\u00e1 se spr\u00e1vou v\u00edce front a signalizac\u00ed ud\u00e1lost\u00ed.",
        sectionNumber: "4.3.8",
        sectionTitle: "V\u00edcefrontov\u00e9 adapt\u00e9ry",
      },
      {
        uuid: "99c5d6f7-c537-4fb4-947a-6ae2e9286ef2",
        correct:
          "Opera\u010dn\u00ed syst\u00e9m m\u00e1 za \u00fakol aktivovat a spravovat v\u00edce Tx a Rx front s\u00ed\u0165ov\u00e9ho rozhran\u00ed, p\u0159i\u010dem\u017e obvyklou konfigurac\u00ed je nastaven\u00ed jedn\u00e9 Tx a jedn\u00e9 Rx fronty pro ka\u017ed\u00e9 procesorov\u00e9 j\u00e1dro. Toto uspo\u0159\u00e1d\u00e1n\u00ed umo\u017e\u0148uje distribuci z\u00e1t\u011b\u017ee zpracov\u00e1n\u00ed s\u00ed\u0165ov\u00e9ho provozu mezi r\u016fzn\u00e1 j\u00e1dra, \u010d\u00edm\u017e se zvy\u0161uje celkov\u00e1 propustnost syst\u00e9mu a sni\u017euje latence.",
        incorrect:
          "Opera\u010dn\u00ed syst\u00e9m nem\u00e1 \u017e\u00e1dnou roli v aktivaci a spr\u00e1v\u011b v\u00edce Tx a Rx front s\u00ed\u0165ov\u00e9ho rozhran\u00ed, proto\u017ee toto je pln\u011b \u0159\u00edzeno hardwarem s\u00ed\u0165ov\u00e9 karty. Obvyklou konfigurac\u00ed je sd\u00edlen\u00ed jedin\u00e9 Tx a Rx fronty mezi v\u0161emi procesorov\u00fdmi j\u00e1dry, co\u017e maximalizuje efektivitu vyu\u017eit\u00ed hardwarov\u00fdch zdroj\u016f s\u00ed\u0165ov\u00e9ho rozhran\u00ed.",
        sectionNumber: "4.3.8",
        sectionTitle: "V\u00edcefrontov\u00e9 adapt\u00e9ry",
      },
      {
        uuid: "075e9c72-a971-490e-9fc5-d0eab0b5793a",
        correct:
          "P\u0159i p\u0159\u00edjmu s\u00ed\u0165ov\u00fdch paket\u016f rozhoduje o v\u00fdb\u011bru Rx fronty s\u00ed\u0165ov\u00e9 rozhran\u00ed, kter\u00e9 je schopno filtrovat nebo hashovat r\u00e1mce a roz\u0159azovat je do r\u016fzn\u00fdch front. C\u00edlem tohoto mechanismu je udr\u017eet souvisej\u00edc\u00ed r\u00e1mce pohromad\u011b ve stejn\u00e9 front\u011b, co\u017e zlep\u0161uje lokalitu zpracov\u00e1n\u00ed, a z\u00e1rove\u0148 se sna\u017e\u00ed rovnom\u011brn\u011b zaplnit fronty pro lep\u0161\u00ed rozlo\u017een\u00ed z\u00e1t\u011b\u017ee mezi procesorov\u00e1 j\u00e1dra.",
        incorrect:
          "P\u0159i p\u0159\u00edjmu s\u00ed\u0165ov\u00fdch paket\u016f rozhoduje o v\u00fdb\u011bru Rx fronty opera\u010dn\u00ed syst\u00e9m, kter\u00fd na z\u00e1klad\u011b aktu\u00e1ln\u00edho stavu proces\u016f a zat\u00ed\u017een\u00ed procesorov\u00fdch jader dynamicky alokuje r\u00e1mce do front. C\u00edlem tohoto mechanismu je maximalizovat spravedlivost rozd\u011blen\u00ed s\u00ed\u0165ov\u00fdch zdroj\u016f mezi b\u011b\u017e\u00edc\u00ed procesy a minimalizovat dopad s\u00ed\u0165ov\u00e9ho provozu na interaktivn\u00ed aplikace.",
        sectionNumber: "4.3.8",
        sectionTitle: "V\u00edcefrontov\u00e9 adapt\u00e9ry",
      },
      {
        uuid: "e17c38dd-5ff2-4518-b49c-2cf607fb1a87",
        correct:
          "Bezdr\u00e1tov\u00e9 s\u00edt\u011b WiFi, zalo\u017een\u00e9 na standardech IEEE 802, pracuj\u00ed na principu sd\u00edlen\u00e9ho m\u00e9dia, konkr\u00e9tn\u011b elektromagnetick\u00fdch vln \u0161\u00ed\u0159\u00edc\u00edch se vzduchem, co\u017e \u010din\u00ed \u0161ifrov\u00e1n\u00ed komunikace prakticky povinn\u00fdm pro zaji\u0161t\u011bn\u00ed d\u016fv\u011brnosti a integrity dat p\u0159ed odposlechem a neopr\u00e1vn\u011bn\u00fdm p\u0159\u00edstupem.",
        incorrect:
          "Bezdr\u00e1tov\u00e9 s\u00edt\u011b WiFi, na rozd\u00edl od standard\u016f IEEE 802, vyu\u017e\u00edvaj\u00ed v\u00fdhradn\u011b dedikovan\u00e9 kabelov\u00e9 spoje, \u010d\u00edm\u017e eliminuj\u00ed pot\u0159ebu \u0161ifrov\u00e1n\u00ed, nebo\u0165 fyzick\u00e9 m\u00e9dium samo o sob\u011b zaru\u010duje bezpe\u010dnost komunikace p\u0159ed odposlechem a neopr\u00e1vn\u011bn\u00fdm p\u0159\u00edstupem, a proto je \u0161ifrov\u00e1n\u00ed v WiFi s\u00edt\u00edch zcela voliteln\u00e9.",
        sectionNumber: "4.3.9",
        sectionTitle: "WiFi",
      },
      {
        uuid: "a1743d07-ce89-4da8-a764-35af02652fa4",
        correct:
          "Vzhledem ke sd\u00edlen\u00e9 povaze bezdr\u00e1tov\u00e9ho m\u00e9dia a nutnosti chr\u00e1nit komunikaci \u0161ifrov\u00e1n\u00edm, protokoly WiFi vy\u017eaduj\u00ed komplexn\u00ed autentiza\u010dn\u00ed mechanismy, kter\u00e9 umo\u017e\u0148uj\u00ed klient\u016fm a p\u0159\u00edstupov\u00fdm bod\u016fm vz\u00e1jemn\u011b se autentizovat a ustavit spole\u010dn\u00e9 \u0161ifrovac\u00ed kl\u00ed\u010de, \u010d\u00edm\u017e se minimalizuje riziko \u00fatok\u016f typu man-in-the-middle.",
        incorrect:
          "Vzhledem k jednoduchosti a bezpe\u010dnosti bezdr\u00e1tov\u00e9ho m\u00e9dia, protokoly WiFi nevy\u017eaduj\u00ed komplexn\u00ed autentiza\u010dn\u00ed mechanismy, a proto autentizace klient\u016f a p\u0159\u00edstupov\u00fdch bod\u016f nen\u00ed pro ustaven\u00ed bezpe\u010dn\u00e9ho spojen\u00ed nutn\u00e1 a slou\u017e\u00ed pouze pro administrativn\u00ed \u00fa\u010dely, nikoliv pro ochranu p\u0159ed \u00fatoky typu man-in-the-middle.",
        sectionNumber: "4.3.9",
        sectionTitle: "WiFi",
      },
      {
        uuid: "cfda184b-268d-41e0-95a9-e28c6511af39",
        correct:
          "Implementace protokol\u016f WiFi je distribuov\u00e1na mezi hardware, firmware a software opera\u010dn\u00edho syst\u00e9mu, p\u0159i\u010dem\u017e firmware, b\u011b\u017e\u00edc\u00ed na pomocn\u00e9m procesoru s\u00ed\u0165ov\u00e9ho rozhran\u00ed, se pod\u00edl\u00ed na \u010d\u00e1ste\u010dn\u00e9 realizaci protokolu a software opera\u010dn\u00edho syst\u00e9mu, b\u011b\u017e\u00edc\u00ed na hlavn\u00edm procesoru, zaji\u0161\u0165uje zb\u00fdvaj\u00edc\u00ed funkcionalitu, co\u017e odr\u00e1\u017e\u00ed slo\u017eitost t\u011bchto protokol\u016f.",
        incorrect:
          "Implementace protokol\u016f WiFi je soust\u0159ed\u011bna v\u00fdhradn\u011b do softwaru opera\u010dn\u00edho syst\u00e9mu, b\u011b\u017e\u00edc\u00edho na hlavn\u00edm procesoru, co\u017e zjednodu\u0161uje architekturu a umo\u017e\u0148uje snadn\u011bj\u0161\u00ed aktualizace a modifikace protokolu, zat\u00edmco hardware a firmware s\u00ed\u0165ov\u00e9ho rozhran\u00ed se pod\u00edlej\u00ed pouze na z\u00e1kladn\u00edch funkc\u00edch fyzick\u00e9 vrstvy.",
        sectionNumber: "4.3.9",
        sectionTitle: "WiFi",
      },
    ],
  };
