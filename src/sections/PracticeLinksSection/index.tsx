import { useState } from "react";

const faqs = [
  {
    question: "Dove si trova la struttura? Quanto dista dal centro di Firenze?",
    answer:
      "Villa Sesto si trova nel centro di Sesto Fiorentino, in Viale Giulio Cesare 21, una zona tranquilla e residenziale. Si può raggiungere Firenze tramite auto in circa 30 minuti o tramite treno in 15 minuti. La stazione più vicina è Zambra e si raggiunge in 8 minuti a piedi dalla struttura.",
  },
  {
    question: "Come posso arrivare da aeroporto o stazione?",
    answer:
      "Dall’aeroporto di Firenze Amerigo Vespucci siamo a circa 10 minuti in auto/taxi. Dalla stazione di Firenze Santa Maria Novella puoi prendere il treno e scendere alla fermata Zambra; da lì la struttura dista 8 minuti a piedi.",
  },
  {
    question: "Posso arrivare in auto? Come funziona il parcheggio e la ZTL?",
    answer:
      "Villa Sesto non si trova in ZTL, quindi puoi raggiungerci comodamente in auto. Disponiamo di posti auto privati non custoditi e aperti 24h: ti invieremo le indicazioni dettagliate al momento della prenotazione.",
  },
  {
    question:
      "Quali sono gli orari di check-in e check-out? Posso arrivare tardi la sera?",
    answer:
      "Il check-in è previsto dalle 14:00 alle 19:00, il check-out entro le 10:30. Se arrivi in tarda serata, offriamo late check-in su richiesta, anche con self check-in: ti chiediamo solo di comunicarci in anticipo l’orario di arrivo.",
  },
  {
    question:
      "È possibile lasciare i bagagli prima del check-in o dopo il check-out?",
    answer:
      "Sì, possiamo custodire i bagagli gratuitamente qualche ora prima del check-in o dopo il check-out, così puoi goderti la giornata senza valigie.",
  },
  {
    question: "La tassa di soggiorno è inclusa nel prezzo?",
    answer:
      "No, la tassa di soggiorno del Comune di Firenze non è inclusa nelle tariffe e va saldata separatamente al momento dell’arrivo, in contanti o con le modalità indicate nella conferma di prenotazione. L’importo varia in base al numero di notti e alla tipologia di struttura, secondo il regolamento comunale in vigore.",
  },
  {
    question: "Che tipo di colazione offrite?",
    answer:
      "Offriamo una colazione italiana / continentale con prodotti dolci e salati, servita dalle 08:00 alle 10:00. In caso di esigenze particolari (vegetariano, intolleranze, senza glutine) ti chiediamo di avvisarci in anticipo.",
  },
  {
    question: "Le camere sono dotate di biancheria e servizi?",
    answer:
      "Sì, tutte le camere includono lenzuola, coperte e set di asciugamani. Ogni camera è dotata di bagno privato, aria condizionata, Wi-Fi gratuito, asciugacapelli e prodotti di cortesia.",
  },
  {
    question: "Accettate bambini? Posso richiedere una culla/lettino?",
    answer:
      "I bambini sono i benvenuti. Su richiesta possiamo fornire una culla/lettino per bimbi piccoli (secondo disponibilità). Ti invitiamo a segnalarlo al momento della prenotazione.",
  },
  {
    question: "Sono ammessi animali domestici?",
    answer:
      "Accogliamo animali di piccola taglia su richiesta e previa conferma, con un piccolo supplemento di pulizia. Ti chiediamo solo di rispettare gli ambienti comuni e il riposo degli altri ospiti.",
  },
  {
    question: "C'è il Wi-Fi? Lo staff parla inglese?",
    answer:
      "Sì, il Wi-Fi è disponibile gratuitamente in tutte le camere e nelle aree comuni. Il nostro staff parla italiano e inglese, e può aiutarti con consigli su ristoranti ed esperienze in zona.",
  },
  {
    question: "Quali metodi di pagamento accettate? Richiedete un acconto?",
    answer:
      "Accettiamo carte di credito/debito principali e pagamenti digitali. Per confermare la prenotazione può essere richiesto un acconto / pre-autorizzazione, indicato in fase di prenotazione; il saldo avviene all’arrivo o prima dell’arrivo secondo le condizioni tariffarie.",
  },
  {
    question: "Qual è la vostra politica di cancellazione?",
    answer:
      "Le condizioni di cancellazione possono variare in base alla tariffa scelta (flessibile, non rimborsabile, offerte speciali). Prima di confermare ti invitiamo a leggere con attenzione i termini riportati nella pagina di prenotazione e nell’email di conferma.",
  },
  {
    question: "C'è un supermercato vicino?",
    answer:
      "Sì, nelle immediate vicinanze della struttura è presente un supermercato raggiungibile comodamente a piedi in 5 minuti.",
  },
];

