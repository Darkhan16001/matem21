
"use strict";

// =====================================================
// §20. ТЕҢДЕУЛЕР ЖӘНЕ ОЛАРДЫҢ ЖҮЙЕЛЕРІН
// ШЕШУДІҢ ЖАЛПЫ ӘДІСТЕРІ
// BY DARKHAN
// =====================================================

const $ = id => document.getElementById(id);
const M = String.raw;

const lesson = {
  title: "Теңдеулер және олардың жүйелерін шешудің жалпы әдістері",
  goal: "Теңдеулерді көбейткіштерге жіктеу, мәндес түрлендіру, жаңа айнымалы енгізу, алмастыру және алгебралық қосу әдістері арқылы шешу. Теңдеулердің түбірлерін және жүйелердің шешімдерін тексеруді үйрену."
};

// =====================================================
// 1. БЕС ТЕОРИЯЛЫҚ ТҮСІНДІРМЕ
// =====================================================

const theory = [
  {
    title: "Көбейткіштерге жіктеу әдісі",

    definition:
      "Көбейткіштерге жіктеу — көпмүшені екі немесе бірнеше өрнектің көбейтіндісі ретінде жазу әдісі. Егер көбейтінді нөлге тең болса, онда оның кемінде бір көбейткіші нөлге тең болады.",

    explain:
      "Мысалы, x квадраты минус бес x плюс алты нөлге тең деген теңдеуді қарастырайық. Көбейтіндісі алтыға, қосындысы минус беске тең екі санды табамыз. Олар минус екі және минус үш. Сондықтан көпмүшені x минус екі және x минус үш өрнектерінің көбейтіндісі түрінде жазуға болады. Көбейтіндінің нөл болуы үшін бірінші немесе екінші жақша нөлге тең болуы керек. Осыдан екі және үш түбірлерін аламыз. Екеуін де бастапқы теңдеуге қойып тексереміз.",

    rule:
      "Көбейтінді нөлге тең болса, көбейткіштердің әрқайсысын жеке нөлге теңестіріп шешеміз.",

    formula:
      M`A(x)B(x)=0\iff A(x)=0\ \lor\ B(x)=0`,

    steps: [
      M`x^2-5x+6=0`,
      M`(x-2)(x-3)=0`,
      M`x-2=0\quad\lor\quad x-3=0`,
      M`x=2\quad\lor\quad x=3`
    ],

    warning:
      "Көбейтінді нөлге тең болса, барлық көбейткіш міндетті түрде нөл болады деген сөз емес."
  },

  {
    title: "Мәндес түрлендіру әдісі",

    definition:
      "Мәндес теңдеулер — шешімдерінің жиыны бірдей болатын теңдеулер. Теңдеуді түрлендіргенде бастапқы анықталу шарттарын сақтау керек.",

    explain:
      "Бөлшек теңдеуде айнымалы бөлімде орналасса, бөлімді нөлге айналдыратын мәнді алдын ала алып тастаймыз. Мысалы, x плюс бір өрнегінің x минус екіге қатынасы екіге тең болсын. Алдымен x екіге тең емес деп жазамыз. Содан кейін екі жақты x минус екіге көбейтеміз. Жақшаларды ашып, сызықтық теңдеу құрамыз. Шешім x беске тең болады. Бес саны бөлімді нөлге айналдырмайды, сондықтан жарамды түбір.",

    rule:
      "Алдымен анықталу облысын жазамыз. Теңдеуді түрлендіріп шешкеннен кейін түбірді бастапқы теңдеуге қоямыз.",

    formula:
      M`\frac{x+1}{x-2}=2,\qquad x\ne2`,

    steps: [
      M`\frac{x+1}{x-2}=2`,
      M`x\ne2`,
      M`x+1=2(x-2)`,
      M`x+1=2x-4`,
      M`x=5`
    ],

    warning:
      "Бөлімді нөлге айналдыратын сан ешқашан бастапқы теңдеудің шешімі болмайды."
  },

  {
    title: "Жаңа айнымалы енгізу әдісі",

    definition:
      "Егер теңдеуде бірдей күрделі өрнек бірнеше рет кездессе, оны жаңа айнымалымен алмастыруға болады.",

    explain:
      "Төртінші дәрежелі теңдеуде x квадраты кездессе, x квадратын t арқылы белгілеу ыңғайлы. Мысалы, x төртінші дәрежесі минус бес x квадраты плюс төрт нөлге тең болсын. x квадратын t арқылы алмастырсақ, t квадраты минус бес t плюс төрт нөлге тең болады. Бұл қарапайым квадрат теңдеу. Оның түбірлері бір және төрт. Енді x квадраты бірге немесе төртке тең екенін шешеміз. Соңында минус екі, минус бір, бір және екі мәндерін аламыз.",

    rule:
      "Алмастырудан кейін жаңа айнымалыны шешіп, міндетті түрде бастапқы айнымалыға қайта ораламыз.",

    formula:
      M`t=x^2`,

    steps: [
      M`x^4-5x^2+4=0`,
      M`t=x^2`,
      M`t^2-5t+4=0`,
      M`(t-1)(t-4)=0`,
      M`t=1\quad\lor\quad t=4`,
      M`x=-2,-1,1,2`
    ],

    warning:
      "t айнымалысының мәндері соңғы жауап емес. Бастапқы x айнымалысын табу қажет."
  },

  {
    title: "Алмастыру әдісі арқылы жүйе шешу",

    definition:
      "Алмастыру әдісі — жүйенің бір теңдеуінен бір айнымалыны өрнектеп, оны екінші теңдеуге қою тәсілі.",

    explain:
      "Мысалы, x пен y қосындысы жетіге, ал айырмасы бірге тең болсын. Бірінші теңдеуден y санын жеті минус x деп өрнектейміз. Оны екінші теңдеуге қоямыз. Жақшаларды ашқан соң екі x минус жеті бірге тең болады. Осыдан x төртке тең. Бірінші теңдеуге қайта қойып, y үшке тең екенін анықтаймыз. Екі мәнді де жүйеге қойсақ, барлық теңдіктер дұрыс орындалады.",

    rule:
      "Бір айнымалыны өрнектейміз, екінші теңдеуге қоямыз және екі белгісізді кезекпен табамыз.",

    formula:
      M`\begin{cases}x+y=7\\x-y=1\end{cases}`,

    steps: [
      M`y=7-x`,
      M`x-(7-x)=1`,
      M`2x-7=1`,
      M`2x=8`,
      M`x=4`,
      M`y=3`,
      M`(x;y)=(4;3)`
    ],

    warning:
      "Жүйенің шешімін (x;y) ретімен жазу керек."
  },

  {
    title: "Алгебралық қосу әдісі",

    definition:
      "Алгебралық қосу әдісінде жүйенің теңдеулерін қосу немесе азайту арқылы бір белгісізді жоямыз.",

    explain:
      "Мысалы, екі x плюс y сегізге, ал x минус y бірге тең болсын. Осы екі теңдеуді қосқанда оң y мен теріс y қысқарады. Үш x тоғызға тең болады. Сондықтан x үшке тең. Табылған x мәнін бірінші теңдеуге қойсақ, екі көбейтілген үш плюс y сегізге тең болады. Осыдан y екіге тең. Жүйенің шешімі үш және екі жұбы болады. Егер коэффициенттер қарама-қарсы болмаса, алдымен бір немесе екі теңдеуді тиісті санға көбейтуге болады.",

    rule:
      "Бір айнымалының коэффициенттерін қарама-қарсы етіп, теңдеулерді қосамыз.",

    formula:
      M`\begin{cases}2x+y=8\\x-y=1\end{cases}`,

    steps: [
      M`(2x+y)+(x-y)=8+1`,
      M`3x=9`,
      M`x=3`,
      M`2\cdot3+y=8`,
      M`y=2`,
      M`(x;y)=(3;2)`
    ],

    warning:
      "Теңдеулерді қосқанда барлық мүшені таңбасымен бірге дұрыс қосыңдар."
  }
];

