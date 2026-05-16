import type { Section } from '../../common/types';

export const section9_interacting_with_the_world: Section = {
    uuid: "a969f0f0-d5f2-4a79-869f-8eb945d6588e",
    sectionNumber: "9",
    sectionTitle: "Interacting with the World",
    statements: [
      {
        uuid: "adf4799a-12c4-4576-97e4-3999186b10b8",
        correct:
          "Z\u00e1sadn\u00edm posunem od pouh\u00e9ho ru\u010dn\u00edho zapisov\u00e1n\u00ed p\u0159\u00edkaz\u016f k spustiteln\u00fdm skript\u016fm v shellu bylo zaveden\u00ed konceptu \u0159\u00edzen\u00ed toku programu. To umo\u017enilo do skript\u016f zahrnout podm\u00ednky, cykly a dal\u0161\u00ed konstrukce, kter\u00e9 dovoluj\u00ed automatizovat slo\u017eit\u011bj\u0161\u00ed \u00falohy a reagovat na r\u016fzn\u00e9 situace, \u010d\u00edm\u017e se shell skripty staly mnohem flexibiln\u011bj\u0161\u00edmi ne\u017e pouh\u00fd seznam line\u00e1rn\u011b prov\u00e1d\u011bn\u00fdch p\u0159\u00edkaz\u016f.",
        incorrect:
          "Z\u00e1sadn\u00edm posunem od pouh\u00e9ho ru\u010dn\u00edho zapisov\u00e1n\u00ed p\u0159\u00edkaz\u016f k spustiteln\u00fdm skript\u016fm v shellu bylo zaveden\u00ed striktn\u00edho typov\u00e9ho syst\u00e9mu pro prom\u011bnn\u00e9. To umo\u017enilo l\u00e9pe kontrolovat datov\u00e9 typy a p\u0159edch\u00e1zet chyb\u00e1m p\u0159i manipulaci s daty, \u010d\u00edm\u017e se shell skripty staly robustn\u011bj\u0161\u00edmi pro v\u00fdvoj komplexn\u00edch aplikac\u00ed s vysok\u00fdmi n\u00e1roky na bezpe\u010dnost.",
        sectionNumber: "9.1.1",
        sectionTitle: "Shell",
      },
      {
        uuid: "0cab4425-11cd-4ab4-b032-b1006e2f07e6",
        correct:
          "Koncept prom\u011bnn\u00fdch v shell skriptech vych\u00e1z\u00ed z pot\u0159eby z\u00e1stupn\u00fdch symbol\u016f, kter\u00e9 se v dob\u011b b\u011bhu skriptu nahrazuj\u00ed konkr\u00e9tn\u00edmi hodnotami. Tato my\u0161lenka, inspirovan\u00e1 pou\u017e\u00edv\u00e1n\u00edm z\u00e1stupn\u00fdch jmen soubor\u016f v ru\u010dn\u011b psan\u00fdch pozn\u00e1mk\u00e1ch, umo\u017enila vytv\u00e1\u0159et univerz\u00e1ln\u011bj\u0161\u00ed skripty, kter\u00e9 lze snadno adaptovat pro r\u016fzn\u00e9 vstupy a kontexty, ani\u017e by bylo nutn\u00e9 modifikovat samotn\u00fd k\u00f3d skriptu.",
        incorrect:
          "Koncept prom\u011bnn\u00fdch v shell skriptech byl inspirov\u00e1n modern\u00edmi programovac\u00edmi jazyky a jejich siln\u00fdmi typov\u00fdmi syst\u00e9my. C\u00edlem bylo zav\u00e9st do shell skript\u016f mechanismus pro definov\u00e1n\u00ed slo\u017eit\u00fdch datov\u00fdch struktur a objektov\u011b orientovan\u00e9 programov\u00e1n\u00ed, co\u017e m\u011blo v\u00e9st k v\u011bt\u0161\u00ed modularit\u011b a znovupou\u017eitelnosti k\u00f3du a umo\u017enit v\u00fdvoj rozs\u00e1hl\u00fdch softwarov\u00fdch syst\u00e9m\u016f.",
        sectionNumber: "9.1.1",
        sectionTitle: "Shell",
      },
      {
        uuid: "a07fd6ae-cf5e-41c7-84fa-d1e2d5f219c9",
        correct:
          "Jedn\u00edm z rys\u016f shell skript\u016f, kter\u00fd se do zna\u010dn\u00e9 m\u00edry p\u0159enesl z manu\u00e1ln\u00edho p\u0159\u00edstupu k z\u00e1pisu p\u0159\u00edkaz\u016f, je nedostate\u010dn\u00e9 explicitn\u00ed zpracov\u00e1n\u00ed chyb. Stejn\u011b jako v pap\u00edrov\u00fdch pozn\u00e1mk\u00e1ch, kde se nep\u0159edpokl\u00e1d\u00e1 detailn\u00ed instrukce pro p\u0159\u00edpad selh\u00e1n\u00ed, i shell skripty tradi\u010dn\u011b postr\u00e1daj\u00ed robustn\u00ed mechanismy pro zachyt\u00e1v\u00e1n\u00ed a \u0159e\u0161en\u00ed chyb, co\u017e klade v\u011bt\u0161\u00ed n\u00e1roky na pozornost program\u00e1tora p\u0159i n\u00e1vrhu a testov\u00e1n\u00ed skript\u016f.",
        incorrect:
          "Shell skripty se vyzna\u010duj\u00ed propracovan\u00fdm syst\u00e9mem pro explicitn\u00ed zpracov\u00e1n\u00ed chyb, kter\u00fd byl implementov\u00e1n s c\u00edlem zv\u00fd\u0161it spolehlivost a robustnost skript\u016f. Tento syst\u00e9m umo\u017e\u0148uje program\u00e1tor\u016fm definovat detailn\u00ed reakce na r\u016fzn\u00e9 typy chyb, v\u010detn\u011b mechanism\u016f pro obnovu z chybov\u00fdch stav\u016f a logov\u00e1n\u00ed, co\u017e \u010din\u00ed shell skripty vhodn\u00fdmi pro kritick\u00e9 aplikace vy\u017eaduj\u00edc\u00ed vysokou \u00farove\u0148 odolnosti proti chyb\u00e1m.",
        sectionNumber: "9.1.1",
        sectionTitle: "Shell",
      },
      {
        uuid: "3158a331-c477-4690-bc36-74e3397496ce",
        correct:
          "V\u011bt\u0161ina shell\u016f, jak je uvedeno v materi\u00e1lech, nab\u00edz\u00ed interaktivn\u00ed re\u017eim, kter\u00fd umo\u017e\u0148uje u\u017eivateli zad\u00e1vat jednotliv\u00e9 p\u0159\u00edkazy nebo i komplexn\u011bj\u0161\u00ed konstrukce, jako jsou smy\u010dky, p\u0159\u00edmo z kl\u00e1vesnice. Po potvrzen\u00ed zadan\u00e9ho p\u0159\u00edkazu dojde k jeho okam\u017eit\u00e9mu proveden\u00ed. Tento interaktivn\u00ed p\u0159\u00edstup tvo\u0159\u00ed z\u00e1klad pro ovl\u00e1d\u00e1n\u00ed opera\u010dn\u00edho syst\u00e9mu prost\u0159ednictv\u00edm p\u0159\u00edkazov\u00e9 \u0159\u00e1dky a umo\u017e\u0148uje rychl\u00e9 testov\u00e1n\u00ed a spou\u0161t\u011bn\u00ed jednotliv\u00fdch operac\u00ed.",
        incorrect:
          "Pouze men\u0161ina shell\u016f disponuje interaktivn\u00edm re\u017eimem, kter\u00fd by umo\u017e\u0148oval zad\u00e1v\u00e1n\u00ed jednotliv\u00fdch p\u0159\u00edkaz\u016f z kl\u00e1vesnice. V\u011bt\u0161ina shell\u016f vy\u017eaduje p\u0159edem napsan\u00e9 skripty a interaktivn\u00ed re\u017eim je dostupn\u00fd jen pro velmi omezen\u00fd soubor operac\u00ed. Potvrzen\u00ed p\u0159\u00edkazu v interaktivn\u00edm re\u017eimu neznamen\u00e1 jeho okam\u017eit\u00e9 proveden\u00ed, ale za\u0159azen\u00ed do fronty \u00faloh, co\u017e zdr\u017euje interaktivn\u00ed pr\u00e1ci a testov\u00e1n\u00ed jednotliv\u00fdch funkc\u00ed.",
        sectionNumber: "9.1.2",
        sectionTitle: "Interactive Shells",
      },
      {
        uuid: "a094e6cc-0110-42fc-be27-a338128cb25a",
        correct:
          "Interaktivn\u00ed re\u017eim shellu a shell skripty sd\u00edlej\u00ed naprosto stejnou syntaxi a sadu dostupn\u00fdch p\u0159\u00edkaz\u016f a konstrukc\u00ed. To znamen\u00e1, \u017ee jak\u00e1koliv syntax, kterou lze pou\u017e\u00edt v shell skriptu, je pln\u011b platn\u00e1 a funk\u010dn\u00ed i v interaktivn\u00edm re\u017eimu p\u0159\u00edkazov\u00e9 \u0159\u00e1dky. Tato jednotnost umo\u017e\u0148uje u\u017eivatel\u016fm snadno p\u0159ech\u00e1zet mezi interaktivn\u00edm testov\u00e1n\u00edm p\u0159\u00edkaz\u016f a vytv\u00e1\u0159en\u00edm komplexn\u011bj\u0161\u00edch skript\u016f bez nutnosti u\u010dit se odli\u0161n\u00e9 syntaktick\u00e9 pravidla.",
        incorrect:
          "Syntaxe a dostupn\u00e9 p\u0159\u00edkazy se v\u00fdznamn\u011b li\u0161\u00ed mezi interaktivn\u00edm re\u017eimem shellu a shell skripty. Interaktivn\u00ed re\u017eim je zna\u010dn\u011b omezen na z\u00e1kladn\u00ed sadu p\u0159\u00edkaz\u016f a nepodporuje pokro\u010dil\u00e9 konstrukce, kter\u00e9 jsou b\u011b\u017en\u011b dostupn\u00e9 v shell skriptech, jako jsou nap\u0159\u00edklad slo\u017eit\u011bj\u0161\u00ed \u0159\u00eddic\u00ed struktury nebo u\u017eivatelsky definovan\u00e9 funkce. Kv\u016fli t\u011bmto rozd\u00edl\u016fm je nutn\u00e9 se u\u010dit odli\u0161n\u00e1 pravidla pro interaktivn\u00ed pr\u00e1ci a pro psan\u00ed skript\u016f.",
        sectionNumber: "9.1.2",
        sectionTitle: "Interactive Shells",
      },
      {
        uuid: "84500c67-ec02-4d10-bee1-672e7a97bc56",
        correct:
          'Mo\u017enost psan\u00ed kr\u00e1tk\u00fdch skript\u016f p\u0159\u00edmo v p\u0159\u00edkazov\u00e9 \u0159\u00e1dce, takzvan\u00fdch "one-liners", je v interaktivn\u00edm shellu pln\u011b podporov\u00e1na a p\u0159edstavuje efektivn\u00ed n\u00e1stroj pro automatizaci jednoduch\u00fdch, ale opakuj\u00edc\u00edch se \u00fakol\u016f. Tato dovednost umo\u017e\u0148uje u\u017eivatel\u016fm rychle kombinovat p\u0159\u00edkazy a konstrukce shellu pro \u0159e\u0161en\u00ed ad hoc probl\u00e9m\u016f bez nutnosti vytv\u00e1\u0159et samostatn\u00e9 skriptov\u00e9 soubory, co\u017e v\u00fdznamn\u011b \u0161et\u0159\u00ed \u010das a zefektiv\u0148uje pr\u00e1ci.',
        incorrect:
          'Psan\u00ed kr\u00e1tk\u00fdch skript\u016f "one-liners" v interaktivn\u00edm re\u017eimu shellu je sice technicky mo\u017en\u00e9, ale pova\u017euje se za nevhodn\u00e9 a neefektivn\u00ed. Interaktivn\u00ed re\u017eim je prim\u00e1rn\u011b ur\u010den pro spou\u0161t\u011bn\u00ed jednotliv\u00fdch p\u0159\u00edkaz\u016f a nikoliv pro vytv\u00e1\u0159en\u00ed skript\u016f, i kdy\u017e kr\u00e1tk\u00fdch. Pro automatizaci \u00fakol\u016f by v\u017edy m\u011bly b\u00fdt preferov\u00e1ny samostatn\u00e9 skriptov\u00e9 soubory, kter\u00e9 jsou l\u00e9pe \u010diteln\u00e9 a udr\u017eovateln\u00e9, ne\u017e "one-liners" psan\u00e9 v p\u0159\u00edkazov\u00e9 \u0159\u00e1dce.',
        sectionNumber: "9.1.2",
        sectionTitle: "Interactive Shells",
      },
      {
        uuid: "07e9eb88-2eb2-412e-a5d6-771ecaef1da8",
        correct:
          "V kontrastu k interaktivn\u00edmu prov\u00e1d\u011bn\u00ed p\u0159\u00edkaz\u016f je shell skript soubor obsahuj\u00edc\u00ed seznam p\u0159\u00edkaz\u016f, kter\u00e9 jsou prov\u00e1d\u011bny sekven\u010dn\u011b, p\u0159i\u010dem\u017e z\u00e1kladn\u00ed konstrukce \u0159\u00edzen\u00ed toku programu umo\u017e\u0148uj\u00ed tuto sekven\u010dn\u00ed posloupnost v p\u0159\u00edpad\u011b pot\u0159eby modifikovat a prom\u011bnn\u00e9 umo\u017e\u0148uj\u00ed substituci \u010d\u00e1st\u00ed p\u0159\u00edkaz\u016f.",
        incorrect:
          "V kontrastu k interaktivn\u00edmu prov\u00e1d\u011bn\u00ed p\u0159\u00edkaz\u016f je shell skript interaktivn\u00ed prost\u0159ed\u00ed, kter\u00e9 neobsahuje seznam p\u0159eddefinovan\u00fdch p\u0159\u00edkaz\u016f, ale umo\u017e\u0148uje u\u017eivateli zad\u00e1vat a prov\u00e1d\u011bt p\u0159\u00edkazy v libovoln\u00e9m po\u0159ad\u00ed bez mo\u017enosti sekven\u010dn\u00edho prov\u00e1d\u011bn\u00ed nebo pou\u017eit\u00ed prom\u011bnn\u00fdch.",
        sectionNumber: "9.1.3",
        sectionTitle: "Shell Scripts",
      },
      {
        uuid: "258badaa-97fd-48ea-872d-20de307844ca",
        correct:
          "Shell script je spustiteln\u00fd soubor obsahuj\u00edc\u00ed sekvenci p\u0159\u00edkaz\u016f, kter\u00e9 jsou prov\u00e1d\u011bny sekven\u010dn\u011b, podobn\u011b jako p\u0159i p\u0159\u00edm\u00e9m zad\u00e1v\u00e1n\u00ed p\u0159\u00edkaz\u016f do shellu, ale nab\u00edz\u00ed tak\u00e9 mo\u017enost pou\u017eit\u00ed prvk\u016f strukturovan\u00e9ho programov\u00e1n\u00ed pro \u0159\u00edzen\u00ed toku prov\u00e1d\u011bn\u00ed a prom\u011bnn\u00fdch pro dynamickou modifikaci p\u0159\u00edkaz\u016f.",
        incorrect:
          "Shell script je soubor, kter\u00fd na rozd\u00edl od spustiteln\u00fdch soubor\u016f neobsahuje sekvenci p\u0159\u00edkaz\u016f pro sekven\u010dn\u00ed prov\u00e1d\u011bn\u00ed, ale slou\u017e\u00ed pouze jako \u00falo\u017en\u00e9 m\u00edsto pro jednotliv\u00e9 p\u0159\u00edkazy, kter\u00e9 jsou prov\u00e1d\u011bny interaktivn\u011b a nepodporuje strukturovan\u00e9 programov\u00e1n\u00ed nebo prom\u011bnn\u00e9.",
        sectionNumber: "9.1.3",
        sectionTitle: "Shell Scripts",
      },
      {
        uuid: "2adb1645-551a-4111-9888-8add5e245236",
        correct:
          "V nejjednodu\u0161\u0161\u00ed form\u011b shell skript sest\u00e1v\u00e1 z posloupnosti p\u0159\u00edkaz\u016f, kde ka\u017ed\u00fd p\u0159\u00edkaz je um\u00edst\u011bn na samostatn\u00e9m \u0159\u00e1dku, a jeho spu\u0161t\u011bn\u00ed se podob\u00e1 postupn\u00e9mu zad\u00e1v\u00e1n\u00ed t\u011bchto p\u0159\u00edkaz\u016f p\u0159\u00edmo v p\u0159\u00edkazov\u00e9 \u0159\u00e1dce, av\u0161ak shell skripty mohou b\u00fdt roz\u0161\u00ed\u0159eny o konstrukce strukturovan\u00e9ho programov\u00e1n\u00ed.",
        incorrect:
          "V nejjednodu\u0161\u0161\u00ed form\u011b shell skript sest\u00e1v\u00e1 z jedin\u00e9ho p\u0159\u00edkazu na jedin\u00e9m \u0159\u00e1dku a jeho spu\u0161t\u011bn\u00ed se li\u0161\u00ed od p\u0159\u00edm\u00e9ho zad\u00e1v\u00e1n\u00ed p\u0159\u00edkaz\u016f v p\u0159\u00edkazov\u00e9 \u0159\u00e1dce, jeliko\u017e shell skripty z\u00e1sadn\u011b nepodporuj\u00ed strukturovan\u00e9 programov\u00e1n\u00ed ani posloupnost v\u00edce p\u0159\u00edkaz\u016f.",
        sectionNumber: "9.1.3",
        sectionTitle: "Shell Scripts",
      },
      {
        uuid: "5ea8face-4caa-4671-9843-8898b656d999",
        correct:
          "Shell skriptov\u00e1n\u00ed se ukazuje jako velmi produktivn\u00ed a snadn\u00e9 k pou\u017eit\u00ed, zejm\u00e9na v situac\u00edch, kde se nejedn\u00e1 o rozs\u00e1hl\u00e9 programov\u00e1n\u00ed, ale sp\u00ed\u0161e o automatizaci jednoduch\u00fdch \u00fakol\u016f, kter\u00e9 by u\u017eivatel jinak musel prov\u00e1d\u011bt manu\u00e1ln\u011b, nap\u0159\u00edklad zad\u00e1v\u00e1n\u00edm p\u0159\u00edkaz\u016f v termin\u00e1lu.",
        incorrect:
          "Shell skriptov\u00e1n\u00ed je navr\u017eeno pro v\u00fdvoj rozs\u00e1hl\u00fdch a komplexn\u00edch aplikac\u00ed, a proto se vyzna\u010duje robustnost\u00ed a snadnou \u00fadr\u017ebou i v p\u0159\u00edpad\u011b rozs\u00e1hl\u00fdch projekt\u016f s mnoha funkcemi a slo\u017eitou logikou, \u010d\u00edm\u017e p\u0159ekon\u00e1v\u00e1 i specializovan\u00e9 skriptovac\u00ed jazyky.",
        sectionNumber: "9.1.4",
        sectionTitle: "Shell Upsides",
      },
      {
        uuid: "25b95ff2-8b99-4c76-b34d-8363af96271f",
        correct:
          "Pro rozs\u00e1hlej\u0161\u00ed programy se omezen\u00ed shell skriptov\u00e1n\u00ed st\u00e1vaj\u00ed v\u00fdznamn\u00fdmi, jeliko\u017e v\u011bt\u0161\u00ed programy se nemohou jednodu\u0161e zastavit p\u0159i ka\u017ed\u00e9 chyb\u011b, ani nemohou ignorovat chyby, co\u017e jsou dv\u011b z\u00e1kladn\u00ed strategie dostupn\u00e9 v shell skriptech, co\u017e vede k probl\u00e9m\u016fm s robustnost\u00ed a \u00fadr\u017ebou.",
        incorrect:
          "Pro rozs\u00e1hlej\u0161\u00ed programy je shell skriptov\u00e1n\u00ed ide\u00e1ln\u00ed volbou, nebo\u0165 jeho robustnost a schopnost efektivn\u011b zpracov\u00e1vat chyby z n\u011bj \u010din\u00ed preferovan\u00e9 \u0159e\u0161en\u00ed pro komplexn\u00ed aplikace, kde je kl\u00ed\u010dov\u00e1 spolehlivost a minimalizace rizika selh\u00e1n\u00ed i v ne\u010dekan\u00fdch situac\u00edch.",
        sectionNumber: "9.1.4",
        sectionTitle: "Shell Upsides",
      },
      {
        uuid: "1d39fdaf-1b15-4798-87a1-c13b57e3c15d",
        correct:
          "Bourne shell, vytvo\u0159en\u00fd v roce 1976, z\u00e1sadn\u011b ovlivnil v\u00fdvoj shell\u016f t\u00edm, \u017ee kodifikoval jejich interaktivn\u00ed i programovatelnou povahu, a jeho z\u00e1kladn\u00ed model a syntaxe se dodnes pou\u017e\u00edvaj\u00ed v mnoha kompatibiln\u00edch shellech, v\u010detn\u011b \u0161iroce roz\u0161\u00ed\u0159en\u00e9ho bash.",
        incorrect:
          "P\u0159esto\u017ee Bourne shell, kter\u00fd vznikl a\u017e po roce 1980, m\u011bl ur\u010dit\u00fd vliv na programov\u00e1n\u00ed shell\u016f, jeho interaktivn\u00ed aspekty a syntaxe jsou dnes ji\u017e zastaral\u00e9 a modern\u00ed shelly jako bash se v mnoha ohledech odli\u0161uj\u00ed od jeho p\u016fvodn\u00edho n\u00e1vrhu.",
        sectionNumber: "9.1.5",
        sectionTitle: "Bourne Shell",
      },
      {
        uuid: "e88bc172-d999-4277-8d46-331f3eb1d9fe",
        correct:
          "A\u010dkoli standard POSIX specifikuje pouze po\u017eadavek na existenci shellu s n\u00e1zvem 'sh' v syst\u00e9mu a explicitn\u011b neur\u010duje jeho um\u00edst\u011bn\u00ed, v praxi drtiv\u00e1 v\u011bt\u0161ina opera\u010dn\u00edch syst\u00e9m\u016f, kter\u00e9 jsou kompatibiln\u00ed s POSIX, umis\u0165uje spustiteln\u00fd soubor 'sh' do adres\u00e1\u0159e '/bin', vedle ostatn\u00edch kl\u00ed\u010dov\u00fdch syst\u00e9mov\u00fdch n\u00e1stroj\u016f.",
        incorrect:
          "Standard POSIX kategoricky na\u0159izuje, \u017ee shell s n\u00e1zvem 'sh' mus\u00ed b\u00fdt bezpodm\u00edne\u010dn\u011b um\u00edst\u011bn v adres\u00e1\u0159i '/bin' na v\u0161ech syst\u00e9mech, kter\u00e9 se hl\u00e1s\u00ed k POSIX kompatibilit\u011b, co\u017e je striktn\u00ed po\u017eadavek pro zaji\u0161t\u011bn\u00ed jednotn\u00e9 struktury syst\u00e9mov\u00fdch utilit.",
        sectionNumber: "9.1.5",
        sectionTitle: "Bourne Shell",
      },
      {
        uuid: "f2a2d88b-261e-4c3a-ac46-90f9e4583dd2",
        correct:
          "Historicky druh\u00fdm zn\u00e1m\u00fdm UNIXov\u00fdm shellem byl C shell, zn\u00e1m\u00fd tak\u00e9 jako csh, kter\u00fd byl poprv\u00e9 vyd\u00e1n v roce 1978 a p\u0159inesl vylep\u0161en\u00ed interaktivn\u00edho re\u017eimu oproti shellu Bourne z roku 1976, v\u010detn\u011b historie p\u0159\u00edkaz\u016f a alias\u016f, p\u0159i\u010dem\u017e syntaxe C shellu je popisov\u00e1na jako v\u00edce C-like ne\u017e Bourne Shell, i kdy\u017e ne zcela C-like.",
        incorrect:
          "Historicky prvn\u00edm zn\u00e1m\u00fdm UNIXov\u00fdm shellem byl C shell, zn\u00e1m\u00fd tak\u00e9 jako csh, kter\u00fd byl poprv\u00e9 vyd\u00e1n v roce 1976 a nep\u0159inesl vylep\u0161en\u00ed interaktivn\u00edho re\u017eimu oproti shellu Bourne z roku 1978, v\u010detn\u011b historie p\u0159\u00edkaz\u016f a alias\u016f, p\u0159i\u010dem\u017e syntaxe C shellu je popisov\u00e1na jako m\u00e9n\u011b C-like ne\u017e Bourne Shell a je zcela C-like.",
        sectionNumber: "9.1.6",
        sectionTitle: "C Shell",
      },
      {
        uuid: "2003a469-f6b3-4db0-898b-2f818177d444",
        correct:
          "Varianta shellu C shell, zn\u00e1m\u00e1 jako tcsh, je v\u011btv\u00ed s dodate\u010dn\u00fdmi funkcemi, kter\u00e1 je udr\u017eov\u00e1na soub\u011b\u017en\u011b s p\u016fvodn\u00edm C shell od po\u010d\u00e1tku 80. let a je st\u00e1le distribuov\u00e1na s mnoha opera\u010dn\u00edmi syst\u00e9my, nap\u0159\u00edklad jako v\u00fdchoz\u00ed shell pro u\u017eivatele root v syst\u00e9mu FreeBSD, p\u0159i\u010dem\u017e tcsh p\u0159id\u00e1v\u00e1 nap\u0159\u00edklad dokon\u010dov\u00e1n\u00ed p\u0159\u00edkaz\u016f a n\u00e1zv\u016f soubor\u016f.",
        incorrect:
          "Varianta shellu C shell, zn\u00e1m\u00e1 jako tcsh, je star\u0161\u00ed verz\u00ed bez dodate\u010dn\u00fdch funkc\u00ed, kter\u00e1 byla nahrazena p\u016fvodn\u00edm C shell v polovin\u011b 70. let a ji\u017e nen\u00ed distribuov\u00e1na s \u017e\u00e1dn\u00fdmi opera\u010dn\u00edmi syst\u00e9my, a to ani jako v\u00fdchoz\u00ed shell pro u\u017eivatele root v syst\u00e9mu FreeBSD, p\u0159i\u010dem\u017e tcsh neobsahuje nap\u0159\u00edklad dokon\u010dov\u00e1n\u00ed p\u0159\u00edkaz\u016f a n\u00e1zv\u016f soubor\u016f.",
        sectionNumber: "9.1.6",
        sectionTitle: "C Shell",
      },
      {
        uuid: "5c42708d-db65-4e23-9e88-bba2df78a087",
        correct:
          "Korn shell, zn\u00e1m\u00fd tak\u00e9 jako ksh a poprv\u00e9 vydan\u00fd v roce 1983, p\u0159edstavuje hybridn\u00ed p\u0159\u00edstup kombinuj\u00edc\u00ed vlastnosti Bourne shell (sh) a C shell (csh) s c\u00edlem nab\u00eddnout vylep\u0161enou interakci s u\u017eivatelem, p\u0159i\u010dem\u017e syntaxe skriptov\u00e1n\u00ed z\u016fstala v\u011brn\u00e1 Bourne shell.",
        incorrect:
          "Korn shell, zn\u00e1m\u00fd tak\u00e9 jako ksh a poprv\u00e9 vydan\u00fd v roce 1983, je prim\u00e1rn\u011b zalo\u017een na syntaxi C shell (csh) a tcsh, a integruje vybran\u00e9 prvky z Bourne shell (sh) s d\u016frazem na vylep\u0161enou interakci s u\u017eivatelem a modern\u00ed skriptovac\u00ed funkce.",
        sectionNumber: "9.1.7",
        sectionTitle: "Korn Shell",
      },
      {
        uuid: "241000e6-7229-49b8-a843-940bf92e001d",
        correct:
          "Specifikace POSIX.2, kter\u00e1 definuje standardy pro opera\u010dn\u00ed syst\u00e9my typu UNIX, vych\u00e1z\u00ed z Korn shell (ksh) jako modelov\u00e9ho p\u0159\u00edkladu pro implementaci shellu /bin/sh, co\u017e zd\u016fraz\u0148uje v\u00fdznam ksh v standardizaci a v\u00fdvoji unixov\u00fdch prost\u0159ed\u00ed.",
        incorrect:
          "Specifikace POSIX.2, kter\u00e1 definuje standardy pro opera\u010dn\u00ed syst\u00e9my typu UNIX, vych\u00e1z\u00ed z C shell (csh) jako modelov\u00e9ho p\u0159\u00edkladu pro implementaci shellu /bin/sh, a Korn shell (ksh) je pova\u017eov\u00e1n za alternativn\u00ed shell s odli\u0161n\u00fdmi standardy.",
        sectionNumber: "9.1.7",
        sectionTitle: "Korn Shell",
      },
      {
        uuid: "7b886738-569c-4df2-b9a4-aa55d420bcf5",
        correct:
          "P\u0159\u00edkaz v shellu m\u016f\u017ee b\u00fdt jm\u00e9no spustiteln\u00e9ho souboru, \u0159\u00eddic\u00ed struktura nebo vestav\u011bn\u00fd p\u0159\u00edkaz. Pokud se jedn\u00e1 o jm\u00e9no spustiteln\u00e9ho souboru, shell nejprve ov\u011b\u0159\u00ed, zda se nejedn\u00e1 o vestav\u011bn\u00fd p\u0159\u00edkaz nebo \u0159\u00eddic\u00ed strukturu, a pokud ne, hled\u00e1 spustiteln\u00fd soubor v adres\u00e1\u0159\u00edch ur\u010den\u00fdch prom\u011bnnou prost\u0159ed\u00ed PATH.",
        incorrect:
          "P\u0159\u00edkaz v shellu je v\u017edy jm\u00e9no spustiteln\u00e9ho souboru. Shell prov\u00e1d\u00ed p\u0159\u00edkazy p\u0159\u00edmo ve st\u00e1vaj\u00edc\u00edm procesu shellu bez nutnosti vytv\u00e1\u0159et nov\u00fd proces, co\u017e minimalizuje re\u017eii spojenou s prov\u00e1d\u011bn\u00edm p\u0159\u00edkaz\u016f a zaji\u0161\u0165uje maxim\u00e1ln\u00ed efektivitu.",
        sectionNumber: "9.1.8",
        sectionTitle: "Commands",
      },
      {
        uuid: "485b2caf-cc67-4ff2-b173-d832c83e0b01",
        correct:
          "Pro spu\u0161t\u011bn\u00ed p\u0159\u00edkazu, kter\u00fd je jm\u00e9nem spustiteln\u00e9ho souboru, shell typicky pou\u017e\u00edv\u00e1 syst\u00e9mov\u00e9 vol\u00e1n\u00ed `fork` pro vytvo\u0159en\u00ed nov\u00e9ho procesu a n\u00e1sledn\u011b v tomto nov\u00e9m procesu vol\u00e1n\u00ed `exec` pro spu\u0161t\u011bn\u00ed zadan\u00e9ho spustiteln\u00e9ho souboru. P\u016fvodn\u00ed proces shellu pot\u00e9 \u010dek\u00e1 na dokon\u010den\u00ed spu\u0161t\u011bn\u00e9ho programu pomoc\u00ed vol\u00e1n\u00ed `wait`.",
        incorrect:
          "Pro spu\u0161t\u011bn\u00ed p\u0159\u00edkazu shell pou\u017e\u00edv\u00e1 syst\u00e9mov\u00e9 vol\u00e1n\u00ed `exec` v aktu\u00e1ln\u00edm procesu shellu, \u010d\u00edm\u017e nahrad\u00ed st\u00e1vaj\u00edc\u00ed proces shellu procesem spou\u0161t\u011bn\u00e9ho p\u0159\u00edkazu. P\u016fvodn\u00ed proces shellu se nerozd\u011bluje a ne\u010dek\u00e1 na dokon\u010den\u00ed spu\u0161t\u011bn\u00e9ho programu v samostatn\u00e9m procesu.",
        sectionNumber: "9.1.8",
        sectionTitle: "Commands",
      },
      {
        uuid: "843c4679-f696-45f6-aaf0-72d75de34b5e",
        correct:
          "Vytv\u00e1\u0159en\u00ed nov\u00e9ho procesu pro ka\u017ed\u00fd spou\u0161t\u011bn\u00fd p\u0159\u00edkaz pomoc\u00ed syst\u00e9mov\u00fdch vol\u00e1n\u00ed `fork` a `exec` je relativn\u011b n\u00e1kladn\u00e9 z hlediska syst\u00e9mov\u00fdch zdroj\u016f. Tato re\u017eie se m\u016f\u017ee st\u00e1t znatelnou, zejm\u00e9na p\u0159i prov\u00e1d\u011bn\u00ed velk\u00e9ho mno\u017estv\u00ed kr\u00e1tk\u00fdch p\u0159\u00edkaz\u016f, kdy samotn\u00e9 spou\u0161t\u011bn\u00ed p\u0159\u00edkaz\u016f trv\u00e1 m\u00e9n\u011b \u010dasu ne\u017e vytv\u00e1\u0159en\u00ed proces\u016f.",
        incorrect:
          "Vytv\u00e1\u0159en\u00ed nov\u00e9ho procesu pro ka\u017ed\u00fd spou\u0161t\u011bn\u00fd p\u0159\u00edkaz pomoc\u00ed syst\u00e9mov\u00fdch vol\u00e1n\u00ed `fork` a `exec` je velmi nen\u00e1ro\u010dn\u00e9 na syst\u00e9mov\u00e9 zdroje a nep\u0159edstavuje v\u00fdznamnou re\u017eii, a to ani p\u0159i prov\u00e1d\u011bn\u00ed velk\u00e9ho mno\u017estv\u00ed p\u0159\u00edkaz\u016f, proto\u017ee modern\u00ed opera\u010dn\u00ed syst\u00e9my jsou optimalizov\u00e1ny pro rychl\u00e9 vytv\u00e1\u0159en\u00ed proces\u016f.",
        sectionNumber: "9.1.8",
        sectionTitle: "Commands",
      },
      {
        uuid: "56a10c9f-d5e0-4298-a99e-a0487b0c5399",
        correct:
          "P\u0159\u00edkaz `exec` se v shellu interpretuje speci\u00e1ln\u00edm zp\u016fsobem, kter\u00fd se li\u0161\u00ed od standardn\u00edho spou\u0161t\u011bn\u00ed program\u016f pomoc\u00ed `fork` a `exec`.  Hlavn\u00edm d\u016fvodem pro tuto odli\u0161nou interpretaci je funk\u010dnost, proto\u017ee p\u0159\u00edkaz `exec` je navr\u017een tak, aby nahradil st\u00e1vaj\u00edc\u00ed shell proces nov\u00fdm procesem bez nutnosti vytv\u00e1\u0159et nov\u00fd proces pomoc\u00ed `fork`, co\u017e je kl\u00ed\u010dov\u00e9 pro operace, kter\u00e9 vy\u017eaduj\u00ed zm\u011bny v samotn\u00e9m shellu, a nikoliv v jeho potomc\u00edch.",
        incorrect:
          "P\u0159\u00edkaz `exec` je v shellu interpretov\u00e1n standardn\u00edm zp\u016fsobem, tedy pomoc\u00ed vol\u00e1n\u00ed `fork` a n\u00e1sledn\u011b `exec`, stejn\u011b jako v\u011bt\u0161ina extern\u00edch program\u016f. D\u016fvodem t\u00e9to standardn\u00ed interpretace je optimalizace v\u00fdkonu, jeliko\u017e `exec` je \u010dasto pou\u017e\u00edv\u00e1n v skriptech a vytv\u00e1\u0159en\u00ed nov\u00fdch proces\u016f by bylo neefektivn\u00ed. Tato interpretace zaji\u0161\u0165uje, \u017ee `exec` prov\u00e1d\u00ed svou funkci nahrazen\u00ed procesu efektivn\u011b a bez zbyte\u010dn\u00e9 re\u017eie.",
        sectionNumber: "9.1.9",
        sectionTitle: "Built-in Commands",
      },
      {
        uuid: "d5aa30ae-28b6-4275-9470-e9b68b23e79b",
        correct:
          "P\u0159\u00edkazy `cd` a `export` jsou v shellu interpretov\u00e1ny speci\u00e1ln\u011b z d\u016fvodu funk\u010dnosti, proto\u017ee jejich \u00fa\u010delem je prov\u00e1d\u011bt zm\u011bny, kter\u00e9 ovliv\u0148uj\u00ed p\u0159\u00edmo hlavn\u00ed shell proces.  Zm\u011bna pracovn\u00edho adres\u00e1\u0159e pomoc\u00ed `cd` a \u00faprava prost\u0159ed\u00ed pomoc\u00ed `export` mus\u00ed b\u00fdt provedeny v kontextu hlavn\u00edho shell procesu, aby byly trval\u00e9 a m\u011bly vliv na dal\u0161\u00ed operace prov\u00e1d\u011bn\u00e9 v shellu. Standardn\u00ed spou\u0161t\u011bn\u00ed pomoc\u00ed `fork` a `exec` by nebylo vhodn\u00e9, proto\u017ee zm\u011bny by se projevily pouze v dce\u0159in\u00e9m procesu.",
        incorrect:
          "P\u0159\u00edkazy `cd` a `export` jsou v shellu interpretov\u00e1ny speci\u00e1ln\u011b z d\u016fvodu optimalizace v\u00fdkonu, jeliko\u017e se jedn\u00e1 o \u010dasto pou\u017e\u00edvan\u00e9 p\u0159\u00edkazy, zejm\u00e9na v skriptech. Speci\u00e1ln\u00ed interpretace t\u011bchto p\u0159\u00edkaz\u016f zabra\u0148uje vytv\u00e1\u0159en\u00ed nov\u00fdch proces\u016f pomoc\u00ed `fork` a `exec`, co\u017e sni\u017euje re\u017eii a zrychluje prov\u00e1d\u011bn\u00ed t\u011bchto operac\u00ed. Hlavn\u00edm c\u00edlem je tedy zv\u00fd\u0161it efektivitu shellu p\u0159i zpracov\u00e1n\u00ed t\u011bchto b\u011b\u017en\u00fdch p\u0159\u00edkaz\u016f, a nikoli nutnost funk\u010dnosti.",
        sectionNumber: "9.1.9",
        sectionTitle: "Built-in Commands",
      },
      {
        uuid: "cfd3205a-2153-4df0-aaeb-d495872d37fb",
        correct:
          "P\u0159\u00edkaz `echo` je v shellu \u010dasto interpretov\u00e1n jako vestav\u011bn\u00fd p\u0159\u00edkaz, co\u017e je optimalizace z hlediska efektivity.  D\u016fvodem je, \u017ee `echo` je velmi frekventovan\u011b pou\u017e\u00edvan\u00fd p\u0159\u00edkaz, zejm\u00e9na v shell skriptech, a spou\u0161t\u011bn\u00ed `echo` jako extern\u00edho programu pomoc\u00ed mechanismu `fork` a `exec` by bylo neefektivn\u00ed kv\u016fli re\u017eii spojen\u00e9 s vytv\u00e1\u0159en\u00edm nov\u00fdch proces\u016f pro tak jednoduchou operaci. Vestav\u011bn\u00e1 implementace `echo` umo\u017e\u0148uje rychlej\u0161\u00ed proveden\u00ed bez nutnosti vytv\u00e1\u0159et nov\u00fd proces.",
        incorrect:
          "P\u0159\u00edkaz `echo` je v shellu interpretov\u00e1n speci\u00e1ln\u011b z d\u016fvodu funk\u010dnosti, proto\u017ee jeho \u00fa\u010delem je prov\u00e1d\u011bt operace, kter\u00e9 by nebyly mo\u017en\u00e9 nebo snadn\u00e9 prov\u00e9st v dce\u0159in\u00e9m procesu. Vestav\u011bn\u00e1 interpretace p\u0159\u00edkazu `echo` je nutn\u00e1 pro zaji\u0161t\u011bn\u00ed, \u017ee v\u00fdstup p\u0159\u00edkazu `echo` je spr\u00e1vn\u011b p\u0159esm\u011brov\u00e1n a zobrazen v hlavn\u00edm shell procesu.  Standardn\u00ed spou\u0161t\u011bn\u00ed pomoc\u00ed `fork` a `exec` by zp\u016fsobilo probl\u00e9my s v\u00fdstupem a jeho spr\u00e1vn\u00fdm zobrazen\u00edm v shellu.",
        sectionNumber: "9.1.9",
        sectionTitle: "Built-in Commands",
      },
      {
        uuid: "6a4596f4-ebae-4aa6-b26b-a5de4f256ddb",
        correct:
          'V shellu, prom\u011bnn\u00e9, ozna\u010dovan\u00e9 v ofici\u00e1ln\u00ed terminologii jako parametry, funguj\u00ed jako z\u00e1stupn\u00e9 symboly, kde shell udr\u017euje mapov\u00e1n\u00ed jmen, skl\u00e1daj\u00edc\u00edch se z p\u00edsmen a \u010d\u00edslic, na libovoln\u00e9 \u0159et\u011bzcov\u00e9 hodnoty, a pro vytvo\u0159en\u00ed nebo aktualizaci tohoto mapov\u00e1n\u00ed se pou\u017e\u00edv\u00e1 p\u0159\u00edkaz ve form\u00e1tu `variable="some text"`, p\u0159i\u010dem\u017e mezery kolem rovn\u00edtka nejsou povoleny a uvozovky jsou vy\u017eadov\u00e1ny pouze v p\u0159\u00edpad\u011b, \u017ee hodnota obsahuje mezery.',
        incorrect:
          'V shellu, prom\u011bnn\u00e9, ozna\u010dovan\u00e9 v ofici\u00e1ln\u00ed terminologii jako parametry, funguj\u00ed jako z\u00e1stupn\u00e9 symboly, kde shell udr\u017euje mapov\u00e1n\u00ed jmen, skl\u00e1daj\u00edc\u00edch se z p\u00edsmen a \u010d\u00edslic, na celo\u010d\u00edseln\u00e9 hodnoty, a pro vytvo\u0159en\u00ed nebo aktualizaci tohoto mapov\u00e1n\u00ed se pou\u017e\u00edv\u00e1 p\u0159\u00edkaz ve form\u00e1tu `$variable="some text"`, p\u0159i\u010dem\u017e mezery kolem rovn\u00edtka jsou povoleny a uvozovky nejsou nikdy vy\u017eadov\u00e1ny, i kdy\u017e hodnota obsahuje mezery.',
        sectionNumber: "9.1.10",
        sectionTitle: "Parameters",
      },
      {
        uuid: "816acd68-4ed7-4e5d-b3e7-5b7ce9f9eba7",
        correct:
          "V shell skriptech, definice prom\u011bnn\u00e9 se prov\u00e1d\u00ed bez pou\u017eit\u00ed prefixu dolaru ($), zat\u00edmco pro pou\u017eit\u00ed hodnoty prom\u011bnn\u00e9 je nutn\u00e9 prom\u011bnnou prefixovat dolarem, co\u017e je v souladu s konceptem placeholder\u016f, kde prom\u011bnn\u00e9 slou\u017e\u00ed jako z\u00e1stupn\u00e1 jm\u00e9na pro stringov\u00e9 hodnoty, kter\u00e9 jsou glob\u00e1ln\u00ed v r\u00e1mci shellu s v\u00fdjimkou subshell\u016f, kde maj\u00ed prom\u011bnn\u00e9 lok\u00e1ln\u00ed scope.",
        incorrect:
          "V shell skriptech, definice prom\u011bnn\u00e9 se prov\u00e1d\u00ed s pou\u017eit\u00edm prefixu dolaru ($), zat\u00edmco pro pou\u017eit\u00ed hodnoty prom\u011bnn\u00e9 nen\u00ed nutn\u00e9 prom\u011bnnou prefixovat dolarem, co\u017e je v rozporu s konceptem placeholder\u016f, kde prom\u011bnn\u00e9 slou\u017e\u00ed jako z\u00e1stupn\u00e1 jm\u00e9na pro celo\u010d\u00edseln\u00e9 hodnoty, kter\u00e9 jsou lok\u00e1ln\u00ed v r\u00e1mci shellu bez v\u00fdjimky subshell\u016f, kde maj\u00ed prom\u011bnn\u00e9 glob\u00e1ln\u00ed scope.",
        sectionNumber: "9.1.10",
        sectionTitle: "Parameters",
      },
      {
        uuid: "5081d899-d10e-4a98-88e7-829c3d7899e9",
        correct:
          "V shell skriptech, pokud chceme prov\u00e9st aritmetickou operaci s prom\u011bnn\u00fdmi, nap\u0159\u00edklad se\u010d\u00edst dv\u011b prom\u011bnn\u00e9 `a` a `b`, pouh\u00e9 naps\u00e1n\u00ed `$a + $b` nebude fungovat, proto\u017ee shell to interpretuje jako p\u0159\u00edkaz `7` s argumenty `+` a `3`, pokud `a=7` a `b=3`. Pro spr\u00e1vn\u00e9 proveden\u00ed aritmetick\u00e9ho s\u010d\u00edt\u00e1n\u00ed mus\u00edme pou\u017e\u00edt syntaxi `$((a + b))`, kde shell provede aritmetick\u00e9 vyhodnocen\u00ed v\u00fdrazu uvnit\u0159 dvojit\u00fdch z\u00e1vorek.",
        incorrect:
          "V shell skriptech, pokud chceme prov\u00e9st aritmetickou operaci s prom\u011bnn\u00fdmi, nap\u0159\u00edklad se\u010d\u00edst dv\u011b prom\u011bnn\u00e9 `a` a `b`, m\u016f\u017eeme jednodu\u0161e napsat `$a + $b` a shell automaticky rozpozn\u00e1, \u017ee se jedn\u00e1 o aritmetickou operaci a spr\u00e1vn\u011b se\u010dte hodnoty prom\u011bnn\u00fdch `a` a `b`.  Pou\u017eit\u00ed syntaxe `$((a + b))` je zbyte\u010dn\u00e9 a m\u00e1 stejn\u00fd efekt jako `$a + $b` v kontextu aritmetick\u00fdch operac\u00ed.",
        sectionNumber: "9.1.11",
        sectionTitle: "Parameter Expansion",
      },
      {
        uuid: "0848ce61-100b-4724-bd45-c6a9804df828",
        correct:
          "V shell skriptech, p\u0159i pou\u017eit\u00ed aritmetick\u00e9 expanze `$((...))`, existuje rozd\u00edl v chov\u00e1n\u00ed substituc\u00ed s a bez dolaru `$`. Pokud prom\u011bnn\u00e9 uvnit\u0159 `$((...))` nejsou prefixov\u00e1ny dolarem, substituce se chovaj\u00ed, jako by byly uzav\u0159eny v z\u00e1vork\u00e1ch pro \u00fa\u010dely precedence oper\u00e1tor\u016f. Nap\u0159\u00edklad, pokud `a=3+1` a `b=7`, v\u00fdraz `$((a * b))` se vyhodnot\u00ed jako `$(((3+1) * 7))`, co\u017e vede k v\u00fdsledku 28.",
        incorrect:
          "V shell skriptech, p\u0159i pou\u017eit\u00ed aritmetick\u00e9 expanze `$((...))`, chov\u00e1n\u00ed substituc\u00ed s a bez dolaru je identick\u00e9. Bez ohledu na to, zda prom\u011bnn\u00e9 uvnit\u0159 `$((...))` jsou prefixov\u00e1ny dolarem nebo ne, substituce se v\u017edy chovaj\u00ed stejn\u011b a neexistuje \u017e\u00e1dn\u00fd rozd\u00edl v precedenci oper\u00e1tor\u016f. Nap\u0159\u00edklad, pokud `a=3+1` a `b=7`, v\u00fdrazy `$((a * b))` a `$(( $a * $b ))` se vyhodnot\u00ed naprosto stejn\u011b.",
        sectionNumber: "9.1.11",
        sectionTitle: "Parameter Expansion",
      },
      {
        uuid: "7356d7ce-44fd-423b-963c-c3291723d61a",
        correct:
          'Substituce prom\u011bnn\u00fdch v shell skriptech je \u010dist\u011b textov\u00e1 operace. To znamen\u00e1, \u017ee po nahrazen\u00ed prom\u011bnn\u00e9 jej\u00ed hodnotou shell zapomene na p\u016fvod prom\u011bnn\u00e9 a s textem pracuje, jako by byl zad\u00e1n p\u0159\u00edmo. Nap\u0159\u00edklad, pokud prom\u011bnn\u00e1 `command="ls -l"`, pak `$command` bude interpretov\u00e1no jako p\u0159\u00edkaz `ls -l`, nikoliv jako textov\u00e1 hodnota, a shell provede p\u0159\u00edkaz `ls -l`.',
        incorrect:
          'Substituce prom\u011bnn\u00fdch v shell skriptech je textov\u00e1 operace, ale shell si pamatuje p\u016fvod textu z prom\u011bnn\u00e9. D\u00edky tomu, i kdy\u017e prom\u011bnn\u00e1 `command` obsahuje text "ls -l", `$command` nebude nikdy interpretov\u00e1no jako p\u0159\u00edkaz, ale v\u017edy pouze jako textov\u00e1 hodnota "ls -l", kterou lze nap\u0159\u00edklad vypsat pomoc\u00ed `echo $command`. Shell nikdy nespust\u00ed k\u00f3d ulo\u017een\u00fd v prom\u011bnn\u00e9, pokud to nen\u00ed explicitn\u011b na\u0159\u00edzeno jin\u00fdm mechanismem.',
        sectionNumber: "9.1.11",
        sectionTitle: "Parameter Expansion",
      },
      {
        uuid: "57e90051-fb83-4d2a-913d-e572d96c64b3",
        correct:
          "P\u0159\u00edkazov\u00e1 substituce v shellu umo\u017e\u0148uje vykonat p\u0159\u00edkaz a pou\u017e\u00edt jeho standardn\u00ed v\u00fdstup jako argumenty pro jin\u00fd p\u0159\u00edkaz. Nap\u0159\u00edklad, v p\u0159\u00edkazu `cat $(ls)` se nejprve vykon\u00e1 p\u0159\u00edkaz `ls`, kter\u00fd vyp\u00ed\u0161e seznam soubor\u016f v aktu\u00e1ln\u00edm adres\u00e1\u0159i, a tento seznam se pot\u00e9 pou\u017eije jako argumenty pro p\u0159\u00edkaz `cat`, kter\u00fd n\u00e1sledn\u011b zobraz\u00ed obsah v\u0161ech vypsan\u00fdch soubor\u016f.",
        incorrect:
          "P\u0159\u00edkazov\u00e1 substituce v shellu umo\u017e\u0148uje vykonat p\u0159\u00edkaz a pou\u017e\u00edt jeho standardn\u00ed chybov\u00fd v\u00fdstup jako argumenty pro jin\u00fd p\u0159\u00edkaz. Nap\u0159\u00edklad, v p\u0159\u00edkazu `cat $(ls)` se nejprve vykon\u00e1 p\u0159\u00edkaz `ls`, kter\u00fd vyp\u00ed\u0161e seznam soubor\u016f v aktu\u00e1ln\u00edm adres\u00e1\u0159i na standardn\u00ed chybov\u00fd v\u00fdstup, a tento seznam se pot\u00e9 pou\u017eije jako argumenty pro p\u0159\u00edkaz `cat`, kter\u00fd n\u00e1sledn\u011b zobraz\u00ed obsah v\u0161ech vypsan\u00fdch soubor\u016f.",
        sectionNumber: "9.1.12",
        sectionTitle: "Command Substitution",
      },
      {
        uuid: "4a6e696f-6783-491c-9b2b-8c0aaca4605d",
        correct:
          "Syntaxe `$(command)` pro p\u0159\u00edkazovou substituci nejprve provede p\u0159\u00edkaz `command` jako b\u011b\u017en\u00fd shell p\u0159\u00edkaz, zachyt\u00ed jeho standardn\u00ed v\u00fdstup do bufferu a n\u00e1sledn\u011b nahrad\u00ed konstrukci `$(command)` obsahem tohoto bufferu.  Tento mechanismus umo\u017e\u0148uje dynamicky generovat \u010d\u00e1sti p\u0159\u00edkaz\u016f na z\u00e1klad\u011b v\u00fdstupu jin\u00fdch program\u016f, co\u017e je u\u017eite\u010dn\u00e9 pro automatizaci a skriptov\u00e1n\u00ed v shellu.",
        incorrect:
          "Syntaxe `$(command)` pro p\u0159\u00edkazovou substituci nejprve nahrad\u00ed konstrukci `$(command)` pr\u00e1zdn\u00fdm \u0159et\u011bzcem a a\u017e pot\u00e9 provede p\u0159\u00edkaz `command` jako b\u011b\u017en\u00fd shell p\u0159\u00edkaz. Standardn\u00ed v\u00fdstup tohoto p\u0159\u00edkazu se nikam neukl\u00e1d\u00e1 a nepou\u017eije, \u010d\u00edm\u017e p\u0159\u00edkazov\u00e1 substituce v tomto p\u0159\u00edpad\u011b nem\u00e1 \u017e\u00e1dn\u00fd vliv na v\u00fdsledn\u00fd p\u0159\u00edkaz.",
        sectionNumber: "9.1.12",
        sectionTitle: "Command Substitution",
      },
      {
        uuid: "e1e632db-e8b9-4244-abcd-240103a0506e",
        correct:
          "V shellu se pro odd\u011blen\u00ed jednotliv\u00fdch argument\u016f p\u0159\u00edkazov\u00e9 \u0159\u00e1dky pou\u017e\u00edvaj\u00ed b\u00edl\u00e9 znaky, jako je mezera nebo tabul\u00e1tor. Pokud argument p\u0159\u00edkazu obsahuje v\u00edce slov a m\u00e1 b\u00fdt interpretov\u00e1n jako jedin\u00fd argument, je nutn\u00e9 jej uzav\u0159\u00edt do uvozovek. Shell podporuje dva typy uvozovek: jednoduch\u00e9 apostrofy a dvojit\u00e9 uvozovky, p\u0159i\u010dem\u017e dvojit\u00e9 uvozovky nav\u00edc umo\u017e\u0148uj\u00ed prov\u00e1d\u011bt substituci prom\u011bnn\u00fdch p\u0159\u00edmo v \u0159et\u011bzci.",
        incorrect:
          "V shellu se pro odd\u011blen\u00ed jednotliv\u00fdch argument\u016f p\u0159\u00edkazov\u00e9 \u0159\u00e1dky pou\u017e\u00edvaj\u00ed b\u00edl\u00e9 znaky, jako je mezera nebo tabul\u00e1tor. Pokud argument p\u0159\u00edkazu obsahuje v\u00edce slov, **nen\u00ed** nutn\u00e9 jej uzav\u0159\u00edt do uvozovek, proto\u017ee shell automaticky rozpozn\u00e1 v\u00edce slov jako jeden argument.  Shell podporuje dva typy uvozovek: jednoduch\u00e9 apostrofy a dvojit\u00e9 uvozovky, p\u0159i\u010dem\u017e dvojit\u00e9 uvozovky nav\u00edc umo\u017e\u0148uj\u00ed prov\u00e1d\u011bt substituci prom\u011bnn\u00fdch p\u0159\u00edmo v \u0159et\u011bzci.",
        sectionNumber: "9.1.13",
        sectionTitle: "Quoting",
      },
      {
        uuid: "d6d74f92-7f5f-4ef4-96f9-f54ac38915a8",
        correct:
          "Pro spr\u00e1vn\u00e9 zpracov\u00e1n\u00ed argument\u016f v shellu je kl\u00ed\u010dov\u00e9 pou\u017eit\u00ed uvozovek v p\u0159\u00edpad\u011b, \u017ee argument obsahuje b\u00edl\u00e9 znaky.  Jednoduch\u00e9 apostrofy a dvojit\u00e9 uvozovky slou\u017e\u00ed k uvozen\u00ed \u0159et\u011bzc\u016f, av\u0161ak s rozd\u00edlnou funkcionalitou. Zat\u00edmco jednoduch\u00e9 apostrofy interpretuj\u00ed \u0159et\u011bzec doslovn\u011b, dvojit\u00e9 uvozovky umo\u017e\u0148uj\u00ed expanzi prom\u011bnn\u00fdch a speci\u00e1ln\u00edch znak\u016f, co\u017e je d\u016fle\u017eit\u00e9 pro dynamick\u00e9 sestavov\u00e1n\u00ed p\u0159\u00edkaz\u016f.",
        incorrect:
          "Pro spr\u00e1vn\u00e9 zpracov\u00e1n\u00ed argument\u016f v shellu je kl\u00ed\u010dov\u00e9 pou\u017eit\u00ed uvozovek v p\u0159\u00edpad\u011b, \u017ee argument obsahuje b\u00edl\u00e9 znaky.  Jednoduch\u00e9 apostrofy a dvojit\u00e9 uvozovky slou\u017e\u00ed k uvozen\u00ed \u0159et\u011bzc\u016f, av\u0161ak **s naprosto identickou** funkcionalitou. Zat\u00edmco jednoduch\u00e9 apostrofy interpretuj\u00ed \u0159et\u011bzec doslovn\u011b, **stejn\u011b tak i** dvojit\u00e9 uvozovky **interpretuj\u00ed \u0159et\u011bzec doslovn\u011b a neumo\u017e\u0148uj\u00ed** expanzi prom\u011bnn\u00fdch a speci\u00e1ln\u00edch znak\u016f, co\u017e **nen\u00ed** d\u016fle\u017eit\u00e9 pro dynamick\u00e9 sestavov\u00e1n\u00ed p\u0159\u00edkaz\u016f.",
        sectionNumber: "9.1.13",
        sectionTitle: "Quoting",
      },
      {
        uuid: "3cb3e605-8d51-4668-907f-0ffcd9d80bd1",
        correct:
          'Substituce parametr\u016f se prov\u00e1d\u00ed p\u0159ed rozd\u011blen\u00edm argument\u016f. Pokud prom\u011bnn\u00e1 obsahuj\u00edc\u00ed b\u00edl\u00e9 znaky nen\u00ed spr\u00e1vn\u011b uzav\u0159ena do uvozovek, bude po substituci interpretov\u00e1na jako v\u00edce argument\u016f. To m\u016f\u017ee v\u00e9st k neo\u010dek\u00e1van\u00e9mu chov\u00e1n\u00ed, nap\u0159\u00edklad p\u0159\u00edkaz `cat $file`, kde `$file` obsahuje "foo bar", se rozbal\u00ed na `cat foo bar` a program `cat` obdr\u017e\u00ed "foo" a "bar" jako samostatn\u00e9 argumenty.',
        incorrect:
          'Rozd\u011blen\u00ed argument\u016f prob\u00edh\u00e1 p\u0159ed substituc\u00ed parametr\u016f. To znamen\u00e1, \u017ee i kdy\u017e prom\u011bnn\u00e1 substituovan\u00e1 v p\u0159\u00edkazu obsahuje b\u00edl\u00e9 znaky a nen\u00ed spr\u00e1vn\u011b uzav\u0159ena do uvozovek, bude st\u00e1le pova\u017eov\u00e1na za jeden argument. Rozd\u011blen\u00ed argument\u016f, kter\u00e9 prob\u011bhne d\u0159\u00edve ne\u017e substituce, zabr\u00e1n\u00ed probl\u00e9m\u016fm, kdy by se nap\u0159\u00edklad v p\u0159\u00edkazu `cat $file` s `$file` obsahuj\u00edc\u00edm "foo bar" nespr\u00e1vn\u011b interpretovaly "foo" a "bar" jako odd\u011blen\u00e9 argumenty.',
        sectionNumber: "9.1.14",
        sectionTitle: "Quoting and Substitution",
      },
      {
        uuid: "c4b0f359-3d95-4cb4-b116-7b07eac2016f",
        correct:
          'Pokud prom\u011bnn\u00e1 obsahuj\u00edc\u00ed b\u00edl\u00e9 znaky, nap\u0159\u00edklad "hello world", je pou\u017eita v p\u0159\u00edkazu bez uvozovek, jako nap\u0159\u00edklad `ls $foo`, kde `$foo` je "hello world", shell ji rozbal\u00ed na `ls hello world`. P\u0159\u00edkaz `ls` se pak spust\u00ed s argumenty "hello" a "world" jako samostatn\u00fdmi argumenty, co\u017e zp\u016fsob\u00ed, \u017ee se budou hledat dva samostatn\u00e9 soubory "hello" a "world" nam\u00edsto jednoho souboru "hello world".',
        incorrect:
          'Jestli\u017ee prom\u011bnn\u00e1 obsahuj\u00edc\u00ed b\u00edl\u00e9 znaky, nap\u0159\u00edklad "hello world", je pou\u017eita v p\u0159\u00edkazu bez uvozovek, nap\u0159\u00edklad `ls $foo`, kde `$foo` je "hello world", shell inteligentn\u011b interpretuje b\u00edl\u00e9 znaky jako sou\u010d\u00e1st jedin\u00e9ho argumentu. P\u0159\u00edkaz `ls` se spust\u00ed korektn\u011b a bude s "hello world" zach\u00e1zet jako s jedin\u00fdm n\u00e1zvem souboru nebo argumentem, \u010d\u00edm\u017e se p\u0159edejde rozd\u011blen\u00ed na v\u00edce argument\u016f.',
        sectionNumber: "9.1.14",
        sectionTitle: "Quoting and Substitution",
      },
      {
        uuid: "9e6fd124-1529-4a9b-891e-b77d8ffcb82a",
        correct:
          'Aby se zajistilo, \u017ee prom\u011bnn\u00e1 obsahuj\u00edc\u00ed b\u00edl\u00e9 znaky bude v p\u0159\u00edkazu pova\u017eov\u00e1na za jedin\u00fd argument i po substituci parametr\u016f, je nutn\u00e9 prom\u011bnnou uzav\u0159\u00edt do uvozovek, nap\u0159\u00edklad v p\u0159\u00edkazu `ls "$foo"`. To zabr\u00e1n\u00ed rozd\u011blen\u00ed argument\u016f na z\u00e1klad\u011b b\u00edl\u00fdch znak\u016f v hodnot\u011b prom\u011bnn\u00e9 a zajist\u00ed, \u017ee p\u0159\u00edkaz `ls` obdr\u017e\u00ed "hello world" jako jedin\u00fd argument, pokud `$foo` je nastaveno na "hello world".',
        incorrect:
          'I kdy\u017e pou\u017eijeme uvozovky kolem prom\u011bnn\u00e9 obsahuj\u00edc\u00ed b\u00edl\u00e9 znaky v p\u0159\u00edkazu, nap\u0159\u00edklad `ls "$foo"`, kde `$foo` je "hello world", shell st\u00e1le rozd\u011bl\u00ed argumenty na z\u00e1klad\u011b b\u00edl\u00fdch znak\u016f v hodnot\u011b prom\u011bnn\u00e9. P\u0159\u00edkaz `ls` tak obdr\u017e\u00ed "hello" a "world" jako samostatn\u00e9 argumenty, proto\u017ee uvozovky ovliv\u0148uj\u00ed pouze substituci, nikoli n\u00e1sledn\u00fd proces rozd\u011blen\u00ed argument\u016f.',
        sectionNumber: "9.1.14",
        sectionTitle: "Quoting and Substitution",
      },
      {
        uuid: "668c6ef9-2925-473d-937f-8146557a6f63",
        correct:
          "Speci\u00e1ln\u00ed prom\u011bnn\u00e9 `$@` a `$*` v shellu slou\u017e\u00ed k expanzi pozi\u010dn\u00edch parametr\u016f, kter\u00e9 jsou argumenty p\u0159\u00edkazov\u00e9 \u0159\u00e1dky skriptu.  Rozd\u00edl mezi nimi spo\u010d\u00edv\u00e1 v chov\u00e1n\u00ed p\u0159i pou\u017eit\u00ed v dvojit\u00fdch uvozovk\u00e1ch; prom\u011bnn\u00e1 `$@` expanduje ka\u017ed\u00fd parametr zvl\u00e1\u0161\u0165, zat\u00edmco `$*` expanduje v\u0161echny parametry jako jedno slovo. Tato vlastnost prom\u011bnn\u00e9 `$@` je kl\u00ed\u010dov\u00e1 pro spr\u00e1vn\u00e9 iterov\u00e1n\u00ed skrze argumenty, zvl\u00e1\u0161t\u011b pokud obsahuj\u00ed mezery.",
        incorrect:
          "Speci\u00e1ln\u00ed prom\u011bnn\u00e9 `$@` a `$*` v shellu slou\u017e\u00ed k expanzi pozi\u010dn\u00edch parametr\u016f, av\u0161ak jejich chov\u00e1n\u00ed je identick\u00e9 bez ohledu na pou\u017eit\u00ed dvojit\u00fdch uvozovek. Ob\u011b prom\u011bnn\u00e9 expanduj\u00ed v\u0161echny pozi\u010dn\u00ed parametry jako jedno slovo i v p\u0159\u00edpad\u011b, \u017ee jsou uzav\u0159eny v dvojit\u00fdch uvozovk\u00e1ch, co\u017e znamen\u00e1, \u017ee iterace skrze jednotliv\u00e9 argumenty s mezerami by byla p\u0159\u00edmo\u010dar\u00e1 a bezprobl\u00e9mov\u00e1.  Tato interpretace zjednodu\u0161uje manipulaci s argumenty v shell skriptech.",
        sectionNumber: "9.1.15",
        sectionTitle: "Special Variables",
      },
      {
        uuid: "c17b919b-aaec-48e5-8d4d-d9f7ef2104e4",
        correct:
          "Prom\u011bnn\u00e1 `$#` v shellu je speci\u00e1ln\u00ed prom\u011bnn\u00e1, kter\u00e1 uchov\u00e1v\u00e1 po\u010det pozi\u010dn\u00edch parametr\u016f, je\u017e byly p\u0159ed\u00e1ny shell skriptu p\u0159i jeho spu\u0161t\u011bn\u00ed.  Tyto pozi\u010dn\u00ed parametry jsou reprezentov\u00e1ny prom\u011bnn\u00fdmi `$1`, `$2`, `$3` a tak d\u00e1le, a `$#` poskytuje dynamick\u00fd zp\u016fsob, jak v r\u00e1mci skriptu zjistit, kolik argument\u016f bylo zad\u00e1no, co\u017e je u\u017eite\u010dn\u00e9 pro validaci vstupu a \u0159\u00edzen\u00ed toku skriptu na z\u00e1klad\u011b po\u010dtu argument\u016f.",
        incorrect:
          "Prom\u011bnn\u00e1 `$#` v shellu je speci\u00e1ln\u00ed prom\u011bnn\u00e1, kter\u00e1 uchov\u00e1v\u00e1 PID aktu\u00e1ln\u00edho shellu, podobn\u011b jako prom\u011bnn\u00e1 `$$`.  Tato prom\u011bnn\u00e1 `$#` tedy poskytuje alternativn\u00ed zp\u016fsob, jak zjistit identifik\u00e1tor procesu b\u011b\u017e\u00edc\u00edho shellu, co\u017e m\u016f\u017ee b\u00fdt u\u017eite\u010dn\u00e9 v situac\u00edch, kdy pot\u0159ebujeme identifikovat shell proces pro \u00fa\u010dely monitorov\u00e1n\u00ed nebo spr\u00e1vy proces\u016f. Nicm\u00e9n\u011b, prim\u00e1rn\u00ed a doporu\u010den\u00fd zp\u016fsob pro z\u00edsk\u00e1n\u00ed PID shellu je pou\u017eit\u00ed prom\u011bnn\u00e9 `$$`.",
        sectionNumber: "9.1.15",
        sectionTitle: "Special Variables",
      },
      {
        uuid: "d8329aba-dfca-4f0d-ad0e-91fcf765ab80",
        correct:
          "Shell poskytuje krom\u011b u\u017eivatelsky definovan\u00fdch prom\u011bnn\u00fdch i speci\u00e1ln\u00ed prom\u011bnn\u00e9, kter\u00e9 slou\u017e\u00ed k poskytov\u00e1n\u00ed informac\u00ed o aktu\u00e1ln\u00edm prost\u0159ed\u00ed a stavu shellu. Mezi tyto speci\u00e1ln\u00ed prom\u011bnn\u00e9 pat\u0159\u00ed nap\u0159\u00edklad `$?` pro n\u00e1vratov\u00fd k\u00f3d posledn\u00edho p\u0159\u00edkazu, `$$` pro PID aktu\u00e1ln\u00edho shellu a `$0` pro jm\u00e9no shellu. Tyto prom\u011bnn\u00e9 jsou p\u0159eddefinovan\u00e9 a automaticky aktualizov\u00e1ny shellem.",
        incorrect:
          "Shell poskytuje pouze u\u017eivatelsky definovan\u00e9 prom\u011bnn\u00e9 a speci\u00e1ln\u00ed prom\u011bnn\u00e9 jsou v shellu konceptem, kter\u00fd neexistuje. Ve\u0161ker\u00e9 prom\u011bnn\u00e9, se kter\u00fdmi u\u017eivatel v shellu pracuje, mus\u00ed b\u00fdt explicitn\u011b definov\u00e1ny u\u017eivatelem a shell s\u00e1m neposkytuje \u017e\u00e1dn\u00e9 p\u0159eddefinovan\u00e9 prom\u011bnn\u00e9 s p\u0159edem ur\u010den\u00fdm v\u00fdznamem nebo automatickou aktualizac\u00ed hodnot, co\u017e d\u00e1v\u00e1 u\u017eivateli plnou kontrolu nad prom\u011bnn\u00fdmi v prost\u0159ed\u00ed.",
        sectionNumber: "9.1.15",
        sectionTitle: "Special Variables",
      },
      {
        uuid: "a1a82915-c7f3-40a8-805a-73510a35ebe2",
        correct:
          "Prom\u011bnn\u00e9 prost\u0159ed\u00ed v syst\u00e9mech POSIX jsou nez\u00e1visl\u00e9 na konkr\u00e9tn\u00edm shellu a jsou p\u0159ed\u00e1v\u00e1ny z rodi\u010dovsk\u00e9ho procesu do jeho potomk\u016f prost\u0159ednictv\u00edm syst\u00e9mov\u00fdch vol\u00e1n\u00ed `fork` i `exec`, \u010d\u00edm\u017e je zaji\u0161t\u011bno, \u017ee nov\u011b spu\u0161t\u011bn\u00e9 programy zd\u011bd\u00ed prost\u0159ed\u00ed sv\u00e9ho rodi\u010de.",
        incorrect:
          "Prom\u011bnn\u00e9 prost\u0159ed\u00ed v syst\u00e9mech POSIX jsou pevn\u011b sv\u00e1z\u00e1ny s shellem, ve kter\u00e9m jsou definov\u00e1ny, a jsou prim\u00e1rn\u011b p\u0159ed\u00e1v\u00e1ny potomk\u016fm pouze prost\u0159ednictv\u00edm syst\u00e9mov\u00e9ho vol\u00e1n\u00ed `exec`; zm\u011bny prom\u011bnn\u00fdch prost\u0159ed\u00ed v potomkovsk\u00e9m procesu se mohou \u0161\u00ed\u0159it zp\u011bt do rodi\u010dovsk\u00e9ho procesu.",
        sectionNumber: "9.1.16",
        sectionTitle: "Environment",
      },
      {
        uuid: "2c5b2881-8f82-48c7-bdcc-46741a099277",
        correct:
          "Kdy\u017e proces v syst\u00e9mu POSIX vytvo\u0159\u00ed potomka pomoc\u00ed syst\u00e9mov\u00e9ho vol\u00e1n\u00ed `fork`, potomek obdr\u017e\u00ed kompletn\u00ed kopii prom\u011bnn\u00fdch prost\u0159ed\u00ed rodi\u010de, co\u017e znamen\u00e1, \u017ee zm\u011bny proveden\u00e9 prom\u011bnn\u00fdmi prost\u0159ed\u00ed potomkem neovlivn\u00ed prom\u011bnn\u00e9 prost\u0159ed\u00ed rodi\u010de ani \u017e\u00e1dn\u00e9 jin\u00e9 ji\u017e b\u011b\u017e\u00edc\u00ed procesy.",
        incorrect:
          "Kdy\u017e proces v syst\u00e9mu POSIX vytvo\u0159\u00ed potomka pomoc\u00ed syst\u00e9mov\u00e9ho vol\u00e1n\u00ed `fork`, potomek sd\u00edl\u00ed prom\u011bnn\u00e9 prost\u0159ed\u00ed s rodi\u010dem, co\u017e umo\u017e\u0148uje, aby zm\u011bny proveden\u00e9 potomkem p\u0159\u00edmo ovlivnily prom\u011bnn\u00e9 prost\u0159ed\u00ed rodi\u010de a v\u0161ech ostatn\u00edch proces\u016f v r\u00e1mci stejn\u00e9 skupiny proces\u016f.",
        sectionNumber: "9.1.16",
        sectionTitle: "Environment",
      },
      {
        uuid: "92340ada-36ba-4cba-8d98-356b84187ec6",
        correct:
          "A\u010dkoli jsou prom\u011bnn\u00e9 prost\u0159ed\u00ed form\u00e1ln\u011b nez\u00e1visl\u00e9 na shellu, shelly \u010dasto poskytuj\u00ed funkce pro jejich spr\u00e1vu, jako je substituce prom\u011bnn\u00fdch pomoc\u00ed prefixu dolaru (nap\u0159. `$VARIABLE_NAME`) a p\u0159\u00edkazy pro nastaven\u00ed nebo \u00fapravu jejich hodnot, co\u017e ovliv\u0148uje shell proces a n\u00e1sledn\u011b v\u0161echny potomkovsk\u00e9 procesy vytvo\u0159en\u00e9 t\u00edmto shellem.",
        incorrect:
          "Prom\u011bnn\u00e9 prost\u0159ed\u00ed jsou striktn\u011b spravov\u00e1ny pouze j\u00e1drem opera\u010dn\u00edho syst\u00e9mu a shelly nemaj\u00ed \u017e\u00e1dn\u00fd p\u0159\u00edm\u00fd zp\u016fsob, jak s nimi interagovat nebo je modifikovat. Jak\u00fdkoli pokus shellu nastavit nebo p\u0159istupovat k prom\u011bnn\u00fdm prost\u0159ed\u00ed pomoc\u00ed konstrukt\u016f jako `$VARIABLE_NAME` ovlivn\u00ed pouze shell-intern\u00ed prom\u011bnn\u00e9 a nikoli skute\u010dn\u00e9 prom\u011bnn\u00e9 prost\u0159ed\u00ed p\u0159ed\u00e1van\u00e9 potomk\u016fm.",
        sectionNumber: "9.1.16",
        sectionTitle: "Environment",
      },
      {
        uuid: "8680c29e-2736-4b6b-817e-790571a7dbeb",
        correct:
          "Prom\u011bnn\u00e1 prost\u0159ed\u00ed `$PATH` v opera\u010dn\u00edch syst\u00e9mech slou\u017e\u00ed jako seznam adres\u00e1\u0159\u016f, kter\u00e9 syst\u00e9m prohled\u00e1v\u00e1 p\u0159i hled\u00e1n\u00ed spustiteln\u00fdch soubor\u016f, kdy\u017e u\u017eivatel zad\u00e1 p\u0159\u00edkaz bez ud\u00e1n\u00ed absolutn\u00ed cesty. Tato prom\u011bnn\u00e1 umo\u017e\u0148uje u\u017eivatel\u016fm spou\u0161t\u011bt programy um\u00edst\u011bn\u00e9 v r\u016fzn\u00fdch adres\u00e1\u0159\u00edch bez nutnosti zad\u00e1vat jejich \u00faplnou cestu, co\u017e zjednodu\u0161uje pr\u00e1ci v p\u0159\u00edkazov\u00e9 \u0159\u00e1dce a skriptech.",
        incorrect:
          "Prom\u011bnn\u00e1 prost\u0159ed\u00ed `$PATH` v opera\u010dn\u00edch syst\u00e9mech slou\u017e\u00ed v\u00fdhradn\u011b pro ukl\u00e1d\u00e1n\u00ed do\u010dasn\u00fdch soubor\u016f a nem\u00e1 \u017e\u00e1dn\u00fd vliv na vyhled\u00e1v\u00e1n\u00ed spustiteln\u00fdch soubor\u016f. Syst\u00e9m p\u0159i spou\u0161t\u011bn\u00ed program\u016f prohled\u00e1v\u00e1 pouze pevn\u011b dan\u00e9 syst\u00e9mov\u00e9 adres\u00e1\u0159e, kter\u00e9 nejsou konfigurovateln\u00e9 u\u017eivatelsk\u00fdmi prom\u011bnn\u00fdmi prost\u0159ed\u00ed, a `$PATH` se pou\u017e\u00edv\u00e1 jen pro intern\u00ed procesy syst\u00e9mu.",
        sectionNumber: "9.1.17",
        sectionTitle: "Important Environment Variables",
      },
      {
        uuid: "ccdb9d46-875b-4a3a-b555-b2011433b24d",
        correct:
          "Prom\u011bnn\u00e1 prost\u0159ed\u00ed `$HOME` je v opera\u010dn\u00edch syst\u00e9mech definov\u00e1na jako domovsk\u00fd adres\u00e1\u0159 aktu\u00e1ln\u011b p\u0159ihl\u00e1\u0161en\u00e9ho u\u017eivatele a programy ji vyu\u017e\u00edvaj\u00ed k ukl\u00e1d\u00e1n\u00ed u\u017eivatelsk\u00fdch konfigura\u010dn\u00edch soubor\u016f a dat. Tato prom\u011bnn\u00e1 je obvykle nastavena syst\u00e9mem p\u0159i p\u0159ihl\u00e1\u0161en\u00ed u\u017eivatele a poskytuje standardizovan\u00e9 um\u00edst\u011bn\u00ed pro u\u017eivatelsk\u00e9 soubory, nez\u00e1visl\u00e9 na konkr\u00e9tn\u00edm programu.",
        incorrect:
          "Prom\u011bnn\u00e1 prost\u0159ed\u00ed `$HOME` je v opera\u010dn\u00edch syst\u00e9mech pou\u017e\u00edv\u00e1na pouze pro do\u010dasn\u00e9 ulo\u017een\u00ed syst\u00e9mov\u00fdch log\u016f a nem\u00e1 \u017e\u00e1dn\u00fd vztah k domovsk\u00e9mu adres\u00e1\u0159i u\u017eivatele ani k ukl\u00e1d\u00e1n\u00ed u\u017eivatelsk\u00fdch dat a konfigurac\u00ed. Domovsk\u00fd adres\u00e1\u0159 u\u017eivatele je ur\u010den jin\u00fdmi syst\u00e9mov\u00fdmi mechanismy, kter\u00e9 nejsou ovlivn\u011bny prom\u011bnnou `$HOME`.",
        sectionNumber: "9.1.17",
        sectionTitle: "Important Environment Variables",
      },
      {
        uuid: "79d95959-6ba4-452d-bef8-693e6922f1b3",
        correct:
          "V opera\u010dn\u00edch syst\u00e9mech existuje konvence, \u017ee n\u00e1zvy prom\u011bnn\u00fdch prost\u0159ed\u00ed se zapisuj\u00ed velk\u00fdmi p\u00edsmeny, jako nap\u0159\u00edklad `$PATH`, `$HOME` a `$EDITOR`. Tato konvence usnad\u0148uje \u010ditelnost a odli\u0161en\u00ed prom\u011bnn\u00fdch prost\u0159ed\u00ed od jin\u00fdch prom\u011bnn\u00fdch a kl\u00ed\u010dov\u00fdch slov v konfigurac\u00edch a skriptech, a\u010dkoli technicky syst\u00e9my obvykle nerozli\u0161uj\u00ed velikost p\u00edsmen v n\u00e1zvech prom\u011bnn\u00fdch prost\u0159ed\u00ed.",
        incorrect:
          "V opera\u010dn\u00edch syst\u00e9mech je striktn\u011b vy\u017eadov\u00e1no, aby n\u00e1zvy v\u0161ech prom\u011bnn\u00fdch prost\u0159ed\u00ed byly ps\u00e1ny mal\u00fdmi p\u00edsmeny, a jak\u00e9koli pou\u017eit\u00ed velk\u00fdch p\u00edsmen v n\u00e1zvu prom\u011bnn\u00e9 prost\u0159ed\u00ed by zp\u016fsobilo, \u017ee syst\u00e9m tuto prom\u011bnnou prost\u0159ed\u00ed nerozpoznal a ignoroval. Konvence pou\u017e\u00edv\u00e1n\u00ed velk\u00fdch p\u00edsmen pro prom\u011bnn\u00e9 prost\u0159ed\u00ed je pouze doporu\u010den\u00ed pro program\u00e1tory, ale nem\u00e1 vliv na funk\u010dnost syst\u00e9mu.",
        sectionNumber: "9.1.17",
        sectionTitle: "Important Environment Variables",
      },
      {
        uuid: "cb052428-670d-48ec-9611-e1d1bfd9be70",
        correct:
          "Globbing, jak je pops\u00e1n v kontextu shellu, p\u0159edstavuje mechanismus pro zjednodu\u0161en\u00ed pr\u00e1ce se soubory, kdy speci\u00e1ln\u00ed metaznaky jako hv\u011bzdi\u010dka '*' a otazn\u00edk '?' umo\u017e\u0148uj\u00ed reprezentovat skupiny n\u00e1zv\u016f soubor\u016f pomoc\u00ed jedin\u00e9ho vzoru. Hv\u011bzdi\u010dka '*' se v t\u011bchto vzorech chov\u00e1 jako z\u00e1stupn\u00fd symbol pro libovoln\u00fd po\u010det znak\u016f, zat\u00edmco otazn\u00edk '?' zastupuje pr\u00e1v\u011b jeden libovoln\u00fd znak, co\u017e u\u017eivatel\u016fm usnad\u0148uje manipulaci s v\u00edce soubory najednou.",
        incorrect:
          "Globbing, jak je pops\u00e1n v kontextu shellu, p\u0159edstavuje mechanismus pro zjednodu\u0161en\u00ed pr\u00e1ce se soubory, kdy speci\u00e1ln\u00ed metaznaky jako hv\u011bzdi\u010dka '*' a otazn\u00edk '?' umo\u017e\u0148uj\u00ed reprezentovat skupiny n\u00e1zv\u016f soubor\u016f pomoc\u00ed jedin\u00e9ho vzoru. Hv\u011bzdi\u010dka '*' se v t\u011bchto vzorech chov\u00e1 jako z\u00e1stupn\u00fd symbol pro pr\u00e1v\u011b jeden znak, zat\u00edmco otazn\u00edk '?' zastupuje libovoln\u00fd po\u010det znak\u016f, co\u017e u\u017eivatel\u016fm usnad\u0148uje manipulaci s v\u00edce soubory najednou.",
        sectionNumber: "9.1.18",
        sectionTitle: "Globbing",
      },
      {
        uuid: "284c9008-cde6-4266-b497-1042a1186c96",
        correct:
          "Expanzi globbing vzor\u016f prov\u00e1d\u00ed p\u0159\u00edmo shell, nikoliv a\u017e spou\u0161t\u011bn\u00fd program. To znamen\u00e1, \u017ee kdy\u017e u\u017eivatel zad\u00e1 p\u0159\u00edkaz jako nap\u0159\u00edklad `ls *.c`, shell nejprve s\u00e1m vyhodnot\u00ed vzor `*.c` a nahrad\u00ed ho seznamem v\u0161ech soubor\u016f odpov\u00eddaj\u00edc\u00edch tomuto vzoru. Teprve pot\u00e9 shell spust\u00ed program `ls` s t\u00edmto seznamem soubor\u016f jako argumenty, p\u0159i\u010dem\u017e samotn\u00fd program `ls` o globbing expanzi nev\u00ed a pracuje ji\u017e jen s konkr\u00e9tn\u00edmi n\u00e1zvy soubor\u016f.",
        incorrect:
          "Expanzi globbing vzor\u016f prov\u00e1d\u00ed a\u017e spou\u0161t\u011bn\u00fd program, nikoliv p\u0159\u00edmo shell. To znamen\u00e1, \u017ee kdy\u017e u\u017eivatel zad\u00e1 p\u0159\u00edkaz jako nap\u0159\u00edklad `ls *.c`, shell p\u0159ed\u00e1 vzor `*.c` programu `ls` a ten a\u017e n\u00e1sledn\u011b vyhodnot\u00ed vzor a provede expanzi na seznam soubor\u016f. Program `ls` je tedy zodpov\u011bdn\u00fd za globbing expanzi a shell pouze p\u0159ed\u00e1v\u00e1 nezpracovan\u00fd vzor a p\u0159ij\u00edm\u00e1 v\u00fdsledn\u00fd seznam soubor\u016f.",
        sectionNumber: "9.1.18",
        sectionTitle: "Globbing",
      },
      {
        uuid: "7ae69447-89da-4fa1-8fe6-255d9077eb35",
        correct:
          "Pou\u017eit\u00ed uvozovek, a\u0165 u\u017e jednoduch\u00fdch nebo dvojit\u00fdch, m\u00e1 v shellu za n\u00e1sledek potla\u010den\u00ed globbing expanze. Pokud je \u0159et\u011bzec obsahuj\u00edc\u00ed metaznaky jako '*' nebo '?' uzav\u0159en do uvozovek, shell ho nebude interpretovat jako globbing vzor, ale doslovn\u011b ho p\u0159ed\u00e1 jako argument p\u0159\u00edslu\u0161n\u00e9mu programu. Tato vlastnost uvozovek je u\u017eite\u010dn\u00e1 v situac\u00edch, kdy je pot\u0159eba p\u0159edat \u0159et\u011bzec obsahuj\u00edc\u00ed tyto metaznaky jako liter\u00e1ln\u00ed hodnotu a nikoliv jako vzor pro expanzi soubor\u016f.",
        incorrect:
          "Pou\u017eit\u00ed uvozovek, a\u0165 u\u017e jednoduch\u00fdch nebo dvojit\u00fdch, nem\u00e1 v shellu \u017e\u00e1dn\u00fd vliv na globbing expanzi. I kdy\u017e je \u0159et\u011bzec obsahuj\u00edc\u00ed metaznaky jako '*' nebo '?' uzav\u0159en do uvozovek, shell ho st\u00e1le interpretuje jako globbing vzor a provede expanzi na seznam soubor\u016f. Uvozovky slou\u017e\u00ed pouze k jin\u00fdm \u00fa\u010del\u016fm, nap\u0159\u00edklad k seskupov\u00e1n\u00ed slov do jednoho argumentu, ale nikoliv k potla\u010den\u00ed globbing expanze.",
        sectionNumber: "9.1.18",
        sectionTitle: "Globbing",
      },
      {
        uuid: "cca6c76b-b3e6-4472-acf2-92faa456e91a",
        correct:
          "Podm\u00edn\u011bn\u00e9 prov\u00e1d\u011bn\u00ed p\u0159\u00edkaz\u016f v shellu je z\u00e1kladn\u00ed konstrukce \u0159\u00edzen\u00ed toku programu, kter\u00e1 umo\u017e\u0148uje spou\u0161t\u011bt nebo p\u0159esko\u010dit blok p\u0159\u00edkaz\u016f na z\u00e1klad\u011b v\u00fdsledku p\u0159edchoz\u00edho p\u0159\u00edkazu. Kl\u00ed\u010dov\u00e9 slovo `if` se pou\u017e\u00edv\u00e1 pro zah\u00e1jen\u00ed podm\u00edn\u011bn\u00e9ho bloku, a voliteln\u011b m\u016f\u017ee b\u00fdt dopln\u011bno klauzulemi `elif` a `else` pro slo\u017eit\u011bj\u0161\u00ed rozhodovac\u00ed struktury. D\u016fle\u017eit\u00e9 je, \u017ee `cond` v konstrukci `if cond; then ... fi` nen\u00ed v\u00fdraz, ale standardn\u00ed p\u0159\u00edkaz, jeho\u017e n\u00e1vratov\u00fd k\u00f3d 0 indikuje pravdivostn\u00ed hodnotu pro vyhodnocen\u00ed podm\u00ednky.",
        incorrect:
          "Podm\u00edn\u011bn\u00e9 prov\u00e1d\u011bn\u00ed p\u0159\u00edkaz\u016f v shellu se li\u0161\u00ed od tradi\u010dn\u00edch programovac\u00edch jazyk\u016f t\u00edm, \u017ee kl\u00ed\u010dov\u00e9 slovo `if` vy\u017eaduje jako podm\u00ednku slo\u017eit\u00fd booleovsk\u00fd v\u00fdraz, nikoliv standardn\u00ed p\u0159\u00edkaz. Shell interpretuje v\u00fdsledek tohoto v\u00fdrazu, kde nenulov\u00fd n\u00e1vratov\u00fd k\u00f3d zna\u010d\u00ed pravdu a nulov\u00fd n\u00e1vratov\u00fd k\u00f3d nepravdu, a na z\u00e1klad\u011b toho provede bu\u010f `then` v\u011btev, nebo `else` v\u011btev. Klauzule `elif` se pou\u017e\u00edv\u00e1 pro vno\u0159en\u00e9 podm\u00ednky a umo\u017e\u0148uje vytv\u00e1\u0159et komplexn\u011bj\u0161\u00ed rozhodovac\u00ed struktury, podobn\u011b jako v jin\u00fdch programovac\u00edch jazyc\u00edch.",
        sectionNumber: "9.1.19",
        sectionTitle: "Conditionals",
      },
      {
        uuid: "5d719431-3daa-44aa-8023-7991c856579a",
        correct:
          "V shell skriptech, konstrukce `if cond; then cmd1; else cmd2; fi` realizuje podm\u00edn\u011bn\u00e9 prov\u00e1d\u011bn\u00ed, kde `cond` je interpretov\u00e1n jako p\u0159\u00edkaz. \u00dasp\u011b\u0161n\u00e9 proveden\u00ed p\u0159\u00edkazu `cond`, indikovan\u00e9 n\u00e1vratov\u00fdm k\u00f3dem 0, zp\u016fsob\u00ed proveden\u00ed p\u0159\u00edkazu `cmd1` v bloku `then`. Pokud p\u0159\u00edkaz `cond` sel\u017ee, tedy vr\u00e1t\u00ed nenulov\u00fd n\u00e1vratov\u00fd k\u00f3d, a existuje klauzule `else`, provede se p\u0159\u00edkaz `cmd2`. V p\u0159\u00edpad\u011b pou\u017eit\u00ed klauzule `elif cond2; then cmd3; fi`, se `cond2` vyhodnocuje pouze pokud p\u0159edchoz\u00ed podm\u00ednka `cond` selhala.",
        incorrect:
          "V shell skriptech, konstrukce `if cond; then cmd1; else cmd2; fi` implementuje podm\u00edn\u011bn\u00e9 prov\u00e1d\u011bn\u00ed, kde `cond` mus\u00ed b\u00fdt logick\u00fd v\u00fdraz, podobn\u011b jako v jazyc\u00edch jako C nebo Java.  Pokud se tento v\u00fdraz vyhodnot\u00ed jako pravdiv\u00fd, shell provede p\u0159\u00edkaz `cmd1` v bloku `then`. V opa\u010dn\u00e9m p\u0159\u00edpad\u011b, kdy je v\u00fdraz `cond` nepravdiv\u00fd, se provede p\u0159\u00edkaz `cmd2` v `else` bloku. Klauzule `elif` slou\u017e\u00ed k definov\u00e1n\u00ed alternativn\u00edch podm\u00ednek, kter\u00e9 se vyhodnocuj\u00ed paraleln\u011b s hlavn\u00ed podm\u00ednkou `cond`.",
        sectionNumber: "9.1.19",
        sectionTitle: "Conditionals",
      },
      {
        uuid: "d9b1bd99-66ed-4d27-9134-41364925b733",
        correct:
          "P\u0159\u00edkaz `test`, p\u016fvodn\u011b extern\u00ed program, je v modern\u00edch opera\u010dn\u00edch syst\u00e9mech obvykle integrov\u00e1n p\u0159\u00edmo do shellu, co\u017e umo\u017e\u0148uje efektivn\u011bj\u0161\u00ed vyhodnocov\u00e1n\u00ed logick\u00fdch v\u00fdraz\u016f a kontrolu stavu syst\u00e9mu bez nutnosti spou\u0161t\u011bn\u00ed samostatn\u00e9ho procesu pro ka\u017ed\u00fd testovac\u00ed p\u0159\u00edkaz.",
        incorrect:
          "P\u0159\u00edkaz `test`, p\u016fvodn\u011b intern\u00ed sou\u010d\u00e1st shellu, je v modern\u00edch opera\u010dn\u00edch syst\u00e9mech obvykle implementov\u00e1n jako extern\u00ed program, co\u017e zaji\u0161\u0165uje modularitu a odd\u011blen\u00ed funkc\u00ed testov\u00e1n\u00ed od z\u00e1kladn\u00ed funkcionality shellu, a umo\u017e\u0148uje tak snadn\u011bj\u0161\u00ed \u00fadr\u017ebu a aktualizace testovac\u00edch funkc\u00ed.",
        sectionNumber: "9.1.20",
        sectionTitle: "\u2039test\u203a (evaluating boolean expressions)",
      },
      {
        uuid: "5baf3c5a-24a3-4849-ac9a-3d8641511b18",
        correct:
          "P\u0159\u00edkaz `test` v opera\u010dn\u00edch syst\u00e9mech dle standardu POSIX slou\u017e\u00ed k vyhodnocov\u00e1n\u00ed podm\u00ednek a v\u00fdraz\u016f, kter\u00e9 by shell jinak obt\u00ed\u017en\u011b zpracov\u00e1val kv\u016fli omezen\u00e9 podpo\u0159e v\u00fdraz\u016f, a vrac\u00ed n\u00e1vratov\u00fd k\u00f3d indikuj\u00edc\u00ed pravdivost \u010di nepravdivost vyhodnocen\u00e9ho v\u00fdrazu, co\u017e se n\u00e1sledn\u011b vyu\u017e\u00edv\u00e1 v \u0159\u00eddic\u00edch struktur\u00e1ch jako `if` a `while`.",
        incorrect:
          "P\u0159\u00edkaz `test` v opera\u010dn\u00edch syst\u00e9mech dle standardu ISO slou\u017e\u00ed prim\u00e1rn\u011b k manipulaci s \u0159et\u011bzci a textov\u00fdmi daty v shell skriptech, a vrac\u00ed textov\u00fd v\u00fdstup popisuj\u00edc\u00ed v\u00fdsledek operace, kter\u00fd je nutn\u00e9 d\u00e1le parsovat pro pou\u017eit\u00ed v \u0159\u00eddic\u00edch struktur\u00e1ch jako `if` a `while`.",
        sectionNumber: "9.1.20",
        sectionTitle: "\u2039test\u203a (evaluating boolean expressions)",
      },
      {
        uuid: "f6e47d2a-20a3-48ee-ba19-e31b07343eee",
        correct:
          "A\u010dkoli p\u0159\u00edkaz `if` v shellu akceptuje jako podm\u00ednku jak\u00fdkoli spustiteln\u00fd p\u0159\u00edkaz, p\u0159\u00edkaz `test` byl zaveden pro usnadn\u011bn\u00ed a zp\u0159ehledn\u011bn\u00ed z\u00e1pisu slo\u017eit\u011bj\u0161\u00edch podm\u00ednek zahrnuj\u00edc\u00edch porovn\u00e1v\u00e1n\u00ed prom\u011bnn\u00fdch, kontrolu existence soubor\u016f a dal\u0161\u00ed logick\u00e9 operace, p\u0159i\u010dem\u017e jeho v\u00fdstupem je booleovsk\u00e1 hodnota reprezentovan\u00e1 n\u00e1vratov\u00fdm k\u00f3dem.",
        incorrect:
          "A\u010dkoli p\u0159\u00edkaz `if` v shellu vy\u017eaduje jako podm\u00ednku v\u00fdhradn\u011b specifick\u00e9 kl\u00ed\u010dov\u00e9 slovo `condition`, p\u0159\u00edkaz `test` byl zaveden pro obch\u00e1zen\u00ed tohoto omezen\u00ed a umo\u017e\u0148uje definovat vlastn\u00ed podm\u00ednky pomoc\u00ed komplexn\u00edch konstrukc\u00ed a intern\u00edch shell funkc\u00ed, p\u0159i\u010dem\u017e jeho v\u00fdstupem je textov\u00fd \u0159et\u011bzec interpretovan\u00fd p\u0159\u00edkazem `if`.",
        sectionNumber: "9.1.20",
        sectionTitle: "\u2039test\u203a (evaluating boolean expressions)",
      },
      {
        uuid: "364419f5-5ade-4b18-a90f-b58b05a33b12",
        correct:
          "P\u0159\u00edkaz `test` v shell skriptov\u00e1n\u00ed slou\u017e\u00ed k vyhodnocov\u00e1n\u00ed podm\u00ednek a hraje kl\u00ed\u010dovou roli p\u0159i rozhodov\u00e1n\u00ed o toku prov\u00e1d\u011bn\u00ed skriptu na z\u00e1klad\u011b r\u016fzn\u00fdch krit\u00e9ri\u00ed, jako je existence soubor\u016f, porovn\u00e1v\u00e1n\u00ed \u010d\u00edsel a \u0159et\u011bzc\u016f.",
        incorrect:
          "P\u0159\u00edkaz `test` v shell skriptov\u00e1n\u00ed slou\u017e\u00ed prim\u00e1rn\u011b k manipulaci se soubory a adres\u00e1\u0159i, a\u010dkoli m\u016f\u017ee okrajov\u011b slou\u017eit i k vyhodnocov\u00e1n\u00ed jednoduch\u00fdch podm\u00ednek, ale jeho hlavn\u00ed funkc\u00ed nen\u00ed \u0159\u00edzen\u00ed toku skriptu.",
        sectionNumber: "9.1.21",
        sectionTitle: "\u2039test\u203a Examples",
      },
      {
        uuid: "466fe67c-2d42-4d69-8ed8-6b40096e0373",
        correct:
          "P\u0159\u00edkaz `test` nab\u00edz\u00ed t\u0159i hlavn\u00ed kategorie predik\u00e1t\u016f: pro kontrolu existence a vlastnost\u00ed soubor\u016f, pro porovn\u00e1v\u00e1n\u00ed cel\u00fdch \u010d\u00edsel a pro porovn\u00e1v\u00e1n\u00ed \u0159et\u011bzc\u016f, co\u017e umo\u017e\u0148uje komplexn\u00ed testov\u00e1n\u00ed r\u016fzn\u00fdch aspekt\u016f syst\u00e9mu a dat v shell skriptech.",
        incorrect:
          "P\u0159\u00edkaz `test` nab\u00edz\u00ed pouze dv\u011b hlavn\u00ed kategorie predik\u00e1t\u016f: pro porovn\u00e1v\u00e1n\u00ed cel\u00fdch \u010d\u00edsel a pro porovn\u00e1v\u00e1n\u00ed \u0159et\u011bzc\u016f, p\u0159i\u010dem\u017e mo\u017enosti kontroly existence a vlastnost\u00ed soubor\u016f jsou v p\u0159\u00edkazu `test` zcela opomenuty.",
        sectionNumber: "9.1.21",
        sectionTitle: "\u2039test\u203a Examples",
      },
      {
        uuid: "d25df184-1295-485d-9916-a8b22d1cce5b",
        correct:
          "Mezi predik\u00e1ty p\u0159\u00edkazu `test` pro soubory pat\u0159\u00ed nap\u0159\u00edklad `-nt`, kter\u00fd slou\u017e\u00ed k porovn\u00e1n\u00ed, zda je soubor nov\u011bj\u0161\u00ed ne\u017e jin\u00fd soubor, co\u017e je u\u017eite\u010dn\u00e9 v situac\u00edch, kdy skript m\u00e1 prov\u00e1d\u011bt akce pouze pokud se soubor aktualizoval.",
        incorrect:
          "Mezi predik\u00e1ty p\u0159\u00edkazu `test` pro soubory pat\u0159\u00ed nap\u0159\u00edklad `-nt`, kter\u00fd slou\u017e\u00ed k porovn\u00e1n\u00ed, zda je soubor star\u0161\u00ed ne\u017e jin\u00fd soubor, a prim\u00e1rn\u011b se pou\u017e\u00edv\u00e1 k identifikaci zastaral\u00fdch soubor\u016f, kter\u00e9 je t\u0159eba odstranit.",
        sectionNumber: "9.1.21",
        sectionTitle: "\u2039test\u203a Examples",
      },
      {
        uuid: "b819426d-24d5-4210-aa46-7995a1b4eeb7",
        correct:
          "Predik\u00e1ty pro porovn\u00e1v\u00e1n\u00ed cel\u00fdch \u010d\u00edsel a \u0159et\u011bzc\u016f v p\u0159\u00edkazu `test` se do jist\u00e9 m\u00edry podobaj\u00ed funkc\u00edm, kter\u00e9 poskytuj\u00ed b\u011b\u017en\u00e9 programovac\u00ed jazyky, i kdy\u017e s odli\u0161nou syntax\u00ed, a umo\u017e\u0148uj\u00ed tak program\u00e1tor\u016fm shell skript\u016f pou\u017e\u00edvat zn\u00e1m\u00e9 logick\u00e9 operace.",
        incorrect:
          "Predik\u00e1ty pro porovn\u00e1v\u00e1n\u00ed cel\u00fdch \u010d\u00edsel a \u0159et\u011bzc\u016f v p\u0159\u00edkazu `test` jsou navr\u017eeny tak, aby se maxim\u00e1ln\u011b li\u0161ily od funkc\u00ed b\u011b\u017en\u00fdch programovac\u00edch jazyk\u016f a z\u00e1m\u011brn\u011b komplikuj\u00ed prov\u00e1d\u011bn\u00ed standardn\u00edch logick\u00fdch operac\u00ed.",
        sectionNumber: "9.1.21",
        sectionTitle: "\u2039test\u203a Examples",
      },
      {
        uuid: "15e8b8ba-a66b-4363-b2bb-51e46c8841cd",
        correct:
          "P\u0159\u00edkaz `while` v shell skriptech se pou\u017e\u00edv\u00e1 pro opakovan\u00e9 prov\u00e1d\u011bn\u00ed bloku p\u0159\u00edkaz\u016f, dokud zadan\u00e1 podm\u00ednka, kter\u00e1 je sama o sob\u011b p\u0159\u00edkazem, nesel\u017ee. Podm\u00ednkou m\u016f\u017ee b\u00fdt jak\u00fdkoliv spustiteln\u00fd p\u0159\u00edkaz, nejen `test`, a cyklus pokra\u010duje, dokud tento p\u0159\u00edkaz vrac\u00ed \u00fasp\u011b\u0161n\u00fd n\u00e1vratov\u00fd k\u00f3d.",
        incorrect:
          "P\u0159\u00edkaz `while` v shell skriptech se pou\u017e\u00edv\u00e1 pro opakovan\u00e9 prov\u00e1d\u011bn\u00ed bloku p\u0159\u00edkaz\u016f, dokud zadan\u00e1 podm\u00ednka, kter\u00e1 mus\u00ed b\u00fdt v\u00fdhradn\u011b p\u0159\u00edkazem `test`, neusp\u011bje. Jin\u00e9 p\u0159\u00edkazy ne\u017e `test` nemohou b\u00fdt pou\u017eity jako podm\u00ednka v cyklu `while`.",
        sectionNumber: "9.1.22",
        sectionTitle: "Loops",
      },
      {
        uuid: "f38b6c09-286c-4455-83ad-56d11b25c0a8",
        correct:
          "P\u0159\u00edkaz `for` v shell skriptech iteruje p\u0159es seznam hodnot, kter\u00fd lze definovat r\u016fzn\u00fdmi zp\u016fsoby. Krom\u011b explicitn\u00edho v\u00fd\u010dtu hodnot, `for` podporuje glob patterny pro snadn\u00e9 zpracov\u00e1n\u00ed skupin soubor\u016f a command substitution, umo\u017e\u0148uj\u00edc\u00ed dynamick\u00e9 generov\u00e1n\u00ed seznamu, nap\u0159\u00edklad pomoc\u00ed n\u00e1stroje `seq` pro \u010d\u00edseln\u00e9 sekvence.",
        incorrect:
          "P\u0159\u00edkaz `for` v shell skriptech iteruje pouze p\u0159es explicitn\u011b definovan\u00fd seznam hodnot.  Glob patterny a command substitution nejsou podporov\u00e1ny pro generov\u00e1n\u00ed seznamu prvk\u016f, p\u0159es kter\u00e9 m\u00e1 cyklus `for` iterovat, a je nutn\u00e9 v\u017edy manu\u00e1ln\u011b vypsat v\u0161echny hodnoty.",
        sectionNumber: "9.1.22",
        sectionTitle: "Loops",
      },
      {
        uuid: "6612e54f-0022-4674-8549-0b596dd98ed6",
        correct:
          "Konstrukce `case` v shell skriptech slou\u017e\u00ed k prov\u00e1d\u011bn\u00ed anal\u00fdzy p\u0159\u00edpad\u016f a umo\u017e\u0148uje v\u00fdb\u011br p\u0159\u00edkaz\u016f na z\u00e1klad\u011b porovn\u00e1v\u00e1n\u00ed vzor\u016f.  Vyu\u017e\u00edv\u00e1 se pro \u0159\u00edzen\u00ed toku programu a umo\u017e\u0148uje prov\u00e1d\u011bt r\u016fzn\u00e9 akce v z\u00e1vislosti na hodnot\u011b zadan\u00e9ho \u0159et\u011bzce, p\u0159i\u010dem\u017e se pro porovn\u00e1v\u00e1n\u00ed vzor\u016f pou\u017e\u00edv\u00e1 syntaxe podobn\u00e1 globbingu, ale bez expanze jmen soubor\u016f.",
        incorrect:
          "Konstrukce `case` v shell skriptech slou\u017e\u00ed k prov\u00e1d\u011bn\u00ed anal\u00fdzy p\u0159\u00edpad\u016f a umo\u017e\u0148uje v\u00fdb\u011br p\u0159\u00edkaz\u016f na z\u00e1klad\u011b porovn\u00e1v\u00e1n\u00ed vzor\u016f.  Vyu\u017e\u00edv\u00e1 se pro \u0159\u00edzen\u00ed toku programu a umo\u017e\u0148uje prov\u00e1d\u011bt r\u016fzn\u00e9 akce v z\u00e1vislosti na hodnot\u011b zadan\u00e9ho \u0159et\u011bzce, p\u0159i\u010dem\u017e se pro porovn\u00e1v\u00e1n\u00ed vzor\u016f pou\u017e\u00edv\u00e1 standardn\u00ed globbing expanze, kter\u00e1 automaticky roz\u0161i\u0159uje vzory na seznam existuj\u00edc\u00edch soubor\u016f.",
        sectionNumber: "9.1.23",
        sectionTitle: "Case Analysis",
      },
      {
        uuid: "2f5d19f7-2965-40d0-af05-31f69a81bceb",
        correct:
          "V r\u00e1mci syntaxe konstrukce `case` v shell skriptech se pro odd\u011blen\u00ed jednotliv\u00fdch v\u011btv\u00ed, tedy blok\u016f k\u00f3du spojen\u00fdch s konkr\u00e9tn\u00edm vzorem, pou\u017e\u00edv\u00e1 dvojice st\u0159edn\u00edk\u016f `;;`. Tato dvojice st\u0159edn\u00edk\u016f signalizuje konec aktu\u00e1ln\u00ed v\u011btve `case` a umo\u017e\u0148uje pokra\u010dov\u00e1n\u00ed v dal\u0161\u00edm vyhodnocov\u00e1n\u00ed, pokud by p\u0159edchoz\u00ed v\u011btev nebyla vybr\u00e1na.",
        incorrect:
          "V r\u00e1mci syntaxe konstrukce `case` v shell skriptech se pro odd\u011blen\u00ed jednotliv\u00fdch v\u011btv\u00ed, tedy blok\u016f k\u00f3du spojen\u00fdch s konkr\u00e9tn\u00edm vzorem, pou\u017e\u00edv\u00e1 jednoduch\u00fd st\u0159edn\u00edk `;`.  Dvojice st\u0159edn\u00edk\u016f `;;` se pou\u017e\u00edv\u00e1 pro jin\u00fd \u00fa\u010del, konkr\u00e9tn\u011b pro ukon\u010den\u00ed cel\u00e9ho `case` bloku a n\u00e1vrat z n\u011bj.",
        sectionNumber: "9.1.23",
        sectionTitle: "Case Analysis",
      },
      {
        uuid: "153231ea-092a-4102-b617-db4c644e3405",
        correct:
          'Podle uveden\u00e9 dokumentace, konstrukce `case` v shell skriptech pou\u017e\u00edv\u00e1 pro definici vzor\u016f v r\u00e1mci jednotliv\u00fdch v\u011btv\u00ed takzvan\u00e9 "unbalanced parentheses", tedy nevyv\u00e1\u017een\u00e9 z\u00e1vorky. Konkr\u00e9tn\u011b je vid\u011bt pou\u017eit\u00ed otev\u00edrac\u00ed z\u00e1vorky `(` bez odpov\u00eddaj\u00edc\u00ed uzav\u00edrac\u00ed z\u00e1vorky `)` v p\u0159\u00edkladu `case $x in *.c) cc $x;; *) ls $x;; esac`.',
        incorrect:
          'Podle uveden\u00e9 dokumentace, konstrukce `case` v shell skriptech pou\u017e\u00edv\u00e1 pro definici vzor\u016f v r\u00e1mci jednotliv\u00fdch v\u011btv\u00ed standardn\u00ed "balanced parentheses", tedy vyv\u00e1\u017een\u00e9 z\u00e1vorky, podobn\u011b jako je tomu u jin\u00fdch programovac\u00edch jazyk\u016f.  Pou\u017eit\u00ed nevyv\u00e1\u017een\u00fdch z\u00e1vorek by bylo syntakticky nespr\u00e1vn\u00e9 a vedlo by k chyb\u011b.',
        sectionNumber: "9.1.23",
        sectionTitle: "Case Analysis",
      },
      {
        uuid: "a2490e16-71f7-47fb-9af3-2d37490393ad",
        correct:
          "Oper\u00e1tor `&&` v shellu funguje jako zkratka pro `if` p\u0159\u00edkaz a spou\u0161t\u00ed n\u00e1sleduj\u00edc\u00ed p\u0159\u00edkaz pouze v p\u0159\u00edpad\u011b, \u017ee p\u0159edchoz\u00ed p\u0159\u00edkaz byl \u00fasp\u011b\u0161n\u00fd, co\u017e je u\u017eite\u010dn\u00e9 pro vytv\u00e1\u0159en\u00ed sekvenc\u00ed p\u0159\u00edkaz\u016f, kter\u00e9 se zastav\u00ed p\u0159i prvn\u00edm ne\u00fasp\u011bchu.",
        incorrect:
          "Oper\u00e1tor `&&` v shellu funguje jako zkratka pro `if` p\u0159\u00edkaz a spou\u0161t\u00ed n\u00e1sleduj\u00edc\u00ed p\u0159\u00edkaz pouze v p\u0159\u00edpad\u011b, \u017ee p\u0159edchoz\u00ed p\u0159\u00edkaz selhal, co\u017e je u\u017eite\u010dn\u00e9 pro vytv\u00e1\u0159en\u00ed sekvenc\u00ed p\u0159\u00edkaz\u016f, kter\u00e9 se zastav\u00ed p\u0159i prvn\u00edm ne\u00fasp\u011bchu.",
        sectionNumber: "9.1.24",
        sectionTitle: "Command Chaining",
      },
      {
        uuid: "e0bf387f-7467-4f98-8792-0b3143214b26",
        correct:
          "P\u0159\u00edkazov\u00fd oper\u00e1tor `||` v shellu se pou\u017e\u00edv\u00e1 k proveden\u00ed druh\u00e9ho p\u0159\u00edkazu pouze tehdy, kdy\u017e prvn\u00ed p\u0159\u00edkaz sel\u017ee, co\u017e umo\u017e\u0148uje definovat alternativn\u00ed akce v p\u0159\u00edpad\u011b ne\u00fasp\u011bchu p\u0159edchoz\u00edho p\u0159\u00edkazu.",
        incorrect:
          "P\u0159\u00edkazov\u00fd oper\u00e1tor `||` v shellu se pou\u017e\u00edv\u00e1 k proveden\u00ed druh\u00e9ho p\u0159\u00edkazu pouze tehdy, kdy\u017e prvn\u00ed p\u0159\u00edkaz usp\u011bje, co\u017e umo\u017e\u0148uje definovat alternativn\u00ed akce v p\u0159\u00edpad\u011b ne\u00fasp\u011bchu p\u0159edchoz\u00edho p\u0159\u00edkazu.",
        sectionNumber: "9.1.24",
        sectionTitle: "Command Chaining",
      },
      {
        uuid: "39ec7d38-4bf1-4872-b289-f346f16530dc",
        correct:
          "Oper\u00e1tor ``;` v shellu umo\u017e\u0148uje sekven\u010dn\u00ed spou\u0161t\u011bn\u00ed p\u0159\u00edkaz\u016f, kde se druh\u00fd p\u0159\u00edkaz spust\u00ed bez ohledu na v\u00fdsledek prvn\u00edho p\u0159\u00edkazu, a je pova\u017eov\u00e1n za z\u00e1kladn\u00ed oper\u00e1tor pro \u0159et\u011bzen\u00ed p\u0159\u00edkaz\u016f.",
        incorrect:
          "Oper\u00e1tor ``;` v shellu umo\u017e\u0148uje podm\u00edn\u011bn\u00e9 spou\u0161t\u011bn\u00ed p\u0159\u00edkaz\u016f, kde se druh\u00fd p\u0159\u00edkaz spust\u00ed pouze pokud prvn\u00ed p\u0159\u00edkaz usp\u011bje, a je pova\u017eov\u00e1n za z\u00e1kladn\u00ed oper\u00e1tor pro \u0159et\u011bzen\u00ed p\u0159\u00edkaz\u016f.",
        sectionNumber: "9.1.24",
        sectionTitle: "Command Chaining",
      },
      {
        uuid: "d2d2ebee-49b2-413e-a8b4-451d552e6432",
        correct:
          "Kombinace oper\u00e1tor\u016f `&&` a `||` s p\u0159\u00edkazy vytv\u00e1\u0159\u00ed op\u011bt platn\u00e9 p\u0159\u00edkazy, co\u017e umo\u017e\u0148uje jejich flexibiln\u00ed pou\u017eit\u00ed nejen v podm\u00ednk\u00e1ch `if` nebo `while` cykl\u016f, ale tak\u00e9 samostatn\u011b v interaktivn\u00edm re\u017eimu shellu pro r\u016fzn\u00e9 \u00fa\u010dely.",
        incorrect:
          "Kombinace oper\u00e1tor\u016f `&&` a `||` s p\u0159\u00edkazy vytv\u00e1\u0159\u00ed neplatn\u00e9 konstrukce v shellu a nelze je pou\u017e\u00edt v podm\u00ednk\u00e1ch `if` nebo `while` cykl\u016f, ani samostatn\u011b v interaktivn\u00edm re\u017eimu shellu.",
        sectionNumber: "9.1.24",
        sectionTitle: "Command Chaining",
      },
      {
        uuid: "9463a800-8de9-40d9-8855-6acd9a75a84e",
        correct:
          "Oper\u00e1tor `&&` je zvl\u00e1\u0161t\u011b u\u017eite\u010dn\u00fd v interaktivn\u00edm re\u017eimu shellu, proto\u017ee umo\u017e\u0148uje u\u017eivateli zadat sekvenci p\u0159\u00edkaz\u016f, kter\u00e1 se automaticky zastav\u00ed, pokud n\u011bkter\u00fd z p\u0159\u00edkaz\u016f sel\u017ee, \u010d\u00edm\u017e se sni\u017euje celkov\u00e1 latence interakce s syst\u00e9mem.",
        incorrect:
          "Oper\u00e1tor `&&` je zvl\u00e1\u0161t\u011b u\u017eite\u010dn\u00fd v d\u00e1vkov\u00e9m re\u017eimu shellu, proto\u017ee umo\u017e\u0148uje u\u017eivateli zadat sekvenci p\u0159\u00edkaz\u016f, kter\u00e1 se automaticky zastav\u00ed, pokud n\u011bkter\u00fd z p\u0159\u00edkaz\u016f sel\u017ee, \u010d\u00edm\u017e se zvy\u0161uje celkov\u00e1 latence interakce s syst\u00e9mem.",
        sectionNumber: "9.1.24",
        sectionTitle: "Command Chaining",
      },
      {
        uuid: "cb361ecc-6bff-40dd-b48c-f4fd3758787c",
        correct:
          "Shell pipelines jsou mocn\u00fdm n\u00e1strojem, kter\u00fd umo\u017e\u0148uje kombinovat p\u0159\u00edkazy. Jsou implementov\u00e1ny pomoc\u00ed oper\u00e1toru pipe, kter\u00fd p\u0159esm\u011brov\u00e1v\u00e1 standardn\u00ed v\u00fdstup p\u0159edchoz\u00edho p\u0159\u00edkazu na standardn\u00ed vstup n\u00e1sleduj\u00edc\u00edho p\u0159\u00edkazu, co\u017e umo\u017e\u0148uje sekven\u010dn\u00ed zpracov\u00e1n\u00ed dat mezi p\u0159\u00edkazy v pipeline. Tento mechanismus usnad\u0148uje komplexn\u00ed operace z\u0159et\u011bzen\u00edm jednoduch\u00fdch utilit.",
        incorrect:
          "Shell pipelines jsou funkc\u00ed, kter\u00e1 prov\u00e1d\u00ed p\u0159\u00edkazy sekven\u010dn\u011b, kde ka\u017ed\u00fd p\u0159\u00edkaz \u010dek\u00e1 na \u00fapln\u00e9 dokon\u010den\u00ed p\u0159edchoz\u00edho, ne\u017e za\u010dne. Oper\u00e1tor pipe, v tomto chybn\u00e9m v\u00fdkladu, zahazuje standardn\u00ed v\u00fdstup prvn\u00edho p\u0159\u00edkazu a standardn\u00ed vstup druh\u00e9ho p\u0159\u00edkazu z\u016fst\u00e1v\u00e1 nep\u0159ipojen\u00fd, \u010d\u00edm\u017e se zabr\u00e1n\u00ed toku dat mezi p\u0159\u00edkazy v pipeline a omezuje se komplexnost dosa\u017eiteln\u00fdch operac\u00ed.",
        sectionNumber: "9.1.25",
        sectionTitle: "Pipes",
      },
      {
        uuid: "971b9369-8788-4549-9a71-e81c4b46b67c",
        correct:
          "P\u0159i pou\u017eit\u00ed shell pipelines jako `cmd1 | cmd2 | cmd3` jsou v\u0161echny p\u0159\u00edkazy (cmd1, cmd2 a cmd3) spu\u0161t\u011bny soub\u011b\u017en\u011b nebo paraleln\u011b. Oper\u00e1tor pipe zaji\u0161\u0165uje, \u017ee standardn\u00ed v\u00fdstup `cmd1` je p\u0159esm\u011brov\u00e1n jako standardn\u00ed vstup pro `cmd2`, a podobn\u011b, standardn\u00ed v\u00fdstup `cmd2` se st\u00e1v\u00e1 standardn\u00edm vstupem pro `cmd3`, co\u017e usnad\u0148uje tok dat mezi p\u0159\u00edkazy, kdy\u017e b\u011b\u017e\u00ed paraleln\u011b.",
        incorrect:
          "V shell pipelines jako `cmd1 | cmd2 | cmd3` jsou p\u0159\u00edkazy spou\u0161t\u011bny sekven\u010dn\u011b, co\u017e znamen\u00e1, \u017ee `cmd2` za\u010dne a\u017e po \u00fapln\u00e9m dokon\u010den\u00ed `cmd1` a `cmd3` za\u010dne po dokon\u010den\u00ed `cmd2`. Oper\u00e1tor pipe, v t\u00e9to nespr\u00e1vn\u00e9 interpretaci, slou\u017e\u00ed pouze k p\u0159esm\u011brov\u00e1n\u00ed chybov\u00fdch proud\u016f, nikoli standardn\u00edho v\u00fdstupu, a proto neumo\u017e\u0148uje p\u0159ed\u00e1v\u00e1n\u00ed dat mezi p\u0159\u00edkazy b\u011bhem jejich sekven\u010dn\u00edho prov\u00e1d\u011bn\u00ed.",
        sectionNumber: "9.1.25",
        sectionTitle: "Pipes",
      },
      {
        uuid: "0bf3d224-3e55-4cff-a549-c8329eb6f601",
        correct:
          "Shell funkce p\u0159edstavuj\u00ed odleh\u010denou alternativu ke skript\u016fm, av\u0161ak na rozd\u00edl od skript\u016f, kter\u00e9 mohou b\u00fdt spou\u0161t\u011bny i ne-shell programy, shell funkce jsou ur\u010den\u00e9 v\u00fdhradn\u011b pro vol\u00e1n\u00ed v r\u00e1mci shell prost\u0159ed\u00ed a nemohou b\u00fdt spu\u0161t\u011bny extern\u00edmi programy.",
        incorrect:
          "Shell funkce jsou plnohodnotnou n\u00e1hradou za skripty a nab\u00edzej\u00ed stejnou flexibilitu spou\u0161t\u011bn\u00ed, co\u017e znamen\u00e1, \u017ee stejn\u011b jako skripty, i shell funkce mohou b\u00fdt bez omezen\u00ed vol\u00e1ny jak shell programy, tak i programy, kter\u00e9 nejsou sou\u010d\u00e1st\u00ed shell prost\u0159ed\u00ed.",
        sectionNumber: "9.1.26",
        sectionTitle: "Functions",
      },
      {
        uuid: "65acac98-b6f8-466a-90bf-5670a44c65d2",
        correct:
          "P\u0159i definov\u00e1n\u00ed shell funkce nen\u00ed nutn\u00e9 explicitn\u011b exportovat prom\u011bnn\u00e9, aby byly dostupn\u00e9 v kontextu funkce, a na rozd\u00edl od b\u011b\u017en\u00fdch shell skript\u016f, zm\u011bny prom\u011bnn\u00fdch proveden\u00e9 uvnit\u0159 shell funkce jsou viditeln\u00e9 a maj\u00ed vliv i v prost\u0159ed\u00ed, ze kter\u00e9ho byla funkce vol\u00e1na.",
        incorrect:
          "Stejn\u011b jako u shell skript\u016f, i u shell funkc\u00ed je nezbytn\u00e9 prom\u011bnn\u00e9, kter\u00e9 maj\u00ed b\u00fdt sd\u00edleny s volaj\u00edc\u00edm prost\u0159ed\u00edm, explicitn\u011b exportovat. Zm\u011bny prom\u011bnn\u00fdch uvnit\u0159 shell funkce nikdy nemaj\u00ed vliv na prost\u0159ed\u00ed, ze kter\u00e9ho byla funkce vol\u00e1na, proto\u017ee prost\u0159ed\u00ed je v\u017edy p\u0159ed\u00e1v\u00e1no pouze sm\u011brem dol\u016f, nikoliv zp\u011bt.",
        sectionNumber: "9.1.26",
        sectionTitle: "Functions",
      },
      {
        uuid: "83e9e187-9ff5-47f3-9886-87438ee7811f",
        correct:
          "B\u011b\u017en\u00e9 spu\u0161t\u011bn\u00ed shell skriptu zp\u016fsob\u00ed, \u017ee zm\u011bny prom\u011bnn\u00fdch v n\u011bm proveden\u00e9 neovlivn\u00ed prom\u011bnn\u00e9 v rodi\u010dovsk\u00e9m shellu, av\u0161ak pokud je skript spu\u0161t\u011bn pomoc\u00ed p\u0159\u00edkazu '.', chov\u00e1 se podobn\u011b jako funkce a umo\u017e\u0148uje, aby zm\u011bny prom\u011bnn\u00fdch uvnit\u0159 skriptu byly viditeln\u00e9 i v rodi\u010dovsk\u00e9m shellu.",
        incorrect:
          "Bez ohledu na zp\u016fsob spu\u0161t\u011bn\u00ed shell skriptu, a\u0165 u\u017e b\u011b\u017en\u00fdm zp\u016fsobem nebo pomoc\u00ed p\u0159\u00edkazu '.', zm\u011bny prom\u011bnn\u00fdch uvnit\u0159 skriptu nikdy nemaj\u00ed vliv na prom\u011bnn\u00e9 v rodi\u010dovsk\u00e9m shellu. Chov\u00e1n\u00ed skript\u016f je v tomto ohledu konzistentn\u00ed a nez\u00e1visl\u00e9 na zp\u016fsobu jejich vol\u00e1n\u00ed.",
        sectionNumber: "9.1.26",
        sectionTitle: "Functions",
      },
      {
        uuid: "1282f909-b995-4b73-9003-90024f2c55ba",
        correct:
          "Hostname slou\u017e\u00ed k identifikaci po\u010d\u00edta\u010d\u016f v s\u00edti a jsou navr\u017eeny tak, aby byly \u010diteln\u00e9 pro \u010dlov\u011bka. Existuj\u00ed ve dvou hlavn\u00edch form\u00e1ch: jednoduch\u00e9 jm\u00e9no po\u010d\u00edta\u010de a pln\u011b kvalifikovan\u00e9 dom\u00e9nov\u00e9 jm\u00e9no (FQDN), kter\u00e9 explicitn\u011b zahrnuje s\u00ed\u0165, do kter\u00e9 po\u010d\u00edta\u010d pat\u0159\u00ed. FQDN poskytuje \u00faplnou a jednozna\u010dnou adresu pro po\u010d\u00edta\u010d v r\u00e1mci s\u00ed\u0165ov\u00e9 hierarchie.",
        incorrect:
          "Hostname slou\u017e\u00ed k identifikaci po\u010d\u00edta\u010d\u016f v s\u00edti, ale jsou prim\u00e1rn\u011b navr\u017eeny pro \u010ditelnost strojem, nikoli pro lidsk\u00e9 porozum\u011bn\u00ed. Existuj\u00ed ve dvou hlavn\u00edch form\u00e1ch: jednoduch\u00e9 jm\u00e9no po\u010d\u00edta\u010de a \u010d\u00e1ste\u010dn\u011b kvalifikovan\u00e9 dom\u00e9nov\u00e9 jm\u00e9no (PQDN), kter\u00e9 implicitn\u011b zahrnuje s\u00ed\u0165, do kter\u00e9 po\u010d\u00edta\u010d pat\u0159\u00ed. PQDN poskytuje \u00faplnou a jednozna\u010dnou adresu pro po\u010d\u00edta\u010d v r\u00e1mci s\u00ed\u0165ov\u00e9 hierarchie.",
        sectionNumber: "9.2.1",
        sectionTitle: "Host and Domain Names",
      },
      {
        uuid: "0fb21b65-febd-4e21-837d-7dd1241c2a01",
        correct:
          "Pln\u011b kvalifikovan\u00e1 dom\u00e9nov\u00e1 jm\u00e9na (FQDN) jsou strukturov\u00e1na hierarchicky a jsou prezentov\u00e1na v little-endian form\u00e1tu, jak je ilustrov\u00e1no na p\u0159\u00edkladu 'www.fi.muni.cz'. Tato hierarchick\u00e1 struktura, \u010dten\u00e1 zprava doleva, za\u010d\u00edn\u00e1 nejkonkr\u00e9tn\u011bj\u0161\u00ed \u010d\u00e1st\u00ed (hostitelem) a postupuje k nejobecn\u011bj\u0161\u00ed \u010d\u00e1sti (dom\u00e9n\u011b), co\u017e zaji\u0161\u0165uje jedine\u010dnou a glob\u00e1ln\u011b rozpoznatelnou adresu pro ka\u017ed\u00fd po\u010d\u00edta\u010d v s\u00edti.",
        incorrect:
          "Pln\u011b kvalifikovan\u00e1 dom\u00e9nov\u00e1 jm\u00e9na (FQDN) jsou strukturov\u00e1na line\u00e1rn\u011b a jsou prezentov\u00e1na v big-endian form\u00e1tu, jak je ilustrov\u00e1no na p\u0159\u00edkladu 'www.fi.muni.cz'. Tato line\u00e1rn\u00ed struktura, \u010dten\u00e1 zleva doprava, za\u010d\u00edn\u00e1 nejobecn\u011bj\u0161\u00ed \u010d\u00e1st\u00ed (dom\u00e9nou) a postupuje k nejkonkr\u00e9tn\u011bj\u0161\u00ed \u010d\u00e1sti (hostiteli), co\u017e zaji\u0161\u0165uje jedine\u010dnou a glob\u00e1ln\u011b rozpoznatelnou adresu pro ka\u017ed\u00fd po\u010d\u00edta\u010d v s\u00edti.",
        sectionNumber: "9.2.1",
        sectionTitle: "Host and Domain Names",
      },
      {
        uuid: "fd730754-1023-4ab4-9679-b69e9603a6b6",
        correct:
          "P\u0159i pr\u00e1ci v lok\u00e1ln\u00edm s\u00ed\u0165ov\u00e9m prost\u0159ed\u00ed je \u010dasto p\u0159\u00edpustn\u00e9 vynechat lok\u00e1ln\u00ed p\u0159\u00edponu z hostname. Nap\u0159\u00edklad, nam\u00edsto pou\u017eit\u00ed pln\u011b kvalifikovan\u00e9ho dom\u00e9nov\u00e9ho jm\u00e9na, lze jednodu\u0161e pou\u017e\u00edt samotn\u00e9 jm\u00e9no po\u010d\u00edta\u010de, jako 'aisa' v kontextu 'ping aisa', spol\u00e9haj\u00edc se na konfiguraci lok\u00e1ln\u00ed dom\u00e9ny s\u00edt\u011b pro vy\u0159e\u0161en\u00ed adresy.",
        incorrect:
          "P\u0159i pr\u00e1ci v glob\u00e1ln\u00edm s\u00ed\u0165ov\u00e9m prost\u0159ed\u00ed je v\u017edy nutn\u00e9 vynechat lok\u00e1ln\u00ed p\u0159\u00edponu z hostname. Nap\u0159\u00edklad, nam\u00edsto pou\u017eit\u00ed pln\u011b kvalifikovan\u00e9ho dom\u00e9nov\u00e9ho jm\u00e9na, se mus\u00ed jednodu\u0161e pou\u017e\u00edt samotn\u00e9 jm\u00e9no po\u010d\u00edta\u010de, jako 'aisa' v kontextu 'ping aisa', spol\u00e9haj\u00edc se na glob\u00e1ln\u00ed DNS syst\u00e9m pro vy\u0159e\u0161en\u00ed adresy.",
        sectionNumber: "9.2.1",
        sectionTitle: "Host and Domain Names",
      },
      {
        uuid: "eaf2f18a-aa48-4bd7-a025-195aa0ac612f",
        correct:
          "Pro vz\u00e1jemnou komunikaci v po\u010d\u00edta\u010dov\u00fdch s\u00edt\u00edch se up\u0159ednost\u0148uj\u00ed \u010d\u00edseln\u00e9 adresy, kter\u00e9 jsou strojov\u011b \u010diteln\u00e9 a efektivn\u00ed pro sm\u011brov\u00e1n\u00ed a doru\u010dov\u00e1n\u00ed datagram\u016f, na rozd\u00edl od lidsky \u010diteln\u00fdch jmen, kter\u00e1 jsou sice u\u017eivatelsky p\u0159\u00edv\u011btiv\u011bj\u0161\u00ed, ale vy\u017eaduj\u00ed slo\u017eit\u011bj\u0161\u00ed mechanismy pro p\u0159eklad na adresy strojov\u00e9, p\u0159i\u010dem\u017e d\u00e9lka a form\u00e1t t\u011bchto \u010d\u00edseln\u00fdch adres se li\u0161\u00ed v z\u00e1vislosti na s\u00ed\u0165ov\u00e9m protokolu, nap\u0159\u00edklad IPv4 adresa je tvo\u0159ena 4 oktety.",
        incorrect:
          "Pro vz\u00e1jemnou komunikaci v po\u010d\u00edta\u010dov\u00fdch s\u00edt\u00edch se up\u0159ednost\u0148uj\u00ed lidsky \u010diteln\u00e9 adresy, kter\u00e9 jsou univerz\u00e1ln\u00ed a efektivn\u00ed pro sm\u011brov\u00e1n\u00ed a doru\u010dov\u00e1n\u00ed datagram\u016f, p\u0159i\u010dem\u017e \u010d\u00edseln\u00e9 adresy jsou sice strojov\u011b \u010diteln\u00e9, ale jsou pova\u017eov\u00e1ny za zastaral\u00e9 a neefektivn\u00ed, d\u00e9lka a form\u00e1t t\u011bchto adres jsou jednotn\u00e9 nap\u0159\u00ed\u010d v\u0161emi s\u00ed\u0165ov\u00fdmi protokoly a  IPv4 adresa je tvo\u0159ena 8 oktety.",
        sectionNumber: "9.2.2",
        sectionTitle: "Network Addresses",
      },
      {
        uuid: "600d322a-7fa5-4690-b1f7-bc460bfb3080",
        correct:
          "Zat\u00edmco pro u\u017eivatele je pohodln\u011bj\u0161\u00ed odkazovat se na po\u010d\u00edta\u010de pomoc\u00ed jmen s\u00e9manticky srozumiteln\u00fdch pro \u010dlov\u011bka, nap\u0159\u00edklad dom\u00e9nov\u00fdch jmen, pro samotnou komunikaci mezi po\u010d\u00edta\u010di v s\u00edti se vyu\u017e\u00edvaj\u00ed v\u00fdhradn\u011b numerick\u00e9 adresy, jejich\u017e struktura a d\u00e9lka se odv\u00edj\u00ed od pou\u017eit\u00e9ho komunika\u010dn\u00edho protokolu, p\u0159i\u010dem\u017e nap\u0159\u00edklad modern\u00ed protokol IPv6 definuje adresy o d\u00e9lce 16 oktet\u016f, co\u017e umo\u017e\u0148uje adresovat mnohem v\u011bt\u0161\u00ed mno\u017estv\u00ed za\u0159\u00edzen\u00ed ne\u017e star\u0161\u00ed IPv4.",
        incorrect:
          "Zat\u00edmco pro u\u017eivatele je pohodln\u011bj\u0161\u00ed odkazovat se na po\u010d\u00edta\u010de pomoc\u00ed jmen s\u00e9manticky srozumiteln\u00fdch pro \u010dlov\u011bka, pro samotnou komunikaci mezi po\u010d\u00edta\u010di v s\u00edti se prim\u00e1rn\u011b vyu\u017e\u00edvaj\u00ed textov\u00e9 adresy, kter\u00e9 jsou univerz\u00e1ln\u011bj\u0161\u00ed a l\u00e9pe \u0161k\u00e1lovateln\u00e9, struktura a d\u00e9lka t\u011bchto adres je pevn\u011b dan\u00e1 a nem\u011bn\u00ed se v z\u00e1vislosti na komunika\u010dn\u00edm protokolu, p\u0159i\u010dem\u017e protokol IPv6 definuje adresy o d\u00e9lce pouze 8 oktet\u016f, co\u017e je m\u00e9n\u011b ne\u017e u star\u0161\u00edho IPv4.",
        sectionNumber: "9.2.2",
        sectionTitle: "Network Addresses",
      },
      {
        uuid: "3e715383-a37a-4440-8287-2c4349068605",
        correct:
          "Lok\u00e1ln\u00ed s\u00edt\u011b (LAN), jako nap\u0159\u00edklad Ethernet a WiFi, jsou charakteristick\u00e9 svou geografickou omezenost\u00ed na prostor kancel\u00e1\u0159e, dom\u00e1cnosti nebo budovy a funguj\u00ed typicky jako jedin\u00e1 broadcast dom\u00e9na, co\u017e znamen\u00e1, \u017ee ka\u017ed\u00fd po\u010d\u00edta\u010d v s\u00edti m\u016f\u017ee p\u0159\u00edmo oslovit v\u0161echny ostatn\u00ed po\u010d\u00edta\u010de p\u0159ipojen\u00e9 k dan\u00e9 LAN.",
        incorrect:
          "Rozs\u00e1hl\u00e9 s\u00edt\u011b (WAN), jako nap\u0159\u00edklad Ethernet a WiFi, jsou charakteristick\u00e9 svou geografickou rozs\u00e1hlost\u00ed p\u0159esahuj\u00edc\u00ed hranice st\u00e1t\u016f a kontinent\u016f a funguj\u00ed typicky jako odd\u011blen\u00e9 broadcast dom\u00e9ny, co\u017e znamen\u00e1, \u017ee po\u010d\u00edta\u010d v s\u00edti m\u016f\u017ee oslovit pouze omezen\u00fd po\u010det ostatn\u00edch po\u010d\u00edta\u010d\u016f p\u0159ipojen\u00fdch k dan\u00e9 WAN.",
        sectionNumber: "9.2.3",
        sectionTitle: "Network Types",
      },
      {
        uuid: "9812a523-6eeb-4307-934c-ebf535693c83",
        correct:
          "Technologie Ethernet a WiFi, b\u011b\u017en\u011b pou\u017e\u00edvan\u00e9 v lok\u00e1ln\u00edch s\u00edt\u00edch (LAN), dosahuj\u00ed rychlost\u00ed p\u0159enosu dat a\u017e 1 Gb/s, p\u0159i\u010dem\u017e Ethernet nab\u00edz\u00ed i m\u00e9n\u011b b\u011b\u017en\u00e9, av\u0161ak dostupn\u00e9 varianty s rychlost\u00ed 10 Gb/s, zat\u00edmco WiFi se typicky pohybuje okolo rychlosti do 1 Gb/s.",
        incorrect:
          "Technologie Ethernet a WiFi, b\u011b\u017en\u011b pou\u017e\u00edvan\u00e9 v rozs\u00e1hl\u00fdch s\u00edt\u00edch (WAN), dosahuj\u00ed rychlost\u00ed p\u0159enosu dat pouze do 10 Mb/s, p\u0159i\u010dem\u017e Ethernet nenab\u00edz\u00ed \u017e\u00e1dn\u00e9 varianty s rychlost\u00ed 10 Gb/s a WiFi je omezena maxim\u00e1ln\u00ed rychlost\u00ed 100 Mb/s.",
        sectionNumber: "9.2.3",
        sectionTitle: "Network Types",
      },
      {
        uuid: "bb4f4bdf-6064-41b7-be0f-6093401184fb",
        correct:
          "Zat\u00edmco lok\u00e1ln\u00ed s\u00edt\u011b (LAN) a rozs\u00e1hl\u00e9 s\u00edt\u011b (WAN) se li\u0161\u00ed geografick\u00fdm rozsahem a typick\u00fdmi technologiemi n\u00edzk\u00fdch vrstev, je d\u016fle\u017eit\u00e9 poznamenat, \u017ee technologie b\u011b\u017en\u011b pou\u017e\u00edvan\u00e9 v LAN, konkr\u00e9tn\u011b Ethernet a WiFi, se mohou uplatnit i v r\u00e1mci rozs\u00e1hl\u00fdch s\u00edt\u00ed (WAN).",
        incorrect:
          "Zat\u00edmco lok\u00e1ln\u00ed s\u00edt\u011b (LAN) a rozs\u00e1hl\u00e9 s\u00edt\u011b (WAN) se neli\u0161\u00ed geografick\u00fdm rozsahem a typick\u00fdmi technologiemi n\u00edzk\u00fdch vrstev, je d\u016fle\u017eit\u00e9 poznamenat, \u017ee technologie b\u011b\u017en\u011b pou\u017e\u00edvan\u00e9 v LAN, konkr\u00e9tn\u011b Ethernet a WiFi, se nikdy nemohou uplatnit v r\u00e1mci rozs\u00e1hl\u00fdch s\u00edt\u00ed (WAN).",
        sectionNumber: "9.2.3",
        sectionTitle: "Network Types",
      },
      {
        uuid: "3152d519-2b93-43c8-b7f0-2f7cef9407aa",
        correct:
          "Standardn\u00ed model s\u00edt\u00ed OSI (Open Systems Interconnection) rozd\u011bluje s\u00ed\u0165ovou komunikaci do sedmi vrstev. Zjednodu\u0161en\u00fd TCP/IP model, kter\u00fd se \u010dasto pou\u017e\u00edv\u00e1 v praxi, kombinuje n\u011bkter\u00e9 z t\u011bchto vrstev do \u010dty\u0159 hlavn\u00edch: Link, Internet, Transport a Application. Konkr\u00e9tn\u011b, linkov\u00e1 vrstva TCP/IP zhruba odpov\u00edd\u00e1 fyzick\u00e9 a datov\u00e9 vrstv\u011b modelu OSI, zat\u00edmco aplika\u010dn\u00ed vrstva TCP/IP zahrnuje vrstvy 5 a\u017e 7 modelu OSI.",
        incorrect:
          'Standardn\u00ed model s\u00edt\u00ed OSI (Open Systems Interconnection) rozd\u011bluje s\u00ed\u0165ovou komunikaci do sedmi vrstev. Zjednodu\u0161en\u00fd TCP/IP model, kter\u00fd se \u010dasto pou\u017e\u00edv\u00e1 v praxi, roz\u0161i\u0159uje tento model na p\u011bt vrstev p\u0159id\u00e1n\u00edm nov\u00e9 "Session" vrstvy mezi Transport a Application vrstvu. Linkov\u00e1 vrstva TCP/IP p\u0159esn\u011b odpov\u00edd\u00e1 pouze fyzick\u00e9 vrstv\u011b modelu OSI, a datov\u00e1 vrstva je zahrnuta do Internet vrstvy.',
        sectionNumber: "9.2.4",
        sectionTitle: "Networking Layers",
      },
      {
        uuid: "4e870846-1ba2-459f-bef1-7cd9931bb6eb",
        correct:
          "P\u0159esto\u017ee TCP/IP model definuje pouze \u010dty\u0159i vrstvy, p\u0159i odkazov\u00e1n\u00ed na konkr\u00e9tn\u00ed vrstvy podle \u010d\u00edsel se b\u011b\u017en\u011b pou\u017e\u00edv\u00e1 \u010d\u00edslov\u00e1n\u00ed vrstev modelu OSI. To znamen\u00e1, \u017ee i v kontextu TCP/IP modelu se IP protokol ozna\u010duje jako vrstva 3 a TCP protokol jako vrstva 4, co\u017e odpov\u00edd\u00e1 jejich pozici v sedmivrstv\u00e9m OSI modelu.",
        incorrect:
          "V TCP/IP modelu se \u010d\u00edslov\u00e1n\u00ed vrstev li\u0161\u00ed od OSI modelu a za\u010d\u00edn\u00e1 od 1 pro linkovou vrstvu a\u017e po 4 pro aplika\u010dn\u00ed vrstvu. Tud\u00ed\u017e, protokol IP, kter\u00fd je v OSI modelu vrstva 3, je v TCP/IP modelu ozna\u010dov\u00e1n jako vrstva 2, a protokol TCP, vrstva 4 v OSI, se v TCP/IP modelu st\u00e1v\u00e1 vrstvou 3.",
        sectionNumber: "9.2.4",
        sectionTitle: "Networking Layers",
      },
      {
        uuid: "916fd368-b1ff-48b8-8846-63b33ab082d3",
        correct:
          "Linkov\u00e1 vrstva v TCP/IP modelu, kter\u00e1 zahrnuje technologie jako Ethernet a WiFi, v sob\u011b sdru\u017euje funkcionalitu jak fyzick\u00e9 vrstvy, kter\u00e1 se star\u00e1 o fyzick\u00fd p\u0159enos dat, tak i datov\u00e9 vrstvy, kter\u00e1 zaji\u0161\u0165uje spolehliv\u00fd p\u0159enos dat mezi dv\u011bma p\u0159\u00edmo spojen\u00fdmi uzly, jak je definov\u00e1no v sedmivrstv\u00e9m OSI modelu.",
        incorrect:
          "Linkov\u00e1 vrstva v TCP/IP modelu se striktn\u011b omezuje pouze na funkce fyzick\u00e9 vrstvy OSI modelu, tedy na definov\u00e1n\u00ed fyzick\u00fdch m\u00e9di\u00ed a p\u0159enosov\u00fdch charakteristik. Funkcionalita datov\u00e9 vrstvy, jako je r\u00e1mcov\u00e1n\u00ed a \u0159\u00edzen\u00ed p\u0159\u00edstupu k m\u00e9diu, je v TCP/IP modelu p\u0159esunuta do internetov\u00e9 vrstvy.",
        sectionNumber: "9.2.4",
        sectionTitle: "Networking Layers",
      },
      {
        uuid: "0477773d-4131-4fbe-9a16-3022ee31b8ed",
        correct:
          "V posledn\u00edch dvou dek\u00e1d\u00e1ch se stalo s\u00ed\u0165ov\u00e1n\u00ed standardn\u00ed slu\u017ebou poskytovanou opera\u010dn\u00edmi syst\u00e9my pro v\u0161eobecn\u00e9 pou\u017eit\u00ed. V syst\u00e9mech s monolitick\u00fdm j\u00e1drem je v\u00fdznamn\u00e1 \u010d\u00e1st s\u00ed\u0165ov\u00e9ho z\u00e1sobn\u00edku, konkr\u00e9tn\u011b vrstvy a\u017e po transportn\u00ed vrstvu v\u010detn\u011b, integrov\u00e1na p\u0159\u00edmo do j\u00e1dra a zp\u0159\u00edstupn\u011bna u\u017eivatelsk\u00fdm program\u016fm prost\u0159ednictv\u00edm rozhran\u00ed sockets API.",
        incorrect:
          "S\u00ed\u0165ov\u00e1n\u00ed je voliteln\u00e1 slu\u017eba v modern\u00edch opera\u010dn\u00edch syst\u00e9mech pro v\u0161eobecn\u00e9 pou\u017eit\u00ed. V syst\u00e9mech s monolitick\u00fdm j\u00e1drem je pouze mal\u00e1 \u010d\u00e1st s\u00ed\u0165ov\u00e9ho z\u00e1sobn\u00edku, konkr\u00e9tn\u011b jen fyzick\u00e1 vrstva, integrov\u00e1na p\u0159\u00edmo do j\u00e1dra a zp\u0159\u00edstupn\u011bna u\u017eivatelsk\u00fdm program\u016fm prost\u0159ednictv\u00edm speci\u00e1ln\u00edho s\u00ed\u0165ov\u00e9ho API, odli\u0161n\u00e9ho od sockets API.",
        sectionNumber: "9.2.5",
        sectionTitle: "Networking and Operating Systems",
      },
      {
        uuid: "ab788b82-7486-4ac9-89f8-7881a47a116c",
        correct:
          "V opera\u010dn\u00edch syst\u00e9mech zalo\u017een\u00fdch na monolitick\u00e9 architektu\u0159e j\u00e1dra je s\u00ed\u0165ov\u00fd z\u00e1sobn\u00edk, zahrnuj\u00edc\u00ed vrstvy a\u017e po transportn\u00ed vrstvu, typicky implementov\u00e1n v prostoru j\u00e1dra. Tato konstruk\u010dn\u00ed volba umo\u017e\u0148uje p\u0159\u00edmou a efektivn\u00ed komunikaci mezi z\u00e1kladn\u00edmi funkcemi opera\u010dn\u00edho syst\u00e9mu a s\u00ed\u0165ov\u00fdmi operacemi a je zp\u0159\u00edstupn\u011bna u\u017eivatelsk\u00fdm program\u016fm prost\u0159ednictv\u00edm rozhran\u00ed sockets API.",
        incorrect:
          "V opera\u010dn\u00edch syst\u00e9mech zalo\u017een\u00fdch na monolitick\u00e9 architektu\u0159e j\u00e1dra je cel\u00fd s\u00ed\u0165ov\u00fd z\u00e1sobn\u00edk, v\u010detn\u011b aplika\u010dn\u00ed vrstvy, v\u017edy implementov\u00e1n v prostoru j\u00e1dra. Tato konstruk\u010dn\u00ed volba je povinn\u00e1 z bezpe\u010dnostn\u00edch d\u016fvod\u016f a zabra\u0148uje u\u017eivatelsk\u00fdm program\u016fm v p\u0159\u00edm\u00e9 interakci se s\u00ed\u0165ov\u00fdmi operacemi, kter\u00e9 jsou m\u00edsto toho spravov\u00e1ny samostatn\u00fdm, specializovan\u00fdm API.",
        sectionNumber: "9.2.5",
        sectionTitle: "Networking and Operating Systems",
      },
      {
        uuid: "bc46f480-3ad9-4bbe-b6c3-4a64adc80f58",
        correct:
          "Opera\u010dn\u00ed syst\u00e9my zalo\u017een\u00e9 na mikrokernelu \u010dasto pou\u017e\u00edvaj\u00ed odli\u0161n\u00fd p\u0159\u00edstup k s\u00ed\u0165ov\u00e1n\u00ed ve srovn\u00e1n\u00ed s monolitick\u00fdmi j\u00e1dry. V mikrokernelech jsou s\u00ed\u0165ov\u00e9 funkce typicky p\u0159esunuty z j\u00e1dra a implementov\u00e1ny v u\u017eivatelsk\u00e9m prostoru, co\u017e m\u016f\u017ee nab\u00eddnout v\u00fdhody, jako je zv\u00fd\u0161en\u00e1 modularita a potenci\u00e1ln\u011b zlep\u0161en\u00e1 stabilita syst\u00e9mu izolac\u00ed selh\u00e1n\u00ed s\u00ed\u0165ov\u00e9ho k\u00f3du od j\u00e1dra.",
        incorrect:
          "Opera\u010dn\u00ed syst\u00e9my zalo\u017een\u00e9 na mikrokernelu v\u017edy pou\u017e\u00edvaj\u00ed stejn\u00fd p\u0159\u00edstup k s\u00ed\u0165ov\u00e1n\u00ed jako monolitick\u00e1 j\u00e1dra. V mikrokernelech jsou s\u00ed\u0165ov\u00e9 funkce v\u017edy ponech\u00e1ny uvnit\u0159 j\u00e1dra a implementov\u00e1ny v prostoru j\u00e1dra, co\u017e je nezbytn\u00e9 z v\u00fdkonnostn\u00edch d\u016fvod\u016f a umo\u017e\u0148uje p\u0159\u00edm\u00fd p\u0159\u00edstup k hardwarov\u00fdm zdroj\u016fm, \u010d\u00edm\u017e je zaji\u0161t\u011bn efektivn\u00ed provoz s\u00edt\u011b.",
        sectionNumber: "9.2.5",
        sectionTitle: "Networking and Operating Systems",
      },
      {
        uuid: "a4912f56-5549-4848-8fb9-cc45fe099d98",
        correct:
          "P\u0159esto\u017ee n\u00e1zev Transport Layer Security (TLS) nazna\u010duje, \u017ee funguje na transportn\u00ed vrstv\u011b, ve skute\u010dnosti je pova\u017eov\u00e1n za technologii aplika\u010dn\u00ed vrstvy.  Funkcionalita pro TLS, spolu s dal\u0161\u00edmi aplika\u010dn\u00edmi slu\u017ebami, jako je p\u0159eklad n\u00e1zv\u016f dom\u00e9n (DNS), je b\u011b\u017en\u011b poskytov\u00e1na syst\u00e9mov\u00fdmi knihovnami v modern\u00edch opera\u010dn\u00edch syst\u00e9mech, kter\u00e9 aplikac\u00edm nab\u00edzej\u00ed snadno dostupn\u00e9 s\u00ed\u0165ov\u00e9 slu\u017eby.",
        incorrect:
          "Transport Layer Security (TLS), navzdory sv\u00e9mu n\u00e1zvu bezpe\u010dnost transportn\u00ed vrstvy, ve skute\u010dnosti funguje v\u00fdhradn\u011b na vrstv\u011b datov\u00e9ho spoje. Funkcionalita pro TLS, spolu se slu\u017ebami ni\u017e\u0161\u00edch vrstev, jako jsou ovlada\u010de s\u00ed\u0165ov\u00fdch karet, je b\u011b\u017en\u011b poskytov\u00e1na p\u0159\u00edmo j\u00e1drem opera\u010dn\u00edho syst\u00e9mu, kter\u00e9 aplikac\u00edm nab\u00edz\u00ed n\u00edzko\u00farov\u0148ov\u00fd s\u00ed\u0165ov\u00fd p\u0159\u00edstup a kontrolu.",
        sectionNumber: "9.2.5",
        sectionTitle: "Networking and Operating Systems",
      },
      {
        uuid: "06dc411f-a878-4d3b-9628-caca82055294",
        correct:
          "Implementace linkov\u00e9 vrstvy v opera\u010dn\u00edch syst\u00e9mech je typicky zaji\u0161t\u011bna ovlada\u010di za\u0159\u00edzen\u00ed, zat\u00edmco klientsk\u00e1 a serverov\u00e1 strana protokol\u016f TCP/IP jsou zp\u0159\u00edstupn\u011bny prost\u0159ednictv\u00edm rozhran\u00ed socket API, co\u017e umo\u017e\u0148uje aplikac\u00edm komunikovat po s\u00edti.",
        incorrect:
          "Implementace s\u00ed\u0165ov\u00e9 vrstvy v opera\u010dn\u00edch syst\u00e9mech je typicky zaji\u0161t\u011bna ovlada\u010di za\u0159\u00edzen\u00ed, zat\u00edmco klientsk\u00e1 a serverov\u00e1 strana protokol\u016f UDP jsou zp\u0159\u00edstupn\u011bny prost\u0159ednictv\u00edm rozhran\u00ed pro souborov\u00e9 operace, co\u017e prim\u00e1rn\u011b slou\u017e\u00ed pro lok\u00e1ln\u00ed diskov\u00e9 operace.",
        sectionNumber: "9.2.6",
        sectionTitle: "Kernel-Side Networking",
      },
      {
        uuid: "106b3ded-8526-48ff-9be7-e781b4582566",
        correct:
          "Funkce jako sm\u011brov\u00e1n\u00ed a filtrov\u00e1n\u00ed paket\u016f, kter\u00e9 jsou kl\u00ed\u010dov\u00e9 pro spr\u00e1vnou funkci s\u00edt\u00ed a implementaci firewall\u016f, mohou b\u00fdt \u010dasto realizov\u00e1ny softwarov\u011b v r\u00e1mci opera\u010dn\u00edho syst\u00e9mu, a v takov\u00e9m p\u0159\u00edpad\u011b jsou obvykle implementov\u00e1ny p\u0159\u00edmo v j\u00e1d\u0159e syst\u00e9mu pro zaji\u0161t\u011bn\u00ed v\u00fdkonu a integrace.",
        incorrect:
          "Funkce jako sm\u011brov\u00e1n\u00ed a filtrov\u00e1n\u00ed paket\u016f, a\u010dkoliv jsou d\u016fle\u017eit\u00e9 pro s\u00ed\u0165ovou komunikaci, jsou v\u017edy implementov\u00e1ny v\u00fdhradn\u011b hardwarov\u011b na specializovan\u00fdch s\u00ed\u0165ov\u00fdch za\u0159\u00edzen\u00edch a nikdy nejsou realizov\u00e1ny softwarov\u011b v j\u00e1d\u0159e opera\u010dn\u00edho syst\u00e9mu z d\u016fvodu v\u00fdkonostn\u00edch omezen\u00ed a slo\u017eitosti implementace.",
        sectionNumber: "9.2.6",
        sectionTitle: "Kernel-Side Networking",
      },
      {
        uuid: "5872546a-b7a9-4b48-8d42-0828bc3b0d75",
        correct:
          "N\u011bkter\u00e9 s\u00ed\u0165ov\u00e9 slu\u017eby aplika\u010dn\u00ed vrstvy, jako nap\u0159\u00edklad s\u00ed\u0165ov\u00e9 souborov\u00e9 syst\u00e9my typu SMB nebo NFS, mohou b\u00fdt implementov\u00e1ny p\u0159\u00edmo v j\u00e1d\u0159e opera\u010dn\u00edho syst\u00e9mu, co\u017e p\u0159in\u00e1\u0161\u00ed v\u00fdhody v podob\u011b vy\u0161\u0161\u00edho v\u00fdkonu a ni\u017e\u0161\u00ed latence, a je efektivn\u00ed pro sd\u00edlen\u00ed soubor\u016f v rozs\u00e1hl\u00fdch s\u00ed\u0165ov\u00fdch prost\u0159ed\u00edch.",
        incorrect:
          "S\u00ed\u0165ov\u00e9 slu\u017eby aplika\u010dn\u00ed vrstvy, v\u010detn\u011b s\u00ed\u0165ov\u00fdch souborov\u00fdch syst\u00e9m\u016f jako SMB nebo NFS, jsou v\u017edy implementov\u00e1ny v\u00fdhradn\u011b v u\u017eivatelsk\u00e9m prostoru opera\u010dn\u00edho syst\u00e9mu, aby se zajistila bezpe\u010dnost a stabilita syst\u00e9mu, a nikdy nejsou implementov\u00e1ny v j\u00e1d\u0159e.",
        sectionNumber: "9.2.6",
        sectionTitle: "Kernel-Side Networking",
      },
      {
        uuid: "5193c2f5-e873-43aa-8cbc-ed783a2f3c2a",
        correct:
          "Rozhran\u00ed socket API, a\u010dkoliv je form\u00e1ln\u011b dom\u00e9nou syst\u00e9mov\u00fdch knihoven, v monolitick\u00fdch j\u00e1drech opera\u010dn\u00edch syst\u00e9m\u016f \u010dasto vykazuje p\u0159\u00edm\u00fd vztah 1:1 k syst\u00e9mov\u00fdm vol\u00e1n\u00edm, co\u017e znamen\u00e1, \u017ee funkce C knihoven pro pr\u00e1ci se socketem p\u0159\u00edmo odpov\u00eddaj\u00ed syst\u00e9mov\u00fdm vol\u00e1n\u00edm j\u00e1dra. Nicm\u00e9n\u011b v mikrokernech, kde je s\u00ed\u0165ov\u00fd z\u00e1sobn\u00edk rozd\u011blen odli\u0161n\u011b, syst\u00e9mov\u00e9 knihovny p\u0159eb\u00edraj\u00ed v\u011bt\u0161\u00ed pod\u00edl zodpov\u011bdnosti za implementaci socket API.",
        incorrect:
          "Rozhran\u00ed socket API je v\u00fdhradn\u011b dom\u00e9nou syst\u00e9mov\u00fdch vol\u00e1n\u00ed opera\u010dn\u00edho syst\u00e9mu, a to plat\u00ed jak pro monolitick\u00e1 j\u00e1dra, tak pro mikrokernelov\u00e9 architektury. V obou typech jader je zaji\u0161t\u011bno, \u017ee funkce C knihoven pro pr\u00e1ci se socketem v\u017edy p\u0159\u00edmo odpov\u00eddaj\u00ed syst\u00e9mov\u00fdm vol\u00e1n\u00edm j\u00e1dra, a syst\u00e9mov\u00e9 knihovny tak hraj\u00ed minoritn\u00ed roli v implementaci socket API.",
        sectionNumber: "9.2.7",
        sectionTitle: "System Libraries",
      },
      {
        uuid: "507d9464-d418-4962-b83b-66eae07c7748",
        correct:
          "Slu\u017eba p\u0159ekladu hostitelsk\u00fdch jmen na IP adresy, zn\u00e1m\u00e1 jako DNS klient, je v opera\u010dn\u00edch syst\u00e9mech obvykle poskytov\u00e1na syst\u00e9mov\u00fdmi knihovnami. D\u016fvodem je, \u017ee t\u00e9m\u011b\u0159 v\u0161echny programy, kter\u00e9 pracuj\u00ed se s\u00edt\u00ed, pot\u0159ebuj\u00ed tuto funkcionalitu pro p\u0159evod lidsky \u010diteln\u00fdch jmen na adresy srozumiteln\u00e9 pro s\u00ed\u0165ovou komunikaci.",
        incorrect:
          "Slu\u017eba p\u0159ekladu hostitelsk\u00fdch jmen na IP adresy, zn\u00e1m\u00e1 jako DNS klient, je typicky implementov\u00e1na p\u0159\u00edmo v j\u00e1d\u0159e opera\u010dn\u00edho syst\u00e9mu jako sou\u010d\u00e1st s\u00ed\u0165ov\u00e9ho subsyst\u00e9mu. Syst\u00e9mov\u00e9 knihovny se o tuto funkcionalitu nestaraj\u00ed, proto\u017ee implementace DNS klienta v j\u00e1d\u0159e zaji\u0161\u0165uje vy\u0161\u0161\u00ed v\u00fdkon a efektivitu pro v\u0161echny s\u00ed\u0165ov\u00e9 aplikace.",
        sectionNumber: "9.2.7",
        sectionTitle: "System Libraries",
      },
      {
        uuid: "743abb61-5f60-4f7c-b502-7bfa3e3b8a1a",
        correct:
          "V modern\u00edm internetu je \u0161ifrov\u00e1n\u00ed kl\u00ed\u010dov\u00e9, a proto v\u011bt\u0161ina opera\u010dn\u00edch syst\u00e9m\u016f poskytuje SSL/TLS stack, kter\u00fd zahrnuje i spr\u00e1vu certifik\u00e1t\u016f. Tato implementace \u0161ifrov\u00e1n\u00ed je obvykle sou\u010d\u00e1st\u00ed syst\u00e9mov\u00fdch knihoven opera\u010dn\u00edho syst\u00e9mu, co\u017e umo\u017e\u0148uje aplikac\u00edm snadno vyu\u017e\u00edvat \u0161ifrovan\u00e9 spojen\u00ed.",
        incorrect:
          "V modern\u00edm internetu je \u0161ifrov\u00e1n\u00ed sice d\u016fle\u017eit\u00e9, ale SSL/TLS stack, v\u010detn\u011b spr\u00e1vy certifik\u00e1t\u016f, je obvykle implementov\u00e1n v\u00fdhradn\u011b na \u00farovni aplikac\u00ed, nikoliv v opera\u010dn\u00edm syst\u00e9mu. Opera\u010dn\u00ed syst\u00e9my obvykle neposkytuj\u00ed nativn\u00ed podporu pro SSL/TLS a spr\u00e1vu certifik\u00e1t\u016f, a aplikace si mus\u00ed tuto funkcionalitu implementovat samy.",
        sectionNumber: "9.2.7",
        sectionTitle: "System Libraries",
      },
      {
        uuid: "72ee929f-8ee3-44a4-a00d-e7c6cad2e889",
        correct:
          "S\u00ed\u0165ov\u00e9 n\u00e1stroje a slu\u017eby, jako nap\u0159\u00edklad konfigurace s\u00ed\u0165ov\u00fdch rozhran\u00ed pomoc\u00ed `ifconfig` nebo automatick\u00e1 konfigurace adres pomoc\u00ed DHCP, jsou kl\u00ed\u010dovou sou\u010d\u00e1st\u00ed s\u00ed\u0165ov\u00e9ho stacku opera\u010dn\u00edho syst\u00e9mu a nach\u00e1zej\u00ed se v syst\u00e9mov\u00fdch utilit\u00e1ch a slu\u017eb\u00e1ch, kter\u00e9 jsou implementov\u00e1ny jako syst\u00e9mov\u00e9 daemony b\u011b\u017e\u00edc\u00ed na pozad\u00ed.",
        incorrect:
          "S\u00ed\u0165ov\u00e9 n\u00e1stroje a slu\u017eby, jako nap\u0159\u00edklad konfigurace s\u00ed\u0165ov\u00fdch rozhran\u00ed pomoc\u00ed `ifconfig` nebo automatick\u00e1 konfigurace adres pomoc\u00ed DHCP, jsou okrajovou sou\u010d\u00e1st\u00ed s\u00ed\u0165ov\u00e9ho stacku opera\u010dn\u00edho syst\u00e9mu a nach\u00e1zej\u00ed se v aplika\u010dn\u00ed vrstv\u011b, kter\u00e1 je implementov\u00e1na jako u\u017eivatelsk\u00e9 aplikace s grafick\u00fdm rozhran\u00edm.",
        sectionNumber: "9.2.8",
        sectionTitle: "System Utilities & Services",
      },
      {
        uuid: "746501cd-7523-42e7-914f-a5af0226c6ba",
        correct:
          "Konfigura\u010dn\u00ed n\u00e1stroje, mezi kter\u00e9 pat\u0159\u00ed `dhclient` a `dhcpd`, se v opera\u010dn\u00edch syst\u00e9mech staraj\u00ed o automatickou konfiguraci s\u00ed\u0165ov\u00fdch rozhran\u00ed, v\u010detn\u011b p\u0159id\u011blov\u00e1n\u00ed IP adres a spr\u00e1vy dal\u0161\u00edch s\u00ed\u0165ov\u00fdch parametr\u016f, co\u017e je kl\u00ed\u010dov\u00e9 pro spr\u00e1vnou funk\u010dnost s\u00ed\u0165ov\u00e9 komunikace a je nezbytn\u00e9 pro modern\u00ed s\u00edt\u011b.",
        incorrect:
          "Konfigura\u010dn\u00ed n\u00e1stroje, mezi kter\u00e9 pat\u0159\u00ed `dhclient` a `dhcpd`, se v opera\u010dn\u00edch syst\u00e9mech staraj\u00ed v\u00fdhradn\u011b o manu\u00e1ln\u00ed konfiguraci s\u00ed\u0165ov\u00fdch rozhran\u00ed administr\u00e1torem, p\u0159i\u010dem\u017e automatick\u00e9 p\u0159id\u011blov\u00e1n\u00ed IP adres a spr\u00e1va s\u00ed\u0165ov\u00fdch parametr\u016f je prov\u00e1d\u011bna v\u00fdhradn\u011b hardwarov\u00fdmi komponentami routeru.",
        sectionNumber: "9.2.8",
        sectionTitle: "System Utilities & Services",
      },
      {
        uuid: "332fbe00-c552-49a2-a976-cdea48c0cbb7",
        correct:
          "N\u00e1stroje pro spr\u00e1vu sm\u011brov\u00e1n\u00ed, jako jsou `route` a `bgpd`, hraj\u00ed z\u00e1sadn\u00ed roli v opera\u010dn\u00edch syst\u00e9mech, zejm\u00e9na pro softwarov\u00e9 sm\u011brova\u010de a syst\u00e9my s v\u00edce s\u00ed\u0165ov\u00fdmi rozhran\u00edmi (multi-homed systems), kde umo\u017e\u0148uj\u00ed definovat a spravovat sm\u011brovac\u00ed tabulky pro efektivn\u00ed doru\u010dov\u00e1n\u00ed s\u00ed\u0165ov\u00fdch paket\u016f mezi r\u016fzn\u00fdmi s\u00edt\u011bmi.",
        incorrect:
          "N\u00e1stroje pro spr\u00e1vu sm\u011brov\u00e1n\u00ed, jako jsou `route` a `bgpd`, hraj\u00ed okrajovou roli v opera\u010dn\u00edch syst\u00e9mech a jsou relevantn\u00ed pouze pro jednoduch\u00e9 koncov\u00e9 stanice s jedn\u00edm s\u00ed\u0165ov\u00fdm rozhran\u00edm, zat\u00edmco pro softwarov\u00e9 sm\u011brova\u010de a syst\u00e9my s v\u00edce rozhran\u00edmi se spr\u00e1va sm\u011brov\u00e1n\u00ed prov\u00e1d\u00ed v\u00fdhradn\u011b na hardwarov\u00e9 \u00farovni a opera\u010dn\u00ed syst\u00e9m do toho nezasahuje.",
        sectionNumber: "9.2.8",
        sectionTitle: "System Utilities & Services",
      },
      {
        uuid: "f5eb80f6-3a51-40af-8a3b-e89b9ebad4bd",
        correct:
          "Diagnostick\u00e9 n\u00e1stroje, nap\u0159\u00edklad `ping` a `traceroute`, jsou nezbytnou sou\u010d\u00e1st\u00ed opera\u010dn\u00edch syst\u00e9m\u016f pro ov\u011b\u0159ov\u00e1n\u00ed s\u00ed\u0165ov\u00e9 konektivity a trasov\u00e1n\u00ed s\u00ed\u0165ov\u00fdch paket\u016f, zat\u00edmco n\u00e1stroj `tcpdump` umo\u017e\u0148uje detailn\u00ed inspekci s\u00ed\u0165ov\u00e9ho provozu zachyt\u00e1v\u00e1n\u00edm a anal\u00fdzou paket\u016f proch\u00e1zej\u00edc\u00edch s\u00ed\u0165ov\u00fdm rozhran\u00edm pro \u00fa\u010dely lad\u011bn\u00ed a bezpe\u010dnosti.",
        incorrect:
          "Diagnostick\u00e9 n\u00e1stroje, nap\u0159\u00edklad `ping` a `traceroute`, jsou v opera\u010dn\u00edch syst\u00e9mech pouze dopl\u0148kovou sou\u010d\u00e1st\u00ed pro monitorov\u00e1n\u00ed z\u00e1t\u011b\u017ee s\u00edt\u011b a nemaj\u00ed \u017e\u00e1dn\u00fd vliv na ov\u011b\u0159ov\u00e1n\u00ed s\u00ed\u0165ov\u00e9 konektivity nebo trasov\u00e1n\u00ed paket\u016f, p\u0159i\u010dem\u017e n\u00e1stroj `tcpdump` slou\u017e\u00ed pouze k blokov\u00e1n\u00ed s\u00ed\u0165ov\u00e9ho provozu na z\u00e1klad\u011b definovan\u00fdch pravidel.",
        sectionNumber: "9.2.8",
        sectionTitle: "System Utilities & Services",
      },
      {
        uuid: "f8932ba4-0941-40d3-ae38-1a7402ec10a9",
        correct:
          "Mezi dal\u0161\u00ed s\u00ed\u0165ov\u00e9 slu\u017eby, kter\u00e9 jsou typicky sou\u010d\u00e1st\u00ed opera\u010dn\u00edch syst\u00e9m\u016f a implementov\u00e1ny jako daemony, pat\u0159\u00ed nap\u0159\u00edklad `ntpd` pro synchronizaci \u010dasu syst\u00e9mu s p\u0159esn\u00fdmi \u010dasov\u00fdmi servery, `sshd` pro zabezpe\u010den\u00fd vzd\u00e1len\u00fd p\u0159\u00edstup k syst\u00e9mu a `inetd` jako meta-server pro spr\u00e1vu a spou\u0161t\u011bn\u00ed m\u00e9n\u011b frekventovan\u00fdch s\u00ed\u0165ov\u00fdch slu\u017eeb.",
        incorrect:
          "Mezi dal\u0161\u00ed s\u00ed\u0165ov\u00e9 slu\u017eby, kter\u00e9 jsou typicky sou\u010d\u00e1st\u00ed opera\u010dn\u00edch syst\u00e9m\u016f, pat\u0159\u00ed nap\u0159\u00edklad `ntpd` pro spr\u00e1vu tiskov\u00fdch \u00faloh v s\u00edti, `sshd` pro spr\u00e1vu a konfiguraci hardwarov\u00fdch ovlada\u010d\u016f s\u00ed\u0165ov\u00fdch za\u0159\u00edzen\u00ed a `inetd` jako n\u00e1stroj pro monitorov\u00e1n\u00ed a spr\u00e1vu hardwarov\u00fdch zdroj\u016f syst\u00e9mu, jako je procesor a pam\u011b\u0165.",
        sectionNumber: "9.2.8",
        sectionTitle: "System Utilities & Services",
      },
      {
        uuid: "56f67371-15a5-46e3-95f6-61b10f838f5c",
        correct:
          "S\u00ed\u0165ov\u00e9 protokoly jsou z\u00e1sadn\u011b strukturov\u00e1ny kolem t\u0159\u00ed kl\u00ed\u010dov\u00fdch aspekt\u016f: definov\u00e1n\u00ed komunika\u010dn\u00ed jednotky jako paket\u016f, zaveden\u00ed mechanism\u016f adresov\u00e1n\u00ed pro identifikaci p\u0159\u00edjemc\u016f komunikace a implementace metod doru\u010dov\u00e1n\u00ed paket\u016f, kter\u00e9 zaji\u0161\u0165uj\u00ed p\u0159esun zpr\u00e1v mezi s\u00ed\u0165ov\u00fdmi uzly, potenci\u00e1ln\u011b zahrnuj\u00edc\u00ed procesy sm\u011brov\u00e1n\u00ed a p\u0159ekladu adres.",
        incorrect:
          "S\u00ed\u0165ov\u00e9 protokoly se prim\u00e1rn\u011b zab\u00fdvaj\u00ed dv\u011bma hlavn\u00edmi aspekty: definov\u00e1n\u00edm velikosti datov\u00fdch blok\u016f a zaji\u0161t\u011bn\u00edm \u0161ifrov\u00e1n\u00ed dat pro bezpe\u010dnou komunikaci. Adresov\u00e1n\u00ed a doru\u010dov\u00e1n\u00ed paket\u016f, i kdy\u017e jsou d\u016fle\u017eit\u00e9, jsou pova\u017eov\u00e1ny za druho\u0159ad\u00e9 k z\u00e1kladn\u00edm aspekt\u016fm velikosti dat a bezpe\u010dnosti v n\u00e1vrhu s\u00ed\u0165ov\u00fdch protokol\u016f.",
        sectionNumber: "9.2.9",
        sectionTitle: "Networking Aspects",
      },
      {
        uuid: "e18e5f90-37b1-4aa3-971f-7af593a73ba1",
        correct:
          "Podle z\u00e1kladn\u00edch princip\u016f s\u00ed\u0165ov\u00fdch protokol\u016f je \u00fast\u0159edn\u00edm konceptem pojem 'paket', kter\u00fd p\u0159edstavuje z\u00e1kladn\u00ed komunika\u010dn\u00ed jednotku.  Proces 'adresov\u00e1n\u00ed' nav\u00edc hraje kl\u00ed\u010dovou roli v s\u00ed\u0165ov\u00e9 komunikaci t\u00edm, \u017ee jasn\u011b ur\u010duje zam\u00fd\u0161len\u00e9 p\u0159\u00edjemce t\u011bchto paket\u016f, a t\u00edm zaji\u0161\u0165uje, \u017ee zpr\u00e1vy doraz\u00ed na spr\u00e1vn\u00e1 m\u00edsta ur\u010den\u00ed.",
        incorrect:
          "V kontextu s\u00ed\u0165ov\u00fdch protokol\u016f slou\u017e\u00ed 'pakety' prim\u00e1rn\u011b jako kontejnery pro k\u00f3dy pro kontrolu chyb, nikoli jako z\u00e1kladn\u00ed komunika\u010dn\u00ed jednotky samotn\u00e9. Zat\u00edmco adresov\u00e1n\u00ed je relevantn\u00ed, jeho hlavn\u00ed funkc\u00ed je up\u0159ednost\u0148ovat s\u00ed\u0165ov\u00fd provoz na z\u00e1klad\u011b nal\u00e9havosti, sp\u00ed\u0161e ne\u017e jednodu\u0161e identifikovat p\u0159\u00edjemce zpr\u00e1v, co\u017e je druho\u0159ad\u00fd z\u00e1jem.",
        sectionNumber: "9.2.9",
        sectionTitle: "Networking Aspects",
      },
      {
        uuid: "13ea35bb-77dd-49f2-8f2b-33e252472a2f",
        correct:
          "Doru\u010dov\u00e1n\u00ed paket\u016f, jako kl\u00ed\u010dov\u00fd aspekt s\u00ed\u0165ov\u00fdch protokol\u016f, zahrnuje mechanismy a postupy pot\u0159ebn\u00e9 k efektivn\u00edmu p\u0159enosu paket\u016f ze zdrojov\u00e9 adresy na c\u00edlovou adresu v s\u00edti. Tento proces doru\u010dov\u00e1n\u00ed m\u016f\u017ee vy\u017eadovat slo\u017eit\u00e9 operace, jako je sm\u011brov\u00e1n\u00ed pro ur\u010den\u00ed optim\u00e1ln\u00ed cesty a p\u0159eklad adres pro p\u0159eklenut\u00ed r\u016fzn\u00fdch sch\u00e9mat adresov\u00e1n\u00ed v r\u00e1mci s\u00edt\u011b.",
        incorrect:
          "Doru\u010dov\u00e1n\u00ed paket\u016f v s\u00ed\u0165ov\u00fdch protokolech se zam\u011b\u0159uje v\u00fdhradn\u011b na zaji\u0161t\u011bn\u00ed, aby pakety dorazily v p\u0159esn\u00e9m po\u0159ad\u00ed, v jak\u00e9m byly odesl\u00e1ny, a zanedb\u00e1v\u00e1 aspekty, jako je sm\u011brov\u00e1n\u00ed nebo p\u0159eklad adres. Prim\u00e1rn\u00edm z\u00e1jmem je zachov\u00e1n\u00ed integrity sekvence a jak\u00e9koli mechanismy nad r\u00e1mec jednoduch\u00e9ho sekven\u010dn\u00edho doru\u010dov\u00e1n\u00ed jsou pova\u017eov\u00e1ny za mimo hlavn\u00ed r\u00e1mec protokol\u016f doru\u010dov\u00e1n\u00ed paket\u016f.",
        sectionNumber: "9.2.9",
        sectionTitle: "Networking Aspects",
      },
      {
        uuid: "71e9323a-d250-4d58-a76c-3a937afcd9f9",
        correct:
          "V kontextu s\u00ed\u0165ov\u00e9ho protokolu stacku, protokoly funguj\u00ed hierarchicky, kde protokoly vy\u0161\u0161\u00edch vrstev, jako je nap\u0159\u00edklad HTTP, vyu\u017e\u00edvaj\u00ed abstrakce a funkce poskytovan\u00e9 protokoly ni\u017e\u0161\u00edch vrstev, jako je TCP, kter\u00e9 zase vyu\u017e\u00edvaj\u00ed abstrakce poskytovan\u00e9 protokolem IP. Tato vrstven\u00e1 architektura umo\u017e\u0148uje modularitu a zjednodu\u0161uje n\u00e1vrh komplexn\u00edch s\u00ed\u0165ov\u00fdch syst\u00e9m\u016f.",
        incorrect:
          "V kontextu s\u00ed\u0165ov\u00e9ho protokolu stacku, protokoly funguj\u00ed nez\u00e1visle na sob\u011b a protokoly ni\u017e\u0161\u00edch vrstev, jako je TCP a IP, poskytuj\u00ed slu\u017eby protokol\u016fm vy\u0161\u0161\u00edch vrstev, jako je HTTP, av\u0161ak HTTP nevyu\u017e\u00edv\u00e1 funk\u010dnost TCP ani IP a funguje zcela autonomn\u011b. Tato architektura maximalizuje flexibilitu, ale komplikuje n\u00e1vrh s\u00ed\u0165ov\u00fdch syst\u00e9m\u016f.",
        sectionNumber: "9.2.10",
        sectionTitle: "Protocol Nesting",
      },
      {
        uuid: "89255278-6a27-49a7-96b5-bf523f78027a",
        correct:
          "Struktura paket\u016f v s\u00ed\u0165ov\u00e9 komunikaci se podob\u00e1 matrjo\u0161ce, kde ethernetov\u00fd r\u00e1mec obaluje IP paket, kter\u00fd d\u00e1le m\u016f\u017ee obalovat TCP paket, a tak d\u00e1le, p\u0159i\u010dem\u017e ka\u017ed\u00fd obal p\u0159edstavuje ni\u017e\u0161\u00ed vrstvu protokolu a vnit\u0159n\u00ed \u010d\u00e1st data z vy\u0161\u0161\u00ed vrstvy.",
        incorrect:
          "Struktura paket\u016f v s\u00ed\u0165ov\u00e9 komunikaci je line\u00e1rn\u00ed, kde se pakety jednotliv\u00fdch protokol\u016f \u0159ad\u00ed vedle sebe bez vno\u0159ov\u00e1n\u00ed, p\u0159i\u010dem\u017e ethernetov\u00fd r\u00e1mec a IP paket se pos\u00edlaj\u00ed odd\u011blen\u011b a TCP paket je zcela nez\u00e1visl\u00fd na p\u0159edchoz\u00edch vrstv\u00e1ch.",
        sectionNumber: "9.2.11",
        sectionTitle: "Packet Nesting",
      },
      {
        uuid: "d0b4619d-7da4-4911-87d8-7d59bf7b8414",
        correct:
          "Z pohledu horn\u00edch vrstev s\u00ed\u0165ov\u00e9ho modelu je velikost paketu d\u016fle\u017eit\u00fdm parametrem, jeliko\u017e optimalizace velikosti paket\u016f mezi r\u016fzn\u00fdmi vrstvami p\u0159isp\u00edv\u00e1 k efektivn\u011bj\u0161\u00edmu p\u0159enosu dat a minimalizaci fragmentace, zvl\u00e1\u0161t\u011b kdy\u017e jsou paketov\u011b orientovan\u00e9 protokoly vno\u0159eny do sebe.",
        incorrect:
          "Velikost paket\u016f je irelevantn\u00ed pro horn\u00ed vrstvy s\u00ed\u0165ov\u00e9ho modelu, proto\u017ee ni\u017e\u0161\u00ed vrstvy automaticky fragmentuj\u00ed a skl\u00e1daj\u00ed pakety bez ohledu na p\u016fvodn\u00ed velikost dat z horn\u00edch vrstev, tak\u017ee horn\u00ed vrstvy se nemus\u00ed zab\u00fdvat optimalizac\u00ed velikosti paket\u016f.",
        sectionNumber: "9.2.11",
        sectionTitle: "Packet Nesting",
      },
      {
        uuid: "a1704a82-385b-4976-bbe9-9e2905b94889",
        correct:
          "Abstrakce doru\u010den\u00ed v s\u00ed\u0165ov\u00fdch vrstv\u00e1ch je typicky point-to-point, co\u017e znamen\u00e1, \u017ee ka\u017ed\u00e1 vrstva se star\u00e1 o doru\u010den\u00ed dat jen k nejbli\u017e\u0161\u00edmu sousedn\u00edmu uzlu, a slo\u017eit\u011bj\u0161\u00ed sm\u011brov\u00e1n\u00ed na del\u0161\u00ed vzd\u00e1lenosti je skryto a \u0159e\u0161eno ni\u017e\u0161\u00edmi vrstvami.",
        incorrect:
          "Abstrakce doru\u010den\u00ed v s\u00ed\u0165ov\u00fdch vrstv\u00e1ch je typicky broadcast, co\u017e znamen\u00e1, \u017ee ka\u017ed\u00e1 vrstva se star\u00e1 o doru\u010den\u00ed dat v\u0161em uzl\u016fm v s\u00edti, a slo\u017eit\u011bj\u0161\u00ed sm\u011brov\u00e1n\u00ed na del\u0161\u00ed vzd\u00e1lenosti je explicitn\u011b odhaleno a \u0159e\u0161eno vy\u0161\u0161\u00edmi vrstvami.",
        sectionNumber: "9.2.12",
        sectionTitle: "Stacked Delivery",
      },
      {
        uuid: "027bbf11-95af-4e29-862c-d25ec8081362",
        correct:
          "Sm\u011brov\u00e1n\u00ed v s\u00ed\u0165ov\u00fdch vrstv\u00e1ch je p\u0159ev\u00e1\u017en\u011b skryto p\u0159ed vy\u0161\u0161\u00edmi vrstvami, proto\u017ee c\u00edlem abstrakce vrstev je odd\u011blit zodpov\u011bdnosti, a vy\u0161\u0161\u00ed vrstvy se tak mohou soust\u0159edit na logiku aplikace, ani\u017e by se musely zab\u00fdvat detaily sm\u011brov\u00e1n\u00ed paket\u016f v s\u00edti.",
        incorrect:
          "Sm\u011brov\u00e1n\u00ed v s\u00ed\u0165ov\u00fdch vrstv\u00e1ch je explicitn\u011b odhaleno vy\u0161\u0161\u00edm vrstv\u00e1m, proto\u017ee c\u00edlem abstrakce vrstev je umo\u017enit vy\u0161\u0161\u00edm vrstv\u00e1m pln\u011b kontrolovat tok dat v s\u00edti, a vy\u0161\u0161\u00ed vrstvy se tak mus\u00ed aktivn\u011b zab\u00fdvat detaily sm\u011brov\u00e1n\u00ed paket\u016f v s\u00edti.",
        sectionNumber: "9.2.12",
        sectionTitle: "Stacked Delivery",
      },
      {
        uuid: "a6fdd5a4-c905-4b64-a7af-c5e82dca0c99",
        correct:
          "Vy\u0161\u0161\u00ed vrstva v s\u00ed\u0165ov\u00e9m modelu po\u017eaduje doru\u010den\u00ed dat na ur\u010ditou adresu, p\u0159i\u010dem\u017e konkr\u00e9tn\u00ed mechanismy doru\u010den\u00ed a sm\u011brov\u00e1n\u00ed jsou obvykle implementov\u00e1ny v ni\u017e\u0161\u00edch vrstv\u00e1ch, kter\u00e9 poskytuj\u00ed slu\u017ebu doru\u010den\u00ed jako abstrakci pro vy\u0161\u0161\u00ed vrstvu.",
        incorrect:
          "Vy\u0161\u0161\u00ed vrstva v s\u00ed\u0165ov\u00e9m modelu po\u017eaduje p\u0159\u00edm\u00e9 spojen\u00ed bez adresov\u00e1n\u00ed, p\u0159i\u010dem\u017e konkr\u00e9tn\u00ed mechanismy doru\u010den\u00ed a sm\u011brov\u00e1n\u00ed jsou obvykle implementov\u00e1ny ve vy\u0161\u0161\u00edch vrstv\u00e1ch, kter\u00e9 poskytuj\u00ed slu\u017ebu doru\u010den\u00ed jako abstrakci pro ni\u017e\u0161\u00ed vrstvu.",
        sectionNumber: "9.2.12",
        sectionTitle: "Stacked Delivery",
      },
      {
        uuid: "8242d699-5e92-4e3b-b52d-19620af5c034",
        correct:
          "Ni\u017e\u0161\u00ed vrstvy s\u00ed\u0165ov\u00e9ho modelu, jako je linkov\u00e1 vrstva, jsou obvykle orientovan\u00e9 na pakety, co\u017e znamen\u00e1, \u017ee data jsou pro p\u0159enos rozd\u011blena do men\u0161\u00edch jednotek zvan\u00fdch pakety, kter\u00e9 se nez\u00e1visle p\u0159en\u00e1\u0161ej\u00ed a skl\u00e1daj\u00ed na c\u00edlov\u00e9 stran\u011b.",
        incorrect:
          "Ni\u017e\u0161\u00ed vrstvy s\u00ed\u0165ov\u00e9ho modelu, jako je linkov\u00e1 vrstva, jsou obvykle orientovan\u00e9 na stream, co\u017e znamen\u00e1, \u017ee data jsou pro p\u0159enos pova\u017eov\u00e1na za souvisl\u00fd proud byt\u016f, kter\u00e9 se p\u0159en\u00e1\u0161ej\u00ed v sekvenci bez d\u011blen\u00ed na men\u0161\u00ed jednotky.",
        sectionNumber: "9.2.12",
        sectionTitle: "Stacked Delivery",
      },
      {
        uuid: "6088029a-fad8-4aa8-b887-36ffcacda684",
        correct:
          "Paket dat m\u016f\u017ee p\u0159ekra\u010dovat hranice mezi r\u016fzn\u00fdmi dom\u00e9nami n\u00edzk\u00fdch vrstev, co\u017e je b\u011b\u017en\u00e9 nap\u0159\u00edklad v internetov\u00e9m protokolu, kde jeden IP paket m\u016f\u017ee proj\u00edt n\u011bkolika r\u016fzn\u00fdmi linkov\u00fdmi vrstvami a s\u00edt\u011bmi b\u011bhem sv\u00e9 cesty k c\u00edli.",
        incorrect:
          "Paket dat je striktn\u011b omezen na jednu dom\u00e9nu n\u00edzk\u00e9 vrstvy a nem\u016f\u017ee p\u0159ekra\u010dovat hranice mezi r\u016fzn\u00fdmi dom\u00e9nami, co\u017e zaji\u0161\u0165uje izolaci a bezpe\u010dnost v r\u00e1mci jedn\u00e9 s\u00edt\u011b, ale omezuje mo\u017enosti pro rozs\u00e1hlej\u0161\u00ed s\u00edt\u011b.",
        sectionNumber: "9.2.12",
        sectionTitle: "Stacked Delivery",
      },
      {
        uuid: "dc2d4cc6-2f8a-42aa-88c5-efd7511bfb43",
        correct:
          "Adresn\u00ed vztahy v s\u00ed\u0165ov\u00fdch vrstv\u00e1ch opera\u010dn\u00edch syst\u00e9m\u016f nejsou v\u017edy p\u0159\u00edmo\u010dar\u00e9 a jednoduch\u00e9, a vy\u017eaduj\u00ed slo\u017eit\u011bj\u0161\u00ed mechanismy ne\u017e pouh\u00e9 vno\u0159ov\u00e1n\u00ed paket\u016f. Tato slo\u017eitost pramen\u00ed z nutnosti p\u0159ekl\u00e1dat adresy mezi r\u016fzn\u00fdmi vrstvami a protokoly, co\u017e vy\u017eaduje specializovan\u00e9 protokoly pro mapov\u00e1n\u00ed adres, jako nap\u0159\u00edklad DNS a ARP.",
        incorrect:
          "Adresn\u00ed vztahy v s\u00ed\u0165ov\u00fdch vrstv\u00e1ch opera\u010dn\u00edch syst\u00e9m\u016f jsou naopak \u010dasto jednodu\u0161\u0161\u00ed a p\u0159\u00edmo\u010da\u0159ej\u0161\u00ed ne\u017e pouh\u00e9 vno\u0159ov\u00e1n\u00ed paket\u016f. Tato jednoduchost je d\u00e1na absenc\u00ed nutnosti slo\u017eit\u00fdch p\u0159eklad\u016f adres mezi r\u016fzn\u00fdmi vrstvami a protokoly, co\u017e eliminuje pot\u0159ebu specializovan\u00fdch protokol\u016f pro mapov\u00e1n\u00ed adres, jako nap\u0159\u00edklad DNS a ARP.",
        sectionNumber: "9.2.13",
        sectionTitle: "Layers vs Addressing",
      },
      {
        uuid: "cf43bd3a-afa6-4849-b6d1-19dcb31af7ba",
        correct:
          "Adresa transportn\u00ed vrstvy, nap\u0159\u00edklad adresa TCP, v sob\u011b zahrnuje adresu internetov\u00e9 vrstvy jako jedno z pol\u00ed. Konkr\u00e9tn\u011b se typick\u00e1 TCP adresa skl\u00e1d\u00e1 z IP adresy, kter\u00e1 identifikuje s\u00ed\u0165ov\u00e9 rozhran\u00ed, a \u010d\u00edsla portu, kter\u00e9 specifikuje konkr\u00e9tn\u00ed aplikaci nebo slu\u017ebu b\u011b\u017e\u00edc\u00ed na dan\u00e9m hostiteli.",
        incorrect:
          "Adresa transportn\u00ed vrstvy, nap\u0159\u00edklad adresa TCP, v sob\u011b nezahrnuje adresu internetov\u00e9 vrstvy jako jedno z pol\u00ed. Naopak, TCP adresa je zcela nez\u00e1visl\u00e1 na IP adrese a skl\u00e1d\u00e1 se pouze z \u010d\u00edsla portu, kter\u00e9 specifikuje konkr\u00e9tn\u00ed aplikaci nebo slu\u017ebu b\u011b\u017e\u00edc\u00ed na dan\u00e9m hostiteli, bez ohledu na s\u00ed\u0165ovou vrstvu.",
        sectionNumber: "9.2.13",
        sectionTitle: "Layers vs Addressing",
      },
      {
        uuid: "fd27fc6a-efd6-499d-bb1d-ef40c7a550bf",
        correct:
          "Protokol DNS (Domain Name System), kter\u00fd slou\u017e\u00ed k p\u0159ekladu dom\u00e9nov\u00fdch jmen na IP adresy, je pova\u017eov\u00e1n za speci\u00e1ln\u00ed protokol, kter\u00fd logicky spad\u00e1 do aplika\u010dn\u00ed vrstvy. A\u010dkoli DNS operuje s adresami transportn\u00ed vrstvy pro komunikaci, jeho prim\u00e1rn\u00ed funkc\u00ed je podpora aplikac\u00ed na nejvy\u0161\u0161\u00ed vrstv\u011b s\u00ed\u0165ov\u00e9ho modelu t\u00edm, \u017ee jim umo\u017e\u0148uje pou\u017e\u00edvat srozumiteln\u00e9 n\u00e1zvy nam\u00edsto \u010d\u00edseln\u00fdch IP adres.",
        incorrect:
          "Protokol DNS (Domain Name System), kter\u00fd slou\u017e\u00ed k p\u0159ekladu dom\u00e9nov\u00fdch jmen na IP adresy, je pova\u017eov\u00e1n za speci\u00e1ln\u00ed protokol, kter\u00fd logicky spad\u00e1 do transportn\u00ed vrstvy.  DNS prim\u00e1rn\u011b operuje a je \u0159\u00edzen transportn\u00ed vrstvou, proto\u017ee jeho hlavn\u00ed funkc\u00ed je zaji\u0161t\u011bn\u00ed spolehliv\u00e9 komunikace mezi transportn\u00edmi vrstvami r\u016fzn\u00fdch syst\u00e9m\u016f, a p\u0159eklad dom\u00e9nov\u00fdch jmen je pouze vedlej\u0161\u00ed funkc\u00ed pro usnadn\u011bn\u00ed adresace.",
        sectionNumber: "9.2.13",
        sectionTitle: "Layers vs Addressing",
      },
      {
        uuid: "b529f0f1-58cd-4c6b-be03-7fe6955bfac7",
        correct:
          "ARP protokol se pou\u017e\u00edv\u00e1 k nalezen\u00ed MAC adresy odpov\u00eddaj\u00edc\u00ed IP adrese v lok\u00e1ln\u00ed s\u00edti, co\u017e je nezbytn\u00e9 pro doru\u010dov\u00e1n\u00ed paket\u016f, proto\u017ee IP protokol vyu\u017e\u00edv\u00e1 linkovou vrstvu, kter\u00e1 vy\u017eaduje MAC adresy pro doru\u010den\u00ed dat. Opera\u010dn\u00ed syst\u00e9m vytv\u00e1\u0159\u00ed mapu t\u011bchto p\u0159eklad\u016f IP adres na MAC adresy pro efektivn\u00ed sm\u011brov\u00e1n\u00ed komunikace v s\u00edti.",
        incorrect:
          "ARP protokol se pou\u017e\u00edv\u00e1 k nalezen\u00ed IP adresy odpov\u00eddaj\u00edc\u00ed MAC adrese v lok\u00e1ln\u00ed s\u00edti, co\u017e je nezbytn\u00e9 pro doru\u010dov\u00e1n\u00ed paket\u016f, proto\u017ee MAC protokol vyu\u017e\u00edv\u00e1 internetovou vrstvu, kter\u00e1 vy\u017eaduje IP adresy pro doru\u010den\u00ed dat. Opera\u010dn\u00ed syst\u00e9m vytv\u00e1\u0159\u00ed mapu t\u011bchto p\u0159eklad\u016f MAC adres na IP adresy pro efektivn\u00ed sm\u011brov\u00e1n\u00ed komunikace v s\u00edti.",
        sectionNumber: "9.2.14",
        sectionTitle: "ARP (Address Resolution Protocol)",
      },
      {
        uuid: "98114721-7cdb-43fc-ac20-ff6c450e49f6",
        correct:
          "Pro \u00fasp\u011b\u0161n\u00e9 doru\u010den\u00ed paketu v lok\u00e1ln\u00ed s\u00edti je kl\u00ed\u010dov\u00e9 zn\u00e1t MAC adresu c\u00edlov\u00e9ho za\u0159\u00edzen\u00ed, proto\u017ee IP protokol vyu\u017e\u00edv\u00e1 slu\u017eeb linkov\u00e9 vrstvy, a ta pro doru\u010den\u00ed vy\u017eaduje MAC adresy. ARP protokol je mechanismus, kter\u00fd umo\u017e\u0148uje z\u00edskat tuto nezbytnou MAC adresu na z\u00e1klad\u011b znalosti IP adresy c\u00edlov\u00e9ho za\u0159\u00edzen\u00ed v dan\u00e9 lok\u00e1ln\u00ed s\u00edti.",
        incorrect:
          "Pro \u00fasp\u011b\u0161n\u00e9 doru\u010den\u00ed paketu v lok\u00e1ln\u00ed s\u00edti je kl\u00ed\u010dov\u00e9 zn\u00e1t IP adresu c\u00edlov\u00e9ho za\u0159\u00edzen\u00ed, proto\u017ee MAC protokol vyu\u017e\u00edv\u00e1 slu\u017eeb internetov\u00e9 vrstvy, a ta pro doru\u010den\u00ed vy\u017eaduje IP adresy. ARP protokol je mechanismus, kter\u00fd umo\u017e\u0148uje z\u00edskat tuto nezbytnou IP adresu na z\u00e1klad\u011b znalosti MAC adresy c\u00edlov\u00e9ho za\u0159\u00edzen\u00ed v dan\u00e9 lok\u00e1ln\u00ed s\u00edti.",
        sectionNumber: "9.2.14",
        sectionTitle: "ARP (Address Resolution Protocol)",
      },
      {
        uuid: "e9b47beb-0ccb-466c-b308-b0209fde81d1",
        correct:
          "Adresn\u00ed rozli\u0161ovac\u00ed protokol (ARP) se nach\u00e1z\u00ed na pomez\u00ed linkov\u00e9 a internetov\u00e9 vrstvy a hraje z\u00e1sadn\u00ed roli v umo\u017en\u011bn\u00ed internetov\u00e9 vrstv\u011b doru\u010dovat pakety s vyu\u017eit\u00edm slu\u017eeb linkov\u00e9 vrstvy. I kdy\u017e IP paket obsahuje pouze IP adresu, ARP zajist\u00ed, \u017ee se z\u00edsk\u00e1 odpov\u00eddaj\u00edc\u00ed MAC adresa, kter\u00e1 je nezbytn\u00e1 pro doru\u010den\u00ed paketu v lok\u00e1ln\u00ed s\u00edti.",
        incorrect:
          "Adresn\u00ed rozli\u0161ovac\u00ed protokol (ARP) se nach\u00e1z\u00ed na pomez\u00ed transportn\u00ed a internetov\u00e9 vrstvy a hraje z\u00e1sadn\u00ed roli v umo\u017en\u011bn\u00ed transportn\u00ed vrstv\u011b doru\u010dovat pakety s vyu\u017eit\u00edm slu\u017eeb internetov\u00e9 vrstvy. I kdy\u017e IP paket obsahuje pouze MAC adresu, ARP zajist\u00ed, \u017ee se z\u00edsk\u00e1 odpov\u00eddaj\u00edc\u00ed IP adresa, kter\u00e1 je nezbytn\u00e1 pro doru\u010den\u00ed paketu v lok\u00e1ln\u00ed s\u00edti.",
        sectionNumber: "9.2.14",
        sectionTitle: "ARP (Address Resolution Protocol)",
      },
      {
        uuid: "684a0467-296e-4d04-a04f-5f96cecf2fb7",
        correct:
          "Ethernet protokol, kter\u00fd spad\u00e1 do linkov\u00e9 vrstvy s\u00ed\u0165ov\u00e9 komunikace, je z velk\u00e9 \u010d\u00e1sti implementov\u00e1n p\u0159\u00edmo v hardwaru s\u00ed\u0165ov\u00fdch za\u0159\u00edzen\u00ed, co\u017e umo\u017e\u0148uje opera\u010dn\u00edmu syst\u00e9mu vyu\u017e\u00edvat jednotn\u00e9 a dob\u0159e definovan\u00e9 rozhran\u00ed, kter\u00e9 poskytuj\u00ed ovlada\u010de t\u011bchto za\u0159\u00edzen\u00ed, pro efektivn\u00ed odes\u00edl\u00e1n\u00ed a p\u0159\u00edjem ethernetov\u00fdch r\u00e1mc\u016f, p\u0159i\u010dem\u017e pro adresaci v r\u00e1mci lok\u00e1ln\u00ed s\u00edt\u011b se pou\u017e\u00edvaj\u00ed MAC adresy.",
        incorrect:
          "Ethernet protokol, kter\u00fd spad\u00e1 do s\u00ed\u0165ov\u00e9 vrstvy s\u00ed\u0165ov\u00e9 komunikace, je z velk\u00e9 \u010d\u00e1sti implementov\u00e1n p\u0159\u00edmo v softwaru opera\u010dn\u00edho syst\u00e9mu, co\u017e umo\u017e\u0148uje aplikac\u00edm vyu\u017e\u00edvat specifick\u00e9 rozhran\u00ed pro odes\u00edl\u00e1n\u00ed a p\u0159\u00edjem IP paket\u016f, p\u0159i\u010dem\u017e pro adresaci v r\u00e1mci internetu se pou\u017e\u00edvaj\u00ed IP adresy.",
        sectionNumber: "9.2.15",
        sectionTitle: "Ethernet",
      },
      {
        uuid: "93c06fe6-704d-482d-a0cf-ac0ac08f894b",
        correct:
          "Vysokorychlostn\u00ed s\u00edt\u011b, jako je Ethernet, jsou typicky p\u0159epojovan\u00e9 paketov\u011b, co\u017e znamen\u00e1, \u017ee uzly odes\u00edlaj\u00ed datov\u00e9 pakety p\u0159ep\u00edna\u010di, kter\u00fd je obvykle realizov\u00e1n jako hardwarov\u00e9 za\u0159\u00edzen\u00ed, a\u010dkoli existuj\u00ed i softwarov\u00e9 implementace, zejm\u00e9na v prost\u0159ed\u00ed virtualizace, p\u0159i\u010dem\u017e p\u0159ep\u00edna\u010d udr\u017euje informace o MAC adres\u00e1ch dosa\u017eiteln\u00fdch na jednotliv\u00fdch fyzick\u00fdch portech a na z\u00e1klad\u011b c\u00edlov\u00e9 MAC adresy pakety sm\u011bruje.",
        incorrect:
          "Vysokorychlostn\u00ed s\u00edt\u011b, jako je Token Ring, jsou typicky p\u0159epojovan\u00e9 okruhov\u011b, co\u017e znamen\u00e1, \u017ee uzly si p\u0159edem rezervuj\u00ed spojen\u00ed p\u0159es sm\u011brova\u010d, kter\u00fd je obvykle realizov\u00e1n jako softwarov\u00e1 aplikace, a\u010dkoli existuj\u00ed i hardwarov\u00e9 implementace pro specifick\u00e9 \u00fa\u010dely, p\u0159i\u010dem\u017e sm\u011brova\u010d udr\u017euje informace o IP adres\u00e1ch dosa\u017eiteln\u00fdch v r\u016fzn\u00fdch s\u00edt\u00edch a na z\u00e1klad\u011b c\u00edlov\u00e9 IP adresy data sm\u011bruje pomoc\u00ed sm\u011brovac\u00edch tabulek.",
        sectionNumber: "9.2.15",
        sectionTitle: "Ethernet",
      },
      {
        uuid: "02d5fc72-0ede-4514-ad9f-ec498c8b4ab8",
        correct:
          "Mosty a p\u0159ep\u00edna\u010de jsou za\u0159\u00edzen\u00ed pracuj\u00edc\u00ed na linkov\u00e9 vrstv\u011b, p\u0159i\u010dem\u017e most je koncipov\u00e1n jako za\u0159\u00edzen\u00ed se dv\u011bma porty, optimalizovan\u00e9 pro propojen\u00ed dvou lok\u00e1ln\u00edch s\u00edt\u00ed (LAN), kde na ka\u017ed\u00e9 stran\u011b mostu se typicky nach\u00e1z\u00ed v\u00edce MAC adres, zat\u00edmco p\u0159ep\u00edna\u010d je navr\u017een pro pr\u00e1ci s v\u011bt\u0161\u00edm po\u010dtem port\u016f, kde ke ka\u017ed\u00e9mu portu je obvykle p\u0159i\u0159azena jedin\u00e1 MAC adresa, s potenci\u00e1ln\u00ed v\u00fdjimkou vyhrazen\u00e9ho uplink portu.",
        incorrect:
          "Mosty a sm\u011brova\u010de jsou za\u0159\u00edzen\u00ed pracuj\u00edc\u00ed na s\u00ed\u0165ov\u00e9 vrstv\u011b, p\u0159i\u010dem\u017e most je koncipov\u00e1n jako za\u0159\u00edzen\u00ed s jedn\u00edm portem, optimalizovan\u00e9 pro propojen\u00ed dvou rozlehl\u00fdch s\u00edt\u00ed (WAN), kde na ka\u017ed\u00e9 stran\u011b mostu se typicky nach\u00e1z\u00ed v\u00edce IP adres, zat\u00edmco sm\u011brova\u010d je navr\u017een pro pr\u00e1ci s men\u0161\u00edm po\u010dtem port\u016f, kde ke ka\u017ed\u00e9mu portu je obvykle p\u0159i\u0159azena cel\u00e1 pods\u00ed\u0165 IP adres, s potenci\u00e1ln\u00ed v\u00fdjimkou portu pro br\u00e1nu.",
        sectionNumber: "9.2.15",
        sectionTitle: "Ethernet",
      },
      {
        uuid: "4c5514c4-734d-475f-82b5-2c7695b46d44",
        correct:
          "Krom\u011b Ethernetu, kter\u00fd je \u0161iroce pou\u017e\u00edv\u00e1n v lok\u00e1ln\u00edch s\u00edt\u00edch, existuj\u00ed i dal\u0161\u00ed v\u00fdznamn\u00e9 linkov\u00e9 protokoly, jako nap\u0159\u00edklad PPP (Point-to-Point Protocol) a WiFi, je\u017e se li\u0161\u00ed sv\u00fdmi specifick\u00fdmi vlastnostmi a jsou navr\u017eeny pro odli\u0161n\u00e9 typy s\u00edt\u00ed a zp\u016fsob p\u0159ipojen\u00ed.",
        incorrect:
          "Krom\u011b Ethernetu, kter\u00fd je \u0161iroce pou\u017e\u00edv\u00e1n v lok\u00e1ln\u00edch s\u00edt\u00edch, existuj\u00ed i dal\u0161\u00ed linkov\u00e9 protokoly, jako nap\u0159\u00edklad PPP (Point-to-Point Protocol) a WiFi, av\u0161ak tyto protokoly jsou v podstat\u011b jen variantami Ethernetu a nenab\u00edzej\u00ed \u017e\u00e1dn\u00e9 z\u00e1sadn\u00ed odli\u0161nosti v charakteristik\u00e1ch nebo zp\u016fsobu pou\u017eit\u00ed.",
        sectionNumber: "9.2.16",
        sectionTitle: "Link-Layer Protocols",
      },
      {
        uuid: "316a774c-0bb8-4656-83d8-cc8aca3d8f4f",
        correct:
          "Protokol PPP, ozna\u010dovan\u00fd jako Point-to-Point Protocol, je koncipov\u00e1n jako linkov\u00e1 vrstva pro s\u00edt\u011b s p\u0159\u00edm\u00fdm spojen\u00edm mezi dv\u011bma uzly a je navr\u017een tak, aby fungoval s r\u016fzn\u00fdmi fyzick\u00fdmi m\u00e9dii, v\u010detn\u011b telefonn\u00edch linek, mobiln\u00edch s\u00edt\u00ed, DSL a dokonce i Ethernetu, co\u017e z n\u011bj \u010din\u00ed velmi adaptabiln\u00ed protokol pro r\u016fzn\u00e9 s\u00ed\u0165ov\u00e9 konfigurace.",
        incorrect:
          "Protokol PPP, ozna\u010dovan\u00fd jako Point-to-Point Protocol, je koncipov\u00e1n jako s\u00ed\u0165ov\u00e1 vrstva pro komplexn\u00ed s\u00edt\u011b s mnoha uzly a je navr\u017een tak, aby fungoval v\u00fdhradn\u011b s optick\u00fdmi kabely, vylu\u010duje pou\u017eit\u00ed telefonn\u00edch linek, mobiln\u00edch s\u00edt\u00ed a DSL, co\u017e omezuje jeho adaptabilitu pouze na specifick\u00e9 s\u00ed\u0165ov\u00e9 konfigurace.",
        sectionNumber: "9.2.16",
        sectionTitle: "Link-Layer Protocols",
      },
      {
        uuid: "a6e6ce9f-6c14-407f-97ab-e5c922449952",
        correct:
          "WiFi, a\u010dkoli je \u010dasto vn\u00edm\u00e1no jako bezdr\u00e1tov\u00e1 alternativa Ethernetu, se ve skute\u010dnosti li\u0161\u00ed v mnoha aspektech, v\u010detn\u011b ni\u017e\u0161\u00ed spolehlivosti a rychlosti p\u0159enosu dat, a vy\u017eaduje implementaci \u0161ifrov\u00e1n\u00ed a autentizace z d\u016fvodu otev\u0159enosti bezdr\u00e1tov\u00e9ho m\u00e9dia a potenci\u00e1ln\u00edho odposlouch\u00e1v\u00e1n\u00ed komunikace.",
        incorrect:
          "WiFi, a\u010dkoli je \u010dasto vn\u00edm\u00e1no jako bezdr\u00e1tov\u00e1 alternativa Ethernetu, se ve skute\u010dnosti neli\u0161\u00ed v z\u00e1sadn\u00edch aspektech, v\u010detn\u011b srovnateln\u00e9 spolehlivosti a rychlosti p\u0159enosu dat, a nevy\u017eaduje implementaci \u0161ifrov\u00e1n\u00ed ani autentizace, proto\u017ee bezdr\u00e1tov\u00e9 m\u00e9dium je inherentn\u011b zabezpe\u010den\u00e9 proti odposlouch\u00e1v\u00e1n\u00ed komunikace.",
        sectionNumber: "9.2.16",
        sectionTitle: "Link-Layer Protocols",
      },
      {
        uuid: "b9ed7a19-4641-40f4-9891-8a2c52fe81fa",
        correct:
          "Z pohledu vy\u0161\u0161\u00edch vrstev s\u00ed\u0165ov\u00e9ho modelu je WiFi vn\u00edm\u00e1no jako varianta Ethernetu s hor\u0161\u00edmi parametry, p\u0159edev\u0161\u00edm co se t\u00fd\u010de spolehlivosti a propustnosti, nicm\u00e9n\u011b intern\u00ed implementace protokolu WiFi je zna\u010dn\u011b komplexn\u011bj\u0161\u00ed ne\u017e u Ethernetu, zahrnuj\u00edc\u00ed mechanismy pro \u0159e\u0161en\u00ed interference a koliz\u00ed v bezdr\u00e1tov\u00e9m prost\u0159ed\u00ed.",
        incorrect:
          "Z pohledu vy\u0161\u0161\u00edch vrstev s\u00ed\u0165ov\u00e9ho modelu je WiFi vn\u00edm\u00e1no jako identick\u00e1 kopie Ethernetu s naprosto srovnateln\u00fdmi parametry ve v\u0161ech ohledech, a intern\u00ed implementace protokolu WiFi je zjednodu\u0161enou verz\u00ed Ethernetu, neobsahuj\u00edc\u00ed \u017e\u00e1dn\u00e9 slo\u017eit\u011bj\u0161\u00ed mechanismy pro \u0159e\u0161en\u00ed specifick\u00fdch probl\u00e9m\u016f bezdr\u00e1tov\u00e9ho prost\u0159ed\u00ed.",
        sectionNumber: "9.2.16",
        sectionTitle: "Link-Layer Protocols",
      },
      {
        uuid: "cdc4d4ca-7117-4ddb-969c-7184102087eb",
        correct:
          "Tunelov\u00e1n\u00ed je technika, kter\u00e1 umo\u017e\u0148uje vno\u0159en\u00ed provozu ni\u017e\u0161\u00edch vrstev do aplika\u010dn\u00ed vrstvy existuj\u00edc\u00ed s\u00edt\u011b, typicky za \u00fa\u010delem propojen\u00ed fyzicky vzd\u00e1len\u00fdch po\u010d\u00edta\u010d\u016f do jedn\u00e9 broadcastov\u00e9 dom\u00e9ny linkov\u00e9 vrstvy nebo sm\u011brovac\u00ed dom\u00e9ny internetov\u00e9 vrstvy.",
        incorrect:
          "Tunelov\u00e1n\u00ed je technika, kter\u00e1 umo\u017e\u0148uje vno\u0159en\u00ed provozu vy\u0161\u0161\u00edch vrstev do aplika\u010dn\u00ed vrstvy existuj\u00edc\u00ed s\u00edt\u011b, typicky za \u00fa\u010delem propojen\u00ed fyzicky bl\u00edzk\u00fdch po\u010d\u00edta\u010d\u016f do jedn\u00e9 broadcastov\u00e9 dom\u00e9ny linkov\u00e9 vrstvy nebo sm\u011brovac\u00ed dom\u00e9ny internetov\u00e9 vrstvy.",
        sectionNumber: "9.2.17",
        sectionTitle: "Tunneling",
      },
      {
        uuid: "3bb9963e-4c90-4d1a-ba09-36cafdb3c38b",
        correct:
          "V kontextu tunelov\u00e1n\u00ed implementuje VPN software aplika\u010dn\u00ed protokol b\u011b\u017e\u00edc\u00ed ve vn\u011bj\u0161\u00ed s\u00ed\u0165ov\u00e9 vrstv\u011b a sou\u010dasn\u011b funguje jako rozhran\u00ed linkov\u00e9 vrstvy nebo pods\u00ed\u0165 internetov\u00e9 vrstvy, kter\u00e1 je ch\u00e1p\u00e1na jako b\u011b\u017en\u00e9 fyzick\u00e9 rozhran\u00ed.",
        incorrect:
          "V kontextu tunelov\u00e1n\u00ed implementuje VPN software linkov\u00fd protokol b\u011b\u017e\u00edc\u00ed ve vn\u011bj\u0161\u00ed s\u00ed\u0165ov\u00e9 vrstv\u011b a sou\u010dasn\u011b funguje jako rozhran\u00ed aplika\u010dn\u00ed vrstvy nebo pods\u00ed\u0165 internetov\u00e9 vrstvy, kter\u00e1 je ch\u00e1p\u00e1na jako b\u011b\u017en\u00e9 fyzick\u00e9 rozhran\u00ed.",
        sectionNumber: "9.2.17",
        sectionTitle: "Tunneling",
      },
      {
        uuid: "509bc57b-b3e9-4dd0-94c3-ef74ff0d007b",
        correct:
          "Tunely, \u010dasto pou\u017e\u00edvan\u00e9 ve virtu\u00e1ln\u00edch priv\u00e1tn\u00edch s\u00edt\u00edch (VPN), jsou virtu\u00e1ln\u00ed za\u0159\u00edzen\u00ed druh\u00e9 nebo t\u0159et\u00ed vrstvy, kter\u00e9 zapouzd\u0159uj\u00ed s\u00ed\u0165ov\u00fd provoz do protokolu vy\u0161\u0161\u00ed vrstvy, p\u0159i\u010dem\u017e tunel b\u00fdv\u00e1 obvykle \u0161ifrovan\u00fd pro zaji\u0161t\u011bn\u00ed bezpe\u010dnosti p\u0159en\u00e1\u0161en\u00fdch dat.",
        incorrect:
          "Tunely, z\u0159\u00eddka pou\u017e\u00edvan\u00e9 ve virtu\u00e1ln\u00edch priv\u00e1tn\u00edch s\u00edt\u00edch (VPN), jsou fyzick\u00e1 za\u0159\u00edzen\u00ed druh\u00e9 nebo t\u0159et\u00ed vrstvy, kter\u00e1 zapouzd\u0159uj\u00ed s\u00ed\u0165ov\u00fd provoz do protokolu ni\u017e\u0161\u00ed vrstvy, p\u0159i\u010dem\u017e tunel neb\u00fdv\u00e1 obvykle \u0161ifrovan\u00fd, proto\u017ee \u0161ifrov\u00e1n\u00ed zbyte\u010dn\u011b zat\u011b\u017euje s\u00ed\u0165.",
        sectionNumber: "9.2.17",
        sectionTitle: "Tunneling",
      },
      {
        uuid: "87cbc193-2279-42b2-89de-dbaa383f9558",
        correct:
          'IP protokol je nespolehliv\u00fd protokol pracuj\u00edc\u00ed na principu "best-effort", co\u017e znamen\u00e1, \u017ee negarantuje doru\u010den\u00ed paket\u016f, integritu dat ani po\u0159ad\u00ed doru\u010den\u00ed, a pakety se mohou ztratit, b\u00fdt p\u0159euspo\u0159\u00e1d\u00e1ny nebo po\u0161kozeny b\u011bhem p\u0159enosu, co\u017e klade d\u016fraz na mechanismy vy\u0161\u0161\u00edch vrstev pro zaji\u0161t\u011bn\u00ed spolehlivosti, pokud je vy\u017eadov\u00e1na.',
        incorrect:
          'IP protokol je spolehliv\u00fd protokol pracuj\u00edc\u00ed na principu "best-effort", co\u017e znamen\u00e1, \u017ee garantuje doru\u010den\u00ed paket\u016f, integritu dat i po\u0159ad\u00ed doru\u010den\u00ed, a pakety se nemohou ztratit, b\u00fdt p\u0159euspo\u0159\u00e1d\u00e1ny nebo po\u0161kozeny b\u011bhem p\u0159enosu, co\u017e eliminuje pot\u0159ebu mechanism\u016f vy\u0161\u0161\u00edch vrstev pro zaji\u0161t\u011bn\u00ed spolehlivosti.',
        sectionNumber: "9.3.1",
        sectionTitle: "IP (Internet Protocol)",
      },
      {
        uuid: "4ebca8a4-e60b-46b9-a0cf-2602360bd549",
        correct:
          "IP adresy, a\u0165 u\u017e 4-bytov\u00e9 (v4) nebo 16-bytov\u00e9 (v6), jsou logicky rozd\u011bleny na dv\u011b \u010d\u00e1sti: s\u00ed\u0165ovou a hostitelskou, p\u0159i\u010dem\u017e hranice mezi t\u011bmito \u010d\u00e1stmi je flexibiln\u011b definov\u00e1na pomoc\u00ed s\u00ed\u0165ov\u00e9 masky (netmask), kter\u00e1 umo\u017e\u0148uje r\u016fzn\u00e9 velikosti pods\u00edt\u00ed v z\u00e1vislosti na po\u010dtu pot\u0159ebn\u00fdch hostitel\u016f a efektivn\u00edm vyu\u017eit\u00ed adresn\u00edho prostoru.",
        incorrect:
          "IP adresy, a\u0165 u\u017e 4-bytov\u00e9 (v4) nebo 16-bytov\u00e9 (v6), jsou fyzicky rozd\u011bleny na dv\u011b \u010d\u00e1sti: s\u00ed\u0165ovou a hostitelskou, p\u0159i\u010dem\u017e hranice mezi t\u011bmito \u010d\u00e1stmi je pevn\u011b definov\u00e1na v\u00fdrobcem s\u00ed\u0165ov\u00e9ho za\u0159\u00edzen\u00ed a nelze ji m\u011bnit pomoc\u00ed s\u00ed\u0165ov\u00e9 masky (netmask), co\u017e omezuje flexibilitu a efektivitu vyu\u017eit\u00ed adresn\u00edho prostoru.",
        sectionNumber: "9.3.1",
        sectionTitle: "IP (Internet Protocol)",
      },
      {
        uuid: "7db3b4b9-31c2-4878-83be-0f333ea61ef3",
        correct:
          "Sm\u011brova\u010de (routers) funguj\u00ed na t\u0159et\u00ed vrstv\u011b s\u00ed\u0165ov\u00e9ho modelu a jsou zodpov\u011bdn\u00e9 za p\u0159epos\u00edl\u00e1n\u00ed paket\u016f mezi r\u016fzn\u00fdmi IP s\u00edt\u011bmi na z\u00e1klad\u011b sm\u011brovac\u00edch tabulek, kter\u00e9 jsou mnohem komplexn\u011bj\u0161\u00ed ne\u017e informace udr\u017eovan\u00e9 p\u0159ep\u00edna\u010di (switches) na druh\u00e9 vrstv\u011b, a vy\u017eaduj\u00ed dynamickou \u00fadr\u017ebu a aktualizaci pro zaji\u0161t\u011bn\u00ed optim\u00e1ln\u00edho sm\u011brov\u00e1n\u00ed v rozs\u00e1hl\u00fdch s\u00edt\u00edch.",
        incorrect:
          "Sm\u011brova\u010de (routers) funguj\u00ed na druh\u00e9 vrstv\u011b s\u00ed\u0165ov\u00e9ho modelu a jsou zodpov\u011bdn\u00e9 za p\u0159epos\u00edl\u00e1n\u00ed paket\u016f v r\u00e1mci jedn\u00e9 IP s\u00edt\u011b na z\u00e1klad\u011b MAC adres, kter\u00e9 jsou jednodu\u0161\u0161\u00ed ne\u017e sm\u011brovac\u00ed tabulky pou\u017e\u00edvan\u00e9 p\u0159ep\u00edna\u010di (switches) na t\u0159et\u00ed vrstv\u011b, a vy\u017eaduj\u00ed statickou konfiguraci a minim\u00e1ln\u00ed \u00fadr\u017ebu pro zaji\u0161t\u011bn\u00ed z\u00e1kladn\u00edho sm\u011brov\u00e1n\u00ed v lok\u00e1ln\u00edch s\u00edt\u00edch.",
        sectionNumber: "9.3.1",
        sectionTitle: "IP (Internet Protocol)",
      },
      {
        uuid: "89abc60a-9092-4622-acdf-88cbafcd5e35",
        correct:
          "V transportn\u00ed vrstv\u011b adresov\u00e1n\u00ed se pou\u017e\u00edvaj\u00ed dv\u011b kl\u00ed\u010dov\u00e9 komponenty: IP adresa c\u00edlov\u00e9ho po\u010d\u00edta\u010de, identifikuj\u00edc\u00ed s\u00ed\u0165ov\u00e9 rozhran\u00ed, a \u010d\u00edslo portu, co\u017e je 16bitov\u00e9 \u010d\u00edslo slou\u017e\u00edc\u00ed k rozli\u0161en\u00ed a identifikaci konkr\u00e9tn\u00ed slu\u017eby nebo aplikace b\u011b\u017e\u00edc\u00ed na dan\u00e9m hostiteli, umo\u017e\u0148uj\u00edc\u00ed tak multiplexov\u00e1n\u00ed slu\u017eeb na jednom IP rozhran\u00ed.",
        incorrect:
          "V transportn\u00ed vrstv\u011b adresov\u00e1n\u00ed se pou\u017e\u00edv\u00e1 pouze IP adresa c\u00edlov\u00e9ho po\u010d\u00edta\u010de, p\u0159i\u010dem\u017e \u010d\u00edslo portu je irelevantn\u00ed a nepou\u017e\u00edv\u00e1 se pro identifikaci slu\u017eeb, proto\u017ee ka\u017ed\u00e1 slu\u017eba nebo aplikace b\u011b\u017e\u00edc\u00ed na c\u00edlov\u00e9m hostiteli je automaticky identifikov\u00e1na opera\u010dn\u00edm syst\u00e9mem na z\u00e1klad\u011b IP adresy a protokol\u016f aplika\u010dn\u00ed vrstvy.",
        sectionNumber: "9.3.1",
        sectionTitle: "IP (Internet Protocol)",
      },
      {
        uuid: "8a06f080-ceac-4b14-a414-1e97eef24724",
        correct:
          "Protokol ICMP (Internet Control Message Protocol) je pova\u017eov\u00e1n za servisn\u00ed protokol, kter\u00fd se vyu\u017e\u00edv\u00e1 pro diagnostiku s\u00edt\u00ed, hl\u00e1\u0161en\u00ed chyb a spr\u00e1vu s\u00edt\u011b, p\u0159i\u010dem\u017e jeho role byla v\u00fdznamn\u011b roz\u0161\u00ed\u0159ena s p\u0159\u00edchodem protokolu IPv6, nap\u0159\u00edklad o automatickou konfiguraci s\u00edt\u011b prost\u0159ednictv\u00edm router advertisement a router solicitation paket\u016f.",
        incorrect:
          "Protokol ICMP (Internet Control Message Protocol) je pova\u017eov\u00e1n za aplika\u010dn\u00ed protokol, kter\u00fd se vyu\u017e\u00edv\u00e1 pro diagnostiku s\u00edt\u00ed, hl\u00e1\u0161en\u00ed chyb a spr\u00e1vu s\u00edt\u011b, p\u0159i\u010dem\u017e jeho role byla v\u00fdznamn\u011b roz\u0161\u00ed\u0159ena s p\u0159\u00edchodem protokolu IPv6, nap\u0159\u00edklad o automatickou konfiguraci s\u00edt\u011b prost\u0159ednictv\u00edm router advertisement a router solicitation paket\u016f.",
        sectionNumber: "9.3.2",
        sectionTitle: "ICMP: Control Messages",
      },
      {
        uuid: "83c113b3-471f-4840-9ffe-62a08f4797c2",
        correct:
          "Mezi hlavn\u00ed funkce protokolu ICMP pat\u0159\u00ed zas\u00edl\u00e1n\u00ed \u0159\u00eddic\u00edch zpr\u00e1v, jako jsou zpr\u00e1vy o nedosa\u017eitelnosti c\u00edlov\u00e9ho hostitele nebo s\u00edt\u011b, p\u0159ekro\u010den\u00ed doby \u017eivotnosti paketu (time to live exceeded) a nutnosti fragmentace, a tak\u00e9 diagnostick\u00e9 funkce, kter\u00e9 se vyu\u017e\u00edvaj\u00ed nap\u0159\u00edklad v p\u0159\u00edkazu \u2039ping\u203a pro testov\u00e1n\u00ed dostupnosti s\u00edt\u011b.",
        incorrect:
          "Mezi hlavn\u00ed funkce protokolu ICMP pat\u0159\u00ed v\u00fdhradn\u011b zas\u00edl\u00e1n\u00ed diagnostick\u00fdch zpr\u00e1v, kter\u00e9 se vyu\u017e\u00edvaj\u00ed nap\u0159\u00edklad v p\u0159\u00edkazu \u2039ping\u203a pro testov\u00e1n\u00ed dostupnosti s\u00edt\u011b, p\u0159i\u010dem\u017e \u0159\u00eddic\u00ed zpr\u00e1vy jako zpr\u00e1vy o nedosa\u017eitelnosti c\u00edlov\u00e9ho hostitele nebo s\u00edt\u011b nejsou sou\u010d\u00e1st\u00ed funkcionality protokolu ICMP.",
        sectionNumber: "9.3.2",
        sectionTitle: "ICMP: Control Messages",
      },
      {
        uuid: "b9c8f62c-fb0a-4520-9214-4e51d255a2f7",
        correct:
          "P\u0159\u00edkaz \u2039ping\u203a, kter\u00fd je b\u011b\u017en\u011b pou\u017e\u00edv\u00e1n pro diagnostiku s\u00ed\u0165ov\u00e9ho p\u0159ipojen\u00ed, vyu\u017e\u00edv\u00e1 protokol ICMP t\u00edm, \u017ee odes\u00edl\u00e1 zpr\u00e1vy typu \u2039echo request\u203a a o\u010dek\u00e1v\u00e1 odpov\u011bdi typu \u2039echo reply\u203a, co\u017e umo\u017e\u0148uje ov\u011b\u0159it, zda je c\u00edlov\u00fd hostitel dosa\u017eiteln\u00fd a reaguje na s\u00ed\u0165ov\u00e9 po\u017eadavky.",
        incorrect:
          "P\u0159\u00edkaz \u2039ping\u203a, kter\u00fd je b\u011b\u017en\u011b pou\u017e\u00edv\u00e1n pro diagnostiku s\u00ed\u0165ov\u00e9ho p\u0159ipojen\u00ed, vyu\u017e\u00edv\u00e1 protokol TCP t\u00edm, \u017ee odes\u00edl\u00e1 zpr\u00e1vy typu \u2039SYN\u203a a o\u010dek\u00e1v\u00e1 odpov\u011bdi typu \u2039SYN-ACK\u203a, co\u017e umo\u017e\u0148uje ov\u011b\u0159it, zda je c\u00edlov\u00fd hostitel dosa\u017eiteln\u00fd a reaguje na s\u00ed\u0165ov\u00e9 po\u017eadavky.",
        sectionNumber: "9.3.2",
        sectionTitle: "ICMP: Control Messages",
      },
      {
        uuid: "2a0bc66d-1287-4530-8d8f-f5087a29bce8",
        correct:
          "Protokol TCP je streamov\u011b orientovan\u00fd protokol postaven\u00fd nad protokolem IP. Aby bylo zaji\u0161t\u011bno spolehliv\u00e9 doru\u010den\u00ed dat, TCP mus\u00ed udr\u017eovat po\u0159ad\u00ed doru\u010den\u00fdch bajt\u016f a implementovat mechanismy pro opakovan\u00e9 odes\u00edl\u00e1n\u00ed ztracen\u00fdch paket\u016f v p\u0159\u00edpad\u011b ztr\u00e1ty paket\u016f b\u011bhem p\u0159enosu p\u0159es IP. P\u0159ed zah\u00e1jen\u00edm p\u0159enosu dat mus\u00ed koncov\u00e9 body TCP nav\u00e1zat spojen\u00ed pomoc\u00ed specifick\u00e9ho handshaku.",
        incorrect:
          "Protokol TCP je paketov\u011b orientovan\u00fd protokol postaven\u00fd nad protokolem IP. Aby bylo zaji\u0161t\u011bno nespolehliv\u00e9 doru\u010den\u00ed dat, TCP nemus\u00ed udr\u017eovat po\u0159ad\u00ed doru\u010den\u00fdch bajt\u016f a neimplementuje mechanismy pro opakovan\u00e9 odes\u00edl\u00e1n\u00ed ztracen\u00fdch paket\u016f v p\u0159\u00edpad\u011b ztr\u00e1ty paket\u016f b\u011bhem p\u0159enosu p\u0159es IP. P\u0159ed zah\u00e1jen\u00edm p\u0159enosu dat koncov\u00e9 body TCP nemus\u00ed navazovat spojen\u00ed a mohou za\u010d\u00edt odes\u00edlat data okam\u017eit\u011b.",
        sectionNumber: "9.3.3",
        sectionTitle: "TCP: Transmission Control Protocol",
      },
      {
        uuid: "f31cf8f9-5d6e-42ad-a3de-f7a5ac3b61bb",
        correct:
          "Protokol TCP, navr\u017een\u00fd pro poskytov\u00e1n\u00ed streamov\u00e9 s\u00e9mantiky nad paketov\u011b orientovanou s\u00edt\u00ed, toho dosahuje nav\u00e1z\u00e1n\u00edm spojen\u00ed mezi koncov\u00fdmi body. Toto spojen\u00ed, kter\u00e9 je obousm\u011brn\u00e9 a slou\u017e\u00ed jako odd\u011blen\u00fd datov\u00fd proud, je iniciov\u00e1no pomoc\u00ed t\u0159\u00edf\u00e1zov\u00e9ho handshaku zahrnuj\u00edc\u00edho pakety SYN, SYN/ACK a ACK k synchronizaci a dohodnut\u00ed parametr\u016f spojen\u00ed p\u0159ed jak\u00fdmkoli p\u0159enosem dat.",
        incorrect:
          "Protokol TCP, navr\u017een\u00fd pro poskytov\u00e1n\u00ed paketov\u00e9 s\u00e9mantiky nad paketov\u011b orientovanou s\u00edt\u00ed, toho dosahuje bez nav\u00e1z\u00e1n\u00ed spojen\u00ed mezi koncov\u00fdmi body. Toto spojen\u00ed, kter\u00e9 je jednosm\u011brn\u00e9 a slou\u017e\u00ed jako jedin\u00fd datov\u00fd proud, je iniciov\u00e1no pomoc\u00ed dvouf\u00e1zov\u00e9ho handshaku zahrnuj\u00edc\u00edho pakety SYN a ACK k synchronizaci a dohodnut\u00ed parametr\u016f spojen\u00ed p\u0159ed jak\u00fdmkoli p\u0159enosem dat.",
        sectionNumber: "9.3.3",
        sectionTitle: "TCP: Transmission Control Protocol",
      },
      {
        uuid: "5a717612-7d7c-45ef-9ced-b8fedd871ce1",
        correct:
          "TCP protokol vyu\u017e\u00edv\u00e1 sekven\u010dn\u00ed \u010d\u00edsla, kter\u00e1 jsou kl\u00ed\u010dovou sou\u010d\u00e1st\u00ed stavu spojen\u00ed, aby umo\u017enil spr\u00e1vn\u00e9 sestaven\u00ed datov\u00e9ho proudu na stran\u011b p\u0159\u00edjemce, i kdy\u017e IP pakety, kter\u00e9 tento proud p\u0159en\u00e1\u0161ej\u00ed, doraz\u00ed v jin\u00e9m po\u0159ad\u00ed, ne\u017e byly odesl\u00e1ny. Tato sekven\u010dn\u00ed \u010d\u00edsla zaji\u0161\u0165uj\u00ed, \u017ee i p\u0159i p\u0159\u00edpadn\u00e9m p\u0159euspo\u0159\u00e1d\u00e1n\u00ed paket\u016f b\u011bhem doru\u010den\u00ed je mo\u017en\u00e9 obnovit p\u016fvodn\u00ed po\u0159ad\u00ed dat.",
        incorrect:
          "TCP protokol vyu\u017e\u00edv\u00e1 sekven\u010dn\u00ed \u010d\u00edsla v\u00fdhradn\u011b pro detekci ztracen\u00fdch paket\u016f a n\u00e1slednou retransmisi, ale nem\u00e1 \u017e\u00e1dn\u00fd vliv na sestaven\u00ed datov\u00e9ho proudu v p\u0159\u00edpad\u011b, \u017ee IP pakety doraz\u00ed v jin\u00e9m po\u0159ad\u00ed. Sestaven\u00ed datov\u00e9ho proudu v spr\u00e1vn\u00e9m po\u0159ad\u00ed je zaji\u0161t\u011bno jin\u00fdmi mechanismy na ni\u017e\u0161\u00edch vrstv\u00e1ch s\u00ed\u0165ov\u00e9ho modelu.",
        sectionNumber: "9.3.4",
        sectionTitle: "Sequence Numbers",
      },
      {
        uuid: "0a523ebb-7c69-4e53-9f32-8690cd85d62e",
        correct:
          "V protokolu TCP, pokud odes\u00edlatel neobdr\u017e\u00ed potvrzen\u00ed o doru\u010den\u00ed paketu (ACK) v dynamicky upraven\u00e9m \u010dasov\u00e9m limitu od odesl\u00e1n\u00ed p\u016fvodn\u00edho paketu, je tento paket automaticky znovu odesl\u00e1n. Tento mechanismus retransmise zaji\u0161\u0165uje spolehlivost p\u0159enosu dat i v s\u00edt\u00edch, kde doch\u00e1z\u00ed ke ztr\u00e1t\u011b paket\u016f v d\u016fsledku nap\u0159\u00edklad zahlcen\u00ed buffer\u016f na sm\u011brovac\u00edch za\u0159\u00edzen\u00edch.",
        incorrect:
          "V protokolu TCP, pokud odes\u00edlatel neobdr\u017e\u00ed potvrzen\u00ed o doru\u010den\u00ed paketu (ACK) v pevn\u00e9m, p\u0159edem definovan\u00e9m \u010dasov\u00e9m limitu od odesl\u00e1n\u00ed p\u016fvodn\u00edho paketu, je paket pova\u017eov\u00e1n za ztracen\u00fd, ale automatick\u00e1 retransmise se neprov\u00e1d\u00ed. Ztr\u00e1ta paketu v TCP spojen\u00ed vy\u017eaduje manu\u00e1ln\u00ed z\u00e1sah administr\u00e1tora s\u00edt\u011b pro obnoven\u00ed p\u0159enosu dat.",
        sectionNumber: "9.3.4",
        sectionTitle: "Sequence Numbers",
      },
      {
        uuid: "64ab4cd0-af64-40d8-aae8-0b681200141a",
        correct:
          "Ztr\u00e1ta paketu v s\u00edti, kde se pou\u017e\u00edv\u00e1 protokol TCP, m\u016f\u017ee b\u00fdt detekov\u00e1na p\u0159\u00edjemcem jako mezera v sekven\u010dn\u00edch \u010d\u00edslech p\u0159ijat\u00fdch paket\u016f. Nicm\u00e9n\u011b, je zodpov\u011bdnost\u00ed odes\u00edlatele, aby se o ztr\u00e1t\u011b paketu dozv\u011bd\u011bl a mohl prov\u00e9st retransmisi, co\u017e se typicky d\u011bje na z\u00e1klad\u011b absence potvrzen\u00ed o doru\u010den\u00ed (ACK) od p\u0159\u00edjemce v stanoven\u00e9m \u010dasov\u00e9m intervalu.",
        incorrect:
          "Ztr\u00e1ta paketu v s\u00edti s protokolem TCP je detekov\u00e1na v\u00fdhradn\u011b p\u0159\u00edjemcem, kter\u00fd n\u00e1sledn\u011b iniciuje retransmisi ztracen\u00e9ho paketu odesl\u00e1n\u00edm speci\u00e1ln\u00edho po\u017eadavku na odes\u00edlatele. Odes\u00edlatel s\u00e1m nem\u00e1 mechanismy pro detekci ztr\u00e1ty paketu a spol\u00e9h\u00e1 se pln\u011b na zp\u011btnou vazbu od p\u0159\u00edjemce pro zaji\u0161t\u011bn\u00ed spolehlivosti p\u0159enosu, av\u0161ak retransmisi prov\u00e1d\u00ed v\u017edy p\u0159\u00edjemce.",
        sectionNumber: "9.3.4",
        sectionTitle: "Sequence Numbers",
      },
      {
        uuid: "e73e42a8-5b84-4969-b2e5-331f9a1ab0ea",
        correct:
          "TCP protokol se vyzna\u010duje zna\u010dnou re\u017ei\u00ed kv\u016fli mechanism\u016fm zaji\u0161\u0165uj\u00edc\u00edm spolehliv\u00e9 a se\u0159azen\u00e9 doru\u010den\u00ed dat, co\u017e m\u016f\u017ee b\u00fdt zbyte\u010dn\u00e9 a v\u00e9st k latenci v aplikac\u00edch, kter\u00e9 nevy\u017eaduj\u00ed striktn\u00ed garance spolehlivosti a po\u0159ad\u00ed doru\u010den\u00ed dat.",
        incorrect:
          "TCP protokol je navr\u017een s minim\u00e1ln\u00ed re\u017ei\u00ed, srovnatelnou s UDP, a je proto ide\u00e1ln\u00ed pro aplikace citliv\u00e9 na latenci, p\u0159i\u010dem\u017e jeho mechanismy pro spolehliv\u00e9 a se\u0159azen\u00e9 doru\u010den\u00ed dat jsou voliteln\u00e9 a lze je deaktivovat pro sn\u00ed\u017een\u00ed z\u00e1t\u011b\u017ee s\u00edt\u011b.",
        sectionNumber: "9.3.5",
        sectionTitle: "UDP: User Datagram Protocol",
      },
      {
        uuid: "d2c5cbc7-9bf4-47aa-a6c6-fdd4aa23d0da",
        correct:
          "UDP protokol p\u0159edstavuje zjednodu\u0161enou a odleh\u010denou vrstvu nad IP protokolem s minim\u00e1ln\u00ed re\u017ei\u00ed, kter\u00e1 spo\u010d\u00edv\u00e1 v p\u0159id\u00e1n\u00ed portov\u00fdch \u010d\u00edsel a 16bitov\u00e9ho kontroln\u00edho sou\u010dtu do hlavi\u010dky paketu, p\u0159i\u010dem\u017e celkov\u00e1 d\u00e9lka hlavi\u010dky UDP je pouh\u00fdch 64 bit\u016f.",
        incorrect:
          "UDP protokol je komplexn\u00ed protokol s rozs\u00e1hlou hlavi\u010dkou o d\u00e9lce 128 bit\u016f, kter\u00fd krom\u011b portov\u00fdch \u010d\u00edsel a kontroln\u00edho sou\u010dtu zahrnuje i sofistikovan\u00e9 mechanismy pro \u0159\u00edzen\u00ed toku a spolehliv\u00e9 doru\u010den\u00ed dat, srovnateln\u00e9 s protokolem TCP, av\u0161ak s men\u0161\u00ed re\u017ei\u00ed.",
        sectionNumber: "9.3.5",
        sectionTitle: "UDP: User Datagram Protocol",
      },
      {
        uuid: "a18e6a16-be5b-4802-9a12-0be730ffeed8",
        correct:
          "Firewall je za\u0159\u00edzen\u00ed, kter\u00e9 odd\u011bluje dv\u011b s\u00edt\u011b, p\u0159i\u010dem\u017e typicky funguje jako jedin\u00fd router mezi nimi, a jeho \u00fakolem je zkoumat pakety a odm\u00edtat ty, kter\u00e9 se zdaj\u00ed b\u00fdt \u0161kodliv\u00e9 nebo se pokou\u0161ej\u00ed o vyu\u017eit\u00ed slu\u017eeb, kter\u00e9 by nem\u011bly b\u00fdt zven\u010d\u00ed dostupn\u00e9, p\u0159i\u010dem\u017e jednou z t\u011bchto s\u00edt\u00ed je \u010dasto ve\u0159ejn\u00fd internet.",
        incorrect:
          "Firewall je za\u0159\u00edzen\u00ed, kter\u00e9 sice odd\u011bluje dv\u011b s\u00edt\u011b, ale prim\u00e1rn\u011b funguje jako pasivn\u00ed monitorovac\u00ed n\u00e1stroj, kter\u00fd pouze zaznamen\u00e1v\u00e1 podez\u0159el\u00e9 aktivity a neaktivn\u011b nezasahuje do s\u00ed\u0165ov\u00e9ho provozu, p\u0159i\u010dem\u017e jeho hlavn\u00edm \u00fa\u010delem je generov\u00e1n\u00ed report\u016f o potenci\u00e1ln\u00edch hrozb\u00e1ch pro administr\u00e1tory s\u00edt\u011b.",
        sectionNumber: "9.3.6",
        sectionTitle: "Firewalls",
      },
      {
        uuid: "1e291818-cbdd-444e-8a8d-c414de096980",
        correct:
          "Implementac\u00ed firewallu m\u016f\u017ee b\u00fdt packet filtering, kter\u00fd je mo\u017en\u00e9 realizovat bu\u010f na routeru, \u010d\u00edm\u017e se chr\u00e1n\u00ed cel\u00e1 s\u00ed\u0165 centralizovan\u011b, nebo na koncov\u00e9m bod\u011b, jako je nap\u0159\u00edklad server \u010di pracovn\u00ed stanice, \u010d\u00edm\u017e se poskytuje dodate\u010dn\u00e1 ochrana konkr\u00e9tn\u00edho za\u0159\u00edzen\u00ed, a dedikovan\u00e9 routery s packet filtry obvykle zvy\u0161uj\u00ed bezpe\u010dnost cel\u00e9 s\u00edt\u011b.",
        incorrect:
          "Implementac\u00ed firewallu je v\u00fdhradn\u011b packet filtering, kter\u00fd je mo\u017en\u00e9 efektivn\u011b realizovat pouze na koncov\u00fdch bodech s\u00edt\u011b, jako jsou servery a pracovn\u00ed stanice, jeliko\u017e centralizovan\u00e1 implementace packet filtering na routerech je z hlediska celkov\u00e9 bezpe\u010dnosti s\u00edt\u011b pova\u017eov\u00e1na za m\u00e9n\u011b efektivn\u00ed a obt\u00ed\u017en\u011bji spravovatelnou.",
        sectionNumber: "9.3.6",
        sectionTitle: "Firewalls",
      },
      {
        uuid: "041743f4-f1fe-4fd0-8d75-4b1983ef3703",
        correct:
          "Packet filtry pracuj\u00ed na z\u00e1klad\u011b p\u0159edem definovan\u00fdch pravidel, kter\u00e1 obvykle nastavuje administr\u00e1tor s\u00edt\u011b, a ka\u017ed\u00fd p\u0159\u00edchoz\u00ed paket je n\u00e1sledn\u011b klasifikov\u00e1n podle t\u011bchto pravidel, p\u0159i\u010dem\u017e na z\u00e1klad\u011b klasifikace m\u016f\u017ee b\u00fdt paket odesl\u00e1n na dal\u0161\u00ed m\u00edsto ur\u010den\u00ed, ti\u0161e zahozen, odm\u00edtnut s odesl\u00e1n\u00edm ICMP zpr\u00e1vy o odm\u00edtnut\u00ed, nebo p\u0159ed odesl\u00e1n\u00edm d\u00e1le upraven, nap\u0159\u00edklad pomoc\u00ed NAT.",
        incorrect:
          "Packet filtry funguj\u00ed na principu automatick\u00e9ho u\u010den\u00ed a adaptace na s\u00ed\u0165ov\u00fd provoz, bez nutnosti definov\u00e1n\u00ed explicitn\u00edch pravidel administr\u00e1torem, p\u0159i\u010dem\u017e ka\u017ed\u00fd p\u0159\u00edchoz\u00ed paket je analyzov\u00e1n a na z\u00e1klad\u011b heuristick\u00e9 anal\u00fdzy je bu\u010f propu\u0161t\u011bn, nebo automaticky zahozen bez mo\u017enosti dal\u0161\u00ed manipulace \u010di notifikace o odm\u00edtnut\u00ed odes\u00edlateli.",
        sectionNumber: "9.3.6",
        sectionTitle: "Firewalls",
      },
      {
        uuid: "0849c2c0-88cd-4a31-b5c9-4241e62db155",
        correct:
          "Pro snaz\u0161\u00ed zapamatov\u00e1n\u00ed a orientaci v s\u00ed\u0165ov\u00e9 komunikaci se m\u00edsto numerick\u00fdch adres, kter\u00e9 jsou pro \u010dlov\u011bka obt\u00ed\u017en\u011b zapamatovateln\u00e9, pou\u017e\u00edvaj\u00ed hostitelsk\u00e1 jm\u00e9na. Tato jm\u00e9na mohou b\u00fdt ulo\u017eena v souboru, nap\u0159\u00edklad \u2039/etc/hosts\u203a, co\u017e je v\u0161ak praktick\u00e9 pouze pro velmi mal\u00e9 s\u00edt\u011b s maxim\u00e1ln\u011b n\u011bkolika po\u010d\u00edta\u010di, jeliko\u017e internet se skl\u00e1d\u00e1 z milion\u016f za\u0159\u00edzen\u00ed.",
        incorrect:
          "Pro snaz\u0161\u00ed zapamatov\u00e1n\u00ed a orientaci v s\u00ed\u0165ov\u00e9 komunikaci se m\u00edsto hostitelsk\u00fdch jmen, kter\u00e1 jsou pro \u010dlov\u011bka obt\u00ed\u017en\u011b zapamatovateln\u00e1, pou\u017e\u00edvaj\u00ed numerick\u00e9 adresy.  Tato jm\u00e9na se obvykle neukl\u00e1daj\u00ed v souboru, nap\u0159\u00edklad \u2039/etc/hosts\u203a, jeliko\u017e tento soubor je praktick\u00fd pro rozs\u00e1hl\u00e9 s\u00edt\u011b s miliony po\u010d\u00edta\u010d\u016f, co\u017e je typick\u00e9 pro modern\u00ed internetovou infrastrukturu.",
        sectionNumber: "9.3.7",
        sectionTitle: "Name Resolution",
      },
      {
        uuid: "9b52ac42-f2fd-40e1-9649-2fafca4f3ba0",
        correct:
          'Pro efektivn\u00ed spr\u00e1vu a vyhled\u00e1v\u00e1n\u00ed hostitelsk\u00fdch jmen v rozs\u00e1hl\u00fdch s\u00edt\u00edch, jako je internet s miliony po\u010d\u00edta\u010d\u016f, je nezbytn\u00fd syst\u00e9m, kter\u00fd umo\u017e\u0148uje rychl\u00e9 aktualizace a dotazy. Tento syst\u00e9m, \u010dasto ozna\u010dovan\u00fd jako adres\u00e1\u0159 nebo "\u017elut\u00e9 str\u00e1nky" pro po\u010d\u00edta\u010de, mus\u00ed b\u00fdt \u0161k\u00e1lovateln\u00fd, aby zvl\u00e1dl obrovsk\u00e9 mno\u017estv\u00ed jmen a neust\u00e1l\u00e9 zm\u011bny v s\u00ed\u0165ov\u00e9 infrastruktu\u0159e.',
        incorrect:
          "Pro efektivn\u00ed spr\u00e1vu a vyhled\u00e1v\u00e1n\u00ed hostitelsk\u00fdch jmen v rozs\u00e1hl\u00fdch s\u00edt\u00edch, jako je internet s miliony po\u010d\u00edta\u010d\u016f, je nezbytn\u00fd syst\u00e9m, kter\u00fd vy\u017eaduje manu\u00e1ln\u00ed a pomal\u00e9 aktualizace a dotazy. Tento syst\u00e9m, \u010dasto ozna\u010dovan\u00fd jako statick\u00fd seznam jmen, nemus\u00ed b\u00fdt \u0161k\u00e1lovateln\u00fd a je vhodn\u00fd pro spr\u00e1vu mal\u00e9ho mno\u017estv\u00ed jmen a stabiln\u00ed s\u00ed\u0165ov\u00e9 infrastruktury.",
        sectionNumber: "9.3.7",
        sectionTitle: "Name Resolution",
      },
      {
        uuid: "4d658fd5-e733-4222-bbc0-978ffc0caad8",
        correct:
          "Syst\u00e9m DNS (Domain Name System) je zalo\u017een na hierarchick\u00e9m protokolu pro p\u0159eklad jmen, kter\u00fd funguje nad protokoly TCP nebo UDP, p\u0159i\u010dem\u017e dom\u00e9nov\u00e1 jm\u00e9na jsou rozd\u011blena na \u010d\u00e1sti odd\u011blen\u00e9 te\u010dkami, co\u017e vytv\u00e1\u0159\u00ed distribuovanou datab\u00e1zovou strukturu, kter\u00e1 umo\u017e\u0148uje efektivn\u00ed spr\u00e1vu a \u0161k\u00e1lovatelnost na internetu.",
        incorrect:
          "Syst\u00e9m DNS (Domain Name System) je zalo\u017een na plo\u0161n\u00e9m protokolu pro p\u0159eklad jmen, kter\u00fd funguje v\u00fdhradn\u011b nad protokolem TCP, p\u0159i\u010dem\u017e dom\u00e9nov\u00e1 jm\u00e9na jsou rozd\u011blena na \u010d\u00e1sti odd\u011blen\u00e9 \u010d\u00e1rkami, co\u017e vytv\u00e1\u0159\u00ed centralizovanou datab\u00e1zovou strukturu, kter\u00e1 vy\u017eaduje okam\u017eitou aktualizaci dat pro zaji\u0161t\u011bn\u00ed konzistence.",
        sectionNumber: "9.3.8",
        sectionTitle: "DNS: Domain Name System",
      },
      {
        uuid: "383fdf01-1602-41a1-9308-313330cd8ff2",
        correct:
          "Proces p\u0159ekladu dom\u00e9nov\u00e9ho jm\u00e9na na IP adresu v DNS za\u010d\u00edn\u00e1 dotazem na ko\u0159enov\u00e9 servery, kter\u00e9 n\u00e1sledn\u011b odkazuj\u00ed na servery pro dom\u00e9nu nejvy\u0161\u0161\u00ed \u00farovn\u011b, a tento hierarchick\u00fd proces se opakuje postupn\u011b sm\u011brem doleva, dokud se nedos\u00e1hne autoritativn\u00edho serveru pro danou dom\u00e9nu, kter\u00fd poskytne hledanou IP adresu.",
        incorrect:
          "Proces p\u0159ekladu dom\u00e9nov\u00e9ho jm\u00e9na na IP adresu v DNS za\u010d\u00edn\u00e1 dotazem na lok\u00e1ln\u00ed servery, kter\u00e9 p\u0159\u00edmo obsahuj\u00ed kompletn\u00ed datab\u00e1zi v\u0161ech dom\u00e9nov\u00fdch jmen, a v p\u0159\u00edpad\u011b, \u017ee z\u00e1znam nen\u00ed nalezen, dotaz se \u0161\u00ed\u0159\u00ed plo\u0161n\u011b mezi v\u0161echny DNS servery v s\u00edti, dokud se nenajde server s po\u017eadovan\u00fdm z\u00e1znamem.",
        sectionNumber: "9.3.8",
        sectionTitle: "DNS: Domain Name System",
      },
      {
        uuid: "781221bf-ea31-4f41-89d7-9d3a8af746bb",
        correct:
          "Rekurzivn\u00ed DNS servery hraj\u00ed kl\u00ed\u010dovou roli v DNS t\u00edm, \u017ee prov\u00e1d\u011bj\u00ed rekurzivn\u00ed dotazy jm\u00e9nem klient\u016f, \u010d\u00edm\u017e klienti nemus\u00ed sami proch\u00e1zet celou hierarchii DNS server\u016f, a tyto servery tak\u00e9 efektivn\u011b ukl\u00e1daj\u00ed v\u00fdsledky dotaz\u016f do cache, co\u017e v\u00fdrazn\u011b zrychluje odezvu na opakovan\u00e9 dotazy a sni\u017euje z\u00e1t\u011b\u017e autoritativn\u00edch server\u016f.",
        incorrect:
          "Iterativn\u00ed DNS servery hraj\u00ed kl\u00ed\u010dovou roli v DNS t\u00edm, \u017ee prov\u00e1d\u011bj\u00ed iterativn\u00ed dotazy jm\u00e9nem klient\u016f, \u010d\u00edm\u017e klienti mus\u00ed sami aktivn\u011b proch\u00e1zet celou hierarchii DNS server\u016f a skl\u00e1dat odpov\u011b\u010f z d\u00edl\u010d\u00edch informac\u00ed, a tyto servery z\u00e1m\u011brn\u011b neukl\u00e1daj\u00ed v\u00fdsledky dotaz\u016f do cache, aby byla zaji\u0161t\u011bna maxim\u00e1ln\u00ed aktu\u00e1lnost dat za cenu pomalej\u0161\u00ed odezvy.",
        sectionNumber: "9.3.8",
        sectionTitle: "DNS: Domain Name System",
      },
      {
        uuid: "d5903991-ca43-4771-b503-a7af78f0ef9b",
        correct:
          "P\u016fvodn\u00ed koncept u\u017eivatele v opera\u010dn\u00edch syst\u00e9mech vznikl z pot\u0159eby odd\u011blit \u00fa\u010dty pro r\u016fzn\u00e9 lidi, p\u0159i\u010dem\u017e ka\u017ed\u00fd u\u017eivatel reprezentoval konkr\u00e9tn\u00ed osobu. V modern\u00edch syst\u00e9mech se v\u0161ak pojem u\u017eivatele roz\u0161\u00ed\u0159il a stal se obecn\u011bj\u0161\u00ed abstrakc\u00ed, kter\u00e1 zahrnuje nejen lidsk\u00e9 u\u017eivatele, ale i jin\u00e9 entity vy\u017eaduj\u00edc\u00ed vlastnictv\u00ed a \u0159\u00edzen\u00ed p\u0159\u00edstupu.",
        incorrect:
          "P\u016fvodn\u00ed koncept u\u017eivatele v opera\u010dn\u00edch syst\u00e9mech byl v\u017edy zam\u00fd\u0161len jako obecn\u00e1 abstrakce pokr\u00fdvaj\u00edc\u00ed r\u016fzn\u00e9 entity, a nikdy nebyl prim\u00e1rn\u011b spojen s reprezentac\u00ed jednotliv\u00fdch lidsk\u00fdch u\u017eivatel\u016f. Modern\u00ed syst\u00e9my pouze zd\u016fraznily tuto p\u016fvodn\u00ed my\u0161lenku, ani\u017e by do\u0161lo k v\u00fdznamn\u00e9mu roz\u0161\u00ed\u0159en\u00ed konceptu u\u017eivatele nad r\u00e1mec jeho p\u016fvodn\u00edho z\u00e1m\u011bru.",
        sectionNumber: "9.4.1",
        sectionTitle: "Users",
      },
      {
        uuid: "ff01d752-3994-41bb-9548-1cffc6db0d58",
        correct:
          "V modern\u00edch opera\u010dn\u00edch syst\u00e9mech je koncept u\u017eivatele kl\u00ed\u010dov\u00fd pro spr\u00e1vu vlastnictv\u00ed a \u0159\u00edzen\u00ed p\u0159\u00edstupu k syst\u00e9mov\u00fdm zdroj\u016fm. U\u017eivatel slou\u017e\u00ed jako z\u00e1kladn\u00ed jednotka, na kterou se vztahuj\u00ed vlastnick\u00e1 pr\u00e1va a p\u0159\u00edstupov\u00e1 opr\u00e1vn\u011bn\u00ed, co\u017e umo\u017e\u0148uje detailn\u00ed kontrolu nad t\u00edm, kdo a jak\u00fdm zp\u016fsobem m\u016f\u017ee s dan\u00fdmi zdroji pracovat.",
        incorrect:
          "V modern\u00edch opera\u010dn\u00edch syst\u00e9mech koncept u\u017eivatele nem\u00e1 \u017e\u00e1dn\u00fd vztah ke spr\u00e1v\u011b vlastnictv\u00ed a \u0159\u00edzen\u00ed p\u0159\u00edstupu k syst\u00e9mov\u00fdm zdroj\u016fm. Vlastnictv\u00ed a p\u0159\u00edstupov\u00e1 opr\u00e1vn\u011bn\u00ed jsou \u0159\u00edzeny v\u00fdhradn\u011b na \u00farovni proces\u016f a samotn\u00fd koncept u\u017eivatele slou\u017e\u00ed pouze k identifikaci spu\u0161t\u011bn\u00fdch aplikac\u00ed, nikoliv k definov\u00e1n\u00ed pr\u00e1v spojen\u00fdch s daty a zdroji.",
        sectionNumber: "9.4.1",
        sectionTitle: "Users",
      },
      {
        uuid: "9f23834e-7839-4e53-917c-e188c2cec240",
        correct:
          "Z pohledu opera\u010dn\u00edch syst\u00e9m\u016f je po\u010d\u00edta\u010d \u010dasto vn\u00edm\u00e1n jako n\u00e1kladn\u00fd zdroj, a proto je efektivita jeho vyu\u017eit\u00ed kl\u00ed\u010dov\u00fdm aspektem. Vzhledem k tomu, \u017ee jeden u\u017eivatel z\u0159\u00eddkakdy pln\u011b vyu\u017eije v\u00fdpo\u010detn\u00ed kapacitu modern\u00edho po\u010d\u00edta\u010de, st\u00e1v\u00e1 se sd\u00edlen\u00ed zdroj\u016f mezi v\u00edce u\u017eivateli z\u00e1sadn\u00edm. Toto sd\u00edlen\u00ed dat a zdroj\u016f v prost\u0159ed\u00ed s v\u00edce u\u017eivateli pak p\u0159irozen\u011b vy\u017eaduje implementaci mechanism\u016f pro \u0159\u00edzen\u00ed p\u0159\u00edstupu, aby se zajistila ochrana dat a soukrom\u00ed jednotliv\u00fdch u\u017eivatel\u016f p\u0159ed neopr\u00e1vn\u011bn\u00fdm p\u0159\u00edstupem.",
        incorrect:
          "Z pohledu opera\u010dn\u00edch syst\u00e9m\u016f je po\u010d\u00edta\u010d vn\u00edm\u00e1n jako levn\u00fd a snadno dostupn\u00fd zdroj, a proto efektivita jeho vyu\u017eit\u00ed nen\u00ed kl\u00ed\u010dov\u00fdm aspektem.  Vzhledem k tomu, \u017ee jeden u\u017eivatel typicky pln\u011b vyu\u017eije v\u00fdpo\u010detn\u00ed kapacitu modern\u00edho po\u010d\u00edta\u010de, sd\u00edlen\u00ed zdroj\u016f mezi v\u00edce u\u017eivateli se st\u00e1v\u00e1 zbyte\u010dn\u00fdm. Proto sd\u00edlen\u00ed dat a zdroj\u016f v prost\u0159ed\u00ed s v\u00edce u\u017eivateli nevy\u017eaduje implementaci mechanism\u016f pro \u0159\u00edzen\u00ed p\u0159\u00edstupu, jeliko\u017e se p\u0159edpokl\u00e1d\u00e1 pln\u00e1 d\u016fv\u011bra mezi v\u0161emi u\u017eivateli syst\u00e9mu.",
        sectionNumber: "9.4.2",
        sectionTitle: "Computer Sharing",
      },
      {
        uuid: "151461b0-9d02-44da-9e10-c8c16b1d10fa",
        correct:
          "Zat\u00edmco efektivn\u00ed vyu\u017eit\u00ed po\u010d\u00edta\u010dov\u00fdch zdroj\u016f bylo v\u00fdznamn\u00fdm hnac\u00edm motorem pro zaveden\u00ed multi-tenancy v po\u010d\u00edta\u010dov\u00fdch syst\u00e9mech, kl\u00ed\u010dov\u00fdm faktorem, kter\u00fd nakonec vyvolal pot\u0159ebu robustn\u00edho \u0159\u00edzen\u00ed p\u0159\u00edstupu, byl n\u00e1stup glob\u00e1ln\u00edch sd\u00edlen\u00fdch souborov\u00fdch syst\u00e9m\u016f. U\u017eivatel\u00e9 toti\u017e nemaj\u00ed nutn\u011b d\u016fvod d\u016fv\u011b\u0159ovat v\u0161em ostatn\u00edm u\u017eivatel\u016fm syst\u00e9mu, pokud jde o p\u0159\u00edstup k jejich soubor\u016fm a dat\u016fm ulo\u017een\u00fdm v t\u011bchto sd\u00edlen\u00fdch syst\u00e9mech.",
        incorrect:
          "Zat\u00edmco efektivn\u00ed vyu\u017eit\u00ed po\u010d\u00edta\u010dov\u00fdch zdroj\u016f bylo okrajov\u00fdm hnac\u00edm motorem pro zaveden\u00ed multi-tenancy v po\u010d\u00edta\u010dov\u00fdch syst\u00e9mech, kl\u00ed\u010dov\u00fdm faktorem, kter\u00fd nakonec vyvolal pot\u0159ebu robustn\u00edho \u0159\u00edzen\u00ed p\u0159\u00edstupu, nebyl n\u00e1stup glob\u00e1ln\u00edch sd\u00edlen\u00fdch souborov\u00fdch syst\u00e9m\u016f, ale sp\u00ed\u0161e snaha o centralizovanou spr\u00e1vu u\u017eivatelsk\u00fdch \u00fa\u010dt\u016f. U\u017eivatel\u00e9 toti\u017e pln\u011b d\u016fv\u011b\u0159uj\u00ed v\u0161em ostatn\u00edm u\u017eivatel\u016fm syst\u00e9mu, pokud jde o p\u0159\u00edstup k jejich soubor\u016fm a dat\u016fm ulo\u017een\u00fdm v t\u011bchto sd\u00edlen\u00fdch syst\u00e9mech.",
        sectionNumber: "9.4.2",
        sectionTitle: "Computer Sharing",
      },
      {
        uuid: "2e603721-1fbf-4b3f-a010-d91aed12a133",
        correct:
          "Standardn\u00ed model \u0159\u00edzen\u00ed p\u0159\u00edstupu v opera\u010dn\u00edch syst\u00e9mech se to\u010d\u00ed kolem konceptu vlastnictv\u00ed objekt\u016f, p\u0159i\u010dem\u017e mezi objekty, kter\u00e9 mohou b\u00fdt vlastn\u011bny, pat\u0159\u00ed prim\u00e1rn\u011b soubory a procesy, a vlastn\u00edk objektu m\u00e1 pr\u00e1va s objektem manipulovat a z\u00e1rove\u0148 nese ur\u010dit\u00e9 povinnosti spojen\u00e9 s kv\u00f3tami.",
        incorrect:
          "Standardn\u00ed model \u0159\u00edzen\u00ed p\u0159\u00edstupu v opera\u010dn\u00edch syst\u00e9mech se to\u010d\u00ed kolem konceptu vlastnictv\u00ed objekt\u016f, p\u0159i\u010dem\u017e mezi objekty, kter\u00e9 mohou b\u00fdt vlastn\u011bny, pat\u0159\u00ed prim\u00e1rn\u011b pouze procesy, a vlastn\u00edk objektu m\u00e1 pr\u00e1va s objektem manipulovat, ale nenese \u017e\u00e1dn\u00e9 povinnosti spojen\u00e9 s kv\u00f3tami.",
        sectionNumber: "9.4.3",
        sectionTitle: "Ownership",
      },
      {
        uuid: "f5267187-452f-4511-8b99-5d4d6f135c18",
        correct:
          "Procesy v opera\u010dn\u00edm syst\u00e9mu jsou \u00fazce spjaty s u\u017eivateli, proto\u017ee ka\u017ed\u00fd proces pat\u0159\u00ed ur\u010dit\u00e9mu u\u017eivateli a jedn\u00e1 jeho jm\u00e9nem, p\u0159i\u010dem\u017e proces m\u00e1 stejn\u00e1 opr\u00e1vn\u011bn\u00ed jako jeho vlastn\u00edk, co\u017e pro proces p\u0159edstavuje jak omezen\u00ed, tak i mo\u017enosti v z\u00e1vislosti na kontextu.",
        incorrect:
          "Procesy v opera\u010dn\u00edm syst\u00e9mu jsou \u00fazce spjaty s u\u017eivateli, proto\u017ee ka\u017ed\u00fd proces pat\u0159\u00ed ur\u010dit\u00e9mu u\u017eivateli a jedn\u00e1 jeho jm\u00e9nem, p\u0159i\u010dem\u017e proces m\u00e1 v\u017edy vy\u0161\u0161\u00ed opr\u00e1vn\u011bn\u00ed ne\u017e jeho vlastn\u00edk, co\u017e pro proces p\u0159edstavuje pouze dal\u0161\u00ed mo\u017enosti a \u017e\u00e1dn\u00e1 omezen\u00ed.",
        sectionNumber: "9.4.3",
        sectionTitle: "Ownership",
      },
      {
        uuid: "07fab90c-91c7-4a40-b849-ed6ff60ecec7",
        correct:
          "Stejn\u011b jako procesy, i soubory v opera\u010dn\u00edm syst\u00e9mu jsou objekty, kter\u00e9 podl\u00e9haj\u00ed vlastnictv\u00ed, av\u0161ak na rozd\u00edl od proces\u016f jsou soubory pasivn\u00ed, a proto vlastnictv\u00ed souboru d\u00e1v\u00e1 vlastn\u00edkovi specifick\u00e1 pr\u00e1va, zejm\u00e9na pr\u00e1vo \u010d\u00edst soubor, zapisovat do n\u011bj a m\u011bnit p\u0159\u00edstupov\u00e1 pr\u00e1va nebo vlastnictv\u00ed souboru.",
        incorrect:
          "Stejn\u011b jako procesy, i soubory v opera\u010dn\u00edm syst\u00e9mu jsou objekty, kter\u00e9 podl\u00e9haj\u00ed vlastnictv\u00ed, a stejn\u011b jako procesy jsou soubory aktivn\u00ed, a proto vlastnictv\u00ed souboru d\u00e1v\u00e1 vlastn\u00edkovi pr\u00e1va spou\u0161t\u011bt k\u00f3d v kontextu souboru a m\u011bnit vlastnictv\u00ed procesu, kter\u00fd soubor vytvo\u0159il.",
        sectionNumber: "9.4.3",
        sectionTitle: "Ownership",
      },
      {
        uuid: "5be11710-a14e-4f66-9a6d-0b0dd436cfa0",
        correct:
          "V modelu diskre\u010dn\u00ed kontroly p\u0159\u00edstupu, kter\u00fd je b\u011b\u017en\u011b pou\u017e\u00edv\u00e1n v mnoha opera\u010dn\u00edch syst\u00e9mech, maj\u00ed vlastn\u00edci objekt\u016f, jako jsou soubory, pravomoc rozhodovat o tom, kdo a jak\u00fdm zp\u016fsobem m\u016f\u017ee s t\u011bmito objekty interagovat, co\u017e jim d\u00e1v\u00e1 zna\u010dnou flexibilitu v \u0159\u00edzen\u00ed p\u0159\u00edstupu k jejich dat\u016fm.",
        incorrect:
          "V modelu diskre\u010dn\u00ed kontroly p\u0159\u00edstupu, kter\u00fd je b\u011b\u017en\u011b pou\u017e\u00edv\u00e1n v mnoha opera\u010dn\u00edch syst\u00e9mech, m\u00e1 centr\u00e1ln\u00ed autorita pravomoc rozhodovat o tom, kdo a jak\u00fdm zp\u016fsobem m\u016f\u017ee s objekty interagovat, co\u017e jim d\u00e1v\u00e1 zna\u010dnou flexibilitu v \u0159\u00edzen\u00ed p\u0159\u00edstupu k dat\u016fm.",
        sectionNumber: "9.4.4",
        sectionTitle: "Access Control Models",
      },
      {
        uuid: "c5df5735-237b-494b-b03a-29c6573d4f7a",
        correct:
          "V modelu povinn\u00e9 kontroly p\u0159\u00edstupu, kter\u00fd se \u010dasto uplat\u0148uje v prost\u0159ed\u00edch s vysok\u00fdmi n\u00e1roky na bezpe\u010dnost, je rozhodov\u00e1n\u00ed o p\u0159\u00edstupov\u00fdch pr\u00e1vech sv\u011b\u0159eno centr\u00e1ln\u00ed autorit\u011b, nikoli jednotliv\u00fdm u\u017eivatel\u016fm, co\u017e zaji\u0161\u0165uje jednotnou a vynucenou bezpe\u010dnostn\u00ed politiku v cel\u00e9m syst\u00e9mu.",
        incorrect:
          "V modelu diskre\u010dn\u00ed kontroly p\u0159\u00edstupu, kter\u00fd se \u010dasto uplat\u0148uje v prost\u0159ed\u00edch s vysok\u00fdmi n\u00e1roky na bezpe\u010dnost, je rozhodov\u00e1n\u00ed o p\u0159\u00edstupov\u00fdch pr\u00e1vech sv\u011b\u0159eno vlastn\u00edk\u016fm objekt\u016f, nikoli centr\u00e1ln\u00ed autorit\u011b, co\u017e vede k bezpe\u010dnostn\u00ed politice, kter\u00e1 je sp\u00ed\u0161e sb\u00edrkou pravidel definovan\u00fdch r\u016fzn\u00fdmi u\u017eivateli ne\u017e jednotn\u00fdm dokumentem.",
        sectionNumber: "9.4.4",
        sectionTitle: "Access Control Models",
      },
      {
        uuid: "057499f4-6d7d-496e-85c5-253b2deedabe",
        correct:
          "Zat\u00edmco v obou modelech, diskre\u010dn\u00edm i povinn\u00e9m, opera\u010dn\u00ed syst\u00e9m rozhoduje o ud\u011blen\u00ed nebo zam\u00edtnut\u00ed p\u0159\u00edstupu na z\u00e1klad\u011b politiky \u0159\u00edzen\u00ed p\u0159\u00edstupu, pouze v p\u0159\u00edpad\u011b povinn\u00e9 kontroly p\u0159\u00edstupu lze tuto politiku pova\u017eovat za koherentn\u00ed a ucelen\u00fd dokument, na rozd\u00edl od diskre\u010dn\u00ed kontroly, kde je politika sp\u00ed\u0161e souhrnem pravidel stanoven\u00fdch jednotliv\u00fdmi vlastn\u00edky.",
        incorrect:
          "Zat\u00edmco v obou modelech, diskre\u010dn\u00edm i povinn\u00e9m, opera\u010dn\u00ed syst\u00e9m rozhoduje o ud\u011blen\u00ed nebo zam\u00edtnut\u00ed p\u0159\u00edstupu na z\u00e1klad\u011b politiky \u0159\u00edzen\u00ed p\u0159\u00edstupu, pouze v p\u0159\u00edpad\u011b diskre\u010dn\u00ed kontroly p\u0159\u00edstupu lze tuto politiku pova\u017eovat za koherentn\u00ed a ucelen\u00fd dokument, na rozd\u00edl od povinn\u00e9 kontroly, kde je politika sp\u00ed\u0161e souhrnem pravidel stanoven\u00fdch jednotliv\u00fdmi vlastn\u00edky.",
        sectionNumber: "9.4.4",
        sectionTitle: "Access Control Models",
      },
      {
        uuid: "cdd8e7e3-4507-4593-b07b-4567137c5482",
        correct:
          "V modern\u00edch opera\u010dn\u00edch syst\u00e9mech se u\u017eivatelsk\u00e1 abstrakce uk\u00e1zala jako velmi u\u017eite\u010dn\u00e1 koncepce, umo\u017e\u0148uj\u00edc\u00ed syst\u00e9mov\u00fdm slu\u017eb\u00e1m a aplikac\u00edm b\u011b\u017eet pod specifick\u00fdmi, dedikovan\u00fdmi u\u017eivatelsk\u00fdmi \u00fa\u010dty. Tato praxe dovoluje slu\u017eb\u00e1m vlastnit soubory a procesy pod vlastn\u00ed identitou a z\u00e1rove\u0148 umo\u017e\u0148uje omezit jejich p\u0159\u00edstup k dal\u0161\u00edm syst\u00e9mov\u00fdm zdroj\u016fm a funkc\u00edm pomoc\u00ed stejn\u00fdch mechanism\u016f, kter\u00e9 se aplikuj\u00ed na standardn\u00ed u\u017eivatele, \u010d\u00edm\u017e se zvy\u0161uje bezpe\u010dnost a stabilita cel\u00e9ho syst\u00e9mu.",
        incorrect:
          "V modern\u00edch opera\u010dn\u00edch syst\u00e9mech se u\u017eivatelsk\u00e1 abstrakce pova\u017euje za zastaralou a nepraktickou, proto\u017ee komplikuje spr\u00e1vu syst\u00e9mu a zbyte\u010dn\u011b omezuje v\u00fdkon syst\u00e9mov\u00fdch slu\u017eeb a aplikac\u00ed. Syst\u00e9mov\u00e9 slu\u017eby by m\u011bly b\u011b\u017eet s maxim\u00e1ln\u00edmi pr\u00e1vy pro optim\u00e1ln\u00ed funk\u010dnost a efektivitu, a omezov\u00e1n\u00ed jejich p\u0159\u00edstupu k syst\u00e9mov\u00fdm zdroj\u016fm a funkc\u00edm je kontraproduktivn\u00ed a sni\u017euje celkovou v\u00fdkonnost a flexibilitu opera\u010dn\u00edho syst\u00e9mu, p\u0159i\u010dem\u017e bezpe\u010dnost by m\u011bla b\u00fdt \u0159e\u0161ena v\u00fdhradn\u011b na \u00farovni j\u00e1dra.",
        sectionNumber: "9.4.5",
        sectionTitle: "(Virtual) System Users",
      },
      {
        uuid: "0412d65d-d21a-4ff9-b064-3927dbc2bdcd",
        correct:
          "B\u011b\u017enou prax\u00ed v opera\u010dn\u00edch syst\u00e9mech je, \u017ee syst\u00e9mov\u00e9 slu\u017eby, a\u0165 u\u017e se jedn\u00e1 o slu\u017eby na \u00farovni syst\u00e9mu nebo aplikac\u00ed, jsou spou\u0161t\u011bny pod speci\u00e1ln\u011b vytvo\u0159en\u00fdmi u\u017eivatelsk\u00fdmi \u00fa\u010dty. Toto \u0159e\u0161en\u00ed umo\u017e\u0148uje, aby tyto slu\u017eby vlastnily soubory a dal\u0161\u00ed syst\u00e9mov\u00e9 zdroje, a spou\u0161t\u011bly procesy pod svou vlastn\u00ed identitou. D\u00e1le to znamen\u00e1, \u017ee tyto slu\u017eby mohou b\u00fdt omezeny v p\u0159\u00edstupu k dal\u0161\u00edm \u010d\u00e1stem opera\u010dn\u00edho syst\u00e9mu pomoc\u00ed stejn\u00fdch mechanism\u016f, kter\u00e9 se pou\u017e\u00edvaj\u00ed pro standardn\u00ed u\u017eivatelsk\u00e9 \u00fa\u010dty, \u010d\u00edm\u017e se zvy\u0161uje modularita a bezpe\u010dnost syst\u00e9mu.",
        incorrect:
          "V opera\u010dn\u00edch syst\u00e9mech se syst\u00e9mov\u00e9 slu\u017eby spou\u0161t\u011bj\u00ed v\u00fdhradn\u011b pod privilegovan\u00fdm u\u017eivatelsk\u00fdm \u00fa\u010dtem root, aby se zajistila maxim\u00e1ln\u00ed mo\u017en\u00e1 kontrola a p\u0159\u00edstup ke v\u0161em syst\u00e9mov\u00fdm zdroj\u016fm. Pou\u017e\u00edv\u00e1n\u00ed speci\u00e1ln\u00edch u\u017eivatelsk\u00fdch \u00fa\u010dt\u016f pro slu\u017eby je pova\u017eov\u00e1no za zbyte\u010dn\u00e9 komplikov\u00e1n\u00ed spr\u00e1vy syst\u00e9mu a za potenci\u00e1ln\u00ed bezpe\u010dnostn\u00ed riziko, proto\u017ee by mohlo v\u00e9st k nekonzistenc\u00edm v opr\u00e1vn\u011bn\u00edch a p\u0159\u00edstupov\u00fdch pr\u00e1vech, a proto se preferuje jednotn\u00fd p\u0159\u00edstup s vyu\u017eit\u00edm \u00fa\u010dtu root pro v\u0161echny syst\u00e9mov\u00e9 procesy.",
        sectionNumber: "9.4.5",
        sectionTitle: "(Virtual) System Users",
      },
      {
        uuid: "b5860cf6-75bf-4e57-b445-5e670d58d0a2",
        correct:
          "Princip nejmen\u0161\u00edho privilegia, aplikovateln\u00fd jak na softwarov\u00e9 komponenty, tak na lidsk\u00e9 u\u017eivatele, je kl\u00ed\u010dovou z\u00e1sadou n\u00e1vrhu bezpe\u010dn\u00fdch syst\u00e9m\u016f, kter\u00e1 zd\u016fraz\u0148uje, \u017ee by subjekt\u016fm m\u011bla b\u00fdt ud\u011blena pouze ta opr\u00e1vn\u011bn\u00ed, kter\u00e1 jsou nezbytn\u011b nutn\u00e1 pro vykon\u00e1v\u00e1n\u00ed jejich specifick\u00fdch \u00fakol\u016f, a to bez ohledu na kombinaci subjektu a objektu, \u010d\u00edm\u017e se minimalizuje potenci\u00e1ln\u00ed rozsah \u0161kod zp\u016fsoben\u00fdch chybami nebo bezpe\u010dnostn\u00edmi incidenty.",
        incorrect:
          "Princip nejmen\u0161\u00edho privilegia se t\u00fdk\u00e1 v\u00fdhradn\u011b softwarov\u00fdch komponent a nebere v \u00favahu lidsk\u00e9 u\u017eivatele syst\u00e9mu, p\u0159i\u010dem\u017e se zam\u011b\u0159uje na ud\u011blov\u00e1n\u00ed co nej\u0161ir\u0161\u00edch opr\u00e1vn\u011bn\u00ed v\u0161em subjekt\u016fm, aby se maximalizovala flexibilita a efektivita syst\u00e9mu, i kdy\u017e to m\u016f\u017ee v\u00e9st k potenci\u00e1ln\u011b v\u011bt\u0161\u00edmu rozsahu \u0161kod v p\u0159\u00edpad\u011b chyb nebo bezpe\u010dnostn\u00edch kompromitac\u00ed, proto\u017ee p\u0159\u00edstup k objekt\u016fm by m\u011bl b\u00fdt co nejm\u00e9n\u011b omezen.",
        sectionNumber: "9.4.6",
        sectionTitle: "Principle of Least Privilege",
      },
      {
        uuid: "fa90dfa4-bf4f-4457-92e7-a7798d1b88d7",
        correct:
          "Z\u00e1kladn\u00edm zd\u016fvodn\u011bn\u00edm principu nejmen\u0161\u00edho privilegia je proaktivn\u00ed omezen\u00ed dopadu chyb, a\u0165 u\u017e se jedn\u00e1 o ne\u00famysln\u00e9 chyby u\u017eivatel\u016f nebo o \u00fasp\u011b\u0161n\u00e9 pr\u016fniky do syst\u00e9mu, a to t\u00edm, \u017ee se zajist\u00ed, aby i v p\u0159\u00edpad\u011b selh\u00e1n\u00ed nebo \u00fatoku byl rozsah \u0161kod omezen pouze na ty objekty a zdroje, ke kter\u00fdm m\u011bl dan\u00fd subjekt skute\u010dn\u011b legitimn\u00ed a nezbytn\u00fd p\u0159\u00edstup, \u010d\u00edm\u017e se minimalizuj\u00ed celkov\u00e9 \u0161kody.",
        incorrect:
          "Z\u00e1kladn\u00edm c\u00edlem principu nejmen\u0161\u00edho privilegia je zv\u00fd\u0161en\u00ed u\u017eivatelsk\u00e9ho komfortu a zjednodu\u0161en\u00ed spr\u00e1vy syst\u00e9mu t\u00edm, \u017ee se u\u017eivatel\u016fm a softwarov\u00fdm komponent\u00e1m automaticky ud\u011bluj\u00ed \u0161irok\u00e1 opr\u00e1vn\u011bn\u00ed ke v\u0161em objekt\u016fm, co\u017e eliminuje pot\u0159ebu slo\u017eit\u00e9ho \u0159\u00edzen\u00ed p\u0159\u00edstupov\u00fdch pr\u00e1v a umo\u017e\u0148uje rychlej\u0161\u00ed a efektivn\u011bj\u0161\u00ed pr\u00e1ci, a\u010dkoli se t\u00edm potenci\u00e1ln\u011b zvy\u0161uje riziko rozs\u00e1hlej\u0161\u00edch \u0161kod v p\u0159\u00edpad\u011b bezpe\u010dnostn\u00edch incident\u016f.",
        sectionNumber: "9.4.6",
        sectionTitle: "Principle of Least Privilege",
      },
      {
        uuid: "8bdf9196-629b-4733-8c4c-2f88e9f8b92e",
        correct:
          "Princip principu nejmen\u0161\u00edho privilegia v opera\u010dn\u00edch syst\u00e9mech vede k n\u00e1vrhov\u00e9mu vzoru zn\u00e1m\u00e9mu jako odd\u011blen\u00ed privilegi\u00ed. Tento p\u0159\u00edstup spo\u010d\u00edv\u00e1 v rozd\u011blen\u00ed syst\u00e9mu na n\u011bkolik nez\u00e1visl\u00fdch komponent, z nich\u017e ka\u017ed\u00e1 pln\u00ed specifickou a z hlediska bezpe\u010dnosti autonomn\u00ed funkci. Tyto moduly jsou izolov\u00e1ny v sandboxech a komunikuj\u00ed skrze \u00fazce definovan\u00e1 rozhran\u00ed, \u010dasto zalo\u017een\u00e1 na interprocesn\u00ed komunikaci.",
        incorrect:
          "Princip principu nejmen\u0161\u00edho privilegia v opera\u010dn\u00edch syst\u00e9mech vede k n\u00e1vrhov\u00e9mu vzoru zn\u00e1m\u00e9mu jako odd\u011blen\u00ed privilegi\u00ed. Tento p\u0159\u00edstup spo\u010d\u00edv\u00e1 v integraci syst\u00e9mu do monolitick\u00e9ho celku, kde v\u0161echny komponenty sd\u00edlej\u00ed stejn\u00e1 privilegia a \u00fazce spolupracuj\u00ed.  Komponenty nejsou izolov\u00e1ny a komunikuj\u00ed skrze \u0161iroce otev\u0159en\u00e1 rozhran\u00ed, co\u017e maximalizuje v\u00fdkon syst\u00e9mu na \u00fakor bezpe\u010dnosti a modularity.",
        sectionNumber: "9.4.7",
        sectionTitle: "Privilege Separation",
      },
      {
        uuid: "43507596-318f-4e6d-991d-423561e6cdf2",
        correct:
          "Odd\u011blen\u00ed privilegi\u00ed, jako\u017eto n\u00e1vrhov\u00fd vzor vych\u00e1zej\u00edc\u00ed z principu nejmen\u0161\u00edho privilegia, se zam\u011b\u0159uje na rozd\u011blen\u00ed opera\u010dn\u00edho syst\u00e9mu do samostatn\u00fdch modul\u016f. Ka\u017ed\u00fd modul m\u00e1 jasn\u011b definovanou funkci a je navr\u017een tak, aby byl bezpe\u010dnostn\u011b sob\u011bsta\u010dn\u00fd. To umo\u017e\u0148uje minimalizovat potenci\u00e1ln\u00ed \u0161kody v p\u0159\u00edpad\u011b kompromitace jednoho modulu, proto\u017ee ostatn\u00ed moduly z\u016fst\u00e1vaj\u00ed izolovan\u00e9 a chr\u00e1n\u011bn\u00e9.",
        incorrect:
          "Odd\u011blen\u00ed privilegi\u00ed, jako\u017eto n\u00e1vrhov\u00fd vzor vych\u00e1zej\u00edc\u00ed z principu nejmen\u0161\u00edho privilegia, se zam\u011b\u0159uje na centralizaci opera\u010dn\u00edho syst\u00e9mu do jedin\u00e9ho modulu. Tento modul m\u00e1 komplexn\u00ed funkci a je navr\u017een tak, aby maximalizoval v\u00fdkon.  To umo\u017e\u0148uje maximalizovat efektivitu syst\u00e9mu, av\u0161ak v p\u0159\u00edpad\u011b kompromitace tohoto centr\u00e1ln\u00edho modulu jsou ohro\u017eeny v\u0161echny \u010d\u00e1sti syst\u00e9mu, proto\u017ee neexistuje izolace.",
        sectionNumber: "9.4.7",
        sectionTitle: "Privilege Separation",
      },
      {
        uuid: "977ea031-df3a-49a2-8ed4-bb2f07118a02",
        correct:
          "V syst\u00e9mech s odd\u011blen\u00edm privilegi\u00ed, komponenty opera\u010dn\u00edho syst\u00e9mu komunikuj\u00ed pomoc\u00ed interprocesn\u00ed komunikace (IPC) skrze \u00fazce definovan\u00e1 rozhran\u00ed. Tato rozhran\u00ed jsou navr\u017eena tak, aby umo\u017e\u0148ovala pouze nezbytnou v\u00fdm\u011bnu dat a \u0159\u00edzen\u00ed mezi moduly, \u010d\u00edm\u017e se minimalizuje mo\u017enost zneu\u017eit\u00ed komunikace pro neautorizovan\u00fd p\u0159\u00edstup nebo \u0161\u00ed\u0159en\u00ed chyb a zranitelnost\u00ed mezi komponentami.",
        incorrect:
          "V syst\u00e9mech s odd\u011blen\u00edm privilegi\u00ed, komponenty opera\u010dn\u00edho syst\u00e9mu komunikuj\u00ed p\u0159\u00edmo sd\u00edlenou pam\u011bt\u00ed bez definovan\u00fdch rozhran\u00ed. Tato p\u0159\u00edm\u00e1 komunikace je optimalizov\u00e1na pro maxim\u00e1ln\u00ed v\u00fdkon a minimalizaci latence, av\u0161ak umo\u017e\u0148uje libovolnou v\u00fdm\u011bnu dat a \u0159\u00edzen\u00ed mezi moduly, \u010d\u00edm\u017e se maximalizuje mo\u017enost zneu\u017eit\u00ed komunikace pro neautorizovan\u00fd p\u0159\u00edstup nebo \u0161\u00ed\u0159en\u00ed chyb a zranitelnost\u00ed mezi komponentami.",
        sectionNumber: "9.4.7",
        sectionTitle: "Privilege Separation",
      },
      {
        uuid: "e516d67c-477a-4777-876c-62ee08bdf192",
        correct:
          "Procesy v opera\u010dn\u00edm syst\u00e9mu pracuj\u00ed v odd\u011blen\u00fdch adresn\u00edch prostorech, co\u017e znamen\u00e1, \u017ee ka\u017ed\u00fd proces m\u00e1 p\u0159id\u011blen vlastn\u00ed izolovan\u00fd pam\u011b\u0165ov\u00fd prostor. Sd\u00edlen\u00ed pam\u011bti mezi procesy je mo\u017en\u00e9 pouze na z\u00e1klad\u011b explicitn\u00ed \u017e\u00e1dosti a souhlasu obou z\u00fa\u010dastn\u011bn\u00fdch proces\u016f, typicky prost\u0159ednictv\u00edm mechanism\u016f jako je sd\u00edlen\u00e1 pam\u011b\u0165, kter\u00e9 opera\u010dn\u00ed syst\u00e9m poskytuje a kontroluje.",
        incorrect:
          "Procesy v opera\u010dn\u00edm syst\u00e9mu standardn\u011b sd\u00edlej\u00ed jeden glob\u00e1ln\u00ed adresn\u00ed prostor, co\u017e umo\u017e\u0148uje implicitn\u00ed a neomezen\u00fd p\u0159\u00edstup k pam\u011bti v\u0161ech proces\u016f. Sd\u00edlen\u00ed pam\u011bti je implicitn\u00ed a nevy\u017eaduje \u017e\u00e1dnou speci\u00e1ln\u00ed konfiguraci nebo souhlas, co\u017e usnad\u0148uje komunikaci mezi procesy, ale z\u00e1rove\u0148 eliminuje pot\u0159ebu mechanism\u016f pro \u0159\u00edzen\u00ed p\u0159\u00edstupu k pam\u011bti.",
        sectionNumber: "9.4.8",
        sectionTitle: "Process Separation",
      },
      {
        uuid: "fbd5a99d-74c0-4342-80e5-5d00a826b7f6",
        correct:
          "Souborov\u00fd syst\u00e9m v opera\u010dn\u00edm syst\u00e9mu je navr\u017een jako glob\u00e1ln\u00ed a sd\u00edlen\u00fd jmenn\u00fd prostor, co\u017e znamen\u00e1, \u017ee v\u0161echny soubory a adres\u00e1\u0159e jsou uspo\u0159\u00e1d\u00e1ny do jednotn\u00e9 hierarchick\u00e9 struktury, kter\u00e1 je viditeln\u00e1 a p\u0159\u00edstupn\u00e1 v\u0161em u\u017eivatel\u016fm a proces\u016fm v syst\u00e9mu. Tato sd\u00edlen\u00e1 povaha umo\u017e\u0148uje snadn\u00e9 sd\u00edlen\u00ed dat a zdroj\u016f, ale vy\u017eaduje efektivn\u00ed mechanismy pro \u0159\u00edzen\u00ed p\u0159\u00edstupov\u00fdch pr\u00e1v.",
        incorrect:
          "Souborov\u00fd syst\u00e9m v opera\u010dn\u00edm syst\u00e9mu je implementov\u00e1n jako sada izolovan\u00fdch jmenn\u00fdch prostor\u016f pro ka\u017ed\u00e9ho u\u017eivatele, kde ka\u017ed\u00fd u\u017eivatel m\u00e1 vlastn\u00ed priv\u00e1tn\u00ed hierarchii soubor\u016f a adres\u00e1\u0159\u016f, kter\u00e1 nen\u00ed implicitn\u011b sd\u00edlena s ostatn\u00edmi u\u017eivateli. Sd\u00edlen\u00ed soubor\u016f mezi u\u017eivateli vy\u017eaduje explicitn\u00ed a slo\u017eitou konfiguraci a je omezeno na specifick\u00e9 p\u0159\u00edpady, aby se maximalizovala bezpe\u010dnost a izolace dat.",
        sectionNumber: "9.4.8",
        sectionTitle: "Process Separation",
      },
      {
        uuid: "e8c9a74e-5050-4683-ac22-f8f6fe6655b1",
        correct:
          "Cesty k soubor\u016fm v opera\u010dn\u00edm syst\u00e9mu nejsou samy o sob\u011b pova\u017eov\u00e1ny za bezpe\u010dnostn\u00ed tokeny a jejich znalost automaticky nezaru\u010duje p\u0159\u00edstup k dan\u00e9mu souboru. I kdy\u017e u\u017eivatel zn\u00e1 cestu k souboru, opera\u010dn\u00ed syst\u00e9m st\u00e1le prov\u00e1d\u00ed kontrolu p\u0159\u00edstupov\u00fdch pr\u00e1v, aby ov\u011b\u0159il, zda m\u00e1 u\u017eivatel opr\u00e1vn\u011bn\u00ed k proveden\u00ed po\u017eadovan\u00e9 operace s dan\u00fdm souborem, co\u017e zaji\u0161\u0165uje bezpe\u010dnost a kontrolu p\u0159\u00edstupu.",
        incorrect:
          "Cesty k soubor\u016fm v opera\u010dn\u00edm syst\u00e9mu funguj\u00ed jako prim\u00e1rn\u00ed a jedin\u00e9 bezpe\u010dnostn\u00ed tokeny, a pokud u\u017eivatel zn\u00e1 cestu k souboru, m\u00e1 automaticky neomezen\u00fd p\u0159\u00edstup k tomuto souboru. Opera\u010dn\u00ed syst\u00e9m nepou\u017e\u00edv\u00e1 dal\u0161\u00ed mechanismy pro kontrolu p\u0159\u00edstupov\u00fdch pr\u00e1v, a znalost cesty je dosta\u010duj\u00edc\u00ed pro proveden\u00ed jak\u00e9koli operace se souborem, co\u017e zjednodu\u0161uje spr\u00e1vu p\u0159\u00edstupu, ale sni\u017euje celkovou bezpe\u010dnost syst\u00e9mu.",
        sectionNumber: "9.4.8",
        sectionTitle: "Process Separation",
      },
      {
        uuid: "7ff0b21d-fe18-48a8-9066-d4a4fa21b5b5",
        correct:
          "Politika \u0159\u00edzen\u00ed p\u0159\u00edstupu v opera\u010dn\u00edch syst\u00e9mech je zalo\u017eena na trojici subjekt, akce a objekt, kde subjekt p\u0159edstavuje entitu \u017e\u00e1daj\u00edc\u00ed o p\u0159\u00edstup, akce je operace, kter\u00e1 m\u00e1 b\u00fdt provedena, a objekt je zdroj, ke kter\u00e9mu se p\u0159istupuje. Tato politika ur\u010duje, zda je konkr\u00e9tn\u00edmu subjektu povoleno prov\u00e9st danou akci s dan\u00fdm objektem, a m\u016f\u017ee b\u00fdt zak\u00f3dov\u00e1na r\u016fzn\u00fdmi zp\u016fsoby, \u010d\u00edm\u017e tvo\u0159\u00ed soubor pravidel pro rozhodov\u00e1n\u00ed o p\u0159\u00edstupu v syst\u00e9mu.",
        incorrect:
          "Politika \u0159\u00edzen\u00ed p\u0159\u00edstupu v opera\u010dn\u00edch syst\u00e9mech je zalo\u017eena na trojici subjekt, akce a objekt, kde subjekt p\u0159edstavuje zdroj, ke kter\u00e9mu se p\u0159istupuje, akce je operace, kter\u00e1 m\u00e1 b\u00fdt provedena, a objekt je entita \u017e\u00e1daj\u00edc\u00ed o p\u0159\u00edstup. Tato politika ur\u010duje, zda je konkr\u00e9tn\u00edmu subjektu povoleno prov\u00e9st danou akci s dan\u00fdm objektem, a m\u016f\u017ee b\u00fdt zak\u00f3dov\u00e1na r\u016fzn\u00fdmi zp\u016fsoby, \u010d\u00edm\u017e tvo\u0159\u00ed soubor pravidel pro rozhodov\u00e1n\u00ed o p\u0159\u00edstupu v syst\u00e9mu.",
        sectionNumber: "9.4.9",
        sectionTitle: "Access Control Policy",
      },
      {
        uuid: "cd9dbd08-990a-4f47-8258-a7de560602bc",
        correct:
          "V typick\u00fdch opera\u010dn\u00edch syst\u00e9mech jsou subjekty v politik\u00e1ch \u0159\u00edzen\u00ed p\u0159\u00edstupu prim\u00e1rn\u011b u\u017eivatel\u00e9, kte\u0159\u00ed mohou b\u00fdt bu\u010f re\u00e1ln\u00ed osoby, nebo virtu\u00e1ln\u00ed entity reprezentuj\u00edc\u00ed slu\u017eby. D\u00e1le mohou subjekty zahrnovat i d\u00edl\u010d\u00ed u\u017eivatelsk\u00e9 jednotky, jako jsou jednotliv\u00e9 programy, a \u0161ir\u0161\u00ed kategorie, jako jsou role a skupiny, kter\u00e9 v\u0161echny vy\u017eaduj\u00ed mechanismus pojmenov\u00e1n\u00ed nebo identifikace, zejm\u00e9na v s\u00ed\u0165ov\u00fdch prost\u0159ed\u00edch, aby mohly b\u00fdt efektivn\u011b odkazov\u00e1ny v pravidlech \u0159\u00edzen\u00ed p\u0159\u00edstupu.",
        incorrect:
          "V typick\u00fdch opera\u010dn\u00edch syst\u00e9mech jsou objekty v politik\u00e1ch \u0159\u00edzen\u00ed p\u0159\u00edstupu prim\u00e1rn\u011b u\u017eivatel\u00e9, kte\u0159\u00ed mohou b\u00fdt bu\u010f re\u00e1ln\u00ed osoby, nebo virtu\u00e1ln\u00ed entity reprezentuj\u00edc\u00ed slu\u017eby. D\u00e1le mohou objekty zahrnovat i d\u00edl\u010d\u00ed u\u017eivatelsk\u00e9 jednotky, jako jsou jednotliv\u00e9 programy, a \u0161ir\u0161\u00ed kategorie, jako jsou role a skupiny, kter\u00e9 v\u0161echny vy\u017eaduj\u00ed mechanismus pojmenov\u00e1n\u00ed nebo identifikace, zejm\u00e9na v s\u00ed\u0165ov\u00fdch prost\u0159ed\u00edch, aby mohly b\u00fdt efektivn\u011b odkazov\u00e1ny v pravidlech \u0159\u00edzen\u00ed p\u0159\u00edstupu.",
        sectionNumber: "9.4.9",
        sectionTitle: "Access Control Policy",
      },
      {
        uuid: "ba4f00a6-b513-40f8-a32c-2c9714296e8c",
        correct:
          "P\u0159\u00edpustn\u00e9 akce v politice \u0159\u00edzen\u00ed p\u0159\u00edstupu jsou vnit\u0159n\u011b spjaty s typem objektu, ke kter\u00e9mu se p\u0159istupuje. Nap\u0159\u00edklad, zat\u00edmco objekt typu soubor typicky nab\u00edz\u00ed akce jako \u010dten\u00ed, z\u00e1pis a spu\u0161t\u011bn\u00ed, objekt typu adres\u00e1\u0159 poskytuje odli\u0161nou sadu akc\u00ed, jako je prohled\u00e1v\u00e1n\u00ed, v\u00fdpis a zm\u011bna. Tato sada akc\u00ed specifick\u00e1 pro objekt zaji\u0161\u0165uje, \u017ee dostupn\u00e9 operace jsou relevantn\u00ed a smyslupln\u00e9 pro ka\u017ed\u00fd typ zdroje spravovan\u00fd opera\u010dn\u00edm syst\u00e9mem.",
        incorrect:
          "P\u0159\u00edpustn\u00e9 akce v politice \u0159\u00edzen\u00ed p\u0159\u00edstupu jsou nez\u00e1visl\u00e9 na typu objektu, ke kter\u00e9mu se p\u0159istupuje. Nap\u0159\u00edklad, zat\u00edmco objekt typu soubor typicky nab\u00edz\u00ed akce jako \u010dten\u00ed, z\u00e1pis a spu\u0161t\u011bn\u00ed, objekt typu adres\u00e1\u0159 nab\u00edz\u00ed stejnou sadu akc\u00ed, jako je \u010dten\u00ed, z\u00e1pis a spu\u0161t\u011bn\u00ed. Tato sada akc\u00ed agnostick\u00e1 k objektu zaji\u0161\u0165uje, \u017ee dostupn\u00e9 operace jsou univerz\u00e1ln\u011b aplikovateln\u00e9 pro ka\u017ed\u00fd typ zdroje spravovan\u00fd opera\u010dn\u00edm syst\u00e9mem.",
        sectionNumber: "9.4.9",
        sectionTitle: "Access Control Policy",
      },
      {
        uuid: "a7111f20-980b-4c95-9a7a-3dd319291438",
        correct:
          "Vynucov\u00e1n\u00ed politik \u0159\u00edzen\u00ed p\u0159\u00edstupu se nemus\u00ed nutn\u011b odehr\u00e1vat p\u0159esn\u011b v okam\u017eiku vyvol\u00e1n\u00ed akce, jako je nap\u0159\u00edklad vol\u00e1n\u00ed 'read' na soubor. Nam\u00edsto toho se kontroly, nap\u0159\u00edklad ov\u011b\u0159en\u00ed opr\u00e1vn\u011bn\u00ed 'read', \u010dasto prov\u00e1d\u011bj\u00ed d\u0159\u00edve, nap\u0159\u00edklad v okam\u017eiku operace 'open'. Tento p\u0159\u00edstup, kter\u00fd vy\u017eaduje, aby programy deklarovaly sv\u00e9 z\u00e1m\u011bry p\u0159i 'open', zaji\u0161\u0165uje, \u017ee n\u00e1sledn\u00e9 akce jsou prov\u00e1d\u011bny v mez\u00edch stanoven\u00e9 politiky \u0159\u00edzen\u00ed p\u0159\u00edstupu.",
        incorrect:
          "Vynucov\u00e1n\u00ed politik \u0159\u00edzen\u00ed p\u0159\u00edstupu se v\u017edy odehr\u00e1v\u00e1 p\u0159esn\u011b v okam\u017eiku vyvol\u00e1n\u00ed akce, jako je nap\u0159\u00edklad vol\u00e1n\u00ed 'read' na soubor. Kontroly, nap\u0159\u00edklad ov\u011b\u0159en\u00ed opr\u00e1vn\u011bn\u00ed 'read', se prov\u00e1d\u011bj\u00ed v okam\u017eiku operace 'read'. Tento p\u0159\u00edstup, kter\u00fd vy\u017eaduje, aby programy deklarovaly sv\u00e9 z\u00e1m\u011bry p\u0159i 'read', zaji\u0161\u0165uje, \u017ee akce jsou okam\u017eit\u011b validov\u00e1ny proti stanoven\u00e9 politice \u0159\u00edzen\u00ed p\u0159\u00edstupu.",
        sectionNumber: "9.4.9",
        sectionTitle: "Access Control Policy",
      },
      {
        uuid: "47353ef5-14a0-4e24-8555-93514d3fe108",
        correct:
          "Schopnost opera\u010dn\u00edho syst\u00e9mu vynucovat bezpe\u010dnost je z\u00e1sadn\u011b zalo\u017eena na hardwarov\u00fdch funkc\u00edch, jako je MMU a kontrola obsluhy p\u0159eru\u0161en\u00ed, proto\u017ee samotn\u00fd software nem\u016f\u017ee dostate\u010dn\u011b omezit jin\u00fd software b\u011b\u017e\u00edc\u00ed na stejn\u00e9m po\u010d\u00edta\u010di.",
        incorrect:
          "Schopnost opera\u010dn\u00edho syst\u00e9mu vynucovat bezpe\u010dnost je prim\u00e1rn\u011b zalo\u017eena na softwarov\u00fdch mechanismech a algoritmech implementovan\u00fdch v j\u00e1d\u0159e, bez v\u00fdznamn\u00e9ho spol\u00e9h\u00e1n\u00ed se na z\u00e1kladn\u00ed hardwarov\u00e9 funkce pro robustn\u00ed vynucov\u00e1n\u00ed bezpe\u010dnosti.",
        sectionNumber: "9.4.10",
        sectionTitle: "Enforcement",
      },
      {
        uuid: "28412c56-d67b-435b-a71c-c80c34e72b39",
        correct:
          "B\u011bh j\u00e1dra v privilegovan\u00e9m re\u017eimu CPU je kl\u00ed\u010dov\u00fd pro bezpe\u010dnost OS, proto\u017ee mu umo\u017e\u0148uje spravovat hardwarov\u00e9 zdroje, vynucovat z\u00e1sady \u0159\u00edzen\u00ed p\u0159\u00edstupu pomoc\u00ed MMU a zprost\u0159edkov\u00e1vat interakce proces\u016f prost\u0159ednictv\u00edm syst\u00e9mov\u00fdch vol\u00e1n\u00ed, aby byla zaji\u0161t\u011bna integrita syst\u00e9mu a izolace proces\u016f.",
        incorrect:
          "B\u011bh j\u00e1dra v u\u017eivatelsk\u00e9m re\u017eimu CPU je dostate\u010dn\u00fd pro bezpe\u010dnost OS, proto\u017ee modern\u00ed opera\u010dn\u00ed syst\u00e9my se prim\u00e1rn\u011b spol\u00e9haj\u00ed na softwarov\u00e9 bezpe\u010dnostn\u00ed mechanismy a nevy\u017eaduj\u00ed privilegovan\u00fd hardwarov\u00fd p\u0159\u00edstup k efektivn\u00edmu vynucov\u00e1n\u00ed bezpe\u010dnostn\u00edch z\u00e1sad.",
        sectionNumber: "9.4.10",
        sectionTitle: "Enforcement",
      },
      {
        uuid: "5f45eec6-c460-422d-944d-17c73ba2d111",
        correct:
          "P\u0159\u00edm\u00fd p\u0159\u00edstup do pam\u011bti (DMA) a vstupn\u011b/v\u00fdstupn\u00ed (IO) operace jsou omezeny a spravov\u00e1ny j\u00e1drem opera\u010dn\u00edho syst\u00e9mu, aby byla zachov\u00e1na bezpe\u010dnost syst\u00e9mu a zabr\u00e1n\u011bno neopr\u00e1vn\u011bn\u00e9mu p\u0159\u00edstupu nebo naru\u0161en\u00ed hardwarov\u00fdch zdroj\u016f procesy na u\u017eivatelsk\u00e9 \u00farovni.",
        incorrect:
          "P\u0159\u00edm\u00fd p\u0159\u00edstup do pam\u011bti (DMA) a vstupn\u011b/v\u00fdstupn\u00ed (IO) operace jsou obvykle p\u0159\u00edmo p\u0159\u00edstupn\u00e9 proces\u016fm na u\u017eivatelsk\u00e9 \u00farovni v modern\u00edch opera\u010dn\u00edch syst\u00e9mech, co\u017e umo\u017e\u0148uje efektivn\u00ed interakci s hardwarem bez z\u00e1sahu j\u00e1dra z d\u016fvod\u016f v\u00fdkonu.",
        sectionNumber: "9.4.10",
        sectionTitle: "Enforcement",
      },
      {
        uuid: "a6ed0103-ef3d-4fd2-a101-f03f8db9b441",
        correct:
          "Jednotka spr\u00e1vy pam\u011bti (MMU) hraje kl\u00ed\u010dovou roli p\u0159i zaji\u0161\u0165ov\u00e1n\u00ed izolace proces\u016f vytv\u00e1\u0159en\u00edm odd\u011blen\u00fdch adresn\u00edch prostor\u016f pro ka\u017ed\u00fd proces, \u010d\u00edm\u017e zabra\u0148uje vz\u00e1jemn\u00e9mu ru\u0161en\u00ed pam\u011bti a zaji\u0161\u0165uje bezpe\u010dn\u00e9 a stabiln\u00ed v\u00fdpo\u010detn\u00ed prost\u0159ed\u00ed.",
        incorrect:
          "Jednotka spr\u00e1vy pam\u011bti (MMU) je prim\u00e1rn\u011b zodpov\u011bdn\u00e1 za optimalizaci pam\u011bti a spr\u00e1vu virtu\u00e1ln\u00ed pam\u011bti, ale nehraje v\u00fdznamnou roli v izolaci proces\u016f, kter\u00e1 je dosahov\u00e1na hlavn\u011b softwarov\u00fdmi technikami spr\u00e1vy proces\u016f.",
        sectionNumber: "9.4.10",
        sectionTitle: "Enforcement",
      },
      {
        uuid: "720f252d-9636-4e93-b3c2-e2a1b83bc7b4",
        correct:
          "U\u017eivatelsk\u00e9 procesy, konkr\u00e9tn\u011b syst\u00e9mov\u00e9 slu\u017eby poskytuj\u00edc\u00ed IPC API, mohou implementovat vlastn\u00ed mechanismy \u0159\u00edzen\u00ed p\u0159\u00edstupu k dat\u016fm, i kdy\u017e b\u011b\u017e\u00ed v u\u017eivatelsk\u00e9m prostoru. Tato kontrola p\u0159\u00edstupu je zalo\u017eena na schopnosti t\u011bchto slu\u017eeb ov\u011b\u0159ovat identitu klienta, nap\u0159\u00edklad pomoc\u00ed syst\u00e9mov\u00e9ho vol\u00e1n\u00ed `getpeereid()`, a n\u00e1sledn\u011b aplikovat vlastn\u00ed politiky pro povolen\u00ed nebo zam\u00edtnut\u00ed operac\u00ed s daty, kter\u00e1 spravuj\u00ed. I kdy\u017e u\u017eivatelsk\u00e9 procesy nemaj\u00ed p\u0159\u00edm\u00fd p\u0159\u00edstup k hardwarov\u00fdm zdroj\u016fm, mohou efektivn\u011b \u0159\u00eddit p\u0159\u00edstup k dat\u016fm s vyu\u017eit\u00edm slu\u017eeb j\u00e1dra opera\u010dn\u00edho syst\u00e9mu.",
        incorrect:
          "U\u017eivatelsk\u00e9 procesy, konkr\u00e9tn\u011b syst\u00e9mov\u00e9 slu\u017eby poskytuj\u00edc\u00ed IPC API, mohou implementovat vlastn\u00ed mechanismy \u0159\u00edzen\u00ed p\u0159\u00edstupu k dat\u016fm zcela nez\u00e1visle na j\u00e1dru opera\u010dn\u00edho syst\u00e9mu. Tato kontrola p\u0159\u00edstupu je zalo\u017eena v\u00fdhradn\u011b na schopnostech u\u017eivatelsk\u00e9ho prostoru, bez nutnosti interakce s j\u00e1drem pro ov\u011b\u0159en\u00ed identity klienta nebo uplatn\u011bn\u00ed politik \u0159\u00edzen\u00ed p\u0159\u00edstupu. J\u00e1dro opera\u010dn\u00edho syst\u00e9mu nehraje \u017e\u00e1dnou roli v prosazov\u00e1n\u00ed p\u0159\u00edstupov\u00fdch pr\u00e1v definovan\u00fdch u\u017eivatelsk\u00fdmi procesy.",
        sectionNumber: "9.4.11",
        sectionTitle: "User-space Enforcement",
      },
      {
        uuid: "8d4521cc-4cc1-4c67-87e6-623f80cdec34",
        correct:
          "P\u0159\u00edklad rela\u010dn\u00ed datab\u00e1ze ilustruje, jak m\u016f\u017ee u\u017eivatelsk\u00fd proces \u0159\u00eddit p\u0159\u00edstup k dat\u016fm. Datab\u00e1zov\u00fd engine b\u011b\u017e\u00ed pod dedikovan\u00fdm u\u017eivatelem a ukl\u00e1d\u00e1 data do soubor\u016f s omezen\u00fdmi p\u0159\u00edstupov\u00fdmi pr\u00e1vy nastaven\u00fdmi j\u00e1drem opera\u010dn\u00edho syst\u00e9mu. Klienti se k datab\u00e1zi p\u0159ipojuj\u00ed p\u0159es UNIX socket a datab\u00e1zov\u00fd server, s vyu\u017eit\u00edm syst\u00e9mov\u00e9ho vol\u00e1n\u00ed `getpeereid()`, m\u016f\u017ee ov\u011b\u0159it identitu klienta a na z\u00e1klad\u011b vlastn\u00ed politiky \u0159\u00edzen\u00ed p\u0159\u00edstupu selektivn\u011b povolit nebo zak\u00e1zat operace s daty.",
        incorrect:
          "P\u0159\u00edklad rela\u010dn\u00ed datab\u00e1ze ilustruje, jak m\u016f\u017ee u\u017eivatelsk\u00fd proces \u0159\u00eddit p\u0159\u00edstup k dat\u016fm bez jak\u00e9koliv podpory ze strany j\u00e1dra opera\u010dn\u00edho syst\u00e9mu. Datab\u00e1zov\u00fd engine b\u011b\u017e\u00ed pod dedikovan\u00fdm u\u017eivatelem, ale p\u0159\u00edstupov\u00e1 pr\u00e1va k soubor\u016fm s daty jsou irelevantn\u00ed, proto\u017ee datab\u00e1ze si \u0159\u00edd\u00ed p\u0159\u00edstup zcela sama. Klienti se k datab\u00e1zi p\u0159ipojuj\u00ed p\u0159es TCP socket a datab\u00e1zov\u00fd server ignoruje identitu klienta, proto\u017ee \u0159\u00edzen\u00ed p\u0159\u00edstupu je zalo\u017eeno pouze na intern\u00edch mechanismech datab\u00e1ze.",
        sectionNumber: "9.4.11",
        sectionTitle: "User-space Enforcement",
      },
      {
        uuid: "31ed5521-6d40-4c44-aadf-b80b77e2f884",
        correct:
          "V syst\u00e9mech POSIX jsou pro \u0159\u00edzen\u00ed p\u0159\u00edstupov\u00fdch pr\u00e1v definov\u00e1ny dva z\u00e1kladn\u00ed typy subjekt\u016f: u\u017eivatel\u00e9 a skupiny, p\u0159i\u010dem\u017e toto \u0159\u00edzen\u00ed p\u0159\u00edstupu se prim\u00e1rn\u011b t\u00fdk\u00e1 souborov\u00e9ho syst\u00e9mu a objekt\u016f, jejich\u017e opr\u00e1vn\u011bn\u00ed jsou v\u00e1z\u00e1na na i-nody.",
        incorrect:
          "V syst\u00e9mech POSIX, a\u010dkoli se pro \u0159\u00edzen\u00ed p\u0159\u00edstupov\u00fdch pr\u00e1v rozli\u0161uj\u00ed u\u017eivatel\u00e9 a skupiny, toto rozli\u0161en\u00ed se nevztahuje na souborov\u00fd syst\u00e9m, ale sp\u00ed\u0161e na s\u00ed\u0165ov\u00e9 slu\u017eby a procesy, kde objekty vy\u017eaduj\u00ed explicitn\u00ed pojmenov\u00e1n\u00ed pro spr\u00e1vu opr\u00e1vn\u011bn\u00ed.",
        sectionNumber: "9.4.12",
        sectionTitle: "Subjects in POSIX",
      },
      {
        uuid: "92399d99-f8e9-4ce4-abbe-776e691bf211",
        correct:
          "Syst\u00e9my POSIX umo\u017e\u0148uj\u00ed, aby u\u017eivatel\u00e9 byli \u010dleny v\u00edce skupin sou\u010dasn\u011b, co\u017e roz\u0161i\u0159uje mo\u017enosti spr\u00e1vy p\u0159\u00edstupov\u00fdch pr\u00e1v a umo\u017e\u0148uje flexibiln\u011bj\u0161\u00ed konfiguraci opr\u00e1vn\u011bn\u00ed na z\u00e1klad\u011b r\u016fzn\u00fdch rol\u00ed a projekt\u016f, na kter\u00fdch se u\u017eivatel pod\u00edl\u00ed.",
        incorrect:
          "V syst\u00e9mech POSIX je u\u017eivatel omezen na \u010dlenstv\u00ed pouze v jedn\u00e9 prim\u00e1rn\u00ed skupin\u011b, co\u017e zjednodu\u0161uje spr\u00e1vu p\u0159\u00edstupov\u00fdch pr\u00e1v, ale z\u00e1rove\u0148 omezuje flexibilitu v komplexn\u011bj\u0161\u00edch sc\u00e9n\u00e1\u0159\u00edch, kde by u\u017eivatel m\u011bl pat\u0159it do v\u00edce rol\u00ed.",
        sectionNumber: "9.4.12",
        sectionTitle: "Subjects in POSIX",
      },
      {
        uuid: "ce2346aa-55bb-46b8-b840-2ed89409a0ec",
        correct:
          "V syst\u00e9mech POSIX je speci\u00e1ln\u00ed u\u017eivatel root, zn\u00e1m\u00fd tak\u00e9 jako superu\u017eivatel, kter\u00fd p\u0159edstavuje administr\u00e1tora syst\u00e9mu a m\u00e1 v\u00fdsadn\u00ed postaven\u00ed, nebo\u0165 nepodl\u00e9h\u00e1 standardn\u00edm kontrol\u00e1m opr\u00e1vn\u011bn\u00ed a m\u016f\u017ee prov\u00e1d\u011bt akce, kter\u00e9 jsou b\u011b\u017en\u00fdm u\u017eivatel\u016fm zapov\u011bzeny, jako nap\u0159\u00edklad restartov\u00e1n\u00ed syst\u00e9mu.",
        incorrect:
          "V syst\u00e9mech POSIX, u\u017eivatel root, a\u010dkoli m\u00e1 roz\u0161\u00ed\u0159en\u00e1 opr\u00e1vn\u011bn\u00ed oproti b\u011b\u017en\u00fdm u\u017eivatel\u016fm a je ur\u010den pro administrativn\u00ed \u00fakoly, st\u00e1le podl\u00e9h\u00e1 standardn\u00edm mechanism\u016fm \u0159\u00edzen\u00ed p\u0159\u00edstupu a mus\u00ed explicitn\u011b \u017e\u00e1dat o opr\u00e1vn\u011bn\u00ed pro prov\u00e1d\u011bn\u00ed syst\u00e9mov\u00fdch operac\u00ed.",
        sectionNumber: "9.4.12",
        sectionTitle: "Subjects in POSIX",
      },
      {
        uuid: "c888f790-6012-402b-bc80-5c9820c0b9db",
        correct:
          "V syst\u00e9mech spr\u00e1vy u\u017eivatel\u016f a skupin v opera\u010dn\u00edch syst\u00e9mech se pro intern\u00ed reprezentaci a identifikaci u\u017eivatel\u016f a skupin pou\u017e\u00edvaj\u00ed \u010d\u00edseln\u00e9 identifik\u00e1tory, zn\u00e1m\u00e9 jako UID a GID, co\u017e p\u0159isp\u00edv\u00e1 k efektivit\u011b operac\u00ed a kompaktn\u00edmu ulo\u017een\u00ed informac\u00ed v i-nodech, a historicky hr\u00e1lo v\u00fdznamnou roli v optimalizaci v\u00fdkonu syst\u00e9mu.",
        incorrect:
          "V modern\u00edch opera\u010dn\u00edch syst\u00e9mech se pro reprezentaci u\u017eivatel\u016f a skupin v\u00fdhradn\u011b pou\u017e\u00edvaj\u00ed textov\u00e9 \u0159et\u011bzce, kter\u00e9 umo\u017e\u0148uj\u00ed flexibiln\u011bj\u0161\u00ed a \u010diteln\u011bj\u0161\u00ed spr\u00e1vu identit, a \u010d\u00edseln\u00e9 identifik\u00e1tory UID a GID se ji\u017e nepou\u017e\u00edvaj\u00ed kv\u016fli jejich neefektivnosti a slo\u017eitosti p\u0159i spr\u00e1v\u011b v rozs\u00e1hl\u00fdch s\u00edt\u00edch.",
        sectionNumber: "9.4.13",
        sectionTitle: "User and Group Identifiers",
      },
      {
        uuid: "636a86e4-f51e-4b3f-9ff1-124e1bd66ea4",
        correct:
          "\u010c\u00edseln\u00e9 identifik\u00e1tory u\u017eivatel\u016f (UID) a skupin (GID) jsou obvykle platn\u00e9 a jedine\u010dn\u00e9 v r\u00e1mci jednoho po\u010d\u00edta\u010de nebo maxim\u00e1ln\u011b v lok\u00e1ln\u00ed s\u00edti, co\u017e znamen\u00e1, \u017ee pro rozs\u00e1hl\u00e9 s\u00edt\u011b nebo distribuovan\u00e9 syst\u00e9my je nutn\u00e9 zajistit mechanismy pro synchronizaci a spr\u00e1vu identit u\u017eivatel\u016f nap\u0159\u00ed\u010d r\u016fzn\u00fdmi syst\u00e9my.",
        incorrect:
          "\u010c\u00edseln\u00e9 identifik\u00e1tory u\u017eivatel\u016f (UID) a skupin (GID) jsou glob\u00e1ln\u011b platn\u00e9 a jedine\u010dn\u00e9 nap\u0159\u00ed\u010d cel\u00fdm internetem, co\u017e umo\u017e\u0148uje snadnou identifikaci a spr\u00e1vu u\u017eivatel\u016f v jak\u00e9mkoli syst\u00e9mu bez pot\u0159eby dal\u0161\u00edch mechanism\u016f pro synchronizaci identit v distribuovan\u00fdch prost\u0159ed\u00edch.",
        sectionNumber: "9.4.13",
        sectionTitle: "User and Group Identifiers",
      },
      {
        uuid: "2e1bd1e2-a7e7-483e-b07f-ce97c861e56e",
        correct:
          "U\u017eivatelsk\u00e1 datab\u00e1ze v opera\u010dn\u00edm syst\u00e9mu pln\u00ed dv\u011b z\u00e1kladn\u00ed funkce: autorizaci u\u017eivatel\u016f, kter\u00e1 ur\u010duje, kte\u0159\u00ed u\u017eivatel\u00e9 maj\u00ed p\u0159\u00edstup do syst\u00e9mu, a mapov\u00e1n\u00ed mezi lidsky \u010diteln\u00fdmi u\u017eivatelsk\u00fdmi jm\u00e9ny a intern\u011b pou\u017e\u00edvan\u00fdmi \u010d\u00edseln\u00fdmi identifik\u00e1tory, co\u017e umo\u017e\u0148uje syst\u00e9mu efektivn\u011b pracovat s u\u017eivatelsk\u00fdmi identitami.",
        incorrect:
          "U\u017eivatelsk\u00e1 datab\u00e1ze v opera\u010dn\u00edm syst\u00e9mu slou\u017e\u00ed prim\u00e1rn\u011b k ukl\u00e1d\u00e1n\u00ed hesel u\u017eivatel\u016f v \u0161ifrovan\u00e9 podob\u011b a nem\u00e1 \u017e\u00e1dnou roli v mapov\u00e1n\u00ed u\u017eivatelsk\u00fdch jmen na \u010d\u00edseln\u00e9 identifik\u00e1tory, ani v autorizaci u\u017eivatel\u016f, proto\u017ee tyto funkce jsou \u0159\u00edzeny v\u00fdhradn\u011b j\u00e1drem opera\u010dn\u00edho syst\u00e9mu.",
        sectionNumber: "9.4.13",
        sectionTitle: "User and Group Identifiers",
      },
      {
        uuid: "e316f12a-0659-4263-9824-6044fd4f5d23",
        correct:
          "Implementace u\u017eivatelsk\u00e9 datab\u00e1ze se m\u016f\u017ee li\u0161it v komplexnosti, od jednoduch\u00fdch textov\u00fdch soubor\u016f, jako jsou `/etc/passwd` a `/etc/group`, kter\u00e9 se hod\u00ed pro men\u0161\u00ed syst\u00e9my, a\u017e po slo\u017eit\u00e9 distribuovan\u00e9 datab\u00e1ze, jako jsou LDAP a Active Directory, kter\u00e9 jsou navr\u017eeny pro centralizovanou spr\u00e1vu u\u017eivatel\u016f v rozs\u00e1hl\u00fdch s\u00edt\u00edch.",
        incorrect:
          "U\u017eivatelsk\u00e1 datab\u00e1ze v opera\u010dn\u00edm syst\u00e9mu mus\u00ed b\u00fdt v\u017edy implementov\u00e1na jako slo\u017eit\u00e1 distribuovan\u00e1 datab\u00e1ze typu LDAP nebo Active Directory, a pou\u017eit\u00ed jednoduch\u00fdch textov\u00fdch soubor\u016f, jako `/etc/passwd` a `/etc/group`, je v modern\u00edch opera\u010dn\u00edch syst\u00e9mech zcela nep\u0159\u00edpustn\u00e9 kv\u016fli nedostate\u010dn\u00e9 bezpe\u010dnosti a \u0161k\u00e1lovatelnosti.",
        sectionNumber: "9.4.13",
        sectionTitle: "User and Group Identifiers",
      },
      {
        uuid: "5b1a93ea-a300-43e3-867b-9c8266ab07d2",
        correct:
          "V lok\u00e1ln\u00edch s\u00edt\u00edch je \u010dasto \u017e\u00e1douc\u00ed, aby v\u0161echny po\u010d\u00edta\u010de sd\u00edlely stejn\u00fd pohled na u\u017eivatele a pou\u017e\u00edvaly stejn\u00e9 mapov\u00e1n\u00ed mezi u\u017eivatelsk\u00fdmi jm\u00e9ny a ID, co\u017e se \u0159e\u0161\u00ed centralizovan\u00fdmi \u0159e\u0161en\u00edmi pro spr\u00e1vu u\u017eivatelsk\u00fdch identit na \u00farovni s\u00edt\u011b, jako jsou LDAP a Active Directory.",
        incorrect:
          "V lok\u00e1ln\u00edch s\u00edt\u00edch je nezbytn\u00e9, aby ka\u017ed\u00fd po\u010d\u00edta\u010d m\u011bl zcela nez\u00e1vislou a odd\u011blenou spr\u00e1vu u\u017eivatel\u016f a mapov\u00e1n\u00ed mezi u\u017eivatelsk\u00fdmi jm\u00e9ny a ID, proto\u017ee centralizovan\u00e1 spr\u00e1va identit, jako LDAP a Active Directory, je v lok\u00e1ln\u00edch s\u00edt\u00edch p\u0159\u00edli\u0161 slo\u017eit\u00e1 a neefektivn\u00ed.",
        sectionNumber: "9.4.13",
        sectionTitle: "User and Group Identifiers",
      },
      {
        uuid: "931a6bd4-def5-43e5-bd05-e33d5dce00bc",
        correct:
          "Procesy v opera\u010dn\u00edm syst\u00e9mu jsou v\u017edy spojeny s konkr\u00e9tn\u00edm u\u017eivatelem a p\u0159i vol\u00e1n\u00ed `fork()` potomek d\u011bd\u00ed vlastnictv\u00ed procesu od rodi\u010de, co\u017e znamen\u00e1, \u017ee potomek bude pat\u0159it stejn\u00e9mu u\u017eivateli jako rodi\u010dovsk\u00fd proces, zat\u00edmco vlastnictv\u00ed rodi\u010dovsk\u00e9ho procesu z\u016fst\u00e1v\u00e1 nezm\u011bn\u011bno.",
        incorrect:
          "Procesy v opera\u010dn\u00edm syst\u00e9mu jsou v\u017edy spojeny s konkr\u00e9tn\u00edm u\u017eivatelem, ale p\u0159i vol\u00e1n\u00ed `fork()` potomek ned\u011bd\u00ed vlastnictv\u00ed procesu od rodi\u010de, co\u017e znamen\u00e1, \u017ee potomek bude pat\u0159it jin\u00e9mu u\u017eivateli ne\u017e rodi\u010dovsk\u00fd proces, zat\u00edmco vlastnictv\u00ed rodi\u010dovsk\u00e9ho procesu z\u016fst\u00e1v\u00e1 nezm\u011bn\u011bno.",
        sectionNumber: "9.4.14",
        sectionTitle: "Changing Identities",
      },
      {
        uuid: "291fac7c-4ef3-40c3-8a73-4967673ed9ce",
        correct:
          "Pouze procesy s opr\u00e1vn\u011bn\u00edm superu\u017eivatele maj\u00ed mo\u017enost zm\u011bnit vlastnictv\u00ed procesu pomoc\u00ed syst\u00e9mov\u00e9ho vol\u00e1n\u00ed `setuid()`, co\u017e umo\u017e\u0148uje superu\u017eivatelsk\u00fdm proces\u016fm modifikovat u\u017eivatelskou identitu, pod kterou proces b\u011b\u017e\u00ed, a t\u00edm i jeho p\u0159\u00edstupov\u00e1 pr\u00e1va a opr\u00e1vn\u011bn\u00ed v syst\u00e9mu.",
        incorrect:
          "Jak\u00fdkoli proces v opera\u010dn\u00edm syst\u00e9mu, bez ohledu na jeho opr\u00e1vn\u011bn\u00ed, m\u00e1 mo\u017enost zm\u011bnit vlastnictv\u00ed procesu pomoc\u00ed syst\u00e9mov\u00e9ho vol\u00e1n\u00ed `setuid()`, co\u017e umo\u017e\u0148uje libovoln\u00fdm proces\u016fm modifikovat u\u017eivatelskou identitu, pod kterou proces b\u011b\u017e\u00ed, a t\u00edm i jeho p\u0159\u00edstupov\u00e1 pr\u00e1va a opr\u00e1vn\u011bn\u00ed v syst\u00e9mu.",
        sectionNumber: "9.4.14",
        sectionTitle: "Changing Identities",
      },
      {
        uuid: "49648ece-aad9-4e2f-85f6-bcdc98bf3c3b",
        correct:
          "Syst\u00e9mov\u00e9 vol\u00e1n\u00ed `exec()` m\u016f\u017ee v n\u011bkter\u00fdch p\u0159\u00edpadech zm\u011bnit vlastn\u00edka procesu prost\u0159ednictv\u00edm takzvan\u00e9ho `setuid` bitu, kter\u00fd nen\u00ed toto\u017en\u00fd se syst\u00e9mov\u00fdm vol\u00e1n\u00edm `setuid()`, ale umo\u017e\u0148uje, aby se proces po spu\u0161t\u011bn\u00ed spustiteln\u00e9ho souboru provedl s vlastnictv\u00edm ur\u010den\u00fdm t\u00edmto bitem.",
        incorrect:
          "Syst\u00e9mov\u00e9 vol\u00e1n\u00ed `exec()` nikdy nem\u016f\u017ee zm\u011bnit vlastn\u00edka procesu, a to ani prost\u0159ednictv\u00edm takzvan\u00e9ho `setuid` bitu, proto\u017ee `exec()` slou\u017e\u00ed pouze k nahrazen\u00ed aktu\u00e1ln\u00edho procesu nov\u00fdm programem, ani\u017e by ovlivnilo vlastnictv\u00ed nebo u\u017eivatelskou identitu procesu.",
        sectionNumber: "9.4.14",
        sectionTitle: "Changing Identities",
      },
      {
        uuid: "e656a03f-f588-4cc2-842e-866016fc1e6c",
        correct:
          "Proces `init`, kter\u00fd je v opera\u010dn\u00edch syst\u00e9mech typicky prvn\u00edm spu\u0161t\u011bn\u00fdm procesem po startu j\u00e1dra, je standardn\u011b vlastn\u011bn superu\u017eivatelem, co\u017e mu umo\u017e\u0148uje prov\u00e1d\u011bt kritick\u00e9 syst\u00e9mov\u00e9 operace a spravovat dal\u0161\u00ed procesy v syst\u00e9mu.",
        incorrect:
          "Proces `init`, kter\u00fd je v opera\u010dn\u00edch syst\u00e9mech typicky prvn\u00edm spu\u0161t\u011bn\u00fdm procesem po startu j\u00e1dra, je standardn\u011b vlastn\u011bn b\u011b\u017en\u00fdm u\u017eivatelem, co\u017e omezuje jeho schopnost prov\u00e1d\u011bt kritick\u00e9 syst\u00e9mov\u00e9 operace a vy\u017eaduje eskalaci pr\u00e1v pro spr\u00e1vu dal\u0161\u00edch proces\u016f v syst\u00e9mu.",
        sectionNumber: "9.4.14",
        sectionTitle: "Changing Identities",
      },
      {
        uuid: "ccdbebe5-9c3e-49ec-9f2e-9672646e3073",
        correct:
          "Tradi\u010dn\u00ed implementace p\u0159ihla\u0161ovac\u00edho procesu, spou\u0161t\u011bn\u00e9ho na konci procesu bootov\u00e1n\u00ed, nejprve vyzve u\u017eivatele k zad\u00e1n\u00ed u\u017eivatelsk\u00e9ho jm\u00e9na a hesla, kter\u00e9 n\u00e1sledn\u011b ov\u011b\u0159\u00ed oproti datab\u00e1zi u\u017eivatel\u016f. Pokud se p\u0159ihla\u0161ovac\u00ed \u00fadaje shoduj\u00ed, program `login` nastav\u00ed z\u00e1kladn\u00ed prost\u0159ed\u00ed, zm\u011bn\u00ed vlastn\u00edka procesu na p\u0159ihl\u00e1\u0161en\u00e9ho u\u017eivatele a spust\u00ed preferovan\u00fd shell u\u017eivatele.",
        incorrect:
          "Tradi\u010dn\u00ed implementace p\u0159ihla\u0161ovac\u00edho procesu, spou\u0161t\u011bn\u00e9ho na za\u010d\u00e1tku procesu bootov\u00e1n\u00ed, nejprve vyzve u\u017eivatele k zad\u00e1n\u00ed u\u017eivatelsk\u00e9ho jm\u00e9na a hesla, kter\u00e9 n\u00e1sledn\u011b ov\u011b\u0159\u00ed oproti datab\u00e1zi hesel ulo\u017een\u00e9 v pam\u011bti ROM. Pokud se p\u0159ihla\u0161ovac\u00ed \u00fadaje shoduj\u00ed, program `login` nastav\u00ed z\u00e1kladn\u00ed prost\u0159ed\u00ed, ponech\u00e1 vlastn\u00edka procesu nezm\u011bn\u011bn\u00e9ho a spust\u00ed preferovan\u00fd shell syst\u00e9mu.",
        sectionNumber: "9.4.15",
        sectionTitle: "Login",
      },
      {
        uuid: "bb6ef497-f37e-4f6c-bb57-26332070e816",
        correct:
          "Proces `login`, kter\u00fd je spravov\u00e1n procesem superu\u017eivatele, slou\u017e\u00ed k autentizaci u\u017eivatel\u016f a zah\u00e1jen\u00ed jejich relace. Po zad\u00e1n\u00ed u\u017eivatelsk\u00e9ho jm\u00e9na a hesla program `login` ov\u011b\u0159\u00ed tyto \u00fadaje a v p\u0159\u00edpad\u011b \u00fasp\u011b\u0161n\u00e9 autentizace zm\u011bn\u00ed vlastn\u00edka procesu pomoc\u00ed funkce `setuid()` a n\u00e1sledn\u011b spust\u00ed u\u017eivatelsk\u00fd shell pomoc\u00ed funkce `exec()`.",
        incorrect:
          "Proces `login`, kter\u00fd je spravov\u00e1n u\u017eivatelsk\u00fdm procesem, slou\u017e\u00ed k autentizaci u\u017eivatel\u016f a zah\u00e1jen\u00ed jejich relace. Po zad\u00e1n\u00ed u\u017eivatelsk\u00e9ho jm\u00e9na a hesla program `login` ov\u011b\u0159\u00ed tyto \u00fadaje a v p\u0159\u00edpad\u011b \u00fasp\u011b\u0161n\u00e9 autentizace zm\u011bn\u00ed vlastn\u00edka procesu pomoc\u00ed funkce `exec()` a n\u00e1sledn\u011b spust\u00ed u\u017eivatelsk\u00fd shell pomoc\u00ed funkce `setuid()`.",
        sectionNumber: "9.4.15",
        sectionTitle: "Login",
      },
      {
        uuid: "f9d76b97-8736-4ecd-b39c-bfadc878bec8",
        correct:
          "V ide\u00e1ln\u00edm p\u0159\u00edpad\u011b opera\u010dn\u00ed syst\u00e9m neukl\u00e1d\u00e1 heslo u\u017eivatele p\u0159\u00edmo, ale uchov\u00e1v\u00e1 informace, kter\u00e9 umo\u017e\u0148uj\u00ed ov\u011b\u0159it, zda zadan\u00e9 heslo je spr\u00e1vn\u00e9, p\u0159i\u010dem\u017e se \u010dasto pou\u017e\u00edvaj\u00ed kryptografick\u00e9 hashovac\u00ed funkce s p\u0159\u00eddavkem soli pro zv\u00fd\u0161en\u00ed bezpe\u010dnosti.",
        incorrect:
          "V ide\u00e1ln\u00edm p\u0159\u00edpad\u011b opera\u010dn\u00ed syst\u00e9m ukl\u00e1d\u00e1 heslo u\u017eivatele p\u0159\u00edmo v za\u0161ifrovan\u00e9 podob\u011b pomoc\u00ed slo\u017eit\u00fdch \u0161ifrovac\u00edch algoritm\u016f, co\u017e zaji\u0161\u0165uje maxim\u00e1ln\u00ed mo\u017enou bezpe\u010dnost a z\u00e1rove\u0148 umo\u017e\u0148uje rychl\u00e9 ov\u011b\u0159en\u00ed hesla p\u0159i p\u0159ihl\u00e1\u0161en\u00ed.",
        sectionNumber: "9.4.16",
        sectionTitle: "User Authentication",
      },
      {
        uuid: "abbe9320-8e9e-4ab0-9b4e-00a7654b36d0",
        correct:
          "Krom\u011b hesel existuj\u00ed i jin\u00e9 metody autentizace u\u017eivatel\u016f v opera\u010dn\u00edch syst\u00e9mech, mezi kter\u00e9 pat\u0159\u00ed nap\u0159\u00edklad kryptografick\u00e9 tokeny a biometrick\u00e9 metody, kter\u00e9 se st\u00e1vaj\u00ed st\u00e1le popul\u00e1rn\u011bj\u0161\u00edmi v modern\u00edch syst\u00e9mech.",
        incorrect:
          "Jedinou spolehlivou a \u0161iroce pou\u017e\u00edvanou metodou autentizace u\u017eivatel\u016f v modern\u00edch opera\u010dn\u00edch syst\u00e9mech jsou v\u00fdhradn\u011b hesla, jeliko\u017e alternativn\u00ed metody jako kryptografick\u00e9 tokeny a biometrick\u00e9 metody jsou st\u00e1le pova\u017eov\u00e1ny za experiment\u00e1ln\u00ed a nespolehliv\u00e9.",
        sectionNumber: "9.4.16",
        sectionTitle: "User Authentication",
      },
      {
        uuid: "af54ab57-97f4-45cc-a3db-93fae1ab457b",
        correct:
          "Pro zv\u00fd\u0161en\u00ed bezpe\u010dnosti u\u017eivatelsk\u00e9ho \u00fa\u010dtu by m\u011bl opera\u010dn\u00ed syst\u00e9m umo\u017e\u0148ovat u\u017eivateli zm\u011bnu hesla, co\u017e minimalizuje riziko neopr\u00e1vn\u011bn\u00e9ho p\u0159\u00edstupu v p\u0159\u00edpad\u011b kompromitace hesla.",
        incorrect:
          "Z d\u016fvodu zv\u00fd\u0161en\u00ed bezpe\u010dnosti opera\u010dn\u00ed syst\u00e9my obvykle u\u017eivatel\u016fm neumo\u017e\u0148uj\u00ed m\u011bnit hesla, proto\u017ee \u010dast\u00e9 zm\u011bny hesel zvy\u0161uj\u00ed riziko zapomenut\u00ed a kompromitace \u00fa\u010dtu.",
        sectionNumber: "9.4.16",
        sectionTitle: "User Authentication",
      },
      {
        uuid: "14bf2d7f-8c8a-4b6a-b29d-69ec79abd98b",
        correct:
          "Autentizace p\u0159es s\u00ed\u0165 p\u0159edstavuje v\u011bt\u0161\u00ed bezpe\u010dnostn\u00ed v\u00fdzvu ne\u017e lok\u00e1ln\u00ed autentizace, proto\u017ee s\u00ed\u0165ov\u00e1 komunikace je n\u00e1chyln\u011bj\u0161\u00ed k odposlechu, co\u017e znamen\u00e1, \u017ee hesla, i kdy\u017e jsou \u0161ifrovan\u00e1, mohou b\u00fdt zraniteln\u00e1 v\u016f\u010di \u00fatok\u016fm typu man-in-the-middle, pokud nen\u00ed ov\u011b\u0159ena identita vzd\u00e1len\u00e9ho po\u010d\u00edta\u010de.",
        incorrect:
          "Autentizace p\u0159es s\u00ed\u0165 je obecn\u011b pova\u017eov\u00e1na za bezpe\u010dn\u011bj\u0161\u00ed ne\u017e lok\u00e1ln\u00ed autentizace, proto\u017ee modern\u00ed s\u00edt\u011b automaticky \u0161ifruj\u00ed ve\u0161kerou komunikaci, \u010d\u00edm\u017e eliminuj\u00ed riziko odposlechu hesel a zaji\u0161\u0165uj\u00ed, \u017ee hesla jsou v\u017edy chr\u00e1n\u011bna p\u0159ed neopr\u00e1vn\u011bn\u00fdm p\u0159\u00edstupem, i kdy\u017e identita vzd\u00e1len\u00e9ho po\u010d\u00edta\u010de nen\u00ed ov\u011b\u0159ena.",
        sectionNumber: "9.4.17",
        sectionTitle: "Remote Login",
      },
      {
        uuid: "9b206f42-98aa-46dd-af03-5e4b631aaf79",
        correct:
          "Pro bezpe\u010dnou autentizaci heslem p\u0159es s\u00ed\u0165 je nezbytn\u00e9 pou\u017e\u00edt \u0161ifrov\u00e1n\u00ed k ochran\u011b hesla b\u011bhem p\u0159enosu, av\u0161ak samotn\u00e9 \u0161ifrov\u00e1n\u00ed nesta\u010d\u00ed, proto\u017ee je tak\u00e9 nutn\u00e9 ov\u011b\u0159it identitu vzd\u00e1len\u00e9ho po\u010d\u00edta\u010de, aby se zabr\u00e1nilo odesl\u00e1n\u00ed hesla \u00fato\u010dn\u00edkovi, kter\u00fd se vyd\u00e1v\u00e1 za legitimn\u00ed syst\u00e9m.",
        incorrect:
          "Pro bezpe\u010dnou autentizaci heslem p\u0159es s\u00ed\u0165 sta\u010d\u00ed pouze \u0161ifrov\u00e1n\u00ed hesla b\u011bhem p\u0159enosu, proto\u017ee jakmile je heslo za\u0161ifrov\u00e1no, je nemo\u017en\u00e9, aby \u00fato\u010dn\u00edk z\u00edskal p\u0159\u00edstup k p\u016fvodn\u00edmu heslu, a ov\u011b\u0159en\u00ed identity vzd\u00e1len\u00e9ho po\u010d\u00edta\u010de je zbyte\u010dn\u00e9 pro zaji\u0161t\u011bn\u00ed bezpe\u010dnosti hesla.",
        sectionNumber: "9.4.17",
        sectionTitle: "Remote Login",
      },
      {
        uuid: "a32222b0-6572-46de-b19e-de23e7feb01b",
        correct:
          "Vzhledem k zv\u00fd\u0161en\u00e9mu riziku \u00fatok\u016f p\u0159i autentizaci p\u0159es s\u00ed\u0165, kdy \u00fato\u010dn\u00edk nemus\u00ed b\u00fdt fyzicky p\u0159\u00edtomen, je kl\u00ed\u010dov\u00e9 pou\u017e\u00edvat siln\u00e1 hesla a zv\u00e1\u017eit implementaci dvoufaktorov\u00e9 autentizace jako dodate\u010dn\u00e9 vrstvy zabezpe\u010den\u00ed pro ochranu proti neopr\u00e1vn\u011bn\u00e9mu p\u0159\u00edstupu.",
        incorrect:
          "I kdy\u017e autentizace p\u0159es s\u00ed\u0165 zvy\u0161uje riziko \u00fatok\u016f, pou\u017eit\u00ed dvoufaktorov\u00e9 autentizace zcela eliminuje pot\u0159ebu siln\u00fdch hesel, proto\u017ee i v p\u0159\u00edpad\u011b kompromitace hesla \u00fato\u010dn\u00edk nem\u016f\u017ee z\u00edskat p\u0159\u00edstup k syst\u00e9mu bez druh\u00e9ho faktoru, co\u017e \u010din\u00ed siln\u00e1 hesla nadbyte\u010dn\u00e1.",
        sectionNumber: "9.4.17",
        sectionTitle: "Remote Login",
      },
      {
        uuid: "2f9b10c9-6769-45bd-ba15-a2b27a68517f",
        correct:
          "Dvoufaktorov\u00e1 autentizace se st\u00e1v\u00e1 popul\u00e1rn\u00ed pro vzd\u00e1lenou autentizaci, jeliko\u017e v s\u00ed\u0165ov\u00e9m prost\u0159ed\u00ed jsou \u00fatoky levn\u011bj\u0161\u00ed a frekventovan\u011bj\u0161\u00ed. Prvn\u00edm faktorem b\u00fdv\u00e1 obvykle heslo, zat\u00edmco druh\u00fdm faktorem se \u010dasto vol\u00ed kryptografick\u00fd token, co\u017e je mal\u00e9 za\u0159\u00edzen\u00ed generuj\u00edc\u00ed sekvenci unik\u00e1tn\u00edch k\u00f3d\u016f, z nich\u017e jeden u\u017eivatel opisuje pro prok\u00e1z\u00e1n\u00ed vlastnictv\u00ed tokenu.",
        incorrect:
          "Dvoufaktorov\u00e1 autentizace se pro vzd\u00e1lenou autentizaci nikdy nepou\u017e\u00edv\u00e1, proto\u017ee je pova\u017eov\u00e1na za p\u0159\u00edli\u0161 komplikovanou a u\u017eivatelsky nep\u0159\u00edjemnou. Vzd\u00e1len\u00e1 autentizace se spol\u00e9h\u00e1 v\u00fdhradn\u011b na jednofaktorov\u00e9 heslo, a kryptografick\u00e9 tokeny se pro vzd\u00e1lenou autentizaci nepou\u017e\u00edvaj\u00ed z d\u016fvodu vysok\u00fdch n\u00e1klad\u016f na jejich implementaci a spr\u00e1vu.",
        sectionNumber: "9.4.18",
        sectionTitle: "2-factor Authentication",
      },
      {
        uuid: "98661d64-3323-4e7a-8a94-8364897d6a32",
        correct:
          "V kontextu lok\u00e1ln\u00ed autentizace se dvoufaktorov\u00e1 autentizace tak\u00e9 uplat\u0148uje, p\u0159i\u010dem\u017e biometrick\u00e1 autentizace se st\u00e1v\u00e1 atraktivn\u011bj\u0161\u00ed volbou oproti vzd\u00e1len\u00e9 autentizaci. Krom\u011b biometrick\u00fdch metod se pro lok\u00e1ln\u00ed dvoufaktorovou autentizaci b\u011b\u017en\u011b vyu\u017e\u00edvaj\u00ed i kryptografick\u00e9 tokeny a \u010dipov\u00e9 karty, kter\u00e9 s po\u010d\u00edta\u010dem komunikuj\u00ed p\u0159\u00edmo, eliminuj\u00edc nutnost manu\u00e1ln\u00edho opisov\u00e1n\u00ed k\u00f3du u\u017eivatelem.",
        incorrect:
          "Pro lok\u00e1ln\u00ed autentizaci se dvoufaktorov\u00e1 autentizace nikdy nepou\u017e\u00edv\u00e1, jeliko\u017e lok\u00e1ln\u00ed p\u0159\u00edstup vy\u017eaduje pouze jednofaktorov\u00e9 ov\u011b\u0159en\u00ed heslem. Biometrick\u00e1 autentizace a kryptografick\u00e9 tokeny jsou pro lok\u00e1ln\u00ed autentizaci zcela nepou\u017eiteln\u00e9 a nepraktick\u00e9, a v lok\u00e1ln\u00edm sc\u00e9n\u00e1\u0159i se v\u017edy vy\u017eaduje manu\u00e1ln\u00ed opisov\u00e1n\u00ed k\u00f3du i u \u010dipov\u00fdch karet.",
        sectionNumber: "9.4.18",
        sectionTitle: "2-factor Authentication",
      },
      {
        uuid: "59fdce82-c30d-4ff6-a45c-b43076790f0d",
        correct:
          "Pro zaji\u0161t\u011bn\u00ed bezpe\u010dn\u00e9 komunikace se vzd\u00e1len\u00fdm po\u010d\u00edta\u010dem je z\u00e1sadn\u00ed ov\u011b\u0159it jeho identitu, p\u0159i\u010dem\u017e se nejedn\u00e1 pouze o ochranu hesel, ale i o prevenci \u00faniku citliv\u00fdch dat v d\u016fsledku ne\u00famysln\u00e9ho odesl\u00e1n\u00ed na neautorizovan\u00fd syst\u00e9m. Tento probl\u00e9m se st\u00e1v\u00e1 kritick\u00fdm zejm\u00e9na v prost\u0159ed\u00edch s vysok\u00fdmi n\u00e1roky na d\u016fv\u011brnost informac\u00ed.",
        incorrect:
          "Pro zaji\u0161t\u011bn\u00ed bezpe\u010dn\u00e9 komunikace se vzd\u00e1len\u00fdm po\u010d\u00edta\u010dem je z\u00e1sadn\u00ed ov\u011b\u0159it jeho identitu, prim\u00e1rn\u011b z d\u016fvodu ochrany hesel, zat\u00edmco prevence \u00faniku citliv\u00fdch dat odesl\u00e1n\u00edm na neautorizovan\u00fd syst\u00e9m je pova\u017eov\u00e1na za m\u00e9n\u011b kritick\u00fd aspekt bezpe\u010dnosti, obzvl\u00e1\u0161t\u011b v prost\u0159ed\u00edch s n\u00edzk\u00fdmi n\u00e1roky na d\u016fv\u011brnost informac\u00ed.",
        sectionNumber: "9.4.19",
        sectionTitle: "Computer Authentication",
      },
      {
        uuid: "8211e4e5-7a77-4da4-968e-b63962c2cf64",
        correct:
          "Autentizace vzd\u00e1len\u00e9ho po\u010d\u00edta\u010de se typicky op\u00edr\u00e1 o asymetrickou kryptografii, kde ka\u017ed\u00fd po\u010d\u00edta\u010d disponuje unik\u00e1tn\u00edm soukrom\u00fdm kl\u00ed\u010dem, kter\u00fd je dr\u017een v tajnosti, a ve\u0159ejn\u011b dostupn\u00fdm ve\u0159ejn\u00fdm kl\u00ed\u010dem, p\u0159\u00edpadn\u011b jen jeho kryptografick\u00fdm otiskem, kter\u00fd je distribuov\u00e1n mezi potenci\u00e1ln\u00ed klienty pro ov\u011b\u0159en\u00ed identity.",
        incorrect:
          "Autentizace vzd\u00e1len\u00e9ho po\u010d\u00edta\u010de se typicky op\u00edr\u00e1 o symetrickou kryptografii, kde se pro ov\u011b\u0159en\u00ed identity pou\u017e\u00edv\u00e1 sd\u00edlen\u00e9 tajemstv\u00ed mezi klientem a serverem, a asymetrick\u00e1 kryptografie s ve\u0159ejn\u00fdmi a soukrom\u00fdmi kl\u00ed\u010di se v tomto kontextu identity po\u010d\u00edta\u010d\u016f obvykle neuplat\u0148uje, preferuje se jednodu\u0161\u0161\u00ed spr\u00e1va kl\u00ed\u010d\u016f.",
        sectionNumber: "9.4.19",
        sectionTitle: "Computer Authentication",
      },
      {
        uuid: "2c2f8d1a-17e4-440d-8c68-12e89865d463",
        correct:
          "B\u011bhem navazov\u00e1n\u00ed spojen\u00ed s vzd\u00e1len\u00fdm po\u010d\u00edta\u010dem klient iniciuje autentiza\u010dn\u00ed proces generov\u00e1n\u00edm n\u00e1hodn\u00e9 v\u00fdzvy (challenge), kterou n\u00e1sledn\u011b ode\u0161le serveru s po\u017eadavkem na jej\u00ed digit\u00e1ln\u00ed podpis pomoc\u00ed soukrom\u00e9ho kl\u00ed\u010de serveru, co\u017e slou\u017e\u00ed jako kryptografick\u00fd d\u016fkaz identity serveru a zamezuje impersonaci.",
        incorrect:
          "B\u011bhem navazov\u00e1n\u00ed spojen\u00ed s vzd\u00e1len\u00fdm po\u010d\u00edta\u010dem klient iniciuje autentiza\u010dn\u00ed proces generov\u00e1n\u00edm n\u00e1hodn\u00e9 v\u00fdzvy (challenge), kterou n\u00e1sledn\u011b ode\u0161le serveru s po\u017eadavkem na jej\u00ed digit\u00e1ln\u00ed podpis pomoc\u00ed ve\u0159ejn\u00e9ho kl\u00ed\u010de serveru, co\u017e slou\u017e\u00ed jako kryptografick\u00fd d\u016fkaz identity serveru a je efektivn\u00ed i proti \u00fatok\u016fm typu man-in-the-middle.",
        sectionNumber: "9.4.19",
        sectionTitle: "Computer Authentication",
      },
    ],
  };
