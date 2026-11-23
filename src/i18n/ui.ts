// All page text, per language. Add a key to `en` and TypeScript will ask for it in `mk`.

export const languages = { en: "English", mk: "Македонски" } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = "en";

const en = {
  meta: {
    title: "Mimir - See Beyond Data.",
    description: "Your Personal AI Data Analyst - Turning Numbers Into Answers",
    locale: "en_US",
  },
  a11y: {
    skip: "Skip to content",
    home: "Mimir home",
    mainNav: "Main",
    language: "Language",
    logo: "Mimir logo",
    backToTop: "Back to top",
    app: "The Mimir app answering a question about a sales file with a summary, a chart, follow-up questions and recommendations",
    table: "Mimir compared with cloud tools",
  },
  nav: {
    features: "Features",
    how: "How It Works",
    questions: "Questions",
    comparison: "Comparison",
    demo: "Schedule a Demo",
  },
  hero: {
    title: "See Beyond Data.",
    sub: "Your Personal AI Data Analyst - Turning Numbers Into Answers",
    cta: "Schedule a Free Demo Today",
  },
  app: {
    status: "Analysis complete",
    chats: "Chats",
    chatItems: ["Q3 revenue review", "Churn by plan", "Supplier merge"],
    dataset: "Dataset",
    datasetMeta: "48,210 rows, 14 columns",
    question: "Which region drove the drop in Q3 revenue?",
    answerHtml:
      "Q3 revenue fell <b>12.4%</b> against Q2. Most of the drop (<b>71%</b>) came from the <b>North</b> region, where repeat orders slowed from July onward. Other regions held steady.",
    chartTitle: "Revenue by month, € thousands",
    allRegions: "All regions",
    north: "North",
    q3Label: "Q3 −12.4%",
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    chips: ["Compare North repeat rate by month", "Which products lost the most?", "Show Q3 vs Q2 by channel"],
    recommends: "Mimir Recommends",
    rec1: "Win back lapsed North accounts with a reorder offer",
    outcome: "Predicted outcome",
    rec1Outcome: "Recovers 6–8% of Q4 revenue",
    noAction: "Cost of no action",
    rec1NoAction: "Q4 down a further 9%",
    rec1Why: "38% of North customers who ordered in Q2 have not reordered since July.",
    rec2: "Review North delivery times",
    rec2Outcome: "Fewer cancelled repeat orders",
  },
  features: {
    title: "Core Features",
    anomaly: "Anomaly in Aug",
    opportunity: "Opportunity",
    risk: "Risk",
    nextStep: "Next step",
    asks: ["Why did returns rise in March?", "Split this by customer type", "Which stores grew fastest?"],
    items: [
      {
        title: "Instant Analysis and Visualisation",
        text: "Upload your file - Mimir analyzes the data, draws clear charts, and explains what’s happening in seconds.",
        bold: "Patterns, anomalies, and insights - all at a glance.",
      },
      {
        title: "Actionable Recommendations",
        text: "Mimir doesn’t just show results - it tells you what to do next.",
        bold: "Opportunities, risks, and clear next steps - ready to act on immediately.",
      },
      {
        title: "Smart Follow-Up Questions",
        text: "After each analysis, Mimir suggests what to explore next, uncovering hidden insights you might have missed.",
        bold: "Think of it as an analyst guiding you step by step.",
      },
      {
        title: "Continuous Understanding",
        text: "Every file you analyze helps Mimir spot trends, patterns, and changes over time.",
        bold: "Your business story, always evolving - automatically.",
      },
      {
        title: "Effortless Setup",
        text: "No dashboards, no SQL, no configuration. Upload a file, and Mimir does the rest.",
        bold: "Analysis the way it's supposed to be - Quick & Simple.",
      },
      {
        title: "Secure by Design",
        text: "Your data is processed safely with end-to-end encryption. Access is tightly controlled, and your insights remain confidential.",
        bold: "Analysis you can trust - private and secure.",
      },
    ],
  },
  how: {
    title: "How It Works",
    pipe: { summary: "Summary", chart: "Chart", next: "Next steps" },
    steps: [
      { title: "Upload Your Data", text: "Drag and drop your files - Mimir supports all major formats." },
      { title: "Analyze Instantly", text: "Mimir scans your data, detects patterns, highlights anomalies, and draws clear charts - all in seconds." },
      { title: "Explore & Act", text: "Get actionable insights, follow-up questions, and recommendations. Refine your analysis and uncover opportunities you didn’t know existed." },
    ],
  },
  questions: {
    title: ["Better questions.", "Better decisions."],
    list: [
      "Why are my profit margins shrinking?",
      "Which products are underperforming?",
      "What should I expect next quarter?",
      "Where am I losing money?",
      "Which sales trends deserve attention?",
      "What happens if costs increase by 10%?",
    ],
  },
  comparison: {
    title: "Comparison",
    feature: "Feature",
    mimir: "Mimir",
    others: "The traditional way",
    othersMobile: "The old way",
    rows: [
      { feature: "Instant Analysis", mimir: "Instant Charts and Insights", others: "Slow or Manual" },
      { feature: "Actionable Advice", mimir: "Mimir Suggests Next Steps", others: "Just Raw Numbers" },
      { feature: "Smart Follow-Ups", mimir: "Guides Deeper Exploration", others: "None" },
      { feature: "Data Control", mimir: "Full Ownership", others: "Shared Access" },
      { feature: "Ease of Use", mimir: "Drag & drop, zero setup", others: "Complex Dashboards" },
    ],
  },
  final: {
    title: "Ready to See Beyond Data?",
    text: "Upload your files. Let Mimir instantly show you the patterns, insights, and next steps hiding in your data.",
    cta: "Start Analyzing with Mimir",
  },
  footer: "See beyond data.",
};

