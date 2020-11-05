let title = `
ATTESTATION DE DÉPLACEMENT DÉROGATOIRE
`

let header = `
En application du décret n°2020-1310 du 29 octobre 2020
prescrivant les mesures générales nécessaires pour faire
face à l'épidémie de Covid19 dans le cadre de l'état
d'urgence sanitaire
`

let id = (name, birthdate, birthplace, address) => `
Je soussigné(e) ${name}
né(e) le ${birthdate} à ${birthplace},
demeurant au ${address},
`


let certify = `
certifie que mon déplacement est lié au motif suivant
(cocher la case) autorisé par le décret n°2020-1310
du 29 octobre 2020 prescrivant les mesures générales
nécessaires pour faire face à l’épidémie de Covid19
dans le cadre de l'état d'urgence sanitaire :
`
let reasons = (r) => {
  if (!Array.isArray(r)) { r = [r] }
  let texts = {
    pro: `Déplacements entre le domicile et le lieu d’exercice
de l’activité professionnelle ou un établissement
d’enseignement ou de formation, déplacements
professionnels ne pouvant être différés,
déplacements pour un concours ou un examen.
`,
    com: `Déplacements pour effectuer des achats de fournitures
nécessaires à l'activité professionnelle, des achats
de première nécessité dans des établissements dont
les activités demeurent autorisées, le retrait
de commande et les livraisons à domicile.
`,
    med: `Consultations, examens et soins ne pouvant être ni assurés
à distance ni différés et l’achat de médicaments.
`,
    fam: `Déplacements pour motif familial impérieux,
pour l'assistance aux personnes vulnérables
et précaires ou la garde d'enfants.
`,
    handi: `Déplacement des personnes en situation
de handicap et leur accompagnant.
`,
    jog: `Déplacements brefs, dans la limite d'une heure
quotidienne et dans un rayon maximal d'un kilomètre
autour du domicile, liés soit à l'activité physique
individuelle des personnes, à l'exclusion de toute
pratique sportive collective et de toute proximité
avec d'autres personnes, soit à la promenade avec
les seules personnes regroupées dans un même domicile,
soit aux besoins des animaux de compagnie.
`,
    jud: `Convocation judiciaire ou administrative
et pour se rendre dans un service public.
`,
    mis: `Participation à des missions d'intérêt général
sur demande de l'autorité administrative.
`,
    scol: `Déplacement pour chercher les enfants à l’école
et à l’occasion de leurs activités périscolaires.
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

let options = {
  year: 'numeric', month: 'numeric', day: 'numeric',
  hour: 'numeric', minute: 'numeric',
  hour12: false
};
let french = new Intl.DateTimeFormat('fr', options);

let stamp = (city, date = french.format(new Date())) => `
Fait ${city}
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