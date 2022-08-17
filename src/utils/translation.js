const arabicHeader = () => {
  let ar = {
    Accueil: 'ترحيب',
    'Comment ça marche?': 'كيف تعمل؟',
    Blog: 'المدونة',
    DIRASAT: 'دراسات'
  };
  return ar;
};
const frenchHeader = () => {
  let fr = {
    Accueil: 'Accueil',
    'Comment ça marche?': 'Comment ça marche?',
    Blog: 'Blog',
    DIRASAT: 'DIRASAT'
  };
  return fr;
};

// landing page
const frenchLandingPage = () => {
  let fr = {
    "Commençons le test d'orientation": "Commençons le test d'orientation",
    'À la fin de ce questionnaire, une proposition de voeux pour ton orientation te sera formulée':
      'À la fin de ce questionnaire, une proposition de voeux pour ton orientation te sera formulée',
    "C'est parti": "C'est parti",
    'Comment ça marche?': 'Comment ça marche?',
    'Étape 1': 'Étape 1',
    'Dis à Dirasat qui tu es.': 'Dis à Dirasat qui tu es.',
    'Étape 2': 'Étape 2',
    'Réponds aux questions de Dirasat.': 'Réponds aux questions de Dirasat.',
    'Étape 3': 'Étape 3',
    'Dirasat te propose une liste de voeux pour ton orientation!':
      'Dirasat te propose une liste de voeux pour ton orientation!',
    'Nombre de visiteurs': 'Nombre de visiteurs'
  };
  return fr;
};

