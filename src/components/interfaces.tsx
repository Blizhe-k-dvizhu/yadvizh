export interface loginInterface{
  showLoginModal?: React.Dispatch<React.SetStateAction<boolean>>
}

export interface event {
  id: number,
  name: string,
  desc?: string,
  img: string,
  tags?: Array<number>,
  geo?: [number, number, string],
  date: Date,
  warnings?: Array<boolean>,
  marked?: boolean,
  src?: string,
}

export interface placeData {
  id: number,
  name: string,
  geo: Array<number>,
  tag: Array<tag>,
}

export const tagColorsByType = [
    "#FE7259",
    "#F6CB00",
    "#ACD7D9",
    "#007A7B"
]

export interface tag {
  id: number,
  name: string,
  logo: string,
  color: number,
}

export const tags: tag[] = [
  {
    id: 0,
    name: "Выставка",
    logo: "/assets/tagsIcons/выставка.png",
    color: 0,
  },
  {
    id: 1,
    name: "Туризм",
    logo: "/assets/tagsIcons/туризм.png",
    color: 0,
  },
  {
    id: 2,
    name: "Мастер-классы",
    logo: "/assets/tagsIcons/мастер-классы.png",
    color: 0,
  },
  {
    id: 3,
    name: "Юмор",
    logo: "/assets/tagsIcons/юмор.png",
    color: 0,
  },
  {
    id: 4,
    name: "Дискотека",
    logo: "/assets/tagsIcons/дискотека.png",
    color: 0,
  },
  {
    id: 5,
    name: "Музыка",
    logo: "/assets/tagsIcons/музыка.png",
    color: 0,
  },
  {
    id: 6,
    name: "Спорт",
    logo: "/assets/tagsIcons/спорт.png",
    color: 0,
  },
  {
    id: 7,
    name: "Соревнования",
    logo: "/assets/tagsIcons/соревнования.png",
    color: 0,
  },
  {
    id: 8,
    name: "Медитация",
    logo: "/assets/tagsIcons/медитация.png",
    color: 0,
  },
  {
    id: 9,
    name: "Искусство",
    logo: "/assets/tagsIcons/искусство.png",
    color: 1,
  },
  {
    id: 10,
    name: "IT",
    logo: "/assets/tagsIcons/it.png",
    color: 1,
  },
  {
    id: 11,
    name: "Настольные игры",
    logo: "/assets/tagsIcons/настольные игры.png",
    color: 1,
  },
  {
    id: 12,
    name: "Психология",
    logo: "/assets/tagsIcons/психология.png",
    color: 1,
  },
  {
    id: 13,
    name: "Театр",
    logo: "/assets/tagsIcons/театр.png",
    color: 1,
  },
  {
    id: 14,
    name: "Музей",
    logo: "/assets/tagsIcons/музей.png",
    color: 1,
  },
  {
    id: 15,
    name: "Киберспорт",
    logo: "/assets/tagsIcons/киберспорт.png",
    color: 1,
  },
  {
    id: 16,
    name: "Животные",
    logo: "/assets/tagsIcons/животные.png",
    color: 1,
  },
  {
    id: 17,
    name: "Игры",
    logo: "/assets/tagsIcons/игры.png",
    color: 2,
  },
  {
    id: 18,
    name: "Наука",
    logo: "/assets/tagsIcons/наука.png",
    color: 2,
  },
  {
    id: 19,
    name: "Рисование",
    logo: "/assets/tagsIcons/рисование.png",
    color: 2,
  },
  {
    id: 20,
    name: "Встреча",
    logo: "/assets/tagsIcons/встреча.png",
    color: 2,
  },
  {
    id: 21,
    name: "Технологии",
    logo: "/assets/tagsIcons/технологии.png",
    color: 2,
  },
  {
    id: 22,
    name: "Вечеринка",
    logo: "/assets/tagsIcons/вечеринка.png",
    color: 2,
  },
  {
    id: 23,
    name: "Лекция",
    logo: "/assets/tagsIcons/лекция.png",
    color: 3,
  },
  {
    id: 24,
    name: "Квартирник",
    logo: "/assets/tagsIcons/квартирник.png",
    color: 3,
  },
  {
    id: 25,
    name: "Танцы",
    logo: "/assets/tagsIcons/танцы.png",
    color: 3,
  },
  {
    id: 26,
    name: "Кино",
    logo: "/assets/tagsIcons/кино.png",
    color: 3,
  },
  {
    id: 27,
    name: "Экстрим",
    logo: "/assets/tagsIcons/экстрим.png",
    color: 3,
  },
  {
    id: 28,
    name: "Телевидение",
    logo: "/assets/tagsIcons/телевидение.png",
    color: 3,
  },
  {
    id: 29,
    name: "Поэзия",
    logo: "/assets/tagsIcons/поэзия.png",
    color: 3,
  },
  {
    id: 30,
    name: "Красота",
    logo: "/assets/tagsIcons/красота.png",
    color: 3,
  },
  {
    id: 31,
    name: "Мода",
    logo: "/assets/tagsIcons/мода.png",
    color: 3,
  },
]

