import { ExamData } from './types';

import { sectionB_zakladni_pojmy_a_definice } from './section/B-zakladni-pojmy-a-definice';
import { section1_virtualizace_pameti } from './section/1-virtualizace-pameti';
import { section2_virtualizace_procesoru } from './section/2-virtualizace-procesoru';
import { section3_souborove_systemy } from './section/3-souborove-systemy';
import { section4_virtualizace_periferii } from './section/4-virtualizace-periferii';
import { section5_soubeznost_a_synchronizace } from './section/5-soubeznost-a-synchronizace';
import { section6_synchronizace } from './section/6-synchronizace';
import { section7_komunikace_uvaznuti } from './section/7-komunikace-uvaznuti';
import { section8_preruseni_a_periferie } from './section/8-preruseni-a-periferie';
import { section9_interacting_with_the_world } from './section/9-interacting-with-the-world';
import { section10_posix_a_jazyk_c } from './section/10-posix-a-jazyk-c';
import { section11_the_kernel } from './section/11-the-kernel';
import { section12_os_virtualization } from './section/12-os-virtualization';

export const examData: ExamData = [
  sectionB_zakladni_pojmy_a_definice,
  section1_virtualizace_pameti,
  section2_virtualizace_procesoru,
  section3_souborove_systemy,
  section4_virtualizace_periferii,
  section5_soubeznost_a_synchronizace,
  section6_synchronizace,
  section7_komunikace_uvaznuti,
  section8_preruseni_a_periferie,
  section9_interacting_with_the_world,
  section10_posix_a_jazyk_c,
  section11_the_kernel,
  section12_os_virtualization,
];