// =====================================================
// 2. ОН КОНСПЕКТ — 20 ӨЗІНДІК ЕСЕП
// =====================================================

const notes = [
  {
    title: "Теңдеу және оның түбірі",
    text:
      "Теңдеу — белгісіз айнымалысы бар теңдік. Теңдеудің түбірі — бастапқы теңдікті дұрыс ететін сан. Түбірді тексеру үшін сол санды айнымалы орнына қоямыз.",

    formula: M`2x+3=11`,

    example: [
      M`2x+3=11`,
      M`2x=8`,
      M`x=4`
    ],

    self: [
      {
        q: M`3x+2=17`,
        steps: [M`3x=15`],
        answer: M`x=5`
      },
      {
        q: M`5x-4=21`,
        steps: [M`5x=25`],
        answer: M`x=5`
      }
    ]
  },

  {
    title: "Көбейткіштерге жіктеу",
    text:
      "Квадрат үшмүшені екі көбейткішке жіктеп, олардың әрқайсысын нөлге теңестіруге болады. Осы тәсілмен екі түбір табамыз.",

    formula: M`(x-a)(x-b)=0`,

    example: [
      M`x^2-7x+12=0`,
      M`(x-3)(x-4)=0`,
      M`x=3,\quad x=4`
    ],

    self: [
      {
        q: M`x^2-5x+6=0`,
        steps: [M`(x-2)(x-3)=0`],
        answer: M`x=2,\quad x=3`
      },
      {
        q: M`x^2-9=0`,
        steps: [M`(x-3)(x+3)=0`],
        answer: M`x=-3,\quad x=3`
      }
    ]
  },

  {
    title: "Дискриминант арқылы шешу",
    text:
      "Квадрат теңдеудің дискриминанты коэффициенттер арқылы есептеледі. Дискриминант оң болса екі түрлі нақты түбір, нөл болса бір еселі нақты түбір болады. Теріс болғанда нақты түбір жоқ.",

    formula:
      M`D=b^2-4ac,\qquad x=\frac{-b\pm\sqrt D}{2a}`,

    example: [
      M`x^2-5x+4=0`,
      M`D=25-16=9`,
      M`x=\frac{5\pm3}{2}`,
      M`x=1,\quad x=4`
    ],

    self: [
      {
        q: M`x^2-6x+8=0`,
        steps: [M`D=36-32=4`],
        answer: M`x=2,\quad x=4`
      },
      {
        q: M`x^2-4x+4=0`,
        steps: [M`D=16-16=0`],
        answer: M`x=2`
      }
    ]
  },

  {
    title: "Бөлшек теңдеулер",
    text:
      "Бөлшек теңдеудің бөлімінде белгісіз айнымалы болса, бөлімнің нөлге тең болмау шартын жазамыз. Теңдеуді шешіп, табылған мәнді осы шартпен тексереміз.",

    formula:
      M`\frac{A(x)}{B(x)}=c,\qquad B(x)\ne0`,

    example: [
      M`\frac{x+1}{x-2}=2`,
      M`x\ne2`,
      M`x+1=2x-4`,
      M`x=5`
    ],

    self: [
      {
        q: M`\frac{x+2}{x-1}=2`,
        steps: [
          M`x\ne1`,
          M`x+2=2x-2`
        ],
        answer: M`x=4`
      },
      {
        q: M`\frac{x+1}{x-3}=2`,
        steps: [
          M`x\ne3`,
          M`x+1=2x-6`
        ],
        answer: M`x=7`
      }
    ]
  },

  {
    title: "Жаңа айнымалы енгізу",
    text:
      "Төртінші дәрежелі теңдеуді кейде x квадраты арқылы квадрат теңдеуге келтіреміз. Жаңа айнымалының түбірлерінен бастапқы айнымалының барлық нақты мәндерін табамыз.",

    formula:
      M`t=x^2`,

    example: [
      M`x^4-5x^2+4=0`,
      M`t^2-5t+4=0`,
      M`t=1,\quad t=4`,
      M`x=-2,-1,1,2`
    ],

    self: [
      {
        q: M`x^4-10x^2+9=0`,
        steps: [
          M`t^2-10t+9=0`,
          M`t=1,\quad t=9`
        ],
        answer: M`x=-3,-1,1,3`
      },
      {
        q: M`x^4-13x^2+36=0`,
        steps: [
          M`t^2-13t+36=0`,
          M`t=4,\quad t=9`
        ],
        answer: M`x=-3,-2,2,3`
      }
    ]
  },

  {
    title: "Көрсеткіштік теңдеулер",
    text:
      "Негіздері бірдей көрсеткіштік өрнектер тең болса, көрсеткіштерді теңестіруге болады. Негіз оң және бірге тең емес болуы шарт.",

    formula:
      M`a^{f(x)}=a^{g(x)}\iff f(x)=g(x)`,

    example: [
      M`2^{x+1}=16`,
      M`2^{x+1}=2^4`,
      M`x+1=4`,
      M`x=3`
    ],

    self: [
      {
        q: M`3^{x+1}=81`,
        steps: [
          M`81=3^4`,
          M`x+1=4`
        ],
        answer: M`x=3`
      },
      {
        q: M`2^{2x}=64`,
        steps: [
          M`64=2^6`,
          M`2x=6`
        ],
        answer: M`x=3`
      }
    ]
  },

  {
    title: "Логарифмдік теңдеулер",
    text:
      "Логарифмдік теңдеулерде аргумент міндетті түрде оң болады. Логарифм анықтамасын қолдану арқылы теңдеуді көрсеткіштік түрге айналдырамыз.",

    formula:
      M`\log_a f(x)=b\iff f(x)=a^b`,

    example: [
      M`\log_2(x-1)=3`,
      M`x>1`,
      M`x-1=8`,
      M`x=9`
    ],

    self: [
      {
        q: M`\log_3(x+1)=2`,
        steps: [M`x+1=9`],
        answer: M`x=8`
      },
      {
        q: M`\log_2(x-3)=4`,
        steps: [
          M`x>3`,
          M`x-3=16`
        ],
        answer: M`x=19`
      }
    ]
  },

  {
    title: "Алмастыру әдісі",
    text:
      "Теңдеулер жүйесінде бір айнымалыны екіншісі арқылы өрнектеп, оны қалған теңдеуге қоямыз. Бірінші айнымалы табылған соң екіншісін есептейміз.",

    formula:
      M`\begin{cases}x+y=7\\x-y=1\end{cases}`,

    example: [
      M`y=7-x`,
      M`x-(7-x)=1`,
      M`x=4`,
      M`y=3`
    ],

    self: [
      {
        q: M`\begin{cases}x+y=9\\x-y=3\end{cases}`,
        steps: [
          M`2x=12`,
          M`x=6`
        ],
        answer: M`(x;y)=(6;3)`
      },
      {
        q: M`\begin{cases}x+y=11\\x-y=1\end{cases}`,
        steps: [
          M`2x=12`,
          M`x=6`
        ],
        answer: M`(x;y)=(6;5)`
      }
    ]
  },

  {
    title: "Алгебралық қосу әдісі",
    text:
      "Жүйедегі теңдеулерді қосып немесе азайтып бір белгісізді жоямыз. Айнымалылардың коэффициенттері қарама-қарсы болса, қосу әдісін қолдану өте ыңғайлы.",

    formula:
      M`\begin{cases}2x+y=8\\x-y=1\end{cases}`,

    example: [
      M`3x=9`,
      M`x=3`,
      M`y=2`
    ],

    self: [
      {
        q: M`\begin{cases}2x+y=11\\x-y=1\end{cases}`,
        steps: [
          M`3x=12`,
          M`x=4`
        ],
        answer: M`(x;y)=(4;3)`
      },
      {
        q: M`\begin{cases}3x+y=14\\x-y=2\end{cases}`,
        steps: [
          M`4x=16`,
          M`x=4`
        ],
        answer: M`(x;y)=(4;2)`
      }
    ]
  },

  {
    title: "Түбірлерді тексеру",
    text:
      "Есепті шешкеннен кейін табылған мәндерді міндетті түрде бастапқы теңдеуге қоямыз. Жүйенің шешімі жүйедегі барлық теңдеуді бір мезгілде қанағаттандыруы керек.",

    formula:
      M`f(x)=0,\qquad f(x_0)=0`,

    example: [
      M`2x+5=13`,
      M`x=4`,
      M`2\cdot4+5=13`
    ],

    self: [
      {
        q: M`4x-7=17`,
        steps: [M`4x=24`],
        answer: M`x=6`
      },
      {
        q: M`\begin{cases}x+y=8\\x-y=2\end{cases}`,
        steps: [
          M`2x=10`,
          M`x=5`
        ],
        answer: M`(x;y)=(5;3)`
      }
    ]
  }
];

