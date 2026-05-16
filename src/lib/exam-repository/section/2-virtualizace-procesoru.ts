import type { Section } from '../../common/types';

export const section2_virtualizace_procesoru: Section = {
    uuid: "e5677e54-477b-4271-a72d-865ee0251acb",
    sectionNumber: "2",
    sectionTitle: "Virtualizace procesoru",
    statements: [
      {
        uuid: "79503b05-27bd-48eb-a03b-f218a429566d",
        correct:
          "Procesory vykon\u00e1vaj\u00ed instrukce, \u010d\u00edm\u017e realizuj\u00ed v\u00fdpo\u010det, a nejjednodu\u0161\u0161\u00ed t\u0159\u00eddou instrukc\u00ed jsou aritmetick\u00e9 a logick\u00e9 instrukce, kter\u00e9 prov\u00e1d\u00ed aritmeticko-logick\u00e1 jednotka (ALU) a zahrnuj\u00ed s\u010d\u00edt\u00e1n\u00ed, ode\u010d\u00edt\u00e1n\u00ed, n\u00e1soben\u00ed, d\u011blen\u00ed, bitov\u00e9 operace jako AND, OR, XOR a bitov\u00e9 posuvy, a tak\u00e9 srovn\u00e1n\u00ed dvou hodnot pro rovnost nebo nerovnost.",
        incorrect:
          "Procesory vykon\u00e1vaj\u00ed instrukce, \u010d\u00edm\u017e realizuj\u00ed v\u00fdpo\u010det, a nejjednodu\u0161\u0161\u00ed t\u0159\u00eddou instrukc\u00ed jsou instrukce pro spr\u00e1vu pam\u011bti, kter\u00e9 prov\u00e1d\u00ed pam\u011b\u0165ov\u00e1 jednotka (MU) a zahrnuj\u00ed pouze operace s\u010d\u00edt\u00e1n\u00ed a ode\u010d\u00edt\u00e1n\u00ed, a tak\u00e9 bitov\u00e9 operace jako AND, OR a XOR, ale nezahrnuj\u00ed srovn\u00e1n\u00ed hodnot.",
        sectionNumber: "2.1.1",
        sectionTitle: "V\u00fdpo\u010det",
      },
      {
        uuid: "c8508a4c-07a3-4451-84d5-0d87a1939646",
        correct:
          "Mezi instrukce pro \u0159\u00edzen\u00ed toku programu pat\u0159\u00ed podm\u00edn\u011bn\u00e9 skoky a nep\u0159\u00edm\u00e9 skoky, kter\u00e9 procesoru umo\u017e\u0148uj\u00ed rozhodovat o tom, kterou instrukc\u00ed bude v\u00fdpo\u010det pokra\u010dovat na z\u00e1klad\u011b aktu\u00e1ln\u00edho stavu programu nebo extern\u00edch ud\u00e1lost\u00ed, \u010d\u00edm\u017e se dosahuje flexibility a dynamiky prov\u00e1d\u011bn\u00e9ho k\u00f3du.",
        incorrect:
          "Mezi instrukce pro \u0159\u00edzen\u00ed toku programu pat\u0159\u00ed pouze p\u0159\u00edm\u00e9 skoky a bezpodm\u00edne\u010dn\u00e9 skoky, kter\u00e9 procesoru umo\u017e\u0148uj\u00ed sekven\u010dn\u00ed prov\u00e1d\u011bn\u00ed instrukc\u00ed bez mo\u017enosti rozhodov\u00e1n\u00ed o dal\u0161\u00edm kroku na z\u00e1klad\u011b aktu\u00e1ln\u00edho stavu programu, \u010d\u00edm\u017e se zaji\u0161\u0165uje rigidita a prediktabilita prov\u00e1d\u011bn\u00e9ho k\u00f3du.",
        sectionNumber: "2.1.1",
        sectionTitle: "V\u00fdpo\u010det",
      },
      {
        uuid: "2263e0e9-b538-4f55-a7be-684377fe6b75",
        correct:
          "Instrukce pro realizaci podprogram\u016f, a\u010dkoli nejsou nezbytn\u00e9 pro z\u00e1kladn\u00ed funk\u010dnost procesoru, usnad\u0148uj\u00ed abstrakci a zahrnuj\u00ed operace s hardwarov\u00fdm z\u00e1sobn\u00edkem pro ukl\u00e1d\u00e1n\u00ed a obnovov\u00e1n\u00ed kontextu, instrukce pro aktivaci podprogram\u016f a instrukce pro n\u00e1vrat z podprogram\u016f, co\u017e zjednodu\u0161uje strukturovan\u00e9 programov\u00e1n\u00ed.",
        incorrect:
          "Instrukce pro realizaci podprogram\u016f jsou nezbytn\u00e9 pro z\u00e1kladn\u00ed funk\u010dnost procesoru a komplikuj\u00ed abstrakci, zahrnuj\u00ed pouze operace s registry pro ukl\u00e1d\u00e1n\u00ed a obnovov\u00e1n\u00ed kontextu, a instrukce pro aktivaci a n\u00e1vrat z podprogram\u016f jsou nahrazeny slo\u017eit\u00fdmi sekvencemi podm\u00edn\u011bn\u00fdch skok\u016f, co\u017e komplikuje strukturovan\u00e9 programov\u00e1n\u00ed.",
        sectionNumber: "2.1.1",
        sectionTitle: "V\u00fdpo\u010det",
      },
      {
        uuid: "f86b0af6-e1bb-4f59-b933-8af2a8e7893a",
        correct:
          "Registry i pam\u011b\u0165 slou\u017e\u00ed v po\u010d\u00edta\u010di k ukl\u00e1d\u00e1n\u00ed \u010d\u00edsel, p\u0159i\u010dem\u017e kl\u00ed\u010dov\u00fdm rozd\u00edlem je, \u017ee registry jsou adresov\u00e1ny p\u0159\u00edmo v instrukc\u00edch a jejich adresy nelze dynamicky vypo\u010d\u00edt\u00e1vat jako u pam\u011bti, a d\u00e1le, registry pracuj\u00ed s daty monoliticky na \u00farovni slov, nikoliv jednotliv\u00fdch bajt\u016f, co\u017e zjednodu\u0161uje a zrychluje manipulaci s daty ulo\u017een\u00fdmi v registrech oproti pam\u011bti, kde je nutn\u00e9 pracovat s jednotliv\u00fdmi bajty nebo skl\u00e1dat slova z bajt\u016f.",
        incorrect:
          "Registry a pam\u011b\u0165 slou\u017e\u00ed v po\u010d\u00edta\u010di k ukl\u00e1d\u00e1n\u00ed \u010d\u00edsel, p\u0159i\u010dem\u017e kl\u00ed\u010dov\u00fdm rozd\u00edlem je, \u017ee registry jsou adresov\u00e1ny nep\u0159\u00edmo pomoc\u00ed slo\u017eit\u00fdch adresn\u00edch sch\u00e9mat a jejich adresy lze dynamicky vypo\u010d\u00edt\u00e1vat jako u pam\u011bti, a d\u00e1le, registry pracuj\u00ed s daty po jednotliv\u00fdch bajtech, nikoliv monoliticky na \u00farovni slov, co\u017e komplikuje a zpomaluje manipulaci s daty ulo\u017een\u00fdmi v registrech oproti pam\u011bti, kde je pr\u00e1ce se slovy efektivn\u011bj\u0161\u00ed.",
        sectionNumber: "2.1.2",
        sectionTitle: "Registry",
      },
      {
        uuid: "a80a0b43-9425-4f3d-9ce0-86f16f564393",
        correct:
          "Programov\u00fd \u010d\u00edta\u010d (PC) je speci\u00e1ln\u00ed registr v procesoru, kter\u00fd uchov\u00e1v\u00e1 virtu\u00e1ln\u00ed adresu instrukce, je\u017e m\u00e1 b\u00fdt aktu\u00e1ln\u011b vykon\u00e1na, a t\u00edmto zp\u016fsobem ur\u010duje sekvenci prov\u00e1d\u011bn\u00ed instrukc\u00ed programu, p\u0159i\u010dem\u017e jeho hodnota je typicky modifikov\u00e1na instrukcemi \u0159\u00edzen\u00ed toku programu, jako jsou skoky a vol\u00e1n\u00ed podprogram\u016f, a b\u011b\u017en\u00e9 aritmetick\u00e9 instrukce nemaj\u00ed p\u0159\u00edm\u00fd vliv na jeho obsah, aby byla zaji\u0161t\u011bna kontrola nad tokem prov\u00e1d\u011bn\u00ed programu.",
        incorrect:
          "Programov\u00fd \u010d\u00edta\u010d (PC) je univerz\u00e1ln\u00ed registr v procesoru, kter\u00fd uchov\u00e1v\u00e1 fyzickou adresu dat, je\u017e maj\u00ed b\u00fdt aktu\u00e1ln\u011b zpracov\u00e1na, a t\u00edmto zp\u016fsobem ur\u010duje datov\u00fd tok programu, p\u0159i\u010dem\u017e jeho hodnota je libovoln\u011b modifikov\u00e1na b\u011b\u017en\u00fdmi aritmetick\u00fdmi instrukcemi, a instrukce \u0159\u00edzen\u00ed toku programu nemaj\u00ed \u017e\u00e1dn\u00fd vliv na jeho obsah, proto\u017ee jeho hlavn\u00edm \u00fa\u010delem je optimalizace datov\u00fdch operac\u00ed, nikoliv \u0159\u00edzen\u00ed sekvence prov\u00e1d\u011bn\u00ed programu.",
        sectionNumber: "2.1.2",
        sectionTitle: "Registry",
      },
      {
        uuid: "ecc83559-dd11-4fa1-b46a-3706b6afc5a7",
        correct:
          "Instrukce strojov\u00e9ho k\u00f3du je definov\u00e1na jako element\u00e1rn\u00ed p\u0159\u00edkaz, co\u017e znamen\u00e1, \u017ee p\u0159edstavuje nejmen\u0161\u00ed a d\u00e1le ned\u011blitelnou jednotku \u010dinnosti, kterou lze procesoru zadat k proveden\u00ed konkr\u00e9tn\u00ed operace, a instrukce jako p\u0159\u00edkaz procesor p\u0159\u00edmo \u0159\u00edd\u00ed a p\u0159ikazuje mu proveden\u00ed t\u00e9to akce.",
        incorrect:
          "Instrukce strojov\u00e9ho k\u00f3du je definov\u00e1na jako komplexn\u00ed makrop\u0159\u00edkaz, co\u017e znamen\u00e1, \u017ee p\u0159edstavuje nejv\u011bt\u0161\u00ed a d\u00e1le d\u011blitelnou jednotku \u010dinnosti, kterou lze procesoru zadat k proveden\u00ed abstraktn\u00ed operace, a instrukce jako doporu\u010den\u00ed procesor pouze navrhuje a doporu\u010duje mu proveden\u00ed t\u00e9to akce.",
        sectionNumber: "2.1.3",
        sectionTitle: "Instrukce",
      },
      {
        uuid: "5db6f6f7-9388-4eff-a549-f78e35afa1c1",
        correct:
          "A\u010dkoliv mnemonick\u00fd z\u00e1pis strojov\u00e9ho k\u00f3du a jazyk symbolick\u00fdch adres sd\u00edlej\u00ed podobnou syntaxi a vizu\u00e1ln\u011b se mohou jevit srovnateln\u00e9, je d\u016fle\u017eit\u00e9 si uv\u011bdomit, \u017ee mnemonick\u00fd z\u00e1pis je podmno\u017einou jazyka symbolick\u00fdch adres a v jazyce symbolick\u00fdch adres nemus\u00ed b\u00fdt v\u017edy zaps\u00e1ny p\u0159\u00edmo instrukce strojov\u00e9ho k\u00f3du.",
        incorrect:
          "Mnemonick\u00fd z\u00e1pis strojov\u00e9ho k\u00f3du a jazyk symbolick\u00fdch adres jsou zcela identick\u00e9 koncepty, kter\u00e9 se li\u0161\u00ed pouze form\u00e1ln\u00edm ozna\u010den\u00edm, sd\u00edlej\u00ed naprosto shodnou syntaxi a jazyk symbolick\u00fdch adres je v\u017edy p\u0159\u00edm\u00fdm a doslovn\u00fdm z\u00e1pisem instrukc\u00ed strojov\u00e9ho k\u00f3du bez jak\u00fdchkoliv odli\u0161nost\u00ed.",
        sectionNumber: "2.1.3",
        sectionTitle: "Instrukce",
      },
      {
        uuid: "794fb96e-4741-4d28-bc96-b647939f1533",
        correct:
          "Pojem operace v kontextu strojov\u00e9ho k\u00f3du se nevztahuje k jedin\u00e9 konkr\u00e9tn\u00ed instrukci, ale ozna\u010duje celou skupinu p\u0159\u00edbuzn\u00fdch instrukc\u00ed, kter\u00e9 charakterizuje spole\u010dn\u00e1 funk\u010dnost, nap\u0159\u00edklad s\u010d\u00edt\u00e1n\u00ed, a tato operace obvykle specifikuje po\u010det a datov\u00fd typ operand\u016f, s nimi\u017e instrukce v r\u00e1mci t\u00e9to skupiny pracuj\u00ed.",
        incorrect:
          "Pojem operace v kontextu strojov\u00e9ho k\u00f3du se vztahuje v\u00fdhradn\u011b k jedin\u00e9 a unik\u00e1tn\u00ed instrukci, kter\u00e1 je v r\u00e1mci instruk\u010dn\u00ed sady procesoru definov\u00e1na, a tato operace explicitn\u011b ur\u010duje pouze specifickou funk\u010dnost dan\u00e9 instrukce, nikoliv v\u0161ak po\u010det nebo datov\u00fd typ operand\u016f, s nimi\u017e m\u00e1 pracovat.",
        sectionNumber: "2.1.3",
        sectionTitle: "Instrukce",
      },
      {
        uuid: "ecfa156f-4b11-490d-88f6-747f9e93fe66",
        correct:
          "Efekt instrukce v kontextu opera\u010dn\u00edch syst\u00e9m\u016f lze ch\u00e1pat jako element\u00e1rn\u00ed zm\u011bnu stavu syst\u00e9mu, kter\u00e1 se prim\u00e1rn\u011b projevuje na stavu procesoru, ale m\u016f\u017ee tak\u00e9 zahrnovat modifikace pam\u011bti nebo p\u0159ipojen\u00fdch periferi\u00ed, v z\u00e1vislosti na specifick\u00e9 instrukci a jej\u00ed zam\u00fd\u0161len\u00e9 funkci v r\u00e1mci programu.",
        incorrect:
          "Efekt instrukce v kontextu opera\u010dn\u00edch syst\u00e9m\u016f je v\u00fdhradn\u011b omezen na zm\u011bnu stavu procesoru a nikdy nezasahuje do stavu pam\u011bti nebo p\u0159ipojen\u00fdch periferi\u00ed, jeliko\u017e instrukce jsou navr\u017eeny tak, aby operovaly pouze s intern\u00edmi registry procesoru pro maximalizaci v\u00fdkonu a minimalizaci vedlej\u0161\u00edch efekt\u016f.",
        sectionNumber: "2.1.4",
        sectionTitle: "Efekt instrukce",
      },
      {
        uuid: "b8c33f0d-1bce-4361-bcdb-39232fd6ecc1",
        correct:
          "Program v opera\u010dn\u00edm syst\u00e9mu lze definovat jako posloupnost instrukc\u00ed, kde ka\u017ed\u00e1 instrukce zp\u016fsobuje element\u00e1rn\u00ed zm\u011bnu stavu syst\u00e9mu, a celkov\u00fd v\u00fdpo\u010det programu p\u0159edstavuje postupnou manipulaci se stavem, kter\u00e1 transformuje vstupy, je\u017e jsou po\u010d\u00e1te\u010dn\u00ed sou\u010d\u00e1st\u00ed stavu, na po\u017eadovan\u00e9 v\u00fdstupy, kter\u00e9 se stanou sou\u010d\u00e1st\u00ed stavu na konci v\u00fdpo\u010dtu.",
        incorrect:
          "Program v opera\u010dn\u00edm syst\u00e9mu je prim\u00e1rn\u011b ch\u00e1p\u00e1n jako statick\u00fd popis algoritm\u016f a datov\u00fdch struktur, p\u0159i\u010dem\u017e jeho proveden\u00ed nezahrnuje dynamick\u00e9 zm\u011bny stavu syst\u00e9mu, a interakce s vstupy a v\u00fdstupy je \u0159e\u0161ena v\u00fdhradn\u011b prost\u0159ednictv\u00edm extern\u00edch vol\u00e1n\u00ed opera\u010dn\u00edho syst\u00e9mu, nikoli manipulac\u00ed se stavem procesoru a pam\u011bti.",
        sectionNumber: "2.1.4",
        sectionTitle: "Efekt instrukce",
      },
      {
        uuid: "48a8c3c6-8a65-41ad-a321-781a3d71b08b",
        correct:
          "U interaktivn\u00edch program\u016f v opera\u010dn\u00edch syst\u00e9mech je smyslem manipulace se stavem syst\u00e9mu reagovat na vn\u011bj\u0161\u00ed zm\u011bny stavu, jako je stisk kl\u00e1vesy u\u017eivatelem, a vyvolat programem \u0159\u00edzen\u00e9 zm\u011bny stavu, nap\u0159\u00edklad aktualizaci obsahu obrazovky, \u010d\u00edm\u017e se demonstruje, \u017ee interaktivita je dosa\u017eena skrze reakci na vn\u011bj\u0161\u00ed ud\u00e1losti prom\u00edtaj\u00edc\u00ed se do zm\u011bn stavu.",
        incorrect:
          "Interaktivn\u00ed programy v opera\u010dn\u00edch syst\u00e9mech pracuj\u00ed na principu p\u0159\u00edm\u00e9 manipulace s hardwarem a obch\u00e1zej\u00ed koncept stavu syst\u00e9mu, p\u0159i\u010dem\u017e interakce s u\u017eivatelem je realizov\u00e1na pomoc\u00ed specializovan\u00fdch hardwarov\u00fdch p\u0159eru\u0161en\u00ed, kter\u00e1 nemaj\u00ed vliv na celkov\u00fd stav syst\u00e9mu, a program tak reaguje na vn\u011bj\u0161\u00ed ud\u00e1losti bez zm\u011bny intern\u00edho stavu.",
        sectionNumber: "2.1.4",
        sectionTitle: "Efekt instrukce",
      },
      {
        uuid: "19a0245f-a243-41ec-a334-91f68f8c9518",
        correct:
          "Program se skl\u00e1d\u00e1 z posloupnosti instrukc\u00ed ulo\u017een\u00fdch v opera\u010dn\u00ed pam\u011bti, kter\u00e9 procesor interpretuje a prov\u00e1d\u00ed v z\u00e1sad\u011b sekven\u010dn\u00edm zp\u016fsobem, postupuj\u00edc od instrukc\u00ed um\u00edst\u011bn\u00fdch na ni\u017e\u0161\u00edch pam\u011b\u0165ov\u00fdch adres\u00e1ch k instrukc\u00edm na adres\u00e1ch vy\u0161\u0161\u00edch, p\u0159i\u010dem\u017e kl\u00ed\u010dovou v\u00fdjimkou z tohoto line\u00e1rn\u00edho toku jsou instrukce skoku, kter\u00e9 umo\u017e\u0148uj\u00ed implementaci \u0159\u00eddic\u00edch struktur, jako jsou podm\u00edn\u011bn\u00e9 p\u0159\u00edkazy a programov\u00e9 smy\u010dky, a t\u00edm i neline\u00e1rn\u00ed prov\u00e1d\u011bn\u00ed k\u00f3du.",
        incorrect:
          "Program se skl\u00e1d\u00e1 z posloupnosti instrukc\u00ed ulo\u017een\u00fdch v opera\u010dn\u00ed pam\u011bti, kter\u00e9 procesor interpretuje a prov\u00e1d\u00ed v\u00fdhradn\u011b sekven\u010dn\u00edm zp\u016fsobem, postupuj\u00edc od instrukc\u00ed um\u00edst\u011bn\u00fdch na vy\u0161\u0161\u00edch pam\u011b\u0165ov\u00fdch adres\u00e1ch k instrukc\u00edm na adres\u00e1ch ni\u017e\u0161\u00edch, bez jak\u00fdchkoliv v\u00fdjimek, co\u017e znamen\u00e1, \u017ee instrukce skoku nemaj\u00ed \u017e\u00e1dn\u00fd vliv na tok programu a program se v\u017edy vykon\u00e1v\u00e1 line\u00e1rn\u011b sm\u011brem k ni\u017e\u0161\u00edm adres\u00e1m.",
        sectionNumber: "2.1.5",
        sectionTitle: "Program",
      },
      {
        uuid: "d090d8b8-92a6-4aba-a40c-f9b5678642cd",
        correct:
          "V kontextu b\u011bhu programu se p\u0159ev\u00e1\u017en\u00e1 \u010d\u00e1st instrukc\u00ed zpracov\u00e1v\u00e1 v souladu s rostouc\u00edmi virtu\u00e1ln\u00edmi adresami pam\u011bti, jeliko\u017e instrukce, kter\u00e9 nespadaj\u00ed do kategorie instrukc\u00ed skoku, standardn\u011b modifikuj\u00ed programov\u00fd \u010d\u00edta\u010d tak, aby ukazoval na pam\u011b\u0165ov\u00e9 m\u00edsto bezprost\u0159edn\u011b n\u00e1sleduj\u00edc\u00ed instrukci v pam\u011bti, co\u017e implikuje postupn\u00e9 prov\u00e1d\u011bn\u00ed k\u00f3du sm\u011brem k vy\u0161\u0161\u00edm adres\u00e1m.",
        incorrect:
          "V kontextu b\u011bhu programu se p\u0159ev\u00e1\u017en\u00e1 \u010d\u00e1st instrukc\u00ed zpracov\u00e1v\u00e1 v souladu s klesaj\u00edc\u00edmi virtu\u00e1ln\u00edmi adresami pam\u011bti, jeliko\u017e instrukce, kter\u00e9 nespadaj\u00ed do kategorie instrukc\u00ed skoku, standardn\u011b modifikuj\u00ed programov\u00fd \u010d\u00edta\u010d tak, aby ukazoval na pam\u011b\u0165ov\u00e9 m\u00edsto bezprost\u0159edn\u011b p\u0159edch\u00e1zej\u00edc\u00ed instrukci v pam\u011bti, co\u017e implikuje postupn\u00e9 prov\u00e1d\u011bn\u00ed k\u00f3du sm\u011brem k ni\u017e\u0161\u00edm adres\u00e1m.",
        sectionNumber: "2.1.5",
        sectionTitle: "Program",
      },
      {
        uuid: "d221cdfa-50f0-4dcc-8bf4-ef183366db05",
        correct:
          "Instrukce skoku hraj\u00ed z\u00e1sadn\u00ed roli p\u0159i odchylk\u00e1ch od standardn\u00edho sekven\u010dn\u00edho toku prov\u00e1d\u011bn\u00ed programu, nebo\u0165 umo\u017e\u0148uj\u00ed programov\u011b p\u0159esko\u010dit bloky instrukc\u00ed, typicky vyu\u017e\u00edvan\u00e9 v implementaci selek\u010dn\u00edch \u0159\u00eddic\u00edch struktur jako 'if' p\u0159\u00edkazy, a sou\u010dasn\u011b umo\u017e\u0148uj\u00ed n\u00e1vrat k ji\u017e proveden\u00fdm instrukc\u00edm, co\u017e je kl\u00ed\u010dov\u00e9 pro implementaci iterativn\u00edch \u0159\u00eddic\u00edch struktur, jako jsou cykly 'while', a t\u00edm i efektivn\u00ed opakov\u00e1n\u00ed k\u00f3du.",
        incorrect:
          "Instrukce skoku nemaj\u00ed \u017e\u00e1dn\u00fd vliv na standardn\u00ed sekven\u010dn\u00ed tok prov\u00e1d\u011bn\u00ed programu a slou\u017e\u00ed v\u00fdhradn\u011b k potvrzen\u00ed line\u00e1rn\u00edho postupu prov\u00e1d\u011bn\u00ed instrukc\u00ed od ni\u017e\u0161\u00edch k vy\u0161\u0161\u00edm adres\u00e1m, p\u0159i\u010dem\u017e nemohou b\u00fdt vyu\u017eity k implementaci selek\u010dn\u00edch ani iterativn\u00edch \u0159\u00eddic\u00edch struktur, a tedy program se v\u017edy vykon\u00e1v\u00e1 striktn\u011b sekven\u010dn\u011b bez mo\u017enosti odch\u00fdlen\u00ed toku.",
        sectionNumber: "2.1.5",
        sectionTitle: "Program",
      },
      {
        uuid: "f676c33c-9b6b-43ae-9f9a-ef0031faaada",
        correct:
          "Aktivace podprogramu, co\u017e je specializovan\u00fd typ skoku v r\u00e1mci programu, vy\u017eaduje ulo\u017een\u00ed \u010d\u00e1sti aktu\u00e1ln\u00edho stavu procesoru a vyhrazen\u00ed pam\u011b\u0165ov\u00e9ho prostoru pro lok\u00e1ln\u00ed prom\u011bnn\u00e9 podprogramu, co\u017e umo\u017e\u0148uje opakovan\u00e9 pou\u017eit\u00ed podprogramu z r\u016fzn\u00fdch \u010d\u00e1st\u00ed programu a spr\u00e1vn\u00fd n\u00e1vrat \u0159\u00edzen\u00ed po jeho dokon\u010den\u00ed.",
        incorrect:
          "Aktivace podprogramu, co\u017e je specializovan\u00fd typ skoku v r\u00e1mci programu, vy\u017eaduje ulo\u017een\u00ed cel\u00e9ho aktu\u00e1ln\u00edho stavu procesoru a vyhrazen\u00ed pam\u011b\u0165ov\u00e9ho prostoru pro glob\u00e1ln\u00ed prom\u011bnn\u00e9 podprogramu, co\u017e umo\u017e\u0148uje jednor\u00e1zov\u00e9 pou\u017eit\u00ed podprogramu z jedn\u00e9 \u010d\u00e1sti programu a spr\u00e1vn\u00fd n\u00e1vrat \u0159\u00edzen\u00ed po jeho dokon\u010den\u00ed.",
        sectionNumber: "2.1.6",
        sectionTitle: "Z\u00e1sobn\u00edk",
      },
      {
        uuid: "0226d491-36e0-4aca-bba4-f2ff616868b0",
        correct:
          "Mechanismus z\u00e1sobn\u00edk, implementovan\u00fd hardwarov\u011b, hraje kl\u00ed\u010dovou roli p\u0159i aktivaci podprogram\u016f, jeliko\u017e slou\u017e\u00ed k ulo\u017een\u00ed n\u00e1vratov\u00e9 adresy a lok\u00e1ln\u00edch dat podprogramu v souvisl\u00e9 oblasti virtu\u00e1ln\u00edho adresn\u00edho prostoru, p\u0159i\u010dem\u017e rozsah z\u00e1sobn\u00edku je dynamicky ur\u010den ukazatelem vrcholu z\u00e1sobn\u00edku a pevn\u00fdm dnem z\u00e1sobn\u00edku.",
        incorrect:
          "Mechanismus halda, implementovan\u00fd softwarov\u011b, hraje kl\u00ed\u010dovou roli p\u0159i aktivaci podprogram\u016f, jeliko\u017e slou\u017e\u00ed k ulo\u017een\u00ed n\u00e1vratov\u00e9 adresy a lok\u00e1ln\u00edch dat podprogramu v nesouvisl\u00e9 oblasti fyzick\u00e9ho adresov\u00e9ho prostoru, p\u0159i\u010dem\u017e rozsah haldy je staticky ur\u010den program\u00e1torem a flexibiln\u00edm vrcholem haldy.",
        sectionNumber: "2.1.6",
        sectionTitle: "Z\u00e1sobn\u00edk",
      },
      {
        uuid: "374cb028-346a-49fb-863d-d51d5a2c64a5",
        correct:
          "Podprogramy, definovan\u00e9 jako ucelen\u00e9 bloky instrukc\u00ed pro pomocn\u00e9 v\u00fdpo\u010dty, jsou navr\u017eeny pro opakovan\u00e9 pou\u017eit\u00ed v r\u00e1mci programu nebo pro vol\u00e1n\u00ed z r\u016fzn\u00fdch kontext\u016f, \u010d\u00edm\u017e umo\u017e\u0148uj\u00ed modularizaci k\u00f3du a efektivn\u00ed spr\u00e1vu v\u00fdpo\u010detn\u00edch \u00faloh, a jejich aktivace je realizov\u00e1na pomoc\u00ed mechanismu z\u00e1sobn\u00edku pro spr\u00e1vu n\u00e1vrat\u016f a lok\u00e1ln\u00edch dat.",
        incorrect:
          "Podprogramy, definovan\u00e9 jako ucelen\u00e9 bloky instrukc\u00ed pro hlavn\u00ed v\u00fdpo\u010dty, jsou navr\u017eeny pro jednor\u00e1zov\u00e9 pou\u017eit\u00ed na za\u010d\u00e1tku programu a vol\u00e1n\u00ed z jednoho kontextu, \u010d\u00edm\u017e umo\u017e\u0148uj\u00ed centralizaci k\u00f3du a neefektivn\u00ed spr\u00e1vu v\u00fdpo\u010detn\u00edch \u00faloh, a jejich aktivace je realizov\u00e1na pomoc\u00ed mechanismu fronty pro spr\u00e1vu n\u00e1vrat\u016f a lok\u00e1ln\u00edch dat.",
        sectionNumber: "2.1.6",
        sectionTitle: "Z\u00e1sobn\u00edk",
      },
      {
        uuid: "a3109f9f-ad21-4b2a-8f1f-070d3bc33bbd",
        correct:
          "Z\u00e1sobn\u00edk typick\u00e9ho programu v opera\u010dn\u00edm syst\u00e9mu je implementov\u00e1n jako sekvence aktiva\u010dn\u00edch z\u00e1znam\u016f, p\u0159i\u010dem\u017e ka\u017ed\u00fd z\u00e1znam odpov\u00edd\u00e1 aktivaci podprogramu, kter\u00e1 je\u0161t\u011b nebyla dokon\u010dena. D\u00edky principu LIFO, kdy posledn\u00ed volan\u00fd podprogram kon\u010d\u00ed jako prvn\u00ed, je z\u00e1sobn\u00edk ide\u00e1ln\u00ed datovou strukturou pro spr\u00e1vu vol\u00e1n\u00ed a n\u00e1vrat\u016f podprogram\u016f, v\u010detn\u011b rekurzivn\u00edch vol\u00e1n\u00ed, a zaji\u0161\u0165uje tak \u0159\u00e1dn\u00e9 prov\u00e1d\u011bn\u00ed programov\u00e9ho k\u00f3du.",
        incorrect:
          "Z\u00e1sobn\u00edk typick\u00e9ho programu v opera\u010dn\u00edm syst\u00e9mu je implementov\u00e1n jako fronta aktiva\u010dn\u00edch z\u00e1znam\u016f, p\u0159i\u010dem\u017e ka\u017ed\u00fd z\u00e1znam odpov\u00edd\u00e1 aktivaci podprogramu, kter\u00e1 je\u0161t\u011b nebyla dokon\u010dena. D\u00edky principu FIFO, kdy prvn\u00ed volan\u00fd podprogram kon\u010d\u00ed jako prvn\u00ed, je fronta ide\u00e1ln\u00ed datovou strukturou pro spr\u00e1vu vol\u00e1n\u00ed a n\u00e1vrat\u016f podprogram\u016f, v\u010detn\u011b rekurzivn\u00edch vol\u00e1n\u00ed, a zaji\u0161\u0165uje tak \u0159\u00e1dn\u00e9 prov\u00e1d\u011bn\u00ed programov\u00e9ho k\u00f3du.",
        sectionNumber: "2.1.7",
        sectionTitle: "Aktiva\u010dn\u00ed z\u00e1znam",
      },
      {
        uuid: "4753e6e6-237f-4eab-a47a-726d07fed449",
        correct:
          "Orientace z\u00e1sobn\u00edku v pam\u011bti, tedy zda roste sm\u011brem k vy\u0161\u0161\u00edm nebo ni\u017e\u0161\u00edm adres\u00e1m, nen\u00ed univerz\u00e1ln\u011b stanovena a z\u00e1vis\u00ed na konkr\u00e9tn\u00ed architektu\u0159e procesoru. N\u011bkter\u00e9 procesory, jako nap\u0159\u00edklad architektura x86, implementuj\u00ed z\u00e1sobn\u00edky, kter\u00e9 rostou sm\u011brem k ni\u017e\u0161\u00edm pam\u011b\u0165ov\u00fdm adres\u00e1m, co\u017e znamen\u00e1, \u017ee nov\u011b volan\u00e9 podprogramy a jejich aktiva\u010dn\u00ed z\u00e1znamy jsou umis\u0165ov\u00e1ny na adresy s \u010d\u00edseln\u011b men\u0161\u00ed hodnotou.",
        incorrect:
          "Orientace z\u00e1sobn\u00edku v pam\u011bti je univerz\u00e1ln\u011b stanovena tak, \u017ee v\u017edy roste sm\u011brem k vy\u0161\u0161\u00edm adres\u00e1m, nez\u00e1visle na architektu\u0159e procesoru. V\u0161echny procesory, v\u010detn\u011b architektury x86, implementuj\u00ed z\u00e1sobn\u00edky, kter\u00e9 rostou sm\u011brem k vy\u0161\u0161\u00edm pam\u011b\u0165ov\u00fdm adres\u00e1m, co\u017e znamen\u00e1, \u017ee nov\u011b volan\u00e9 podprogramy a jejich aktiva\u010dn\u00ed z\u00e1znamy jsou umis\u0165ov\u00e1ny na adresy s \u010d\u00edseln\u011b v\u011bt\u0161\u00ed hodnotou.",
        sectionNumber: "2.1.7",
        sectionTitle: "Aktiva\u010dn\u00ed z\u00e1znam",
      },
      {
        uuid: "9d5caefc-7d65-4682-92c0-37ec56677229",
        correct:
          "Aktiva\u010dn\u00ed z\u00e1znam na z\u00e1sobn\u00edku typicky obsahuje nejen lok\u00e1ln\u00ed prom\u011bnn\u00e9 podprogramu, ale i ulo\u017een\u00e9 registry procesoru, n\u00e1vratovou adresu pro pokra\u010dov\u00e1n\u00ed v volaj\u00edc\u00edm podprogramu a ukazatel r\u00e1mce, kter\u00fd slou\u017e\u00ed k obnoven\u00ed stavu z\u00e1sobn\u00edku po n\u00e1vratu z podprogramu, zejm\u00e9na v p\u0159\u00edpadech, kdy velikost r\u00e1mce nen\u00ed staticky zn\u00e1ma kv\u016fli nap\u0159\u00edklad alokaci prom\u011bnn\u00e9 d\u00e9lky.",
        incorrect:
          "Aktiva\u010dn\u00ed z\u00e1znam na z\u00e1sobn\u00edku typicky obsahuje pouze lok\u00e1ln\u00ed prom\u011bnn\u00e9 podprogramu a neobsahuje ulo\u017een\u00e9 registry procesoru, n\u00e1vratovou adresu ani ukazatel r\u00e1mce, proto\u017ee tyto informace jsou spravov\u00e1ny v\u00fdhradn\u011b opera\u010dn\u00edm syst\u00e9mem mimo z\u00e1sobn\u00edk, a ukazatel r\u00e1mce je irelevantn\u00ed i v p\u0159\u00edpadech alokace prom\u011bnn\u00e9 d\u00e9lky, jeliko\u017e velikost r\u00e1mce je v\u017edy staticky zn\u00e1ma.",
        sectionNumber: "2.1.7",
        sectionTitle: "Aktiva\u010dn\u00ed z\u00e1znam",
      },
      {
        uuid: "63c83969-013f-4bfc-8790-3a4c381eddd0",
        correct:
          "V\u00fdpo\u010det v kontextu opera\u010dn\u00edch syst\u00e9m\u016f je definov\u00e1n jako posloupnost stav\u016f, respektive jako s\u00e9rie postupn\u00fdch zm\u011bn stavu syst\u00e9mu. Ka\u017ed\u00fd n\u00e1sleduj\u00edc\u00ed stav je transformac\u00ed p\u0159edchoz\u00edho stavu na z\u00e1klad\u011b prov\u00e1d\u011bn\u00e9ho programu a vstupn\u00edch dat. Toto pojet\u00ed umo\u017e\u0148uje detailn\u00ed sledov\u00e1n\u00ed a \u0159\u00edzen\u00ed b\u011bhu program\u016f a proces\u016f v opera\u010dn\u00edm syst\u00e9mu.",
        incorrect:
          "V\u00fdpo\u010det v kontextu opera\u010dn\u00edch syst\u00e9m\u016f je definov\u00e1n jako nem\u011bnn\u00fd stav syst\u00e9mu, kter\u00fd z\u016fst\u00e1v\u00e1 konstantn\u00ed po celou dobu b\u011bhu programu. Stav syst\u00e9mu se nem\u011bn\u00ed v z\u00e1vislosti na prov\u00e1d\u011bn\u00e9m programu ani vstupn\u00edch datech, co\u017e zjednodu\u0161uje sledov\u00e1n\u00ed, av\u0161ak neodpov\u00edd\u00e1 realit\u011b dynamicky se m\u011bn\u00edc\u00edch syst\u00e9m\u016f a proces\u016f.",
        sectionNumber: "2.2.1",
        sectionTitle: "Stav procesoru",
      },
      {
        uuid: "944bfb05-1963-4008-be89-f6b1a7c6ff41",
        correct:
          "Stav procesoru v opera\u010dn\u00edch syst\u00e9mech zahrnuje kl\u00ed\u010dov\u00e9 komponenty, mezi kter\u00e9 pat\u0159\u00ed hodnoty ulo\u017een\u00e9 v aritmetick\u00fdch registrech pro prov\u00e1d\u011bn\u00ed v\u00fdpo\u010dt\u016f, hodnota programov\u00e9ho \u010d\u00edta\u010de, kter\u00e1 ur\u010duje aktu\u00e1ln\u011b prov\u00e1d\u011bnou instrukci, a hodnota ukazatele z\u00e1sobn\u00edku, kter\u00fd je nezbytn\u00fd pro spr\u00e1vu vol\u00e1n\u00ed funkc\u00ed a alokaci lok\u00e1ln\u00edch prom\u011bnn\u00fdch b\u011bhem b\u011bhu programu.",
        incorrect:
          "Stav procesoru v opera\u010dn\u00edch syst\u00e9mech zahrnuje pouze hodnoty ulo\u017een\u00e9 v aritmetick\u00fdch registrech a stav extern\u00edch periferi\u00ed. Programov\u00fd \u010d\u00edta\u010d a ukazatel z\u00e1sobn\u00edku nejsou pova\u017eov\u00e1ny za sou\u010d\u00e1st stavu procesoru, proto\u017ee jejich hodnoty se dynamicky m\u011bn\u00ed a nemaj\u00ed p\u0159\u00edm\u00fd vliv na z\u00e1kladn\u00ed operace procesoru a v\u00fdpo\u010detn\u00ed procesy.",
        sectionNumber: "2.2.1",
        sectionTitle: "Stav procesoru",
      },
      {
        uuid: "ad913026-a870-44c5-a90d-e7993fcad41b",
        correct:
          "Za specifick\u00fdch podm\u00ednek, kdy program neobsahuje instrukce pro p\u0159\u00edm\u00fd p\u0159\u00edstup do pam\u011bti a virtu\u00e1ln\u00ed adresn\u00ed prostor je exkluzivn\u011b vyhrazen pro aktivn\u00ed program, je v\u00fdpo\u010det pova\u017eov\u00e1n za deterministick\u00fd. To znamen\u00e1, \u017ee v\u00fdpo\u010det je pln\u011b ur\u010den po\u010d\u00e1te\u010dn\u00edm stavem procesoru a samotn\u00fdm programem, a opakovan\u00e9 spu\u0161t\u011bn\u00ed s identick\u00fdm po\u010d\u00e1te\u010dn\u00edm stavem povede k naprosto stejn\u00fdm v\u00fdsledk\u016fm.",
        incorrect:
          "I za podm\u00ednek, kdy program neobsahuje instrukce pro p\u0159\u00edm\u00fd p\u0159\u00edstup do pam\u011bti a virtu\u00e1ln\u00ed adresn\u00ed prostor je exkluzivn\u011b vyhrazen pro aktivn\u00ed program, v\u00fdpo\u010det nemus\u00ed b\u00fdt deterministick\u00fd. Faktory jako vn\u011bj\u0161\u00ed hardwarov\u00e9 ud\u00e1losti, \u010dasov\u00e1n\u00ed instrukc\u00ed nebo drobn\u00e9 odchylky v nap\u00e1jen\u00ed procesoru mohou zp\u016fsobit, \u017ee opakovan\u00e9 spu\u0161t\u011bn\u00ed s identick\u00fdm po\u010d\u00e1te\u010dn\u00edm stavem povede k odli\u0161n\u00fdm v\u00fdsledk\u016fm.",
        sectionNumber: "2.2.1",
        sectionTitle: "Stav procesoru",
      },
      {
        uuid: "f602e865-80d9-4467-8b10-39833fbe6efa",
        correct:
          "V prost\u0159ed\u00ed s neizolovan\u00fdm adresn\u00edm prostorem, kde do pam\u011bti programu mohou zasahovat extern\u00ed entity jako jin\u00e9 programy nebo opera\u010dn\u00ed syst\u00e9m, se opakovan\u00e9 \u010dten\u00ed z ur\u010dit\u00e9 pam\u011b\u0165ov\u00e9 lokace nemus\u00ed nutn\u011b vr\u00e1tit stejn\u00fd v\u00fdsledek. Tato situace nast\u00e1v\u00e1, proto\u017ee extern\u00ed z\u00e1sahy mohou hodnotu v pam\u011bti mezi \u010dten\u00edmi zm\u011bnit, co\u017e vede k potenci\u00e1ln\u011b rozd\u00edln\u00fdm v\u00fdsledk\u016fm i p\u0159i \u010dten\u00ed z t\u00e9\u017ee adresy v kr\u00e1tk\u00e9m \u010dasov\u00e9m intervalu.",
        incorrect:
          "V prost\u0159ed\u00ed s neizolovan\u00fdm adresn\u00edm prostorem, kde do pam\u011bti programu mohou zasahovat extern\u00ed entity jako jin\u00e9 programy nebo opera\u010dn\u00ed syst\u00e9m, se opakovan\u00e9 \u010dten\u00ed z ur\u010dit\u00e9 pam\u011b\u0165ov\u00e9 lokace v\u017edy vr\u00e1t\u00ed stejn\u00fd v\u00fdsledek.  Izolace adresn\u00edho prostoru zaji\u0161\u0165uje, \u017ee extern\u00ed z\u00e1sahy nemohou ovlivnit hodnoty v pam\u011bti programu, a proto opakovan\u00e9 \u010dten\u00ed z t\u00e9\u017ee adresy bude konzistentn\u00ed a nez\u00e1visl\u00e9 na vn\u011bj\u0161\u00edch ud\u00e1lostech.",
        sectionNumber: "2.2.2",
        sectionTitle: "Synchronizace",
      },
      {
        uuid: "ad38b1cf-9d12-4247-a4ad-c6fa967fa88e",
        correct:
          "Synchronizace v kontextu opera\u010dn\u00edch syst\u00e9m\u016f nast\u00e1v\u00e1, kdy\u017e pr\u016fb\u011bh v\u00fdpo\u010dtu programu je ovlivn\u011bn extern\u00ed ud\u00e1lost\u00ed, jako je nap\u0159\u00edklad z\u00e1pis hodnoty do pam\u011bti jin\u00fdm programem nebo opera\u010dn\u00edm syst\u00e9mem. Tato interakce m\u011bn\u00ed chov\u00e1n\u00ed programu oproti izolovan\u00e9mu prost\u0159ed\u00ed, kde by program b\u011b\u017eel deterministicky, a vy\u017eaduje mechanismy pro koordinaci a \u0159\u00edzen\u00ed p\u0159\u00edstupu ke sd\u00edlen\u00fdm zdroj\u016fm, aby se p\u0159ede\u0161lo nekonzistenc\u00edm.",
        incorrect:
          "Synchronizace v kontextu opera\u010dn\u00edch syst\u00e9m\u016f je mechanismus, kter\u00fd zaji\u0161\u0165uje, \u017ee pr\u016fb\u011bh v\u00fdpo\u010dtu programu nen\u00ed nikdy ovlivn\u011bn extern\u00edmi ud\u00e1lostmi, jako je z\u00e1pis hodnoty do pam\u011bti jin\u00fdm programem nebo opera\u010dn\u00edm syst\u00e9mem.  C\u00edlem synchronizace je udr\u017eet program v izolovan\u00e9m prost\u0159ed\u00ed a zabr\u00e1nit jak\u00e9koli interakci s extern\u00edmi entitami, \u010d\u00edm\u017e se zaru\u010d\u00ed deterministick\u00e9 chov\u00e1n\u00ed a p\u0159edejde se nekonzistenc\u00edm zp\u016fsoben\u00fdm vn\u011bj\u0161\u00edmi z\u00e1sahy.",
        sectionNumber: "2.2.2",
        sectionTitle: "Synchronizace",
      },
      {
        uuid: "29c48690-cda5-4e91-a15f-98654a6cbf71",
        correct:
          "Uva\u017eujme program s nekone\u010dnou smy\u010dkou, kter\u00fd v izolovan\u00e9m prost\u0159ed\u00ed nikdy neskon\u010d\u00ed. Nicm\u00e9n\u011b, v neizolovan\u00e9m prost\u0159ed\u00ed, extern\u00ed entita, jako opera\u010dn\u00ed syst\u00e9m, m\u016f\u017ee zapsat hodnotu 0 na pam\u011b\u0165ovou adresu, kterou program opakovan\u011b \u010dte v podm\u00ednce smy\u010dky. Tento extern\u00ed z\u00e1sah zm\u011bn\u00ed stav programu a zp\u016fsob\u00ed, \u017ee smy\u010dka se ukon\u010d\u00ed, demonstruj\u00edc princip synchronizace skrze extern\u00ed ud\u00e1lost.",
        incorrect:
          "Uva\u017eujme program s nekone\u010dnou smy\u010dkou, kter\u00fd v neizolovan\u00e9m prost\u0159ed\u00ed m\u016f\u017ee b\u00fdt ukon\u010den pouze vnit\u0159n\u00ed logikou programu, nikoli extern\u00edm z\u00e1sahem.  I kdy\u017e extern\u00ed entita, jako opera\u010dn\u00ed syst\u00e9m, m\u016f\u017ee zapsat hodnotu 0 na pam\u011b\u0165ovou adresu, kterou program opakovan\u011b \u010dte, program v neizolovan\u00e9m prost\u0159ed\u00ed bude ignorovat tyto extern\u00ed z\u00e1sahy a pokra\u010dovat v nekone\u010dn\u00e9 smy\u010dce, dokud nedos\u00e1hne intern\u00edho stavu ukon\u010den\u00ed.",
        sectionNumber: "2.2.2",
        sectionTitle: "Synchronizace",
      },
      {
        uuid: "eebf848a-5b5f-4df7-90f3-ddc9785f3f67",
        correct:
          "Vl\u00e1kno je definov\u00e1no jako v\u00fdpo\u010det, co\u017e je posloupnost zm\u011bn stavu procesoru, kter\u00fd nep\u0159etr\u017eit\u011b vykon\u00e1v\u00e1 instrukce \u0159\u00edzen\u00e9 jedn\u00edm programem, p\u0159i\u010dem\u017e tento v\u00fdpo\u010det nen\u00ed zcela izolovan\u00fd, proto\u017ee m\u016f\u017ee b\u00fdt ovlivn\u011bn synchronizac\u00ed a vn\u011bj\u0161\u00edmi ud\u00e1lostmi pozorovateln\u00fdmi skrze sd\u00edlen\u00fd adresn\u00ed prostor, a stav procesoru, definovan\u00fd programov\u011b pozorovateln\u00fdmi registry a ukazateli, je ur\u010den v\u00fdhradn\u011b prov\u00e1d\u011bn\u00fdm programem.",
        incorrect:
          "Vl\u00e1kno je definov\u00e1no jako izolovan\u00fd v\u00fdpo\u010det, co\u017e je posloupnost zm\u011bn stavu procesoru, kter\u00fd nep\u0159etr\u017eit\u011b vykon\u00e1v\u00e1 instrukce \u0159\u00edzen\u00e9 jedn\u00edm programem, p\u0159i\u010dem\u017e tento v\u00fdpo\u010det je zcela jednozna\u010dn\u00fd a izolovan\u00fd od vn\u011bj\u0161\u00edch ud\u00e1lost\u00ed a synchronizace, a stav procesoru, definovan\u00fd programov\u011b pozorovateln\u00fdmi registry a ukazateli, m\u016f\u017ee b\u00fdt ovlivn\u011bn i vn\u011bj\u0161\u00edmi faktory mimo \u0159\u00edzen\u00ed prov\u00e1d\u011bn\u00e9ho programu.",
        sectionNumber: "2.2.3",
        sectionTitle: "Vl\u00e1kno",
      },
      {
        uuid: "a3e3dfca-2aa9-43cb-8d2c-9ba0248a5615",
        correct:
          "Synchronizace mezi vl\u00e1kny je v opera\u010dn\u00edch syst\u00e9mech umo\u017en\u011bna, a to pasivn\u011b prost\u0159ednictv\u00edm \u010dten\u00ed pam\u011bti, kdy vl\u00e1kno sleduje zm\u011bny v pam\u011bti, a aktivn\u011b z\u00e1pisem do pam\u011bti, \u010d\u00edm\u017e vl\u00e1kno m\u016f\u017ee iniciovat synchroniza\u010dn\u00ed ud\u00e1losti, za p\u0159edpokladu, \u017ee zapsan\u00e1 data budou \u010dtena jin\u00fdm vl\u00e1knem nebo periferi\u00ed, a a\u010dkoliv z\u00e1sobn\u00edk technicky nen\u00ed chr\u00e1n\u011bn p\u0159ed p\u0159\u00edstupem jin\u00fdch vl\u00e1ken v r\u00e1mci stejn\u00e9ho procesu, obecn\u011b se p\u0159edpokl\u00e1d\u00e1, \u017ee je pro extern\u00ed entity nep\u0159\u00edstupn\u00fd a pova\u017euje se za sou\u010d\u00e1st stavu vl\u00e1kna.",
        incorrect:
          "Synchronizace mezi vl\u00e1kny v opera\u010dn\u00edch syst\u00e9mech je omezena pouze na aktivn\u00ed operace, jako je z\u00e1pis do pam\u011bti, kdy vl\u00e1kno iniciuje synchroniza\u010dn\u00ed ud\u00e1losti, zat\u00edmco pasivn\u00ed sledov\u00e1n\u00ed zm\u011bn v pam\u011bti \u010dten\u00edm nen\u00ed pova\u017eov\u00e1no za formu synchronizace, a z\u00e1sobn\u00edk je striktn\u011b chr\u00e1n\u011bn p\u0159ed p\u0159\u00edstupem jin\u00fdch vl\u00e1ken v r\u00e1mci stejn\u00e9ho procesu, a proto nem\u016f\u017ee b\u00fdt pova\u017eov\u00e1n za sou\u010d\u00e1st sd\u00edlen\u00e9ho stavu vl\u00e1ken, ale za priv\u00e1tn\u00ed oblast pam\u011bti ka\u017ed\u00e9ho vl\u00e1kna.",
        sectionNumber: "2.2.3",
        sectionTitle: "Vl\u00e1kno",
      },
      {
        uuid: "50ed9b4f-c9e9-49f7-8adf-b071c85f4ca5",
        correct:
          "Podle definice logick\u00e9ho procesoru, stav logick\u00e9ho procesoru je pln\u011b ur\u010den aktu\u00e1ln\u00edmi hodnotami registr\u016f procesoru a tento stav se m\u011bn\u00ed v\u00fdhradn\u011b prov\u00e1d\u011bn\u00edm instrukc\u00ed, co\u017e umo\u017e\u0148uje opera\u010dn\u00edmu syst\u00e9mu ulo\u017eit a obnovit stav logick\u00e9ho procesoru pro \u00fa\u010dely virtualizace procesoru.",
        incorrect:
          "Podle definice logick\u00e9ho procesoru, stav logick\u00e9ho procesoru zahrnuje krom\u011b hodnot registr\u016f tak\u00e9 stav pam\u011bti a I/O za\u0159\u00edzen\u00ed a tento stav se m\u011bn\u00ed nejen prov\u00e1d\u011bn\u00edm instrukc\u00ed, ale i vn\u011bj\u0161\u00edmi ud\u00e1lostmi, co\u017e opera\u010dn\u00edmu syst\u00e9mu usnad\u0148uje ulo\u017een\u00ed a obnoven\u00ed stavu logick\u00e9ho procesoru pro \u00fa\u010dely virtualizace procesoru.",
        sectionNumber: "2.2.4",
        sectionTitle: "Logick\u00fd procesor",
      },
      {
        uuid: "6c7ea696-d55b-47fc-aecf-647bfa11e1a1",
        correct:
          "Koncept logick\u00e9ho procesoru, jak je pops\u00e1n v textu, slou\u017e\u00ed jako abstrakce pro definici vl\u00e1kna a umo\u017e\u0148uje realizaci virtualizace procesoru na fyzick\u00e9m procesoru d\u00edky schopnosti opera\u010dn\u00edho syst\u00e9mu ukl\u00e1dat a obnovovat stav logick\u00e9ho procesoru, co\u017e je kl\u00ed\u010dov\u00e9 pro efektivn\u00ed sd\u00edlen\u00ed fyzick\u00e9ho procesoru mezi v\u00edce vl\u00e1kny.",
        incorrect:
          "Koncept logick\u00e9ho procesoru, jak je pops\u00e1n v textu, slou\u017e\u00ed jako p\u0159\u00edm\u00e1 reprezentace fyzick\u00e9ho procesoru a neumo\u017e\u0148uje realizaci virtualizace procesoru na fyzick\u00e9m procesoru, proto\u017ee opera\u010dn\u00ed syst\u00e9m nem\u00e1 schopnost efektivn\u011b ukl\u00e1dat a obnovovat stav fyzick\u00e9ho procesoru, co\u017e omezuje mo\u017enosti sd\u00edlen\u00ed fyzick\u00e9ho procesoru.",
        sectionNumber: "2.2.4",
        sectionTitle: "Logick\u00fd procesor",
      },
      {
        uuid: "6f4714fd-8ec1-459b-bea7-9b142b6c5da0",
        correct:
          "Pro dosa\u017een\u00ed virtualizace procesoru, opera\u010dn\u00ed syst\u00e9m mus\u00ed b\u00fdt schopen prov\u00e1d\u011bt operace ulo\u017een\u00ed a obnoven\u00ed stavu logick\u00e9ho procesoru bez p\u0159\u00edm\u00e9 sou\u010dinnosti b\u011b\u017e\u00edc\u00edho vl\u00e1kna, co\u017e je umo\u017en\u011bno vn\u011bj\u0161\u00edmi ud\u00e1lostmi, jako jsou p\u0159eru\u0161en\u00ed, kter\u00e9 opera\u010dn\u00edmu syst\u00e9mu umo\u017e\u0148uj\u00ed p\u0159evz\u00edt kontrolu nad fyzick\u00fdm procesorem a efektivn\u011b spravovat logick\u00e9 procesory.",
        incorrect:
          "Pro dosa\u017een\u00ed virtualizace procesoru, opera\u010dn\u00ed syst\u00e9m mus\u00ed b\u00fdt schopen prov\u00e1d\u011bt operace ulo\u017een\u00ed a obnoven\u00ed stavu logick\u00e9ho procesoru pouze s p\u0159\u00edmou sou\u010dinnost\u00ed b\u011b\u017e\u00edc\u00edho vl\u00e1kna, co\u017e je realizov\u00e1no synchroniza\u010dn\u00edmi mechanismy na \u00farovni vl\u00e1ken a nevy\u017eaduje vn\u011bj\u0161\u00ed ud\u00e1losti jako p\u0159eru\u0161en\u00ed pro p\u0159evzet\u00ed kontroly nad fyzick\u00fdm procesorem.",
        sectionNumber: "2.2.4",
        sectionTitle: "Logick\u00fd procesor",
      },
      {
        uuid: "e954f8b0-37e2-4ff4-816f-d2bea40fda61",
        correct:
          "Ukl\u00e1d\u00e1n\u00ed a obnova stavu logick\u00e9ho procesoru jsou kl\u00ed\u010dov\u00e9 pro p\u0159ep\u00edn\u00e1n\u00ed kontextu vl\u00e1ken, co\u017e umo\u017e\u0148uje, aby na jednom fyzick\u00e9m procesoru b\u011b\u017eelo st\u0159\u00eddav\u011b v\u00edce vl\u00e1ken, p\u0159i\u010dem\u017e ka\u017ed\u00e9 vl\u00e1kno m\u00e1 iluzi vlastn\u00edho, vyhrazen\u00e9ho procesoru pro sv\u016fj b\u011bh.",
        incorrect:
          "P\u0159ep\u00edn\u00e1n\u00ed kontextu vl\u00e1ken je pln\u011b softwarov\u00e1 z\u00e1le\u017eitost a nevy\u017eaduje ukl\u00e1d\u00e1n\u00ed a obnovu stavu logick\u00e9ho procesoru, proto\u017ee ka\u017ed\u00e9 vl\u00e1kno pracuje ve sv\u00e9m vlastn\u00edm izolovan\u00e9m pam\u011b\u0165ov\u00e9m prostoru, \u010d\u00edm\u017e se eliminuje pot\u0159eba hardwarov\u00e9ho z\u00e1sahu.",
        sectionNumber: "2.2.5",
        sectionTitle: "P\u0159epnut\u00ed vl\u00e1kna",
      },
      {
        uuid: "4ee782d2-e201-434b-8234-c56ca98e9e93",
        correct:
          "A\u010dkoli se ukl\u00e1d\u00e1n\u00ed a obnova aritmetick\u00fdch registr\u016f pro p\u0159ep\u00edn\u00e1n\u00ed kontextu vl\u00e1ken zd\u00e1 teoreticky jednoduch\u00e9, v praxi se st\u00e1v\u00e1 slo\u017eit\u00fdm, proto\u017ee aritmetick\u00e9 registry jsou nezbytn\u00e9 pro v\u00fdpo\u010dty, co\u017e znemo\u017e\u0148uje ulo\u017eit nebo obnovit v\u0161echny registry bez asistence procesoru.",
        incorrect:
          "Ukl\u00e1d\u00e1n\u00ed a obnova aritmetick\u00fdch registr\u016f b\u011bhem p\u0159ep\u00edn\u00e1n\u00ed kontextu vl\u00e1ken je p\u0159\u00edmo\u010dar\u00fd proces, snadno zvl\u00e1dnuteln\u00fd softwarem bez v\u00fdznamn\u00e9ho zapojen\u00ed procesoru, proto\u017ee tyto registry jsou nez\u00e1visl\u00e9 na \u010d\u00edta\u010di instrukc\u00ed a ukazateli z\u00e1sobn\u00edku.",
        sectionNumber: "2.2.5",
        sectionTitle: "P\u0159epnut\u00ed vl\u00e1kna",
      },
      {
        uuid: "5df7171a-36d0-40a4-9957-0c701ac71601",
        correct:
          "Programov\u00fd \u010d\u00edta\u010d p\u0159edstavuje nejv\u011bt\u0161\u00ed probl\u00e9m p\u0159i p\u0159ep\u00edn\u00e1n\u00ed kontextu vl\u00e1ken, proto\u017ee nem\u016f\u017ee b\u00fdt p\u0159\u00edmo ulo\u017een ani obnoven pouze softwarem, co\u017e vy\u017eaduje speci\u00e1ln\u00ed podporu procesoru, aby se zajistilo, \u017ee se neztrat\u00ed kontrola b\u011bhem procesu, zvl\u00e1\u0161t\u011b kdy\u017e aritmetick\u00e9 registry nejsou v kritick\u00e9m kroku obnovy k dispozici.",
        incorrect:
          "Programov\u00fd \u010d\u00edta\u010d je snadno spravov\u00e1n b\u011bhem p\u0159ep\u00edn\u00e1n\u00ed kontextu vl\u00e1ken a nep\u0159edstavuje v\u00fdznamn\u00fd probl\u00e9m, proto\u017ee jeho hodnota m\u016f\u017ee b\u00fdt ulo\u017eena a obnovena pomoc\u00ed standardn\u00edch softwarov\u00fdch instrukc\u00ed, podobn\u011b jako se zach\u00e1z\u00ed s aritmetick\u00fdmi registry, bez pot\u0159eby speci\u00e1ln\u00edch funkc\u00ed procesoru.",
        sectionNumber: "2.2.5",
        sectionTitle: "P\u0159epnut\u00ed vl\u00e1kna",
      },
      {
        uuid: "e71f550f-beed-43da-851a-833b22ddfc3f",
        correct:
          "Vzhledem ke slo\u017eitosti ukl\u00e1d\u00e1n\u00ed a obnovy stavu procesoru, zejm\u00e9na programov\u00e9ho \u010d\u00edta\u010de, nem\u016f\u017ee b\u00fdt p\u0159ep\u00edn\u00e1n\u00ed kontextu vl\u00e1ken pln\u011b implementov\u00e1no bez specializovan\u00e9 hardwarov\u00e9 podpory procesoru a spol\u00e9h\u00e1 se na mechanismy, jako je zpracov\u00e1n\u00ed p\u0159eru\u0161en\u00ed, kter\u00e9 usnad\u0148uj\u00ed ukl\u00e1d\u00e1n\u00ed a obnovu stavu.",
        incorrect:
          "P\u0159ep\u00edn\u00e1n\u00ed kontextu vl\u00e1ken m\u016f\u017ee b\u00fdt efektivn\u011b implementov\u00e1no v\u00fdhradn\u011b v softwaru, bez nutnosti jak\u00e9koli specifick\u00e9 hardwarov\u00e9 podpory ze strany procesoru, proto\u017ee software dok\u00e1\u017ee spravovat ukl\u00e1d\u00e1n\u00ed a obnovu v\u0161ech pot\u0159ebn\u00fdch registr\u016f, v\u010detn\u011b programov\u00e9ho \u010d\u00edta\u010de, pomoc\u00ed standardn\u00edch programovac\u00edch technik.",
        sectionNumber: "2.2.5",
        sectionTitle: "P\u0159epnut\u00ed vl\u00e1kna",
      },
      {
        uuid: "09b55891-a868-44bd-9f02-b763284e5ce9",
        correct:
          "Mechanismus zpracov\u00e1n\u00ed p\u0159eru\u0161en\u00ed p\u0159irozen\u011b poskytuje nezbytnou hardwarovou podporu pro p\u0159ep\u00edn\u00e1n\u00ed kontextu vl\u00e1ken, proto\u017ee zpracov\u00e1n\u00ed p\u0159eru\u0161en\u00ed ji\u017e vy\u017eaduje ulo\u017een\u00ed alespo\u0148 \u010d\u00e1sti stavu procesoru a jeho obnoven\u00ed po n\u00e1vratu, co\u017e \u010din\u00ed tuto funkcionalitu znovu pou\u017eitelnou pro p\u0159ep\u00edn\u00e1n\u00ed kontextu vl\u00e1ken.",
        incorrect:
          "Mechanismus zpracov\u00e1n\u00ed p\u0159eru\u0161en\u00ed a p\u0159ep\u00edn\u00e1n\u00ed kontextu vl\u00e1ken jsou zcela odd\u011blen\u00e9 a nesouvisej\u00edc\u00ed funkce opera\u010dn\u00edho syst\u00e9mu, p\u0159i\u010dem\u017e zpracov\u00e1n\u00ed p\u0159eru\u0161en\u00ed se zam\u011b\u0159uje v\u00fdhradn\u011b na reakci na extern\u00ed ud\u00e1losti a nijak nep\u0159isp\u00edv\u00e1 k po\u017eadavk\u016fm na p\u0159ep\u00edn\u00e1n\u00ed kontextu vl\u00e1ken ani se s nimi nep\u0159ekr\u00fdv\u00e1.",
        sectionNumber: "2.2.5",
        sectionTitle: "P\u0159epnut\u00ed vl\u00e1kna",
      },
      {
        uuid: "03c47661-66b6-452b-9cc5-343981871aad",
        correct:
          "Pl\u00e1nova\u010d vl\u00e1ken, kl\u00ed\u010dov\u00e1 sou\u010d\u00e1st j\u00e1dra opera\u010dn\u00edho syst\u00e9mu zodpov\u011bdn\u00e1 za p\u0159id\u011blov\u00e1n\u00ed procesorov\u00e9ho \u010dasu vl\u00e1kn\u016fm, je aktivov\u00e1n na ka\u017ed\u00e9m fyzick\u00e9m procesoru v syst\u00e9mu pravideln\u00fdmi intervaly prost\u0159ednictv\u00edm programovateln\u00e9ho \u010dasova\u010de, kter\u00fd generuje p\u0159eru\u0161en\u00ed, umo\u017e\u0148uj\u00edc\u00ed pl\u00e1nova\u010di rozhodnout o p\u0159eru\u0161en\u00ed b\u011b\u017e\u00edc\u00edho vl\u00e1kna a v\u00fdb\u011bru dal\u0161\u00edho vl\u00e1kna k spu\u0161t\u011bn\u00ed.",
        incorrect:
          "Pl\u00e1nova\u010d vl\u00e1ken, kl\u00ed\u010dov\u00e1 sou\u010d\u00e1st j\u00e1dra opera\u010dn\u00edho syst\u00e9mu zodpov\u011bdn\u00e1 za p\u0159id\u011blov\u00e1n\u00ed procesorov\u00e9ho \u010dasu vl\u00e1kn\u016fm, je aktivov\u00e1n na ka\u017ed\u00e9m fyzick\u00e9m procesoru v syst\u00e9mu pouze na vy\u017e\u00e1d\u00e1n\u00ed b\u011b\u017e\u00edc\u00edch vl\u00e1ken, co\u017e mu umo\u017e\u0148uje rozhodnout o p\u0159eru\u0161en\u00ed b\u011b\u017e\u00edc\u00edho vl\u00e1kna a v\u00fdb\u011bru dal\u0161\u00edho vl\u00e1kna k spu\u0161t\u011bn\u00ed, av\u0161ak pouze za sou\u010dinnosti aktu\u00e1ln\u011b b\u011b\u017e\u00edc\u00edho vl\u00e1kna.",
        sectionNumber: "2.3.1",
        sectionTitle: "Pl\u00e1nova\u010d",
      },
      {
        uuid: "66681e4d-cb9b-49c1-8e6b-b0379ae85d7a",
        correct:
          "Z\u00e1kladn\u00ed funkc\u00ed pl\u00e1nova\u010de vl\u00e1ken je rozhodov\u00e1n\u00ed o tom, zda m\u00e1 aktu\u00e1ln\u011b aktivn\u00ed vl\u00e1kno na dan\u00e9m procesoru pokra\u010dovat ve sv\u00e9m v\u00fdpo\u010dtu, nebo m\u00e1 b\u00fdt p\u0159eru\u0161eno a nahrazeno jin\u00fdm vl\u00e1knem, p\u0159i\u010dem\u017e toto rozhodnut\u00ed je prov\u00e1d\u011bno nez\u00e1visle na sou\u010dinnosti b\u011b\u017e\u00edc\u00edho vl\u00e1kna d\u00edky mechanismu preempce, kter\u00fd je zalo\u017een na pravideln\u00fdch p\u0159eru\u0161en\u00edch generovan\u00fdch \u010dasova\u010dem.",
        incorrect:
          "Z\u00e1kladn\u00ed funkc\u00ed pl\u00e1nova\u010de vl\u00e1ken je rozhodov\u00e1n\u00ed o tom, zda m\u00e1 aktu\u00e1ln\u011b aktivn\u00ed vl\u00e1kno na dan\u00e9m procesoru pokra\u010dovat ve sv\u00e9m v\u00fdpo\u010dtu, nebo m\u00e1 b\u00fdt p\u0159eru\u0161eno a nahrazeno jin\u00fdm vl\u00e1knem, p\u0159i\u010dem\u017e toto rozhodnut\u00ed je prov\u00e1d\u011bno v\u00fdhradn\u011b na z\u00e1klad\u011b po\u017eadavk\u016f b\u011b\u017e\u00edc\u00edho vl\u00e1kna, jeliko\u017e pl\u00e1nova\u010d nem\u016f\u017ee vl\u00e1kno p\u0159eru\u0161it bez jeho aktivn\u00ed sou\u010dinnosti, co\u017e je charakteristick\u00e9 pro kooperativn\u00ed pl\u00e1nov\u00e1n\u00ed.",
        sectionNumber: "2.3.1",
        sectionTitle: "Pl\u00e1nova\u010d",
      },
      {
        uuid: "d8d4d62a-c4cb-49a7-bb30-f217aa1ea5f0",
        correct:
          "P\u0159esto\u017ee se historicky pou\u017e\u00edval term\u00edn pl\u00e1nova\u010d proces\u016f, modern\u00ed opera\u010dn\u00ed syst\u00e9my pou\u017e\u00edvaj\u00ed pl\u00e1nova\u010d vl\u00e1ken pro \u0159\u00edzen\u00ed b\u011bhu vl\u00e1ken na procesorech, p\u0159i\u010dem\u017e pl\u00e1nova\u010d je aktivov\u00e1n periodick\u00fdm \u010dasova\u010dem, kter\u00fd vyvol\u00e1v\u00e1 p\u0159eru\u0161en\u00ed a umo\u017e\u0148uje tak pl\u00e1nova\u010di preemptivn\u011b odeb\u00edrat procesor b\u011b\u017e\u00edc\u00edm vl\u00e1kn\u016fm a p\u0159id\u011blovat ho jin\u00fdm vl\u00e1kn\u016fm podle p\u0159edem definovan\u00fdch algoritm\u016f.",
        incorrect:
          "P\u0159esto\u017ee se historicky pou\u017e\u00edval term\u00edn pl\u00e1nova\u010d vl\u00e1ken, modern\u00ed opera\u010dn\u00ed syst\u00e9my pou\u017e\u00edvaj\u00ed pl\u00e1nova\u010d proces\u016f pro \u0159\u00edzen\u00ed b\u011bhu proces\u016f na procesorech, p\u0159i\u010dem\u017e pl\u00e1nova\u010d je aktivov\u00e1n pouze p\u0159i vzniku nov\u00e9ho procesu, co\u017e mu umo\u017e\u0148uje alokovat procesor nov\u00e9mu procesu, ale nem\u016f\u017ee preemptivn\u011b odeb\u00edrat procesor b\u011b\u017e\u00edc\u00edm proces\u016fm, jeliko\u017e vy\u017eaduje kooperaci b\u011b\u017e\u00edc\u00edho procesu k uvoln\u011bn\u00ed procesoru.",
        sectionNumber: "2.3.1",
        sectionTitle: "Pl\u00e1nova\u010d",
      },
      {
        uuid: "c957db25-7247-442a-b3e1-d4a4c8234ac2",
        correct:
          "Pl\u00e1novac\u00ed algoritmy opera\u010dn\u00edho syst\u00e9mu se sna\u017e\u00ed maximalizovat propustnost syst\u00e9mu, co\u017e se projevuje snahou o maxim\u00e1ln\u00ed vyu\u017eit\u00ed v\u0161ech procesor\u016f a minimalizaci \u010dasu str\u00e1ven\u00e9ho rozhodov\u00e1n\u00edm o pl\u00e1nov\u00e1n\u00ed, aby se co nejv\u00edce \u010dasu v\u011bnovalo produktivn\u00ed pr\u00e1ci a minimalizovalo se zbyte\u010dn\u00e9 p\u0159ep\u00edn\u00e1n\u00ed kontextu mezi procesy.",
        incorrect:
          "Pl\u00e1novac\u00ed algoritmy opera\u010dn\u00edho syst\u00e9mu se zam\u011b\u0159uj\u00ed na minimalizaci propustnosti syst\u00e9mu, co\u017e je dosa\u017eeno \u010dast\u00fdm p\u0159ep\u00edn\u00e1n\u00edm kontextu mezi vl\u00e1kny a z\u00e1m\u011brn\u00fdm zdr\u017eov\u00e1n\u00edm rozhodov\u00e1n\u00ed o pl\u00e1nov\u00e1n\u00ed, aby se minimalizovalo vyu\u017eit\u00ed procesor\u016f a maximalizoval \u010das str\u00e1ven\u00fd neproduktivn\u00edmi operacemi, jako je nap\u0159\u00edklad spr\u00e1va pl\u00e1nova\u010de.",
        sectionNumber: "2.3.2",
        sectionTitle: "C\u00edle",
      },
      {
        uuid: "5696a374-d0c1-4937-b575-5f87cf8d0dc2",
        correct:
          "Minimalizace latence, neboli reak\u010dn\u00ed doby syst\u00e9mu, je kl\u00ed\u010dov\u00fdm po\u017eadavkem na pl\u00e1novac\u00ed algoritmy, zejm\u00e9na u interaktivn\u00edch program\u016f a s\u00ed\u0165ov\u00fdch slu\u017eeb, kde u\u017eivatel\u00e9 o\u010dek\u00e1vaj\u00ed rychlou odezvu a necht\u011bj\u00ed zbyte\u010dn\u011b dlouho \u010dekat na v\u00fdsledek, co\u017e vy\u017eaduje, aby vl\u00e1kna ne\u010dekala na procesor p\u0159\u00edli\u0161 dlouho.",
        incorrect:
          "Maximalizace latence, neboli reak\u010dn\u00ed doby syst\u00e9mu, je preferovan\u00fdm c\u00edlem pl\u00e1novac\u00edch algoritm\u016f, zvl\u00e1\u0161t\u011b u interaktivn\u00edch program\u016f a s\u00ed\u0165ov\u00fdch slu\u017eeb, jeliko\u017e dlouh\u00e9 \u010dek\u00e1n\u00ed u\u017eivatel\u016f na odezvu syst\u00e9mu podporuje efektivn\u011bj\u0161\u00ed vyu\u017eit\u00ed procesoru a celkovou propustnost syst\u00e9mu.",
        sectionNumber: "2.3.2",
        sectionTitle: "C\u00edle",
      },
      {
        uuid: "f7da1996-8b21-4bcc-8e9c-3eba27dee78e",
        correct:
          "F\u00e9rovost v kontextu pl\u00e1nov\u00e1n\u00ed opera\u010dn\u00edho syst\u00e9mu znamen\u00e1, \u017ee v\u0161echna vl\u00e1kna by m\u011bla v pr\u016fm\u011bru obdr\u017eet spravedliv\u00fd pod\u00edl procesorov\u00e9ho \u010dasu, ide\u00e1ln\u011b \u00fam\u011brn\u00fd jejich priorit\u011b, co\u017e je d\u016fle\u017eit\u00e9 jak pro v\u00fdpo\u010detn\u00ed programy, tak pro interaktivn\u00ed aplikace, aby se zajistilo v\u010dasn\u00e9 dokon\u010den\u00ed a rychl\u00e1 reakce a zabr\u00e1nilo se str\u00e1d\u00e1n\u00ed n\u011bkter\u00fdch proces\u016f.",
        incorrect:
          "F\u00e9rovost v kontextu pl\u00e1nov\u00e1n\u00ed opera\u010dn\u00edho syst\u00e9mu znamen\u00e1, \u017ee n\u011bkter\u00e1 vybran\u00e1 vl\u00e1kna by m\u011bla obdr\u017eet dominantn\u00ed pod\u00edl procesorov\u00e9ho \u010dasu, zat\u00edmco ostatn\u00ed vl\u00e1kna by m\u011bla b\u00fdt omezena na minimum, co\u017e je kl\u00ed\u010dov\u00e9 pro maximalizaci propustnosti syst\u00e9mu, i kdy\u017e to vede k zna\u010dn\u00e9mu znev\u00fdhodn\u011bn\u00ed n\u011bkter\u00fdch aplikac\u00ed a potenci\u00e1ln\u00edmu str\u00e1d\u00e1n\u00ed proces\u016f.",
        sectionNumber: "2.3.2",
        sectionTitle: "C\u00edle",
      },
      {
        uuid: "f8d5ba83-4096-420e-a5cf-a4e26f47c8a2",
        correct:
          'Vl\u00e1kno, kter\u00e9 je v\u00a0stavu "\u010dek\u00e1 na procesor", se nach\u00e1z\u00ed ve stavu p\u0159ipravenosti a \u010dek\u00e1 na p\u0159id\u011blen\u00ed procesoru pl\u00e1nova\u010dem, aby mohlo pokra\u010dovat ve v\u00fdpo\u010dtu, p\u0159i\u010dem\u017e pl\u00e1nova\u010d opera\u010dn\u00edho syst\u00e9mu rozhoduje o p\u0159echodu tohoto vl\u00e1kna do stavu "b\u011b\u017e\u00ed", co\u017e mu umo\u017en\u00ed aktivn\u011b vyu\u017e\u00edvat procesorov\u00fd \u010das.',
        incorrect:
          'Vl\u00e1kno, kter\u00e9 je v\u00a0stavu "\u010dek\u00e1 na procesor", se nach\u00e1z\u00ed ve stavu sp\u00e1nku a \u010dek\u00e1 na p\u0159id\u011blen\u00ed procesoru samotn\u00fdm vl\u00e1knem, aby mohlo pokra\u010dovat ve v\u00fdpo\u010dtu, p\u0159i\u010dem\u017e samo vl\u00e1kno opera\u010dn\u00edho syst\u00e9mu rozhoduje o p\u0159echodu tohoto vl\u00e1kna do stavu "b\u011b\u017e\u00ed", co\u017e mu umo\u017en\u00ed aktivn\u011b vyu\u017e\u00edvat procesorov\u00fd \u010das.',
        sectionNumber: "2.3.3",
        sectionTitle: "Stav vl\u00e1kna",
      },
      {
        uuid: "fd3aa6aa-8b57-436d-9720-568f40c1ece7",
        correct:
          'Pokud vl\u00e1kno p\u0159ech\u00e1z\u00ed ze stavu "b\u011b\u017e\u00ed" do stavu "\u010dek\u00e1 na ud\u00e1lost", je tento p\u0159echod iniciov\u00e1n samotn\u00fdm vl\u00e1knem, kter\u00e9 signalizuje opera\u010dn\u00edmu syst\u00e9mu, \u017ee pot\u0159ebuje \u010dekat na ur\u010ditou extern\u00ed ud\u00e1lost, jako je dokon\u010den\u00ed I/O operace nebo uvoln\u011bn\u00ed z\u00e1mku, ne\u017e bude moci pokra\u010dovat ve sv\u00e9 \u010dinnosti.',
        incorrect:
          'Pokud vl\u00e1kno p\u0159ech\u00e1z\u00ed ze stavu "b\u011b\u017e\u00ed" do stavu "\u010dek\u00e1 na ud\u00e1lost", je tento p\u0159echod iniciov\u00e1n pl\u00e1nova\u010dem opera\u010dn\u00edho syst\u00e9mu, kter\u00fd na z\u00e1klad\u011b algoritm\u016f pl\u00e1nov\u00e1n\u00ed a priority vl\u00e1ken rozhodne, \u017ee vl\u00e1kno m\u00e1 \u010dekat na ur\u010ditou extern\u00ed ud\u00e1lost, ne\u017e bude moci pokra\u010dovat ve sv\u00e9 \u010dinnosti.',
        sectionNumber: "2.3.3",
        sectionTitle: "Stav vl\u00e1kna",
      },
      {
        uuid: "91ea7210-2ffc-40a1-bbee-f4a5098340c6",
        correct:
          'Podle definovan\u00fdch stav\u016f vl\u00e1kna v opera\u010dn\u00edm syst\u00e9mu nen\u00ed mo\u017en\u00fd p\u0159\u00edm\u00fd p\u0159echod ze stavu "\u010dek\u00e1 na procesor" do stavu "\u010dek\u00e1 na ud\u00e1lost", proto\u017ee p\u0159echod do stavu \u010dek\u00e1n\u00ed na ud\u00e1lost vy\u017eaduje aktivn\u00ed akci ze strany samotn\u00e9ho vl\u00e1kna, kter\u00e9 mus\u00ed explicitn\u011b signalizovat pot\u0159ebu \u010dek\u00e1n\u00ed na ud\u00e1lost.',
        incorrect:
          'Podle definovan\u00fdch stav\u016f vl\u00e1kna v opera\u010dn\u00edm syst\u00e9mu je mo\u017en\u00fd p\u0159\u00edm\u00fd p\u0159echod ze stavu "\u010dek\u00e1 na procesor" do stavu "\u010dek\u00e1 na ud\u00e1lost", proto\u017ee pl\u00e1nova\u010d opera\u010dn\u00edho syst\u00e9mu m\u016f\u017ee automaticky p\u0159esunout vl\u00e1kno do stavu \u010dek\u00e1n\u00ed na ud\u00e1lost, pokud usoud\u00ed, \u017ee vl\u00e1kno nem\u016f\u017ee moment\u00e1ln\u011b efektivn\u011b vyu\u017e\u00edvat procesor.',
        sectionNumber: "2.3.3",
        sectionTitle: "Stav vl\u00e1kna",
      },
      {
        uuid: "d693e1c8-caf5-45fe-98fd-44bb3aaca4eb",
        correct:
          "Z\u00e1kladn\u00edm pracovn\u00edm n\u00e1strojem pl\u00e1nova\u010de opera\u010dn\u00edho syst\u00e9mu jsou b\u011bhov\u00e9 fronty \u00faloh, do nich\u017e se \u0159ad\u00ed vl\u00e1kna \u010dekaj\u00edc\u00ed na procesor, p\u0159i\u010dem\u017e konkr\u00e9tn\u00ed implementace front, zahrnuj\u00edc\u00ed typ fronty a jej\u00ed organizaci, m\u00e1 z\u00e1sadn\u00ed vliv na chov\u00e1n\u00ed pl\u00e1nova\u010de a ur\u010duje v\u00fdb\u011br vl\u00e1kna pro spu\u0161t\u011bn\u00ed a p\u0159i\u0159azen\u00ed k fyzick\u00e9mu procesoru.",
        incorrect:
          "Z\u00e1kladn\u00edm pracovn\u00edm n\u00e1strojem pl\u00e1nova\u010de opera\u010dn\u00edho syst\u00e9mu jsou sice b\u011bhov\u00e9 fronty \u00faloh, av\u0161ak jejich implementace nem\u00e1 z\u00e1sadn\u00ed vliv na chov\u00e1n\u00ed pl\u00e1nova\u010de, proto\u017ee pl\u00e1nova\u010d se prim\u00e1rn\u011b \u0159\u00edd\u00ed typem procesoru a aktu\u00e1ln\u00edm zat\u00ed\u017een\u00edm syst\u00e9mu, nikoliv detaily implementace front \u00faloh, kter\u00e9 jsou pro celkov\u00fd v\u00fdkon syst\u00e9mu margin\u00e1ln\u00ed.",
        sectionNumber: "2.3.4",
        sectionTitle: "Fronta \u00faloh",
      },
      {
        uuid: "a3b6678a-bdab-4d7f-8b92-b22d693cb975",
        correct:
          "Pl\u00e1novac\u00ed algoritmy opera\u010dn\u00edch syst\u00e9m\u016f se li\u0161\u00ed p\u0159edev\u0161\u00edm v chov\u00e1n\u00ed b\u011bhov\u00fdch front \u00faloh, kter\u00e9 mohou b\u00fdt glob\u00e1ln\u00ed, sd\u00edlen\u00e9 mezi v\u0161emi procesory, nebo lok\u00e1ln\u00ed, kdy ka\u017ed\u00fd procesor disponuje vlastn\u00ed frontou, a d\u00e1le se mohou li\u0161it v po\u0159ad\u00ed vl\u00e1ken, kter\u00e9 m\u016f\u017ee b\u00fdt FIFO, tedy prvn\u00ed p\u0159\u00edchoz\u00ed prvn\u00ed obslou\u017een, nebo prioritn\u00ed, umo\u017e\u0148uj\u00edc\u00ed vl\u00e1kn\u016fm p\u0159edb\u00edhat na z\u00e1klad\u011b definovan\u00fdch krit\u00e9ri\u00ed.",
        incorrect:
          "Pl\u00e1novac\u00ed algoritmy opera\u010dn\u00edch syst\u00e9m\u016f se prim\u00e1rn\u011b neli\u0161\u00ed v chov\u00e1n\u00ed b\u011bhov\u00fdch front \u00faloh, jeliko\u017e ty jsou standardizovan\u00e9 a v\u017edy glob\u00e1ln\u00ed s FIFO po\u0159ad\u00edm, a rozd\u00edly v pl\u00e1nov\u00e1n\u00ed spo\u010d\u00edvaj\u00ed zejm\u00e9na v hardwarov\u00e9 konfiguraci syst\u00e9mu a specifick\u00fdch instrukc\u00edch procesoru, kter\u00e9 ovliv\u0148uj\u00ed rychlost zpracov\u00e1n\u00ed \u00faloh, nikoliv v softwarov\u00e9 implementaci front.",
        sectionNumber: "2.3.4",
        sectionTitle: "Fronta \u00faloh",
      },
      {
        uuid: "9704c906-0dfa-470d-baa4-f611f6217ef2",
        correct:
          "Prioritn\u00ed b\u011bhov\u00e9 fronty \u00faloh, pou\u017e\u00edvan\u00e9 v pl\u00e1nova\u010d\u00edch opera\u010dn\u00edch syst\u00e9m\u016f, se implementa\u010dn\u011b d\u011bl\u00ed na monolitick\u00e9, typicky realizovan\u00e9 pomoc\u00ed bin\u00e1rn\u00ed haldy nebo \u010derveno-\u010dern\u00e9ho stromu, a slo\u017een\u00e9, kde ka\u017ed\u00e1 prioritn\u00ed t\u0159\u00edda disponuje vlastn\u00ed FIFO frontou, co\u017e ovliv\u0148uje efektivitu a komplexnost pl\u00e1nov\u00e1n\u00ed.",
        incorrect:
          "Prioritn\u00ed b\u011bhov\u00e9 fronty \u00faloh se v opera\u010dn\u00edch syst\u00e9mech implementuj\u00ed v\u00fdhradn\u011b jako slo\u017een\u00e9 fronty, kde ka\u017ed\u00e1 priorita m\u00e1 vlastn\u00ed z\u00e1sobn\u00edk LIFO, a monolitick\u00e9 implementace s bin\u00e1rn\u00ed haldou nebo \u010derveno-\u010dern\u00fdm stromem se v modern\u00edch syst\u00e9mech nepou\u017e\u00edvaj\u00ed z d\u016fvodu jejich neefektivity a vysok\u00e9 re\u017eie spojen\u00e9 s komplexn\u00ed spr\u00e1vou priorit.",
        sectionNumber: "2.3.4",
        sectionTitle: "Fronta \u00faloh",
      },
      {
        uuid: "3e275e2b-1598-4518-b341-58fa5c04fbaa",
        correct:
          "Migrace vl\u00e1ken mezi fyzick\u00fdmi procesory v opera\u010dn\u00edm syst\u00e9mu p\u0159edstavuje n\u00e1kladnou operaci, p\u0159edev\u0161\u00edm kv\u016fli nutnosti invalidace a p\u0159esunu obsahu mezipam\u011bt\u00ed, kter\u00e9 nejsou sd\u00edlen\u00e9 mezi procesory. Z tohoto d\u016fvodu modern\u00ed opera\u010dn\u00ed syst\u00e9my implementuj\u00ed mechanismy afinity vl\u00e1ken, kter\u00e9 se sna\u017e\u00ed minimalizovat zbyte\u010dn\u00e9 migrace a opakovan\u011b pl\u00e1novat vl\u00e1kna na stejn\u00fd procesor, \u010d\u00edm\u017e se sni\u017euje re\u017eie spojen\u00e1 s p\u0159esuny a zlep\u0161uje se celkov\u00fd v\u00fdkon syst\u00e9mu.",
        incorrect:
          "Migrace vl\u00e1ken mezi fyzick\u00fdmi procesory v opera\u010dn\u00edm syst\u00e9mu je operace s minim\u00e1ln\u00edmi n\u00e1klady, proto\u017ee modern\u00ed procesory sd\u00edlej\u00ed mezipam\u011bti a invalidace dat je rychl\u00e1. Proto opera\u010dn\u00ed syst\u00e9my obvykle neimplementuj\u00ed mechanismy afinity vl\u00e1ken, proto\u017ee migrace vl\u00e1ken je efektivn\u00ed a opakovan\u00e9 pl\u00e1nov\u00e1n\u00ed vl\u00e1ken na stejn\u00fd procesor nep\u0159in\u00e1\u0161\u00ed \u017e\u00e1dn\u00e9 v\u00fdznamn\u00e9 zlep\u0161en\u00ed v\u00fdkonu syst\u00e9mu.",
        sectionNumber: "2.3.5",
        sectionTitle: "Afinita",
      },
      {
        uuid: "916713fc-172b-483f-a6f7-0d668d0c9149",
        correct:
          'Strategie kraden\u00ed pr\u00e1ce, pou\u017e\u00edvan\u00e1 v pl\u00e1nova\u010d\u00edch opera\u010dn\u00edch syst\u00e9m\u016f s lok\u00e1ln\u00edmi frontami, p\u0159edstavuje kompromisn\u00ed \u0159e\u0161en\u00ed pro efektivn\u00ed vyu\u017eit\u00ed zdroj\u016f a z\u00e1rove\u0148 minimalizaci migrac\u00ed vl\u00e1ken. Procesor, kter\u00fd se stane ne\u010dinn\u00fdm, aktivn\u011b vyhled\u00e1v\u00e1 a "kradne" vl\u00e1kna z jin\u00fdch, zat\u00ed\u017een\u011bj\u0161\u00edch front, \u010d\u00edm\u017e se zlep\u0161uje celkov\u00e9 vyu\u017eit\u00ed procesor\u016f a z\u00e1rove\u0148 se, d\u00edky lok\u00e1ln\u00edm front\u00e1m a preferenci nemigrace vl\u00e1ken, do jist\u00e9 m\u00edry zachov\u00e1v\u00e1 afinita vl\u00e1ken k procesor\u016fm.',
        incorrect:
          'Strategie kraden\u00ed pr\u00e1ce v pl\u00e1nova\u010d\u00edch opera\u010dn\u00edch syst\u00e9m\u016f s lok\u00e1ln\u00edmi frontami je prim\u00e1rn\u011b zam\u011b\u0159ena na maxim\u00e1ln\u00ed vyu\u017eit\u00ed v\u0161ech procesor\u016f bez ohledu na afinitu vl\u00e1ken.  Procesor, kter\u00fd je ne\u010dinn\u00fd, agresivn\u011b "kradne" vl\u00e1kna z jin\u00fdch front, i kdy\u017e to vede k \u010dast\u00fdm migrac\u00edm, proto\u017ee hlavn\u00edm c\u00edlem je rovnom\u011brn\u00e9 rozlo\u017een\u00ed z\u00e1t\u011b\u017ee a maxim\u00e1ln\u00ed propustnost syst\u00e9mu, p\u0159i\u010dem\u017e afinita vl\u00e1ken je pova\u017eov\u00e1na za druho\u0159ad\u00fd aspekt.',
        sectionNumber: "2.3.5",
        sectionTitle: "Afinita",
      },
      {
        uuid: "e50fefe3-b8e4-42f9-8bbf-178a5e34c4a6",
        correct:
          "Pl\u00e1nova\u010de opera\u010dn\u00edch syst\u00e9m\u016f s glob\u00e1ln\u00ed frontou, do kter\u00e9 jsou za\u0159azov\u00e1na v\u0161echna vl\u00e1kna \u010dekaj\u00edc\u00ed na spu\u0161t\u011bn\u00ed, typicky neposkytuj\u00ed \u017e\u00e1dnou afinitu vl\u00e1ken k procesor\u016fm. V takov\u00e9m syst\u00e9mu je vl\u00e1knu p\u0159id\u011blen prvn\u00ed voln\u00fd procesor bez ohledu na to, na kter\u00e9m procesoru b\u011b\u017eelo d\u0159\u00edve, co\u017e vede k \u010dast\u00fdm migrac\u00edm a potenci\u00e1ln\u011b ni\u017e\u0161\u00edmu v\u00fdkonu v porovn\u00e1n\u00ed s pl\u00e1nova\u010di vyu\u017e\u00edvaj\u00edc\u00edmi lok\u00e1ln\u00ed fronty a afinitu.",
        incorrect:
          "Pl\u00e1nova\u010de opera\u010dn\u00edch syst\u00e9m\u016f s glob\u00e1ln\u00ed frontou, do kter\u00e9 jsou za\u0159azov\u00e1na v\u0161echna vl\u00e1kna \u010dekaj\u00edc\u00ed na spu\u0161t\u011bn\u00ed, inherentn\u011b zaru\u010duj\u00ed silnou afinitu vl\u00e1ken k procesor\u016fm.  Glob\u00e1ln\u00ed fronta zaji\u0161\u0165uje, \u017ee vl\u00e1kna jsou v\u017edy pl\u00e1nov\u00e1na na nejvhodn\u011bj\u0161\u00ed procesor, co\u017e minimalizuje migrace a maximalizuje vyu\u017eit\u00ed mezipam\u011bt\u00ed, \u010d\u00edm\u017e se dosahuje optim\u00e1ln\u00edho v\u00fdkonu syst\u00e9mu a efektivn\u00edho vyu\u017eit\u00ed v\u00fdpo\u010detn\u00edch zdroj\u016f.",
        sectionNumber: "2.3.5",
        sectionTitle: "Afinita",
      },
      {
        uuid: "4059f9df-ee0b-48d4-ae77-9fd10f6e7cf3",
        correct:
          "Interaktivn\u00ed pl\u00e1nova\u010de b\u011b\u017en\u011b vyu\u017e\u00edvaj\u00ed prioritn\u00ed pl\u00e1nov\u00e1n\u00ed, kde ka\u017ed\u00e9 vl\u00e1kno m\u00e1 p\u0159id\u011blenu prioritu, kter\u00e1 staticky nebo dynamicky ovliv\u0148uje jeho \u0161anci na z\u00edsk\u00e1n\u00ed procesoru. V r\u00e1mci ka\u017ed\u00e9 prioritn\u00ed t\u0159\u00eddy jsou vl\u00e1kna uspo\u0159\u00e1d\u00e1na do fronty FIFO, a pl\u00e1nova\u010d vyb\u00edr\u00e1 vl\u00e1kno z nejvy\u0161\u0161\u00ed nepr\u00e1zdn\u00e9 prioritn\u00ed fronty.",
        incorrect:
          "Interaktivn\u00ed pl\u00e1nova\u010de se obvykle vyh\u00fdbaj\u00ed prioritn\u00edmu pl\u00e1nov\u00e1n\u00ed kv\u016fli jeho slo\u017eitosti a nep\u0159edv\u00eddatelnosti. M\u00edsto toho preferuj\u00ed rovnom\u011brn\u00e9 rozd\u011blen\u00ed procesorov\u00e9ho \u010dasu mezi v\u0161echna vl\u00e1kna bez ohledu na jejich priority, a vl\u00e1kna v r\u00e1mci prioritn\u00edch t\u0159\u00edd jsou \u0159azena do fronty LIFO, co\u017e zaji\u0161\u0165uje, \u017ee nov\u011b p\u0159\u00edchoz\u00ed vl\u00e1kna maj\u00ed p\u0159ednost.",
        sectionNumber: "2.3.6",
        sectionTitle: "Prioritn\u00ed fronty",
      },
      {
        uuid: "c440b522-27f4-466a-a003-4b32ad5cf373",
        correct:
          "Dynamick\u00e1 \u00faprava priority u interaktivn\u00edch pl\u00e1nova\u010d\u016f slou\u017e\u00ed k \u0159e\u0161en\u00ed probl\u00e9mu, kdy dlouho b\u011b\u017e\u00edc\u00ed v\u00fdpo\u010detn\u00ed vl\u00e1kno s vysokou prioritou m\u016f\u017ee zablokovat procesor pro ostatn\u00ed vl\u00e1kna. Tato \u00faprava spo\u010d\u00edv\u00e1 ve sni\u017eov\u00e1n\u00ed priority vl\u00e1kna za ka\u017edou p\u0159id\u011blenou jednotku v\u00fdpo\u010detn\u00edho \u010dasu, co\u017e umo\u017e\u0148uje i vl\u00e1kn\u016fm s ni\u017e\u0161\u00ed prioritou se nakonec dostat ke spu\u0161t\u011bn\u00ed.",
        incorrect:
          "Dynamick\u00e1 \u00faprava priority u interaktivn\u00edch pl\u00e1nova\u010d\u016f je prim\u00e1rn\u011b zam\u011b\u0159ena na zv\u00fdhod\u0148ov\u00e1n\u00ed dlouho b\u011b\u017e\u00edc\u00edch v\u00fdpo\u010detn\u00edch vl\u00e1ken, aby se maximalizovala propustnost syst\u00e9mu. Priorita vl\u00e1ken se s ka\u017edou p\u0159id\u011blenou jednotkou v\u00fdpo\u010detn\u00edho \u010dasu zvy\u0161uje, \u010d\u00edm\u017e se zaji\u0161\u0165uje, \u017ee dlouhodob\u011b aktivn\u00ed procesy maj\u00ed neust\u00e1le p\u0159ednost p\u0159ed kr\u00e1tkodob\u00fdmi \u00fakoly.",
        sectionNumber: "2.3.6",
        sectionTitle: "Prioritn\u00ed fronty",
      },
      {
        uuid: "3c904add-6fa9-47f8-8259-22cb0e971d0a",
        correct:
          "Zat\u00edmco se v tomto kurzu zam\u011b\u0159ujeme na interaktivn\u00ed pl\u00e1nova\u010de, existuj\u00ed i jin\u00e9 typy pl\u00e1nova\u010d\u016f, jako nap\u0159\u00edklad d\u00e1vkov\u00e9 pl\u00e1nova\u010de, kter\u00e9 jsou optimalizov\u00e1ny pro maxim\u00e1ln\u00ed propustnost a efektivitu p\u0159i zpracov\u00e1n\u00ed velk\u00e9ho mno\u017estv\u00ed \u00faloh bez interakce s u\u017eivatelem, a pl\u00e1nova\u010de re\u00e1ln\u00e9ho \u010dasu, kter\u00e9 kladou d\u016fraz na dodr\u017een\u00ed striktn\u00edch \u010dasov\u00fdch limit\u016f pro prov\u00e1d\u011bn\u00ed \u00faloh.",
        incorrect:
          "V kontextu opera\u010dn\u00edch syst\u00e9m\u016f se rozli\u0161uj\u00ed pouze dva z\u00e1kladn\u00ed typy pl\u00e1nova\u010d\u016f: interaktivn\u00ed pl\u00e1nova\u010de, kter\u00e9 se staraj\u00ed o rychlou odezvu pro u\u017eivatelsk\u00e9 aplikace, a pl\u00e1nova\u010de re\u00e1ln\u00e9ho \u010dasu, kter\u00e9 se pou\u017e\u00edvaj\u00ed v syst\u00e9mech bez interakce s u\u017eivatelem, jako jsou servery a datov\u00e1 centra. D\u00e1vkov\u00e9 pl\u00e1nova\u010de a jin\u00e9 specializovan\u00e9 typy pl\u00e1nova\u010d\u016f se v modern\u00edch opera\u010dn\u00edch syst\u00e9mech ji\u017e nepou\u017e\u00edvaj\u00ed.",
        sectionNumber: "2.3.6",
        sectionTitle: "Prioritn\u00ed fronty",
      },
      {
        uuid: "ca82828b-5600-4ba4-973a-42ce9b7388a0",
        correct:
          "F\u00e9rov\u00fd pl\u00e1nova\u010d se sna\u017e\u00ed zajistit rovnom\u011brn\u00e9 rozd\u011blen\u00ed v\u00fdpo\u010detn\u00edho \u010dasu mezi v\u0161echna vl\u00e1kna, p\u0159\u00edpadn\u011b zohled\u0148uje priority vl\u00e1ken, a v tomto ohledu se podob\u00e1 syst\u00e9m\u016fm s dynamickou \u00fapravou priorit, av\u0161ak na rozd\u00edl od pevn\u00fdch prioritn\u00edch t\u0159\u00edd pracuje s prioritami v libovoln\u00e9m rozsahu, co\u017e umo\u017e\u0148uje jemn\u011bj\u0161\u00ed a flexibiln\u011bj\u0161\u00ed \u0159\u00edzen\u00ed p\u0159id\u011blov\u00e1n\u00ed \u010dasu.",
        incorrect:
          "F\u00e9rov\u00fd pl\u00e1nova\u010d se sna\u017e\u00ed maximalizovat celkov\u00fd v\u00fdpo\u010detn\u00ed v\u00fdkon syst\u00e9mu bez ohledu na rovnom\u011brn\u00e9 rozd\u011blen\u00ed \u010dasu mezi vl\u00e1kna a nepodob\u00e1 se syst\u00e9m\u016fm s dynamickou \u00fapravou priorit, proto\u017ee pracuje s pevn\u00fdmi prioritn\u00edmi t\u0159\u00eddami, co\u017e zjednodu\u0161uje spr\u00e1vu priorit a zaji\u0161\u0165uje p\u0159edv\u00eddateln\u011bj\u0161\u00ed chov\u00e1n\u00ed syst\u00e9mu.",
        sectionNumber: "2.3.7",
        sectionTitle: "F\u00e9rov\u00e9 pl\u00e1nov\u00e1n\u00ed",
      },
      {
        uuid: "d3b0af77-4319-4f6a-a8d6-b151f2cbeb87",
        correct:
          "Priorita vl\u00e1ken v f\u00e9rov\u00e9m pl\u00e1nova\u010di je dynamicky upravov\u00e1na a je inverzn\u011b \u00fam\u011brn\u00e1 dosud vyu\u017eit\u00e9mu v\u00fdpo\u010detn\u00edmu \u010dasu, co\u017e znamen\u00e1, \u017ee vl\u00e1kna, kter\u00e1 ji\u017e spot\u0159ebovala v\u00edce \u010dasu, maj\u00ed ni\u017e\u0161\u00ed prioritu, a naopak vl\u00e1kna s men\u0161\u00edm vyu\u017eit\u00fdm \u010dasem maj\u00ed prioritu vy\u0161\u0161\u00ed, co\u017e podporuje spravedliv\u00e9 rozd\u011blen\u00ed zdroj\u016f.",
        incorrect:
          "Priorita vl\u00e1ken v f\u00e9rov\u00e9m pl\u00e1nova\u010di je staticky definov\u00e1na a nem\u011bn\u00ed se v pr\u016fb\u011bhu b\u011bhu syst\u00e9mu, co\u017e zaji\u0161\u0165uje, \u017ee d\u016fle\u017eit\u011bj\u0161\u00ed vl\u00e1kna maj\u00ed trvale vy\u0161\u0161\u00ed prioritu bez ohledu na jejich dosavadn\u00ed vyu\u017eit\u00ed v\u00fdpo\u010detn\u00edho \u010dasu, a t\u00edm se dosahuje p\u0159edv\u00eddateln\u00e9ho a deterministick\u00e9ho chov\u00e1n\u00ed syst\u00e9mu.",
        sectionNumber: "2.3.7",
        sectionTitle: "F\u00e9rov\u00e9 pl\u00e1nov\u00e1n\u00ed",
      },
      {
        uuid: "0053685a-8d8b-4716-96a4-3a74835e9a89",
        correct:
          "Pl\u00e1novac\u00ed kvantum je minim\u00e1ln\u00ed \u010das, po kter\u00fd opera\u010dn\u00ed syst\u00e9m nech\u00e1 b\u011b\u017eet aktivn\u00ed vl\u00e1kno na procesoru, a to i v p\u0159\u00edpad\u011b, \u017ee existuje dal\u0161\u00ed vl\u00e1kno s vy\u0161\u0161\u00ed prioritou p\u0159ipraven\u00e9 k b\u011bhu, \u010d\u00edm\u017e se zamezuje nadm\u011brn\u00e9mu p\u0159ep\u00edn\u00e1n\u00ed kontextu a optimalizuje se celkov\u00e1 propustnost syst\u00e9mu na \u00fakor potenci\u00e1ln\u00edho zv\u00fd\u0161en\u00ed latence.",
        incorrect:
          "Pl\u00e1novac\u00ed kvantum je maxim\u00e1ln\u00ed \u010das, po kter\u00fd opera\u010dn\u00ed syst\u00e9m nech\u00e1 b\u011b\u017eet aktivn\u00ed vl\u00e1kno na procesoru, a to i v p\u0159\u00edpad\u011b, \u017ee existuje dal\u0161\u00ed vl\u00e1kno s ni\u017e\u0161\u00ed prioritou p\u0159ipraven\u00e9 k b\u011bhu, \u010d\u00edm\u017e se zamezuje nadm\u011brn\u00e9mu p\u0159ep\u00edn\u00e1n\u00ed kontextu a optimalizuje se celkov\u00e1 propustnost syst\u00e9mu na \u00fakor potenci\u00e1ln\u00edho zv\u00fd\u0161en\u00ed latence.",
        sectionNumber: "2.3.8",
        sectionTitle: "Odebr\u00e1n\u00ed procesoru",
      },
      {
        uuid: "423b7640-be82-45d6-9fe5-99b160eab21d",
        correct:
          "V syst\u00e9mech vyu\u017e\u00edvaj\u00edc\u00edch pl\u00e1novac\u00ed algoritmy FIFO nebo Round Robin jsou vl\u00e1kna s rovnocennou prioritou spravedliv\u011b rotov\u00e1na na procesoru, p\u0159i\u010dem\u017e ka\u017ed\u00e9mu vl\u00e1knu je p\u0159id\u011bleno stejn\u00e9 \u010dasov\u00e9 kvantum pro b\u011bh, pokud ov\u0161em vl\u00e1kno p\u0159ed\u010dasn\u011b neuvoln\u00ed procesor nap\u0159\u00edklad usp\u00e1n\u00edm, co\u017e umo\u017e\u0148uje efektivn\u00ed vyu\u017eit\u00ed procesoru a spravedliv\u00e9 sd\u00edlen\u00ed mezi vl\u00e1kny.",
        incorrect:
          "V syst\u00e9mech vyu\u017e\u00edvaj\u00edc\u00edch pl\u00e1novac\u00ed algoritmy FIFO nebo Round Robin jsou vl\u00e1kna s rovnocennou prioritou spravedliv\u011b rotov\u00e1na na procesoru, p\u0159i\u010dem\u017e ka\u017ed\u00e9mu vl\u00e1knu je p\u0159id\u011bleno prom\u011bnliv\u00e9 \u010dasov\u00e9 kvantum pro b\u011bh v z\u00e1vislosti na jeho priorit\u011b, pokud ov\u0161em vl\u00e1kno p\u0159ed\u010dasn\u011b neuvoln\u00ed procesor nap\u0159\u00edklad usp\u00e1n\u00edm, co\u017e umo\u017e\u0148uje efektivn\u00ed vyu\u017eit\u00ed procesoru a spravedliv\u00e9 sd\u00edlen\u00ed mezi vl\u00e1kny.",
        sectionNumber: "2.3.8",
        sectionTitle: "Odebr\u00e1n\u00ed procesoru",
      },
      {
        uuid: "2c794ac6-d5ea-4c93-82bd-8b8458068006",
        correct:
          "V modern\u00edch preemptivn\u00edch opera\u010dn\u00edch syst\u00e9mech se dobrovoln\u00e9 propu\u0161t\u011bn\u00ed procesoru aktivn\u00edm vl\u00e1knem pova\u017euje za neefektivn\u00ed postup, proto\u017ee v situac\u00edch, kdy vl\u00e1kno \u010dek\u00e1 na ud\u00e1lost, je v\u00fdhodn\u011bj\u0161\u00ed explicitn\u011b signalizovat \u010dek\u00e1n\u00ed na danou ud\u00e1lost a v p\u0159\u00edpadech pot\u0159eby sn\u00ed\u017een\u00ed priority vl\u00e1kna je doporu\u010deno p\u0159\u00edmo upravit pl\u00e1novac\u00ed prioritu vl\u00e1kna, nikoli dobrovoln\u011b uvol\u0148ovat procesor.",
        incorrect:
          "V modern\u00edch preemptivn\u00edch opera\u010dn\u00edch syst\u00e9mech se dobrovoln\u00e9 propu\u0161t\u011bn\u00ed procesoru aktivn\u00edm vl\u00e1knem pova\u017euje za efektivn\u00ed postup, proto\u017ee v situac\u00edch, kdy vl\u00e1kno \u010dek\u00e1 na ud\u00e1lost, je v\u00fdhodn\u011bj\u0161\u00ed implicitn\u011b signalizovat \u010dek\u00e1n\u00ed na danou ud\u00e1lost a v p\u0159\u00edpadech pot\u0159eby sn\u00ed\u017een\u00ed priority vl\u00e1kna je doporu\u010deno dobrovoln\u011b uvol\u0148ovat procesor, nikoli p\u0159\u00edmo upravovat pl\u00e1novac\u00ed prioritu vl\u00e1kna.",
        sectionNumber: "2.3.8",
        sectionTitle: "Odebr\u00e1n\u00ed procesoru",
      },
      {
        uuid: "b15a5d5c-9aa3-4327-9960-6fef313ccb86",
        correct:
          "Kdy\u017e vl\u00e1kno \u010dek\u00e1 na vy\u0159\u00edzen\u00ed soukrom\u00e9ho po\u017eadavku, jako je nap\u0159\u00edklad operace \u010dten\u00ed ze souboru, opera\u010dn\u00ed syst\u00e9m toto vl\u00e1kno usp\u00ed a intern\u011b si pozna\u010d\u00ed, \u017ee toto vl\u00e1kno \u010dek\u00e1 na dokon\u010den\u00ed konkr\u00e9tn\u00edho po\u017eadavku. Jakmile je po\u017eadavek vy\u0159\u00edzen a data jsou k dispozici, komponenta opera\u010dn\u00edho syst\u00e9mu, kter\u00e1 dan\u00fd po\u017eadavek zpracovala, probud\u00ed \u010dekaj\u00edc\u00ed vl\u00e1kno a to je n\u00e1sledn\u011b p\u0159esunuto do stavu p\u0159ipravenosti k b\u011bhu.",
        incorrect:
          "Kdy\u017e vl\u00e1kno \u010dek\u00e1 na vy\u0159\u00edzen\u00ed soukrom\u00e9ho po\u017eadavku, opera\u010dn\u00ed syst\u00e9m ho usp\u00ed. Po vy\u0159\u00edzen\u00ed tohoto po\u017eadavku je probuzeno prvn\u00ed vl\u00e1kno z b\u011bhov\u00e9 fronty, nikoliv vl\u00e1kno, kter\u00e9 p\u016fvodn\u011b odeslalo dan\u00fd po\u017eadavek. T\u00edmto mechanismem se opera\u010dn\u00ed syst\u00e9m sna\u017e\u00ed zajistit spravedliv\u00e9 p\u0159id\u011blov\u00e1n\u00ed procesoru mezi v\u0161echna vl\u00e1kna, bez ohledu na p\u016fvodn\u00ed po\u017eadavek.",
        sectionNumber: "2.3.9",
        sectionTitle: "\u010cekaj\u00edc\u00ed vl\u00e1kna",
      },
      {
        uuid: "4e60023e-b950-4193-9747-f44cefe272f4",
        correct:
          "V situac\u00edch, kdy vl\u00e1kna sout\u011b\u017e\u00ed o p\u0159\u00edstup ke sd\u00edlen\u00e9mu zdroji, jako je nap\u0159\u00edklad kritick\u00e1 sekce chr\u00e1n\u00edc\u00ed sd\u00edlen\u00e1 data, opera\u010dn\u00ed syst\u00e9m spravuje pro ka\u017ed\u00fd takov\u00fd zdroj \u010dekac\u00ed frontu. V moment\u011b, kdy vl\u00e1kno uvoln\u00ed dr\u017een\u00fd zdroj, opera\u010dn\u00ed syst\u00e9m probud\u00ed z \u010dekac\u00ed fronty pouze prvn\u00ed vl\u00e1kno v po\u0159ad\u00ed a umo\u017en\u00ed mu z\u00edskat p\u0159\u00edstup ke zdroji, zat\u00edmco ostatn\u00ed \u010dekaj\u00edc\u00ed vl\u00e1kna z\u016fst\u00e1vaj\u00ed nad\u00e1le v klidu.",
        incorrect:
          "P\u0159i sout\u011b\u017ei o sd\u00edlen\u00fd zdroj opera\u010dn\u00ed syst\u00e9m po uvoln\u011bn\u00ed zdroje probud\u00ed v\u0161echna vl\u00e1kna \u010dekaj\u00edc\u00ed ve front\u011b na tento zdroj. V\u0161echna probuzen\u00e1 vl\u00e1kna se pak sou\u010dasn\u011b pokus\u00ed z\u00edskat p\u0159\u00edstup ke zdroji, a opera\u010dn\u00ed syst\u00e9m n\u00e1sledn\u011b rozhodne na z\u00e1klad\u011b priority vl\u00e1ken, kter\u00e9 z nich zdroj z\u00edsk\u00e1, zat\u00edmco ostatn\u00ed se vr\u00e1t\u00ed zp\u011bt do \u010dekac\u00edho stavu.",
        sectionNumber: "2.3.9",
        sectionTitle: "\u010cekaj\u00edc\u00ed vl\u00e1kna",
      },
    ],
  };