export const TestData: event[] = [
  {
      "id": 0,
      "name": "Танцы в Декабристе",
      "desc": "Вечеринка на летней площадке с директором кафе",
      "img": "https://sun9-54.userapi.com/impg/rQ9VuzxvgopSwQuQLyus4fnONs1z7H4mSR1chw/86WC1-zSuwU.jpg?size=1080x1350&quality=96&sign=9d5378d8554fc1701ef27a3550f45ee7&type=album",
      "tags": [0, 10],
      "geo": [50.599880, 36.587016, "Белгород, Народный бульвар, д. 75А"],
      "date": new Date(1626638400000),
      "warnings": [true, true, false], 
      "marked": true
  },
  {
      "id": 1,
      "name": "ALLO!BAND",
      "desc": "Встречайте в эти выходные ALLO!BAND в PINK HORSE BAR",
      "img": "https://sun9-24.userapi.com/impg/0Fd5ymIGyfW8i7C7_Kbd2ySEQt3ZlnhS493v-g/ujriPV-lI40.jpg?size=864x1080&quality=96&sign=712f4b214f9730acd46230236d346133&type=album",
      "tags": [10],
      "geo": [50.587363, 36.583782, "Pink horse bar, Железнодорожная, 8б"],
      "date": new Date(1626465600000),
      "warnings": [true, false, true], 
      "marked": false
  },
  {
      "id": 2,
      "name": "CS:GO 5х5 турнир",
      "desc": "Любительские турниры и матчи по CS:GO в формате 5 на 5",
      "img": "https://www.cybersport.ru/material/social/image/fb/561135",
      "tags": [6, 5],
      "date": new Date(1626811200000),
      "warnings": [true, true, false],
      "marked": true
  },
  {
      "id": 3,
      "name": "ВИА ЖИГУЛИ",
      "desc": "Музыкальные хулиганы. Делаем кавера на то, что вы любите. Нас объединяет любовь ко всем жанрам музыки. Мы совмещаем несовмещаемое. Такие кавера на любимые песни вы точно не слышали. Мы с огромной радостью их покажем, а вы не сможете усидеть на месте.",
      "img": "https://sun9-24.userapi.com/impg/0Fd5ymIGyfW8i7C7_Kbd2ySEQt3ZlnhS493v-g/ujriPV-lI40.jpg?size=864x1080&quality=96&sign=712f4b214f9730acd46230236d346133&type=album",
      "tags": [10],
      "geo": [50.587363, 36.583782, "Pink horse bar, Железнодорожная, 8б"],
      "date": new Date(1626811200000),
      "warnings": [true, false, true], 
      "marked": false
  },
  {
      "id": 4,
      "name": "Чемпионат по бир-понгу",
      "desc": "Бир-понг — алкогольная игра, в которой игроки бросают мяч для настольного тенниса (пинг-понга) через стол, стремясь попасть им в кружку или стакан с пивом, стоящий на другом конце этого стола. Приходи, сражайся, побеждай и пей!",
      "img": "https://sun9-6.userapi.com/impg/XQB-mKcT8eSc1tKfN7aY-NxclW6IVDH5x7rbxQ/8ePkV5-A6iA.jpg?size=864x1080&quality=96&sign=293c6c643793015dce627577ded94551&type=album",
      "tags": [0, 10],
      "geo": [50.577130, 36.583755, "Белгород, ул. Ватутина, д. 5Б"],
      "date": new Date(1626811200000),
      "warnings": [true, false, true], 
      "marked": true
  },
  {
      "id": 5,
      "name": "DJ-сет",
      "desc": "Представляем беспрецедентный уникальный вечер, состоящий из из 8 DJ танцевальных сетов от трендсеттеров современной российской электронной музыки, которые пройдет впервые в Белгороде.",
      "img": "https://sun9-6.userapi.com/impg/XQB-mKcT8eSc1tKfN7aY-NxclW6IVDH5x7rbxQ/8ePkV5-A6iA.jpg?size=864x1080&quality=96&sign=293c6c643793015dce627577ded94551&type=album",
      "tags": [0, 10],
      "geo": [50.577130, 36.583755, "Белгород, ул. Ватутина, д. 5Б"],
      "date": new Date(1626552000000),
      "warnings": [true, true, false], 
      "marked": true
  },
  {
      "id": 6,
      "name": "Влад Вата поет под акустику",
      "desc": "Песни под гитару о том, что наболело. Авторские и по настроению. Атмосфера квартирника.",
      "img": "https://sun9-6.userapi.com/impg/XQB-mKcT8eSc1tKfN7aY-NxclW6IVDH5x7rbxQ/8ePkV5-A6iA.jpg?size=864x1080&quality=96&sign=293c6c643793015dce627577ded94551&type=album",
      "tags": [0, 10],
      "geo": [50.577130, 36.583755, "Белгород, ул. Ватутина, д. 5Б"],
      "date": new Date(1626552000000),
      "warnings": [true, true, false], 
      "marked": true
  },
  {
      "id": 7,
      "name": "Акустика от Влада Ваты",
      "desc": "В эту пятницу готовьтесь хорошенько потанцевать и хором попеть свои любимые песни — у нас в гостях Влад Вата. Начинаем в восемь вечера. Гастробар Сидрерия.",
      "img": "https://sun9-25.userapi.com/impg/GC7N0kfzYVsh2ZMi5_H2-Iu2h5IOh1DKnjH1nA/I78J9HrvGbc.jpg?size=864x1080&quality=96&sign=8dc0c8296623b09e76a5a264a53eabbb&type=album",
      "tags": [0, 10],
      "geo": [50.578886, 36.585444, "Белгород, ул. Костюкова, 36 Г"],
      "date": new Date(1626811200000),
      "warnings": [true, true, false], 
      "marked": true
  },
  {
      "id": 8,
      "name": "Кавер группа Дети Аполлона",
      "desc": "Много ваших любимых песен, много музыки, много хорошего настроения. Начинаем в восемь вечера",
      "img": "https://sun9-25.userapi.com/impg/GC7N0kfzYVsh2ZMi5_H2-Iu2h5IOh1DKnjH1nA/I78J9HrvGbc.jpg?size=864x1080&quality=96&sign=8dc0c8296623b09e76a5a264a53eabbb&type=album",
      "tags": [0, 10],
      "geo": [50.578886, 36.585444, "Белгород, ул. Костюкова, 36 Г"],
      "date": new Date(1626552000000),
      "warnings": [true, true, false], 
      "marked": true
  },
  {
      "id": 9,
      "name": "Акустика от Маши Кюри",
      "desc": "Сегодня у нас в гостях Мария Кюри. Ваши любимые песни в сопровождении гитары и ударных. Встречаемся в восемь",
      "img": "https://sun9-25.userapi.com/impg/GC7N0kfzYVsh2ZMi5_H2-Iu2h5IOh1DKnjH1nA/I78J9HrvGbc.jpg?size=864x1080&quality=96&sign=8dc0c8296623b09e76a5a264a53eabbb&type=album",
      "tags": [0, 10],
      "geo": [50.578886, 36.585444, "Белгород, ул. Костюкова, 36 Г"],
      "date": new Date(1626638400000),
      "warnings": [true, true, false], 
      "marked": true
  },
  {
      "id": 10,
      "name": "Концерт группы Incredible Flames и хип-хоп танцы от 'Четрые/четверти'",
      "desc": "Incredible Flames объединили свои силы с самыми неугомонными Hip-Hop танцорами Белгорода. Уже не терпится прогреметь на веранде на весь парк победы вместе с новыми треками. Приходи и танцуй! Начало 20:00. С репостом: 250₽. Без: 300₽.",
      "img": "https://sun9-69.userapi.com/impg/8Ca1hv03QY2uD1OyCFp_nqkpO-ptexTEf1UPmg/9OmPKJPDchk.jpg?size=864x1080&quality=96&sign=9bc846f4912bcdb455a1518e09d03276&type=album",
      "tags": [0, 10],
      "geo": [50.592515, 36.580297, "Кластер 'Мануфактура', Белгород, ул. Победы, 83Б"],
      "date": new Date(1626811200000),
      "warnings": [true, false, true], 
      "marked": true
  },
  {
      "id": 11,
      "name": "Stand-Up | Человек у микрофона",
      "desc": "Открытый Микрофон - это комедийное мероприятие, на котором со своим материалом может выступить любой желающий, а опытные комики проверяют свои новые шутки",
      "img": "https://sun9-69.userapi.com/impg/8Ca1hv03QY2uD1OyCFp_nqkpO-ptexTEf1UPmg/9OmPKJPDchk.jpg?size=864x1080&quality=96&sign=9bc846f4912bcdb455a1518e09d03276&type=album",
      "tags": [0, 10],
      "geo": [50.592515, 36.580297, "Кластер 'Мануфактура', Белгород, ул. Победы, 83Б"],
      "date": new Date(1626552000000),
      "warnings": [true, false, false],
      "marked": true
  },
  {
      "id": 12,
      "name": "Музыкальынй вечер",
      "desc": "Завтра встречаемся перед рабочим днём и расслабляемся под хорошую музыку, наслаждаясь летним вечерком. После 20:00 будем слушать сет с мелодичным хаусом от DWM.",
      "img": "https://sun9-69.userapi.com/impg/8Ca1hv03QY2uD1OyCFp_nqkpO-ptexTEf1UPmg/9OmPKJPDchk.jpg?size=864x1080&quality=96&sign=9bc846f4912bcdb455a1518e09d03276&type=album",
      "tags": [0, 10],
      "geo": [50.592515, 36.580297, "Кластер 'Мануфактура', Белгород, ул. Победы, 83Б"],
      "date": new Date(1626638400000),
      "warnings": [true, false, true],
      "marked": true
  },
  {
      "id": 13,
      "name": "Открытие UNDER CLUB. Группа 'Недры'.",
      "desc": "Клуб нового формата, мультипространство с професиональным звуковым световым оборудование качественными напитками, прекрасными людьми. UNDER CLUB. Ну что, двигаемся дальше! Теперь открываемся официально и с одним из главных мерпориятий этого лета! Которое обязательно к посещению. В эту субботу в 19:00 мы откроем двери. Билет еще стоит 500р, запись в группе КАРМА. Лайн-ап богат на яркий и качественный звук. Будут все) FC/DC/18+",
      "img": "https://sun9-32.userapi.com/impg/eaWWVnzTHXGtOIwiqfTLxgtR-9usDU9_XlQ2Sg/MuwTazt57PE.jpg?size=864x1080&quality=96&sign=de27f90f802f4316abc03ec1db2d8668&type=album",
      "tags": [0, 10],
      "geo": [50.632600, 36.570891, "Мегагрин"],
      "date": new Date(1626552000000),
      "warnings": [true, false, true],
      "marked": true
  },
  {
      "id": 14,
      "name": "Творческий вечер поэта Руслана Шишкина",
      "desc": "День Рожденья это брызги шампанского, дружеские улыбки, подарочки ихорошие стихи. 16 июня приглашаем всех любителейпоэзии на творческий вечер поэта Руслана Шишкина вчесть Дня Рождения. Сольная программа и выступления друзей. Вход свободный. Подарки до начала вечера не откупоривать.",
      "img": "https://sun9-29.userapi.com/impg/bo2viiBgBv18KhVF1eUygMVw58cBLWpZ0AD5BQ/SBblxURiQvE.jpg?size=864x1080&quality=96&sign=9adf0de532d8b74138297260deef8f76&type=album",
      "tags": [11, 9],
      "geo": [50.592515, 36.580297, "Кластер 'Мануфактура', Белгород, ул. Победы, 83Б"],
      "date": new Date(1626897600000),
      "warnings": [false, false, false],
      "marked": true
  }
]
