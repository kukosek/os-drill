import type { Section } from '../../common/types';

export const section7_komunikace_uvaznuti: Section = {
    uuid: "b16b3702-0b0a-43f9-a90d-bc8eeb46b965",
    sectionNumber: "7",
    sectionTitle: "Komunikace, uv\u00e1znut\u00ed",
    statements: [
      {
        uuid: "6789833b-e433-4287-9a71-4b550766f48d",
        correct:
          "Ka\u017ed\u00e1 komunikace mezi procesy v opera\u010dn\u00edm syst\u00e9mu p\u0159edstavuje inherentn\u00ed formu synchronizace, nebo\u0165 operace \u010dten\u00ed dat je logicky z\u00e1visl\u00e1 na p\u0159edchoz\u00edm \u00fasp\u011b\u0161n\u00e9m z\u00e1pisu t\u011bchto dat, co\u017e zaru\u010duje, \u017ee p\u0159\u00edjemce nem\u016f\u017ee obdr\u017eet informaci, kter\u00e1 dosud nebyla odesl\u00e1na, a t\u00edm se eliminuje riziko ztr\u00e1ty dat nebo nekonzistence.",
        incorrect:
          "Ka\u017ed\u00e1 komunikace mezi procesy v opera\u010dn\u00edm syst\u00e9mu p\u0159edstavuje formu synchronizace, av\u0161ak operace \u010dten\u00ed dat m\u016f\u017ee prob\u011bhnout i nez\u00e1visle na p\u0159edchoz\u00edm z\u00e1pisu, jeliko\u017e modern\u00ed opera\u010dn\u00ed syst\u00e9my jsou navr\u017eeny tak, aby dok\u00e1zaly efektivn\u011b doru\u010dit zpr\u00e1vu i v p\u0159\u00edpad\u011b, \u017ee odes\u00edlaj\u00edc\u00ed proces data je\u0161t\u011b pln\u011b nezapsal, \u010d\u00edm\u017e se maximalizuje rychlost komunikace.",
        sectionNumber: "7.1.1",
        sectionTitle: "Komunikace a synchronizace",
      },
      {
        uuid: "9aec6f80-aab1-4a8c-97f1-3f45af89b03c",
        correct:
          "Komunika\u010dn\u00ed mechanismy v opera\u010dn\u00edch syst\u00e9mech \u010dasto implementuj\u00ed sofistikovan\u011bj\u0161\u00ed synchroniza\u010dn\u00ed funkce, ne\u017e jen pouhou z\u00e1vislost \u010dten\u00ed na z\u00e1pisu, nap\u0159\u00edklad se mohou chovat jako symetrick\u00e9 semafory, co\u017e umo\u017e\u0148uje jemn\u011bj\u0161\u00ed \u0159\u00edzen\u00ed soub\u011b\u017en\u00e9ho p\u0159\u00edstupu ke sd\u00edlen\u00fdm zdroj\u016fm a koordinaci proces\u016f, kter\u00e9 se vz\u00e1jemn\u011b ovliv\u0148uj\u00ed.",
        incorrect:
          "Komunika\u010dn\u00ed mechanismy v opera\u010dn\u00edch syst\u00e9mech se omezuj\u00ed pouze na z\u00e1kladn\u00ed synchroniza\u010dn\u00ed funkci vypl\u00fdvaj\u00edc\u00ed z nutnosti z\u00e1pisu dat p\u0159ed jejich \u010dten\u00edm, a nikdy nepou\u017e\u00edvaj\u00ed pokro\u010dilej\u0161\u00ed synchroniza\u010dn\u00ed techniky jako symetrick\u00e9 semafory, proto\u017ee takov\u00e9to mechanismy by zbyte\u010dn\u011b komplikovaly implementaci a sni\u017eovaly v\u00fdkon komunika\u010dn\u00edho subsyst\u00e9mu.",
        sectionNumber: "7.1.1",
        sectionTitle: "Komunikace a synchronizace",
      },
      {
        uuid: "f622e8b8-270e-4a8e-a186-b28138e93784",
        correct:
          "Pro komunikaci mezi vl\u00e1kny lze efektivn\u011b vyu\u017e\u00edt libovolnou datovou strukturu, pokud je \u0159\u00e1dn\u011b chr\u00e1n\u011bna mutexem, co\u017e se d\u00e1 p\u0159irovnat k po\u0161tovn\u00ed schr\u00e1nce, kde \u010dten\u00ed a z\u00e1pis prob\u00edhaj\u00ed odd\u011blen\u011b, aby se zabr\u00e1nilo konflikt\u016fm a zajistila integrita dat, a\u010dkoli p\u0159i intenzivn\u00ed komunikaci m\u016f\u017ee doj\u00edt k sout\u011b\u017ei o z\u00e1mek, kter\u00e1 zpomaluje celkov\u00fd v\u00fdkon syst\u00e9mu.",
        incorrect:
          "Pro komunikaci mezi vl\u00e1kny je nejefektivn\u011bj\u0161\u00ed vyu\u017e\u00edt pouze specializovan\u00e9 datov\u00e9 struktury bez z\u00e1mk\u016f, proto\u017ee libovoln\u00e1 datov\u00e1 struktura chr\u00e1n\u011bn\u00e1 mutexem, i kdy\u017e se d\u00e1 p\u0159irovnat k po\u0161tovn\u00ed schr\u00e1nce pro odd\u011blen\u00e9 \u010dten\u00ed a z\u00e1pis, v\u017edy zp\u016fsobuje nep\u0159ijateln\u011b vysokou sout\u011b\u017e o z\u00e1mek a dramaticky sni\u017euje v\u00fdkon syst\u00e9mu i p\u0159i ob\u010dasn\u00e9 komunikaci.",
        sectionNumber: "7.1.2",
        sectionTitle: "Datov\u00e9 struktury",
      },
      {
        uuid: "3aba4952-6c9d-4ad1-b319-da0ca6299bdf",
        correct:
          "Specializovan\u00e9 komunika\u010dn\u00ed fronty p\u0159edstavuj\u00ed pokro\u010dilej\u0161\u00ed p\u0159\u00edstup k meziprocesov\u00e9 komunikaci, nebo\u0165 umo\u017e\u0148uj\u00ed p\u0159ed\u00e1v\u00e1n\u00ed dat v pevn\u00e9m po\u0159ad\u00ed a minimalizuj\u00ed nutnost synchronizace p\u0159i ka\u017ed\u00e9 jednotliv\u00e9 operaci, \u010d\u00edm\u017e se dosahuje vy\u0161\u0161\u00ed m\u00edry soub\u011b\u017enosti a efektivity, a jsou zvl\u00e1\u0161t\u011b d\u016fle\u017eit\u00e9 v situac\u00edch, kde je vy\u017eadov\u00e1na vysok\u00e1 propustnost a n\u00edzk\u00e1 latence.",
        incorrect:
          "Specializovan\u00e9 komunika\u010dn\u00ed fronty jsou sice navr\u017eeny pro meziprocesovou komunikaci, ale ve skute\u010dnosti vy\u017eaduj\u00ed explicitn\u00ed synchronizaci p\u0159i ka\u017ed\u00e9 jednotliv\u00e9 operaci p\u0159ed\u00e1n\u00ed dat a neumo\u017e\u0148uj\u00ed p\u0159ed\u00e1v\u00e1n\u00ed dat v pevn\u00e9m po\u0159ad\u00ed, co\u017e vede k ni\u017e\u0161\u00ed m\u00ed\u0159e soub\u011b\u017enosti a efektivity ve srovn\u00e1n\u00ed s jednodu\u0161\u0161\u00edmi datov\u00fdmi strukturami chr\u00e1n\u011bn\u00fdmi mutexem.",
        sectionNumber: "7.1.2",
        sectionTitle: "Datov\u00e9 struktury",
      },
      {
        uuid: "5fce6209-b2d6-423e-b950-93d2518ec138",
        correct:
          "V kontextu meziprocesov\u00e9 komunikace, i kdy\u017e mutexy a z\u00e1mky obecn\u011b zaji\u0161\u0165uj\u00ed ochranu sd\u00edlen\u00fdch dat, p\u0159i vysok\u00e9 frekvenci komunikace se sout\u011b\u017e o tyto z\u00e1mky st\u00e1v\u00e1 v\u00fdznamn\u00fdm \u00fazk\u00fdm hrdlem, kter\u00e9 m\u016f\u017ee negativn\u011b ovlivnit celkovou propustnost a dobu odezvy syst\u00e9mu, a proto je d\u016fle\u017eit\u00e9 zv\u00e1\u017eit alternativn\u00ed metody synchronizace pro intenzivn\u00ed komunika\u010dn\u00ed sc\u00e9n\u00e1\u0159e.",
        incorrect:
          "V kontextu meziprocesov\u00e9 komunikace, mutexy a z\u00e1mky p\u0159edstavuj\u00ed ide\u00e1ln\u00ed \u0159e\u0161en\u00ed i pro vysoce frekventovanou komunikaci, proto\u017ee sout\u011b\u017e o tyto z\u00e1mky nikdy nep\u0159edstavuje v\u00fdznamn\u00e9 \u00fazk\u00e9 hrdlo a nem\u00e1 \u017e\u00e1dn\u00fd m\u011b\u0159iteln\u00fd negativn\u00ed dopad na celkovou propustnost a dobu odezvy syst\u00e9mu, a proto jsou mutexy v\u017edy preferovanou metodou synchronizace.",
        sectionNumber: "7.1.2",
        sectionTitle: "Datov\u00e9 struktury",
      },
      {
        uuid: "5f022182-1281-4984-b280-e5450c25fec4",
        correct:
          "Kruhov\u00e1 fronta s pevnou velikost\u00ed, ur\u010den\u00e1 pro komunikaci mezi jedn\u00edm producentem a jedn\u00edm konzumentem, vyu\u017e\u00edv\u00e1 dva ukazatele, \u010dtec\u00ed a zapisovac\u00ed, p\u0159i\u010dem\u017e efektivn\u00ed kapacita fronty je o jednu bu\u0148ku men\u0161\u00ed ne\u017e celkov\u00fd po\u010det bun\u011bk alokovan\u00fdch pro frontu, co\u017e je nutn\u00e9 pro rozli\u0161en\u00ed stavu pln\u00e9 a pr\u00e1zdn\u00e9 fronty za pou\u017eit\u00ed t\u011bchto ukazatel\u016f.",
        incorrect:
          "Kruhov\u00e1 fronta s pevnou velikost\u00ed, ur\u010den\u00e1 pro komunikaci mezi jedn\u00edm producentem a jedn\u00edm konzumentem, vyu\u017e\u00edv\u00e1 dva ukazatele, \u010dtec\u00ed a zapisovac\u00ed, p\u0159i\u010dem\u017e efektivn\u00ed kapacita fronty je stejn\u00e1 jako celkov\u00fd po\u010det bun\u011bk alokovan\u00fdch pro frontu, proto\u017ee nevyu\u017eit\u00ed jedn\u00e9 bu\u0148ky by zbyte\u010dn\u011b sni\u017eovalo v\u00fdkon syst\u00e9mu a nebylo by efektivn\u00ed.",
        sectionNumber: "7.1.3",
        sectionTitle: "Komunika\u010dn\u00ed fronta",
      },
      {
        uuid: "b86b214b-1a8d-4655-85ed-7b3b223aa24e",
        correct:
          "V algoritmu pro vkl\u00e1d\u00e1n\u00ed do kruhov\u00e9 fronty, pokud zapisovac\u00ed ukazatel (W) dohon\u00ed \u010dtec\u00ed ukazatel (R), operace vkl\u00e1d\u00e1n\u00ed se pozastav\u00ed, dokud se \u010dtec\u00ed ukazatel nepohne, co\u017e indikuje stav pln\u00e9 fronty a zamezuje p\u0159eps\u00e1n\u00ed dat, kter\u00e1 by je\u0161t\u011b nebyla konzumentem zpracov\u00e1na.",
        incorrect:
          "V algoritmu pro vkl\u00e1d\u00e1n\u00ed do kruhov\u00e9 fronty, pokud zapisovac\u00ed ukazatel (W) dohon\u00ed \u010dtec\u00ed ukazatel (R), operace vkl\u00e1d\u00e1n\u00ed pokra\u010duje p\u0159eps\u00e1n\u00edm nejstar\u0161\u00edch dat ve front\u011b, aby se zajistilo, \u017ee producent nikdy nebude blokov\u00e1n a mohl neust\u00e1le vkl\u00e1dat nov\u00e1 data.",
        sectionNumber: "7.1.3",
        sectionTitle: "Komunika\u010dn\u00ed fronta",
      },
      {
        uuid: "64ddf916-4b40-4329-b58a-cfbdf341ef7a",
        correct:
          "Z\u00e1sadn\u00ed v\u00fdhodou implementace kruhov\u00e9 fronty pro jednoho producenta a jednoho konzumenta je, \u017ee operace vkl\u00e1d\u00e1n\u00ed a vyb\u00edr\u00e1n\u00ed mohou b\u00fdt implementov\u00e1ny bez pou\u017eit\u00ed explicitn\u00edho zamyk\u00e1n\u00ed (mutexu) za p\u0159edpokladu, \u017ee ka\u017ed\u00e1 strana (producent a konzument) modifikuje v\u00fdhradn\u011b sv\u016fj ur\u010den\u00fd ukazatel (zapisovac\u00ed a \u010dtec\u00ed).",
        incorrect:
          "Z\u00e1sadn\u00ed v\u00fdhodou implementace kruhov\u00e9 fronty pro jednoho producenta a jednoho konzumenta je, \u017ee operace vkl\u00e1d\u00e1n\u00ed a vyb\u00edr\u00e1n\u00ed v\u017edy vy\u017eaduj\u00ed pou\u017eit\u00ed explicitn\u00edho zamyk\u00e1n\u00ed (mutexu) pro zaji\u0161t\u011bn\u00ed datov\u00e9 integrity a prevenci z\u00e1vodn\u00edch podm\u00ednek, i kdy\u017e ka\u017ed\u00e1 strana modifikuje jen sv\u016fj ukazatel.",
        sectionNumber: "7.1.3",
        sectionTitle: "Komunika\u010dn\u00ed fronta",
      },
      {
        uuid: "9836942d-e3a7-464d-82be-dc83a6abd962",
        correct:
          "V algoritmu pro odebr\u00e1n\u00ed z kruhov\u00e9 fronty se pr\u00e1zdn\u00e1 fronta detekuje porovn\u00e1n\u00edm hodnot \u010dtec\u00edho ukazatele (R) a zapisovac\u00edho ukazatele (W), konkr\u00e9tn\u011b kdy\u017e v\u00fdraz `(R + 1) % S` je roven `W`, kde `S` je velikost fronty, co\u017e signalizuje, \u017ee ve front\u011b nejsou k dispozici \u017e\u00e1dn\u00e1 data ke \u010dten\u00ed.",
        incorrect:
          "V algoritmu pro odebr\u00e1n\u00ed z kruhov\u00e9 fronty se pr\u00e1zdn\u00e1 fronta detekuje jednodu\u0161e porovn\u00e1n\u00edm, zda se \u010dtec\u00ed ukazatel (R) rovn\u00e1 zapisovac\u00edmu ukazateli (W),  co\u017e je p\u0159\u00edm\u011bj\u0161\u00ed a efektivn\u011bj\u0161\u00ed metoda pro zji\u0161t\u011bn\u00ed pr\u00e1zdn\u00e9ho stavu fronty bez nutnosti slo\u017eit\u011bj\u0161\u00edch v\u00fdpo\u010dt\u016f modulo.",
        sectionNumber: "7.1.3",
        sectionTitle: "Komunika\u010dn\u00ed fronta",
      },
      {
        uuid: "b6366f5f-6a09-4ef2-b25d-2ef4eddc4462",
        correct:
          "Roura p\u0159edstavuje specializovanou komunika\u010dn\u00ed frontu, kter\u00e1 je prim\u00e1rn\u011b navr\u017eena pro efektivn\u00ed pr\u00e1ci s bajty a je optimalizov\u00e1na pro d\u00e1vkov\u00e9 operace, co\u017e umo\u017e\u0148uje hromadn\u00e9 \u010dten\u00ed a z\u00e1pis dat pro zv\u00fd\u0161en\u00ed v\u00fdkonu a sn\u00ed\u017een\u00ed re\u017eie spojen\u00e9 s jednotliv\u00fdmi operacemi, a je b\u011b\u017en\u011b poskytov\u00e1na opera\u010dn\u00edm syst\u00e9mem jako z\u00e1kladn\u00ed mechanismus pro meziprocesovou komunikaci.",
        incorrect:
          "Roura p\u0159edstavuje univerz\u00e1ln\u00ed komunika\u010dn\u00ed frontu, kter\u00e1 je navr\u017eena pro pr\u00e1ci s r\u016fzn\u00fdmi datov\u00fdmi typy krom\u011b bajt\u016f a nen\u00ed optimalizov\u00e1na pro d\u00e1vkov\u00e9 operace, co\u017e neumo\u017e\u0148uje hromadn\u00e9 \u010dten\u00ed a z\u00e1pis dat a zvy\u0161uje re\u017eii spojenou s jednotliv\u00fdmi operacemi, a nen\u00ed b\u011b\u017en\u011b poskytov\u00e1na opera\u010dn\u00edm syst\u00e9mem, ale implementov\u00e1na u\u017eivatelsk\u00fdmi aplikacemi pro specifick\u00e9 \u00fa\u010dely.",
        sectionNumber: "7.1.4",
        sectionTitle: "Roura",
      },
      {
        uuid: "01584fb1-115d-44c1-8b32-45a09d9040b8",
        correct:
          "Implementace roury, jako\u017eto omezen\u00e9 fronty, s sebou nese specifick\u00e9 synchroniza\u010dn\u00ed chov\u00e1n\u00ed, kter\u00e9 je analogick\u00e9 chov\u00e1n\u00ed symetrick\u00e9ho semaforu, co\u017e znamen\u00e1, \u017ee operace z\u00e1pisu do pln\u00e9 roury nebo \u010dten\u00ed z pr\u00e1zdn\u00e9 roury vy\u017eaduj\u00ed synchronizaci a potenci\u00e1ln\u00ed \u010dek\u00e1n\u00ed na uvoln\u011bn\u00ed kapacity pro z\u00e1pis nebo dostupnost dat pro \u010dten\u00ed, \u010d\u00edm\u017e se zaji\u0161\u0165uje integrita dat a \u0159\u00edzen\u00ed toku informac\u00ed.",
        incorrect:
          "Implementace roury, jako\u017eto omezen\u00e9 fronty, s sebou nenese \u017e\u00e1dn\u00e9 specifick\u00e9 synchroniza\u010dn\u00ed chov\u00e1n\u00ed, a proto operace z\u00e1pisu do pln\u00e9 roury nebo \u010dten\u00ed z pr\u00e1zdn\u00e9 roury nevy\u017eaduj\u00ed synchronizaci ani \u010dek\u00e1n\u00ed, co\u017e umo\u017e\u0148uje okam\u017eit\u00e9 operace bez ohledu na stav fronty a potenci\u00e1ln\u011b vede k ztr\u00e1t\u011b dat nebo nekonzistenci v p\u0159\u00edpad\u011b pln\u00e9 nebo pr\u00e1zdn\u00e9 roury.",
        sectionNumber: "7.1.4",
        sectionTitle: "Roura",
      },
      {
        uuid: "230fe1cc-9a64-4f6a-b8ed-0b6c6bf7dd90",
        correct:
          "Zobecn\u011bn\u00e1 komunika\u010dn\u00ed fronta, jak je pops\u00e1na v kontextu sd\u00edlen\u00ed \u00faloh mezi procesy, umo\u017e\u0148uje sou\u010dasn\u00fd p\u0159\u00edstup v\u00edce vl\u00e1ken pro vkl\u00e1d\u00e1n\u00ed a vyb\u00edr\u00e1n\u00ed dat, co\u017e odli\u0161uje tento typ fronty od tradi\u010dn\u00edch komunika\u010dn\u00edch mechanism\u016f, kde je p\u0159\u00edstup \u010dasto omezen na jedno vl\u00e1kno pro ka\u017edou operaci.",
        incorrect:
          "Zobecn\u011bn\u00e1 komunika\u010dn\u00ed fronta, jak je pops\u00e1na v kontextu sd\u00edlen\u00ed \u00faloh mezi procesy, je navr\u017eena tak, aby umo\u017e\u0148ovala v\u00fdhradn\u00ed p\u0159\u00edstup pouze jednoho vl\u00e1kna pro vkl\u00e1d\u00e1n\u00ed a vyb\u00edr\u00e1n\u00ed dat v dan\u00e9m okam\u017eiku, co\u017e zaji\u0161\u0165uje konzistenci dat a p\u0159edch\u00e1z\u00ed konflikt\u016fm mezi soub\u011b\u017en\u00fdmi operacemi.",
        sectionNumber: "7.1.5",
        sectionTitle: "Sd\u00edlen\u00e1 fronta",
      },
      {
        uuid: "fe9bbc86-a6a3-4dc1-aa4e-01e0b19ada1d",
        correct:
          "Implementace zobecn\u011bn\u00e9 komunika\u010dn\u00ed fronty, kter\u00e1 je navr\u017eena pro prost\u0159ed\u00ed s v\u00edce producenty a konzumenty, se \u010dasto realizuje pomoc\u00ed z\u0159et\u011bzen\u00e9ho seznamu a atomick\u00e9 operace compare-and-exchange (cmpxchg), co\u017e umo\u017e\u0148uje dos\u00e1hnout bezblokuj\u00edc\u00edho chov\u00e1n\u00ed a vyhnout se tak re\u017eii spojen\u00e9 se z\u00e1mky.",
        incorrect:
          "Implementace zobecn\u011bn\u00e9 komunika\u010dn\u00ed fronty, ur\u010den\u00e1 pro v\u00edce producent\u016f a konzument\u016f, typicky vy\u017eaduje pou\u017eit\u00ed z\u00e1mk\u016f pro synchronizaci p\u0159\u00edstupu k datov\u00e9 struktu\u0159e fronty, aby se zajistila integrita dat a zabr\u00e1nilo se z\u00e1vodn\u00edm podm\u00ednk\u00e1m mezi soub\u011b\u017en\u00fdmi vl\u00e1kny.",
        sectionNumber: "7.1.5",
        sectionTitle: "Sd\u00edlen\u00e1 fronta",
      },
      {
        uuid: "af1d1f8b-948a-44bd-93c2-b5f8bb39990f",
        correct:
          "Mezi typick\u00e9 aplikace zobecn\u011bn\u00e9 komunika\u010dn\u00ed fronty pat\u0159\u00ed efektivn\u00ed spr\u00e1va spole\u010dn\u00e9ho seznamu \u00faloh v opera\u010dn\u00edm syst\u00e9mu, kde r\u016fzn\u00e9 procesy nebo vl\u00e1kna mohou p\u0159id\u00e1vat a odeb\u00edrat \u00fakoly, a tak\u00e9 se tato fronta uplat\u0148uje v algoritmech paraleln\u00edho prohled\u00e1v\u00e1n\u00ed stromov\u00fdch a grafov\u00fdch struktur.",
        incorrect:
          "Zobecn\u011bn\u00e1 komunika\u010dn\u00ed fronta se prim\u00e1rn\u011b pou\u017e\u00edv\u00e1 pro synchronizaci b\u011bhu jednoho vl\u00e1kna s p\u0159eru\u0161en\u00edm v jednoprocesorov\u00e9m syst\u00e9mu a nen\u00ed vhodn\u00e1 pro aplikace vy\u017eaduj\u00edc\u00ed sd\u00edlen\u00ed \u00faloh mezi v\u00edce procesy nebo pro paraleln\u00ed zpracov\u00e1n\u00ed datov\u00fdch struktur, jako jsou stromy a grafy.",
        sectionNumber: "7.1.5",
        sectionTitle: "Sd\u00edlen\u00e1 fronta",
      },
      {
        uuid: "b0334b17-c842-4ff0-9da2-2951ac56eadb",
        correct:
          "Pro implementaci datov\u00e9 struktury ur\u010den\u00e9 pro operace dotazov\u00e1n\u00ed a vkl\u00e1d\u00e1n\u00ed, kter\u00e1 se pou\u017e\u00edv\u00e1 pro spr\u00e1vu ukon\u010den\u00fdch \u00faloh v opera\u010dn\u00edm syst\u00e9mu, je mo\u017en\u00e9 efektivn\u011b vyu\u017e\u00edt mechanismus Read-Copy-Update (RCU), kter\u00fd minimalizuje re\u017eii spojenou se synchronizac\u00ed \u010dten\u00ed a z\u00e1pisu, a t\u00edm zvy\u0161uje celkovou v\u00fdkonnost syst\u00e9mu, zejm\u00e9na v prost\u0159ed\u00ed s vysok\u00fdm po\u010dtem \u010dten\u00ed.",
        incorrect:
          "Pro implementaci datov\u00e9 struktury ur\u010den\u00e9 pro operace dotazov\u00e1n\u00ed a vkl\u00e1d\u00e1n\u00ed, kter\u00e1 se pou\u017e\u00edv\u00e1 pro spr\u00e1vu b\u011b\u017e\u00edc\u00edch \u00faloh v opera\u010dn\u00edm syst\u00e9mu, je nutn\u00e9 v\u00fdhradn\u011b vyu\u017e\u00edt mechanismus semafor\u016f, jeliko\u017e mechanismus Read-Copy-Update (RCU) nen\u00ed vhodn\u00fd pro dynamicky se m\u011bn\u00edc\u00ed mno\u017einy \u00faloh a vy\u017eaduje exkluzivn\u00ed p\u0159\u00edstup pro operace z\u00e1pisu, co\u017e by omezovalo soub\u011b\u017enost.",
        sectionNumber: "7.1.6",
        sectionTitle: "Sd\u00edlen\u00e1 mno\u017eina",
      },
      {
        uuid: "6946c3e0-1312-4b89-9d9a-a4d2072fdb84",
        correct:
          "Pro implementaci datov\u00e9 struktury, kter\u00e1 efektivn\u011b podporuje operace dotazov\u00e1n\u00ed a vkl\u00e1d\u00e1n\u00ed a je vhodn\u00e1 pro uzav\u0159en\u00e9 mno\u017einy prvk\u016f, jako jsou nap\u0159\u00edklad mno\u017einy str\u00e1nek ur\u010den\u00fdch k z\u00e1pisu na disk, lze s v\u00fdhodou pou\u017e\u00edt hashovac\u00ed tabulku, dopln\u011bnou o spinlock pro ka\u017edou bu\u0148ku, \u010d\u00edm\u017e se zajist\u00ed atomick\u00fd p\u0159\u00edstup k jednotliv\u00fdm bu\u0148k\u00e1m a minimalizuj\u00ed se konflikty p\u0159i soub\u011b\u017en\u00fdch operac\u00edch.",
        incorrect:
          "Pro implementaci datov\u00e9 struktury, kter\u00e1 efektivn\u011b podporuje operace dotazov\u00e1n\u00ed a vkl\u00e1d\u00e1n\u00ed a je vhodn\u00e1 pro dynamicky se m\u011bn\u00edc\u00ed mno\u017einy prvk\u016f, nelze pou\u017e\u00edt hashovac\u00ed tabulku, proto\u017ee hashovac\u00ed tabulky nejsou vhodn\u00e9 pro operace vkl\u00e1d\u00e1n\u00ed a vyhled\u00e1v\u00e1n\u00ed v re\u00e1ln\u00e9m \u010dase a vy\u017eaduj\u00ed slo\u017eitou reorganizaci p\u0159i ka\u017ed\u00e9 zm\u011bn\u011b velikosti mno\u017einy prvk\u016f, proto je nutn\u00e9 pou\u017e\u00edt slo\u017eit\u011bj\u0161\u00ed stromov\u00e9 struktury.",
        sectionNumber: "7.1.6",
        sectionTitle: "Sd\u00edlen\u00e1 mno\u017eina",
      },
      {
        uuid: "53a2dbd4-e6be-4282-a0d2-193f1254d348",
        correct:
          'Text uv\u00e1d\u00ed, \u017ee datov\u00e1 struktura implementovan\u00e1 pomoc\u00ed technik jako Read-Copy-Update,  spinlock\u016f nebo atomick\u00fdch operac\u00ed cmpxchg, je vhodn\u00e1 pro spr\u00e1vu takzvan\u00fdch "dirty" str\u00e1nek, tedy str\u00e1nek v pam\u011bti, kter\u00e9 byly modifikov\u00e1ny a je pot\u0159eba je zapsat zp\u011bt do souboru, aby se zajistila konzistence dat a trvalost zm\u011bn v souborov\u00e9m syst\u00e9mu.',
        incorrect:
          "Text uv\u00e1d\u00ed, \u017ee datov\u00e1 struktura implementovan\u00e1 pomoc\u00ed technik jako Read-Copy-Update, spinlock\u016f nebo atomick\u00fdch operac\u00ed cmpxchg, je prim\u00e1rn\u011b ur\u010dena pro spr\u00e1vu voln\u00e9ho m\u00edsta na disku, tedy pro sledov\u00e1n\u00ed blok\u016f disku, kter\u00e9 nejsou aktu\u00e1ln\u011b vyu\u017e\u00edv\u00e1ny soubory, a to za \u00fa\u010delem efektivn\u00edho alokov\u00e1n\u00ed nov\u00fdch soubor\u016f a minimalizace fragmentace diskov\u00e9ho prostoru.",
        sectionNumber: "7.1.6",
        sectionTitle: "Sd\u00edlen\u00e1 mno\u017eina",
      },
      {
        uuid: "acf8bb83-039a-46d4-abed-557c640f8003",
        correct:
          "Z pohledu syst\u00e9mu pro p\u0159ed\u00e1v\u00e1n\u00ed zpr\u00e1v je obsah zpr\u00e1vy typicky pova\u017eov\u00e1n za nepr\u016fhledn\u00fd, skl\u00e1daj\u00edc\u00ed se pouze z bajt\u016f, p\u0159i\u010dem\u017e kl\u00ed\u010dov\u00e1 metadata, zejm\u00e9na informace o adres\u00e1tovi, hraj\u00ed z\u00e1sadn\u00ed roli pro spr\u00e1vn\u00e9 doru\u010den\u00ed a zpracov\u00e1n\u00ed zpr\u00e1vy. Zp\u016fsob adresace je to, co prim\u00e1rn\u011b odli\u0161uje p\u0159ed\u00e1v\u00e1n\u00ed zpr\u00e1v od mechanismu front, a\u010dkoli pro pevnou dvojici komunikuj\u00edc\u00edch vl\u00e1ken mohou b\u00fdt tyto dva koncepty v podstat\u011b ekvivalentn\u00ed.",
        incorrect:
          "Z pohledu syst\u00e9mu pro p\u0159ed\u00e1v\u00e1n\u00ed zpr\u00e1v je obsah zpr\u00e1vy kl\u00ed\u010dov\u00fd a transparentn\u00ed, umo\u017e\u0148uj\u00edc\u00ed syst\u00e9mu detailn\u011b analyzovat a interpretovat data p\u0159ed doru\u010den\u00edm. Metadata, a\u010dkoliv p\u0159\u00edtomn\u00e1, hraj\u00ed pouze dopl\u0148kovou roli, a hlavn\u00ed rozd\u00edl mezi p\u0159ed\u00e1v\u00e1n\u00edm zpr\u00e1v a frontami spo\u010d\u00edv\u00e1 v metod\u011b serializace dat, nikoliv v adresaci. Pro pevnou dvojici komunikuj\u00edc\u00edch vl\u00e1ken je p\u0159ed\u00e1v\u00e1n\u00ed zpr\u00e1v z\u00e1sadn\u011b odli\u0161n\u00e9 od komunika\u010dn\u00edch front a nelze je pova\u017eovat za ekvivalentn\u00ed.",
        sectionNumber: "7.2.1",
        sectionTitle: "Zpr\u00e1va",
      },
      {
        uuid: "285c2b8f-a1d4-4b07-b16a-7de01b71c356",
        correct:
          "P\u0159i p\u0159ed\u00e1v\u00e1n\u00ed zpr\u00e1v v opera\u010dn\u00edch syst\u00e9mech se zpr\u00e1vy doru\u010duj\u00ed jako ned\u011bliteln\u00e9 celky, co\u017e znamen\u00e1, \u017ee p\u0159\u00edjemce obdr\u017e\u00ed bu\u010f kompletn\u00ed zpr\u00e1vu, nebo nic.  Metadata zpr\u00e1v, zahrnuj\u00edc\u00ed zejm\u00e9na adresu p\u0159\u00edjemce, jsou kl\u00ed\u010dov\u00e1 pro sm\u011brov\u00e1n\u00ed a doru\u010den\u00ed zpr\u00e1vy na spr\u00e1vn\u00e9 m\u00edsto ur\u010den\u00ed. Pro specifick\u00fd p\u0159\u00edpad komunikace mezi dv\u011bma pevn\u011b stanoven\u00fdmi vl\u00e1kny, se mechanismus p\u0159ed\u00e1v\u00e1n\u00ed zpr\u00e1v st\u00e1v\u00e1 funk\u010dn\u011b srovnateln\u00fdm s pou\u017eit\u00edm dvojice komunika\u010dn\u00edch front.",
        incorrect:
          "P\u0159i p\u0159ed\u00e1v\u00e1n\u00ed zpr\u00e1v se zpr\u00e1vy mohou doru\u010dovat po \u010d\u00e1stech, umo\u017e\u0148uj\u00edc p\u0159\u00edjemci zpracov\u00e1vat data postupn\u011b, je\u0161t\u011b p\u0159ed obdr\u017een\u00edm cel\u00e9 zpr\u00e1vy. Metadata zpr\u00e1v, a\u010dkoli existuj\u00ed, jsou irelevantn\u00ed pro doru\u010dov\u00e1n\u00ed zpr\u00e1v a slou\u017e\u00ed pouze pro \u00fa\u010dely logov\u00e1n\u00ed.  I pro komunikaci mezi dv\u011bma pevn\u011b stanoven\u00fdmi vl\u00e1kny z\u016fst\u00e1v\u00e1 mechanismus p\u0159ed\u00e1v\u00e1n\u00ed zpr\u00e1v z\u00e1sadn\u011b odli\u0161n\u00fd od komunika\u010dn\u00edch front a nelze je pova\u017eovat za funk\u010dn\u011b srovnateln\u00e9.",
        sectionNumber: "7.2.1",
        sectionTitle: "Zpr\u00e1va",
      },
      {
        uuid: "9cd278f1-f3d7-4f16-b741-b33e31749a53",
        correct:
          "Z\u00e1kladn\u00edm rozli\u0161ovac\u00edm prvkem mezi p\u0159ed\u00e1v\u00e1n\u00edm zpr\u00e1v a frontami v opera\u010dn\u00edch syst\u00e9mech je zp\u016fsob adresace. Zat\u00edmco p\u0159ed\u00e1v\u00e1n\u00ed zpr\u00e1v explicitn\u011b definuje adres\u00e1ta zpr\u00e1vy prost\u0159ednictv\u00edm metadat, fronty implicitn\u011b adresuj\u00ed zpr\u00e1vy p\u0159\u00edjemc\u016fm na z\u00e1klad\u011b principu FIFO (First-In, First-Out) bez nutnosti explicitn\u00ed adresace v metadatech zpr\u00e1vy. V kontextu spolehlivosti doru\u010den\u00ed, p\u0159ed\u00e1v\u00e1n\u00ed zpr\u00e1v m\u016f\u017ee podporovat jak spolehliv\u00e9, tak nespolehliv\u00e9 doru\u010den\u00ed, v z\u00e1vislosti na implementaci.",
        incorrect:
          "Z\u00e1sadn\u00ed rozd\u00edl mezi p\u0159ed\u00e1v\u00e1n\u00edm zpr\u00e1v a frontami spo\u010d\u00edv\u00e1 v tom, \u017ee fronty vy\u017eaduj\u00ed explicitn\u00ed definici adres\u00e1ta zpr\u00e1vy v metadatech, zat\u00edmco p\u0159ed\u00e1v\u00e1n\u00ed zpr\u00e1v funguje na principu implicitn\u00ed adresace, kde se zpr\u00e1vy doru\u010duj\u00ed v\u0161em potenci\u00e1ln\u00edm p\u0159\u00edjemc\u016fm. Spolehlivost doru\u010den\u00ed nen\u00ed u p\u0159ed\u00e1v\u00e1n\u00ed zpr\u00e1v nikdy garantov\u00e1na a je v\u017edy pova\u017eov\u00e1no za nespolehliv\u00e9, zat\u00edmco fronty v\u017edy zaji\u0161\u0165uj\u00ed spolehliv\u00e9 doru\u010den\u00ed zpr\u00e1v.",
        sectionNumber: "7.2.1",
        sectionTitle: "Zpr\u00e1va",
      },
      {
        uuid: "32bee056-c490-4a9a-9422-c0ab6d566460",
        correct:
          "V kontextu syst\u00e9m\u016f p\u0159ed\u00e1v\u00e1n\u00ed zpr\u00e1v, pokud je maxim\u00e1ln\u00ed kapacita syst\u00e9mu pro uchov\u00e1n\u00ed nedoru\u010den\u00fdch zpr\u00e1v nastavena na nulu, hovo\u0159\u00edme o mechanismu setk\u00e1n\u00ed (rendezvous), kde se odes\u00edlaj\u00edc\u00ed a p\u0159ij\u00edmaj\u00edc\u00ed vl\u00e1kna mus\u00ed synchronizovat, aby si mohly vz\u00e1jemn\u011b p\u0159edat zpr\u00e1vu, co\u017e zd\u016fraz\u0148uje synchroniza\u010dn\u00ed aspekt komunikace.",
        incorrect:
          "V syst\u00e9mech p\u0159ed\u00e1v\u00e1n\u00ed zpr\u00e1v, mechanismus setk\u00e1n\u00ed (rendezvous) nast\u00e1v\u00e1, kdy\u017e syst\u00e9m m\u00e1 neomezenou kapacitu pro uchov\u00e1n\u00ed nedoru\u010den\u00fdch zpr\u00e1v, umo\u017e\u0148uj\u00edc\u00ed odes\u00edlaj\u00edc\u00edmu vl\u00e1knu pokra\u010dovat v \u010dinnosti bez nutnosti synchronizace s p\u0159ij\u00edmaj\u00edc\u00edm vl\u00e1knem, a minimalizuje tak synchroniza\u010dn\u00ed aspekt komunikace.",
        sectionNumber: "7.2.2",
        sectionTitle: "Z\u00e1kladn\u00ed operace",
      },
      {
        uuid: "349837a8-e73a-4bdc-924e-8ad113ec3b2f",
        correct:
          "Pro syst\u00e9my p\u0159ed\u00e1v\u00e1n\u00ed zpr\u00e1v, kde je kl\u00ed\u010dov\u00e1 vysok\u00e1 propustnost a n\u00edzk\u00e1 latence, je mo\u017en\u00e9 implementovat operace odesl\u00e1n\u00ed i p\u0159ijet\u00ed asynchronn\u011b, co\u017e m\u016f\u017ee v\u00e9st k \u00faspo\u0159e jednoho kop\u00edrov\u00e1n\u00ed zpr\u00e1vy, av\u0161ak za cenu zv\u00fd\u0161en\u00e9 slo\u017eitosti spr\u00e1vy pam\u011bti v syst\u00e9mu.",
        incorrect:
          "V syst\u00e9mech p\u0159ed\u00e1v\u00e1n\u00ed zpr\u00e1v, kde prioritou je sn\u00ed\u017een\u00ed slo\u017eitosti spr\u00e1vy pam\u011bti, je nezbytn\u00e9 implementovat operace odesl\u00e1n\u00ed a p\u0159ijet\u00ed asynchronn\u011b, co\u017e sice zjednodu\u0161uje spr\u00e1vu pam\u011bti, ale sou\u010dasn\u011b vy\u017eaduje dodate\u010dn\u00e9 kop\u00edrov\u00e1n\u00ed zpr\u00e1v, \u010d\u00edm\u017e se sni\u017euje propustnost syst\u00e9mu.",
        sectionNumber: "7.2.2",
        sectionTitle: "Z\u00e1kladn\u00ed operace",
      },
      {
        uuid: "4c684705-0dc6-400e-b7d9-011258bcc35f",
        correct:
          "V nejjednodu\u0161\u0161\u00edch syst\u00e9mech p\u0159ed\u00e1v\u00e1n\u00ed zpr\u00e1v operace 'ode\u0161li' zpr\u00e1vu a 'p\u0159ijmi' zpr\u00e1vu mohou voliteln\u011b blokovat. Operace 'p\u0159ijmi' blokuje, pokud nen\u00ed dostupn\u00e1 \u017e\u00e1dn\u00e1 zpr\u00e1va, zat\u00edmco operace 'ode\u0161li' m\u016f\u017ee blokovat kv\u016fli omezen\u00e9 kapacit\u011b syst\u00e9mu pro uchov\u00e1n\u00ed odeslan\u00fdch zpr\u00e1v.",
        incorrect:
          "V nejjednodu\u0161\u0161\u00edch syst\u00e9mech p\u0159ed\u00e1v\u00e1n\u00ed zpr\u00e1v operace 'ode\u0161li' zpr\u00e1vu a 'p\u0159ijmi' zpr\u00e1vu jsou v\u017edy neblokuj\u00edc\u00ed. Operace 'p\u0159ijmi' nikdy neblokuje, m\u00edsto toho okam\u017eit\u011b vrac\u00ed informaci o nedostupnosti zpr\u00e1vy, a operace 'ode\u0161li' nikdy neblokuje, i kdy\u017e je syst\u00e9m pln\u011b zat\u00ed\u017een odeslan\u00fdmi zpr\u00e1vami.",
        sectionNumber: "7.2.2",
        sectionTitle: "Z\u00e1kladn\u00ed operace",
      },
      {
        uuid: "ff5d311d-2595-4863-9ee5-c9170fbe6898",
        correct:
          "V syst\u00e9mech pro p\u0159ed\u00e1v\u00e1n\u00ed zpr\u00e1v se pro fyzick\u00e9 doru\u010den\u00ed zpr\u00e1v mezi klientem a zprost\u0159edkovatelem pou\u017e\u00edvaj\u00ed r\u016fzn\u00e9 komunika\u010dn\u00ed kan\u00e1ly, jako je sd\u00edlen\u00e1 pam\u011b\u0165, speci\u00e1ln\u00ed syst\u00e9mov\u00e1 vol\u00e1n\u00ed nebo s\u00ed\u0165ov\u00e9 spojen\u00ed, p\u0159i\u010dem\u017e je logicky vylou\u010deno, aby se samotn\u00e9 p\u0159ed\u00e1v\u00e1n\u00ed zpr\u00e1vy klientem k p\u0159ed\u00e1n\u00ed zpr\u00e1vy zprost\u0159edkovateli pou\u017e\u00edvalo jako komunika\u010dn\u00ed kan\u00e1l, nebo\u0165 by to vytv\u00e1\u0159elo cyklickou z\u00e1vislost a neumo\u017enilo by to efektivn\u00ed p\u0159ed\u00e1v\u00e1n\u00ed zpr\u00e1v.",
        incorrect:
          "V syst\u00e9mech pro p\u0159ed\u00e1v\u00e1n\u00ed zpr\u00e1v se pro fyzick\u00e9 doru\u010den\u00ed zpr\u00e1v mezi klientem a zprost\u0159edkovatelem pou\u017e\u00edvaj\u00ed v\u00fdhradn\u011b s\u00ed\u0165ov\u00e9 spoje, p\u0159i\u010dem\u017e sd\u00edlen\u00e1 pam\u011b\u0165 a speci\u00e1ln\u00ed syst\u00e9mov\u00e1 vol\u00e1n\u00ed nejsou pro tento \u00fa\u010del vhodn\u00e9, a logicky je mo\u017en\u00e9, aby se samotn\u00e9 p\u0159ed\u00e1v\u00e1n\u00ed zpr\u00e1vy klientem k p\u0159ed\u00e1n\u00ed zpr\u00e1vy zprost\u0159edkovateli pou\u017e\u00edvalo jako komunika\u010dn\u00ed kan\u00e1l, jeliko\u017e by to zjednodu\u0161ilo architekturu syst\u00e9mu a zv\u00fd\u0161ilo efektivitu p\u0159ed\u00e1v\u00e1n\u00ed zpr\u00e1v.",
        sectionNumber: "7.2.3",
        sectionTitle: "Zprost\u0159edkovatel",
      },
      {
        uuid: "1da63ac2-dd39-468a-b505-5de44fdc333a",
        correct:
          "V asynchronn\u00edm re\u017eimu odes\u00edl\u00e1n\u00ed zpr\u00e1v, kdy syst\u00e9m doru\u010den\u00ed zpr\u00e1v nen\u00ed spolehliv\u00fd a klient pot\u0159ebuje m\u00edt zaji\u0161t\u011bn\u00e9 doru\u010den\u00ed zpr\u00e1vy, je nutn\u00e9, aby odes\u00edlaj\u00edc\u00ed klient uchov\u00e1val zpr\u00e1vu v pam\u011bti a\u017e do doby, ne\u017e mu p\u0159\u00edjemce doru\u010den\u00ed zpr\u00e1vy potvrd\u00ed, typicky odesl\u00e1n\u00edm potvrzovac\u00ed zpr\u00e1vy zp\u011bt odes\u00edlateli, co\u017e zaji\u0161\u0165uje, \u017ee i v nespolehliv\u00e9m prost\u0159ed\u00ed bude zpr\u00e1va nakonec doru\u010dena a zpracov\u00e1na.",
        incorrect:
          "V asynchronn\u00edm re\u017eimu odes\u00edl\u00e1n\u00ed zpr\u00e1v, kdy syst\u00e9m doru\u010den\u00ed zpr\u00e1v je spolehliv\u00fd a klient nepot\u0159ebuje m\u00edt zaji\u0161t\u011bn\u00e9 doru\u010den\u00ed zpr\u00e1vy, je nutn\u00e9, aby odes\u00edlaj\u00edc\u00ed klient uchov\u00e1val zpr\u00e1vu v pam\u011bti a\u017e do doby, ne\u017e mu p\u0159\u00edjemce doru\u010den\u00ed zpr\u00e1vy potvrd\u00ed, a to i p\u0159esto, \u017ee syst\u00e9m doru\u010den\u00ed je ji\u017e spolehliv\u00fd a potvrzen\u00ed by nebylo nutn\u00e9, co\u017e je zbyte\u010dn\u00e9 pl\u00fdtv\u00e1n\u00ed syst\u00e9mov\u00fdmi zdroji a pam\u011bt\u00ed.",
        sectionNumber: "7.2.3",
        sectionTitle: "Zprost\u0159edkovatel",
      },
      {
        uuid: "b53cb460-f1e3-4c0c-b8e7-94f2ed31ed46",
        correct:
          "P\u0159i asynchronn\u00edm p\u0159\u00edjmu zpr\u00e1v, kdy klient zpracov\u00e1v\u00e1 v\u011bt\u0161\u00ed po\u010det zpr\u00e1v soub\u011b\u017en\u011b, se zpracov\u00e1n\u00ed nov\u011b p\u0159\u00edchoz\u00ed zpr\u00e1vy iniciuje na z\u00e1klad\u011b v\u00fdzvy od zprost\u0159edkovatele, a to m\u016f\u017ee b\u00fdt realizov\u00e1no bu\u010f s vyu\u017eit\u00edm klasick\u00fdch vl\u00e1ken opera\u010dn\u00edho syst\u00e9mu, nebo s pou\u017eit\u00edm takzvan\u00fdch fibr\u016f, co\u017e jsou u\u017eivatelsk\u00e1 vl\u00e1kna s kooperativn\u00edm pl\u00e1nov\u00e1n\u00edm, umo\u017e\u0148uj\u00edc\u00ed efektivn\u011bj\u0161\u00ed spr\u00e1vu soub\u011b\u017enosti.",
        incorrect:
          "P\u0159i asynchronn\u00edm p\u0159\u00edjmu zpr\u00e1v, kdy klient zpracov\u00e1v\u00e1 pouze jednu zpr\u00e1vu sekven\u010dn\u011b, se zpracov\u00e1n\u00ed nov\u011b p\u0159\u00edchoz\u00ed zpr\u00e1vy iniciuje na z\u00e1klad\u011b explicitn\u00edho dotazu klienta zprost\u0159edkovatele, a to m\u016f\u017ee b\u00fdt realizov\u00e1no v\u00fdhradn\u011b s vyu\u017eit\u00edm klasick\u00fdch vl\u00e1ken opera\u010dn\u00edho syst\u00e9mu, zat\u00edmco fibry s kooperativn\u00edm pl\u00e1nov\u00e1n\u00edm pro tento \u00fa\u010del nejsou vhodn\u00e9 a ani se v syst\u00e9mech pro p\u0159ed\u00e1v\u00e1n\u00ed zpr\u00e1v nepou\u017e\u00edvaj\u00ed.",
        sectionNumber: "7.2.3",
        sectionTitle: "Zprost\u0159edkovatel",
      },
      {
        uuid: "170b7968-65ee-4123-a65d-ba946310287b",
        correct:
          "Zprost\u0159edkovatel v syst\u00e9mu pro p\u0159ed\u00e1v\u00e1n\u00ed zpr\u00e1v m\u016f\u017ee poskytovat nejen z\u00e1kladn\u00ed operace p\u0159ed\u00e1v\u00e1n\u00ed zpr\u00e1v, ale tak\u00e9 slo\u017eit\u011bj\u0161\u00ed, odvozen\u00e9 operace, kter\u00e9 roz\u0161i\u0159uj\u00ed funkcionalitu syst\u00e9mu pro p\u0159ed\u00e1v\u00e1n\u00ed zpr\u00e1v a umo\u017e\u0148uj\u00ed efektivn\u011bj\u0161\u00ed a flexibiln\u011bj\u0161\u00ed komunikaci mezi klienty, nap\u0159\u00edklad filtrov\u00e1n\u00ed zpr\u00e1v, transformaci dat nebo sm\u011brov\u00e1n\u00ed zpr\u00e1v na z\u00e1klad\u011b obsahu.",
        incorrect:
          "Zprost\u0159edkovatel v syst\u00e9mu pro p\u0159ed\u00e1v\u00e1n\u00ed zpr\u00e1v je omezen pouze na z\u00e1kladn\u00ed operace p\u0159ed\u00e1v\u00e1n\u00ed zpr\u00e1v a nem\u016f\u017ee poskytovat \u017e\u00e1dn\u00e9 slo\u017eit\u011bj\u0161\u00ed, odvozen\u00e9 operace, proto\u017ee jeho \u00fakolem je v\u00fdhradn\u011b zprost\u0159edkov\u00e1n\u00ed komunikace bez jak\u00e9koliv p\u0159idan\u00e9 funkcionality nebo slo\u017eit\u011bj\u0161\u00ed logiky, co\u017e zaru\u010duje jednoduchost a minimalizaci re\u017eie syst\u00e9mu.",
        sectionNumber: "7.2.3",
        sectionTitle: "Zprost\u0159edkovatel",
      },
      {
        uuid: "0763d53a-5080-4ccf-bf30-badf67815c04",
        correct:
          "Operace broadcast, scatter/gather a all-to-all, kter\u00e9 jsou kl\u00ed\u010dov\u00e9 pro efektivn\u00ed komunikaci v distribuovan\u00fdch syst\u00e9mech a umo\u017e\u0148uj\u00ed proces\u016fm vym\u011b\u0148ovat si data hromadn\u011b, lze teoreticky implementovat pouze za pomoci point-to-point zpr\u00e1v, nicm\u00e9n\u011b centralizovan\u00fd zprost\u0159edkovatel m\u016f\u017ee v\u00fdrazn\u011b zv\u00fd\u0161it jejich v\u00fdkonnost a sn\u00ed\u017eit latenci t\u00edm, \u017ee p\u0159\u00edmo podporuje tyto komplexn\u011bj\u0161\u00ed komunika\u010dn\u00ed vzorce.",
        incorrect:
          "Operace broadcast, scatter/gather a all-to-all, je\u017e jsou nezbytn\u00e9 pro hromadnou komunikaci v distribuovan\u00fdch syst\u00e9mech, vy\u017eaduj\u00ed pro svou funk\u010dnost a efektivitu v\u017edy p\u0159\u00edtomnost centralizovan\u00e9ho zprost\u0159edkovatele, jeliko\u017e implementace pouze s vyu\u017eit\u00edm point-to-point zpr\u00e1v by byla v praxi p\u0159\u00edli\u0161 pomal\u00e1 a neefektivn\u00ed pro re\u00e1ln\u00e9 aplikace.",
        sectionNumber: "7.2.4",
        sectionTitle: "Odvozen\u00e9 operace",
      },
      {
        uuid: "3d2d44bd-ad9f-4e04-81c1-a9d5ad9489c2",
        correct:
          "Zat\u00edmco operace jako broadcast, scatter/gather, all-to-all, synchronizace bari\u00e9ra, remote procedure call a subscribe/publish, b\u011b\u017en\u011b pou\u017e\u00edvan\u00e9 v distribuovan\u00fdch opera\u010dn\u00edch syst\u00e9mech, mohou b\u00fdt v principu realizov\u00e1ny s vyu\u017eit\u00edm z\u00e1kladn\u00ed point-to-point komunikace, p\u0159\u00edm\u00e1 podpora t\u011bchto operac\u00ed centr\u00e1ln\u00edm zprost\u0159edkovatelem \u010dasto p\u0159in\u00e1\u0161\u00ed zna\u010dn\u00e9 zv\u00fd\u0161en\u00ed efektivity a sni\u017euje re\u017eii spojenou s jejich prov\u00e1d\u011bn\u00edm.",
        incorrect:
          "Operace jako broadcast, scatter/gather, all-to-all, synchronizace bari\u00e9ra, remote procedure call a subscribe/publish jsou v modern\u00edch opera\u010dn\u00edch syst\u00e9mech implementov\u00e1ny v\u00fdhradn\u011b s vyu\u017eit\u00edm centr\u00e1ln\u00edho zprost\u0159edkovatele, nebo\u0165 point-to-point komunikace se uk\u00e1zala jako zcela neefektivn\u00ed a nepraktick\u00e1 pro realizaci takto komplexn\u00edch komunika\u010dn\u00edch \u00faloh v n\u00e1ro\u010dn\u00fdch distribuovan\u00fdch prost\u0159ed\u00edch.",
        sectionNumber: "7.2.4",
        sectionTitle: "Odvozen\u00e9 operace",
      },
      {
        uuid: "b9f4637d-9df7-4d0c-976e-b7f22fca5b9d",
        correct:
          "V opera\u010dn\u00edch syst\u00e9mech s mikroj\u00e1drovou architekturou je p\u0159ed\u00e1v\u00e1n\u00ed zpr\u00e1v kl\u00ed\u010dov\u00fdm mechanismem pro meziprocesovou komunikaci, proto\u017ee slu\u017eby opera\u010dn\u00edho syst\u00e9mu jsou implementov\u00e1ny jako b\u011b\u017en\u00e9 procesy, a mikroj\u00e1dro samo \u010dasto funguje jako zprost\u0159edkovatel t\u00e9to komunikace, co\u017e zvy\u0161uje modularitu a spolehlivost syst\u00e9mu.",
        incorrect:
          "V monolitick\u00fdch opera\u010dn\u00edch syst\u00e9mech je p\u0159ed\u00e1v\u00e1n\u00ed zpr\u00e1v kl\u00ed\u010dov\u00fdm mechanismem pro meziprocesovou komunikaci, proto\u017ee slu\u017eby opera\u010dn\u00edho syst\u00e9mu jsou implementov\u00e1ny jako b\u011b\u017en\u00e9 procesy, a mikroj\u00e1dro samo \u010dasto funguje jako zprost\u0159edkovatel t\u00e9to komunikace, co\u017e zvy\u0161uje modularitu a spolehlivost syst\u00e9mu.",
        sectionNumber: "7.2.5",
        sectionTitle: "Vyu\u017eit\u00ed",
      },
      {
        uuid: "24346ebf-7e19-43ca-ae50-98ab5529578f",
        correct:
          "V distribuovan\u00fdch syst\u00e9mech je p\u0159ed\u00e1v\u00e1n\u00ed zpr\u00e1v pova\u017eov\u00e1no za standardn\u00ed metodu komunikace, proto\u017ee tyto syst\u00e9my obvykle nemaj\u00ed k dispozici sd\u00edlenou pam\u011b\u0165, co\u017e \u010din\u00ed jin\u00e9 mechanismy meziprocesov\u00e9 komunikace nepraktick\u00fdmi nebo nemo\u017en\u00fdmi, a proto se efektivn\u00ed p\u0159ed\u00e1v\u00e1n\u00ed zpr\u00e1v st\u00e1v\u00e1 kl\u00ed\u010dov\u00fdm pro funk\u010dnost distribuovan\u00fdch aplikac\u00ed.",
        incorrect:
          "V distribuovan\u00fdch syst\u00e9mech je sd\u00edlen\u00e1 pam\u011b\u0165 pova\u017eov\u00e1na za standardn\u00ed metodu komunikace, proto\u017ee tyto syst\u00e9my obvykle maj\u00ed k dispozici sd\u00edlenou pam\u011b\u0165, co\u017e \u010din\u00ed p\u0159ed\u00e1v\u00e1n\u00ed zpr\u00e1v nepraktick\u00fdm a pomal\u00fdm, a proto se sd\u00edlen\u00e1 pam\u011b\u0165 st\u00e1v\u00e1 kl\u00ed\u010dov\u00fdm pro funk\u010dnost distribuovan\u00fdch aplikac\u00ed.",
        sectionNumber: "7.2.5",
        sectionTitle: "Vyu\u017eit\u00ed",
      },
      {
        uuid: "6acbda22-7374-47a2-bacb-cfe0dd82487b",
        correct:
          "Pou\u017eit\u00ed p\u0159ed\u00e1v\u00e1n\u00ed zpr\u00e1v jako mechanismu meziprocesov\u00e9 komunikace v opera\u010dn\u00edch syst\u00e9mech, zvl\u00e1\u0161t\u011b v mikroj\u00e1drov\u00fdch architektur\u00e1ch, p\u0159in\u00e1\u0161\u00ed v\u00fdhody v oblasti spolehlivosti a bezpe\u010dnosti, proto\u017ee komunikuj\u00edc\u00ed entity jsou slab\u011b prov\u00e1zan\u00e9, co\u017e sni\u017euje rizika spojen\u00e1 se soub\u011b\u017enost\u00ed a usnad\u0148uje izolaci komponent syst\u00e9mu.",
        incorrect:
          "Pou\u017eit\u00ed sd\u00edlen\u00e9 pam\u011bti jako mechanismu meziprocesov\u00e9 komunikace v opera\u010dn\u00edch syst\u00e9mech, zvl\u00e1\u0161t\u011b v mikroj\u00e1drov\u00fdch architektur\u00e1ch, p\u0159in\u00e1\u0161\u00ed v\u00fdhody v oblasti spolehlivosti a bezpe\u010dnosti, proto\u017ee komunikuj\u00edc\u00ed entity jsou slab\u011b prov\u00e1zan\u00e9, co\u017e sni\u017euje rizika spojen\u00e1 se soub\u011b\u017enost\u00ed a usnad\u0148uje izolaci komponent syst\u00e9mu.",
        sectionNumber: "7.2.5",
        sectionTitle: "Vyu\u017eit\u00ed",
      },
      {
        uuid: "3c6bcddb-e7d5-46be-8725-d64c75fa99fc",
        correct:
          "Koncept distribuovan\u00e9 sd\u00edlen\u00e9 pam\u011bti existuje a je p\u0159edm\u011btem v\u00fdzkumu, av\u0161ak pro v\u011bt\u0161inu praktick\u00fdch aplikac\u00ed se pot\u00fdk\u00e1 se z\u00e1sadn\u00edmi probl\u00e9my s v\u00fdkonem, obzvl\u00e1\u0161t\u011b p\u0159i pou\u017eit\u00ed b\u011b\u017en\u00fdch vzor\u016f komunikace, kter\u00e9 jsou navr\u017eeny pro syst\u00e9my se skute\u010dnou sd\u00edlenou pam\u011bt\u00ed.",
        incorrect:
          "Koncept distribuovan\u00e9 sd\u00edlen\u00e9 pam\u011bti je \u0161iroce pou\u017e\u00edv\u00e1n v praktick\u00fdch aplikac\u00edch a nevykazuje z\u00e1sadn\u00ed probl\u00e9my s v\u00fdkonem, a to i p\u0159i pou\u017eit\u00ed b\u011b\u017en\u00fdch vzor\u016f komunikace, kter\u00e9 jsou navr\u017eeny pro syst\u00e9my se skute\u010dnou sd\u00edlenou pam\u011bt\u00ed.",
        sectionNumber: "7.2.5",
        sectionTitle: "Vyu\u017eit\u00ed",
      },
      {
        uuid: "a587d3c2-db57-4746-ab0c-3287664b2139",
        correct:
          "Virtualizace hardwarov\u00fdch zdroj\u016f, jako jsou procesory a pam\u011b\u0165, je u\u017eite\u010dn\u00e1 technika v opera\u010dn\u00edch syst\u00e9mech, kter\u00e1 umo\u017e\u0148uje vytv\u00e1\u0159et iluzi v\u011bt\u0161\u00edho mno\u017estv\u00ed zdroj\u016f, ne\u017e je fyzicky dostupn\u00e9.  Tato metoda je efektivn\u00ed, pokud ka\u017ed\u00fd u\u017eivatel zdroje vyu\u017e\u00edv\u00e1 pouze \u010d\u00e1st jeho celkov\u00e9 kapacity, nap\u0159\u00edklad \u010d\u00e1st procesorov\u00e9ho j\u00e1dra nebo opera\u010dn\u00ed pam\u011bti. Nicm\u00e9n\u011b, virtualizace nen\u00ed neomezen\u00e1 a m\u00e1 sv\u00e9 limity, zejm\u00e9na v situac\u00edch, kdy je fyzick\u00e1 kapacita zdroje vy\u010derp\u00e1na.",
        incorrect:
          "Virtualizace hardwarov\u00fdch zdroj\u016f, jako jsou procesory a pam\u011b\u0165, je univerz\u00e1ln\u00ed technika v opera\u010dn\u00edch syst\u00e9mech, kter\u00e1 umo\u017e\u0148uje vytv\u00e1\u0159et neomezen\u00e9 mno\u017estv\u00ed zdroj\u016f, bez ohledu na jejich fyzickou dostupnost. Tato metoda je efektivn\u00ed i v situac\u00edch, kdy u\u017eivatel\u00e9 vy\u017eaduj\u00ed celou kapacitu zdroje najednou, a nem\u00e1 prakticky \u017e\u00e1dn\u00e9 limity, proto\u017ee fyzick\u00e1 kapacita zdroje nen\u00ed nikdy vy\u010derp\u00e1na.",
        sectionNumber: "7.3.1",
        sectionTitle: "Hardwarov\u00e9 zdroje",
      },
      {
        uuid: "07183c09-76d8-4a2b-88e6-698575af3d88",
        correct:
          "Podle textu, virtualizace zdroj\u016f v opera\u010dn\u00edch syst\u00e9mech nen\u00ed v\u0161el\u00e9k a m\u00e1 sv\u00e1 omezen\u00ed. N\u011bkter\u00e9 hardwarov\u00e9 periferie nelze efektivn\u011b virtualizovat a virtualizace sama o sob\u011b neum\u00ed fyzicky zn\u00e1sobit zdroje, ale pouze umo\u017e\u0148uje jejich sd\u00edlen\u00ed mezi v\u00edce u\u017eivateli nebo procesy.  V p\u0159\u00edpadech, kdy fyzick\u00e1 kapacita virtualizovan\u00e9ho zdroje, jako je opera\u010dn\u00ed pam\u011b\u0165 nebo diskov\u00fd prostor, dos\u00e1hne sv\u00e9ho limitu, operace vy\u017eaduj\u00edc\u00ed tento zdroj mohou selhat. Alternativou k virtualizaci m\u016f\u017ee b\u00fdt rezervace a uvol\u0148ov\u00e1n\u00ed zdroj\u016f.",
        incorrect:
          "Podle textu, virtualizace zdroj\u016f v opera\u010dn\u00edch syst\u00e9mech je univerz\u00e1ln\u00ed \u0159e\u0161en\u00ed bez omezen\u00ed. V\u0161echny hardwarov\u00e9 periferie lze efektivn\u011b virtualizovat a virtualizace sama o sob\u011b dok\u00e1\u017ee fyzicky zn\u00e1sobit zdroje, \u010d\u00edm\u017e umo\u017e\u0148uje neomezen\u00e9 mno\u017estv\u00ed u\u017eivatel\u016f nebo proces\u016f.  V p\u0159\u00edpadech, kdy fyzick\u00e1 kapacita virtualizovan\u00e9ho zdroje, jako je opera\u010dn\u00ed pam\u011b\u0165 nebo diskov\u00fd prostor, dos\u00e1hne sv\u00e9ho limitu, operace vy\u017eaduj\u00edc\u00ed tento zdroj nikdy nesel\u017eou, proto\u017ee virtualizace zaji\u0161\u0165uje neomezenou kapacitu.",
        sectionNumber: "7.3.1",
        sectionTitle: "Hardwarov\u00e9 zdroje",
      },
      {
        uuid: "3d468592-cc28-46d2-8920-15bb72ac5303",
        correct:
          "Rezervace zdroj\u016f p\u0159edstavuje alternativn\u00ed p\u0159\u00edstup k virtualizaci, kter\u00fd se uplat\u0148uje zejm\u00e9na v situac\u00edch, kdy povaha dan\u00e9ho zdroje, jako nap\u0159\u00edklad p\u00e1skov\u00e9 jednotky, neumo\u017e\u0148uje virtualizaci, nebo v p\u0159\u00edpadech, kdy je selh\u00e1n\u00ed zdroje nep\u0159\u00edpustn\u00e9 z d\u016fvodu potenci\u00e1ln\u00edho ohro\u017een\u00ed zdrav\u00ed \u010di majetku.  D\u016fle\u017eit\u00e9 je, \u017ee rezervace a virtualizace se vz\u00e1jemn\u011b nevylu\u010duj\u00ed a mohou koexistovat v r\u00e1mci opera\u010dn\u00edho syst\u00e9mu.",
        incorrect:
          "Rezervace zdroj\u016f je prim\u00e1rn\u00ed a v\u00fdhradn\u00ed metoda spr\u00e1vy hardwarov\u00fdch prost\u0159edk\u016f v modern\u00edch opera\u010dn\u00edch syst\u00e9mech, kter\u00e1 pln\u011b nahrazuje virtualizaci.  V situac\u00edch, kde je k dispozici virtualizace, se rezervace nikdy nepou\u017e\u00edv\u00e1, proto\u017ee tyto dva p\u0159\u00edstupy jsou v opera\u010dn\u00edch syst\u00e9mech striktn\u011b vz\u00e1jemn\u011b vylu\u010duj\u00edc\u00ed.",
        sectionNumber: "7.3.2",
        sectionTitle: "Rezervace",
      },
      {
        uuid: "df9eec55-ac55-4509-b662-4e1c38623d1d",
        correct:
          "Proces rezervace zdroj\u016f se skl\u00e1d\u00e1 ze dvou kl\u00ed\u010dov\u00fdch f\u00e1z\u00ed. Prvn\u00ed f\u00e1z\u00ed je samotn\u00e1 rezervace, kdy program po\u017e\u00e1d\u00e1 opera\u010dn\u00ed syst\u00e9m o exkluzivn\u00ed p\u0159\u00edstup ke zdroji. Po \u00fasp\u011b\u0161n\u00e9 rezervaci se zdroj st\u00e1v\u00e1 vlastnictv\u00edm programu. Druhou f\u00e1z\u00ed je uvoln\u011bn\u00ed zdroje, kdy program oznamuje syst\u00e9mu, \u017ee ji\u017e zdroj nepot\u0159ebuje, a ten se vrac\u00ed zp\u011bt do syst\u00e9mu pro dal\u0161\u00ed pou\u017eit\u00ed.",
        incorrect:
          "Rezervace zdroj\u016f je jednof\u00e1zov\u00fd proces, ve kter\u00e9m program okam\u017eit\u011b z\u00edsk\u00e1 exkluzivn\u00ed p\u0159\u00edstup ke zdroji ihned po pod\u00e1n\u00ed po\u017eadavku. Syst\u00e9m nepo\u010d\u00edt\u00e1 s f\u00e1z\u00ed uvoln\u011bn\u00ed zdroje, proto\u017ee se p\u0159edpokl\u00e1d\u00e1, \u017ee zdroje rezervovan\u00e9 programem z\u016fst\u00e1vaj\u00ed vyhrazen\u00e9 po celou dobu b\u011bhu programu a po jeho ukon\u010den\u00ed se automaticky uvoln\u00ed.",
        sectionNumber: "7.3.2",
        sectionTitle: "Rezervace",
      },
      {
        uuid: "3220efab-e775-48e3-82cb-0b4ebf832e12",
        correct:
          "V p\u0159\u00edpad\u011b, \u017ee po\u017eadovan\u00fd zdroj nen\u00ed v dob\u011b rezervace dostupn\u00fd, opera\u010dn\u00ed syst\u00e9m m\u00e1 dv\u011b mo\u017enosti, jak situaci \u0159e\u0161it. M\u016f\u017ee po\u017eadavek na rezervaci odm\u00edtnout, \u010d\u00edm\u017e donut\u00ed program se s nedostupnost\u00ed zdroje vyrovnat, nebo m\u016f\u017ee program nechat \u010dekat, dokud se zdroj neuvoln\u00ed jin\u00fdm programem a stane se dostupn\u00fdm pro rezervaci.",
        incorrect:
          "Pokud zdroj nen\u00ed dostupn\u00fd v okam\u017eiku po\u017eadavku na rezervaci, opera\u010dn\u00ed syst\u00e9m v\u017edy zvol\u00ed mo\u017enost okam\u017eit\u00e9ho zam\u00edtnut\u00ed po\u017eadavku. \u010cek\u00e1n\u00ed na uvoln\u011bn\u00ed zdroje nen\u00ed v mechanismu rezervace implementov\u00e1no, proto\u017ee by to mohlo v\u00e9st k neefektivn\u00edmu vyu\u017eit\u00ed zdroj\u016f a zdr\u017een\u00ed jin\u00fdch program\u016f \u010dekaj\u00edc\u00edch na stejn\u00fd zdroj.",
        sectionNumber: "7.3.2",
        sectionTitle: "Rezervace",
      },
      {
        uuid: "39daae91-8783-40af-a3e0-ea5e74ae910a",
        correct:
          "Mutex lze ch\u00e1pat jako abstraktn\u00ed zdroj, kter\u00fd nereprezentuje v\u00fdpo\u010detn\u00ed prost\u0159edky, ale umo\u017e\u0148uje synchronizaci vl\u00e1ken t\u00edm, \u017ee poskytuje operace rezervace a uvoln\u011bn\u00ed, kter\u00e9 odpov\u00eddaj\u00ed zam\u010den\u00ed a odem\u010den\u00ed kritick\u00e9 sekce, \u010d\u00edm\u017e zaji\u0161\u0165uje vz\u00e1jemn\u00e9 vylou\u010den\u00ed p\u0159\u00edstupu ke sd\u00edlen\u00fdm zdroj\u016fm.",
        incorrect:
          "Mutex je konkr\u00e9tn\u00ed zdroj v\u00fdpo\u010detn\u00edho v\u00fdkonu, kter\u00fd opera\u010dn\u00ed syst\u00e9m alokuje proces\u016fm pro v\u00fdhradn\u00ed pou\u017eit\u00ed, a jeho operace rezervace a uvoln\u011bn\u00ed slou\u017e\u00ed k p\u0159id\u011blov\u00e1n\u00ed a vracen\u00ed tohoto v\u00fdpo\u010detn\u00edho v\u00fdkonu, nikoliv k synchronizaci vl\u00e1ken nebo ochran\u011b kritick\u00fdch sekc\u00ed.",
        sectionNumber: "7.3.3",
        sectionTitle: "Abstraktn\u00ed zdroje",
      },
      {
        uuid: "6957d17b-399c-4a67-9eb5-1c858ee8f33c",
        correct:
          'Podle textu lze i samotnou kritickou sekci pova\u017eovat za abstraktn\u00ed zdroj, i kdy\u017e definice kritick\u00e9 sekce v literatu\u0159e b\u00fdv\u00e1 nejednozna\u010dn\u00e1 a \u010dasto se operuje s pojmem kritick\u00e9 sekce voln\u011b, obvykle ve smyslu t\u0159\u00eddy ekvivalence vzta\u017een\u00e9 k pojmu "kritick\u00fd v\u016f\u010di".',
        incorrect:
          "Text v\u00fdslovn\u011b uv\u00e1d\u00ed, \u017ee kritickou sekci nelze pova\u017eovat za abstraktn\u00ed zdroj, proto\u017ee definice kritick\u00e9 sekce je v literatu\u0159e striktn\u011b dan\u00e1 a pojem kritick\u00e9 sekce se v\u017edy operuje form\u00e1ln\u011b, bez nejasnost\u00ed nebo volnosti ve v\u00fdkladu, a proto se nem\u016f\u017ee jednat o abstraktn\u00ed zdroj.",
        sectionNumber: "7.3.3",
        sectionTitle: "Abstraktn\u00ed zdroje",
      },
      {
        uuid: "10923612-e178-4586-be8c-70f101b1ba47",
        correct:
          "V kontextu spr\u00e1vy zdroj\u016f v opera\u010dn\u00edch syst\u00e9mech, pokud existuje v\u00edce instanc\u00ed ur\u010dit\u00e9ho zdroje, je mo\u017en\u00e9 p\u0159i rezervaci zdroje vybrat libovolnou z dostupn\u00fdch instanc\u00ed, proto\u017ee instance jsou v dob\u011b rezervace voln\u011b zam\u011bniteln\u00e9.",
        incorrect:
          "V kontextu spr\u00e1vy zdroj\u016f v opera\u010dn\u00edch syst\u00e9mech, i po rezervaci konkr\u00e9tn\u00ed instance zdroje, je st\u00e1le mo\u017en\u00e9 tuto instanci vym\u011bnit za jinou dostupnou instanci stejn\u00e9ho zdroje, pokud se objev\u00ed v\u00fdhodn\u011bj\u0161\u00ed alternativa.",
        sectionNumber: "7.3.4",
        sectionTitle: "Instance",
      },
      {
        uuid: "c33712d6-75b1-4c39-9d75-75b815afc289",
        correct:
          "V opera\u010dn\u00edch syst\u00e9mech, kde jsou zdroje spravov\u00e1ny s ohledem na z\u00e1m\u011bnnost instanc\u00ed, plat\u00ed, \u017ee rezervace zdroje se prov\u00e1d\u00ed tak, \u017ee syst\u00e9m vybere libovolnou dostupnou instanci a po proveden\u00ed rezervace u\u017e nen\u00ed mo\u017en\u00e9 tuto instanci dodate\u010dn\u011b vym\u011bnit za jinou.",
        incorrect:
          "V opera\u010dn\u00edch syst\u00e9mech, kde je kladen d\u016fraz na flexibilitu spr\u00e1vy zdroj\u016f, je b\u011b\u017en\u00e9, \u017ee i po rezervaci ur\u010dit\u00e9 instance zdroje existuje mechanismus pro jej\u00ed v\u00fdm\u011bnu za jinou instanci, a to i dodate\u010dn\u011b, pokud se objev\u00ed pot\u0159eba optimalizace vyu\u017eit\u00ed zdroj\u016f.",
        sectionNumber: "7.3.4",
        sectionTitle: "Instance",
      },
      {
        uuid: "0faac1fd-d825-45e1-9104-b626afeef00b",
        correct:
          "Proto\u017ee komunikace v opera\u010dn\u00edch syst\u00e9mech je ch\u00e1p\u00e1na jako forma synchronizace, lze ji tak\u00e9 pova\u017eovat za abstraktn\u00ed zdroj, kde rezervace zdroje odpov\u00edd\u00e1 odesl\u00e1n\u00ed zpr\u00e1vy a uvoln\u011bn\u00ed zdroje p\u0159ijet\u00ed zpr\u00e1vy, p\u0159i\u010dem\u017e p\u0159ed\u00e1n\u00ed zpr\u00e1vy m\u016f\u017ee implikovat i p\u0159ed\u00e1n\u00ed vlastnictv\u00ed tohoto abstraktn\u00edho zdroje mezi r\u016fzn\u00fdmi vl\u00e1kny nebo procesy.",
        incorrect:
          "Komunikace v opera\u010dn\u00edch syst\u00e9mech je sice formou synchronizace, ale nelze ji pova\u017eovat za abstraktn\u00ed zdroj, proto\u017ee rezervace a uvoln\u011bn\u00ed zdroje jsou v\u00fdhradn\u011b v\u00e1z\u00e1ny na fyzick\u00e9 zdroje, jako je pam\u011b\u0165 nebo procesorov\u00fd \u010das, a p\u0159ed\u00e1n\u00ed zpr\u00e1vy nikdy nep\u0159edstavuje p\u0159ed\u00e1n\u00ed vlastnictv\u00ed zdroje, ale pouze do\u010dasn\u00e9 sd\u00edlen\u00ed.",
        sectionNumber: "7.3.5",
        sectionTitle: "Komunikace",
      },
      {
        uuid: "69e3eb6a-4506-4e27-9311-b587565f55ac",
        correct:
          "V kontextu probl\u00e9mu producent\u016f a konzument\u016f v opera\u010dn\u00edch syst\u00e9mech, ulo\u017een\u00ed meziv\u00fdsledku producentem p\u0159edstavuje formu rezervace abstraktn\u00edho zdroje s omezenou kapacitou, p\u0159i\u010dem\u017e po\u010det ulo\u017een\u00fdch meziv\u00fdsledk\u016f je kone\u010dn\u00fd a mus\u00ed b\u00fdt producentovi p\u0159id\u011blen, a tento zdroj je uvoln\u011bn a\u017e konzumentem, kter\u00fd meziv\u00fdsledek zpracuje a pou\u017eije.",
        incorrect:
          "V paradigmatu producent\u016f a konzument\u016f opera\u010dn\u00edch syst\u00e9m\u016f, ulo\u017een\u00ed meziv\u00fdsledku producentem nep\u0159edstavuje rezervaci zdroje, ale pouze do\u010dasn\u00e9 ulo\u017een\u00ed dat v pam\u011bti, kter\u00e1 nen\u00ed pova\u017eov\u00e1na za omezen\u00fd zdroj, a uvoln\u011bn\u00ed tohoto prostoru nast\u00e1v\u00e1 automaticky opera\u010dn\u00edm syst\u00e9mem, nez\u00e1visle na \u010dinnosti konzumenta, nap\u0159\u00edklad prost\u0159ednictv\u00edm garbage collection.",
        sectionNumber: "7.3.5",
        sectionTitle: "Komunikace",
      },
      {
        uuid: "ec8cceca-64b0-47a9-a1ec-7404a7222c6c",
        correct:
          "Princip abstrakce zdroj\u016f v opera\u010dn\u00edch syst\u00e9mech se roz\u0161i\u0159uje i na sc\u00e9n\u00e1\u0159e, kde programy si navz\u00e1jem p\u0159ed\u00e1vaj\u00ed zdroje, p\u0159i\u010dem\u017e program, kter\u00fd zdroj obdr\u017e\u00ed, je zodpov\u011bdn\u00fd za jeho n\u00e1sledn\u00e9 uvoln\u011bn\u00ed, co\u017e vy\u017eaduje sou\u010dinnost opera\u010dn\u00edho syst\u00e9mu pro spr\u00e1vu vlastnictv\u00ed a \u017eivotn\u00edho cyklu takto sd\u00edlen\u00fdch abstraktn\u00edch zdroj\u016f mezi r\u016fzn\u00fdmi programy.",
        incorrect:
          "V opera\u010dn\u00edch syst\u00e9mech je sd\u00edlen\u00ed zdroj\u016f mezi programy striktn\u011b omezeno na zdroje spravovan\u00e9 v\u00fdhradn\u011b jedn\u00edm programem a opera\u010dn\u00ed syst\u00e9m neumo\u017e\u0148uje p\u0159\u00edm\u00e9 p\u0159ed\u00e1v\u00e1n\u00ed vlastnictv\u00ed zdroj\u016f mezi r\u016fzn\u00fdmi programy, a tedy program nem\u016f\u017ee p\u0159edat zodpov\u011bdnost za uvoln\u011bn\u00ed zdroje jin\u00e9mu programu.",
        sectionNumber: "7.3.5",
        sectionTitle: "Komunikace",
      },
      {
        uuid: "2011f969-4e34-4430-ba7d-8ed27a41564c",
        correct:
          "Podle textu se v opera\u010dn\u00edch syst\u00e9mech zdroje implicitn\u011b pova\u017euj\u00ed za neodn\u00edmateln\u00e9, co\u017e znamen\u00e1, \u017ee k jejich uvoln\u011bn\u00ed doch\u00e1z\u00ed typicky dobrovoln\u00fdm vr\u00e1cen\u00edm vlastn\u00edkem. N\u00e1siln\u00e9 odebr\u00e1n\u00ed neodn\u00edmateln\u00fdch zdroj\u016f, jako jsou mutexy, m\u016f\u017ee m\u00edt v\u00e1\u017en\u00e9 negativn\u00ed dopady na b\u011bh programu a jeho stabilitu, co\u017e zd\u016fraz\u0148uje d\u016fle\u017eitost \u0159\u00e1dn\u00e9ho \u0159\u00edzen\u00ed zdroj\u016f.",
        incorrect:
          "V rozporu s principy uveden\u00fdmi v textu se v opera\u010dn\u00edch syst\u00e9mech zdroje b\u011b\u017en\u011b pova\u017euj\u00ed za snadno odn\u00edmateln\u00e9, co\u017e umo\u017e\u0148uje \u010dast\u00e9 a n\u00e1siln\u00e9 odeb\u00edr\u00e1n\u00ed i neodn\u00edmateln\u00fdch zdroj\u016f, jako jsou mutexy, bez v\u00fdznamn\u00fdch dopad\u016f na b\u011bh programu nebo jeho stabilitu. Text nazna\u010duje, \u017ee opera\u010dn\u00ed syst\u00e9my jsou navr\u017eeny tak, aby zvl\u00e1daly i ne\u010dekan\u00e9 odebr\u00e1n\u00ed kl\u00ed\u010dov\u00fdch zdroj\u016f.",
        sectionNumber: "7.3.6",
        sectionTitle: "Odn\u00edmateln\u00e9 zdroje",
      },
      {
        uuid: "0ebcc0f7-e123-4882-a062-5bd252f3298d",
        correct:
          "Dle poskytnut\u00e9ho textu, zat\u00edmco odebr\u00e1n\u00ed fyzick\u00fdch prost\u0159edk\u016f ve virtualizovan\u00e9m prost\u0159ed\u00ed je obvykle zvl\u00e1dnuteln\u00e9, jak dokl\u00e1d\u00e1 p\u0159\u00edklad pl\u00e1nova\u010de odeb\u00edraj\u00edc\u00edho procesor b\u011b\u017e\u00edc\u00edmu vl\u00e1knu nebo spr\u00e1vce pam\u011bti p\u0159esouvaj\u00edc\u00edho str\u00e1nky do extern\u00ed pam\u011bti, d\u016fsledky pro neodn\u00edmateln\u00e9 zdroje, jako jsou 3D tisk\u00e1rny nebo optick\u00e9 mechaniky, jsou mnohem kriti\u010dt\u011bj\u0161\u00ed a potenci\u00e1ln\u011b \u0161kodliv\u00e9.",
        incorrect:
          "Jak je pops\u00e1no v textu, odebr\u00e1n\u00ed fyzick\u00fdch prost\u0159edk\u016f, bez ohledu na to, zda se nach\u00e1zej\u00ed ve virtualizovan\u00e9m nebo nevirtualizovan\u00e9m prost\u0159ed\u00ed, m\u00e1 v\u017edy zvl\u00e1dnuteln\u00e9 d\u016fsledky. Nap\u0159\u00edklad n\u00e1siln\u00e9 odebr\u00e1n\u00ed kontroly nad 3D tisk\u00e1rnou je stejn\u011b bezv\u00fdznamn\u00e9 jako pl\u00e1nova\u010d odeb\u00edraj\u00edc\u00ed procesor b\u011b\u017e\u00edc\u00edmu vl\u00e1knu a nep\u0159edstavuje \u017e\u00e1dn\u00e9 v\u00fdznamn\u00e9 riziko po\u0161kozen\u00ed nebo naru\u0161en\u00ed provozu.",
        sectionNumber: "7.3.6",
        sectionTitle: "Odn\u00edmateln\u00e9 zdroje",
      },
      {
        uuid: "dc3580f6-cd4f-483d-8a9f-5b1d9e6aa135",
        correct:
          "Text objas\u0148uje, \u017ee odn\u00edmatelnost zdroje nen\u00ed pouze inherentn\u00ed vlastnost\u00ed samotn\u00e9ho zdroje, ale m\u016f\u017ee v\u00fdznamn\u011b z\u00e1viset na kontextu jeho pou\u017eit\u00ed. Nap\u0159\u00edklad \u00falo\u017en\u00e9 za\u0159\u00edzen\u00ed m\u016f\u017ee b\u00fdt odn\u00edmateln\u00e9 ve virtualizovan\u00e9m prost\u0159ed\u00ed, ale neodn\u00edmateln\u00e9, pokud je konfigurov\u00e1no jako zaru\u010den\u00fd zdroj ve specifick\u00e9 konfiguraci syst\u00e9mu, co\u017e ukazuje na flexibilitu spr\u00e1vy zdroj\u016f v opera\u010dn\u00edch syst\u00e9mech.",
        incorrect:
          "Podle textu je odn\u00edmatelnost zdroje striktn\u011b inherentn\u00ed vlastnost\u00ed samotn\u00e9ho zdroje a je zcela nez\u00e1visl\u00e1 na provozn\u00edm kontextu. To, zda je zdroj pou\u017e\u00edv\u00e1n ve virtualizovan\u00e9m prost\u0159ed\u00ed nebo jako zaru\u010den\u00fd zdroj, nem\u00e1 \u017e\u00e1dn\u00fd vliv na to, zda m\u016f\u017ee b\u00fdt opera\u010dn\u00edm syst\u00e9mem n\u00e1siln\u011b odebr\u00e1n, proto\u017ee odn\u00edmatelnost je p\u0159edem dan\u00e1 vlastnost zdroje.",
        sectionNumber: "7.3.6",
        sectionTitle: "Odn\u00edmateln\u00e9 zdroje",
      },
      {
        uuid: "adc4df80-7e1a-4359-a3ed-8a19c90fdfe6",
        correct:
          "Jak ilustruje p\u0159\u00edklad zpracov\u00e1n\u00ed s\u00ed\u0165ov\u00fdch paket\u016f v textu, v syst\u00e9mech vyu\u017e\u00edvaj\u00edc\u00edch mechanismus 'ulo\u017e a p\u0159epo\u0161li' slou\u017e\u00ed pam\u011b\u0165ov\u00e9 bu\u0148ky vyrovn\u00e1vac\u00ed pam\u011bti jako zdroje. Pokud se tyto vyrovn\u00e1vac\u00ed pam\u011bti zapln\u00ed v d\u016fsledku vysok\u00e9 rychlosti p\u0159\u00edchodu paket\u016f, syst\u00e9m m\u016f\u017ee p\u0159istoupit ke ztr\u00e1t\u011b p\u0159\u00edchoz\u00edch paket\u016f, co\u017e efektivn\u011b demonstruje sc\u00e9n\u00e1\u0159 odebr\u00e1n\u00ed zdroje v situaci, kdy alokace nen\u00ed mo\u017en\u00e1 z d\u016fvodu vy\u010derp\u00e1n\u00ed zdroj\u016f.",
        incorrect:
          "Text vysv\u011btluje, \u017ee v s\u00ed\u0165ov\u00fdch syst\u00e9mech 'ulo\u017e a p\u0159epo\u0161li' pam\u011b\u0165ov\u00e9 bu\u0148ky vyrovn\u00e1vac\u00ed pam\u011bti, i kdy\u017e do\u010dasn\u011b ukl\u00e1daj\u00ed p\u0159\u00edchoz\u00ed pakety, nejsou pova\u017eov\u00e1ny za zdroje. Proto, kdy\u017e se tyto vyrovn\u00e1vac\u00ed pam\u011bti zapln\u00ed, syst\u00e9m nikdy neztr\u00e1c\u00ed p\u0159\u00edchoz\u00ed pakety; m\u00edsto toho pou\u017e\u00edv\u00e1 blokovac\u00ed mechanismus, aby zajistil, \u017ee v\u0161echny pakety budou zpracov\u00e1ny bez ztr\u00e1ty dat nebo odebr\u00e1n\u00ed zdroj\u016f, bez ohledu na rychlost p\u0159\u00edchodu paket\u016f.",
        sectionNumber: "7.3.6",
        sectionTitle: "Odn\u00edmateln\u00e9 zdroje",
      },
      {
        uuid: "f65b6c69-1cd6-43f9-bedb-3d46258114ac",
        correct:
          "V situaci uv\u00e1znut\u00ed, kdy m\u00e1me dv\u011b vl\u00e1kna P a Q a dva zdroje A a B, m\u016f\u017ee vl\u00e1kno P dr\u017eet zdroj A a \u017e\u00e1dat o zdroj B, zat\u00edmco vl\u00e1kno Q dr\u017e\u00ed zdroj B a \u017e\u00e1dat o zdroj A. Tato vz\u00e1jemn\u00e1 z\u00e1vislost vede k situaci, kdy ani jedno vl\u00e1kno nem\u016f\u017ee pokra\u010dovat v\u00a0\u010dinnosti, dokud nezas\u00e1hne vn\u011bj\u0161\u00ed mechanismus, nap\u0159\u00edklad opera\u010dn\u00ed syst\u00e9m.",
        incorrect:
          "V situaci uv\u00e1znut\u00ed, kdy m\u00e1me dv\u011b vl\u00e1kna P a Q a dva zdroje A a B, m\u016f\u017ee vl\u00e1kno P dr\u017eet zdroj A a \u017e\u00e1dat o zdroj B, zat\u00edmco vl\u00e1kno Q dr\u017e\u00ed zdroj B a \u017e\u00e1dat o zdroj A. Tato vz\u00e1jemn\u00e1 z\u00e1vislost vede k situaci, kdy ob\u011b vl\u00e1kna automaticky uvoln\u00ed dr\u017een\u00e9 zdroje a syst\u00e9m se s\u00e1m z uv\u00e1znut\u00ed zotav\u00ed bez vn\u011bj\u0161\u00edho z\u00e1sahu.",
        sectionNumber: "7.4.1",
        sectionTitle: "Uv\u00e1znut\u00ed",
      },
      {
        uuid: "7d12be15-5c36-4ccc-b6dd-e98292b46601",
        correct:
          "Uv\u00e1znut\u00ed mezi dv\u011bma vl\u00e1kny a dv\u011bma zdroji nast\u00e1v\u00e1 tehdy, kdy\u017e ka\u017ed\u00e9 vl\u00e1kno dr\u017e\u00ed jeden zdroj a sou\u010dasn\u011b \u010dek\u00e1 na p\u0159id\u011blen\u00ed druh\u00e9ho zdroje, kter\u00fd dr\u017e\u00ed druh\u00e9 vl\u00e1kno. Tento cyklick\u00fd stav \u010dek\u00e1n\u00ed zp\u016fsob\u00ed, \u017ee se ob\u011b vl\u00e1kna zablokuj\u00ed na neur\u010dito, a nemohou tak dokon\u010dit svou pr\u00e1ci, co\u017e vy\u017eaduje extern\u00ed intervenci pro obnoven\u00ed provozu.",
        incorrect:
          "Uv\u00e1znut\u00ed mezi dv\u011bma vl\u00e1kny a dv\u011bma zdroji nast\u00e1v\u00e1 tehdy, kdy\u017e ka\u017ed\u00e9 vl\u00e1kno dr\u017e\u00ed oba zdroje a sou\u010dasn\u011b \u010dek\u00e1 na p\u0159id\u011blen\u00ed dal\u0161\u00edch zdroj\u016f. Tento stav \u010dek\u00e1n\u00ed je v\u0161ak pouze do\u010dasn\u00fd a opera\u010dn\u00ed syst\u00e9m automaticky uvoln\u00ed zdroje a obnov\u00ed norm\u00e1ln\u00ed provoz syst\u00e9mu bez jak\u00e9hokoli vn\u011bj\u0161\u00edho z\u00e1sahu.",
        sectionNumber: "7.4.1",
        sectionTitle: "Uv\u00e1znut\u00ed",
      },
      {
        uuid: "89a421a0-a75b-4623-bb68-5f58bc1cc041",
        correct:
          "I kdy\u017e po\u017eadavky vl\u00e1ken P a Q na zdroje A a B nejsou zcela soub\u011b\u017en\u00e9, m\u016f\u017ee doj\u00edt k uv\u00e1znut\u00ed, pokud \u010dasov\u00e1n\u00ed p\u0159id\u011blov\u00e1n\u00ed zdroj\u016f a n\u00e1sledn\u00fdch po\u017eadavk\u016f vytvo\u0159\u00ed cyklickou z\u00e1vislost. To znamen\u00e1, \u017ee uv\u00e1znut\u00ed nen\u00ed v\u00fdhradn\u011b z\u00e1visl\u00e9 na p\u0159esn\u00e9 soub\u011b\u017enosti po\u017eadavk\u016f, ale sp\u00ed\u0161e na celkov\u00e9m stavu p\u0159id\u011blen\u00ed zdroj\u016f a po\u017eadavk\u016f vl\u00e1ken.",
        incorrect:
          "Uv\u00e1znut\u00ed m\u016f\u017ee nastat pouze tehdy, kdy\u017e jsou po\u017eadavky vl\u00e1ken P a Q na zdroje A a B dokonale soub\u011b\u017en\u00e9. Pokud po\u017eadavky nejsou soub\u011b\u017en\u00e9, opera\u010dn\u00ed syst\u00e9m je schopen efektivn\u011b \u0159\u00eddit p\u0159id\u011blov\u00e1n\u00ed zdroj\u016f a zamezit tak vzniku uv\u00e1znut\u00ed v jak\u00e9koli situaci, \u010d\u00edm\u017e se soub\u011b\u017enost st\u00e1v\u00e1 jedin\u00fdm faktorem pro uv\u00e1znut\u00ed.",
        sectionNumber: "7.4.1",
        sectionTitle: "Uv\u00e1znut\u00ed",
      },
      {
        uuid: "b72a1c8d-0e26-4309-b4db-7197e5e1ca3b",
        correct:
          "Podm\u00ednka vz\u00e1jemn\u00e9ho vylou\u010den\u00ed, kter\u00e1 je jednou ze \u010dty\u0159 nutn\u00fdch podm\u00ednek pro vznik uv\u00e1znut\u00ed v opera\u010dn\u00edch syst\u00e9mech, je p\u0159\u00edm\u00fdm d\u016fsledkem mechanismu rezervace zdroj\u016f.  Tato podm\u00ednka je spln\u011bna, kdy\u017e je zdroj v dan\u00e9m okam\u017eiku p\u0159id\u011blen maxim\u00e1ln\u011b jednomu vl\u00e1knu, co\u017e znamen\u00e1, \u017ee ostatn\u00ed vl\u00e1kna, kter\u00e1 o tento zdroj usiluj\u00ed, mus\u00ed nutn\u011b vy\u010dkat, dokud se zdroj neuvoln\u00ed.",
        incorrect:
          "Podm\u00ednka vz\u00e1jemn\u00e9ho vylou\u010den\u00ed, kter\u00e1 je kl\u00ed\u010dov\u00e1 pro prevenci uv\u00e1znut\u00ed v opera\u010dn\u00edch syst\u00e9mech, je zalo\u017eena na principu sd\u00edlen\u00ed zdroj\u016f mezi v\u00edce vl\u00e1kny sou\u010dasn\u011b. Tato podm\u00ednka je spln\u011bna, kdy\u017e je zdroj v dan\u00e9m okam\u017eiku p\u0159id\u011blen v\u00edce vl\u00e1kn\u016fm, co\u017e umo\u017e\u0148uje maximalizovat paralelizmus a minimalizovat \u010dekac\u00ed doby vl\u00e1ken.",
        sectionNumber: "7.4.2",
        sectionTitle: "Podm\u00ednky uv\u00e1znut\u00ed",
      },
      {
        uuid: "786e95a0-68f0-405d-b632-fedea6b3c812",
        correct:
          "Podm\u00ednka \u201e\u010dekaj\u00edc\u00ed vlastn\u00edk\u201c, nezbytn\u00e1 pro vznik uv\u00e1znut\u00ed, nast\u00e1v\u00e1 v situaci, kdy vl\u00e1kno dr\u017e\u00ed ji\u017e p\u0159id\u011blen\u00fd zdroj a sou\u010dasn\u011b \u010dek\u00e1 na p\u0159id\u011blen\u00ed dal\u0161\u00edho zdroje, kter\u00fd je moment\u00e1ln\u011b dr\u017een jin\u00fdm vl\u00e1knem. Tato situace je obt\u00ed\u017en\u011b \u0159e\u0161iteln\u00e1, proto\u017ee predikce budouc\u00edch po\u017eadavk\u016f vl\u00e1ken na zdroje je komplexn\u00ed a statick\u00e1 alokace v\u0161ech potenci\u00e1ln\u011b pot\u0159ebn\u00fdch zdroj\u016f by vedla k neefektivn\u00edmu vyu\u017eit\u00ed syst\u00e9mu.",
        incorrect:
          "Podm\u00ednka \u201e\u010dekaj\u00edc\u00ed vlastn\u00edk\u201c, kter\u00e1 zabra\u0148uje uv\u00e1znut\u00ed, nast\u00e1v\u00e1, kdy\u017e vl\u00e1kno nem\u016f\u017ee dr\u017eet \u017e\u00e1dn\u00fd zdroj, pokud sou\u010dasn\u011b ne\u010dek\u00e1 na p\u0159id\u011blen\u00ed jin\u00e9ho zdroje.  T\u00edmto se zaji\u0161\u0165uje, \u017ee vl\u00e1kna uvol\u0148uj\u00ed zdroje ihned, jakmile na n\u011b p\u0159estanou aktivn\u011b \u010dekat, co\u017e eliminuje mo\u017enost vzniku cyklick\u00e9ho \u010dek\u00e1n\u00ed a uv\u00e1znut\u00ed.",
        sectionNumber: "7.4.2",
        sectionTitle: "Podm\u00ednky uv\u00e1znut\u00ed",
      },
      {
        uuid: "0767bee3-90c4-482d-8b5c-1fbfbe7cc290",
        correct:
          "Podm\u00ednka neodn\u00edmatelnosti, kter\u00e1 p\u0159isp\u00edv\u00e1 k uv\u00e1znut\u00ed, definuje, \u017ee ji\u017e p\u0159id\u011blen\u00fd zdroj nem\u016f\u017ee b\u00fdt vl\u00e1knu odebr\u00e1n bez z\u00e1va\u017en\u00fdch d\u016fsledk\u016f. Tato vlastnost \u010dasto vypl\u00fdv\u00e1 z povahy samotn\u00e9ho zdroje, nap\u0159\u00edklad u z\u00e1mk\u016f mutex, kde n\u00e1siln\u00e9 odebr\u00e1n\u00ed zdroje m\u016f\u017ee v\u00e9st k nekonzistenci dat nebo naru\u0161en\u00ed integrity kritick\u00e9 sekce, kterou chr\u00e1n\u00ed.",
        incorrect:
          "Podm\u00ednka neodn\u00edmatelnosti, kter\u00e1 je kl\u00ed\u010dov\u00e1 pro efektivn\u00ed spr\u00e1vu zdroj\u016f, zaji\u0161\u0165uje, \u017ee opera\u010dn\u00ed syst\u00e9m m\u016f\u017ee dynamicky odeb\u00edrat zdroje vl\u00e1kn\u016fm, kter\u00e1 je moment\u00e1ln\u011b nevyu\u017e\u00edvaj\u00ed. Tato flexibilita umo\u017e\u0148uje optimalizovat vyu\u017eit\u00ed zdroj\u016f a p\u0159edch\u00e1zet situac\u00edm, kdy by vl\u00e1kna dr\u017eela zdroje zbyte\u010dn\u011b dlouho, a t\u00edm blokovala ostatn\u00ed vl\u00e1kna.",
        sectionNumber: "7.4.2",
        sectionTitle: "Podm\u00ednky uv\u00e1znut\u00ed",
      },
      {
        uuid: "b5bc9b12-0fe3-42a9-905d-71441c95ee64",
        correct:
          "Podm\u00ednka kruhov\u00e9ho \u010dek\u00e1n\u00ed, esenci\u00e1ln\u00ed pro vznik uv\u00e1znut\u00ed, je detekovateln\u00e1 pomoc\u00ed statick\u00e9ho grafu z\u00e1vislost\u00ed zdroj\u016f, kde hrana z R do S indikuje, \u017ee existuje vl\u00e1kno, kter\u00e9 m\u016f\u017ee po\u017eadovat zdroj S, kdy\u017e u\u017e dr\u017e\u00ed zdroj R. Kruhov\u00e9 \u010dek\u00e1n\u00ed je spln\u011bno, pokud v tomto grafu existuje cyklus, co\u017e signalizuje vz\u00e1jemnou blokaci vl\u00e1ken \u010dekaj\u00edc\u00edch na zdroje dr\u017een\u00e9 jin\u00fdmi vl\u00e1kny v cyklu.",
        incorrect:
          "Podm\u00ednka kruhov\u00e9ho \u010dek\u00e1n\u00ed, kter\u00e1 efektivn\u011b p\u0159edch\u00e1z\u00ed uv\u00e1znut\u00ed, je zalo\u017eena na dynamick\u00e9m grafu alokace zdroj\u016f, kde cyklus v grafu indikuje, \u017ee syst\u00e9m aktivn\u011b detekuje a \u0159e\u0161\u00ed potenci\u00e1ln\u00ed uv\u00e1znut\u00ed. Opera\u010dn\u00ed syst\u00e9m pravideln\u011b analyzuje tento graf a v p\u0159\u00edpad\u011b detekce cyklu dynamicky p\u0159erozd\u011bluje zdroje, \u010d\u00edm\u017e proaktivn\u011b zabra\u0148uje vzniku uv\u00e1znut\u00ed.",
        sectionNumber: "7.4.2",
        sectionTitle: "Podm\u00ednky uv\u00e1znut\u00ed",
      },
      {
        uuid: "1b3e27f6-9a64-4171-b51e-f68695c5f080",
        correct:
          "Uv\u00e1znut\u00ed, jako\u017eto d\u016fsledek hazardu soub\u011bhu, se m\u016f\u017ee projevovat velmi z\u0159\u00eddka, co\u017e je vlastnost, kterou P\u0161tros\u00ed algoritmus c\u00edlen\u011b vyu\u017e\u00edv\u00e1 ve sv\u00e9m p\u0159\u00edstupu k \u0159e\u0161en\u00ed tohoto probl\u00e9mu t\u00edm, \u017ee v p\u0159\u00edpad\u011b detekce uv\u00e1znut\u00ed jednodu\u0161e restartuje cel\u00fd syst\u00e9m nebo ukon\u010d\u00ed dot\u010den\u00e9 procesy, a spol\u00e9h\u00e1 se na n\u00edzkou pravd\u011bpodobnost v\u00fdskytu uv\u00e1znut\u00ed v re\u00e1ln\u00e9m provozu.",
        incorrect:
          "Uv\u00e1znut\u00ed, jako\u017eto d\u016fsledek chyb v k\u00f3du, se projevuje velmi \u010dasto, co\u017e je vlastnost, kterou P\u0161tros\u00ed algoritmus c\u00edlen\u011b vyu\u017e\u00edv\u00e1 ve sv\u00e9m p\u0159\u00edstupu k \u0159e\u0161en\u00ed tohoto probl\u00e9mu t\u00edm, \u017ee v p\u0159\u00edpad\u011b detekce uv\u00e1znut\u00ed se sna\u017e\u00ed uv\u00e1znut\u00ed elegantn\u011b vy\u0159e\u0161it sofistikovan\u00fdmi mechanismy, a spol\u00e9h\u00e1 se na vysokou pravd\u011bpodobnost v\u00fdskytu uv\u00e1znut\u00ed v re\u00e1ln\u00e9m provozu.",
        sectionNumber: "7.4.3",
        sectionTitle: "P\u0161tros\u00ed algoritmus",
      },
      {
        uuid: "f3dfb8d9-fa94-4b37-9ddf-e320c576c6b9",
        correct:
          "P\u0161tros\u00ed algoritmus, efektivn\u00ed strategie pro \u0159e\u0161en\u00ed uv\u00e1znut\u00ed, se op\u00edr\u00e1 o p\u0159edpoklad, \u017ee v\u00fdskyt uv\u00e1znut\u00ed je v praxi relativn\u011b vz\u00e1cn\u00fd jev, a proto v p\u0159\u00edpad\u011b, kdy uv\u00e1znut\u00ed nastane, se uchyluje k radik\u00e1ln\u00edmu \u0159e\u0161en\u00ed, jako je restart cel\u00e9ho syst\u00e9mu, nam\u00edsto implementace slo\u017eit\u00fdch mechanism\u016f pro detekci a obnovu z uv\u00e1znut\u00ed.",
        incorrect:
          "P\u0161tros\u00ed algoritmus, efektivn\u00ed strategie pro \u0159e\u0161en\u00ed uv\u00e1znut\u00ed, se op\u00edr\u00e1 o p\u0159edpoklad, \u017ee v\u00fdskyt uv\u00e1znut\u00ed je v praxi velmi \u010dast\u00fd jev, a proto v p\u0159\u00edpad\u011b, kdy uv\u00e1znut\u00ed nastane, se uchyluje k sofistikovan\u00e9mu \u0159e\u0161en\u00ed, jako je detailn\u00ed anal\u00fdza stavu syst\u00e9mu a n\u00e1sledn\u00e1 obnova z uv\u00e1znut\u00ed bez nutnosti restartu syst\u00e9mu.",
        sectionNumber: "7.4.3",
        sectionTitle: "P\u0161tros\u00ed algoritmus",
      },
      {
        uuid: "d1eb53a8-889d-4fe2-a963-c00446f9dfd9",
        correct:
          "Rozhodnut\u00ed, zda v syst\u00e9mu skute\u010dn\u011b do\u0161lo k uv\u00e1znut\u00ed, m\u016f\u017ee b\u00fdt v mnoha p\u0159\u00edpadech obt\u00ed\u017en\u00e9 a nejednozna\u010dn\u00e9, a proto se P\u0161tros\u00ed algoritmus z\u00e1m\u011brn\u011b vyh\u00fdb\u00e1 slo\u017eit\u00e9 detekci uv\u00e1znut\u00ed a spol\u00e9h\u00e1 se na extern\u00ed indikaci probl\u00e9mu, nap\u0159\u00edklad nereaguj\u00edc\u00ed syst\u00e9m, kdy je rozhodnut\u00ed o existenci uv\u00e1znut\u00ed delegov\u00e1no na u\u017eivatele, kter\u00fd m\u016f\u017ee syst\u00e9m restartovat.",
        incorrect:
          "Rozhodnut\u00ed, zda v syst\u00e9mu skute\u010dn\u011b do\u0161lo k uv\u00e1znut\u00ed, je obvykle trivi\u00e1ln\u00ed a jednozna\u010dn\u00e9, a proto se P\u0161tros\u00ed algoritmus aktivn\u011b sna\u017e\u00ed o automatickou a spolehlivou detekci uv\u00e1znut\u00ed pomoc\u00ed komplexn\u00edch algoritm\u016f, p\u0159i\u010dem\u017e se zcela vyh\u00fdb\u00e1 spol\u00e9h\u00e1n\u00ed na extern\u00ed indikaci probl\u00e9mu nebo delegov\u00e1n\u00ed rozhodnut\u00ed o uv\u00e1znut\u00ed na u\u017eivatele.",
        sectionNumber: "7.4.3",
        sectionTitle: "P\u0161tros\u00ed algoritmus",
      },
      {
        uuid: "3d80c4a7-ec4c-464d-9921-695fdc5b5a1f",
        correct:
          "Detekce uv\u00e1znut\u00ed v syst\u00e9mech s opera\u010dn\u00edm syst\u00e9mem se \u010dasto prov\u00e1d\u00ed pomoc\u00ed dynamick\u00e9 varianty grafu z\u00e1vislost\u00ed zdroj\u016f, kter\u00fd modeluje vztahy mezi vl\u00e1kny a zdroji. V tomto grafu existuj\u00ed dva typy uzl\u016f: vl\u00e1kna a zdroje. Hrana sm\u011b\u0159uj\u00edc\u00ed od zdroje k vl\u00e1knu indikuje, \u017ee vl\u00e1kno vlastn\u00ed zdroj, zat\u00edmco hrana od vl\u00e1kna ke zdroji zna\u010d\u00ed, \u017ee vl\u00e1kno \u010dek\u00e1 na p\u0159id\u011blen\u00ed dan\u00e9ho zdroje.",
        incorrect:
          "Detekce uv\u00e1znut\u00ed v syst\u00e9mech s opera\u010dn\u00edm syst\u00e9mem se obvykle prov\u00e1d\u00ed kontrolou grafu z\u00e1vislost\u00ed zdroj\u016f, kter\u00fd je statick\u00fd a nem\u011bn\u00ed se v pr\u016fb\u011bhu b\u011bhu syst\u00e9mu. Tento graf obsahuje pouze uzly reprezentuj\u00edc\u00ed zdroje a hrany mezi nimi indikuj\u00ed, kter\u00e9 zdroje jsou navz\u00e1jem z\u00e1visl\u00e9. Cyklus v tomto grafu indikuje potenci\u00e1ln\u00ed uv\u00e1znut\u00ed, ale pro detekci aktu\u00e1ln\u00edho uv\u00e1znut\u00ed je nutn\u00e9 prov\u00e9st dal\u0161\u00ed anal\u00fdzu b\u011bhu syst\u00e9mu.",
        sectionNumber: "7.4.4",
        sectionTitle: "Detekce uv\u00e1znut\u00ed",
      },
      {
        uuid: "beafb338-c324-4ae1-b0e8-339ea577cce2",
        correct:
          "V grafu z\u00e1vislost\u00ed zdroj\u016f, pou\u017e\u00edvan\u00e9m pro detekci uv\u00e1znut\u00ed, cyklus p\u0159edstavuje stav uv\u00e1znut\u00ed. Konkr\u00e9tn\u011b, pokud graf obsahuje cyklus, v\u0161echna vl\u00e1kna, kter\u00e1 jsou sou\u010d\u00e1st\u00ed tohoto cyklu, jsou uv\u00e1zl\u00e1. Tento detek\u010dn\u00ed mechanismus je efektivn\u00ed pro zdroje s jedinou instanc\u00ed, jako jsou mutexy chr\u00e1n\u00edc\u00ed kritick\u00e9 sekce, proto\u017ee pro zdroje s v\u00edce instancemi je nutn\u00e9 pou\u017e\u00edt slo\u017eit\u011bj\u0161\u00ed algoritmy, kter\u00e9 se v praxi ale b\u011b\u017en\u011b nepou\u017e\u00edvaj\u00ed.",
        incorrect:
          "Graf z\u00e1vislost\u00ed zdroj\u016f pro detekci uv\u00e1znut\u00ed je \u00fa\u010dinn\u00fd pro v\u0161echny typy zdroj\u016f, v\u010detn\u011b t\u011bch s v\u00edce instancemi. Cyklus v tomto grafu v\u017edy indikuje uv\u00e1znut\u00ed, a to bez ohledu na to, zda zdroje v cyklu maj\u00ed jednu nebo v\u00edce instanc\u00ed. Pro zdroje s v\u00edce instancemi je detekce uv\u00e1znut\u00ed dokonce jednodu\u0161\u0161\u00ed, proto\u017ee graf se st\u00e1v\u00e1 m\u00e9n\u011b komplexn\u00edm a cykly jsou sn\u00e1ze identifikovateln\u00e9.",
        sectionNumber: "7.4.4",
        sectionTitle: "Detekce uv\u00e1znut\u00ed",
      },
      {
        uuid: "e7f9c81b-b22c-4495-ad2c-29a3c33b36d4",
        correct:
          "Dynamick\u00fd graf z\u00e1vislost\u00ed zdroj\u016f, pou\u017e\u00edvan\u00fd pro detekci uv\u00e1znut\u00ed, se skl\u00e1d\u00e1 z uzl\u016f reprezentuj\u00edc\u00edch vl\u00e1kna a zdroje. Hrana sm\u011b\u0159uj\u00edc\u00ed od vl\u00e1kna k zdroji indikuje, \u017ee vl\u00e1kno \u010dek\u00e1 na tento zdroj, zat\u00edmco hrana od zdroje k vl\u00e1knu indikuje, \u017ee vl\u00e1kno zdroj vlastn\u00ed. Existence cyklu v tomto grafu je spolehliv\u00fdm indik\u00e1torem uv\u00e1znut\u00ed, a plat\u00ed, \u017ee ka\u017ed\u00fd cyklus v grafu z\u00e1vislost\u00ed zdroj\u016f mus\u00ed m\u00edt sudou d\u00e9lku a obsahovat minim\u00e1ln\u011b \u010dty\u0159i hrany.",
        incorrect:
          "V kontextu detekce uv\u00e1znut\u00ed pomoc\u00ed grafu z\u00e1vislost\u00ed zdroj\u016f, hrana sm\u011b\u0159uj\u00edc\u00ed od vl\u00e1kna k zdroji indikuje, \u017ee vl\u00e1kno vlastn\u00ed dan\u00fd zdroj, a hrana od zdroje k vl\u00e1knu zna\u010d\u00ed, \u017ee vl\u00e1kno o zdroj \u017e\u00e1d\u00e1. Cyklus v tomto grafu nazna\u010duje potenci\u00e1ln\u00ed probl\u00e9m s alokac\u00ed zdroj\u016f, ale nemus\u00ed nutn\u011b znamenat uv\u00e1znut\u00ed. Pro potvrzen\u00ed uv\u00e1znut\u00ed je nutn\u00e9 analyzovat dal\u0161\u00ed faktory, jako je priorita vl\u00e1ken a dostupnost dal\u0161\u00edch syst\u00e9mov\u00fdch zdroj\u016f.",
        sectionNumber: "7.4.4",
        sectionTitle: "Detekce uv\u00e1znut\u00ed",
      },
      {
        uuid: "62686539-74ba-491e-9e56-2df7220ac183",
        correct:
          "\u00da\u010dastn\u00ed-li se cyklick\u00e9ho \u010dek\u00e1n\u00ed alespo\u0148 jeden odn\u00edmateln\u00fd zdroj, syst\u00e9m se m\u016f\u017ee z uv\u00e1znut\u00ed zotavit do\u010dasn\u00fdm odebr\u00e1n\u00edm tohoto zdroje, \u010d\u00edm\u017e se p\u0159eru\u0161\u00ed cyklus \u010dekaj\u00edc\u00edch vl\u00e1ken a umo\u017en\u00ed se pokra\u010dov\u00e1n\u00ed syst\u00e9mu bez nutnosti n\u00e1siln\u00e9ho ukon\u010dov\u00e1n\u00ed proces\u016f, co\u017e je efektivn\u011bj\u0161\u00ed \u0159e\u0161en\u00ed ne\u017e restart cel\u00e9ho syst\u00e9mu.",
        incorrect:
          "\u00da\u010dastn\u00ed-li se cyklick\u00e9ho \u010dek\u00e1n\u00ed alespo\u0148 jeden odn\u00edmateln\u00fd zdroj, syst\u00e9m se nem\u016f\u017ee z uv\u00e1znut\u00ed zotavit bez n\u00e1siln\u00e9ho ukon\u010den\u00ed alespo\u0148 jednoho procesu \u00fa\u010dastn\u00edc\u00edho se cyklu, proto\u017ee odebr\u00e1n\u00ed odn\u00edmateln\u00e9ho zdroje nep\u0159eru\u0161\u00ed cyklus \u010dekaj\u00edc\u00edch vl\u00e1ken a situace vy\u017eaduje radik\u00e1ln\u011bj\u0161\u00ed z\u00e1sah, jako je restart cel\u00e9ho syst\u00e9mu.",
        sectionNumber: "7.4.5",
        sectionTitle: "Zotaven\u00ed z\u00a0uv\u00e1znut\u00ed",
      },
      {
        uuid: "4cfff62b-5e66-4c9b-97e2-e0eadc8cae65",
        correct:
          "Pokud se cyklick\u00e9ho \u010dek\u00e1n\u00ed \u00fa\u010dastn\u00ed pouze neodn\u00edmateln\u00e9 zdroje a nelze prov\u00e9st rollback transakc\u00ed, jedin\u00fdm zb\u00fdvaj\u00edc\u00edm efektivn\u00edm zp\u016fsobem, jak se z uv\u00e1znut\u00ed zotavit bez restartov\u00e1n\u00ed cel\u00e9ho syst\u00e9mu, je n\u00e1siln\u00e9 ukon\u010den\u00ed jednoho z proces\u016f, kter\u00e9 se cyklu \u00fa\u010dastn\u00ed, a uvoln\u011bn\u00ed tak alespo\u0148 jednoho zdroje pro dal\u0161\u00ed procesy.",
        incorrect:
          "Pokud se cyklick\u00e9ho \u010dek\u00e1n\u00ed \u00fa\u010dastn\u00ed pouze neodn\u00edmateln\u00e9 zdroje, nejefektivn\u011bj\u0161\u00edm a preferovan\u00fdm zp\u016fsobem zotaven\u00ed z uv\u00e1znut\u00ed je v\u017edy restart cel\u00e9ho syst\u00e9mu, proto\u017ee n\u00e1siln\u00e9 ukon\u010dov\u00e1n\u00ed jednotliv\u00fdch proces\u016f je p\u0159\u00edli\u0161 riskantn\u00ed a m\u016f\u017ee v\u00e9st k nestabilit\u011b syst\u00e9mu a ztr\u00e1t\u011b dat, zat\u00edmco rollback transakc\u00ed je v\u017edy dostupn\u00fd a spolehliv\u00fd mechanismus.",
        sectionNumber: "7.4.5",
        sectionTitle: "Zotaven\u00ed z\u00a0uv\u00e1znut\u00ed",
      },
      {
        uuid: "140786b4-462b-4a74-a994-44e15e86ce1c",
        correct:
          'Strategie vyh\u00fdb\u00e1n\u00ed se uv\u00e1znut\u00ed, jako je bank\u00e9\u0159\u016fv algoritmus, se prim\u00e1rn\u011b zam\u011b\u0159uje na prevenci potenci\u00e1ln\u00edch uv\u00e1znut\u00ed strategick\u00fdm zam\u00edt\u00e1n\u00edm n\u011bkter\u00fdch po\u017eadavk\u016f na rezervaci zdroj\u016f, i kdy\u017e jsou zdroje moment\u00e1ln\u011b dostupn\u00e9. Kl\u00ed\u010dov\u00fdm principem je udr\u017eov\u00e1n\u00ed syst\u00e9mu v "bezpe\u010dn\u00e9m stavu", kde je zaru\u010deno, \u017ee alespo\u0148 jedno vl\u00e1kno m\u016f\u017ee dokon\u010dit sv\u016fj b\u011bh a uvolnit zdroje, \u010d\u00edm\u017e se zajist\u00ed celkov\u00e1 syst\u00e9mov\u00e1 stabilita a zabr\u00e1n\u00ed se vzniku uv\u00e1znut\u00ed.',
        incorrect:
          "Strategie vyh\u00fdb\u00e1n\u00ed se uv\u00e1znut\u00ed, jako je bank\u00e9\u0159\u016fv algoritmus, se prim\u00e1rn\u011b zam\u011b\u0159uje na maximalizaci vyu\u017eit\u00ed zdroj\u016f t\u00edm, \u017ee p\u0159ij\u00edm\u00e1 co nejv\u00edce po\u017eadavk\u016f na rezervace, dokud nejsou zdroje zcela vy\u010derp\u00e1ny. I kdy\u017e jsou zdroje moment\u00e1ln\u011b dostupn\u00e9, algoritmus up\u0159ednost\u0148uje jejich okam\u017eit\u00e9 p\u0159id\u011blen\u00ed, aby se zv\u00fd\u0161ila propustnost syst\u00e9mu a minimalizovalo se \u010dek\u00e1n\u00ed vl\u00e1ken, bez ohledu na potenci\u00e1ln\u00ed budouc\u00ed riziko uv\u00e1znut\u00ed.",
        sectionNumber: "7.4.6",
        sectionTitle: "Vyh\u00fdb\u00e1n\u00ed uv\u00e1znut\u00ed",
      },
      {
        uuid: "54028c04-08bd-4ad2-a4c4-abce6d5d11af",
        correct:
          "Bank\u00e9\u0159\u016fv algoritmus, coby reprezentant techniky vyh\u00fdb\u00e1n\u00ed se uv\u00e1znut\u00ed, klade z\u00e1sadn\u00ed d\u016fraz na znalost maxim\u00e1ln\u00edch po\u017eadavk\u016f ka\u017ed\u00e9ho vl\u00e1kna na zdroje je\u0161t\u011b p\u0159ed samotn\u00fdm zah\u00e1jen\u00edm jeho b\u011bhu. Tato vstupn\u00ed informace o maxim\u00e1ln\u00edch n\u00e1roc\u00edch je pro algoritmus kl\u00ed\u010dov\u00e1, nebo\u0165 mu umo\u017e\u0148uje ex ante analyzovat potenci\u00e1ln\u00ed dopad ka\u017ed\u00e9 alokace zdroj\u016f a posoudit, zda by p\u0159id\u011blen\u00ed zdroj\u016f dan\u00e9mu vl\u00e1knu neohrozilo bezpe\u010dnost syst\u00e9mu a nemohlo v\u00e9st k uv\u00e1znut\u00ed v budoucnu.",
        incorrect:
          "Bank\u00e9\u0159\u016fv algoritmus pro vyh\u00fdb\u00e1n\u00ed se uv\u00e1znut\u00ed se obejde bez p\u0159edchoz\u00ed znalosti maxim\u00e1ln\u00edch po\u017eadavk\u016f vl\u00e1ken na zdroje. Algoritmus operuje dynamicky, alokuje zdroje na z\u00e1klad\u011b aktu\u00e1ln\u00ed dostupnosti a bezprost\u0159edn\u00edch pot\u0159eb vl\u00e1ken, a spol\u00e9h\u00e1 se na kontinu\u00e1ln\u00ed monitorov\u00e1n\u00ed stavu syst\u00e9mu a adaptabiln\u00ed predikci budouc\u00edho vyu\u017eit\u00ed zdroj\u016f, ani\u017e by vy\u017eadoval pevnou znalost maxim\u00e1ln\u00edch po\u017eadavk\u016f vl\u00e1ken p\u0159edem.",
        sectionNumber: "7.4.6",
        sectionTitle: "Vyh\u00fdb\u00e1n\u00ed uv\u00e1znut\u00ed",
      },
      {
        uuid: "7e62476f-31a1-4c49-a695-d52e8621fe73",
        correct:
          "Mechanismus vyh\u00fdb\u00e1n\u00ed se uv\u00e1znut\u00ed, jak je pops\u00e1n v p\u0159edchoz\u00ed sekci, je v mnoha praktick\u00fdch situac\u00edch obt\u00ed\u017en\u011b pou\u017eiteln\u00fd, zejm\u00e9na proto, \u017ee mnoho syst\u00e9mov\u00fdch zdroj\u016f m\u00e1 pouze jednu instanci, co\u017e v kombinaci s bank\u00e9\u0159ov\u00fdm algoritmem m\u016f\u017ee v\u00e9st k omezen\u00ed soub\u011b\u017en\u00e9ho vyu\u017e\u00edv\u00e1n\u00ed zdroj\u016f v\u00edce vl\u00e1kny.",
        incorrect:
          "Mechanismus vyh\u00fdb\u00e1n\u00ed se uv\u00e1znut\u00ed, zalo\u017een\u00fd na principu bank\u00e9\u0159ova algoritmu, je ve v\u011bt\u0161in\u011b praktick\u00fdch situac\u00ed velmi efektivn\u00ed a \u0161iroce pou\u017e\u00edvan\u00fd, proto\u017ee umo\u017e\u0148uje optim\u00e1ln\u011b alokovat zdroje a maximalizovat soub\u011b\u017enost b\u011bhu vl\u00e1ken v opera\u010dn\u00edm syst\u00e9mu.",
        sectionNumber: "7.4.7",
        sectionTitle: "Zamezen\u00ed uv\u00e1znut\u00ed",
      },
      {
        uuid: "971e88b1-3a88-4a3f-bf8e-a6ed9ca5774c",
        correct:
          'Pro vznik uv\u00e1znut\u00ed v opera\u010dn\u00edm syst\u00e9mu je nutn\u00e9, aby sou\u010dasn\u011b platily \u010dty\u0159i specifick\u00e9 podm\u00ednky, a to "\u010dekaj\u00edc\u00ed vlastn\u00edk", "vz\u00e1jemn\u00e9 vylou\u010den\u00ed", "kruhov\u00e9 \u010dek\u00e1n\u00ed" a je\u0161t\u011b jedna dal\u0161\u00ed podm\u00ednka, kter\u00e1 z textu bohu\u017eel nen\u00ed p\u0159\u00edmo zm\u00edn\u011bna, ale je sou\u010d\u00e1st\u00ed standardn\u00edho v\u00fd\u010dtu podm\u00ednek uv\u00e1znut\u00ed.',
        incorrect:
          'K uv\u00e1znut\u00ed v opera\u010dn\u00edm syst\u00e9mu m\u016f\u017ee doj\u00edt i v p\u0159\u00edpad\u011b, \u017ee jsou spln\u011bny pouze t\u0159i z nutn\u00fdch podm\u00ednek, konkr\u00e9tn\u011b "\u010dekaj\u00edc\u00ed vlastn\u00edk", "vz\u00e1jemn\u00e9 vylou\u010den\u00ed" a "kruhov\u00e9 \u010dek\u00e1n\u00ed", p\u0159i\u010dem\u017e \u010dtvrt\u00e1 podm\u00ednka, i kdy\u017e obvykle p\u0159\u00edtomn\u00e1, nen\u00ed pro samotn\u00fd vznik uv\u00e1znut\u00ed kritick\u00e1.',
        sectionNumber: "7.4.7",
        sectionTitle: "Zamezen\u00ed uv\u00e1znut\u00ed",
      },
      {
        uuid: "21a0f7b6-9a83-4edf-aabe-367fa2fc4e0d",
        correct:
          'Zamezen\u00ed uv\u00e1znut\u00ed v opera\u010dn\u00edm syst\u00e9mu je mo\u017en\u00e9 dos\u00e1hnout eliminac\u00ed alespo\u0148 jedn\u00e9 ze \u010dty\u0159 nutn\u00fdch podm\u00ednek, kter\u00e9 mus\u00ed b\u00fdt spln\u011bny sou\u010dasn\u011b, aby k uv\u00e1znut\u00ed do\u0161lo.  Konkr\u00e9tn\u011b, pokud se n\u00e1m poda\u0159\u00ed zamezit podm\u00ednce "kruhov\u00e9 \u010dek\u00e1n\u00ed" glob\u00e1ln\u00edm uspo\u0159\u00e1d\u00e1n\u00edm zdroj\u016f, uv\u00e1znut\u00ed se vyhneme.',
        incorrect:
          "Zamezen\u00ed uv\u00e1znut\u00ed v opera\u010dn\u00edm syst\u00e9mu vy\u017eaduje eliminaci alespo\u0148 dvou ze \u010dty\u0159 nutn\u00fdch podm\u00ednek sou\u010dasn\u011b, proto\u017ee pouh\u00e9 odstran\u011bn\u00ed jedn\u00e9 podm\u00ednky obvykle nesta\u010d\u00ed k prevenci uv\u00e1znut\u00ed v komplexn\u00edch syst\u00e9mech s mnoha vz\u00e1jemn\u011b z\u00e1visl\u00fdmi procesy.",
        sectionNumber: "7.4.7",
        sectionTitle: "Zamezen\u00ed uv\u00e1znut\u00ed",
      },
      {
        uuid: "2bff2823-df5f-4a85-80f0-0e1d9c629176",
        correct:
          "My\u0161lenka p\u0159edrezervace zdroj\u016f v opera\u010dn\u00edch syst\u00e9mech spo\u010d\u00edv\u00e1 v zamezen\u00ed situace, kdy vl\u00e1kno, kter\u00e9 ji\u017e vlastn\u00ed n\u011bjak\u00fd zdroj, mus\u00ed \u010dekat na p\u0159id\u011blen\u00ed dal\u0161\u00edho zdroje, \u010d\u00edm\u017e se p\u0159edch\u00e1z\u00ed potenci\u00e1ln\u00edmu uv\u00e1znut\u00ed syst\u00e9mu a zaji\u0161\u0165uje se efektivn\u011bj\u0161\u00ed vyu\u017eit\u00ed syst\u00e9mov\u00fdch prost\u0159edk\u016f.",
        incorrect:
          "My\u0161lenka p\u0159edrezervace zdroj\u016f v opera\u010dn\u00edch syst\u00e9mech spo\u010d\u00edv\u00e1 v umo\u017en\u011bn\u00ed situace, kdy vl\u00e1kno, kter\u00e9 ji\u017e vlastn\u00ed n\u011bjak\u00fd zdroj, m\u016f\u017ee \u010dekat na p\u0159id\u011blen\u00ed dal\u0161\u00edho zdroje, co\u017e je b\u011b\u017en\u00e1 praxe pro optimalizaci vyu\u017eit\u00ed zdroj\u016f a minimalizaci re\u017eie spojen\u00e9 s uvol\u0148ov\u00e1n\u00edm a op\u011btovn\u00fdm z\u00edsk\u00e1v\u00e1n\u00edm zdroj\u016f.",
        sectionNumber: "7.4.8",
        sectionTitle: "Zamezen\u00ed p\u0159edrezervac\u00ed",
      },
      {
        uuid: "561d2690-7255-49c6-89dd-1e73d6b2599c",
        correct:
          "V kontextu p\u0159edrezervace zdroj\u016f opera\u010dn\u00ed syst\u00e9m povol\u00ed rezervaci po\u017eadovan\u00fdch zdroj\u016f pouze za p\u0159edpokladu, \u017ee \u017e\u00e1daj\u00edc\u00ed vl\u00e1kno aktu\u00e1ln\u011b nevlastn\u00ed \u017e\u00e1dn\u00e9 jin\u00e9 zdroje, co\u017e je kl\u00ed\u010dov\u00fd mechanismus pro zjednodu\u0161en\u00ed spr\u00e1vy zdroj\u016f a prevenci vzniku cyklick\u00fdch z\u00e1vislost\u00ed mezi vl\u00e1kny a zdroji.",
        incorrect:
          "V kontextu p\u0159edrezervace zdroj\u016f opera\u010dn\u00ed syst\u00e9m povol\u00ed rezervaci po\u017eadovan\u00fdch zdroj\u016f i v p\u0159\u00edpad\u011b, \u017ee \u017e\u00e1daj\u00edc\u00ed vl\u00e1kno aktu\u00e1ln\u011b vlastn\u00ed jin\u00e9 zdroje, za p\u0159edpokladu, \u017ee nov\u00e9 zdroje nejsou v konfliktu s ji\u017e vlastn\u011bn\u00fdmi zdroji, co\u017e umo\u017e\u0148uje flexibiln\u011bj\u0161\u00ed a efektivn\u011bj\u0161\u00ed spr\u00e1vu zdroj\u016f v syst\u00e9mu.",
        sectionNumber: "7.4.8",
        sectionTitle: "Zamezen\u00ed p\u0159edrezervac\u00ed",
      },
      {
        uuid: "688dee45-d7ba-4d27-9b0a-6d38a06922e4",
        correct:
          "Pro praktick\u00e9 vyu\u017eit\u00ed p\u0159edrezervace zdroj\u016f opera\u010dn\u00ed syst\u00e9my \u010dasto implementuj\u00ed d\u00e1vkovou rezervaci, kter\u00e1 umo\u017e\u0148uje vl\u00e1knu vy\u017e\u00e1dat si v\u0161echny pot\u0159ebn\u00e9 zdroje najednou v r\u00e1mci jedin\u00e9 atomick\u00e9 operace, a\u010dkoliv uvol\u0148ov\u00e1n\u00ed t\u011bchto zdroj\u016f m\u016f\u017ee prob\u00edhat postupn\u011b dle aktu\u00e1ln\u00ed pot\u0159eby vl\u00e1kna.",
        incorrect:
          "Pro praktick\u00e9 vyu\u017eit\u00ed p\u0159edrezervace zdroj\u016f opera\u010dn\u00ed syst\u00e9my vy\u017eaduj\u00ed, aby vl\u00e1kno vy\u017eadovalo zdroje postupn\u011b, jeden po druh\u00e9m, a to i v p\u0159\u00edpad\u011b, \u017ee vl\u00e1kno dop\u0159edu v\u00ed, \u017ee bude pot\u0159ebovat v\u00edce zdroj\u016f, p\u0159i\u010dem\u017e atomick\u00e1 operace pro vy\u017e\u00e1d\u00e1n\u00ed v\u00edce zdroj\u016f najednou nen\u00ed v tomto modelu podporov\u00e1na.",
        sectionNumber: "7.4.8",
        sectionTitle: "Zamezen\u00ed p\u0159edrezervac\u00ed",
      },
      {
        uuid: "a12b39e1-bdbf-45e3-9440-154d577b8756",
        correct:
          "Virtualizace zdroj\u016f, jako je tisk\u00e1rna, typicky vyu\u017e\u00edv\u00e1 mechanismu fronty po\u017eadavk\u016f, kde aplikace p\u0159istupuje k virtu\u00e1ln\u00ed tisk\u00e1rn\u011b, kter\u00e1 ukl\u00e1d\u00e1 tiskov\u00e9 \u00falohy do soubor\u016f a n\u00e1sledn\u011b je postupn\u011b odes\u00edl\u00e1 skute\u010dn\u00e9 tisk\u00e1rn\u011b, co\u017e umo\u017e\u0148uje sd\u00edlen\u00ed tiskov\u00e9ho za\u0159\u00edzen\u00ed mezi v\u00edce programy a zamezuje p\u0159\u00edm\u00e9mu konfliktu o tisk\u00e1rnu.",
        incorrect:
          "Virtualizace zdroj\u016f, jako je tisk\u00e1rna, typicky obch\u00e1z\u00ed mechanismus fronty po\u017eadavk\u016f a nam\u00edsto toho aplikace p\u0159\u00edmo p\u0159istupuj\u00ed k fyzick\u00e9 tisk\u00e1rn\u011b s v\u00fdhradn\u00edm p\u0159\u00edstupem, co\u017e zaji\u0161\u0165uje okam\u017eit\u00fd tisk, ale z\u00e1rove\u0148 efektivn\u011b umo\u017e\u0148uje sd\u00edlen\u00ed tiskov\u00e9ho za\u0159\u00edzen\u00ed mezi v\u00edce programy a minimalizuje potenci\u00e1ln\u00ed konflikty o tisk\u00e1rnu.",
        sectionNumber: "7.4.9",
        sectionTitle: "Zamezen\u00ed virtualizac\u00ed",
      },
      {
        uuid: "8d2256fa-089a-4ea6-97ac-8f227f10e15a",
        correct:
          "Podle textu, virtualizovan\u00e9 zdroje, jako nap\u0159\u00edklad procesor nebo pam\u011b\u0165, nepou\u017e\u00edvaj\u00ed syst\u00e9m v\u00fdlu\u010dn\u00e9 rezervace a samy o sob\u011b nemohou p\u0159\u00edmo zp\u016fsobit uv\u00e1znut\u00ed syst\u00e9mu, proto\u017ee nespl\u0148uj\u00ed podm\u00ednku vz\u00e1jemn\u00e9ho vylou\u010den\u00ed, kter\u00e1 je nutn\u00e1 pro vznik klasick\u00e9ho uv\u00e1znut\u00ed, jak bylo pops\u00e1no v \u00favodn\u00edch kapitol\u00e1ch.",
        incorrect:
          "Podle textu, virtualizovan\u00e9 zdroje, jako nap\u0159\u00edklad procesor nebo pam\u011b\u0165, b\u011b\u017en\u011b pou\u017e\u00edvaj\u00ed syst\u00e9m v\u00fdlu\u010dn\u00e9 rezervace a samy o sob\u011b mohou p\u0159\u00edmo a snadno zp\u016fsobit uv\u00e1znut\u00ed syst\u00e9mu, proto\u017ee pln\u011b spl\u0148uj\u00ed podm\u00ednku vz\u00e1jemn\u00e9ho vylou\u010den\u00ed, kter\u00e1 je kl\u00ed\u010dov\u00e1 pro vznik uv\u00e1znut\u00ed, jak je detailn\u011b pops\u00e1no v \u00favodn\u00edch kapitol\u00e1ch.",
        sectionNumber: "7.4.9",
        sectionTitle: "Zamezen\u00ed virtualizac\u00ed",
      },
      {
        uuid: "07df7112-c3de-4b49-a7a2-09f2523f9836",
        correct:
          "Text uv\u00e1d\u00ed, \u017ee virtualizace tisk\u00e1rny, zalo\u017een\u00e1 na ukl\u00e1d\u00e1n\u00ed tiskov\u00fdch \u00faloh do soubor\u016f, je teoreticky n\u00e1chyln\u00e1 na vy\u010derp\u00e1n\u00ed m\u00edsta na pevn\u00e9m disku, ale tento probl\u00e9m je pova\u017eov\u00e1n za relativn\u011b snadno \u0159e\u0161iteln\u00fd, zejm\u00e9na ve srovn\u00e1n\u00ed s potenci\u00e1ln\u00edmi probl\u00e9my spojen\u00fdmi s uv\u00e1znut\u00edm tisk\u00e1rny samotn\u00e9 a nutnost\u00ed ru\u0161it \u010d\u00e1ste\u010dn\u011b vyti\u0161t\u011bn\u00e9 \u00falohy.",
        incorrect:
          "Text uv\u00e1d\u00ed, \u017ee virtualizace tisk\u00e1rny, zalo\u017een\u00e1 na ukl\u00e1d\u00e1n\u00ed tiskov\u00fdch \u00faloh do soubor\u016f, je zcela imunn\u00ed v\u016f\u010di vy\u010derp\u00e1n\u00ed m\u00edsta na pevn\u00e9m disku a tento probl\u00e9m se v praxi nikdy nevyskytuje, co\u017e \u010din\u00ed virtualizaci tisk\u00e1ren absolutn\u011b bezprobl\u00e9movou z hlediska spr\u00e1vy \u00falo\u017en\u00e9ho prostoru a eliminuje jak\u00e9koli starosti o dostupn\u00e9 m\u00edsto.",
        sectionNumber: "7.4.9",
        sectionTitle: "Zamezen\u00ed virtualizac\u00ed",
      },
      {
        uuid: "fda67569-dc3b-4596-a685-8c270ccb0d5c",
        correct:
          "Zaveden\u00ed glob\u00e1ln\u00edho line\u00e1rn\u00edho uspo\u0159\u00e1d\u00e1n\u00ed zdroj\u016f efektivn\u011b p\u0159edch\u00e1z\u00ed uv\u00e1znut\u00ed v syst\u00e9mech t\u00edm, \u017ee c\u00edlen\u011b eliminuje podm\u00ednku kruhov\u00e9ho \u010dek\u00e1n\u00ed. Tato metoda spo\u010d\u00edv\u00e1 v zaveden\u00ed striktn\u00edho po\u0159ad\u00ed, ve kter\u00e9m mus\u00ed vl\u00e1kna \u017e\u00e1dat o zdroje, \u010d\u00edm\u017e se zamez\u00ed vzniku cyklick\u00fdch z\u00e1vislost\u00ed v grafu alokace zdroj\u016f a t\u00edm i potenci\u00e1ln\u00edmu uv\u00e1znut\u00ed.",
        incorrect:
          "Zaveden\u00ed glob\u00e1ln\u00edho line\u00e1rn\u00edho uspo\u0159\u00e1d\u00e1n\u00ed zdroj\u016f je sice jednou z metod prevence uv\u00e1znut\u00ed, av\u0161ak ne\u0159e\u0161\u00ed prim\u00e1rn\u011b probl\u00e9m kruhov\u00e9ho \u010dek\u00e1n\u00ed.  Tato metoda se zam\u011b\u0159uje sp\u00ed\u0161e na omezen\u00ed soub\u011b\u017en\u00e9ho p\u0159\u00edstupu ke zdroj\u016fm a i kdy\u017e m\u016f\u017ee v n\u011bkter\u00fdch p\u0159\u00edpadech sn\u00ed\u017eit pravd\u011bpodobnost uv\u00e1znut\u00ed, kruhov\u00e9 \u010dek\u00e1n\u00ed jako z\u00e1kladn\u00ed p\u0159\u00ed\u010dinu uv\u00e1znut\u00ed p\u0159\u00edmo neeliminuje.",
        sectionNumber: "7.4.10",
        sectionTitle: "Zamezen\u00ed uspo\u0159\u00e1d\u00e1n\u00edm",
      },
      {
        uuid: "9f8e4302-e06d-4be2-aace-5a6ee040da40",
        correct:
          "P\u0159esto\u017ee je koncept glob\u00e1ln\u00edho uspo\u0159\u00e1d\u00e1n\u00ed zdroj\u016f u\u017eite\u010dn\u00fd a prakticky aplikovateln\u00fd v r\u00e1mci uzav\u0159en\u00fdch syst\u00e9m\u016f, jako jsou jednotliv\u00e9 programy \u010di monolitick\u00e1 j\u00e1dra opera\u010dn\u00edch syst\u00e9m\u016f, jeho implementace v rozs\u00e1hl\u00e9m opera\u010dn\u00edm syst\u00e9mu jako celku nar\u00e1\u017e\u00ed na probl\u00e9my \u0161k\u00e1lovatelnosti a administrativn\u00ed slo\u017eitosti spojen\u00e9 s udr\u017een\u00edm glob\u00e1ln\u00edho po\u0159ad\u00ed zdroj\u016f nap\u0159\u00ed\u010d cel\u00fdm syst\u00e9mem.",
        incorrect:
          "Koncept glob\u00e1ln\u00edho uspo\u0159\u00e1d\u00e1n\u00ed zdroj\u016f p\u0159edstavuje ide\u00e1ln\u00ed a pln\u011b \u0161k\u00e1lovateln\u00e9 \u0159e\u0161en\u00ed pro prevenci uv\u00e1znut\u00ed i v rozs\u00e1hl\u00fdch opera\u010dn\u00edch syst\u00e9mech. Jeho implementace v cel\u00e9m opera\u010dn\u00edm syst\u00e9mu je snadn\u00e1 a efektivn\u00ed, nebo\u0165 glob\u00e1ln\u00ed po\u0159ad\u00ed zdroj\u016f lze centr\u00e1ln\u011b spravovat a dynamicky p\u0159izp\u016fsobovat aktu\u00e1ln\u00edm pot\u0159eb\u00e1m syst\u00e9mu bez slo\u017eitost\u00ed a administrativn\u00ed z\u00e1t\u011b\u017ee.",
        sectionNumber: "7.4.10",
        sectionTitle: "Zamezen\u00ed uspo\u0159\u00e1d\u00e1n\u00edm",
      },
      {
        uuid: "23e48f0a-0a98-4c78-8588-1468d52feab5",
        correct:
          'V syst\u00e9mu s glob\u00e1ln\u00edm line\u00e1rn\u00edm uspo\u0159\u00e1d\u00e1n\u00edm zdroj\u016f je kl\u00ed\u010dov\u00fdm pravidlem, \u017ee vl\u00e1kno sm\u00ed alokovat pouze takov\u00fd zdroj, kter\u00fd se v glob\u00e1ln\u00edm uspo\u0159\u00e1d\u00e1n\u00ed nach\u00e1z\u00ed "za" aktu\u00e1ln\u011b nejv\u011bt\u0161\u00edm zdrojem, kter\u00fd ji\u017e dan\u00e9 vl\u00e1kno dr\u017e\u00ed.  Toto pravidlo zaji\u0161\u0165uje, \u017ee statick\u00fd graf z\u00e1vislost\u00ed zdroj\u016f nem\u016f\u017ee obsahovat cykly, a t\u00edm je uv\u00e1znut\u00ed efektivn\u011b zabr\u00e1n\u011bno.',
        incorrect:
          "V syst\u00e9mu s glob\u00e1ln\u00edm line\u00e1rn\u00edm uspo\u0159\u00e1d\u00e1n\u00edm zdroj\u016f se vl\u00e1kna mohou \u0159\u00eddit doporu\u010den\u00fdm po\u0159ad\u00edm pro alokaci zdroj\u016f, av\u0161ak toto po\u0159ad\u00ed nen\u00ed striktn\u011b vynucov\u00e1no syst\u00e9mem. Vl\u00e1kna tak maj\u00ed st\u00e1le mo\u017enost alokovat zdroje i mimo stanoven\u00e9 po\u0159ad\u00ed, co\u017e sice zvy\u0161uje flexibilitu alokace, ale sou\u010dasn\u011b ponech\u00e1v\u00e1 syst\u00e9m zraniteln\u00fd v\u016f\u010di uv\u00e1znut\u00ed zp\u016fsoben\u00e9mu cyklick\u00fdmi z\u00e1vislostmi.",
        sectionNumber: "7.4.10",
        sectionTitle: "Zamezen\u00ed uspo\u0159\u00e1d\u00e1n\u00edm",
      },
    ],
  };