export const PracticeLinksSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative z-[2] overflow-hidden border-b border-stone-300/35 bg-stone-100 text-gray-900"
    >
      <div
        className="absolute inset-0 z-[1] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(90deg,rgba(0,0,0,0.68) 0%,rgba(0,0,0,0.42) 52%,rgba(0,0,0,0.28) 100%), url('https://c.animaapp.com/mq6uygebb47riI/assets/HBA-home-seo-img.jpg')",
        }}
        aria-label="Villa Sesto vista esterna"
      />

      <div className="relative z-[2] mx-auto w-full px-6 py-20 text-stone-50 md:px-[32.8889px] md:py-28 lg:py-32">
        <div className="mx-auto grid w-full max-w-[1400px] gap-14 md:grid-cols-12 md:gap-10 lg:gap-14">
          <header className="md:col-span-4">
            <div className="text-center md:sticky md:top-24 md:text-left">
              <p className="mb-5 text-[11px] uppercase tracking-[1.6px] text-stone-300">
                FAQ
              </p>

              <h2 className="mx-auto mb-7 max-w-[11ch] font-beausite_slick text-[40px] font-light leading-[0.98] md:mx-0 md:text-[64px]">
                Informazioni utili
              </h2>

              <p className="mx-auto max-w-[34ch] text-[15px] leading-7 text-stone-200 md:mx-0 md:text-base">
                Tutto quello che serve per organizzare il soggiorno con più
                semplicità, in continuità con il ritmo calmo e l’atmosfera
                essenziale del resto della pagina.
              </p>
            </div>
          </header>

          <div className="md:col-span-8">
            <ol className="border-y border-stone-50/30">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <li
                    key={faq.question}
                    className="border-b border-stone-50/25 last:border-b-0"
                    data-reveal-order={index + 1}
                  >
                    <div className="transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-stone-50/[0.03]">
                      <button
                        type="button"
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        className="flex w-full cursor-pointer items-start justify-between gap-6 py-6 text-left md:gap-8 md:py-7"
                        aria-expanded={isOpen}
                      >
                        <div className="flex min-w-0 items-start gap-4 md:gap-6">
                          <span className="pt-1 text-[10px] uppercase tracking-[1.2px] text-stone-300 md:text-[11px]">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <h3 className="font-beausite_classic text-[19px] leading-[1.25] text-stone-50 md:text-[24px]">
                            {faq.question}
                          </h3>
                        </div>

                        <span
                          aria-hidden="true"
                          className="mt-2 flex h-5 w-5 shrink-0 items-center justify-center text-stone-300"
                        >
                          <span className="relative block h-3.5 w-3.5">
                            <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current" />
                            <span
                              className={`absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                                isOpen ? "scale-y-0" : "scale-y-100"
                              }`}
                            />
                          </span>
                        </span>
                      </button>

                      <div
                        className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                          isOpen
                            ? "[grid-template-rows:1fr]"
                            : "[grid-template-rows:0fr]"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p
                            className={`w-full pb-7 pl-[1.65rem] pr-2 text-[15px] leading-7 text-stone-200 transition-opacity duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] md:pb-8 md:pl-[2.15rem] md:pr-4 md:text-base ${
                              isOpen ? "opacity-100" : "opacity-0"
                            }`}
                          >
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