// =====================================================
// 3. ТӨРТ ДЕҢГЕЙ — 20 ЕСЕП
// =====================================================

function task(q, options, correct, steps) {
  return { q, options, correct, steps };
}

const levels = [
  {
    name: "I деңгей — Жеңіл",
    points: 5,

    tasks: [
      task(
        M`3x+4=19`,
        ["x = 3", "x = 4", "x = 5", "x = 6"],
        2,
        [M`3x=15`, M`x=5`]
      ),

      task(
        M`x^2-9=0`,
        ["−3 және 3", "0 және 9", "Тек 3", "−9 және 9"],
        0,
        [M`(x-3)(x+3)=0`, M`x=-3,\quad x=3`]
      ),

      task(
        M`2^x=32`,
        ["x = 4", "x = 6", "x = 3", "x = 5"],
        3,
        [M`2^x=2^5`, M`x=5`]
      ),

      task(
        M`\log_2 x=4`,
        ["x = 8", "x = 16", "x = 4", "x = 32"],
        1,
        [M`x=2^4`, M`x=16`]
      ),

      task(
        M`5x-10=0`,
        ["x = 5", "x = −2", "x = 2", "x = 10"],
        2,
        [M`5x=10`, M`x=2`]
      )
    ]
  },

  {
    name: "II деңгей — Орташа",
    points: 10,

    tasks: [
      task(
        M`x^2-7x+12=0`,
        ["2 және 6", "3 және 4", "−3 және −4", "1 және 12"],
        1,
        [M`(x-3)(x-4)=0`, M`x=3,\quad x=4`]
      ),

      task(
        M`\frac{x+2}{x-1}=2`,
        ["x = 3", "x = 2", "x = 5", "x = 4"],
        3,
        [
          M`x\ne1`,
          M`x+2=2x-2`,
          M`x=4`
        ]
      ),

      task(
        M`3^{x+1}=81`,
        ["x = 3", "x = 4", "x = 2", "x = 5"],
        0,
        [M`3^{x+1}=3^4`, M`x=3`]
      ),

      task(
        M`\log_3(x+2)=2`,
        ["x = 9", "x = 5", "x = 7", "x = 11"],
        2,
        [M`x+2=9`, M`x=7`]
      ),

      task(
        M`x^2-5x+4=0`,
        ["2 және 3", "1 және 4", "−1 және −4", "0 және 5"],
        1,
        [M`(x-1)(x-4)=0`, M`x=1,\quad x=4`]
      )
    ]
  },

  {
    name: "III деңгей — Қиын",
    points: 15,

    tasks: [
      task(
        M`x^4-10x^2+9=0`,
        [
          "−3, −1, 1, 3",
          "−9, −1, 1, 9",
          "1 және 9",
          "−3 және 3"
        ],
        0,
        [
          M`t=x^2`,
          M`t^2-10t+9=0`,
          M`t=1,\quad t=9`,
          M`x=-3,-1,1,3`
        ]
      ),

      task(
        M`\begin{cases}x+y=9\\x-y=3\end{cases}`,
        ["(3;6)", "(5;4)", "(7;2)", "(6;3)"],
        3,
        [
          M`2x=12`,
          M`x=6`,
          M`y=3`
        ]
      ),

      task(
        M`\begin{cases}2x+y=11\\x-y=1\end{cases}`,
        ["(3;5)", "(4;3)", "(5;1)", "(2;7)"],
        1,
        [
          M`3x=12`,
          M`x=4`,
          M`y=3`
        ]
      ),

      task(
        M`\log_2(x-3)=4`,
        ["x = 13", "x = 16", "x = 19", "x = 21"],
        2,
        [
          M`x>3`,
          M`x-3=16`,
          M`x=19`
        ]
      ),

      task(
        M`\frac{x+1}{x-2}=2`,
        ["x = 5", "x = 2", "x = 3", "x = −5"],
        0,
        [
          M`x\ne2`,
          M`x+1=2x-4`,
          M`x=5`
        ]
      )
    ]
  },

  {
    name: "IV деңгей — Өте қиын",
    points: 20,

    tasks: [
      task(
        M`x^4-13x^2+36=0`,
        [
          "−6, −1, 1, 6",
          "−3, −2, 2, 3",
          "2 және 3",
          "−9 және 9"
        ],
        1,
        [
          M`t=x^2`,
          M`t^2-13t+36=0`,
          M`t=4,\quad t=9`,
          M`x=-3,-2,2,3`
        ]
      ),

      task(
        M`\begin{cases}3x+2y=16\\x-y=2\end{cases}`,
        ["(2;5)", "(5;1)", "(6;−1)", "(4;2)"],
        3,
        [
          M`y=x-2`,
          M`3x+2(x-2)=16`,
          M`5x=20`,
          M`x=4,\quad y=2`
        ]
      ),

      task(
        M`x^2-6x+5=0`,
        ["1 және 5", "−1 және −5", "2 және 4", "3 және 5"],
        0,
        [
          M`(x-1)(x-5)=0`,
          M`x=1,\quad x=5`
        ]
      ),

      // ТҮЗЕТІЛГЕН ЕСЕП:
      // 2x+3y=18 және x+y=7
      // Нәтиже: x=3, y=4
      // Дұрыс жауап: бірінші нұсқа, индекс 0.

      task(
        M`\begin{cases}2x+3y=18\\x+y=7\end{cases}`,
        ["(3;4)", "(2;5)", "(4;3)", "(5;2)"],
        0,
        [
          M`x=7-y`,
          M`2(7-y)+3y=18`,
          M`14+y=18`,
          M`y=4`,
          M`x=3`,
          M`(x;y)=(3;4)`
        ]
      ),

      task(
        M`(\log_2 x)^2-3\log_2 x+2=0`,
        ["2 және 8", "1 және 4", "2 және 4", "4 және 8"],
        2,
        [
          M`t=\log_2 x`,
          M`t^2-3t+2=0`,
          M`t=1,\quad t=2`,
          M`x=2,\quad x=4`
        ]
      )
    ]
  }
];

// =====================================================
// 4. КОМАНДАЛЫҚ ОЙЫН — 15 СҰРАҚ
// =====================================================

