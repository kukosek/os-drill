import type { Section } from '../../common/types';

export const sectionB_zakladni_pojmy_a_definice: Section = {
    uuid: "4abf1f05-d2d2-42d0-9e59-e59669eaa198",
    sectionNumber: "B",
    sectionTitle: "Z\u00e1kladn\u00ed pojmy a definice",
    statements: [
      {
        uuid: "8384fb22-17c2-4211-9cf2-b218a9e20839",
        correct:
          "Abstrakce v opera\u010dn\u00edch syst\u00e9mech je kl\u00ed\u010dov\u00fd koncept, kter\u00fd umo\u017e\u0148uje vytv\u00e1\u0159et rozs\u00e1hl\u00e9 a komplexn\u00ed syst\u00e9my t\u00edm, \u017ee skr\u00fdv\u00e1 vnit\u0159n\u00ed detaily implementace a soust\u0159ed\u00ed se na vn\u011bj\u0161\u00ed chov\u00e1n\u00ed komponent. Podobn\u011b jako zedn\u00edk nemus\u00ed zn\u00e1t detaily v\u00fdroby cihel, aby mohl postavit ze\u010f, v\u00fdvoj\u00e1\u0159i opera\u010dn\u00edch syst\u00e9m\u016f mohou pracovat s abstrakcemi, ani\u017e by museli rozum\u011bt v\u0161em vnit\u0159n\u00edm mechanism\u016fm, co\u017e zjednodu\u0161uje v\u00fdvoj a \u00fadr\u017ebu syst\u00e9mu.",
        incorrect:
          "Abstrakce v opera\u010dn\u00edch syst\u00e9mech je kl\u00ed\u010dov\u00fd koncept, kter\u00fd vy\u017eaduje detailn\u00ed znalost vnit\u0159n\u00ed implementace komponent, aby bylo mo\u017en\u00e9 vytv\u00e1\u0159et rozs\u00e1hl\u00e9 a komplexn\u00ed syst\u00e9my.  Podobn\u011b jako zedn\u00edk mus\u00ed zn\u00e1t detaily v\u00fdroby cihel, aby mohl postavit ze\u010f, v\u00fdvoj\u00e1\u0159i opera\u010dn\u00edch syst\u00e9m\u016f mus\u00ed rozum\u011bt v\u0161em vnit\u0159n\u00edm mechanism\u016fm abstrakc\u00ed, co\u017e zkomplikovuje v\u00fdvoj a \u00fadr\u017ebu syst\u00e9mu.",
        sectionNumber: "0.1.1",
        sectionTitle: "Co je abstrakce?",
      },
      {
        uuid: "b210e84b-0ba0-4a98-bd80-702309a59558",
        correct:
          "Abstrakce v opera\u010dn\u00edch syst\u00e9mech usnad\u0148uje n\u00e1vrh syst\u00e9mu t\u00edm, \u017ee umo\u017e\u0148uje skl\u00e1dat slo\u017eit\u00e9 syst\u00e9my z jednodu\u0161\u0161\u00edch stavebn\u00edch blok\u016f, kde je kl\u00ed\u010dov\u00e9 zn\u00e1t vn\u011bj\u0161\u00ed chov\u00e1n\u00ed ka\u017ed\u00e9ho bloku. Architekti syst\u00e9mu se tak mohou soust\u0159edit na vlastnosti syst\u00e9mu jako celku, nap\u0159\u00edklad spolehlivost a v\u00fdkon, ani\u017e by museli detailn\u011b zn\u00e1t implementaci jednotliv\u00fdch abstrakc\u00ed, podobn\u011b jako se u zdi hodnot\u00ed jej\u00ed nosnost a izola\u010dn\u00ed schopnosti bez ohledu na p\u0159esn\u00fd typ cihel.",
        incorrect:
          "Abstrakce v opera\u010dn\u00edch syst\u00e9mech komplikuje n\u00e1vrh syst\u00e9mu t\u00edm, \u017ee vy\u017eaduje detailn\u00ed znalost vn\u011bj\u0161\u00edho i vnit\u0159n\u00edho chov\u00e1n\u00ed ka\u017ed\u00e9ho stavebn\u00edho bloku pro spr\u00e1vn\u00e9 slo\u017een\u00ed komplexn\u00edch syst\u00e9m\u016f. Architekti syst\u00e9mu se mus\u00ed soust\u0159edit na detaily implementace jednotliv\u00fdch abstrakc\u00ed, aby zajistili vlastnosti syst\u00e9mu jako celku, nap\u0159\u00edklad spolehlivost a v\u00fdkon, podobn\u011b jako se u zdi mus\u00ed detailn\u011b zkoumat ka\u017ed\u00fd typ cihly pro zaji\u0161t\u011bn\u00ed nosnosti a izola\u010dn\u00edch schopnost\u00ed.",
        sectionNumber: "0.1.1",
        sectionTitle: "Co je abstrakce?",
      },
      {
        uuid: "9e696e56-5c5b-454b-8088-1ad1f052aa65",
        correct:
          "Modul\u00e1rn\u00ed syst\u00e9m je takov\u00fd syst\u00e9m, kter\u00fd je postaven z vhodn\u00fdch abstrakc\u00ed, kde jednotliv\u00e9 \u010d\u00e1sti ve sv\u00e9 implementaci spol\u00e9haj\u00ed pouze na vn\u011bj\u0161\u00ed rozhran\u00ed ostatn\u00edch \u010d\u00e1st\u00ed, co\u017e umo\u017e\u0148uje snadnou v\u00fdm\u011bnu modul\u016f s jinou vnit\u0159n\u00ed strukturou, ale se stejn\u00fdm vn\u011bj\u0161\u00edm chov\u00e1n\u00edm, podobn\u011b jako je mo\u017en\u00e9 vym\u011bnit dodavatele cihel b\u011bhem stavby bez z\u00e1sadn\u00edch dopad\u016f.",
        incorrect:
          "Modul\u00e1rn\u00ed syst\u00e9m je takov\u00fd syst\u00e9m, kde jednotliv\u00e9 \u010d\u00e1sti ve sv\u00e9 implementaci spol\u00e9haj\u00ed na vnit\u0159n\u00ed implementaci ostatn\u00edch \u010d\u00e1st\u00ed, a proto je v\u00fdm\u011bna modul\u016f s jinou vnit\u0159n\u00ed strukturou, ale se stejn\u00fdm vn\u011bj\u0161\u00edm chov\u00e1n\u00edm velmi obt\u00ed\u017en\u00e1 a \u010dasto vy\u017eaduje rozs\u00e1hl\u00e9 \u00fapravy v cel\u00e9m syst\u00e9mu, podobn\u011b jako by v\u00fdm\u011bna dodavatele cihel b\u011bhem stavby vedla k nutnosti kompletn\u00ed p\u0159estavby.",
        sectionNumber: "0.1.2",
        sectionTitle: "Modul",
      },
      {
        uuid: "55c170d4-0727-422c-97ff-277fbbc20aff",
        correct:
          "Abstrakce v softwaru, reprezentovan\u00e1 nap\u0159\u00edklad modulem, odd\u011bluje vn\u011bj\u0161\u00ed rozhran\u00ed, kter\u00e9 definuje chov\u00e1n\u00ed modulu, od vnit\u0159n\u00ed implementace, kter\u00e1 popisuje mechanismus fungov\u00e1n\u00ed modulu, a tato separace umo\u017e\u0148uje, aby r\u016fzn\u00e9 moduly s odli\u0161n\u00fdmi implementacemi mohly b\u00fdt zam\u011bn\u011bny, pokud dodr\u017euj\u00ed stejn\u00e9 vn\u011bj\u0161\u00ed rozhran\u00ed.",
        incorrect:
          "Abstrakce v softwaru, reprezentovan\u00e1 modulem, prim\u00e1rn\u011b spojuje vn\u011bj\u0161\u00ed rozhran\u00ed a vnit\u0159n\u00ed implementaci, \u010d\u00edm\u017e zaji\u0161\u0165uje, \u017ee zm\u011bna v implementaci jednoho modulu automaticky vy\u017eaduje zm\u011bnu v rozhran\u00ed a v implementac\u00edch v\u0161ech ostatn\u00edch modul\u016f, kter\u00e9 s n\u00edm interaguj\u00ed, a zamezuje tak mo\u017enosti snadn\u00e9 v\u00fdm\u011bny modul\u016f.",
        sectionNumber: "0.1.2",
        sectionTitle: "Modul",
      },
      {
        uuid: "ce0781c8-e49a-4824-84d8-8cb0a65e610c",
        correct:
          "Von Neumannova architektura p\u0159edstavuje abstrakci po\u010d\u00edta\u010de, kter\u00e1 zd\u016fraz\u0148uje jednotn\u00e9 vn\u011bj\u0161\u00ed chov\u00e1n\u00ed v\u00fdpo\u010detn\u00edho za\u0159\u00edzen\u00ed bez ohledu na specifick\u00e9 hardwarov\u00e9 detaily, jako je v\u00fdrobce pam\u011b\u0165ov\u00fdch modul\u016f nebo typ pou\u017eit\u00fdch tranzistor\u016f v procesoru, a soust\u0159ed\u00ed se na z\u00e1kladn\u00ed principy fungov\u00e1n\u00ed po\u010d\u00edta\u010de.",
        incorrect:
          "Von Neumannova architektura je konkr\u00e9tn\u00ed implementace po\u010d\u00edta\u010de, kter\u00e1 se li\u0161\u00ed v z\u00e1vislosti na v\u00fdrobci a pou\u017eit\u00fdch technologi\u00edch, a popisuje detailn\u00ed vnit\u0159n\u00ed fungov\u00e1n\u00ed po\u010d\u00edta\u010de v\u010detn\u011b chemick\u00e9ho slo\u017een\u00ed polovodi\u010d\u016f v tranzistorech a p\u0159esn\u00e9ho fyzick\u00e9ho uspo\u0159\u00e1d\u00e1n\u00ed pam\u011b\u0165ov\u00fdch modul\u016f a procesoru.",
        sectionNumber: "0.2.1",
        sectionTitle: "Po\u010d\u00edta\u010d",
      },
      {
        uuid: "baec71fa-444c-4834-805e-e1b4bfd8e8a5",
        correct:
          "V r\u00e1mci von Neumannovy architektury je opera\u010dn\u00ed pam\u011b\u0165 kl\u00ed\u010dov\u00e1 pro uchov\u00e1v\u00e1n\u00ed jak instrukc\u00ed, kter\u00e9 procesor vykon\u00e1v\u00e1, tak i dat, se kter\u00fdmi program pracuje, p\u0159i\u010dem\u017e tato pam\u011b\u0165 je adresovateln\u00e1, co\u017e znamen\u00e1, \u017ee je organizov\u00e1na do o\u010d\u00edslovan\u00fdch bun\u011bk, ke kter\u00fdm lze p\u0159istupovat pomoc\u00ed adres pro \u010dten\u00ed a z\u00e1pis dat.",
        incorrect:
          "Podle von Neumannovy architektury opera\u010dn\u00ed pam\u011b\u0165 slou\u017e\u00ed v\u00fdhradn\u011b k do\u010dasn\u00e9mu ulo\u017een\u00ed dat pro aktu\u00e1ln\u011b spu\u0161t\u011bn\u00fd program, zat\u00edmco instrukce se uchov\u00e1vaj\u00ed v\u00fdhradn\u011b v procesoru a do opera\u010dn\u00ed pam\u011bti se nikdy neukl\u00e1daj\u00ed, p\u0159i\u010dem\u017e pam\u011b\u0165 nen\u00ed adresovateln\u00e1 a programy p\u0159istupuj\u00ed k dat\u016fm sekven\u010dn\u011b bez mo\u017enosti adresov\u00e1n\u00ed konkr\u00e9tn\u00edch bun\u011bk.",
        sectionNumber: "0.2.1",
        sectionTitle: "Po\u010d\u00edta\u010d",
      },
      {
        uuid: "da0a6f5f-3ea4-4167-a95c-1bd1a2576e5e",
        correct:
          "Opera\u010dn\u00ed pam\u011b\u0165 ve von Neumannov\u011b architektu\u0159e se z\u00e1sadn\u011b li\u0161\u00ed od registr\u016f procesoru t\u00edm, \u017ee pam\u011b\u0165 je adresovateln\u00e1 a umo\u017e\u0148uje instrukc\u00edm p\u0159istupovat k dat\u016fm na z\u00e1klad\u011b libovoln\u011b vypo\u010dten\u00e9 adresy, podobn\u011b jako prom\u011bnn\u00e1 v programov\u00e1n\u00ed, zat\u00edmco registry maj\u00ed pevn\u00e1 jm\u00e9na a program nem\u016f\u017ee dynamicky ur\u010dit jejich adresy.",
        incorrect:
          "Registry ve von Neumannov\u011b architektu\u0159e jsou flexibiln\u011bj\u0161\u00ed ne\u017e opera\u010dn\u00ed pam\u011b\u0165, proto\u017ee registry jsou adresovateln\u00e9 a program m\u016f\u017ee dynamicky vypo\u010d\u00edtat a m\u011bnit registry, kter\u00e9 se pou\u017e\u00edvaj\u00ed v instrukc\u00edch, zat\u00edmco opera\u010dn\u00ed pam\u011b\u0165 m\u00e1 pevn\u00e1 jm\u00e9na a je omezena na sekven\u010dn\u00ed p\u0159\u00edstup, co\u017e omezuje flexibilitu programov\u00e1n\u00ed.",
        sectionNumber: "0.2.1",
        sectionTitle: "Po\u010d\u00edta\u010d",
      },
      {
        uuid: "9557c0b4-0cb9-45b0-966c-3cf88e3efe58",
        correct:
          "V kontextu opera\u010dn\u00edch syst\u00e9m\u016f, perifern\u00ed za\u0159\u00edzen\u00ed p\u0159edstavuj\u00ed kl\u00ed\u010dov\u00e9 komponenty pro realizaci interakce po\u010d\u00edta\u010de s vn\u011bj\u0161\u00edm prost\u0159ed\u00edm, p\u0159i\u010dem\u017e jejich funkce zahrnuje jak p\u0159\u00edjem dat z extern\u00edch zdroj\u016f, kter\u00e1 n\u00e1sledn\u011b slou\u017e\u00ed jako vstupn\u00ed informace pro v\u00fdpo\u010detn\u00ed procesy, tak i odes\u00edl\u00e1n\u00ed dat, je\u017e jsou v\u00fdsledkem proveden\u00fdch v\u00fdpo\u010dt\u016f a manifestuj\u00ed se v re\u00e1ln\u00e9m sv\u011bt\u011b skrze fyzik\u00e1ln\u00ed projevy.",
        incorrect:
          "V kontextu opera\u010dn\u00edch syst\u00e9m\u016f, perifern\u00ed za\u0159\u00edzen\u00ed jsou v\u00fdhradn\u011b ur\u010dena pro odes\u00edl\u00e1n\u00ed dat, kter\u00e1 vznikla jako v\u00fdstup v\u00fdpo\u010detn\u00edch proces\u016f a projevuj\u00ed se ve vn\u011bj\u0161\u00edm prost\u0159ed\u00ed, a jejich funk\u010dnost se nijak net\u00fdk\u00e1 p\u0159\u00edjmu dat z extern\u00edch zdroj\u016f, kter\u00e1 by mohla b\u00fdt vyu\u017eita jako vstupn\u00ed informace pro dal\u0161\u00ed v\u00fdpo\u010dty a zpracov\u00e1n\u00ed.",
        sectionNumber: "0.2.2",
        sectionTitle: "Periferie",
      },
      {
        uuid: "0b1a763f-2b3b-4d91-bac4-7061d9429fac",
        correct:
          "Z hlediska abstrakce, kterou opera\u010dn\u00ed syst\u00e9my poskytuj\u00ed, je ve\u0161ker\u00e1 aktivita vykon\u00e1van\u00e1 programem, a to v\u010detn\u011b \u010dinnost\u00ed jako je u\u017eivatelsk\u00e1 interakce, generov\u00e1n\u00ed vizu\u00e1ln\u00edho obsahu \u010di s\u00ed\u0165ov\u00e1 komunikace, v j\u00e1dru reprezentov\u00e1na jako manipulace s \u010d\u00edseln\u00fdmi daty, co\u017e implikuje, \u017ee i zd\u00e1nliv\u011b ne-v\u00fdpo\u010detn\u00ed operace jsou na hlub\u0161\u00ed \u00farovni pouze sofistikovan\u00fdmi formami v\u00fdpo\u010dt\u016f.",
        incorrect:
          "Z hlediska abstrakce opera\u010dn\u00edch syst\u00e9m\u016f, aktivity programu jako u\u017eivatelsk\u00e1 interakce a generov\u00e1n\u00ed vizu\u00e1ln\u00edho obsahu se z\u00e1sadn\u011b li\u0161\u00ed od v\u00fdpo\u010detn\u00edch proces\u016f a jsou realizov\u00e1ny prost\u0159ednictv\u00edm mechanism\u016f, kter\u00e9 nesouvisej\u00ed s manipulac\u00ed s \u010d\u00edseln\u00fdmi daty, co\u017e znamen\u00e1, \u017ee tyto aktivity nemaj\u00ed charakter skryt\u00fdch v\u00fdpo\u010dt\u016f, ale p\u0159edstavuj\u00ed samostatnou kategorii operac\u00ed.",
        sectionNumber: "0.2.2",
        sectionTitle: "Periferie",
      },
      {
        uuid: "a1533b4f-70dd-41e1-a50b-2ff9d154b1e2",
        correct:
          "V opera\u010dn\u00edch syst\u00e9mech je pojem programu abstraktn\u00ed konstrukc\u00ed, kterou lze ch\u00e1pat jako uspo\u0159\u00e1danou posloupnost instrukc\u00ed detailn\u011b specifikuj\u00edc\u00edch ur\u010dit\u00fd v\u00fdpo\u010detn\u00ed postup, p\u0159i\u010dem\u017e toto pojet\u00ed programu se d\u00e1le roz\u0161i\u0159uje o koncept synchronizace, kter\u00fd zahrnuje koordinaci a sou\u010dinnost v\u00fdpo\u010detn\u00edch proces\u016f s perifern\u00edmi za\u0159\u00edzen\u00edmi a tak\u00e9 s potenci\u00e1ln\u011b paraleln\u011b prob\u00edhaj\u00edc\u00edmi v\u00fdpo\u010dty jin\u00fdch program\u016f.",
        incorrect:
          "V opera\u010dn\u00edch syst\u00e9mech je pojem programu abstraktn\u00ed konstrukc\u00ed, kterou lze ch\u00e1pat pouze jako uspo\u0159\u00e1danou posloupnost instrukc\u00ed detailn\u011b specifikuj\u00edc\u00edch v\u00fdhradn\u011b v\u00fdpo\u010detn\u00ed postup, a koncept synchronizace, zahrnuj\u00edc\u00ed koordinaci s perifern\u00edmi za\u0159\u00edzen\u00edmi a paraleln\u00edmi v\u00fdpo\u010dty, je irelevantn\u00ed pro z\u00e1kladn\u00ed definici programu a jeho fungov\u00e1n\u00ed.",
        sectionNumber: "0.2.2",
        sectionTitle: "Periferie",
      },
      {
        uuid: "4a9ba000-3225-4c0d-ba78-b8ecfe575b54",
        correct:
          "P\u016fvodn\u00ed koncept von Neumannova po\u010d\u00edta\u010de p\u0159edpokl\u00e1dal, \u017ee jeden po\u010d\u00edta\u010d vykon\u00e1v\u00e1 pouze jeden program. Nicm\u00e9n\u011b, zaveden\u00edm virtualizace zdroj\u016f, realizovan\u00e9 opera\u010dn\u00edm syst\u00e9mem a hardwarem, se tento koncept p\u0159ekonal. Virtualizace umo\u017e\u0148uje, aby se jeden fyzick\u00fd po\u010d\u00edta\u010d tv\u00e1\u0159il jako n\u011bkolik virtu\u00e1ln\u00edch po\u010d\u00edta\u010d\u016f, \u010d\u00edm\u017e d\u00e1v\u00e1 ka\u017ed\u00e9mu programu iluzi, \u017ee m\u00e1 k dispozici vlastn\u00ed dedikovan\u00fd po\u010d\u00edta\u010d a m\u016f\u017ee b\u011b\u017eet soub\u011b\u017en\u011b s ostatn\u00edmi programy.",
        incorrect:
          "P\u016fvodn\u00ed koncept von Neumannova po\u010d\u00edta\u010de byl zalo\u017een na my\u0161lence, \u017ee jeden po\u010d\u00edta\u010d vykon\u00e1v\u00e1 pouze jeden program, a tento koncept z\u016fst\u00e1v\u00e1 nezm\u011bn\u011bn i v modern\u00edch opera\u010dn\u00edch syst\u00e9mech. Virtualizace zdroj\u016f sice existuje, ale neslou\u017e\u00ed k tomu, aby jeden fyzick\u00fd po\u010d\u00edta\u010d vypadal jako n\u011bkolik virtu\u00e1ln\u00edch, n\u00fdbr\u017e pouze k efektivn\u011bj\u0161\u00edmu sd\u00edlen\u00ed fyzick\u00fdch zdroj\u016f mezi programy b\u011b\u017e\u00edc\u00edmi sekven\u010dn\u011b, nikoliv soub\u011b\u017en\u011b.",
        sectionNumber: "0.2.3",
        sectionTitle: "Virtualizace",
      },
      {
        uuid: "d01f212a-c354-4003-93b6-793b189cbc49",
        correct:
          "Virtualizace, kl\u00ed\u010dov\u00e1 vlastnost modern\u00edch opera\u010dn\u00edch syst\u00e9m\u016f umo\u017e\u0148uj\u00edc\u00ed ka\u017ed\u00e9mu programu pracovat s iluz\u00ed vlastn\u00edho po\u010d\u00edta\u010de, je komplexn\u00ed mechanismus implementovan\u00fd jak hardwarov\u011b, tak softwarov\u011b. Procesor hraje z\u00e1sadn\u00ed roli v podpo\u0159e virtualizace skrze specializovan\u00e9 instrukce a mechanismy, zat\u00edmco opera\u010dn\u00ed syst\u00e9m poskytuje softwarovou vrstvu abstrakce a \u0159\u00edzen\u00ed, \u010d\u00edm\u017e spole\u010dn\u011b vytv\u00e1\u0159ej\u00ed prost\u0159ed\u00ed pro efektivn\u00ed a izolovan\u00fd b\u011bh v\u00edce program\u016f na jednom fyzick\u00e9m stroji.",
        incorrect:
          "Virtualizace, a\u010dkoliv je d\u016fle\u017eitou sou\u010d\u00e1st\u00ed modern\u00edch opera\u010dn\u00edch syst\u00e9m\u016f, je prim\u00e1rn\u011b softwarov\u00e1 z\u00e1le\u017eitost implementovan\u00e1 v\u00fdhradn\u011b opera\u010dn\u00edm syst\u00e9mem. Hardware, a\u010dkoli tvo\u0159\u00ed z\u00e1klad pro b\u011bh opera\u010dn\u00edho syst\u00e9mu, nehraje \u017e\u00e1dnou aktivn\u00ed roli v samotn\u00e9m procesu virtualizace. Virtualizace je dosa\u017eena pouze sofistikovan\u00fdmi algoritmy a technikami v r\u00e1mci opera\u010dn\u00edho syst\u00e9mu, kter\u00e9 spravuj\u00ed a rozd\u011bluj\u00ed zdroje mezi jednotliv\u00e9 programy.",
        sectionNumber: "0.2.3",
        sectionTitle: "Virtualizace",
      },
      {
        uuid: "7e07b294-9477-447a-91fc-eaf07d0797e6",
        correct:
          "Kl\u00ed\u010dov\u00fdm konceptem v\u00a0popisu ud\u00e1lost\u00ed je relace p\u0159edch\u00e1zen\u00ed, kter\u00e1 definuje chronologick\u00e9 uspo\u0159\u00e1d\u00e1n\u00ed jev\u016f; pro dv\u011b ud\u00e1losti A a B plat\u00ed, \u017ee bu\u010f A p\u0159edch\u00e1z\u00ed B, B p\u0159edch\u00e1z\u00ed A, nebo jsou A a B soub\u011b\u017en\u00e9, co\u017e znamen\u00e1, \u017ee ani jedna z ud\u00e1lost\u00ed nep\u0159edch\u00e1z\u00ed t\u00e9 druh\u00e9.",
        incorrect:
          "Kl\u00ed\u010dov\u00fdm konceptem v\u00a0popisu ud\u00e1lost\u00ed je relace p\u0159edch\u00e1zen\u00ed, kter\u00e1 definuje chronologick\u00e9 uspo\u0159\u00e1d\u00e1n\u00ed jev\u016f; pro dv\u011b ud\u00e1losti A a B plat\u00ed, \u017ee bu\u010f A p\u0159edch\u00e1z\u00ed B, B p\u0159edch\u00e1z\u00ed A, p\u0159i\u010dem\u017e soub\u011b\u017enost ud\u00e1lost\u00ed nen\u00ed mo\u017en\u00e1, jeliko\u017e relace p\u0159edch\u00e1zen\u00ed v\u017edy stanov\u00ed line\u00e1rn\u00ed uspo\u0159\u00e1d\u00e1n\u00ed v\u0161ech ud\u00e1lost\u00ed.",
        sectionNumber: "0.3.1",
        sectionTitle: "Ud\u00e1lost a p\u0159edch\u00e1zen\u00ed",
      },
      {
        uuid: "ec65dfaa-0cb1-4884-8322-2153e9d4b73c",
        correct:
          "Ud\u00e1losti X a Y v uveden\u00e9m p\u0159\u00edkladu, kde relace p\u0159edch\u00e1zen\u00ed je definov\u00e1na jako P = {(A, X), (X, B), (A, Y), (Y, B)}, jsou pova\u017eov\u00e1ny za soub\u011b\u017en\u00e9, proto\u017ee neexistuje \u017e\u00e1dn\u00e1 relace p\u0159edch\u00e1zen\u00ed ani ve sm\u011bru od X k Y, ani od Y k X, a\u010dkoli ob\u011b ud\u00e1losti X i Y n\u00e1sleduj\u00ed po ud\u00e1losti A a p\u0159edch\u00e1zej\u00ed ud\u00e1losti B.",
        incorrect:
          "Ud\u00e1losti X a Y v uveden\u00e9m p\u0159\u00edkladu, kde relace p\u0159edch\u00e1zen\u00ed je P = {(A, X), (X, B), (A, Y), (Y, B)}, nejsou soub\u011b\u017en\u00e9, proto\u017ee relace p\u0159edch\u00e1zen\u00ed P jasn\u011b definuje, \u017ee ud\u00e1lost A p\u0159edch\u00e1z\u00ed X a Y, a X a Y p\u0159edch\u00e1z\u00ed B, co\u017e vytv\u00e1\u0159\u00ed line\u00e1rn\u00ed sekvenci ud\u00e1lost\u00ed bez mo\u017enosti soub\u011b\u017enosti mezi X a Y.",
        sectionNumber: "0.3.1",
        sectionTitle: "Ud\u00e1lost a p\u0159edch\u00e1zen\u00ed",
      },
      {
        uuid: "acecb102-bf5c-4713-b9f5-325e7e810a7d",
        correct:
          "\u010casov\u00fd sled ud\u00e1lost\u00ed, jak je definov\u00e1n v kontextu opera\u010dn\u00edch syst\u00e9m\u016f, p\u0159edstavuje line\u00e1rn\u00ed uspo\u0159\u00e1d\u00e1n\u00ed v\u0161ech relevantn\u00edch ud\u00e1lost\u00ed. Pro libovolnou dvojici ud\u00e1lost\u00ed v tomto uspo\u0159\u00e1d\u00e1n\u00ed plat\u00ed, \u017ee bu\u010f jedna ud\u00e1lost striktn\u011b p\u0159edch\u00e1z\u00ed druhou, nebo naopak, vylu\u010duje se tak mo\u017enost, \u017ee by dv\u011b ud\u00e1losti nastaly absolutn\u011b sou\u010dasn\u011b v r\u00e1mci dan\u00e9ho \u010dasov\u00e9ho sledu. Tato linearita je kl\u00ed\u010dov\u00e1 pro konzistentn\u00ed interpretaci ud\u00e1lost\u00ed.",
        incorrect:
          "\u010casov\u00fd sled ud\u00e1lost\u00ed v opera\u010dn\u00edch syst\u00e9mech je neline\u00e1rn\u00ed uspo\u0159\u00e1d\u00e1n\u00ed, kde pro libovolnou dvojici ud\u00e1lost\u00ed neplat\u00ed, \u017ee by jedna ud\u00e1lost musela p\u0159edch\u00e1zet druh\u00e9. V tomto modelu je b\u011b\u017en\u00e9, \u017ee ud\u00e1losti nast\u00e1vaj\u00ed sou\u010dasn\u011b a nelze jim p\u0159i\u0159adit unik\u00e1tn\u00ed \u010dasov\u00e1 raz\u00edtka, co\u017e zjednodu\u0161uje anal\u00fdzu soub\u011b\u017en\u00fdch proces\u016f a minimalizuje slo\u017eitost spr\u00e1vy ud\u00e1lost\u00ed v syst\u00e9mu.",
        sectionNumber: "0.3.2",
        sectionTitle: "\u010casov\u00fd sled, hazard soub\u011bhu",
      },
      {
        uuid: "6433afd2-0a51-4cf0-8f2e-6ebaf0617933",
        correct:
          "Hazard soub\u011bhu, zn\u00e1m\u00fd tak\u00e9 jako race condition, nast\u00e1v\u00e1 v situac\u00edch, kdy vn\u011bj\u0161\u00ed pozorovatel syst\u00e9mu zaznamen\u00e1 rozd\u00edln\u00e9 chov\u00e1n\u00ed syst\u00e9mu pro dva r\u016fzn\u00e9 \u010dasov\u00e9 sledy ud\u00e1lost\u00ed. Tyto \u010dasov\u00e9 sledy jsou p\u0159itom oba pln\u011b kompatibiln\u00ed s definovanou relac\u00ed p\u0159edch\u00e1zen\u00ed ud\u00e1lost\u00ed. To znamen\u00e1, \u017ee rozd\u00edln\u00e9 line\u00e1rn\u00ed uspo\u0159\u00e1d\u00e1n\u00ed ud\u00e1lost\u00ed, kter\u00e9 respektuj\u00ed stejn\u00e1 omezen\u00ed p\u0159edch\u00e1zen\u00ed, vedou k nekonzistentn\u00edmu chov\u00e1n\u00ed syst\u00e9mu.",
        incorrect:
          "Hazard soub\u011bhu, nebo race condition, je stav syst\u00e9mu, kdy vn\u011bj\u0161\u00ed pozorovatel zaznamen\u00e1 identick\u00e9 chov\u00e1n\u00ed syst\u00e9mu bez ohledu na r\u016fzn\u00e9 \u010dasov\u00e9 sledy ud\u00e1lost\u00ed. I kdy\u017e existuj\u00ed r\u016fzn\u00e9 \u010dasov\u00e9 sledy, kter\u00e9 jsou kompatibiln\u00ed s relac\u00ed p\u0159edch\u00e1zen\u00ed, vn\u011bj\u0161\u00ed chov\u00e1n\u00ed syst\u00e9mu z\u016fst\u00e1v\u00e1 v\u017edy stejn\u00e9 a konzistentn\u00ed, \u010d\u00edm\u017e se eliminuje mo\u017enost nekonzistence zp\u016fsoben\u00e9 r\u016fzn\u00fdm po\u0159ad\u00edm ud\u00e1lost\u00ed.",
        sectionNumber: "0.3.2",
        sectionTitle: "\u010casov\u00fd sled, hazard soub\u011bhu",
      },
      {
        uuid: "32789915-f160-41aa-9dc7-507a2f7d8d8b",
        correct:
          "Abstrakce \u010dasov\u00e9ho sledu ud\u00e1lost\u00ed v opera\u010dn\u00edch syst\u00e9mech je \u00fazce spjata s konceptem relace p\u0159edch\u00e1zen\u00ed. Pro ka\u017ed\u00fd platn\u00fd \u010dasov\u00fd sled mus\u00ed platit kompatibilita s definovanou relac\u00ed p\u0159edch\u00e1zen\u00ed, co\u017e znamen\u00e1, \u017ee pokud ud\u00e1lost A p\u0159edch\u00e1z\u00ed ud\u00e1losti B dle relace p\u0159edch\u00e1zen\u00ed, pak v jak\u00e9mkoliv platn\u00e9m \u010dasov\u00e9m sledu mus\u00ed ud\u00e1lost A figurovat p\u0159ed ud\u00e1lost\u00ed B. Tato kompatibilita zaji\u0161\u0165uje konzistenci a p\u0159edv\u00eddatelnost chov\u00e1n\u00ed syst\u00e9mu.",
        incorrect:
          "Abstrakce \u010dasov\u00e9ho sledu ud\u00e1lost\u00ed v opera\u010dn\u00edch syst\u00e9mech je zcela nez\u00e1visl\u00e1 na konceptu relace p\u0159edch\u00e1zen\u00ed. Platn\u00fd \u010dasov\u00fd sled nemus\u00ed b\u00fdt kompatibiln\u00ed s relac\u00ed p\u0159edch\u00e1zen\u00ed, co\u017e umo\u017e\u0148uje flexibiln\u011bj\u0161\u00ed uspo\u0159\u00e1d\u00e1n\u00ed ud\u00e1lost\u00ed a dovoluje, aby ud\u00e1lost A mohla figurovat za ud\u00e1lost\u00ed B v \u010dasov\u00e9m sledu, i kdy\u017e relace p\u0159edch\u00e1zen\u00ed definuje, \u017ee A m\u00e1 p\u0159edch\u00e1zet B. Tato nez\u00e1vislost zvy\u0161uje efektivitu syst\u00e9mu.",
        sectionNumber: "0.3.2",
        sectionTitle: "\u010casov\u00fd sled, hazard soub\u011bhu",
      },
      {
        uuid: "2f84ea44-ec5f-4257-a5c9-1e44e863f250",
        correct:
          "Opera\u010dn\u00ed syst\u00e9my jsou fundament\u00e1ln\u00edm softwarov\u00fdm vybaven\u00edm po\u010d\u00edta\u010dov\u00fdch syst\u00e9m\u016f, jejich\u017e prim\u00e1rn\u00edm \u00fa\u010delem je umo\u017enit u\u017eivatel\u016fm spou\u0161t\u011bt a efektivn\u011b vyu\u017e\u00edvat aplikace, a to t\u00edm, \u017ee poskytuj\u00ed nezbytn\u00e9 rozhran\u00ed a prost\u0159ed\u00ed pro jejich b\u011bh a interakci s hardwarem.",
        incorrect:
          "Opera\u010dn\u00ed syst\u00e9my jsou specializovan\u00fdm typem aplika\u010dn\u00edho softwaru, kter\u00fd se instaluje nad r\u00e1mec b\u011b\u017en\u00fdch program\u016f a slou\u017e\u00ed v\u00fdhradn\u011b pro specifick\u00e9 \u00fakoly, jako je spr\u00e1va soubor\u016f a tisk dokument\u016f, p\u0159i\u010dem\u017e pro b\u011bh u\u017eivatelsk\u00fdch aplikac\u00ed nejsou opera\u010dn\u00ed syst\u00e9my nezbytn\u00e9.",
        sectionNumber: "0.4.1",
        sectionTitle: "Vn\u011bj\u0161\u00ed rozhran\u00ed",
      },
      {
        uuid: "72ce3f83-031c-4fac-bc82-85d40a54d51f",
        correct:
          "Kl\u00ed\u010dovou funkc\u00ed opera\u010dn\u00edch syst\u00e9m\u016f je zprost\u0159edkov\u00e1n\u00ed \u0159\u00edzen\u00e9ho a bezpe\u010dn\u00e9ho p\u0159\u00edstupu u\u017eivatelsk\u00fdch program\u016f k hardwarov\u00fdm a softwarov\u00fdm zdroj\u016fm syst\u00e9mu, co\u017e zahrnuje procesor, pam\u011b\u0165, \u00falo\u017en\u00e1 za\u0159\u00edzen\u00ed a dal\u0161\u00ed syst\u00e9mov\u00e9 komponenty a knihovny, a to s ohledem na spr\u00e1vu a p\u0159id\u011blov\u00e1n\u00ed t\u011bchto zdroj\u016f.",
        incorrect:
          "Opera\u010dn\u00ed syst\u00e9my z\u00e1m\u011brn\u011b br\u00e1n\u00ed p\u0159\u00edm\u00e9mu p\u0159\u00edstupu u\u017eivatelsk\u00fdch program\u016f k hardwarov\u00fdm zdroj\u016fm a softwarov\u00fdm knihovn\u00e1m syst\u00e9mu, aby se maximalizovala bezpe\u010dnost a stabilita, a programy tak mus\u00ed pracovat v\u00fdhradn\u011b v izolovan\u00e9m prost\u0159ed\u00ed bez mo\u017enosti ovliv\u0148ovat syst\u00e9mov\u00e9 zdroje.",
        sectionNumber: "0.4.1",
        sectionTitle: "Vn\u011bj\u0161\u00ed rozhran\u00ed",
      },
      {
        uuid: "6e160ae4-41a2-4499-8506-c06ef8d08ca6",
        correct:
          "Modern\u00ed v\u00edce\u00falohovov\u00e9 a v\u00edceu\u017eivatelsk\u00e9 opera\u010dn\u00ed syst\u00e9my jsou navr\u017eeny tak, aby umo\u017e\u0148ovaly sou\u010dasn\u00fd b\u011bh v\u00edce u\u017eivatelsk\u00fdch program\u016f a efektivn\u011b spravovaly jejich soub\u011b\u017en\u00e9 po\u017eadavky na syst\u00e9mov\u00e9 zdroje, p\u0159i\u010dem\u017e kl\u00ed\u010dov\u00fdm aspektem je zaji\u0161t\u011bn\u00ed izolace mezi b\u011b\u017e\u00edc\u00edmi programy, aby se minimalizovalo riziko vz\u00e1jemn\u00e9ho ovliv\u0148ov\u00e1n\u00ed a chyb.",
        incorrect:
          "V\u00edce\u00falohovov\u00e9 opera\u010dn\u00ed syst\u00e9my sice umo\u017e\u0148uj\u00ed spou\u0161t\u011bn\u00ed v\u00edce program\u016f najednou, ale nemaj\u00ed mechanismy pro izolaci b\u011b\u017e\u00edc\u00edch program\u016f, co\u017e v praxi vede k \u010dast\u00fdm konflikt\u016fm a nestabilit\u011b syst\u00e9mu, jeliko\u017e programy nekontrolovan\u011b sd\u00edlej\u00ed syst\u00e9mov\u00e9 zdroje a mohou se vz\u00e1jemn\u011b ovliv\u0148ovat.",
        sectionNumber: "0.4.1",
        sectionTitle: "Vn\u011bj\u0161\u00ed rozhran\u00ed",
      },
      {
        uuid: "f5f0972f-dad2-4db1-bdec-96d4023ec3f9",
        correct:
          'Standard POSIX, vyvinut\u00fd organizac\u00ed The Open Group, p\u0159edstavuje mnohem obs\u00e1hlej\u0161\u00ed a standardizovan\u00e9 rozhran\u00ed ne\u017e pouh\u00e1 abstrakce "v\u00edce\u00falohov\u00fd, v\u00edceu\u017eivatelsk\u00fd opera\u010dn\u00ed syst\u00e9m". Definuje p\u0159edev\u0161\u00edm C API a je \u0161iroce podporov\u00e1n nap\u0159\u00ed\u010d r\u016fzn\u00fdmi opera\u010dn\u00edmi syst\u00e9my, i kdy\u017e ne v\u0161echny v\u00edceu\u017eivatelsk\u00e9 opera\u010dn\u00ed syst\u00e9my se ho striktn\u011b dr\u017e\u00ed.',
        incorrect:
          'Standard POSIX, vyvinut\u00fd organizac\u00ed IEEE, p\u0159edstavuje m\u00e9n\u011b obs\u00e1hl\u00e9 a propriet\u00e1rn\u00ed rozhran\u00ed ne\u017e abstrakce "v\u00edce\u00falohov\u00fd, v\u00edceu\u017eivatelsk\u00fd opera\u010dn\u00ed syst\u00e9m". Definuje p\u0159edev\u0161\u00edm Java API a je podporov\u00e1n pouze minoritn\u00ed skupinou opera\u010dn\u00edch syst\u00e9m\u016f, p\u0159i\u010dem\u017e v\u0161echny v\u00edceu\u017eivatelsk\u00e9 opera\u010dn\u00ed syst\u00e9my se ho striktn\u011b dr\u017e\u00ed.',
        sectionNumber: "0.4.2",
        sectionTitle: "POSIX",
      },
      {
        uuid: "ddb470ed-cef3-4b4a-b323-c9dea107fe62",
        correct:
          "Rozhran\u00ed POSIX API, kter\u00e9 je st\u011b\u017eejn\u00ed sou\u010d\u00e1st\u00ed standardu POSIX, je pops\u00e1no jako sada funkc\u00ed v programovac\u00edm jazyce C a umo\u017e\u0148uje u\u017eivatelsk\u00fdm program\u016fm efektivn\u011b vyu\u017e\u00edvat \u0161irokou \u0161k\u00e1lu slu\u017eeb poskytovan\u00fdch modern\u00edmi opera\u010dn\u00edmi syst\u00e9my, \u010d\u00edm\u017e zjednodu\u0161uje v\u00fdvoj aplikac\u00ed nap\u0159\u00ed\u010d r\u016fzn\u00fdmi platformami.",
        incorrect:
          "Rozhran\u00ed POSIX API, kter\u00e9 je pouze okrajovou sou\u010d\u00e1st\u00ed standardu POSIX, je pops\u00e1no jako sada t\u0159\u00edd v programovac\u00edm jazyce Java a omezuje u\u017eivatelsk\u00e9 programy ve vyu\u017e\u00edv\u00e1n\u00ed z\u00e1kladn\u00edch slu\u017eeb poskytovan\u00fdch modern\u00edmi opera\u010dn\u00edmi syst\u00e9my, \u010d\u00edm\u017e komplikuje v\u00fdvoj aplikac\u00ed nap\u0159\u00ed\u010d r\u016fzn\u00fdmi platformami.",
        sectionNumber: "0.4.2",
        sectionTitle: "POSIX",
      },
      {
        uuid: "1f87678b-3039-4a57-bb49-c81e6a73cc3c",
        correct:
          "B\u011b\u017en\u00fd n\u00e1vrh opera\u010dn\u00edho syst\u00e9mu zahrnuje j\u00e1dro a u\u017eivatelsk\u00fd prostor, p\u0159i\u010dem\u017e j\u00e1dro m\u00e1 privilegovan\u00fd p\u0159\u00edstup k hardwarov\u00fdm zdroj\u016fm, zejm\u00e9na k procesoru, co\u017e mu umo\u017e\u0148uje \u0159\u00eddit virtualizaci a p\u0159id\u011blov\u00e1n\u00ed zdroj\u016f, jako je pam\u011b\u0165 a procesor, ostatn\u00edm \u010d\u00e1stem syst\u00e9mu a u\u017eivatelsk\u00fdm program\u016fm, a t\u00edm plnit roli str\u00e1\u017ece integrity syst\u00e9mu.",
        incorrect:
          "B\u011b\u017en\u00fd n\u00e1vrh opera\u010dn\u00edho syst\u00e9mu zahrnuje j\u00e1dro a u\u017eivatelsk\u00fd prostor, p\u0159i\u010dem\u017e u\u017eivatelsk\u00fd prostor m\u00e1 privilegovan\u00fd p\u0159\u00edstup k hardwarov\u00fdm zdroj\u016fm, zejm\u00e9na k procesoru, co\u017e mu umo\u017e\u0148uje \u0159\u00eddit virtualizaci a p\u0159id\u011blov\u00e1n\u00ed zdroj\u016f, jako je pam\u011b\u0165 a procesor, ostatn\u00edm \u010d\u00e1stem syst\u00e9mu a j\u00e1dru, a t\u00edm plnit roli str\u00e1\u017ece integrity syst\u00e9mu.",
        sectionNumber: "0.4.3",
        sectionTitle: "J\u00e1dro",
      },
      {
        uuid: "c0a26249-d345-4ffe-ba8b-324ef09dd17a",
        correct:
          "J\u00e1dro opera\u010dn\u00edho syst\u00e9mu hraje kl\u00ed\u010dovou roli v realizaci a \u0159\u00edzen\u00ed virtualizace v\u00fdpo\u010detn\u00edch zdroj\u016f, jako je procesor a pam\u011b\u0165, a z\u00e1rove\u0148 funguje jako str\u00e1\u017ece integrity syst\u00e9mu t\u00edm, \u017ee u\u017eivatelsk\u00fdm proces\u016fm umo\u017e\u0148uje pouze ty operace, kter\u00e9 explicitn\u011b povol\u00ed, \u010d\u00edm\u017e chr\u00e1n\u00ed syst\u00e9m p\u0159ed neopr\u00e1vn\u011bn\u00fdmi z\u00e1sahy.",
        incorrect:
          "J\u00e1dro opera\u010dn\u00edho syst\u00e9mu hraje okrajovou roli v realizaci a \u0159\u00edzen\u00ed virtualizace v\u00fdpo\u010detn\u00edch zdroj\u016f, jako je procesor a pam\u011b\u0165, a z\u00e1rove\u0148 nefunguje jako str\u00e1\u017ece integrity syst\u00e9mu, ale spol\u00e9h\u00e1 se na u\u017eivatelsk\u00e9 procesy, \u017ee budou dodr\u017eovat pravidla syst\u00e9mu a chr\u00e1n\u00ed syst\u00e9m p\u0159ed neopr\u00e1vn\u011bn\u00fdmi z\u00e1sahy.",
        sectionNumber: "0.4.3",
        sectionTitle: "J\u00e1dro",
      },
      {
        uuid: "069903bd-d781-4bdd-867b-eb21d85bc434",
        correct:
          "A\u010dkoli existuj\u00ed opera\u010dn\u00ed syst\u00e9my bez jasn\u011b vy\u010dlen\u011bn\u00e9ho j\u00e1dra, jsou pova\u017eov\u00e1ny za vz\u00e1cn\u00e9 a v z\u00e1kladn\u00edm kurzu opera\u010dn\u00edch syst\u00e9m\u016f se jimi auto\u0159i textu rozhodli nezab\u00fdvat, proto\u017ee drtiv\u00e1 v\u011bt\u0161ina modern\u00edch opera\u010dn\u00edch syst\u00e9m\u016f, na kter\u00e9 se kurz zam\u011b\u0159uje, m\u00e1 architekturu s jasn\u011b odd\u011blen\u00fdm j\u00e1drem.",
        incorrect:
          "A\u010dkoli existuj\u00ed opera\u010dn\u00ed syst\u00e9my bez jasn\u011b vy\u010dlen\u011bn\u00e9ho j\u00e1dra, jsou pova\u017eov\u00e1ny za b\u011b\u017en\u00e9 a v z\u00e1kladn\u00edm kurzu opera\u010dn\u00edch syst\u00e9m\u016f se jimi auto\u0159i textu rozhodli zab\u00fdvat detailn\u011b, proto\u017ee drtiv\u00e1 v\u011bt\u0161ina modern\u00edch opera\u010dn\u00edch syst\u00e9m\u016f, na kter\u00e9 se kurz zam\u011b\u0159uje, nem\u00e1 architekturu s jasn\u011b odd\u011blen\u00fdm j\u00e1drem.",
        sectionNumber: "0.4.3",
        sectionTitle: "J\u00e1dro",
      },
      {
        uuid: "5d688992-13fe-4228-9110-f944daf90d24",
        correct:
          "Virtualizace opera\u010dn\u00edho syst\u00e9mu p\u0159edstavuje v\u00fdznamn\u00fd krok vp\u0159ed v oblasti izolace v\u00fdpo\u010detn\u00edch \u00faloh, nebo\u0165 na rozd\u00edl od tradi\u010dn\u00ed izolace proces\u016f, kterou poskytuje jeden opera\u010dn\u00ed syst\u00e9m, umo\u017e\u0148uje virtualizace vytvo\u0159it zcela odd\u011blen\u00e9 instance opera\u010dn\u00edch syst\u00e9m\u016f. T\u00edm se minimalizuje riziko vz\u00e1jemn\u00e9ho ovliv\u0148ov\u00e1n\u00ed a kontaminace \u00faloh, kter\u00e9 sd\u00edlej\u00ed fyzick\u00e9 zdroje, a zvy\u0161uje se celkov\u00e1 robustnost a bezpe\u010dnost syst\u00e9mu.",
        incorrect:
          "Virtualizace opera\u010dn\u00edho syst\u00e9mu sice nab\u00edz\u00ed ur\u010ditou \u00farove\u0148 izolace v\u00fdpo\u010detn\u00edch \u00faloh, av\u0161ak v podstat\u011b se jedn\u00e1 o stejn\u00fd mechanismus izolace jako u proces\u016f v r\u00e1mci jednoho opera\u010dn\u00edho syst\u00e9mu. Virtualizace opera\u010dn\u00edho syst\u00e9mu se prim\u00e1rn\u011b zam\u011b\u0159uje na efektivn\u011bj\u0161\u00ed sd\u00edlen\u00ed hardwarov\u00fdch zdroj\u016f a nezvy\u0161uje v\u00fdznamn\u011b \u00farove\u0148 izolace mezi jednotliv\u00fdmi \u00falohami b\u011b\u017e\u00edc\u00edmi na stejn\u00e9m fyzick\u00e9m po\u010d\u00edta\u010di.",
        sectionNumber: "0.4.4",
        sectionTitle: "Virtualizace OS",
      },
      {
        uuid: "3e2f5c11-5538-4a3f-9d4d-190ed4b3e445",
        correct:
          "Z pohledu spr\u00e1vy v\u00fdpo\u010detn\u00edch syst\u00e9m\u016f p\u0159in\u00e1\u0161\u00ed virtualizace opera\u010dn\u00edch syst\u00e9m\u016f zna\u010dn\u00e9 zjednodu\u0161en\u00ed, jeliko\u017e umo\u017e\u0148uje spravovat syst\u00e9m na \u00farovni jednotliv\u00fdch instanc\u00ed opera\u010dn\u00edho syst\u00e9mu, co\u017e je tradi\u010dn\u011b z\u00e1kladn\u00ed jednotka spr\u00e1vy.  Nav\u00edc, virtualizace otev\u00edr\u00e1 mo\u017enosti migrace, v\u010detn\u011b \u017eiv\u00e9 migrace b\u011b\u017e\u00edc\u00edch opera\u010dn\u00edch syst\u00e9m\u016f mezi r\u016fzn\u00fdmi fyzick\u00fdmi servery, co\u017e zvy\u0161uje flexibilitu a dostupnost slu\u017eeb a sni\u017euje nutnost pl\u00e1novan\u00fdch odst\u00e1vek.",
        incorrect:
          "Z pohledu spr\u00e1vy v\u00fdpo\u010detn\u00edch syst\u00e9m\u016f virtualizace opera\u010dn\u00edch syst\u00e9m\u016f ve skute\u010dnosti spr\u00e1vu komplikuje, proto\u017ee vy\u017eaduje spr\u00e1vu v\u00edce opera\u010dn\u00edch syst\u00e9m\u016f na jednom fyzick\u00e9m serveru, \u010d\u00edm\u017e se zvy\u0161uje administrativn\u00ed z\u00e1t\u011b\u017e. Migrace opera\u010dn\u00edch syst\u00e9m\u016f je sice teoreticky mo\u017en\u00e1, ale v praxi je velmi slo\u017eit\u00e1 a nespolehliv\u00e1, a \u017eiv\u00e1 migrace b\u011b\u017e\u00edc\u00edch opera\u010dn\u00edch syst\u00e9m\u016f je zcela nemo\u017en\u00e1 kv\u016fli technick\u00fdm omezen\u00edm virtualizace.",
        sectionNumber: "0.4.4",
        sectionTitle: "Virtualizace OS",
      },
      {
        uuid: "fc02aaef-561b-49c3-9090-96992c96b050",
        correct:
          "Jedn\u00edm z kl\u00ed\u010dov\u00fdch rys\u016f virtualizace opera\u010dn\u00edho syst\u00e9mu je schopnost provozovat v\u00edce instanc\u00ed opera\u010dn\u00edho syst\u00e9mu na jedin\u00e9m fyzick\u00e9m po\u010d\u00edta\u010di. Tato vlastnost umo\u017e\u0148uje efektivn\u011bj\u0161\u00ed vyu\u017eit\u00ed hardwarov\u00fdch zdroj\u016f a konsolidaci server\u016f, co\u017e vede ke sn\u00ed\u017een\u00ed n\u00e1klad\u016f na hardware a energie. Ka\u017ed\u00e1 instance opera\u010dn\u00edho syst\u00e9mu b\u011b\u017e\u00ed izolovan\u011b, co\u017e zvy\u0161uje bezpe\u010dnost a stabilitu cel\u00e9ho syst\u00e9mu.",
        incorrect:
          "Virtualizace opera\u010dn\u00edho syst\u00e9mu se prim\u00e1rn\u011b zam\u011b\u0159uje na zlep\u0161en\u00ed v\u00fdkonu jednoho opera\u010dn\u00edho syst\u00e9mu na fyzick\u00e9m po\u010d\u00edta\u010di a nikoli na provoz v\u00edce instanc\u00ed. My\u0161lenka provozov\u00e1n\u00ed v\u00edce opera\u010dn\u00edch syst\u00e9m\u016f na jednom fyzick\u00e9m po\u010d\u00edta\u010di je s virtualizac\u00ed neslu\u010diteln\u00e1, jeliko\u017e virtualizace je navr\u017eena tak, aby optimalizovala b\u011bh jedin\u00e9ho opera\u010dn\u00edho syst\u00e9mu pro maxim\u00e1ln\u00ed efektivitu.",
        sectionNumber: "0.4.4",
        sectionTitle: "Virtualizace OS",
      },
      {
        uuid: "0eaff0f2-cc96-4dff-b6d1-e80356bd64a2",
        correct:
          "P\u0159enositelnost opera\u010dn\u00edho syst\u00e9mu na r\u016fzn\u00e9 hardwarov\u00e9 platformy je usnadn\u011bna d\u00edky abstrakci, kter\u00e1 odd\u011bluje v\u011bt\u0161inu k\u00f3du opera\u010dn\u00edho syst\u00e9mu od specifick\u00fdch detail\u016f hardwaru, co\u017e umo\u017e\u0148uje modifikovat pouze tu \u010d\u00e1st syst\u00e9mu, kter\u00e1 interaguje p\u0159\u00edmo s hardwarem, zat\u00edmco zbytek syst\u00e9mu z\u016fst\u00e1v\u00e1 nezm\u011bn\u011bn.",
        incorrect:
          "P\u0159enositelnost opera\u010dn\u00edho syst\u00e9mu na r\u016fzn\u00e9 hardwarov\u00e9 platformy je usnadn\u011bna d\u00edky absenci abstrakce, kter\u00e1 p\u0159\u00edmo propojuje k\u00f3d opera\u010dn\u00edho syst\u00e9mu se specifick\u00fdmi detaily hardwaru, co\u017e umo\u017e\u0148uje modifikovat libovolnou \u010d\u00e1st syst\u00e9mu a dos\u00e1hnout tak snadn\u00e9 p\u0159enositelnosti mezi r\u016fzn\u00fdmi platformami.",
        sectionNumber: "0.4.5",
        sectionTitle: "P\u0159enositelnost",
      },
      {
        uuid: "55c276ed-e3ba-43b9-8d79-43d1f55829fb",
        correct:
          "P\u0159enositelnost aplika\u010dn\u00edho softwaru mezi r\u016fzn\u00fdmi opera\u010dn\u00edmi syst\u00e9my je komplikov\u00e1na, pokud aplikace vyu\u017e\u00edv\u00e1 vlastnosti a slu\u017eby specifick\u00e9 pro dan\u00fd opera\u010dn\u00ed syst\u00e9m, kter\u00e9 nejsou skryty pod abstraktn\u00edm rozhran\u00edm, co\u017e znamen\u00e1, \u017ee takov\u00e1 aplikace nemus\u00ed fungovat spr\u00e1vn\u011b na jin\u00e9m opera\u010dn\u00edm syst\u00e9mu bez \u00faprav.",
        incorrect:
          "P\u0159enositelnost aplika\u010dn\u00edho softwaru mezi r\u016fzn\u00fdmi opera\u010dn\u00edmi syst\u00e9my je zaru\u010dena, i kdy\u017e aplikace vyu\u017e\u00edv\u00e1 vlastnosti a slu\u017eby specifick\u00e9 pro dan\u00fd opera\u010dn\u00ed syst\u00e9m, proto\u017ee abstraktn\u00ed rozhran\u00ed opera\u010dn\u00edch syst\u00e9m\u016f zaji\u0161\u0165uje, \u017ee v\u0161echny aplikace budou fungovat identicky na jak\u00e9mkoli opera\u010dn\u00edm syst\u00e9mu bez nutnosti \u00faprav.",
        sectionNumber: "0.4.5",
        sectionTitle: "P\u0159enositelnost",
      },
    ],
  };