const mk: typeof en = {
  meta: {
    title: "Mimir - Од податоци до подобри одлуки.",
    description: "Вашиот личен AI аналитичар на податоци - ги претвора бројките во одговори",
    locale: "mk_MK",
  },
  a11y: {
    skip: "Прескокни до содржината",
    home: "Mimir почетна",
    mainNav: "Главна навигација",
    language: "Јазик",
    logo: "Лого на Mimir",
    backToTop: "Назад на врвот",
    app: "Апликацијата Mimir одговара на прашање за датотека со продажба, со резиме, графикон, дополнителни прашања и препораки",
    table: "Mimir во споредба со алатките во облак",
  },
  nav: {
    features: "Можности",
    how: "Како функционира",
    questions: "Прашања",
    comparison: "Споредба",
    demo: "Закажете демо",
  },
  hero: {
    title: "Од податоци до подобри одлуки.",
    sub: "Вашиот личен AI аналитичар на податоци - ги претвора бројките во одговори",
    cta: "Закажете бесплатно демо уште денес",
  },
  app: {
    status: "Анализата е завршена",
    chats: "Разговори",
    chatItems: ["Приходи во Q3", "Одлив по пакет", "Спојување добавувачи"],
    dataset: "Податоци",
    datasetMeta: "48.210 редови, 14 колони",
    question: "Кој регион го предизвика падот на приходите во Q3?",
    answerHtml:
      "Приходите во Q3 паднаа за <b>12,4%</b> во однос на Q2. Најголем дел од падот (<b>71%</b>) дојде од регионот <b>Север</b>, каде што повторните нарачки забавија од јули наваму. Другите региони останаа стабилни.",
    chartTitle: "Приходи по месец, во илјади €",
    allRegions: "Сите региони",
    north: "Север",
    q3Label: "Q3 −12,4%",
    months: ["Јан", "Фев", "Мар", "Апр", "Мај", "Јун", "Јул", "Авг", "Сеп"],
    chips: ["Спореди ги повторните нарачки во Север по месец", "Кои производи загубија најмногу?", "Прикажи Q3 наспроти Q2 по канал"],
    recommends: "Mimir препорачува",
    rec1: "Вратете ги неактивните клиенти од Север со понуда за повторна нарачка",
    outcome: "Очекуван исход",
    rec1Outcome: "Враќа 6–8% од приходите во Q4",
    noAction: "Цена ако не направите ништо",
    rec1NoAction: "Q4 пониско за уште 9%",
    rec1Why: "38% од клиентите од Север што нарачале во Q2 не нарачале повторно од јули.",
    rec2: "Проверете ги роковите на испорака во Север",
    rec2Outcome: "Помалку откажани повторни нарачки",
  },
  features: {
    title: "Клучни можности",
    anomaly: "Аномалија во авг.",
    opportunity: "Можност",
    risk: "Ризик",
    nextStep: "Следен чекор",
    asks: ["Зошто пораснаа враќањата во март?", "Подели го ова по тип на клиент", "Кои продавници пораснаа најбрзо?"],
    items: [
      {
        title: "Моментална анализа и визуелизација",
        text: "Прикачете ја вашата датотека - Mimir ги анализира податоците, исцртува јасни графикони и за неколку секунди објаснува што се случува.",
        bold: "Обрасци, аномалии и увиди - сè на еден поглед.",
      },
      {
        title: "Конкретни препораки",
        text: "Mimir не само што ви ги покажува резултатите - ви кажува и што да направите понатаму.",
        bold: "Можности, ризици и јасни следни чекори - подготвени за веднаш да дејствувате.",
      },
      {
        title: "Паметни дополнителни прашања",
        text: "По секоја анализа, Mimir предлага што да истражите понатаму и открива скриени увиди што можеби сте ги пропуштиле.",
        bold: "Замислете го како аналитичар што ве води чекор по чекор.",
      },
      {
        title: "Постојано разбирање",
        text: "Секоја датотека што ја анализирате му помага на Mimir да забележи трендови, обрасци и промени со текот на времето.",
        bold: "Приказната на вашиот бизнис, секогаш во развој - автоматски.",
      },
      {
        title: "Поставување без напор",
        text: "Без контролни табли, без SQL, без конфигурација. Прикачете датотека, а Mimir го прави останатото.",
        bold: "Анализа каква што треба да биде - брза и едноставна.",
      },
      {
        title: "Безбедно по дизајн",
        text: "Вашите податоци се обработуваат безбедно, со шифрирање од крај до крај. Пристапот е строго контролиран, а вашите увиди остануваат доверливи.",
        bold: "Анализа на која можете да ѝ верувате - приватна и безбедна.",
      },
    ],
  },
  how: {
    title: "Како функционира",
    pipe: { summary: "Резиме", chart: "Графикон", next: "Следни чекори" },
    steps: [
      { title: "Прикачете ги податоците", text: "Повлечете ги и пуштете ги вашите датотеки - Mimir ги поддржува сите главни формати." },
      { title: "Анализирајте веднаш", text: "Mimir ги прегледува податоците, открива обрасци, ги истакнува аномалиите и исцртува јасни графикони - сè за неколку секунди." },
      { title: "Истражете и дејствувајте", text: "Добијте практични увиди, дополнителни прашања и препораки. Прецизирајте ја анализата и откријте можности за кои не сте знаеле дека постојат." },
    ],
  },
  questions: {
    title: ["Подобри прашања.", "Подобри одлуки."],
    list: [
      "Зошто ми се намалуваат профитните маржи?",
      "Кои производи не ги исполнуваат очекувањата?",
      "Што да очекувам следниот квартал?",
      "Каде губам пари?",
      "Кои трендови во продажбата бараат внимание?",
      "Што ќе се случи ако трошоците пораснат за 10%?",
    ],
  },
  comparison: {
    title: "Споредба",
    feature: "Карактеристика",
    mimir: "Mimir",
    others: "Традиционални методи",
    othersMobile: "Стариот начин",
    rows: [
      { feature: "Моментална анализа", mimir: "Моментални графикони и увиди", others: "Бавно или рачно" },
      { feature: "Практични совети", mimir: "Mimir предлага следни чекори", others: "Само сурови бројки" },
      { feature: "Паметни дополнителни прашања", mimir: "Води кон подлабоко истражување", others: "Нема" },
      { feature: "Контрола врз податоците", mimir: "Целосна сопственост", others: "Споделен пристап" },
      { feature: "Леснотија на користење", mimir: "Повлечи и пушти, без поставување", others: "Сложени контролни табли" },
    ],
  },
  final: {
    title: "Подготвени да видите подалеку од податоците?",
    text: "Прикачете ги вашите датотеки. Нека Mimir веднаш ви ги покаже обрасците, увидите и следните чекори скриени во вашите податоци.",
    cta: "Започнете анализа со Mimir",
  },
  footer: "Од податоци до подобри одлуки. ",
};

export const ui = { en, mk };

/** Path of the home page for each language, respecting Astro's `base` setting. */
export function homePath(lang: Lang): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return lang === defaultLang ? `${base}/` : `${base}/${lang}/`;
}