const quiz = [
  {
    q: "Көбейтінді нөлге тең болуы үшін не қажет?",
    a: [
      "Барлық көбейткіш нөл",
      "Кемінде бір көбейткіш нөл",
      "Тек сандар теріс",
      "Түбір болмайды"
    ],
    c: 1
  },
  {
    q: "x² − 9 = 0 теңдеуінің түбірлері?",
    a: [
      "−3 және 3",
      "0 және 9",
      "Тек 3",
      "−9 және 9"
    ],
    c: 0
  },
  {
    q: "Мәндес теңдеулер дегеніміз не?",
    a: [
      "Айнымалылары әртүрлі",
      "Коэффициенттері бірдей",
      "Шешімдер жиыны бірдей",
      "Тек квадрат теңдеулер"
    ],
    c: 2
  },
  {
    q: "Бөлшек теңдеудің бөлімі неге тең болмауы керек?",
    a: ["1", "−1", "2", "0"],
    c: 3
  },
  {
    q: "x⁴ − 5x² + 4 = 0 теңдеуінде тиімді алмастыру?",
    a: [
      "t = x + 1",
      "t = x²",
      "t = 2x",
      "t = x⁴"
    ],
    c: 1
  },
  {
    q: "2ˣ = 16 теңдеуінің шешімі?",
    a: ["4", "8", "2", "16"],
    c: 0
  },
  {
    q: "log₂x = 3 теңдеуінің шешімі?",
    a: ["3", "6", "8", "9"],
    c: 2
  },
  {
    q: "Алмастыру әдісінде алдымен не істейміз?",
    a: [
      "График саламыз",
      "Екі теңдеуді квадраттаймыз",
      "Түбірді жоямыз",
      "Бір айнымалыны өрнектейміз"
    ],
    c: 3
  },
  {
    q: "x + y = 7, x − y = 1 жүйесінде x нешеге тең?",
    a: ["3", "4", "5", "6"],
    c: 1
  },
  {
    q: "Алгебралық қосу әдісінің мақсаты?",
    a: [
      "Бір айнымалыны жою",
      "Жаңа түбір қосу",
      "Логарифм алу",
      "Негізді өзгерту"
    ],
    c: 0
  },
  {
    q: "Түбірді тексеру неліктен қажет?",
    a: [
      "Ұпай алу",
      "Жауапты көбейту",
      "Бөгде түбірді алып тастау",
      "Таймерді тоқтату"
    ],
    c: 2
  },
  {
    q: "x² − 5x + 6 = 0 теңдеуінің түбірлері?",
    a: [
      "1 және 6",
      "−2 және −3",
      "−1 және −6",
      "2 және 3"
    ],
    c: 3
  },
  {
    q: "Екі белгісізі бар жүйенің шешімі қандай түрде жазылады?",
    a: [
      "Тек x",
      "(x;y) жұбы",
      "Тек y",
      "Пайыз"
    ],
    c: 1
  },
  {
    q: "2x + y = 8, x − y = 1 жүйесінің шешімі?",
    a: [
      "(3;2)",
      "(2;3)",
      "(4;1)",
      "(1;4)"
    ],
    c: 0
  },
  {
    q: "Теңдеуді шешудің соңғы қадамы?",
    a: [
      "Айнымалыны өшіру",
      "Есепті тоқтату",
      "Түбірді тексеріп, жауап жазу",
      "Бөлімді нөлге бөлу"
    ],
    c: 2
  }
];

// =====================================================
// 5. ҮЙ ЖҰМЫСЫ
// =====================================================

const homework = [
  {
    title: "1. Теңдеулерді әртүрлі тәсілмен шешу",

    text:
      "Бірінші теңдеуді көбейткіштерге жіктеп, екіншісін жаңа айнымалы енгізіп, үшіншісін логарифмнің анықтамасымен шешіңдер. Әр түбірді тексеріңдер.",

    formulas: [
      M`x^2-8x+15=0`,
      M`x^4-17x^2+16=0`,
      M`\log_3(x-2)=3`
    ]
  },

  {
    title: "2. Теңдеулер жүйелері",

    text:
      "Бірінші жүйені алмастыру әдісімен, екіншісін алгебралық қосу әдісімен шешіңдер. Жауаптарды бастапқы жүйелерге қойып тексеріңдер.",

    formulas: [
      M`\begin{cases}x+y=13\\x-y=3\end{cases}`,
      M`\begin{cases}3x+2y=19\\x+y=7\end{cases}`
    ]
  },

  {
    title: "3. Теориялық тапсырма",

    text:
      "«Теңдеулерді шешудің жалпы әдістері» тақырыбында 10 сөйлемдік конспект жазыңдар. Әр тәсілдің қандай жағдайда қолданылатынын түсіндіріңдер. Келесі сабақта бір есепті тақтада қорғаңдар.",

    formulas: [
      M`A(x)B(x)=0`,
      M`\begin{cases}a_1x+b_1y=c_1\\a_2x+b_2y=c_2\end{cases}`
    ]
  }
];

// =====================================================
// 6. 37 СЛАЙДТЫ ҚҰРУ
// =====================================================

const slides = [
  { type: "intro", title: "Кіріспе" }
];

theory.forEach((item, i) => {
  slides.push({
    type: "theory",
    index: i,
    title: `Түсіндірме ${i + 1}`
  });
});

notes.forEach((item, i) => {
  slides.push({
    type: "note",
    index: i,
    title: `Конспект ${i + 1}`
  });
});

levels.forEach((item, i) => {
  slides.push({
    type: "level",
    index: i,
    title: `${i + 1}-деңгей`
  });
});

quiz.forEach((item, i) => {
  slides.push({
    type: "game",
    index: i,
    title: `${i % 3 + 1}-топ • ${i + 1}-сұрақ`
  });
});

slides.push(
  { type: "homework", title: "Үй жұмысы" },
  { type: "finish", title: "Қорытынды" }
);

// =====================================================
// 7. САЙТТЫҢ АЙНЫМАЛЫЛАРЫ
// =====================================================

let page = 0;
let individualScore = 0;
let teamScores = [0, 0, 0];

const levelAnswers = new Map();
const completed = new Set();
const gameAnswers = new Map();

const TOTAL_SECONDS = 4800;

let remainingSeconds = TOTAL_SECONDS;
let timerID = null;
let deadline = 0;

// =====================================================
// 8. HTML МӘТІНДЕРІН ҚОРҒАУ
// =====================================================

