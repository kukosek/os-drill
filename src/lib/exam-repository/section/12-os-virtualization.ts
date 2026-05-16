import type { Section } from '../../common/types';

export const section12_os_virtualization: Section = {
    uuid: "6e647c0d-30a2-455a-8e38-c3ed6e8a4140",
    sectionNumber: "12",
    sectionTitle: "OS Virtualization",
    statements: [
      {
        uuid: "4c442e79-f152-4a96-89aa-9da68477e434",
        correct:
          "Hypervisor, ozna\u010dovan\u00fd tak\u00e9 jako monitor virtu\u00e1ln\u00edch stroj\u016f, umo\u017e\u0148uje spou\u0161t\u011bn\u00ed v\u00edce opera\u010dn\u00edch syst\u00e9m\u016f sou\u010dasn\u011b a funguje jako kernel, kter\u00fd spou\u0161t\u00ed dal\u0161\u00ed kernely. T\u00edmto zp\u016fsobem hypervisor zlep\u0161uje vyu\u017eit\u00ed hardwarov\u00fdch zdroj\u016f, proto\u017ee umo\u017e\u0148uje efektivn\u011bj\u0161\u00ed sd\u00edlen\u00ed fyzick\u00e9ho hardwaru mezi r\u016fzn\u00fdmi virtu\u00e1ln\u00edmi stroji.",
        incorrect:
          "Hypervisor, ozna\u010dovan\u00fd tak\u00e9 jako monitor virtu\u00e1ln\u00edch stroj\u016f, je zodpov\u011bdn\u00fd za p\u0159\u00edmou spr\u00e1vu fyzick\u00e9ho hardwaru a neumo\u017e\u0148uje spou\u0161t\u011bn\u00ed v\u00edce opera\u010dn\u00edch syst\u00e9m\u016f. Funguje jako standardn\u00ed aplikace v r\u00e1mci opera\u010dn\u00edho syst\u00e9mu a jeho hlavn\u00edm \u00fa\u010delem je izolace proces\u016f b\u011b\u017e\u00edc\u00edch v jednom opera\u010dn\u00edm syst\u00e9mu.",
        sectionNumber: "12.1.1",
        sectionTitle: "What is a Hypervisor",
      },
      {
        uuid: "6a1b41ae-3504-4ea3-9785-0cab0315d915",
        correct:
          "Hypervisor se chov\u00e1 podobn\u011b jako kernel opera\u010dn\u00edho syst\u00e9mu, proto\u017ee stoj\u00ed mezi fyzick\u00fdm hardwarem a virtualizovan\u00fdmi opera\u010dn\u00edmi syst\u00e9my. Virtualizovan\u00e9 opera\u010dn\u00ed syst\u00e9my, kter\u00e9 b\u011b\u017e\u00ed nad hypervisorem, jsou podobn\u00e9 proces\u016fm a jsou izolov\u00e1ny v fyzick\u00e9 pam\u011bti pomoc\u00ed MMU a softwarov\u00fdch technik nebo MMU s podporou p\u0159ekladu druh\u00e9 \u00farovn\u011b.",
        incorrect:
          "Hypervisor se chov\u00e1 sp\u00ed\u0161e jako standardn\u00ed aplikace opera\u010dn\u00edho syst\u00e9mu a nem\u00e1 \u017e\u00e1dn\u00fd vztah k j\u00e1dru opera\u010dn\u00edho syst\u00e9mu. Virtualizovan\u00e9 opera\u010dn\u00ed syst\u00e9my, kter\u00e9 b\u011b\u017e\u00ed nad hypervisorem, sd\u00edlej\u00ed stejn\u00fd pam\u011b\u0165ov\u00fd prostor a nejsou izolov\u00e1ny v fyzick\u00e9 pam\u011bti, co\u017e zjednodu\u0161uje komunikaci a sd\u00edlen\u00ed dat mezi nimi.",
        sectionNumber: "12.1.1",
        sectionTitle: "What is a Hypervisor",
      },
      {
        uuid: "05c73b4e-0544-4fc8-99ef-1e1117124a4f",
        correct:
          "Virtualizovan\u00e9 opera\u010dn\u00ed syst\u00e9my nab\u00edzej\u00ed vy\u0161\u0161\u00ed m\u00edru autonomie ne\u017e tradi\u010dn\u00ed syst\u00e9my sd\u00edlen\u00e9 v\u00edce u\u017eivateli, co\u017e je prim\u00e1rn\u011b zp\u016fsobeno zjednodu\u0161en\u00fdm rozhran\u00edm mezi hypervizorem a opera\u010dn\u00edm syst\u00e9mem. Toto rozhran\u00ed z\u00e1m\u011brn\u011b postr\u00e1d\u00e1 sofistikovan\u00e9 mechanismy pro spr\u00e1vu u\u017eivatel\u016f a sd\u00edlen\u00ed soubor\u016f, kter\u00e9 jsou b\u011b\u017en\u00e9 v klasick\u00fdch opera\u010dn\u00edch syst\u00e9mech, a omezuje se na poskytov\u00e1n\u00ed z\u00e1kladn\u00edch hardwarov\u00fdch zdroj\u016f virtu\u00e1ln\u00edm stroj\u016fm.",
        incorrect:
          "Virtualizovan\u00e9 opera\u010dn\u00ed syst\u00e9my poskytuj\u00ed srovnatelnou \u00farove\u0148 autonomie s tradi\u010dn\u00edmi syst\u00e9my sd\u00edlen\u00fdmi v\u00edce u\u017eivateli, jeliko\u017e rozhran\u00ed mezi hypervizorem a opera\u010dn\u00edm syst\u00e9mem je navr\u017eeno tak, aby emulovalo komplexn\u00ed funkce tradi\u010dn\u00edch opera\u010dn\u00edch syst\u00e9m\u016f, v\u010detn\u011b pokro\u010dil\u00e9 spr\u00e1vy u\u017eivatel\u016f a detailn\u00edho \u0159\u00edzen\u00ed sd\u00edlen\u00ed soubor\u016f, \u010d\u00edm\u017e se st\u00edraj\u00ed rozd\u00edly v autonomii mezi ob\u011bma typy prost\u0159ed\u00ed.",
        sectionNumber: "12.1.2",
        sectionTitle: "Motivation",
      },
      {
        uuid: "bc03300e-91ae-4c4f-ac16-de908133d616",
        correct:
          "Z\u00e1sadn\u00ed charakteristikou rozhran\u00ed mezi hypervizorem a opera\u010dn\u00edm syst\u00e9mem je jeho relativn\u00ed jednoduchost v porovn\u00e1n\u00ed s rozhran\u00edm mezi opera\u010dn\u00edm syst\u00e9mem a aplikacemi. Tato jednoduchost pramen\u00ed z absence nutnosti implementovat rozs\u00e1hl\u00e9 subsyst\u00e9my pro spr\u00e1vu soubor\u016f a komplexn\u00ed komunika\u010dn\u00ed protokoly mezi opera\u010dn\u00edmi syst\u00e9my, co\u017e jsou kl\u00ed\u010dov\u00e9 komponenty tradi\u010dn\u00edch opera\u010dn\u00edch syst\u00e9m\u016f zaji\u0161\u0165uj\u00edc\u00ed sd\u00edlen\u00ed a izolaci.",
        incorrect:
          "Rozhran\u00ed mezi hypervizorem a opera\u010dn\u00edm syst\u00e9mem se vyzna\u010duje vysokou m\u00edrou komplexity, srovnatelnou s rozhran\u00edm mezi opera\u010dn\u00edm syst\u00e9mem a aplikacemi, nebo\u0165 hypervizor mus\u00ed implementovat detailn\u00ed spr\u00e1vu souborov\u00fdch syst\u00e9m\u016f a propracovan\u00e9 komunika\u010dn\u00ed mechanismy mezi opera\u010dn\u00edmi syst\u00e9my. Tato komplexita je nezbytn\u00e1 pro zaji\u0161t\u011bn\u00ed robustn\u00edho sd\u00edlen\u00ed zdroj\u016f a p\u0159\u00edsn\u00e9 izolace virtu\u00e1ln\u00edch stroj\u016f, podobn\u011b jako v tradi\u010dn\u00edch opera\u010dn\u00edch syst\u00e9mech.",
        sectionNumber: "12.1.2",
        sectionTitle: "Motivation",
      },
      {
        uuid: "e40984df-939e-4b56-9831-aed2098d813c",
        correct:
          "Opera\u010dn\u00ed syst\u00e9my vyu\u017e\u00edvaj\u00ed virtualizaci hardwarov\u00fdch zdroj\u016f, jako je pam\u011b\u0165 spravovan\u00e1 MMU a periferie virtualizovan\u00e9 samotn\u00fdm opera\u010dn\u00edm syst\u00e9mem, aby zjednodu\u0161ily spr\u00e1vu zdroj\u016f a umo\u017enily izolaci mezi r\u016fzn\u00fdmi komponentami syst\u00e9mu. Tato virtualizace je kl\u00ed\u010dov\u00e1 pro bezpe\u010dn\u00e9 a spravedliv\u00e9 sd\u00edlen\u00ed zdroj\u016f mezi v\u00edce programy a u\u017eivateli.",
        incorrect:
          "Opera\u010dn\u00ed syst\u00e9my se spol\u00e9haj\u00ed v\u00fdhradn\u011b na fyzick\u00e9 zdroje bez virtualizace, p\u0159i\u010dem\u017e MMU a opera\u010dn\u00ed syst\u00e9m hraj\u00ed minim\u00e1ln\u00ed roli v abstrakci hardwaru. Spr\u00e1va zdroj\u016f a izolace komponent jsou dosahov\u00e1ny jin\u00fdmi mechanismy, a virtualizace hardwaru nen\u00ed pova\u017eov\u00e1na za kl\u00ed\u010dovou pro sd\u00edlen\u00ed zdroj\u016f mezi programy a u\u017eivateli.",
        sectionNumber: "12.1.3",
        sectionTitle: "Virtualisation in General",
      },
      {
        uuid: "10b6a803-b9e7-415e-8a88-9a3442e03616",
        correct:
          "Virtualizace v opera\u010dn\u00edch syst\u00e9mech se neomezuje pouze na spr\u00e1vu pam\u011bti pomoc\u00ed MMU a periferi\u00ed, ale zahrnuje i dal\u0161\u00ed kl\u00ed\u010dov\u00e9 komponenty, jako jsou souborov\u00e9 syst\u00e9my, s\u00ed\u0165ov\u00fd z\u00e1sobn\u00edk a ovlada\u010de za\u0159\u00edzen\u00ed. Tyto komponenty opera\u010dn\u00edho syst\u00e9mu virtualizuj\u00ed hardwarov\u00e9 zdroje, co\u017e umo\u017e\u0148uje efektivn\u00ed a bezpe\u010dn\u00e9 sd\u00edlen\u00ed t\u011bchto zdroj\u016f mezi r\u016fzn\u00fdmi procesy a u\u017eivateli.",
        incorrect:
          "Virtualizace v opera\u010dn\u00edch syst\u00e9mech se omezuje v\u00fdhradn\u011b na virtualizaci pam\u011bti pomoc\u00ed MMU a virtualizaci periferi\u00ed. Ostatn\u00ed komponenty opera\u010dn\u00edho syst\u00e9mu, jako jsou souborov\u00e9 syst\u00e9my, s\u00ed\u0165ov\u00fd z\u00e1sobn\u00edk a ovlada\u010de za\u0159\u00edzen\u00ed, nemaj\u00ed s virtualizac\u00ed nic spole\u010dn\u00e9ho a pracuj\u00ed p\u0159\u00edmo s fyzick\u00fdm hardwarem, bez jak\u00e9koli abstrakce.",
        sectionNumber: "12.1.3",
        sectionTitle: "Virtualisation in General",
      },
      {
        uuid: "90076b5d-b09a-42b3-906b-826f0fe0ef08",
        correct:
          'Hypervizory typu 1, \u010dasto ozna\u010dovan\u00e9 jako "bare metal" hypervizory, jsou navr\u017eeny pro nasazen\u00ed p\u0159\u00edmo na fyzick\u00e9m hardwaru, \u010d\u00edm\u017e minimalizuj\u00ed softwarovou vrstvu pod hypervizorem. Tato architektura jim umo\u017e\u0148uje fungovat na zp\u016fsob mikrokernelu, kde hypervizor p\u0159eb\u00edr\u00e1 prim\u00e1rn\u00ed zodpov\u011bdnost za spr\u00e1vu kl\u00ed\u010dov\u00fdch syst\u00e9mov\u00fdch prost\u0159edk\u016f, p\u0159edev\u0161\u00edm procesoru a opera\u010dn\u00ed pam\u011bti, a zaji\u0161\u0165uje jejich efektivn\u00ed pl\u00e1nov\u00e1n\u00ed a alokaci pro virtu\u00e1ln\u00ed stroje.',
        incorrect:
          'Hypervizory typu 1, zn\u00e1m\u00e9 tak\u00e9 jako "hosted" hypervizory, vy\u017eaduj\u00ed pro sv\u00e9 nasazen\u00ed existenci hostitelsk\u00e9ho opera\u010dn\u00edho syst\u00e9mu, na kter\u00e9m b\u011b\u017e\u00ed jako aplikace. Tato z\u00e1vislost na hostitelsk\u00e9m syst\u00e9mu jim umo\u017e\u0148uje delegovat spr\u00e1vu hardwarov\u00fdch prost\u0159edk\u016f, v\u010detn\u011b pl\u00e1nov\u00e1n\u00ed procesoru a spr\u00e1vy pam\u011bti, na hostitelsk\u00fd opera\u010dn\u00ed syst\u00e9m, \u010d\u00edm\u017e se zjednodu\u0161uje jejich implementace a spr\u00e1va.',
        sectionNumber: "12.1.4",
        sectionTitle: "Hypervisor Types",
      },
      {
        uuid: "a87f6075-07d2-48ae-9575-b79bdb56c309",
        correct:
          "Hypervizory typu 2, na rozd\u00edl od hypervizor\u016f typu 1, jsou hostovan\u00e9 a vy\u017eaduj\u00ed pro svou funk\u010dnost opera\u010dn\u00ed syst\u00e9m, na kter\u00e9m b\u011b\u017e\u00ed jako b\u011b\u017en\u00e9 aplikace. V d\u016fsledku toho hypervizory typu 2 vyu\u017e\u00edvaj\u00ed st\u00e1vaj\u00edc\u00ed mechanismy hostitelsk\u00e9ho opera\u010dn\u00edho syst\u00e9mu pro pl\u00e1nov\u00e1n\u00ed v\u00fdpo\u010detn\u00edho \u010dasu procesoru a spr\u00e1vu pam\u011bti, co\u017e se projevuje t\u00edm, \u017ee virtu\u00e1ln\u00ed stroje jsou v hostitelsk\u00e9m syst\u00e9mu reprezentov\u00e1ny jako standardn\u00ed procesy opera\u010dn\u00edho syst\u00e9mu.",
        incorrect:
          "Hypervizory typu 2, podobn\u011b jako hypervizory typu 1, jsou navr\u017eeny tak, aby b\u011b\u017eely p\u0159\u00edmo na fyzick\u00e9m hardwaru bez nutnosti hostitelsk\u00e9ho opera\u010dn\u00edho syst\u00e9mu. D\u00edky t\u00e9to architektu\u0159e si hypervizory typu 2 mohou pln\u011b samy \u0159\u00eddit pl\u00e1nov\u00e1n\u00ed procesoru a spr\u00e1vu pam\u011bti pro virtu\u00e1ln\u00ed stroje, \u010d\u00edm\u017e dosahuj\u00ed vy\u0161\u0161\u00edho v\u00fdkonu a izolace virtu\u00e1ln\u00edch stroj\u016f od hostitelsk\u00e9ho syst\u00e9mu.",
        sectionNumber: "12.1.4",
        sectionTitle: "Hypervisor Types",
      },
      {
        uuid: "e4f388fa-987d-4da2-8c6b-8cf22af20a5e",
        correct:
          "Rozd\u00edl mezi hypervizory typu 1 a typu 2 spo\u010d\u00edv\u00e1 v jejich architektonick\u00e9m um\u00edst\u011bn\u00ed v syst\u00e9mu. Zat\u00edmco hypervizory typu 1 pracuj\u00ed p\u0159\u00edmo na hardwaru a samy spravuj\u00ed p\u0159id\u011blov\u00e1n\u00ed procesorov\u00e9ho \u010dasu a pam\u011bti virtu\u00e1ln\u00edm stroj\u016fm, hypervizory typu 2 jsou z\u00e1visl\u00e9 na hostitelsk\u00e9m opera\u010dn\u00edm syst\u00e9mu, kter\u00e9mu deleguj\u00ed spr\u00e1vu t\u011bchto zdroj\u016f, a virtu\u00e1ln\u00ed stroje se tak chovaj\u00ed jako procesy v r\u00e1mci hostitelsk\u00e9ho opera\u010dn\u00edho syst\u00e9mu.",
        incorrect:
          "Rozd\u00edl mezi hypervizory typu 1 a typu 2 je minim\u00e1ln\u00ed, oba typy hypervizor\u016f pracuj\u00ed na stejn\u00e9m principu abstrakce hardwaru a oba vy\u017eaduj\u00ed pro sv\u016fj b\u011bh hostitelsk\u00fd opera\u010dn\u00ed syst\u00e9m. Hypervizory obou typ\u016f se li\u0161\u00ed pouze v detailech implementace, ale z pohledu funkcionality a spr\u00e1vy virtu\u00e1ln\u00edch stroj\u016f jsou v podstat\u011b identick\u00e9 a nab\u00edzej\u00ed srovnateln\u00e9 vlastnosti a v\u00fdkon.",
        sectionNumber: "12.1.4",
        sectionTitle: "Hypervisor Types",
      },
      {
        uuid: "8f0313f0-f2ac-496c-9e1c-87a01a92e0ff",
        correct:
          "Virtualiza\u010dn\u00ed technologie, jak nazna\u010duje v\u00fd\u010det bare metal hypervizor\u016f zahrnuj\u00edc\u00ed z/VM, Xen, Hyper-V a ESX, umo\u017e\u0148uj\u00ed opera\u010dn\u00edm syst\u00e9m\u016fm b\u011b\u017eet p\u0159\u00edmo na hardwaru, efektivn\u011b obch\u00e1zej\u00ed tradi\u010dn\u00ed hostitelsk\u00fd opera\u010dn\u00ed syst\u00e9m a poskytuj\u00ed tak virtualiza\u010dn\u00ed vrstvu, kter\u00e1 spravuje hardwarov\u00e9 zdroje a alokuje je virtu\u00e1ln\u00edm stroj\u016fm.",
        incorrect:
          "Virtualiza\u010dn\u00ed technologie, jak nazna\u010duje v\u00fd\u010det bare metal hypervizor\u016f zahrnuj\u00edc\u00ed VMWare a VirtualBox, vy\u017eaduj\u00ed pro sv\u016fj b\u011bh hostitelsk\u00fd opera\u010dn\u00ed syst\u00e9m, na kter\u00e9m jsou postaveny, a nemohou tak p\u0159\u00edmo interagovat s hardwarem, co\u017e je z\u00e1sadn\u00ed rozd\u00edl oproti hosted hypervizor\u016fm, kter\u00e9 b\u011b\u017e\u00ed p\u0159\u00edmo na fyzick\u00e9m hardwaru.",
        sectionNumber: "12.1.5",
        sectionTitle: "Examples & History",
      },
      {
        uuid: "d2939542-fd0d-4950-ba64-d0f157251987",
        correct:
          "Historie virtualizace sah\u00e1 a\u017e do pozdn\u00edch 60. let 20. stolet\u00ed, kdy spole\u010dnost IBM p\u0159edstavila syst\u00e9my CP/CMS v roce 1968 a VM/370 v roce 1972, \u010d\u00edm\u017e polo\u017eila z\u00e1klady pro modern\u00ed virtualiza\u010dn\u00ed technologie a umo\u017enila provoz v\u00edce opera\u010dn\u00edch syst\u00e9m\u016f na jednom fyzick\u00e9m po\u010d\u00edta\u010di, co\u017e se stalo standardem zejm\u00e9na u s\u00e1lov\u00fdch po\u010d\u00edta\u010d\u016f.",
        incorrect:
          "Historie virtualizace se datuje a\u017e od po\u010d\u00e1tku 21. stolet\u00ed s rozvojem cloudov\u00fdch technologi\u00ed a komer\u010dn\u00edm roz\u0161\u00ed\u0159en\u00edm hypervizor\u016f jako VMware ESXi a Microsoft Hyper-V, p\u0159i\u010dem\u017e d\u0159\u00edv\u011bj\u0161\u00ed syst\u00e9my jako CP/CMS a VM/370 nem\u011bly s virtualizac\u00ed opera\u010dn\u00edch syst\u00e9m\u016f nic spole\u010dn\u00e9ho a slou\u017eily k \u00fapln\u011b jin\u00fdm \u00fa\u010del\u016fm v oblasti s\u00e1lov\u00fdch po\u010d\u00edta\u010d\u016f.",
        sectionNumber: "12.1.5",
        sectionTitle: "Examples & History",
      },
      {
        uuid: "eebd1efe-f72c-4792-b4ca-6dfb48bd56c6",
        correct:
          "Podle dostupn\u00fdch informac\u00ed, hardware architektury x86 v ran\u00fdch dob\u00e1ch nepodporoval virtualiza\u010dn\u00ed technologie zalo\u017een\u00e9 na virtualizaci supervizorsk\u00e9ho re\u017eimu, co\u017e znamenalo, \u017ee pro virtualizaci bylo nutn\u00e9 spol\u00e9hat se na softwarov\u00e9 emula\u010dn\u00ed techniky.",
        incorrect:
          "Podle dostupn\u00fdch informac\u00ed, hardware architektury x86 ji\u017e od ran\u00fdch dob pln\u011b podporoval virtualiza\u010dn\u00ed technologie zalo\u017een\u00e9 na virtualizaci supervizorsk\u00e9ho re\u017eimu, co\u017e umo\u017e\u0148ovalo efektivn\u00ed a v\u00fdkonnou virtualizaci bez nutnosti softwarov\u00e9 emulace.",
        sectionNumber: "12.1.6",
        sectionTitle: "Desktop Virtualisation",
      },
      {
        uuid: "552e5579-d23c-47bd-8978-f1ca05c82b5a",
        correct:
          "Dle poskytnut\u00e9ho textu se softwarov\u011b orientovan\u00e1 \u0159e\u0161en\u00ed pro virtualizaci stala \u017eivotaschopn\u00fdmi a\u017e koncem 90. let dvac\u00e1t\u00e9ho stolet\u00ed, proto\u017ee do t\u00e9 doby nebyl v\u00fdkon procesor\u016f PC dostate\u010dn\u00fd pro efektivn\u00ed emulaci PC na PC.",
        incorrect:
          "Dle poskytnut\u00e9ho textu se softwarov\u011b orientovan\u00e1 \u0159e\u0161en\u00ed pro virtualizaci stala \u017eivotaschopn\u00fdmi ji\u017e v ran\u00fdch 90. letech dvac\u00e1t\u00e9ho stolet\u00ed, proto\u017ee v\u00fdkon procesor\u016f PC byl ji\u017e tehdy dostate\u010dn\u00fd pro efektivn\u00ed emulaci PC na PC.",
        sectionNumber: "12.1.6",
        sectionTitle: "Desktop Virtualisation",
      },
      {
        uuid: "045f5685-7d65-4df0-92ea-34a7796f15da",
        correct:
          "Zmi\u0148ovan\u00e9 softwary pro virtualizaci, konkr\u00e9tn\u011b Bochs, VMWare a QEMU, se objevily postupn\u011b v letech 1994, 1999 a 2003, co\u017e ilustruje postupn\u00fd v\u00fdvoj a zlep\u0161ov\u00e1n\u00ed softwarov\u00fdch virtualiza\u010dn\u00edch \u0159e\u0161en\u00ed pro PC platformu.",
        incorrect:
          "Zmi\u0148ovan\u00e9 softwary pro virtualizaci, konkr\u00e9tn\u011b Bochs, VMWare a QEMU, byly v\u0161echny uvedeny na trh v roce 1994, co\u017e demonstruje rychl\u00fd n\u00e1stup a okam\u017eitou dominanci softwarov\u00fdch virtualiza\u010dn\u00edch \u0159e\u0161en\u00ed pro PC platformu ji\u017e v ran\u00fdch devades\u00e1t\u00fdch letech.",
        sectionNumber: "12.1.6",
        sectionTitle: "Desktop Virtualisation",
      },
      {
        uuid: "7b6688bf-bc22-4374-b288-b88db9b8f92c",
        correct:
          "Paravirtualizace, p\u0159edstaven\u00e1 spole\u010dnost\u00ed VMWare v roce 2005 pod n\u00e1zvem VMI, p\u0159edstavuje softwarovou virtualiza\u010dn\u00ed technologii, kter\u00e1 dosahuje v\u00fdkonu bl\u00ed\u017e\u00edc\u00edho se nativn\u00edmu v\u00fdkonu, a to i bez hardwarov\u00e9 podpory pro virtualizaci, av\u0161ak za cenu nutnosti modifikace hostovan\u00e9ho opera\u010dn\u00edho syst\u00e9mu, co\u017e bylo v dob\u011b jej\u00edho vzniku usnadn\u011bno rostouc\u00ed popularitou open-source opera\u010dn\u00edch syst\u00e9m\u016f.",
        incorrect:
          "Paravirtualizace, p\u0159edstaven\u00e1 spole\u010dnost\u00ed VMWare v roce 2005 pod n\u00e1zvem VMI, p\u0159edstavuje hardwarovou virtualiza\u010dn\u00ed technologii, kter\u00e1 dosahuje v\u00fdkonu bl\u00ed\u017e\u00edc\u00edho se nativn\u00edmu v\u00fdkonu, a to i bez softwarov\u00e9 podpory pro virtualizaci, a nevy\u017eaduje modifikace hostovan\u00e9ho opera\u010dn\u00edho syst\u00e9mu, co\u017e bylo v dob\u011b jej\u00edho vzniku usnadn\u011bno rostouc\u00ed popularitou propriet\u00e1rn\u00edch opera\u010dn\u00edch syst\u00e9m\u016f.",
        sectionNumber: "12.1.7",
        sectionTitle: "Paravirtualisation",
      },
      {
        uuid: "7a4797a4-69b2-4862-89b7-f0600580a23a",
        correct:
          "Zat\u00edmco pln\u00e1 virtualizace se sna\u017e\u00ed o emulaci cel\u00e9ho hardwarov\u00e9ho rozhran\u00ed pro hostovan\u00fd opera\u010dn\u00ed syst\u00e9m, paravirtualizace, alternativn\u00ed p\u0159\u00edstup zaveden\u00fd nap\u0159\u00edklad v syst\u00e9mu Xen v roce 2006, spo\u010d\u00edv\u00e1 v modifikaci hostovan\u00e9ho opera\u010dn\u00edho syst\u00e9mu tak, aby mohl efektivn\u011bji komunikovat s hypervizorem, a t\u00edm dos\u00e1hnout vy\u0161\u0161\u00edho v\u00fdkonu bez nutnosti specifick\u00e9 hardwarov\u00e9 podpory.",
        incorrect:
          "Zat\u00edmco pln\u00e1 virtualizace vy\u017eaduje modifikaci hardwarov\u00e9ho rozhran\u00ed pro hostovan\u00fd opera\u010dn\u00ed syst\u00e9m, paravirtualizace, alternativn\u00ed p\u0159\u00edstup zaveden\u00fd nap\u0159\u00edklad spole\u010dnost\u00ed VMWare v roce 2005, spo\u010d\u00edv\u00e1 v emulaci hostovan\u00e9ho opera\u010dn\u00edho syst\u00e9mu tak, aby mohl efektivn\u011bji komunikovat s hypervizorem, a t\u00edm dos\u00e1hnout ni\u017e\u0161\u00edho v\u00fdkonu s nutnost\u00ed specifick\u00e9 hardwarov\u00e9 podpory.",
        sectionNumber: "12.1.7",
        sectionTitle: "Paravirtualisation",
      },
      {
        uuid: "76dd9d09-ee53-4cad-8347-f64623b11e44",
        correct:
          "Kolem roku 2005 se za\u010daly objevovat virtualiza\u010dn\u00ed roz\u0161\u00ed\u0159en\u00ed pro architekturu x86, co\u017e znamenalo posun sm\u011brem k mo\u017enosti provozovat hostovan\u00e9 opera\u010dn\u00ed syst\u00e9my bez nutnosti jejich p\u0159\u00edm\u00e9 modifikace, alespo\u0148 v teoretick\u00e9 rovin\u011b, a to d\u00edky hardwarov\u00e9 podpo\u0159e virtualizace.",
        incorrect:
          "Kolem roku 2005 se za\u010daly objevovat virtualiza\u010dn\u00ed roz\u0161\u00ed\u0159en\u00ed pro architekturu x86, ale toto nem\u011blo vliv na pot\u0159ebu modifikace hostovan\u00fdch opera\u010dn\u00edch syst\u00e9m\u016f, a dokonce i v teoretick\u00e9 rovin\u011b z\u016fst\u00e1vala nutnost \u00faprav pro spr\u00e1vn\u00fd b\u011bh virtualizace zachov\u00e1na.",
        sectionNumber: "12.1.8",
        sectionTitle: "The Virtual \u2039x86\u203a Revolution",
      },
      {
        uuid: "31c603ba-895c-458b-bd8b-91a10e9f5628",
        correct:
          "Zaveden\u00ed MMU virtualizace kolem roku 2008 do b\u011b\u017en\u00fdch desktopov\u00fdch procesor\u016f p\u0159ineslo v\u00fdznamn\u00e9 zjednodu\u0161en\u00ed v n\u00e1vrhu hypervizor\u016f pro architekturu x86. Tato inovace tak\u00e9 p\u0159isp\u011bla ke zv\u00fd\u0161en\u00ed celkov\u00e9 efektivity virtualizace, co\u017e umo\u017enilo lep\u0161\u00ed v\u00fdkon virtualizovan\u00fdch syst\u00e9m\u016f.",
        incorrect:
          "Zaveden\u00ed MMU virtualizace kolem roku 2008 do b\u011b\u017en\u00fdch desktopov\u00fdch procesor\u016f paradoxn\u011b zkomplikovalo n\u00e1vrh hypervizor\u016f pro architekturu x86. Tato inovace nav\u00edc vedla ke sn\u00ed\u017een\u00ed celkov\u00e9 efektivity virtualizace a zhor\u0161en\u00ed v\u00fdkonu virtualizovan\u00fdch syst\u00e9m\u016f.",
        sectionNumber: "12.1.8",
        sectionTitle: "The Virtual \u2039x86\u203a Revolution",
      },
      {
        uuid: "edef9650-4625-4764-954f-ba599ddf49d3",
        correct:
          "S n\u00e1stupem hardwarov\u00e9 virtualizace a zejm\u00e9na MMU virtualizace se softwarov\u00e1 \u0159e\u0161en\u00ed virtualizace, kter\u00e1 vy\u017eadovala modifikaci hostovan\u00e9ho opera\u010dn\u00edho syst\u00e9mu, stala do zna\u010dn\u00e9 m\u00edry zastaral\u00e1. D\u016fvodem byla ni\u017e\u0161\u00ed efektivita a vy\u0161\u0161\u00ed slo\u017eitost t\u011bchto softwarov\u00fdch p\u0159\u00edstup\u016f v porovn\u00e1n\u00ed s nov\u00fdmi hardwarov\u011b akcelerovan\u00fdmi metodami.",
        incorrect:
          "S n\u00e1stupem hardwarov\u00e9 virtualizace a zejm\u00e9na MMU virtualizace se softwarov\u00e1 \u0159e\u0161en\u00ed virtualizace, kter\u00e1 vy\u017eadovala modifikaci hostovan\u00e9ho opera\u010dn\u00edho syst\u00e9mu, stala je\u0161t\u011b v\u00edce relevantn\u00ed a roz\u0161\u00ed\u0159en\u00e1. D\u016fvodem byla vy\u0161\u0161\u00ed efektivita a jednoduchost t\u011bchto softwarov\u00fdch p\u0159\u00edstup\u016f v porovn\u00e1n\u00ed s nov\u00fdmi hardwarov\u011b akcelerovan\u00fdmi metodami.",
        sectionNumber: "12.1.8",
        sectionTitle: "The Virtual \u2039x86\u203a Revolution",
      },
      {
        uuid: "8bafeaf8-e82f-431c-8da1-6ed3309b4f4b",
        correct:
          "Paravirtualizace vyu\u017e\u00edv\u00e1 specifick\u00e9 ovlada\u010de pro virtualizovan\u00e1 za\u0159\u00edzen\u00ed, jako jsou blokov\u00e1 \u00falo\u017ei\u0161t\u011b, s\u00edt\u011b a konzole, a je navr\u017eena tak, aby byla rychlej\u0161\u00ed a jednodu\u0161\u0161\u00ed ne\u017e emulace, p\u0159i\u010dem\u017e funguje nez\u00e1visle na virtualizaci CPU a MMU, co\u017e umo\u017e\u0148uje efektivn\u011bj\u0161\u00ed spr\u00e1vu perifern\u00edch za\u0159\u00edzen\u00ed ve virtualizovan\u00e9m prost\u0159ed\u00ed.",
        incorrect:
          "Paravirtualizace, na rozd\u00edl od pln\u00e9 virtualizace, vy\u017eaduje rozs\u00e1hl\u00e9 modifikace j\u00e1dra hostovan\u00e9ho opera\u010dn\u00edho syst\u00e9mu, aby bylo mo\u017en\u00e9 implementovat specializovan\u00e9 ovlada\u010de pro interakci s virtualizovan\u00fdm hardwarem, \u010d\u00edm\u017e se st\u00e1v\u00e1 m\u00e9n\u011b transparentn\u00ed pro hostovan\u00fd opera\u010dn\u00ed syst\u00e9m a zvy\u0161uje se slo\u017eitost spr\u00e1vy virtualizovan\u00e9ho prost\u0159ed\u00ed.",
        sectionNumber: "12.1.9",
        sectionTitle: "Paravirtual Devices",
      },
      {
        uuid: "08bc237f-cc91-4e9a-9a84-91eb780a0a37",
        correct:
          "Zat\u00edmco hardwarov\u00e1 virtualizace efektivn\u011b \u0159e\u0161\u00ed virtualizaci CPU a pam\u011bti, paravirtualizace se uk\u00e1zala jako praktick\u00e9 \u0159e\u0161en\u00ed pro virtualizaci perifern\u00edch za\u0159\u00edzen\u00ed, proto\u017ee hardwarov\u00fd p\u0159\u00edstup k virtualizaci perif\u00e9ri\u00ed se uk\u00e1zal jako neekonomick\u00fd, a paravirtualizace tak nab\u00edz\u00ed n\u00e1kladov\u011b efektivn\u011bj\u0161\u00ed alternativu.",
        incorrect:
          "Paravirtualizace byla p\u016fvodn\u011b navr\u017eena jako univerz\u00e1ln\u00ed metoda pro v\u0161echny formy virtualizace, v\u010detn\u011b CPU, pam\u011bti a perif\u00e9ri\u00ed, ale byla postupn\u011b nahrazena hardwarovou virtualizac\u00ed kv\u016fli sv\u00fdm inherentn\u00edm v\u00fdkonnostn\u00edm omezen\u00edm a komplexnosti p\u0159i spr\u00e1v\u011b rozmanit\u00fdch hardwarov\u00fdch interakc\u00ed.",
        sectionNumber: "12.1.9",
        sectionTitle: "Paravirtual Devices",
      },
      {
        uuid: "895d63d5-f27a-4207-b71c-bfa345968f8f",
        correct:
          "Kl\u00ed\u010dovou v\u00fdhodou paravirtualizace je jej\u00ed schopnost prezentovat virtu\u00e1ln\u00ed perifern\u00ed za\u0159\u00edzen\u00ed hostovan\u00e9mu opera\u010dn\u00edmu syst\u00e9mu tak, jakoby se jednalo o standardn\u00ed hardwarov\u00e1 za\u0159\u00edzen\u00ed, \u010deho\u017e je dosa\u017eeno implementac\u00ed b\u011b\u017en\u00fdch ovlada\u010d\u016f za\u0159\u00edzen\u00ed v hostovan\u00e9m syst\u00e9mu, kter\u00e9 komunikuj\u00ed s virtu\u00e1ln\u00edmi periferiemi hostitelsk\u00e9ho syst\u00e9mu pomoc\u00ed definovan\u00fdch protokol\u016f.",
        incorrect:
          "Paravirtualizace vy\u017eaduje rozs\u00e1hl\u00e9 \u00fapravy j\u00e1dra hostovan\u00e9ho opera\u010dn\u00edho syst\u00e9mu, v\u010detn\u011b integrace specializovan\u00e9ho k\u00f3du, kter\u00fd je v\u011bdom hypervizoru a p\u0159\u00edmo interaguje s podkladov\u00fdm hardwarem, obch\u00e1z\u00ed pot\u0159ebu standardn\u00edch ovlada\u010d\u016f za\u0159\u00edzen\u00ed a vede k v\u00fdrazn\u00e9mu zv\u00fd\u0161en\u00ed slo\u017eitosti \u00fadr\u017eby hostovan\u00e9ho opera\u010dn\u00edho syst\u00e9mu.",
        sectionNumber: "12.1.9",
        sectionTitle: "Paravirtual Devices",
      },
      {
        uuid: "b8cc7550-20cd-4a8e-af42-f1ee32550b89",
        correct:
          "Virtu\u00e1ln\u00ed stroje, \u010dasto ozna\u010dovan\u00e9 jako virtu\u00e1ln\u00ed po\u010d\u00edta\u010de, p\u0159edstavuj\u00ed syst\u00e9my b\u011b\u017e\u00edc\u00ed pod virtualizovan\u00fdm opera\u010dn\u00edm syst\u00e9mem. Tyto stroje se li\u0161\u00ed od programov\u00fdch virtu\u00e1ln\u00edch stroj\u016f, jako je Java Virtual Machine, a obvykle poskytuj\u00ed z\u00e1kladn\u00ed v\u00fdpo\u010detn\u00ed zdroje, mezi kter\u00e9 pat\u0159\u00ed procesor, opera\u010dn\u00ed pam\u011b\u0165, trval\u00e9 blokov\u00e9 \u00falo\u017ei\u0161t\u011b, s\u00ed\u0165ov\u00e9 p\u0159ipojen\u00ed a konzolov\u00e9 za\u0159\u00edzen\u00ed pro spr\u00e1vu. Spr\u00e1va virtu\u00e1ln\u00edch stroj\u016f je pova\u017eov\u00e1na za jednodu\u0161\u0161\u00ed ve srovn\u00e1n\u00ed se spr\u00e1vou fyzick\u00e9ho hardwaru, co\u017e z nich \u010din\u00ed preferovanou volbu v mnoha prost\u0159ed\u00edch.",
        incorrect:
          "Virtu\u00e1ln\u00ed stroje, a\u010dkoli se n\u011bkdy ozna\u010duj\u00ed jako virtu\u00e1ln\u00ed po\u010d\u00edta\u010de, p\u0159edstavuj\u00ed syst\u00e9my b\u011b\u017e\u00edc\u00ed p\u0159\u00edmo na fyzick\u00e9m hardwaru bez virtualizace opera\u010dn\u00edho syst\u00e9mu. Tyto stroje jsou toto\u017en\u00e9 s programov\u00fdmi virtu\u00e1ln\u00edmi stroji, jako je Java Virtual Machine, a poskytuj\u00ed \u0161irokou \u0161k\u00e1lu perifern\u00edch za\u0159\u00edzen\u00ed, zat\u00edmco z\u00e1kladn\u00ed v\u00fdpo\u010detn\u00ed zdroje, jako je procesor, opera\u010dn\u00ed pam\u011b\u0165, a trval\u00e9 blokov\u00e9 \u00falo\u017ei\u0161t\u011b, jsou voliteln\u00e9. Spr\u00e1va virtu\u00e1ln\u00edch stroj\u016f je obvykle slo\u017eit\u011bj\u0161\u00ed ne\u017e spr\u00e1va fyzick\u00e9ho hardwaru, co\u017e omezuje jejich vyu\u017eit\u00ed v modern\u00edch v\u00fdpo\u010detn\u00edch prost\u0159ed\u00edch.",
        sectionNumber: "12.1.10",
        sectionTitle: "Virtual Computers",
      },
      {
        uuid: "7c3da5b7-ed84-4331-8812-c88cf6273963",
        correct:
          "V kontextu virtualizace, koncept virtu\u00e1ln\u00edho stroje zahrnuje virtualizaci v\u0161ech aspekt\u016f po\u010d\u00edta\u010dov\u00e9ho syst\u00e9mu, a\u0165 u\u017e prost\u0159ednictv\u00edm hardwarov\u00fdch technologi\u00ed jako VT-x a EPT, nebo softwarov\u00fdch \u0159e\u0161en\u00ed jako QEMU a \u2039virtio\u203a. Typick\u00fd virtu\u00e1ln\u00ed stroj je navr\u017een tak, aby poskytoval kl\u00ed\u010dov\u00e9 zdroje nezbytn\u00e9 pro b\u011bh opera\u010dn\u00edho syst\u00e9mu a aplikac\u00ed, p\u0159i\u010dem\u017e mezi tyto zdroje standardn\u011b pat\u0159\u00ed procesor, opera\u010dn\u00ed pam\u011b\u0165 RAM, blokov\u00e9 \u00falo\u017ei\u0161t\u011b pro ukl\u00e1d\u00e1n\u00ed dat a souborov\u00fdch syst\u00e9m\u016f, s\u00ed\u0165ov\u00e9 rozhran\u00ed a konzolov\u00e9 rozhran\u00ed pro administraci a monitorov\u00e1n\u00ed.",
        incorrect:
          "V kontextu virtualizace se koncept virtu\u00e1ln\u00edho stroje omezuje pouze na virtualizaci procesoru, p\u0159i\u010dem\u017e ostatn\u00ed komponenty po\u010d\u00edta\u010dov\u00e9ho syst\u00e9mu, jako je opera\u010dn\u00ed pam\u011b\u0165 a \u00falo\u017ei\u0161t\u011b, z\u016fst\u00e1vaj\u00ed fyzick\u00e9 a nesd\u00edlen\u00e9.  Virtu\u00e1ln\u00ed stroje se obvykle zam\u011b\u0159uj\u00ed na poskytov\u00e1n\u00ed \u0161irok\u00e9ho spektra perifern\u00edch za\u0159\u00edzen\u00ed, zat\u00edmco kl\u00ed\u010dov\u00e9 zdroje, jako je procesor a RAM, jsou emulov\u00e1ny pouze okrajov\u011b a nejsou pova\u017eov\u00e1ny za nezbytn\u00e9 pro funk\u010dnost virtu\u00e1ln\u00edho stroje. Spr\u00e1va t\u011bchto stroj\u016f je z\u00e1m\u011brn\u011b komplikovan\u00e1 pro zv\u00fd\u0161en\u00ed bezpe\u010dnosti.",
        sectionNumber: "12.1.10",
        sectionTitle: "Virtual Computers",
      },
      {
        uuid: "d190a1b1-9469-466a-9003-e812feba0156",
        correct:
          "Hypervisor, kter\u00fd je kl\u00ed\u010dovou sou\u010d\u00e1st\u00ed virtualiza\u010dn\u00edho prost\u0159ed\u00ed, implementuje pl\u00e1nova\u010d proces\u016f. Tento pl\u00e1nova\u010d se sice \u0159\u00edd\u00ed podobn\u00fdmi principy jako b\u011b\u017en\u00e9 pl\u00e1nova\u010de opera\u010dn\u00edch syst\u00e9m\u016f, av\u0161ak je navr\u017een s odli\u0161n\u00fdmi kompromisy a je obecn\u011b jednodu\u0161\u0161\u00ed, aby minimalizoval re\u017eii virtualizace a maximalizoval v\u00fdkon virtu\u00e1ln\u00edch stroj\u016f.",
        incorrect:
          "Hypervisor, jako\u017eto sou\u010d\u00e1st virtualiza\u010dn\u00edho prost\u0159ed\u00ed, neobsahuje vlastn\u00ed pl\u00e1nova\u010d proces\u016f. M\u00edsto toho se spol\u00e9h\u00e1 na pl\u00e1nova\u010d hostitelsk\u00e9ho opera\u010dn\u00edho syst\u00e9mu, kter\u00fd p\u0159\u00edmo \u0159\u00edd\u00ed b\u011bh virtu\u00e1ln\u00edch stroj\u016f, \u010d\u00edm\u017e se sni\u017euje komplexita hypervisoru a zlep\u0161uje celkov\u00fd v\u00fdkon virtualizace.",
        sectionNumber: "12.1.11",
        sectionTitle: "CPU Sharing",
      },
      {
        uuid: "2fd6459c-8ec4-434a-96e0-32110495191e",
        correct:
          "V\u011bt\u0161ina instrukc\u00ed, zejm\u00e9na t\u011bch, kter\u00e9 jsou b\u011b\u017en\u011b dostupn\u00e9 u\u017eivatelsk\u00fdm program\u016fm, je procesorem hostitele vykon\u00e1v\u00e1na p\u0159\u00edmo, bez nutnosti z\u00e1sahu hypervisoru. Nicm\u00e9n\u011b, hypervisor hraje kl\u00ed\u010dovou roli p\u0159i zpracov\u00e1n\u00ed privilegovan\u00fdch instrukc\u00ed. Kdy\u017e procesor naraz\u00ed na privilegovanou instrukci, je proveden\u00ed t\u00e9to instrukce zachyceno a p\u0159ed\u00e1no hypervisoru, kter\u00fd provede pot\u0159ebn\u00e9 akce v softwaru, aby zajistil spr\u00e1vnou virtualizaci.",
        incorrect:
          "V\u0161echny instrukce, v\u010detn\u011b privilegovan\u00fdch instrukc\u00ed, jsou procesorem hostitele vykon\u00e1v\u00e1ny p\u0159\u00edmo, bez z\u00e1sahu hypervisoru. Hypervisor se star\u00e1 pouze o spr\u00e1vu virtualizovan\u00e9 pam\u011b\u0165ov\u00e9 jednotky (MMU), ale do samotn\u00e9ho prov\u00e1d\u011bn\u00ed instrukc\u00ed nezasahuje, co\u017e zaji\u0161\u0165uje maxim\u00e1ln\u00ed v\u00fdkon a minimalizuje re\u017eii virtualizace.",
        sectionNumber: "12.1.11",
        sectionTitle: "CPU Sharing",
      },
      {
        uuid: "9dfa9d5c-7092-479b-ad9d-201fadf1ac21",
        correct:
          "Hypervisor v virtualiza\u010dn\u00edm prost\u0159ed\u00ed aktivn\u011b spravuje virtualizovanou pam\u011b\u0165ovou jednotku (MMU). Tato spr\u00e1va je kl\u00ed\u010dov\u00e1 pro izolaci a bezpe\u010dnost virtu\u00e1ln\u00edch stroj\u016f, proto\u017ee hypervisor kontroluje p\u0159\u00edstup virtu\u00e1ln\u00edch stroj\u016f k fyzick\u00e9 pam\u011bti a zaji\u0161\u0165uje, \u017ee virtu\u00e1ln\u00ed stroje nemohou navz\u00e1jem interferovat nebo naru\u0161it hostitelsk\u00fd syst\u00e9m.",
        incorrect:
          "Hypervisor v virtualiza\u010dn\u00edm prost\u0159ed\u00ed se nezab\u00fdv\u00e1 spr\u00e1vou virtualizovan\u00e9 pam\u011b\u0165ov\u00e9 jednotky (MMU). Spr\u00e1va pam\u011bti je pln\u011b v kompetenci hostitelsk\u00e9ho opera\u010dn\u00edho syst\u00e9mu, kter\u00fd p\u0159\u00edmo \u0159\u00edd\u00ed alokaci a ochranu pam\u011bti pro v\u0161echny virtu\u00e1ln\u00ed stroje, \u010d\u00edm\u017e se zjednodu\u0161uje architektura hypervisoru.",
        sectionNumber: "12.1.11",
        sectionTitle: "CPU Sharing",
      },
      {
        uuid: "5445d3cd-3aef-46e2-908a-09157223a2be",
        correct:
          "Softwarov\u00e1 virtualizace pam\u011bti, zn\u00e1m\u00e1 jako st\u00ednov\u00e9 tabulky str\u00e1nek, implementuje virtualizaci pam\u011bti tak, \u017ee hostovan\u00fd opera\u010dn\u00ed syst\u00e9m nem\u016f\u017ee p\u0159\u00edmo p\u0159istupovat k MMU. M\u00edsto toho se pou\u017e\u00edv\u00e1 st\u00ednov\u00e1 tabulka str\u00e1nek, kter\u00e1 je pro hosta neviditeln\u00e1, a tabulky str\u00e1nek hosta jsou synchronizov\u00e1ny s touto st\u00ednovou tabulkou prost\u0159ednictv\u00edm VMM, co\u017e umo\u017e\u0148uje efektivn\u00ed spr\u00e1vu pam\u011bti a izolaci virtu\u00e1ln\u00edch stroj\u016f.",
        incorrect:
          "Softwarov\u00e1 virtualizace pam\u011bti, zn\u00e1m\u00e1 jako st\u00ednov\u00e9 tabulky str\u00e1nek, implementuje virtualizaci pam\u011bti tak, \u017ee hostovan\u00fd opera\u010dn\u00ed syst\u00e9m m\u00e1 pln\u00fd a p\u0159\u00edm\u00fd p\u0159\u00edstup k MMU. St\u00ednov\u00e9 tabulky str\u00e1nek se pou\u017e\u00edvaj\u00ed pouze pro optimalizaci v\u00fdkonu a nemaj\u00ed vliv na izolaci hostovan\u00fdch syst\u00e9m\u016f, proto\u017ee hostovan\u00fd opera\u010dn\u00ed syst\u00e9m spravuje pam\u011b\u0165 nez\u00e1visle na hypervizoru.",
        sectionNumber: "12.1.12",
        sectionTitle: "RAM Sharing",
      },
      {
        uuid: "bc5dbedf-46db-4cc6-9186-fe3506c2de39",
        correct:
          "Hardwarov\u00e1 virtualizace pam\u011bti, konkr\u00e9tn\u011b druh\u00e1 \u00farove\u0148 p\u0159ekladu, p\u0159edstavuje hardwarov\u011b asistovanou virtualizaci MMU, kter\u00e1 p\u0159id\u00e1v\u00e1 vrstvu p\u0159ekladu z guest-fyzick\u00e9 na host-fyzickou adresu. Toto \u0159e\u0161en\u00ed v\u00fdznamn\u011b zjednodu\u0161uje VMM a je v\u00fdrazn\u011b rychlej\u0161\u00ed ne\u017e st\u00ednov\u00e9 tabulky str\u00e1nek, proto\u017ee sni\u017euje re\u017eii spojenou s \u010dast\u00fdmi zachycen\u00edmi zm\u011bn tabulek str\u00e1nek hostovan\u00e9ho opera\u010dn\u00edho syst\u00e9mu.",
        incorrect:
          "Hardwarov\u00e1 virtualizace pam\u011bti, konkr\u00e9tn\u011b druh\u00e1 \u00farove\u0148 p\u0159ekladu, je softwarov\u00e9 \u0159e\u0161en\u00ed, kter\u00e9 emuluje hardwarovou MMU a nep\u0159id\u00e1v\u00e1 \u017e\u00e1dnou dal\u0161\u00ed vrstvu p\u0159ekladu adres. Toto \u0159e\u0161en\u00ed je srovnateln\u00e9 co do v\u00fdkonu se st\u00ednov\u00fdmi tabulkami str\u00e1nek a slo\u017eitost VMM z\u016fst\u00e1v\u00e1 stejn\u00e1, proto\u017ee ve\u0161ker\u00e1 spr\u00e1va pam\u011bti je st\u00e1le prov\u00e1d\u011bna softwarov\u011b hypervizorem.",
        sectionNumber: "12.1.12",
        sectionTitle: "RAM Sharing",
      },
      {
        uuid: "a9bb9f06-14aa-417c-a9db-4ed579d23e82",
        correct:
          "Virtualizace pam\u011bti, podobn\u011b jako virtualizace CPU, je zalo\u017eena na z\u00e1kladn\u00edch principech, kter\u00e9 standardn\u00ed opera\u010dn\u00ed syst\u00e9my pou\u017e\u00edvaj\u00ed k izolaci proces\u016f. Pam\u011b\u0165 je rozd\u011blena na str\u00e1nky a MMU prov\u00e1d\u00ed hlavn\u00ed \u010d\u00e1st pr\u00e1ce spojen\u00e9 s p\u0159ekladem adres, co\u017e umo\u017e\u0148uje efektivn\u00ed sd\u00edlen\u00ed pam\u011bti a izolaci virtu\u00e1ln\u00edch stroj\u016f od sebe navz\u00e1jem a od hypervizoru.",
        incorrect:
          "Virtualizace pam\u011bti se z\u00e1sadn\u011b li\u0161\u00ed od virtualizace CPU a nepou\u017e\u00edv\u00e1 principy izolace proces\u016f. Pam\u011b\u0165 nen\u00ed rozd\u011blena na str\u00e1nky a p\u0159eklad adres neprob\u00edh\u00e1 pomoc\u00ed MMU. Virtualizace pam\u011bti se spol\u00e9h\u00e1 na monopoln\u00ed p\u0159\u00edstup ka\u017ed\u00e9ho virtu\u00e1ln\u00edho stroje k fyzick\u00e9 pam\u011bti, co\u017e zaji\u0161\u0165uje maxim\u00e1ln\u00ed v\u00fdkon, ale sni\u017euje izolaci a efektivitu sd\u00edlen\u00ed zdroj\u016f.",
        sectionNumber: "12.1.12",
        sectionTitle: "RAM Sharing",
      },
      {
        uuid: "5df7b897-cb6e-42fb-a45f-0dd38d42cb72",
        correct:
          "Virtualiza\u010dn\u00ed \u0159e\u0161en\u00ed v modern\u00edch syst\u00e9mech vyu\u017e\u00edvaj\u00ed paravirtualizovan\u00e9 s\u00ed\u0165ov\u00e9 karty, kter\u00e9 slou\u017e\u00ed k p\u0159enosu s\u00ed\u0165ov\u00fdch r\u00e1mc\u016f mezi hostovan\u00fdm opera\u010dn\u00edm syst\u00e9mem a hostitelsk\u00fdm syst\u00e9mem, p\u0159i\u010dem\u017e tyto karty jsou typicky p\u0159ipojeny k softwarov\u00e9mu mostu v hostitelsk\u00e9m syst\u00e9mu, a\u010dkoli alternativn\u011b m\u016f\u017ee b\u00fdt pou\u017eito i routov\u00e1n\u00ed nebo NAT.",
        incorrect:
          "Virtualiza\u010dn\u00ed \u0159e\u0161en\u00ed v modern\u00edch syst\u00e9mech vyu\u017e\u00edvaj\u00ed fyzick\u00e9 s\u00ed\u0165ov\u00e9 karty, kter\u00e9 jsou p\u0159\u00edmo sd\u00edleny mezi hostovan\u00fdm opera\u010dn\u00edm syst\u00e9mem a hostitelsk\u00fdm syst\u00e9mem, a nevyu\u017e\u00edvaj\u00ed \u017e\u00e1dn\u00e9 virtu\u00e1ln\u00ed komponenty, p\u0159i\u010dem\u017e tyto karty jsou typicky p\u0159ipojeny k hardwarov\u00e9mu mostu v hostitelsk\u00e9m syst\u00e9mu, a alternativn\u011b m\u016f\u017ee b\u00fdt pou\u017eito pouze NAT.",
        sectionNumber: "12.1.13",
        sectionTitle: "Network Sharing",
      },
      {
        uuid: "e232b5cc-3a84-4a8e-ba5b-926299d11930",
        correct:
          "V sou\u010dasn\u00fdch virtualiza\u010dn\u00edch \u0159e\u0161en\u00edch je s\u00ed\u0165ov\u00e1 komunikace realizov\u00e1na pomoc\u00ed paravirtualizovan\u00e9 s\u00ed\u0165ov\u00e9 karty, kter\u00e1 je propojena s pseudoza\u0159\u00edzen\u00edm typu Ethernet tunel v hostitelsk\u00e9m syst\u00e9mu, co\u017e je v podstat\u011b virtu\u00e1ln\u00ed s\u00ed\u0165ov\u00e1 karta zpracov\u00e1vaj\u00edc\u00ed Ethernetov\u00e9 r\u00e1mce, kde r\u00e1mce odeslan\u00e9 na paravirtualizovan\u00e9m za\u0159\u00edzen\u00ed se objev\u00ed na virtu\u00e1ln\u00ed s\u00ed\u0165ov\u00e9 kart\u011b v hostiteli a naopak.",
        incorrect:
          "V sou\u010dasn\u00fdch virtualiza\u010dn\u00edch \u0159e\u0161en\u00edch je s\u00ed\u0165ov\u00e1 komunikace realizov\u00e1na pomoc\u00ed emulovan\u00e9 s\u00ed\u0165ov\u00e9 karty, kter\u00e1 je propojena p\u0159\u00edmo s fyzickou s\u00ed\u0165ovou kartou v hostitelsk\u00e9m syst\u00e9mu, co\u017e je v podstat\u011b softwarov\u00e1 abstrakce fyzick\u00e9 karty zpracov\u00e1vaj\u00edc\u00ed IP pakety, kde r\u00e1mce odeslan\u00e9 na emulovan\u00e9m za\u0159\u00edzen\u00ed se transformuj\u00ed na jin\u00e9 protokoly p\u0159ed odesl\u00e1n\u00edm na fyzickou kartu.",
        sectionNumber: "12.1.13",
        sectionTitle: "Network Sharing",
      },
      {
        uuid: "fdd060e8-bc92-46ff-ba6d-b923522f64c9",
        correct:
          "Ethernetov\u00e9 r\u00e1mce, kter\u00e9 jsou odesl\u00e1ny na paravirtualizovan\u00e9 s\u00ed\u0165ov\u00e9 kart\u011b v hostovan\u00e9m syst\u00e9mu, se objev\u00ed na virtu\u00e1ln\u00ed s\u00ed\u0165ov\u00e9 kart\u011b v hostitelsk\u00e9m syst\u00e9mu, a toto pseudoza\u0159\u00edzen\u00ed je n\u00e1sledn\u011b softwarov\u011b propojeno bu\u010f do re\u017eimu mostu s hardwarovou s\u00ed\u0165ovou kartou pro komunikaci s vn\u011bj\u0161\u00ed s\u00edt\u00ed Ethernet, nebo je mezi pseudoza\u0159\u00edzen\u00edm a hardwarovou s\u00ed\u0165ovou kartou nastaveno routov\u00e1n\u00ed na t\u0159et\u00ed vrstv\u011b.",
        incorrect:
          "Ethernetov\u00e9 r\u00e1mce, kter\u00e9 jsou odesl\u00e1ny na paravirtualizovan\u00e9 s\u00ed\u0165ov\u00e9 kart\u011b v hostovan\u00e9m syst\u00e9mu, jsou enkapsulov\u00e1ny do IP paket\u016f a odesl\u00e1ny p\u0159\u00edmo na fyzickou s\u00ed\u0165ovou kartu hostitelsk\u00e9ho syst\u00e9mu bez pou\u017eit\u00ed virtu\u00e1ln\u00ed s\u00ed\u0165ov\u00e9 karty, a toto propojen\u00ed je v\u017edy realizov\u00e1no pomoc\u00ed NAT, bez mo\u017enosti softwarov\u00e9ho mostu nebo routov\u00e1n\u00ed na t\u0159et\u00ed vrstv\u011b.",
        sectionNumber: "12.1.13",
        sectionTitle: "Network Sharing",
      },
      {
        uuid: "88a5e044-a531-4c8f-9a33-d7d5c2a9ca3c",
        correct:
          "Blokov\u00e9 \u00falo\u017ei\u0161t\u011b ve virtualizovan\u00fdch prost\u0159ed\u00edch je typicky zalo\u017eeno na paravirtualizaci, co\u017e znamen\u00e1, \u017ee hostitelsk\u00e1 strana za\u0159\u00edzen\u00ed pro blokov\u00e9 \u00falo\u017ei\u0161t\u011b m\u016f\u017ee b\u00fdt implementov\u00e1na bu\u010f jako b\u011b\u017en\u00fd soubor v souborov\u00e9m syst\u00e9mu hostitele, potenci\u00e1ln\u011b ve speci\u00e1ln\u00edm form\u00e1tu jako copy-on-write, nebo jako skute\u010dn\u00e9 blokov\u00e9 za\u0159\u00edzen\u00ed, kter\u00e9 m\u016f\u017ee b\u00fdt virtualizovan\u00e9 pomoc\u00ed technologi\u00ed jako LVM nebo device-mapper, nebo dokonce p\u0159\u00edmo hardwarov\u00e9 blokov\u00e9 za\u0159\u00edzen\u00ed.",
        incorrect:
          "Blokov\u00e9 \u00falo\u017ei\u0161t\u011b ve virtualizovan\u00fdch prost\u0159ed\u00edch je v\u017edy zalo\u017eeno na pln\u00e9 virtualizaci, co\u017e znamen\u00e1, \u017ee hostitelsk\u00e1 strana za\u0159\u00edzen\u00ed pro blokov\u00e9 \u00falo\u017ei\u0161t\u011b je omezena pouze na implementaci jako b\u011b\u017en\u00fd soubor v souborov\u00e9m syst\u00e9mu hostitele a nem\u016f\u017ee b\u00fdt nikdy implementov\u00e1na jako skute\u010dn\u00e9 blokov\u00e9 za\u0159\u00edzen\u00ed, a to ani s vyu\u017eit\u00edm technologi\u00ed jako LVM nebo device-mapper.",
        sectionNumber: "12.1.14",
        sectionTitle: "Virtual Block Devices",
      },
      {
        uuid: "33c323da-4a34-493e-bbbc-9ba8ea37a3ee",
        correct:
          "Hostitelsk\u00e1 strana za\u0159\u00edzen\u00ed pro blokov\u00e9 \u00falo\u017ei\u0161t\u011b ve virtualizovan\u00e9m prost\u0159ed\u00ed m\u016f\u017ee b\u00fdt implementov\u00e1na r\u016fzn\u00fdmi zp\u016fsoby, v\u010detn\u011b pou\u017eit\u00ed b\u011b\u017en\u00fdch soubor\u016f, kter\u00e9 mohou b\u00fdt ulo\u017eeny ve speci\u00e1ln\u00edm form\u00e1tu, nap\u0159\u00edklad s pou\u017eit\u00edm technologie copy-on-write pro efektivn\u00ed spr\u00e1vu diskov\u00e9ho prostoru, a tak\u00e9 pomoc\u00ed skute\u010dn\u00fdch blokov\u00fdch za\u0159\u00edzen\u00ed, kter\u00e1 mohou b\u00fdt virtualizov\u00e1na prost\u0159ednictv\u00edm LVM nebo device-mapper, nebo mohou b\u00fdt p\u0159\u00edmo sv\u00e1z\u00e1na s fyzick\u00fdm hardwarov\u00fdm blokov\u00fdm za\u0159\u00edzen\u00edm.",
        incorrect:
          "Hostitelsk\u00e1 strana za\u0159\u00edzen\u00ed pro blokov\u00e9 \u00falo\u017ei\u0161t\u011b ve virtualizovan\u00e9m prost\u0159ed\u00ed je v\u00fdhradn\u011b implementov\u00e1na pouze jako b\u011b\u017en\u00fd soubor v souborov\u00e9m syst\u00e9mu hostitele, bez mo\u017enosti pou\u017eit\u00ed speci\u00e1ln\u00edch form\u00e1t\u016f nebo technologi\u00ed copy-on-write, a nem\u016f\u017ee b\u00fdt nikdy implementov\u00e1na pomoc\u00ed skute\u010dn\u00fdch blokov\u00fdch za\u0159\u00edzen\u00ed, a to ani virtualizovan\u00fdch prost\u0159ednictv\u00edm LVM nebo device-mapper, ani p\u0159\u00edmo sv\u00e1zan\u00fdch s fyzick\u00fdm hardwarov\u00fdm blokov\u00fdm za\u0159\u00edzen\u00edm.",
        sectionNumber: "12.1.14",
        sectionTitle: "Virtual Block Devices",
      },
      {
        uuid: "f01e6c81-51dd-4320-bb54-303b2b1b05b0",
        correct:
          "Perifern\u00ed za\u0159\u00edzen\u00ed, jako jsou grafick\u00e9 karty, zvukov\u00e9 vybaven\u00ed, tisk\u00e1rny a skenery, jsou u\u017eite\u010dn\u00e9 p\u0159edev\u0161\u00edm v desktopov\u00fdch syst\u00e9mech. S v\u00fdjimkou v\u00fdpo\u010detn\u00edch GPU, jsou perifern\u00ed za\u0159\u00edzen\u00ed na serverech s virtualizac\u00ed, kter\u00e1 p\u0159edstavuje mnohem v\u011bt\u0161\u00ed trh ne\u017e desktopy, m\u00e9n\u011b relevantn\u00ed, proto\u017ee jejich prim\u00e1rn\u00ed vyu\u017eit\u00ed se soust\u0159ed\u00ed na interakci s u\u017eivatelem, kter\u00e1 je pro servery m\u00e9n\u011b typick\u00e1.",
        incorrect:
          "Perifern\u00ed za\u0159\u00edzen\u00ed, jako jsou grafick\u00e9 karty, zvukov\u00e9 vybaven\u00ed, tisk\u00e1rny a skenery, jsou stejn\u011b u\u017eite\u010dn\u00e1 jak v desktopov\u00fdch syst\u00e9mech, tak i v serverov\u00e9 virtualizaci. Trh serverov\u00e9 virtualizace nen\u00ed v\u011bt\u0161\u00ed ne\u017e trh desktopov\u00fdch syst\u00e9m\u016f, a proto jsou perifern\u00ed za\u0159\u00edzen\u00ed stejn\u011b relevantn\u00ed pro ob\u011b tyto oblasti, proto\u017ee jejich vyu\u017eit\u00ed nen\u00ed omezeno pouze na interakci s koncov\u00fdm u\u017eivatelem.",
        sectionNumber: "12.1.15",
        sectionTitle: "Special Resources",
      },
      {
        uuid: "afe790cd-bc58-41ad-8e5a-563cc908da45",
        correct:
          "Antivirtualiza\u010dn\u00ed technologie umo\u017e\u0148uj\u00ed hostovan\u00e9mu opera\u010dn\u00edmu syst\u00e9mu p\u0159\u00edmou interakci s fyzick\u00fdm hardwarem prost\u0159ednictv\u00edm zp\u0159\u00edstupn\u011bn\u00ed PCI za\u0159\u00edzen\u00ed a vyu\u017eit\u00ed mapov\u00e1n\u00ed IO-MMU pro zaji\u0161t\u011bn\u00ed ochrany pam\u011bti a prevenci konflikt\u016f s hostitelsk\u00fdm syst\u00e9mem nebo jin\u00fdmi virtu\u00e1ln\u00edmi stroji. Tento p\u0159\u00edstup zaru\u010duje, \u017ee pouze jeden opera\u010dn\u00ed syst\u00e9m v dan\u00fd moment m\u016f\u017ee ovl\u00e1dat specifick\u00fd hardware.",
        incorrect:
          "Antivirtualiza\u010dn\u00ed technologie umo\u017e\u0148uj\u00ed v\u00edce hostovan\u00fdm opera\u010dn\u00edm syst\u00e9m\u016fm sou\u010dasn\u00fd a p\u0159\u00edm\u00fd p\u0159\u00edstup ke stejn\u00e9mu fyzick\u00e9mu hardwaru bez nutnosti IO-MMU, co\u017e zjednodu\u0161uje spr\u00e1vu hardwaru ve virtualizovan\u00fdch prost\u0159ed\u00edch. Tento p\u0159\u00edstup umo\u017e\u0148uje efektivn\u00ed sd\u00edlen\u00ed zdroj\u016f mezi virtu\u00e1ln\u00edmi stroji.",
        sectionNumber: "12.1.16",
        sectionTitle: "PCI Passthrough",
      },
      {
        uuid: "ba88fb5a-cd26-4e36-9a35-74815b99e062",
        correct:
          "Technologie IO-MMU, jako nap\u0159\u00edklad VT-d a AMD-Vi, hraj\u00ed kl\u00ed\u010dovou roli v antivirtualiza\u010dn\u00edch technik\u00e1ch, proto\u017ee jsou nezbytn\u00e9 pro bezpe\u010dn\u00e9 poskytnut\u00ed p\u0159\u00edm\u00e9ho p\u0159\u00edstupu hostovan\u00e9ho opera\u010dn\u00edho syst\u00e9mu k fyzick\u00e9mu hardwaru. Bez IO-MMU by hostovan\u00fd syst\u00e9m mohl potenci\u00e1ln\u011b p\u0159epsat pam\u011b\u0165 hostitele nebo jin\u00fdch virtu\u00e1ln\u00edch stroj\u016f.",
        incorrect:
          "Technologie IO-MMU, jako VT-d a AMD-Vi, jsou sice u\u017eite\u010dn\u00e9, ale nejsou nezbytn\u00e9 pro implementaci antivirtualiza\u010dn\u00edch technik, kde hostovan\u00fd opera\u010dn\u00ed syst\u00e9m m\u00e1 p\u0159\u00edm\u00fd p\u0159\u00edstup k fyzick\u00e9mu hardwaru. Modern\u00ed hypervisory dok\u00e1\u017eou zajistit bezpe\u010dnost a izolaci i bez IO-MMU.",
        sectionNumber: "12.1.16",
        sectionTitle: "PCI Passthrough",
      },
      {
        uuid: "dd0ad0fc-28d7-49eb-8c0b-4604328b60d9",
        correct:
          "V p\u0159\u00edpad\u011b antivirtualizace, kdy je PCI za\u0159\u00edzen\u00ed p\u0159\u00edmo zp\u0159\u00edstupn\u011bno hostovan\u00e9mu opera\u010dn\u00edmu syst\u00e9mu, je nezbytn\u00e9, aby se hostitelsk\u00fd syst\u00e9m zdr\u017eel jak\u00e9koli komunikace s t\u00edmto za\u0159\u00edzen\u00edm prost\u0159ednictv\u00edm sv\u00fdch vlastn\u00edch ovlada\u010d\u016f. Jak\u00fdkoli pokus hostitelsk\u00e9ho syst\u00e9mu o ovl\u00e1d\u00e1n\u00ed tohoto za\u0159\u00edzen\u00ed by vedl k nestabilit\u011b a potenci\u00e1ln\u00edmu chaosu v syst\u00e9mu.",
        incorrect:
          "V konfigurac\u00edch antivirtualizace m\u016f\u017ee hostitelsk\u00fd opera\u010dn\u00ed syst\u00e9m efektivn\u011b sd\u00edlet kontrolu nad PCI za\u0159\u00edzen\u00edm s hostovan\u00fdm opera\u010dn\u00edm syst\u00e9mem. Sou\u010dasn\u00e9 \u0159\u00edzen\u00ed umo\u017e\u0148uje hostiteli monitorovat a spravovat hardware, zat\u00edmco hostovan\u00fd syst\u00e9m vyu\u017e\u00edv\u00e1 za\u0159\u00edzen\u00ed pro specifick\u00e9 \u00falohy, co\u017e zvy\u0161uje flexibilitu syst\u00e9mu.",
        sectionNumber: "12.1.16",
        sectionTitle: "PCI Passthrough",
      },
      {
        uuid: "d4e31c3d-8a01-4291-b4fa-6dc4bd591ec6",
        correct:
          "Technologie VT-d umo\u017e\u0148uje sd\u00edlen\u00ed GPU ve virtualizovan\u00e9m prost\u0159ed\u00ed t\u00edm, \u017ee umo\u017e\u0148uje p\u0159\u00edm\u00e9 p\u0159i\u0159azen\u00ed fyzick\u00e9 GPU virtu\u00e1ln\u00edmu stroji. Toto \u0159e\u0161en\u00ed, zalo\u017een\u00e9 na IO-MMU, efektivn\u011b obch\u00e1z\u00ed hypervisor pro p\u0159\u00edm\u00fd p\u0159\u00edstup k hardwaru, av\u0161ak omezuje GPU na exkluzivn\u00ed pou\u017eit\u00ed jedn\u00edm opera\u010dn\u00edm syst\u00e9mem, \u010d\u00edm\u017e se vylu\u010duje jej\u00ed sd\u00edlen\u00ed mezi v\u00edce virtu\u00e1ln\u00edmi stroji sou\u010dasn\u011b.",
        incorrect:
          "Technologie VT-d je pokro\u010dil\u00e1 metoda sd\u00edlen\u00ed GPU, kter\u00e1 umo\u017e\u0148uje efektivn\u00ed \u010dasov\u00e9 sd\u00edlen\u00ed GPU mezi v\u00edce virtu\u00e1ln\u00edmi stroji. Tato technologie, zalo\u017een\u00e1 na nativn\u00edch ovlada\u010d\u00edch GPU v hypervisoru, zaji\u0161\u0165uje, \u017ee r\u016fzn\u00e9 virtu\u00e1ln\u00ed stroje mohou sou\u010dasn\u011b vyu\u017e\u00edvat v\u00fdpo\u010detn\u00ed v\u00fdkon GPU, a maximalizuje tak vyu\u017eit\u00ed hardwarov\u00fdch zdroj\u016f grafick\u00e9ho procesoru.",
        sectionNumber: "12.1.17",
        sectionTitle: "GPUs and Virtualisation",
      },
      {
        uuid: "67bae62e-446b-4568-a690-090c6ccc2537",
        correct:
          "Pro efektivn\u00ed \u010dasov\u00e9 sd\u00edlen\u00ed GPU mezi virtu\u00e1ln\u00edmi stroji pomoc\u00ed nativn\u00edch ovlada\u010d\u016f (GVT-g) je nezbytn\u00e9, aby hypervisor nebo hostitelsk\u00fd opera\u010dn\u00ed syst\u00e9m poskytoval specifick\u00e9 ovlada\u010de pro danou GPU. Tyto ovlada\u010de v hypervisoru jsou kl\u00ed\u010dov\u00e9 pro zprost\u0159edkov\u00e1n\u00ed p\u0159\u00edstupu jednotliv\u00fdch virtu\u00e1ln\u00edch stroj\u016f ke GPU a pro spr\u00e1vu kontext\u016f, umo\u017e\u0148uj\u00edc\u00ed pozastaven\u00ed a obnoven\u00ed GPU \u00faloh, podobn\u011b jako u proces\u016f na CPU.",
        incorrect:
          "\u010casov\u00e9 sd\u00edlen\u00ed GPU mezi virtu\u00e1ln\u00edmi stroji (GVT-g) nevy\u017eaduje specifick\u00e9 ovlada\u010de GPU v hypervisoru, proto\u017ee virtu\u00e1ln\u00ed stroje p\u0159\u00edmo komunikuj\u00ed s fyzickou GPU prost\u0159ednictv\u00edm standardizovan\u00fdch rozhran\u00ed PCI. Tato metoda se spol\u00e9h\u00e1 na schopnosti samotn\u00e9 GPU spravovat kontexty a p\u0159id\u011blovat v\u00fdpo\u010detn\u00ed zdroje virtu\u00e1ln\u00edm stroj\u016fm bez nutnosti z\u00e1sahu hypervisoru do spr\u00e1vy GPU.",
        sectionNumber: "12.1.17",
        sectionTitle: "GPUs and Virtualisation",
      },
      {
        uuid: "bb4526fc-0ab2-41f5-9067-14d6d0fdd546",
        correct:
          "Paravirtualizace p\u0159edstavuje alternativn\u00ed p\u0159\u00edstup ke sd\u00edlen\u00ed GPU, kde hostovan\u00fd opera\u010dn\u00ed syst\u00e9m pou\u017e\u00edv\u00e1 vendor-neutr\u00e1ln\u00ed protokol pro odes\u00edl\u00e1n\u00ed p\u0159\u00edkaz\u016f ovlada\u010di GPU b\u011b\u017e\u00edc\u00edmu v hypervisoru.  Tento ovlada\u010d v hypervisoru n\u00e1sledn\u011b prov\u00e1d\u00ed multiplexov\u00e1n\u00ed a spr\u00e1vu p\u0159\u00edstupu ke GPU, zat\u00edmco v hostovan\u00e9m syst\u00e9mu je st\u00e1le vy\u017eadov\u00e1na u\u017eivatelsk\u00e1 \u010d\u00e1st GPU ovlada\u010de pro generov\u00e1n\u00ed p\u0159\u00edkazov\u00e9ho proudu a kompilaci shader\u016f.",
        incorrect:
          "Paravirtualizace GPU eliminuje pot\u0159ebu ovlada\u010d\u016f GPU v hostovan\u00e9m opera\u010dn\u00edm syst\u00e9mu i v hypervisoru.  M\u00edsto toho se spol\u00e9h\u00e1 na standardizovan\u00e9 s\u00ed\u0165ov\u00e9 protokoly pro p\u0159\u00edmou komunikaci mezi virtu\u00e1ln\u00edm strojem a fyzickou GPU, co\u017e zjednodu\u0161uje spr\u00e1vu ovlada\u010d\u016f a zvy\u0161uje v\u00fdkon grafick\u00fdch operac\u00ed ve virtualizovan\u00e9m prost\u0159ed\u00ed.",
        sectionNumber: "12.1.17",
        sectionTitle: "GPUs and Virtualisation",
      },
      {
        uuid: "218de291-a4ce-4982-bc31-b26ef2a273ae",
        correct:
          "Passthrough perifern\u00edch za\u0159\u00edzen\u00ed ve virtualizovan\u00e9m prost\u0159ed\u00ed funguje na principu virtualizace standardn\u00edch sb\u011brnic, jako jsou PCI, USB nebo SATA, co\u017e umo\u017e\u0148uje p\u0159\u00edm\u00e9 p\u0159ed\u00e1v\u00e1n\u00ed po\u017eadavk\u016f na re\u00e1ln\u00e9 fyzick\u00e9 za\u0159\u00edzen\u00ed, nap\u0159\u00edklad konkr\u00e9tn\u00ed USB flash disk nebo SATA disk, p\u0159ipojen\u00e9 k hostitelsk\u00e9mu syst\u00e9mu. T\u00edmto zp\u016fsobem se hostovan\u00e9mu opera\u010dn\u00edmu syst\u00e9mu prezentuje p\u0159\u00edm\u00e9 rozhran\u00ed k hardwaru.",
        incorrect:
          "Passthrough perifern\u00edch za\u0159\u00edzen\u00ed ve virtualizovan\u00e9m prost\u0159ed\u00ed funguje na principu emulace s\u00ed\u0165ov\u00fdch protokol\u016f, co\u017e umo\u017e\u0148uje nep\u0159\u00edm\u00fd p\u0159\u00edstup k virtu\u00e1ln\u00edm za\u0159\u00edzen\u00edm, jako je s\u00ed\u0165ov\u00e1 tisk\u00e1rna nebo skener, p\u0159ipojen\u00fdm k hostitelsk\u00e9mu syst\u00e9mu. T\u00edmto zp\u016fsobem se hostovan\u00e9mu opera\u010dn\u00edmu syst\u00e9mu prezentuje s\u00ed\u0165ov\u00e9 rozhran\u00ed k emulovan\u00e9mu hardwaru, co\u017e vede k nulov\u00e9 re\u017eii v\u00fdkonu.",
        sectionNumber: "12.1.18",
        sectionTitle: "Peripherals",
      },
      {
        uuid: "a062e031-814a-4209-9c1f-abb1171ad649",
        correct:
          "Technologie standardn\u00edho sd\u00edlen\u00ed v virtualizovan\u00fdch prost\u0159ed\u00edch umo\u017e\u0148uje, aby perifern\u00ed za\u0159\u00edzen\u00ed, jako jsou s\u00ed\u0165ov\u00e9 tisk\u00e1rny, skenery a n\u011bkdy i zvukov\u00fd hardware, byla p\u0159\u00edstupn\u00e1 hostovan\u00fdm opera\u010dn\u00edm syst\u00e9m\u016fm s vyu\u017eit\u00edm standardn\u00edch s\u00ed\u0165ov\u00fdch protokol\u016f. To vede bu\u010f k nulov\u00e9mu sn\u00ed\u017een\u00ed v\u00fdkonu u za\u0159\u00edzen\u00ed, jako jsou tisk\u00e1rny a skenery, nebo k m\u00edrn\u00e9mu zv\u00fd\u0161en\u00ed latence, kter\u00e9 je patrn\u00e9 zejm\u00e9na u zvukov\u00fdch za\u0159\u00edzen\u00ed kv\u016fli re\u017eii s\u00ed\u0165ov\u00e9 komunikace.",
        incorrect:
          "Technologie standardn\u00edho sd\u00edlen\u00ed v virtualizovan\u00fdch prost\u0159ed\u00edch umo\u017e\u0148uje, aby perifern\u00ed za\u0159\u00edzen\u00ed, jako jsou USB flash disky a SATA disky, byla p\u0159\u00edstupn\u00e1 hostovan\u00fdm opera\u010dn\u00edm syst\u00e9m\u016fm s vyu\u017eit\u00edm p\u0159\u00edm\u00e9ho p\u0159\u00edstupu ke sb\u011brnici. To vede k v\u00fdznamn\u00e9mu sn\u00ed\u017een\u00ed v\u00fdkonu u v\u0161ech za\u0159\u00edzen\u00ed kv\u016fli re\u017eii virtualizace sb\u011brnice a slo\u017eit\u00fdm interakc\u00edm ovlada\u010d\u016f v hostovan\u00e9m opera\u010dn\u00edm syst\u00e9mu.",
        sectionNumber: "12.1.18",
        sectionTitle: "Peripherals",
      },
      {
        uuid: "5c5e7d9f-e65a-4d3f-9f32-4bbc96790694",
        correct:
          "Zat\u00edmco jak passthrough perifern\u00edch za\u0159\u00edzen\u00ed, tak standardn\u00ed sd\u00edlen\u00ed nab\u00edzej\u00ed zp\u016fsoby, jak pou\u017e\u00edvat hostitelsk\u00e1 perifern\u00ed za\u0159\u00edzen\u00ed v hostovan\u00fdch opera\u010dn\u00edch syst\u00e9mech, passthrough se vyzna\u010duje p\u0159\u00edm\u00fdm p\u0159\u00edstupem k fyzick\u00fdm za\u0159\u00edzen\u00edm prost\u0159ednictv\u00edm virtualizace sb\u011brnice s minim\u00e1ln\u00edm dopadem na v\u00fdkon. Standardn\u00ed sd\u00edlen\u00ed se naopak spol\u00e9h\u00e1 na s\u00ed\u0165ov\u00e9 protokoly, co\u017e m\u016f\u017ee zav\u00e9st m\u00edrnou latenci, zejm\u00e9na u perifern\u00edch za\u0159\u00edzen\u00ed pracuj\u00edc\u00edch v re\u00e1ln\u00e9m \u010dase, jako jsou zvukov\u00e1 za\u0159\u00edzen\u00ed, ale je vhodn\u00e9 pro za\u0159\u00edzen\u00ed, jako jsou tisk\u00e1rny a skenery.",
        incorrect:
          "Zat\u00edmco jak passthrough perifern\u00edch za\u0159\u00edzen\u00ed, tak standardn\u00ed sd\u00edlen\u00ed nab\u00edzej\u00ed zp\u016fsoby, jak pou\u017e\u00edvat hostitelsk\u00e1 perifern\u00ed za\u0159\u00edzen\u00ed v hostovan\u00fdch opera\u010dn\u00edch syst\u00e9mech, passthrough se vyzna\u010duje nep\u0159\u00edm\u00fdm p\u0159\u00edstupem prost\u0159ednictv\u00edm emulace s\u00edt\u011b, co\u017e vede k vysok\u00e9 latenci. Standardn\u00ed sd\u00edlen\u00ed se naopak spol\u00e9h\u00e1 na p\u0159\u00edmou virtualizaci sb\u011brnice, kter\u00e1 nab\u00edz\u00ed t\u00e9m\u011b\u0159 nativn\u00ed v\u00fdkon, zejm\u00e9na u perifern\u00edch za\u0159\u00edzen\u00ed pracuj\u00edc\u00edch v re\u00e1ln\u00e9m \u010dase, jako jsou zvukov\u00e1 za\u0159\u00edzen\u00ed, a je vhodn\u00e9 pro za\u0159\u00edzen\u00ed, jako jsou USB flash disky a SATA disky.",
        sectionNumber: "12.1.18",
        sectionTitle: "Peripherals",
      },
      {
        uuid: "78728b3e-d4f7-49f6-a121-1897342afa2e",
        correct:
          "Virtu\u00e1ln\u00ed stroj lze snadno zastavit a stav jeho opera\u010dn\u00ed pam\u011bti RAM, v\u010detn\u011b registr\u016f a dal\u0161\u00edho stavu, m\u016f\u017ee b\u00fdt ulo\u017een do souboru v hostitelsk\u00e9m souborov\u00e9m syst\u00e9mu pro pozd\u011bj\u0161\u00ed obnoven\u00ed, co\u017e umo\u017e\u0148uje pokra\u010dovat v pr\u00e1ci virtu\u00e1ln\u00edho stroje po jeho op\u011btovn\u00e9m spu\u0161t\u011bn\u00ed.",
        incorrect:
          "Virtu\u00e1ln\u00ed stroj nelze snadno zastavit a stav jeho opera\u010dn\u00ed pam\u011bti RAM, v\u010detn\u011b registr\u016f a dal\u0161\u00edho stavu, nem\u016f\u017ee b\u00fdt ulo\u017een do souboru v hostitelsk\u00e9m souborov\u00e9m syst\u00e9mu pro pozd\u011bj\u0161\u00ed obnoven\u00ed, co\u017e znemo\u017e\u0148uje pokra\u010dovat v pr\u00e1ci virtu\u00e1ln\u00edho stroje po jeho op\u011btovn\u00e9m spu\u0161t\u011bn\u00ed.",
        sectionNumber: "12.1.19",
        sectionTitle: "Suspend & Resume",
      },
      {
        uuid: "4ffbe59d-53e1-4048-a3b4-bc89268284c1",
        correct:
          "D\u016fle\u017eitou vlastnost\u00ed virtualiza\u010dn\u00edch \u0159e\u0161en\u00ed je schopnost pozastavit b\u011bh virtu\u00e1ln\u00edho stroje a ulo\u017eit jeho aktu\u00e1ln\u00ed stav, co\u017e efektivn\u011b vytvo\u0159\u00ed obraz b\u011b\u017e\u00edc\u00edho virtualizovan\u00e9ho opera\u010dn\u00edho syst\u00e9mu, kter\u00fd je mo\u017en\u00e9 pozd\u011bji znovu na\u010d\u00edst a obnovit tak b\u011bh stroje.",
        incorrect:
          "D\u016fle\u017eitou vlastnost\u00ed virtualiza\u010dn\u00edch \u0159e\u0161en\u00ed je neschopnost pozastavit b\u011bh virtu\u00e1ln\u00edho stroje a ulo\u017eit jeho aktu\u00e1ln\u00ed stav, co\u017e znemo\u017e\u0148uje efektivn\u011b vytvo\u0159it obraz b\u011b\u017e\u00edc\u00edho virtualizovan\u00e9ho opera\u010dn\u00edho syst\u00e9mu, kter\u00fd je mo\u017en\u00e9 pozd\u011bji znovu na\u010d\u00edst a obnovit tak b\u011bh stroje.",
        sectionNumber: "12.1.19",
        sectionTitle: "Suspend & Resume",
      },
      {
        uuid: "ecc84e25-547a-4c9b-b252-48b6d27dd469",
        correct:
          "Z\u00e1sadn\u00edm rozd\u00edlem oproti usp\u00e1n\u00ed laptopu je, \u017ee operace pozastaven\u00ed a obnoven\u00ed virtu\u00e1ln\u00edho stroje nevy\u017eaduje \u017e\u00e1dnou sou\u010dinnost ani pov\u011bdom\u00ed ze strany hostovan\u00e9ho opera\u010dn\u00edho syst\u00e9mu, co\u017e znamen\u00e1, \u017ee hostovan\u00fd syst\u00e9m nemus\u00ed b\u00fdt na tyto operace speci\u00e1ln\u011b navr\u017een.",
        incorrect:
          "Z\u00e1sadn\u00ed podobnost\u00ed s usp\u00e1n\u00edm laptopu je, \u017ee operace pozastaven\u00ed a obnoven\u00ed virtu\u00e1ln\u00edho stroje vy\u017eaduje aktivn\u00ed sou\u010dinnost a pov\u011bdom\u00ed ze strany hostovan\u00e9ho opera\u010dn\u00edho syst\u00e9mu, co\u017e znamen\u00e1, \u017ee hostovan\u00fd syst\u00e9m mus\u00ed b\u00fdt na tyto operace speci\u00e1ln\u011b navr\u017een.",
        sectionNumber: "12.1.19",
        sectionTitle: "Suspend & Resume",
      },
      {
        uuid: "819c98f8-90bc-4ce9-b0fc-7f350bf5d6ea",
        correct:
          'P\u0159i takzvan\u00e9 "paused" migraci doch\u00e1z\u00ed k p\u0159enosu ulo\u017een\u00e9ho stavu virtu\u00e1ln\u00edho stroje po s\u00edti na jin\u00fd hostitel. Obnoven\u00ed virtu\u00e1ln\u00edho stroje na nov\u00e9m hostiteli je mo\u017en\u00e9 za p\u0159edpokladu, \u017ee virtu\u00e1ln\u00ed prost\u0159ed\u00ed z\u016fst\u00e1v\u00e1 konzistentn\u00ed mezi ob\u011bma hostiteli, co\u017e zahrnuje kompatibilitu virtualizovan\u00e9ho blokov\u00e9ho \u00falo\u017ei\u0161t\u011b a virtu\u00e1ln\u00ed s\u00ed\u0165ov\u00e9 infrastruktury.',
        incorrect:
          'P\u0159i takzvan\u00e9 "paused" migraci doch\u00e1z\u00ed k p\u0159enosu ulo\u017een\u00e9ho stavu virtu\u00e1ln\u00edho stroje po s\u00edti na jin\u00fd hostitel. Obnoven\u00ed virtu\u00e1ln\u00edho stroje na nov\u00e9m hostiteli je mo\u017en\u00e9 i v p\u0159\u00edpad\u011b, \u017ee virtu\u00e1ln\u00ed prost\u0159ed\u00ed nen\u00ed konzistentn\u00ed mezi ob\u011bma hostiteli, jeliko\u017e virtualizace pln\u011b izoluje virtu\u00e1ln\u00ed stroj od rozd\u00edl\u016f v hostitelsk\u00e9m prost\u0159ed\u00ed a zaji\u0161\u0165uje jeho nez\u00e1vislost.',
        sectionNumber: "12.1.20",
        sectionTitle: "Migration Basics",
      },
      {
        uuid: "76e8cc6d-87bd-4bea-a8a3-8833268a28b4",
        correct:
          'B\u011bhem "paused" migrace, kdy se stav virtu\u00e1ln\u00edho stroje p\u0159en\u00e1\u0161\u00ed po s\u00edti pro obnoven\u00ed na jin\u00e9m hostiteli, se virtu\u00e1ln\u00ed stroj do\u010dasn\u011b pozastav\u00ed. Tato pauza m\u016f\u017ee zp\u016fsobit znateln\u00e9 zpo\u017ed\u011bn\u00ed pro u\u017eivatele a v z\u00e1vislosti na velikosti p\u0159en\u00e1\u0161en\u00fdch dat a rychlosti s\u00edt\u011b m\u016f\u017ee dokonce doj\u00edt k vypr\u0161en\u00ed \u010dasov\u00fdch limit\u016f TCP spojen\u00ed nebo protokol\u016f na aplika\u010dn\u00ed vrstv\u011b.',
        incorrect:
          'B\u011bhem "paused" migrace, kdy se stav virtu\u00e1ln\u00edho stroje p\u0159en\u00e1\u0161\u00ed po s\u00edti pro obnoven\u00ed na jin\u00e9m hostiteli, nedoch\u00e1z\u00ed k \u017e\u00e1dn\u00e9mu pozastaven\u00ed virtu\u00e1ln\u00edho stroje. P\u0159enos stavu prob\u00edh\u00e1 zcela transparentn\u011b na pozad\u00ed, ani\u017e by to m\u011blo jak\u00fdkoliv vliv na interaktivn\u00ed pou\u017e\u00edv\u00e1n\u00ed syst\u00e9mu a bez rizika vypr\u0161en\u00ed \u010dasov\u00fdch limit\u016f, a to i p\u0159i p\u0159enosu velk\u00fdch objem\u016f dat.',
        sectionNumber: "12.1.20",
        sectionTitle: "Migration Basics",
      },
      {
        uuid: "8ed8ba6d-358b-4c8f-aa9d-4da2151a9c49",
        correct:
          'Pro \u00fasp\u011b\u0161nou "paused" migraci virtu\u00e1ln\u00edho stroje je z\u00e1sadn\u00ed kompatibilita podp\u016frn\u00e9ho prost\u0159ed\u00ed vn\u011b virtu\u00e1ln\u00edho stroje mezi zdrojov\u00fdm a c\u00edlov\u00fdm hostitelem. Tato kompatibilita se t\u00fdk\u00e1 zejm\u00e9na virtualizovan\u00e9ho blokov\u00e9ho \u00falo\u017ei\u0161t\u011b a virtu\u00e1ln\u00ed s\u00ed\u0165ov\u00e9 infrastruktury, kter\u00e9 mus\u00ed b\u00fdt na obou hostitel\u00edch srovnateln\u00e9, aby bylo zaji\u0161t\u011bno spr\u00e1vn\u00e9 fungov\u00e1n\u00ed virtu\u00e1ln\u00edho stroje po migraci.',
        incorrect:
          'Pro "paused" migraci virtu\u00e1ln\u00edho stroje nen\u00ed nutn\u00e1 kompatibilita podp\u016frn\u00e9ho prost\u0159ed\u00ed vn\u011b virtu\u00e1ln\u00edho stroje mezi hostiteli. Virtualizace zajist\u00ed, \u017ee virtu\u00e1ln\u00ed stroj je pln\u011b izolov\u00e1n od hardwarov\u00fdch a softwarov\u00fdch rozd\u00edl\u016f hostitelsk\u00e9ho prost\u0159ed\u00ed, a proto migrace prob\u011bhne \u00fasp\u011b\u0161n\u011b i bez ohledu na rozd\u00edly v konfiguraci blokov\u00e9ho \u00falo\u017ei\u0161t\u011b a s\u00ed\u0165ov\u00e9 infrastruktury.',
        sectionNumber: "12.1.20",
        sectionTitle: "Migration Basics",
      },
      {
        uuid: "f3806bde-6faf-4d7a-ba91-2f4b20fab9ec",
        correct:
          "\u017div\u00e1 migrace virtu\u00e1ln\u00edch stroj\u016f vyu\u017e\u00edv\u00e1 asynchronn\u00ed sn\u00edmky pam\u011bti, kde hostitel kop\u00edruje str\u00e1nky pam\u011bti a ozna\u010d\u00ed je jako jen pro \u010dten\u00ed. Sn\u00edmek pam\u011bti je odes\u00edl\u00e1n postupn\u011b b\u011bhem sv\u00e9ho vytv\u00e1\u0159en\u00ed a zm\u011bn\u011bn\u00e9 str\u00e1nky jsou odesl\u00e1ny a\u017e na konci procesu migrace, co\u017e minimalizuje p\u0159eru\u0161en\u00ed b\u011bhu virtu\u00e1ln\u00edho stroje.",
        incorrect:
          "\u017div\u00e1 migrace virtu\u00e1ln\u00edch stroj\u016f vyu\u017e\u00edv\u00e1 synchronn\u00ed sn\u00edmky pam\u011bti, kde hostitel kop\u00edruje str\u00e1nky pam\u011bti a ozna\u010d\u00ed je jako zapisovateln\u00e9. Sn\u00edmek pam\u011bti je odesl\u00e1n a\u017e po jeho \u00fapln\u00e9m vytvo\u0159en\u00ed a zm\u011bn\u011bn\u00e9 str\u00e1nky jsou odesl\u00e1ny na za\u010d\u00e1tku procesu migrace, co\u017e maximalizuje p\u0159eru\u0161en\u00ed b\u011bhu virtu\u00e1ln\u00edho stroje.",
        sectionNumber: "12.1.21",
        sectionTitle: "Live Migration",
      },
      {
        uuid: "01765079-cf5d-409a-b76c-1325b1cab335",
        correct:
          "Hlavn\u00ed v\u00fdhodou \u017eiv\u00e9 migrace oproti pozastaven\u00e9 migraci je, \u017ee virtu\u00e1ln\u00ed stroj m\u016f\u017ee b\u011b\u017eet norm\u00e1ln\u011b b\u011bhem kop\u00edrov\u00e1n\u00ed pam\u011bti, \u010d\u00edm\u017e se p\u0159edejde znateln\u00e9mu zpo\u017ed\u011bn\u00ed a probl\u00e9m\u016fm s TCP spojen\u00edmi, kter\u00e9 by mohly detekovat p\u0159eru\u0161en\u00ed. Mechanismus copy-on-write se pou\u017e\u00edv\u00e1 k sledov\u00e1n\u00ed zm\u011bn pam\u011bti b\u011bhem migrace, aby se zajistila konzistence dat.",
        incorrect:
          "Hlavn\u00ed v\u00fdhodou pozastaven\u00e9 migrace oproti \u017eiv\u00e9 migraci je, \u017ee virtu\u00e1ln\u00ed stroj mus\u00ed b\u00fdt pozastaven b\u011bhem kop\u00edrov\u00e1n\u00ed pam\u011bti, \u010d\u00edm\u017e se p\u0159edejde znateln\u00e9mu zpo\u017ed\u011bn\u00ed a probl\u00e9m\u016fm s TCP spojen\u00edmi, kter\u00e9 by mohly detekovat p\u0159eru\u0161en\u00ed. Mechanismus copy-on-write se nepou\u017e\u00edv\u00e1 k sledov\u00e1n\u00ed zm\u011bn pam\u011bti b\u011bhem migrace, proto\u017ee to nen\u00ed nutn\u00e9.",
        sectionNumber: "12.1.21",
        sectionTitle: "Live Migration",
      },
      {
        uuid: "10ad171c-dd30-4383-b5dd-0e1dd6139525",
        correct:
          "V \u017eiv\u00e9 migraci se nejprve provede po\u010d\u00e1te\u010dn\u00ed kop\u00edrov\u00e1n\u00ed pam\u011bti, n\u00e1sledovan\u00e9 iterativn\u00edmi pr\u016fchody zam\u011b\u0159en\u00fdmi pouze na zm\u011bn\u011bn\u00e9 str\u00e1nky, aby se minimalizoval objem dat k p\u0159enosu. Nakonec, kdy\u017e je po\u010det zm\u011bn\u011bn\u00fdch str\u00e1nek mal\u00fd, je virtu\u00e1ln\u00ed stroj kr\u00e1tce pozastaven, zb\u00fdvaj\u00edc\u00ed zm\u011bn\u011bn\u00e9 str\u00e1nky a kontext CPU jsou odesl\u00e1ny, a stroj je obnoven na c\u00edlov\u00e9m hostiteli s minim\u00e1ln\u00ed latenc\u00ed.",
        incorrect:
          "V \u017eiv\u00e9 migraci se nejprve provede po\u010d\u00e1te\u010dn\u00ed kop\u00edrov\u00e1n\u00ed pouze mal\u00e9ho mno\u017estv\u00ed pam\u011bti, n\u00e1sledovan\u00e9 iterativn\u00edmi pr\u016fchody zam\u011b\u0159en\u00fdmi na v\u0161echny str\u00e1nky pam\u011bti, aby se maximalizoval objem dat k p\u0159enosu. Nakonec, bez ohledu na po\u010det zm\u011bn\u011bn\u00fdch str\u00e1nek, je virtu\u00e1ln\u00ed stroj dlouze pozastaven, cel\u00e1 pam\u011b\u0165 a kontext CPU jsou odesl\u00e1ny, a stroj je obnoven na c\u00edlov\u00e9m hostiteli s velkou latenc\u00ed.",
        sectionNumber: "12.1.21",
        sectionTitle: "Live Migration",
      },
      {
        uuid: "3fd05884-4971-4a51-b69b-3b0c0a9318f1",
        correct:
          "Hypervisor p\u0159id\u011bluje pam\u011b\u0165 virtu\u00e1ln\u00edm stroj\u016fm dynamicky podle aktu\u00e1ln\u00ed pot\u0159eby, nicm\u00e9n\u011b opera\u010dn\u00ed syst\u00e9my uvnit\u0159 virtu\u00e1ln\u00edch stroj\u016f standardn\u011b neobsahuj\u00ed mechanismy pro aktivn\u00ed vracen\u00ed fyzick\u00e9 pam\u011bti hypervisoru, i kdy\u017e ji moment\u00e1ln\u011b nevyu\u017e\u00edvaj\u00ed, co\u017e m\u016f\u017ee v\u00e9st k neefektivn\u00edmu vyu\u017eit\u00ed zdroj\u016f.",
        incorrect:
          "Hypervisor p\u0159id\u011bluje pam\u011b\u0165 virtu\u00e1ln\u00edm stroj\u016fm staticky p\u0159i jejich spu\u0161t\u011bn\u00ed a opera\u010dn\u00ed syst\u00e9my uvnit\u0159 virtu\u00e1ln\u00edch stroj\u016f b\u011b\u017en\u011b obsahuj\u00ed mechanismy pro aktivn\u00ed vracen\u00ed fyzick\u00e9 pam\u011bti hypervisoru, pokud ji moment\u00e1ln\u011b nevyu\u017e\u00edvaj\u00ed, co\u017e zaji\u0161\u0165uje efektivn\u00ed vyu\u017eit\u00ed zdroj\u016f a minimalizuje pl\u00fdtv\u00e1n\u00ed pam\u011bt\u00ed.",
        sectionNumber: "12.1.22",
        sectionTitle: "Memory Ballooning",
      },
      {
        uuid: "7d1068a5-c09e-4cb5-8048-6fcf210c6f2d",
        correct:
          "V situac\u00edch, kdy virtu\u00e1ln\u00ed stroj zaznamen\u00e1 do\u010dasn\u00fd n\u00e1r\u016fst po\u017eadavk\u016f na pam\u011b\u0165 a n\u00e1sledn\u011b pam\u011b\u0165 ji\u017e nepot\u0159ebuje, opera\u010dn\u00ed syst\u00e9m uvnit\u0159 virtu\u00e1ln\u00edho stroje typicky dr\u017e\u00ed alokovanou pam\u011b\u0165 i nad\u00e1le, proto\u017ee standardn\u00ed opera\u010dn\u00ed syst\u00e9my nemaj\u00ed koncept de-alokace fyzick\u00e9 pam\u011bti pro hypervisor.",
        incorrect:
          "V situac\u00edch, kdy virtu\u00e1ln\u00ed stroj zaznamen\u00e1 do\u010dasn\u00fd n\u00e1r\u016fst po\u017eadavk\u016f na pam\u011b\u0165 a n\u00e1sledn\u011b pam\u011b\u0165 ji\u017e nepot\u0159ebuje, opera\u010dn\u00ed syst\u00e9m uvnit\u0159 virtu\u00e1ln\u00edho stroje automaticky uvoln\u00ed p\u0159ebyte\u010dnou pam\u011b\u0165 zp\u011bt hypervisoru, proto\u017ee modern\u00ed opera\u010dn\u00ed syst\u00e9my jsou navr\u017eeny s ohledem na efektivn\u00ed spr\u00e1vu pam\u011bti ve virtualizovan\u00e9m prost\u0159ed\u00ed.",
        sectionNumber: "12.1.22",
        sectionTitle: "Memory Ballooning",
      },
      {
        uuid: "cf544f39-f5a1-48f0-aca9-9306343b5d80",
        correct:
          "Pro \u0159e\u0161en\u00ed probl\u00e9mu s neefektivn\u00edm dr\u017een\u00edm pam\u011bti virtu\u00e1ln\u00edmi stroji se pou\u017e\u00edv\u00e1 technika 'memory ballooning', kter\u00e1 spo\u010d\u00edv\u00e1 v pou\u017eit\u00ed speci\u00e1ln\u00edho ovlada\u010de uvnit\u0159 virtu\u00e1ln\u00edho stroje, jen\u017e odmapuje pam\u011b\u0165 z pohledu hosta a vrac\u00ed ji hypervisoru k potenci\u00e1ln\u00edmu vyu\u017eit\u00ed jin\u00fdmi virtu\u00e1ln\u00edmi stroji.",
        incorrect:
          "Pro \u0159e\u0161en\u00ed probl\u00e9mu s neefektivn\u00edm dr\u017een\u00edm pam\u011bti virtu\u00e1ln\u00edmi stroji se pou\u017e\u00edv\u00e1 technika 'memory swapping', kter\u00e1 spo\u010d\u00edv\u00e1 ve swapov\u00e1n\u00ed pam\u011b\u0165ov\u00fdch str\u00e1nek na disk uvnit\u0159 virtu\u00e1ln\u00edho stroje, \u010d\u00edm\u017e se uvoln\u00ed fyzick\u00e1 pam\u011b\u0165 pro hypervisor a zlep\u0161\u00ed se celkov\u00e1 v\u00fdkonnost virtualizovan\u00e9ho prost\u0159ed\u00ed.",
        sectionNumber: "12.1.22",
        sectionTitle: "Memory Ballooning",
      },
      {
        uuid: "f4e9acde-bf39-4932-9d07-37e940dcd982",
        correct:
          "Memory ballooning driver, b\u011b\u017e\u00edc\u00ed na stran\u011b hosta, funguje na principu odmapov\u00e1n\u00ed 'fyzick\u00e9' pam\u011bti z pohledu virtu\u00e1ln\u00edho stroje, co\u017e znamen\u00e1, \u017ee data v t\u00e9to pam\u011bti jsou pro hosta ztracena, a tato pam\u011b\u0165 je n\u00e1sledn\u011b vr\u00e1cena hostitelsk\u00e9mu opera\u010dn\u00edmu syst\u00e9mu, tedy hypervisoru.",
        incorrect:
          "Memory ballooning driver, b\u011b\u017e\u00edc\u00ed na stran\u011b hosta, funguje na principu komprese pam\u011bti uvnit\u0159 virtu\u00e1ln\u00edho stroje, co\u017e znamen\u00e1, \u017ee data v pam\u011bti jsou zachov\u00e1na, ale zmen\u0161ena, a uvoln\u011bn\u00e1 pam\u011b\u0165 je n\u00e1sledn\u011b transparentn\u011b sd\u00edlena s hostitelsk\u00fdm opera\u010dn\u00edm syst\u00e9mem bez ztr\u00e1ty dat pro hosta.",
        sectionNumber: "12.1.22",
        sectionTitle: "Memory Ballooning",
      },
      {
        uuid: "fbf09183-7188-46ba-a5d2-dd2232d36cb8",
        correct:
          "Kontejnery vyu\u017e\u00edvaj\u00ed virtualizaci na \u00farovni opera\u010dn\u00edho syst\u00e9mu, kter\u00e1 je zalo\u017eena p\u0159edev\u0161\u00edm na procesech, a roz\u0161i\u0159uj\u00ed ji o dodate\u010dnou izolaci, umo\u017e\u0148uj\u00edc\u00ed skupin\u00e1m proces\u016f sd\u00edlet nap\u0159\u00edklad s\u00ed\u0165ov\u00fd z\u00e1sobn\u00edk, kter\u00fd je odd\u011blen\u00fd od s\u00ed\u0165ov\u00e9ho z\u00e1sobn\u00edku jin\u00fdch skupin proces\u016f, p\u0159i\u010dem\u017e oba z\u00e1sobn\u00edky b\u011b\u017e\u00ed na stejn\u00e9m hardwaru, ale maj\u00ed odd\u011blen\u00e9 IP adresy a sm\u011brovac\u00ed tabulky.",
        incorrect:
          "Kontejnery vyu\u017e\u00edvaj\u00ed virtualizaci na \u00farovni opera\u010dn\u00edho syst\u00e9mu, kter\u00e1 je zalo\u017eena p\u0159edev\u0161\u00edm na procesech, ale neroz\u0161i\u0159uj\u00ed ji o dodate\u010dnou izolaci. Skupiny proces\u016f v kontejnerech sd\u00edlej\u00ed stejn\u00fd s\u00ed\u0165ov\u00fd z\u00e1sobn\u00edk jako v\u0161echny ostatn\u00ed procesy v hostitelsk\u00e9m syst\u00e9mu, co\u017e znamen\u00e1, \u017ee v\u0161echny kontejnery a hostitelsk\u00fd syst\u00e9m sd\u00edlej\u00ed stejn\u00e9 IP adresy a sm\u011brovac\u00ed tabulky a b\u011b\u017e\u00ed na stejn\u00e9m hardwaru.",
        sectionNumber: "12.2.1",
        sectionTitle: "What are Containers?",
      },
      {
        uuid: "31d53b98-0981-41a8-872b-ede19a0bc3ef",
        correct:
          "Virtualizace na \u00farovni opera\u010dn\u00edho syst\u00e9mu, jakou vyu\u017e\u00edvaj\u00ed kontejnery, se projevuje nap\u0159\u00edklad virtualizac\u00ed s\u00ed\u0165ov\u00e9ho z\u00e1sobn\u00edku a omezen\u00edm p\u0159\u00edstupu k souborov\u00e9mu syst\u00e9mu, p\u0159i\u010dem\u017e kontejnery nejsou kompletn\u00ed virtu\u00e1ln\u00ed po\u010d\u00edta\u010de, ale sp\u00ed\u0161e vylep\u0161en\u00e9 procesy, kter\u00e9 sd\u00edlej\u00ed j\u00e1dro opera\u010dn\u00edho syst\u00e9mu hostitele, ale maj\u00ed izolovan\u00e9 procesn\u00ed tabulky a u\u017eivatelsk\u00e9 mapov\u00e1n\u00ed.",
        incorrect:
          "Virtualizace na \u00farovni opera\u010dn\u00edho syst\u00e9mu, jakou vyu\u017e\u00edvaj\u00ed kontejnery, se projevuje pouze virtualizac\u00ed aplikac\u00ed a nikoliv virtualizac\u00ed s\u00ed\u0165ov\u00e9ho z\u00e1sobn\u00edku nebo omezen\u00edm p\u0159\u00edstupu k souborov\u00e9mu syst\u00e9mu. Kontejnery jsou kompletn\u00ed virtu\u00e1ln\u00ed po\u010d\u00edta\u010de s vlastn\u00edm j\u00e1drem opera\u010dn\u00edho syst\u00e9mu, kter\u00e9 jsou pln\u011b izolovan\u00e9 od hostitelsk\u00e9ho syst\u00e9mu, v\u010detn\u011b sd\u00edlen\u00ed procesn\u00edch tabulek a u\u017eivatelsk\u00e9ho mapov\u00e1n\u00ed.",
        sectionNumber: "12.2.1",
        sectionTitle: "What are Containers?",
      },
      {
        uuid: "99d8ca63-ab2b-4ded-91ec-39f0181c5e1c",
        correct:
          "Mezi mechanismy virtualizace na \u00farovni opera\u010dn\u00edho syst\u00e9mu, kter\u00e9 kontejnery vyu\u017e\u00edvaj\u00ed, pat\u0159\u00ed odd\u011blen\u00ed p\u0159\u00edstupu k souborov\u00e9mu syst\u00e9mu pomoc\u00ed n\u00e1stroj\u016f jako chroot, separace u\u017eivatelsk\u00e9ho mapov\u00e1n\u00ed a izolace procesn\u00edch tabulek, co\u017e umo\u017e\u0148uje kontejner\u016fm b\u011b\u017eet izolovan\u011b od sebe a od hostitelsk\u00e9ho syst\u00e9mu v r\u00e1mci jednoho opera\u010dn\u00edho syst\u00e9mu.",
        incorrect:
          "Mezi mechanismy virtualizace na \u00farovni opera\u010dn\u00edho syst\u00e9mu, kter\u00e9 kontejnery vyu\u017e\u00edvaj\u00ed, pat\u0159\u00ed pouze zm\u011bna jmenn\u00e9ho prostoru proces\u016f, ale nikoliv odd\u011blen\u00ed p\u0159\u00edstupu k souborov\u00e9mu syst\u00e9mu, separace u\u017eivatelsk\u00e9ho mapov\u00e1n\u00ed nebo izolace procesn\u00edch tabulek. Kontejnery sd\u00edlej\u00ed stejn\u00fd souborov\u00fd syst\u00e9m, u\u017eivatelsk\u00e9 mapov\u00e1n\u00ed a procesn\u00ed tabulky s hostitelsk\u00fdm syst\u00e9mem, co\u017e omezuje jejich izolaci.",
        sectionNumber: "12.2.1",
        sectionTitle: "What are Containers?",
      },
      {
        uuid: "2293a038-6eb8-4973-a565-4777b9d77d4d",
        correct:
          "Jednou z kl\u00ed\u010dov\u00fdch v\u00fdhod kontejner\u016f je jejich efektivn\u00ed vyu\u017eit\u00ed zdroj\u016f, dosa\u017een\u00e9 sd\u00edlen\u00edm jedin\u00e9ho j\u00e1dra mezi v\u00edce kontejnery. Toto sd\u00edlen\u00ed j\u00e1dra umo\u017e\u0148uje kontejner\u016fm sd\u00edlet pam\u011b\u0165, zejm\u00e9na pro b\u011b\u017en\u00e9 knihovny a spustiteln\u00fd k\u00f3d, co\u017e vede k ni\u017e\u0161\u00ed re\u017eii ve srovn\u00e1n\u00ed s virtu\u00e1ln\u00edmi stroji.",
        incorrect:
          "Kontejnery i virtu\u00e1ln\u00ed stroje spol\u00e9haj\u00ed na samostatn\u00e1 j\u00e1dra pro ka\u017edou instanci, co\u017e znemo\u017e\u0148uje efektivn\u00ed sd\u00edlen\u00ed pam\u011bti mezi nimi. Tato izolace zaji\u0161\u0165uje siln\u00e9 bezpe\u010dnostn\u00ed hranice, ale m\u00e1 za n\u00e1sledek srovnatelnou re\u017eii zdroj\u016f pro kontejnerizovan\u00e1 i virtualizovan\u00e1 prost\u0159ed\u00ed.",
        sectionNumber: "12.2.2",
        sectionTitle: "Why Containers",
      },
      {
        uuid: "1cfee4c4-c5a5-4a8c-a658-1cd90bed75d5",
        correct:
          "Z\u00e1sadn\u00ed architektonick\u00fd rozd\u00edl mezi virtu\u00e1ln\u00edmi stroji a kontejnery spo\u010d\u00edv\u00e1 ve spr\u00e1v\u011b j\u00e1dra. Ka\u017ed\u00fd virtu\u00e1ln\u00ed stroj vy\u017eaduje vlastn\u00ed vyhrazenou instanci j\u00e1dra, zat\u00edmco kontejnery jsou naopak navr\u017eeny tak, aby sd\u00edlely jedin\u00e9 j\u00e1dro poskytovan\u00e9 hostitelsk\u00fdm opera\u010dn\u00edm syst\u00e9mem, co\u017e p\u0159isp\u00edv\u00e1 k jejich efektivit\u011b a rychlosti.",
        incorrect:
          "Virtu\u00e1ln\u00ed stroje i kontejnery funguj\u00ed na principu sd\u00edlen\u00ed j\u00e1dra, kdy v\u00edce instanc\u00ed sd\u00edl\u00ed jedin\u00e9 j\u00e1dro za \u00fa\u010delem optimalizace vyu\u017eit\u00ed zdroj\u016f. Tato architektura sd\u00edlen\u00e9ho j\u00e1dra je definuj\u00edc\u00ed charakteristikou obou virtualiza\u010dn\u00edch technologi\u00ed, kter\u00e1 zaji\u0161\u0165uje efektivn\u00ed provoz syst\u00e9mu.",
        sectionNumber: "12.2.2",
        sectionTitle: "Why Containers",
      },
      {
        uuid: "cea6ec20-e04c-4dbb-b7c3-e317b0fedbc8",
        correct:
          "V hierarchii \u00farovn\u00ed izolace p\u0159edstavuj\u00ed kontejnery odli\u0161nou \u00farove\u0148 izolace um\u00edst\u011bnou mezi izolac\u00ed na \u00farovni u\u017eivatele a \u00faplnou izolac\u00ed virtu\u00e1ln\u00edho stroje. To znamen\u00e1, \u017ee kontejnery nab\u00edzej\u00ed vy\u0161\u0161\u00ed stupe\u0148 izolace ne\u017e jednotliv\u00e9 u\u017eivatelsk\u00e9 procesy, ale men\u0161\u00ed ne\u017e kompletn\u011b odd\u011blen\u00e9 virtu\u00e1ln\u00ed stroje, \u010d\u00edm\u017e poskytuj\u00ed vyv\u00e1\u017een\u00fd p\u0159\u00edstup k bezpe\u010dnosti a spr\u00e1v\u011b zdroj\u016f.",
        incorrect:
          "Kontejnery nep\u0159edstavuj\u00ed odli\u0161nou \u00farove\u0148 izolace, ale sp\u00ed\u0161e funguj\u00ed na stejn\u00e9 \u00farovni izolace jako virtu\u00e1ln\u00ed stroje, poskytuj\u00edce kompletn\u00ed virtualizaci na \u00farovni hardwaru. Ob\u011b technologie nab\u00edzej\u00ed robustn\u00ed izolaci, efektivn\u011b odd\u011bluj\u00edc\u00ed instance od sebe i od hostitelsk\u00e9ho syst\u00e9mu na fundament\u00e1ln\u00ed \u00farovni.",
        sectionNumber: "12.2.2",
        sectionTitle: "Why Containers",
      },
      {
        uuid: "8cf7b4b1-332a-4e11-b541-7446ed761965",
        correct:
          "Zat\u00edmco spu\u0161t\u011bn\u00ed lehk\u00e9ho virtu\u00e1ln\u00edho stroje obvykle trv\u00e1 \u0159\u00e1dov\u011b sekundy, kontejner m\u016f\u017ee b\u00fdt spu\u0161t\u011bn za m\u00e9n\u011b ne\u017e 50 milisekund, co\u017e z kontejner\u016f \u010din\u00ed v\u00fdrazn\u011b rychlej\u0161\u00ed alternativu pro rychl\u00e9 nasazen\u00ed aplikac\u00ed a slu\u017eeb, zejm\u00e9na v prost\u0159ed\u00edch, kde je kl\u00ed\u010dov\u00e1 rychlost spou\u0161t\u011bn\u00ed.",
        incorrect:
          "Zat\u00edmco spu\u0161t\u011bn\u00ed kontejneru obvykle trv\u00e1 \u0159\u00e1dov\u011b sekundy, lehk\u00e9 virtu\u00e1ln\u00ed stroje, d\u00edky sv\u00e9 optimalizovan\u00e9 architektu\u0159e a sd\u00edlen\u00ed j\u00e1dra hostitelsk\u00e9ho syst\u00e9mu, mohou b\u00fdt spu\u0161t\u011bny za m\u00e9n\u011b ne\u017e 50 milisekund, co\u017e z virtu\u00e1ln\u00edch stroj\u016f \u010din\u00ed v\u00fdrazn\u011b rychlej\u0161\u00ed alternativu pro rychl\u00e9 nasazen\u00ed aplikac\u00ed a slu\u017eeb.",
        sectionNumber: "12.2.3",
        sectionTitle: "Boot Time",
      },
      {
        uuid: "29cff23f-be77-41b3-a2f6-daba57e15887",
        correct:
          "Podle dostupn\u00fdch informac\u00ed, dokonce i bez zohledn\u011bn\u00ed p\u0159\u00edpravy diskov\u00fdch obraz\u016f, je kontejner p\u0159i samotn\u00e9m bootov\u00e1n\u00ed a\u017e dvacetkr\u00e1t rychlej\u0161\u00ed ne\u017e b\u011b\u017en\u00fd virtu\u00e1ln\u00ed stroj, s v\u00fdjimkou exokernel\u016f a podobn\u00fdch minimalistick\u00fdch opera\u010dn\u00edch syst\u00e9m\u016f, kter\u00e9 mohou dosahovat srovnateln\u00e9 rychlosti startu.",
        incorrect:
          "Podle dostupn\u00fdch informac\u00ed, dokonce i bez zohledn\u011bn\u00ed p\u0159\u00edpravy diskov\u00fdch obraz\u016f, je kontejner p\u0159i samotn\u00e9m bootov\u00e1n\u00ed pouze dvakr\u00e1t rychlej\u0161\u00ed ne\u017e b\u011b\u017en\u00fd virtu\u00e1ln\u00ed stroj, co\u017e nazna\u010duje, \u017ee rozd\u00edl v rychlosti startu mezi kontejnery a virtu\u00e1ln\u00edmi stroji nen\u00ed tak dramatick\u00fd, jak se \u010dasto tvrd\u00ed.",
        sectionNumber: "12.2.3",
        sectionTitle: "Boot Time",
      },
      {
        uuid: "6aab692e-8798-4dd3-8506-e7883bbb64fa",
        correct:
          "Virtu\u00e1ln\u00ed stroje, na rozd\u00edl od kontejner\u016f, nab\u00edzej\u00ed mo\u017enost pozastaven\u00ed a n\u00e1sledn\u00e9ho obnoven\u00ed b\u011b\u017e\u00edc\u00edho stavu, co\u017e umo\u017e\u0148uje efektivn\u00ed spr\u00e1vu zdroj\u016f a rychl\u00e9 p\u0159ep\u00edn\u00e1n\u00ed mezi r\u016fzn\u00fdmi pracovn\u00edmi prost\u0159ed\u00edmi, a je kl\u00ed\u010dov\u00e9 pro sc\u00e9n\u00e1\u0159e vy\u017eaduj\u00edc\u00ed flexibilitu a okam\u017eitou dostupnost d\u0159\u00edve spu\u0161t\u011bn\u00fdch syst\u00e9m\u016f.",
        incorrect:
          "Kontejnery, na rozd\u00edl od virtu\u00e1ln\u00edch stroj\u016f, nab\u00edzej\u00ed mo\u017enost pozastaven\u00ed a n\u00e1sledn\u00e9ho obnoven\u00ed b\u011b\u017e\u00edc\u00edho stavu, co\u017e umo\u017e\u0148uje efektivn\u00ed spr\u00e1vu zdroj\u016f a rychl\u00e9 p\u0159ep\u00edn\u00e1n\u00ed mezi r\u016fzn\u00fdmi pracovn\u00edmi prost\u0159ed\u00edmi, a je kl\u00ed\u010dov\u00e9 pro sc\u00e9n\u00e1\u0159e vy\u017eaduj\u00edc\u00ed flexibilitu a okam\u017eitou dostupnost d\u0159\u00edve spu\u0161t\u011bn\u00fdch syst\u00e9m\u016f.",
        sectionNumber: "12.2.3",
        sectionTitle: "Boot Time",
      },
      {
        uuid: "4f24c086-7897-40d2-a4fc-d4625bb18144",
        correct:
          "I kdy\u017e virtu\u00e1ln\u00ed stroje nab\u00edzej\u00ed v\u00fdhody jako izolaci a mo\u017enost pozastaven\u00ed, je d\u016fle\u017eit\u00e9 si uv\u011bdomit, \u017ee i neaktivn\u00ed, takzvan\u011b dormantn\u00ed virtu\u00e1ln\u00ed stroje, spot\u0159ebov\u00e1vaj\u00ed zna\u010dn\u00e9 mno\u017estv\u00ed diskov\u00e9ho prostoru, co\u017e m\u016f\u017ee b\u00fdt limituj\u00edc\u00edm faktorem v prost\u0159ed\u00edch s omezen\u00fdmi \u00falo\u017en\u00fdmi kapacitami.",
        incorrect:
          "I kdy\u017e virtu\u00e1ln\u00ed stroje nab\u00edzej\u00ed v\u00fdhody jako izolaci a mo\u017enost pozastaven\u00ed, je d\u016fle\u017eit\u00e9 si uv\u011bdomit, \u017ee neaktivn\u00ed, takzvan\u011b dormantn\u00ed virtu\u00e1ln\u00ed stroje, spot\u0159ebov\u00e1vaj\u00ed jen minim\u00e1ln\u00ed mno\u017estv\u00ed diskov\u00e9ho prostoru, srovnateln\u00e9 s kontejnery, d\u00edky efektivn\u00ed spr\u00e1v\u011b pam\u011bti a \u00falo\u017en\u00fdch zdroj\u016f.",
        sectionNumber: "12.2.3",
        sectionTitle: "Boot Time",
      },
      {
        uuid: "9491ee8a-54a9-4c63-b1b8-40c41b35cc43",
        correct:
          "Syst\u00e9m chroot umo\u017e\u0148uje spou\u0161t\u011bn\u00ed v\u00edce instanc\u00ed opera\u010dn\u00edho syst\u00e9mu pod jedn\u00edm j\u00e1drem, konkr\u00e9tn\u011b u\u017eivatelsk\u00fdch prostor\u016f, ale sd\u00edlen\u00ed syst\u00e9mov\u00fdch prost\u0159edk\u016f jako jsou procesn\u00ed tabulky a s\u00ed\u0165 br\u00e1n\u00ed tomu, aby byl chroot pova\u017eov\u00e1n za plnohodnotn\u00fd kontejnerov\u00fd syst\u00e9m.",
        incorrect:
          "Syst\u00e9m chroot, i kdy\u017e umo\u017e\u0148uje spou\u0161t\u011bn\u00ed v\u00edce instanc\u00ed opera\u010dn\u00edho syst\u00e9mu pod jedn\u00edm j\u00e1drem a izoluje u\u017eivatelsk\u00e9 prostory, je pova\u017eov\u00e1n za plnohodnotn\u00fd kontejnerov\u00fd syst\u00e9m d\u00edky efektivn\u00ed izolaci procesn\u00edch tabulek a s\u00ed\u0165ov\u00fdch prost\u0159edk\u016f.",
        sectionNumber: "12.2.4",
        sectionTitle: "\u2039chroot\u203a",
      },
      {
        uuid: "7cdee597-8086-41f9-a7da-8c82eb89f662",
        correct:
          "V pseudo-kontejnerech vytvo\u0159en\u00fdch pomoc\u00ed chroot, kv\u016fli sd\u00edlen\u00ed s\u00ed\u0165ov\u00fdch prost\u0159edk\u016f, je nemo\u017en\u00e9 provozovat dva nez\u00e1visl\u00e9 webov\u00e9 servery na stejn\u00e9m portu a superu\u017eivatel uvnit\u0159 chroot prost\u0159ed\u00ed m\u00e1 potenci\u00e1l z\u00edskat superu\u017eivatelsk\u00e1 pr\u00e1va i mimo toto prost\u0159ed\u00ed.",
        incorrect:
          "V pseudo-kontejnerech vytvo\u0159en\u00fdch pomoc\u00ed chroot je mo\u017en\u00e9 provozovat dva nez\u00e1visl\u00e9 webov\u00e9 servery na stejn\u00e9m portu a superu\u017eivatel uvnit\u0159 chroot prost\u0159ed\u00ed je pln\u011b izolov\u00e1n a nem\u016f\u017ee z\u00edskat superu\u017eivatelsk\u00e1 pr\u00e1va mimo toto prost\u0159ed\u00ed.",
        sectionNumber: "12.2.4",
        sectionTitle: "\u2039chroot\u203a",
      },
      {
        uuid: "3db93913-21f0-402c-9fe9-22d2b9ade68a",
        correct:
          "A\u010dkoliv syst\u00e9m chroot poskytuje kontejner\u016fm vlastn\u00ed pohled na syst\u00e9m soubor\u016f, v\u010detn\u011b syst\u00e9mov\u00fdch knihoven a utilit, kl\u00ed\u010dov\u00e9 syst\u00e9mov\u00e9 zdroje jako procesn\u00ed tabulky a s\u00ed\u0165ov\u00e9 rozhran\u00ed z\u016fst\u00e1vaj\u00ed sd\u00edlen\u00e9 mezi v\u0161emi pseudo-kontejnery.",
        incorrect:
          "Syst\u00e9m chroot poskytuje kontejner\u016fm vlastn\u00ed pohled nejen na syst\u00e9m soubor\u016f, ale tak\u00e9 na v\u0161echny kl\u00ed\u010dov\u00e9 syst\u00e9mov\u00e9 zdroje, v\u010detn\u011b procesn\u00edch tabulek a s\u00ed\u0165ov\u00fdch rozhran\u00ed, \u010d\u00edm\u017e zaji\u0161\u0165uje plnohodnotnou izolaci mezi kontejnery.",
        sectionNumber: "12.2.4",
        sectionTitle: "\u2039chroot\u203a",
      },
      {
        uuid: "c2eca5bc-afc0-4d49-8b64-260b7095e044",
        correct:
          "Mechanismus FreeBSD jail je evoluc\u00ed chroot a roz\u0161i\u0159uje jeho funk\u010dnost p\u0159id\u00e1n\u00edm izolace u\u017eivatel\u016f a procesn\u00edch tabulek, co\u017e chrootu chyb\u011blo. Tato vylep\u0161en\u00ed umo\u017e\u0148uj\u00ed vytv\u00e1\u0159et bezpe\u010dn\u011bj\u0161\u00ed a izolovan\u011bj\u0161\u00ed prost\u0159ed\u00ed pro b\u011bh aplikac\u00ed.",
        incorrect:
          "Mechanismus FreeBSD jail je pouh\u00fdm p\u0159ejmenov\u00e1n\u00edm chroot a nep\u0159in\u00e1\u0161\u00ed \u017e\u00e1dn\u00e9 v\u00fdznamn\u00e9 funk\u010dn\u00ed roz\u0161\u00ed\u0159en\u00ed krom\u011b zm\u011bny n\u00e1zvu. Jeho funkcionalita z\u016fst\u00e1v\u00e1 v podstat\u011b identick\u00e1 s p\u016fvodn\u00edm chroot, pouze s nov\u00fdm marketingov\u00fdm ozna\u010den\u00edm.",
        sectionNumber: "12.2.5",
        sectionTitle: "BSD Jails",
      },
      {
        uuid: "6df5515e-b0b1-46cb-9b53-6632ccfcc710",
        correct:
          "Jednou z kl\u00ed\u010dov\u00fdch vlastnost\u00ed FreeBSD jail je virtualizovan\u00fd s\u00ed\u0165ov\u00fd z\u00e1sobn\u00edk, kter\u00fd umo\u017e\u0148uje ka\u017ed\u00e9mu jailu m\u00edt vlastn\u00ed IP adresu. Tato vlastnost z\u00e1sadn\u011b p\u0159isp\u00edv\u00e1 k izolaci s\u00edtov\u00fdch operac\u00ed jednotliv\u00fdch jail\u016f a zvy\u0161uje flexibilitu s\u00ed\u0165ov\u00e9 konfigurace.",
        incorrect:
          "P\u0159esto\u017ee FreeBSD jail nab\u00edz\u00ed virtualizaci s\u00edt\u011b, neumo\u017e\u0148uje, aby m\u011bl ka\u017ed\u00fd jail svou vlastn\u00ed IP adresu. Konfigurace s\u00edt\u011b pro jail vy\u017eaduje slo\u017eit\u00e1 nastaven\u00ed a sd\u00edlen\u00ed IP adres mezi jaily, co\u017e omezuje izolaci s\u00edtov\u00fdch operac\u00ed.",
        sectionNumber: "12.2.5",
        sectionTitle: "BSD Jails",
      },
      {
        uuid: "e132f5a0-5f66-4170-8aa3-6543edd9aeb3",
        correct:
          "FreeBSD jail je navr\u017een tak, aby omezoval pravomoci u\u017eivatele 'root' uvnit\u0159 jailu a zabra\u0148oval eskalaci privilegi\u00ed mimo tento jail. To je kl\u00ed\u010dov\u00fd bezpe\u010dnostn\u00ed prvek, kter\u00fd br\u00e1n\u00ed z\u00edsk\u00e1n\u00ed neopr\u00e1vn\u011bn\u00e9ho p\u0159\u00edstupu k hostitelsk\u00e9mu syst\u00e9mu zevnit\u0159 jailu.",
        incorrect:
          "FreeBSD jail, i kdy\u017e \u010d\u00e1ste\u010dn\u011b omezuje n\u011bkter\u00e9 mo\u017enosti u\u017eivatele 'root', st\u00e1le umo\u017e\u0148uje u\u017eivateli 'root' uvnit\u0159 jailu snadno z\u00edskat pln\u00e1 syst\u00e9mov\u00e1 opr\u00e1vn\u011bn\u00ed mimo tento jail, co\u017e p\u0159edstavuje v\u00fdznamn\u00e9 bezpe\u010dnostn\u00ed riziko pro hostitelsk\u00fd syst\u00e9m.",
        sectionNumber: "12.2.5",
        sectionTitle: "BSD Jails",
      },
      {
        uuid: "3b70c0ba-b29c-4e6a-8867-141f29fa6455",
        correct:
          "FreeBSD jail je pova\u017eov\u00e1n za jedno z nejstar\u0161\u00edch open-source kontejneriza\u010dn\u00edch \u0159e\u0161en\u00ed, a to d\u00edky sv\u00e9 dlouh\u00e9 historii a v\u00fdvoji v r\u00e1mci opera\u010dn\u00edho syst\u00e9mu FreeBSD. Jeho koncepty a principy inspirovaly mnoh\u00e9 modern\u00ed kontejneriza\u010dn\u00ed technologie, kter\u00e9 se objevily pozd\u011bji.",
        incorrect:
          "FreeBSD jail je relativn\u011b nov\u00e1 kontejneriza\u010dn\u00ed technologie, kter\u00e1 byla vyvinuta teprve ned\u00e1vno s c\u00edlem reagovat na modern\u00ed pot\u0159eby kontejnerizace a cloudov\u00fdch prost\u0159ed\u00ed. Jeho v\u00fdvoj prob\u00edh\u00e1 paraleln\u011b s modern\u00edmi trendy v oblasti virtualizace a IT.",
        sectionNumber: "12.2.5",
        sectionTitle: "BSD Jails",
      },
      {
        uuid: "2363ecd1-d859-4b7f-a32b-0ceab6a6492f",
        correct:
          "Linuxov\u00e9 namespaces, kter\u00e9 byly nakonec p\u0159id\u00e1ny do ofici\u00e1ln\u00edho j\u00e1dra Linuxu, umo\u017e\u0148uj\u00ed jemnozrnnou virtualizaci opera\u010dn\u00edho syst\u00e9mu t\u00edm, \u017ee odd\u011bluj\u00ed r\u016fzn\u00e9 aspekty, jako je souborov\u00fd syst\u00e9m, procesn\u00ed tabulky a s\u00ed\u0165ov\u00e9 rozhran\u00ed, pro ka\u017ed\u00fd kontejner, \u010d\u00edm\u017e poskytuj\u00ed robustn\u011bj\u0161\u00ed izolaci ne\u017e star\u0161\u00ed \u0159e\u0161en\u00ed jako VServer.",
        incorrect:
          "Linuxov\u00e9 namespaces, kter\u00e9 byly p\u0159id\u00e1ny do ofici\u00e1ln\u00edho j\u00e1dra Linuxu, virtualizuj\u00ed pouze s\u00ed\u0165ov\u00e9 rozhran\u00ed a procesn\u00ed tabulky, ale nesd\u00edlej\u00ed souborov\u00fd syst\u00e9m mezi kontejnery, co\u017e omezuje flexibilitu a efektivitu kontejnerizace v porovn\u00e1n\u00ed s \u0159e\u0161en\u00edmi jako VServer.",
        sectionNumber: "12.2.6",
        sectionTitle: "Namespaces",
      },
      {
        uuid: "957639e5-8fae-414a-82c0-6e096f8bea17",
        correct:
          "Projekt VServer, kter\u00fd se sna\u017eil o implementaci kontejnerizace podobn\u00e9 BSD jails v Linuxu, p\u0159edch\u00e1zel zaveden\u00ed namespaces do hlavn\u00edho j\u00e1dra Linuxu a byl distribuov\u00e1n jako sada patch\u016f t\u0159et\u00ed strany, proto\u017ee nebyl okam\u017eit\u011b p\u0159ijat do ofici\u00e1ln\u00ed verze kernelu.",
        incorrect:
          "Projekt VServer, kter\u00fd byl okam\u017eit\u011b p\u0159ijat do hlavn\u00edho j\u00e1dra Linuxu a stal se standardn\u00edm \u0159e\u0161en\u00edm pro kontejnerizaci, byl zalo\u017een na namespaces a byl distribuov\u00e1n jako ofici\u00e1ln\u00ed sou\u010d\u00e1st kernelu od sv\u00e9ho vzniku.",
        sectionNumber: "12.2.6",
        sectionTitle: "Namespaces",
      },
      {
        uuid: "6998aef8-eb32-475c-b81e-0922ffb6e7c0",
        correct:
          "P\u0159esto\u017ee VServer nab\u00edzel formu kontejnerizace v Linuxu d\u0159\u00edve ne\u017e namespaces, poskytoval pouze \u010d\u00e1ste\u010dnou izolaci pro u\u017eivatele root v jailu, co\u017e znamenalo, \u017ee potenci\u00e1ln\u00ed bezpe\u010dnostn\u00ed rizika nebyla zcela eliminov\u00e1na ve srovn\u00e1n\u00ed s pozd\u011bj\u0161\u00edmi \u0159e\u0161en\u00edmi zalo\u017een\u00fdmi na namespaces.",
        incorrect:
          "VServer, i kdy\u017e byl d\u0159\u00edv\u011bj\u0161\u00edm \u0159e\u0161en\u00edm kontejnerizace v Linuxu ne\u017e namespaces, poskytoval plnou izolaci pro u\u017eivatele root v jailu, \u010d\u00edm\u017e efektivn\u011b eliminoval ve\u0161ker\u00e1 bezpe\u010dnostn\u00ed rizika spojen\u00e1 s sd\u00edlen\u00edm syst\u00e9mu mezi r\u016fzn\u00fdmi kontejnery.",
        sectionNumber: "12.2.6",
        sectionTitle: "Namespaces",
      },
      {
        uuid: "fc017cb9-4e3d-44f4-a241-9153d49633a7",
        correct:
          "V opera\u010dn\u00edm syst\u00e9mu Linux, kontroln\u00ed skupiny (cgroups) slou\u017e\u00ed jako mechanismus pro \u0159\u00edzen\u00ed a omezov\u00e1n\u00ed spot\u0159eby syst\u00e9mov\u00fdch prost\u0159edk\u016f, jako je CPU a pam\u011b\u0165, pro skupiny proces\u016f, \u010d\u00edm\u017e umo\u017e\u0148uj\u00ed efektivn\u00ed izolaci a spravedliv\u00e9 sd\u00edlen\u00ed hardwarov\u00fdch zdroj\u016f mezi r\u016fzn\u00fdmi kontejnery a aplikacemi. Tato funk\u010dnost je kl\u00ed\u010dov\u00e1 pro spr\u00e1vu v\u00fdkonu a stabilitu syst\u00e9mu.",
        incorrect:
          "V opera\u010dn\u00edm syst\u00e9mu Linux, kontroln\u00ed skupiny (cgroups) prim\u00e1rn\u011b slou\u017e\u00ed k \u0159\u00edzen\u00ed p\u0159\u00edstupu k syst\u00e9mov\u00fdm objekt\u016fm na \u00farovni opera\u010dn\u00edho syst\u00e9mu a nemaj\u00ed v\u00fdznamn\u00fd vliv na omezov\u00e1n\u00ed spot\u0159eby hardwarov\u00fdch zdroj\u016f, jako je CPU a pam\u011b\u0165, pro skupiny proces\u016f, p\u0159i\u010dem\u017e izolace zdroj\u016f je \u0159e\u0161ena v\u00fdhradn\u011b pomoc\u00ed jmenn\u00fdch prostor\u016f.",
        sectionNumber: "12.2.7",
        sectionTitle: "\u2039cgroups\u203a",
      },
      {
        uuid: "ae67fa98-a2a5-4694-b6bb-8224bb317f15",
        correct:
          "Krom\u011b jmenn\u00fdch prostor\u016f, kter\u00e9 izoluj\u00ed kontejnery v Linuxu z hlediska p\u0159\u00edstupu k syst\u00e9mov\u00fdm objekt\u016fm, jsou kontroln\u00ed skupiny (cgroups) dal\u0161\u00edm kl\u00ed\u010dov\u00fdm komponentem kontejnerizace, kter\u00fd umo\u017e\u0148uje omezit spot\u0159ebu hardwarov\u00fdch zdroj\u016f pro procesy b\u011b\u017e\u00edc\u00ed v kontejnerech, \u010d\u00edm\u017e se dosahuje komplexn\u00ed izolace a prevence negativn\u00edho ovlivn\u011bn\u00ed v\u00fdkonu jin\u00fdch kontejner\u016f nebo hostitelsk\u00e9ho syst\u00e9mu.",
        incorrect:
          "V kontextu Linuxov\u00fdch kontejner\u016f jsou kontroln\u00ed skupiny (cgroups) redundantn\u00ed a nemaj\u00ed \u017e\u00e1dn\u00fd vliv na izolaci spot\u0159eby syst\u00e9mov\u00fdch prost\u0159edk\u016f, jeliko\u017e jmenn\u00e9 prostory pln\u011b posta\u010duj\u00ed k zaji\u0161t\u011bn\u00ed izolace kontejner\u016f ve v\u0161ech aspektech, v\u010detn\u011b spr\u00e1vy a omezen\u00ed vyu\u017eit\u00ed CPU, pam\u011bti a dal\u0161\u00edch hardwarov\u00fdch zdroj\u016f.",
        sectionNumber: "12.2.7",
        sectionTitle: "\u2039cgroups\u203a",
      },
      {
        uuid: "9dc57916-b203-47be-8105-e5af9c7aca9c",
        correct:
          "LXC kontejnery, implementovan\u00e9 s vyu\u017eit\u00edm linuxov\u00fdch jmenn\u00fdch prostor\u016f a kontroln\u00edch skupin, p\u0159edstavuj\u00ed hlavn\u00ed proud kontejnerizace v Linuxu a nab\u00edzej\u00ed funkcionalitu srovnatelnou s VServer a OpenVZ, p\u0159i\u010dem\u017e n\u00e1stroje pro jejich spr\u00e1vu b\u011b\u017e\u00ed v u\u017eivatelsk\u00e9m prostoru opera\u010dn\u00edho syst\u00e9mu.",
        incorrect:
          "LXC kontejnery, implementovan\u00e9 s vyu\u017eit\u00edm linuxov\u00fdch jmenn\u00fdch prostor\u016f a virtualiza\u010dn\u00edch technologi\u00ed, nep\u0159edstavuj\u00ed hlavn\u00ed proud kontejnerizace v Linuxu a nab\u00edzej\u00ed funkcionalitu srovnatelnou s virtualiza\u010dn\u00edmi technologiemi, p\u0159i\u010dem\u017e n\u00e1stroje pro jejich spr\u00e1vu b\u011b\u017e\u00ed v j\u00e1d\u0159e opera\u010dn\u00edho syst\u00e9mu.",
        sectionNumber: "12.2.8",
        sectionTitle: "LXC",
      },
      {
        uuid: "219aa741-e0c2-46fb-afe4-52115dfbed0c",
        correct:
          "LXC, sada n\u00e1stroj\u016f v u\u017eivatelsk\u00e9m prostoru pro spr\u00e1vu kontejner\u016f, se objevil relativn\u011b ned\u00e1vno v roce 2008, sedm let po VServeru, a od verze 1.0 z roku 2014 umo\u017e\u0148uje odd\u011blen\u00ed superu\u017eivatele uvnit\u0159 kontejneru a spr\u00e1vu neprivilegovan\u00fdch kontejner\u016f b\u011b\u017en\u00fdmi u\u017eivateli, s ur\u010dit\u00fdmi omezen\u00edmi.",
        incorrect:
          "LXC, sada n\u00e1stroj\u016f v u\u017eivatelsk\u00e9m prostoru pro spr\u00e1vu kontejner\u016f, se objevil velmi d\u00e1vno v roce 2001, sedm let p\u0159ed VServerem, a ji\u017e od po\u010d\u00e1te\u010dn\u00ed verze z roku 2008 umo\u017e\u0148uje odd\u011blen\u00ed superu\u017eivatele uvnit\u0159 kontejneru a spr\u00e1vu neprivilegovan\u00fdch kontejner\u016f b\u011b\u017en\u00fdmi u\u017eivateli, bez jak\u00fdchkoliv omezen\u00ed.",
        sectionNumber: "12.2.8",
        sectionTitle: "LXC",
      },
      {
        uuid: "6c18636e-9a10-433d-99ec-7aefccfdbdd9",
        correct:
          "U\u017eivatelsk\u00e9 re\u017eimy jader p\u0159edstavuj\u00ed unik\u00e1tn\u00ed p\u0159\u00edstup k virtualizaci opera\u010dn\u00edch syst\u00e9m\u016f, nach\u00e1zej\u00edc\u00ed se koncep\u010dn\u011b mezi tradi\u010dn\u00edmi kontejnery a plnohodnotn\u00fdmi virtu\u00e1ln\u00edmi stroji, jeliko\u017e j\u00e1dro b\u011b\u017e\u00ed jako standardn\u00ed proces v u\u017eivatelsk\u00e9m prostoru jin\u00e9ho j\u00e1dra, p\u0159i\u010dem\u017e vyu\u017e\u00edvaj\u00ed paravirtualiza\u010dn\u00ed techniky neobvykl\u00fdm zp\u016fsobem k dosa\u017een\u00ed rovnov\u00e1hy mezi v\u00fdkonem a izolac\u00ed.",
        incorrect:
          "U\u017eivatelsk\u00e9 re\u017eimy jader jsou v podstat\u011b toto\u017en\u00e9 s tradi\u010dn\u00edmi kontejnery, nab\u00edzej\u00edc\u00ed srovnatelnou \u00farove\u0148 izolace a bezpe\u010dnosti p\u0159\u00edm\u00fdm sd\u00edlen\u00edm j\u00e1dra a zdroj\u016f hostitelsk\u00e9ho opera\u010dn\u00edho syst\u00e9mu, bez nutnosti paravirtualizace nebo b\u011bhu jako samostatn\u00fd proces v u\u017eivatelsk\u00e9m prostoru, co\u017e z nich \u010din\u00ed lehkou alternativu k virtu\u00e1ln\u00edm stroj\u016fm.",
        sectionNumber: "12.2.9",
        sectionTitle: "User-Mode Kernels",
      },
      {
        uuid: "beea6765-90bc-4e61-8f93-2c4be90c925d",
        correct:
          "Implementace u\u017eivatelsk\u00fdch re\u017eim\u016f jader, jako je User-Mode Linux, sah\u00e1 do ran\u00fdch let 21. stolet\u00ed, kdy byl User-Mode Linux integrov\u00e1n do j\u00e1dra Linux verze 2.6 v roce 2003 a podobn\u00fd p\u0159\u00edstup byl pozd\u011bji p\u0159ijat syst\u00e9mem DragonFlyBSD pod n\u00e1zvem 'virtual kernels', co\u017e dokazuje, \u017ee koncept u\u017eivatelsk\u00fdch re\u017eim\u016f jader m\u00e1 relativn\u011b dlouhou historii ve v\u00fdvoji opera\u010dn\u00edch syst\u00e9m\u016f.",
        incorrect:
          "Implementace u\u017eivatelsk\u00fdch re\u017eim\u016f jader je pom\u011brn\u011b ned\u00e1vn\u00fd koncept, kter\u00fd se objevil a\u017e po roce 2010 s c\u00edlem nahradit tradi\u010dn\u00ed virtualizaci a kontejnery, p\u0159i\u010dem\u017e prvn\u00ed implementace jako User-Mode Linux a 'virtual kernels' v DragonFlyBSD byly vyvinuty a\u017e v posledn\u00edch n\u011bkolika letech jako reakce na rostouc\u00ed pot\u0159ebu leh\u010d\u00ed a bezpe\u010dn\u011bj\u0161\u00ed virtualiza\u010dn\u00ed technologie.",
        sectionNumber: "12.2.9",
        sectionTitle: "User-Mode Kernels",
      },
      {
        uuid: "dbac0f9f-6337-4a33-975d-9bf71dbdd299",
        correct:
          "Z hlediska bezpe\u010dnosti na stran\u011b hostitelsk\u00e9ho syst\u00e9mu nab\u00edzej\u00ed u\u017eivatelsk\u00e9 re\u017eimy jader v\u00fdhodu oproti kontejner\u016fm, proto\u017ee se hostitelsk\u00e9mu syst\u00e9mu jev\u00ed p\u0159ev\u00e1\u017en\u011b jako standardn\u00ed procesy bez zvl\u00e1\u0161tn\u00edho statusu, co\u017e usnad\u0148uje vyu\u017eit\u00ed st\u00e1vaj\u00edc\u00edch bezpe\u010dnostn\u00edch mechanism\u016f a \u010din\u00ed je potenci\u00e1ln\u011b bezpe\u010dn\u011bj\u0161\u00edmi pro retrofitov\u00e1n\u00ed do existuj\u00edc\u00edch syst\u00e9m\u016f ne\u017e kontejnery, jeliko\u017e vyu\u017e\u00edvaj\u00ed zaveden\u00e9 bezpe\u010dnostn\u00ed postupy hostitelsk\u00e9ho syst\u00e9mu.",
        incorrect:
          "Z hlediska bezpe\u010dnosti na stran\u011b hostitelsk\u00e9ho syst\u00e9mu jsou kontejnery pova\u017eov\u00e1ny za bezpe\u010dn\u011bj\u0161\u00ed ne\u017e u\u017eivatelsk\u00e9 re\u017eimy jader, proto\u017ee kontejnery vyu\u017e\u00edvaj\u00ed pokro\u010dil\u00e9 bezpe\u010dnostn\u00ed mechanismy izolace jader a jmenn\u00fdch prostor\u016f, zat\u00edmco u\u017eivatelsk\u00e9 re\u017eimy jader, t\u00edm, \u017ee b\u011b\u017e\u00ed jako standardn\u00ed procesy, jsou n\u00e1chyln\u011bj\u0161\u00ed k bezpe\u010dnostn\u00edm zranitelnostem a nab\u00edzej\u00ed hor\u0161\u00ed ochranu hostitelsk\u00e9ho syst\u00e9mu.",
        sectionNumber: "12.2.9",
        sectionTitle: "User-Mode Kernels",
      },
      {
        uuid: "b1c1e92a-a5a5-463c-8734-b518f4ac46d9",
        correct:
          "Jedn\u00edm z hlavn\u00edch nedostatk\u016f kontejner\u016f a u\u017eivatelsk\u00fdch jader je absence podpory suspendov\u00e1n\u00ed a obnoven\u00ed, co\u017e zt\u011b\u017euje migraci. D\u016fvodem je slo\u017eit\u011bj\u0161\u00ed stav procesu v porovn\u00e1n\u00ed s virtu\u00e1ln\u00edm strojem, a\u010dkoli tento probl\u00e9m je z\u00e1va\u017en\u011bj\u0161\u00ed u kontejner\u016f kv\u016fli komplexn\u011bj\u0161\u00ed povaze proces\u016f na hostitelsk\u00e9m syst\u00e9mu v porovn\u00e1n\u00ed s \u010dasto jedin\u00fdm procesem u\u017eivatelsk\u00e9ho j\u00e1dra.",
        incorrect:
          "Jednou z v\u00fdhod kontejner\u016f a u\u017eivatelsk\u00fdch jader je robustn\u00ed podpora suspendov\u00e1n\u00ed a obnoven\u00ed, kter\u00e1 usnad\u0148uje migraci. To je umo\u017en\u011bno d\u00edky jednoduch\u00e9mu stavu procesu v porovn\u00e1n\u00ed s virtu\u00e1ln\u00edm strojem, co\u017e \u010din\u00ed kontejnery m\u00e9n\u011b problematick\u00fdmi ne\u017e u\u017eivatelsk\u00e1 j\u00e1dra z hlediska spr\u00e1vy stavu a migrace.",
        sectionNumber: "12.2.10",
        sectionTitle: "Migration",
      },
      {
        uuid: "259f1239-d123-49b5-8df2-da7141309681",
        correct:
          "Probl\u00e9m s absenc\u00ed suspendov\u00e1n\u00ed a obnoven\u00ed je u kontejner\u016f v\u00fdrazn\u011b z\u00e1va\u017en\u011bj\u0161\u00ed ne\u017e u u\u017eivatelsk\u00fdch jader. To je zp\u016fsobeno t\u00edm, \u017ee kontejnery v sob\u011b zahrnuj\u00ed re\u00e1ln\u00e9 procesy na hostitelsk\u00e9m syst\u00e9mu, zat\u00edmco u\u017eivatelsk\u00e9 j\u00e1dro je \u010dasto implementov\u00e1no jako jedin\u00fd proces, co\u017e zjednodu\u0161uje spr\u00e1vu a serializaci stavu pro \u00fa\u010dely suspendov\u00e1n\u00ed a obnoven\u00ed.",
        incorrect:
          "Probl\u00e9m s absenc\u00ed suspendov\u00e1n\u00ed a obnoven\u00ed je u u\u017eivatelsk\u00fdch jader v\u00fdrazn\u011b z\u00e1va\u017en\u011bj\u0161\u00ed ne\u017e u kontejner\u016f. To je zp\u016fsobeno t\u00edm, \u017ee u\u017eivatelsk\u00e1 j\u00e1dra v sob\u011b zahrnuj\u00ed re\u00e1ln\u00e9 procesy na hostitelsk\u00e9m syst\u00e9mu, zat\u00edmco kontejnery jsou \u010dasto implementov\u00e1ny jako jedin\u00fd proces, co\u017e zjednodu\u0161uje spr\u00e1vu a serializaci stavu pro \u00fa\u010dely suspendov\u00e1n\u00ed a obnoven\u00ed.",
        sectionNumber: "12.2.10",
        sectionTitle: "Migration",
      },
      {
        uuid: "ebf4853d-5ff2-4db8-8dff-fd239b454296",
        correct:
          "I kdy\u017e kontejnery a u\u017eivatelsk\u00e1 j\u00e1dra postr\u00e1daj\u00ed nativn\u00ed podporu suspendov\u00e1n\u00ed a obnoven\u00ed, co\u017e omezuje mo\u017enosti migrace, tento nedostatek je \u010d\u00e1ste\u010dn\u011b kompenzov\u00e1n rychlou dobou vypnut\u00ed a spu\u0161t\u011bn\u00ed. D\u00edky tomu je mo\u017en\u00e9 kontejnery a u\u017eivatelsk\u00e1 j\u00e1dra rychle restartovat na jin\u00e9m hostiteli, \u010d\u00edm\u017e se minimalizuje dopad v\u00fdpadk\u016f spojen\u00fdch s migrac\u00ed.",
        incorrect:
          "I kdy\u017e kontejnery a u\u017eivatelsk\u00e1 j\u00e1dra postr\u00e1daj\u00ed nativn\u00ed podporu suspendov\u00e1n\u00ed a obnoven\u00ed, co\u017e omezuje mo\u017enosti migrace, tento nedostatek je pln\u011b kompenzov\u00e1n pomalou dobou vypnut\u00ed a spu\u0161t\u011bn\u00ed. D\u00edky tomu je mo\u017en\u00e9 kontejnery a u\u017eivatelsk\u00e1 j\u00e1dra bezpe\u010dn\u011b migrovat na jin\u00fd hostitel, \u010d\u00edm\u017e se eliminuje dopad v\u00fdpadk\u016f spojen\u00fdch s migrac\u00ed.",
        sectionNumber: "12.2.10",
        sectionTitle: "Migration",
      },
    ],
  };
