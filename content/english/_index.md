---
########################### hero slider ############################
hero_slider:
  enable : true
  slider_item:
    # slider item
    - subtitle : "GitHub Education у ТНТУ"
      title : "Навчайся з інструментами <br>світових лідерів"
      content : "Приєднуйся до понад 2000+ університетів світу, які використовують GitHub у навчанні. 
      Отримай безкоштовний доступ до професійних інструментів розробки для студентів та викладачів ТНТУ."
      bg_image_webp : "images/slider/schools-GitHub-Education.webp"
      bg_image : "images/slider/schools-GitHub-Education.jpeg"
      animation : "fadeInUp" # animation select from : https://daneden.github.io/animate.css/
      button:
        enable : true
        label : "приєднатися"
        link : "#about"
        animation : "zoomIn" # animation select from : https://daneden.github.io/animate.css/

    # slider item
    - subtitle : "Student Developer Pack"
      title : "Безкоштовні інструменти <br>для студентів"
      content : "GitHub Copilot, GitHub Codespaces, GitHub Actions та десятки інших професійних сервісів — безкоштовно для кожного студента ТНТУ ім. І. Пулюя."
      bg_image_webp : "images/slider/GitHub-home.webp"
      bg_image : "images/slider/GitHub-home.jpeg"
      animation : "fadeInLeft" # animation select from : https://daneden.github.io/animate.css/
      button:
        enable : true
        label : "отримати доступ"
        link : "events/"
        animation : "zoomIn" # animation select from : https://daneden.github.io/animate.css/

    # slider item
    - subtitle : "GitHub Classroom"
      title : "Співпраця між <br>кафедрами та факультетами"
      content : "Автоматизуй зворотний зв'язок, керуй завданнями та роби навчання динамічнішим. 
      GitHub Classroom об'єднує студентів та викладачів усіх структурних підрозділів ТНТУ."
      bg_image_webp : "images/slider/GitHub-teachers.webp"
      bg_image : "images/slider/GitHub-teachers.webp"
      animation : "fadeInRight" # animation select from : https://daneden.github.io/animate.css/
      button:
        enable : true
        label : "дізнатися більше"
        link : "events/"
        animation : "zoomIn" # animation select from : https://daneden.github.io/animate.css/

################################## banner feature ############################
banner_feature:
  enable : true
  # Max use 4 item
  feature_item:
    # banner feature item loop
    - name : "Покращ свої технічні навички"
      icon : "fas fa-graduation-cap" # font-awesome 5 : https://fontawesome.com/icons/
      content : "Опануй сучасні практики індустрії з передовими інструментами GitHub."

    # banner feature item loop
    - name : "GitHub Copilot безкоштовно"
      icon : "fas fa-robot" # font-awesome 5 : https://fontawesome.com/icons/
      content : "AI-асистент для написання коду — доступний кожному студенту ТНТУ."

    # banner feature item loop
    - name : "Співпраця у всьому кампусі"
      icon : "fas fa-users" # font-awesome 5 : https://fontawesome.com/icons/
      content : "Працюй над проектами разом зі студентами та викладачами всіх факультетів."


################################## about ####################################
about:
  enable : true
  subtitle : "Приєднуйся до GitHub Education"
  title : "Розблокуй пристрасть до навчання разом з GitHub"

  content : "<b>GitHub Education у ТНТУ ім. І. Пулюя</b> — це твій шлях до реальних навичок розробки програмного забезпечення. 
  Приєднуйся до тисяч освітніх закладів по всьому світу, які вже користуються безкоштовними ресурсами GitHub Education.
  <br><br>
  <b>Що отримують студенти ТНТУ:</b><br>
  • <b>GitHub Copilot</b> — AI-помічник для написання коду<br>
  • <b>GitHub Codespaces</b> — хмарне середовище розробки<br>
  • <b>GitHub Actions</b> — автоматизація CI/CD процесів<br>
  • <b>Student Developer Pack</b> — набір з десятків безкоштовних сервісів
  <br><br>
  Кафедри програмної інженерії, комп'ютерних наук, автоматизації та кібербезпеки ТНТУ вже інтегрували GitHub у навчальний процес. 
  Долучайся до технічних спільнот нашого кампусу та розвивай свої навички разом з однодумцями!
  <br><br>
  <b>Офіційна GitHub-сторінка ТНТУ:</b> <a href='https://github.com/Ternopil-National-Technical-University' target='_blank'>github.com/Ternopil-National-Technical-University</a>"

  bg_image : "images/backgrounds/about-us-bg.png"
  bg_image_webp : "images/backgrounds/about-us-bg.webp"
  image_webp : "images/about/technical_communities.webp"
  image : "images/about/technical_communities.jpeg"
  button:
    enable : true
    label : "зареєструватись"
    link : "https://education.github.com/pack"

################################## funfacts ###############################
funfacts :
  enable : true
  funfacts_item :
    # fanfacts item loop
    - name : "Кафедр ТНТУ в програмі"
      count : "6"
      icon : "fas fa-university" # font-awesome 5 : https://fontawesome.com/icons/

    # fanfacts item loop
    - name : "Університетів у світі використовують GitHub"
      count : "2000"
      icon : "fas fa-globe" # font-awesome 5 : https://fontawesome.com/icons/

    # fanfacts item loop
    - name : "Студентів та викладачів ТНТУ з доступом"
      count : "350"
      icon : "fas fa-user-graduate" # font-awesome 5 : https://fontawesome.com/icons/

    # fanfacts item loop
    - name : "Безкоштовних інструментів у Student Pack"
      count : "100"
      icon : "fas fa-tools" # font-awesome 5 : https://fontawesome.com/icons/