function safe(value) {
  return String(value).replace(
    /[&<>"']/g,
    char => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[char]
  );
}

// =====================================================
// 9. ФОРМУЛАЛАР
// =====================================================

// Математикалық таңбалар HTML арқылы бұзылмауы
// үшін оларды data-tex ішінде сақтаймыз.
//
// \boxed қолданылмайды.

function math(tex) {
  const encoded = encodeURIComponent(String(tex));

  return `
    <div class="math" data-tex="${encoded}"></div>
  `;
}

// =====================================================
// 10. MATHJAX АРҚЫЛЫ ФОРМУЛА КӨРСЕТУ
// =====================================================

let formulaVersion = 0;
let formulaQueue = Promise.resolve();

function drawFormulas() {
  const version = ++formulaVersion;

  const elements = Array.from(
    $("content").querySelectorAll(".math[data-tex]")
  ).filter(el => !el.closest("[hidden]"));

  // Кітапхана жүктелмесе формула жоғалмайды.
  elements.forEach(el => {
    const encoded = el.getAttribute("data-tex");

    if (!encoded) return;

    el.textContent = decodeURIComponent(encoded);
    el.classList.add("fallback");
  });

  formulaQueue = formulaQueue
    .then(async () => {
      if (!window.MathJax) return;

      await MathJax.startup.promise;

      if (
        typeof MathJax.tex2svgPromise !== "function"
      ) {
        return;
      }

      for (const el of elements) {
        if (version !== formulaVersion) return;
        if (!el.isConnected) continue;

        const encoded = el.getAttribute("data-tex");

        if (!encoded) continue;

        const tex = decodeURIComponent(encoded);

        try {
          const svg = await MathJax.tex2svgPromise(
            tex,
            { display: true }
          );

          if (version !== formulaVersion) return;
          if (!el.isConnected) continue;

          el.replaceChildren(svg);
          el.classList.remove("fallback");
          el.removeAttribute("data-tex");

        } catch (error) {
          el.textContent = tex;
          el.classList.add("fallback");

          console.error("Формула қатесі:", tex, error);
        }
      }
    })
    .catch(error => {
      console.error("MathJax қатесі:", error);
    });
}

// =====================================================
// 11. КАРТОЧКА ЖӘНЕ ШЕШУ ҚАДАМДАРЫ
// =====================================================

function card(color, title, body) {
  return `
    <section class="card ${color}">
      <h3>${safe(title)}</h3>
      ${body}
    </section>
  `;
}

function stepsHTML(steps) {
  return steps.map((step, i) => `
    <div class="step">
      <strong>${i + 1}-қадам</strong>
      ${math(step)}
    </div>
  `).join("");
}

// =====================================================
// 12. КОНСПЕКТТЕГІ ӨЗІНДІК ЕСЕПТЕР
// =====================================================

function selfHTML(tasks, noteIndex) {
  return tasks.map((task, i) => {
    const id = `self_${noteIndex}_${i}`;

    return `
      <section class="self-task">

        <h3>${i + 1}-өзіндік есеп</h3>

        ${math(task.q)}

        <p>
          Алдымен есепті дәптерге шығарыңдар.
          Содан кейін шешу жолын тексеріңдер.
        </p>

        <button
          class="action"
          data-toggle="${id}">
          Шешу жолын көрсету
        </button>

        <div
          class="solution"
          id="${id}"
          hidden>

          ${stepsHTML(task.steps)}

          <h3>Дұрыс жауап</h3>

          ${math(task.answer)}

        </div>

      </section>
    `;
  }).join("");
}

// =====================================================
// 13. КІРІСПЕ
// =====================================================

function introHTML() {
  return `
    <div class="slide">

      <div class="eyebrow">
        МАТЕМАТИКА • 1 КУРС • 80 МИНУТ
      </div>

      <h1 class="gradient">
        §20. ${safe(lesson.title)}
      </h1>

      ${card("blue", "Сабақтың мақсаты", `
        <p>${safe(lesson.goal)}</p>
      `)}

      ${card("gold", "Көбейткіштерге жіктеу",
        math(M`A(x)B(x)=0`)
      )}

      ${card("purple", "Теңдеулер жүйесі",
        math(M`\begin{cases}x+y=7\\x-y=1\end{cases}`)
      )}

      ${card("green", "Сабақ бөлімдері", `
        <p>5 теориялық түсіндірме</p>
        <p>10 конспект және 20 өзіндік есеп</p>
        <p>4 деңгейдегі 20 есеп</p>
        <p>3 командаға арналған 15 ойын сұрағы</p>
        <p>Үй жұмысы және қорытынды</p>
      `)}

      ${card("blue", "80 минуттық жоспар", `
        <p>Кіріспе — 5 минут</p>
        <p>Теория — 20 минут</p>
        <p>Конспект — 15 минут</p>
        <p>Деңгейлік есептер — 20 минут</p>
        <p>Командалық ойын — 15 минут</p>
        <p>Үй жұмысы және қорытынды — 5 минут</p>
      `)}

    </div>
  `;
}

// =====================================================
// 14. ТЕОРИЯЛЫҚ СЛАЙД
// =====================================================

function theoryHTML(i) {
  const t = theory[i];

  return `
    <div class="slide">

      <div class="eyebrow">
        ТҮСІНДІРМЕ ${i + 1} / 5
      </div>

      <h2>${safe(t.title)}</h2>

      ${card("blue", "Анықтама", `
        <p>${safe(t.definition)}</p>
      `)}

      ${card("purple", "Толық түсіндірме", `
        <p>${safe(t.explain)}</p>
      `)}

      ${card("green", "Негізгі ереже", `
        <p>${safe(t.rule)}</p>
      `)}

      ${card("gold", "Формула",
        math(t.formula)
      )}

      ${card("green", "Шығарылған мысал",
        stepsHTML(t.steps)
      )}

      ${card("red", "Маңызды ескерту", `
        <p>${safe(t.warning)}</p>
      `)}

    </div>
  `;
}

// =====================================================
// 15. КОНСПЕКТ СЛАЙДЫ
// =====================================================

function noteHTML(i) {
  const n = notes[i];

  return `
    <div class="slide">

      <div class="eyebrow">
        КОНСПЕКТ ${i + 1} / 10
      </div>

      <h2>${safe(n.title)}</h2>

      <div class="notebook">
        <h3>Дәптерге жазып алыңдар</h3>
        <p>${safe(n.text)}</p>
      </div>

      ${card("gold", "Негізгі формула",
        math(n.formula)
      )}

      ${card("green", "Шығарылған мысал",
        stepsHTML(n.example)
      )}

      <div class="eyebrow">
        ӨЗІНДІК ЖҰМЫС
      </div>

      <h2>Екі есеп</h2>

      ${selfHTML(n.self, i)}

    </div>
  `;
}

// =====================================================
// 16. ДЕҢГЕЙЛІК ЕСЕПТЕР
// =====================================================

function levelHTML(i) {
  const level = levels[i];

  return `
    <div class="slide">

      <div class="eyebrow">
        ДЕҢГЕЙ ${i + 1} / 4
      </div>

      <h2>${safe(level.name)}</h2>

      <div class="level-header">
        <span>5 есеп</span>
        <span>
          Әр дұрыс жауап: +${level.points} ұпай
        </span>
      </div>

      <p>
        Әр есепті алдымен дәптерге шығарыңдар.
        Содан кейін төрт жауаптың бірін таңдаңдар.
      </p>

      <div class="level-grid">

        ${level.tasks.map((t, j) => {
          const key = `${i}_${j}`;
          const saved = levelAnswers.get(key);

          return `
            <section class="level-task">

              <h3>${j + 1}-есеп</h3>

              ${math(t.q)}

              <div class="answers">

                ${t.options.map((option, k) => {
                  let cls = "";

                  if (saved !== undefined) {
                    if (k === t.correct) {
                      cls = "correct";
                    } else if (k === saved) {
                      cls = "wrong";
                    }
                  }

                  return `
                    <button
                      data-task="${key}"
                      data-option="${k}"
                      class="${cls}"
                      ${saved !== undefined ? "disabled" : ""}>

                      ${"ABCD"[k]}. ${safe(option)}

                    </button>
                  `;
                }).join("")}

              </div>

              <p class="feedback ${
                saved === t.correct ? "correct" : ""
              }">

                ${saved === undefined
                  ? "Дұрыс жауапты таңдаңдар."
                  : saved === t.correct
                    ? `Дұрыс! +${level.points} ұпай`
                    : "Қате. Дұрыс жауап белгіленді."}

              </p>

              <button
                class="action"
                data-toggle="solution_${key}">
                Шешу жолын көрсету
              </button>

              <div
                class="solution"
                id="solution_${key}"
                hidden>

                ${stepsHTML(t.steps)}

                <h3>Дұрыс жауап</h3>

                <p>${safe(t.options[t.correct])}</p>

              </div>

            </section>
          `;
        }).join("")}

      </div>

    </div>
  `;
}