const ArabicLandingPage = () => {
  let ar = {
    "Commençons le test d'orientation": 'لنبدأ اختبار التوجيه',
    'À la fin de ce questionnaire, une proposition de voeux pour ton orientation te sera formulée':
      'في نهاية هذا الاستبيان ، سيتم صياغة اقتراح رغبات لتوجيهك',
    "C'est parti": 'بدينا',
    'Comment ça marche?': 'فهمني كيفاش',
    'Étape 1': 'المرحلة 1',
    'Dis à Dirasat qui tu es.': '(قول لدراسات شكون أنت(ية',
    'Étape 2': 'المرحلة 2',
    'Réponds aux questions de Dirasat.': 'جاوب دراسات',
    'Étape 3': 'المرحلة 3',
    'Dirasat te propose une liste de voeux pour ton orientation!':
      '!دراسات يعطيك قائمة مناهج الدرسات الجامعية تناسبك على حساب حالتك والأجوبة نتاعك',
    'Nombre de visiteurs': 'عدد الزوار'
  };
  return ar;
};
// userform
const frenchUserform = () => {
  let fr = {
    'Pour mieux te conseiller, j’ai besoin d’en savoir davantage sur toi!':
      'Pour mieux te conseiller, j’ai besoin d’en savoir davantage sur toi!',
    Prénom: 'Prénom',
    Nom: 'Nom',
    'Date de naissance': 'Date de naissance',
    Wilaya: 'Wilaya',
    'Numéro de téléphone': 'Numéro de téléphone',
    Classe: 'Classe',
    'Série de Baccalauréat': 'Série de Baccalauréat',
    'Ville de votre établissement scolaire':
      'Ville de votre établissement scolaire',
    'Nom de votre école': 'Nom de votre école',
    'J’accepte les termes et les conditions':
      'J’accepte les termes et les conditions',
    Retour: 'Retour',
    'Passer au suivant': 'Passer au suivant',
    'J’ai déjà mon baccalauréat mais je n’ai pas encore débuté mes études supérieures':
      'J’ai déjà mon baccalauréat mais je n’ai pas encore débuté mes études supérieures',
    'Je n’ai pas mon baccalauréat': 'Je n’ai pas mon baccalauréat',
    'J’ai déjà débuté mes études supérieures et je veux me réorienter ou poursuivre mes études supérieures dans un autre programme.':
      'J’ai déjà débuté mes études supérieures et je veux me réorienter ou poursuivre mes études supérieures dans un autre programme.',
    "Partir à l'étranger": "Partir à l'étranger",
    'Me réorienter en Algérie': 'Me réorienter en Algérie',
    Baccalauréat: 'Baccalauréat',
    Licence: 'Licence',
    Master: 'Master',
    Doctorat: 'Doctorat',
    Mathématiques: 'Mathématiques',
    Poursuivre: 'Poursuivre',
    'Vous êtes en': 'Vous êtes en',
    'Arrondir à l’unité inférieure': 'Arrondir à l’unité inférieure',
    'Moyenne générale obtenue au Baccalauréat':
      'Moyenne générale obtenue au Baccalauréat',
    'Techniques Mathématiques': 'Techniques Mathématiques',
    'Sciences Expérimentales': 'Sciences Expérimentales',
    'Gestion et Economie': 'Gestion et Economie',
    'Lettre et Philosophie': 'Lettre et Philosophie',
    'Langues Etrangères': 'Langues Etrangères',
    'Quel est ton dernier diplôme validé ?':
      'Quel est ton dernier diplôme validé ?',
    '1ère année de doctorat': '1ère année de doctorat',
    '2ème année de doctorat': '2ème année de doctorat',
    '1ère année de licence': '1ère année de licence',
    '2ème année de licence': '2ème année de licence',
    '3ème année de licence': '3ème année de licence',
    '2ème année de master': '2ème année de master',
    '1ère année de master': '1ère année de master',
    'Quelle(s) ville(s)': 'Quelle(s) ville(s)',
    'Quel budget': 'Quel budget',
    'Quel pays': 'Quel pays',
    'Quel critère a le plus motivé ton choix de pays et de villes?':
      'Quel critère a le plus motivé ton choix de pays et de villes?',
    '1ère AS': '1ère AS',
    '2ème AS': '2ème AS',
    '3ème AS': '3ème AS',
    Postbac: 'Postbac'
  };
  return fr;
};
const arabicUserform = () => {
  let ar = {
    'Pour mieux te conseiller, j’ai besoin d’en savoir davantage sur toi!':
      'باش انصحك مليح، لازمني نتعرف عليك اكتر',
    Prénom: 'الاسم الاول',
    Nom: 'اللقب',
    'Date de naissance': 'تاريخ الميلاد',
    Wilaya: 'الولاية',
    'Numéro de téléphone': 'رقم الهاتف',
    Classe: 'المستوى',
    'Série de Baccalauréat': 'سلسلة البكالوريا',
    'Ville de votre établissement scolaire': 'مدينة المؤسسة التعليمية الحالية',
    'Nom de votre école': 'إسم المؤسسة التعليمية الحالية',
    'J’accepte les termes et les conditions': 'نتقبل بالشروط',
    Retour: 'نولي اللور',
    'Passer au suivant': 'نواصل',
    'J’ai déjà mon baccalauréat mais je n’ai pas encore débuté mes études supérieures':
      'لقد حصلت بالفعل على شهادة البكالوريا ولكني لم أبدأ تعليمي العالي بعد',
    'Je n’ai pas mon baccalauréat': 'ليس لدي البكالوريا',
    'J’ai déjà débuté mes études supérieures et je veux me réorienter ou poursuivre mes études supérieures dans un autre programme.':
      'لقد بدأت بالفعل دراساتي العليا وأريد إعادة توجيه نفسي أو مواصلة دراساتي العليا في برنامج آخر.',
    "Partir à l'étranger": 'اذهب خارجا',
    'Me réorienter en Algérie': 'أعد توجيه نفسي في الجزائر',
    Baccalauréat: 'بكالوريا',
    Licence: 'ليسانس',
    Master: 'ماستر',
    Doctorat: 'دكتورة',
    Mathématiques: 'رياضي',
    Poursuivre: 'يطارد',
    'Vous êtes en': 'أنت في',
    'Arrondir à l’unité inférieure': 'أعطيني التقريب إلى الوحدة الاسفل',
    'Moyenne générale obtenue au Baccalauréat': 'معدل الباك',
    'Techniques Mathématiques': 'تقني رياضي',
    'Sciences Expérimentales': 'علوم تجريبية',
    'Gestion et Economie': 'تسيير و إقتصاد',
    'Lettre et Philosophie': 'أدب و فلسفة',
    'Langues Etrangères': 'لغات أجنبية',
    'Quel est ton dernier diplôme validé ?': 'واش نهي آخر شهادة تحصلت عليها؟',
    '1ère année de doctorat': '1السنة ',
    '2ème année de doctorat': '2السنة ',
    '1ère année de licence': 'ليسانس1',
    '2ème année de licence': 'ليسانس2',
    '3ème année de licence': 'ليسانس3',
    '2ème année de master': 'ماستر2',
    '1ère année de master': 'ماستر1',
    'Quelle(s) ville(s)': 'واش من مدينة',
    'Quel budget': 'شحال قادر تمول',
    'Quel pays': 'أي بلد',
    'Quel critère a le plus motivé ton choix de pays et de villes?':
      'ما هو المعيار الأكثر دافعًا لاختيارك للبلدان والمدن؟',
    '1ère AS': 'السنة الأولى ثانوي',
    '2ème AS': 'السنة الثانية ثانوي',
    '3ème AS': 'السنة الثالثة ثانوي',
    Postbac: 'مستوى جامعي'
  };
  return ar;
};
// willaya
const frenchWillaya = () => {
  let fr = {
    Adrar: 'Adrar',
    Chlef: 'Chlef',
    Laghouat: 'Laghouat',
    'Oum Bouaghi': 'Oum Bouaghi',
    Batna: 'Batna',
    Béjaia: 'Béjaia',
    Biskra: 'Biskra',
    Béchar: 'Béchar',
    Blida: 'Blida',
    Bouira: 'Bouira',
    Tamanrasset: 'Tamanrasset',
    Tébessa: 'Tébessa',
    Tlemcen: 'Tlemcen',
    Tiaret: 'Tiaret',
    'Tizi ouzou': 'Tizi ouzou ',
    Alger: 'Alger',
    Djelfa: 'Djelfa',
    Jijel: 'Jijel',
    Sétif: 'Sétif',
    Saida: 'Saida',
    Skikda: 'Skikda',
    'Sidi Bel Abbès': 'Sidi Bel Abbès',
    Annaba: 'Annaba',
    Guelma: 'Guelma',
    Constantine: 'Constantine',
    Médéa: 'Médéa',
    Mostaganem: 'Mostaganem',
    "M'sila": 'sila',
    Mascara: 'Mascara',
    Ouargla: 'Ouargla',
    Oran: 'Oran',
    'El Bayadh': 'El Bayadh',
    Illizi: 'Illizi',
    'Bordj Bou Arreridj': 'Bordj Bou Arreridj',
    Boumerdès: 'Boumerdès',
    'El Taref': 'El Taref',
    Tindouf: 'Tindouf',
    Tissemsilt: 'Tissemsilt',
    'El Oued': 'El Oued',
    Kenchela: 'Kenchela',
    'Souk Ahras': 'Souk Ahras',
    Tipaza: 'Tipaza',
    Mila: 'Mila',
    'Aïn Defla': 'Aïn Defla',
    Nâama: 'Nâama',
    'Aïn Temouchent': 'Aïn Temouchent',
    Ghardaïa: 'Ghardaïa',
    Relizane: 'Relizane',
    Timimoun: 'Timimoun',
    'Bordj Badji Mokhtar': 'Bordj Badji Mokhtar',
    'Ouled Djellal': 'Ouled Djellal',
    'Béni Abbès': 'Béni Abbès',
    'In Salah': 'In Salah',
    'In Guezzam': 'In Guezzam',
    Touggourt: 'Touggourt',
    Djanet: 'Djanet',
    'El Meghaïer': 'El Meghaïer',
    'El Ménia': 'El Ménia'
  };
  return fr;
};
const arabicWillaya = () => {
  let ar = {
    Adrar: 'أدرار',
    Chlef: 'الشلف',
    Laghouat: 'الاغواط',
    'Oum Bouaghi': 'أم البواغي',
    Batna: 'باتنة',
    Béjaia: 'بجاية',
    Biskra: 'بسكرة',
    Béchar: 'بشار',
    Blida: 'البليدة',
    Bouira: 'البويرة',
    Tamanrasset: 'تامنراست',
    Tébessa: 'تبسة',
    Tlemcen: 'تلمسان',
    Tiaret: 'تيارت',
    'Tizi ouzou': 'تيزي وزو',
    Alger: 'الجزائر',
    Djelfa: 'الجلفة',
    Jijel: 'جيجل',
    Sétif: 'سطيف',
    Saida: 'سعيدة',
    Skikda: 'سكيكدة',
    'Sidi Bel Abbès': 'سيدي بالعباس',
    Annaba: 'عنابة',
    Guelma: 'قالمة',
    Constantine: 'قسنطينة',
    Médéa: 'المدية',
    Mostaganem: 'مستغانم',
    "M'sila": 'المسيلة',
    Mascara: 'معسكر',
    Ouargla: 'ورقلة',
    Oran: 'وهران',
    'El Bayadh': 'البيض',
    Illizi: 'ايليزي',
    'Bordj Bou Arreridj': 'برج بو عريريج',
    Boumerdès: 'بومرداس',
    'El Taref': 'الطارف',
    Tindouf: 'تندوف',
    Tissemsilt: 'تيسمسيلت',
    'El Oued': 'الوادي',
    Kenchela: 'خنشلة',
    'Souk Ahras': 'سوق أهراس',
    Tipaza: 'تيبازة',
    Mila: 'ميلة',
    'Aïn Defla': 'عين دفلة',
    Nâama: 'النعامة',
    'Aïn Temouchent': 'عين تموشنت',
    Ghardaïa: 'غرداية',
    Relizane: 'غيليزان',
    Timimoun: 'تيميمون',
    'Bordj Badji Mokhtar': 'برج باجي مختار',
    'Ouled Djellal': 'أولاد جلال',
    'Béni Abbès': 'بني عباس',
    'In Salah': 'إن صالح',
    'In Guezzam': 'إن قزام',
    Touggourt: 'تقرت',
    Djanet: 'جانت',
    'El Meghaïer': 'المغير',
    'El Ménia': 'المنيعة'
  };
  return ar;
};
// contactus
const frenchContactus = () => {
  let fr = {
    'Contactez-nous': 'Contactez-nous',
    'Prénom et nom': 'Prénom et nom',
    'E-mail': 'E-mail',
    'Objet de votre message': 'Objet de votre message',
    'Votre message': 'Votre message',
    Envoyer: 'Envoyer',
    'Chargement en cours': 'Chargement en cours',
    'Veuillez entrer Prénom et nom': 'Veuillez entrer Prénom et nom',
    'Veuillez entrer votre e-mail': 'Veuillez entrer votre e-mail',
    'Veuillez entrer Objet de votre message':
      'Veuillez entrer Objet de votre message',
    'Veuillez entrer Votre message': 'Veuillez entrer Votre message',
    'Soumis avec succès': 'Soumis avec succès',
    "s'il vous plaît entrez l'e-mail": "s'il vous plaît entrez l'e-mail"
  };
  return fr;
};
const arabicContactus = () => {
  let ar = {
    'Contactez-nous': 'اتصل بنا',
    'Prénom et nom': 'الإسم واللقب',
    'E-mail': 'البريد الالكتروني',
    'Objet de votre message': 'الموضوع',
    'Votre message': 'رسالتي',
    Envoyer: 'أبعت',
    'Chargement en cours': 'جار التحميل',
    'Veuillez entrer Prénom et nom': 'الرجاء إدخال الاسم الأول والأخير',
    'Veuillez entrer votre e-mail': 'رجاءا أدخل بريدك الإلكتروني',
    'Veuillez entrer Objet de votre message': 'الرجاء إدخال موضوع رسالتك',
    'Veuillez entrer Votre message': 'أدرج رسالتك من فضلك',
    'Soumis avec succès': 'قدمت بنجاح',
    "s'il vous plaît entrez l'e-mail": 'الرجاء إدخال البريد الإلكتروني'
  };
  return ar;
};
// popups
const frenchPopups = () => {
  let fr = {
    'Ton budget doit inclure tes frais de logement, de transport, de fonctionnement, ainsi que les frais de scolarité de ton futur établissement.':
      'Ton budget doit inclure tes frais de logement, de transport, de fonctionnement, ainsi que les frais de scolarité de ton futur établissement.',
    // confirmationpopup
    'Entre le code reçu par SMS': 'Entre le code reçu par SMS',
    Renvoyer: 'Renvoyer',
    Vérifier: 'Vérifier',
    'Entrez le code de vérification': 'Entrez le code de vérification',
    'Entre le code envoyé sur ton adresse e-mail. Attention, bien vérifier ses courriers indésirables (spams)':
      'Entre le code envoyé sur ton adresse e-mail. Attention, bien vérifier ses courriers indésirables (spams)'
  };
  return fr;
};
const arabicPopups = () => {
  let ar = {
    'Ton budget doit inclure tes frais de logement, de transport, de fonctionnement, ainsi que les frais de scolarité de ton futur établissement.':
      'يجب أن تتضمن ميزانيتك الإقامة والنقل وتكاليف التشغيل بالإضافة إلى الرسوم الدراسية لمؤسستك المستقبلية.',
    // confirmationpopup
    'Entre le code reçu par SMS':
      'أدخل الرمز الذي تلقيته عن طريق الرسائل القصيرة',
    Renvoyer: 'إعادة إرسال',
    Vérifier: 'يفحص',
    'Entrez le code de vérification': 'أدخل رمز التحقق',
    'Entre le code envoyé sur ton adresse e-mail. Attention, bien vérifier ses courriers indésirables (spams)':
      'أدخل الرمز المرسل إلى عنوان بريدك الإلكتروني. كن حذرًا ، تحقق من البريد غير الهام (البريد العشوائي) بعناية.'
  };
  return ar;
};
// questions
const frenchQuestions = () => {
  let fr = {
    "Très bien! Du coup, dis-moi c'est quoi ta vision du business?":
      "Très bien! Du coup, dis-moi c'est quoi ta vision du business?",
    'Pour commencer, choisis le profil dans lequel tu te reconnais le plus:':
      'Pour commencer, choisis le profil dans lequel tu te reconnais le plus:',
    'Maintenant, dis-moi ce que tu préfères pour te divertir:':
      'Maintenant, dis-moi ce que tu préfères pour te divertir:',
    'Je vois! Dans ce cas, quel rôle aimerais-tu y jouer?':
      'Je vois! Dans ce cas, quel rôle aimerais-tu y jouer?',
    "On y est presque! Est-ce que le critère de proximité géographique est important dans ton choix d'établissement?":
      "On y est presque! Est-ce que le critère de proximité géographique est important dans ton choix d'établissement?",
    'Encore une question, veux-tu inclure les études payantes?':
      'Encore une question, veux-tu inclure les études payantes?',
    'Maintenant dis-moi si tu veux inclure les formations sélectives:':
      'Maintenant dis-moi si tu veux inclure les formations sélectives:',
    'Veux-tu inclure les formations 100% en Arabe?':
      'Veux-tu inclure les formations 100% en Arabe?',
    "Let's speak English! Veux-tu inclure les formations 100% en Anglais?":
      "Let's speak English! Veux-tu inclure les formations 100% en Anglais?",
    'Souhaites-tu faire de longues études (minimum Master)?':
      'Souhaites-tu faire de longues études (minimum Master)?',
    'Quel est le critère le plus important dans le choix de ta formation?':
      'Quel est le critère le plus important dans le choix de ta formation?',
    'Envisages-tu des études à l’étranger directement après le Bac?':
      'Envisages-tu des études à l’étranger directement après le Bac?',
    'À quel pays penses-tu en particulier?':
      'À quel pays penses-tu en particulier?',
    "Dernière question, étudier à l'étranger est pour toi:":
      "Dernière question, étudier à l'étranger est pour toi:",
    "D'accord! Dis-moi dans ce cas ce qui te passionne le plus?":
      "D'accord! Dis-moi dans ce cas ce qui te passionne le plus?",
    'Très bien! Que préfères-tu parmi ces 4 domaines?':
      'Très bien! Que préfères-tu parmi ces 4 domaines?',
    "D'accord! Dis-moi dans ce cas quel aspect de la culture geek te passionne le plus?":
      "D'accord! Dis-moi dans ce cas quel aspect de la culture geek te passionne le plus?",
    "Très bien! Dans ce cas quel métier t'attire le plus?":
      "Très bien! Dans ce cas quel métier t'attire le plus?",
    'Dans ce cas, tu préfèrerais être un:':
      'Dans ce cas, tu préfèrerais être un:',
    'Je vois! Dans ce cas que souhaites-tu proposer?':
      'Je vois! Dans ce cas que souhaites-tu proposer?',
    'Fascinant! Dans quel type de structure voudrais-tu évoluer?':
      'Fascinant! Dans quel type de structure voudrais-tu évoluer?',
    "Très bien! Ton truc c'est plutôt": "Très bien! Ton truc c'est plutôt",
    'Comment tu verrais les choses?': 'Comment tu verrais les choses?',
    "D'accord! Quel domaine te correspond le plus?":
      "D'accord! Quel domaine te correspond le plus?",
    "Très bien! Ce qui t'attire le plus c'est plutôt:":
      "Très bien! Ce qui t'attire le plus c'est plutôt:",
    'Très bien! Quel métier souhaiterais-tu faire?':
      'Très bien! Quel métier souhaiterais-tu faire?',
    "Fascinant! Qu'est ce qui t'intéresse en particulier?":
      "Fascinant! Qu'est ce qui t'intéresse en particulier?",
    "D'accord! Que représente le sport pour toi?":
      "D'accord! Que représente le sport pour toi?",
    "J'ai compris! Ce que tu aimes en fait c'est plutôt:":
      "J'ai compris! Ce que tu aimes en fait c'est plutôt:",
    'Je vois! Quel rôle veux-tu y jouer?':
      'Je vois! Quel rôle veux-tu y jouer?',
    'Fascinant! Quel genre de produit?': 'Fascinant! Quel genre de produit?',
    'Très bien! Alors aimerais-tu plutôt?':
      'Très bien! Alors aimerais-tu plutôt?',
    'Très bien! Dans ce cas quel genre de roman apprécies-tu?':
      'Très bien! Dans ce cas quel genre de roman apprécies-tu?',
    'Fascinant! Quel genre de service?': 'Fascinant! Quel genre de service?',
    "J'ai compris! Ce qui te plaît, c'est plutôt:":
      "J'ai compris! Ce qui te plaît, c'est plutôt:",
    "Fascinant! Maintenant dis-moi c'est quoi ton truc?":
      "Fascinant! Maintenant dis-moi c'est quoi ton truc?"
  };
  return fr;
};
const arabicQuestions = () => {
  let ar = {
    "Très bien! Du coup, dis-moi c'est quoi ta vision du business?":
      'جيد جدا! لذا أخبرني ما هي رؤيتك للأعمال؟',
    'Pour commencer, choisis le profil dans lequel tu te reconnais le plus:':
      'للبدء ، اختر الملف الشخصي الذي تتعرف فيه على نفسك أكثر من غيرها:',
    'Maintenant, dis-moi ce que tu préfères pour te divertir:':
      'أخبرني الآن ما الذي تفضله للترفيه عن نفسك:',
    'Je vois! Dans ce cas, quel rôle aimerais-tu y jouer?':
      'أرى! إذا كان الأمر كذلك ، فما هو الدور الذي تود أن تلعبه فيه؟',
    "On y est presque! Est-ce que le critère de proximité géographique est important dans ton choix d'établissement?":
      'نحن على وشك الانتهاء! هل معيار القرب الجغرافي مهم في اختيارك للمنشأة؟',
    'Encore une question, veux-tu inclure les études payantes?':
      'سؤال آخر ، هل تريد تضمين الدراسات المدفوعة؟',
    'Maintenant dis-moi si tu veux inclure les formations sélectives:':
      'أخبرني الآن إذا كنت تريد تضمين التكوينات الانتقائية:',
    'Veux-tu inclure les formations 100% en Arabe?':
      'هل تريد تضمين دورات اللغة العربية بنسبة 100٪؟',
    "Let's speak English! Veux-tu inclure les formations 100% en Anglais?":
      'دعونا نتكلم الانجليزية! هل تريد تضمين دورات اللغة الإنجليزية بنسبة 100٪؟',
    'Souhaites-tu faire de longues études (minimum Master)?':
      'هل تريد دراسة طويلة (الحد الأدنى للماجستير)؟',
    'Quel est le critère le plus important dans le choix de ta formation?':
      'ما هو أهم معيار في اختيار تدريبك؟',
    'Envisages-tu des études à l’étranger directement après le Bac?':
      'هل تخطط للدراسة في الخارج بعد البكالوريا مباشرة؟',
    'À quel pays penses-tu en particulier?': 'ما البلد الذي تفكر فيه بالذات؟',
    "Dernière question, étudier à l'étranger est pour toi:":
      'السؤال الأخير ، الدراسة في الخارج لك:',
    "D'accord! Dis-moi dans ce cas ce qui te passionne le plus?":
      'نعم! أخبرني ما الذي يثيرك أكثر؟',
    'Très bien! Que préfères-tu parmi ces 4 domaines?':
      'جيد جدا! أي من هذه المجالات الأربعة تفضل؟',
    "D'accord! Dis-moi dans ce cas quel aspect de la culture geek te passionne le plus?":
      'نعم! أخبرني إذن ما هو الجانب الأكثر إثارة في ثقافة المهووسين؟',
    "Très bien! Dans ce cas quel métier t'attire le plus?":
      'جيد جدا! إذا كان الأمر كذلك ، ما هي الوظيفة التي تروق لك أكثر؟',
    'Dans ce cas, tu préfèrerais être un:': 'في هذه الحالة ، تفضل أن تكون:',
    'Je vois! Dans ce cas que souhaites-tu proposer?':
      'أرى! في هذه الحالة ماذا تود أن تقدم؟',
    'Fascinant! Dans quel type de structure voudrais-tu évoluer?':
      'مبهر! في أي نوع من الهياكل تريد أن تتطور؟',
    "Très bien! Ton truc c'est plutôt": 'جيد جدا! الشيء الخاص بك هو بالأحرى',
    'Comment tu verrais les choses?': 'كيف ترى الأشياء؟',
    "D'accord! Quel domaine te correspond le plus?":
      'نعم! أي منطقة تناسبك أكثر؟',
    "Très bien! Ce qui t'attire le plus c'est plutôt:":
      'جيد جدا! أكثر ما يجذبك هو بالأحرى:',
    'Très bien! Quel métier souhaiterais-tu faire?':
      'جيد جدا! أي عمل تفضل أن تقوم به؟',
    "Fascinant! Qu'est ce qui t'intéresse en particulier?":
      'مبهر! ما الذي تهتم به بشكل خاص؟',
    "D'accord! Que représente le sport pour toi?":
      'نعم! ماذا تمثل الرياضة بالنسبة لك؟',
    "J'ai compris! Ce que tu aimes en fait c'est plutôt:":
      'فهمت! ما يعجبك في الواقع هو:',
    'Je vois! Quel rôle veux-tu y jouer?':
      'أرى! ما هو الدور الذي تريد أن تلعبه فيه؟',
    'Fascinant! Quel genre de produit?': 'مبهر! أي نوع من المنتجات؟',
    'Très bien! Alors aimerais-tu plutôt?': 'جيد جدا! فهل تفضل؟',
    'Très bien! Dans ce cas quel genre de roman apprécies-tu?':
      'جيد جدا! إذا كان الأمر كذلك ، ما نوع الرواية التي تحبها؟',
    'Fascinant! Quel genre de service?': 'مبهر! أي نوع من الخدمة؟',
    "J'ai compris! Ce qui te plaît, c'est plutôt:": 'فهمت! ما يعجبك هو أكثر:',
    "Fascinant! Maintenant dis-moi c'est quoi ton truc?":
      'مبهر! الآن قل لي ما هو الشيء الخاص بك؟'
  };
  return ar;
};
// answers
const frenchAnswers = () => {
  let fr = {
    Business: 'Business',
    Littéraire: 'Littéraire',
    Artiste: 'Artiste',
    Fantastique: 'Fantastique',
    'Science-fiction': 'Science-fiction',
    Enquêteur: 'Enquêteur',
    Psychologue: 'Psychologue',
    Cuisine: 'Cuisine',
    'Fashion-mode': 'Fashion-mode',
    Design: 'Design',
    'Un engagement citoyen': 'Un engagement citoyen',
    'Une opportunité de business': 'Une opportunité de business',
    'Agent de sportif': 'Agent de sportif',
    'Coach/Préparateur': 'Coach/Préparateur',
    'Sciences de la vie': 'Sciences de la vie',
    Finance: 'Finance',
    'La technologie': 'La technologie',
    'Les effets spéciaux': 'Les effets spéciaux',
    'Un service': 'Un service',
    Digital: 'Digital',
    Physique: 'Physique',
    'Ingénieur du son': 'Ingénieur du son',
    Musicien: 'Musicien',
    Oui: 'Oui',
    Juge: 'Juge',
    'Rien en particulier': 'Rien en particulier',
    Oui: 'Oui',
    'Découvrir des nouveaux profils criminels':
      'Découvrir des nouveaux profils criminels',
    Durée: 'Durée',
    'Royaume-Uni': 'Royaume-Uni',
    Romancier: 'Romancier',
    'Architecture, design et mode': 'Architecture, design et mode',
    'États-Unis': 'États-Unis',
    'Arts visuels et sculpture': 'Arts visuels et sculpture',
    Suisse: 'Suisse',
    'Chant et musique': 'Chant et musique',
    Allemagne: 'Allemagne',
    'Littérature et art de la scène': 'Littérature et art de la scène',
    Russie: 'Russie',
    Acteur: 'Acteur',
    France: 'France',
    'Un Plan A': 'Un Plan A',
    Design: 'Design',
    Intérieur: 'Intérieur',
    'Informatique/électronique': 'Informatique/électronique',
    'Les chiffres': 'Les chiffres',
    'La culture asiatique': 'La culture asiatique',
    'Tu rêverais de les inventer': 'Tu rêverais de les inventer',
    'Tu aimes les découvrir': 'Tu aimes les découvrir',
    Dessin: 'Dessin',
    Regarder: 'Regarder',
    'Histoire/Culture/Civilisations': 'Histoire/Culture/Civilisations',
    'La cuisine': 'La cuisine',
    'Intégrer une start-up ou une multinationale':
      'Intégrer une start-up ou une multinationale',
    'Recruter et gérer des carrières': 'Recruter et gérer des carrières',
    'En entreprise': 'En entreprise',
    'En banque': 'En banque',
    'A la bourse': 'A la bourse',
    Prestige: 'Prestige',
    Sportif: 'Sportif',
    Scientifique: 'Scientifique',
    Geek: 'Geek',
    Lire: 'Lire',
    Historique: 'Historique',
    'Esprit US': 'Esprit US',
    Cinéma: 'Cinéma',
    'Ecrire le scénario': 'Ecrire le scénario',
    Architecture: 'Architecture',
    Web: 'Web',
    Intérieur: 'Intérieur',
    'Manager sportif/entraineur': 'Manager sportif/entraineur',
    Mécanique: 'Mécanique',
    Mathématiques: 'Mathématiques',
    'La science fiction': 'La science fiction',
    'Les jeux-vidéos': 'Les jeux-vidéos',
    'Les univers': 'Les univers',
    'Les scénarios': 'Les scénarios',
    'Lire des mangas': 'Lire des mangas',
    'La langue te plait': 'La langue te plait',
    'Un produit': 'Un produit',
    'Gérer les finances': 'Gérer les finances',
    'Manager les équipes': 'Manager les équipes',
    DJ: 'DJ',
    Non: 'Non',
    Canada: 'Canada',
    Espagne: 'Espagne',
    'Un Plan B': 'Un Plan B',
    'Regarder une série policière': 'Regarder une série policière',
    'Apprendre de nouvelles choses sur le monde':
      'Apprendre de nouvelles choses sur le monde',
    "Echanger avec ton correspondant à l'autre bout du monde":
      "Echanger avec ton correspondant à l'autre bout du monde",
    Avocat: 'Avocat',
    Scénario: 'Scénario',
    'Être derrière la caméra': 'Être derrière la caméra',
    "Gérer l'image et le son": "Gérer l'image et le son",
    'Une carrière de sportif': 'Une carrière de sportif',
    'Developper un projet': 'Developper un projet',
    'Gérer une entreprise dans le secteur':
      'Gérer une entreprise dans le secteur',
    'Medecin du sport': 'Medecin du sport',
    'Sportif de haut niveau': 'Sportif de haut niveau',
    Construction: 'Construction',
    "L'univers": "L'univers",
    'Créer mon entreprise': 'Créer mon entreprise',
    "S'occuper de la logistique, des stocks ou du transport":
      "S'occuper de la logistique, des stocks ou du transport",
    'Faire de la vente et de la relation client':
      'Faire de la vente et de la relation client',
    'Penser à des solutions techniques': 'Penser à des solutions techniques',
    "Améliorer la performance de l'entreprise":
      "Améliorer la performance de l'entreprise",
    Langue: 'Langue',
    Coût: 'Coût',
    Proximité: 'Proximité',
    Belgique: 'Belgique',
    Turquie: 'Turquie',
    Autre: 'Autre',
    'Sciences de la terre': 'Sciences de la terre'
  };
  return fr;
};
const arabicAnswers = () => {
  let ar = {
    Business: 'اعمال',
    Littéraire: 'أدبي',
    Artiste: 'فنان',
    Fantastique: 'جميل',
    'Science-fiction': 'الخيال العلمي',
    Enquêteur: 'محقق',
    Psychologue: 'الطبيب النفسي',
    Cuisine: 'مطبخ',
    'Fashion-mode': 'الموضة والأزياء',
    Design: 'تصميم',
    'Un engagement citoyen': 'التزام مدني',
    'Une opportunité de business': 'فرصة عمل',
    'Agent de sportif': 'وكيل رياضي',
    'Coach/Préparateur': 'مدرب / محضر',
    'Sciences de la vie': 'علوم الحياة',
    Finance: 'تمويل',
    'La technologie': 'التكنولوجيا',
    'Les effets spéciaux': 'المؤثرات الخاصة',
    'Un service': 'خدمة',
    Digital: 'رقمي',
    Physique: 'بدني',
    'Ingénieur du son': 'مهندس صوت',
    Musicien: 'وسيقي او عازف',
    Oui: 'نعم',
    Juge: 'يحكم على',
    'Rien en particulier': 'لا شيء على وجه الخصوص',
    'Découvrir des nouveaux profils criminels':
      'اكتشف ملفات تعريف جنائية جديدة',
    Durée: 'مدة',
    'Royaume-Uni': 'المملكة المتحدة',
    Romancier: 'الروائي',
    'Architecture, design et mode': 'العمارة والتصميم والموضة',
    'États-Unis': 'الولايات المتحدة',
    'Arts visuels et sculpture': 'الفنون التشكيلية والنحت',
    Suisse: 'سويسري',
    'Chant et musique': 'الغناء والموسيقى',
    Allemagne: 'ألمانيا',
    'Littérature et art de la scène': 'الأدب والفنون المسرحية',
    Russie: 'روسيا',
    Acteur: 'ممثل',
    France: 'فرنسا',
    'Un Plan A': 'خطة أ',
    Design: 'تصميم',
    Intérieur: 'الداخلية',
    'Informatique/électronique': 'تكنولوجيا المعلومات / الإلكترونيات',
    'Les chiffres': 'الأرقام',
    'La culture asiatique': 'الثقافة الآسيوية',
    'Tu rêverais de les inventer': 'سوف تحلم باختراعهم',
    'Tu aimes les découvrir': 'تحب اكتشافهم',
    Dessin: 'رسم',
    Regarder: 'شاهد',
    'Histoire/Culture/Civilisations': 'تاريخ / ثقافة / حضارات',
    'La cuisine': 'المطبخ',
    'Intégrer une start-up ou une multinationale':
      'دمج شركة ناشئة أو متعددة الجنسيات',
    'Recruter et gérer des carrières': 'توظيف وإدارة الوظائف',
    'En entreprise': 'فى الشركه',
    'En banque': 'في المصرف',
    'A la bourse': 'تداول الاسهم',
    Prestige: 'هيبة',
    Sportif: 'جوك',
    Scientifique: 'علمي',
    Geek: 'المهووس',
    Lire: 'اقرأ',
    Historique: 'تاريخي',
    'Esprit US': 'روح الولايات المتحدة',
    Cinéma: 'مسرح فيلم',
    'Ecrire le scénario': 'اكتب السيناريو',
    Architecture: 'هندسة عامة',
    Web: 'موقع الكتروني',
    Intérieur: 'الداخلية',
    'Manager sportif/entraineur': 'مدير / مدرب رياضي',
    Mécanique: 'ميكانيكي',
    Mathématiques: 'رياضيات',
    'La science fiction': 'الخيال العلمي',
    'Les jeux-vidéos': 'ألعاب الفيديو',
    'Les univers': 'الأكوان',
    'Les scénarios': 'سيناريوهات',
    'Lire des mangas': 'قراءة المانجا',
    'La langue te plait': 'تعجبك اللغة',
    'Un produit': 'منتج',
    'Gérer les finances': 'يدير امور ماليه',
    'Manager les équipes': 'إدارة الفرق',
    DJ: 'دي جي',
    Non: 'لا',
    Canada: 'كندا',
    Espagne: 'إسبانيا',
    'Un Plan B': 'خطة ب',
    'Regarder une série policière': 'مشاهدة مسلسل المباحث',
    'Apprendre de nouvelles choses sur le monde': 'تعلم أشياء جديدة عن العالم',
    "Echanger avec ton correspondant à l'autre bout du monde":
      'تبادل مع مراسلتك على الجانب الآخر من العالم',
    Avocat: 'محامي',
    Scénario: 'النصي',
    'Être derrière la caméra': 'كن خلف الكاميرا',
    "Gérer l'image et le son": 'إدارة الصورة والصوت',
    'Une carrière de sportif': 'مهنة رياضية',
    'Developper un projet': 'تطوير مشروع',
    'Gérer une entreprise dans le secteur': 'إدارة الأعمال في القطاع',
    'Medecin du sport': 'طبيب رياضي',
    'Sportif de haut niveau': 'أفضل رياضي',
    Construction: 'بناء',
    "L'univers": 'الكون',
    'Créer mon entreprise': 'إنشاء عملي',
    "S'occuper de la logistique, des stocks ou du transport":
      'اعتني بالخدمات اللوجستية أو المخزون أو النقل',
    'Faire de la vente et de la relation client':
      'المبيعات والعلاقات مع العملاء',
    'Penser à des solutions techniques': 'التفكير في الحلول التقنية',
    "Améliorer la performance de l'entreprise": 'تحسين أداء الأعمال',
    Langue: 'لغة',
    Coût: 'كلفة',
    Proximité: 'القرب',
    Belgique: 'بلجيكا',
    Turquie: 'ديك رومى',
    'Sciences de la terre': 'علوم الأرض'
  };
  return ar;
};

