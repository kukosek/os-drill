import type { Section } from '../../common/types';

export const section11_the_kernel: Section = {
    uuid: "011c0e8f-c8b7-4ea9-8c7b-239ac4794871",
    sectionNumber: "11",
    sectionTitle: "The Kernel",
    statements: [
      {
        uuid: "59f981ec-5276-4c20-80b3-1ad2e2ece1bd",
        correct:
          "Modern\u00ed univerz\u00e1ln\u00ed procesory, kter\u00e9 se pou\u017e\u00edvaj\u00ed v b\u011b\u017en\u00fdch po\u010d\u00edta\u010d\u00edch a serverech, typicky implementuj\u00ed dva z\u00e1kladn\u00ed re\u017eimy provozu: privilegovan\u00fd re\u017eim (ozna\u010dovan\u00fd tak\u00e9 jako supervisor mode) a u\u017eivatelsk\u00fd re\u017eim. Tato architektura umo\u017e\u0148uje opera\u010dn\u00edmu syst\u00e9mu efektivn\u011b \u0159\u00eddit p\u0159\u00edstup k hardwaru a chr\u00e1nit syst\u00e9mov\u00e9 zdroje p\u0159ed neopr\u00e1vn\u011bn\u00fdm z\u00e1sahem u\u017eivatelsk\u00fdch aplikac\u00ed.",
        incorrect:
          "Modern\u00ed mikrokontrolery, kter\u00e9 se pou\u017e\u00edvaj\u00ed v embedded syst\u00e9mech a specializovan\u00fdch za\u0159\u00edzen\u00edch, typicky implementuj\u00ed dva z\u00e1kladn\u00ed re\u017eimy provozu: privilegovan\u00fd re\u017eim (ozna\u010dovan\u00fd tak\u00e9 jako supervisor mode) a u\u017eivatelsk\u00fd re\u017eim. Tato architektura umo\u017e\u0148uje opera\u010dn\u00edmu syst\u00e9mu efektivn\u011b \u0159\u00eddit p\u0159\u00edstup k hardwaru a chr\u00e1nit syst\u00e9mov\u00e9 zdroje p\u0159ed neopr\u00e1vn\u011bn\u00fdm z\u00e1sahem u\u017eivatelsk\u00fdch aplikac\u00ed.",
        sectionNumber: "11.1.1",
        sectionTitle: "CPU Modes",
      },
      {
        uuid: "ad26cb34-de63-4146-a852-6b73b7386f10",
        correct:
          "Architektura x86, b\u011b\u017en\u011b pou\u017e\u00edvan\u00e1 v osobn\u00edch po\u010d\u00edta\u010d\u00edch, nab\u00edz\u00ed celkem \u010dty\u0159i \u00farovn\u011b opr\u00e1vn\u011bn\u00ed, \u010dasto ozna\u010dovan\u00e9 jako kruhy 0, 1, 2 a 3.  V\u011bt\u0161ina opera\u010dn\u00edch syst\u00e9m\u016f, jako nap\u0159\u00edklad Linux nebo Windows, v\u0161ak pro zjednodu\u0161en\u00ed spr\u00e1vy a zv\u00fd\u0161en\u00ed v\u00fdkonu vyu\u017e\u00edv\u00e1 pouze dva z t\u011bchto kruh\u016f, konkr\u00e9tn\u011b kruh 0 pro j\u00e1dro opera\u010dn\u00edho syst\u00e9mu a kruh 3 pro u\u017eivatelsk\u00e9 aplikace.",
        incorrect:
          "Architektura x86, b\u011b\u017en\u011b pou\u017e\u00edvan\u00e1 v osobn\u00edch po\u010d\u00edta\u010d\u00edch, nab\u00edz\u00ed celkem \u010dty\u0159i \u00farovn\u011b opr\u00e1vn\u011bn\u00ed, \u010dasto ozna\u010dovan\u00e9 jako kruhy 0, 1, 2 a 3. V\u011bt\u0161ina modern\u00edch opera\u010dn\u00edch syst\u00e9m\u016f, jako nap\u0159\u00edklad Linux nebo Windows, efektivn\u011b vyu\u017e\u00edv\u00e1 v\u0161echny \u010dty\u0159i kruhy opr\u00e1vn\u011bn\u00ed pro detailn\u00ed \u0159\u00edzen\u00ed p\u0159\u00edstupu a izolaci proces\u016f, \u010d\u00edm\u017e maximalizuje bezpe\u010dnost a stabilitu syst\u00e9mu.",
        sectionNumber: "11.1.1",
        sectionTitle: "CPU Modes",
      },
      {
        uuid: "a164cef7-fb2a-4b53-b40e-9b9d54a71690",
        correct:
          "Opera\u010dn\u00ed syst\u00e9m vyu\u017e\u00edv\u00e1 privilegovan\u00fd re\u017eim procesoru k implementaci bezpe\u010dnostn\u00edch mechanism\u016f a k zaji\u0161t\u011bn\u00ed stability syst\u00e9mu. Operace, kter\u00e9 mohou m\u00edt potenci\u00e1ln\u011b \u0161kodliv\u00fd dopad na syst\u00e9m, jako je nap\u0159\u00edklad p\u0159\u00edm\u00fd p\u0159\u00edstup k hardwaru nebo manipulace s pam\u011bt\u00ed jin\u00fdch proces\u016f, jsou povoleny pouze v privilegovan\u00e9m re\u017eimu, \u010d\u00edm\u017e se zabr\u00e1n\u00ed neopr\u00e1vn\u011bn\u00fdm z\u00e1sah\u016fm ze strany u\u017eivatelsk\u00fdch aplikac\u00ed.",
        incorrect:
          "Opera\u010dn\u00ed syst\u00e9m se spol\u00e9h\u00e1 v\u00fdhradn\u011b na softwarov\u00e9 mechanismy a program\u00e1torskou discipl\u00ednu p\u0159i zaji\u0161\u0165ov\u00e1n\u00ed bezpe\u010dnosti a stability syst\u00e9mu. Privilegovan\u00fd re\u017eim procesoru se pou\u017e\u00edv\u00e1 pouze pro specifick\u00e9 hardwarov\u00e9 operace, ale nem\u00e1 z\u00e1sadn\u00ed vliv na ochranu syst\u00e9mu p\u0159ed chybami a \u0161kodliv\u00fdmi aktivitami u\u017eivatelsk\u00fdch aplikac\u00ed, kter\u00e9 b\u011b\u017e\u00ed v u\u017eivatelsk\u00e9m re\u017eimu.",
        sectionNumber: "11.1.1",
        sectionTitle: "CPU Modes",
      },
      {
        uuid: "90393ae1-1c18-42e6-acda-e16f09110a8a",
        correct:
          "V\u011bt\u0161ina opera\u010dn\u00edho syst\u00e9mu, v\u010detn\u011b v\u00fdznamn\u00e9 \u010d\u00e1sti k\u00f3du syst\u00e9mov\u00fdch slu\u017eeb a u\u017eivatelsk\u00fdch aplikac\u00ed, je navr\u017eena pro b\u011bh v u\u017eivatelsk\u00e9m re\u017eimu procesoru, kter\u00fd se vyzna\u010duje z\u00e1m\u011brn\u011b omezen\u00fdmi opr\u00e1vn\u011bn\u00edmi s c\u00edlem zv\u00fd\u0161it bezpe\u010dnost a stabilitu syst\u00e9mu t\u00edm, \u017ee zabra\u0148uje neautorizovan\u00fdm z\u00e1sah\u016fm do hardwaru a pam\u011bti.",
        incorrect:
          "V\u011bt\u0161ina opera\u010dn\u00edho syst\u00e9mu, v\u010detn\u011b kernelu a kritick\u00fdch syst\u00e9mov\u00fdch slu\u017eeb, je typicky implementov\u00e1na pro b\u011bh v privilegovan\u00e9m re\u017eimu procesoru, co\u017e umo\u017e\u0148uje neomezen\u00fd p\u0159\u00edstup ke v\u0161em hardwarov\u00fdm funkc\u00edm a pam\u011b\u0165ov\u00fdm oblastem, a minimalizuje tak re\u017eii spojenou s p\u0159ep\u00edn\u00e1n\u00edm re\u017eim\u016f pro syst\u00e9mov\u00e9 operace.",
        sectionNumber: "11.1.2",
        sectionTitle: "Privileged Mode",
      },
      {
        uuid: "593cbf23-b084-4e05-9277-3f9a0f7259e1",
        correct:
          "Kernel opera\u010dn\u00edho syst\u00e9mu p\u0159edstavuje kl\u00ed\u010dovou sou\u010d\u00e1st softwarov\u00e9ho vybaven\u00ed, kter\u00e1 je v\u00fdhradn\u011b spou\u0161t\u011bna v privilegovan\u00e9m re\u017eimu procesoru, co\u017e mu umo\u017e\u0148uje pln\u00fd p\u0159\u00edstup ke v\u0161em hardwarov\u00fdm zdroj\u016fm, v\u010detn\u011b mo\u017enosti programovat jednotku spr\u00e1vy pam\u011bti (MMU), a t\u00edm efektivn\u011b \u0159\u00eddit alokaci a ochranu pam\u011bti pro v\u0161echny procesy v syst\u00e9mu.",
        incorrect:
          "Kernel opera\u010dn\u00edho syst\u00e9mu je navr\u017een tak, aby b\u011b\u017eel v u\u017eivatelsk\u00e9m re\u017eimu procesoru, \u010d\u00edm\u017e se zvy\u0161uje bezpe\u010dnost syst\u00e9mu omezen\u00edm jeho p\u0159\u00edstupu k hardwarov\u00fdm zdroj\u016fm a vy\u017eaduje se, aby pro ve\u0161kerou spr\u00e1vu pam\u011bti a hardwaru vyu\u017e\u00edval pouze syst\u00e9mov\u00e1 vol\u00e1n\u00ed do privilegovan\u00e9ho re\u017eimu.",
        sectionNumber: "11.1.2",
        sectionTitle: "Privileged Mode",
      },
      {
        uuid: "c8b7f89e-dc80-47d8-bef5-d7756542e549",
        correct:
          "Zat\u00edmco kernel opera\u010dn\u00edho syst\u00e9mu nezbytn\u011b vy\u017eaduje privilegovan\u00fd re\u017eim pro sv\u016fj neru\u0161en\u00fd a efektivn\u00ed provoz s maxim\u00e1ln\u00edmi opr\u00e1vn\u011bn\u00edmi, aplika\u010dn\u00ed software, syst\u00e9mov\u00e9 knihovny a r\u016fzn\u00e9 daemonsk\u00e9 procesy jsou z\u00e1m\u011brn\u011b spou\u0161t\u011bny v u\u017eivatelsk\u00e9m re\u017eimu, kde jejich mo\u017enosti jsou striktn\u011b regulov\u00e1ny a omezeny konfigurac\u00ed jednotky spr\u00e1vy pam\u011bti (MMU) nastavenou kernelem.",
        incorrect:
          "Aplika\u010dn\u00ed software, syst\u00e9mov\u00e9 knihovny a daemonsk\u00e9 procesy jsou obvykle spou\u0161t\u011bny v privilegovan\u00e9m re\u017eimu procesoru, aby se maximalizoval v\u00fdkon a umo\u017enil jim p\u0159\u00edm\u00fd a neomezen\u00fd p\u0159\u00edstup k hardwarov\u00fdm zdroj\u016fm syst\u00e9mu, \u010d\u00edm\u017e se zjednodu\u0161uje v\u00fdvoj a spr\u00e1va aplikac\u00ed.",
        sectionNumber: "11.1.2",
        sectionTitle: "Privileged Mode",
      },
      {
        uuid: "ff78f2aa-d3d5-4d24-9111-4390246f4eb2",
        correct:
          "MMU je subsyst\u00e9m procesoru, kter\u00fd se star\u00e1 o p\u0159eklad adres, co\u017e je proces, p\u0159i kter\u00e9m se virtu\u00e1ln\u00ed adresy pou\u017e\u00edvan\u00e9 programy p\u0159ev\u00e1d\u011bj\u00ed na fyzick\u00e9 adresy, je\u017e odpov\u00eddaj\u00ed skute\u010dn\u00fdm um\u00edst\u011bn\u00edm v pam\u011bti. J\u00e1dro opera\u010dn\u00edho syst\u00e9mu spravuje tyto p\u0159eklady konfigurac\u00ed p\u0159ekladov\u00fdch tabulek, kter\u00e9 MMU pou\u017e\u00edv\u00e1 b\u011bhem procesu p\u0159ekladu adres.",
        incorrect:
          "MMU je subsyst\u00e9m procesoru, kter\u00fd se star\u00e1 o pl\u00e1nov\u00e1n\u00ed proces\u016f, co\u017e je proces, p\u0159i kter\u00e9m se virtu\u00e1ln\u00ed adresy pou\u017e\u00edvan\u00e9 programy p\u0159ev\u00e1d\u011bj\u00ed na fyzick\u00e9 adresy, je\u017e odpov\u00eddaj\u00ed skute\u010dn\u00fdm um\u00edst\u011bn\u00edm v pam\u011bti. U\u017eivatel opera\u010dn\u00edho syst\u00e9mu spravuje tyto p\u0159eklady p\u0159\u00edmou konfigurac\u00ed MMU b\u011bhem procesu p\u0159ekladu adres.",
        sectionNumber: "11.1.3",
        sectionTitle: "Reminder: Memory Management Unit",
      },
      {
        uuid: "fa0320b9-7db1-4e9a-bcea-7dbc78f27504",
        correct:
          "Adresy, se kter\u00fdmi programy pracuj\u00ed, jsou virtu\u00e1ln\u00ed adresy, kter\u00e9 nep\u0159edstavuj\u00ed fixn\u00ed fyzick\u00e9 lokace v pam\u011b\u0165ov\u00fdch \u010dipech. \u00dakolem MMU je p\u0159ekl\u00e1dat tyto virtu\u00e1ln\u00ed adresy na fyzick\u00e9 adresy, kter\u00e9 maj\u00ed pevnou vazbu na konkr\u00e9tn\u00ed pam\u011b\u0165ov\u00e9 bu\u0148ky. Zp\u016fsob, jak\u00fdm jsou tyto adresy mapov\u00e1ny, je programovateln\u00fd a \u0159\u00edzen\u00fd j\u00e1drem opera\u010dn\u00edho syst\u00e9mu.",
        incorrect:
          "Adresy, se kter\u00fdmi programy pracuj\u00ed, jsou fyzick\u00e9 adresy, kter\u00e9 p\u0159\u00edmo p\u0159edstavuj\u00ed fixn\u00ed fyzick\u00e9 lokace v pam\u011b\u0165ov\u00fdch \u010dipech. \u00dakolem CPU je p\u0159ekl\u00e1dat tyto fyzick\u00e9 adresy na virtu\u00e1ln\u00ed adresy, kter\u00e9 maj\u00ed pevnou vazbu na konkr\u00e9tn\u00ed pam\u011b\u0165ov\u00e9 bu\u0148ky. Zp\u016fsob, jak\u00fdm jsou tyto adresy mapov\u00e1ny, je pevn\u011b dan\u00fd a \u0159\u00edzen\u00fd hardwarem po\u010d\u00edta\u010de.",
        sectionNumber: "11.1.3",
        sectionTitle: "Reminder: Memory Management Unit",
      },
      {
        uuid: "1bf3e377-1ccd-4465-a29f-e913ecf5a37f",
        correct:
          "Spr\u00e1va mapov\u00e1n\u00ed mezi virtu\u00e1ln\u00edmi a fyzick\u00fdmi adresami je pln\u011b v kompetenci j\u00e1dra opera\u010dn\u00edho syst\u00e9mu. J\u00e1dro vytv\u00e1\u0159\u00ed a konfiguruje p\u0159ekladov\u00e9 tabulky, kter\u00e9 MMU pou\u017e\u00edv\u00e1 k prov\u00e1d\u011bn\u00ed p\u0159ekladu adres. To umo\u017e\u0148uje opera\u010dn\u00edmu syst\u00e9mu efektivn\u011b spravovat pam\u011b\u0165 a poskytovat program\u016fm izolovan\u00fd adresn\u00ed prostor.",
        incorrect:
          "Spr\u00e1va mapov\u00e1n\u00ed mezi virtu\u00e1ln\u00edmi a fyzick\u00fdmi adresami je pln\u011b v kompetenci u\u017eivatelsk\u00fdch program\u016f. U\u017eivatelsk\u00e9 programy vytv\u00e1\u0159ej\u00ed a konfiguruj\u00ed p\u0159ekladov\u00e9 tabulky, kter\u00e9 MMU pou\u017e\u00edv\u00e1 k prov\u00e1d\u011bn\u00ed p\u0159ekladu adres. To umo\u017e\u0148uje u\u017eivatel\u016fm p\u0159\u00edmo spravovat pam\u011b\u0165 a obch\u00e1zet omezen\u00ed opera\u010dn\u00edho syst\u00e9mu.",
        sectionNumber: "11.1.3",
        sectionTitle: "Reminder: Memory Management Unit",
      },
      {
        uuid: "ece7593e-ee6e-4cea-abd7-2f1165e7bfd4",
        correct:
          "Mapov\u00e1n\u00ed j\u00e1dra do v\u0161ech proces\u016f je b\u011b\u017en\u011b pou\u017e\u00edvan\u00fd trik, kter\u00fd zlep\u0161uje v\u00fdkon syst\u00e9mu. D\u00edky tomuto mapov\u00e1n\u00ed se minimalizuje pot\u0159eba n\u00e1kladn\u00e9 v\u00fdm\u011bny tabulek str\u00e1nek, zejm\u00e9na p\u0159i syst\u00e9mov\u00fdch vol\u00e1n\u00edch, co\u017e vede k rychlej\u0161\u00edmu prov\u00e1d\u011bn\u00ed syst\u00e9mov\u00fdch operac\u00ed a celkov\u011b efektivn\u011bj\u0161\u00edmu chodu syst\u00e9mu.",
        incorrect:
          "Mapov\u00e1n\u00ed j\u00e1dra do v\u0161ech proces\u016f je technika, kter\u00e1 se pou\u017e\u00edv\u00e1 v\u00fdhradn\u011b pro zv\u00fd\u0161en\u00ed bezpe\u010dnosti opera\u010dn\u00edho syst\u00e9mu. Hlavn\u00edm c\u00edlem tohoto mapov\u00e1n\u00ed je izolovat procesy u\u017eivatelsk\u00e9ho prostoru od j\u00e1dra, a i kdy\u017e to m\u016f\u017ee m\u00edt m\u00edrn\u00fd dopad na v\u00fdkon, prim\u00e1rn\u00edm z\u00e1m\u011brem je pos\u00edlen\u00ed bezpe\u010dnosti syst\u00e9mu.",
        sectionNumber: "11.1.4",
        sectionTitle: "Kernel Protection",
      },
      {
        uuid: "e1f8fe0c-4591-4df6-9eec-d51952e55fb1",
        correct:
          "Str\u00e1nky pam\u011bti j\u00e1dra jsou speci\u00e1ln\u011b chr\u00e1n\u011bny pomoc\u00ed p\u0159\u00edznaku supervizora, kter\u00fd zaji\u0161\u0165uje, \u017ee k nim nem\u016f\u017ee p\u0159istupovat k\u00f3d b\u011b\u017e\u00edc\u00ed v u\u017eivatelsk\u00e9m re\u017eimu. Tato ochrana je kl\u00ed\u010dov\u00e1 pro zabr\u00e1n\u011bn\u00ed neopr\u00e1vn\u011bn\u00e9 manipulaci s j\u00e1drem a pro zachov\u00e1n\u00ed stability a integrity cel\u00e9ho opera\u010dn\u00edho syst\u00e9mu.",
        incorrect:
          "Str\u00e1nky pam\u011bti j\u00e1dra jsou chr\u00e1n\u011bny p\u0159edev\u0161\u00edm slo\u017eit\u00fdmi \u0161ifrovac\u00edmi mechanismy, kter\u00e9 zabra\u0148uj\u00ed neopr\u00e1vn\u011bn\u00e9mu p\u0159\u00edstupu z u\u017eivatelsk\u00e9ho prostoru. P\u0159\u00edznak supervizora hraje v ochran\u011b j\u00e1dra pouze dopl\u0148kovou roli a hlavn\u00ed d\u016fraz je kladen na kryptografick\u00e9 metody.",
        sectionNumber: "11.1.4",
        sectionTitle: "Kernel Protection",
      },
      {
        uuid: "5577ca85-f0a8-415c-bf02-f124a0a0d8bd",
        correct:
          "V\u00fdm\u011bna tabulek str\u00e1nek je operace, kter\u00e1 je z hlediska v\u00fdkonu pom\u011brn\u011b n\u00e1kladn\u00e1, a opera\u010dn\u00ed syst\u00e9my se proto sna\u017e\u00ed minimalizovat jej\u00ed frekvenci. Zvl\u00e1\u0161t\u011b ne\u017e\u00e1douc\u00ed je v\u00fdm\u011bna tabulek str\u00e1nek v kritick\u00fdch cest\u00e1ch, jako jsou syst\u00e9mov\u00e1 vol\u00e1n\u00ed, kde by mohla v\u00fdrazn\u011b zpomalit odezvu syst\u00e9mu.",
        incorrect:
          "V\u00fdm\u011bna tabulek str\u00e1nek je v modern\u00edch opera\u010dn\u00edch syst\u00e9mech optimalizov\u00e1na a p\u0159edstavuje velmi rychlou operaci s minim\u00e1ln\u00edm dopadem na v\u00fdkon. Opera\u010dn\u00ed syst\u00e9my se proto nemus\u00ed sna\u017eit omezovat v\u00fdm\u011bnu tabulek str\u00e1nek, a to ani v cest\u011b syst\u00e9mov\u00fdch vol\u00e1n\u00ed, kde je v\u00fdkon st\u00e1le zachov\u00e1n na vysok\u00e9 \u00farovni.",
        sectionNumber: "11.1.4",
        sectionTitle: "Kernel Protection",
      },
      {
        uuid: "c73e10ca-330e-4791-867a-3133f45f4912",
        correct:
          "Po zapnut\u00ed po\u010d\u00edta\u010de se syst\u00e9m nach\u00e1z\u00ed ve v\u00fdchoz\u00edm stavu, proto\u017ee opera\u010dn\u00ed pam\u011b\u0165 RAM je volatiln\u00ed a po vypnut\u00ed nap\u00e1jen\u00ed rychle ztrat\u00ed ve\u0161ker\u00fd obsah, co\u017e znamen\u00e1, \u017ee p\u0159i op\u011btovn\u00e9m zapnut\u00ed je RAM pr\u00e1zdn\u00e1 a CPU v implicitn\u00edm stavu.",
        incorrect:
          "Po zapnut\u00ed po\u010d\u00edta\u010de se syst\u00e9m nach\u00e1z\u00ed v pln\u011b funk\u010dn\u00edm stavu, proto\u017ee opera\u010dn\u00ed pam\u011b\u0165 RAM si uchov\u00e1v\u00e1 obsah i po vypnut\u00ed nap\u00e1jen\u00ed, co\u017e znamen\u00e1, \u017ee p\u0159i op\u011btovn\u00e9m zapnut\u00ed je RAM pln\u00e1 dat a CPU p\u0159ipraven k okam\u017eit\u00e9mu pou\u017eit\u00ed.",
        sectionNumber: "11.2.1",
        sectionTitle: "Starting the OS",
      },
      {
        uuid: "fb13f668-4945-435c-bcaf-3bc783568b17",
        correct:
          "Inicializace po\u010d\u00edta\u010dov\u00e9 platformy po zapnut\u00ed zahrnuje prim\u00e1rn\u011b inicializaci centr\u00e1ln\u00ed procesorov\u00e9 jednotky (CPU), d\u00e1le pak perifern\u00edch za\u0159\u00edzen\u00ed jako je konzolov\u00fd hardware, v\u010detn\u011b kl\u00e1vesnice a displeje, a n\u00e1sledn\u011b i v\u0161ech ostatn\u00edch za\u0159\u00edzen\u00ed p\u0159ipojen\u00fdch k syst\u00e9mu.",
        incorrect:
          "Inicializace po\u010d\u00edta\u010dov\u00e9 platformy po zapnut\u00ed se omezuje pouze na kontrolu persistentn\u00edho \u00falo\u017ei\u0161t\u011b dat a opera\u010dn\u00ed pam\u011bti RAM, p\u0159i\u010dem\u017e inicializace centr\u00e1ln\u00ed procesorov\u00e9 jednotky (CPU) a perifern\u00edch za\u0159\u00edzen\u00ed, jako je konzolov\u00fd hardware, prob\u00edh\u00e1 a\u017e v pozd\u011bj\u0161\u00ed f\u00e1zi spou\u0161t\u011bn\u00ed opera\u010dn\u00edho syst\u00e9mu.",
        sectionNumber: "11.2.1",
        sectionTitle: "Starting the OS",
      },
      {
        uuid: "097c44fb-8ffa-4e2e-858d-587f42559c32",
        correct:
          "Po vypnut\u00ed nap\u00e1jen\u00ed a n\u00e1sledn\u00e9m zapnut\u00ed po\u010d\u00edta\u010de se stav syst\u00e9mu, s v\u00fdjimkou obsahu trval\u00e9ho \u00falo\u017ei\u0161t\u011b, vrac\u00ed do stavu, v jak\u00e9m byl po\u010d\u00edta\u010d p\u0159i opu\u0161t\u011bn\u00ed tov\u00e1rny, co\u017e znamen\u00e1, \u017ee po\u010d\u00edta\u010d je v podstat\u011b ve v\u00fdchoz\u00edm, nepou\u017eiteln\u00e9m stavu, dokud neprob\u011bhne inicializace a zaveden\u00ed opera\u010dn\u00edho syst\u00e9mu.",
        incorrect:
          "Po vypnut\u00ed a zapnut\u00ed po\u010d\u00edta\u010de se stav syst\u00e9mu, v\u010detn\u011b opera\u010dn\u00ed pam\u011bti RAM, uchov\u00e1 v posledn\u00edm funk\u010dn\u00edm stavu p\u0159ed vypnut\u00edm, d\u00edky \u010demu\u017e je po\u010d\u00edta\u010d ihned po zapnut\u00ed p\u0159ipraven k pou\u017eit\u00ed a nen\u00ed nutn\u00e1 \u017e\u00e1dn\u00e1 inicializace syst\u00e9mu ani zaveden\u00ed opera\u010dn\u00edho syst\u00e9mu.",
        sectionNumber: "11.2.1",
        sectionTitle: "Starting the OS",
      },
      {
        uuid: "2a78e802-4fdc-484e-ac5e-c4f3d8a62ca9",
        correct:
          "Inicializace firmwaru p\u0159edch\u00e1z\u00ed zaveden\u00ed bootloaderu v sekvenci spou\u0161t\u011bn\u00ed opera\u010dn\u00edho syst\u00e9mu, co\u017e zaji\u0161\u0165uje, \u017ee hardware a firmware jsou v po\u010d\u00e1te\u010dn\u00edm stavu p\u0159ipraven\u00e9m pro na\u010dten\u00ed a spu\u0161t\u011bn\u00ed bootloaderu z trval\u00e9ho \u00falo\u017ei\u0161t\u011b.",
        incorrect:
          "Inicializace firmwaru prob\u00edh\u00e1 a\u017e po zaveden\u00ed bootloaderu v sekvenci spou\u0161t\u011bn\u00ed opera\u010dn\u00edho syst\u00e9mu, co\u017e znamen\u00e1, \u017ee bootloader nejprve inicializuje hardware a firmware p\u0159ed na\u010dten\u00edm j\u00e1dra.",
        sectionNumber: "11.2.2",
        sectionTitle: "Boot Process",
      },
      {
        uuid: "da83fc12-8644-4670-bdaf-898dcdfb099c",
        correct:
          "Bootloader je zodpov\u011bdn\u00fd za nalezen\u00ed a zaveden\u00ed j\u00e1dra opera\u010dn\u00edho syst\u00e9mu z trval\u00e9ho \u00falo\u017ei\u0161t\u011b, p\u0159i\u010dem\u017e vyu\u017e\u00edv\u00e1 slu\u017eeb firmwaru k identifikaci a na\u010dten\u00ed dat z tohoto \u00falo\u017ei\u0161t\u011b, co\u017e je kl\u00ed\u010dov\u00fd krok v procesu spou\u0161t\u011bn\u00ed syst\u00e9mu.",
        incorrect:
          "J\u00e1dro opera\u010dn\u00edho syst\u00e9mu je zodpov\u011bdn\u00e9 za zaveden\u00ed bootloaderu z trval\u00e9ho \u00falo\u017ei\u0161t\u011b, p\u0159i\u010dem\u017e bootloader se aktivuje a\u017e po spu\u0161t\u011bn\u00ed j\u00e1dra a jeho hlavn\u00edm \u00fakolem je inicializace firmwaru.",
        sectionNumber: "11.2.2",
        sectionTitle: "Boot Process",
      },
      {
        uuid: "c651b890-f219-4f96-9215-f0d1f5d398df",
        correct:
          "Modern\u00ed firmware a bootloadery jsou \u010dasto sofistikovan\u00e9 a schopn\u00e9 zvl\u00e1dat komplexn\u00ed \u00falohy, jako je pr\u00e1ce s \u0161ifrovan\u00fdmi disky a porozum\u011bn\u00ed slo\u017eit\u00fdm souborov\u00fdm syst\u00e9m\u016fm, co\u017e umo\u017e\u0148uje flexibiln\u011bj\u0161\u00ed a bezpe\u010dn\u011bj\u0161\u00ed proces spou\u0161t\u011bn\u00ed syst\u00e9mu.",
        incorrect:
          "Modern\u00ed firmware a bootloadery jsou navr\u017eeny tak, aby byly co nejjednodu\u0161\u0161\u00ed a nejprimitivn\u011bj\u0161\u00ed, a z\u00e1m\u011brn\u011b nepodporuj\u00ed slo\u017eit\u00e9 funkce, jako je pr\u00e1ce s \u0161ifrovan\u00fdmi disky nebo porozum\u011bn\u00ed souborov\u00fdm syst\u00e9m\u016fm, aby se minimalizovala jejich slo\u017eitost a potenci\u00e1ln\u00ed chyby.",
        sectionNumber: "11.2.2",
        sectionTitle: "Boot Process",
      },
      {
        uuid: "cf376aeb-3a99-4812-8156-fc407266b875",
        correct:
          "Na architektu\u0159e x86 se CPU zpo\u010d\u00e1tku spou\u0161t\u00ed v 16bitov\u00e9m re\u017eimu z d\u016fvodu po\u017eadavk\u016f na zp\u011btnou kompatibilitu, a v p\u0159\u00edpad\u011b 32bitov\u00fdch procesor\u016f x86 je v t\u00e9to f\u00e1zi tak\u00e9 jednotka spr\u00e1vy pam\u011bti (MMU) deaktivov\u00e1na.",
        incorrect:
          "Na architektu\u0159e x86 se CPU zpo\u010d\u00e1tku spou\u0161t\u00ed v 32bitov\u00e9m re\u017eimu, aby byl od za\u010d\u00e1tku zaji\u0161t\u011bn optim\u00e1ln\u00ed v\u00fdkon, a jednotka spr\u00e1vy pam\u011bti (MMU) je okam\u017eit\u011b aktivov\u00e1na, aby efektivn\u011b spravovala pam\u011b\u0165 od spu\u0161t\u011bn\u00ed syst\u00e9mu.",
        sectionNumber: "11.2.3",
        sectionTitle: "CPU Init",
      },
      {
        uuid: "7cfb16db-c873-4ac1-a046-a83ae5da76b3",
        correct:
          "Zat\u00edmco modern\u00ed 64bitov\u00e9 procesory x86 se st\u00e1le spou\u0161t\u011bj\u00ed v 16bitov\u00e9m re\u017eimu kv\u016fli kompatibilit\u011b, firmware na t\u011bchto procesorech je dostate\u010dn\u011b pokro\u010dil\u00fd, aby p\u0159epnul CPU do 64bitov\u00e9ho re\u017eimu \u201elong mode\u201c je\u0161t\u011b p\u0159ed p\u0159ed\u00e1n\u00edm \u0159\u00edzen\u00ed bootloaderu, \u010d\u00edm\u017e se zjednodu\u0161uje proces spou\u0161t\u011bn\u00ed.",
        incorrect:
          "A\u010dkoli se modern\u00ed 64bitov\u00e9 procesory x86 spou\u0161t\u011bj\u00ed v 16bitov\u00e9m re\u017eimu, firmware ponech\u00e1v\u00e1 CPU v tomto 16bitov\u00e9m re\u017eimu a je v\u00fdhradn\u00ed odpov\u011bdnost\u00ed bootloaderu p\u0159epnout procesor do 64bitov\u00e9ho re\u017eimu \u201elong mode\u201c p\u0159ed na\u010dten\u00edm j\u00e1dra opera\u010dn\u00edho syst\u00e9mu.",
        sectionNumber: "11.2.3",
        sectionTitle: "CPU Init",
      },
      {
        uuid: "acbbe3f7-31d8-46dd-8c1a-c2699632d0a2",
        correct:
          "Nutnost, aby j\u00e1dro opera\u010dn\u00edho syst\u00e9mu nebo bootloader konfigurovaly re\u017eim CPU p\u0159i spu\u0161t\u011bn\u00ed, vypl\u00fdv\u00e1 z v\u00fdchoz\u00ed inicializace CPU do re\u017eimu zp\u011btn\u00e9 kompatibility, co\u017e je z\u00e1sadn\u00ed pro podporu star\u0161\u00edho softwaru a hardwarov\u00fdch komponent, zejm\u00e9na v architektu\u0159e x86.",
        incorrect:
          "Nutnost, aby j\u00e1dro opera\u010dn\u00edho syst\u00e9mu nebo bootloader konfigurovaly re\u017eim CPU p\u0159i spu\u0161t\u011bn\u00ed, je prim\u00e1rn\u011b zp\u016fsobena bezpe\u010dnostn\u00edmi zranitelnostmi p\u0159\u00edtomn\u00fdmi v modern\u00edch architektur\u00e1ch CPU, co\u017e vy\u017eaduje okam\u017eit\u00e9 p\u0159epnut\u00ed do chr\u00e1n\u011bn\u00fdch re\u017eim\u016f k ochran\u011b syst\u00e9mu p\u0159ed potenci\u00e1ln\u00edmi hrozbami.",
        sectionNumber: "11.2.3",
        sectionTitle: "CPU Init",
      },
      {
        uuid: "9f681d52-f1a5-4c42-a5ed-3869a36246e2",
        correct:
          "Historicky byl bootloader typicky velmi mal\u00fd program, \u010dasto o velikosti pouze des\u00edtek kilobajt\u016f k\u00f3du, jeho\u017e hlavn\u00edm \u00fakolem bylo zav\u00e9st opera\u010dn\u00ed syst\u00e9m z trval\u00e9ho \u00falo\u017ei\u0161t\u011b do opera\u010dn\u00ed pam\u011bti RAM a p\u0159edat mu \u0159\u00edzen\u00ed. Tento minimalistick\u00fd p\u0159\u00edstup byl nutn\u00fd kv\u016fli omezen\u00fdm zdroj\u016fm a komplexit\u011b tehdej\u0161\u00edch syst\u00e9m\u016f.",
        incorrect:
          "Historicky byl bootloader typicky rozs\u00e1hl\u00fd program, \u010dasto o velikosti stovek megabajt\u016f k\u00f3du, jeho\u017e hlavn\u00edm \u00fakolem bylo spravovat ve\u0161ker\u00fd hardware syst\u00e9mu a poskytovat rozs\u00e1hl\u00e9 slu\u017eby opera\u010dn\u00edmu syst\u00e9mu je\u0161t\u011b p\u0159ed jeho zaveden\u00edm. Tento komplexn\u00ed p\u0159\u00edstup byl nutn\u00fd pro pokro\u010dil\u00e9 funkce tehdej\u0161\u00edch syst\u00e9m\u016f.",
        sectionNumber: "11.2.4",
        sectionTitle: "Bootloader",
      },
      {
        uuid: "327d78f8-f21f-403c-a00f-94c1e9589456",
        correct:
          "V modern\u00edch x86 syst\u00e9mech se proces zav\u00e1d\u011bn\u00ed opera\u010dn\u00edho syst\u00e9mu zjednodu\u0161il d\u00edky standardizovan\u00e9mu rozhran\u00ed firmware, kter\u00e9 rozum\u00ed souborov\u00e9mu syst\u00e9mu FAT. To umo\u017e\u0148uje firmwaru na\u010d\u00edtat soubory p\u0159\u00edmo z disku do pam\u011bti, co\u017e zna\u010dn\u011b usnad\u0148uje a urychluje cel\u00fd proces bootov\u00e1n\u00ed.",
        incorrect:
          "V modern\u00edch x86 syst\u00e9mech se proces zav\u00e1d\u011bn\u00ed opera\u010dn\u00edho syst\u00e9mu zkomplikoval kv\u016fli nutnosti pou\u017e\u00edvat propriet\u00e1rn\u00ed rozhran\u00ed firmware, kter\u00e9 nerozum\u00ed b\u011b\u017en\u00fdm souborov\u00fdm syst\u00e9m\u016fm.  To vy\u017eaduje slo\u017eit\u00e9 a zdlouhav\u00e9 postupy pro na\u010d\u00edt\u00e1n\u00ed soubor\u016f a zaveden\u00ed opera\u010dn\u00edho syst\u00e9mu z disku do pam\u011bti.",
        sectionNumber: "11.2.4",
        sectionTitle: "Bootloader",
      },
      {
        uuid: "f109f4a5-3b5c-491c-a6c3-30cbcef5be32",
        correct:
          "Po zaveden\u00ed j\u00e1dra bootloaderem inicializa\u010dn\u00ed sekvence j\u00e1dra za\u010d\u00edn\u00e1 n\u00edzko\u00farov\u0148ovou inicializac\u00ed CPU a z\u00e1kladn\u00edch periferi\u00ed, jako je konzole a \u010dasova\u010de, a teprve pot\u00e9 p\u0159ech\u00e1z\u00ed k inicializaci ovlada\u010d\u016f za\u0159\u00edzen\u00ed a p\u0159ipojen\u00ed ko\u0159enov\u00e9ho syst\u00e9mu soubor\u016f p\u0159ed p\u0159ed\u00e1n\u00edm \u0159\u00edzen\u00ed u\u017eivatelsk\u00e9mu prostoru prost\u0159ednictv\u00edm procesu init.",
        incorrect:
          "Po zaveden\u00ed j\u00e1dra bootloaderem inicializa\u010dn\u00ed sekvence j\u00e1dra za\u010d\u00edn\u00e1 inicializac\u00ed ovlada\u010d\u016f za\u0159\u00edzen\u00ed a p\u0159ipojen\u00edm ko\u0159enov\u00e9ho syst\u00e9mu soubor\u016f, a teprve pot\u00e9 se v\u011bnuje n\u00edzko\u00farov\u0148ov\u00e9 inicializaci CPU a z\u00e1kladn\u00edch periferi\u00ed, jako je konzole a \u010dasova\u010de, p\u0159i\u010dem\u017e p\u0159ed\u00e1n\u00ed \u0159\u00edzen\u00ed u\u017eivatelsk\u00e9mu prostoru prost\u0159ednictv\u00edm procesu init prob\u00edh\u00e1 je\u0161t\u011b p\u0159ed inicializac\u00ed periferi\u00ed.",
        sectionNumber: "11.2.5",
        sectionTitle: "Kernel Boot",
      },
      {
        uuid: "98b0a374-8a0b-46f2-be42-696ff582403a",
        correct:
          "Inicializace ovlada\u010d\u016f za\u0159\u00edzen\u00ed prob\u00edh\u00e1 v j\u00e1d\u0159e opera\u010dn\u00edho syst\u00e9mu pot\u00e9, co j\u00e1dro nastav\u00ed z\u00e1kladn\u00ed datov\u00e9 struktury a p\u0159edt\u00edm, ne\u017e za\u010dne hledat a p\u0159ipojovat ko\u0159enov\u00fd syst\u00e9m soubor\u016f, co\u017e umo\u017e\u0148uje j\u00e1dru interagovat s hardwarov\u00fdmi periferiemi, v\u010detn\u011b \u00falo\u017en\u00fdch za\u0159\u00edzen\u00ed, na kter\u00fdch je ulo\u017een ko\u0159enov\u00fd syst\u00e9m soubor\u016f, a zajistit tak jejich funk\u010dnost p\u0159ed p\u0159\u00edstupem k dat\u016fm.",
        incorrect:
          "Inicializace ovlada\u010d\u016f za\u0159\u00edzen\u00ed prob\u00edh\u00e1 v j\u00e1d\u0159e opera\u010dn\u00edho syst\u00e9mu a\u017e pot\u00e9, co je ko\u0159enov\u00fd syst\u00e9m soubor\u016f p\u0159ipojen a proces init byl spu\u0161t\u011bn, co\u017e znamen\u00e1, \u017ee j\u00e1dro spol\u00e9h\u00e1 na p\u0159edem existuj\u00edc\u00ed ovlada\u010de pro vyhled\u00e1n\u00ed a p\u0159\u00edstup k \u00falo\u017en\u00fdm za\u0159\u00edzen\u00edm obsahuj\u00edc\u00edm ko\u0159enov\u00fd syst\u00e9m soubor\u016f, a inicializace ovlada\u010d\u016f prob\u00edh\u00e1 a\u017e v u\u017eivatelsk\u00e9m prostoru po spu\u0161t\u011bn\u00ed init.",
        sectionNumber: "11.2.5",
        sectionTitle: "Kernel Boot",
      },
      {
        uuid: "88e9bf5e-733f-4fd9-8ee5-ba58332ab798",
        correct:
          "Proces \u2039init\u203a hraje kl\u00ed\u010dovou roli p\u0159i spou\u0161t\u011bn\u00ed opera\u010dn\u00edho syst\u00e9mu, proto\u017ee je zodpov\u011bdn\u00fd za p\u0159ipojen\u00ed v\u0161ech ostatn\u00edch souborov\u00fdch syst\u00e9m\u016f po \u00favodn\u00edm zaveden\u00ed, inicializaci a spu\u0161t\u011bn\u00ed syst\u00e9mov\u00fdch slu\u017eeb, kter\u00e9 jsou z\u00e1sadn\u00ed pro chod syst\u00e9mu, a n\u00e1sledn\u011b i aplika\u010dn\u00edch slu\u017eeb, co\u017e jsou d\u00e9moni, kte\u0159\u00ed roz\u0161i\u0159uj\u00ed funkcionalitu syst\u00e9mu nad r\u00e1mec z\u00e1kladn\u00edch operac\u00ed, a nakonec spou\u0161t\u00ed proces \u2039login\u203a, kter\u00fd u\u017eivateli umo\u017e\u0148uje p\u0159ihl\u00e1sit se do syst\u00e9mu.",
        incorrect:
          "Proces \u2039init\u203a se spou\u0161t\u00ed a\u017e po dokon\u010den\u00ed bootovac\u00edho procesu a po p\u0159ihl\u00e1\u0161en\u00ed u\u017eivatele, p\u0159i\u010dem\u017e jeho hlavn\u00edm \u00fakolem je spr\u00e1va u\u017eivatelsk\u00fdch aplikac\u00ed a monitorov\u00e1n\u00ed syst\u00e9mov\u00fdch prost\u0159edk\u016f, zat\u00edmco spou\u0161t\u011bn\u00ed syst\u00e9mov\u00fdch slu\u017eeb a p\u0159ipojov\u00e1n\u00ed souborov\u00fdch syst\u00e9m\u016f je \u0159\u00edzeno jin\u00fdmi procesy opera\u010dn\u00edho syst\u00e9mu, kter\u00e9 b\u011b\u017e\u00ed paraleln\u011b s procesem \u2039init\u203a.",
        sectionNumber: "11.2.6",
        sectionTitle: "User-mode Initialisation",
      },
      {
        uuid: "17c61056-3d43-4150-90eb-ae1dddab34d1",
        correct:
          "V pr\u016fb\u011bhu bootovac\u00edho procesu, po \u00favodn\u00ed inicializaci syst\u00e9mu procesem \u2039init\u203a a p\u0159ipojen\u00ed z\u00e1kladn\u00edch souborov\u00fdch syst\u00e9m\u016f, proces \u2039init\u203a postupn\u011b spou\u0161t\u00ed syst\u00e9mov\u00e9 slu\u017eby, kter\u00e9 jsou nezbytn\u00e9 pro z\u00e1kladn\u00ed funk\u010dnost opera\u010dn\u00edho syst\u00e9mu, a teprve pot\u00e9, kdy\u017e jsou syst\u00e9mov\u00e9 slu\u017eby p\u0159ipraveny, p\u0159istupuje ke spou\u0161t\u011bn\u00ed aplika\u010dn\u00edch slu\u017eeb, jako jsou webov\u00e9 servery, kter\u00e9 roz\u0161i\u0159uj\u00ed funkcionalitu syst\u00e9mu o u\u017eivatelsky orientovan\u00e9 aplikace.",
        incorrect:
          "Aplika\u010dn\u00ed slu\u017eby, jako jsou webov\u00e9 servery, jsou spou\u0161t\u011bny procesem \u2039init\u203a je\u0161t\u011b p\u0159ed syst\u00e9mov\u00fdmi slu\u017ebami, proto\u017ee aplika\u010dn\u00ed slu\u017eby jsou pova\u017eov\u00e1ny za kritick\u00e9 pro z\u00e1kladn\u00ed funk\u010dnost opera\u010dn\u00edho syst\u00e9mu a mus\u00ed b\u00fdt k dispozici co nejd\u0159\u00edve po spu\u0161t\u011bn\u00ed syst\u00e9mu, zat\u00edmco syst\u00e9mov\u00e9 slu\u017eby se spou\u0161t\u011bj\u00ed a\u017e n\u00e1sledn\u011b a jejich spu\u0161t\u011bn\u00ed nen\u00ed \u010dasov\u011b kritick\u00e9 pro zah\u00e1jen\u00ed u\u017eivatelsk\u00e9 interakce.",
        sectionNumber: "11.2.6",
        sectionTitle: "User-mode Initialisation",
      },
      {
        uuid: "e8637572-3228-40ee-ab9b-119adaf61eda",
        correct:
          "Bootovac\u00ed proces opera\u010dn\u00edho syst\u00e9mu je pova\u017eov\u00e1n za dokon\u010den\u00fd v okam\u017eiku, kdy proces \u2039init\u203a \u00fasp\u011b\u0161n\u011b spust\u00ed proces \u2039login\u203a a u\u017eivateli se zobraz\u00ed p\u0159ihla\u0161ovac\u00ed obrazovka, kter\u00e1 ho vyz\u00fdv\u00e1 k zad\u00e1n\u00ed u\u017eivatelsk\u00e9ho jm\u00e9na a hesla, co\u017e signalizuje, \u017ee syst\u00e9m je p\u0159ipraven k u\u017eivatelsk\u00e9 interakci a v\u0161echny z\u00e1kladn\u00ed a esenci\u00e1ln\u00ed syst\u00e9mov\u00e9 slu\u017eby jsou spu\u0161t\u011bny a funk\u010dn\u00ed.",
        incorrect:
          "Bootovac\u00ed proces opera\u010dn\u00edho syst\u00e9mu je dokon\u010den ji\u017e v moment\u011b, kdy je proces \u2039init\u203a spu\u0161t\u011bn a za\u010dne prov\u00e1d\u011bt \u00favodn\u00ed inicializaci hardwaru, je\u0161t\u011b p\u0159ed p\u0159ipojen\u00edm souborov\u00fdch syst\u00e9m\u016f a spu\u0161t\u011bn\u00edm jak\u00fdchkoliv syst\u00e9mov\u00fdch slu\u017eeb, proto\u017ee samotn\u00e9 spu\u0161t\u011bn\u00ed procesu \u2039init\u203a indikuje, \u017ee j\u00e1dro syst\u00e9mu bylo \u00fasp\u011b\u0161n\u011b zavedeno a syst\u00e9m je v z\u00e1kladn\u00edm funk\u010dn\u00edm stavu.",
        sectionNumber: "11.2.6",
        sectionTitle: "User-mode Initialisation",
      },
      {
        uuid: "0f008c7b-0ce3-4809-9517-4b454b006efc",
        correct:
          "P\u0159ihla\u0161ovac\u00ed proces u\u017eivatele za\u010d\u00edn\u00e1 inicializac\u00ed u\u017eivatelsk\u00e9 relace, n\u00e1sledn\u011b zav\u00e1d\u00ed moduly desktopov\u00e9ho prost\u0159ed\u00ed a aplika\u010dn\u00ed software a nakonec u\u017eivatele p\u0159epne do prost\u0159ed\u00ed shellu, \u010d\u00edm\u017e umo\u017en\u00ed interakci s po\u010d\u00edta\u010dem.",
        incorrect:
          "P\u0159ihla\u0161ovac\u00ed proces u\u017eivatele za\u010d\u00edn\u00e1 zaveden\u00edm modul\u016f desktopov\u00e9ho prost\u0159ed\u00ed a aplika\u010dn\u00edho softwaru, n\u00e1sledn\u011b inicializuje u\u017eivatelskou relaci a nakonec u\u017eivatele p\u0159epne do prost\u0159ed\u00ed shellu, a\u010dkoli interakce s po\u010d\u00edta\u010dem je mo\u017en\u00e1 a\u017e po dokon\u010den\u00ed v\u0161ech krok\u016f.",
        sectionNumber: "11.2.7",
        sectionTitle: "After Log-In",
      },
      {
        uuid: "76d50a80-0632-405a-adcb-87318b1da8a5",
        correct:
          "Po p\u0159ihl\u00e1\u0161en\u00ed u\u017eivatele syst\u00e9m nastav\u00ed relaci, co\u017e zahrnuje n\u011bkolik krok\u016f, ne\u017e je u\u017eivateli umo\u017en\u011bna interakce s po\u010d\u00edta\u010dem, jak je pops\u00e1no v dokumentaci k opera\u010dn\u00edmu syst\u00e9mu.",
        incorrect:
          "Po p\u0159ihl\u00e1\u0161en\u00ed u\u017eivatele syst\u00e9m okam\u017eit\u011b umo\u017en\u00ed interakci s po\u010d\u00edta\u010dem bez nutnosti nastavov\u00e1n\u00ed relace nebo prov\u00e1d\u011bn\u00ed jak\u00fdchkoliv dal\u0161\u00edch krok\u016f, co\u017e zjednodu\u0161uje proces spu\u0161t\u011bn\u00ed u\u017eivatelsk\u00e9ho prost\u0159ed\u00ed.",
        sectionNumber: "11.2.7",
        sectionTitle: "After Log-In",
      },
      {
        uuid: "34f657c2-9a0b-4baf-8fd0-3a6a6137d1b6",
        correct:
          "Monolitick\u00e9 j\u00e1dra, jako nap\u0159\u00edklad Linux a *BSD, p\u0159edstavuj\u00ed nejrozs\u00e1hlej\u0161\u00ed a nejinkluzivn\u011bj\u0161\u00ed mainstreamov\u00fd design kernel\u016f. Naopak mikrokernelov\u00e9 syst\u00e9my, jako Mach nebo L4, jsou navr\u017eeny s c\u00edlem minimalizace j\u00e1dra, \u010d\u00edm\u017e se st\u00e1vaj\u00ed nejmen\u0161\u00edmi a nejexkluzivn\u011bj\u0161\u00edmi z hlediska poskytovan\u00fdch slu\u017eeb a funkc\u00ed v porovn\u00e1n\u00ed s monolitick\u00fdmi j\u00e1dry. Tento rozd\u00edl v designu z\u00e1sadn\u011b ovliv\u0148uje architekturu a vlastnosti opera\u010dn\u00edho syst\u00e9mu.",
        incorrect:
          "Monolitick\u00e9 j\u00e1dra, jako nap\u0159\u00edklad Linux a *BSD, jsou navr\u017eena jako nejmen\u0161\u00ed a nejexkluzivn\u011bj\u0161\u00ed mainstreamov\u00fd design kernel\u016f. Mikrokernelov\u00e9 syst\u00e9my, jako Mach nebo L4, naopak p\u0159edstavuj\u00ed nejrozs\u00e1hlej\u0161\u00ed a nejinkluzivn\u011bj\u0161\u00ed p\u0159\u00edstup. Mikrokernele se sna\u017e\u00ed maximalizovat rozsah slu\u017eeb a funkc\u00ed poskytovan\u00fdch v j\u00e1d\u0159e, \u010d\u00edm\u017e se li\u0161\u00ed od monolitick\u00fdch jader, kter\u00e1 se zam\u011b\u0159uj\u00ed na minimalizaci j\u00e1dra.",
        sectionNumber: "11.3.1",
        sectionTitle: "Architecture Types",
      },
      {
        uuid: "3e0e24b6-7ee3-45b8-bae1-f57ca064ebfa",
        correct:
          'Hybridn\u00ed j\u00e1dra, nap\u0159\u00edklad macOS, p\u0159edstavuj\u00ed kompromis mezi monolitick\u00fdmi a mikrokernelemi. Skl\u00e1daj\u00ed se z mikrokernelu a takzvan\u00e9ho "superserveru". Tento superserver je v podstat\u011b o\u0159ezan\u00e9 monolitick\u00e9 j\u00e1dro, z n\u011bho\u017e byla odstran\u011bna funkcionalita, kterou ji\u017e pokr\u00fdv\u00e1 mikrokernel. Hybridn\u00ed architektura se sna\u017e\u00ed kombinovat v\u00fdhody obou extr\u00e9mn\u00edch p\u0159\u00edstup\u016f.',
        incorrect:
          'Hybridn\u00ed j\u00e1dra, nap\u0159\u00edklad macOS, jsou zalo\u017eena na kombinaci monolitick\u00e9ho j\u00e1dra a "mikromodulu". Tento mikromodul je roz\u0161\u00ed\u0159en\u00e1 verze mikrokernelu, do kter\u00e9ho byla p\u0159id\u00e1na funkcionalita typick\u00e1 pro monolitick\u00e1 j\u00e1dra. Hybridn\u00ed architektura se sna\u017e\u00ed odd\u011blit co nejv\u00edce funkc\u00ed do u\u017eivatelsk\u00e9ho prostoru, podobn\u011b jako \u010dist\u00e9 mikrokernele.',
        sectionNumber: "11.3.1",
        sectionTitle: "Architecture Types",
      },
      {
        uuid: "48b079cb-f013-4ce5-8ee9-064535405140",
        correct:
          'Hypervisory typu 1, n\u011bkdy ozna\u010dovan\u00e9 jako bare-metal hypervisory, jako nap\u0159\u00edklad Xen, lze pova\u017eovat za specifick\u00fd typ opera\u010dn\u00edho syst\u00e9mu. V tomto kontextu jsou "aplikacemi" virtu\u00e1ln\u00ed stroje, co\u017e jsou plnohodnotn\u00e9 opera\u010dn\u00ed syst\u00e9my. Hypervisor tak funguje jako z\u00e1kladn\u00ed vrstva, kter\u00e1 spravuje a izoluje jednotliv\u00e9 virtu\u00e1ln\u00ed stroje b\u011b\u017e\u00edc\u00ed na hardwaru.',
        incorrect:
          'Hypervisory typu 1, jako nap\u0159\u00edklad Xen, jsou specifick\u00fdm typem aplikac\u00ed b\u011b\u017e\u00edc\u00edch v u\u017eivatelsk\u00e9m prostoru opera\u010dn\u00edho syst\u00e9mu. V tomto modelu jsou "opera\u010dn\u00edmi syst\u00e9my" virtu\u00e1ln\u00ed stroje, kter\u00e9 funguj\u00ed jako b\u011b\u017en\u00e9 aplikace spu\u0161t\u011bn\u00e9 hypervisorem. Hypervisor v tomto p\u0159\u00edpad\u011b poskytuje pouze omezen\u00e9 slu\u017eby pro spr\u00e1vu hardwaru pro tyto aplikace.',
        sectionNumber: "11.3.1",
        sectionTitle: "Architecture Types",
      },
      {
        uuid: "324f1164-51f4-4a15-80a1-f1593852b083",
        correct:
          "Exokernelov\u00e9 opera\u010dn\u00ed syst\u00e9my se vyzna\u010duj\u00ed radik\u00e1ln\u00edm omezen\u00edm slu\u017eeb poskytovan\u00fdch aplikac\u00edm. C\u00edlem exokernel\u016f je minimalizovat abstrakce a poskytnout aplikac\u00edm maxim\u00e1ln\u00ed kontrolu nad hardwarem. Aplikace v exokernelov\u00e9m syst\u00e9mu maj\u00ed p\u0159\u00edm\u00fd p\u0159\u00edstup k hardwarov\u00fdm zdroj\u016fm a samy si implementuj\u00ed vy\u0161\u0161\u00ed \u00farovn\u011b opera\u010dn\u00edho syst\u00e9mu.",
        incorrect:
          "Exokernelov\u00e9 opera\u010dn\u00ed syst\u00e9my se vyzna\u010duj\u00ed rozs\u00e1hl\u00fdm roz\u0161\u00ed\u0159en\u00edm slu\u017eeb poskytovan\u00fdch aplikac\u00edm. C\u00edlem exokernel\u016f je maximalizovat abstrakce a poskytnout aplikac\u00edm ucelen\u00e9 prost\u0159ed\u00ed s bohat\u00fdmi funkcemi. Aplikace v exokernelov\u00e9m syst\u00e9mu jsou od hardwarov\u00fdch detail\u016f zcela odst\u00edn\u011bny a spol\u00e9haj\u00ed se na \u0161irokou \u0161k\u00e1lu slu\u017eeb j\u00e1dra.",
        sectionNumber: "11.3.1",
        sectionTitle: "Architecture Types",
      },
      {
        uuid: "db393585-4b01-4626-91f8-04b3e5b2c7b4",
        correct:
          "Unikernely p\u0159edstavuj\u00ed p\u0159\u00edstup, kde se opera\u010dn\u00ed syst\u00e9m st\u00e1v\u00e1 specializovanou knihovnou. Tato knihovna je sestavena spole\u010dn\u011b s aplikac\u00ed a v\u00fdsledkem je jedin\u00fd spustiteln\u00fd obraz, kter\u00fd b\u011b\u017e\u00ed v kernelov\u00e9m re\u017eimu. Unikernely jsou navr\u017eeny pro specifick\u00e9 aplikace a c\u00edlem je maximalizovat v\u00fdkon a minimalizovat re\u017eii opera\u010dn\u00edho syst\u00e9mu.",
        incorrect:
          "Unikernely p\u0159edstavuj\u00ed p\u0159\u00edstup, kde se opera\u010dn\u00ed syst\u00e9m st\u00e1v\u00e1 specializovanou knihovnou. Tato knihovna je sestavena spole\u010dn\u011b s aplikac\u00ed a v\u00fdsledkem je spustiteln\u00fd obraz, kter\u00fd b\u011b\u017e\u00ed v u\u017eivatelsk\u00e9m re\u017eimu. Unikernely se zam\u011b\u0159uj\u00ed na zv\u00fd\u0161en\u00ed bezpe\u010dnosti spou\u0161t\u011bn\u00edm aplikac\u00ed mimo kernelov\u00fd re\u017eim a odd\u011blen\u00edm od kritick\u00fdch syst\u00e9mov\u00fdch funkc\u00ed.",
        sectionNumber: "11.3.1",
        sectionTitle: "Architecture Types",
      },
      {
        uuid: "c9fac08a-1d78-4a82-b2c1-241a5bdc8471",
        correct:
          "Mikrokernelov\u00e1 architektura opera\u010dn\u00edho syst\u00e9mu se vyzna\u010duje t\u00edm, \u017ee j\u00e1dro syst\u00e9mu obsluhuje pouze esenci\u00e1ln\u00ed slu\u017eby, kter\u00e9 vy\u017eaduj\u00ed privilegovan\u00fd re\u017eim CPU. Mezi tyto slu\u017eby pat\u0159\u00ed spr\u00e1va pam\u011bti prost\u0159ednictv\u00edm programov\u00e1n\u00ed MMU, zpracov\u00e1n\u00ed hardwarov\u00fdch p\u0159eru\u0161en\u00ed, pl\u00e1nov\u00e1n\u00ed \u00faloh a proces\u016f a mechanismy pro meziprocesovou komunikaci, typicky formou p\u0159ed\u00e1v\u00e1n\u00ed zpr\u00e1v. V\u0161echny ostatn\u00ed funkce opera\u010dn\u00edho syst\u00e9mu jsou navr\u017eeny tak, aby b\u011b\u017eely mimo j\u00e1dro.",
        incorrect:
          "Mikrokernelov\u00e1 architektura opera\u010dn\u00edho syst\u00e9mu se vyzna\u010duje t\u00edm, \u017ee j\u00e1dro syst\u00e9mu obsluhuje v\u0161echny slu\u017eby opera\u010dn\u00edho syst\u00e9mu, v\u010detn\u011b neesenci\u00e1ln\u00edch slu\u017eeb, krom\u011b z\u00e1kladn\u00edch funkc\u00ed, jako je spr\u00e1va souborov\u00e9ho syst\u00e9mu, implementace s\u00ed\u0165ov\u00e9ho z\u00e1sobn\u00edku a spr\u00e1va grafick\u00e9ho u\u017eivatelsk\u00e9ho rozhran\u00ed, a tak\u00e9 esenci\u00e1ln\u00ed slu\u017eby, jako je spr\u00e1va pam\u011bti, zpracov\u00e1n\u00ed p\u0159eru\u0161en\u00ed a pl\u00e1nov\u00e1n\u00ed proces\u016f.",
        sectionNumber: "11.3.2",
        sectionTitle: "Microkernel",
      },
      {
        uuid: "8ec2c5ff-d2f7-4168-9497-228f68267dff",
        correct:
          "Podle princip\u016f mikrokernelov\u00e9 architektury je j\u00e1dro opera\u010dn\u00edho syst\u00e9mu z\u00e1m\u011brn\u011b udr\u017eov\u00e1no minim\u00e1ln\u00ed a zahrnuje pouze z\u00e1kladn\u00ed slu\u017eby, kter\u00e9 vy\u017eaduj\u00ed b\u011bh v privilegovan\u00e9m re\u017eimu CPU. To zahrnuje kl\u00ed\u010dov\u00e9 \u00fakoly spr\u00e1vy pam\u011bti pomoc\u00ed programov\u00e1n\u00ed MMU, po\u010d\u00e1te\u010dn\u00ed zpracov\u00e1n\u00ed hardwarov\u00fdch p\u0159eru\u0161en\u00ed, p\u0159ep\u00edn\u00e1n\u00ed \u00faloh a proces\u016f spolu s pl\u00e1nov\u00e1n\u00edm a meziprocesovou komunikaci, typicky implementovanou mechanismy pro p\u0159ed\u00e1v\u00e1n\u00ed zpr\u00e1v.",
        incorrect:
          "Na rozd\u00edl od mikrokernelov\u00e9 architektury jsou monolitick\u00e1 j\u00e1dra navr\u017eena tak, aby udr\u017eovala j\u00e1dro minim\u00e1ln\u00ed a zahrnovala pouze malou podmno\u017einu z\u00e1kladn\u00edch slu\u017eeb prov\u00e1d\u011bn\u00fdch v privilegovan\u00e9m re\u017eimu CPU, p\u0159i\u010dem\u017e se zam\u011b\u0159uj\u00ed prim\u00e1rn\u011b na meziprocesovou komunikaci a deleguj\u00ed spr\u00e1vu pam\u011bti, zpracov\u00e1n\u00ed p\u0159eru\u0161en\u00ed a pl\u00e1nov\u00e1n\u00ed proces\u016f na procesy v u\u017eivatelsk\u00e9m prostoru, aby se zv\u00fd\u0161ila modularita a stabilita syst\u00e9mu.",
        sectionNumber: "11.3.2",
        sectionTitle: "Microkernel",
      },
      {
        uuid: "d8f0b069-d2aa-4278-9b97-1cf14036b4ee",
        correct:
          "V kontextu opera\u010dn\u00edho syst\u00e9mu zalo\u017een\u00e9ho na mikrokernelu jsou povinnosti j\u00e1dra striktn\u011b omezeny na spr\u00e1vu ochrany pam\u011bti prost\u0159ednictv\u00edm konfigurace MMU, obsluhu hardwarov\u00fdch p\u0159eru\u0161en\u00ed pro zah\u00e1jen\u00ed privilegovan\u00fdch operac\u00ed, \u0159\u00edzen\u00ed pl\u00e1nov\u00e1n\u00ed \u00faloh a proces\u016f a umo\u017en\u011bn\u00ed meziprocesov\u00e9 komunikace prost\u0159ednictv\u00edm p\u0159ed\u00e1v\u00e1n\u00ed zpr\u00e1v, \u010d\u00edm\u017e je zaji\u0161t\u011bno, \u017ee v\u0161echny ostatn\u00ed funkce opera\u010dn\u00edho syst\u00e9mu jsou implementov\u00e1ny jako samostatn\u00e9 moduly funguj\u00edc\u00ed mimo privilegovanou dom\u00e9nu j\u00e1dra.",
        incorrect:
          "V opera\u010dn\u00edm syst\u00e9mu zalo\u017een\u00e9m na mikrokernelu je j\u00e1dro zodpov\u011bdn\u00e9 za \u0161irokou \u0161k\u00e1lu slu\u017eeb, v\u010detn\u011b nejen z\u00e1kladn\u00edch funkc\u00ed, jako je ochrana pam\u011bti, obsluha p\u0159eru\u0161en\u00ed, pl\u00e1nov\u00e1n\u00ed proces\u016f a p\u0159ed\u00e1v\u00e1n\u00ed zpr\u00e1v, ale tak\u00e9 roz\u0161\u00ed\u0159en\u00fdch funkc\u00ed, jako je spr\u00e1va souborov\u00e9ho syst\u00e9mu, s\u00ed\u0165ov\u00e9 protokolov\u00e9 sady, spr\u00e1va ovlada\u010d\u016f za\u0159\u00edzen\u00ed a prost\u0159ed\u00ed pro spou\u0161t\u011bn\u00ed u\u017eivatelsk\u00fdch aplikac\u00ed, to v\u0161e funguje v privilegovan\u00e9 dom\u00e9n\u011b j\u00e1dra.",
        sectionNumber: "11.3.2",
        sectionTitle: "Microkernel",
      },
      {
        uuid: "0ffbde85-af3f-4f98-8b37-4e9047b7a1b5",
        correct:
          "Monolitick\u00e9 j\u00e1dro zahrnuje v\u0161e, co mikrokernel, a nav\u00edc integruje do j\u00e1dra i ovlada\u010de za\u0159\u00edzen\u00ed, zejm\u00e9na ty, kter\u00e9 vy\u017eaduj\u00ed p\u0159eru\u0161en\u00ed nebo DMA pro zaji\u0161t\u011bn\u00ed vysok\u00e9ho v\u00fdkonu, d\u00e1le souborov\u00e9 syst\u00e9my a spr\u00e1vu diskov\u00fdch svazk\u016f pro efektivn\u00ed pr\u00e1ci s daty.",
        incorrect:
          "Monolitick\u00e9 j\u00e1dro se od mikrokernelu li\u0161\u00ed pouze t\u00edm, \u017ee nezahrnuje ovlada\u010de za\u0159\u00edzen\u00ed, souborov\u00e9 syst\u00e9my a spr\u00e1vu diskov\u00fdch svazk\u016f. Tyto komponenty jsou v monolitick\u00e9m j\u00e1d\u0159e ponech\u00e1ny mimo privilegovan\u00fd re\u017eim, aby se zv\u00fd\u0161ila bezpe\u010dnost a stabilita syst\u00e9mu.",
        sectionNumber: "11.3.3",
        sectionTitle: "Monolithic Kernels",
      },
      {
        uuid: "66e8295f-f1ac-417e-8d96-fcdb887fc88d",
        correct:
          "Monolitick\u00e9 j\u00e1dro obvykle integruje kompletn\u00ed TCP/IP stack a r\u016fzn\u00e9 dopl\u0148kov\u00e9 slu\u017eby, jako je \u0161ifrov\u00e1n\u00ed dat a filtrov\u00e1n\u00ed paket\u016f, p\u0159\u00edmo do j\u00e1dra, co\u017e mu umo\u017e\u0148uje efektivn\u011b spravovat s\u00ed\u0165ovou komunikaci a bezpe\u010dnostn\u00ed funkce, av\u0161ak ve\u0161ker\u00fd tento k\u00f3d b\u011b\u017e\u00ed v privilegovan\u00e9m re\u017eimu.",
        incorrect:
          "Monolitick\u00e9 j\u00e1dro se z\u00e1m\u011brn\u011b vyh\u00fdb\u00e1 integraci kompletn\u00edho TCP/IP stacku a dopl\u0148kov\u00fdch slu\u017eeb, jako je \u0161ifrov\u00e1n\u00ed dat a filtrov\u00e1n\u00ed paket\u016f. Tyto funkce jsou v monolitick\u00e9m j\u00e1d\u0159e realizov\u00e1ny v\u00fdhradn\u011b v u\u017eivatelsk\u00e9m prostoru, aby se minimalizovala zranitelnost j\u00e1dra.",
        sectionNumber: "11.3.3",
        sectionTitle: "Monolithic Kernels",
      },
      {
        uuid: "f2a104e8-fcf1-45dd-af37-b3731b04bde4",
        correct:
          "V opera\u010dn\u00edm syst\u00e9mu s opravdov\u00fdm mikrokernelem jsou ovlada\u010de za\u0159\u00edzen\u00ed implementov\u00e1ny jako samostatn\u00e9 procesy, co\u017e v\u00fdznamn\u011b p\u0159isp\u00edv\u00e1 k modularit\u011b syst\u00e9mu. Tato architektura umo\u017e\u0148uje snadn\u011bj\u0161\u00ed v\u00fdvoj, lad\u011bn\u00ed a \u00fadr\u017ebu ovlada\u010d\u016f, proto\u017ee jejich potenci\u00e1ln\u00ed selh\u00e1n\u00ed neohroz\u00ed stabilitu cel\u00e9ho j\u00e1dra syst\u00e9mu.",
        incorrect:
          "V opera\u010dn\u00edm syst\u00e9mu s opravdov\u00fdm mikrokernelem jsou ovlada\u010de za\u0159\u00edzen\u00ed integrov\u00e1ny p\u0159\u00edmo do mikrokernelu, \u010d\u00edm\u017e se zvy\u0161uje jeho v\u00fdkon a sni\u017euje re\u017eie spojen\u00e1 s komunikac\u00ed mezi procesy. Toto centralizovan\u00e9 \u0159e\u0161en\u00ed je kl\u00ed\u010dov\u00e9 pro dosa\u017een\u00ed maxim\u00e1ln\u00ed efektivity a minimalizaci latence p\u0159i obsluze hardwaru.",
        sectionNumber: "11.3.4",
        sectionTitle: "Microkernel Redux",
      },
      {
        uuid: "e1e72163-2fcf-4086-954c-239b34dd6a88",
        correct:
          "V architektu\u0159e opravdov\u00e9ho mikrokernelu jsou slu\u017eby, kter\u00e9 se tradi\u010dn\u011b nach\u00e1zej\u00ed v monolitick\u00e9m j\u00e1d\u0159e, jako je spr\u00e1va soubor\u016f a s\u00ed\u0165ov\u00e1n\u00ed, poskytov\u00e1ny samostatn\u00fdmi serverov\u00fdmi procesy. Tyto procesy b\u011b\u017e\u00ed mimo mikrokernel a komunikuj\u00ed s n\u00edm pomoc\u00ed mechanism\u016f meziprocesov\u00e9 komunikace, co\u017e zvy\u0161uje modularitu a odolnost syst\u00e9mu.",
        incorrect:
          "V architektu\u0159e opravdov\u00e9ho mikrokernelu jsou kl\u00ed\u010dov\u00e9 slu\u017eby, jako je spr\u00e1va soubor\u016f a s\u00ed\u0165ov\u00e1n\u00ed, st\u00e1le integrov\u00e1ny p\u0159\u00edmo do mikrokernelu, podobn\u011b jako v monolitick\u00fdch j\u00e1drech. Mikrokernel tak zaji\u0161\u0165uje z\u00e1kladn\u00ed i pokro\u010dil\u00e9 funkce opera\u010dn\u00edho syst\u00e9mu, minimalizuj\u00edc z\u00e1vislost na extern\u00edch serverov\u00fdch procesech.",
        sectionNumber: "11.3.4",
        sectionTitle: "Microkernel Redux",
      },
      {
        uuid: "6567277a-9a53-48dc-802e-364179b22d7c",
        correct:
          "Samotn\u00fd mikrokernel opera\u010dn\u00edho syst\u00e9mu poskytuje pouze minim\u00e1ln\u00ed sadu z\u00e1kladn\u00edch funkc\u00ed. Pro \u0161ir\u0161\u00ed \u0161k\u00e1lu slu\u017eeb, jako jsou souborov\u00e9 syst\u00e9my a s\u00ed\u0165ov\u00e9 protokoly, se mikrokernel spol\u00e9h\u00e1 na extern\u00ed serverov\u00e9 procesy, kter\u00e9 roz\u0161i\u0159uj\u00ed funk\u010dnost syst\u00e9mu a b\u011b\u017e\u00ed v u\u017eivatelsk\u00e9m prostoru.",
        incorrect:
          "Mikrokernel opera\u010dn\u00edho syst\u00e9mu poskytuje komplexn\u00ed sadu slu\u017eeb, srovnatelnou s monolitick\u00fdm j\u00e1drem, a minimalizuje pot\u0159ebu extern\u00edch serverov\u00fdch proces\u016f. D\u00edky tomu je mikrokernel schopen efektivn\u011b a autonomn\u011b spravovat v\u0161echny kl\u00ed\u010dov\u00e9 aspekty opera\u010dn\u00edho syst\u00e9mu, od spr\u00e1vy pam\u011bti po s\u00ed\u0165ovou komunikaci.",
        sectionNumber: "11.3.4",
        sectionTitle: "Microkernel Redux",
      },
      {
        uuid: "6c805328-1708-434b-9315-6b040fc64055",
        correct:
          "Hybridn\u00ed j\u00e1dra opera\u010dn\u00edch syst\u00e9m\u016f se vyzna\u010duj\u00ed architekturou zalo\u017eenou na mikrokernelu, kde v\u011bt\u0161ina syst\u00e9mov\u00fdch slu\u017eeb je poskytov\u00e1na prost\u0159ednictv\u00edm jedin\u00e9ho rozs\u00e1hl\u00e9ho serveru, \u010dasto ozna\u010dovan\u00e9ho jako superserver, kter\u00fd je navr\u017een tak, aby byl do jist\u00e9 m\u00edry izolov\u00e1n od p\u0159\u00edm\u00e9 interakce s hardwarem.",
        incorrect:
          "Hybridn\u00ed j\u00e1dra opera\u010dn\u00edch syst\u00e9m\u016f jsou charakteristick\u00e1 svou monolitickou architekturou, kde jsou v\u0161echny syst\u00e9mov\u00e9 slu\u017eby integrov\u00e1ny do jednoho j\u00e1dra, co\u017e eliminuje pot\u0159ebu superserveru a p\u0159\u00edm\u00e9 interakce s hardwarem je minimalizov\u00e1na.",
        sectionNumber: "11.3.5",
        sectionTitle: "Hybrid Kernels",
      },
      {
        uuid: "04205003-c28f-4020-abc4-fcd24029e6e1",
        correct:
          "Implementace hybridn\u00edho j\u00e1dra je obecn\u011b pova\u017eov\u00e1na za m\u00e9n\u011b n\u00e1ro\u010dnou a levn\u011bj\u0161\u00ed ve srovn\u00e1n\u00ed s v\u00fdvojem plnohodnotn\u00fdch mikrokernelov\u00fdch opera\u010dn\u00edch syst\u00e9m\u016f, kter\u00e9 se sna\u017e\u00ed o maxim\u00e1ln\u00ed modularitu a odd\u011blen\u00ed slu\u017eeb do v\u00edce server\u016f.",
        incorrect:
          "Implementace hybridn\u00edho j\u00e1dra je obvykle slo\u017eit\u011bj\u0161\u00ed a n\u00e1kladn\u011bj\u0161\u00ed ne\u017e v\u00fdvoj plnohodnotn\u00fdch mikrokernelov\u00fdch opera\u010dn\u00edch syst\u00e9m\u016f, proto\u017ee hybridn\u00ed p\u0159\u00edstup vy\u017eaduje integraci mikrokernelu s komplexn\u00edm superserverem a spr\u00e1vu mnoha odd\u011blen\u00fdch slu\u017eeb.",
        sectionNumber: "11.3.5",
        sectionTitle: "Hybrid Kernels",
      },
      {
        uuid: "6658f3ad-2d91-496b-ac7f-dca62c870b23",
        correct:
          "Hybridn\u00ed j\u00e1dra opera\u010dn\u00edch syst\u00e9m\u016f p\u0159edstavuj\u00ed kompromisn\u00ed \u0159e\u0161en\u00ed z hlediska v\u00fdkonu, kter\u00e9 se sna\u017e\u00ed nal\u00e9zt rovnov\u00e1hu mezi v\u00fdkonnostn\u00edmi charakteristikami monolitick\u00fdch a mikrokernelov\u00fdch architektur, a teoreticky by m\u011bla dosahovat lep\u0161\u00edho v\u00fdkonu ne\u017e \u010dist\u011b mikrokernelov\u00e9 syst\u00e9my.",
        incorrect:
          "Hybridn\u00ed j\u00e1dra opera\u010dn\u00edch syst\u00e9m\u016f jsou navr\u017eena tak, aby dosahovala v\u00fdrazn\u011b ni\u017e\u0161\u00edho v\u00fdkonu ne\u017e \u010dist\u011b mikrokernelov\u00e9 syst\u00e9my, jeliko\u017e superserver v hybridn\u00ed architektu\u0159e p\u0159edstavuje v\u00fdkonnostn\u00ed \u00fazk\u00e9 hrdlo a zpomaluje celkovou odezvu syst\u00e9mu kv\u016fli nutnosti komunikace skrze mikrokernel.",
        sectionNumber: "11.3.5",
        sectionTitle: "Hybrid Kernels",
      },
      {
        uuid: "0a402f57-2851-4433-9d29-06ac5e57c91e",
        correct:
          "Mikrokernel jsou pova\u017eov\u00e1ny za robustn\u011bj\u0161\u00ed ne\u017e monolitick\u00e9 j\u00e1dra p\u0159edev\u0161\u00edm proto, \u017ee jejich men\u0161\u00ed velikost j\u00e1dra sni\u017euje pravd\u011bpodobnost v\u00fdskytu chyb v samotn\u00e9m j\u00e1d\u0159e, a izolace serverov\u00fdch proces\u016f minimalizuje dopad chyb poch\u00e1zej\u00edc\u00edch mimo j\u00e1dro, co\u017e umo\u017e\u0148uje obnovu syst\u00e9mu restartov\u00e1n\u00edm server\u016f.",
        incorrect:
          "Mikrokernel jsou pova\u017eov\u00e1ny za m\u00e9n\u011b robustn\u00ed ne\u017e monolitick\u00e9 j\u00e1dra, proto\u017ee jejich v\u011bt\u0161\u00ed velikost j\u00e1dra zvy\u0161uje pravd\u011bpodobnost v\u00fdskytu chyb v samotn\u00e9m j\u00e1d\u0159e, a izolace serverov\u00fdch proces\u016f maximalizuje dopad chyb poch\u00e1zej\u00edc\u00edch mimo j\u00e1dro, co\u017e znemo\u017e\u0148uje obnovu syst\u00e9mu restartov\u00e1n\u00edm server\u016f.",
        sectionNumber: "11.3.6",
        sectionTitle: "Micro vs Mono",
      },
      {
        uuid: "2f88d433-1eef-4292-abbf-6ad9425fcecc",
        correct:
          "Monolitick\u00e1 j\u00e1dra obvykle vykazuj\u00ed vy\u0161\u0161\u00ed v\u00fdkon ve srovn\u00e1n\u00ed s mikrokernelem d\u00edky optimalizaci p\u0159ep\u00edn\u00e1n\u00ed kontextu, kter\u00e9, navzdory pokrok\u016fm v modern\u00edch procesorech, z\u016fst\u00e1v\u00e1 operac\u00ed citlivou na v\u00fdkon; nicm\u00e9n\u011b tento v\u00fdkonnostn\u00ed rozd\u00edl se zmen\u0161uje, proto\u017ee monolitick\u00e1 j\u00e1dra za\u010dle\u0148uj\u00ed bezpe\u010dnostn\u00ed vylep\u0161en\u00ed, jako je izolace tabulek str\u00e1nek j\u00e1dra.",
        incorrect:
          "Monolitick\u00e1 j\u00e1dra obvykle vykazuj\u00ed ni\u017e\u0161\u00ed v\u00fdkon ve srovn\u00e1n\u00ed s mikrokernelem d\u00edky optimalizaci p\u0159ep\u00edn\u00e1n\u00ed kontextu, kter\u00e9, navzdory pokrok\u016fm v modern\u00edch procesorech, z\u016fst\u00e1v\u00e1 operac\u00ed necitlivou na v\u00fdkon; nicm\u00e9n\u011b tento v\u00fdkonnostn\u00ed rozd\u00edl se zv\u011bt\u0161uje, proto\u017ee monolitick\u00e1 j\u00e1dra za\u010dle\u0148uj\u00ed bezpe\u010dnostn\u00ed vylep\u0161en\u00ed, jako je izolace tabulek str\u00e1nek j\u00e1dra.",
        sectionNumber: "11.3.6",
        sectionTitle: "Micro vs Mono",
      },
      {
        uuid: "a16fd160-0973-45ff-8107-637d7602134c",
        correct:
          "Z hlediska implementace nab\u00edzej\u00ed monolitick\u00e1 j\u00e1dra \u010dasto v\u00fdhodu d\u00edky mo\u017enosti psan\u00ed k\u00f3du p\u0159\u00edm\u00fdm, synchronn\u00edm zp\u016fsobem a snadn\u00e9mu sd\u00edlen\u00ed datov\u00fdch struktur mezi r\u016fzn\u00fdmi komponentami j\u00e1dra, zat\u00edmco syst\u00e9my zalo\u017een\u00e9 na mikrokernelu \u010dasto vy\u017eaduj\u00ed asynchronn\u00ed komunikaci prost\u0159ednictv\u00edm p\u0159ed\u00e1v\u00e1n\u00ed zpr\u00e1v, co\u017e m\u016f\u017ee komplikovat v\u00fdvoj a pochopen\u00ed k\u00f3du.",
        incorrect:
          "Z hlediska implementace nab\u00edzej\u00ed mikrokernel \u010dasto v\u00fdhodu d\u00edky mo\u017enosti psan\u00ed k\u00f3du p\u0159\u00edm\u00fdm, synchronn\u00edm zp\u016fsobem a snadn\u00e9mu sd\u00edlen\u00ed datov\u00fdch struktur mezi r\u016fzn\u00fdmi komponentami j\u00e1dra, zat\u00edmco syst\u00e9my zalo\u017een\u00e9 na monolitick\u00e9m j\u00e1d\u0159e \u010dasto vy\u017eaduj\u00ed asynchronn\u00ed komunikaci prost\u0159ednictv\u00edm p\u0159ed\u00e1v\u00e1n\u00ed zpr\u00e1v, co\u017e m\u016f\u017ee zjednodu\u0161it v\u00fdvoj a pochopen\u00ed k\u00f3du.",
        sectionNumber: "11.3.6",
        sectionTitle: "Micro vs Mono",
      },
      {
        uuid: "78302d12-347a-4b57-8022-30f53b68aa68",
        correct:
          "Exokernely a unikernely p\u0159edstavuj\u00ed dva r\u016fzn\u00e9 p\u0159\u00edstupy k minimalistick\u00e9mu designu opera\u010dn\u00edch syst\u00e9m\u016f. Exokernel se zam\u011b\u0159uje na poskytov\u00e1n\u00ed minim\u00e1ln\u00edch abstrakc\u00ed a umo\u017e\u0148uje b\u011bh v\u00edce aplikac\u00ed s izolac\u00ed proces\u016f, zat\u00edmco unikernel je navr\u017een pro b\u011bh jedin\u00e9 aplikace a poskytuje tradi\u010dn\u011bj\u0161\u00ed slu\u017eby opera\u010dn\u00edho syst\u00e9mu, jako je hierarchick\u00fd souborov\u00fd syst\u00e9m a s\u00ed\u0165ov\u00fd z\u00e1sobn\u00edk. Rozd\u00edl spo\u010d\u00edv\u00e1 v rozsahu poskytovan\u00fdch slu\u017eeb a c\u00edlov\u00e9m pou\u017eit\u00ed ka\u017ed\u00e9 architektury.",
        incorrect:
          "Exokernely a unikernely jsou v podstat\u011b identick\u00e9 minimalistick\u00e9 opera\u010dn\u00ed syst\u00e9my, kter\u00e9 se li\u0161\u00ed pouze v detailech implementace. Oba typy kernel\u016f jsou navr\u017eeny pro b\u011bh jedin\u00e9 aplikace a poskytuj\u00ed pouze z\u00e1kladn\u00ed abstrakce, jako je blokov\u00e9 \u00falo\u017ei\u0161t\u011b a redukovan\u00e9 s\u00ed\u0165ov\u00e9 slu\u017eby. Hlavn\u00ed v\u00fdhodou obou architektur je jejich schopnost b\u011b\u017eet p\u0159\u00edmo na hypervisoru, \u010d\u00edm\u017e se minimalizuje re\u017eie spojen\u00e1 s tradi\u010dn\u00edmi opera\u010dn\u00edmi syst\u00e9my.",
        sectionNumber: "11.3.7",
        sectionTitle: "Other Kernel Types",
      },
      {
        uuid: "961924aa-b3b7-4aa1-adf9-6872ed90182a",
        correct:
          "Hypervizor na hol\u00e9m kovu se podob\u00e1 exokernelu nebo mikrokernelov\u00e9mu opera\u010dn\u00edmu syst\u00e9mu v z\u00e1vislosti na konkr\u00e9tn\u00edm hypervizoru a \u00fahlu pohledu. Hypervizor typicky poskytuje rozhran\u00ed a zdroje, kter\u00e9 jsou tradi\u010dn\u011b implementov\u00e1ny v hardwaru, jako jsou blokov\u00e1 za\u0159\u00edzen\u00ed, s\u00ed\u0165ov\u00e1 rozhran\u00ed a virtu\u00e1ln\u00ed CPU, co\u017e umo\u017e\u0148uje hostovan\u00fdm opera\u010dn\u00edm syst\u00e9m\u016fm vyu\u017e\u00edvat str\u00e1nkov\u00e1n\u00ed a dal\u0161\u00ed hardwarov\u00e9 funkce. Hypervizor v\u0161ak m\u016f\u017ee pou\u017e\u00edvat hrub\u0161\u00ed abstrakce ne\u017e opera\u010dn\u00ed syst\u00e9m, nap\u0159\u00edklad cel\u00e1 \u00falo\u017en\u00e1 za\u0159\u00edzen\u00ed nam\u00edsto souborov\u00e9ho syst\u00e9mu.",
        incorrect:
          "Hypervizor na hol\u00e9m kovu se z\u00e1sadn\u011b li\u0161\u00ed od exokernelu a mikrokernelov\u00e9ho opera\u010dn\u00edho syst\u00e9mu, proto\u017ee hypervizor je navr\u017een v\u00fdhradn\u011b pro spr\u00e1vu hardwarov\u00fdch zdroj\u016f a neposkytuje \u017e\u00e1dn\u00e9 slu\u017eby aplikac\u00edm. Na rozd\u00edl od exokernel\u016f a mikrokernel\u016f, kter\u00e9 nab\u00edzej\u00ed minim\u00e1ln\u00ed abstrakce a slu\u017eby pro aplikace, hypervizor se zam\u011b\u0159uje pouze na virtualizaci hardwaru a neumo\u017e\u0148uje b\u011bh v\u00edce opera\u010dn\u00edch syst\u00e9m\u016f jako aplikac\u00ed.",
        sectionNumber: "11.3.7",
        sectionTitle: "Other Kernel Types",
      },
      {
        uuid: "e4328f80-ca60-43f6-9184-e7b1f09d1fc3",
        correct:
          "Unikernel, navr\u017een\u00fd pro b\u011bh jedin\u00e9 aplikace, poskytuje podmno\u017einu tradi\u010dn\u00edch abstrakc\u00ed opera\u010dn\u00edho syst\u00e9mu, jako je s\u00ed\u0165ov\u00fd z\u00e1sobn\u00edk a hierarchick\u00fd souborov\u00fd syst\u00e9m. D\u00edky tomu se unikernely li\u0161\u00ed od exokernel\u016f, kter\u00e9 poskytuj\u00ed mnohem omezen\u011bj\u0161\u00ed slu\u017eby a vy\u017eaduj\u00ed, aby aplikace implementovaly slo\u017eit\u011bj\u0161\u00ed funkce samy. Unikernel se sna\u017e\u00ed minimalizovat re\u017eii spojenou s obecn\u00fdmi opera\u010dn\u00edmi syst\u00e9my a z\u00e1rove\u0148 poskytnout aplikaci dostate\u010dn\u00e9 standardn\u00ed slu\u017eby pro jej\u00ed fungov\u00e1n\u00ed.",
        incorrect:
          "Unikernel, navr\u017een\u00fd pro b\u011bh jedin\u00e9 aplikace, neposkytuje \u017e\u00e1dn\u00e9 tradi\u010dn\u00ed abstrakce opera\u010dn\u00edho syst\u00e9mu, jako je s\u00ed\u0165ov\u00fd z\u00e1sobn\u00edk nebo hierarchick\u00fd souborov\u00fd syst\u00e9m. Podobn\u011b jako exokernely, unikernely se spol\u00e9haj\u00ed na to, \u017ee si aplikace implementuje v\u0161echny pot\u0159ebn\u00e9 slu\u017eby sama, \u010d\u00edm\u017e se dosahuje maxim\u00e1ln\u00ed minimalizace j\u00e1dra a sn\u00ed\u017een\u00ed re\u017eie. Hlavn\u00edm c\u00edlem unikernelu je poskytnout absolutn\u011b minim\u00e1ln\u00ed prost\u0159ed\u00ed pro b\u011bh jedin\u00e9 aplikace.",
        sectionNumber: "11.3.7",
        sectionTitle: "Other Kernel Types",
      },
      {
        uuid: "1595f3ff-a7c3-428b-a529-6c1bf811dd86",
        correct:
          "J\u00e1dro opera\u010dn\u00edho syst\u00e9mu b\u011b\u017e\u00ed v privilegovan\u00e9m re\u017eimu procesoru, co\u017e mu umo\u017e\u0148uje prov\u00e1d\u011bt operace, kter\u00e9 jsou pro u\u017eivatelsk\u00fd k\u00f3d nedostupn\u00e9. Pam\u011b\u0165 j\u00e1dra je chr\u00e1n\u011bna p\u0159ed p\u0159\u00edm\u00fdm p\u0159\u00edstupem z u\u017eivatelsk\u00e9ho prostoru, \u010d\u00edm\u017e se zaji\u0161\u0165uje stabilita a bezpe\u010dnost syst\u00e9mu, proto\u017ee u\u017eivatelsk\u00e9 aplikace nemohou po\u0161kodit kritick\u00e9 \u010d\u00e1sti opera\u010dn\u00edho syst\u00e9mu.",
        incorrect:
          "J\u00e1dro opera\u010dn\u00edho syst\u00e9mu b\u011b\u017e\u00ed v u\u017eivatelsk\u00e9m re\u017eimu procesoru, co\u017e umo\u017e\u0148uje u\u017eivatelsk\u00e9mu k\u00f3du prov\u00e1d\u011bt operace s privilegovan\u00fdm p\u0159\u00edstupem. Pam\u011b\u0165 j\u00e1dra je b\u011b\u017en\u011b p\u0159\u00edstupn\u00e1 z u\u017eivatelsk\u00e9ho prostoru, \u010d\u00edm\u017e se zvy\u0161uje flexibilita a efektivita syst\u00e9mu, proto\u017ee u\u017eivatelsk\u00e9 aplikace mohou p\u0159\u00edmo manipulovat s kritick\u00fdmi \u010d\u00e1stmi opera\u010dn\u00edho syst\u00e9mu.",
        sectionNumber: "11.4.1",
        sectionTitle: "Reminder: Kernel Protection",
      },
      {
        uuid: "2c5355c5-f92c-4e7e-b798-2454f319f990",
        correct:
          "Rozhran\u00ed syst\u00e9mov\u00fdch vol\u00e1n\u00ed je kl\u00ed\u010dov\u00e9 pro bezpe\u010dnou komunikaci mezi u\u017eivatelsk\u00fdmi aplikacemi a j\u00e1drem opera\u010dn\u00edho syst\u00e9mu. Umo\u017e\u0148uje aplikac\u00edm \u017e\u00e1dat o slu\u017eby j\u00e1dra, jako je p\u0159\u00edstup k hardwaru nebo souborov\u00e9mu syst\u00e9mu, a to \u0159\u00edzen\u00fdm zp\u016fsobem, kter\u00fd chr\u00e1n\u00ed syst\u00e9m p\u0159ed neopr\u00e1vn\u011bn\u00fdm p\u0159\u00edstupem a zaji\u0161\u0165uje integritu opera\u010dn\u00edho syst\u00e9mu.",
        incorrect:
          "Rozhran\u00ed syst\u00e9mov\u00fdch vol\u00e1n\u00ed je kl\u00ed\u010dov\u00e9 pro p\u0159\u00edmou komunikaci mezi u\u017eivatelsk\u00fdmi aplikacemi a hardwarem, obch\u00e1zej\u00edc\u00ed j\u00e1dro opera\u010dn\u00edho syst\u00e9mu. Umo\u017e\u0148uje aplikac\u00edm \u017e\u00e1dat o zdroje hardwaru bez \u0159\u00edzen\u00ed j\u00e1dra, co\u017e zvy\u0161uje v\u00fdkon, ale neposkytuje \u017e\u00e1dnou ochranu syst\u00e9mu p\u0159ed neopr\u00e1vn\u011bn\u00fdm p\u0159\u00edstupem a ohro\u017euje integritu opera\u010dn\u00edho syst\u00e9mu.",
        sectionNumber: "11.4.1",
        sectionTitle: "Reminder: Kernel Protection",
      },
      {
        uuid: "8e4cef03-4194-47c2-87e7-bc64bee018a6",
        correct:
          "Pro proveden\u00ed syst\u00e9mov\u00e9ho vol\u00e1n\u00ed mus\u00ed u\u017eivatelsk\u00e1 aplikace iniciovat p\u0159epnut\u00ed procesoru do privilegovan\u00e9ho re\u017eimu. Tento p\u0159ep\u00edna\u010d re\u017eimu nen\u00ed libovoln\u00fd, ale je striktn\u011b kontrolov\u00e1n opera\u010dn\u00edm syst\u00e9mem prost\u0159ednictv\u00edm mechanismu syst\u00e9mov\u00fdch vol\u00e1n\u00ed, aby se zabr\u00e1nilo zneu\u017eit\u00ed privilegovan\u00e9ho re\u017eimu u\u017eivatelsk\u00fdm k\u00f3dem a zachovala se bezpe\u010dnost syst\u00e9mu.",
        incorrect:
          "Pro proveden\u00ed syst\u00e9mov\u00e9ho vol\u00e1n\u00ed mus\u00ed u\u017eivatelsk\u00e1 aplikace iniciovat p\u0159epnut\u00ed procesoru do u\u017eivatelsk\u00e9ho re\u017eimu. Tento p\u0159ep\u00edna\u010d re\u017eimu je libovoln\u00fd a nen\u00ed kontrolov\u00e1n opera\u010dn\u00edm syst\u00e9mem, co\u017e umo\u017e\u0148uje u\u017eivatelsk\u00e9mu k\u00f3du snadno z\u00edskat privilegovan\u00fd p\u0159\u00edstup a potenci\u00e1ln\u011b naru\u0161it bezpe\u010dnost syst\u00e9mu.",
        sectionNumber: "11.4.1",
        sectionTitle: "Reminder: Kernel Protection",
      },
      {
        uuid: "2b69e9c3-3e3b-4ef8-8e11-43929427b568",
        correct:
          "Syst\u00e9mov\u00e1 vol\u00e1n\u00ed jsou navr\u017eena tak, aby se co nejv\u00edce podobala standardn\u00edm podprogram\u016fm, kter\u00e9 se b\u011b\u017en\u011b pou\u017e\u00edvaj\u00ed v syst\u00e9mov\u00fdch knihovn\u00e1ch. To znamen\u00e1, \u017ee by m\u011bla umo\u017e\u0148ovat p\u0159ed\u00e1v\u00e1n\u00ed argument\u016f do j\u00e1dra a n\u00e1sledn\u00e9 z\u00edsk\u00e1v\u00e1n\u00ed n\u00e1vratov\u00fdch hodnot z j\u00e1dra, podobn\u011b jako je tomu u b\u011b\u017en\u00fdch funkc\u00ed. Kl\u00ed\u010dov\u00fdm aspektem syst\u00e9mov\u00fdch vol\u00e1n\u00ed je bezpe\u010dnost, zejm\u00e9na zaji\u0161t\u011bn\u00ed, aby u\u017eivatelsk\u00fd prostor nemohl \u010d\u00edst ani modifikovat pam\u011b\u0165 j\u00e1dra b\u011bhem tohoto procesu.",
        incorrect:
          "Syst\u00e9mov\u00e1 vol\u00e1n\u00ed se z\u00e1m\u011brn\u011b odli\u0161uj\u00ed od standardn\u00edch podprogram\u016f a jejich c\u00edlem nen\u00ed napodobovat chov\u00e1n\u00ed b\u011b\u017en\u00fdch funkc\u00ed. Proto syst\u00e9mov\u00e1 vol\u00e1n\u00ed obvykle nepodporuj\u00ed p\u0159ed\u00e1v\u00e1n\u00ed argument\u016f do j\u00e1dra ani z\u00edsk\u00e1v\u00e1n\u00ed n\u00e1vratov\u00fdch hodnot. Bezpe\u010dnostn\u00ed aspekty, jako je ochrana pam\u011bti j\u00e1dra p\u0159ed neopr\u00e1vn\u011bn\u00fdm p\u0159\u00edstupem z u\u017eivatelsk\u00e9ho prostoru, nejsou u syst\u00e9mov\u00fdch vol\u00e1n\u00ed relevantn\u00ed, proto\u017ee se p\u0159edpokl\u00e1d\u00e1, \u017ee u\u017eivatelsk\u00fd prostor m\u00e1 pln\u00fd p\u0159\u00edstup k pam\u011bti j\u00e1dra.",
        sectionNumber: "11.4.2",
        sectionTitle: "System Calls",
      },
      {
        uuid: "6647073e-8260-4885-9800-f337c4c1435e",
        correct:
          "Kdy\u017e program v u\u017eivatelsk\u00e9m prostoru provede syst\u00e9mov\u00e9 vol\u00e1n\u00ed, prov\u00e1d\u011bn\u00ed se p\u0159ed\u00e1 specifick\u00e9 rutin\u011b v j\u00e1d\u0159e opera\u010dn\u00edho syst\u00e9mu. Sou\u010d\u00e1st\u00ed tohoto procesu je i p\u0159ed\u00e1n\u00ed argument\u016f, kter\u00e9 u\u017eivatelsk\u00fd program chce, aby j\u00e1dro zpracovalo. Po dokon\u010den\u00ed operace j\u00e1dro vr\u00e1t\u00ed u\u017eivatelsk\u00e9mu programu n\u00e1vratovou hodnotu, kter\u00e1 indikuje v\u00fdsledek syst\u00e9mov\u00e9ho vol\u00e1n\u00ed. Cel\u00fd tento mechanismus je navr\u017een s ohledem na bezpe\u010dnost, aby se zabr\u00e1nilo neopr\u00e1vn\u011bn\u00e9mu p\u0159\u00edstupu k pam\u011bti j\u00e1dra.",
        incorrect:
          "P\u0159i syst\u00e9mov\u00e9m vol\u00e1n\u00ed se \u0159\u00edzen\u00ed programu p\u0159ed\u00e1v\u00e1 zp\u011bt do u\u017eivatelsk\u00e9ho prostoru, nikoli do j\u00e1dra opera\u010dn\u00edho syst\u00e9mu. Argumenty se p\u0159ed\u00e1vaj\u00ed z j\u00e1dra do u\u017eivatelsk\u00e9ho prostoru a n\u00e1vratov\u00e1 hodnota se tak\u00e9 generuje v u\u017eivatelsk\u00e9m prostoru. Bezpe\u010dnostn\u00ed aspekty syst\u00e9mov\u00fdch vol\u00e1n\u00ed se zam\u011b\u0159uj\u00ed na ochranu u\u017eivatelsk\u00e9ho prostoru p\u0159ed potenci\u00e1ln\u00edmi hrozbami z j\u00e1dra, a nikoli naopak, proto\u017ee j\u00e1dro je pova\u017eov\u00e1no za d\u016fv\u011bryhodn\u00e9.",
        sectionNumber: "11.4.2",
        sectionTitle: "System Calls",
      },
      {
        uuid: "ece6bd3a-b3d5-4e10-bdfa-d433a57f053a",
        correct:
          "Bezpe\u010dnost proti spu\u0161t\u011bn\u00ed libovoln\u00e9ho k\u00f3du aplikac\u00ed se dosahuje spojen\u00edm eskalace privilegi\u00ed, tedy vstupu do privilegovan\u00e9ho re\u017eimu CPU, se sou\u010dasn\u00fdm p\u0159enosem prov\u00e1d\u011bn\u00ed na pevnou adresu, kterou aplikace nem\u016f\u017ee zm\u011bnit, proto\u017ee tabulka obsluhy p\u0159eru\u0161en\u00ed, kter\u00e1 tuto adresu obsahuje, je chr\u00e1n\u011bna mechanismy spr\u00e1vy pam\u011bti a m\u016f\u017ee b\u00fdt modifikov\u00e1na pouze v privilegovan\u00e9m re\u017eimu.",
        incorrect:
          "Bezpe\u010dnost proti spu\u0161t\u011bn\u00ed libovoln\u00e9ho k\u00f3du aplikac\u00ed se dosahuje spojen\u00edm eskalace privilegi\u00ed, tedy vstupu do privilegovan\u00e9ho re\u017eimu CPU, se sou\u010dasn\u00fdm p\u0159enosem prov\u00e1d\u011bn\u00ed na pevnou adresu, kterou aplikace m\u016f\u017ee snadno zm\u011bnit, proto\u017ee tabulka obsluhy p\u0159eru\u0161en\u00ed, kter\u00e1 tuto adresu obsahuje, je p\u0159\u00edstupn\u00e1 i v u\u017eivatelsk\u00e9m re\u017eimu a aplikace ji m\u016f\u017ee modifikovat dle pot\u0159eby.",
        sectionNumber: "11.4.3",
        sectionTitle: "Trapping into the Kernel",
      },
      {
        uuid: "e5de74d3-1efe-4e44-9637-4c6f568ad82b",
        correct:
          "Na tradi\u010dn\u00edch 32bitov\u00fdch procesorech x86 byla preferovanou metodou implementace syst\u00e9mov\u00e9ho vol\u00e1n\u00ed softwarov\u00e1 p\u0159eru\u0161en\u00ed, kter\u00e1 se vyvol\u00e1vaj\u00ed instrukc\u00ed `int`. Tato instrukce zp\u016fsob\u00ed, \u017ee procesor provede proces analogick\u00fd hardwarov\u00e9mu p\u0159eru\u0161en\u00ed, synchronn\u011b p\u0159epne do privilegovan\u00e9ho re\u017eimu a spust\u00ed obsluhu p\u0159eru\u0161en\u00ed, kter\u00e1 je definov\u00e1na v tabulce deskriptor\u016f p\u0159eru\u0161en\u00ed (IDT).",
        incorrect:
          "Na tradi\u010dn\u00edch 32bitov\u00fdch procesorech x86 byla preferovanou metodou implementace syst\u00e9mov\u00e9ho vol\u00e1n\u00ed softwarov\u00e1 p\u0159eru\u0161en\u00ed, kter\u00e1 se vyvol\u00e1vaj\u00ed instrukc\u00ed `iret`. Tato instrukce zp\u016fsob\u00ed, \u017ee procesor provede proces analogick\u00fd hardwarov\u00e9mu p\u0159eru\u0161en\u00ed, asynchronn\u011b p\u0159epne do u\u017eivatelsk\u00e9ho re\u017eimu a spust\u00ed obsluhu p\u0159eru\u0161en\u00ed, kter\u00e1 je definov\u00e1na v tabulce glob\u00e1ln\u00edch deskriptor\u016f (GDT).",
        sectionNumber: "11.4.3",
        sectionTitle: "Trapping into the Kernel",
      },
      {
        uuid: "15c96221-961c-4f16-8213-c1d363389f4b",
        correct:
          "Mechanismus vol\u00e1n\u00ed syst\u00e9mov\u00fdch slu\u017eeb, a\u010dkoliv se v principu dr\u017e\u00ed univerz\u00e1ln\u00edho sch\u00e9matu zahrnuj\u00edc\u00edho nastaven\u00ed pevn\u00e9 vstupn\u00ed adresy j\u00e1drem a pou\u017eit\u00ed specifick\u00e9 instrukce pro zm\u011bnu re\u017eimu CPU a skok do j\u00e1dra, je vysoce z\u00e1visl\u00fd na konkr\u00e9tn\u00ed architektu\u0159e procesoru a opera\u010dn\u00edho syst\u00e9mu, co\u017e znamen\u00e1, \u017ee implementa\u010dn\u00ed detaily se mohou v\u00fdrazn\u011b li\u0161it mezi r\u016fzn\u00fdmi platformami.",
        incorrect:
          "Mechanismus vol\u00e1n\u00ed syst\u00e9mov\u00fdch slu\u017eeb je pln\u011b univerz\u00e1ln\u00ed a nez\u00e1visl\u00fd na architektu\u0159e procesoru a opera\u010dn\u00edho syst\u00e9mu, co\u017e znamen\u00e1, \u017ee implementa\u010dn\u00ed detaily jsou identick\u00e9 na v\u0161ech platform\u00e1ch. Princip zahrnuje dynamick\u00e9 nastaven\u00ed vstupn\u00ed adresy aplikac\u00ed a pou\u017eit\u00ed obecn\u00e9 instrukce pro zm\u011bnu re\u017eimu CPU a skok do j\u00e1dra, co\u017e zaji\u0161\u0165uje maxim\u00e1ln\u00ed p\u0159enositelnost k\u00f3du mezi syst\u00e9my.",
        sectionNumber: "11.4.3",
        sectionTitle: "Trapping into the Kernel",
      },
      {
        uuid: "4efd9cf2-7fa6-4323-b6b3-7c59100ea411",
        correct:
          "Mechanismus softwarov\u00fdch p\u0159eru\u0161en\u00ed, pou\u017e\u00edvan\u00fd pro syst\u00e9mov\u00e1 vol\u00e1n\u00ed, je charakteristick\u00fd svou ni\u017e\u0161\u00ed efektivitou, kter\u00e1 plyne z nutnosti ukl\u00e1dat rozs\u00e1hl\u00fd stav CPU. Tato vlastnost je d\u00e1na t\u00edm, \u017ee mechanismus vyu\u017e\u00edv\u00e1 hardwarov\u00fdch p\u0159eru\u0161en\u00ed, co\u017e vede k ukl\u00e1d\u00e1n\u00ed v\u011bt\u0161\u00edho mno\u017estv\u00ed stavu, ne\u017e by bylo pro samotn\u00e9 syst\u00e9mov\u00e9 vol\u00e1n\u00ed nezbytn\u00e9, a to i p\u0159esto, \u017ee modern\u011bj\u0161\u00ed architektury procesor\u016f nab\u00edzej\u00ed specializovan\u00e9 a efektivn\u011bj\u0161\u00ed instrukce pro syst\u00e9mov\u00e1 vol\u00e1n\u00ed.",
        incorrect:
          "Mechanismus softwarov\u00fdch p\u0159eru\u0161en\u00ed, pou\u017e\u00edvan\u00fd pro syst\u00e9mov\u00e1 vol\u00e1n\u00ed, je vysoce efektivn\u00ed, proto\u017ee minimalizuje ukl\u00e1d\u00e1n\u00ed stavu CPU a p\u0159\u00edmo vyu\u017e\u00edv\u00e1 vyhrazen\u00e9 registry procesoru pro p\u0159ed\u00e1v\u00e1n\u00ed argument\u016f. To p\u0159edstavuje v\u00fdznamnou v\u00fdhodu oproti hardwarov\u00fdm p\u0159eru\u0161en\u00edm p\u0159i implementaci slu\u017eeb opera\u010dn\u00edho syst\u00e9mu a umo\u017e\u0148uje dos\u00e1hnout vysok\u00e9 propustnosti syst\u00e9mov\u00fdch vol\u00e1n\u00ed s minim\u00e1ln\u00edm dopadem na v\u00fdkon procesoru.",
        sectionNumber: "11.4.4",
        sectionTitle: "Aside: Software Interrupts",
      },
      {
        uuid: "08f81303-2600-4b2a-b19a-ed4da44eeabf",
        correct:
          "Mechanismus softwarov\u00fdch p\u0159eru\u0161en\u00ed byl preferovan\u00fdm zp\u016fsobem, jak\u00fdm opera\u010dn\u00ed syst\u00e9my poskytovaly slu\u017eby aplikac\u00edm na architektu\u0159e x86 a\u017e do konce 32bitov\u00e9 \u00e9ry, a to i p\u0159esto, \u017ee procesory x86 ji\u017e od modelu 80386 nab\u00edzely specializovan\u00e9 instrukce pro syst\u00e9mov\u00e1 vol\u00e1n\u00ed. Tyto specializovan\u00e9 instrukce v\u0161ak nebyly opera\u010dn\u00edmi syst\u00e9my \u0161iroce vyu\u017e\u00edv\u00e1ny, a softwarov\u00e1 p\u0159eru\u0161en\u00ed tak z\u016fstala dominantn\u00ed metodou pro syst\u00e9mov\u00e1 vol\u00e1n\u00ed.",
        incorrect:
          "Mechanismus softwarov\u00fdch p\u0159eru\u0161en\u00ed byl na architektu\u0159e x86 opu\u0161t\u011bn ji\u017e v ran\u00fdch dob\u00e1ch 32bitov\u00e9 \u00e9ry ve prosp\u011bch specializovan\u00fdch a efektivn\u011bj\u0161\u00edch instrukc\u00ed pro syst\u00e9mov\u00e1 vol\u00e1n\u00ed, kter\u00e9 procesory x86 nab\u00edzely ji\u017e od modelu 80386. Opera\u010dn\u00ed syst\u00e9my okam\u017eit\u011b za\u010daly \u0161iroce vyu\u017e\u00edvat tyto nov\u00e9 instrukce pro syst\u00e9mov\u00e1 vol\u00e1n\u00ed, co\u017e vedlo k v\u00fdznamn\u00e9mu zv\u00fd\u0161en\u00ed v\u00fdkonu a efektivity zpracov\u00e1n\u00ed syst\u00e9mov\u00fdch vol\u00e1n\u00ed a k rychl\u00e9mu nahrazen\u00ed softwarov\u00fdch p\u0159eru\u0161en\u00ed.",
        sectionNumber: "11.4.4",
        sectionTitle: "Aside: Software Interrupts",
      },
      {
        uuid: "5a811074-6dd4-4cc7-9543-5279ad886b05",
        correct:
          "V kontextu softwarov\u00fdch p\u0159eru\u0161en\u00ed, kter\u00e1 se pou\u017e\u00edvaj\u00ed pro syst\u00e9mov\u00e1 vol\u00e1n\u00ed, je jedn\u00edm z d\u016fvod\u016f sn\u00ed\u017een\u00e9 efektivity fakt, \u017ee adresa obslu\u017en\u00e9 rutiny se z\u00edsk\u00e1v\u00e1 z pam\u011bti, konkr\u00e9tn\u011b z tabulky p\u0159eru\u0161en\u00ed ulo\u017een\u00e9 v RAM. Tento postup zp\u016fsobuje dodate\u010dn\u00e9 zpo\u017ed\u011bn\u00ed, proto\u017ee procesor mus\u00ed p\u0159istoupit do pam\u011bti pro z\u00edsk\u00e1n\u00ed adresy obslu\u017en\u00e9 rutiny, co\u017e je m\u00e9n\u011b efektivn\u00ed ve srovn\u00e1n\u00ed s mechanismy, kter\u00e9 by mohly m\u00edt adresu obslu\u017en\u00e9 rutiny ulo\u017eenou p\u0159\u00edmo v registru procesoru.",
        incorrect:
          "V kontextu softwarov\u00fdch p\u0159eru\u0161en\u00ed, kter\u00e1 se pou\u017e\u00edvaj\u00ed pro syst\u00e9mov\u00e1 vol\u00e1n\u00ed, je kl\u00ed\u010dov\u00fdm prvkem pro dosa\u017een\u00ed vysok\u00e9 efektivity p\u0159\u00edm\u00e9 ulo\u017een\u00ed adresy obslu\u017en\u00e9 rutiny v registru procesoru. Tento p\u0159\u00edstup eliminuje pot\u0159ebu \u010dten\u00ed z pam\u011bti a zrychluje tak zpracov\u00e1n\u00ed syst\u00e9mov\u00fdch vol\u00e1n\u00ed. Tabulka p\u0159eru\u0161en\u00ed se v tomto mechanismu vyu\u017e\u00edv\u00e1 pouze pro inicializaci syst\u00e9mu, ale b\u011bhem b\u011b\u017en\u00e9ho provozu syst\u00e9mov\u00fdch vol\u00e1n\u00ed se k n\u00ed nep\u0159istupuje, co\u017e zaji\u0161\u0165uje minim\u00e1ln\u00ed re\u017eii.",
        sectionNumber: "11.4.4",
        sectionTitle: "Aside: Software Interrupts",
      },
      {
        uuid: "968c2933-ca52-4622-b802-1121bef10578",
        correct:
          "Na rozd\u00edl od softwarov\u00fdch p\u0159eru\u0161en\u00ed, mechanismus vol\u00e1n\u00ed syst\u00e9mu pomoc\u00ed instrukc\u00ed `sysenter` a `syscall` v architektur\u00e1ch x86-64 vyu\u017e\u00edv\u00e1 pouze jedin\u00fd vstupn\u00ed bod, co\u017e zjednodu\u0161uje a zefektiv\u0148uje proces eskalace privilegi\u00ed a odli\u0161uje se tak od tradi\u010dn\u00edho zpracov\u00e1n\u00ed p\u0159eru\u0161en\u00ed, kde m\u016f\u017ee b\u00fdt vstupn\u00edch bod\u016f v\u00edce. Tento jednotn\u00fd vstupn\u00ed bod p\u0159isp\u00edv\u00e1 k rychlej\u0161\u00edmu proveden\u00ed syst\u00e9mov\u00fdch vol\u00e1n\u00ed.",
        incorrect:
          "Na rozd\u00edl od softwarov\u00fdch p\u0159eru\u0161en\u00ed, mechanismus vol\u00e1n\u00ed syst\u00e9mu pomoc\u00ed instrukc\u00ed `sysenter` a `syscall` v architektur\u00e1ch x86-64 vyu\u017e\u00edv\u00e1 v\u00edce vstupn\u00edch bod\u016f, podobn\u011b jako je tomu u softwarov\u00fdch p\u0159eru\u0161en\u00ed, co\u017e zaji\u0161\u0165uje flexibilitu a komplexn\u011bj\u0161\u00ed spr\u00e1vu syst\u00e9mu. Tento p\u0159\u00edstup s v\u00edce vstupn\u00edmi body je srovnateln\u011b rychl\u00fd s tradi\u010dn\u00edm zpracov\u00e1n\u00edm p\u0159eru\u0161en\u00ed.",
        sectionNumber: "11.4.5",
        sectionTitle:
          "Syscall instructions: \u2039amd64\u203a / \u2039x86_64\u203a",
      },
      {
        uuid: "8cb6f4e4-af3c-44a7-82f1-1fd054d11bd5",
        correct:
          "Instrukce `sysenter` a `syscall` byly zavedeny v 64bitov\u00e9 architektu\u0159e x86 s c\u00edlem urychlit syst\u00e9mov\u00e1 vol\u00e1n\u00ed oproti softwarov\u00fdm p\u0159eru\u0161en\u00edm. Toho je dosa\u017eeno mimo jin\u00e9 t\u00edm, \u017ee spr\u00e1va stavu v\u00fdpo\u010dtu je p\u0159esunuta do softwaru, co\u017e umo\u017e\u0148uje kompil\u00e1tor\u016fm optimalizovat ukl\u00e1d\u00e1n\u00ed a obnovov\u00e1n\u00ed registr\u016f, nam\u00edsto automatick\u00e9ho ukl\u00e1d\u00e1n\u00ed cel\u00e9ho stavu CPU do pam\u011bti, jak je tomu u p\u0159eru\u0161en\u00ed.",
        incorrect:
          "Instrukce `sysenter` a `syscall` byly zavedeny v 64bitov\u00e9 architektu\u0159e x86 s c\u00edlem zpomalit syst\u00e9mov\u00e1 vol\u00e1n\u00ed v porovn\u00e1n\u00ed se softwarov\u00fdmi p\u0159eru\u0161en\u00edmi. Toho je dosa\u017eeno mimo jin\u00e9 t\u00edm, \u017ee spr\u00e1va stavu v\u00fdpo\u010dtu je ponech\u00e1na hardwaru, co\u017e vy\u017eaduje, aby procesor automaticky ukl\u00e1dal cel\u00fd stav CPU do pam\u011bti, podobn\u011b jako u p\u0159eru\u0161en\u00ed, a kompil\u00e1tory nemaj\u00ed mo\u017enost optimalizace ukl\u00e1d\u00e1n\u00ed registr\u016f.",
        sectionNumber: "11.4.5",
        sectionTitle:
          "Syscall instructions: \u2039amd64\u203a / \u2039x86_64\u203a",
      },
      {
        uuid: "8fa82435-ba31-4d17-a46e-0682795a1e7e",
        correct:
          "Mechanismus syst\u00e9mov\u00fdch vol\u00e1n\u00ed pomoc\u00ed instrukc\u00ed `sysenter` a `syscall` umo\u017e\u0148uje kompil\u00e1tor\u016fm v\u00fdznamn\u011b optimalizovat v\u00fdkon syst\u00e9mov\u00fdch vol\u00e1n\u00ed t\u00edm, \u017ee se ukl\u00e1d\u00e1 a obnovuje pouze mal\u00fd po\u010det registr\u016f. Tato softwarov\u00e1 spr\u00e1va stavu kontrastuje s tradi\u010dn\u00edmi softwarov\u00fdmi p\u0159eru\u0161en\u00edmi, kde CPU automaticky ukl\u00e1d\u00e1 cel\u00fd sv\u016fj stav do pam\u011bti, co\u017e p\u0159edstavuje zna\u010dnou re\u017eii a zpomaluje prov\u00e1d\u011bn\u00ed syst\u00e9mov\u00fdch vol\u00e1n\u00ed.",
        incorrect:
          "Mechanismus syst\u00e9mov\u00fdch vol\u00e1n\u00ed pomoc\u00ed instrukc\u00ed `sysenter` a `syscall` neumo\u017e\u0148uje kompil\u00e1tor\u016fm optimalizovat v\u00fdkon syst\u00e9mov\u00fdch vol\u00e1n\u00ed, proto\u017ee se ukl\u00e1d\u00e1 a obnovuje cel\u00fd stav registr\u016f procesoru. Tato hardwarov\u00e1 spr\u00e1va stavu je podobn\u00e1 tradi\u010dn\u00edm softwarov\u00fdm p\u0159eru\u0161en\u00edm, kde CPU automaticky ukl\u00e1d\u00e1 pouze malou \u010d\u00e1st sv\u00e9ho stavu do pam\u011bti, co\u017e minimalizuje re\u017eii a urychluje prov\u00e1d\u011bn\u00ed syst\u00e9mov\u00fdch vol\u00e1n\u00ed.",
        sectionNumber: "11.4.5",
        sectionTitle:
          "Syscall instructions: \u2039amd64\u203a / \u2039x86_64\u203a",
      },
      {
        uuid: "f8566288-80fc-4220-bd23-fec7dce31825",
        correct:
          "V modern\u00edch opera\u010dn\u00edch syst\u00e9mech, jako je Linux a Windows, existuje podstatn\u011b v\u00edce syst\u00e9mov\u00fdch vol\u00e1n\u00ed ne\u017e typ\u016f p\u0159eru\u0161en\u00ed. Po\u010det syst\u00e9mov\u00fdch vol\u00e1n\u00ed se pohybuje v stovk\u00e1ch, zat\u00edmco po\u010det p\u0159eru\u0161en\u00ed je mnohem men\u0161\u00ed. V\u0161echna syst\u00e9mov\u00e1 vol\u00e1n\u00ed obvykle sd\u00edlej\u00ed jedin\u00fd vstupn\u00ed bod, jako je nap\u0159\u00edklad instrukce `sysenter`.",
        incorrect:
          "A\u010dkoli existuje mnoho syst\u00e9mov\u00fdch vol\u00e1n\u00ed, jejich po\u010det je srovnateln\u00fd s po\u010dtem typ\u016f p\u0159eru\u0161en\u00ed v modern\u00edch opera\u010dn\u00edch syst\u00e9mech, jako je Linux a Windows. Oba typy ud\u00e1lost\u00ed maj\u00ed stovky r\u016fzn\u00fdch vstupn\u00edch bod\u016f, p\u0159i\u010dem\u017e syst\u00e9mov\u00e1 vol\u00e1n\u00ed i p\u0159eru\u0161en\u00ed maj\u00ed vyhrazen\u00e9 specifick\u00e9 vstupn\u00ed adresy.",
        sectionNumber: "11.4.6",
        sectionTitle: "Which System Call?",
      },
      {
        uuid: "f83c50ba-a5b9-4516-b0b4-9b855466fa2b",
        correct:
          "Pro zpracov\u00e1n\u00ed syst\u00e9mov\u00fdch vol\u00e1n\u00ed vyu\u017e\u00edvaj\u00ed modern\u00ed opera\u010dn\u00ed syst\u00e9my, jako Linux a Windows, jednotn\u00fd vstupn\u00ed bod, nap\u0159\u00edklad instrukci `sysenter`. Rozli\u0161en\u00ed mezi konkr\u00e9tn\u00edmi po\u017eadavky na syst\u00e9mov\u00e1 vol\u00e1n\u00ed se prov\u00e1d\u00ed na z\u00e1klad\u011b \u010d\u00edsla syst\u00e9mov\u00e9ho vol\u00e1n\u00ed, kter\u00e9 je p\u0159ed\u00e1no v registru procesoru.",
        incorrect:
          "Modern\u00ed opera\u010dn\u00ed syst\u00e9my, jako je Linux a Windows, zpracov\u00e1vaj\u00ed syst\u00e9mov\u00e1 vol\u00e1n\u00ed tak, \u017ee pro ka\u017ed\u00e9 syst\u00e9mov\u00e9 vol\u00e1n\u00ed je p\u0159i\u0159azen unik\u00e1tn\u00ed vstupn\u00ed bod. To umo\u017e\u0148uje j\u00e1dru opera\u010dn\u00edho syst\u00e9mu p\u0159\u00edmo sko\u010dit na p\u0159\u00edslu\u0161nou obslu\u017enou rutinu bez nutnosti zkoumat \u010d\u00edslo syst\u00e9mov\u00e9ho vol\u00e1n\u00ed.",
        sectionNumber: "11.4.6",
        sectionTitle: "Which System Call?",
      },
      {
        uuid: "9d556636-0ca8-4c9c-bfe3-590baaf6162f",
        correct:
          "Prvn\u00ed f\u00e1z\u00ed syst\u00e9mov\u00e9ho vol\u00e1n\u00ed, kter\u00e1 se typicky odehr\u00e1v\u00e1 v u\u017eivatelsk\u00e9m re\u017eimu, je p\u0159\u00edprava argument\u016f pro syst\u00e9mov\u00e9 vol\u00e1n\u00ed v knihovn\u011b \u2039libc\u203a.  Pot\u00e9 se \u010d\u00edslo syst\u00e9mov\u00e9ho vol\u00e1n\u00ed ulo\u017e\u00ed do ur\u010den\u00e9ho registru a procesor se p\u0159epne do privilegovan\u00e9ho re\u017eimu, \u010d\u00edm\u017e se \u0159\u00edzen\u00ed p\u0159ed\u00e1 obslu\u017en\u00e9 rutin\u011b syst\u00e9mov\u00fdch vol\u00e1n\u00ed v j\u00e1d\u0159e opera\u010dn\u00edho syst\u00e9mu.",
        incorrect:
          "Prvn\u00ed f\u00e1z\u00ed syst\u00e9mov\u00e9ho vol\u00e1n\u00ed, kter\u00e1 se typicky odehr\u00e1v\u00e1 v privilegovan\u00e9m re\u017eimu, je p\u0159\u00edprava argument\u016f pro syst\u00e9mov\u00e9 vol\u00e1n\u00ed v j\u00e1d\u0159e opera\u010dn\u00edho syst\u00e9mu. Pot\u00e9 se \u010d\u00edslo syst\u00e9mov\u00e9ho vol\u00e1n\u00ed ulo\u017e\u00ed do ur\u010den\u00e9ho registru a procesor se p\u0159epne do u\u017eivatelsk\u00e9ho re\u017eimu, \u010d\u00edm\u017e se \u0159\u00edzen\u00ed p\u0159ed\u00e1 obslu\u017en\u00e9 rutin\u011b syst\u00e9mov\u00fdch vol\u00e1n\u00ed v knihovn\u011b \u2039libc\u203a.",
        sectionNumber: "11.4.7",
        sectionTitle: "System Call Sequence",
      },
      {
        uuid: "9f0bea84-56a4-471c-9b10-c53330f57275",
        correct:
          "Po p\u0159epnut\u00ed do privilegovan\u00e9ho re\u017eimu j\u00e1dro opera\u010dn\u00edho syst\u00e9mu analyzuje argumenty poskytnut\u00e9 u\u017eivatelsk\u00fdm programem a p\u0159edev\u0161\u00edm ur\u010d\u00ed, kter\u00e9 syst\u00e9mov\u00e9 vol\u00e1n\u00ed bylo po\u017eadov\u00e1no. K tomuto \u00fa\u010delu se v j\u00e1d\u0159e \u010dasto pou\u017e\u00edv\u00e1 konstrukce `switch`, kter\u00e1 na z\u00e1klad\u011b \u010d\u00edsla syst\u00e9mov\u00e9ho vol\u00e1n\u00ed (sysnum) vol\u00e1 specifickou obslu\u017enou rutinu, jako nap\u0159\u00edklad `syscall_write()` pro syst\u00e9mov\u00e9 vol\u00e1n\u00ed `SYS_write`.",
        incorrect:
          "Po p\u0159epnut\u00ed do privilegovan\u00e9ho re\u017eimu u\u017eivatelsk\u00fd program analyzuje argumenty poskytnut\u00e9 j\u00e1drem opera\u010dn\u00edho syst\u00e9mu a p\u0159edev\u0161\u00edm ur\u010d\u00ed, kter\u00e9 syst\u00e9mov\u00e9 vol\u00e1n\u00ed bylo po\u017eadov\u00e1no. K tomuto \u00fa\u010delu se v u\u017eivatelsk\u00e9m prostoru \u010dasto pou\u017e\u00edv\u00e1 konstrukce `switch`, kter\u00e1 na z\u00e1klad\u011b \u010d\u00edsla syst\u00e9mov\u00e9ho vol\u00e1n\u00ed (sysnum) vol\u00e1 specifickou obslu\u017enou rutinu, jako nap\u0159\u00edklad `syscall_write()` pro syst\u00e9mov\u00e9 vol\u00e1n\u00ed `SYS_write`.",
        sectionNumber: "11.4.7",
        sectionTitle: "System Call Sequence",
      },
      {
        uuid: "1325bd4f-9162-4e44-9b5e-a018fb76609d",
        correct:
          "V modern\u00edch syst\u00e9mech, jako je nap\u0159\u00edklad amd64 Linux, se argumenty syst\u00e9mov\u00fdch vol\u00e1n\u00ed typicky p\u0159ed\u00e1vaj\u00ed pomoc\u00ed registr\u016f procesoru, p\u0159i\u010dem\u017e m\u016f\u017ee b\u00fdt pou\u017eito a\u017e \u0161est registr\u016f pro argumenty. N\u011bkter\u00e9 z t\u011bchto argument\u016f mohou b\u00fdt adresy pam\u011bti, kter\u00e9 odkazuj\u00ed na dal\u0161\u00ed data, jako je nap\u0159\u00edklad buffer pro operace \u010dten\u00ed nebo z\u00e1pisu.",
        incorrect:
          "V modern\u00edch syst\u00e9mech, jako je nap\u0159\u00edklad amd64 Linux, se argumenty syst\u00e9mov\u00fdch vol\u00e1n\u00ed typicky p\u0159ed\u00e1vaj\u00ed pomoc\u00ed z\u00e1sobn\u00edku u\u017eivatelsk\u00e9ho prostoru, p\u0159i\u010dem\u017e m\u016f\u017ee b\u00fdt pou\u017eito a\u017e \u0161est polo\u017eek z\u00e1sobn\u00edku pro argumenty. V\u0161echny argumenty jsou p\u0159\u00edmo data, a nikdy se nepou\u017e\u00edvaj\u00ed adresy pam\u011bti pro p\u0159ed\u00e1v\u00e1n\u00ed slo\u017eit\u011bj\u0161\u00edch datov\u00fdch struktur jako buffery.",
        sectionNumber: "11.4.7",
        sectionTitle: "System Call Sequence",
      },
      {
        uuid: "33efcd96-f142-479b-9451-65199deb81d7",
        correct:
          "Spr\u00e1va pam\u011bti a spr\u00e1va proces\u016f jsou pova\u017eov\u00e1ny za kl\u00ed\u010dov\u00e9 odpov\u011bdnosti j\u00e1dra opera\u010dn\u00edho syst\u00e9mu a jejich implementace je z\u0159\u00eddka delegov\u00e1na na extern\u00ed slu\u017eby kv\u016fli jejich z\u00e1sadn\u00ed povaze pro chod syst\u00e9mu a nutnosti \u00fazk\u00e9 integrace s hardwarem.",
        incorrect:
          "Spr\u00e1va pam\u011bti a spr\u00e1va proces\u016f, a\u010dkoli jsou d\u016fle\u017eit\u00e9 pro opera\u010dn\u00ed syst\u00e9m, jsou \u010dasto outsourcov\u00e1ny extern\u00edm slu\u017eb\u00e1m v modern\u00edch mikrokernelov\u00fdch architektur\u00e1ch, aby se zlep\u0161ila modularita a stabilita syst\u00e9mu, co\u017e je b\u011b\u017en\u00fd p\u0159\u00edstup v sou\u010dasn\u00fdch opera\u010dn\u00edch syst\u00e9mech.",
        sectionNumber: "11.5.1",
        sectionTitle: "What Does a Kernel Do?",
      },
      {
        uuid: "b47f3355-3462-426a-879e-2f7046430091",
        correct:
          "Zat\u00edmco ovlada\u010de za\u0159\u00edzen\u00ed, souborov\u00e9 syst\u00e9my a s\u00edt\u011b jsou z\u00e1kladn\u00edmi slu\u017ebami kompletn\u00edho opera\u010dn\u00edho syst\u00e9mu, nejsou v\u017edy pova\u017eov\u00e1ny za kl\u00ed\u010dov\u00e9 odpov\u011bdnosti j\u00e1dra a mohou b\u00fdt implementov\u00e1ny mimo j\u00e1dro v n\u011bkter\u00fdch n\u00e1vrz\u00edch opera\u010dn\u00edch syst\u00e9m\u016f, zejm\u00e9na v mikrokernelech, a\u010dkoli jejich absence v modern\u00edm univerz\u00e1ln\u00edm OS je nepravd\u011bpodobn\u00e1.",
        incorrect:
          "Ovlada\u010de za\u0159\u00edzen\u00ed, souborov\u00e9 syst\u00e9my a s\u00edt\u011b jsou v\u017edy implementov\u00e1ny jako ned\u00edln\u00e1 sou\u010d\u00e1st j\u00e1dra opera\u010dn\u00edho syst\u00e9mu ve v\u0161ech modern\u00edch architektur\u00e1ch opera\u010dn\u00edch syst\u00e9m\u016f, aby byla zaji\u0161t\u011bna optim\u00e1ln\u00ed v\u00fdkonnost a bezpe\u010dnost syst\u00e9mu a nelze si p\u0159edstavit modern\u00ed opera\u010dn\u00ed syst\u00e9m bez jejich integrace v j\u00e1d\u0159e.",
        sectionNumber: "11.5.1",
        sectionTitle: "What Does a Kernel Do?",
      },
      {
        uuid: "77babdd0-d0d8-42c7-b9fb-9156d8dde726",
        correct:
          "Modern\u00ed univerz\u00e1ln\u00ed opera\u010dn\u00ed syst\u00e9my typicky zahrnuj\u00ed spr\u00e1vu pam\u011bti, pl\u00e1nov\u00e1n\u00ed proces\u016f, ovlada\u010de za\u0159\u00edzen\u00ed, souborov\u00e9 syst\u00e9my a s\u00ed\u0165ov\u00e9 funkce, aby poskytovaly komplexn\u00ed v\u00fdpo\u010detn\u00ed prost\u0159ed\u00ed pro u\u017eivatele a aplikace, a a\u010dkoli n\u011bkter\u00e9 slu\u017eby nemus\u00ed b\u00fdt striktn\u011b sou\u010d\u00e1st\u00ed j\u00e1dra, jsou nezbytn\u00e9 pro funk\u010dnost OS.",
        incorrect:
          "Modern\u00ed univerz\u00e1ln\u00ed opera\u010dn\u00ed syst\u00e9my \u010dasto vylu\u010duj\u00ed funkce souborov\u00e9ho syst\u00e9mu a s\u00edt\u00ed ze sv\u00fdch z\u00e1kladn\u00edch slu\u017eeb a spol\u00e9haj\u00ed se m\u00edsto toho na extern\u00ed knihovny a programy u\u017eivatelsk\u00e9ho prostoru pro zpracov\u00e1n\u00ed t\u011bchto aspekt\u016f provozu syst\u00e9mu, \u010d\u00edm\u017e se j\u00e1dro st\u00e1v\u00e1 \u0161t\u00edhlej\u0161\u00edm a efektivn\u011bj\u0161\u00edm.",
        sectionNumber: "11.5.1",
        sectionTitle: "What Does a Kernel Do?",
      },
      {
        uuid: "57416d8a-def2-493e-b09c-a87721808391",
        correct:
          "V tradi\u010dn\u00edch monolitick\u00fdch n\u00e1vrz\u00edch opera\u010dn\u00edch syst\u00e9m\u016f jsou v\u0161echny z\u00e1kladn\u00ed slu\u017eby, v\u010detn\u011b spr\u00e1vy pam\u011bti, pl\u00e1nov\u00e1n\u00ed proces\u016f, ovlada\u010d\u016f za\u0159\u00edzen\u00ed, souborov\u00fdch syst\u00e9m\u016f a s\u00edt\u00ed, integrov\u00e1ny p\u0159\u00edmo do j\u00e1dra, aby se dos\u00e1hlo t\u011bsn\u00e9 integrace a potenci\u00e1ln\u011b vy\u0161\u0161\u00edho v\u00fdkonu, a\u010dkoli to m\u016f\u017ee v\u00e9st ke slo\u017eit\u011bj\u0161\u00ed a m\u00e9n\u011b modul\u00e1rn\u00ed struktu\u0159e.",
        incorrect:
          "Monolitick\u00e9 n\u00e1vrhy opera\u010dn\u00edch syst\u00e9m\u016f typicky odd\u011bluj\u00ed z\u00e1kladn\u00ed slu\u017eby, jako jsou souborov\u00e9 syst\u00e9my a s\u00edt\u011b, od j\u00e1dra a implementuj\u00ed je jako nez\u00e1visl\u00e9 moduly, aby se zv\u00fd\u0161ila stabilita syst\u00e9mu a zjednodu\u0161il v\u00fdvoj j\u00e1dra, co\u017e je kl\u00ed\u010dov\u00fd rozd\u00edl oproti mikrokernelov\u00fdm architektur\u00e1m.",
        sectionNumber: "11.5.1",
        sectionTitle: "What Does a Kernel Do?",
      },
      {
        uuid: "a9e49084-c5e8-4af0-8f07-0a76760dc458",
        correct:
          "Zat\u00edmco monolitick\u00e1 j\u00e1dra opera\u010dn\u00edch syst\u00e9m\u016f mohou implementovat r\u016fzn\u00e9 dopl\u0148kov\u00e9 slu\u017eby, interprocesn\u00ed komunikace (IPC) p\u0159edstavuje slu\u017ebu, kter\u00e1 je t\u00e9m\u011b\u0159 univerz\u00e1ln\u011b p\u0159\u00edtomna v monolitick\u00fdch j\u00e1drech a je pova\u017eov\u00e1na za natolik z\u00e1sadn\u00ed, \u017ee se v n\u011bjak\u00e9 form\u011b objevuje i v mikrokernelech, p\u0159esto\u017ee konkr\u00e9tn\u00ed implementace a v\u00fdznam IPC mechanism\u016f se mohou li\u0161it mezi monolitick\u00fdmi a mikrokernelov\u00fdmi architekturami, p\u0159i\u010dem\u017e v mikrokernelech hraje IPC obvykle je\u0161t\u011b v\u00fdznamn\u011bj\u0161\u00ed roli.",
        incorrect:
          "Interprocesn\u00ed komunikace (IPC) je slu\u017eba, kter\u00e1 se sice m\u016f\u017ee vyskytovat v n\u011bkter\u00fdch monolitick\u00fdch j\u00e1drech opera\u010dn\u00edch syst\u00e9m\u016f, av\u0161ak nen\u00ed pova\u017eov\u00e1na za kl\u00ed\u010dovou sou\u010d\u00e1st monolitick\u00e9 architektury a jej\u00ed p\u0159\u00edtomnost je sp\u00ed\u0161e v\u00fdjimkou ne\u017e pravidlem, proto\u017ee monolitick\u00e1 j\u00e1dra se prim\u00e1rn\u011b zam\u011b\u0159uj\u00ed na integraci jin\u00fdch dopl\u0148kov\u00fdch slu\u017eeb, zat\u00edmco IPC je dom\u00e9nou mikrokernelov\u00fdch syst\u00e9m\u016f, kde je implementov\u00e1na mnohem \u010dast\u011bji a s v\u011bt\u0161\u00edm d\u016frazem na jej\u00ed efektivitu.",
        sectionNumber: "11.5.2",
        sectionTitle: "Additional Services",
      },
      {
        uuid: "25af4ad8-bfb9-4a67-bf7c-6123de5c2eed",
        correct:
          "Monolitick\u00e1 j\u00e1dra opera\u010dn\u00edch syst\u00e9m\u016f jsou charakteristick\u00e1 t\u00edm, \u017ee mohou integrovat \u0161irok\u00e9 spektrum dopl\u0148kov\u00fdch slu\u017eeb p\u0159\u00edmo do j\u00e1dra, co\u017e zahrnuje nap\u0159\u00edklad spr\u00e1vu \u010dasova\u010d\u016f, n\u00e1stroje pro sledov\u00e1n\u00ed a profilov\u00e1n\u00ed proces\u016f, bezpe\u010dnostn\u00ed funkce a kryptografick\u00e9 slu\u017eby, nicm\u00e9n\u011b rozsah a konkr\u00e9tn\u00ed implementace t\u011bchto slu\u017eeb se mohou zna\u010dn\u011b li\u0161it mezi r\u016fzn\u00fdmi monolitick\u00fdmi opera\u010dn\u00edmi syst\u00e9my v z\u00e1vislosti na jejich specifick\u00fdch po\u017eadavc\u00edch a designov\u00fdch c\u00edlech.",
        incorrect:
          "Monolitick\u00e1 j\u00e1dra opera\u010dn\u00edch syst\u00e9m\u016f se vyzna\u010duj\u00ed striktn\u00edm omezen\u00edm na implementaci pouze z\u00e1kladn\u00edch slu\u017eeb nezbytn\u00fdch pro fungov\u00e1n\u00ed syst\u00e9mu, a proto typicky neintegruj\u00ed dopl\u0148kov\u00e9 slu\u017eby jako spr\u00e1vu \u010dasova\u010d\u016f, sledov\u00e1n\u00ed proces\u016f nebo kryptografick\u00e9 funkce, proto\u017ee tyto pokro\u010dil\u00e9 funkce jsou vyhrazeny pro mikrokernelov\u00e9 architektury, kter\u00e9 se specializuj\u00ed na modul\u00e1rn\u00ed a roz\u0161i\u0159iteln\u00e9 opera\u010dn\u00ed syst\u00e9my s bohatou sadou funkc\u00ed mimo z\u00e1kladn\u00ed j\u00e1dro.",
        sectionNumber: "11.5.2",
        sectionTitle: "Additional Services",
      },
      {
        uuid: "c00f106b-e3f6-4de8-bc23-706c6124c4d0",
        correct:
          "Microkernel syst\u00e9my se vyzna\u010duj\u00ed mal\u00fdm j\u00e1drem, kter\u00e9 poskytuje pouze slu\u017eby, je\u017e nelze rozumn\u011b implementovat mimo n\u011bj. Chyb\u011bj\u00edc\u00ed funkce opera\u010dn\u00edho syst\u00e9mu jsou implementov\u00e1ny mimo mikrokernel, a to bu\u010f pomoc\u00ed superserveru v hybridn\u00edch syst\u00e9mech, nebo pomoc\u00ed specializovan\u00fdch program\u016f v syst\u00e9mech s prav\u00fdm mikrokernelem.",
        incorrect:
          "Microkernel syst\u00e9my se vyzna\u010duj\u00ed velk\u00fdm j\u00e1drem, kter\u00e9 poskytuje v\u0161echny slu\u017eby opera\u010dn\u00edho syst\u00e9mu. Chyb\u011bj\u00edc\u00ed funkce opera\u010dn\u00edho syst\u00e9mu jsou implementov\u00e1ny uvnit\u0159 mikrokernelu, a to v\u017edy pomoc\u00ed superserveru, kter\u00fd je charakteristick\u00fd pro v\u0161echny typy mikrokernel syst\u00e9m\u016f, v\u010detn\u011b syst\u00e9m\u016f s prav\u00fdm mikrokernelem.",
        sectionNumber: "11.5.3",
        sectionTitle: "Reminder: Microkernel Systems",
      },
      {
        uuid: "fc7d4847-4a38-4b3e-9c5f-e6d1b9959a15",
        correct:
          "Hybridn\u00ed mikrokernel syst\u00e9my, kter\u00e9 vyu\u017e\u00edvaj\u00ed superserver, jsou \u010dasto rychlej\u0161\u00ed ne\u017e syst\u00e9my s prav\u00fdm mikrokernelem, proto\u017ee komunikace mezi komponentami v superserveru nevy\u017eaduje p\u0159ep\u00edn\u00e1n\u00ed kontextu. Nicm\u00e9n\u011b, syst\u00e9my s prav\u00fdm mikrokernelem, kde jsou slu\u017eby a ovlada\u010de striktn\u011b odd\u011bleny do individu\u00e1ln\u00edch proces\u016f, jsou robustn\u011bj\u0161\u00ed a teoreticky l\u00e9pe \u0161k\u00e1luj\u00ed na rozs\u00e1hl\u00e9 SMP syst\u00e9my.",
        incorrect:
          "Hybridn\u00ed mikrokernel syst\u00e9my, kter\u00e9 vyu\u017e\u00edvaj\u00ed superserver, jsou pomalej\u0161\u00ed ne\u017e syst\u00e9my s prav\u00fdm mikrokernelem, proto\u017ee komunikace mezi komponentami v superserveru vy\u017eaduje \u010dast\u00e9 p\u0159ep\u00edn\u00e1n\u00ed kontextu. Na druhou stranu, syst\u00e9my s prav\u00fdm mikrokernelem, i kdy\u017e jsou m\u00e9n\u011b robustn\u00ed, se l\u00e9pe \u0161k\u00e1luj\u00ed na rozs\u00e1hl\u00e9 SMP syst\u00e9my d\u00edky sd\u00edlen\u00e9mu adresn\u00edmu prostoru v\u0161ech slu\u017eeb.",
        sectionNumber: "11.5.3",
        sectionTitle: "Reminder: Microkernel Systems",
      },
      {
        uuid: "4bc9c774-740f-4521-b67d-ce57d9f8e1fa",
        correct:
          "Z pohledu u\u017eivatelsk\u00e9ho prostoru by specifika architektury j\u00e1dra opera\u010dn\u00edho syst\u00e9mu nem\u011bla b\u00fdt relevantn\u00ed. Aplikace vyu\u017e\u00edvaj\u00ed syst\u00e9mov\u00e9 knihovny pro komunikaci s j\u00e1drem, p\u0159i\u010dem\u017e tyto knihovny implementuj\u00ed protokoly pro lokalizaci relevantn\u00edch server\u016f a interakci s nimi, \u010d\u00edm\u017e se skr\u00fdvaj\u00ed mechanismy vol\u00e1n\u00ed slu\u017eeb.",
        incorrect:
          "Z pohledu u\u017eivatelsk\u00e9ho prostoru je kl\u00ed\u010dov\u00e9, aby aplikace detailn\u011b znaly specifika architektury j\u00e1dra opera\u010dn\u00edho syst\u00e9mu, v\u010detn\u011b toho, kter\u00fd server poskytuje jakou slu\u017ebu. Aplikace p\u0159\u00edmo komunikuj\u00ed s j\u00e1drem a samy mus\u00ed implementovat protokoly pro vyhled\u00e1n\u00ed server\u016f a interakci s nimi, bez abstrakce mechanism\u016f vol\u00e1n\u00ed slu\u017eeb.",
        sectionNumber: "11.5.4",
        sectionTitle: "Kernel Services",
      },
      {
        uuid: "b05e38ca-4a6e-4330-b6f9-5919ab065ffc",
        correct:
          "Programy se obvykle nestaraj\u00ed o to, kter\u00fd konkr\u00e9tn\u00ed server poskytuje po\u017eadovanou slu\u017ebu. Pro slu\u017eby opera\u010dn\u00edho syst\u00e9mu je typick\u00fd monolitick\u00fd pohled, kde jsou slu\u017eby vyu\u017e\u00edv\u00e1ny prost\u0159ednictv\u00edm syst\u00e9mov\u00fdch knihoven, a mechanismus vol\u00e1n\u00ed je pln\u011b abstrahov\u00e1n na \u00farovni u\u017eivatelsk\u00e9ho prostoru.",
        incorrect:
          "Programy se mus\u00ed aktivn\u011b starat o to, kter\u00fd konkr\u00e9tn\u00ed server poskytuje po\u017eadovanou slu\u017ebu. Pro slu\u017eby opera\u010dn\u00edho syst\u00e9mu je typick\u00fd distribuovan\u00fd pohled, kde aplikace p\u0159\u00edmo komunikuj\u00ed s r\u016fzn\u00fdmi servery j\u00e1dra, a mechanismus vol\u00e1n\u00ed je pln\u011b odhalen na \u00farovni u\u017eivatelsk\u00e9ho prostoru bez abstrakce.",
        sectionNumber: "11.5.4",
        sectionTitle: "Kernel Services",
      },
      {
        uuid: "d4cbeb90-88ae-4a27-b9fd-1d65b0d2c910",
        correct:
          "Zat\u00edmco ovlada\u010de tisk\u00e1ren \u010dasto zahrnuj\u00ed komponenty v u\u017eivatelsk\u00e9m prostoru opera\u010dn\u00edho syst\u00e9mu, jako je zpracov\u00e1n\u00ed dokument\u016f a konverze form\u00e1t\u016f, z\u00e1kladn\u00ed komunikace s tisk\u00e1rnou na \u00farovni USB je typicky zprost\u0159edkov\u00e1na j\u00e1drem opera\u010dn\u00edho syst\u00e9mu, a to i v syst\u00e9mech s monolitick\u00fdm j\u00e1drem.",
        incorrect:
          "Zat\u00edmco ovlada\u010de tisk\u00e1ren \u010dasto zahrnuj\u00ed komponenty v u\u017eivatelsk\u00e9m prostoru opera\u010dn\u00edho syst\u00e9mu, jako je zpracov\u00e1n\u00ed dokument\u016f a konverze form\u00e1t\u016f, z\u00e1kladn\u00ed komunikace s tisk\u00e1rnou na \u00farovni USB je typicky zprost\u0159edkov\u00e1na u\u017eivatelsk\u00fdm prostorem opera\u010dn\u00edho syst\u00e9mu, a to i v syst\u00e9mech s monolitick\u00fdm j\u00e1drem.",
        sectionNumber: "11.5.5",
        sectionTitle: "User-Space Drivers",
      },
      {
        uuid: "d8a7086a-e41f-4229-9e87-501e185ed5d5",
        correct:
          "Grafick\u00e9 ovlada\u010de v modern\u00edch opera\u010dn\u00edch syst\u00e9mech typicky rozd\u011bluj\u00ed svou funk\u010dnost mezi j\u00e1dro a u\u017eivatelsk\u00fd prostor, p\u0159i\u010dem\u017e j\u00e1dro se star\u00e1 o spr\u00e1vu pam\u011bti a v\u00fdstupu a poskytuje n\u00edzko\u00farov\u0148ov\u00fd p\u0159\u00edstup k hardwaru GPU, zat\u00edmco u\u017eivatelsk\u00fd prostor host\u00ed komplexn\u011bj\u0161\u00ed operace jako kompilaci shader\u016f a manipulaci s 3D sc\u00e9nami.",
        incorrect:
          "Grafick\u00e9 ovlada\u010de v modern\u00edch opera\u010dn\u00edch syst\u00e9mech typicky soust\u0159ed\u00ed ve\u0161kerou svou funk\u010dnost v\u00fdhradn\u011b v j\u00e1d\u0159e opera\u010dn\u00edho syst\u00e9mu, \u010d\u00edm\u017e zaji\u0161\u0165uj\u00ed maxim\u00e1ln\u00ed v\u00fdkon a minimalizuj\u00ed re\u017eii spojenou s p\u0159ep\u00edn\u00e1n\u00edm kontextu do u\u017eivatelsk\u00e9ho prostoru, a to i pro operace jako kompilace shader\u016f a manipulaci s 3D sc\u00e9nami.",
        sectionNumber: "11.5.5",
        sectionTitle: "User-Space Drivers",
      },
      {
        uuid: "85bfabab-9a59-4a8f-b096-abea3d0ee9bb",
        correct:
          "V opera\u010dn\u00edch syst\u00e9mech zalo\u017een\u00fdch na monolitick\u00e9m j\u00e1d\u0159e, i kdy\u017e v\u011bt\u0161ina ovlada\u010d\u016f za\u0159\u00edzen\u00ed b\u011b\u017e\u00ed v prostoru j\u00e1dra, existuj\u00ed v\u00fdznamn\u00e9 v\u00fdjimky, jako jsou ovlada\u010de tisk\u00e1ren a grafick\u00fdch karet, kter\u00e9 maj\u00ed rozs\u00e1hl\u00e9 komponenty b\u011b\u017e\u00edc\u00ed v u\u017eivatelsk\u00e9m prostoru, co\u017e umo\u017e\u0148uje v\u011bt\u0161\u00ed flexibilitu a modularitu.",
        incorrect:
          "V opera\u010dn\u00edch syst\u00e9mech zalo\u017een\u00fdch na monolitick\u00e9m j\u00e1d\u0159e b\u011b\u017e\u00ed naprost\u00e1 v\u011bt\u0161ina ovlada\u010d\u016f za\u0159\u00edzen\u00ed v\u00fdhradn\u011b v prostoru j\u00e1dra a neexistuj\u00ed \u017e\u00e1dn\u00e9 v\u00fdznamn\u00e9 v\u00fdjimky, p\u0159i\u010dem\u017e ve\u0161ker\u00e1 komunikace a zpracov\u00e1n\u00ed, v\u010detn\u011b ovlada\u010d\u016f tisk\u00e1ren a grafick\u00fdch karet, prob\u00edh\u00e1 kompletn\u011b v j\u00e1d\u0159e pro maxim\u00e1ln\u00ed v\u00fdkon.",
        sectionNumber: "11.5.5",
        sectionTitle: "User-Space Drivers",
      },
    ],
  };