// =====================================================
// 17. КОМАНДАЛЫҚ ОЙЫН
// =====================================================

function gameHTML(i) {
  const q = quiz[i];

  const activeTeam = i % 3;
  const chosen = gameAnswers.get(i);

  return `
    <div class="slide">

      <div class="eyebrow">
        КОМАНДАЛЫҚ ОЙЫН ${i + 1} / 15
      </div>

      <h2>${activeTeam + 1}-топ жауап береді</h2>

      <div class="scores">

        ${teamScores.map((score, j) => `
          <div class="team ${
            j === activeTeam ? "current" : ""
          }">

            ${j + 1}-топ

            <strong>${score}</strong>

          </div>
        `).join("")}

      </div>

      ${card("gold", `${i + 1}-сұрақ`, `

        <p>${safe(q.q)}</p>

        <div class="answers">

          ${q.a.map((option, j) => {
            let cls = "";

            if (chosen !== undefined) {
              if (j === q.c) {
                cls = "correct";
              } else if (j === chosen) {
                cls = "wrong";
              }
            }

            return `
              <button
                data-choice="${j}"
                class="${cls}"
                ${chosen !== undefined ? "disabled" : ""}>

                ${"ABCD"[j]}. ${safe(option)}

              </button>
            `;
          }).join("")}

        </div>

        <p>

          ${chosen === undefined
            ? "Төрт жауаптың біреуін таңдаңдар."
            : chosen === q.c
              ? "Дұрыс! +10 ұпай."
              : "Дұрыс жауап: " + safe(q.a[q.c])}

        </p>

      `)}

      ${card("blue", "Ойын ережесі", `
        <p>Кезек: 1-топ → 2-топ → 3-топ.</p>
        <p>Әр дұрыс жауапқа 10 ұпай беріледі.</p>
        <p>Жауаптан соң «Келесі» батырмасын басыңдар.</p>
      `)}

    </div>
  `;
}

// =====================================================
// 18. ҮЙ ЖҰМЫСЫ
// =====================================================

function homeworkHTML() {
  return `
    <div class="slide">

      <div class="eyebrow">
        ҮЙ ТАПСЫРМАСЫ
      </div>

      <h2>Үй жұмысы</h2>

      ${homework.map((h, i) => card(
        ["blue", "gold", "green"][i],
        h.title,

        `<p>${safe(h.text)}</p>` +
        h.formulas.map(math).join("")
      )).join("")}

    </div>
  `;
}

// =====================================================
// 19. ҚОРЫТЫНДЫ
// =====================================================

function finishHTML() {
  const maximum = Math.max(...teamScores);

  const winners = teamScores
    .map((score, i) =>
      score === maximum ? `${i + 1}-топ` : null
    )
    .filter(Boolean);

  const gameFinished =
    gameAnswers.size === quiz.length;

  return `
    <div class="slide">

      <div class="eyebrow">
        САБАҚ ҚОРЫТЫНДЫСЫ
      </div>

      <h1 class="gradient">
        Сабақ аяқталды!
      </h1>

      <div class="scores">

        ${teamScores.map((score, i) => `
          <div class="team">

            ${i + 1}-топ

            <strong>${score}</strong>

          </div>
        `).join("")}

      </div>

      ${card("green", "Командалық ойын нәтижесі", `

        <p>
          Жауап берілген сұрақтар:
          ${gameAnswers.size} / 15
        </p>

        <p>
          ${gameFinished
            ? winners.join(", ") +
              (winners.length === 1
                ? " — жеңімпаз!"
                : " — тең ұпай жинады!")
            : "Ойын әлі толық аяқталмаған."}
        </p>

      `)}

      ${card("blue", "Деңгейлік тапсырмалар", `

        <p>
          Жауап берілген есептер:
          ${levelAnswers.size} / 20
        </p>

        <p>
          Дұрыс шешілген есептер:
          ${completed.size} / 20
        </p>

        <p>
          Жеке ұпай: ${individualScore}
        </p>

      `)}

      ${card("gold", "Бүгін не үйрендік?", `
        <p>Теңдеулерді көбейткіштерге жіктедік.</p>
        <p>Мәндес түрлендірулерді қолдандық.</p>
        <p>Жаңа айнымалы енгіздік.</p>
        <p>Жүйелерді алмастыру әдісімен шештік.</p>
        <p>Алгебралық қосу тәсілін қолдандық.</p>
        <p>Түбірлерді тексеруді үйрендік.</p>
      `)}

      <h2>Сау болыңыздар!</h2>

    </div>
  `;
}

// =====================================================
// 20. ЖАЛПЫ ҰПАЙ
// =====================================================

function updateScore() {
  const totalTeams = teamScores.reduce(
    (sum, score) => sum + score,
    0
  );

  $("totalScore").textContent =
    individualScore + totalTeams;
}

// =====================================================
// 21. СЛАЙДТЫ КӨРСЕТУ
// =====================================================

function render() {
  const s = slides[page];

  // Ескі формулалардың кезегін тоқтату
  formulaVersion++;

  const views = {
    intro: () => introHTML(),
    theory: () => theoryHTML(s.index),
    note: () => noteHTML(s.index),
    level: () => levelHTML(s.index),
    game: () => gameHTML(s.index),
    homework: () => homeworkHTML(),
    finish: () => finishHTML()
  };

  const content = $("content");

  content.innerHTML = views[s.type]();
  content.scrollTop = 0;

  $("pageCounter").textContent =
    `${page + 1} / ${slides.length}`;

  $("pageTitle").textContent = s.title;

  $("pageProgress").style.width =
    `${(page + 1) / slides.length * 100}%`;

  $("prevPage").disabled = page === 0;

  $("nextPage").disabled =
    page === slides.length - 1;

  document.querySelectorAll("[data-section]")
    .forEach(btn => {
      btn.classList.toggle(
        "active",
        btn.dataset.section === s.type
      );
    });

  updateScore();
  drawFormulas();
}

// =====================================================
// 22. КЕЛЕСІ / АРТҚА
// =====================================================

$("nextPage").addEventListener("click", () => {
  if (page < slides.length - 1) {
    page++;
    render();
  }
});

$("prevPage").addEventListener("click", () => {
  if (page > 0) {
    page--;
    render();
  }
});

// =====================================================
// 23. БӨЛІМГЕ ӨТУ
// =====================================================

document.querySelectorAll("[data-section]")
  .forEach(btn => {
    btn.addEventListener("click", () => {
      const index = slides.findIndex(
        s => s.type === btn.dataset.section
      );

      if (index !== -1) {
        page = index;
        render();
      }
    });
  });

// =====================================================
// 24. ІШКІ БАТЫРМАЛАР
// =====================================================

$("content").addEventListener("click", event => {

  // Шешу жолын ашу және жабу
  const toggle = event.target.closest("[data-toggle]");

  if (toggle) {
    const element = $(toggle.dataset.toggle);

    if (element) {
      element.hidden = !element.hidden;

      // Жасырын тұрған формулалар ашылғанда
      // MathJax арқылы қайта көрсетіледі.
      if (!element.hidden) {
        drawFormulas();
      }
    }

    return;
  }

  // Деңгейлік жауап
  const taskButton = event.target.closest("[data-task]");

  if (taskButton) {
    const key = taskButton.dataset.task;
    const option = Number(
      taskButton.dataset.option
    );

    if (levelAnswers.has(key)) return;

    const [i, j] = key.split("_").map(Number);
    const currentTask = levels[i].tasks[j];

    levelAnswers.set(key, option);

    if (option === currentTask.correct) {
      completed.add(key);
      individualScore += levels[i].points;
    }

    render();
    return;
  }

  // Командалық жауап
  const choice = event.target.closest("[data-choice]");

  if (choice) {
    const currentSlide = slides[page];

    if (currentSlide.type !== "game") return;

    const index = currentSlide.index;

    if (gameAnswers.has(index)) return;

    const answer = Number(choice.dataset.choice);

    gameAnswers.set(index, answer);

    if (answer === quiz[index].c) {
      teamScores[index % 3] += 10;
    }

    render();
  }
});

