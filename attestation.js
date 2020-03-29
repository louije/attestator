let title = `
ATTESTATION DE DÉPLACEMENT DÉROGATOIRE
`

let header = `
En application de l'article 3 du décret du 23 mars 2020
prescrivant les mesures générales nécessaires pour faire
face à l'épidémie de Covid19 dans le cadre
de l'état d'urgence sanitaire
`

let id = (name, birthdate, birthplace) => `
Je soussigné(e) ${name}
né(e) le ${birthdate} à ${birthplace},
demeurant au 1 impasse Marie-Thérèse à Maisons-Laffitte,
`


let certify = `
certifie que mon déplacement est lié au motif suivant
(cocher la case) autorisé par l'article 3 du décret
du 23 mars 2020 prescrivant les mesures générales
nécessaires pour faire face à l'épidémie de Covid19
dans le cadre de l'état d'urgence sanitaire (1) :
`
let reasons = (r) => {
  if (!Array.isArray(r)) { r = [r] }
  let texts = {
    pro: `Déplacements entre le domicile et le lieu d'exercice
de l'activité professionnelle, lorsqu'ils sont
indispensables à l'exercice d'activités ne pouvant
être organisées sous forme de télétravail ou déplacements
professionnels ne pouvant être différés (2).
`,
    com: `Déplacements pour effectuer des achats de fournitures
nécessaires à l'activité professionnelle et des achats
de première nécessité (3) dans des établissements dont
les activités demeurent autorisées
(liste sur gouvernement.fr).
`,
    med: `Consultations et soins ne pouvant être assurés
à distance et ne pouvant être différés ;
consultations et soins des patients
atteints d'une affection de longue durée.
`,
    fam: `Déplacements pour motif familial impérieux,
pour l'assistance aux personnes vulnérables
ou la garde d'enfants.
`,
    jog: `Déplacements brefs, dans la limite d'une heure
quotidienne et dans un rayon maximal d'un
kilomètre autour du domicile, liés soit
à l'activité physique individuelle des personnes,
à l'exclusion de toute pratique sportive collective
et de toute proximité avec d'autres personnes,
soit à la promenade avec les seules personnes
regroupées dans un même domicile, soit aux
besoins des animaux de compagnie.
`,
    jud: `Convocation judiciaire ou administrative.
`,
    mis: `Participation à des missions d'intérêt général
sur demande de l'autorité administrative.
`
  }
  if (r.length === 1) {
    return "[X] " + texts[r[0]]
  }
  let out = "";
  for (let reason of r) {
    out += `[ ] ${texts[reason]}\n`
  }
  return out;
}

let stamp = (date = (new Date()).toLocaleString('fr', {dateStyle:"long", timeStyle: 'short'})) => `
Fait à Maisons-Laffitte
Le ${date}
`;

let signature = `
Signature :



`

let footnotes = `
(1) Les personnes souhaitant bénéficier de l'une de ces exceptions doivent se munir s'il y a lieu, lors de leurs déplacements hors de leur domicile, d'un document leur permettant de justifier que le déplacement considéré entre dans le champ de l'une de ces exceptions.
(2) A utiliser par les travailleurs non-salariés, lorsqu'ils ne peuvent disposer d'un justificatif de déplacement établi par leur employeur.
(3) Y compris les acquisitions à titre gratuit (distribution de denrées alimentaires...) et les déplacements liés à la perception de prestations sociales et au retrait d'espèces.
`

module.exports = { title, header, id, certify, reasons, stamp, signature, footnotes };