// footer
const frenchFooter = () => {
  let fr = {
    'Tous droits réservés': 'Tous droits réservés',
    CGU: 'CGU',
    'Mentions légales': 'Mentions légales'
  };
  return fr;
};
const arabicFooter = () => {
  let ar = {
    'Tous droits réservés': 'جميع الحقوق محفوظة',
    CGU: 'شروط الإستعمال',
    'Mentions légales': 'معلومات قانونية'
  };
  return ar;
};
// country
const frenchCountry = () => {
  let fr = {
    France: 'France',
    'United Kingdom': 'United Kingdom',
    Allemagne: 'Allemagne',
    Italie: 'Italie',
    Russie: 'Russie',
    Ukraine: 'Ukraine',
    Espagne: 'Espagne',
    Belgique: 'Belgique',
    USA: 'USA',
    Canada: 'Canada',
    Turquie: 'Turquie',
    Suisse: 'Suisse'
  };
  return fr;
};
const arabicCountry = () => {
  let ar = {
    France: 'فرنسا',
    'United Kingdom': 'المملكة المتحدة',
    Allemagne: 'ألمانيا',
    Italie: 'إيطاليا',
    Russie: 'روسيا',
    Ukraine: 'أوكرانيا',
    Espagne: 'إسبانيا',
    Belgique: 'بلجيكا',
    USA: 'الولايات المتحدة الأمريكية',
    Canada: 'كندا',
    Turquie: 'ديك رومى',
    Suisse: 'سويسري'
  };
  return ar;
};
// city
const frenchCity = () => {
  let fr = {
    Paris: 'Paris',
    Lyon: 'Lyon',
    Montpellier: 'Montpellier',
    Marseille: 'Marseille',
    'Aix-en-Provence': 'Aix-en-Provence',
    Nantes: 'Nantes',
    Lille: 'Lille',
    Toulouse: 'Toulouse',
    Strasbourg: 'Strasbourg',
    Bordeaux: 'Bordeaux',
    Rennes: 'Rennes'
  };
  return fr;
};
const arabicCity = () => {
  let ar = {
    Paris: 'باريس',
    Lyon: 'ليونز',
    Montpellier: 'مونبلييه',
    Marseille: 'مرسيليا',
    'Aix-en-Provence': 'إيكس أون بروفانس',
    Nantes: 'نانت',
    Lille: 'ليل',
    Toulouse: 'تولوز',
    Strasbourg: 'ستراسبورغ',
    Bordeaux: 'بوردو',
    Rennes: 'الرنة'
  };
  return ar;
};
// formcriteria
const frenchCriteria = () => {
  let fr = {
    '5 000€ - 7 500€': '5 000€ - 7 500€',
    'Plus de 15 000€': 'Plus de 15 000€',
    "J'ai déjà un logement là-bas": "J'ai déjà un logement là-bas",
    "J'ai un ou plusieurs membres de ma famille sur qui je peux compter":
      "J'ai un ou plusieurs membres de ma famille sur qui je peux compter",
    'Cette destination correspond à mon budget':
      'Cette destination correspond à mon budget',
    'Je pars avec des amis': 'Je pars avec des amis',
    "L'établissement ou le programme que je vise se trouve dans cette destination":
      "L'établissement ou le programme que je vise se trouve dans cette destination",
    "J'ai entendu de bons retours la part d'amis et de proches":
      "J'ai entendu de bons retours la part d'amis et de proches",
    Autre: 'Autre',
    'Départ!': 'Départ!',
    'Qui suis-je?': 'Qui suis-je?',
    'Mon test': 'Mon test',
    'Mes résultats': 'Mes résultats'
  };
  return fr;
};
const arabicCriteria = () => {
  let ar = {
    '5 000€ - 7 500€': '5000 يورو - 7500 يورو',
    'Plus de 15 000€': 'أكثر من 15000 يورو',
    "J'ai déjà un logement là-bas": 'لدي بالفعل سكن هناك',
    "J'ai un ou plusieurs membres de ma famille sur qui je peux compter":
      'لدي فرد أو أكثر من أفراد الأسرة يمكنني الاعتماد عليهم',
    'Cette destination correspond à mon budget': 'هذه الوجهة تناسب ميزانيتي',
    'Je pars avec des amis': 'أذهب مع الأصدقاء',
    "L'établissement ou le programme que je vise se trouve dans cette destination":
      'المؤسسة أو البرنامج الذي أستهدفه موجود في هذه الوجهة',
    "J'ai entendu de bons retours la part d'amis et de proches":
      'لقد سمعت ردود فعل جيدة من الأصدقاء والأقارب',
    Autre: 'آخر',
    'Départ!': 'الاقلاع!',
    'Qui suis-je?': 'من أنا؟',
    'Mon test': 'اختباري',
    'Mes résultats': 'نتائجي'
  };
  return ar;
};

const french = () => {
  let fr = {};
  return fr;
};
const arabic = () => {
  let ar = {};
  return ar;
};

export {
  arabicHeader,
  frenchHeader,
  frenchLandingPage,
  ArabicLandingPage,
  frenchUserform,
  arabicUserform,
  frenchWillaya,
  arabicWillaya,
  frenchContactus,
  arabicContactus,
  frenchPopups,
  arabicPopups,
  frenchQuestions,
  arabicQuestions,
  frenchAnswers,
  arabicAnswers,
  frenchCountry,
  arabicCountry,
  frenchCity,
  arabicCity,
  frenchCriteria,
  arabicCriteria,
  frenchFooter,
  arabicFooter
};
