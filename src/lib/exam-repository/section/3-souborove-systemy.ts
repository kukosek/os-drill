import type { Section } from '../../common/types';

export const section3_souborove_systemy: Section = {
    uuid: "335453af-3c29-4043-93c4-c865a33f8988",
    sectionNumber: "3",
    sectionTitle: "Souborov\u00e9 syst\u00e9my",
    statements: [
      {
        uuid: "1f278289-b982-4783-b08a-9fe14988c5df",
        correct:
          "Perzistentn\u00ed \u00falo\u017ei\u0161t\u011b, jako nap\u0159\u00edklad SSD disky, se pou\u017e\u00edvaj\u00ed pro dlouhodob\u00e9 uchov\u00e1v\u00e1n\u00ed dat, kter\u00e1 z\u016fst\u00e1vaj\u00ed zachov\u00e1na i po vypnut\u00ed po\u010d\u00edta\u010de, a jsou charakteristick\u00e1 operacemi pracuj\u00edc\u00edmi s bloky dat o velikosti alespo\u0148 512 bajt\u016f, co\u017e je odli\u0161uje od opera\u010dn\u00ed pam\u011bti, kter\u00e1 je typicky adresov\u00e1na po jednotliv\u00fdch bajtech a slou\u017e\u00ed sp\u00ed\u0161e pro do\u010dasn\u00e9 ulo\u017een\u00ed dat.",
        incorrect:
          "Perzistentn\u00ed \u00falo\u017ei\u0161t\u011b, jako nap\u0159\u00edklad SSD disky, se pou\u017e\u00edvaj\u00ed v\u00fdhradn\u011b pro kr\u00e1tkodob\u00e9 uchov\u00e1v\u00e1n\u00ed dat, kter\u00e1 se ztr\u00e1cej\u00ed po vypnut\u00ed po\u010d\u00edta\u010de, a jsou charakteristick\u00e1 operacemi pracuj\u00edc\u00edmi s jednotliv\u00fdmi bajty dat, podobn\u011b jako opera\u010dn\u00ed pam\u011b\u0165, kter\u00e1 je typicky adresov\u00e1na po bloc\u00edch a slou\u017e\u00ed prim\u00e1rn\u011b pro dlouhodob\u00e9 ulo\u017een\u00ed dat.",
        sectionNumber: "3.1.1",
        sectionTitle: "Trval\u00e9 \u00falo\u017ei\u0161t\u011b",
      },
      {
        uuid: "e11bed94-2ee7-4f3b-a2b7-d13d58336b20",
        correct:
          "Mezi hlavn\u00ed rozd\u00edly mezi perzistentn\u00edm \u00falo\u017ei\u0161t\u011bm a opera\u010dn\u00ed pam\u011bt\u00ed pat\u0159\u00ed zejm\u00e9na vy\u0161\u0161\u00ed latence perzistentn\u00edho \u00falo\u017ei\u0161t\u011b, kter\u00e9 vykazuje del\u0161\u00ed prodlevu mezi po\u017eadavkem na data a jejich zp\u0159\u00edstupn\u011bn\u00edm, a tak\u00e9 fakt, \u017ee perzistentn\u00ed \u00falo\u017ei\u0161t\u011b je navr\u017eeno pro pr\u00e1ci s bloky dat, zat\u00edmco opera\u010dn\u00ed pam\u011b\u0165 umo\u017e\u0148uje adresaci na \u00farovni jednotliv\u00fdch bajt\u016f.",
        incorrect:
          "Mezi hlavn\u00ed podobnosti mezi perzistentn\u00edm \u00falo\u017ei\u0161t\u011bm a opera\u010dn\u00ed pam\u011bt\u00ed pat\u0159\u00ed zejm\u00e9na srovnateln\u00e1 latence obou typ\u016f pam\u011bti, kdy perzistentn\u00ed \u00falo\u017ei\u0161t\u011b vykazuje podobnou prodlevu mezi po\u017eadavkem na data a jejich zp\u0159\u00edstupn\u011bn\u00edm jako opera\u010dn\u00ed pam\u011b\u0165, a tak\u00e9 fakt, \u017ee perzistentn\u00ed \u00falo\u017ei\u0161t\u011b i opera\u010dn\u00ed pam\u011b\u0165 jsou navr\u017eeny pro pr\u00e1ci s jednotliv\u00fdmi bajty dat.",
        sectionNumber: "3.1.1",
        sectionTitle: "Trval\u00e9 \u00falo\u017ei\u0161t\u011b",
      },
      {
        uuid: "b89cec01-268d-4c92-b762-a03e1eb106f6",
        correct:
          "Perzistentn\u00ed \u00falo\u017ei\u0161t\u011b, zahrnuj\u00edc\u00ed technologie jako HDD, SSD a NVMe, je prim\u00e1rn\u011b ur\u010deno pro ukl\u00e1d\u00e1n\u00ed u\u017eivatelsky relevantn\u00edch dat, jako jsou dokumenty, obr\u00e1zky a multimedi\u00e1ln\u00ed soubory, a obvykle se nevyu\u017e\u00edv\u00e1 pro do\u010dasn\u00e9 a u\u017eivatelsky nepodstatn\u00e9 meziv\u00fdsledky v\u00fdpo\u010dt\u016f, pro kter\u00e9 je vhodn\u011bj\u0161\u00ed opera\u010dn\u00ed pam\u011b\u0165 s rychlej\u0161\u00edm p\u0159\u00edstupem.",
        incorrect:
          "Perzistentn\u00ed \u00falo\u017ei\u0161t\u011b, zahrnuj\u00edc\u00ed technologie jako HDD, SSD a NVMe, je prim\u00e1rn\u011b ur\u010deno pro ukl\u00e1d\u00e1n\u00ed do\u010dasn\u00fdch a u\u017eivatelsky nepodstatn\u00fdch meziv\u00fdsledk\u016f v\u00fdpo\u010dt\u016f, a naopak se obvykle vyu\u017e\u00edv\u00e1 pro ukl\u00e1d\u00e1n\u00ed u\u017eivatelsky relevantn\u00edch dat, jako jsou dokumenty, obr\u00e1zky a multimedi\u00e1ln\u00ed soubory, pro kter\u00e9 je m\u00e9n\u011b vhodn\u00e1 opera\u010dn\u00ed pam\u011b\u0165 s rychlej\u0161\u00edm p\u0159\u00edstupem.",
        sectionNumber: "3.1.1",
        sectionTitle: "Trval\u00e9 \u00falo\u017ei\u0161t\u011b",
      },
      {
        uuid: "9d3aa61a-fe3a-4f86-8ccb-3e8a92e4d2dc",
        correct:
          "A\u010dkoliv magnetick\u00e9 p\u00e1sky a optick\u00e9 disky mohou b\u00fdt pova\u017eov\u00e1ny za typy \u00falo\u017ei\u0161\u0165, magnetick\u00e9 p\u00e1sky se odli\u0161uj\u00ed sekven\u010dn\u00edm p\u0159\u00edstupem k dat\u016fm, co\u017e je \u010din\u00ed nevhodn\u00fdmi pro abstrakci blokov\u00fdch za\u0159\u00edzen\u00ed typickou pro perzistentn\u00ed \u00falo\u017ei\u0161t\u011b, zat\u00edmco optick\u00e9 disky, i p\u0159es komplikace se z\u00e1pisem a p\u0159episov\u00e1n\u00edm, spadaj\u00ed do kategorie perzistentn\u00edch \u00falo\u017ei\u0161\u0165, i kdy\u017e \u010dasto pouze pro \u010dten\u00ed.",
        incorrect:
          "A\u010dkoliv magnetick\u00e9 p\u00e1sky a optick\u00e9 disky mohou b\u00fdt pova\u017eov\u00e1ny za typy perzistentn\u00edch \u00falo\u017ei\u0161\u0165, magnetick\u00e9 p\u00e1sky se vyzna\u010duj\u00ed p\u0159\u00edm\u00fdm p\u0159\u00edstupem k dat\u016fm, co\u017e je \u010din\u00ed ide\u00e1ln\u00edmi pro abstrakci blokov\u00fdch za\u0159\u00edzen\u00ed typickou pro perzistentn\u00ed \u00falo\u017ei\u0161t\u011b, zat\u00edmco optick\u00e9 disky, i p\u0159es jednoduchost z\u00e1pisu a p\u0159episov\u00e1n\u00ed, nespadaj\u00ed do kategorie perzistentn\u00edch \u00falo\u017ei\u0161\u0165, a to ani pro \u010dten\u00ed.",
        sectionNumber: "3.1.1",
        sectionTitle: "Trval\u00e9 \u00falo\u017ei\u0161t\u011b",
      },
      {
        uuid: "42a116ec-d707-4f12-beb9-5bee5ab71d51",
        correct:
          "V souvislosti s blokov\u011b orientovan\u00fdmi za\u0159\u00edzen\u00edmi, jako jsou pevn\u00e9 disky, plat\u00ed, \u017ee adresn\u00ed prostor je souvisl\u00fd a adresa v\u017edy odkazuje na cel\u00fd blok dat. To znamen\u00e1, \u017ee operace \u010dten\u00ed a z\u00e1pisu se prov\u00e1d\u011bj\u00ed s cel\u00fdmi bloky, co\u017e reflektuje fyzickou organizaci za\u0159\u00edzen\u00ed a li\u0161\u00ed se od jemn\u011bj\u0161\u00ed adresace v opera\u010dn\u00ed pam\u011bti.",
        incorrect:
          "V souvislosti s blokov\u011b orientovan\u00fdmi za\u0159\u00edzen\u00edmi, jako jsou pevn\u00e9 disky, adresn\u00ed prostor nen\u00ed souvisl\u00fd a adresa odkazuje pouze na \u010d\u00e1st bloku dat. Operace \u010dten\u00ed a z\u00e1pisu se mohou prov\u00e1d\u011bt s libovoln\u011b velk\u00fdmi \u010d\u00e1stmi blok\u016f, podobn\u011b jako v opera\u010dn\u00ed pam\u011bti, a fyzick\u00e1 organizace za\u0159\u00edzen\u00ed nem\u00e1 vliv na adresaci.",
        sectionNumber: "3.1.2",
        sectionTitle: "Blokov\u00e9 operace",
      },
      {
        uuid: "2310e672-538a-4e9a-bc32-4793fbad96a2",
        correct:
          "Komunikace s blokov\u011b orientovan\u00fdmi za\u0159\u00edzen\u00edmi je typicky asynchronn\u00ed kv\u016fli latenci spojen\u00e9 s mechanick\u00fdmi operacemi a p\u0159enosov\u00fdmi \u010dasy. Data se mezi za\u0159\u00edzen\u00edm a opera\u010dn\u00ed pam\u011bt\u00ed p\u0159en\u00e1\u0161ej\u00ed po v\u011bt\u0161\u00edch bloc\u00edch, co\u017e je efektivn\u00ed pro hromadn\u00e9 operace, ale zav\u00e1d\u00ed prodlevu p\u0159ed zah\u00e1jen\u00edm samotn\u00e9ho p\u0159enosu.",
        incorrect:
          "Komunikace s blokov\u011b orientovan\u00fdmi za\u0159\u00edzen\u00edmi je typicky synchronn\u00ed, proto\u017ee latence je zanedbateln\u00e1 a operace jsou okam\u017eit\u00e9. Data se mezi za\u0159\u00edzen\u00edm a opera\u010dn\u00ed pam\u011bt\u00ed p\u0159en\u00e1\u0161ej\u00ed po jednotliv\u00fdch bajtech, co\u017e umo\u017e\u0148uje jemnozrnnou kontrolu nad p\u0159enosem a eliminuje prodlevy spojen\u00e9 s blokov\u00fdm p\u0159enosem.",
        sectionNumber: "3.1.2",
        sectionTitle: "Blokov\u00e9 operace",
      },
      {
        uuid: "760db8d7-ec61-412e-b25c-1d296dbe15a5",
        correct:
          'Opera\u010dn\u00ed syst\u00e9my mus\u00ed \u0159e\u0161it probl\u00e9m latence, kter\u00e1 se projevuje jako prodleva mezi po\u017eadavkem na ulo\u017een\u00ed dat a potvrzen\u00edm o \u00fasp\u011b\u0161n\u00e9m z\u00e1pisu, proto\u017ee na rozd\u00edl od latence opera\u010dn\u00ed pam\u011bti nelze tuto latenci efektivn\u011b skr\u00fdt na hardwarov\u00e9 \u00farovni, co\u017e klade zv\u00fd\u0161en\u00e9 n\u00e1roky na n\u00e1vrh a implementaci mechanism\u016f zaji\u0161\u0165uj\u00edc\u00edch spolehliv\u00e9 a trval\u00e9 ulo\u017een\u00ed dat, zn\u00e1m\u00e9 jako "durability" v kontextu ACID vlastnost\u00ed datab\u00e1zov\u00fdch transakc\u00ed.',
        incorrect:
          'Opera\u010dn\u00ed syst\u00e9my se nemus\u00ed prim\u00e1rn\u011b zab\u00fdvat probl\u00e9mem latence p\u0159i ukl\u00e1d\u00e1n\u00ed dat, proto\u017ee modern\u00ed hardwarov\u00e9 technologie efektivn\u011b maskuj\u00ed prodlevu mezi po\u017eadavkem na ulo\u017een\u00ed a potvrzen\u00edm o \u00fasp\u011b\u0161n\u00e9m z\u00e1pisu, a proto je latence v kontextu trval\u00e9ho ulo\u017een\u00ed dat, zn\u00e1m\u00e9ho jako "durability" v ACID vlastnostech datab\u00e1z\u00ed, sp\u00ed\u0161e margin\u00e1ln\u00edm probl\u00e9mem, kter\u00fd nem\u00e1 v\u00fdznamn\u00fd dopad na celkovou spolehlivost syst\u00e9mu.',
        sectionNumber: "3.1.3",
        sectionTitle: "Latence",
      },
      {
        uuid: "f1803347-73fe-48b1-b5cf-dc55c56e13a0",
        correct:
          "Opera\u010dn\u00ed syst\u00e9m implementuje mezipam\u011b\u0165 pro trval\u00e1 \u00falo\u017ei\u0161t\u011b softwarov\u011b a kl\u00ed\u010dov\u00fdm aspektem je politika mezipam\u011bti, kter\u00e1 ur\u010duje, kter\u00e9 ned\u00e1vno \u010dten\u00e9 bloky dat z\u016fstanou ulo\u017eeny v opera\u010dn\u00ed pam\u011bti, aby se urychlil budouc\u00ed p\u0159\u00edstup k nim, p\u0159i\u010dem\u017e c\u00edlem je efektivn\u011b skr\u00fdt latenci spojenou s pomalej\u0161\u00edm p\u0159\u00edstupem k trval\u00e9mu \u00falo\u017ei\u0161ti.",
        incorrect:
          "Opera\u010dn\u00ed syst\u00e9m implementuje mezipam\u011b\u0165 pro trval\u00e1 \u00falo\u017ei\u0161t\u011b hardwarov\u011b a kl\u00ed\u010dov\u00fdm aspektem je typ pam\u011bti, kter\u00e1 ur\u010duje, kter\u00e9 ned\u00e1vno \u010dten\u00e9 bloky dat z\u016fstanou ulo\u017eeny v opera\u010dn\u00ed pam\u011bti, aby se urychlil budouc\u00ed p\u0159\u00edstup k nim, p\u0159i\u010dem\u017e c\u00edlem je prim\u00e1rn\u011b zv\u00fd\u0161it spolehlivost ukl\u00e1d\u00e1n\u00ed dat na trval\u00e9m \u00falo\u017ei\u0161ti.",
        sectionNumber: "3.1.4",
        sectionTitle: "Mezipam\u011b\u0165",
      },
      {
        uuid: "fe4f923a-1ebb-41bb-811b-cca7710ef869",
        correct:
          "V kontextu mezipam\u011bti trval\u00fdch \u00falo\u017ei\u0161\u0165 opera\u010dn\u00ed syst\u00e9m \u010dasto vyu\u017e\u00edv\u00e1 techniku p\u0159edna\u010d\u00edt\u00e1n\u00ed dat, kdy se bloky dat na\u010d\u00edtaj\u00ed do mezipam\u011bti s p\u0159edstihem, je\u0161t\u011b p\u0159edt\u00edm, ne\u017e o n\u011b aplikace explicitn\u011b po\u017e\u00e1d\u00e1, a to zejm\u00e9na v situac\u00edch sekven\u010dn\u00edho \u010dten\u00ed, aby se maximalizovala efektivita vyu\u017eit\u00ed p\u0159enosov\u00e9 kapacity a sn\u00ed\u017eila latence p\u0159\u00edstupu.",
        incorrect:
          "V kontextu mezipam\u011bti trval\u00fdch \u00falo\u017ei\u0161\u0165 opera\u010dn\u00ed syst\u00e9m z\u00e1sadn\u011b nepou\u017e\u00edv\u00e1 techniku p\u0159edna\u010d\u00edt\u00e1n\u00ed dat, proto\u017ee p\u0159edna\u010d\u00edt\u00e1n\u00ed blok\u016f dat do mezipam\u011bti s p\u0159edstihem, je\u0161t\u011b p\u0159edt\u00edm, ne\u017e o n\u011b aplikace explicitn\u011b po\u017e\u00e1d\u00e1, by mohlo v\u00e9st k neefektivn\u00edmu vyu\u017eit\u00ed opera\u010dn\u00ed pam\u011bti a zbyte\u010dn\u00e9mu zat\u00ed\u017een\u00ed syst\u00e9mu.",
        sectionNumber: "3.1.4",
        sectionTitle: "Mezipam\u011b\u0165",
      },
      {
        uuid: "440d9d8b-c071-4064-bbeb-d072978d6a25",
        correct:
          "Mezipam\u011b\u0165 opera\u010dn\u00edho syst\u00e9mu, implementovan\u00e1 pro trval\u00e1 \u00falo\u017ei\u0161t\u011b, prim\u00e1rn\u011b slou\u017e\u00ed ke zlep\u0161en\u00ed rychlosti p\u0159\u00edstupu k dat\u016fm t\u00edm, \u017ee uchov\u00e1v\u00e1 \u010dasto nebo ned\u00e1vno pou\u017e\u00edvan\u00e9 bloky v rychlej\u0161\u00ed opera\u010dn\u00ed pam\u011bti, a\u010dkoli nem\u00e1 p\u0159\u00edm\u00fd vliv na spolehlivost samotn\u00e9ho trval\u00e9ho \u00falo\u017ei\u0161t\u011b, ale z\u00e1sadn\u011b ovliv\u0148uje celkovou latenci operac\u00ed \u010dten\u00ed a z\u00e1pisu.",
        incorrect:
          "Mezipam\u011b\u0165 opera\u010dn\u00edho syst\u00e9mu, implementovan\u00e1 pro trval\u00e1 \u00falo\u017ei\u0161t\u011b, prim\u00e1rn\u011b slou\u017e\u00ed ke zv\u00fd\u0161en\u00ed spolehlivosti ukl\u00e1d\u00e1n\u00ed dat na trval\u00e9m \u00falo\u017ei\u0161ti t\u00edm, \u017ee redundantn\u011b ukl\u00e1d\u00e1 data v rychlej\u0161\u00ed opera\u010dn\u00ed pam\u011bti, a\u010dkoli nem\u00e1 \u017e\u00e1dn\u00fd vliv na rychlost p\u0159\u00edstupu k dat\u016fm, ale z\u00e1sadn\u011b ovliv\u0148uje integritu dat v p\u0159\u00edpad\u011b selh\u00e1n\u00ed trval\u00e9ho \u00falo\u017ei\u0161t\u011b.",
        sectionNumber: "3.1.4",
        sectionTitle: "Mezipam\u011b\u0165",
      },
      {
        uuid: "2f5fb911-83c7-40f8-8b12-72034188c7b5",
        correct:
          "Vyrovn\u00e1vac\u00ed pam\u011b\u0165 v opera\u010dn\u00edch syst\u00e9mech slou\u017e\u00ed k ukl\u00e1d\u00e1n\u00ed dat ur\u010den\u00fdch k z\u00e1pisu na trval\u00e9 \u00falo\u017ei\u0161t\u011b, \u010d\u00edm\u017e se li\u0161\u00ed od mezipam\u011bti, kter\u00e1 prim\u00e1rn\u011b slou\u017e\u00ed k urychlen\u00ed \u010dten\u00ed dat z trval\u00e9ho \u00falo\u017ei\u0161t\u011b do aplikace, a jej\u00edm hlavn\u00edm \u00fa\u010delem je vyrovn\u00e1vat rozd\u00edly v rychlosti mezi aplikac\u00ed a pomal\u00fdm trval\u00fdm \u00falo\u017ei\u0161t\u011bm p\u0159i z\u00e1pisu dat.",
        incorrect:
          "Vyrovn\u00e1vac\u00ed pam\u011b\u0165 v opera\u010dn\u00edch syst\u00e9mech slou\u017e\u00ed k ukl\u00e1d\u00e1n\u00ed dat ur\u010den\u00fdch ke \u010dten\u00ed z trval\u00e9ho \u00falo\u017ei\u0161t\u011b, \u010d\u00edm\u017e se neli\u0161\u00ed od mezipam\u011bti, kter\u00e1 prim\u00e1rn\u011b slou\u017e\u00ed k urychlen\u00ed z\u00e1pisu dat na trval\u00e9 \u00falo\u017ei\u0161t\u011b, a jej\u00edm hlavn\u00edm \u00fa\u010delem je vyrovn\u00e1vat rozd\u00edly v rychlosti mezi aplikac\u00ed a rychl\u00fdm trval\u00fdm \u00falo\u017ei\u0161t\u011bm p\u0159i \u010dten\u00ed dat.",
        sectionNumber: "3.1.5",
        sectionTitle: "Vyrovn\u00e1vac\u00ed pam\u011b\u0165",
      },
      {
        uuid: "a8f1b0e7-99d5-4998-bad4-d03568e1078a",
        correct:
          "Vyrovn\u00e1vac\u00ed pam\u011b\u0165, implementovan\u00e1 v opera\u010dn\u00edm syst\u00e9mu pro z\u00e1pis dat na trval\u00e9 \u00falo\u017ei\u0161t\u011b, je do\u010dasn\u00e9 \u00falo\u017ei\u0161t\u011b, co\u017e znamen\u00e1, \u017ee v p\u0159\u00edpad\u011b neo\u010dek\u00e1van\u00e9ho v\u00fdpadku nap\u00e1jen\u00ed nebo syst\u00e9mu mohou b\u00fdt data ulo\u017een\u00e1 pouze ve vyrovn\u00e1vac\u00ed pam\u011bti ztracena, a proto je d\u016fle\u017eit\u00e1 jej\u00ed synchronizace s mezipam\u011bt\u00ed pro zaji\u0161t\u011bn\u00ed konzistence dat.",
        incorrect:
          "Vyrovn\u00e1vac\u00ed pam\u011b\u0165, implementovan\u00e1 v opera\u010dn\u00edm syst\u00e9mu pro z\u00e1pis dat na trval\u00e9 \u00falo\u017ei\u0161t\u011b, je trval\u00e9 \u00falo\u017ei\u0161t\u011b, co\u017e znamen\u00e1, \u017ee v p\u0159\u00edpad\u011b neo\u010dek\u00e1van\u00e9ho v\u00fdpadku nap\u00e1jen\u00ed nebo syst\u00e9mu nemohou b\u00fdt data ulo\u017een\u00e1 ve vyrovn\u00e1vac\u00ed pam\u011bti ztracena, a proto nen\u00ed d\u016fle\u017eit\u00e1 jej\u00ed synchronizace s mezipam\u011bt\u00ed pro zaji\u0161t\u011bn\u00ed konzistence dat.",
        sectionNumber: "3.1.5",
        sectionTitle: "Vyrovn\u00e1vac\u00ed pam\u011b\u0165",
      },
      {
        uuid: "d2a723dd-2866-463d-a74f-e24be5ee0c0f",
        correct:
          "Opera\u010dn\u00ed syst\u00e9my mohou implementovat vyrovn\u00e1vac\u00ed pam\u011bti dv\u011bma hlavn\u00edmi zp\u016fsoby: bu\u010f odd\u011blen\u011b od mezipam\u011bti, kdy vyrovn\u00e1vac\u00ed pam\u011b\u0165 dr\u017e\u00ed jak po\u017eadavky na z\u00e1pis, tak samotn\u00e1 data, nebo propojen\u011b s mezipam\u011bt\u00ed, kde vyrovn\u00e1vac\u00ed pam\u011b\u0165 obsahuje jen frontu po\u017eadavk\u016f a data jsou ulo\u017eena v mezipam\u011bti, co\u017e se chov\u00e1 jako mezipam\u011b\u0165 s opo\u017ed\u011bn\u00fdm z\u00e1pisem.",
        incorrect:
          "Opera\u010dn\u00ed syst\u00e9my mohou implementovat vyrovn\u00e1vac\u00ed pam\u011bti dv\u011bma hlavn\u00edmi zp\u016fsoby: bu\u010f odd\u011blen\u011b od mezipam\u011bti, kdy vyrovn\u00e1vac\u00ed pam\u011b\u0165 dr\u017e\u00ed pouze po\u017eadavky na z\u00e1pis, a data jsou ulo\u017eena v mezipam\u011bti, nebo propojen\u011b s trval\u00fdm \u00falo\u017ei\u0161t\u011bm, kde vyrovn\u00e1vac\u00ed pam\u011b\u0165 obsahuje jak frontu po\u017eadavk\u016f, tak samotn\u00e1 data, co\u017e se chov\u00e1 jako mezipam\u011b\u0165 s okam\u017eit\u00fdm z\u00e1pisem.",
        sectionNumber: "3.1.5",
        sectionTitle: "Vyrovn\u00e1vac\u00ed pam\u011b\u0165",
      },
      {
        uuid: "4f1d6c28-31cd-4b7c-86c5-9e3d0259d60b",
        correct:
          "Pam\u011bti typu mezipam\u011bti a vyrovn\u00e1vac\u00ed pam\u011bti existuj\u00ed nejen na \u00farovni opera\u010dn\u00edho syst\u00e9mu, ale tak\u00e9 na stran\u011b samotn\u00fdch za\u0159\u00edzen\u00ed trval\u00e9ho \u00falo\u017ei\u0161t\u011b, kde pln\u00ed podobnou funkci sni\u017eov\u00e1n\u00ed latence, av\u0161ak tyto pam\u011bti na stran\u011b za\u0159\u00edzen\u00ed maj\u00ed obvykle men\u0161\u00ed p\u0159\u00edm\u00fd dopad na fungov\u00e1n\u00ed a spr\u00e1vu opera\u010dn\u00edho syst\u00e9mu ve srovn\u00e1n\u00ed s pam\u011btmi implementovan\u00fdmi v j\u00e1d\u0159e syst\u00e9mu.",
        incorrect:
          "Pam\u011bti typu mezipam\u011bti a vyrovn\u00e1vac\u00ed pam\u011bti existuj\u00ed pouze na \u00farovni opera\u010dn\u00edho syst\u00e9mu a nemaj\u00ed \u017e\u00e1dnou obdobu na stran\u011b samotn\u00fdch za\u0159\u00edzen\u00ed trval\u00e9ho \u00falo\u017ei\u0161t\u011b, proto\u017ee ve\u0161ker\u00e9 mechanismy pro sni\u017eov\u00e1n\u00ed latence a zlep\u0161en\u00ed v\u00fdkonu trval\u00fdch \u00falo\u017ei\u0161\u0165 jsou pln\u011b v kompetenci opera\u010dn\u00edho syst\u00e9mu a implementace pam\u011bt\u00ed na stran\u011b za\u0159\u00edzen\u00ed by byla redundantn\u00ed a nem\u011bla by \u017e\u00e1dn\u00fd vliv na v\u00fdkon syst\u00e9mu.",
        sectionNumber: "3.1.5",
        sectionTitle: "Vyrovn\u00e1vac\u00ed pam\u011b\u0165",
      },
      {
        uuid: "ed12eda8-65b1-40c1-a8f6-94e15316191e",
        correct:
          "Pro v\u011bt\u0161inu \u00falo\u017en\u00fdch za\u0159\u00edzen\u00ed plat\u00ed, \u017ee sekven\u010dn\u00ed p\u0159\u00edstup, tedy \u010dten\u00ed dat z po sob\u011b jdouc\u00edch adres, je v\u00fdrazn\u011b rychlej\u0161\u00ed ne\u017e nahodil\u00fd p\u0159\u00edstup, kdy jsou \u010dteny adresy, kter\u00e9 spolu logicky nesouvis\u00ed, co\u017e je d\u00e1no fyzik\u00e1ln\u00edmi vlastnostmi a architekturou \u00falo\u017en\u00fdch m\u00e9di\u00ed, jako jsou rota\u010dn\u00ed disky, kde mechanick\u00fd pohyb hlavy hraje kl\u00ed\u010dovou roli.",
        incorrect:
          "Pro v\u011bt\u0161inu \u00falo\u017en\u00fdch za\u0159\u00edzen\u00ed plat\u00ed, \u017ee nahodil\u00fd p\u0159\u00edstup, tedy \u010dten\u00ed dat z adres, kter\u00e9 spolu logicky nesouvis\u00ed, je v\u00fdrazn\u011b rychlej\u0161\u00ed ne\u017e sekven\u010dn\u00ed p\u0159\u00edstup, kdy jsou \u010dteny data z po sob\u011b jdouc\u00edch adres, proto\u017ee modern\u00ed technologie, jako jsou SSD disky, optimalizuj\u00ed v\u00fdkon pro n\u00e1hodn\u00fd p\u0159\u00edstup a eliminuj\u00ed mechanick\u00e1 omezen\u00ed rota\u010dn\u00edch disk\u016f.",
        sectionNumber: "3.1.6",
        sectionTitle: "Pl\u00e1nov\u00e1n\u00ed operac\u00ed",
      },
      {
        uuid: "d41a4ea6-d29f-4436-abc9-bf85be486566",
        correct:
          "Opera\u010dn\u00ed syst\u00e9my vyu\u017e\u00edvaj\u00ed vysokou m\u00edru soub\u011b\u017enosti operac\u00ed s trval\u00fdm \u00falo\u017ei\u0161t\u011bm, jeliko\u017e do syst\u00e9mu p\u0159ich\u00e1z\u00ed mnoho nez\u00e1visl\u00fdch po\u017eadavk\u016f na diskov\u00e9 operace od soub\u011b\u017en\u00fdch vl\u00e1ken, co\u017e umo\u017e\u0148uje opera\u010dn\u00edmu syst\u00e9mu p\u0159euspo\u0159\u00e1d\u00e1vat tyto po\u017eadavky a optimalizovat tak propustnost syst\u00e9mu, nap\u0159\u00edklad seskupov\u00e1n\u00edm sekven\u010dn\u00edch z\u00e1pis\u016f do v\u011bt\u0161\u00edch blok\u016f.",
        incorrect:
          "Opera\u010dn\u00ed syst\u00e9my se sna\u017e\u00ed minimalizovat soub\u011b\u017enost operac\u00ed s trval\u00fdm \u00falo\u017ei\u0161t\u011bm, jeliko\u017e soub\u011b\u017en\u00e9 diskov\u00e9 operace od mnoha vl\u00e1ken vedou ke sn\u00ed\u017een\u00ed v\u00fdkonu syst\u00e9mu a fragmentaci dat, proto opera\u010dn\u00ed syst\u00e9m striktn\u011b dodr\u017euje po\u0159ad\u00ed p\u0159\u00edchoz\u00edch po\u017eadavk\u016f a neprov\u00e1d\u00ed \u017e\u00e1dn\u00e9 p\u0159euspo\u0159\u00e1d\u00e1v\u00e1n\u00ed diskov\u00fdch operac\u00ed.",
        sectionNumber: "3.1.6",
        sectionTitle: "Pl\u00e1nov\u00e1n\u00ed operac\u00ed",
      },
      {
        uuid: "f8506701-c842-4f07-a88e-a253ffbd61c6",
        correct:
          "U operac\u00ed \u010dten\u00ed je prostor pro p\u0159euspo\u0159\u00e1d\u00e1n\u00ed obvykle men\u0161\u00ed ne\u017e u operac\u00ed z\u00e1pisu, proto\u017ee aplikace, kter\u00e1 operaci \u010dten\u00ed vy\u017e\u00e1dala, typicky mus\u00ed \u010dekat na doru\u010den\u00ed dat a nem\u016f\u017ee pokra\u010dovat ve sv\u00e9 \u010dinnosti ani generovat dal\u0161\u00ed po\u017eadavky na \u010dten\u00ed, dokud nen\u00ed aktu\u00e1ln\u00ed po\u017eadavek obslou\u017een a data nejsou k dispozici.",
        incorrect:
          "U operac\u00ed \u010dten\u00ed je prostor pro p\u0159euspo\u0159\u00e1d\u00e1n\u00ed obvykle v\u011bt\u0161\u00ed ne\u017e u operac\u00ed z\u00e1pisu, proto\u017ee modern\u00ed opera\u010dn\u00ed syst\u00e9my a diskov\u00e9 \u0159adi\u010de aktivn\u011b p\u0159euspo\u0159\u00e1d\u00e1vaj\u00ed operace \u010dten\u00ed, aby maximalizovaly v\u00fdkon a minimalizovaly latenci, a to i v p\u0159\u00edpadech, kdy aplikace \u010dek\u00e1 na data, s c\u00edlem prediktivn\u00edho na\u010d\u00edt\u00e1n\u00ed a optimalizace p\u0159\u00edstupov\u00fdch vzor\u016f.",
        sectionNumber: "3.1.6",
        sectionTitle: "Pl\u00e1nov\u00e1n\u00ed operac\u00ed",
      },
      {
        uuid: "75c91a6e-8f5b-4633-9bf7-45fd81fa0df4",
        correct:
          "V kontextu virtualizace trval\u00fdch \u00falo\u017ei\u0161\u0165 se tradi\u010dn\u00ed p\u0159\u00edstup vytv\u00e1\u0159en\u00ed soukrom\u00fdch instanc\u00ed, \u00fasp\u011b\u0161n\u011b aplikovan\u00fd u pam\u011bti a procesoru, ukazuje jako nevhodn\u00fd, proto\u017ee u\u017eivatelsk\u00e1 data vy\u017eaduj\u00ed interakci a nemohou b\u00fdt skryta v priv\u00e1tn\u00edm prostoru jednoho programu.  Alternativn\u00ed \u0159e\u0161en\u00ed zahrnuj\u00ed bu\u010f poskytnut\u00ed vy\u0161\u0161\u00ed \u00farovn\u011b abstrakce opera\u010dn\u00edm syst\u00e9mem, kde trval\u00e9 \u00falo\u017ei\u0161t\u011b nen\u00ed aplikac\u00edm p\u0159\u00edmo p\u0159\u00edstupn\u00e9, nebo vy\u010dlen\u011bn\u00ed specializovan\u00e9 aplikace pro spr\u00e1vu dat, skrze kterou ostatn\u00ed aplikace interaguj\u00ed s \u00falo\u017ei\u0161t\u011bm.",
        incorrect:
          "V kontextu virtualizace trval\u00fdch \u00falo\u017ei\u0161\u0165 se tradi\u010dn\u00ed p\u0159\u00edstup vytv\u00e1\u0159en\u00ed soukrom\u00fdch instanc\u00ed, \u00fasp\u011b\u0161n\u011b aplikovan\u00fd u pam\u011bti a procesoru, je ide\u00e1ln\u00edm \u0159e\u0161en\u00edm, proto\u017ee zaji\u0161\u0165uje izolaci a bezpe\u010dnost dat ka\u017ed\u00e9ho programu. Alternativn\u00ed \u0159e\u0161en\u00ed zahrnuj\u00ed pouze vy\u010dlen\u011bn\u00ed specializovan\u00e9 aplikace pro spr\u00e1vu dat, skrze kterou ostatn\u00ed aplikace interaguj\u00ed s \u00falo\u017ei\u0161t\u011bm, p\u0159i\u010dem\u017e abstrakce opera\u010dn\u00edho syst\u00e9mu nen\u00ed pova\u017eov\u00e1na za relevantn\u00ed.",
        sectionNumber: "3.1.7",
        sectionTitle: "Probl\u00e9my virtualizace",
      },
      {
        uuid: "2cc38139-4a7b-4b95-a1b1-eb17eaa48a1f",
        correct:
          "Ob\u011b navrhovan\u00e1 \u0159e\u0161en\u00ed pro virtualizaci trval\u00fdch \u00falo\u017ei\u0161\u0165, tedy abstrakce na \u00farovni opera\u010dn\u00edho syst\u00e9mu a vy\u010dlen\u011bn\u00ed specializovan\u00e9 aplikace pro spr\u00e1vu \u00falo\u017ei\u0161t\u011b, se v z\u00e1sad\u011b sbli\u017euj\u00ed v omezen\u00ed p\u0159\u00edm\u00e9ho p\u0159\u00edstupu k fyzick\u00e9mu \u00falo\u017ei\u0161ti na jedin\u00fd program.  Tento program, a\u0165 u\u017e je sou\u010d\u00e1st\u00ed opera\u010dn\u00edho syst\u00e9mu nebo samostatnou aplikac\u00ed,  pak pln\u00ed kl\u00ed\u010dovou roli v rozhodov\u00e1n\u00ed o fyzick\u00e9 organizaci dat, povolen\u00fdch operac\u00edch a p\u0159\u00edstupov\u00fdch pr\u00e1vech pro ostatn\u00ed programy.",
        incorrect:
          "Ob\u011b navrhovan\u00e1 \u0159e\u0161en\u00ed pro virtualizaci trval\u00fdch \u00falo\u017ei\u0161\u0165 se z\u00e1sadn\u011b li\u0161\u00ed, p\u0159i\u010dem\u017e abstrakce na \u00farovni opera\u010dn\u00edho syst\u00e9mu umo\u017e\u0148uje p\u0159\u00edm\u00fd p\u0159\u00edstup aplikac\u00ed k fyzick\u00e9mu \u00falo\u017ei\u0161ti, zat\u00edmco vy\u010dlen\u011bn\u00ed specializovan\u00e9 aplikace pro spr\u00e1vu \u00falo\u017ei\u0161t\u011b tento p\u0159\u00edstup omezuje.  Nicm\u00e9n\u011b, ani v jednom z t\u011bchto \u0159e\u0161en\u00ed nem\u00e1 program spravuj\u00edc\u00ed \u00falo\u017ei\u0161t\u011b v\u00fdznamn\u00fd vliv na organizaci dat, operace nebo p\u0159\u00edstupov\u00e1 pr\u00e1va, proto\u017ee tato rozhodnut\u00ed jsou pln\u011b v kompetenci opera\u010dn\u00edho syst\u00e9mu.",
        sectionNumber: "3.1.7",
        sectionTitle: "Probl\u00e9my virtualizace",
      },
      {
        uuid: "6a8b01de-54ab-4fe3-88a0-a7ec63fdb2d8",
        correct:
          "Pokud by virtualizace trval\u00e9ho \u00falo\u017ei\u0161t\u011b spo\u010d\u00edvala v\u00fdhradn\u011b v poskytov\u00e1n\u00ed soukrom\u00fdch virtu\u00e1ln\u00edch instanc\u00ed ka\u017ed\u00e9mu programu, u\u017eivatel by v prohl\u00ed\u017ee\u010di soubor\u016f standardn\u011b nevid\u011bl \u017e\u00e1dn\u00e1 sv\u00e1 data.  To je zp\u016fsobeno t\u00edm, \u017ee data ulo\u017een\u00e1 v soukrom\u00e9 instanci jednoho programu by nebyla automaticky sd\u00edlena s jin\u00fdmi programy, v\u010detn\u011b prohl\u00ed\u017ee\u010de soubor\u016f, kter\u00fd by tak nem\u011bl p\u0159\u00edstup k dat\u016fm ulo\u017een\u00fdm jin\u00fdmi aplikacemi, pokud by je tam prohl\u00ed\u017ee\u010d s\u00e1m neulo\u017eil.",
        incorrect:
          "Pokud by virtualizace trval\u00e9ho \u00falo\u017ei\u0161t\u011b spo\u010d\u00edvala v\u00fdhradn\u011b v poskytov\u00e1n\u00ed soukrom\u00fdch virtu\u00e1ln\u00edch instanc\u00ed ka\u017ed\u00e9mu programu, u\u017eivatel by v prohl\u00ed\u017ee\u010di soubor\u016f bez probl\u00e9m\u016f vid\u011bl v\u0161echna sv\u00e1 data.  To je proto, \u017ee opera\u010dn\u00ed syst\u00e9m by automaticky zaji\u0161\u0165oval sd\u00edlen\u00ed dat mezi v\u0161emi virtu\u00e1ln\u00edmi instancemi a prohl\u00ed\u017ee\u010dem soubor\u016f, tak\u017ee by u\u017eivatel m\u011bl kompletn\u00ed p\u0159ehled o v\u0161ech ulo\u017een\u00fdch datech bez ohledu na to, kter\u00fd program je ulo\u017eil.",
        sectionNumber: "3.1.7",
        sectionTitle: "Probl\u00e9my virtualizace",
      },
      {
        uuid: "9fbc4d58-49f6-42a1-81c0-dcade8b82c67",
        correct:
          "Souborov\u00fd syst\u00e9m, poskytovan\u00fd opera\u010dn\u00edm syst\u00e9mem, p\u0159edstavuje nejb\u011b\u017en\u011bj\u0161\u00ed metodu virtualizace trval\u00fdch \u00falo\u017ei\u0161\u0165, kter\u00e1 umo\u017e\u0148uje \u0159\u00edzen\u00fd p\u0159\u00edstup k dat\u016fm pro mnoho aplikac\u00ed sou\u010dasn\u011b a nab\u00edz\u00ed u\u017eivatel\u016fm mo\u017enost organizovat a spravovat data, \u010d\u00edm\u017e se st\u00e1v\u00e1 kl\u00ed\u010dovou abstrakc\u00ed pro pr\u00e1ci s daty v modern\u00edch v\u00fdpo\u010detn\u00edch syst\u00e9mech.",
        incorrect:
          "Souborov\u00fd syst\u00e9m, poskytovan\u00fd opera\u010dn\u00edm syst\u00e9mem, je sice metodou virtualizace trval\u00fdch \u00falo\u017ei\u0161\u0165, ale je ur\u010den pouze pro specifick\u00e9 aplikace, neumo\u017e\u0148uje sou\u010dasn\u00fd p\u0159\u00edstup v\u00edce aplikac\u00edm a spr\u00e1vu dat zaji\u0161\u0165uje v\u00fdhradn\u011b syst\u00e9mov\u00fd administr\u00e1tor, nikoliv u\u017eivatel\u00e9, co\u017e omezuje jeho univerz\u00e1lnost a praktick\u00e9 vyu\u017eit\u00ed v b\u011b\u017en\u00fdch sc\u00e9n\u00e1\u0159\u00edch.",
        sectionNumber: "3.1.8",
        sectionTitle: "Metody virtualizace",
      },
      {
        uuid: "87ddbd78-764d-4d9c-b9d6-9c0f5bb254c6",
        correct:
          "Virtualizace na aplika\u010dn\u00ed \u00farovni, typicky reprezentovan\u00e1 rela\u010dn\u00edmi datab\u00e1zov\u00fdmi syst\u00e9my (RDBMS), spo\u010d\u00edv\u00e1 v p\u0159\u00edm\u00e9m p\u0159\u00edstupu vybran\u00e9 aplikace k trval\u00e9mu \u00falo\u017ei\u0161ti, p\u0159i\u010dem\u017e tato aplikace zodpov\u00edd\u00e1 za spr\u00e1vu dat a poskytuje k nim p\u0159\u00edstup ostatn\u00edm aplikac\u00edm prost\u0159ednictv\u00edm definovan\u00fdch aplika\u010dn\u00edch protokol\u016f, co\u017e umo\u017e\u0148uje specializovan\u00e9 a efektivn\u00ed zpracov\u00e1n\u00ed dat.",
        incorrect:
          "Virtualizace na aplika\u010dn\u00ed \u00farovni, typicky reprezentovan\u00e1 rela\u010dn\u00edmi datab\u00e1zov\u00fdmi syst\u00e9my (RDBMS), spo\u010d\u00edv\u00e1 v zprost\u0159edkovan\u00e9m p\u0159\u00edstupu aplikac\u00ed k trval\u00e9mu \u00falo\u017ei\u0161ti skrze opera\u010dn\u00ed syst\u00e9m, p\u0159i\u010dem\u017e opera\u010dn\u00ed syst\u00e9m zodpov\u00edd\u00e1 za spr\u00e1vu dat a aplikace mezi sebou komunikuj\u00ed p\u0159\u00edmo bez aplika\u010dn\u00edch protokol\u016f, co\u017e zjednodu\u0161uje spr\u00e1vu dat, ale sni\u017euje flexibilitu a v\u00fdkon syst\u00e9mu.",
        sectionNumber: "3.1.8",
        sectionTitle: "Metody virtualizace",
      },
      {
        uuid: "51bd2fca-05fc-4dc6-9985-b46c8955315c",
        correct:
          "Vytvo\u0159en\u00ed izolovan\u00e9 virtu\u00e1ln\u00ed instance trval\u00e9ho \u00falo\u017ei\u0161t\u011b, analogick\u00e9 k virtualizaci opera\u010dn\u00ed pam\u011bti, se uplat\u0148uje p\u0159edev\u0161\u00edm v kontextu virtualizace opera\u010dn\u00edch syst\u00e9m\u016f a m\u016f\u017ee slou\u017eit jako podp\u016frn\u00fd mechanismus pro aplika\u010dn\u00ed virtualizaci, i kdy\u017e v b\u011b\u017en\u00fdch sc\u00e9n\u00e1\u0159\u00edch nen\u00ed prim\u00e1rn\u011b pova\u017eov\u00e1no za neju\u017eite\u010dn\u011bj\u0161\u00ed metodu pro obecn\u00e9 \u00fa\u010dely spr\u00e1vy dat.",
        incorrect:
          "Vytvo\u0159en\u00ed izolovan\u00e9 virtu\u00e1ln\u00ed instance trval\u00e9ho \u00falo\u017ei\u0161t\u011b, analogick\u00e9 k virtualizaci opera\u010dn\u00ed pam\u011bti, je pova\u017eov\u00e1no za nejuniverz\u00e1ln\u011bj\u0161\u00ed metodu virtualizace trval\u00fdch \u00falo\u017ei\u0161\u0165 v b\u011b\u017en\u00fdch sc\u00e9n\u00e1\u0159\u00edch, zat\u00edmco v kontextu virtualizace opera\u010dn\u00edch syst\u00e9m\u016f a aplika\u010dn\u00ed virtualizace se jeho uplatn\u011bn\u00ed minimalizuje kv\u016fli slo\u017eitosti a neefektivit\u011b v porovn\u00e1n\u00ed s jin\u00fdmi metodami.",
        sectionNumber: "3.1.8",
        sectionTitle: "Metody virtualizace",
      },
      {
        uuid: "1b58f20d-db46-4a07-a343-bd106a169f10",
        correct:
          "Technologie RAID, neboli Redundant Array of Inexpensive Disks, je postavena na principu virtualizace, kter\u00e1 kombinuje v\u00edce fyzick\u00fdch \u00falo\u017ei\u0161\u0165 do jednoho virtu\u00e1ln\u00edho celku s c\u00edlem zv\u00fd\u0161it spolehlivost a dostupnost dat skrze redundanci, a to rozlo\u017een\u00edm dat mezi tato fyzick\u00e1 za\u0159\u00edzen\u00ed a umo\u017en\u011bn\u00edm syst\u00e9mu fungovat i po selh\u00e1n\u00ed jednoho z nich, s v\u00fdjimkou konfigurace RAID 0, kter\u00e1 redundanci neposkytuje.",
        incorrect:
          "Technologie RAID, neboli Redundant Array of Inexpensive Disks, je postavena na principu virtualizace, kter\u00e1 kombinuje v\u00edce fyzick\u00fdch \u00falo\u017ei\u0161\u0165 do jednoho virtu\u00e1ln\u00edho celku s c\u00edlem zv\u00fd\u0161it v\u00fdhradn\u011b v\u00fdkon \u010dten\u00ed a z\u00e1pisu dat, a to rozlo\u017een\u00edm dat mezi tato fyzick\u00e1 za\u0159\u00edzen\u00ed, p\u0159i\u010dem\u017e hlavn\u00edm c\u00edlem RAID je maximalizace rychlosti operac\u00ed, a spolehlivost dat je pouze vedlej\u0161\u00edm efektem.",
        sectionNumber: "3.1.9",
        sectionTitle: "RAID",
      },
      {
        uuid: "132eed4d-0788-4eb3-98a5-e15dedd73a73",
        correct:
          "Softwarov\u00fd RAID, b\u011b\u017en\u011b implementovan\u00fd v modern\u00edch opera\u010dn\u00edch syst\u00e9mech, je integr\u00e1ln\u00ed sou\u010d\u00e1st\u00ed blokov\u00e9 vrstvy opera\u010dn\u00edho syst\u00e9mu, kde se prezentuje vy\u0161\u0161\u00edm vrstv\u00e1m, jako je souborov\u00fd syst\u00e9m, jako jedin\u00e9 a konzistentn\u00ed virtu\u00e1ln\u00ed \u00falo\u017ei\u0161t\u011b, p\u0159i\u010dem\u017e operace \u010dten\u00ed a z\u00e1pisu jsou transparentn\u011b distribuov\u00e1ny mezi jednotliv\u00e1 fyzick\u00e1 za\u0159\u00edzen\u00ed podsyst\u00e9mem RAID.",
        incorrect:
          "Softwarov\u00fd RAID, b\u011b\u017en\u011b implementovan\u00fd v modern\u00edch opera\u010dn\u00edch syst\u00e9mech, je extern\u00ed aplikac\u00ed b\u011b\u017e\u00edc\u00ed nad souborov\u00fdm syst\u00e9mem, kter\u00e1 emuluje chov\u00e1n\u00ed diskov\u00e9ho pole a vy\u017eaduje specifick\u00e9 \u00fapravy v aplikac\u00edch pro spr\u00e1vn\u00e9 fungov\u00e1n\u00ed, p\u0159i\u010dem\u017e operace \u010dten\u00ed a z\u00e1pisu jsou sm\u011brov\u00e1ny na softwarov\u00fd RAID rozhran\u00edm souborov\u00e9ho syst\u00e9mu.",
        sectionNumber: "3.1.9",
        sectionTitle: "RAID",
      },
      {
        uuid: "403f1988-3e30-4b37-b997-6595c31c7306",
        correct:
          "RAID \u00farovn\u011b 1, zn\u00e1m\u00fd jako zrcadlen\u00ed, poskytuje vysokou \u00farove\u0148 redundance t\u00edm, \u017ee udr\u017euje kompletn\u00ed kopii dat na ka\u017ed\u00e9m za\u0159\u00edzen\u00ed v poli, co\u017e umo\u017e\u0148uje syst\u00e9mu tolerovat selh\u00e1n\u00ed a\u017e n-1 za\u0159\u00edzen\u00ed v poli o velikosti n, ani\u017e by do\u0161lo ke ztr\u00e1t\u011b dat nebo p\u0159eru\u0161en\u00ed provozu, a to d\u00edky okam\u017eit\u00e9 dostupnosti dat z zrcadlov\u00fdch disk\u016f.",
        incorrect:
          "RAID \u00farovn\u011b 1, zn\u00e1m\u00fd jako zrcadlen\u00ed, poskytuje omezenou \u00farove\u0148 redundance t\u00edm, \u017ee rozkl\u00e1d\u00e1 data mezi dv\u011b za\u0159\u00edzen\u00ed, co\u017e umo\u017e\u0148uje syst\u00e9mu tolerovat selh\u00e1n\u00ed pouze jednoho za\u0159\u00edzen\u00ed v poli, ale v p\u0159\u00edpad\u011b selh\u00e1n\u00ed obou za\u0159\u00edzen\u00ed dojde ke ztr\u00e1t\u011b dat a nutnosti obnovy ze z\u00e1lohy, proto\u017ee RAID 1 neumo\u017e\u0148uje obnovu dat z parity.",
        sectionNumber: "3.1.9",
        sectionTitle: "RAID",
      },
      {
        uuid: "f28e0db4-2c7c-4152-8824-081a15b5f1b6",
        correct:
          "RAID \u00farovn\u011b 0, charakteristick\u00fd prokl\u00e1d\u00e1n\u00edm dat po bloc\u00edch mezi disky, je jedinou b\u011b\u017en\u011b pou\u017e\u00edvanou konfigurac\u00ed RAID, kter\u00e1 neimplementuje \u017e\u00e1dnou formu redundance, co\u017e znamen\u00e1, \u017ee selh\u00e1n\u00ed jedin\u00e9ho fyzick\u00e9ho za\u0159\u00edzen\u00ed v poli RAID 0 vede k okam\u017eit\u00e9 ztr\u00e1t\u011b v\u0161ech dat ulo\u017een\u00fdch v tomto poli, a proto se RAID 0 prim\u00e1rn\u011b pou\u017e\u00edv\u00e1 pro zv\u00fd\u0161en\u00ed v\u00fdkonu, nikoli spolehlivosti.",
        incorrect:
          "RAID \u00farovn\u011b 0, charakteristick\u00fd prokl\u00e1d\u00e1n\u00edm dat po bloc\u00edch mezi disky, je pova\u017eov\u00e1n za nejspolehliv\u011bj\u0161\u00ed konfiguraci RAID d\u00edky efektivn\u00edmu rozlo\u017een\u00ed dat a implementaci distribuovan\u00e9 parity, co\u017e zaji\u0161\u0165uje vysokou odolnost proti selh\u00e1n\u00ed v\u00edce disk\u016f sou\u010dasn\u011b a minimalizuje riziko ztr\u00e1ty dat i v p\u0159\u00edpad\u011b rozs\u00e1hl\u00fdch hardwarov\u00fdch probl\u00e9m\u016f.",
        sectionNumber: "3.1.9",
        sectionTitle: "RAID",
      },
      {
        uuid: "ca46a74f-ccd2-493e-b531-e5aefa7ac61c",
        correct:
          "\u0160ifrov\u00e1n\u00ed dat na \u00farovni blokov\u00fdch za\u0159\u00edzen\u00ed, podobn\u011b jako RAID, je pro zbytek syst\u00e9mu transparentn\u00ed, co\u017e znamen\u00e1, \u017ee souborov\u00fd syst\u00e9m nemus\u00ed m\u00edt o jeho existenci \u017e\u00e1dn\u00e9 zvl\u00e1\u0161tn\u00ed pov\u011bdom\u00ed a m\u016f\u017ee s \u0161ifrovan\u00fdm blokov\u00fdm za\u0159\u00edzen\u00edm pracovat stejn\u011b jako s ne\u0161ifrovan\u00fdm, bez nutnosti implementace speci\u00e1ln\u00edch funkc\u00ed pro \u0161ifrov\u00e1n\u00ed a de\u0161ifrov\u00e1n\u00ed dat.",
        incorrect:
          "\u0160ifrov\u00e1n\u00ed dat na \u00farovni blokov\u00fdch za\u0159\u00edzen\u00ed, na rozd\u00edl od RAIDu, nen\u00ed pro zbytek syst\u00e9mu zcela transparentn\u00ed, co\u017e znamen\u00e1, \u017ee souborov\u00fd syst\u00e9m mus\u00ed m\u00edt speci\u00e1ln\u00ed pov\u011bdom\u00ed o jeho existenci a mus\u00ed implementovat specifick\u00e9 funkce pro \u0161ifrov\u00e1n\u00ed a de\u0161ifrov\u00e1n\u00ed dat, aby mohl spr\u00e1vn\u011b pracovat s \u0161ifrovan\u00fdm blokov\u00fdm za\u0159\u00edzen\u00edm.",
        sectionNumber: "3.1.10",
        sectionTitle: "\u0160ifrov\u00e1n\u00ed, integrita",
      },
      {
        uuid: "c2588063-bb51-4cf5-848c-f419cba70688",
        correct:
          "\u0160ifrov\u00e1n\u00ed dat na \u00farovni blokov\u00fdch za\u0159\u00edzen\u00ed vyu\u017e\u00edv\u00e1 symetrick\u00e9 blokov\u00e9 \u0161ifry, jako je AES v m\u00f3du CBC nebo XTS, a kl\u00ed\u010d pro \u0161ifrov\u00e1n\u00ed a de\u0161ifrov\u00e1n\u00ed je obvykle odvozen z hesla u\u017eivatele nebo z bezpe\u010dnostn\u00edho tokenu, co\u017e zaji\u0161\u0165uje ochranu dat i v p\u0159\u00edpad\u011b fyzick\u00e9ho odcizen\u00ed za\u0159\u00edzen\u00ed.",
        incorrect:
          "\u0160ifrov\u00e1n\u00ed dat na \u00farovni blokov\u00fdch za\u0159\u00edzen\u00ed vyu\u017e\u00edv\u00e1 asymetrick\u00e9 \u0161ifry, jako je RSA, a kl\u00ed\u010d pro \u0161ifrov\u00e1n\u00ed a de\u0161ifrov\u00e1n\u00ed je ve\u0159ejn\u011b dostupn\u00fd, co\u017e umo\u017e\u0148uje snadn\u00fd p\u0159\u00edstup k dat\u016fm pro kohokoli, kdo m\u00e1 fyzick\u00fd p\u0159\u00edstup k za\u0159\u00edzen\u00ed, a je prim\u00e1rn\u011b zam\u011b\u0159eno na ochranu dat b\u011bhem p\u0159enosu, nikoli na ochranu ulo\u017een\u00fdch dat.",
        sectionNumber: "3.1.10",
        sectionTitle: "\u0160ifrov\u00e1n\u00ed, integrita",
      },
      {
        uuid: "f59a5a90-8a62-488b-8b91-1605e7e3628e",
        correct:
          "\u0160ifrov\u00e1n\u00ed dat na \u00farovni blokov\u00fdch za\u0159\u00edzen\u00ed obvykle zachov\u00e1v\u00e1 d\u00e9lku blok\u016f, co\u017e znamen\u00e1, \u017ee za\u0161ifrovan\u00fd blok dat m\u00e1 stejnou velikost jako p\u016fvodn\u00ed neza\u0161ifrovan\u00fd blok, a lze jej p\u0159\u00edmo 1:1 ulo\u017eit na fyzick\u00e9 \u00falo\u017ei\u0161t\u011b, nicm\u00e9n\u011b pokud je vy\u017eadov\u00e1na kontrola integrity dat, pak tato vlastnost ji\u017e neplat\u00ed a bloky mohou b\u00fdt v\u011bt\u0161\u00ed kv\u016fli p\u0159idan\u00fdm kontroln\u00edm sou\u010dt\u016fm.",
        incorrect:
          "\u0160ifrov\u00e1n\u00ed dat na \u00farovni blokov\u00fdch za\u0159\u00edzen\u00ed v\u017edy zv\u011bt\u0161uje d\u00e9lku blok\u016f dat, co\u017e znamen\u00e1, \u017ee za\u0161ifrovan\u00fd blok dat je v\u011bt\u0161\u00ed ne\u017e p\u016fvodn\u00ed neza\u0161ifrovan\u00fd blok, a proto vy\u017eaduje slo\u017eit\u011bj\u0161\u00ed mechanismy pro ukl\u00e1d\u00e1n\u00ed na fyzick\u00e9 \u00falo\u017ei\u0161t\u011b, a to i v p\u0159\u00edpadech, kdy nen\u00ed vy\u017eadov\u00e1na kontrola integrity dat, co\u017e vede k vy\u0161\u0161\u00ed re\u017eii a men\u0161\u00ed efektivit\u011b \u00falo\u017en\u00e9ho prostoru.",
        sectionNumber: "3.1.10",
        sectionTitle: "\u0160ifrov\u00e1n\u00ed, integrita",
      },
      {
        uuid: "5d493e6d-7646-4716-91cf-41df48c8fea9",
        correct:
          "Soubory v opera\u010dn\u00edch syst\u00e9mech p\u0159edstavuj\u00ed abstrakci nad fyzick\u00fdm \u00falo\u017ei\u0161t\u011bm dat, kter\u00e1 umo\u017e\u0148uje operace \u010dten\u00ed a z\u00e1pisu po jednotliv\u00fdch bajtech nebo v bloc\u00edch libovoln\u00e9 velikosti, a efektivn\u011b skr\u00fdv\u00e1 detaily blokov\u00e9ho charakteru fyzick\u00e9ho \u00falo\u017en\u00e9ho za\u0159\u00edzen\u00ed.",
        incorrect:
          "Soubory v opera\u010dn\u00edch syst\u00e9mech umo\u017e\u0148uj\u00ed v\u00fdhradn\u011b operace \u010dten\u00ed a z\u00e1pisu dat pouze po jednotliv\u00fdch bajtech, bez podpory pr\u00e1ce s bloky dat libovoln\u00e9 velikosti, a abstrakce soubor\u016f naopak odhaluje blokovou povahu fyzick\u00e9ho za\u0159\u00edzen\u00ed, na kter\u00e9m jsou soubory ulo\u017eeny.",
        sectionNumber: "3.2.1",
        sectionTitle: "Operace",
      },
      {
        uuid: "d0596aa2-d98e-4a11-b6b2-d2231b0ee2b4",
        correct:
          "Soubory v opera\u010dn\u00edch syst\u00e9mech podporuj\u00ed automatick\u00e9 prodlu\u017eov\u00e1n\u00ed sv\u00e9 velikosti, pokud z\u00e1pis dat prob\u00edh\u00e1 za aktu\u00e1ln\u00ed konec souboru, a jsou adresov\u00e1ny souvisle od adresy nula a\u017e po aktu\u00e1ln\u00ed velikost souboru, podobn\u011b jako je tomu u virtu\u00e1ln\u00edho adresn\u00edho prostoru v opera\u010dn\u00ed pam\u011bti.",
        incorrect:
          "Soubory v opera\u010dn\u00edch syst\u00e9mech nepodporuj\u00ed automatick\u00e9 prodlu\u017eov\u00e1n\u00ed sv\u00e9 velikosti p\u0159i z\u00e1pisu za konec souboru a nejsou adresov\u00e1ny souvisle od adresy nula, ale adresov\u00e1n\u00ed za\u010d\u00edn\u00e1 od adresy jedna, co\u017e je z\u00e1sadn\u00ed rozd\u00edl oproti virtu\u00e1ln\u00edmu adresn\u00edmu prostoru v opera\u010dn\u00ed pam\u011bti.",
        sectionNumber: "3.2.1",
        sectionTitle: "Operace",
      },
      {
        uuid: "9e87a96a-a032-4f0c-bbe8-d664e130c9b0",
        correct:
          "Soubory v opera\u010dn\u00edch syst\u00e9mech mohou b\u00fdt navr\u017eeny tak, aby implementovaly pouze operace \u010dten\u00ed, nebo pouze operace z\u00e1pisu, p\u0159\u00edpadn\u011b pouze sekven\u010dn\u00ed p\u0159\u00edstup k dat\u016fm, a nemus\u00ed v\u017edy reprezentovat pam\u011b\u0165 v tradi\u010dn\u00edm slova smyslu, co\u017e umo\u017e\u0148uje flexibiln\u00ed vyu\u017eit\u00ed soubor\u016f pro r\u016fzn\u00e9 \u00fa\u010dely, nejen pro ukl\u00e1d\u00e1n\u00ed a n\u00e1sledn\u00e9 na\u010d\u00edt\u00e1n\u00ed dat.",
        incorrect:
          "Soubory v opera\u010dn\u00edch syst\u00e9mech mus\u00ed v\u017edy implementovat jak operace \u010dten\u00ed, tak operace z\u00e1pisu, a mus\u00ed v\u017edy reprezentovat pam\u011b\u0165 v tradi\u010dn\u00edm slova smyslu s mo\u017enost\u00ed libovoln\u00e9ho adresov\u00e1n\u00ed, co\u017e omezuje mo\u017enosti vyu\u017eit\u00ed soubor\u016f pouze na ukl\u00e1d\u00e1n\u00ed a n\u00e1sledn\u00e9 na\u010d\u00edt\u00e1n\u00ed dat.",
        sectionNumber: "3.2.1",
        sectionTitle: "Operace",
      },
      {
        uuid: "2416e13e-99df-4e2c-865b-f3c23012d095",
        correct:
          "Soubory v opera\u010dn\u00edch syst\u00e9mech jsou obvykle perzistentn\u00ed, co\u017e znamen\u00e1, \u017ee jejich existence je dlouhodob\u00e1 a nez\u00e1visl\u00e1 na b\u011b\u017e\u00edc\u00edch procesech nebo stavu opera\u010dn\u00edho syst\u00e9mu, a pro efektivn\u00ed manipulaci s nimi jsou opat\u0159eny jednozna\u010dnou identitou, kter\u00e1 umo\u017e\u0148uje jejich identifikaci i po restartov\u00e1n\u00ed syst\u00e9mu.",
        incorrect:
          "Soubory v opera\u010dn\u00edch syst\u00e9mech jsou obvykle do\u010dasn\u00e9, existuj\u00ed pouze po dobu b\u011bhu procesu, kter\u00fd je vytvo\u0159il, a nejsou opat\u0159eny \u017e\u00e1dnou trvalou identitou, co\u017e prakticky znemo\u017e\u0148uje jejich vyu\u017eit\u00ed po ukon\u010den\u00ed procesu nebo po restartov\u00e1n\u00ed opera\u010dn\u00edho syst\u00e9mu.",
        sectionNumber: "3.2.1",
        sectionTitle: "Operace",
      },
      {
        uuid: "dc66d25d-8f0e-478e-9e6f-d36b28abfef6",
        correct:
          "Pro pr\u00e1ci se souborem v syst\u00e9mech standardu POSIX je nezbytn\u00e9 soubor nejprve explicitn\u011b otev\u0159\u00edt pomoc\u00ed syst\u00e9mov\u00e9ho vol\u00e1n\u00ed `open`, kter\u00e9 vrac\u00ed takzvan\u00fd popisova\u010d otev\u0159en\u00e9ho souboru, jen\u017e slou\u017e\u00ed jako kl\u00ed\u010dov\u00fd identifika\u010dn\u00ed prvek pro ve\u0161ker\u00e9 n\u00e1sledn\u00e9 operace \u010dten\u00ed a z\u00e1pisu s dan\u00fdm souborem.",
        incorrect:
          "Pro pr\u00e1ci se souborem v syst\u00e9mech standardu POSIX nen\u00ed nutn\u00e9 soubor p\u0159edem otev\u00edrat, a operace \u010dten\u00ed a z\u00e1pisu se prov\u00e1d\u011bj\u00ed p\u0159\u00edmo s cestou nebo n\u00e1zvem souboru, p\u0159i\u010dem\u017e koncept popisova\u010de otev\u0159en\u00e9ho souboru nen\u00ed v syst\u00e9mech POSIX v\u016fbec definov\u00e1n ani pou\u017e\u00edv\u00e1n.",
        sectionNumber: "3.2.1",
        sectionTitle: "Operace",
      },
      {
        uuid: "4fbeaee3-d338-43f7-8e12-a6394f275de6",
        correct:
          "Souborov\u00fd syst\u00e9m p\u0159edstavuje abstrakci perzistentn\u00ed pam\u011bti, kde oby\u010dejn\u00fd soubor slou\u017e\u00ed jako reprezentace pam\u011bti pro uchov\u00e1n\u00ed dat v sekvenci bajt\u016f, p\u0159i\u010dem\u017e souborov\u00fd syst\u00e9m neprov\u00e1d\u00ed interpretaci obsahu t\u011bchto soubor\u016f a  aplikace pracuj\u00ed s daty souboru bez ohledu na jejich fyzick\u00e9 ulo\u017een\u00ed.",
        incorrect:
          "Souborov\u00fd syst\u00e9m p\u0159edstavuje abstrakci perzistentn\u00ed pam\u011bti, kde oby\u010dejn\u00fd soubor slou\u017e\u00ed jako reprezentace pam\u011bti pro uchov\u00e1n\u00ed dat v sekvenci bajt\u016f, p\u0159i\u010dem\u017e souborov\u00fd syst\u00e9m aktivn\u011b interpretuje obsah t\u011bchto soubor\u016f a aplikace mus\u00ed detailn\u011b zn\u00e1t fyzick\u00e9 ulo\u017een\u00ed dat pro efektivn\u00ed pr\u00e1ci se soubory.",
        sectionNumber: "3.2.2",
        sectionTitle: "Oby\u010dejn\u00fd soubor",
      },
      {
        uuid: "d3970017-becd-4415-80d6-991eab95c8d5",
        correct:
          "Aplika\u010dn\u00ed programy, pracuj\u00edc\u00ed se soubory, nejsou omezeny blokovou strukturou fyzick\u00e9ho \u00falo\u017ei\u0161t\u011b ani nutnost\u00ed zarovn\u00e1n\u00ed dat na blokov\u00e9 hranice, proto\u017ee souborov\u00fd syst\u00e9m zaji\u0161\u0165uje abstrakci od blokov\u011b orientovan\u00e9ho p\u0159\u00edstupu a opera\u010dn\u00ed syst\u00e9m se star\u00e1 o mapov\u00e1n\u00ed logick\u00fdch operac\u00ed se soubory na fyzick\u00e9 bloky.",
        incorrect:
          "Aplika\u010dn\u00ed programy, pracuj\u00edc\u00ed se soubory, mus\u00ed striktn\u011b respektovat blokovou strukturu fyzick\u00e9ho \u00falo\u017ei\u0161t\u011b a zarovn\u00e1vat v\u0161echna data na blokov\u00e9 hranice, proto\u017ee souborov\u00fd syst\u00e9m p\u0159\u00edmo zp\u0159\u00edstup\u0148uje blokov\u011b orientovan\u00fd p\u0159\u00edstup k \u00falo\u017ei\u0161ti a opera\u010dn\u00ed syst\u00e9m vy\u017eaduje explicitn\u00ed pr\u00e1ci s fyzick\u00fdmi bloky.",
        sectionNumber: "3.2.2",
        sectionTitle: "Oby\u010dejn\u00fd soubor",
      },
      {
        uuid: "049f7c5e-fe1c-47f4-8a53-9e302bcd1b00",
        correct:
          "Metadata soubor\u016f, spravovan\u00e1 souborov\u00fdm syst\u00e9mem, zahrnuj\u00ed informace o fyzick\u00e9m um\u00edst\u011bn\u00ed datov\u00fdch blok\u016f souboru na pevn\u00e9m disku a umo\u017e\u0148uj\u00ed opera\u010dn\u00edmu syst\u00e9mu efektivn\u011b lokalizovat a na\u010d\u00edtat po\u017eadovan\u00e9 \u010d\u00e1sti souboru, a tak\u00e9 uchov\u00e1vaj\u00ed dal\u0161\u00ed atributy souboru, jako je vlastn\u00edk a \u010das posledn\u00ed modifikace.",
        incorrect:
          "Metadata soubor\u016f, spravovan\u00e1 souborov\u00fdm syst\u00e9mem, se omezuj\u00ed pouze na atributy souboru, jako je vlastn\u00edk a \u010das posledn\u00ed modifikace, ale nezahrnuj\u00ed informace o fyzick\u00e9m um\u00edst\u011bn\u00ed datov\u00fdch blok\u016f na pevn\u00e9m disku, proto\u017ee opera\u010dn\u00ed syst\u00e9m lokalizuje a na\u010d\u00edt\u00e1 soubory v\u00fdhradn\u011b na z\u00e1klad\u011b n\u00e1zvu souboru.",
        sectionNumber: "3.2.2",
        sectionTitle: "Oby\u010dejn\u00fd soubor",
      },
      {
        uuid: "99596a5b-7d71-45fc-b30b-5d2c7bc4d264",
        correct:
          "Mapov\u00e1n\u00ed soubor\u016f do pam\u011bti s vyu\u017eit\u00edm l\u00edn\u00e9ho na\u010d\u00edt\u00e1n\u00ed str\u00e1nek p\u0159edstavuje efektivn\u00ed p\u0159\u00edstup, obzvl\u00e1\u0161t\u011b pro aplikace, kter\u00e9 dominantn\u011b p\u0159istupuj\u00ed k dat\u016fm pro \u010dten\u00ed, jeliko\u017e minimalizuje re\u017eii spojenou s explicitn\u00edmi vol\u00e1n\u00edmi operac\u00ed read a write a umo\u017e\u0148uje pracovat se soubory jako s pam\u011b\u0165ov\u00fdmi segmenty.",
        incorrect:
          "Mapov\u00e1n\u00ed soubor\u016f do pam\u011bti s l\u00edn\u00fdm na\u010d\u00edt\u00e1n\u00edm str\u00e1nek je prim\u00e1rn\u011b navr\u017eeno pro aplikace, kter\u00e9 intenzivn\u011b zapisuj\u00ed data do soubor\u016f, a jeho hlavn\u00ed v\u00fdhoda spo\u010d\u00edv\u00e1 v redukci re\u017eie operac\u00ed z\u00e1pisu. Pro aplikace, kter\u00e9 p\u0159ev\u00e1\u017en\u011b \u010dtou data, mapov\u00e1n\u00ed soubor\u016f do pam\u011bti nep\u0159in\u00e1\u0161\u00ed \u017e\u00e1dn\u00e9 v\u00fdznamn\u00e9 zlep\u0161en\u00ed v\u00fdkonu.",
        sectionNumber: "3.2.3",
        sectionTitle: "Mapov\u00e1ni do pam\u011bti",
      },
      {
        uuid: "e93dfac0-9982-40af-919d-f853dfbf9183",
        correct:
          "Pokud aplikace p\u0159istupuje k souboru mapovan\u00e9mu do pam\u011bti a po\u017eadovan\u00fd rozsah dat je zarovnan\u00fd na hranice str\u00e1nek jak ve virtu\u00e1ln\u00ed pam\u011bti procesu, tak v souboru, opera\u010dn\u00ed syst\u00e9m m\u016f\u017ee optimalizovat \u010dten\u00ed p\u0159emapov\u00e1n\u00edm str\u00e1nek, nam\u00edsto kop\u00edrov\u00e1n\u00ed dat, s potenci\u00e1ln\u00edm vyu\u017eit\u00edm mechanismu copy-on-write pro dal\u0161\u00ed zv\u00fd\u0161en\u00ed efektivity.",
        incorrect:
          "V situaci, kdy aplikace \u010dte data ze souboru mapovan\u00e9ho do pam\u011bti a rozsah \u010dten\u00ed je zarovnan\u00fd na str\u00e1nky, opera\u010dn\u00ed syst\u00e9m v\u017edy prov\u00e1d\u00ed explicitn\u00ed kop\u00edrov\u00e1n\u00ed dat mezi mezipam\u011bt\u00ed a pam\u011bt\u00ed procesu. Optimalizace p\u0159emapov\u00e1n\u00edm str\u00e1nek, jako je mechanismus copy-on-write, se v t\u011bchto p\u0159\u00edpadech nikdy nepou\u017e\u00edv\u00e1, a to ani p\u0159i zarovn\u00e1n\u00ed na str\u00e1nky.",
        sectionNumber: "3.2.3",
        sectionTitle: "Mapov\u00e1ni do pam\u011bti",
      },
      {
        uuid: "3ad1a761-fe73-45b1-a9e3-332f3b6a23b6",
        correct:
          "P\u0159i mapov\u00e1n\u00ed souboru do pam\u011bti jsou extern\u00ed str\u00e1nky, kter\u00e9 reprezentuj\u00ed data souboru, ulo\u017eeny v b\u011b\u017en\u00e9m souborov\u00e9m syst\u00e9mu, av\u0161ak program s nimi manipuluje prost\u0159ednictv\u00edm pam\u011b\u0165ov\u00fdch instrukc\u00ed, nikoli explicitn\u00edmi syst\u00e9mov\u00fdmi vol\u00e1n\u00edmi pro vstup a v\u00fdstup, co\u017e umo\u017e\u0148uje transparentn\u00ed \u00fapravy souboru a sni\u017euje re\u017eii operac\u00ed.",
        incorrect:
          "V re\u017eimu mapov\u00e1n\u00ed soubor\u016f do pam\u011bti jsou extern\u00ed str\u00e1nky ulo\u017eeny ve vyhrazen\u00e9 swapovac\u00ed oblasti opera\u010dn\u00edho syst\u00e9mu a p\u0159\u00edstup k nim vy\u017eaduje explicitn\u00ed a re\u017eijn\u011b n\u00e1ro\u010dn\u00e9 vstupn\u011b-v\u00fdstupn\u00ed operace. Program nem\u016f\u017ee s daty souboru pracovat p\u0159\u00edmo jako s obsahem pam\u011bti, a transparentn\u00ed \u00fapravy souboru nejsou mo\u017en\u00e9.",
        sectionNumber: "3.2.3",
        sectionTitle: "Mapov\u00e1ni do pam\u011bti",
      },
      {
        uuid: "69415615-d8a1-4111-90f9-a6c43d3dd0ed",
        correct:
          "P\u0159\u00edstup k souboru z v\u00edce vl\u00e1ken je mo\u017en\u00fd a pokud v\u0161echna vl\u00e1kna p\u0159istupuj\u00ed k souboru pouze pro \u010dten\u00ed, nevznikaj\u00ed \u017e\u00e1dn\u00e9 v\u00fdznamn\u00e9 probl\u00e9my spojen\u00e9 se soub\u011b\u017en\u00fdm p\u0159\u00edstupem, proto\u017ee operace \u010dten\u00ed nezp\u016fsobuj\u00ed hazard soub\u011bhu.",
        incorrect:
          "P\u0159\u00edstup k souboru z v\u00edce vl\u00e1ken je mo\u017en\u00fd a i kdy\u017e v\u0161echna vl\u00e1kna p\u0159istupuj\u00ed k souboru pro z\u00e1pis, nevznikaj\u00ed \u017e\u00e1dn\u00e9 v\u00fdznamn\u00e9 probl\u00e9my spojen\u00e9 se soub\u011b\u017en\u00fdm p\u0159\u00edstupem, proto\u017ee modern\u00ed opera\u010dn\u00ed syst\u00e9my efektivn\u011b \u0159\u00edd\u00ed soub\u011b\u017en\u00fd z\u00e1pis do soubor\u016f bez nutnosti zamyk\u00e1n\u00ed.",
        sectionNumber: "3.2.4",
        sectionTitle: "Soub\u011b\u017en\u00fd p\u0159\u00edstup",
      },
      {
        uuid: "26f28278-287d-4f82-b769-790fa89089f8",
        correct:
          "Jmenn\u00fd prostor souborov\u00e9ho syst\u00e9mu je sd\u00edlen\u00fd mezi v\u0161emi procesy, co\u017e znamen\u00e1, \u017ee v\u00edce proces\u016f m\u016f\u017ee pracovat se stejn\u00fdm souborem sou\u010dasn\u011b, podobn\u011b jako je sd\u00edlen\u00e1 opera\u010dn\u00ed pam\u011b\u0165 mapovan\u00e1 ve v\u00edce virtu\u00e1ln\u00edch adresn\u00edch prostorech, co\u017e vy\u017eaduje mechanismy pro \u0159\u00edzen\u00ed soub\u011b\u017en\u00e9ho p\u0159\u00edstupu.",
        incorrect:
          "Jmenn\u00fd prostor souborov\u00e9ho syst\u00e9mu je izolovan\u00fd pro ka\u017ed\u00fd proces zvl\u00e1\u0161\u0165, co\u017e znamen\u00e1, \u017ee i kdy\u017e v\u00edce proces\u016f pracuje se soubory se stejn\u00fdm jm\u00e9nem, ve skute\u010dnosti pracuj\u00ed s r\u016fzn\u00fdmi, odd\u011blen\u00fdmi instancemi soubor\u016f, a proto nen\u00ed pot\u0159eba \u0159e\u0161it soub\u011b\u017en\u00fd p\u0159\u00edstup.",
        sectionNumber: "3.2.4",
        sectionTitle: "Soub\u011b\u017en\u00fd p\u0159\u00edstup",
      },
      {
        uuid: "6c20db9f-b5e7-4fe6-9d59-f9acb6a37ce4",
        correct:
          "Opera\u010dn\u00ed syst\u00e9my poskytuj\u00ed mechanismy zamyk\u00e1n\u00ed soubor\u016f, jako nap\u0159\u00edklad vol\u00e1n\u00ed `flock` a `fcntl` v syst\u00e9mech POSIX, aby umo\u017enily program\u016fm bezpe\u010dn\u011b p\u0159istupovat k soubor\u016fm a p\u0159ede\u0161ly probl\u00e9m\u016fm se soub\u011b\u017en\u00fdm p\u0159\u00edstupem, zejm\u00e9na hazardu soub\u011bhu, kter\u00fd m\u016f\u017ee vzniknout p\u0159i \u010dten\u00ed a z\u00e1pisu.",
        incorrect:
          "Opera\u010dn\u00ed syst\u00e9my se nesna\u017e\u00ed aktivn\u011b \u0159e\u0161it probl\u00e9my soub\u011b\u017en\u00e9ho p\u0159\u00edstupu k soubor\u016fm a spol\u00e9haj\u00ed se v\u00fdhradn\u011b na aplika\u010dn\u00ed program\u00e1tory, aby zajistili koherentnost dat p\u0159i soub\u011b\u017en\u00e9m p\u0159\u00edstupu k soubor\u016fm, proto\u017ee zamyk\u00e1n\u00ed soubor\u016f by bylo p\u0159\u00edli\u0161 n\u00e1kladn\u00e9 a zpomalovalo by operace.",
        sectionNumber: "3.2.4",
        sectionTitle: "Soub\u011b\u017en\u00fd p\u0159\u00edstup",
      },
      {
        uuid: "f52ef40e-d68a-44d9-b986-cfc38c049394",
        correct:
          "Pro zamyk\u00e1n\u00ed soubor\u016f v syst\u00e9mech POSIX opera\u010dn\u00ed syst\u00e9my poskytuj\u00ed syst\u00e9mov\u00e1 vol\u00e1n\u00ed jako `flock`, kter\u00e9 uzamkne cel\u00fd soubor najednou, a `fcntl`, kter\u00e9 umo\u017e\u0148uje zamknout specifick\u00e9 rozsahy bajt\u016f v souboru, co\u017e d\u00e1v\u00e1 program\u00e1tor\u016fm flexibilitu v \u0159\u00edzen\u00ed soub\u011b\u017en\u00e9ho p\u0159\u00edstupu.",
        incorrect:
          "Pro zamyk\u00e1n\u00ed soubor\u016f v syst\u00e9mech POSIX opera\u010dn\u00ed syst\u00e9my poskytuj\u00ed pouze syst\u00e9mov\u00e9 vol\u00e1n\u00ed `mutex_lock`, kter\u00e9 je univerz\u00e1ln\u00edm mechanismem pro zamyk\u00e1n\u00ed soubor\u016f i pam\u011bti, a neexistuj\u00ed specializovan\u00e1 vol\u00e1n\u00ed jako `flock` nebo `fcntl` pro specifick\u00e9 pot\u0159eby souborov\u00e9ho zamyk\u00e1n\u00ed.",
        sectionNumber: "3.2.4",
        sectionTitle: "Soub\u011b\u017en\u00fd p\u0159\u00edstup",
      },
      {
        uuid: "2d9c2f7b-a837-475f-8384-52fb63d3895d",
        correct:
          "Spustiteln\u00e9 soubory jsou z pohledu souborov\u00e9ho syst\u00e9mu pova\u017eov\u00e1ny za b\u011b\u017en\u00e9 soubory a nevy\u017eaduj\u00ed speci\u00e1ln\u00ed zach\u00e1zen\u00ed, av\u0161ak pro opera\u010dn\u00ed syst\u00e9m jsou kl\u00ed\u010dov\u00e9, proto\u017ee obsahuj\u00ed ve\u0161ker\u00e9 informace nutn\u00e9 ke spu\u0161t\u011bn\u00ed programu, v\u010detn\u011b po\u010d\u00e1te\u010dn\u00edho obrazu pam\u011bti, kter\u00fd definuje virtu\u00e1ln\u00ed adresn\u00ed prostor procesu po jeho spu\u0161t\u011bn\u00ed.",
        incorrect:
          "Spustiteln\u00e9 soubory jsou v souborov\u00e9m syst\u00e9mu speci\u00e1ln\u011b ozna\u010deny a vy\u017eaduj\u00ed odli\u0161n\u00e9 zach\u00e1zen\u00ed ne\u017e b\u011b\u017en\u00e9 soubory, a\u010dkoli pro opera\u010dn\u00ed syst\u00e9m nejsou nijak zvl\u00e1\u0161\u0165 d\u016fle\u017eit\u00e9, jeliko\u017e neobsahuj\u00ed kompletn\u00ed informace nutn\u00e9 ke spu\u0161t\u011bn\u00ed programu, a po\u010d\u00e1te\u010dn\u00ed obraz pam\u011bti se vytv\u00e1\u0159\u00ed dynamicky a\u017e v pr\u016fb\u011bhu spou\u0161t\u011bn\u00ed procesu.",
        sectionNumber: "3.2.5",
        sectionTitle: "Spustiteln\u00fd soubor",
      },
      {
        uuid: "75ded3f3-44c3-4065-a2e6-d63c276c3b85",
        correct:
          "Spustiteln\u00e9 soubory obsahuj\u00ed takzvan\u00fd \u201eobraz pam\u011bti\u201c, kter\u00fd slou\u017e\u00ed k inicializaci virtu\u00e1ln\u00edho adresn\u00edho prostoru nov\u011b spou\u0161t\u011bn\u00e9ho procesu, a tento obraz zahrnuje zejm\u00e9na text programu, tedy instrukce, a po\u010d\u00e1te\u010dn\u00ed hodnoty glob\u00e1ln\u00edch prom\u011bnn\u00fdch, co\u017e jsou data, kter\u00e1 program pou\u017e\u00edv\u00e1 od sv\u00e9ho startu.",
        incorrect:
          "Spustiteln\u00e9 soubory neobsahuj\u00ed \u201eobraz pam\u011bti\u201c, ale pouze odkaz na extern\u00ed zdroje, ze kter\u00fdch se dynamicky sestavuje virtu\u00e1ln\u00ed adresn\u00ed prostor procesu a\u017e po jeho spu\u0161t\u011bn\u00ed, a tento prostor zahrnuje pouze instrukce programu, zat\u00edmco glob\u00e1ln\u00ed prom\u011bnn\u00e9 se inicializuj\u00ed a\u017e v pr\u016fb\u011bhu b\u011bhu programu, nikoliv p\u0159i jeho startu.",
        sectionNumber: "3.2.5",
        sectionTitle: "Spustiteln\u00fd soubor",
      },
      {
        uuid: "1ca5c6f0-b433-420e-9589-15c7d1865d8b",
        correct:
          "Roury v opera\u010dn\u00edch syst\u00e9mech slou\u017e\u00ed jako jednoduch\u00e1 komunika\u010dn\u00ed za\u0159\u00edzen\u00ed umo\u017e\u0148uj\u00edc\u00ed jednosm\u011brn\u00fd tok dat, kde jedna strana data zapisuje a druh\u00e1 strana je \u010dte, p\u0159i\u010dem\u017e se podobaj\u00ed soubor\u016fm v mo\u017enosti z\u00e1pisu a \u010dten\u00ed bajt\u016f, av\u0161ak na rozd\u00edl od soubor\u016f data nejsou trvale ulo\u017eena a po p\u0159e\u010dten\u00ed z roury zmiz\u00ed, a\u010dkoliv roura disponuje bufferem v opera\u010dn\u00ed pam\u011bti pro do\u010dasn\u00e9 uchov\u00e1n\u00ed dat.",
        incorrect:
          "Roury v opera\u010dn\u00edch syst\u00e9mech slou\u017e\u00ed jako komplexn\u00ed komunika\u010dn\u00ed za\u0159\u00edzen\u00ed umo\u017e\u0148uj\u00edc\u00ed obousm\u011brn\u00fd tok dat, kde jedna strana data zapisuje a druh\u00e1 strana je \u010dte, p\u0159i\u010dem\u017e se podobaj\u00ed soubor\u016fm v mo\u017enosti z\u00e1pisu a \u010dten\u00ed bajt\u016f, a stejn\u011b jako soubory data jsou trvale ulo\u017eena a po p\u0159e\u010dten\u00ed z roury nezmiz\u00ed, a\u010dkoliv roura nedisponuje bufferem v opera\u010dn\u00ed pam\u011bti pro do\u010dasn\u00e9 uchov\u00e1n\u00ed dat.",
        sectionNumber: "3.2.6",
        sectionTitle: "Roura",
      },
      {
        uuid: "e9156351-6a70-486d-801a-01368194fac5",
        correct:
          "Anonymn\u00ed roury v syst\u00e9mech, kter\u00e9 nejsou typu POSIX, jsou obvykle p\u0159\u00edstupn\u00e9 skrze popisova\u010de otev\u0159en\u00fdch soubor\u016f a zanikaj\u00ed, jakmile jsou v\u0161echny p\u0159idru\u017een\u00e9 popisova\u010de uzav\u0159eny, zat\u00edmco pojmenovan\u00e9 roury v POSIX syst\u00e9mech existuj\u00ed trvale v souborov\u00e9m syst\u00e9mu pod jm\u00e9nem, ale data jimi p\u0159en\u00e1\u0161en\u00e1 nejsou trvale ulo\u017eena, a li\u0161\u00ed se od anonymn\u00edch rour hlavn\u011b zp\u016fsobem otev\u00edr\u00e1n\u00ed, nikoliv mechanismem toku dat.",
        incorrect:
          "Anonymn\u00ed roury v syst\u00e9mech typu POSIX jsou obvykle p\u0159\u00edstupn\u00e9 skrze popisova\u010de otev\u0159en\u00fdch soubor\u016f a zanikaj\u00ed, jakmile jsou v\u0161echny p\u0159idru\u017een\u00e9 popisova\u010de uzav\u0159eny, a pojmenovan\u00e9 roury v POSIX syst\u00e9mech neexistuj\u00ed trvale v souborov\u00e9m syst\u00e9mu pod jm\u00e9nem, a data jimi p\u0159en\u00e1\u0161en\u00e1 jsou trvale ulo\u017eena, a neli\u0161\u00ed se od anonymn\u00edch rour v mechanismu toku dat ani zp\u016fsobem otev\u00edr\u00e1n\u00ed.",
        sectionNumber: "3.2.6",
        sectionTitle: "Roura",
      },
      {
        uuid: "f70844e9-7cf1-443f-a2a4-74162ff8125b",
        correct:
          "Znakov\u00e1 za\u0159\u00edzen\u00ed p\u0159edstavuj\u00ed abstrakci opera\u010dn\u00edho syst\u00e9mu, kter\u00e1 umo\u017e\u0148uje program\u016fm pracovat s periferiemi, je\u017e produkuj\u00ed nebo konzumuj\u00ed sekvence bajt\u016f, a chovaj\u00ed se podobn\u011b jako roury, kde data zapsan\u00e1 programem jsou odesl\u00e1na do periferie a data z periferie mohou b\u00fdt \u010dtena programem.",
        incorrect:
          "Znakov\u00e1 za\u0159\u00edzen\u00ed p\u0159edstavuj\u00ed abstrakci opera\u010dn\u00edho syst\u00e9mu, kter\u00e1 umo\u017e\u0148uje program\u016fm pracovat s periferiemi, je\u017e produkuj\u00ed nebo konzumuj\u00ed sekvence blok\u016f, a chovaj\u00ed se podobn\u011b jako fronty, kde data zapsan\u00e1 programem jsou odesl\u00e1na do periferie a data z periferie mus\u00ed b\u00fdt aktivn\u011b vy\u017e\u00e1d\u00e1na programem.",
        sectionNumber: "3.2.7",
        sectionTitle: "Za\u0159\u00edzen\u00ed",
      },
      {
        uuid: "57cc368b-05ca-4cc1-8dc1-89c2dd0988cc",
        correct:
          "Znakov\u00e1 za\u0159\u00edzen\u00ed, jako nap\u0159\u00edklad tisk\u00e1rny a skenery, funguj\u00ed tak, \u017ee data zapsan\u00e1 do souborov\u00e9ho rozhran\u00ed znakov\u00e9ho za\u0159\u00edzen\u00ed tisk\u00e1rny jsou interpretov\u00e1na a vyti\u0161t\u011bna, zat\u00edmco u skeneru optick\u00fd senzor zachycuje pixely, kter\u00e9 jsou k\u00f3dov\u00e1ny a n\u00e1sledn\u011b \u010dteny aplikac\u00ed ze znakov\u00e9ho za\u0159\u00edzen\u00ed.",
        incorrect:
          "Znakov\u00e1 za\u0159\u00edzen\u00ed, jako nap\u0159\u00edklad tisk\u00e1rny a skenery, funguj\u00ed tak, \u017ee data zapsan\u00e1 do blokov\u00e9ho rozhran\u00ed znakov\u00e9ho za\u0159\u00edzen\u00ed tisk\u00e1rny jsou interpretov\u00e1na a vyti\u0161t\u011bna, zat\u00edmco u skeneru optick\u00fd senzor zachycuje pixely, kter\u00e9 jsou k\u00f3dov\u00e1ny a n\u00e1sledn\u011b odesl\u00e1ny aplikaci bez nutnosti \u010dten\u00ed ze znakov\u00e9ho za\u0159\u00edzen\u00ed.",
        sectionNumber: "3.2.7",
        sectionTitle: "Za\u0159\u00edzen\u00ed",
      },
      {
        uuid: "bb9fd8f8-e37a-4e34-b35d-0676f15e08da",
        correct:
          "Souborov\u00e9 cesty slou\u017e\u00ed k popisu um\u00edst\u011bn\u00ed soubor\u016f a slo\u017eek v hierarchick\u00e9 adres\u00e1\u0159ov\u00e9 struktu\u0159e, p\u0159i\u010dem\u017e jako odd\u011blova\u010d adres\u00e1\u0159\u016f se v syst\u00e9mech typu POSIX standardn\u011b pou\u017e\u00edv\u00e1 znak dop\u0159edn\u00e9ho lom\u00edtka `/`, a\u010dkoli v jin\u00fdch opera\u010dn\u00edch syst\u00e9mech, jako nap\u0159\u00edklad Windows, m\u016f\u017ee b\u00fdt pou\u017eit i znak zp\u011btn\u00e9ho lom\u00edtka `\\`. Tato konvence umo\u017e\u0148uje flexibilitu v reprezentaci cest nap\u0159\u00ed\u010d r\u016fzn\u00fdmi platformami.",
        incorrect:
          "Souborov\u00e9 cesty slou\u017e\u00ed v\u00fdhradn\u011b k popisu um\u00edst\u011bn\u00ed soubor\u016f v line\u00e1rn\u00ed adres\u00e1\u0159ov\u00e9 struktu\u0159e, p\u0159i\u010dem\u017e jako jedin\u00fd a univerz\u00e1ln\u00ed odd\u011blova\u010d adres\u00e1\u0159\u016f se ve v\u0161ech opera\u010dn\u00edch syst\u00e9mech pou\u017e\u00edv\u00e1 znak zp\u011btn\u00e9ho lom\u00edtka `\\`, co\u017e zaji\u0161\u0165uje jednotnost a p\u0159enositelnost mezi r\u016fzn\u00fdmi platformami. Pou\u017eit\u00ed dop\u0159edn\u00e9ho lom\u00edtka `/` je pova\u017eov\u00e1no za zastaral\u00e9 a nepou\u017e\u00edv\u00e1 se v modern\u00edch syst\u00e9mech.",
        sectionNumber: "3.3.1",
        sectionTitle: "Cesta",
      },
      {
        uuid: "7bbbc2a4-bd75-4fb6-9a74-567d274800fb",
        correct:
          "Adres\u00e1\u0159ov\u00e1 struktura je \u010dasto ozna\u010dov\u00e1na jako adres\u00e1\u0159ov\u00fd strom z historick\u00fdch d\u016fvod\u016f, av\u0161ak v modern\u00edch opera\u010dn\u00edch syst\u00e9mech se ve skute\u010dnosti jedn\u00e1 o acyklick\u00fd orientovan\u00fd graf, co\u017e umo\u017e\u0148uje slo\u017eit\u011bj\u0161\u00ed vztahy mezi adres\u00e1\u0159i a soubory. Toto grafov\u00e9 pojet\u00ed adres\u00e1\u0159ov\u00e9 struktury je kl\u00ed\u010dov\u00e9 pro implementaci pokro\u010dil\u00fdch funkc\u00ed spr\u00e1vy soubor\u016f a adres\u00e1\u0159\u016f, av\u0161ak abstrahuje od cyklick\u00fdch m\u011bkk\u00fdch odkaz\u016f.",
        incorrect:
          'Adres\u00e1\u0159ov\u00e1 struktura je p\u0159esn\u011b a v\u017edy reprezentov\u00e1na jako stromov\u00e1 struktura, co\u017e znamen\u00e1, \u017ee neexistuj\u00ed \u017e\u00e1dn\u00e9 cyklick\u00e9 odkazy ani slo\u017eit\u011bj\u0161\u00ed grafov\u00e9 vztahy mezi adres\u00e1\u0159i a soubory, a term\u00edn "adres\u00e1\u0159ov\u00fd strom" je tak naprosto p\u0159esn\u00fd a odpov\u00edd\u00e1 implementaci ve v\u0161ech opera\u010dn\u00edch syst\u00e9mech. Grafov\u00e9 reprezentace adres\u00e1\u0159\u016f se v opera\u010dn\u00edch syst\u00e9mech nepou\u017e\u00edvaj\u00ed.',
        sectionNumber: "3.3.1",
        sectionTitle: "Cesta",
      },
      {
        uuid: "c2152f49-e7dc-4605-9136-c0fac7f37f78",
        correct:
          "P\u0159i zpracov\u00e1n\u00ed absolutn\u00ed cesty, jako nap\u0159\u00edklad `/usr/include/soubor.h`, opera\u010dn\u00ed syst\u00e9m za\u010d\u00edn\u00e1 v ko\u0159enov\u00e9m adres\u00e1\u0159i ozna\u010den\u00e9m znakem `/` a postupn\u011b vyhled\u00e1v\u00e1 polo\u017eky s odpov\u00eddaj\u00edc\u00edmi jm\u00e9ny, tedy nejprve `usr`, pot\u00e9 `include` a nakonec `soubor.h`, p\u0159i\u010dem\u017e ov\u011b\u0159uje, \u017ee `usr` a `include` jsou skute\u010dn\u011b adres\u00e1\u0159e, a `soubor.h` je c\u00edlov\u00fd soubor. Tento proces proch\u00e1zen\u00ed adres\u00e1\u0159ov\u00e9 struktury je z\u00e1kladem pro p\u0159\u00edstup k soubor\u016fm.",
        incorrect:
          "P\u0159i zpracov\u00e1n\u00ed absolutn\u00ed cesty, jako nap\u0159\u00edklad `/usr/include/soubor.h`, opera\u010dn\u00ed syst\u00e9m nejprve prohled\u00e1 aktu\u00e1ln\u00ed pracovn\u00ed adres\u00e1\u0159 u\u017eivatele a v n\u011bm se sna\u017e\u00ed nal\u00e9zt slo\u017eku `usr`, n\u00e1sledn\u011b v n\u00ed slo\u017eku `include` a nakonec soubor `soubor.h`, p\u0159i\u010dem\u017e ko\u0159enov\u00fd adres\u00e1\u0159 ozna\u010den\u00fd znakem `/` se v absolutn\u00edch cest\u00e1ch ignoruje. Absolutn\u00ed cesty se tedy chovaj\u00ed stejn\u011b jako relativn\u00ed cesty, jen za\u010d\u00ednaj\u00ed lom\u00edtkem.",
        sectionNumber: "3.3.1",
        sectionTitle: "Cesta",
      },
      {
        uuid: "299518a4-c9c6-4ff1-a24f-24b670c7582d",
        correct:
          "Slo\u017eky v opera\u010dn\u00edch syst\u00e9mech funguj\u00ed na principu slovn\u00edku, kde kl\u00ed\u010dem je n\u00e1zev souboru nebo podslo\u017eky a hodnotou je odkaz na dan\u00fd soubor nebo podslo\u017eku, co\u017e umo\u017e\u0148uje efektivn\u00ed vyhled\u00e1v\u00e1n\u00ed a spr\u00e1vu soubor\u016f. Mezi z\u00e1kladn\u00ed operace se slo\u017ekami pat\u0159\u00ed p\u0159id\u00e1v\u00e1n\u00ed a odeb\u00edr\u00e1n\u00ed kl\u00ed\u010d\u016f, a tak\u00e9 vyhled\u00e1v\u00e1n\u00ed odkaz\u016f na soubory nebo podslo\u017eky na z\u00e1klad\u011b jejich n\u00e1zv\u016f, co\u017e je kl\u00ed\u010dov\u00e9 pro navigaci a manipulaci se souborov\u00fdm syst\u00e9mem.",
        incorrect:
          "Slo\u017eky v opera\u010dn\u00edch syst\u00e9mech funguj\u00ed na principu seznamu, kde polo\u017eky jsou \u0159azeny line\u00e1rn\u011b a p\u0159\u00edstup k nim je sekven\u010dn\u00ed, co\u017e vy\u017eaduje pro vyhled\u00e1v\u00e1n\u00ed soubor\u016f proch\u00e1zen\u00ed cel\u00e9ho seznamu.  Mezi z\u00e1kladn\u00ed operace se slo\u017ekami pat\u0159\u00ed pouze p\u0159id\u00e1v\u00e1n\u00ed kl\u00ed\u010d\u016f, zat\u00edmco odeb\u00edr\u00e1n\u00ed a vyhled\u00e1v\u00e1n\u00ed odkaz\u016f na soubory nebo podslo\u017eky na z\u00e1klad\u011b jejich n\u00e1zv\u016f nen\u00ed podporov\u00e1no, co\u017e omezuje mo\u017enosti spr\u00e1vy souborov\u00e9ho syst\u00e9mu.",
        sectionNumber: "3.3.2",
        sectionTitle: "Adres\u00e1\u0159 (slo\u017eka)",
      },
      {
        uuid: "62639219-3307-48cc-97fd-5264226764b1",
        correct:
          "\u00dakolem slo\u017eek v adres\u00e1\u0159ov\u00e9 struktu\u0159e opera\u010dn\u00edho syst\u00e9mu je organizovat a pojmenov\u00e1vat soubory a dal\u0161\u00ed podslo\u017eky, \u010d\u00edm\u017e se vytv\u00e1\u0159\u00ed hierarchick\u00fd syst\u00e9m p\u0159\u00edstupu k dat\u016fm. Slo\u017eky neobsahuj\u00ed p\u0159\u00edmo data soubor\u016f, ale sp\u00ed\u0161e strukturovan\u00e1 metadata, kter\u00e1 mapuj\u00ed n\u00e1zvy soubor\u016f a podslo\u017eek na jejich fyzick\u00e9 um\u00edst\u011bn\u00ed v pam\u011b\u0165ov\u00e9m m\u00e9diu, umo\u017e\u0148uj\u00edc tak u\u017eivatel\u016fm a aplikac\u00edm pracovat s daty pomoc\u00ed logick\u00fdch cest nam\u00edsto p\u0159\u00edm\u00e9 manipulace s hardwarem.",
        incorrect:
          "\u00dakolem slo\u017eek v adres\u00e1\u0159ov\u00e9 struktu\u0159e opera\u010dn\u00edho syst\u00e9mu je ukl\u00e1dat samotn\u00e1 data soubor\u016f a podslo\u017eek, \u010d\u00edm\u017e se st\u00e1vaj\u00ed kontejnery pro ve\u0161ker\u00fd obsah souborov\u00e9ho syst\u00e9mu. Slo\u017eky prim\u00e1rn\u011b obsahuj\u00ed neinterpretovan\u00e9 sekvence bajt\u016f, podobn\u011b jako b\u011b\u017en\u00e9 soubory, a metadata hraj\u00ed pouze dopl\u0148kovou roli v organizaci dat, co\u017e vy\u017eaduje, aby opera\u010dn\u00ed syst\u00e9m neust\u00e1le interpretoval obsah slo\u017eek jako data soubor\u016f.",
        sectionNumber: "3.3.2",
        sectionTitle: "Adres\u00e1\u0159 (slo\u017eka)",
      },
      {
        uuid: "5879ab64-2715-46a2-8c12-1ce83438841a",
        correct:
          "Interakce u\u017eivatelsk\u00fdch program\u016f se slo\u017ekami v opera\u010dn\u00edch syst\u00e9mech se obvykle omezuje na dva hlavn\u00ed zp\u016fsoby: prvn\u00edm je pou\u017eit\u00ed cest, kdy opera\u010dn\u00ed syst\u00e9m intern\u011b zpracov\u00e1v\u00e1 operace se slo\u017ekami p\u0159i vol\u00e1n\u00edch jako `open`, a druh\u00fdm je iterace slo\u017eek pomoc\u00ed speci\u00e1ln\u00edho rozhran\u00ed, nap\u0159\u00edklad v syst\u00e9mech POSIX se pro tento \u00fa\u010del pou\u017e\u00edvaj\u00ed vol\u00e1n\u00ed jako `opendir`, `readdir` a `closedir`, kter\u00e9 poskytuj\u00ed abstrakci pro \u010dten\u00ed obsahu slo\u017eky bez p\u0159\u00edm\u00e9ho p\u0159\u00edstupu k diskov\u00e9 reprezentaci.",
        incorrect:
          "Interakce u\u017eivatelsk\u00fdch program\u016f se slo\u017ekami v opera\u010dn\u00edch syst\u00e9mech je prim\u00e1rn\u011b zalo\u017eena na p\u0159\u00edm\u00e9m \u010dten\u00ed a z\u00e1pisu bajt\u016f do slo\u017eek pomoc\u00ed vol\u00e1n\u00ed `read` a `write`, co\u017e umo\u017e\u0148uje aplikac\u00edm plnou kontrolu nad strukturou slo\u017eky. Syst\u00e9my POSIX pro iteraci slo\u017eek vy\u017eaduj\u00ed p\u0159\u00edmou manipulaci s diskov\u00fdmi bloky, a proto neposkytuj\u00ed \u017e\u00e1dn\u00e1 vysoko\u00farov\u0148ov\u00e1 vol\u00e1n\u00ed jako `opendir` nebo `readdir`, \u010d\u00edm\u017e se spr\u00e1va slo\u017eek st\u00e1v\u00e1 n\u00e1chyln\u011bj\u0161\u00ed k chyb\u00e1m a po\u0161kozen\u00ed dat.",
        sectionNumber: "3.3.2",
        sectionTitle: "Adres\u00e1\u0159 (slo\u017eka)",
      },
      {
        uuid: "18eb56ec-92e4-4526-ac14-bea87033e802",
        correct:
          "V opera\u010dn\u00edch syst\u00e9mech, kter\u00e9 implementuj\u00ed koncept tvrd\u00fdch odkaz\u016f, je mo\u017en\u00e9, aby v\u00edce adres\u00e1\u0159ov\u00fdch z\u00e1znam\u016f odkazovalo na stejn\u00fd i-uzel, co\u017e znamen\u00e1, \u017ee jeden fyzick\u00fd soubor m\u016f\u017ee b\u00fdt p\u0159\u00edstupn\u00fd pod r\u016fzn\u00fdmi jm\u00e9ny a um\u00edst\u011bn\u00edmi v r\u00e1mci adres\u00e1\u0159ov\u00e9 struktury.",
        incorrect:
          "V opera\u010dn\u00edch syst\u00e9mech s tvrd\u00fdmi odkazy, a\u010dkoliv jeden soubor m\u016f\u017ee m\u00edt v\u00edce jmen, tato jm\u00e9na mus\u00ed b\u00fdt v\u017edy um\u00edst\u011bna v r\u016fzn\u00fdch souborov\u00fdch syst\u00e9mech a tvrd\u00e9 odkazy slou\u017e\u00ed prim\u00e1rn\u011b k propojen\u00ed soubor\u016f mezi r\u016fzn\u00fdmi diskov\u00fdmi odd\u00edly, nikoliv v r\u00e1mci jednoho souborov\u00e9ho syst\u00e9mu.",
        sectionNumber: "3.3.3",
        sectionTitle: "Tvrd\u00e9 odkazy",
      },
      {
        uuid: "db155380-755d-47b4-8d57-84e3bf0a304f",
        correct:
          "I-uzly v souborov\u00e9m syst\u00e9mu si udr\u017euj\u00ed po\u010d\u00edtadlo odkaz\u016f, kter\u00e9 se inkrementuje p\u0159i ka\u017ed\u00e9m vytvo\u0159en\u00ed nov\u00e9ho tvrd\u00e9ho odkazu na dan\u00fd soubor a dekrementuje se p\u0159i odstran\u011bn\u00ed odkazu. Soubor je fyzicky odstran\u011bn z disku a\u017e v moment\u011b, kdy toto po\u010d\u00edtadlo dos\u00e1hne nuly, a to i v p\u0159\u00edpad\u011b, \u017ee existuj\u00ed otev\u0159en\u00e9 deskriptory souboru.",
        incorrect:
          "I-uzly v souborov\u00e9m syst\u00e9mu sice maj\u00ed po\u010d\u00edtadlo odkaz\u016f, ale to se t\u00fdk\u00e1 pouze symbolick\u00fdch odkaz\u016f a sleduje po\u010det symbolick\u00fdch odkaz\u016f na dan\u00fd soubor. Pro tvrd\u00e9 odkazy se po\u010d\u00edtadlo odkaz\u016f nepou\u017e\u00edv\u00e1 a soubor je smaz\u00e1n ihned po odstran\u011bn\u00ed posledn\u00edho adres\u00e1\u0159ov\u00e9ho z\u00e1znamu, bez ohledu na existenci dal\u0161\u00edch odkaz\u016f.",
        sectionNumber: "3.3.3",
        sectionTitle: "Tvrd\u00e9 odkazy",
      },
      {
        uuid: "478e1bf5-48b5-4f03-b6f0-c34bd6ff7238",
        correct:
          "Tvrd\u00e9 odkazy v souborov\u00fdch syst\u00e9mech jsou z pohledu u\u017eivatele zcela transparentn\u00ed a rovnocenn\u00e9, co\u017e znamen\u00e1, \u017ee v\u0161echny odkazy na stejn\u00fd i-uzel poskytuj\u00ed identick\u00fd p\u0159\u00edstup k souboru a jak\u00e1koliv operace proveden\u00e1 skrze jeden odkaz se projev\u00ed i p\u0159i p\u0159\u00edstupu skrze jak\u00fdkoliv jin\u00fd odkaz na tent\u00fd\u017e soubor.",
        incorrect:
          "Tvrd\u00e9 odkazy v souborov\u00fdch syst\u00e9mech sice umo\u017e\u0148uj\u00ed sd\u00edlen\u00ed soubor\u016f, ale nejsou zcela rovnocenn\u00e9. P\u016fvodn\u00ed adres\u00e1\u0159ov\u00fd z\u00e1znam souboru m\u00e1 v\u017edy p\u0159ednost a tvrd\u00e9 odkazy funguj\u00ed sp\u00ed\u0161e jako z\u00e1stupci, kte\u0159\u00ed mohou m\u00edt omezenou funk\u010dnost nebo zpo\u017ed\u011bn\u00ed v aktualizac\u00edch oproti origin\u00e1ln\u00edmu souboru.",
        sectionNumber: "3.3.3",
        sectionTitle: "Tvrd\u00e9 odkazy",
      },
      {
        uuid: "efa4362c-d04e-4c46-9610-5ec43a93b614",
        correct:
          "M\u011bkk\u00fd odkaz v souborov\u00e9m syst\u00e9mu p\u0159edstavuje \u00farove\u0148 nep\u0159\u00edmosti, proto\u017ee na rozd\u00edl od tvrd\u00fdch odkaz\u016f je implementov\u00e1n jako samostatn\u00fd objekt s vlastn\u00edm i-uzlem, co\u017e znamen\u00e1, \u017ee se nejedn\u00e1 pouze o dal\u0161\u00ed jm\u00e9no pro existuj\u00edc\u00ed i-uzel, ale o nez\u00e1vislou entitu, kter\u00e1 obsahuje cestu k c\u00edlov\u00e9mu souboru nebo adres\u00e1\u0159i.",
        incorrect:
          "M\u011bkk\u00fd odkaz v souborov\u00e9m syst\u00e9mu nep\u0159edstavuje \u00farove\u0148 nep\u0159\u00edmosti, proto\u017ee podobn\u011b jako tvrd\u00e9 odkazy je implementov\u00e1n pouze jako dal\u0161\u00ed jm\u00e9no pro existuj\u00edc\u00ed i-uzel, co\u017e znamen\u00e1, \u017ee se nejedn\u00e1 o nez\u00e1vislou entitu, ale pouze o alternativn\u00ed cestu k ji\u017e existuj\u00edc\u00edmu souboru nebo adres\u00e1\u0159i, bez vlastn\u00edho i-uzlu.",
        sectionNumber: "3.3.4",
        sectionTitle: "M\u011bkk\u00e9 odkazy",
      },
      {
        uuid: "54c42bbb-8a8b-43d7-b9ec-8f73dfbe42be",
        correct:
          "Kdy\u017e opera\u010dn\u00ed syst\u00e9m b\u011bhem proch\u00e1zen\u00ed adres\u00e1\u0159ov\u00e9 struktury naraz\u00ed na m\u011bkk\u00fd odkaz, p\u0159e\u010dte z n\u011bj ulo\u017eenou cestu a pokra\u010duje v dal\u0161\u00edm zpracov\u00e1n\u00ed zb\u00fdvaj\u00edc\u00edch \u010d\u00e1st\u00ed p\u016fvodn\u00ed cesty a\u017e po vyhodnocen\u00ed cesty z m\u011bkk\u00e9ho odkazu, co\u017e umo\u017e\u0148uje odkazovat i na slo\u017eky a vytv\u00e1\u0159et komplexn\u00ed struktury odkaz\u016f.",
        incorrect:
          "Kdy\u017e opera\u010dn\u00ed syst\u00e9m b\u011bhem proch\u00e1zen\u00ed adres\u00e1\u0159ov\u00e9 struktury naraz\u00ed na m\u011bkk\u00fd odkaz, ignoruje ulo\u017eenou cestu a pokra\u010duje v zpracov\u00e1n\u00ed zb\u00fdvaj\u00edc\u00edch \u010d\u00e1st\u00ed p\u016fvodn\u00ed cesty, ani\u017e by bral v \u00favahu obsah m\u011bkk\u00e9ho odkazu, co\u017e znemo\u017e\u0148uje odkazovat na slo\u017eky a omezuje m\u011bkk\u00e9 odkazy pouze na koncov\u00e9 soubory.",
        sectionNumber: "3.3.4",
        sectionTitle: "M\u011bkk\u00e9 odkazy",
      },
      {
        uuid: "1350d109-5330-43c3-b40f-cb3db48c9ae2",
        correct:
          "Na rozd\u00edl od tvrd\u00fdch odkaz\u016f, m\u011bkk\u00e9 odkazy umo\u017e\u0148uj\u00ed vytv\u00e1\u0159et odkazy nap\u0159\u00ed\u010d r\u016fzn\u00fdmi souborov\u00fdmi syst\u00e9my, proto\u017ee cesta ulo\u017een\u00e1 v m\u011bkk\u00e9m odkazu m\u016f\u017ee sm\u011b\u0159ovat do zcela jin\u00e9ho souborov\u00e9ho syst\u00e9mu, ne\u017e ve kter\u00e9m se nach\u00e1z\u00ed samotn\u00fd m\u011bkk\u00fd odkaz, \u010d\u00edm\u017e se roz\u0161i\u0159uje flexibilita spr\u00e1vy soubor\u016f a adres\u00e1\u0159\u016f.",
        incorrect:
          "Podobn\u011b jako tvrd\u00e9 odkazy, m\u011bkk\u00e9 odkazy jsou omezeny na stejn\u00fd souborov\u00fd syst\u00e9m, a proto cesta ulo\u017een\u00e1 v m\u011bkk\u00e9m odkazu mus\u00ed v\u017edy sm\u011b\u0159ovat do stejn\u00e9ho souborov\u00e9ho syst\u00e9mu, ve kter\u00e9m se nach\u00e1z\u00ed samotn\u00fd m\u011bkk\u00fd odkaz, co\u017e omezuje flexibilitu spr\u00e1vy soubor\u016f a adres\u00e1\u0159\u016f v r\u00e1mci r\u016fzn\u00fdch syst\u00e9m\u016f.",
        sectionNumber: "3.3.4",
        sectionTitle: "M\u011bkk\u00e9 odkazy",
      },
      {
        uuid: "6cba4672-06bf-42b2-ae91-ea807c89febf",
        correct:
          "Sd\u00edlen\u00e1 adres\u00e1\u0159ov\u00e1 struktura v opera\u010dn\u00edch syst\u00e9mech p\u0159in\u00e1\u0161\u00ed v\u00fdhody v podob\u011b snadn\u00e9ho p\u0159ed\u00e1v\u00e1n\u00ed soubor\u016f mezi r\u016fzn\u00fdmi programy, proto\u017ee soubory vytvo\u0159en\u00e9 jedn\u00edm programem jsou okam\u017eit\u011b dostupn\u00e9 i pro ostatn\u00ed programy pod stejnou cestou, co\u017e umo\u017e\u0148uje efektivn\u00ed v\u00fdm\u011bnu dat a zjednodu\u0161uje integraci aplikac\u00ed v r\u00e1mci syst\u00e9mu.",
        incorrect:
          "Izolovan\u00e1 adres\u00e1\u0159ov\u00e1 struktura, kde ka\u017ed\u00fd program m\u00e1 sv\u016fj vlastn\u00ed priv\u00e1tn\u00ed adres\u00e1\u0159ov\u00fd prostor, je kl\u00ed\u010dov\u00e1 pro modern\u00ed opera\u010dn\u00ed syst\u00e9my, jeliko\u017e zabra\u0148uje necht\u011bn\u00e9mu sd\u00edlen\u00ed soubor\u016f mezi programy a t\u00edm zvy\u0161uje bezpe\u010dnost a stabilitu syst\u00e9mu, a\u010dkoliv to m\u00edrn\u011b komplikuje v\u00fdm\u011bnu dat mezi aplikacemi, kter\u00e1 vy\u017eaduje speci\u00e1ln\u00ed mechanismy.",
        sectionNumber: "3.3.5",
        sectionTitle: "Sd\u00edlen\u00ed",
      },
      {
        uuid: "1bbca779-d7cc-4bd0-a9e5-7bf8ab5a332f",
        correct:
          "Glob\u00e1ln\u00ed adres\u00e1\u0159ov\u00e1 struktura, sd\u00edlen\u00e1 v\u0161emi procesy v opera\u010dn\u00edm syst\u00e9mu, usnad\u0148uje u\u017eivatel\u016fm orientaci a organizaci dat, proto\u017ee u\u017eivatel vid\u00ed konzistentn\u00ed pohled na soubory a slo\u017eky nap\u0159\u00ed\u010d v\u0161emi aplikacemi, co\u017e eliminuje pot\u0159ebu p\u0159ep\u00edn\u00e1n\u00ed mezi r\u016fzn\u00fdmi pohledy na souborov\u00fd syst\u00e9m a zjednodu\u0161uje spr\u00e1vu dat.",
        incorrect:
          "Pro zv\u00fd\u0161en\u00ed bezpe\u010dnosti a p\u0159ehlednosti modern\u00ed opera\u010dn\u00ed syst\u00e9my implementuj\u00ed u\u017eivatelsky specifickou adres\u00e1\u0159ovou strukturu, kde ka\u017ed\u00fd u\u017eivatel m\u00e1 kompletn\u011b odd\u011blen\u00fd souborov\u00fd syst\u00e9m, neviditeln\u00fd pro ostatn\u00ed u\u017eivatele, co\u017e sice komplikuje sd\u00edlen\u00ed soubor\u016f mezi u\u017eivateli, ale v\u00fdznamn\u011b posiluje ochranu soukrom\u00ed a dat.",
        sectionNumber: "3.3.5",
        sectionTitle: "Sd\u00edlen\u00ed",
      },
      {
        uuid: "64886f31-3e46-4b48-823e-9cd29a548685",
        correct:
          "Sd\u00edlen\u00ed adres\u00e1\u0159ov\u00e9 struktury v opera\u010dn\u00edm syst\u00e9mu, a\u010dkoliv p\u0159in\u00e1\u0161\u00ed v\u00fdhody v podob\u011b jednoduch\u00e9ho sd\u00edlen\u00ed soubor\u016f, s sebou nese i rizika hazardu soub\u011bhu, kdy se r\u016fzn\u00e9 programy mohou pokusit sou\u010dasn\u011b p\u0159istupovat ke stejn\u00fdm soubor\u016fm nebo adres\u00e1\u0159\u016fm, co\u017e m\u016f\u017ee v\u00e9st k chyb\u00e1m a nekonzistenci dat, a vy\u017eaduje mechanismy pro synchronizaci p\u0159\u00edstupu.",
        incorrect:
          "Modern\u00ed opera\u010dn\u00ed syst\u00e9my eliminuj\u00ed riziko hazardu soub\u011bhu v souvislosti s adres\u00e1\u0159ovou strukturou t\u00edm, \u017ee implementuj\u00ed transak\u010dn\u00ed souborov\u00e9 operace, kter\u00e9 zaru\u010duj\u00ed atomicitu a izolaci operac\u00ed, \u010d\u00edm\u017e se zaji\u0161\u0165uje, \u017ee i p\u0159i soub\u011b\u017en\u00e9m p\u0159\u00edstupu k soubor\u016fm nedojde k datov\u00e9 nekonzistenci a integrita dat je v\u017edy zachov\u00e1na.",
        sectionNumber: "3.3.5",
        sectionTitle: "Sd\u00edlen\u00ed",
      },
      {
        uuid: "a4b75888-f823-4f47-84f5-e0126c494af4",
        correct:
          "Z\u00e1kladn\u00ed datov\u00e9 struktury souborov\u00e9ho syst\u00e9mu se odli\u0161uj\u00ed od klasick\u00fdch datov\u00fdch struktur p\u0159edev\u0161\u00edm nutnost\u00ed optimalizace pro blokov\u00e9 \u010dten\u00ed a z\u00e1pis dat, co\u017e vy\u017eaduje minimalizaci po\u010dtu blokov\u00fdch operac\u00ed pro zv\u00fd\u0161en\u00ed efektivity, a tak\u00e9 odolnost\u00ed v\u016f\u010di p\u0159eru\u0161en\u00ed operac\u00ed, aby byla zaji\u0161t\u011bna konzistence dat i v p\u0159\u00edpad\u011b neo\u010dek\u00e1van\u00e9ho selh\u00e1n\u00ed syst\u00e9mu b\u011bhem z\u00e1pisu.",
        incorrect:
          "Z\u00e1kladn\u00ed datov\u00e9 struktury souborov\u00e9ho syst\u00e9mu jsou identick\u00e9 s klasick\u00fdmi datov\u00fdmi strukturami a nevy\u017eaduj\u00ed \u017e\u00e1dnou specifickou optimalizaci pro blokov\u00e9 \u010dten\u00ed a z\u00e1pis dat, jeliko\u017e modern\u00ed souborov\u00e9 syst\u00e9my efektivn\u011b pracuj\u00ed s mal\u00fdmi objemy dat a jsou pln\u011b odoln\u00e9 v\u016f\u010di p\u0159eru\u0161en\u00ed operac\u00ed d\u00edky pokro\u010dil\u00fdm mechanism\u016fm atomick\u00fdch transakc\u00ed.",
        sectionNumber: "3.4.1",
        sectionTitle: "Datov\u00e9 struktury",
      },
      {
        uuid: "90c14115-e8a5-4bfd-8ca8-31f1a1b5c761",
        correct:
          "Pro n\u00e1vrh datov\u00fdch struktur souborov\u00e9ho syst\u00e9mu je kl\u00ed\u010dov\u00e9 vyhnout se struktur\u00e1m, kter\u00e9 vy\u017eaduj\u00ed velk\u00e9 mno\u017estv\u00ed sekven\u010dn\u00edch operac\u00ed s mal\u00fdm objemem dat, jako nap\u0159\u00edklad klasick\u00fd z\u0159et\u011bzen\u00fd seznam, proto\u017ee prodleva mezi jednotliv\u00fdmi blokov\u00fdmi operacemi m\u016f\u017ee b\u00fdt zna\u010dn\u00e1, co\u017e by vedlo k neefektivn\u00edmu vyu\u017eit\u00ed diskov\u00e9ho prostoru a sn\u00ed\u017een\u00ed celkov\u00e9 v\u00fdkonnosti syst\u00e9mu.",
        incorrect:
          "Pro n\u00e1vrh datov\u00fdch struktur souborov\u00e9ho syst\u00e9mu je ide\u00e1ln\u00ed up\u0159ednost\u0148ovat struktury, kter\u00e9 vy\u017eaduj\u00ed velk\u00e9 mno\u017estv\u00ed sekven\u010dn\u00edch operac\u00ed s mal\u00fdm objemem dat, jako nap\u0159\u00edklad klasick\u00fd z\u0159et\u011bzen\u00fd seznam, proto\u017ee tyto struktury umo\u017e\u0148uj\u00ed maxim\u00e1ln\u00ed flexibilitu p\u0159i pr\u00e1ci s daty a minimalizuj\u00ed fragmentaci diskov\u00e9ho prostoru, \u010d\u00edm\u017e zvy\u0161uj\u00ed celkovou v\u00fdkonnost syst\u00e9mu.",
        sectionNumber: "3.4.1",
        sectionTitle: "Datov\u00e9 struktury",
      },
      {
        uuid: "c45d3959-e104-4a25-b683-ff3c6944c679",
        correct:
          "Robustnost datov\u00fdch struktur souborov\u00e9ho syst\u00e9mu v\u016f\u010di p\u0159eru\u0161en\u00ed operac\u00ed je z\u00e1sadn\u00ed po\u017eadavek, kter\u00fd vylu\u010duje pou\u017eit\u00ed slo\u017eit\u00fdch algoritm\u016f, je\u017e by mohly v\u00e9st k nekonzistentn\u00edmu stavu dat po ne\u010dekan\u00e9m ukon\u010den\u00ed operace, jako nap\u0159\u00edklad vyva\u017eov\u00e1n\u00ed strom\u016f rotacemi, kde by mohlo doj\u00edt k trval\u00e9 ztr\u00e1t\u011b dat v do\u010dasn\u011b odpojen\u00fdch \u010d\u00e1stech struktury.",
        incorrect:
          "Robustnost datov\u00fdch struktur souborov\u00e9ho syst\u00e9mu v\u016f\u010di p\u0159eru\u0161en\u00ed operac\u00ed je sice \u017e\u00e1douc\u00ed, ale nen\u00ed kritick\u00e1, a proto je mo\u017en\u00e9 bez obav pou\u017e\u00edvat i slo\u017eit\u00e9 algoritmy, kter\u00e9 mohou do\u010dasn\u011b uv\u00e9st strukturu do nekonzistentn\u00edho stavu, jako nap\u0159\u00edklad vyva\u017eov\u00e1n\u00ed strom\u016f rotacemi, jeliko\u017e modern\u00ed syst\u00e9my jsou vybaveny mechanismy pro automatick\u00e9 obnoven\u00ed dat po p\u0159eru\u0161en\u00ed.",
        sectionNumber: "3.4.1",
        sectionTitle: "Datov\u00e9 struktury",
      },
      {
        uuid: "dd8958ee-25af-46b2-bb2a-279abf454741",
        correct:
          "Bitmapa je datov\u00e1 struktura pou\u017e\u00edvan\u00e1 v souborov\u00fdch syst\u00e9mech pro spr\u00e1vu voln\u00fdch a vyu\u017eit\u00fdch blok\u016f, kde ka\u017ed\u00fd bit v bitmap\u011b reprezentuje stav jednoho datov\u00e9ho bloku na disku, co\u017e umo\u017e\u0148uje rychl\u00e9 vyhled\u00e1v\u00e1n\u00ed voln\u00e9ho m\u00edsta d\u00edky kompaktn\u00ed reprezentaci a line\u00e1rn\u00edmu uspo\u0159\u00e1d\u00e1n\u00ed blok\u016f. Jej\u00ed jednoduchost a robustnost z\u00e1pisu, plynouc\u00ed z absence odkaz\u016f mezi bloky, z n\u00ed \u010din\u00ed efektivn\u00ed n\u00e1stroj pro spr\u00e1vu diskov\u00e9ho prostoru, a\u010dkoli atomick\u00e9 operace s bity v r\u016fzn\u00fdch bitmapov\u00fdch bloc\u00edch mohou p\u0159edstavovat v\u00fdzvu.",
        incorrect:
          "Bitmapa je slo\u017eit\u00e1 datov\u00e1 struktura pou\u017e\u00edvan\u00e1 v souborov\u00fdch syst\u00e9mech pro spr\u00e1vu voln\u00fdch a vyu\u017eit\u00fdch blok\u016f, kde ka\u017ed\u00fd byte v bitmap\u011b reprezentuje stav jednoho datov\u00e9ho bloku na disku, co\u017e neumo\u017e\u0148uje rychl\u00e9 vyhled\u00e1v\u00e1n\u00ed voln\u00e9ho m\u00edsta kv\u016fli nekompaktn\u00ed reprezentaci a neline\u00e1rn\u00edmu uspo\u0159\u00e1d\u00e1n\u00ed blok\u016f. Jej\u00ed slo\u017eitost a n\u00e1chylnost k chyb\u00e1m z\u00e1pisu, plynouc\u00ed z p\u0159\u00edtomnosti odkaz\u016f mezi bloky, z n\u00ed \u010din\u00ed neefektivn\u00ed n\u00e1stroj pro spr\u00e1vu diskov\u00e9ho prostoru, a atomick\u00e9 operace s byty v r\u016fzn\u00fdch bitmapov\u00fdch bloc\u00edch nep\u0159edstavuj\u00ed v\u00fdzvu.",
        sectionNumber: "3.4.2",
        sectionTitle: "Bitmapa",
      },
      {
        uuid: "1792f9e8-ca3c-46cd-a500-f10eb1789528",
        correct:
          "V kontextu souborov\u00fdch syst\u00e9m\u016f bitmapa funguje jako p\u0159\u00edm\u00e1 reprezentace alokace diskov\u00fdch blok\u016f, kde jeden bit p\u0159esn\u011b odpov\u00edd\u00e1 stavu jednoho bloku, a\u0165 u\u017e je voln\u00fd nebo obsazen\u00fd. Tato metoda umo\u017e\u0148uje opera\u010dn\u00edmu syst\u00e9mu efektivn\u011b spravovat voln\u00e9 m\u00edsto na disku a rychle identifikovat dostupn\u00e9 bloky pro ukl\u00e1d\u00e1n\u00ed nov\u00fdch dat, p\u0159i\u010dem\u017e kompaktn\u00ed povaha bitmapy minimalizuje re\u017eii spojenou s metadaty pro spr\u00e1vu diskov\u00e9ho prostoru.",
        incorrect:
          "V kontextu souborov\u00fdch syst\u00e9m\u016f bitmapa funguje jako nep\u0159\u00edm\u00e1 reprezentace alokace diskov\u00fdch blok\u016f, kde jeden bit p\u0159ibli\u017en\u011b odpov\u00edd\u00e1 stavu n\u011bkolika blok\u016f, a\u0165 u\u017e jsou voln\u00e9 nebo obsazen\u00e9. Tato metoda neumo\u017e\u0148uje opera\u010dn\u00edmu syst\u00e9mu efektivn\u011b spravovat voln\u00e9 m\u00edsto na disku a pomalu identifikovat dostupn\u00e9 bloky pro ukl\u00e1d\u00e1n\u00ed nov\u00fdch dat, p\u0159i\u010dem\u017e nekompaktn\u00ed povaha bitmapy maximalizuje re\u017eii spojenou s metadaty pro spr\u00e1vu diskov\u00e9ho prostoru.",
        sectionNumber: "3.4.2",
        sectionTitle: "Bitmapa",
      },
      {
        uuid: "94d2f91e-de4d-4231-8a88-3da510263350",
        correct:
          "Tabulky v souborov\u00fdch syst\u00e9mech, kter\u00e9 se pou\u017e\u00edvaj\u00ed pro ukl\u00e1d\u00e1n\u00ed metadat, se \u010dasto implementuj\u00ed jako souvisl\u00e9 oblasti pam\u011bti obsahuj\u00edc\u00ed \u0159\u00e1dky fixn\u00ed velikosti, p\u0159i\u010dem\u017e velikost \u0159\u00e1dku je zvolena tak, aby se do jednoho bloku disku ve\u0161el celo\u010d\u00edseln\u00fd po\u010det \u0159\u00e1dk\u016f, co\u017e usnad\u0148uje efektivn\u00ed spr\u00e1vu a p\u0159\u00edstup k metadat\u016fm.",
        incorrect:
          "Tabulky v souborov\u00fdch syst\u00e9mech, kter\u00e9 se pou\u017e\u00edvaj\u00ed pro ukl\u00e1d\u00e1n\u00ed metadat, se implementuj\u00ed jako nesouvisl\u00e9 seznamy pam\u011bti s \u0159\u00e1dky prom\u011bnn\u00e9 velikosti, p\u0159i\u010dem\u017e velikost \u0159\u00e1dku je libovoln\u00e1 a nebere se ohled na velikost bloku disku, co\u017e zt\u011b\u017euje spr\u00e1vu a p\u0159\u00edstup k metadat\u016fm.",
        sectionNumber: "3.4.3",
        sectionTitle: "Tabulka",
      },
      {
        uuid: "a5ef668a-4a67-4701-b346-9a8bd9d4b5ba",
        correct:
          "Pro alokaci \u0159\u00e1dk\u016f v tabulk\u00e1ch, kter\u00e9 slou\u017e\u00ed k ulo\u017een\u00ed metadat soubor\u016f, se b\u011b\u017en\u011b pou\u017e\u00edv\u00e1 bitmapa, kter\u00e1 umo\u017e\u0148uje rychl\u00e9 nalezen\u00ed voln\u00e9ho \u0159\u00e1dku pro z\u00e1pis nov\u00fdch metadat a efektivn\u00ed spr\u00e1vu obsazenosti jednotliv\u00fdch \u0159\u00e1dk\u016f tabulky.",
        incorrect:
          "Pro alokaci \u0159\u00e1dk\u016f v tabulk\u00e1ch, kter\u00e9 slou\u017e\u00ed k ulo\u017een\u00ed metadat soubor\u016f, se b\u011b\u017en\u011b pou\u017e\u00edv\u00e1 spojov\u00fd seznam voln\u00fdch \u0159\u00e1dk\u016f, co\u017e umo\u017e\u0148uje sice flexibiln\u00ed, ale pomalej\u0161\u00ed nalezen\u00ed voln\u00e9ho \u0159\u00e1dku pro z\u00e1pis nov\u00fdch metadat a m\u00e9n\u011b efektivn\u00ed spr\u00e1vu obsazenosti jednotliv\u00fdch \u0159\u00e1dk\u016f tabulky.",
        sectionNumber: "3.4.3",
        sectionTitle: "Tabulka",
      },
      {
        uuid: "31f8ddf6-93ca-469c-a63a-3d489a67bc38",
        correct:
          "Tabulky pro metadata soubor\u016f jsou obvykle alokov\u00e1ny staticky p\u0159i vytv\u00e1\u0159en\u00ed souborov\u00e9ho syst\u00e9mu, co\u017e zjednodu\u0161uje implementaci a spr\u00e1vu, av\u0161ak m\u016f\u017ee v\u00e9st k neefektivn\u00edmu vyu\u017eit\u00ed diskov\u00e9ho prostoru a potenci\u00e1ln\u00edmu vy\u010derp\u00e1n\u00ed kapacity tabulky d\u0159\u00edve, ne\u017e dojde voln\u00e9 m\u00edsto na datech.",
        incorrect:
          "Tabulky pro metadata soubor\u016f jsou obvykle alokov\u00e1ny dynamicky podle pot\u0159eby b\u011bhem b\u011bhu syst\u00e9mu, co\u017e maximalizuje efektivitu vyu\u017eit\u00ed diskov\u00e9ho prostoru a zabra\u0148uje vy\u010derp\u00e1n\u00ed kapacity tabulky, ale zna\u010dn\u011b komplikuje implementaci a spr\u00e1vu souborov\u00e9ho syst\u00e9mu.",
        sectionNumber: "3.4.3",
        sectionTitle: "Tabulka",
      },
      {
        uuid: "c71f3b97-c780-4dd4-b012-0599727603fc",
        correct:
          "B-strom je n-\u00e1rn\u00ed vyhled\u00e1vac\u00ed strom, kde ka\u017ed\u00fd uzel m\u016f\u017ee m\u00edt a\u017e n potomk\u016f, p\u0159i\u010dem\u017e hodnota n je obvykle relativn\u011b vysok\u00e1, dosahuj\u00edc\u00ed des\u00edtek a\u017e stovek, co\u017e p\u0159isp\u00edv\u00e1 k men\u0161\u00ed hloubce stromu a optimalizaci pro operace s blokov\u00fdm p\u0159\u00edstupem, jako jsou diskov\u00e9 operace v souborov\u00fdch syst\u00e9mech.",
        incorrect:
          "B-strom je bin\u00e1rn\u00ed vyhled\u00e1vac\u00ed strom, kde ka\u017ed\u00fd uzel m\u016f\u017ee m\u00edt maxim\u00e1ln\u011b dva potomky, co\u017e zaji\u0161\u0165uje jednoduchost implementace a robustnost, a je prim\u00e1rn\u011b optimalizov\u00e1n pro operace s n\u00edzkou latenc\u00ed, jako jsou operace v opera\u010dn\u00ed pam\u011bti, a nen\u00ed typicky pou\u017e\u00edv\u00e1n pro spr\u00e1vu dat na disku.",
        sectionNumber: "3.4.4",
        sectionTitle: "B-strom",
      },
      {
        uuid: "7e10ce44-6cee-4192-bc4c-ef85aff341b2",
        correct:
          "D\u00edky sv\u00e9 samovyva\u017eovac\u00ed povaze si B-strom udr\u017euje logaritmickou hloubku bez ohledu na po\u0159ad\u00ed vkl\u00e1dan\u00fdch a odeb\u00edran\u00fdch kl\u00ed\u010d\u016f, co\u017e zaru\u010duje, \u017ee operace p\u0159id\u00e1v\u00e1n\u00ed i odeb\u00edr\u00e1n\u00ed kl\u00ed\u010d\u016f maj\u00ed logaritmickou \u010dasovou slo\u017eitost, a \u010din\u00ed z B-stromu efektivn\u00ed datovou strukturu pro syst\u00e9my s vysokou latenc\u00ed blokov\u00fdch operac\u00ed, nap\u0159\u00edklad pro spr\u00e1vu index\u016f v datab\u00e1z\u00edch.",
        incorrect:
          "Kv\u016fli sv\u00e9 slo\u017eit\u00e9 implementaci a nutnosti manu\u00e1ln\u00edho vyva\u017eov\u00e1n\u00ed vy\u017eaduje B-strom pravidelnou \u00fadr\u017ebu pro zachov\u00e1n\u00ed optim\u00e1ln\u00ed hloubky, a operace p\u0159id\u00e1v\u00e1n\u00ed a odeb\u00edr\u00e1n\u00ed kl\u00ed\u010d\u016f maj\u00ed line\u00e1rn\u00ed \u010dasovou slo\u017eitost v nejhor\u0161\u00edm p\u0159\u00edpad\u011b, co\u017e ho \u010din\u00ed m\u00e9n\u011b vhodn\u00fdm pro syst\u00e9my s vysokou latenc\u00ed blokov\u00fdch operac\u00ed, a proto se B-stromy obvykle nepou\u017e\u00edvaj\u00ed v modern\u00edch datab\u00e1zov\u00fdch syst\u00e9mech.",
        sectionNumber: "3.4.4",
        sectionTitle: "B-strom",
      },
      {
        uuid: "2887d54a-4c41-4b4f-b150-34340f0b3054",
        correct:
          "Podle textu, mezi typy poru\u0161en\u00ed konzistence souborov\u00e9ho syst\u00e9mu pat\u0159\u00ed naru\u0161en\u00ed jednotliv\u00e9 datov\u00e9 struktury, jako nap\u0159\u00edklad B-strom obsahuj\u00edc\u00ed uzel, kter\u00fd nen\u00ed platn\u00fdm uzlem, co\u017e m\u016f\u017ee nastat, pokud byl nov\u00fd odkaz zaps\u00e1n d\u0159\u00edve ne\u017e samotn\u00fd odkazovan\u00fd uzel.",
        incorrect:
          "Podle textu, mezi typy poru\u0161en\u00ed konzistence souborov\u00e9ho syst\u00e9mu pat\u0159\u00ed naru\u0161en\u00ed jednotliv\u00e9 datov\u00e9 struktury, jako nap\u0159\u00edklad B-strom obsahuj\u00edc\u00ed uzel, kter\u00fd nen\u00ed platn\u00fdm uzlem, co\u017e m\u016f\u017ee nastat, pokud byl nov\u00fd odkaz zaps\u00e1n pozd\u011bji ne\u017e samotn\u00fd odkazovan\u00fd uzel.",
        sectionNumber: "3.4.5",
        sectionTitle: "Konzistence",
      },
      {
        uuid: "7fb2a85c-90c1-4a01-aae8-cc6cac0893b8",
        correct:
          "Text uv\u00e1d\u00ed, \u017ee konflikt informac\u00ed v r\u016fzn\u00fdch datov\u00fdch struktur\u00e1ch p\u0159edstavuje jeden z typ\u016f poru\u0161en\u00ed konzistence souborov\u00e9ho syst\u00e9mu, nap\u0159\u00edklad situace, kdy bitmapa ozna\u010duje \u0159\u00e1dek tabulky za voln\u00fd, av\u0161ak tento \u0159\u00e1dek je sou\u010dasn\u011b vypln\u011bn smyslupln\u00fdmi metadaty.",
        incorrect:
          "Text uv\u00e1d\u00ed, \u017ee konflikt informac\u00ed v r\u016fzn\u00fdch datov\u00fdch struktur\u00e1ch nep\u0159edstavuje typ poru\u0161en\u00ed konzistence souborov\u00e9ho syst\u00e9mu, nap\u0159\u00edklad situace, kdy bitmapa ozna\u010duje \u0159\u00e1dek tabulky za voln\u00fd, av\u0161ak tento \u0159\u00e1dek je sou\u010dasn\u011b vypln\u011bn smyslupln\u00fdmi metadaty.",
        sectionNumber: "3.4.5",
        sectionTitle: "Konzistence",
      },
      {
        uuid: "51550880-3365-4454-919f-634815238548",
        correct:
          "Nesoulad mezi metadaty a datov\u00fdmi bloky je v textu pops\u00e1n jako dal\u0161\u00ed typ poru\u0161en\u00ed konzistence souborov\u00e9ho syst\u00e9mu, p\u0159i\u010dem\u017e jako p\u0159\u00edklad je uvedena situace, kdy metadata souboru indikuj\u00ed vlastn\u00edka u\u017eivatele B, ale datov\u00e9 bloky odkazovan\u00e9 metadaty ve skute\u010dnosti obsahuj\u00ed data u\u017eivatele A.",
        incorrect:
          "Nesoulad mezi metadaty a datov\u00fdmi bloky nen\u00ed v textu pops\u00e1n jako typ poru\u0161en\u00ed konzistence souborov\u00e9ho syst\u00e9mu, p\u0159i\u010dem\u017e jako p\u0159\u00edklad je uvedena situace, kdy metadata souboru indikuj\u00ed vlastn\u00edka u\u017eivatele B, ale datov\u00e9 bloky odkazovan\u00e9 metadaty ve skute\u010dnosti obsahuj\u00ed data u\u017eivatele A.",
        sectionNumber: "3.4.5",
        sectionTitle: "Konzistence",
      },
      {
        uuid: "d6df9140-a97b-4f80-a8c5-7008097d0251",
        correct:
          "Dle poskytnut\u00e9ho textu, jedn\u00edm z hlavn\u00edch d\u016fvod\u016f vzniku nekonzistence souborov\u00e9ho syst\u00e9mu je p\u0159eru\u0161en\u00ed kritick\u00e9 operace, kter\u00e1 prov\u00e1d\u00ed v\u00edce souvisej\u00edc\u00edch zm\u011bn, co\u017e m\u016f\u017ee b\u00fdt zp\u016fsobeno nap\u0159\u00edklad v\u00fdpadkem nap\u00e1jen\u00ed syst\u00e9mu nebo kritickou chybou, vedouc\u00ed k p\u00e1du cel\u00e9ho opera\u010dn\u00edho syst\u00e9mu.",
        incorrect:
          "Dle poskytnut\u00e9ho textu, jedn\u00edm z hlavn\u00edch d\u016fvod\u016f vzniku nekonzistence souborov\u00e9ho syst\u00e9mu je dokon\u010den\u00ed kritick\u00e9 operace, kter\u00e1 prov\u00e1d\u00ed v\u00edce souvisej\u00edc\u00edch zm\u011bn, co\u017e m\u016f\u017ee b\u00fdt zp\u016fsobeno nap\u0159\u00edklad v\u00fdpadkem nap\u00e1jen\u00ed syst\u00e9mu nebo kritickou chybou, vedouc\u00ed k p\u00e1du cel\u00e9ho opera\u010dn\u00edho syst\u00e9mu.",
        sectionNumber: "3.4.5",
        sectionTitle: "Konzistence",
      },
      {
        uuid: "5c51606c-a002-4287-8864-b1d091dfc4b2",
        correct:
          "Text vysv\u011btluje, \u017ee i v situac\u00edch, kdy je souborov\u00fd syst\u00e9m navr\u017een tak, aby byl odoln\u00fd v\u016f\u010di p\u0159eru\u0161en\u00edm, m\u016f\u017ee b\u00fdt konzistence naru\u0161ena p\u0159euspo\u0159\u00e1d\u00e1n\u00edm po\u0159ad\u00ed z\u00e1pis\u016f, kter\u00e9 m\u016f\u017ee b\u00fdt zp\u016fsobeno pl\u00e1nova\u010dem opera\u010dn\u00edho syst\u00e9mu nebo samotn\u00fdm \u00falo\u017en\u00fdm za\u0159\u00edzen\u00edm.",
        incorrect:
          "Text vysv\u011btluje, \u017ee i v situac\u00edch, kdy je souborov\u00fd syst\u00e9m navr\u017een tak, aby byl odoln\u00fd v\u016f\u010di p\u0159eru\u0161en\u00edm, nem\u016f\u017ee b\u00fdt konzistence naru\u0161ena p\u0159euspo\u0159\u00e1d\u00e1n\u00edm po\u0159ad\u00ed z\u00e1pis\u016f, kter\u00e9 m\u016f\u017ee b\u00fdt zp\u016fsobeno pl\u00e1nova\u010dem opera\u010dn\u00edho syst\u00e9mu nebo samotn\u00fdm \u00falo\u017en\u00fdm za\u0159\u00edzen\u00edm.",
        sectionNumber: "3.4.5",
        sectionTitle: "Konzistence",
      },
      {
        uuid: "3623fa7a-e6bc-4faf-8429-8ce9afa3e291",
        correct:
          "Podle textu, mezi metody \u0159e\u0161en\u00ed probl\u00e9m\u016f s konzistenc\u00ed souborov\u00e9ho syst\u00e9mu pat\u0159\u00ed detekce probl\u00e9mu pomoc\u00ed p\u0159\u00edznaku zapsan\u00e9ho p\u0159i korektn\u00edm ukon\u010den\u00ed opera\u010dn\u00edho syst\u00e9mu a n\u00e1sledn\u00e1 k\u0159\u00ed\u017eov\u00e1 kontrola v\u0161ech metadat, kter\u00e1 se prov\u00e1d\u00ed v situac\u00edch, kdy mohlo doj\u00edt k po\u0161kozen\u00ed.",
        incorrect:
          "Podle textu, mezi metody \u0159e\u0161en\u00ed probl\u00e9m\u016f s konzistenc\u00ed souborov\u00e9ho syst\u00e9mu pat\u0159\u00ed detekce probl\u00e9mu pomoc\u00ed p\u0159\u00edznaku zapsan\u00e9ho p\u0159i nekorektn\u00edm ukon\u010den\u00ed opera\u010dn\u00edho syst\u00e9mu a n\u00e1sledn\u00e1 k\u0159\u00ed\u017eov\u00e1 kontrola v\u0161ech metadat, kter\u00e1 se prov\u00e1d\u00ed v situac\u00edch, kdy mohlo doj\u00edt k po\u0161kozen\u00ed.",
        sectionNumber: "3.4.5",
        sectionTitle: "Konzistence",
      },
      {
        uuid: "86ad1afe-21b0-41ab-91a9-aa6ef8f5be59",
        correct:
          "\u017durn\u00e1l, jako\u017eto sofistikovan\u011bj\u0161\u00ed metoda pro spr\u00e1vu metadat souborov\u00e9ho syst\u00e9mu, vyu\u017e\u00edv\u00e1 transak\u010dn\u00ed zpracov\u00e1n\u00ed, co\u017e zaru\u010duje, \u017ee operace jsou seskupeny do transakc\u00ed, a zm\u011bny metadat se na disk zapisuj\u00ed a\u017e po \u00fasp\u011b\u0161n\u00e9m dokon\u010den\u00ed a potvrzen\u00ed z\u00e1pisu cel\u00e9 transakce do \u017eurn\u00e1lu, \u010d\u00edm\u017e se efektivn\u011b minimalizuje riziko po\u0161kozen\u00ed metadat a v\u00fdznamn\u011b se urychluje proces zotaven\u00ed syst\u00e9mu po potenci\u00e1ln\u00edch hav\u00e1ri\u00edch.",
        incorrect:
          "\u017durn\u00e1l, jako\u017eto zastaral\u00e1 metoda pro spr\u00e1vu metadat souborov\u00e9ho syst\u00e9mu, vyu\u017e\u00edv\u00e1 d\u00e1vkov\u00e9 zpracov\u00e1n\u00ed, co\u017e zaru\u010duje, \u017ee operace jsou seskupeny do d\u00e1vek, a zm\u011bny metadat se na disk zapisuj\u00ed a\u017e po \u00fasp\u011b\u0161n\u00e9m dokon\u010den\u00ed a potvrzen\u00ed z\u00e1pisu v\u0161ech d\u00e1vek do \u017eurn\u00e1lu, \u010d\u00edm\u017e se maximalizuje riziko po\u0161kozen\u00ed metadat a v\u00fdznamn\u011b se zpomaluje proces zotaven\u00ed syst\u00e9mu po potenci\u00e1ln\u00edch hav\u00e1ri\u00edch.",
        sectionNumber: "3.4.6",
        sectionTitle: "\u017durn\u00e1l",
      },
      {
        uuid: "2bb164c8-2572-43fd-8463-7d478ac0257d",
        correct:
          "Souborov\u00fd syst\u00e9m ext4, b\u011b\u017en\u011b pou\u017e\u00edvan\u00fd v opera\u010dn\u00edm syst\u00e9mu Linux, implementuje dvou\u00farov\u0148ov\u00fd \u017eurn\u00e1l, p\u0159i\u010dem\u017e z\u00e1kladn\u00ed vrstvu tvo\u0159\u00ed JBD2, kter\u00fd funguje jako fyzick\u00fd \u017eurn\u00e1l zaznamen\u00e1vaj\u00edc\u00ed blokov\u00e9 operace, a druhou vrstvu p\u0159edstavuje logick\u00fd \u017eurn\u00e1l fast commit, jen\u017e nad uzav\u0159en\u00fdmi transakcemi JBD2 uchov\u00e1v\u00e1 informace o logick\u00fdch operac\u00edch s metadaty, jako je odstra\u0148ov\u00e1n\u00ed polo\u017eek ze slo\u017eek, co\u017e p\u0159isp\u00edv\u00e1 k celkov\u00e9 robustnosti a konzistenci syst\u00e9mu.",
        incorrect:
          "Souborov\u00fd syst\u00e9m ext4, b\u011b\u017en\u011b pou\u017e\u00edvan\u00fd v opera\u010dn\u00edm syst\u00e9mu Windows, implementuje pouze jednodurov\u0148ov\u00fd \u017eurn\u00e1l, p\u0159i\u010dem\u017e z\u00e1kladn\u00ed vrstvu tvo\u0159\u00ed NTFS, kter\u00fd funguje jako fyzick\u00fd \u017eurn\u00e1l zaznamen\u00e1vaj\u00edc\u00ed blokov\u00e9 operace i logick\u00e9 operace s metadaty dohromady, a druhou vrstvu, logick\u00fd \u017eurn\u00e1l fast commit, ext4 v\u016fbec nevyu\u017e\u00edv\u00e1, co\u017e sni\u017euje celkovou robustnost a konzistenci syst\u00e9mu v porovn\u00e1n\u00ed s modern\u011bj\u0161\u00edmi souborov\u00fdmi syst\u00e9my.",
        sectionNumber: "3.4.6",
        sectionTitle: "\u017durn\u00e1l",
      },
      {
        uuid: "a70bdad5-a746-4606-ac2b-94338feb0e07",
        correct:
          "Z\u00e1znamy v \u017eurn\u00e1lu souborov\u00e9ho syst\u00e9mu mus\u00ed b\u00fdt navr\u017eeny jako idempotentn\u00ed operace, co\u017e je kl\u00ed\u010dov\u00e1 vlastnost pro zaji\u0161t\u011bn\u00ed konzistence dat po obnov\u011b syst\u00e9mu z hav\u00e1rie, proto\u017ee idempotentnost zaru\u010duje, \u017ee opakovan\u00e9 proveden\u00ed stejn\u00e9ho z\u00e1znamu v \u017eurn\u00e1lu, nap\u0159\u00edklad p\u0159i restartu syst\u00e9mu b\u011bhem procesu obnovy, nezp\u016fsob\u00ed \u017e\u00e1dn\u00e9 dal\u0161\u00ed ne\u017e\u00e1douc\u00ed zm\u011bny v souborov\u00e9m syst\u00e9mu a operace se provede korektn\u011b pouze jednou.",
        incorrect:
          "Z\u00e1znamy v \u017eurn\u00e1lu souborov\u00e9ho syst\u00e9mu mus\u00ed b\u00fdt navr\u017eeny jako neidempotentn\u00ed operace, co\u017e je kl\u00ed\u010dov\u00e1 vlastnost pro maximalizaci v\u00fdkonu syst\u00e9mu po obnov\u011b z hav\u00e1rie, proto\u017ee neidempotentnost zaru\u010duje, \u017ee opakovan\u00e9 proveden\u00ed stejn\u00e9ho z\u00e1znamu v \u017eurn\u00e1lu, nap\u0159\u00edklad p\u0159i restartu syst\u00e9mu b\u011bhem procesu obnovy, zp\u016fsob\u00ed \u017e\u00e1douc\u00ed zm\u011bny v souborov\u00e9m syst\u00e9mu a operace se provede opakovan\u011b pro zaji\u0161t\u011bn\u00ed maxim\u00e1ln\u00ed propustnosti.",
        sectionNumber: "3.4.6",
        sectionTitle: "\u017durn\u00e1l",
      },
      {
        uuid: "4fd747c6-428a-44be-9c9b-d1ba95fde0b1",
        correct:
          "Jednou z metod, jak se vyhnout nekonzistenci metadat v opera\u010dn\u00edch syst\u00e9mech, je princip, kter\u00fd spo\u010d\u00edv\u00e1 v nem\u011bnnosti datov\u00fdch struktur, kde se m\u00edsto p\u0159\u00edm\u00e9 modifikace existuj\u00edc\u00ed struktury vytv\u00e1\u0159\u00ed jej\u00ed nov\u00e1 verze s vyu\u017eit\u00edm odkaz\u016f na nezm\u011bn\u011bn\u00e9 \u010d\u00e1sti, co\u017e eliminuje pot\u0159ebu kop\u00edrovat celou datovou strukturu a je efektivn\u00ed zejm\u00e9na u stromov\u00fdch struktur.",
        incorrect:
          "Jednou z metod, jak se vyhnout nekonzistenci metadat v opera\u010dn\u00edch syst\u00e9mech, je princip, kter\u00fd spo\u010d\u00edv\u00e1 v p\u0159\u00edm\u00e9 modifikaci datov\u00fdch struktur na m\u00edst\u011b, kde se existuj\u00edc\u00ed struktura upravuje bez vytv\u00e1\u0159en\u00ed nov\u00e9 verze, co\u017e minimalizuje re\u017eii spojenou s kop\u00edrov\u00e1n\u00edm a je efektivn\u00ed u line\u00e1rn\u00edch datov\u00fdch struktur.",
        sectionNumber: "3.4.7",
        sectionTitle: "Funkcion\u00e1ln\u00ed metadata",
      },
      {
        uuid: "3377f562-fc0d-4efa-9457-914a96fad1e4",
        correct:
          "P\u0159i implementaci principu nem\u011bnn\u00fdch datov\u00fdch struktur, kde zm\u011bna vy\u017eaduje vytvo\u0159en\u00ed kopie, je nutn\u00e9 rekurzivn\u011b aktualizovat odkazy na modifikovan\u00e9 \u010d\u00e1sti struktury, a pro zaji\u0161t\u011bn\u00ed konzistence metadat v souborov\u00e9m syst\u00e9mu je kl\u00ed\u010dov\u00e1 synchronizace z\u00e1pisu, kter\u00e1 v p\u0159\u00edpad\u011b stromov\u00fdch struktur \u010dasto spo\u010d\u00edv\u00e1 v atomick\u00e9m z\u00e1pisu nov\u00e9ho ko\u0159ene stromu po dokon\u010den\u00ed v\u0161ech zm\u011bn.",
        incorrect:
          "P\u0159i implementaci principu nem\u011bnn\u00fdch datov\u00fdch struktur, kde zm\u011bna vy\u017eaduje vytvo\u0159en\u00ed kopie, nen\u00ed nutn\u00e9 rekurzivn\u011b aktualizovat odkazy na modifikovan\u00e9 \u010d\u00e1sti struktury, a pro zaji\u0161t\u011bn\u00ed konzistence metadat v souborov\u00e9m syst\u00e9mu nen\u00ed nutn\u00e1 synchronizace z\u00e1pisu, proto\u017ee atomick\u00e9 operace zaji\u0161\u0165uj\u00ed konzistenci i bez explicitn\u00ed synchronizace, a to plat\u00ed i pro stromov\u00e9 struktury.",
        sectionNumber: "3.4.7",
        sectionTitle: "Funkcion\u00e1ln\u00ed metadata",
      },
      {
        uuid: "153ee28e-04e5-40ca-a906-57976a21d387",
        correct:
          "V kontextu souborov\u00fdch syst\u00e9m\u016f se pro implementaci nem\u011bnn\u00fdch metadat \u010dasto vyu\u017e\u00edvaj\u00ed B-stromy, proto\u017ee jejich stromov\u00e1 struktura efektivn\u011b minimalizuje mno\u017estv\u00ed kop\u00edrovan\u00fdch dat p\u0159i zm\u011bn\u00e1ch, a tento p\u0159\u00edstup m\u00e1 paralely s principem copy-on-write, zn\u00e1m\u00fdm z optimalizace spr\u00e1vy pam\u011bti, kde se kopie dat vytv\u00e1\u0159\u00ed a\u017e p\u0159i pokusu o z\u00e1pis, \u010d\u00edm\u017e se \u0161et\u0159\u00ed syst\u00e9mov\u00e9 prost\u0159edky.",
        incorrect:
          "V kontextu souborov\u00fdch syst\u00e9m\u016f se pro implementaci nem\u011bnn\u00fdch metadat \u010dasto vyu\u017e\u00edvaj\u00ed line\u00e1rn\u00ed seznamy, proto\u017ee jejich sekven\u010dn\u00ed struktura efektivn\u011b minimalizuje mno\u017estv\u00ed kop\u00edrovan\u00fdch dat p\u0159i zm\u011bn\u00e1ch, a tento p\u0159\u00edstup nem\u00e1 \u017e\u00e1dn\u00e9 paralely s principem copy-on-write, zn\u00e1m\u00fdm z optimalizace spr\u00e1vy pam\u011bti, kde se kopie dat vytv\u00e1\u0159\u00ed okam\u017eit\u011b p\u0159i alokaci, \u010d\u00edm\u017e se \u0161et\u0159\u00ed syst\u00e9mov\u00e9 prost\u0159edky.",
        sectionNumber: "3.4.7",
        sectionTitle: "Funkcion\u00e1ln\u00ed metadata",
      },
      {
        uuid: "0b895050-5baf-419e-86b7-673bb580d510",
        correct:
          "C\u00edlem spr\u00e1vy voln\u00e9ho m\u00edsta v souborov\u00e9m syst\u00e9mu je nejen rychl\u00e9 nalezen\u00ed oblasti pro ukl\u00e1d\u00e1n\u00ed dat, ale tak\u00e9 snaha udr\u017eet data soubor\u016f bl\u00edzko sebe a minimalizovat extern\u00ed fragmentaci, co\u017e zlep\u0161uje v\u00fdkon a efektivitu diskov\u00e9ho prostoru, a to zejm\u00e9na p\u0159i operac\u00edch vytv\u00e1\u0159en\u00ed a roz\u0161i\u0159ov\u00e1n\u00ed soubor\u016f, kde je efektivn\u00ed alokace kl\u00ed\u010dov\u00e1.",
        incorrect:
          "C\u00edlem spr\u00e1vy voln\u00e9ho m\u00edsta v souborov\u00e9m syst\u00e9mu je v\u00fdhradn\u011b rychl\u00e9 nalezen\u00ed oblasti pro ukl\u00e1d\u00e1n\u00ed dat, p\u0159i\u010dem\u017e se nebere ohled na udr\u017een\u00ed dat soubor\u016f bl\u00edzko sebe ani minimalizaci extern\u00ed fragmentace, proto\u017ee tyto aspekty nemaj\u00ed vliv na v\u00fdkon a efektivitu diskov\u00e9ho prostoru, a modern\u00ed opera\u010dn\u00ed syst\u00e9my se zam\u011b\u0159uj\u00ed pouze na rychlost alokace bez ohledu na dal\u0161\u00ed faktory.",
        sectionNumber: "3.4.8",
        sectionTitle: "Pr\u00e1zdn\u00e9 m\u00edsto",
      },
      {
        uuid: "506420ca-9f38-43ee-babf-b3eea4aec855",
        correct:
          "Pro organizaci voln\u00fdch blok\u016f v souborov\u00fdch syst\u00e9mech se b\u011b\u017en\u011b pou\u017e\u00edvaj\u00ed bitmapy nebo B-stromy, p\u0159i\u010dem\u017e bitmapy jsou efektivn\u00ed pro spr\u00e1vu voln\u00fdch blok\u016f v aloka\u010dn\u00edch skupin\u00e1ch a B-stromy umo\u017e\u0148uj\u00ed pokro\u010dilej\u0161\u00ed metody vyhled\u00e1v\u00e1n\u00ed voln\u00e9ho m\u00edsta, nap\u0159\u00edklad podle adresy nebo velikosti, a jsou vhodn\u00e9 pro syst\u00e9my, kde je kladen d\u016fraz na \u0161k\u00e1lovatelnost a flexibilitu spr\u00e1vy diskov\u00e9ho prostoru.",
        incorrect:
          "Pro organizaci voln\u00fdch blok\u016f v souborov\u00fdch syst\u00e9mech se b\u011b\u017en\u011b pou\u017e\u00edvaj\u00ed v\u00fdhradn\u011b bitmapy, zat\u00edmco B-stromy se pro spr\u00e1vu voln\u00e9ho m\u00edsta nepou\u017e\u00edvaj\u00ed, proto\u017ee jsou p\u0159\u00edli\u0161 slo\u017eit\u00e9 a neefektivn\u00ed ve srovn\u00e1n\u00ed s bitmapami, kter\u00e9 poskytuj\u00ed dostate\u010dn\u00fd v\u00fdkon pro v\u0161echny b\u011b\u017en\u00e9 operace spr\u00e1vy voln\u00e9ho m\u00edsta, a modern\u00ed syst\u00e9my se od B-strom\u016f odkl\u00e1n\u011bj\u00ed.",
        sectionNumber: "3.4.8",
        sectionTitle: "Pr\u00e1zdn\u00e9 m\u00edsto",
      },
      {
        uuid: "feb61c1c-8cbc-4a0a-addd-fd7dded04187",
        correct:
          "B-stromy pou\u017e\u00edvan\u00e9 pro spr\u00e1vu voln\u00e9ho m\u00edsta mohou b\u00fdt implementov\u00e1ny r\u016fzn\u00fdmi zp\u016fsoby, v\u010detn\u011b strom\u016f, kde je kl\u00ed\u010dem adresa prvn\u00edho bloku voln\u00e9 souvisl\u00e9 skupiny, strom\u016f, kde je kl\u00ed\u010dem velikost voln\u00e9 oblasti, nebo kombinac\u00ed obou p\u0159\u00edstup\u016f, co\u017e umo\u017e\u0148uje flexibiln\u00ed a efektivn\u00ed vyhled\u00e1v\u00e1n\u00ed voln\u00e9ho m\u00edsta podle r\u016fzn\u00fdch krit\u00e9ri\u00ed a optimalizaci pro specifick\u00e9 po\u017eadavky souborov\u00e9ho syst\u00e9mu.",
        incorrect:
          "B-stromy pou\u017e\u00edvan\u00e9 pro spr\u00e1vu voln\u00e9ho m\u00edsta jsou v\u017edy implementov\u00e1ny v\u00fdhradn\u011b tak, \u017ee kl\u00ed\u010dem je velikost voln\u00e9 oblasti, a ostatn\u00ed metody implementace, jako nap\u0159\u00edklad pou\u017eit\u00ed adresy prvn\u00edho bloku voln\u00e9 souvisl\u00e9 skupiny jako kl\u00ed\u010de, se v modern\u00edch souborov\u00fdch syst\u00e9mech nepou\u017e\u00edvaj\u00ed kv\u016fli jejich ni\u017e\u0161\u00ed efektivit\u011b a praktick\u00e9 nepou\u017eitelnosti v re\u00e1ln\u00fdch sc\u00e9n\u00e1\u0159\u00edch spr\u00e1vy diskov\u00e9ho prostoru.",
        sectionNumber: "3.4.8",
        sectionTitle: "Pr\u00e1zdn\u00e9 m\u00edsto",
      },
      {
        uuid: "aefcb36d-0987-4edf-876c-74a34ce63cea",
        correct:
          "Snaha o alokaci soubor\u016f do souvisl\u00fdch blok\u016f v souborov\u00e9m syst\u00e9mu je motivov\u00e1na dv\u011bma hlavn\u00edmi d\u016fvody: zlep\u0161en\u00edm rychlosti sekven\u010dn\u00edho \u010dten\u00ed soubor\u016f a umo\u017en\u011bn\u00edm \u00fasporn\u011bj\u0161\u00edch z\u00e1znam\u016f v metadatech souborov\u00e9ho syst\u00e9mu, co\u017e celkov\u011b p\u0159isp\u00edv\u00e1 k vy\u0161\u0161\u00ed efektivit\u011b a v\u00fdkonu, a je zvl\u00e1\u0161t\u011b d\u016fle\u017eit\u00e9 pro velk\u00e9 soubory a aplikace vy\u017eaduj\u00edc\u00ed vysokou propustnost dat.",
        incorrect:
          "Snaha o alokaci soubor\u016f do souvisl\u00fdch blok\u016f v souborov\u00e9m syst\u00e9mu je motivov\u00e1na pouze snahou o \u00fasporn\u011bj\u0161\u00ed z\u00e1znamy v metadatech, zat\u00edmco zlep\u0161en\u00ed rychlosti sekven\u010dn\u00edho \u010dten\u00ed soubor\u016f nen\u00ed relevantn\u00edm d\u016fvodem, proto\u017ee modern\u00ed diskov\u00e9 technologie minimalizuj\u00ed rozd\u00edl mezi sekven\u010dn\u00edm a n\u00e1hodn\u00fdm p\u0159\u00edstupem, a proto je snaha o souvislou alokaci zbyte\u010dn\u00e1.",
        sectionNumber: "3.4.8",
        sectionTitle: "Pr\u00e1zdn\u00e9 m\u00edsto",
      },
      {
        uuid: "f61ec897-3917-4a8e-b5c8-537b595c796f",
        correct:
          "N\u011bkter\u00e9 souborov\u00e9 syst\u00e9my, jako nap\u0159\u00edklad ufs, ffs a ext2, pou\u017e\u00edvaj\u00ed pro organizaci voln\u00e9ho m\u00edsta aloka\u010dn\u00ed skupiny, kde ka\u017ed\u00e1 skupina m\u00e1 vlastn\u00ed bitmapu voln\u00fdch blok\u016f a tabulku i-uzl\u016f, co\u017e umo\u017e\u0148uje lep\u0161\u00ed lokalitu dat a metadat a sni\u017euje fragmentaci v r\u00e1mci jednotliv\u00fdch skupin, a tento p\u0159\u00edstup je efektivn\u00ed pro syst\u00e9my s velk\u00fdm po\u010dtem mal\u00fdch soubor\u016f.",
        incorrect:
          "V\u0161echny modern\u00ed souborov\u00e9 syst\u00e9my, v\u010detn\u011b ufs, ffs a ext2, pou\u017e\u00edvaj\u00ed pro organizaci voln\u00e9ho m\u00edsta glob\u00e1ln\u00ed bitmapu voln\u00fdch blok\u016f pro cel\u00fd diskov\u00fd odd\u00edl, a koncept aloka\u010dn\u00edch skupin s vlastn\u00edmi bitmapami a i-uzly se ji\u017e v modern\u00edch syst\u00e9mech nepou\u017e\u00edv\u00e1 kv\u016fli jeho neefektivit\u011b a slo\u017eitosti spr\u00e1vy v rozs\u00e1hl\u00fdch diskov\u00fdch pol\u00edch a modern\u00edch \u00falo\u017en\u00fdch architektur\u00e1ch.",
        sectionNumber: "3.4.8",
        sectionTitle: "Pr\u00e1zdn\u00e9 m\u00edsto",
      },
      {
        uuid: "eb873512-725f-4bdd-ab3d-7017250b3a28",
        correct:
          "V souvislosti s ukl\u00e1d\u00e1n\u00edm soubor\u016f do blokov\u00fdch za\u0159\u00edzen\u00ed opera\u010dn\u00edho syst\u00e9mu se fragmentace dat objevuje jako d\u016fsledek extern\u00ed fragmentace, kdy voln\u00e9 m\u00edsto na disku nen\u00ed souvisl\u00e9 a nov\u011b vytv\u00e1\u0159en\u00e9 soubory nebo roz\u0161i\u0159ovan\u00e9 st\u00e1vaj\u00edc\u00ed soubory mus\u00ed b\u00fdt ukl\u00e1d\u00e1ny do nesouvisl\u00fdch blok\u016f, co\u017e vede k fragmentaci samotn\u00fdch dat souboru a sn\u00ed\u017een\u00ed efektivity p\u0159\u00edstupu k nim.",
        incorrect:
          "V souvislosti s ukl\u00e1d\u00e1n\u00edm soubor\u016f do blokov\u00fdch za\u0159\u00edzen\u00ed opera\u010dn\u00edho syst\u00e9mu se fragmentace dat objevuje prim\u00e1rn\u011b jako p\u0159\u00edm\u00fd d\u016fsledek nedostatku fyzick\u00e9 pam\u011bti RAM, co\u017e nut\u00ed opera\u010dn\u00ed syst\u00e9m fragmentovat soubory na disku za \u00fa\u010delem uvoln\u011bn\u00ed pam\u011bti, p\u0159i\u010dem\u017e extern\u00ed fragmentace hraje v tomto procesu pouze sekund\u00e1rn\u00ed roli a nem\u00e1 v\u00fdznamn\u00fd dopad na v\u00fdkon \u010dten\u00ed dat z disku.",
        sectionNumber: "3.4.9",
        sectionTitle: "Extern\u00ed a datov\u00e1 fragmentace",
      },
      {
        uuid: "f19a2988-4f56-4a88-9df6-bb1479b13f5b",
        correct:
          "P\u0159i spr\u00e1v\u011b soubor\u016f v opera\u010dn\u00edm syst\u00e9mu, fragmentace dat, kdy jsou soubory ulo\u017eeny v nesouvisl\u00fdch bloc\u00edch, prim\u00e1rn\u011b zhor\u0161uje v\u00fdkon operac\u00ed \u010dten\u00ed, proto\u017ee mechanick\u00e9 disky mus\u00ed prov\u00e1d\u011bt \u010dasov\u011b n\u00e1ro\u010dn\u00e9 skoky mezi r\u016fzn\u00fdmi fragmenty souboru, zat\u00edmco u modern\u00edch SSD disk\u016f sice fragmentace dat m\u00e1 men\u0161\u00ed dopad na rychlost \u010dten\u00ed, ale st\u00e1le m\u016f\u017ee negativn\u011b ovlivnit celkovou propustnost syst\u00e9mu.",
        incorrect:
          "P\u0159i spr\u00e1v\u011b soubor\u016f v opera\u010dn\u00edm syst\u00e9mu fragmentace dat, projevuj\u00edc\u00ed se nesouvisl\u00fdm ulo\u017een\u00edm soubor\u016f, m\u00e1 nejv\u00fdrazn\u011bj\u0161\u00ed negativn\u00ed dopad na rychlost z\u00e1pisu nov\u00fdch dat na disk, zat\u00edmco operace \u010dten\u00ed z fragmentovan\u00fdch soubor\u016f nejsou prakticky ovlivn\u011bny, proto\u017ee modern\u00ed diskov\u00e9 \u0159adi\u010de dok\u00e1\u017e\u00ed efektivn\u011b kompenzovat fragmentaci a zajistit plynul\u00fd p\u0159\u00edstup k dat\u016fm bez ohledu na jejich fyzick\u00e9 ulo\u017een\u00ed.",
        sectionNumber: "3.4.9",
        sectionTitle: "Extern\u00ed a datov\u00e1 fragmentace",
      },
      {
        uuid: "c8841295-0864-4ccd-9559-54a94b5cb5dd",
        correct:
          "Tradi\u010dn\u00ed zp\u016fsob reprezentace soubor\u016f na disku vyu\u017e\u00edv\u00e1 tabulky odkaz\u016f ulo\u017een\u00e9 v i-uzlu a v nep\u0159\u00edm\u00fdch bloc\u00edch, kde ka\u017ed\u00fd z\u00e1znam v tabulce sm\u011b\u0159uje na jeden datov\u00fd blok, co\u017e je sice flexibiln\u00ed, av\u0161ak pro rozs\u00e1hl\u00e9 soubory m\u016f\u017ee b\u00fdt spr\u00e1va diskov\u00e9ho prostoru m\u00e9n\u011b efektivn\u00ed kv\u016fli potenci\u00e1ln\u011b velk\u00e9mu mno\u017estv\u00ed odkaz\u016f.",
        incorrect:
          "Tradi\u010dn\u00ed zp\u016fsob reprezentace soubor\u016f na disku se spol\u00e9h\u00e1 na tabulky odkaz\u016f v\u00fdhradn\u011b v i-uzlu, kde ka\u017ed\u00fd z\u00e1znam ukazuje na jeden datov\u00fd blok, co\u017e je navr\u017eeno pro maxim\u00e1ln\u00ed efektivitu spr\u00e1vy diskov\u00e9ho prostoru i u rozs\u00e1hl\u00fdch soubor\u016f a eliminuje pot\u0159ebu nep\u0159\u00edm\u00fdch blok\u016f pro zjednodu\u0161en\u00ed struktury metadat.",
        sectionNumber: "3.4.10",
        sectionTitle: "Oby\u010dejn\u00e9 soubory",
      },
      {
        uuid: "494efab7-8103-4168-ba0b-f8e2a1aa7bc9",
        correct:
          "Pou\u017eit\u00ed extent\u016f pro reprezentaci soubor\u016f na disku p\u0159edstavuje vylep\u0161en\u00ed oproti tradi\u010dn\u00edmu p\u0159\u00edstupu t\u00edm, \u017ee nam\u00edsto odkazov\u00e1n\u00ed na jednotliv\u00e9 datov\u00e9 bloky se odkazuje na souvisl\u00e9 oblasti datov\u00fdch blok\u016f, co\u017e vede k \u00fasporn\u011bj\u0161\u00edmu a efektivn\u011bj\u0161\u00edmu vyu\u017eit\u00ed metadat, obzvl\u00e1\u0161t\u011b u soubor\u016f s daty ulo\u017een\u00fdmi sekven\u010dn\u011b.",
        incorrect:
          "Pou\u017eit\u00ed extent\u016f pro reprezentaci soubor\u016f na disku je m\u00e9n\u011b efektivn\u00ed ne\u017e tradi\u010dn\u00ed p\u0159\u00edstup, proto\u017ee extenty odkazuj\u00ed na nesouvisl\u00e9 datov\u00e9 bloky, co\u017e komplikuje spr\u00e1vu metadat a sni\u017euje v\u00fdkon p\u0159i sekven\u010dn\u00edm p\u0159\u00edstupu k dat\u016fm, a proto se extenty pou\u017e\u00edvaj\u00ed pouze v omezen\u00fdch specifick\u00fdch p\u0159\u00edpadech.",
        sectionNumber: "3.4.10",
        sectionTitle: "Oby\u010dejn\u00e9 soubory",
      },
      {
        uuid: "b5bbd2dc-2e9f-4f3b-b165-5bcdb900c2b4",
        correct:
          "Vyhled\u00e1v\u00e1n\u00ed datov\u00e9ho bloku podle offsetu v metadatech, kter\u00e9 vyu\u017e\u00edvaj\u00ed tabulku odkaz\u016f v tradi\u010dn\u00ed reprezentaci soubor\u016f, m\u00e1 line\u00e1rn\u00ed slo\u017eitost vzhledem k d\u00e9lce tabulky, av\u0161ak tato tabulka je obvykle men\u0161\u00ed ne\u017e odpov\u00eddaj\u00edc\u00ed tabulka jednotliv\u00fdch adres, a p\u0159i \u010dten\u00ed cel\u00e9ho souboru je celkov\u00e1 slo\u017eitost asymptoticky stejn\u00e1 a prakticky \u010dasto lep\u0161\u00ed.",
        incorrect:
          "Vyhled\u00e1v\u00e1n\u00ed datov\u00e9ho bloku podle offsetu v tradi\u010dn\u00ed reprezentaci soubor\u016f s tabulkami odkaz\u016f m\u00e1 konstantn\u00ed slo\u017eitost, proto\u017ee tabulka odkaz\u016f je navr\u017eena tak, aby umo\u017e\u0148ovala p\u0159\u00edm\u00fd p\u0159\u00edstup k jak\u00e9mukoli datov\u00e9mu bloku bez ohledu na velikost souboru, co\u017e zaji\u0161\u0165uje vysokou rychlost vyhled\u00e1v\u00e1n\u00ed i u velmi rozs\u00e1hl\u00fdch soubor\u016f.",
        sectionNumber: "3.4.10",
        sectionTitle: "Oby\u010dejn\u00e9 soubory",
      },
      {
        uuid: "d58b071d-107f-4bda-9ecf-f0bbb1a55c9d",
        correct:
          "Soubory s prom\u011bnnou d\u00e9lkou jsou v opera\u010dn\u00edch syst\u00e9mech ukl\u00e1d\u00e1ny v bloc\u00edch o pevn\u00e9 velikosti, co\u017e je kl\u00ed\u010dov\u00e9 pro spr\u00e1vu \u00falo\u017en\u00e9ho prostoru a efektivn\u00ed p\u0159\u00edstup k dat\u016fm, av\u0161ak toto blokov\u00e9 ukl\u00e1d\u00e1n\u00ed m\u016f\u017ee v\u00e9st k vnit\u0159n\u00ed fragmentaci, kdy \u010d\u00e1st alokovan\u00e9ho bloku z\u016fstane nevyu\u017eita kv\u016fli prom\u011bnliv\u00e9 d\u00e9lce soubor\u016f.",
        incorrect:
          "Soubory s pevnou d\u00e9lkou jsou v opera\u010dn\u00edch syst\u00e9mech ukl\u00e1d\u00e1ny v bloc\u00edch o prom\u011bnn\u00e9 velikosti, co\u017e je kl\u00ed\u010dov\u00e9 pro spr\u00e1vu \u00falo\u017en\u00e9ho prostoru a neefektivn\u00ed p\u0159\u00edstup k dat\u016fm, av\u0161ak toto blokov\u00e9 ukl\u00e1d\u00e1n\u00ed nem\u016f\u017ee v\u00e9st k vnit\u0159n\u00ed fragmentaci, kdy \u010d\u00e1st alokovan\u00e9ho bloku z\u016fstane vyu\u017eita kv\u016fli pevn\u00e9 d\u00e9lce soubor\u016f.",
        sectionNumber: "3.4.11",
        sectionTitle: "Vnit\u0159n\u00ed fragmentace",
      },
      {
        uuid: "ef44607a-6d1b-4290-8a67-01160574ff1f",
        correct:
          "Vnit\u0159n\u00ed fragmentace vznik\u00e1, proto\u017ee opera\u010dn\u00ed syst\u00e9my alokuj\u00ed soubor\u016fm celo\u010d\u00edseln\u00fd po\u010det blok\u016f pevn\u00e9 velikosti, a pokud soubor nevyu\u017eije cel\u00fd posledn\u00ed alokovan\u00fd blok, vznikne nevyu\u017eit\u00e9 m\u00edsto uvnit\u0159 tohoto bloku, kter\u00e9 p\u0159edstavuje re\u017eii a pl\u00fdtv\u00e1n\u00ed \u00falo\u017en\u00fdm prostorem.",
        incorrect:
          "Vn\u011bj\u0161\u00ed fragmentace nevznik\u00e1, proto\u017ee opera\u010dn\u00ed syst\u00e9my alokuj\u00ed soubor\u016fm necelo\u010d\u00edseln\u00fd po\u010det blok\u016f prom\u011bnn\u00e9 velikosti, a pokud soubor vyu\u017eije cel\u00fd posledn\u00ed alokovan\u00fd blok, nevznikne vyu\u017eit\u00e9 m\u00edsto uvnit\u0159 tohoto bloku, kter\u00e9 nep\u0159edstavuje re\u017eii a nepl\u00fdtv\u00e1n\u00ed \u00falo\u017en\u00fdm prostorem.",
        sectionNumber: "3.4.11",
        sectionTitle: "Vnit\u0159n\u00ed fragmentace",
      },
      {
        uuid: "af5a3ca4-8560-49d6-bf24-a5aacc4750c3",
        correct:
          "Zarovn\u00e1n\u00ed soubor\u016f na hranice blok\u016f pevn\u00e9 velikosti je kompromisem v n\u00e1vrhu opera\u010dn\u00edch syst\u00e9m\u016f, kter\u00fd sice zp\u016fsobuje vnit\u0159n\u00ed fragmentaci a nevyu\u017eit\u00e9 m\u00edsto, ale z\u00e1rove\u0148 umo\u017e\u0148uje efektivn\u011bj\u0161\u00ed operace se soubory a jednodu\u0161\u0161\u00ed spr\u00e1vu metadat, co\u017e celkov\u011b zrychluje p\u0159\u00edstup k dat\u016fm.",
        incorrect:
          "Nezarovn\u00e1n\u00ed soubor\u016f na hranice blok\u016f prom\u011bnn\u00e9 velikosti je kompromisem v n\u00e1vrhu opera\u010dn\u00edch syst\u00e9m\u016f, kter\u00fd sice nezp\u016fsobuje vnit\u0159n\u00ed fragmentaci a nevyu\u017eit\u00e9 m\u00edsto, ale z\u00e1rove\u0148 neumo\u017e\u0148uje efektivn\u011bj\u0161\u00ed operace se soubory a jednodu\u0161\u0161\u00ed spr\u00e1vu metadat, co\u017e celkov\u011b zpomaluje p\u0159\u00edstup k dat\u016fm.",
        sectionNumber: "3.4.11",
        sectionTitle: "Vnit\u0159n\u00ed fragmentace",
      },
      {
        uuid: "0e58c5f6-dd13-46f5-a9a0-baaa471b7c39",
        correct:
          "Klasick\u00e9 \u0159e\u0161en\u00ed pro reprezentaci slo\u017eek v souborov\u00e9m syst\u00e9mu se vyzna\u010duje line\u00e1rn\u00ed \u010dasovou slo\u017eitost\u00ed operac\u00ed vyhled\u00e1v\u00e1n\u00ed a odstra\u0148ov\u00e1n\u00ed polo\u017eek, zat\u00edmco operace vkl\u00e1d\u00e1n\u00ed je realizov\u00e1na v konstantn\u00edm \u010dase, co\u017e je efektivn\u00ed pro mal\u00e9 slo\u017eky, av\u0161ak z d\u016fvodu nep\u0159edv\u00eddatelnosti velikosti adres\u00e1\u0159\u016f se v praxi b\u011b\u017en\u011b nepou\u017e\u00edv\u00e1.",
        incorrect:
          "Klasick\u00e9 \u0159e\u0161en\u00ed pro reprezentaci slo\u017eek v souborov\u00e9m syst\u00e9mu se vyzna\u010duje konstantn\u00ed \u010dasovou slo\u017eitost\u00ed operac\u00ed vyhled\u00e1v\u00e1n\u00ed a odstra\u0148ov\u00e1n\u00ed polo\u017eek, zat\u00edmco operace vkl\u00e1d\u00e1n\u00ed je realizov\u00e1na v line\u00e1rn\u00edm \u010dase, co\u017e je efektivn\u00ed pro velk\u00e9 slo\u017eky a je proto b\u011b\u017en\u011b pou\u017e\u00edvan\u00fdm \u0159e\u0161en\u00edm v modern\u00edch souborov\u00fdch syst\u00e9mech.",
        sectionNumber: "3.4.12",
        sectionTitle: "Adres\u00e1\u0159e",
      },
      {
        uuid: "6e291604-a590-412c-b096-fc66be99ed57",
        correct:
          "Ha\u0161ovan\u00e1 reprezentace slo\u017eek v souborov\u00e9m syst\u00e9mu vyu\u017e\u00edv\u00e1 ha\u0161ovac\u00ed tabulku pro ulo\u017een\u00ed polo\u017eek, co\u017e teoreticky umo\u017e\u0148uje dos\u00e1hnout konstantn\u00ed \u010dasov\u00e9 slo\u017eitosti operac\u00ed, av\u0161ak praktick\u00e1 v\u00fdkonnost z\u00e1vis\u00ed na kvalit\u011b ha\u0161ovac\u00ed funkce a distribuci jmen polo\u017eek, p\u0159i\u010dem\u017e iterace nad takovou slo\u017ekou vrac\u00ed polo\u017eky v n\u00e1hodn\u00e9m po\u0159ad\u00ed.",
        incorrect:
          "Ha\u0161ovan\u00e1 reprezentace slo\u017eek v souborov\u00e9m syst\u00e9mu vyu\u017e\u00edv\u00e1 ha\u0161ovac\u00ed tabulku pro ulo\u017een\u00ed polo\u017eek, co\u017e zaru\u010duje logaritmickou \u010dasovou slo\u017eitost operac\u00ed a iterace nad takovou slo\u017ekou vrac\u00ed polo\u017eky se\u0159azen\u00e9 podle kl\u00ed\u010de, co\u017e je ide\u00e1ln\u00ed pro aplikace vy\u017eaduj\u00edc\u00ed sekven\u010dn\u00ed p\u0159\u00edstup k dat\u016fm.",
        sectionNumber: "3.4.12",
        sectionTitle: "Adres\u00e1\u0159e",
      },
      {
        uuid: "f095abeb-98ed-49f1-a400-e2daf89e0180",
        correct:
          "Stromov\u00e1 reprezentace slo\u017eek v souborov\u00e9m syst\u00e9mu pou\u017e\u00edv\u00e1 B-strom pro ulo\u017een\u00ed polo\u017eek, kde jm\u00e9na polo\u017eek slou\u017e\u00ed jako kl\u00ed\u010de, a zaji\u0161\u0165uje logaritmickou \u010dasovou slo\u017eitost pro v\u0161echny operace, v\u010detn\u011b vyhled\u00e1v\u00e1n\u00ed, vkl\u00e1d\u00e1n\u00ed a odstra\u0148ov\u00e1n\u00ed, p\u0159i\u010dem\u017e iterace nad takovou slo\u017ekou vrac\u00ed polo\u017eky se\u0159azen\u00e9 podle jm\u00e9na.",
        incorrect:
          "Stromov\u00e1 reprezentace slo\u017eek v souborov\u00e9m syst\u00e9mu pou\u017e\u00edv\u00e1 B-strom pro ulo\u017een\u00ed polo\u017eek, kde jm\u00e9na polo\u017eek slou\u017e\u00ed jako kl\u00ed\u010de, a zaji\u0161\u0165uje line\u00e1rn\u00ed \u010dasovou slo\u017eitost pro v\u0161echny operace, p\u0159i\u010dem\u017e iterace nad takovou slo\u017ekou vrac\u00ed polo\u017eky v n\u00e1hodn\u00e9m po\u0159ad\u00ed.",
        sectionNumber: "3.4.12",
        sectionTitle: "Adres\u00e1\u0159e",
      },
      {
        uuid: "6e9f8ee6-bd88-4dda-aaa6-99e81d824e93",
        correct:
          "Zat\u00edmco klasick\u00e9 a ha\u0161ovan\u00e9 slo\u017eky v souborov\u00e9m syst\u00e9mu jsou obvykle ukl\u00e1d\u00e1ny do datov\u00fdch blok\u016f, podobn\u011b jako b\u011b\u017en\u00e9 soubory, stromov\u00e9 slo\u017eky jsou p\u0159irozen\u011bji pova\u017eov\u00e1ny za sou\u010d\u00e1st metadat, co\u017e je b\u011b\u017en\u00e1 praxe v souborov\u00fdch syst\u00e9mech, kter\u00e9 vyu\u017e\u00edvaj\u00ed B-stromy pro spr\u00e1vu metadat v r\u016fzn\u00fdch rol\u00edch.",
        incorrect:
          "Klasick\u00e9, ha\u0161ovan\u00e9 i stromov\u00e9 slo\u017eky v souborov\u00e9m syst\u00e9mu jsou obvykle ukl\u00e1d\u00e1ny v\u00fdhradn\u011b do datov\u00fdch blok\u016f, co\u017e zaji\u0161\u0165uje jednotn\u00fd p\u0159\u00edstup a spr\u00e1vu \u00falo\u017en\u00e9ho prostoru, a metadata se pro ukl\u00e1d\u00e1n\u00ed slo\u017eek v modern\u00edch souborov\u00fdch syst\u00e9mech v\u016fbec nepou\u017e\u00edvaj\u00ed.",
        sectionNumber: "3.4.12",
        sectionTitle: "Adres\u00e1\u0159e",
      },
    ],
  };