################################# feature ############################################
feature:
  enable : true
  subtitle : "Можливості для студентів"
  title : "Що дає GitHub Education студентам ТНТУ"
  image_webp : "images/about/GitHub-education-settings-banner-background.png"
  image : "images/about/GitHub-education-settings-banner-background.png"
  content : ""
  feature_item:
    # feature item loop
    - name : "GitHub Enterprise — безкоштовно для ТНТУ"
      icon : "fas fa-building" # font-awesome 5 : https://fontawesome.com/icons/
      content : "Впроваджуй GitHub Enterprise Server та Cloud у своєму навчанні для доступу до розширених інструментів.
      <br><br> 
      - <b>GitHub Actions:</b> Налаштовуй автоматизацію збірки, тестування та деплою своїх проектів — як у реальних IT-компаніях.<br>
      - <b>GitHub Codespaces:</b> Запускай повноцінне середовище розробки прямо в браузері за секунди. Не потрібно встановлювати нічого локально.<br>
      - <b>GitHub Copilot:</b> AI-асистент, який допомагає писати код швидше, пропонуючи автодоповнення та цілі функції.
      <br><br>
      <b>Технічні спільноти ТНТУ:</b> Формуй різноманітні технічні спільноти на кампусі через систему підтримки GitHub — тренінги та менторство для твого зростання та інновацій.
      <br><br>
      <b>Тренінги для викладачів:</b> Підтримай своїх викладачів, допомагаючи інтегрувати Git та GitHub у їхній педагогічний інструментарій через самостійні відео-уроки та практичні завдання."


################################# events ############################################
events:
  enable : true
  section: "events"
  show_item : 3
  button:
    enable : true
    label : "всі події"
    link : "events/"
  # event items come from "content/*/events" folder

################################# blog ################################################
cta:
  enable : true
  title : "Приєднуйся до глобальної спільноти розробників — стань частиною GitHub Education у ТНТУ!"
  bg_image_webp : "images/backgrounds/GitHub-home.webp"
  bg_image : "images/backgrounds/GitHub-home.jpeg"
  button:
    enable : true
    label : "отримати Student Developer Pack"
    link : "https://education.github.com/pack"


################################# team ##############################################
team:
  enable : false
  section: "team"
  show_item : 3
  # team member comes from "content/*/team" folder

    
################################# testimonial #########################################
testimonial:
  enable : false
  subtitle : "Testimonials"
  title : "What Clients Are Say?"
  testimonial_item:
    # testimonial item loop
    - client_image : "images/testimonial/client-1.jpg"
      name : "Dominic Allen"
      designation : "Designer"
      content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed eiusmod tempor incididunt ut labore dolore magna aliqua.enim ad minim veniam.quis nostrud exercitation ullamco laboris nis aliquip ex ea commodo consequat. duis aute irure dolor in reprehen."
      
    # testimonial item loop
    - client_image : "images/testimonial/client-2.jpg"
      name : "Alex Pitt"
      designation : "Designer"
      content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed eiusmod tempor incididunt ut labore dolore magna aliqua.enim ad minim veniam.quis nostrud exercitation ullamco laboris nis aliquip ex ea commodo consequat. duis aute irure dolor in reprehen."

    # testimonial item loop
    - client_image : "images/testimonial/client-3.jpg"
      name : "John Doe"
      designation : "Designer"
      content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed eiusmod tempor incididunt ut labore dolore magna aliqua.enim ad minim veniam.quis nostrud exercitation ullamco laboris nis aliquip ex ea commodo consequat. duis aute irure dolor in reprehen."

################################# partners #########################################
partners:
  enable : false
  subtitle : "PARTNERS"
  title : "Our Strategic Partners"
  partners_item:
    
      
    # partners item loop
    - partner_logo : ""
      name : ""
      description : ""    
      
    # partners item loop
    - partner_logo : ""
      name : "n"
      description : ""    
      
    # partners item loop
    - partner_logo : ""
      name : ""
      description : ""
  
      
################################# blog ################################################
blog:
  enable : false
  section : "blog"
  show_item : 3
  # blog post comes from "content/*/blog" folder

################################# contacts ################################################
contact:
  enable : false
  image : "images/globe.jpg"

  form_fields:
    # form item
    - id: "name"
      label: "Name"
      type: input
      input_type: text
      placeholder: "Name *"
      name: "entry.1111111111"
      maxlength: 255
      required: true

    # form item
    - id:  "email"
      label: "Email"
      type: input
      input_type: email
      placeholder: "Email *"
      name: "emailAddress"
      pattern: '^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$'
      maxlength: 255
      required: true

    # form item
    - id:  "confirm_email"
      label: "Confirm Email"
      type: input
      input_type: email
      placeholder: "Confirm Email *"
      name: ""
      pattern: '^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$'
      maxlength: 255
      required: false
      hidden: true

    # form item
    - id:  "phone"
      label: "Telephone"
      type: input
      input_type: text
      placeholder: "Telephone"
      name: ""
      maxlength: 15
      required: false

    # form item
    - id:  "subject"
      label: "Subject"
      type: input
      input_type: text
      placeholder: "Subject"
      name: ""
      maxlength: 255
      required: false

    # form item
    - id:  "message"
      label: "Message"
      type: textarea
      input_type: text
      placeholder: "Your Message *"
      name: ""
      maxlength: 400
      required: true

    # form item
    - id : "language"
      label: "Language"
      type: select
      input_type: text
      placeholder: "Language"
      name: ""
      required: false
      hidden: true
      default: "EN"

---
