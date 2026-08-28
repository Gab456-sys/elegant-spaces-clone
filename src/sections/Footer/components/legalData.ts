// Dati legali della struttura — unico punto di verità.
export const legalData = {
  businessName: "Villa Sesto di Nome Cognome",
  address: "Via Esempio 00, 50100 Firenze (FI), Italia",
  vat: "IT00000000000",
  taxCode: "00000000000",
  // Codice Identificativo Nazionale — obbligatorio in ogni annuncio,
  // sito proprio incluso (sanzioni da 500 a 5.000 €).
  cin: "IT000000000000000000",
  // Codice regionale, dove ancora previsto (CIR / CIS). Stringa vuota = non mostrato.
  cir: "",
  phone: "+39 000 000 0000",
  phoneHref: "+390000000000",
  email: "info@villasesto.it",
} as const;