// =====================================================
// 25. КОМАНДАЛЫҚ ОЙЫНДЫ ЖАҢАРТУ
// =====================================================

$("resetGame").addEventListener("click", () => {
  gameAnswers.clear();

  teamScores = [0, 0, 0];

  // Деңгейлік есептердің ұпайы сақталады.
  render();
});

// =====================================================
// 26. ТОЛЫҚ ЭКРАН
// =====================================================

$("fullscreenBtn").addEventListener(
  "click",
  async () => {
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        await document.documentElement.requestFullscreen();
      }
    } catch (error) {
      console.warn("Толық экран қатесі:", error);
    }
  }
);

// =====================================================
// 27. 80 МИНУТТЫҚ ТАЙМЕР
// =====================================================

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return (
    String(minutes).padStart(2, "0") +
    ":" +
    String(secs).padStart(2, "0")
  );
}

function updateTimer() {
  $("remaining").textContent =
    formatTime(remainingSeconds);

  $("elapsed").textContent =
    formatTime(TOTAL_SECONDS - remainingSeconds);

  $("timeProgress").style.width =
    `${(TOTAL_SECONDS - remainingSeconds) /
      TOTAL_SECONDS * 100}%`;
}

function pauseTimer() {
  if (timerID !== null) {
    remainingSeconds = Math.max(
      0,
      Math.ceil((deadline - Date.now()) / 1000)
    );

    clearInterval(timerID);
    timerID = null;

    updateTimer();
  }
}

function startTimer() {
  if (timerID !== null || remainingSeconds <= 0) {
    return;
  }

  deadline = Date.now() + remainingSeconds * 1000;

  timerID = setInterval(() => {
    remainingSeconds = Math.max(
      0,
      Math.ceil((deadline - Date.now()) / 1000)
    );

    updateTimer();

    if (remainingSeconds === 0) {
      clearInterval(timerID);
      timerID = null;
    }
  }, 250);
}

function resetTimer() {
  if (timerID !== null) {
    clearInterval(timerID);
    timerID = null;
  }

  remainingSeconds = TOTAL_SECONDS;
  deadline = 0;

  updateTimer();
}

$("timerStart").addEventListener(
  "click",
  startTimer
);

$("timerPause").addEventListener(
  "click",
  pauseTimer
);

$("timerReset").addEventListener(
  "click",
  resetTimer
);

// =====================================================
// 28. АЛМАТЫ УАҚЫТЫ
// =====================================================

function updateClock() {
  $("clock").textContent =
    new Intl.DateTimeFormat("kk-KZ", {
      timeZone: "Asia/Almaty",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    }).format(new Date());
}

updateClock();
setInterval(updateClock, 1000);

// =====================================================
// 29. КАЛЬКУЛЯТОРЛАР
// =====================================================

const calcValues = {
  basic: "",
  science: ""
};

const calcKeys = {
  basic: [
    "C", "⌫", "(", ")",
    "7", "8", "9", "÷",
    "4", "5", "6", "×",
    "1", "2", "3", "−",
    "%", "0", ".", "+",
    "="
  ],

  science: [
    "C", "⌫", "(", ")",
    "sin", "cos", "tan", "ctg",
    "√", "∛", "x²", "xʸ",
    "log", "ln", "π", "e",
    "7", "8", "9", "÷",
    "4", "5", "6", "×",
    "1", "2", "3", "−",
    "%", "0", ".", "+",
    "="
  ]
};

const calcMap = {
  "×": "*",
  "÷": "/",
  "−": "-",
  "sin": "sin(",
  "cos": "cos(",
  "tan": "tan(",
  "ctg": "ctg(",
  "√": "sqrt(",
  "∛": "cbrt(",
  "log": "log(",
  "ln": "ln(",
  "π": "pi",
  "x²": "^2",
  "xʸ": "^"
};

// =====================================================
// 30. КАЛЬКУЛЯТОР БАТЫРМАЛАРЫН ҚҰРУ
// =====================================================

function createCalculator(type) {
  const grid = $("keys-" + type);

  grid.replaceChildren();

  calcKeys[type].forEach(key => {
    const btn = document.createElement("button");

    btn.type = "button";
    btn.textContent = key;

    if (key === "C") {
      btn.classList.add("clear");
    }

    if (key === "=") {
      btn.classList.add("equal");
    }

    if ([
      "sin", "cos", "tan", "ctg", "log", "ln"
    ].includes(key)) {
      btn.classList.add("trig");
    }

    if ([
      "+", "−", "×", "÷",
      "√", "∛", "x²", "xʸ"
    ].includes(key)) {
      btn.classList.add("op");
    }

    btn.addEventListener("click", () => {
      pressCalculator(type, key);
    });

    grid.appendChild(btn);
  });
}

// =====================================================
// 31. КАЛЬКУЛЯТОРДЫ БАСҚАРУ
// =====================================================

function pressCalculator(type, key) {
  let value = calcValues[type];

  if (key === "C") {
    value = "";

  } else if (key === "⌫") {
    value = value === "Қате"
      ? ""
      : value.slice(0, -1);

  } else if (key === "=") {
    try {
      const result = calculate(value);

      value = String(
        Number(result.toPrecision(12))
      );
    } catch (error) {
      value = "Қате";
    }

  } else {
    if (value === "Қате") {
      value = "";
    }

    value += calcMap[key] ?? key;
  }

  calcValues[type] = value;

  const display = $("display-" + type);

  display.textContent = value || "0";
  display.scrollLeft = display.scrollWidth;
}

// =====================================================
// 32. ҚАУІПСІЗ МАТЕМАТИКАЛЫҚ ЕСЕПТЕУ
// eval() ПАЙДАЛАНЫЛМАЙДЫ
// =====================================================

function calculate(input) {
  const source = String(input)
    .replace(/\s+/g, "")
    .replace(/,/g, ".")
    .replace(/−/g, "-")
    .replace(/×/g, "*")
    .replace(/÷/g, "/");

  let pos = 0;

  const rad = x => x * Math.PI / 180;

  const funcs = {
    sin: x => Math.sin(rad(x)),
    cos: x => Math.cos(rad(x)),

    tan: x => {
      if (Math.abs(Math.cos(rad(x))) < 1e-12) {
        throw Error("Тангенс анықталмаған");
      }

      return Math.tan(rad(x));
    },

    ctg: x => {
      if (Math.abs(Math.sin(rad(x))) < 1e-12) {
        throw Error("Котангенс анықталмаған");
      }

      return Math.cos(rad(x)) / Math.sin(rad(x));
    },

    sqrt: x => Math.sqrt(x),
    cbrt: x => Math.cbrt(x),
    log: x => Math.log10(x),
    ln: x => Math.log(x)
  };

  function take(char) {
    if (source[pos] === char) {
      pos++;
      return true;
    }

    return false;
  }

  function atom() {
    if (take("(")) {
      const value = expression();

      if (!take(")")) {
        throw Error("Жақша жабылмаған");
      }

      return value;
    }

    const rest = source.slice(pos);

    const number = rest.match(
      /^(?:\d+\.?\d*|\.\d+)/
    );

    if (number) {
      pos += number[0].length;

      return Number(number[0]);
    }

    for (const name of Object.keys(funcs)) {
      if (rest.startsWith(name + "(")) {
        pos += name.length + 1;

        const argument = expression();

        if (!take(")")) {
          throw Error("Жақша жабылмаған");
        }

        const result = funcs[name](argument);

        if (!Number.isFinite(result)) {
          throw Error("Функция анықталмаған");
        }

        return result;
      }
    }

    if (rest.startsWith("pi")) {
      pos += 2;
      return Math.PI;
    }

    if (rest.startsWith("e")) {
      pos++;
      return Math.E;
    }

    throw Error("Қате математикалық өрнек");
  }

  function postfix() {
    let value = atom();

    while (take("%")) {
      value /= 100;
    }

    return value;
  }

  function power() {
    let value = postfix();

    if (take("^")) {
      value = Math.pow(value, unary());
    }

    return value;
  }

  function unary() {
    if (take("+")) return unary();
    if (take("-")) return -unary();

    return power();
  }

  function term() {
    let value = unary();

    while (true) {
      if (take("*")) {
        value *= unary();

      } else if (take("/")) {
        const divisor = unary();

        if (divisor === 0) {
          throw Error("Нөлге бөлуге болмайды");
        }

        value /= divisor;

      } else {
        break;
      }
    }

    return value;
  }

  function expression() {
    let value = term();

    while (true) {
      if (take("+")) {
        value += term();

      } else if (take("-")) {
        value -= term();

      } else {
        break;
      }
    }

    return value;
  }

  if (!source) {
    throw Error("Бос өрнек");
  }

  const result = expression();

  if (
    pos !== source.length ||
    !Number.isFinite(result)
  ) {
    throw Error("Есептеу қатесі");
  }

  return Math.abs(result) < 1e-12 ? 0 : result;
}

// =====================================================
// 33. КАЛЬКУЛЯТОРДЫ АШУ / ЖАБУ
// =====================================================

function toggleCalculator(type) {
  const element = $("calc-" + type);

  const opening =
    !element.classList.contains("visible");

  element.classList.toggle("visible", opening);

  if (opening) {
    const rect = element.getBoundingClientRect();

    const maxX = Math.max(
      0,
      window.innerWidth - element.offsetWidth
    );

    const maxY = Math.max(
      0,
      window.innerHeight - element.offsetHeight
    );

    element.style.left =
      Math.max(0, Math.min(maxX, rect.left)) + "px";

    element.style.top =
      Math.max(0, Math.min(maxY, rect.top)) + "px";
  }
}

$("basicOpen").addEventListener("click", () => {
  toggleCalculator("basic");
});

$("scienceOpen").addEventListener("click", () => {
  toggleCalculator("science");
});

document.querySelectorAll("[data-close]")
  .forEach(btn => {
    btn.addEventListener("click", () => {
      $("calc-" + btn.dataset.close)
        .classList.remove("visible");
    });
  });

// =====================================================
// 34. ЖЫЛЖЫМАЛЫ КАЛЬКУЛЯТОР
// =====================================================

function makeDraggable(element) {
  const handle = element.querySelector(".calc-head");

  let drag = null;

  handle.addEventListener("pointerdown", event => {
    if (event.target.closest("button")) return;

    if (
      event.pointerType === "mouse" &&
      event.button !== 0
    ) {
      return;
    }

    const rect = element.getBoundingClientRect();

    drag = {
      id: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      left: rect.left,
      top: rect.top
    };

    handle.setPointerCapture(event.pointerId);
  });

  handle.addEventListener("pointermove", event => {
    if (!drag || drag.id !== event.pointerId) {
      return;
    }

    const maxX = Math.max(
      0,
      window.innerWidth - element.offsetWidth
    );

    const maxY = Math.max(
      0,
      window.innerHeight - element.offsetHeight
    );

    const nextLeft =
      drag.left + event.clientX - drag.x;

    const nextTop =
      drag.top + event.clientY - drag.y;

    element.style.left =
      Math.max(0, Math.min(maxX, nextLeft)) + "px";

    element.style.top =
      Math.max(0, Math.min(maxY, nextTop)) + "px";
  });

  handle.addEventListener("pointerup", () => {
    drag = null;
  });

  handle.addEventListener("pointercancel", () => {
    drag = null;
  });
}

// =====================================================
// 35. БАҒДАРЛАМА ҚҰРЫЛЫМЫН ТЕКСЕРУ
// =====================================================

function runChecks() {
  function test(condition, message) {
    if (!condition) {
      throw new Error(message);
    }
  }

  test(theory.length === 5, "5 түсіндірме қажет");

  test(notes.length === 10, "10 конспект қажет");

  test(
    notes.every(n => n.self.length === 2),
    "20 өзіндік есеп қажет"
  );

  test(levels.length === 4, "4 деңгей қажет");

  test(
    levels.every(l => l.tasks.length === 5),
    "20 деңгейлік есеп қажет"
  );

  test(quiz.length === 15, "15 ойын сұрағы қажет");

  test(slides.length === 37, "37 слайд қажет");

  levels.forEach((level, i) => {
    level.tasks.forEach((t, j) => {
      test(
        t.options.length === 4,
        `${i + 1}-деңгей, ${j + 1}-есеп: жауап саны`
      );

      test(
        Number.isInteger(t.correct) &&
        t.correct >= 0 &&
        t.correct < 4,
        `${i + 1}-деңгей, ${j + 1}-есеп: жауап индексі`
      );
    });
  });

  quiz.forEach((q, i) => {
    test(
      q.a.length === 4 &&
      Number.isInteger(q.c) &&
      q.c >= 0 &&
      q.c < 4,
      `${i + 1}-ойын сұрағы қате`
    );
  });

  test(calculate("2^5") === 32, "Дәреже қатесі");
  test(calculate("log(100)") === 2, "log қатесі");
  test(calculate("ln(e)") === 1, "ln қатесі");
  test(calculate("8/4") === 2, "Бөлу қатесі");

  test(
    Math.abs(calculate("sin(30)") - 0.5) < 1e-10,
    "Тригонометрия қатесі"
  );

  // Бұрын қате болған IV деңгейдің 4-есебі
  const corrected = levels[3].tasks[3];

  test(
    corrected.correct === 0 &&
    corrected.options[0] === "(3;4)",
    "IV деңгейдегі 4-есеп дұрыс белгіленбеген"
  );

  const formulas = [
    ...theory.flatMap(t => [
      t.formula,
      ...t.steps
    ]),

    ...notes.flatMap(n => [
      n.formula,
      ...n.example,

      ...n.self.flatMap(s => [
        s.q,
        ...s.steps,
        s.answer
      ])
    ]),

    ...levels.flatMap(l =>
      l.tasks.flatMap(t => [
        t.q,
        ...t.steps
      ])
    ),

    ...homework.flatMap(h => h.formulas)
  ];

  test(
    formulas.every(f => typeof f === "string"),
    "Формула мәтіні дұрыс емес"
  );

  test(
    formulas.every(f => !f.includes("\\boxed")),
    "Формулада boxed командасы табылды"
  );

  console.log(
    "§20: бағдарламаның бастапқы тексерулері орындалды."
  );
}

// =====================================================
// 36. САЙТТЫ ІСКЕ ҚОСУ
// =====================================================

runChecks();

createCalculator("basic");
createCalculator("science");

makeDraggable($("calc-basic"));
makeDraggable($("calc-science"));

updateTimer();
render();
